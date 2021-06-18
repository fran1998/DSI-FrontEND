import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { TipoVisitas } from '../Module/tipo-visita/tipo-visita.module';
@Injectable({
  providedIn: 'root'
})
export class MockTipoVisitaService {

  constructor() { }
  getNombre()
  {
    return of(TipoVisitas);
  }
}
