/*
 * Copyright (C) hoatle
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * router.js is developed to make it easy to map and route action handlers on both server and client side.
 *
 * <h2>Pattern specification</h2>
 * <ul>
 *   <li></li>
 * <ul>
 *
 * <h2>Matching rules</h2>
 * <ul>
 *   <li>The first successful match is used with no further matches attempted.</li>
 *   <li>The router will try to find an exact match of pattern specified. A successful match selects the action callback.</li>
 *   <li>The router will recursively try to match the longest path-prefix. This is done by stepping down the path tree a directory at a time,
 *       using the ’/’ character as a path separator. The longest match determines the action callback selected.</li>
 *   <li>If no action callback matched, the defaultCallback will be called.</li>
 * </ul>
 *
 * @author <a href="http://hoatle.net">hoatle (hoatlevan at gmail dot com)</a>
 * @since  May 1, 2012
 */
!(function() {
  var root = this;

  root.router = {
    /**
     * Registers a pattern.
     *
     * Pattern could be:
     * - stringPath: map('/foo/bar/').
     * - httpMethod stringPath: map('get /foo/bar').
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
     * Removes a registered mapped pattern.
     *
     * @param pattern the mapped pattern
     */
    removeMap: function(pattern) {
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
    },

    // shorthand APIs for server side.

    /**
     * Registers a http GET method handler matching a specified pattern.
     *
     * Shorthand for: map('GET pattern').
     *
     * @param pattern the specified pattern
     *
     * @return {*}
     */
    get: function(pattern) {

      return this.map('GET ' + pattern);
    },

    /**
     * Registers a http POST method handler matching a specified pattern.
     *
     * Shorthand for: map('POST pattern').
     *
     * @param pattern the specified pattern
     * @return {*}
     */
    post: function(pattern) {

      return this.map('POST ' + pattern);
    },

    /**
     * Registers a http PUT method handler matching a specified pattern.
     *
     * Shorthand for: map('PUT pattern').
     *
     * @param pattern the specified pattern.
     *
     * @return {*}
     */
    put: function(pattern) {

      return this.map('PUT ' + pattern);
    },

    /**
     * Registers a http DELETE method handler matching a specified pattern.
     *
     * Shorthand for: map('DELETE pattern').
     *
     * @param pattern the specified pattern.
     * @return {*}
     */
    del: function(pattern) {

      return this.map('DELETE ' + pattern);
    }
  };

}).call(this);

