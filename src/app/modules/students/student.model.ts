import { Test } from "../../models/test.model";
import { MissimgDays } from "../students/missimgDays.model";

export class Student {
  id: number;
  firstName?: string;
  lastName?: string;
  phone?: string;
  active?: boolean;
  marksAvg?: number;
  leaveDate?: Date;
  studiesType?: Type;
  studiesYear?: Year;
  testList?: Test[];
  missimgDays: MissimgDays[] = [];  

  constructor(
    id: number = 0,            
    firstName?: string, 
    lastName?: string, 
    phone?: string, 
    active?: boolean, 
    marksAvg?: number, 
    leaveDate?: Date,
    studiesType?: Type,
    studiesYear?: Year,
    testList?: Test[],
    missimgDays: MissimgDays[] = []  
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.active = active;
    this.marksAvg = marksAvg;
    this.leaveDate = leaveDate;
    this.studiesType = studiesType;
    this.studiesYear = studiesYear;
    this.testList = testList;
    this.missimgDays = missimgDays;  
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
  