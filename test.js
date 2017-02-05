var unit = require('./');
var test = require('tape');

test('unit single values', function (t) {
  t.plan(10)
  t.is(unit('1px'), 'px', 'unit("1px") === "px"')
  t.is(unit('1042em'), 'em', 'unit("1042em") === "em"')
  t.is(unit('99%'), '%', 'unit("99%") === "%"')
  t.is(unit('75.10kHz'), 'kHz', 'unit("75.10kHz") === "kHz"')
  t.is(unit('.5s'), 's', 'unit(".5s") === "s"')
  t.is(unit('100rem'), 'rem', 'unit("100rem") === "rem"')
  t.is(unit('auto'), null, 'unit("auto") === null');
  t.is(unit('1000'), null, 'unit("1000") === null')
  t.is(unit('0.12'), null, 'unit("0.12") === null')
  t.is(unit('-.8'), null, 'unit("-.8") === null')
})
