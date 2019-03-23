import pkg from './package.json';

export default {
  input: 'index.js',
  output: [{
    file: pkg.module,
    format: 'esm',
  }, {
    file: pkg.main,
    format: 'cjs',
  }],
  external: ['javascript-webpack-uses-esm-modules-without-main-fields-in-package-json-demo--module2']
}
