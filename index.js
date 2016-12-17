'use strict'

var Remarkable = require('remarkable')

var defaultMd = new Remarkable()

exports.name = 'remarkable'
exports.outputFormat = 'html'
exports.inputFormats = ['remarkable', 'md', 'markdown']

exports.render = function (str, options) {
  var md
  if (!options ||
      (typeof options === 'object' && Object.keys(options).length === 0)) {
    md = defaultMd
  } else {
    md = new Remarkable(options)
  }
  return md.render(str, options)
}
