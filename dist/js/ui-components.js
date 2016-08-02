/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, callbacks = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				callbacks.push.apply(callbacks, installedChunks[chunkId]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			modules[moduleId] = moreModules[moduleId];
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules);
/******/ 		while(callbacks.length)
/******/ 			callbacks.shift().call(null, __webpack_require__);
/******/ 		if(moreModules[0]) {
/******/ 			installedModules[0] = 0;
/******/ 			return __webpack_require__(0);
/******/ 		}
/******/ 	};

/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// object to store loaded and loading chunks
/******/ 	// "0" means "already loaded"
/******/ 	// Array means "loading", array contains callbacks
/******/ 	var installedChunks = {
/******/ 		1:0
/******/ 	};

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

/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return callback.call(null, __webpack_require__);

/******/ 		// an array means "currently loading".
/******/ 		if(installedChunks[chunkId] !== undefined) {
/******/ 			installedChunks[chunkId].push(callback);
/******/ 		} else {
/******/ 			// start chunk loading
/******/ 			installedChunks[chunkId] = [callback];
/******/ 			var head = document.getElementsByTagName('head')[0];
/******/ 			var script = document.createElement('script');
/******/ 			script.type = 'text/javascript';
/******/ 			script.charset = 'utf-8';
/******/ 			script.async = true;

/******/ 			script.src = __webpack_require__.p + "" + chunkId + ".js/" + ({"0":"demo-app"}[chunkId]||chunkId) + ".js";
/******/ 			head.appendChild(script);
/******/ 		}
/******/ 	};

/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = ".";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
<<<<<<< 0f9993a594504edf014b6689dfb5ab5f7d689e36
=======
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(11);
	module.exports = __webpack_require__(13);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 12 */,
/* 13 */
>>>>>>> Add toolbar components and add jsdoc comments to them
/***/ function(module, exports, __webpack_require__) {

	///
	/// Copyright 2015-2016 Red Hat, Inc. and/or its affiliates
	/// and other contributors as indicated by the @author tags.
	///
	/// Licensed under the Apache License, Version 2.0 (the "License");
	/// you may not use this file except in compliance with the License.
	/// You may obtain a copy of the License at
	///
	///    http://www.apache.org/licenses/LICENSE-2.0
	///
	/// Unless required by applicable law or agreed to in writing, software
	/// distributed under the License is distributed on an "AS IS" BASIS,
	/// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	/// See the License for the specific language governing permissions and
	/// limitations under the License.
	///
	"use strict";
	///<reference path="tsd.d.ts"/>
	var services_1 = __webpack_require__(14);
	var components_1 = __webpack_require__(17);
	var miqStaticAssets;
	(function (miqStaticAssets) {
	    miqStaticAssets.app = angular.module('miqStaticAssets', ['ui.bootstrap', 'ui.bootstrap.tabs', 'rx', 'ngSanitize']);
	    services_1.default(miqStaticAssets.app);
	    components_1.default(miqStaticAssets.app);
	})(miqStaticAssets || (miqStaticAssets = {}));


/***/ },
<<<<<<< 0f9993a594504edf014b6689dfb5ab5f7d689e36
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 6 */
=======
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	///
	/// Copyright 2015-2016 Red Hat, Inc. and/or its affiliates
	/// and other contributors as indicated by the @author tags.
	///
	/// Licensed under the Apache License, Version 2.0 (the "License");
	/// you may not use this file except in compliance with the License.
	/// You may obtain a copy of the License at
	///
	///    http://www.apache.org/licenses/LICENSE-2.0
	///
	/// Unless required by applicable law or agreed to in writing, software
	/// distributed under the License is distributed on an "AS IS" BASIS,
	/// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	/// See the License for the specific language governing permissions and
	/// limitations under the License.
	///
	"use strict";
	var endpointsService_1 = __webpack_require__(15);
	var toolbarSettingsService_1 = __webpack_require__(16);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = function (module) {
	    module.service('MiQEndpointsService', endpointsService_1.default);
	    module.service('MiQToolbarSettingsService', toolbarSettingsService_1.default);
	};


