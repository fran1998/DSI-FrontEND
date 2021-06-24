import { Cargo } from "../cargo/Cargo";
import { Sede } from "../sede/sede.module";
import { HorarioEmpleado } from "./HorarioEmpleado";

export class Empleado {
    apellido: string;
    codigoVerificacion: number;
    cuit: number;
    dni: number;
    domicilio: string;
    fechaIngreso: Date;
    fechaNacimiento: Date;
    mail:string;
    nombre:string;
    sexo:string;
    telefono: number;
    horarioEmpleado: HorarioEmpleado[];
    sedeDondeTrabaja: Sede;
    cargo: Cargo;
}