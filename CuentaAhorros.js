import { Cuenta } from "./cuenta.js";

export class CuentaAhorro extends Cuenta{
    constructor(agencia,cliente,numeroDeCuenta,saldo){
        super(agencia,cliente,numeroDeCuenta,saldo);
    }
    
}