# jstransformer-remarkable

[Remarkable](http://npm.im/remarkable) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-remarkable/master.svg)](https://travis-ci.org/jstransformers/jstransformer-remarkable)
[![Coverage Status](https://img.shields.io/coveralls/jstransformers/jstransformer-remarkable/master.svg)](https://coveralls.io/r/jstransformers/jstransformer-remarkable?branch=master)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-remarkable/master.svg)](http://david-dm.org/jstransformers/jstransformer-remarkable)
[![NPM version](https://img.shields.io/npm/v/jstransformer-remarkable.svg)](https://www.npmjs.org/package/jstransformer-remarkable)

## Installation

    npm install jstransformer-remarkable

## API

```js
var foo = require('jstransformer')(require('jstransformer-foo'))

foo.render('# Hello World!').body
//=> '<h1>Hello World!</h1>'
```

## License

MIT
