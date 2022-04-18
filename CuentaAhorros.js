import { Cuenta } from "./cuenta.js";

export class CuentaAhorro extends Cuenta{
    constructor(agencia,cliente,numeroDeCuenta,saldo){
        super(agencia,cliente,numeroDeCuenta,saldo);
    }
    retirarDeCuenta(valor){
        super._retirarDeCuenta(200,2);
    }
}