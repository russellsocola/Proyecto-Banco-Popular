//importamos las classes.
import {Cliente} from "./Cliente.js";
import { Cuenta } from "./cuenta.js";
import { CuentaAhorro } from "./CuentaAhorros.js";
import { CuentaCorriente } from "./CuentaCorriente.js";
import { CuentaNomina } from "./cuentaNomina.js";


const cliente = new Cliente("Leonardo","851234","9366423");
const cliente2= new Cliente("Maria","12345","9366345");


const CuentaDeLeonardo = new CuentaCorriente("001",cliente,"1");
const CuentaDeMaria = new CuentaCorriente("002",cliente2,"2");
const CuentaAhorroLeonardo = new CuentaAhorro("001",cliente,"998");
const CuentaNominaMaria = new CuentaNomina("004",cliente2,"997",0)

CuentaNominaMaria.depositoEnCuenta(250);
console.log(CuentaNominaMaria.verSaldo());

CuentaNominaMaria.retirarDeCuenta(50);
console.log(CuentaNominaMaria.verSaldo());


