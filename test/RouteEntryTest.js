/**
 * Unit test for router.RouteEntry.
 */
$(document).ready(function() {
  module('router.RouteEntry');

  var RouteEntry = router.RouteEntry;

  test('RouteEntry', function() {
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

    equal(routeEntry.callback()(), ':foo-:bar-call-backed', 'routeEntry.callback()() must return: \':foo-:bar-call-backed\'')



  });

});