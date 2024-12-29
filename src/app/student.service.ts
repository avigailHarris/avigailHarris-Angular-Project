import { MissimgDays } from "./models/missimgDays.model";
import { Student } from "./models/student.model";
import { Test } from "./models/test.model";

export class StudentService{

  private studendsList = [
    {
      id: 1,
      firstName: "Jane",
      lastName: "Doe",
      phone: "123-456-7890",
      active: true,
      marksAvg: 86,
      testList:[
        new Test(1, new Date('2024-01-15'), 'ComputerScience', 85),
        new Test(2, new Date('2024-02-20'), 'BusinessAdministration', 90),
        new Test(3, new Date('2024-03-10'), 'CivilEngineering', 78),
        new Test(7, new Date('2024-07-15'), 'BusinessAdministration', 87)],
      missimgDays: []
    },
    {
      id: 2,
      firstName: "Joh",
      lastName: "Smith",
      phone: "234-567-8901",
      active: false,
      marksAvg: 88,
      leaveDate: new Date("2024-11-22"),
      testList:[new Test(4, new Date('2024-04-05'), 'EducationPsychology', 92),
      new Test(5, new Date('2024-05-01'), 'Law', 88),
      new Test(6, new Date('2024-06-10'), 'ComputerScience', 80)],
      missimgDays: []
    },
    {
      id: 3,
      firstName: "Emily",
      lastName: "Johnson",
      phone: "345-678-9012",
      active: true,
      marksAvg: 94,
      testList:[new Test(4, new Date('2024-04-05'), 'EducationPsychology', 99),
        new Test(5, new Date('2024-05-01'), 'Law', 93),
        new Test(6, new Date('2024-06-10'), 'ComputerScience', 90)],
      missimgDays: []
    },
    {
      id: 4,
      firstName: "Michael",
      lastName: "Brown",
      phone: "456-789-0123",
      active: false,
      marksAvg: 75,
      leaveDate: new Date("2024-12-01"),
      testList:[
        new Test(1, new Date('2024-01-15'), 'ComputerScience', 71),
        new Test(2, new Date('2024-02-20'), 'BusinessAdministration', 80),
        ],
      missimgDays: []
    },
    {
      id: 5,
      firstName: "Sophia",
      lastName: "Davis",
      phone: "567-890-1234",
      active: true,
      marksAvg: 0,
      missimgDays: [new MissimgDays(new Date(2024, 0, 15),3)]

    }
  ];


  getStudents(): Student[] {
    
      return this.studendsList;
  }

  getNumOfStudents(): number{
    return this.studendsList.length
  }

  getStudentsByPromise(): Promise<Student[]>{
    return new Promise<Student[]>((resolve, reject) => {
      setTimeout(()=>{ resolve(this.studendsList);},3000);
    })
  }

  getAvg(id: number): number{
    let student = this.studendsList.find((std)=>std.id == id);
    if( student)
      return student.marksAvg;
    return 0;
  }

  getSumMissingDays(id: number):number{
    let student = this.getStudents().find(std=> std.id === id);
    if(student?.missimgDays)
    {
      let sum: number = 0;
      
      student.missimgDays.forEach(missing=>{sum += missing.numOfDays});
      return sum;
    }
    else
      return 0;

  }
}