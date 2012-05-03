$(document).ready(function() {

  var router = window['router'];

  module('router');

  test('router', function() {
    ok(router, 'router must be available');

    ok($.isPlainObject(router), 'router must be an object');

  });

  test('router::properties', function() {
    equal(router.VERSION, '0.1.0', 'router.VERSION must be 0.1.0');
  });



  test('router#map', function() {

    ok($.isFunction(router.map), 'router.map must be a function');

    //simple map

  });

  test('router#to', function() {

    ok($.isFunction(router.to), 'router.to must be a function');



  });

  test('router#where', function() {
    ok($.isFunction(router.where), 'router.where must be a function');
  });

  test('router#clear', function() {
    ok($.isFunction(router.clear), 'router.clear must be a function');
  });

  test('router#dispatch', function() {
    ok($.isFunction(router.dispatch), 'router.dispatch must be a function');
  });

  test('router#url', function() {
    ok($.isFunction(router.url), 'router.url must be a function');
  });

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