const FS = require('fs')
const Path = require('path')
const Sass = require('node-sass')

Sass.renderSync({
  data: FS.readFileSync(
    Path.resolve('src/scss/src/global.scss')
  ).toString(),
  outputStyle: 'expanded',
  outFile:'global.css',
  includePaths:[Path.resolve('src')]
})
