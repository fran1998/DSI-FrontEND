import { Injectable } from '@angular/core';
import { escuelas } from '../Module/escuela/escuela.module';
import {of} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class MockEscuelaService {

  constructor() { }
  getNombre()
  {
    return of(escuelas);
  }
}
