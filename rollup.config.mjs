// rollup.config.mjs
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import dts from 'rollup-plugin-dts';
import pkg from './package.json' assert { type: 'json' };

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
      /^nhsuk-react-components($|\/)/
    ],
    plugins: [
      resolve(),
      commonjs(),
      postcss({
        extensions: ['.css', '.scss'],
        extract: 'index.css',   // make the output predictable
        minimize: true,
        // optional: quiet dart-sass deprecations if you use legacy APIs
        // use: { sass: { silenceDeprecations: ['legacy-js-api'] } },
        modules: false,
        use: {
          sass: {
            quietDeps: true,
          },
        }
      }),
      typescript({
        tsconfig: './tsconfig.json',
        noEmitOnError: true
      }),
    ],
    output: [
      { file: pkg.module, format: 'esm', sourcemap: true },
      { file: pkg.main, format: 'cjs', sourcemap: true },
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
