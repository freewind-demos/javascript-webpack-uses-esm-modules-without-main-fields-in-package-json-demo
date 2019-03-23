import {module2} from 'javascript-webpack-uses-esm-modules-without-main-fields-in-package-json-demo--module2';

export function module3() {
  console.log('<module3>');
  module2();
  console.log('</module3>')
}
