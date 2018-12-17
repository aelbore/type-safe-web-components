# TypeScript 101
TypeScript for Beginners

## Topics
* [Requirements](#requirements)
  * Code Editor (VSCode)
  * nodejs version 10+
* [Getting Started](#getting-started)
* [What is TypeScript?](#what-is-typescript)
* [TypeScript Hello World](#typescript-hello-world)
* [Basic Types](#basic-types)
* [For Loop](#for-loop)
* Class, Interface, Inheritance, function or arrow functions
* import and export
* tsconfig.json config
* Build Simple Calculator App
* Build tools

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


