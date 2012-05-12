$(document).ready(function() {

  module('router::core');

  test('router', function() {
    ok(router, 'router must be available');

    ok(_.isObject(router), 'router must be an object');

  });

  test('router::properties', function() {
    equal(router.VERSION, '0.1.0', 'router.VERSION must be 0.1.0');

    ok(_.isFunction(router.Route), 'router.Route must be a function');

  });

  test('router::APIs', function() {

    expect(19);

    //config
    ok(router.config, 'router.config must be available');

    //mapping
    ok(router.map, 'router.map must be available');
    ok(router.to, 'router.to must be available');
    ok(router.where, 'router.where must be available');

    //util
    ok(router.clear, 'router.clear must be available');
    ok(router.find, 'router.find must be available');
    ok(router.add, 'router.add must be available');
    ok(router.remove, 'router.remove must be available');

    //core
    ok(router.dispatch, 'router.dispatch must be available');
    ok(router.url, 'router.url must be available');

    //server
    ok(router.options, 'router.options must be available');
    ok(router.get, 'router.get must be available');
    ok(router.head, 'router.head must be available');
    ok(router.post, 'router.post must be available');
    ok(router.put, 'router.put must be available');
    ok(router.del, 'router.del must be available');
    ok(router.trace, 'router.trace must be available');
    ok(router.connect, 'router.connect must be available');

    //misc
    ok(router.noConflict, 'router.noConflict must be available');

  });


  test('router#config', function() {

    ok(_.isFunction(router.config), 'router.config must be a function');

    //default config
    var defaultConfig = {
      caseSensitivePath: true
    };

    deepEqual(router.config(), defaultConfig, 'router.config() must return: ' + defaultConfig);

    var newConfig = {
      caseSensitivePath: false,
      invalid: false
    };

    var newExpectedConfig = {
      caseSensitivePath: false
    };

    router.config(newConfig);

    deepEqual(router.config(), newExpectedConfig, 'router.config() must return: ' + newExpectedConfig);

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