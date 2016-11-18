# css-strip-units [![NPM version](https://badge.fury.io/js/css-strip-units.svg)](https://npmjs.org/package/css-strip-units) [![Build Status](https://travis-ci.org/jamen/css-strip-units.svg?branch=master)](https://travis-ci.org/jamen/css-strip-units)

> Strip everything but the unit from a CSS value.

```js
strip('1px')
// => 'px'

strip('30.5kHz')
// => 'kHz'

strip(['100%', '99rem', '.25s'])
// => ['%', 'rem', 's']
```

This module stays future-proof by stripping numbers off the front, so non-existent units are still passed with this module.  Use another module to check the validity of units.

To get the number of a CSS value simply use `parseFloat` or `parseInt` (it actually works!):

```javascript
var value = '100px'

// User css-strip-units to get unit:
var unit = strip(value)
// => 'px'

// Use parseFloat to get number:
var number = parseFloat(value)
// => 100
```

## Installation

```sh
$ npm install --save css-strip-units
```

## API

### `strip(value)`

Strip any number's unit (including those non-existent).

 - `value` (`String`|`Array`): String or array of values to strip the unit(s) from.

```javascript
strip('2px')
// => '2'

strip(['.01px', '9px'])
// => ['.01', '9']
```

Returns string or array depending the type of `value` you input.

## License

MIT © [Jamen Marz](https://github.com/jamen)
