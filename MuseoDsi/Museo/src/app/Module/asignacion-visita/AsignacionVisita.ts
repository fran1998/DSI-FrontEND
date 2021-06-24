import { Time } from "@angular/common";
import { Empleado } from "../empleado/Empleado";

export class AsignacionVisita {
    fechaFin: Date;
    horaFin: Time;
    fechaInicio: Date;
    horaInicio: Time;
    id: number;
    guiaAsignado: Empleado;
};