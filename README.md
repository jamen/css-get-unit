# css-strip-unit [![NPM version](https://badge.fury.io/js/css-strip-unit.svg)](https://npmjs.org/package/css-strip-unit) [![Build Status](https://travis-ci.org/jamen/css-strip-unit.svg?branch=master)](https://travis-ci.org/jamen/css-strip-unit)

> Strip the unit off a CSS number.

```js
strip('1px');
// => '1'

strip('30.5kHz');
// => '30.5'

strip(['100%', '99rem', '.25s']);
// => ['100', '99', '.25']
```

Note: This module stays future-proof by stripping any letters off the end.  So non-existent units are still stripped.  Use another module to check the validity of unit.

Getting the unit with the stripped number:
```javascript
var value = '100px';
var number = strip(value);
// => '100'

// Slice the value to get the unit.
var unit = value.slice(number.length);
// => 'px'
```

## Installation

```sh
$ npm install --save css-strip-unit
```

## API

### `strip(value)`
Strip any number's unit (including those non-existent).

 - `value` (`String`|`Array`): String or array of values to strip the unit(s) from.

Returns string or array depending on what you input, with the unit or units stripped from them.

## License

MIT © [Jamen Marz](https://github.com/jamen)
