import typescriptPlugin from 'rollup-plugin-typescript2';
import typescript from 'typescript';
import pkg from './package.json';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/index.ts',
  output: [
    { file: pkg.main, format: 'cjs' },
    { file: pkg.module, format: 'es' },
  ],
  external: [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})],
  // external: [],
  // external: [/node_modules/],
  // external: ['nhsuk-react-components/dist/lib/util/FormGroup'],
  // external: ['nhsuk-react-components'],
  plugins: [
    nodeResolve(),
    commonjs(),
    typescriptPlugin({
      typescript,
      exclude: ['**/*.test.d.ts'],
    })
  ],
};
