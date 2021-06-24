import { Exposicion } from "../exposicion/exposicion.module";

export class Sede { 
  nombre:string;
  id: number;
  cantMaximaVisitantes: number;
  cantMaxPorGuia: number;
  exposicion?: Exposicion[];
}
export const sede:Sede []= 
[
  {id:1, nombre:"Bs as",cantMaxPorGuia:21, cantMaximaVisitantes:120 },
  {id:2, nombre:"Cordoba",cantMaxPorGuia:11, cantMaximaVisitantes:112},
  {id:3, nombre:"Jujuy",cantMaxPorGuia:41, cantMaximaVisitantes:124},
  {id:4, nombre:"Santa Cruz",cantMaxPorGuia:1, cantMaximaVisitantes:20},
  {id:5, nombre:"La pampa",cantMaxPorGuia:10, cantMaximaVisitantes:50}
];
