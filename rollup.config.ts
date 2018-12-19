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