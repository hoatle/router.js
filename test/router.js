$(document).ready(function() {

  var router = window['router'];

  module('router::core');

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

  test('router#find', function() {
    ok($.isFunction(router.find), 'router.find must be a function');
  });

  test('router#dispatch', function() {
    ok($.isFunction(router.dispatch), 'router.dispatch must be a function');
  });

  test('router#url', function() {
    ok($.isFunction(router.url), 'router.url must be a function');
  });

});