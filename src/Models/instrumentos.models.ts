
export class Instrumentos{
     nombre: string;
     tipo: string;
     origen: string;
     precio: number;
     marca: string;
     id: number;

    constructor (nombre: string, tipo: string, origen: string, precio: number, marca: string, id: number){
       this.nombre = nombre;
       this.tipo = tipo;
       this.origen = origen;
       this.precio = precio;
       this.marca = marca;
       this.id = id;

     }

}