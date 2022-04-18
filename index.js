//importamos las classes.
import {Cliente} from "./Cliente.js";
import { Cuenta } from "./cuenta.js";
import { CuentaAhorro } from "./CuentaAhorros.js";
import { CuentaCorriente } from "./CuentaCorriente.js";


const cliente = new Cliente("Leonardo","851234","9366423");
const cliente2= new Cliente("Maria","12345","9366345");


const CuentaDeLeonardo = new CuentaCorriente("001",cliente,"1");
const CuentaDeMaria = new CuentaCorriente("002",cliente2,"2");
const CuentaAhorroLeonardo = new CuentaAhorro("001",cliente,"998");

const CuentaSimple = new Cuenta("003",cliente,"3");
console.log(CuentaSimple);
