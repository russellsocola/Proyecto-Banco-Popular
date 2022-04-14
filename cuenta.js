export class Cuenta{
    #cliente;
    #saldo;
    set cliente(valor){
        if(valor instanceof Cliente)
        this.#cliente = valor;
    }
    get cliente(){
        return this.#cliente;
    }
    constructor(agencia,cliente,numeroDeCuenta,saldo){
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
    prueba(){
        console.log("metodo padre");
    }
}