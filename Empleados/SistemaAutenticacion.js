export class SistemaAutenticacion{
    static login(usuario,clave){
        if("autenticable" in usuario && usuario.autenticable instanceof Function)//verificamos tanto si es un metodo como si es un atributo.
            return usuario.autenticable(clave);
        else
            return false;
    }
}
