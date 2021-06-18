import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MockEscuelaService } from 'src/app/Mock/mock-escuela.service';
import { MockSedeServiceService } from 'src/app/Mock/mock-sede-service.service';
import { MockTipoVisitaService } from 'src/app/Mock/mock-tipo-visita.service';
import { EscuelaModule } from 'src/app/Module/escuela/escuela.module';
import { ExposicionModule } from 'src/app/Module/exposicion/exposicion.module';
import { SedeModule } from 'src/app/Module/sede/sede.module';
import { TipoVisitaModule } from 'src/app/Module/tipo-visita/tipo-visita.module';
import { EscuelaService } from 'src/app/Services/escuela.service';
import { SedeService } from 'src/app/Services/sede.service';
import { TipoVisitaService } from 'src/app/Services/tipo-visita.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  Escuela: EscuelaModule[]= [];
  Sede: SedeModule [] = [];
  TipoVisita: TipoVisitaModule [] = [];
  Exposiciones: ExposicionModule [] = []
  vistas = {
    E : "Vista Escuela",
    S : 'Vista Sede',
    C : "Vista Cantidad de Visitantes",
    T : 'Vista Tipo Visita',
    X : 'Vista Exposiciones Vigentes por Sede Seleccionada',
    R : 'Vista Fecha Hora reserva',
    G : 'Vista Guia para Reserva'
    };
  flagSiguiente: boolean = false;  
  vista = 'E';
  formRegistrarReserva: FormGroup;
  constructor(
    private sedeServices: SedeService,
    private mockServiceSede:MockSedeServiceService,
    private escuelaServices: EscuelaService,
    private mockServiceEscuela: MockEscuelaService,
    private mockServiceTipoVisita: MockTipoVisitaService,
    private tipoVisitaService: TipoVisitaService,
    public formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.obtenerEscuela();
    this.formRegistrarReserva = this.formBuilder.group(
      {
        Escuela: [null, [Validators.required]],
        Sede: [null, [Validators.required]],
        CantVisitantes: [null, [Validators.required]],
        TipoVisita: [null, [Validators.required]],
        FechaReserva: [null, [Validators.required]],
        HoraReserve: [null, [Validators.required]],
        Guias : [null,[Validators.required]]
      }
    );
  }
  obtenerSede()
  {
    this.mockServiceSede.getNombre().subscribe((res:SedeModule[]) => this.Sede = res);
    //this.sedeServices.get().subscribe((res: SedeModule[])=>this.Sede = res);
  }
  obtenerEscuela()
  {
    this.mockServiceEscuela.getNombre().subscribe((res:EscuelaModule[]) => this.Escuela = res);
    //this.escuelaServices.getNombre().subscribe((res: EscuelaModule[])=>this.Escuela = res);
  }
  obtenerTipoVisita()
  {
    this.mockServiceTipoVisita.getNombre().subscribe((res:TipoVisitaModule[]) => this.TipoVisita = res);
    //this.TipoVisitaService.get().subscribe((res: TipoVisitaModule[])=>this.TipoVisita = res);
  }
  obtenerExposicionesTemporalesDeSede()
  {
    return;
  }
  cambiarVista()
  {
    this.flagSiguiente = true;
    
    switch(this.vista)
    { 
      case 'E':
        if(!this.formRegistrarReserva.controls.Escuela.errors?.required)
        {
        this.obtenerSede();
        this.vista = 'S';
        break;
        }
        return;
      case 'S':
        if(!this.formRegistrarReserva.controls.Sede.errors?.required)
        {
        this.vista = 'C';
        break;
        }
        return;
      case 'C':
        if(!this.formRegistrarReserva.controls.CantVisitantes.errors?.required)
        {
        this.obtenerTipoVisita();
        this.vista = 'T';
        break;
        }
        return;
      case 'T':
        if(!this.formRegistrarReserva.controls.TipoVisita.errors?.required)
        {
        this.vista = 'X';
        break;
        }
        return;
      case 'X':
        if(!this.formRegistrarReserva.controls.Exposiciones.errors?.required)
        {
        this.obtenerExposicionesTemporalesDeSede();
        this.vista = 'R';
        break;
        }
        return;
      case 'R':
        if(!(this.formRegistrarReserva.controls.FechaReserva.errors?.required && this.formRegistrarReserva.controls.HoraReserva.errors?.required))
        {
        this.vista = 'G';
        break;
        }
        return;
        //Ver
      case 'G':
          if(!this.formRegistrarReserva.controls.Guias.errors?.required)
          {
          this.vista = 'A';
          break;
          }
          return;
      default:
        if(!this.formRegistrarReserva.invalid)
          {
            return;
          }
          return;
    }
    this.flagSiguiente = false;
  }
}
