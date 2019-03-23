export default {
  input: 'index.js',
  output: [{
    file: "dist/bundle.mjs",
    format: 'esm',
  }, {
    file: "dist/bundle.js",
    format: 'cjs',
  }]
}
