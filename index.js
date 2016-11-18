module.exports = strip;

/** @module css-strip-units
  *
  * Strip the unit off a CSS number.
  *
  * ```js
  * strip('10px');
  * // => '10'
  * ```
  */

var NUMBER = '1234567890';

function strip(value) {
  // Exit fast if not valid value.
  if (!value || !value.length) return null;

  var i = value.length;

  // Loop and strip each item if value is array.
  if (value instanceof Array) {
    var output = [];
    while (i--) output[i] = strip(value[i]);
    return output;
  }

  // Strip the unit from the value.
  var len = i
  while (i--)
    if (NUMBER.indexOf(value[i]) !== -1)
      return value.slice(i + 1, len);

  // Pass if unable to strip (i.e. 'auto')
  return value;
};
