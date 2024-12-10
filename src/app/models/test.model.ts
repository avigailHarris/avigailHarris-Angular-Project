export class Test{
    id: number;
    date?: Date;
    description?: string;
    mark?: number;

    constructor(id: number, date?: Date,description?: string, mark?: number){
        this.id = id;
        this.description = description;
        this.date = date;
        this.mark = mark;
    }

}