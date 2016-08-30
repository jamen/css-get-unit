module.exports = strip;

/** @module css-strip-unit
  *
  * Strip the unit off a CSS number.
  *
  * ```js
  * strip('10px');
  * // => '10'
  * ```
  */

var n = '1234567890';

function strip(v) {
  if (!v || !v.length) return null;
  var i = v.length;
  if (v instanceof Array) {
    var o = [];
    while (i--) o[i] = strip(v[i]);
    return o;
  }
  while (i--) if (n.indexOf(v[i]) !== -1) return v.slice(0, i + 1);
  return v;
};
