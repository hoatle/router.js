/**
 * jQuery router plugin, v0.1.0
 *
 * @author @hoatle
 * @since  May 1, 2012
 *
 *
 *  The first successful match is used with no further matches attempted.
 *  The router will try to find an exact match of pattern specified. A successful match selects the action callback.
 *  The router will recursively try to match the longest path-prefix.
 *    This is done by stepping down the path tree a directory at a time, using the ’/’ character as a path separator.
 *    The longest match determines the action callback selected.
 *  If no action callback matched, the defaultCallback will be called.
 *
 *  All the callback will be called and passed the first argument as 'value' string.
 *
 */

!(function(root) {

  root.router = {
    /**
     * Registers a pattern.
     *
     * @param pattern the pattern. This can be a string, or a regular expression.
     */
    map: function(pattern) {
      //TODO implement
      return this;
    },

    /**
     * Maps the registered pattern to this callback method.
     *
     * @param callback the callback method
     */
    to: function(callback) {
      //map and sorts by longest path separator.
      //TODO implement
      return this;
    },

    /**
     * Defines the matching condition.
     *
     * @param params the literal object of matching condition
     */
    where: function(params) {
      //TODO implement
    },

    /**
     * Routes the value to find the callback registered by a pattern.
     * If no pattern matches this value, the defaultCallback will be called.
     *
     * @param value the pattern value.
     * @param defaultCallback the default callback.
     */
    dispatch: function(value, defaultCallback) {
      //TODO implement
    },

    /**
     * Constructs a url from a params literal object.
     *
     * @param params the literal object.
     */
    url: function(params, extraParamIncluded) {
      //TODO implement
      return '';
    }
  };


}).call(this);

