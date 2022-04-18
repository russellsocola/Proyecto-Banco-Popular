import { Cuenta } from "./cuenta.js";

export class CuentaNomina extends Cuenta{
    constructor(agencia,cliente,numeroDeCuenta,saldo){
        super(agencia,cliente,numeroDeCuenta,saldo);
    }
    retirarDeCuenta(valor){
        super._retirarDeCuenta(valor,1);
    }

}