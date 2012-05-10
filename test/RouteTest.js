/**
 * Unit test for router.RouteEntry.
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
    var routeEntry = new Route();
    ok(_.isObject(routeEntry), 'routeEntry must be an object');

    equal(routeEntry.pattern(), undefined, 'routeEntry.pattern() must be undefined');
    equal(routeEntry.callback(), undefined, 'routeEntry.callback() must be undefined');
    equal(routeEntry.constraints(), undefined, 'routeEntry.constraints() must be undefined');

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

    routeEntry.pattern(pattern);
    routeEntry.callback(callback);
    routeEntry.constraints(conditions);

    equal(routeEntry.pattern(), pattern, 'routeEntry.pattern() must be ' + pattern);
    equal(routeEntry.callback(), callback, 'routeEntry.callback() must be ' + callback);
    equal(routeEntry.constraints(), conditions, 'routeEntry.constraints() must be ' + conditions);

    equal(routeEntry.callback()(), ':foo-:bar-call-backed', 'routeEntry.callback()() must return: \':foo-:bar-call-backed\'');


    //use constructor, then update

    var routeEntry2 = new Route(pattern, callback, conditions);

    equal(routeEntry2.pattern(null), pattern, 'routeEntry2.pattern() must be: ' + pattern);
    equal(routeEntry2.callback(undefined), callback, 'routeEntry2.callback() must be: ' + callback);
    equal(routeEntry2.constraints(false), conditions, 'routeEntry2.constraints() must be: ' + conditions);

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

    routeEntry2.pattern(pattern2).callback(callback2).constraints(conditions2);

    equal(routeEntry2.pattern(), pattern2, 'routeEntry2.pattern() must be ' + pattern2);
    equal(routeEntry2.callback(), callback2, 'routeEntry2.callback() must be ' + callback2);
    equal(routeEntry2.constraints(), conditions2, 'routeEntry2.constraints() must be ' + conditions2);

    var routeEntry3 = new Route().pattern(pattern2).callback(callback2).constraints(conditions2);

    equal(routeEntry3.pattern(), pattern2, 'routeEntry3.pattern() must be ' + pattern2);
    equal(routeEntry3.callback(), callback2, 'routeEntry3.callback() must be ' + callback2);
    equal(routeEntry3.constraints(), conditions2, 'routeEntry3.constraints() must be ' + conditions2);



    //invalid arguments for constructor

    var routeEntry4 = new Route(null, false, '');

    ok(_.isUndefined(routeEntry4.pattern()), 'routeEntry4.pattern() must be undefined');
    ok(_.isUndefined(routeEntry4.callback()), 'routeEntry4.callback() must be undefined');
    ok(_.isUndefined(routeEntry4.constraints()), 'routeEntry4.constraints() must be undefined');

    //regular expression for pattern
    var regPattern = /foo\/bar/;
    routeEntry4.pattern(regPattern);

    ok(_.isRegExp(routeEntry4.pattern()), '_.isRegExp(routeEntry4.pattern()) must return true');
    equal(routeEntry4.pattern(), regPattern, 'routeEntry4.pattern() must return: ' + regPattern);

  });

  test('Route#isValid', function() {

    var routeEntry = new Route();

    ok(!routeEntry.isValid(), 'routeEntry.isValid() must return false');

    routeEntry.pattern(':foo/:bar');

    ok(!routeEntry.isValid(), 'routeEntry.isValid() must return false');

    routeEntry.callback(function(foo, bar) {

    });

    ok(routeEntry.isValid(), 'routeEntry.isValid must return true');

    routeEntry.constraints({
      foo: [
        'test'
      ],
      bar: [
        /a-z/
      ]
    });

    ok(routeEntry.isValid(), 'routeEntry.isValid must return true');

  });

  test('Route#isMatched', function() {
    var routeEntry = new Route();
    routeEntry.callback(function() {

    }); //for valid

    ok(!routeEntry.isMatched('pattern/value'), 'routeEntry.isMatched(\'pattern/value\') must return false');

    routeEntry.pattern('/foo/bar');


    ok(routeEntry.isMatched('/foo/bar'), 'routeEntry.isMatched(\'/foo/bar\') must return true');


    routeEntry.pattern('/:para1/:param2');

    ok(routeEntry.isMatched('/fooParam/barParam'), 'routeEntry.isMatched(\'/fooParam/barParam\') must return true');

  });

  test('Route#dispatch', function() {

    ok(true);

  });


  test('Route#url', function() {
    ok(true)
  });


  test('Route#toRegExp', function() {

    var routeEntry = new Route();

    ok(_.isRegExp(routeEntry.toRegExp()), 'routeEntry.toRegExp() must return a regular expression');

    ok(_.isEqual(routeEntry.toRegExp(), new RegExp()), 'routeEntry.toRegExp() must be an empty regExp');


    routeEntry.pattern('/foo/bar');

    ok(_.isEqual(routeEntry.toRegExp(), new RegExp('^/foo/bar$')), 'routeEntry.toRegExp() must be: /^/foo/bar$/');

    routeEntry.pattern('/:foo/:bar');

    ok(_.isEqual(routeEntry.toRegExp(), new RegExp('^/([^/]+)/([^/]+)$')), 'routeEntry.toRegExp() must return: /^/([^/]+)/([^/]+)$/');


    routeEntry.pattern('/:foo/p:pageNumber');

    ok(_.isEqual(routeEntry.toRegExp(), new RegExp('^/([^/]+)/p([^/]+)$')), 'routeEntry.toRegExp() must return: /^/([^/]+)/p([^/]+)$/');


    var pattern1 = /^foo\/bar\/$/i;

    routeEntry.pattern(pattern1);

    equal(routeEntry.toRegExp(), pattern1, 'routeEntry.toRegExp() must return: ' + pattern1);

    var pattern2 = new RegExp('^hello/world$', 'i');

    routeEntry.pattern(pattern2);
    equal(routeEntry.toRegExp(), pattern2, 'routeEntry.toRegExp() must return: ' + pattern2);

    routeEntry.pattern('/download/*filePath');

    ok(_.isEqual(routeEntry.toRegExp(), new RegExp('^/download/(.*?)$')), 'routeEntry.toRegExp() must return: /^/download/(.*?)$/');


    //add pattern with constraints

    routeEntry.pattern('/users/:userId')
              .constraints({
                userId: [
                  'me',
                  /\d+/
                ]
              });

    var expectedConstraintRegExp = new RegExp('^/users/(me|\\d+)$');

    ok(_.isEqual(routeEntry.toRegExp(), expectedConstraintRegExp), 'routeEntry.toRegExp() must return: /^/users/(me|\\d+)$/');

    ok(routeEntry.toRegExp().test('/users/me'), 'must match /users/me');
    ok(routeEntry.toRegExp().test('/users/123'), 'must match /users/123');
  });



});