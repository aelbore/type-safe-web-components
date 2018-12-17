# TypeScript 101
TypeScript for Beginners

## Topics
* [Requirements](#requirements)
* [Getting Started](#getting-started)
* [What is TypeScript?](#what-is-typescript)
* [TypeScript Hello World](#typescript-hello-world)
* [Basic Types](#basic-types)
* [For Loop](#for-loop)
* [Class and interface](#class-and-interface)
* [import and export](#import-and-export)
* Build Simple Calculator App

<br />

### Requirements
* Code Editor
  ```
  Download
  https://code.visualstudio.com

  Setup
  Linux (https://code.visualstudio.com/docs/setup/linux)
  Mac (https://code.visualstudio.com/docs/setup/mac)
  Windows (https://code.visualstudio.com/docs/setup/windows)
  ```
* NodeJS
  ```
  Download
  https://nodejs.org
  ```

<br />

### Getting Started
  ```
  npm init
  npm install --save-dev ts-node typescript http-server
  ```

<br />

### What is TypeScript?
* It is a strict syntactical superset of JavaScript, and adds optional static typing to the language.

  <img src="https://cdn-images-1.medium.com/max/609/1*8lKzkDJVWuVbqumysxMRYw.png" width="300" height="300" />


<br />
<br />

### TypeScript Hello World
* Create index.ts file
* Add following code
  ```typescript
  function helloWorld(name: string) {
    return `Hello World ${name}`;
  }

  console.log(helloWorld('Joe'))
  ``` 
* Add `start` script in package.json
  ```
  "start": "ts-node index.ts"
  ```
* In Terminal `npm start`

<br />

### Basic Types
#### string 
  As in other languages, we use the type string to refer to these textual datatypes. Just like JavaScript, TypeScript also uses double quotes (") or single quotes (') to surround string data. 
  ```typescript
  let color: string = "blue";
  color = 'red';
  ```

  You can also use template strings, which can span multiple lines and have embedded expressions. These strings are surrounded by the backtick/backquote (`) character, and embedded expressions are of the form ${ expr }.
  ```typescript
  let name: string = `Juan dela Cruz`;
  let sentence: string = `Hello, my name is ${name}.`;
  ```
<br />

#### number
  As in JavaScript, all numbers in TypeScript are floating point values. These floating point numbers get the type number.
  ```typescript
  let age: number = 28;
  ```
<br />

#### boolean
  The most basic datatype is the simple true/false value, which JavaScript and TypeScript call a boolean value.
  ```typescript
  let isDone: boolean = false;
  ```
<br />

#### Array
  TypeScript, like JavaScript, allows you to work with arrays of values. Array types can be written in one of two ways. In the first, you use the type of the elements followed by [] to denote an array of that element type:
  ```typescript
  let list: number[] = [1, 2, 3];
  ```
  The second way uses a generic array type, Array<elemType>:
  ```typescript
  let list: Array<number> = [1, 2, 3];
  ```
<br />

### For Loop
The for loop executes the code block for a specified number of times. It can be used to iterate over a fixed set of values, such as an array

  <img src="https://www.tutorialspoint.com/typescript/images/for_loop.jpg" width="400" height="500" />

```typescript
let list: number[] = [1, 2, 3];
for (let i = 0; i < list.length; i++) {
  console.log(list[i]);
}
```

## Hands on
* My Personal Information
  * Create a function that accept 3 parameters
    * firstName type of string
    * lastName type of string
    * age type of number
  * Output of you function should be:
    ```
      Hello my name is [fistName] [lastName], age [age]
    ```
  * Use `template string`
  * Use console.log to diplay the output of your function
* My Favorite Musics
  * Create a function that accept array of strings
    * musics type of Array of strings
  * Display each of the item using for loop
  * use console.log
<br />

## Class and Interface
### Class
JavaScript classes, introduced in ECMAScript 2015, are primarily syntactical sugar over JavaScript's existing prototype-based inheritance.
<br />
<br />
Simple class-base example:
```typescript
class Greeter {
    
    /// property
    greeting: string;

    /// constructor
    constructor(message: string) {
      this.greeting = message;
    }

    /// method
    greet() {
      return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("world");
```
<br />

#### Hands on
* My Personal Information
  * Create a class that accepts 3 parameters in constructor
    * firstName type of string
    * lastName type of string
    * age type of number
  * In a class you should have 3 properties
    * firstName type of string
    * lastName type of string
    * age type of number 
  * In a class you should have displayInfo method and return the following:
  ```
  Hello my name is [fistName] [lastName], age [age]
  ```
  * Use `template string`
  * Use console.log to diplay the output of your function 

### Inheritance
In TypeScript, we can use common object-oriented patterns. One of the most fundamental patterns in class-based programming is being able to extend existing classes to create new ones using inheritance.
<br />
<br />
```typescript
class Animal {
  move(distanceInMeters: number = 0) {
    console.log(`Animal moved ${distanceInMeters}m.`);
  }
}

class Dog extends Animal {
  bark() {
    console.log('Woof! Woof!');
  }
}

const dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();
```
<br />

#### Hands on
* My Personal Information
  * Create base class i.e Person
  * In a class you should have 3 properties
    * firstName type of string
    * lastName type of string
    * age type of number 
  * Create child class i.e MyInfo
  * extends base or parent class to child class
  * Child class should have 3 parameters in constructor
    * firstName type of string
    * lastName type of string
    * age type of number
  * In a class you should have displayInfo method and return the following:
  ```
  Hello my name is [fistName] [lastName], age [age]
  ```
  * Use `template string`
  * Use console.log to diplay the output of your function 
<br />

### Interface
In TypeScript, interfaces fill the role of naming these types, and are a powerful way of defining contracts within your code as well as contracts with code outside of your project.
<br />
<br />
Simple interface example:
```typescript
function printLabel(labelledObj: { label: string }) {
  console.log(labelledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);
```
<br />

Using `interface` keyword
```typescript
interface SampleLabelValue {
  label: string;
}

function printLabel(labelledObj: SampleLabelValue) {
    console.log(labelledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);
```
<br />

#### Hands on
* My Personal Information
  * Create interface that has properties of following:
    * firstName type of string
    * lastName type of string
    * age type of number
  * Create a class that accepts interface in the constructor
  * Use `implements` to have the construct of interface
  * In a class you should have displayInfo method and return the following:
  ```
  Hello my name is [fistName] [lastName], age [age]
  ```
  * Use `template string`
  * Use console.log to diplay the output of your function 
<br />

## import and export
Starting with ECMAScript 2015, JavaScript has a concept of modules. TypeScript shares this concept.
<br />
<br />
Modules are executed within their own scope, not in the global scope; this means that variables, functions, classes, etc. declared in a module are not visible outside the module unless they are explicitly exported using one of the export forms. Conversely, to consume a variable, function, class, interface, etc. exported from a different module, it has to be imported using one of the import forms.
<br />

### export 
Any declaration (such as a variable, function, class, type alias, or interface) can be exported by adding the export keyword.
```typescript
export interface SampleLabelValue {
  label: string;
}
```
or
```typescript
interface SampleLabelValue {
  label: string;
}

export { SampleLabelValue }
```
<br />

### import
```typescript
import { SampleLabelValue } from './sample-label-value';
```
  



