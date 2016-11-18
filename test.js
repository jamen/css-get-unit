var strip = require('./');
var test = require('tape');

test('strip single values', function one(t) {
  t.is(strip('1px'), 'px', 'strip("1px") === "px"');
  t.is(strip('1042em'), 'em', 'strip("1042em") === "em"');
  t.is(strip('99%'), '%', 'strip("99%") === "%"');
  t.is(strip('75.10kHz'), 'kHz', 'strip("75.10kHz") === "kHz"');
  t.is(strip('.5s'), 's', 'strip(".5s") === "s"');
  t.is(strip('100rem'), 'rem', 'strip("100rem") === "rem"');
  t.is(strip('auto'), 'auto', 'strip("auto") === "auto"');
  t.end();
});

test('strip multiple values', function one(t) {
  t.same(
    strip(['1px', '1042em', '99%', '75.10kHz', '.5s', '100rem']),
    ['px', 'em', '%', 'kHz', 's', 'rem'],
    'stripping array'
  );
  t.end();
});
