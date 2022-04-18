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
        if(this.constructor == Cuenta){//cuenta es una clase abstracta que solo puede ser exendida no instanciada
            throw new Error("No se debe instanciar objetos de la clase cuenta");
        }
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
    retirarDeCuenta(valor){
        //metodo abstracto;
        throw new Error("Debe implementar el metodo retirar de cuenta en su clase");
    }
    _retirarDeCuenta(valor,comision){
        valor= valor*(1+comision/100);
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