module.exports = 
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var App = __webpack_require__(2);

	var port = process.env.PORT || 3000;

	App.listen(port, function () {
	    console.log('Server started on port', port);
	})


/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var express  = __webpack_require__(3);
	var auth0    = __webpack_require__(4);
	var Webtask  = __webpack_require__(5);
	var app      = express();
	var template = __webpack_require__(6);
	var metadata   = __webpack_require__(9);

	app.use(auth0({
	  scopes: 'read:connections'
	}));

	app.get('/', function (req, res) {
	  res.header("Content-Type", 'text/html');
	  res.status(200).send(template({
	    baseUrl: res.locals.baseUrl
	  }));
	});

	// This endpoint would be called by webtask-gallery to dicover your metadata
	app.get('/meta', function (req, res) {
	  res.status(200).send(metadata);
	});

	module.exports = app;


/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("auth0-oauth2-express");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("webtask-tools");

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var jade = __webpack_require__(7);

	module.exports = function template(locals) {
	var buf = [];
	var jade_mixins = {};
	var jade_interp;
	;var locals_for_with = (locals || {});(function (baseUrl, description) {
	buf.push("<!DOCTYPE html><html><head><title>My Extension</title><meta charset=\"UTF-8\"><meta http-equiv=\"X-UA-Compatible\" content=\"IE=Edge\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"><meta name=\"description\"" + (jade.attr("content", '' + (description) + '', true, true)) + "><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><link rel=\"shortcut icon\" href=\"https://cdn.auth0.com/styleguide/2.0.1/lib/logos/img/favicon.png\"><link rel=\"apple-touch-icon\" href=\"apple-touch-icon.png\"><link rel=\"stylesheet\" type=\"text/css\" href=\"https://cdn.auth0.com/manage/v0.3.973/css/index.min.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"https://cdn.auth0.com/styleguide/latest/index.css\"><script type=\"text/javascript\" src=\"https://code.jquery.com/jquery-2.1.4.min.js\"></script><script type=\"text/javascript\" src=\"https://fb.me/react-0.14.0.min.js\"></script><script type=\"text/javascript\" src=\"https://fb.me/react-dom-0.14.0.js\"></script><script type=\"text/javascript\" src=\"https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.23/browser.min.js\"></script><script type=\"text/javascript\" src=\"https://cdn.auth0.com/js/jwt-decode-1.4.0.min.js\"></script><script type=\"text/javascript\" src=\"https://cdn.auth0.com/js/navbar-1.0.1.min.js\"></script><script type=\"text/javascript\">if (!sessionStorage.getItem(\"token\")) {\n  window.location.href = '" + (jade.escape((jade_interp = baseUrl) == null ? '' : jade_interp)) + "/login';\n}\n</script></head><body class=\"a0-extension\"><header class=\"dashboard-header\"><nav role=\"navigation\" class=\"navbar navbar-default\"><div class=\"container\"><div class=\"navbar-header\"><h1 class=\"navbar-brand\"><a href=\"http://manage.auth0.com/\"><span>Auth0</span></a></h1></div><div id=\"navbar-collapse\" class=\"collapse navbar-collapse\"></div><script type=\"text/babel\">ReactDOM.render(\n  <Navbar baseUrl=\"" + (jade.escape((jade_interp = baseUrl) == null ? '' : jade_interp)) + "\"/>,\n  document.getElementById('navbar-collapse')\n);</script></div></nav></header><div class=\"container\"><div class=\"row\"><section class=\"content-page current\"><div class=\"col-xs-12\"><div class=\"row\"><div class=\"col-xs-12 content-header\"><ol class=\"breadcrumb\"><li><a href=\"http://manage.auth0.com/\">Auth0 Dashboard</a></li><li><a href=\"#\">Extensions</a></li></ol><h1>My Extension</h1></div></div><div id=\"extension\"><script type=\"text/babel\">var Extension = React.createClass({\n  render: function() {\n    return (\n      <div>\n        <div className=\"widget-title title-with-nav-bars\">\n          <ul className=\"nav nav-tabs\">\n            <li className=\"active\">\n              <a data-toggle=\"tab\" href=\"#tab1\" aria-expanded=\"true\"><span className=\"tab-title\">Tab 1</span></a>\n            </li>\n            <li>\n              <a data-toggle=\"tab\" href=\"#tab2\"><span className=\"tab-title\">Tab 2</span></a>\n            </li>\n            <li>\n              <a data-toggle=\"tab\" href=\"#tab3\"><span className=\"tab-title\">Tab 3</span></a>\n            </li>\n          </ul>\n        </div>\n        <div id=\"content-area\" className=\"tab-content\">\n          <div id=\"tab1\" className=\"tab-pane active\"></div>\n          <div id=\"tab2\" className=\"tab-pane\"></div>\n          <div id=\"tab3\" className=\"tab-pane\"></div>\n        </div>\n      </div>\n    );\n  }\n});\n\nReactDOM.render(\n  <Extension />,\n  document.getElementById('extension')\n);</script></div></div></section></div></div></body></html>");}.call(this,"baseUrl" in locals_for_with?locals_for_with.baseUrl:typeof baseUrl!=="undefined"?baseUrl:undefined,"description" in locals_for_with?locals_for_with.description:typeof description!=="undefined"?description:undefined));;return buf.join("");
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Merge two attribute objects giving precedence
	 * to values in object `b`. Classes are special-cased
	 * allowing for arrays and merging/joining appropriately
	 * resulting in a string.
	 *
	 * @param {Object} a
	 * @param {Object} b
	 * @return {Object} a
	 * @api private
	 */

	exports.merge = function merge(a, b) {
	  if (arguments.length === 1) {
	    var attrs = a[0];
	    for (var i = 1; i < a.length; i++) {
	      attrs = merge(attrs, a[i]);
	    }
	    return attrs;
	  }
	  var ac = a['class'];
	  var bc = b['class'];

	  if (ac || bc) {
	    ac = ac || [];
	    bc = bc || [];
	    if (!Array.isArray(ac)) ac = [ac];
	    if (!Array.isArray(bc)) bc = [bc];
	    a['class'] = ac.concat(bc).filter(nulls);
	  }

	  for (var key in b) {
	    if (key != 'class') {
	      a[key] = b[key];
	    }
	  }

	  return a;
	};

	/**
	 * Filter null `val`s.
	 *
	 * @param {*} val
	 * @return {Boolean}
	 * @api private
	 */

	function nulls(val) {
	  return val != null && val !== '';
	}

	/**
	 * join array as classes.
	 *
	 * @param {*} val
	 * @return {String}
	 */
	exports.joinClasses = joinClasses;
	function joinClasses(val) {
	  return (Array.isArray(val) ? val.map(joinClasses) :
	    (val && typeof val === 'object') ? Object.keys(val).filter(function (key) { return val[key]; }) :
	    [val]).filter(nulls).join(' ');
	}

	/**
	 * Render the given classes.
	 *
	 * @param {Array} classes
	 * @param {Array.<Boolean>} escaped
	 * @return {String}
	 */
	exports.cls = function cls(classes, escaped) {
	  var buf = [];
	  for (var i = 0; i < classes.length; i++) {
	    if (escaped && escaped[i]) {
	      buf.push(exports.escape(joinClasses([classes[i]])));
	    } else {
	      buf.push(joinClasses(classes[i]));
	    }
	  }
	  var text = joinClasses(buf);
	  if (text.length) {
	    return ' class="' + text + '"';
	  } else {
	    return '';
	  }
	};


	exports.style = function (val) {
	  if (val && typeof val === 'object') {
	    return Object.keys(val).map(function (style) {
	      return style + ':' + val[style];
	    }).join(';');
	  } else {
	    return val;
	  }
	};
	/**
	 * Render the given attribute.
	 *
	 * @param {String} key
	 * @param {String} val
	 * @param {Boolean} escaped
	 * @param {Boolean} terse
	 * @return {String}
	 */
	exports.attr = function attr(key, val, escaped, terse) {
	  if (key === 'style') {
	    val = exports.style(val);
	  }
	  if ('boolean' == typeof val || null == val) {
	    if (val) {
	      return ' ' + (terse ? key : key + '="' + key + '"');
	    } else {
	      return '';
	    }
	  } else if (0 == key.indexOf('data') && 'string' != typeof val) {
	    if (JSON.stringify(val).indexOf('&') !== -1) {
	      console.warn('Since Jade 2.0.0, ampersands (`&`) in data attributes ' +
	                   'will be escaped to `&amp;`');
	    };
	    if (val && typeof val.toISOString === 'function') {
	      console.warn('Jade will eliminate the double quotes around dates in ' +
	                   'ISO form after 2.0.0');
	    }
	    return ' ' + key + "='" + JSON.stringify(val).replace(/'/g, '&apos;') + "'";
	  } else if (escaped) {
	    if (val && typeof val.toISOString === 'function') {
	      console.warn('Jade will stringify dates in ISO form after 2.0.0');
	    }
	    return ' ' + key + '="' + exports.escape(val) + '"';
	  } else {
	    if (val && typeof val.toISOString === 'function') {
	      console.warn('Jade will stringify dates in ISO form after 2.0.0');
	    }
	    return ' ' + key + '="' + val + '"';
	  }
	};

	/**
	 * Render the given attributes object.
	 *
	 * @param {Object} obj
	 * @param {Object} escaped
	 * @return {String}
	 */
	exports.attrs = function attrs(obj, terse){
	  var buf = [];

	  var keys = Object.keys(obj);

	  if (keys.length) {
	    for (var i = 0; i < keys.length; ++i) {
	      var key = keys[i]
	        , val = obj[key];

	      if ('class' == key) {
	        if (val = joinClasses(val)) {
	          buf.push(' ' + key + '="' + val + '"');
	        }
	      } else {
	        buf.push(exports.attr(key, val, false, terse));
	      }
	    }
	  }

	  return buf.join('');
	};

	/**
	 * Escape the given string of `html`.
	 *
	 * @param {String} html
	 * @return {String}
	 * @api private
	 */

	var jade_encode_html_rules = {
	  '&': '&amp;',
	  '<': '&lt;',
	  '>': '&gt;',
	  '"': '&quot;'
	};
	var jade_match_html = /[&<>"]/g;

	function jade_encode_char(c) {
	  return jade_encode_html_rules[c] || c;
	}

	exports.escape = jade_escape;
	function jade_escape(html){
	  var result = String(html).replace(jade_match_html, jade_encode_char);
	  if (result === '' + html) return html;
	  else return result;
	};

	/**
	 * Re-throw the given `err` in context to the
	 * the jade in `filename` at the given `lineno`.
	 *
	 * @param {Error} err
	 * @param {String} filename
	 * @param {String} lineno
	 * @api private
	 */

	exports.rethrow = function rethrow(err, filename, lineno, str){
	  if (!(err instanceof Error)) throw err;
	  if ((typeof window != 'undefined' || !filename) && !str) {
	    err.message += ' on line ' + lineno;
	    throw err;
	  }
	  try {
	    str = str || __webpack_require__(8).readFileSync(filename, 'utf8')
	  } catch (ex) {
	    rethrow(err, null, lineno)
	  }
	  var context = 3
	    , lines = str.split('\n')
	    , start = Math.max(lineno - context, 0)
	    , end = Math.min(lines.length, lineno + context);

	  // Error context
	  var context = lines.slice(start, end).map(function(line, i){
	    var curr = i + start + 1;
	    return (curr == lineno ? '  > ' : '    ')
	      + curr
	      + '| '
	      + line;
	  }).join('\n');

	  // Alter exception message
	  err.path = filename;
	  err.message = (filename || 'Jade') + ':' + lineno
	    + '\n' + context + '\n\n' + err.message;
	  throw err;
	};

	exports.DebugItem = function DebugItem(lineno, filename) {
	  this.lineno = lineno;
	  this.filename = filename;
	}


/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = require("fs");

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = {
		"title": "Auth0 Extension Boilerplate with ReactJs",
		"name": "auth0-extension-boilerplate-with-react",
		"version": "1.0.0",
		"author": "auth0",
		"description": "This is a Hello World extension",
		"type": "application",
		"repository": "https://github.com/auth0/auth0-extension-boilerplate-with-react",
		"keywords": [
			"auth0",
			"extension"
		]
	};

/***/ }
/******/ ]);