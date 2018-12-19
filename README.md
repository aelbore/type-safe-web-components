# type-safe-web-components
Web Components using TypeScript

## Getting Started
* Install Dependencies
  ```
  npm install --save-dev ts-node typescript tslib express @types/express
  ```
* Create `server.ts` file
  ```typescript
  import * as express from 'express';
  import * as http from 'http';
  import * as path from 'path';

  import { AddressInfo } from 'net';

  const app = express();

  const PORT = 3000;
  const HOST_NAME = `localhost`;
  const PUBLIC_FOLDER = 'public';

  app.use(`/${PUBLIC_FOLDER}`, express.static(path.resolve(PUBLIC_FOLDER)));

  app.all('/*', function(req: express.Request, res: express.Response) {
    res.sendFile('index.html', { root: path.resolve(PUBLIC_FOLDER) })
  })

  const server = http.createServer(app);
  server.listen(PORT, HOST_NAME)
    .on('listening', function() {
      const { port, address } = server.address() as AddressInfo;
      console.log(`Express server started on port ${port} at ${address}.`); 
    })
  ```
* Add `serve` as a script in package.json
  ```
  "serve": "ts-node server.ts"
  ```
* Run the server
  ```
  npm run serve
  ```
<br />

## Setup Build tools using Rollup
* Let's add `tsconfig.json` file
  ```
  {
    "compilerOptions": {
      "emitDecoratorMetadata": true,
      "experimentalDecorators": true,
      "target": "es6",
      "module": "commonjs",
      "moduleResolution": "node",
      "removeComments": true,
      "sourceMap": true,
      "outDir": "dist",
      "rootDir": "src",
      "declaration": true,
      "baseUrl": ".",
      "lib": ["es5", "es6", "dom"],
      "importHelpers": true
    },
    "include": [
      ".tmp/**/*",
      "src/**/*.ts",
      "server.ts"
    ]
  }
  ```
* Add build dependencies
  ```
  npm install --save-dev rollup rollup-plugin-typescript2
  ```
* Add `rollup.config.ts` file
  ```typescript
  import * as path from 'path';

  import { rollup } from 'rollup';
  const typescript2 = require('rollup-plugin-typescript2');

  const ENTRY_FILE = `src/hello-world.ts`;

  const rollupConfig = {
    inputOptions: {
      treeshake: true,
      input: ENTRY_FILE,
      plugins: [
        typescript2({
          tsconfig: 'src/tsconfig.json',
          check: false,
          cacheRoot: path.join(path.resolve(), 'node_modules/.tmp/.rts2_cache'), 
          useTsconfigDeclarationDir: true       
        })
      ],
      onwarn (warning) {
        if (warning.code === 'THIS_IS_UNDEFINED') { return; }
        console.log("Rollup warning: ", warning.message);
      }
    },
    outputOptions: {
      sourcemap: true,
      exports: 'named',
      file: 'public/bundle.js',
      name: 'hello-world', 
      format: 'umd'
    }
  }

  function rollupBuild({ inputOptions, outputOptions }): Promise<any> {
    return rollup(inputOptions).then(bundle => bundle.write(outputOptions));
  }

  rollupBuild(rollupConfig);
  ```
* Create `src` folder.
* Let's create `src/hello-world.ts` file.
  ```typescript
  document.body.innerHTML = `Hello im Joe.`
  ```
* Adding `src/tsconfig.json` for build.
  ```typescript
  {
    "compilerOptions": {
      "allowSyntheticDefaultImports": true,
      "emitDecoratorMetadata": true,
      "experimentalDecorators": true,
      "target": "es6",
      "module": "esNext",
      "moduleResolution": "node",
      "removeComments": true,
      "sourceMap": true,
      "outDir": "../public",
      "rootDir": "src",
      "declaration": true,
      "baseUrl": ".",
      "lib": ["es5", "es6", "dom"],
      "importHelpers": true
    },
    "include": [
      ".tmp/**/*",
      "**/*.ts"
    ]
  }
  ```
  * Add `build` scripts in package.json
    ```
    "build": "ts-node rollup.config.ts",
    ```
  * Update `public/index.html` file
    * Remove the `<h1>` tag
    * add script tag
      ```html
        <script src="public/bundle.js"></script>
      ```
  * Build & Run the Application
  ```
  npm run build
  npm run serve
  ```
<br />

### Create Basic Web Components
* `Hello World` Web Component
  ```javascript
  class HelloWorld extends HTMLElement {

    conntectedCallback() {
      this.innerHTML = `<h1>Hello World.</h1>`
    }

  }

  customElements.define('hello-world', HelloWorld);
  ```
* Add `<hello-world></hello-world>` tag
  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>TypeScript 101</title>
  </head>
  <body>
    <hello-world></hello-world>
    <script src="public/bundle.js"></script>
  </body>
  </html>
  ```
  <br />
  
  ### Create Star Rating Web Components
* Create a class StarRating and define custom elements
  ```javascript
  class StarRating extends HTMLElement {

    
  }

  customElements.define('star-rating', StarRating);
  ```
* Add html Markup star
  ```javascript
    class StarRating extends HTMLElement {

    connectedCallback() {
      this.innerHTML = `
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
          <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/>
        </svg>
      </span>  
      `
    }

    }

    customElements.define('star-rating', StarRating);
  ```
* Add styles
  ```javascript
    class StarRating extends HTMLElement {

      connectedCallback() {
        this.innerHTML = `
        <style>
          .checked svg {
            fill: orange;
          }
          span svg {
            width: 5%;
          }
        </style>
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/>
          </svg>
        </span>  
        `
      }
      
    }

    customElements.define('star-rating', StarRating);
  ```
* Add attribute and react to the change attribute
  ```typescript
  class StarRating extends HTMLElement {

    static get observedAttributes() {
      return [ 'checked' ];
    }

    get checked() {
      return this.hasAttribute('checked');
    }

    set checked(value: boolean) {
      const span = this.querySelector('span');
      if (value) {
        span.classList.add('checked');
      } else {
        span.classList.remove('checked');
      }
    }

    connectedCallback() {
      this.innerHTML = `
      <style>
        .checked svg {
          fill: orange;
        }
        span svg {
          width: 5%;
        }
      </style>
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
          <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/>
        </svg>
      </span>  
      `
    }

    attributeChangedCallback(name, oldValue, newValue) {
      switch(name) {
        case 'checked':
          this.checked = this.checked && (newValue !== "false");
        break;
      }
    }

  }

  customElements.define('star-rating', StarRating);
  ```
