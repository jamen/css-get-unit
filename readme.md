# css-get-unit [![NPM version](https://badge.fury.io/js/css-get-unit.svg)](https://npmjs.org/package/css-get-unit) [![Build Status](https://travis-ci.org/jamen/css-get-unit.svg?branch=master)](https://travis-ci.org/jamen/css-get-unit)

> unit everything but the unit from a CSS value.

```js
var unit = require('css-get-unit')

unit('1px')
// => 'px'

unit('30.5kHz')
// => 'kHz'
```

This module stays future-proof by unitping numbers off the front, so non-existent units are still passed with this module.  Use another module to check the validity of units.

To get the number of a CSS value simply use `parseFloat` or `parseInt` (it actually works!):

```javascript
var value = '100px'

// User css-get-unit to get unit:
var unit = unit(value)
// => 'px'

// Use parseFloat to get number:
var number = parseFloat(value)
// => 100
```

## Installation

```sh
$ npm install --save css-get-unit
```

## Usage

### `unit(value)`

unit any number's unit (including those non-existent).

 - `value` (`String`|`Array`): String or array of values to unit the unit(s) from.

```javascript
unit('2px')
// => '2'

unit('.5ms')
// => 'ms'

unit('100')
//
```

Returns string or array depending the type of `value` you input.

## License

MIT © [Jamen Marz](https://github.com/jamen)
