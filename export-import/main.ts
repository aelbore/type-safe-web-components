import { MyInfo } from './my-info';
import { Person } from './person';

let params: Person = {
  firstName: 'A',
  lastName: 'B',
  age: 20
}

let info = new MyInfo(params);

console.log(info.displayInfo());