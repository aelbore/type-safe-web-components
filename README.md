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
