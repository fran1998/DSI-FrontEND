import { Injectable } from '@angular/core';
import {of} from "rxjs";
import { Exposiciones } from '../Module/exposicion/exposicion.module';

@Injectable({
  providedIn: 'root'
})
export class MockExposicionService {

  constructor() { }

  getNombre()
  {
    return of(Exposiciones);
  }
  
}
