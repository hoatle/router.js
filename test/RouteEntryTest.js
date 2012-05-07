/**
 * Unit test for router.RouteEntry.
 */
$(document).ready(function() {
  module('router::core');

  var RouteEntry = router.RouteEntry;

  test('router.RouteEntry', function() {
    var routeEntry = new RouteEntry();
    ok(_.isObject(routeEntry), 'routeEntry must be an object');

    equal(routeEntry.pattern(), undefined, 'routeEntry.pattern() must be undefined');
    equal(routeEntry.callback(), undefined, 'routeEntry.callback() must be undefined');
    equal(routeEntry.conditions(), undefined, 'routeEntry.conditions() must be undefined');

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
    routeEntry.conditions(conditions);

    equal(routeEntry.pattern(), pattern, 'routeEntry.pattern() must be ' + pattern);
    equal(routeEntry.callback(), callback, 'routeEntry.callback() must be ' + callback);
    equal(routeEntry.conditions(), conditions, 'routeEntry.conditions() must be ' + conditions);

    equal(routeEntry.callback()(), ':foo-:bar-call-backed', 'routeEntry.callback()() must return: \':foo-:bar-call-backed\'');


    //use constructor, then update

    var routeEntry2 = new RouteEntry(pattern, callback, conditions);

    equal(routeEntry2.pattern(null), pattern, 'routeEntry2.pattern() must be ' + pattern);
    equal(routeEntry2.callback(undefined), callback, 'routeEntry2.callback() must be ' + callback);
    equal(routeEntry2.conditions(false), conditions, 'routeEntry2.conditions() must be ' + conditions);

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

    routeEntry2.pattern(pattern2).callback(callback2).conditions(conditions2);

    equal(routeEntry2.pattern(), pattern2, 'routeEntry2.pattern() must be ' + pattern2);
    equal(routeEntry2.callback(), callback2, 'routeEntry2.callback() must be ' + callback2);
    equal(routeEntry2.conditions(), conditions2, 'routeEntry2.conditions() must be ' + conditions2);

    var routeEntry3 = new RouteEntry().pattern(pattern2).callback(callback2).conditions(conditions2);

    equal(routeEntry3.pattern(), pattern2, 'routeEntry3.pattern() must be ' + pattern2);
    equal(routeEntry3.callback(), callback2, 'routeEntry3.callback() must be ' + callback2);
    equal(routeEntry3.conditions(), conditions2, 'routeEntry3.conditions() must be ' + conditions2);



  });

});