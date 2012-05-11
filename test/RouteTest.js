/**
 * Unit test for router.Route.
 */
$(document).ready(function() {
  module('router::core');

  var Route = router.Route;

  test('Route basic', function() {

    expect(8);

    ok(Route.prototype.pattern, 'Route.prototype.pattern must be available');
    ok(Route.prototype.callback, 'Route.prototype.callback must be available');
    ok(Route.prototype.constraints, 'Route.prototype.constraints must be available');
    ok(Route.prototype.isValid, 'Route.prototype.isValid must be available');
    ok(Route.prototype.isMatched, 'Route.prototype.isMatched must be available');
    ok(Route.prototype.dispatch, 'Route.prototype.dispatch must be available');
    ok(Route.prototype.url, 'Route.prototype.url must be available');
    ok(Route.prototype.toRegExp, 'Route.prototype.toRegExp must be available');

  });


  test('Route instance', function() {
    var route = new Route();
    ok(_.isObject(route), 'route must be an object');

    equal(route.pattern(), undefined, 'route.pattern() must be undefined');
    equal(route.callback(), undefined, 'route.callback() must be undefined');
    equal(route.constraints(), undefined, 'route.constraints() must be undefined');

    //sets

    var pattern = '/:foo/:bar',
        callback = function() {
          return ':foo-:bar-call-backed';
        },
        conditions = {
          foo: [
            1,
            /a-z/
          ],
          bar: [
            /0-9/
          ]
        };

    route.pattern(pattern);
    route.callback(callback);
    route.constraints(conditions);

    equal(route.pattern(), pattern, 'route.pattern() must be ' + pattern);
    equal(route.callback(), callback, 'route.callback() must be ' + callback);
    equal(route.constraints(), conditions, 'route.constraints() must be ' + conditions);

    equal(route.callback()(), ':foo-:bar-call-backed', 'route.callback()() must return: \':foo-:bar-call-backed\'');


    //use constructor, then update

    var route2 = new Route(pattern, callback, conditions);

    equal(route2.pattern(null), pattern, 'route2.pattern() must be: ' + pattern);
    equal(route2.callback(undefined), callback, 'route2.callback() must be: ' + callback);
    equal(route2.constraints(false), conditions, 'route2.constraints() must be: ' + conditions);

    var pattern2 = '/:foo/:bar2',
      callback2 = function() {
        return ':foo-:bar-call-backed2';
      },
      conditions2 = {
        foo2: [
          1,
          /a-z/
        ],
        bar2: [
          /0-9/
        ]
      };

    //chaining

    route2.pattern(pattern2).callback(callback2).constraints(conditions2);

    equal(route2.pattern(), pattern2, 'route2.pattern() must be ' + pattern2);
    equal(route2.callback(), callback2, 'route2.callback() must be ' + callback2);
    equal(route2.constraints(), conditions2, 'route2.constraints() must be ' + conditions2);

    var route3 = new Route().pattern(pattern2).callback(callback2).constraints(conditions2);

    equal(route3.pattern(), pattern2, 'route3.pattern() must be ' + pattern2);
    equal(route3.callback(), callback2, 'route3.callback() must be ' + callback2);
    equal(route3.constraints(), conditions2, 'route3.constraints() must be ' + conditions2);



    //invalid arguments for constructor

    var route4 = new Route(null, false, '');

    ok(_.isUndefined(route4.pattern()), 'route4.pattern() must be undefined');
    ok(_.isUndefined(route4.callback()), 'route4.callback() must be undefined');
    ok(_.isUndefined(route4.constraints()), 'route4.constraints() must be undefined');

    //regular expression for pattern
    var regPattern = /foo\/bar/;
    route4.pattern(regPattern);

    ok(_.isRegExp(route4.pattern()), '_.isRegExp(route4.pattern()) must return true');
    equal(route4.pattern(), regPattern, 'route4.pattern() must return: ' + regPattern);

  });

  test('Route#isValid', function() {

    var route = new Route();

    ok(!route.isValid(), 'route.isValid() must return false');

    route.pattern(':foo/:bar');

    ok(!route.isValid(), 'route.isValid() must return false');

    route.callback(function(foo, bar) {

    });

    ok(route.isValid(), 'route.isValid must return true');

    route.constraints({
      foo: [
        'test'
      ],
      bar: [
        /a-z/
      ]
    });

    ok(route.isValid(), 'route.isValid must return true');

  });

  test('Route#isMatched', function() {
    var route = new Route();
    route.callback(function() {

    }); //for valid

    ok(!route.isMatched('pattern/value'), 'route.isMatched(\'pattern/value\') must return false');

    route.pattern('/foo/bar');


    ok(route.isMatched('/foo/bar'), 'route.isMatched(\'/foo/bar\') must return true');


    route.pattern('/:para1/:param2');

    ok(route.isMatched('/fooParam/barParam'), 'route.isMatched(\'/fooParam/barParam\') must return true');

  });

  test('Route#dispatch', function() {

    ok(true);

  });


  test('Route#url', function() {
    ok(true)
  });


  test('Route#toRegExp', function() {

    var route = new Route();

    ok(_.isRegExp(route.toRegExp()), 'route.toRegExp() must return a regular expression');

    ok(_.isEqual(route.toRegExp(), new RegExp()), 'route.toRegExp() must be an empty regExp');


    route.pattern('/foo/bar');

    ok(_.isEqual(route.toRegExp(), new RegExp('^/foo/bar$')), 'route.toRegExp() must be: /^/foo/bar$/');

    route.pattern('/:foo/:bar');

    ok(_.isEqual(route.toRegExp(), new RegExp('^/([^/]+)/([^/]+)$')), 'route.toRegExp() must return: /^/([^/]+)/([^/]+)$/');


    route.pattern('/:foo/p:pageNumber');

    ok(_.isEqual(route.toRegExp(), new RegExp('^/([^/]+)/p([^/]+)$')), 'route.toRegExp() must return: /^/([^/]+)/p([^/]+)$/');


    var pattern1 = /^foo\/bar\/$/i;

    route.pattern(pattern1);

    equal(route.toRegExp(), pattern1, 'route.toRegExp() must return: ' + pattern1);

    var pattern2 = new RegExp('^hello/world$', 'i');

    route.pattern(pattern2);
    equal(route.toRegExp(), pattern2, 'route.toRegExp() must return: ' + pattern2);

    route.pattern('/download/*filePath');

    ok(_.isEqual(route.toRegExp(), new RegExp('^/download/(.*?)$')), 'route.toRegExp() must return: /^/download/(.*?)$/');


    //add pattern with constraints

    route.pattern('/users/:userId')
              .constraints({
                userId: [
                  'me',
                  /\d+/
                ]
              });

    var expectedConstraintRegExp = new RegExp('^/users/(me|\\d+)$');

    ok(_.isEqual(route.toRegExp(), expectedConstraintRegExp), 'route.toRegExp() must return: /^/users/(me|\\d+)$/');

    ok(route.toRegExp().test('/users/me'), 'must match /users/me');
    ok(route.toRegExp().test('/users/123'), 'must match /users/123');
  });



});