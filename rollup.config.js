// import typescriptPlugin from 'rollup-plugin-typescript2';
import typescript from '@rollup/plugin-typescript';
// import typescript from 'typescript';
import pkg from './package.json';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/index.ts',
  // output: [
  //   { file: pkg.main, format: 'cjs' },
  //   { file: pkg.module, format: 'es' },
  // ],
  output: {
    // 3363 - NOTE - look at this, is it the correct outdir?
    // makes the tests pass though
    // should it be lib or dist?  Lib matches current Typescript compiler option for outDir
    dir: "./lib",
    // dir
    format: 'cjs'
  },
  external: [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})],
  plugins: [
    typescript(),
    nodeResolve(),
    commonjs(),
  ],
};
