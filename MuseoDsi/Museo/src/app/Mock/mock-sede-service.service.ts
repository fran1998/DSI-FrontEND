import { Injectable } from '@angular/core';
import { sede } from '../Module/sede/sede.module';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockSedeServiceService {

  constructor() { }
  getNombre()
  {
    return of(sede);
  }
}
