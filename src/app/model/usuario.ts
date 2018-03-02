
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
        avatar: string = 'http://www.vpsleague.com/static/img/default-avatar.jpg',
        sexo: Sexo = Sexo.I

    ) {
        console.log('Usuario constructor');
        this.id = -1;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.avatar = avatar;
        this.sexo = sexo;

    }

    
}

export enum Sexo { M='Masculino', F='Femenino', I='Indeterminado'}