/***/ },
/* 15 */
>>>>>>> Add toolbar components and add jsdoc comments to them
/***/ function(module, exports) {

	///
	/// Copyright 2015-2016 Red Hat, Inc. and/or its affiliates
	/// and other contributors as indicated by the @author tags.
	///
	/// Licensed under the Apache License, Version 2.0 (the "License");
	/// you may not use this file except in compliance with the License.
	/// You may obtain a copy of the License at
	///
	///    http://www.apache.org/licenses/LICENSE-2.0
	///
	/// Unless required by applicable law or agreed to in writing, software
	/// distributed under the License is distributed on an "AS IS" BASIS,
	/// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	/// See the License for the specific language governing permissions and
	/// limitations under the License.
	///
	"use strict";
	var DefaultEndpoints = (function () {
	    function DefaultEndpoints() {
	        this.listDataTable = '/list';
	        this.deleteItemDataTable = '/delete';
	        this.validateItem = '/validate';
	        this.createItem = '/create';
	        this.providerSettings = '/list_providers_settings';
	        this.toolbarSettings = '/toolbar';
	    }
	    return DefaultEndpoints;
	}());
	exports.DefaultEndpoints = DefaultEndpoints;
	var EndpointsService = (function () {
	    function EndpointsService() {
	        this.rootPoint = '';
	        this.endpoints = new DefaultEndpoints;
	    }
	    return EndpointsService;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = EndpointsService;


/***/ },
/* 16 */
/***/ function(module, exports) {

	///
	/// Copyright 2015-2016 Red Hat, Inc. and/or its affiliates
	/// and other contributors as indicated by the @author tags.
	///
	/// Licensed under the Apache License, Version 2.0 (the "License");
	/// you may not use this file except in compliance with the License.
	/// You may obtain a copy of the License at
	///
	///    http://www.apache.org/licenses/LICENSE-2.0
	///
	/// Unless required by applicable law or agreed to in writing, software
	/// distributed under the License is distributed on an "AS IS" BASIS,
	/// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	/// See the License for the specific language governing permissions and
	/// limitations under the License.
	///
	"use strict";
	var ToolbarSettingsService = (function () {
	    /*@ngInject*/
	    ToolbarSettingsService.$inject = ["$http", "MiQEndpointsService"];
	    function ToolbarSettingsService($http, MiQEndpointsService) {
	        this.$http = $http;
	        this.MiQEndpointsService = MiQEndpointsService;
	        this.countSelected = 0;
	    }
	    /**
	     * Method which will travers trough all items and enables them by number of selected items.
	     * @param isClicked
	     */
	    ToolbarSettingsService.prototype.checkboxClicked = function (isClicked) {
	        var _this = this;
	        isClicked ? this.countSelected++ : this.countSelected--;
	        _.chain(this.items)
	            .flatten()
	            .filter(function (item) { return item; })
	            .each(function (item) {
	            _this.enableToolbarItemByCountSelected(item);
	        })
	            .map('items')
	            .flatten()
	            .filter(function (item) { return item; })
	            .each(function (item) {
	            _this.enableToolbarItemByCountSelected(item);
	        })
	            .value();
	    };
	    /**
	     *
	     * @param toolbarObject
	     * @returns {{items: Array<Array<IToolbarItem>>, dataViews: Array<IToolbarItem>}}
	       */
	    ToolbarSettingsService.prototype.generateToolbarObject = function (toolbarObject) {
	        this.items = toolbarObject.filter(function (item) { return !!item; });
	        this.dataViews = this.filterViews();
	        return {
	            items: this.items,
	            dataViews: this.dataViews
	        };
	    };
	    /**
	     *
	     * @returns {ng.IPromise<IToolbarSettings>}
	     * @param getData
	     */
	    ToolbarSettingsService.prototype.getSettings = function (getData) {
	        var _this = this;
	        return this.httpGet(this.MiQEndpointsService.rootPoint + this.MiQEndpointsService.endpoints.toolbarSettings, getData).then(function (items) {
	            _this.items = items.filter(function (item) { return !!item; });
	            _this.dataViews = _this.filterViews();
	            return {
	                items: items,
	                dataViews: _this.dataViews
	            };
	        });
	    };
	    /**
	     *
	     * @returns {Array<IToolbarItem>}
	     */
	    ToolbarSettingsService.prototype.filterViews = function () {
	        return _.flatten(this.items)
	            .filter(function (item) { return item && item.id && item.id.indexOf('view_') === 0; });
	    };
	    /**
	     *
	     * @param url
	     * @param dataObject
	     * @returns {ng.IPromise<Array<Array<IToolbarItem>>>}
	     */
	    ToolbarSettingsService.prototype.httpGet = function (url, dataObject) {
	        return this.$http.get(url, { params: dataObject })
	            .then(function (dataResponse) { return dataResponse.data; });
	    };
	    /**
	     *
	     * @param toolbarItem
	     */
	    ToolbarSettingsService.prototype.enableToolbarItemByCountSelected = function (toolbarItem) {
	        if (toolbarItem.onwhen) {
	            if (toolbarItem.onwhen.slice(-1) === '+') {
	                toolbarItem.enabled = this.countSelected >= ToolbarSettingsService.parseNumberFromWhen(toolbarItem.onwhen);
	            }
	            else {
	                toolbarItem.enabled = this.countSelected === parseInt(toolbarItem.onwhen, 10);
	            }
	        }
	    };
	    /**
	     *
	     * @param onWhen
	     * @returns {number}
	     */
	    ToolbarSettingsService.parseNumberFromWhen = function (onWhen) {
	        return onWhen.indexOf('+') !== -1 ? parseInt(onWhen.slice(0, onWhen.length - 1), 10) : parseInt(onWhen, 10);
	    };
	    return ToolbarSettingsService;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = ToolbarSettingsService;


/***/ },
<<<<<<< 0f9993a594504edf014b6689dfb5ab5f7d689e36
/* 7 */,
/* 8 */
=======
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	///
	/// Copyright 2015-2016 Red Hat, Inc. and/or its affiliates
	/// and other contributors as indicated by the @author tags.
	///
	/// Licensed under the Apache License, Version 2.0 (the "License");
	/// you may not use this file except in compliance with the License.
	/// You may obtain a copy of the License at
	///
	///    http://www.apache.org/licenses/LICENSE-2.0
	///
	/// Unless required by applicable law or agreed to in writing, software
	/// distributed under the License is distributed on an "AS IS" BASIS,
	/// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	/// See the License for the specific language governing permissions and
	/// limitations under the License.
	///
	"use strict";
	var toolbar_menu_1 = __webpack_require__(18);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = function (module) {
	    toolbar_menu_1.default(module);
	};


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	///
	/// Copyright 2015-2016 Red Hat, Inc. and/or its affiliates
	/// and other contributors as indicated by the @author tags.
	///
	/// Licensed under the Apache License, Version 2.0 (the "License");
	/// you may not use this file except in compliance with the License.
	/// You may obtain a copy of the License at
	///
	///    http://www.apache.org/licenses/LICENSE-2.0
	///
	/// Unless required by applicable law or agreed to in writing, software
	/// distributed under the License is distributed on an "AS IS" BASIS,
	/// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	/// See the License for the specific language governing permissions and
	/// limitations under the License.
	///
	"use strict";
	var toolbarComponent_1 = __webpack_require__(19);
	var toolbarButtonDirective_1 = __webpack_require__(21);
	var toolbarListComponent_1 = __webpack_require__(23);
	var toolbarViewComponent_1 = __webpack_require__(25);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = function (module) {
	    module.component('miqToolbarMenu', new toolbarComponent_1.default);
	    module.component('miqToolbarList', new toolbarListComponent_1.default);
	    module.component('miqToolbarView', new toolbarViewComponent_1.default);
	    module.directive('miqToolbarButton', toolbarButtonDirective_1.default.Factory());
	};


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	///
	/// Copyright 2015-2016 Red Hat, Inc. and/or its affiliates
	/// and other contributors as indicated by the @author tags.
	///
	/// Licensed under the Apache License, Version 2.0 (the "License");
	/// you may not use this file except in compliance with the License.
	/// You may obtain a copy of the License at
	///
	///    http://www.apache.org/licenses/LICENSE-2.0
	///
	/// Unless required by applicable law or agreed to in writing, software
	/// distributed under the License is distributed on an "AS IS" BASIS,
	/// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	/// See the License for the specific language governing permissions and
	/// limitations under the License.
	///
	"use strict";
	/**
	 * @memberof miqStaticAssets
	 * @ngdoc controller
	 * @name ToolbarController
	 * @param $window {ng.IWindowService} window service for redirecting to non angular pages.
	 * @param $location {ng.ILocationService} location service to handle redirect to different angular pages.
	 * @param $sce {ng.ISCEService} service for enabling html strings to be html objects injected to page as html and not as
	 * string.
	 */
	var ToolbarController = (function () {
	    /*@ngInject*/
	    ToolbarController.$inject = ["$window", "$location", "$sce"];
	    function ToolbarController($window, $location, $sce) {
	        this.$window = $window;
	        this.$location = $location;
	        this.$sce = $sce;
	    }
	    /**
	     * Handle clicking on item in toolbar.
	     * Check what function has item for handling click action it's one of [actionUrl, redirectUrl, actionFunction,
	     * eventFunction].
	     *    * actionUrl      - will perform location path change.
	     *    * redirectUrl    - will perform window redirect.
	     *    * actionFunction - will perform call without any arguments.
	     *    * eventFunction  - will perform call to this function with $event specified.
	     * @memberof ToolbarController
	     * @function onItemClick
	     * @param {Object} item what was clicked in toolbar (member of toolbar items).
	     * @param {Object} $event for passing it to eventFunction of item (good for checking target).
	     */
	    ToolbarController.prototype.onItemClick = function (item, $event) {
	        if (item.hasOwnProperty('actionUrl')) {
	            this.$location.path(item.actionUrl);
	        }
	        else if (item.hasOwnProperty('redirectUrl')) {
	            this.$window.location = item.redirectUrl;
	        }
	        else if (item.hasOwnProperty('actionFunction')) {
	            item.actionFunction();
	        }
	        else if (item.hasOwnProperty('eventFunction')) {
	            item.eventFunction($event);
	        }
	    };
	    /**
	     * Filter out items which does not have buttons, select or custom html in them and check if array is not empty. If
	     * this array would be empty there is no content which could be shown in toolbar group.
	     *    * see {@link miqStaticAssets.ToolbarController#isButtonOrSelect} on how it is checked button or select item.
	     *    * see {@link miqStaticAssets.ToolbarController#isCustom} on how it is checked custom html item.
	     * @memberof ToolbarController
	     * @function hasContent
	     * @param {Array<IToolbarItem>} toolbarItem array of items which are checked for content.
	     * @returns {boolean} true|false isEmpty or not.
	     */
	    ToolbarController.prototype.hasContent = function (toolbarItem) {
	        return toolbarItem && toolbarItem.filter(function (item) {
	            return item && (ToolbarController.isButtonOrSelect(item) || ToolbarController.isCustom(item));
	        }).length !== 0;
	    };
	    /**
	     * Escape html custom data and make them available for html insertion to toolbar.
	     * @memberof ToolbarController
	     * @function hasContent
	     * @param escapedString html string without escaped items.
	     * @returns {any} html object, this object can be bound to see
	     * {@link https://docs.angularjs.org/api/ng/directive/ngBindHtml}
	     */
	    ToolbarController.prototype.trustAsHtml = function (escapedString) {
	        escapedString = ToolbarController.htmlDecode(escapedString).replace(/&quot;/g, '"');
	        return this.$sce.trustAsHtml(escapedString);
	    };
	    /**
	     * Private static function for decoding html.
	     * @memberof ToolbarController
	     * @function htmlDecode
	     * @param input html string containing custom html.
	     * @returns {string} unescaped html string.
	     */
	    ToolbarController.htmlDecode = function (input) {
	        var e = document.createElement('div');
	        e.innerHTML = input;
	        return e.childNodes.length === 0 ? '' : e.childNodes[0].nodeValue;
	    };
	    /**
	     * Private static function for checking if toolbar item has name and if this name is `"custom"`.
	     * @memberof ToolbarController
	     * @function hasContent
	     * @param {IToolbarItem} item which is checked for name property.
	     * @returns {boolean} true|false if it's item with custom html.
	     */
	    ToolbarController.isCustom = function (item) {
	        return item.name && item.name === 'custom';
	    };
	    /**
	     * Private static function for checking if toolbar item type and if this type is button or select.
	     *    * see {@link miqStaticAssets.ToolbarController#isButtonSelect} on how it's checked for select type.
	     *    * see {@link miqStaticAssets.ToolbarController#isButton} on how it's checked for button type.
	     * @memberof ToolbarController
	     * @function isButtonOrSelect
	     * @param {IToolbarItem} item which is checked for type property.
	     * @returns {boolean} true|false if it's item with button or button select type.
	     */
	    ToolbarController.isButtonOrSelect = function (item) {
	        return item.type && ToolbarController.isButtonSelect(item) || ToolbarController.isButton(item);
	    };
	    /**
	     * Private static function for checking if toolbar item type is buttonSelect.
	     * @memberof ToolbarController
	     * @function isButtonSelect
	     * @param {IToolbarItem} item item which is checked for type property.
	     * @returns {boolean} true|false if it's item with type equals to `"buttonSelect"`.
	     */
	    ToolbarController.isButtonSelect = function (item) {
	        return item.type === 'buttonSelect';
	    };
	    /**
	     * Private static function for checking if toolbar item type is button.
	     * @memberof ToolbarController
	     * @function isButton
	     * @param {IToolbarItem} item item which is checked for type property.
	     * @returns {boolean} true|false if it's item with type equals to `"button"`.
	     */
	    ToolbarController.isButton = function (item) {
	        return item.type === 'button';
	    };
	    return ToolbarController;
	}());
	exports.ToolbarController = ToolbarController;
	/**
	 * @memberof miqStaticAssets
	 * @ngdoc component
	 * @name miqToolbarMenu
	 * @description
	 *    This component is for whole toolbar implementation. It's advantages are, that it takes custom components as well
	 *    so they can be used instead of just plain JS objects (pass html inside toolbarItems attribute).
	 *    See {@link miqStaticAssets.ToolbarController} for implementation of all methods and behavior of this component.
	 *    Attribute toolbarItems for custom html needs to have set `args.html`:
	 *    ```JSON
	 *    [[
	 *      {"name" : "custom",
	 *      "args" : {
	 *        ...
	 *        "html" : "<div>html string, this string will be generated as part of form group</div>"
	 *        ...
	 *      }}
	 *    ]]
	 *    ```
	 *    How each button is treated see {@link miqStaticAssets.ToolbarController#hasContent} and observe each static
	 *    function which
	 *    is responsible for deciding what type of button will be used.
	 *
	 * @attr {Expression} onViewClick
	 *    Method which will be executed when clicked on view. See {@link miqStaticAssets.ToolbarController#onViewClick}
	 *    which arguments are
	 *    needed.
	 * @attr {Array} toolbarViews
	 *    List of all views which are used in toolbar. Since we use typescript this attribute has specific type of:
	 *    `Array<IToolbarItem>` See {@link IToolbarItem} for entities of toolbarViews.
	 * @attr {Array} toolbarItems
	 *    List of all items which are used in toolbar. Since we use typescript this attribute has specific type of:
	 *    `Array<Array<IToolbarItem>>` See {@link IToolbarItem} for entities of toolbarItems.
	 * @example
	 * <miq-toolbar-menu toolbar-views="ctrl.toolbarViews"
	 *                   toolbar-items="ctrl.toolbarItems"
	 *                   on-view-click="ctrl.onClick(item)">
	 * </miq-toolbar-menu>
	 */
	var Toolbar = (function () {
	    function Toolbar() {
	        this.replace = true;
	        this.template = __webpack_require__(20);
	        this.controller = ToolbarController;
	        this.controllerAs = 'vm';
	        this.bindings = {
	            toolbarViews: '<',
	            toolbarItems: '<',
	            onViewClick: '&'
	        };
	    }
	    return Toolbar;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Toolbar;


/***/ },
/* 20 */
>>>>>>> Add toolbar components and add jsdoc comments to them
/***/ function(module, exports) {

	module.exports = "<div class=\"toolbar-pf-actions miq-toolbar-actions\">\n    <div class=\"form-group miq-toolbar-group\"\n         ng-repeat=\"toolbarItem in vm.toolbarItems\"\n         ng-if=\"vm.hasContent(toolbarItem)\">\n      <miq-toolbar-button ng-repeat=\"item in toolbarItem | filter: {type: 'button'}:true\"\n                          toolbar-button=\"item\"\n                          on-item-click=\"vm.onItemClick(item, $event)\">\n      </miq-toolbar-button>\n      <miq-toolbar-list ng-repeat=\"item in toolbarItem | filter: {type: 'buttonSelect'}\"\n                        toolbar-list=\"item\"\n                        on-item-click=\"vm.onItemClick(item, $event)\">\n      </miq-toolbar-list>\n      <div ng-repeat=\"item in toolbarItem | filter: {name: 'custom'}\"\n           ng-bind-html=\"vm.trustAsHtml(item.args.html)\"\n           class=\"miq-custom-html\"></div>\n    </div>\n    <miq-toolbar-view toolbar-views=\"vm.toolbarViews\"\n                      on-item-click=\"vm.onViewClick({item: item})\"\n                      class=\"miq-view-list\">\n    </miq-toolbar-view>\n</div>\n"

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	///
	/// Copyright 2015-2016 Red Hat, Inc. and/or its affiliates
	/// and other contributors as indicated by the @author tags.
	///
	/// Licensed under the Apache License, Version 2.0 (the "License");
	/// you may not use this file except in compliance with the License.
	/// You may obtain a copy of the License at
	///
	///    http://www.apache.org/licenses/LICENSE-2.0
	///
	/// Unless required by applicable law or agreed to in writing, software
	/// distributed under the License is distributed on an "AS IS" BASIS,
	/// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	/// See the License for the specific language governing permissions and
	/// limitations under the License.
	///
<<<<<<< 0f9993a594504edf014b6689dfb5ab5f7d689e36
	///<reference path="tsd.d.ts"/>
	(function () {
	    var app = angular.module('miqStaticAssets', ['rx', 'ngSanitize']);
	})();


=======
	"use strict";
	/**
	 * @memberof miqStaticAssets
	 * @ngdoc directive
	 * @name miqToolbarButton
	 * @description
	 *    Directive withou controller. It will create new toolbar button in toolbar.
	 *
	 * @attr {Expression} onItemClick
	 *    Method for handling clicking on this button (will be called with `{item: item}` object).
	 * @attr {IToolbarItem} toolbarButton
	 *    Toolbar item based on which will be this button generated.
	 * @example
	 * <miq-toolbar-button toolbar-button="toolbarButton"
	 *                   on-item-click="ctrl.onClick(item)">
	 * </miq-toolbar-button>
	 */
	var ToolbarButton = (function () {
	    function ToolbarButton() {
	        this.replace = true;
	        this.template = __webpack_require__(22);
	        this.scope = {
	            toolbarButton: '<',
	            onItemClick: '&'
	        };
	    }
	    ToolbarButton.Factory = function () {
	        var directive = function () { return new ToolbarButton(); };
	        directive.$inject = [];
	        return directive;
	    };
	    return ToolbarButton;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = ToolbarButton;


/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = "<button title=\"{{toolbarButton.title}}\"\n        id=\"{{toolbarButton.id}}\"\n        name=\"{{toolbarButton.name}}\"\n        type=\"button\"\n        class=\"btn btn-default\"\n        data-click=\"{{toolbarButton.id}}\"\n        data-url=\"{{toolbarButton.url}}\"\n        data-url_parms=\"{{toolbarButton.url_parms}}\"\n        ng-click=\"onItemClick({item: toolbarButton, $event: $event})\">\n  <i class=\"{{toolbarButton.icon}}\" style=\"\"></i>&nbsp;\n</button>\n"

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	///
	/// Copyright 2015-2016 Red Hat, Inc. and/or its affiliates
	/// and other contributors as indicated by the @author tags.
	///
	/// Licensed under the Apache License, Version 2.0 (the "License");
	/// you may not use this file except in compliance with the License.
	/// You may obtain a copy of the License at
	///
	///    http://www.apache.org/licenses/LICENSE-2.0
	///
	/// Unless required by applicable law or agreed to in writing, software
	/// distributed under the License is distributed on an "AS IS" BASIS,
	/// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	/// See the License for the specific language governing permissions and
	/// limitations under the License.
	///
	"use strict";
	/**
	 * @memberof miqStaticAssets
	 * @ngdoc controller
	 * @name ToolbarListController
	 * @implements {IToolbarListBindings}
	 */
	var ToolbarListController = (function () {
	    function ToolbarListController() {
	    }
	    return ToolbarListController;
	}());
	exports.ToolbarListController = ToolbarListController;
	/**
	 * @memberof miqStaticAssets
	 * @ngdoc component
	 * @name miqToolbarList
	 * @description
	 *    Component which will generate list in toolbar with toolbarItems as dropdown menu.
	 *
	 * @attr {Expression} onItemClick
	 *    Method which will be executed when clicked on view. See
	 *    {@link miqStaticAssets.ToolbarListController#onItemClick} which arguments are
	 *    needed.
	 * @attr {Array} toolbarItems
	 *    List of all items which are used in toolbar. Since we use typescript this attribute has specific type of:
	 *    `Array<Array<IToolbarItem>>` See {@link IToolbarItem} for entities of toolbarItems.
	 * @example
	 * <miq-toolbar-list toolbar-list="ctrl.toolbarItems"
	 *                   on-item-click="ctrl.onClick(item)">
	 * </miq-toolbar-list>
	 */
	var ToolbarList = (function () {
	    function ToolbarList() {
	        this.replace = true;
	        this.template = __webpack_require__(24);
	        this.controller = ToolbarListController;
	        this.controllerAs = 'vm';
	        this.bindings = {
	            toolbarList: '<',
	            onItemClick: '&'
	        };
	    }
	    return ToolbarList;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = ToolbarList;


/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = "<div class=\"btn-group\" dropdown>\n  <button type=\"button\" dropdown-toggle class=\"btn dropdown-toggle btn-default\"\n          ng-class=\"{disabled: !vm.toolbarList.enabled}\" title=\"{{vm.toolbarList.title}}\">\n    <i class=\"{{vm.toolbarList.icon}}\" style=\"margin-right: 5px;\" ng-if=\"vm.toolbarList.icon\"></i>\n    {{vm.toolbarList.text}}\n    <span class=\"caret\"></span>\n  </button>\n  <ul class=\"dropdown-menu\" role=\"menu\">\n    <li ng-repeat=\"item in vm.toolbarList.items track by $index\" ng-class=\"{disabled: !item.enabled}\">\n      <a href=\"\"\n         ng-click=\"vm.onItemClick({item: item, $event: $event})\"\n         data-function=\"{{item.data.function}}\"\n         data-function-data=\"{{item.data['function-data']}}\"\n         data-target=\"{{item.data.target}}\"\n         data-toggle=\"{{item.data.toggle}}\"\n         data-click=\"{{item.id}}\"\n         name=\"{{item.id}}\"\n         id=\"{{item.id}}\"\n         data-url_parms=\"{{item.url_parms}}\"\n         data-url=\"{{item.url}}\">\n        <i ng-if=\"item.icon\" class=\"{{item.icon}}\"></i>\n        {{item.text}}\n      </a>\n    </li>\n  </ul>\n</div>\n"

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	///
	/// Copyright 2015-2016 Red Hat, Inc. and/or its affiliates
	/// and other contributors as indicated by the @author tags.
	///
	/// Licensed under the Apache License, Version 2.0 (the "License");
	/// you may not use this file except in compliance with the License.
	/// You may obtain a copy of the License at
	///
	///    http://www.apache.org/licenses/LICENSE-2.0
	///
	/// Unless required by applicable law or agreed to in writing, software
	/// distributed under the License is distributed on an "AS IS" BASIS,
	/// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	/// See the License for the specific language governing permissions and
	/// limitations under the License.
	///
	"use strict";
	/**
	 * @memberof miqStaticAssets
	 * @ngdoc controller
	 * @name ToolbarViewController
	 * @implements {IToolbarViewBindings}
	 */
	var ToolbarViewController = (function () {
	    function ToolbarViewController() {
	    }
	    return ToolbarViewController;
	}());
	exports.ToolbarViewController = ToolbarViewController;
	/**
	 * @memberof miqStaticAssets
	 * @ngdoc component
	 * @name miqToolbarView
	 * @description
	 *    Component which will generate list in toolbar with toolbarItems as dropdown menu.
	 *
	 * @attr {Expression} onItemClick
	 *    Method which will be executed when clicked on view.
	 * @attr {Array} toolbarViews
	 *    List of all views which are used in toolbar.
	 * @example
	 * <miq-toolbar-view toolbar-views="ctrl.toolbarViews"
	 *                   on-item-click="ctrl.onClick(item)">
	 * </miq-toolbar-view>
	 */
	var ToolbarView = (function () {
	    function ToolbarView() {
	        this.replace = false;
	        this.template = __webpack_require__(26);
	        this.controller = ToolbarViewController;
	        this.controllerAs = 'vm';
	        this.bindings = {
	            toolbarViews: '<',
	            onItemClick: '&'
	        };
	    }
	    return ToolbarView;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = ToolbarView;


/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = "<div class=\"toolbar-pf-view-selector form-group\">\n  <ul class=\"list-inline\">\n    <li ng-repeat=\"item in vm.toolbarViews\" ng-class=\"{active: item.selected}\">\n      <a href=\"javascript:void(0)\"\n         title=\"{{item.title}}\"\n         id=\"{{item.id}}\"\n         data-url=\"{{item.url}}\"\n         data-url_parms=\"{{item.url_parms}}\"\n         ng-click=\"vm.onItemClick({item: item})\"\n         name=\"{{item.name}}\">\n        <i class=\"{{item.icon}}\" style=\"\"></i>\n      </a>\n    </li>\n  </ul>\n</div>\n"

>>>>>>> Add toolbar components and add jsdoc comments to them
/***/ }
/******/ ]);
//# sourceMappingURL=ui-components.js.map