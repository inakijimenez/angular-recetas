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


    constructor(marca: string, modelo: string,  puertas:number, caballos:number, consumo:number, version?: string, foto?:string,) {

        this.id = -1;
        this.marca = marca;
        this.modelo= modelo;
        this.version = (version)? version : '';
        this.foto = (foto)? foto : '/assets/img/coche_default.jpg';
        
        this.puertas = puertas;
        this.caballos = caballos;
        this.consumo = consumo;

    }

}