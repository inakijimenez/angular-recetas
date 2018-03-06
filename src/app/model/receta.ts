/* clase para encapsular los atributos de una receta */

export class Receta {

    id: number;
    nombre: string;
    img: string;
    descripcion: string;
    cocinero: string;
    likes: number;
    isGlutenFree: boolean;
    ingredientes: string[];

    constructor(
        id: number,
        nombre: string,
        img: string,
        descripcion: string,
        cocinero: string,
        likes:number,       
        isGlutenFree: boolean,
        ingredientes: string[]
    ) {
        console.log('Receta constructor');

        this.id = id;
        this.nombre = nombre;
        this.img = (img) ? img : '/assets/img/receta_default.jpg';
        this.likes = likes;
        this.cocinero = cocinero;
        this.descripcion = descripcion;
        this.isGlutenFree = isGlutenFree;
        this.ingredientes = ingredientes;

    }

    addIngrediente(ingrediente: string) {
        this.ingredientes.push(ingrediente);
    }
}
