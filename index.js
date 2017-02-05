module.exports = unit

var NUMBER = '1234567890'

function unit (value) {
  // Exit fast if not valid value.
  if (!value || !value.length) return null

  var i = value.length

  // Strip the unit from the value.
  var len = i
  while (i--)
    if (NUMBER.indexOf(value[i]) !== -1)
      return value.slice(i + 1, len) || null

  // If no unit found, null
  return null
}
