//importamos las classes.
import {Cliente} from "./Cliente.js";
import { Cuenta } from "./cuenta.js";
//import { CuentaAhorro } from "./CuentaAhorros.js";
//import { CuentaCorriente } from "./CuentaCorriente.js";


const cliente = new Cliente("Leonardo","851234","9366423");
const cliente2= new Cliente("Maria","12345","9366345");


const CuentaDeLeonardo = new Cuenta("Corriente","001",cliente,"1",0);
const CuentaDeMaria = new Cuenta("Corriente","002",cliente2,"2",0);
const CuentaAhorroLeonardo = new Cuenta("Ahorro","001",cliente,"998",0);

console.log(CuentaDeLeonardo);
CuentaDeLeonardo.depositoEnCuenta(200);
console.log(CuentaDeLeonardo.verSaldo());
CuentaDeLeonardo.retiroDeCuenta(90);
console.log(CuentaDeLeonardo.verSaldo());
console.log(CuentaDeMaria);
console.log(CuentaAhorroLeonardo);