import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class EscuelaModule {
  Nombre:string;
  Id : number;
 }
 export const Escuelas:EscuelaModule []= 
 [
   {Id:1, Nombre:"Manuel Belgrano"},
   {Id:2, Nombre:"Cordoba"},
   {Id:3, Nombre:"San salvador"},
   {Id:4, Nombre:"UTN"},
   {Id:5, Nombre:"UCC"}
 ];
