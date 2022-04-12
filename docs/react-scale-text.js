(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object') { module.exports = factory(require('react')); }
  else if (typeof define === 'function' && define.amd) { define(['react'], factory); }
  else if (typeof exports === 'object') { exports.ScaleText = factory(require('react')); }
  else { root.ScaleText = factory(root.React); }
}(this, __WEBPACK_EXTERNAL_MODULE_19__ =>
/** *** */ (function(modules) { // webpackBootstrap
    /** *** */ 	// The module cache
    /** *** */ 	const installedModules = {};
    /** *** */
    /** *** */ 	// The require function
    /** *** */ 	function __webpack_require__(moduleId) {
      /** *** */
      /** *** */ 		// Check if module is in cache
      /** *** */ 		if (installedModules[moduleId]) {
        /** *** */ 			return installedModules[moduleId].exports;
        /** *** */ 		}
      /** *** */ 		// Create a new module (and put it into the cache)
      /** *** */ 		const module = installedModules[moduleId] = {
        /** *** */ 			i: moduleId,
        /** *** */ 			l: false,
        /** *** */ 			exports: {}
        /** *** */ 		};
      /** *** */
      /** *** */ 		// Execute the module function
      /** *** */ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
      /** *** */
      /** *** */ 		// Flag the module as loaded
      /** *** */ 		module.l = true;
      /** *** */
      /** *** */ 		// Return the exports of the module
      /** *** */ 		return module.exports;
      /** *** */ 	}
    /** *** */
    /** *** */
    /** *** */ 	// expose the modules object (__webpack_modules__)
    /** *** */ 	__webpack_require__.m = modules;
    /** *** */
    /** *** */ 	// expose the module cache
    /** *** */ 	__webpack_require__.c = installedModules;
    /** *** */
    /** *** */ 	// identity function for calling harmony imports with the correct context
    /** *** */ 	__webpack_require__.i = function(value) { return value; };
    /** *** */
    /** *** */ 	// define getter function for harmony exports
    /** *** */ 	__webpack_require__.d = function(exports, name, getter) {
      /** *** */ 		if (!__webpack_require__.o(exports, name)) {
        /** *** */ 			Object.defineProperty(exports, name, {
          /** *** */ 				configurable: false,
          /** *** */ 				enumerable: true,
          /** *** */ 				get: getter
          /** *** */ 			});
        /** *** */ 		}
      /** *** */ 	};
    /** *** */
    /** *** */ 	// getDefaultExport function for compatibility with non-harmony modules
    /** *** */ 	__webpack_require__.n = function(module) {
      /** *** */ 		const getter = module && module.__esModule ?
      /** *** */ 			function getDefault() { return module.default; } :
      /** *** */ 			function getModuleExports() { return module; };
      /** *** */ 		__webpack_require__.d(getter, 'a', getter);
      /** *** */ 		return getter;
      /** *** */ 	};
    /** *** */
    /** *** */ 	// Object.prototype.hasOwnProperty.call
    /** *** */ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
    /** *** */
    /** *** */ 	// __webpack_public_path__
    /** *** */ 	__webpack_require__.p = '';
    /** *** */
    /** *** */ 	// Load entry module and return exports
    /** *** */ 	return __webpack_require__(__webpack_require__.s = 20);
    /** *** */ }([
    /* 0 */
    /***/ (function(module, exports, __webpack_require__) {
      const randomFromSeed = __webpack_require__(52);

      const ORIGINAL = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-';
      let alphabet;
      let previousSeed;

      let shuffled;

      function reset() {
        shuffled = false;
      }

      function setCharacters(_alphabet_) {
        if (!_alphabet_) {
          if (alphabet !== ORIGINAL) {
            alphabet = ORIGINAL;
            reset();
          }
          return;
        }

        if (_alphabet_ === alphabet) {
          return;
        }

        if (_alphabet_.length !== ORIGINAL.length) {
          throw new Error(`Custom alphabet for shortid must be ${ORIGINAL.length} unique characters. You submitted ${_alphabet_.length} characters: ${_alphabet_}`);
        }

        const unique = _alphabet_.split('').filter((item, ind, arr) => ind !== arr.lastIndexOf(item));

        if (unique.length) {
          throw new Error(`Custom alphabet for shortid must be ${ORIGINAL.length} unique characters. These characters were not unique: ${unique.join(', ')}`);
        }

        alphabet = _alphabet_;
        reset();
      }

      function characters(_alphabet_) {
        setCharacters(_alphabet_);
        return alphabet;
      }

      function setSeed(seed) {
        randomFromSeed.seed(seed);
        if (previousSeed !== seed) {
          reset();
          previousSeed = seed;
        }
      }

      function shuffle() {
        if (!alphabet) {
          setCharacters(ORIGINAL);
        }

        const sourceArray = alphabet.split('');
        const targetArray = [];
        let r = randomFromSeed.nextValue();
        let characterIndex;

        while (sourceArray.length > 0) {
          r = randomFromSeed.nextValue();
          characterIndex = Math.floor(r * sourceArray.length);
          targetArray.push(sourceArray.splice(characterIndex, 1)[0]);
        }
        return targetArray.join('');
      }

      function getShuffled() {
        if (shuffled) {
          return shuffled;
        }
        shuffled = shuffle();
        return shuffled;
      }

      /**
 * lookup shuffled letter
 * @param index
 * @returns {string}
 */
      function lookup(index) {
        const alphabetShuffled = getShuffled();
        return alphabetShuffled[index];
      }

      module.exports = {
        characters,
        seed: setSeed,
        lookup,
        shuffled: getShuffled
      };
      /***/ }),
    /* 1 */
    /***/ (function(module, exports, __webpack_require__) {
      /**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *
 */

      function makeEmptyFunction(arg) {
        return function () {
          return arg;
        };
      }

      /**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
      const emptyFunction = function emptyFunction() {};

      emptyFunction.thatReturns = makeEmptyFunction;
      emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
      emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
      emptyFunction.thatReturnsNull = makeEmptyFunction(null);
      emptyFunction.thatReturnsThis = function () {
        return this;
      };
      emptyFunction.thatReturnsArgument = function (arg) {
        return arg;
      };

      module.exports = emptyFunction;
      /***/ }),
    /* 2 */
    /***/ (function(module, exports, __webpack_require__) {
      /**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */


      /**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

      let validateFormat = function validateFormat(format) {};

      if (undefined !== 'production') {
        validateFormat = function validateFormat(format) {
          if (format === undefined) {
            throw new Error('invariant requires an error message argument');
          }
        };
      }

      function invariant(condition, format, a, b, c, d, e, f) {
        validateFormat(format);

        if (!condition) {
          let error;
          if (format === undefined) {
            error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
          }
          else {
            const args = [a, b, c, d, e, f];
            let argIndex = 0;
            error = new Error(format.replace(/%s/g, () => args[argIndex++]));
            error.name = 'Invariant Violation';
          }

          error.framesToPop = 1; // we don't care about invariant's own frame
          throw error;
        }
      }

      module.exports = invariant;
      /***/ }),
    /* 3 */
    /***/ (function(module, exports, __webpack_require__) {
      const Symbol = __webpack_require__(8);
      const getRawTag = __webpack_require__(27);
      const objectToString = __webpack_require__(32);

      /** `Object#toString` result references. */
      const nullTag = '[object Null]';
      const undefinedTag = '[object Undefined]';

      /** Built-in value references. */
      const symToStringTag = Symbol ? Symbol.toStringTag : undefined;

      /**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
      function baseGetTag(value) {
        if (value == null) {
          return value === undefined ? undefinedTag : nullTag;
        }
        return (symToStringTag && symToStringTag in Object(value))
          ? getRawTag(value)
          : objectToString(value);
      }

      module.exports = baseGetTag;
      /***/ }),
    /* 4 */
    /***/ (function(module, exports) {
      /**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
      function isObjectLike(value) {
        return value != null && typeof value === 'object';
      }

      module.exports = isObjectLike;
      /***/ }),
    /* 5 */
    /***/ (function(module, exports, __webpack_require__) {
      /**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


      const ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

      module.exports = ReactPropTypesSecret;
      /***/ }),
    /* 6 */
    /***/ (function(module, exports, __webpack_require__) {
      Object.defineProperty(exports, '__esModule', {
        value: true
      });
      exports.getStyle = getStyle;
      exports.getOverflow = getOverflow;
      exports.hasOverflow = exports.css = exports.camelize = exports.uniqId = void 0;

      /**
 * @file utils.js
 * @description DOM utility functions
 */
      // Simple way to generate a unique id
      let id = 0;

      const uniqId = function uniqId() {
        return 'uid-'.concat(Date.now(), '-').concat(id++);
      }; // Camelcase a dashed string, ie do-thing => doThing


      exports.uniqId = uniqId;

      const camelize = function camelize(str) {
        return str.replace(/-(\w)/g, (s, letter) => letter.toUpperCase());
      };
      /* eslint-disable no-param-reassign, guard-for-in, no-restricted-syntax */
      // Set multiple css properties on an element `el` by
      // passing in a `style` object that defines what properties
      // to set and their value


      exports.camelize = camelize;

      const css = function css(el, styles) {
        for (const property in styles) {
          el.style[property] = styles[property];
        }
      };
      /* eslint-enable no-param-reassign, guard-for-in, no-restricted-syntax */
      // Get the current style property value for the given element


      exports.css = css;

      function getStyle(el, styleProp) {
        if (el.currentStyle) {
          return el.currentStyle[camelize(styleProp)];
        }
        else if (document.defaultView && document.defaultView.getComputedStyle) {
          return document.defaultView.getComputedStyle(el, null).getPropertyValue(styleProp);
        }

        return el.style[camelize(styleProp)];
      }

      function getOverflow(el) {
        return [el.clientWidth < el.scrollWidth, el.clientHeight < el.scrollHeight];
      }

      const hasOverflow = function hasOverflow(el) {
        return getOverflow(el).some(v => v === true);
      };

      exports.hasOverflow = hasOverflow;
      /***/ }),
    /* 7 */
    /***/ (function(module, exports, __webpack_require__) {
      /**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */


      const emptyFunction = __webpack_require__(1);

      /**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

      let warning = emptyFunction;

      if (undefined !== 'production') {
        const printWarning = function printWarning(format) {
          for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }

          let argIndex = 0;
          const message = `Warning: ${format.replace(/%s/g, () => args[argIndex++])}`;
          if (typeof console !== 'undefined') {
            console.error(message);
          }
          try {
            // --- Welcome to debugging React ---
            // This error was thrown as a convenience so that you can use this stack
            // to find the callsite that caused this warning to fire.
            throw new Error(message);
          }
          catch (x) {}
        };

        warning = function warning(condition, format) {
          if (format === undefined) {
            throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
          }

          if (format.indexOf('Failed Composite propType: ') === 0) {
            return; // Ignore CompositeComponent proptype check.
          }

          if (!condition) {
            for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
              args[_key2 - 2] = arguments[_key2];
            }

            printWarning.apply(undefined, [format].concat(args));
          }
        };
      }

      module.exports = warning;
      /***/ }),
    /* 8 */
    /***/ (function(module, exports, __webpack_require__) {
      const root = __webpack_require__(10);

      /** Built-in value references. */
      const Symbol = root.Symbol;

      module.exports = Symbol;
      /***/ }),
    /* 9 */
    /***/ (function(module, exports, __webpack_require__) {
      /* WEBPACK VAR INJECTION */(function(global) { /** Detect free variable `global` from Node.js. */
        const freeGlobal = typeof global === 'object' && global && global.Object === Object && global;

        module.exports = freeGlobal;
        /* WEBPACK VAR INJECTION */ }.call(exports, __webpack_require__(54)));
      /***/ }),
    /* 10 */
    /***/ (function(module, exports, __webpack_require__) {
      const freeGlobal = __webpack_require__(9);

      /** Detect free variable `self`. */
      const freeSelf = typeof self === 'object' && self && self.Object === Object && self;

      /** Used as a reference to the global object. */
      const root = freeGlobal || freeSelf || Function('return this')();

      module.exports = root;
      /***/ }),
    /* 11 */
    /***/ (function(module, exports) {
      /** Used as references for various `Number` constants. */
      const MAX_SAFE_INTEGER = 9007199254740991;

      /**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
      function isLength(value) {
        return typeof value === 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
      }

      module.exports = isLength;
      /***/ }),
    /* 12 */
    /***/ (function(module, exports, __webpack_require__) {
      const randomByte = __webpack_require__(51);

      function encode(lookup, number) {
        let loopCounter = 0;
        let done;

        let str = '';

        while (!done) {
          str += lookup(((number >> (4 * loopCounter)) & 0x0f) | randomByte());
          done = number < (Math.pow(16, loopCounter + 1));
          loopCounter++;
        }
        return str;
      }

      module.exports = encode;
      /***/ }),
    /* 13 */
    /***/ (function(module, exports) {
      module.exports = function(module) {
        if (!module.webpackPolyfill) {
          module.deprecate = function() {};
          module.paths = [];
          // module.parent = undefined by default
          if (!module.children) module.children = [];
          Object.defineProperty(module, 'loaded', {
            enumerable: true,
            get() {
              return module.l;
            }
          });
          Object.defineProperty(module, 'id', {
            enumerable: true,
            get() {
              return module.i;
            }
          });
          module.webpackPolyfill = 1;
        }
        return module;
      };
      /***/ }),
    /* 14 */
    /***/ (function(module, exports, __webpack_require__) {
      Object.defineProperty(exports, '__esModule', {
        value: true
      });
      exports.default = getFillSize;

      const _domUtils = __webpack_require__(6);

      function _sliceIterator(arr, i) {
        const _arr = []; let _n = true; let _d = false; let _e; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } }
        catch (err) { _d = true; _e = err; }
        finally {
          try { if (!_n && _i.return != null) _i.return(); }
          finally { if (_d) throw _e; }
        } return _arr;
      }

      function _slicedToArray(arr, i) {
        if (Array.isArray(arr)) { return arr; }
        else if (Symbol.iterator in Object(arr)) { return _sliceIterator(arr, i); }
        throw new TypeError('Invalid attempt to destructure non-iterable instance');
      }

      // Determine the font-size to set on the element `el` that will
      // allow the first child of that element to fill the maximum height
      // and width without causing overflow
      function getFillSize(el, minFontSize, maxFontSize) {
        const widthOnly = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        const factor = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
        // Make an initial guess at font-size that fits width
        let fontSize = Math.min(Math.max(Math.min(Number(el.offsetWidth) / (factor * 10), maxFontSize), minFontSize));
        const step = 1;
        let complete;

        while (!complete) {
          el.style.fontSize = ''.concat(fontSize, 'px');

          const _getOverflow = (0, _domUtils.getOverflow)(el);
          const _getOverflow2 = _slicedToArray(_getOverflow, 2);
          const overflowWidth = _getOverflow2[0];
          const overflowHeight = _getOverflow2[1];

          if (!widthOnly && (overflowHeight || overflowWidth)) {
            if (fontSize <= minFontSize) {
              fontSize = minFontSize;
              complete = true;
            }
            else {
              fontSize -= step;
              complete = true;
            }
          }
          else if (widthOnly && overflowWidth) {
            fontSize -= step;
            complete = true;
          }
          else if (fontSize >= maxFontSize) {
            fontSize = maxFontSize;
            complete = true;
          }
          else if (!complete) {
            fontSize += step;
          }
        }

        return fontSize;
      }
      /* eslint-enable no-param-reassign */
      /***/ }),
    /* 15 */
    /***/ (function(module, exports, __webpack_require__) {
      Object.defineProperty(exports, '__esModule', {
        value: true
      });
      exports.default = shallowEqual;

      const _keys = _interopRequireDefault(__webpack_require__(41));

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      function _typeof(obj) {
        if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') { _typeof = function _typeof(obj) { return typeof obj; }; }
        else { _typeof = function _typeof(obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj; }; } return _typeof(obj);
      }

      /* eslint-disable no-void */
      function shallowEqual(objA, objB, compare, compareContext) {
        const context = compareContext || null;
        let ret = compare ? compare.call(context, objA, objB) : void 0;

        if (ret !== void 0) {
          return !!ret;
        }

        if (objA === objB) {
          return true;
        }

        if (_typeof(objA) !== 'object' || objA === null || _typeof(objB) !== 'object' || objB === null) {
          return false;
        }

        const keysA = (0, _keys.default)(objA);
        const keysB = (0, _keys.default)(objB);
        const len = keysA.length;

        if (len !== keysB.length) {
          return false;
        } // Test for A's keys different from B.


        const bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

        for (let i = 0; i < len; i++) {
          const key = keysA[i];

          if (!bHasOwnProperty(key)) {
            return false;
          }

          const valueA = objA[key];
          const valueB = objB[key];
          ret = compare ? compare.call(context, valueA, valueB, key) : void 0;

          if (ret === false || ret === void 0 && valueA !== valueB) {
            return false;
          }
        }

        return true;
      }
      /***/ }),
    /* 16 */
    /***/ (function(module, exports, __webpack_require__) {
      /**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

      if (undefined !== 'production') {
        const REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

        const isValidElement = function(object) {
          return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
        };

        // By explicitly using `prop-types` you are opting into new development behavior.
        // http://fb.me/prop-types-in-prod
        const throwOnDirectAccess = true;
        module.exports = __webpack_require__(46)(isValidElement, throwOnDirectAccess);
      }
      else {
        // By explicitly using `prop-types` you are opting into new production behavior.
        // http://fb.me/prop-types-in-prod
        module.exports = __webpack_require__(45)();
      }
      /***/ }),
    /* 17 */
    /***/ (function(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(49);
      /***/ }),
    /* 18 */
    /***/ (function(module, exports, __webpack_require__) {
      /**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */


      /**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

      let warning = function() {};

      if (undefined !== 'production') {
        warning = function(condition, format, args) {
          const len = arguments.length;
          args = new Array(len > 2 ? len - 2 : 0);
          for (let key = 2; key < len; key++) {
            args[key - 2] = arguments[key];
          }
          if (format === undefined) {
            throw new Error(
              '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
            );
          }

          if (format.length < 10 || (/^[s\W]*$/).test(format)) {
            throw new Error(
              `${'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: '}${format}`
            );
          }

          if (!condition) {
            let argIndex = 0;
            const message = `Warning: ${
              format.replace(/%s/g, () => args[argIndex++])}`;
            if (typeof console !== 'undefined') {
              console.error(message);
            }
            try {
              // This error was thrown as a convenience so that you can use this stack
              // to find the callsite that caused this warning to fire.
              throw new Error(message);
            }
            catch (x) {}
          }
        };
      }

      module.exports = warning;
      /***/ }),
    /* 19 */
    /***/ (function(module, exports) {
      module.exports = __WEBPACK_EXTERNAL_MODULE_19__;
      /***/ }),
    /* 20 */
    /***/ (function(module, exports, __webpack_require__) {
      const _react = _interopRequireWildcard(__webpack_require__(19));

      const _propTypes = _interopRequireDefault(__webpack_require__(16));

      const _warning = _interopRequireDefault(__webpack_require__(18));

      const _shortid = __webpack_require__(17);

      const _shallowEqual = _interopRequireDefault(__webpack_require__(15));

      const _getFillsize = _interopRequireDefault(__webpack_require__(14));

      const _domUtils = __webpack_require__(6);

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      function _interopRequireWildcard(obj) {
        if (obj && obj.__esModule) { return obj; }
        const newObj = {}; if (obj != null) {
          for (const key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
              const desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); }
              else { newObj[key] = obj[key]; }
            }
          }
        } newObj.default = obj; return newObj;
      }

      function _instanceof(left, right) {
        if (right != null && typeof Symbol !== 'undefined' && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); }
        return left instanceof right;
      }

      function _typeof(obj) {
        if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') { _typeof = function _typeof(obj) { return typeof obj; }; }
        else { _typeof = function _typeof(obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj; }; } return _typeof(obj);
      }

      function _extends() { _extends = Object.assign || function (target) { for (let i = 1; i < arguments.length; i++) { const source = arguments[i]; for (const key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

      function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

      function _defineProperties(target, props) { for (let i = 0; i < props.length; i++) { const descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

      function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

      function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === 'object' || typeof call === 'function')) { return call; } if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

      function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function'); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

      function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

      const ScaleText =
/* #__PURE__ */
(function (_Component) {
  _inherits(ScaleText, _Component);

  function ScaleText(props) {
    let _this;

    _classCallCheck(this, ScaleText);

    _this = _possibleConstructorReturn(this, (ScaleText.__proto__ || Object.getPrototypeOf(ScaleText)).call(this, props));
    _this.state = {
      size: null
    };
    _this._resizing = false;
    _this._invalidChild = false;
    _this._mounted = false;

    _this._handleResize = function () {
      if (!_this._resizing) {
        requestAnimationFrame(_this.handleResize.bind(_assertThisInitialized(_this)));
      }

      _this._resizing = true;
    };

    return _this;
  }

  _createClass(ScaleText, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      const children = this.props.children;
      this._mounted = true;
      this._invalidChild = _react.default.Children.count(children) > 1;
      (0, _warning.default)(!this._invalidChild, "'ScaleText' expects a single node as a child, but we found\n      ".concat(_react.default.Children.count(children), ' children instead.\n      No scaling will be done on this subtree'));

      if (this.shouldResize()) {
        this.resize();
        window.addEventListener('resize', this._handleResize);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      // compare children's props for change
      if (!(0, _shallowEqual.default)(prevProps.children.props, this.props.children.props) || prevProps.children !== this.props.children || prevProps !== this.props) {
        this.resize();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (!this.shouldResize()) {
        window.removeEventListener('resize', this._handleResize);
      }
    }
  }, {
    key: 'shouldResize',
    value: function shouldResize() {
      return !this._invalidChild;
    }
  }, {
    key: 'handleResize',
    value: function handleResize() {
      this._resizing = false;
      this.resize();
    }
  }, {
    key: 'resize',
    value: function resize() {
      const _this2 = this;

      const _props = this.props;
      const minFontSize = _props.minFontSize;
      const maxFontSize = _props.maxFontSize;
      const widthOnly = _props.widthOnly;
      if (!this._mounted || !this._wrapper) return;

      if (this.ruler) {
        this.clearRuler();
      }

      this.createRuler();
      const fontSize = (0, _getFillsize.default)(this.ruler, minFontSize || Number.NEGATIVE_INFINITY, maxFontSize || Number.POSITIVE_INFINITY, widthOnly);
      this.setState({
        size: parseFloat(fontSize, 10),
        complete: true
      }, () => {
        _this2.clearRuler();
      });
    }
  }, {
    key: 'createRuler',
    value: function createRuler() {
      // Create copy of wrapper for sizing
      this.ruler = this._wrapper.cloneNode(true);
      this.ruler.id = (0, _shortid.generate)();
      (0, _domUtils.css)(this.ruler, {
        position: 'absolute',
        top: '0px',
        left: 'calc(100vw * 2)',
        width: (0, _domUtils.getStyle)(this._wrapper, 'width'),
        height: (0, _domUtils.getStyle)(this._wrapper, 'height')
      });
      document.body.appendChild(this.ruler);
    }
  }, {
    key: 'clearRuler',
    value: function clearRuler() {
      if (this.ruler) {
        document.body.removeChild(this.ruler);
      }

      this.ruler = null;
    }
  }, {
    key: 'render',
    value: function render() {
      const _this3 = this;

      const fontSize = this.state.size;
      const _props2 = this.props;
      const children = _props2.children;
      const widthOnly = _props2.widthOnly;
      const overflowStyle = widthOnly ? {
        overflowY: 'visible',
        overflowX: 'hidden',
        height: 'auto'
      } : {
        overflow: 'hidden'
      };
      const child = _react.default.isValidElement(children) ? _react.default.Children.only(children) : _react.default.createElement('span', null, children);

      const style = _extends({
        fontSize: fontSize ? ''.concat(fontSize.toFixed(2), 'px') : 'inherit',
        width: '100%',
        height: '100%'
      }, overflowStyle);

      const childProps = {
        fontSize: fontSize ? parseFloat(fontSize.toFixed(2)) : 'inherit'
      };
      return _react.default.createElement('div', {
        className: 'scaletext-wrapper',
        ref: function ref(c) {
          _this3._wrapper = c;
        },
        style
      }, _react.default.cloneElement(child, childProps));
    }
  }]);

  return ScaleText;
}(_react.Component));

      ScaleText.propTypes = {
        children: _propTypes.default.node.isRequired,
        minFontSize: _propTypes.default.number.isRequired,
        maxFontSize: _propTypes.default.number.isRequired,
        widthOnly: _propTypes.default.boolean
      };
      ScaleText.defaultProps = {
        minFontSize: Number.NEGATIVE_INFINITY,
        maxFontSize: Number.POSITIVE_INFINITY,
        widthOnly: false
      }; // export default ScaleText;

      module.exports = ScaleText;
      /***/ }),
    /* 21 */
    /***/ (function(module, exports, __webpack_require__) {
      const baseTimes = __webpack_require__(25);
      const isArguments = __webpack_require__(34);
      const isArray = __webpack_require__(35);
      const isBuffer = __webpack_require__(37);
      const isIndex = __webpack_require__(28);
      const isTypedArray = __webpack_require__(40);

      /** Used for built-in method references. */
      const objectProto = Object.prototype;

      /** Used to check objects for own properties. */
      const hasOwnProperty = objectProto.hasOwnProperty;

      /**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
      function arrayLikeKeys(value, inherited) {
        const isArr = isArray(value);
        const isArg = !isArr && isArguments(value);
        const isBuff = !isArr && !isArg && isBuffer(value);
        const isType = !isArr && !isArg && !isBuff && isTypedArray(value);
        const skipIndexes = isArr || isArg || isBuff || isType;
        const result = skipIndexes ? baseTimes(value.length, String) : [];
        const length = result.length;

        for (const key in value) {
          if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
        // Safari 9 has enumerable `arguments.length` in strict mode.
          key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
            result.push(key);
          }
        }
        return result;
      }

      module.exports = arrayLikeKeys;
      /***/ }),
    /* 22 */
    /***/ (function(module, exports, __webpack_require__) {
      const baseGetTag = __webpack_require__(3);
      const isObjectLike = __webpack_require__(4);

      /** `Object#toString` result references. */
      const argsTag = '[object Arguments]';

      /**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
      function baseIsArguments(value) {
        return isObjectLike(value) && baseGetTag(value) == argsTag;
      }

      module.exports = baseIsArguments;
      /***/ }),
    /* 23 */
    /***/ (function(module, exports, __webpack_require__) {
      const baseGetTag = __webpack_require__(3);
      const isLength = __webpack_require__(11);
      const isObjectLike = __webpack_require__(4);

      /** `Object#toString` result references. */
      const argsTag = '[object Arguments]';
      const arrayTag = '[object Array]';
      const boolTag = '[object Boolean]';
      const dateTag = '[object Date]';
      const errorTag = '[object Error]';
      const funcTag = '[object Function]';
      const mapTag = '[object Map]';
      const numberTag = '[object Number]';
      const objectTag = '[object Object]';
      const regexpTag = '[object RegExp]';
      const setTag = '[object Set]';
      const stringTag = '[object String]';
      const weakMapTag = '[object WeakMap]';

      const arrayBufferTag = '[object ArrayBuffer]';
      const dataViewTag = '[object DataView]';
      const float32Tag = '[object Float32Array]';
      const float64Tag = '[object Float64Array]';
      const int8Tag = '[object Int8Array]';
      const int16Tag = '[object Int16Array]';
      const int32Tag = '[object Int32Array]';
      const uint8Tag = '[object Uint8Array]';
      const uint8ClampedTag = '[object Uint8ClampedArray]';
      const uint16Tag = '[object Uint16Array]';
      const uint32Tag = '[object Uint32Array]';

      /** Used to identify `toStringTag` values of typed arrays. */
      const typedArrayTags = {};
      typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
      typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

      /**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
      function baseIsTypedArray(value) {
        return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
      }

      module.exports = baseIsTypedArray;
      /***/ }),
    /* 24 */
    /***/ (function(module, exports, __webpack_require__) {
      const isPrototype = __webpack_require__(29);
      const nativeKeys = __webpack_require__(30);

      /** Used for built-in method references. */
      const objectProto = Object.prototype;

      /** Used to check objects for own properties. */
      const hasOwnProperty = objectProto.hasOwnProperty;

      /**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
      function baseKeys(object) {
        if (!isPrototype(object)) {
          return nativeKeys(object);
        }
        const result = [];
        for (const key in Object(object)) {
          if (hasOwnProperty.call(object, key) && key != 'constructor') {
            result.push(key);
          }
        }
        return result;
      }

      module.exports = baseKeys;
      /***/ }),
    /* 25 */
    /***/ (function(module, exports) {
      /**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
      function baseTimes(n, iteratee) {
        let index = -1;
        const result = Array(n);

        while (++index < n) {
          result[index] = iteratee(index);
        }
        return result;
      }

      module.exports = baseTimes;
      /***/ }),
    /* 26 */
    /***/ (function(module, exports) {
      /**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
      function baseUnary(func) {
        return function(value) {
          return func(value);
        };
      }

      module.exports = baseUnary;
      /***/ }),
    /* 27 */
    /***/ (function(module, exports, __webpack_require__) {
      const Symbol = __webpack_require__(8);

      /** Used for built-in method references. */
      const objectProto = Object.prototype;

      /** Used to check objects for own properties. */
      const hasOwnProperty = objectProto.hasOwnProperty;

      /**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
      const nativeObjectToString = objectProto.toString;

      /** Built-in value references. */
      const symToStringTag = Symbol ? Symbol.toStringTag : undefined;

      /**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
      function getRawTag(value) {
        const isOwn = hasOwnProperty.call(value, symToStringTag);
        const tag = value[symToStringTag];

        try {
          value[symToStringTag] = undefined;
          var unmasked = true;
        }
        catch (e) {}

        const result = nativeObjectToString.call(value);
        if (unmasked) {
          if (isOwn) {
            value[symToStringTag] = tag;
          }
          else {
            delete value[symToStringTag];
          }
        }
        return result;
      }

      module.exports = getRawTag;
      /***/ }),
    /* 28 */
    /***/ (function(module, exports) {
      /** Used as references for various `Number` constants. */
      const MAX_SAFE_INTEGER = 9007199254740991;

      /** Used to detect unsigned integer values. */
      const reIsUint = /^(?:0|[1-9]\d*)$/;

      /**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
      function isIndex(value, length) {
        length = length == null ? MAX_SAFE_INTEGER : length;
        return !!length &&
    (typeof value === 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
      }

      module.exports = isIndex;
      /***/ }),
    /* 29 */
    /***/ (function(module, exports) {
      /** Used for built-in method references. */
      const objectProto = Object.prototype;

      /**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
      function isPrototype(value) {
        const Ctor = value && value.constructor;
        const proto = (typeof Ctor === 'function' && Ctor.prototype) || objectProto;

        return value === proto;
      }

      module.exports = isPrototype;
      /***/ }),
    /* 30 */
    /***/ (function(module, exports, __webpack_require__) {
      const overArg = __webpack_require__(33);

      /* Built-in method references for those with the same name as other `lodash` methods. */
      const nativeKeys = overArg(Object.keys, Object);

      module.exports = nativeKeys;
      /***/ }),
    /* 31 */
    /***/ (function(module, exports, __webpack_require__) {
      /* WEBPACK VAR INJECTION */(function(module) {
        const freeGlobal = __webpack_require__(9);

        /** Detect free variable `exports`. */
        const freeExports = typeof exports === 'object' && exports && !exports.nodeType && exports;

        /** Detect free variable `module`. */
        const freeModule = freeExports && typeof module === 'object' && module && !module.nodeType && module;

        /** Detect the popular CommonJS extension `module.exports`. */
        const moduleExports = freeModule && freeModule.exports === freeExports;

        /** Detect free variable `process` from Node.js. */
        const freeProcess = moduleExports && freeGlobal.process;

        /** Used to access faster Node.js helpers. */
        const nodeUtil = (function() {
          try {
            return freeProcess && freeProcess.binding && freeProcess.binding('util');
          }
          catch (e) {}
        }());

        module.exports = nodeUtil;
        /* WEBPACK VAR INJECTION */ }.call(exports, __webpack_require__(13)(module)));
      /***/ }),
    /* 32 */
    /***/ (function(module, exports) {
      /** Used for built-in method references. */
      const objectProto = Object.prototype;

      /**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
      const nativeObjectToString = objectProto.toString;

      /**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
      function objectToString(value) {
        return nativeObjectToString.call(value);
      }

      module.exports = objectToString;
      /***/ }),
    /* 33 */
    /***/ (function(module, exports) {
      /**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
      function overArg(func, transform) {
        return function(arg) {
          return func(transform(arg));
        };
      }

      module.exports = overArg;
      /***/ }),
    /* 34 */
    /***/ (function(module, exports, __webpack_require__) {
      const baseIsArguments = __webpack_require__(22);
      const isObjectLike = __webpack_require__(4);

      /** Used for built-in method references. */
      const objectProto = Object.prototype;

      /** Used to check objects for own properties. */
      const hasOwnProperty = objectProto.hasOwnProperty;

      /** Built-in value references. */
      const propertyIsEnumerable = objectProto.propertyIsEnumerable;

      /**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
      const isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
        return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
      };

      module.exports = isArguments;
      /***/ }),
    /* 35 */
    /***/ (function(module, exports) {
      /**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
      const isArray = Array.isArray;

      module.exports = isArray;
      /***/ }),
    /* 36 */
    /***/ (function(module, exports, __webpack_require__) {
      const isFunction = __webpack_require__(38);
      const isLength = __webpack_require__(11);

      /**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
      function isArrayLike(value) {
        return value != null && isLength(value.length) && !isFunction(value);
      }

      module.exports = isArrayLike;
      /***/ }),
    /* 37 */
    /***/ (function(module, exports, __webpack_require__) {
      /* WEBPACK VAR INJECTION */(function(module) {
        const root = __webpack_require__(10);
        const stubFalse = __webpack_require__(42);

        /** Detect free variable `exports`. */
        const freeExports = typeof exports === 'object' && exports && !exports.nodeType && exports;

        /** Detect free variable `module`. */
        const freeModule = freeExports && typeof module === 'object' && module && !module.nodeType && module;

        /** Detect the popular CommonJS extension `module.exports`. */
        const moduleExports = freeModule && freeModule.exports === freeExports;

        /** Built-in value references. */
        const Buffer = moduleExports ? root.Buffer : undefined;

        /* Built-in method references for those with the same name as other `lodash` methods. */
        const nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

        /**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
        const isBuffer = nativeIsBuffer || stubFalse;

        module.exports = isBuffer;
        /* WEBPACK VAR INJECTION */ }.call(exports, __webpack_require__(13)(module)));
      /***/ }),
    /* 38 */
    /***/ (function(module, exports, __webpack_require__) {
      const baseGetTag = __webpack_require__(3);
      const isObject = __webpack_require__(39);

      /** `Object#toString` result references. */
      const asyncTag = '[object AsyncFunction]';
      const funcTag = '[object Function]';
      const genTag = '[object GeneratorFunction]';
      const proxyTag = '[object Proxy]';

      /**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
      function isFunction(value) {
        if (!isObject(value)) {
          return false;
        }
        // The use of `Object#toString` avoids issues with the `typeof` operator
        // in Safari 9 which returns 'object' for typed arrays and other constructors.
        const tag = baseGetTag(value);
        return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
      }

      module.exports = isFunction;
      /***/ }),
    /* 39 */
    /***/ (function(module, exports) {
      /**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
      function isObject(value) {
        const type = typeof value;
        return value != null && (type == 'object' || type == 'function');
      }

      module.exports = isObject;
      /***/ }),
    /* 40 */
    /***/ (function(module, exports, __webpack_require__) {
      const baseIsTypedArray = __webpack_require__(23);
      const baseUnary = __webpack_require__(26);
      const nodeUtil = __webpack_require__(31);

      /* Node.js helper references. */
      const nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

      /**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
      const isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

      module.exports = isTypedArray;
      /***/ }),
    /* 41 */
    /***/ (function(module, exports, __webpack_require__) {
      const arrayLikeKeys = __webpack_require__(21);
      const baseKeys = __webpack_require__(24);
      const isArrayLike = __webpack_require__(36);

      /**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
      function keys(object) {
        return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
      }

      module.exports = keys;
      /***/ }),
    /* 42 */
    /***/ (function(module, exports) {
      /**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
      function stubFalse() {
        return false;
      }

      module.exports = stubFalse;
      /***/ }),
    /* 43 */
    /***/ (function(module, exports, __webpack_require__) {
      /*
object-assign
(c) Sindre Sorhus
@license MIT
*/


      /* eslint-disable no-unused-vars */
      const getOwnPropertySymbols = Object.getOwnPropertySymbols;
      const hasOwnProperty = Object.prototype.hasOwnProperty;
      const propIsEnumerable = Object.prototype.propertyIsEnumerable;

      function toObject(val) {
        if (val === null || val === undefined) {
          throw new TypeError('Object.assign cannot be called with null or undefined');
        }

        return Object(val);
      }

      function shouldUseNative() {
        try {
          if (!Object.assign) {
            return false;
          }

          // Detect buggy property enumeration order in older V8 versions.

          // https://bugs.chromium.org/p/v8/issues/detail?id=4118
          const test1 = new String('abc'); // eslint-disable-line no-new-wrappers
          test1[5] = 'de';
          if (Object.getOwnPropertyNames(test1)[0] === '5') {
            return false;
          }

          // https://bugs.chromium.org/p/v8/issues/detail?id=3056
          const test2 = {};
          for (let i = 0; i < 10; i++) {
            test2[`_${String.fromCharCode(i)}`] = i;
          }
          const order2 = Object.getOwnPropertyNames(test2).map(n => test2[n]);
          if (order2.join('') !== '0123456789') {
            return false;
          }

          // https://bugs.chromium.org/p/v8/issues/detail?id=3056
          const test3 = {};
          'abcdefghijklmnopqrst'.split('').forEach((letter) => {
            test3[letter] = letter;
          });
          if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
            return false;
          }

          return true;
        }
        catch (err) {
          // We don't expect any of the above to throw, but better to be safe.
          return false;
        }
      }

      module.exports = shouldUseNative() ? Object.assign : function (target, source) {
        let from;
        const to = toObject(target);
        let symbols;

        for (let s = 1; s < arguments.length; s++) {
          from = Object(arguments[s]);

          for (const key in from) {
            if (hasOwnProperty.call(from, key)) {
              to[key] = from[key];
            }
          }

          if (getOwnPropertySymbols) {
            symbols = getOwnPropertySymbols(from);
            for (let i = 0; i < symbols.length; i++) {
              if (propIsEnumerable.call(from, symbols[i])) {
                to[symbols[i]] = from[symbols[i]];
              }
            }
          }
        }

        return to;
      };
      /***/ }),
    /* 44 */
    /***/ (function(module, exports, __webpack_require__) {
      /**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


      if (undefined !== 'production') {
        var invariant = __webpack_require__(2);
        var warning = __webpack_require__(7);
        var ReactPropTypesSecret = __webpack_require__(5);
        var loggedTypeFailures = {};
      }

      /**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
      function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
        if (undefined !== 'production') {
          for (const typeSpecName in typeSpecs) {
            if (typeSpecs.hasOwnProperty(typeSpecName)) {
              var error;
              // Prop type validation may throw. In case they do, we don't want to
              // fail the render phase where it didn't fail before. So we log it.
              // After these have been cleaned up, we'll let them throw.
              try {
                // This is intentionally an invariant that gets caught. It's the same
                // behavior as without this statement except with a better message.
                invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);
                error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
              }
              catch (ex) {
                error = ex;
              }
              warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
              if (error instanceof Error && !(error.message in loggedTypeFailures)) {
                // Only monitor this failure once because there tends to be a lot of the
                // same error.
                loggedTypeFailures[error.message] = true;

                const stack = getStack ? getStack() : '';

                warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
              }
            }
          }
        }
      }

      module.exports = checkPropTypes;
      /***/ }),
    /* 45 */
    /***/ (function(module, exports, __webpack_require__) {
      /**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


      const emptyFunction = __webpack_require__(1);
      const invariant = __webpack_require__(2);
      const ReactPropTypesSecret = __webpack_require__(5);

      module.exports = function() {
        function shim(props, propName, componentName, location, propFullName, secret) {
          if (secret === ReactPropTypesSecret) {
            // It is still safe when called from React.
            return;
          }
          invariant(
            false,
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
          );
        }
        shim.isRequired = shim;
        function getShim() {
          return shim;
        }
        // Important!
        // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
        const ReactPropTypes = {
          array: shim,
          bool: shim,
          func: shim,
          number: shim,
          object: shim,
          string: shim,
          symbol: shim,

          any: shim,
          arrayOf: getShim,
          element: shim,
          instanceOf: getShim,
          node: shim,
          objectOf: getShim,
          oneOf: getShim,
          oneOfType: getShim,
          shape: getShim,
          exact: getShim
        };

        ReactPropTypes.checkPropTypes = emptyFunction;
        ReactPropTypes.PropTypes = ReactPropTypes;

        return ReactPropTypes;
      };
      /***/ }),
    /* 46 */
    /***/ (function(module, exports, __webpack_require__) {
      /**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


      const emptyFunction = __webpack_require__(1);
      const invariant = __webpack_require__(2);
      const warning = __webpack_require__(7);
      const assign = __webpack_require__(43);

      const ReactPropTypesSecret = __webpack_require__(5);
      const checkPropTypes = __webpack_require__(44);

      module.exports = function(isValidElement, throwOnDirectAccess) {
        /* global Symbol */
        const ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
        const FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

        /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
        function getIteratorFn(maybeIterable) {
          const iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
          if (typeof iteratorFn === 'function') {
            return iteratorFn;
          }
        }

        /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

        const ANONYMOUS = '<<anonymous>>';

        // Important!
        // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
        const ReactPropTypes = {
          array: createPrimitiveTypeChecker('array'),
          bool: createPrimitiveTypeChecker('boolean'),
          func: createPrimitiveTypeChecker('function'),
          number: createPrimitiveTypeChecker('number'),
          object: createPrimitiveTypeChecker('object'),
          string: createPrimitiveTypeChecker('string'),
          symbol: createPrimitiveTypeChecker('symbol'),

          any: createAnyTypeChecker(),
          arrayOf: createArrayOfTypeChecker,
          element: createElementTypeChecker(),
          instanceOf: createInstanceTypeChecker,
          node: createNodeChecker(),
          objectOf: createObjectOfTypeChecker,
          oneOf: createEnumTypeChecker,
          oneOfType: createUnionTypeChecker,
          shape: createShapeTypeChecker,
          exact: createStrictShapeTypeChecker,
        };

        /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
        /* eslint-disable no-self-compare */
        function is(x, y) {
          // SameValue algorithm
          if (x === y) {
            // Steps 1-5, 7-10
            // Steps 6.b-6.e: +0 != -0
            return x !== 0 || 1 / x === 1 / y;
          }

          // Step 6.a: NaN == NaN
          return x !== x && y !== y;
        }
        /* eslint-enable no-self-compare */

        /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
        function PropTypeError(message) {
          this.message = message;
          this.stack = '';
        }
        // Make `instanceof Error` still work for returned errors.
        PropTypeError.prototype = Error.prototype;

        function createChainableTypeChecker(validate) {
          if (undefined !== 'production') {
            var manualPropTypeCallCache = {};
            var manualPropTypeWarningCount = 0;
          }
          function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
            componentName = componentName || ANONYMOUS;
            propFullName = propFullName || propName;

            if (secret !== ReactPropTypesSecret) {
              if (throwOnDirectAccess) {
                // New behavior only for users of `prop-types` package
                invariant(
                  false,
                  'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
                );
              }
              else if (undefined !== 'production' && typeof console !== 'undefined') {
                // Old behavior for people using React.PropTypes
                const cacheKey = `${componentName}:${propName}`;
                if (
                  !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
                ) {
                  warning(
                    false,
                    'You are manually calling a React.PropTypes validation ' +
              'function for the `%s` prop on `%s`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
                    propFullName,
                    componentName
                  );
                  manualPropTypeCallCache[cacheKey] = true;
                  manualPropTypeWarningCount++;
                }
              }
            }
            if (props[propName] == null) {
              if (isRequired) {
                if (props[propName] === null) {
                  return new PropTypeError(`The ${location} \`${propFullName}\` is marked as required ` + `in \`${componentName}\`, but its value is \`null\`.`);
                }
                return new PropTypeError(`The ${location} \`${propFullName}\` is marked as required in ` + `\`${componentName}\`, but its value is \`undefined\`.`);
              }
              return null;
            }

            return validate(props, propName, componentName, location, propFullName);
          }

          const chainedCheckType = checkType.bind(null, false);
          chainedCheckType.isRequired = checkType.bind(null, true);

          return chainedCheckType;
        }

        function createPrimitiveTypeChecker(expectedType) {
          function validate(props, propName, componentName, location, propFullName, secret) {
            const propValue = props[propName];
            const propType = getPropType(propValue);
            if (propType !== expectedType) {
              // `propValue` being instance of, say, date/regexp, pass the 'object'
              // check, but we can offer a more precise error message here rather than
              // 'of type `object`'.
              const preciseType = getPreciseType(propValue);

              return new PropTypeError(`Invalid ${location} \`${propFullName}\` of type ` + `\`${preciseType}\` supplied to \`${componentName}\`, expected ` + `\`${expectedType}\`.`);
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }

        function createAnyTypeChecker() {
          return createChainableTypeChecker(emptyFunction.thatReturnsNull);
        }

        function createArrayOfTypeChecker(typeChecker) {
          function validate(props, propName, componentName, location, propFullName) {
            if (typeof typeChecker !== 'function') {
              return new PropTypeError(`Property \`${propFullName}\` of component \`${componentName}\` has invalid PropType notation inside arrayOf.`);
            }
            const propValue = props[propName];
            if (!Array.isArray(propValue)) {
              const propType = getPropType(propValue);
              return new PropTypeError(`Invalid ${location} \`${propFullName}\` of type ` + `\`${propType}\` supplied to \`${componentName}\`, expected an array.`);
            }
            for (let i = 0; i < propValue.length; i++) {
              const error = typeChecker(propValue, i, componentName, location, `${propFullName}[${i}]`, ReactPropTypesSecret);
              if (error instanceof Error) {
                return error;
              }
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }

        function createElementTypeChecker() {
          function validate(props, propName, componentName, location, propFullName) {
            const propValue = props[propName];
            if (!isValidElement(propValue)) {
              const propType = getPropType(propValue);
              return new PropTypeError(`Invalid ${location} \`${propFullName}\` of type ` + `\`${propType}\` supplied to \`${componentName}\`, expected a single ReactElement.`);
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }

        function createInstanceTypeChecker(expectedClass) {
          function validate(props, propName, componentName, location, propFullName) {
            if (!(props[propName] instanceof expectedClass)) {
              const expectedClassName = expectedClass.name || ANONYMOUS;
              const actualClassName = getClassName(props[propName]);
              return new PropTypeError(`Invalid ${location} \`${propFullName}\` of type ` + `\`${actualClassName}\` supplied to \`${componentName}\`, expected ` + `instance of \`${expectedClassName}\`.`);
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }

        function createEnumTypeChecker(expectedValues) {
          if (!Array.isArray(expectedValues)) {
            undefined !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
            return emptyFunction.thatReturnsNull;
          }

          function validate(props, propName, componentName, location, propFullName) {
            const propValue = props[propName];
            for (let i = 0; i < expectedValues.length; i++) {
              if (is(propValue, expectedValues[i])) {
                return null;
              }
            }

            const valuesString = JSON.stringify(expectedValues);
            return new PropTypeError(`Invalid ${location} \`${propFullName}\` of value \`${propValue}\` ` + `supplied to \`${componentName}\`, expected one of ${valuesString}.`);
          }
          return createChainableTypeChecker(validate);
        }

        function createObjectOfTypeChecker(typeChecker) {
          function validate(props, propName, componentName, location, propFullName) {
            if (typeof typeChecker !== 'function') {
              return new PropTypeError(`Property \`${propFullName}\` of component \`${componentName}\` has invalid PropType notation inside objectOf.`);
            }
            const propValue = props[propName];
            const propType = getPropType(propValue);
            if (propType !== 'object') {
              return new PropTypeError(`Invalid ${location} \`${propFullName}\` of type ` + `\`${propType}\` supplied to \`${componentName}\`, expected an object.`);
            }
            for (const key in propValue) {
              if (propValue.hasOwnProperty(key)) {
                const error = typeChecker(propValue, key, componentName, location, `${propFullName}.${key}`, ReactPropTypesSecret);
                if (error instanceof Error) {
                  return error;
                }
              }
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }

        function createUnionTypeChecker(arrayOfTypeCheckers) {
          if (!Array.isArray(arrayOfTypeCheckers)) {
            undefined !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
            return emptyFunction.thatReturnsNull;
          }

          for (let i = 0; i < arrayOfTypeCheckers.length; i++) {
            const checker = arrayOfTypeCheckers[i];
            if (typeof checker !== 'function') {
              warning(
                false,
                'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received %s at index %s.',
                getPostfixForTypeWarning(checker),
                i
              );
              return emptyFunction.thatReturnsNull;
            }
          }

          function validate(props, propName, componentName, location, propFullName) {
            for (let i = 0; i < arrayOfTypeCheckers.length; i++) {
              const checker = arrayOfTypeCheckers[i];
              if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
                return null;
              }
            }

            return new PropTypeError(`Invalid ${location} \`${propFullName}\` supplied to ` + `\`${componentName}\`.`);
          }
          return createChainableTypeChecker(validate);
        }

        function createNodeChecker() {
          function validate(props, propName, componentName, location, propFullName) {
            if (!isNode(props[propName])) {
              return new PropTypeError(`Invalid ${location} \`${propFullName}\` supplied to ` + `\`${componentName}\`, expected a ReactNode.`);
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }

        function createShapeTypeChecker(shapeTypes) {
          function validate(props, propName, componentName, location, propFullName) {
            const propValue = props[propName];
            const propType = getPropType(propValue);
            if (propType !== 'object') {
              return new PropTypeError(`Invalid ${location} \`${propFullName}\` of type \`${propType}\` ` + `supplied to \`${componentName}\`, expected \`object\`.`);
            }
            for (const key in shapeTypes) {
              const checker = shapeTypes[key];
              if (!checker) {
                continue;
              }
              const error = checker(propValue, key, componentName, location, `${propFullName}.${key}`, ReactPropTypesSecret);
              if (error) {
                return error;
              }
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }

        function createStrictShapeTypeChecker(shapeTypes) {
          function validate(props, propName, componentName, location, propFullName) {
            const propValue = props[propName];
            const propType = getPropType(propValue);
            if (propType !== 'object') {
              return new PropTypeError(`Invalid ${location} \`${propFullName}\` of type \`${propType}\` ` + `supplied to \`${componentName}\`, expected \`object\`.`);
            }
            // We need to check all keys in case some are required but missing from
            // props.
            const allKeys = assign({}, props[propName], shapeTypes);
            for (const key in allKeys) {
              const checker = shapeTypes[key];
              if (!checker) {
                return new PropTypeError(
                  `Invalid ${location} \`${propFullName}\` key \`${key}\` supplied to \`${componentName}\`.` +
            `\nBad object: ${JSON.stringify(props[propName], null, '  ')
            }\nValid keys: ${JSON.stringify(Object.keys(shapeTypes), null, '  ')}`
                );
              }
              const error = checker(propValue, key, componentName, location, `${propFullName}.${key}`, ReactPropTypesSecret);
              if (error) {
                return error;
              }
            }
            return null;
          }

          return createChainableTypeChecker(validate);
        }

        function isNode(propValue) {
          switch (typeof propValue) {
            case 'number':
            case 'string':
            case 'undefined':
              return true;
            case 'boolean':
              return !propValue;
            case 'object':
              if (Array.isArray(propValue)) {
                return propValue.every(isNode);
              }
              if (propValue === null || isValidElement(propValue)) {
                return true;
              }

              var iteratorFn = getIteratorFn(propValue);
              if (iteratorFn) {
                const iterator = iteratorFn.call(propValue);
                let step;
                if (iteratorFn !== propValue.entries) {
                  while (!(step = iterator.next()).done) {
                    if (!isNode(step.value)) {
                      return false;
                    }
                  }
                }
                else {
                  // Iterator will provide entry [k,v] tuples rather than values.
                  while (!(step = iterator.next()).done) {
                    const entry = step.value;
                    if (entry) {
                      if (!isNode(entry[1])) {
                        return false;
                      }
                    }
                  }
                }
              }
              else {
                return false;
              }

              return true;
            default:
              return false;
          }
        }

        function isSymbol(propType, propValue) {
          // Native Symbol.
          if (propType === 'symbol') {
            return true;
          }

          // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
          if (propValue['@@toStringTag'] === 'Symbol') {
            return true;
          }

          // Fallback for non-spec compliant Symbols which are polyfilled.
          if (typeof Symbol === 'function' && propValue instanceof Symbol) {
            return true;
          }

          return false;
        }

        // Equivalent of `typeof` but with special handling for array and regexp.
        function getPropType(propValue) {
          const propType = typeof propValue;
          if (Array.isArray(propValue)) {
            return 'array';
          }
          if (propValue instanceof RegExp) {
            // Old webkits (at least until Android 4.0) return 'function' rather than
            // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
            // passes PropTypes.object.
            return 'object';
          }
          if (isSymbol(propType, propValue)) {
            return 'symbol';
          }
          return propType;
        }

        // This handles more types than `getPropType`. Only used for error messages.
        // See `createPrimitiveTypeChecker`.
        function getPreciseType(propValue) {
          if (typeof propValue === 'undefined' || propValue === null) {
            return `${propValue}`;
          }
          const propType = getPropType(propValue);
          if (propType === 'object') {
            if (propValue instanceof Date) {
              return 'date';
            }
            else if (propValue instanceof RegExp) {
              return 'regexp';
            }
          }
          return propType;
        }

        // Returns a string that is postfixed to a warning about an invalid type.
        // For example, "undefined" or "of type array"
        function getPostfixForTypeWarning(value) {
          const type = getPreciseType(value);
          switch (type) {
            case 'array':
            case 'object':
              return `an ${type}`;
            case 'boolean':
            case 'date':
            case 'regexp':
              return `a ${type}`;
            default:
              return type;
          }
        }

        // Returns class name of the object, if any.
        function getClassName(propValue) {
          if (!propValue.constructor || !propValue.constructor.name) {
            return ANONYMOUS;
          }
          return propValue.constructor.name;
        }

        ReactPropTypes.checkPropTypes = checkPropTypes;
        ReactPropTypes.PropTypes = ReactPropTypes;

        return ReactPropTypes;
      };
      /***/ }),
    /* 47 */
    /***/ (function(module, exports, __webpack_require__) {
      const encode = __webpack_require__(12);
      const alphabet = __webpack_require__(0);

      // Ignore all milliseconds before a certain time to reduce the size of the date entropy without sacrificing uniqueness.
      // This number should be updated every year or so to keep the generated id short.
      // To regenerate `new Date() - 0` and bump the version. Always bump the version!
      const REDUCE_TIME = 1459707606518;

      // don't change unless we change the algos or REDUCE_TIME
      // must be an integer and less than 16
      const version = 6;

      // Counter is used when shortid is called multiple times in one second.
      let counter;

      // Remember the last time shortid was called in case counter is needed.
      let previousSeconds;

      /**
 * Generate unique id
 * Returns string id
 */
      function build(clusterWorkerId) {
        let str = '';

        const seconds = Math.floor((Date.now() - REDUCE_TIME) * 0.001);

        if (seconds === previousSeconds) {
          counter++;
        }
        else {
          counter = 0;
          previousSeconds = seconds;
        }

        str += encode(alphabet.lookup, version);
        str += encode(alphabet.lookup, clusterWorkerId);
        if (counter > 0) {
          str += encode(alphabet.lookup, counter);
        }
        str += encode(alphabet.lookup, seconds);

        return str;
      }

      module.exports = build;
      /***/ }),
    /* 48 */
    /***/ (function(module, exports, __webpack_require__) {
      const alphabet = __webpack_require__(0);

      /**
 * Decode the id to get the version and worker
 * Mainly for debugging and testing.
 * @param id - the shortid-generated id.
 */
      function decode(id) {
        const characters = alphabet.shuffled();
        return {
          version: characters.indexOf(id.substr(0, 1)) & 0x0f,
          worker: characters.indexOf(id.substr(1, 1)) & 0x0f
        };
      }

      module.exports = decode;
      /***/ }),
    /* 49 */
    /***/ (function(module, exports, __webpack_require__) {
      const alphabet = __webpack_require__(0);
      const encode = __webpack_require__(12);
      const decode = __webpack_require__(48);
      const build = __webpack_require__(47);
      const isValid = __webpack_require__(50);

      // if you are using cluster or multiple servers use this to make each instance
      // has a unique value for worker
      // Note: I don't know if this is automatically set when using third
      // party cluster solutions such as pm2.
      let clusterWorkerId = __webpack_require__(53) || 0;

      /**
 * Set the seed.
 * Highly recommended if you don't want people to try to figure out your id schema.
 * exposed as shortid.seed(int)
 * @param seed Integer value to seed the random alphabet.  ALWAYS USE THE SAME SEED or you might get overlaps.
 */
      function seed(seedValue) {
        alphabet.seed(seedValue);
        return module.exports;
      }

      /**
 * Set the cluster worker or machine id
 * exposed as shortid.worker(int)
 * @param workerId worker must be positive integer.  Number less than 16 is recommended.
 * returns shortid module so it can be chained.
 */
      function worker(workerId) {
        clusterWorkerId = workerId;
        return module.exports;
      }

      /**
 *
 * sets new characters to use in the alphabet
 * returns the shuffled alphabet
 */
      function characters(newCharacters) {
        if (newCharacters !== undefined) {
          alphabet.characters(newCharacters);
        }

        return alphabet.shuffled();
      }

      /**
 * Generate unique id
 * Returns string id
 */
      function generate() {
        return build(clusterWorkerId);
      }

      // Export all other functions as properties of the generate function
      module.exports = generate;
      module.exports.generate = generate;
      module.exports.seed = seed;
      module.exports.worker = worker;
      module.exports.characters = characters;
      module.exports.decode = decode;
      module.exports.isValid = isValid;
      /***/ }),
    /* 50 */
    /***/ (function(module, exports, __webpack_require__) {
      const alphabet = __webpack_require__(0);

      function isShortId(id) {
        if (!id || typeof id !== 'string' || id.length < 6) {
          return false;
        }

        const characters = alphabet.characters();
        const len = id.length;
        for (let i = 0; i < len; i++) {
          if (characters.indexOf(id[i]) === -1) {
            return false;
          }
        }
        return true;
      }

      module.exports = isShortId;
      /***/ }),
    /* 51 */
    /***/ (function(module, exports, __webpack_require__) {
      const crypto = typeof window === 'object' && (window.crypto || window.msCrypto); // IE 11 uses window.msCrypto

      function randomByte() {
        if (!crypto || !crypto.getRandomValues) {
          return Math.floor(Math.random() * 256) & 0x30;
        }
        const dest = new Uint8Array(1);
        crypto.getRandomValues(dest);
        return dest[0] & 0x30;
      }

      module.exports = randomByte;
      /***/ }),
    /* 52 */
    /***/ (function(module, exports, __webpack_require__) {
      // Found this seed-based random generator somewhere
      // Based on The Central Randomizer 1.3 (C) 1997 by Paul Houle (houle@msc.cornell.edu)

      let seed = 1;

      /**
 * return a random number based on a seed
 * @param seed
 * @returns {number}
 */
      function getNextValue() {
        seed = (seed * 9301 + 49297) % 233280;
        return seed / (233280.0);
      }

      function setSeed(_seed_) {
        seed = _seed_;
      }

      module.exports = {
        nextValue: getNextValue,
        seed: setSeed
      };
      /***/ }),
    /* 53 */
    /***/ (function(module, exports, __webpack_require__) {
      module.exports = 0;
      /***/ }),
    /* 54 */
    /***/ (function(module, exports) {
      let g;

      // This works in non-strict mode
      g = (function() {
        return this;
      }());

      try {
        // This works if eval is allowed (see CSP)
        g = g || Function('return this')() || (1, eval)('this');
      }
      catch (e) {
        // This works if the window reference is available
        if (typeof window === 'object') { g = window; }
      }

      // g can still be undefined, but nothing to do about it...
      // We return undefined, instead of nothing here, so it's
      // easier to handle this case. if(!global) { ...}

      module.exports = g;
      /***/ })
    /** *** */ ]))
));
// # sourceMappingURL=react-scale-text.js.map
