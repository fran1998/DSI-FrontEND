import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class SedeModule { 
  Nombre:string;
  Id: number;
  CantMaximaVisitantes: number;
  CantMaxPorGuia: number;
}
export const Sede:SedeModule []= 
[
  {Id:1, Nombre:"Bs as",CantMaxPorGuia:21, CantMaximaVisitantes:120 },
  {Id:2, Nombre:"Cordoba",CantMaxPorGuia:11, CantMaximaVisitantes:112},
  {Id:3, Nombre:"Jujuy",CantMaxPorGuia:41, CantMaximaVisitantes:124},
  {Id:4, Nombre:"Santa Cruz",CantMaxPorGuia:1, CantMaximaVisitantes:20},
  {Id:5, Nombre:"La pampa",CantMaxPorGuia:10, CantMaximaVisitantes:50}
];
