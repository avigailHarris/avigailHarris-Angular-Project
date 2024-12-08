export class Student {
    id: number;
    firstName?: string;
    lastName?: string;
    phone?: string;
    active?: boolean;
    marksAvg?: number;
    leaveDate?: Date;
    studiesType?: Type;
    studiesYear?:Year;

    
    constructor(
      id: number = 0,            
      firstName?: string, 
      lastName?: string, 
      phone?: string, 
      active?: boolean, 
      marksAvg?: number, 
      leaveDate?: Date,
      studiesType?: Type,
      studiesYear?:Year
    ) {
      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.phone = phone;
      this.active = active;
      this.marksAvg = marksAvg;
      this.leaveDate = leaveDate;
      this.studiesType = studiesType
      this.studiesYear = studiesYear
  }
}

  export enum Type{
    ComputerScience=1,
    BusinessAdministration=2,
    CivilEngineering=3,
    EducationPsychology=4,
    Law=5
  }

  export enum Year{
    firstYear=1,
    secondYear=2,
    thirdYear=3
  }
  