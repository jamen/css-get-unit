var strip = require('./');
var test = require('tape');

test('strip single values', function one(t) {
  t.is(strip('1px'), '1', 'strip("1px") === "1"');
  t.is(strip('1042em'), '1042', 'strip("1042em") === "1042"');
  t.is(strip('99%'), '99', 'strip("99%") === "99"');
  t.is(strip('75.10kHz'), '75.10', 'strip("75.10kHz") === "75.10"');
  t.is(strip('.5s'), '.5', 'strip(".5s") === ".5"');
  t.is(strip('100rem'), '100', 'strip("100rem") === "100"');
  t.is(strip('auto'), 'auto', 'strip("auto") === "auto"');
  t.end();
});

test('strip multiple values', function one(t) {
  t.same(
    strip(['1px', '1042em', '99%', '75.10kHz', '.5s', '100rem']),
    ['1', '1042', '99', '75.10', '.5', '100'],
    'stripping array'
  );
  t.end();
});
