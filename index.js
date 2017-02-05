module.exports = unit

var NUMBER = '1234567890'

function unit (value) {
  if (!value || !value.length) return null

  var i = value.length
  var len = i
  while (i--)
    if (NUMBER.indexOf(value[i]) !== -1)
      return value.slice(i + 1, len) || null

  return null
}
