import { Time } from '@angular/common';
import { Empleado } from '../empleado/Empleado';
import { PublicoDestino } from '../publico-destino/publico-destino.module';
import { TipoExposicion } from '../tipo-exposicion/tipo-exposicion.module';

export class Exposicion {
  id: number;
  nombre: string;
  fechaFin: Date;
  fechaFinReplanificada: Date;
  fechaInicio: Date;
  fechaInicioReplanificada: Date;
  horaApertura: Time;
  horaCierre: Time;
  publicoDestino?: PublicoDestino[];
  tipoExposicion?: TipoExposicion;
  empleado?: Empleado;
 }
 export const exposiciones: Exposicion [] =
 [
   {
    id: 1,
    nombre: "Arte Moderno",
    fechaFin: new Date('2010-01-21'),
    fechaInicio: new Date('2010-01-01'),
    fechaFinReplanificada: new Date('2011-05-12'),
    fechaInicioReplanificada: new Date('2010-11-27'),
    horaApertura: {hours: 8, minutes: 0},
    horaCierre: {hours: 16, minutes:0},
  },
  {
    id: 2,
    nombre: "Arte Natural",
    fechaFin: new Date('2010-01-21'),
    fechaInicio: new Date('2010-01-01'),
    fechaFinReplanificada: new Date('2011-05-12'),
    fechaInicioReplanificada: new Date('2010-11-27'),
    horaApertura: {hours: 8, minutes: 0},
    horaCierre: {hours: 16, minutes:0},
  },
  {
    id: 3,
    nombre: "Arte Abstracto",
    fechaFin: new Date('2010-01-21'),
    fechaInicio: new Date('2010-01-01'),
    fechaFinReplanificada: new Date('2011-05-12'),
    fechaInicioReplanificada: new Date('2010-11-27'),
    horaApertura: {hours: 8, minutes: 0},
    horaCierre: {hours: 16, minutes:0},
  },
  {
    id: 4,
    nombre: "Arte Literal",
    fechaFin: new Date('2020-01-21'),
    fechaInicio: new Date('2019-01-01'),
    fechaFinReplanificada: new Date('2011-05-12'),
    fechaInicioReplanificada: new Date('2010-11-27'),
    horaApertura: {hours: 8, minutes: 0},
    horaCierre: {hours: 16, minutes:0},
  },
  {
    id: 5,
    nombre: "Arte Clasico",
    fechaFin: new Date('2003-01-21'),
    fechaInicio: new Date('2002-01-01'),
    fechaFinReplanificada: new Date('2011-05-12'),
    fechaInicioReplanificada: new Date('2010-10-27'),
    horaApertura: {hours: 6, minutes: 0},
    horaCierre: {hours: 11, minutes:0},
  }
 ]