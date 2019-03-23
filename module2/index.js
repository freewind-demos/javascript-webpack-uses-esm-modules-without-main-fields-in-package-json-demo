import {module1} from 'javascript-webpack-uses-esm-modules-without-main-fields-in-package-json-demo--module1/dist/bundle';

export function module2() {
  console.log('<module2>');
  module1();
  console.log('</module2>')
}
