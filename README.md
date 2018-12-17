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