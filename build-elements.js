const fs = require('fs-extra');
const concat = require('concat');
(async function build () {
  const files = [
    './dist/SpinakerDashboard/runtime-es2015.js',
    './dist/SpinakerDashboard/polyfills-es2015.js',
    './dist/SpinakerDashboard/main-es2015.js',
    './dist/SpinakerDashboard/scripts.js'
  ];
  await fs.ensureDir('dist-elements');
  await concat(files, 'dist-elements/aElements.js');
})()
