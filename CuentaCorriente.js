import { Cliente } from "./Cliente.js";

export class CuentaCorriente{
    
    agencia;
    #cliente;
    numeroDeCuenta;
    #saldo;
    static cantidadCuentas = 0;

    set cliente(valor){
        if(valor instanceof Cliente)
        this.#cliente = valor;
        
    }
    get cliente(){
        return this.#cliente;
    }
    constructor(agencia,cliente,numeroDeCuenta){

        this.agencia= agencia;
        this.cliente= cliente;
        this.numeroDeCuenta= numeroDeCuenta;
        this.#saldo= 0;
        CuentaCorriente.cantidadCuentas++;
    }
    depositoEnCuenta(valor){
        if(valor>0){
            this.#saldo += valor;
            return this.#saldo;
        }
    }
    retiroDeCuenta(valor){
        if(valor<= this.#saldo){
            this.#saldo-=valor;
            return this.#saldo;
        }
    }
    verSaldo(){
        return this.#saldo;
    }
    transferirParaCuenta(valor,cuentaDestino){
        this.retiroDeCuenta(valor);
        cuentaDestino.depositoEnCuenta(valor);
    }
}