$(document).ready(function() {

  module('router::core');

  test('router', function() {
    ok(router, 'router must be available');

    ok(_.isObject(router), 'router must be an object');

  });

  test('router::properties', function() {
    equal(router.VERSION, '0.1.0', 'router.VERSION must be 0.1.0');

    ok(_.isFunction(router.RouteEntry), 'router.RouteEntry must be a function');

  });


  test('router#config', function() {

    ok(_.isFunction(router.config), 'router.config must be a function');

  });


  test('router#map', function() {

    ok(_.isFunction(router.map), 'router.map must be a function');

    //simple map

    //not finished as a route must require a pattern + callback.
    router.map('/foo/bar/');
    var found = router.find('/foo/bar/');
    ok(_.isNull(found), 'found must be null');

    router.map('/foo/bar/', function() {
      //empty callback
    });

    //var found2 = router.find('/foo/bar/');
    //ok(_.isObject(found2), 'found2 must be an object');





  });

  test('router#to', function() {

    ok(_.isFunction(router.to), 'router.to must be a function');



  });

  test('router#where', function() {
    ok(_.isFunction(router.where), 'router.where must be a function');
  });

  test('router#clear', function() {
    ok(_.isFunction(router.clear), 'router.clear must be a function');
  });

  test('router#find', function() {
    ok(_.isFunction(router.find), 'router.find must be a function');
  });

  test('router#add', function() {
    ok(_.isFunction(router.add), 'router.add must be a function');
  });

  test('router#remove', function() {
    ok(_.isFunction(router.remove), 'router.remove must be a function');
  });

  test('router#dispatch', function() {
    ok(_.isFunction(router.dispatch), 'router.dispatch must be a function');
  });

  test('router#url', function() {
    ok(_.isFunction(router.url), 'router.url must be a function');
  });

});