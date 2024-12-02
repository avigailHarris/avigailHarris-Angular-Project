export class Student{
    id: number;
    firstName: string;
    lastName: string;
    address: string="";
    phone: string="";
    active: boolean;
    marksAvg: number
    
    constructor(id: number, firstName: string, lastName: string,  active: boolean, marksAvg: number) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.active = active;
        this.marksAvg = marksAvg;
    }
}