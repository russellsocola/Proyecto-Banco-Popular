//importamos las classes.
import {Cliente} from "./Cliente.js";
import { CuentaCorriente } from "./CuentaCorriente.js";

const cliente = new Cliente("Leonardo","851234","9366423");
const CuentaDeLeonardo = new CuentaCorriente("001",cliente,"1");

let saldo = CuentaDeLeonardo.verSaldo();
//console.log("El saldo en la cuenta de Leonardo es: "+saldo);
saldo= CuentaDeLeonardo.depositoEnCuenta(150);
//console.log("El saldo de Leonardo es: " + saldo);

const cliente2= new Cliente("Maria","12345","9366345");
const CuentaDeMaria = new CuentaCorriente("002",cliente2,"2");

console.log(CuentaDeMaria.cliente);
console.log(CuentaDeLeonardo.cliente)
console.log(CuentaCorriente.cantidadCuentas);