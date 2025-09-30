// rollup.config.mjs
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import dts from 'rollup-plugin-dts';
import pkg from './package.json' with { type: 'json' };

export default [
  // JS + CSS bundle
  {
    input: 'src/index.ts',
    // DO NOT externalize styles here — let postcss handle them
    external: [
      /^react($|\/)/,
      /^react-dom($|\/)/,
      /^@types\/react($|\/)/,
      /^@types\/react-dom($|\/)/,
      /^@ncrs\/nhsuk-react-components($|\/)/
    ],
    plugins: [
      resolve(),
      commonjs(),
      postcss({
        extensions: ['.css', '.scss'],
        extract: 'index.css',   // make the output predictable
        minimize: true,
        // optional: quiet dart-sass deprecations if you use legacy APIs
        modules: false,
        use: {
          sass: {
            quietDeps: true,
            silenceDeprecations: ['legacy-js-api', 'misplaced-rest']
          },
        }
      }),
      typescript({
        tsconfig: './tsconfig.json',
        noEmitOnError: true
      }),
    ],
    output: [
      { file: "dist/index.js", format: "cjs" },
      { file: "dist/index.esm.js", format: "esm" },
    ],
  },

  // .d.ts bundle
  {
    input: 'dist/types/index.d.ts',
    output: [{ file: pkg.types, format: 'esm' }],
    plugins: [dts()],
    // Tell dts bundler to ignore style imports
    external: [/\.s?css$/i, /\.less$/i, /\.styl(us)?$/i],
  },
];
