(function() {

  var patterns = [];
  for (var i = 0; i < 1000; i++) {
    patterns.push('/pattern/' + i);
  }

  JSLitmus.test('router#map', function() {
    for (var i = 0, len = patterns.length; i < len; i++) {
      router.map(patterns[i], function() {

      });
    }
  });

})();