export class Student {
    id: number;
    firstName?: string;
    lastName?: string;
    phone?: string;
    active?: boolean;
    marksAvg?: number;
    leaveDate?: Date;
  
    
    constructor(
      id: number = 0,            
      firstName?: string, 
      lastName?: string, 
      phone?: string, 
      active?: boolean, 
      marksAvg?: number, 
      leaveDate?: Date
    ) {
      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.phone = phone;
      this.active = active;
      this.marksAvg = marksAvg;
      this.leaveDate = leaveDate;
    }
  }
  