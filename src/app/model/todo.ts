//clase para encapsular los TODOs

export class Todo {

    id: number;
    userId: number;
    title: string;
    completed: boolean;

    constructor(title: string) {
        //this.id = -1; //no se inicializa el id para que el json.server lo autogenere
        this.userId = -1;
        this.title = title;
        this.completed = false;
    }

}