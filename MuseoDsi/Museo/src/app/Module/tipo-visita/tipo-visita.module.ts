import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class TipoVisitaModule { 
  Id: number;
  Nombre: string;
}
export const TipoVisitas:TipoVisitaModule []= 
[
  {Id:1, Nombre:"Completa"},
  {Id:2, Nombre:"Por Exposicion"},
]; 
