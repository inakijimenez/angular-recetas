import { Sexo } from '../model/sexoEnum'

export class Usuario {

    id: number;
    nombre: string;
    apellido: string;
    email: string;
    avatar: string;
    sexo: Sexo;


    constructor(
        nombre: string,
        apellido: string = 'Unknown',
        email: string = 'a@a.com',
        avatar: string = 'img',
        sexo: Sexo = Sexo.indeterminado

    ) {
        console.log('Usuario constructor');
        this.id = -1;
        
    }
}