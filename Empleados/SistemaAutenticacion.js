export class SistemaAutenticacion{
    static login(empleado,clave){
        return empleado.Clave == clave;
    }
}
