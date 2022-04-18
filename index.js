//importamos las classes.
import {Cliente} from "./Cliente.js";
import { CuentaAhorro } from "./Cuentas/CuentaAhorros.js";
import { CuentaCorriente } from "./Cuentas/CuentaCorriente.js";
import { CuentaNomina } from "./Cuentas/cuentaNomina.js";
import { Director } from "./Empleados/Director.js";
import { Empleado } from "./Empleados/Empleado.js";
import { Gerente } from "./Empleados/Gerente.js";


const cliente = new Cliente("Leonardo","851234","9366423");
const cliente2= new Cliente("Maria","12345","9366345");

const empleado = new Empleado("Juan Perez",75198643,10000);
const gerente = new Gerente("Pedro Rivas",75198644,12000);
const director = new Director("Elena Moreno",75198645,15000);

console.log(empleado.verBonificacion());
console.log(gerente.verBonificacion());
console.log(director.verBonificacion());



