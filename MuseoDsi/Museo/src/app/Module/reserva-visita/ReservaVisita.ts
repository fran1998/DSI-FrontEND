import { Time } from "@angular/common";
import { AsignacionVisita } from "../asignacion-visita/AsignacionVisita";
import { Empleado } from "../empleado/Empleado";
import { Escuela } from "../escuela/escuela.module";
import { CambioEstado } from "../estados/CambioEstado";
import { Exposicion } from "../exposicion/exposicion.module";
import { Sede } from "../sede/sede.module";

export class ReservaVisita {

    cantidadAlumnos: number;
    cantidadAlumnosConfirmada: number;
    duracionEstimada: number;
    fechaCreacion: Date;
    horaCreacion: Time;
    horaInicioReal: Time;
    horaFinReal: Time;
    numeroReserva: number;
    escuela: Escuela;
    empleado: Empleado;
    asignacionGuia: AsignacionVisita[];
    exposicion: Exposicion[];
    sede: Sede;
    cambioEstado: CambioEstado[]


}