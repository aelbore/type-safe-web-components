import { Person } from './person';

export class MyInfo implements Person {
  
  firstName: string;
  lastName: string;
  age: number;

  constructor(params: Person) {
    this.firstName = params.firstName;
    this.lastName = params.lastName;
    this.age = params.age;
  }

  displayInfo() {
    return `Hello my name is ${this.firstName} ${this.lastName}, age ${this.age}`
  }

}