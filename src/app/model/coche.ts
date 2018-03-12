export class Coche {

    id: number;
    marca: string;
    modelo: string;
    version: string;
    foto: string;

    //caracteristicas
    puertas: number;
    caballos: number;
    consumo: number;


    constructor(marca: string, modelo: string,  version:string, foto:string, puertas:number, caballos:number, consumo:number ) {

        //this.id = -1; //si no se inicializa el json.server le asigan un valor autogenerado
        this.marca = marca;
        this.modelo= modelo;
        this.version = (version)? version : '';
        this.foto = (foto)? foto : '/assets/img/coche_default.jpg';
        
        this.puertas = puertas;
        this.caballos = caballos;
        this.consumo = consumo;

    }

}