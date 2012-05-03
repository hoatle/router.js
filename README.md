<pre>
                     __
                    /\ \__                   __
 _ __   ___   __  __\ \ ,_\    __   _ __    /\_\    ____
/\`'__\/ __`\/\ \/\ \\ \ \/  /'__`\/\`'__\  \/\ \  /',__\
\ \ \//\ \L\ \ \ \_\ \\ \ \_/\  __/\ \ \/ __ \ \ \/\__, `\
 \ \_\\ \____/\ \____/ \ \__\ \____\\ \_\/\_\_\ \ \/\____/
  \/_/ \/___/  \/___/   \/__/\/____/ \/_/\/_/\ \_\ \/___/
                                            \ \____/
                                             \/___/
</pre>
router.js is developed to make it easy to map and route action handlers on both server and client side.

## Resources

* Unit test: http://hoatle.github.com/router.js/test/

## Use it on client side

* Simple cases with literal string only

<pre>
  router.map('/foo/bar/', function() {
    //action handler
  });
</pre>

or:

<pre>
  router.map('/foo/bar').to(function() {
    //action handler
  });
</pre>

* Using regular expression

<pre>
  router.map(/\/foo\/bar\//, function() {
    //action handler
  });
</pre>

or:

<pre>
  router.map(/\/foo\/bar\//).to(function() {
    //action handler
  });
</pre>

* Using parameters

<pre>
  router.map('/:foo/:bar', function(foo, bar) {
    //action handler
  });
</pre>

or:

<pre>
  router.map('/:foo/:bar').to(function(foo, bar) {
    //action handler
  });
</pre>


* Using parameters with conditions

<pre>
  router.map('/:foo/:bar/', function() {
    //action handler
  }, { //condition
    foo: [
      'foo1',
      'foo2',
      /[a-Z]/
    ],
    bar: [
      /[0-9]/
    ]
  })
</pre>

or:

<pre>
  router.map('/:foo/:bar/').to(function(foo, bar) {
    //action handler
  }).where({ //condition
    foo: [
      'foo1',
      'foo2',
      /[a-Z]/
    ],
    bar: [
      /[0-9]/
    ]
  });
</pre>


