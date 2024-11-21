// import typescriptPlugin from 'rollup-plugin-typescript2';
import typescript from '@rollup/plugin-typescript';
// import typescript from 'typescript';
import pkg from './package.json' assert { type: 'json' };
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/index.ts',
  // output: [
  //   { file: pkg.main, format: 'cjs' },
  //   { file: pkg.module, format: 'es' },
  // ],
  output: [
    { file: pkg.main, format: 'cjs' },
    { file: pkg.module, format: 'es' }
  ],
  external: [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})],
  plugins: [
    typescript({
      declarationDir: './dist'
    }),
    nodeResolve(),
    commonjs()
  ],
};
