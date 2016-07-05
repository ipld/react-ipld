'use strict'

const getConfig = require('hjs-webpack')
const config = getConfig({
  in: 'src/app.js',
  out: 'public',
  clearBeforeBuild: true
})
config.externals = {
  net: '{}',
  fs: '{}',
  tls: '{}',
  console: '{}'
}

module.exports = config
