JavaScript Webpack Uses "esm" modules without Main Fields in "package.json" Demo
================================================================================

这个Demo是项目中遇到的一个问题的简化。

`module1`产生的bundle文件，有两种格式，分别是：

- `.js`: commonjs
- `.mjs`: esm

但是它们在`package.json`里都没有声明相关的fields.

`module2/module3`产生的bundle也有两种格式，分别是：

- `.cjs.js`: commonjs 
- `.esm.js`: esm 

它们在`package.json`分别以`main`和`module`字段声明。

那么在主项目中使用它们的时候，会不会出问题？能不能找到正确的文件？

按照本Demo这样设置，是不会出问题的，但是之前有问题，原因是在`module2/module3`里，
esm的bundle生成的文件名也是`.mjs`，然而webpack在支持`.mjs`文件时有问题，
一旦遇到`.mjs`，只有处理它本身，而对于它内部引用的其它module，都无法按esm格式处理，
而是去找`.js`文件，所以中途会出错。

同时需要注意的是，`module1`中却不能使用`.cjs.js`与`.esm.js`的后缀，
这是因为它们没有在`package.json`中声明，所以`module2`中只能以
`javascript-webpack-uses-esm-modules-without-main-fields-in-package-json-demo--module1/dist/bundle`
的方式调用它们。如果两个bundle文件分别是`bundle.js`和`bundle.mjs`，仅后缀不同，
则webpack可以找到正确的文件。但如果是`bundle.cjs.js`与`bundle.esm.js`，webpack如果没有经过特别设置的话，
是无法处理`.cjs.js`与`.esm.js`的后缀的。

```
npm install
npm run demo
```

