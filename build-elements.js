const fs = require('fs-extra');
const concat = require('concat');
(async function build () {
  const files = [
    "./dist/AngularElementsTemplate/runtime-es2015.js",
    "./dist/AngularElementsTemplate/polyfills-es2015.js",
    "./dist/AngularElementsTemplate/main-es2015.js",
    "./dist/AngularElementsTemplate/scripts.js"
  ];
  await fs.ensureDir('dist-elements');
  await concat(files, 'dist-elements/aElements.js');
})()
