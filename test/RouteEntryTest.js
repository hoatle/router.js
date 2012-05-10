/**
 * Unit test for router.RouteEntry.
 */
$(document).ready(function() {
  module('router::core');

  var RouteEntry = router.RouteEntry;

  test('RouteEntry basic', function() {

    expect(8);

    ok(RouteEntry.prototype.pattern, 'RouteEntry.prototype.pattern must be available');
    ok(RouteEntry.prototype.callback, 'RouteEntry.prototype.callback must be available');
    ok(RouteEntry.prototype.constraints, 'RouteEntry.prototype.constraints must be available');
    ok(RouteEntry.prototype.isValid, 'RouteEntry.prototype.isValid must be available');
    ok(RouteEntry.prototype.isMatched, 'RouteEntry.prototype.isMatched must be available');
    ok(RouteEntry.prototype.dispatch, 'RouteEntry.prototype.dispatch must be available');
    ok(RouteEntry.prototype.url, 'RouteEntry.prototype.url must be available');
    ok(RouteEntry.prototype.toRegExp, 'RouteEntry.prototype.toRegExp must be available');

  });


  test('RouteEntry instance', function() {
    var routeEntry = new RouteEntry();
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

    var routeEntry2 = new RouteEntry(pattern, callback, conditions);

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

    var routeEntry3 = new RouteEntry().pattern(pattern2).callback(callback2).constraints(conditions2);

    equal(routeEntry3.pattern(), pattern2, 'routeEntry3.pattern() must be ' + pattern2);
    equal(routeEntry3.callback(), callback2, 'routeEntry3.callback() must be ' + callback2);
    equal(routeEntry3.constraints(), conditions2, 'routeEntry3.constraints() must be ' + conditions2);



    //invalid arguments for constructor

    var routeEntry4 = new RouteEntry(null, false, '');

    ok(_.isUndefined(routeEntry4.pattern()), 'routeEntry4.pattern() must be undefined');
    ok(_.isUndefined(routeEntry4.callback()), 'routeEntry4.callback() must be undefined');
    ok(_.isUndefined(routeEntry4.constraints()), 'routeEntry4.constraints() must be undefined');

    //regular expression for pattern
    var regPattern = /foo\/bar/;
    routeEntry4.pattern(regPattern);

    ok(_.isRegExp(routeEntry4.pattern()), '_.isRegExp(routeEntry4.pattern()) must return true');
    equal(routeEntry4.pattern(), regPattern, 'routeEntry4.pattern() must return: ' + regPattern);

  });

  test('RouteEntry#isValid', function() {

    var routeEntry = new RouteEntry();

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

  test('RouteEntry#isMatched', function() {
    var routeEntry = new RouteEntry();
    routeEntry.callback(function() {

    }); //for valid

    ok(!routeEntry.isMatched('pattern/value'), 'routeEntry.isMatched(\'pattern/value\') must return false');

    routeEntry.pattern('/foo/bar');


    ok(routeEntry.isMatched('/foo/bar'), 'routeEntry.isMatched(\'/foo/bar\') must return true');


    routeEntry.pattern('/:para1/:param2');

    ok(routeEntry.isMatched('/fooParam/barParam'), 'routeEntry.isMatched(\'/fooParam/barParam\') must return true');

  });

  test('RouteEntry#dispatch', function() {

    ok(true);

  });


  test('RouteEntry#url', function() {
    ok(true)
  });


  test('RouteEntry#toRegExp', function() {

    var routeEntry = new RouteEntry();

    ok(_.isRegExp(routeEntry.toRegExp()), 'routeEntry.toRegExp() must return a regular expression');

    equal(routeEntry.toRegExp().toString(), '/(?:)/', 'routeEntry.toRegExp().toString() must return: \'/(?:)/\'');


    routeEntry.pattern('/foo/bar');

    equal(routeEntry.toRegExp().toString(), '/^/foo/bar$/', 'routeEntry.toRegExp().toString() must return: \'/^/foo/bar$/\'');

    routeEntry.pattern('/:foo/:bar');

    equal(routeEntry.toRegExp().toString(), '/^/([^/]+)/([^/]+)$/', 'routeEntry.toRegExp().toString() must return: \'/^/([^/]+)/([^/]+)$/\'');

    routeEntry.pattern('/:foo/p:pageNumber');

    equal(routeEntry.toRegExp().toString(), '/^/([^/]+)/p([^/]+)$/', 'routeEntry.toRegExp().toString() must return: \'/^/([^/]+)/p([^/]+)$/\'');

    var pattern1 = /^foo\/bar\/$/i;

    routeEntry.pattern(pattern1);
    equal(routeEntry.toRegExp(), pattern1, 'routeEntry.toRegExp() must return: ' + pattern1);

    var pattern2 = new RegExp('^hello/world$', 'i');

    routeEntry.pattern(pattern2);
    equal(routeEntry.toRegExp(), pattern2, 'routeEntry.toRegExp() must return: ' + pattern2);

    routeEntry.pattern('/download/*filePath');
    equal(routeEntry.toRegExp().toString(), '/^/download/(.*?)$/', 'routeEntry.toRegExp().toString() must return: \'/^/download/(.*?)$/\'');

    //add pattern with constraints

    routeEntry.pattern('/users/:userId')
              .constraints({
                userId: [
                  'me',
                  /\d+/
                ]
              });

    equal(routeEntry.toRegExp().toString(), '/^/users/(me|\d+)$/', 'routeEntry.toRegExp().toString() must return: \'/^/users/(me|\d+)$/\'');

  });



});