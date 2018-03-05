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
        likes:number,
        cocinero: string,
        descripcion: string,
        isGlutenFree: boolean,
        ingredientes: string[]
    ) {
        console.log('Receta constructor');

        this.id = -1;
        this.nombre = nombre;
        this.img = (img) ? img : '/assets/img/receta_default.jpg';
        this.likes = 0;
        this.cocinero = cocinero;
        this.descripcion = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias odio, consequatur id aliquam earum qui laborum vitae eius nihil quaerat atque tenetur cupiditate aspernatur, nam ducimus suscipit! Aperiam, dignissimos vel!';
        this.isGlutenFree = false;
        this.ingredientes = [];

    }

    addIngrediente(ingrediente: string) {
        this.ingredientes.push(ingrediente);
    }
}
