export class Cuenta{
    #cliente;
    #saldo;

    constructor(tipo,agencia,cliente,numeroDeCuenta,saldo){
        this.tipo= tipo;
        this.#cliente = cliente;
        this.numeroDeCuenta = numeroDeCuenta;
        this.agencia= agencia;
        this.#saldo= saldo;
    }
    depositoEnCuenta(valor){
        if(valor>0){
            this.#saldo += valor;
            return this.#saldo;
        }
    }
    retiroDeCuenta(valor){
        if(this.tipo=="Corriente"){
            valor = valor*1.05;
        }else if (this.tipo == "Ahorro"){
            valor = valor*2
        }
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