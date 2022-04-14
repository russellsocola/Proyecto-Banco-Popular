import { Cliente } from "./Cliente.js";
import { Cuenta } from "./cuenta.js";

export class CuentaCorriente extends Cuenta{
    
    static cantidadCuentas = 0;

    constructor(agencia,cliente,numeroDeCuenta){
        super(agencia,cliente,numeroDeCuenta,0);
        CuentaCorriente.cantidadCuentas++;
    }
    prueba(){
        super.prueba();
        console.log("metodo hijo");
    }
}