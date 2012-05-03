/**
 * Server side tests
 */
$(document).ready(function() {

  module('router::server');

  test('router#options', function() {
    ok($.isFunction(router.options), 'router.options must be a function');
  });

  test('router#get', function() {
    ok($.isFunction(router.get), 'router.get must be a function');
  });

  test('router#head', function() {
    ok($.isFunction(router.head), 'router.head must be a function');
  });


  test('router#post', function() {
    ok($.isFunction(router.post), 'router.post must be a function');
  });

  test('router#put', function() {
    ok($.isFunction(router.put), 'router.put must be a function');
  });

  test('router#del', function() {
    ok($.isFunction(router.del), 'router.del must be a function');
  });


  test('router#trace', function() {
    ok($.isFunction(router.trace), 'router.trace must be a function');
  });

  test('router#connect', function() {
    ok($.isFunction(router.connect), 'router.connect must be a function');
  });

});