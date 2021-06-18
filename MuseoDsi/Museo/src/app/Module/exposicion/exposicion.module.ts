import { NgModule } from '@angular/core';
import { CommonModule, Time } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})

export class ExposicionModule {
  Nombre: string;
  FechaFin: Date;
  FechaFinReplanificada: Date;
  FechaInicio: Date;
  FechaInicioReplanificada: Date;
  HoraApertura: Time;
  HoraCierre: Time;
 }
 export const Exposiciones: ExposicionModule [] =
 [
   {Nombre: "Arte Moderno",
    FechaFin: new Date('2010-01-21'),
    FechaInicio: new Date('2010-01-01'),
    FechaFinReplanificada: new Date('2011-05-12'),
    FechaInicioReplanificada: new Date('2010-11-27'),
    HoraApertura: {hours: 8, minutes: 0},
    HoraCierre: {hours: 16, minutes:0},
  },
  {Nombre: "Arte Natural",
    FechaFin: new Date('2010-01-21'),
    FechaInicio: new Date('2010-01-01'),
    FechaFinReplanificada: new Date('2011-05-12'),
    FechaInicioReplanificada: new Date('2010-11-27'),
    HoraApertura: {hours: 8, minutes: 0},
    HoraCierre: {hours: 16, minutes:0},
  },
  {Nombre: "Arte Abstracto",
    FechaFin: new Date('2010-01-21'),
    FechaInicio: new Date('2010-01-01'),
    FechaFinReplanificada: new Date('2011-05-12'),
    FechaInicioReplanificada: new Date('2010-11-27'),
    HoraApertura: {hours: 8, minutes: 0},
    HoraCierre: {hours: 16, minutes:0},
  },
  {Nombre: "Arte Literal",
    FechaFin: new Date('2020-01-21'),
    FechaInicio: new Date('2019-01-01'),
    FechaFinReplanificada: new Date('2011-05-12'),
    FechaInicioReplanificada: new Date('2010-11-27'),
    HoraApertura: {hours: 8, minutes: 0},
    HoraCierre: {hours: 16, minutes:0},
  },
  {Nombre: "Arte Clasico",
    FechaFin: new Date('2003-01-21'),
    FechaInicio: new Date('2002-01-01'),
    FechaFinReplanificada: new Date('2011-05-12'),
    FechaInicioReplanificada: new Date('2010-10-27'),
    HoraApertura: {hours: 6, minutes: 0},
    HoraCierre: {hours: 11, minutes:0},
  }
 ]