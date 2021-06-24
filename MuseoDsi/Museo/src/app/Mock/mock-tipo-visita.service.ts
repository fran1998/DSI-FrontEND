import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { tipoVisitas } from '../Module/tipo-visita/tipo-visita.module';
@Injectable({
  providedIn: 'root'
})
export class MockTipoVisitaService {

  constructor() { }
  getNombre()
  {
    return of(tipoVisitas);
  }
}
