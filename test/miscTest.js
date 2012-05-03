/**
 * misc method tests
 */
$(document).ready(function() {

  module('router::misc');

  test('router#noConflict', function() {
    ok($.isFunction(router.noConflict), 'router.noConflict must be a function');

    var current = router.noConflict();

    ok($.isPlainObject(current), 'current must be a plain object');

    equal(current.VERSION, '0.1.0', 'current.VERSION must be 0.1.0');

    equal(undefined, window['router'], 'window[\'router\'] must be undefined')
  });

});