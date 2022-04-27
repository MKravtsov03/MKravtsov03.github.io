/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
__webpack_require__(2);
__webpack_require__(3);
module.exports = __webpack_require__(4);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Element.prototype.matches
 *
 * @author Ryan Hefner <hi@ryanhefner.com>
 */



module.exports = (function() {
    if (Element && !Element.prototype.matches) {
        Element.prototype.matches = Element.prototype.matchesSelector
            || Element.prototype.webkitMatchesSelector
            || Element.prototype.mozMatchesSelector
            || Element.prototype.msMatchesSelector
            || Element.prototype.oMatchesSelector;
    }
})();


/***/ }),
/* 2 */
/***/ (function(module, exports) {

// element-closest | CC0-1.0 | github.com/jonathantneal/closest

(function (ElementProto) {
	if (typeof ElementProto.matches !== 'function') {
		ElementProto.matches = ElementProto.msMatchesSelector || ElementProto.mozMatchesSelector || ElementProto.webkitMatchesSelector || function matches(selector) {
			var element = this;
			var elements = (element.document || element.ownerDocument).querySelectorAll(selector);
			var index = 0;

			while (elements[index] && elements[index] !== element) {
				++index;
			}

			return Boolean(elements[index]);
		};
	}

	if (typeof ElementProto.closest !== 'function') {
		ElementProto.closest = function closest(selector) {
			var element = this;

			while (element && element.nodeType === 1) {
				if (element.matches(selector)) {
					return element;
				}

				element = element.parentNode;
			}

			return null;
		};
	}
})(window.Element.prototype);


/***/ }),
/* 3 */
/***/ (function(module, exports) {

if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

__webpack_require__(6);

var _jquery = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"jquery\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _jquery2 = _interopRequireDefault(_jquery);

var _main = __webpack_require__(8);

var _main2 = _interopRequireDefault(_main);

var _sliders = __webpack_require__(9);

var _sliders2 = _interopRequireDefault(_sliders);

var _popups = __webpack_require__(10);

var _popups2 = _interopRequireDefault(_popups);

var _select = __webpack_require__(11);

var _select2 = _interopRequireDefault(_select);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

global.$ = _jquery2.default;
global.jQuery = _jquery2.default;
document.addEventListener('DOMContentLoaded', function () {
  (0, _main2.default)();
  (0, _sliders2.default)();

  global.customPopups = new _popups2.default();
  global.customSelect = new _select2.default();
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 5 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _files = __webpack_require__(7);

var _files2 = _interopRequireDefault(_files);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function initMarkapMenu() {
  var nav = document.createElement("div");
  var style = document.createElement("style");
  var button = document.createElement("button");
  var wrapper = document.createElement("div");
  wrapper.appendChild(button);
  wrapper.appendChild(nav);
  wrapper.className = "helper-nav-wrapper";
  button.innerHTML = "Open pages list";
  button.className = "helper-nav-button";
  nav.className = "helper-nav";
  style.innerHTML = ".helper-nav a:hover {\n      color:#fff;\n      background-color:#000;\n    } \n    .helper-nav a {\n      display:block;\n      color: #000;\n      padding: 3px;\n      margin:0\n    }\n    .helper-nav-button {\n      background: #000;\n      color: #fff;\n      padding: 5px;\n      font-weight: 300;\n      font-size: 12px;\n      border: none;\n      border-radius: 3px 0 0 0;\n      cursor: pointer;\n    }\n    .helper-nav-wrapper {\n      position: fixed;\n      bottom: 0;\n      right: 0;\n      font-family: monospace;\n      z-index: 9999;\n      text-align: right;\n      font-size: 14px;\n    }\n    .helper-nav {\n      text-align: left;\n      background-color: #fff;\n      border: 1px solid #000;\n      padding: 3px;\n      boxShadow: 0 0 40px 0 rgba(0,0,0,.2);\n      max-height: 300px;\n      overflow-y: auto;\n    }\n    @media all and (max-width:1024px) {\n      .helper-nav {\n        height: 160px;\n        overflow-y: scroll;\n      }\n    }";
  document.head.appendChild(style);
  if (_files2.default.length <= 2) {
    return;
  }

  for (var i = 1; i < _files2.default.length; i += 1) {
    nav.innerHTML += "<a href=\"/" + _files2.default[i] + "\">" + i + "-" + _files2.default[i] + "</a>";
  }
  document.body.appendChild(wrapper);
  var flag = localStorage.getItem("flag") ? JSON.parse(localStorage.getItem("flag")) : false;
  var display = flag ? "block" : "none";
  var btnText = flag ? "Close pages list" : "Open pages list";
  nav.style.display = display;
  button.innerHTML = btnText;

  function toggleNav() {
    if (flag) {
      nav.style.display = "none";
      button.innerHTML = "Open pages list";
    } else {
      nav.style.display = "block";
      button.innerHTML = "Close pages list";
    }
    flag = !flag;
    localStorage.setItem("flag", flag);
  }
  document.addEventListener("keyup", function (e) {
    if (e.type === "keyup" && e.ctrlKey && e.keyCode === 88) {
      toggleNav();
    }
  });
  button.addEventListener("click", toggleNav);
};

if (window.location.hostname === "localhost") {
  initMarkapMenu();
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ["dev", "404.html", "account-change-password.html", "account-edit-profile.html", "account-main.html", "account-not-subscribed.html", "account-privacy.html", "account-public-profile.html", "account-subscribed.html", "account-welcome.html", "author.html", "bottle.html", "change-password.html", "choose-nickname.html", "contact-main.html", "contact-submit-mezcal-brand.html", "email-confirmation.html", "forgot-password.html", "index.html", "login.html", "password-changed.html", "post-individual.html", "recover-email-sent-box.html", "register.html"];

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jquery = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"jquery\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = function () {
  (0, _jquery2.default)(window).on('scroll', function () {
    if ((0, _jquery2.default)(window).scrollTop() > 0) {
      (0, _jquery2.default)('.header').addClass('fixed');
    } else {
      (0, _jquery2.default)('.header').removeClass('fixed');
    }
  });

  if (window.innerWidth < 992) {
    (0, _jquery2.default)('.footer-accardion__title').on('click', function toogleAccardion() {
      (0, _jquery2.default)(this).toggleClass('active');
      (0, _jquery2.default)(this).siblings('.footer-accardion__content').slideToggle();
    });
  }

  (0, _jquery2.default)('#image').change(function uploadImages() {
    (0, _jquery2.default)("#frames").html('');
    for (var i = 0; i < (0, _jquery2.default)(this)[0].files.length; i += 1) {
      (0, _jquery2.default)("#frames").append('<div class="load-image__image"><img src="' + window.URL.createObjectURL(this.files[i]) + '" width="100px" height="100px"/></div>');
    }
  });

  (0, _jquery2.default)('.checkbox-block__button > label > span').on('click', function openCloseSubFields() {
    var checkbox = (0, _jquery2.default)(this).siblings('input');

    if (!checkbox[0].checked) {
      (0, _jquery2.default)('.submit-mezcal-bottle').show();
    } else {
      (0, _jquery2.default)('.submit-mezcal-bottle').hide();
    }
  });

  (0, _jquery2.default)('.account-success-msg__close').on('click', function closeAlert() {
    (0, _jquery2.default)(this).parent('.account-success-msg').hide();
  });

  (0, _jquery2.default)('.main-textarea').each(function eachTextarea() {
    var dafaultLength = (0, _jquery2.default)(this).val().length;
    (0, _jquery2.default)(this).siblings('.form-label').find('small').find('span').html(dafaultLength);
    (0, _jquery2.default)(this).on('load keyup', function handleChange() {
      var msgLength = (0, _jquery2.default)(this).val().length;
      (0, _jquery2.default)(this).siblings('.form-label').find('small').find('span').html(msgLength);
    });
  });

  (0, _jquery2.default)('.public-profile__account-settings-button').on('click', function openCloseSettings() {
    (0, _jquery2.default)(this).toggleClass('active');
    (0, _jquery2.default)('.public-profile__account-settings-list').toggleClass('open');
  });

  (0, _jquery2.default)(document).on('click touchstart', function (e) {
    if (!(0, _jquery2.default)(e.target).closest('.public-profile__account-settings-button, .public-profile__account-settings-list').length) {
      (0, _jquery2.default)('.public-profile__account-settings-button').removeClass('active');
      (0, _jquery2.default)('.public-profile__account-settings-list').removeClass('open');
    }
    e.stopPropagation();
  });

  if (window.innerWidth < 768) {
    var flag = (0, _jquery2.default)('.public-profile__account-flag');

    (0, _jquery2.default)('.public-profile__account-content').append(flag);

    (0, _jquery2.default)('.public-profile__product').each(function eachProducts() {
      var head = (0, _jquery2.default)(this).find('.public-profile__product-head');
      (0, _jquery2.default)(this).find('.public-profile__product-left').append(head);
    });
  }
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jquery = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"jquery\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _jquery2 = _interopRequireDefault(_jquery);

__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"slick-carousel\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = function () {
  (0, _jquery2.default)('.main-section__tags-list').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    accessibility: false,
    infinite: true,
    arrows: true,
    dots: false,
    rows: 0,
    variableWidth: true,
    nextArrow: '<div class="main-section__tags-arrow arrow-next"><svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.4" d="M1 1L5 5L1 9" stroke="#5A5E62" stroke-width="1.5"/></svg></div>'
  });

  (0, _jquery2.default)('.brands-about__list').slick({
    slidesToShow: 9,
    slidesToScroll: 1,
    accessibility: false,
    infinite: true,
    arrows: false,
    dots: false,
    rows: 0,
    responsive: [{
      breakpoint: 1400,
      settings: {
        slidesToShow: 7
      }
    }, {
      breakpoint: 1200,
      settings: {
        slidesToShow: 6
      }
    }, {
      breakpoint: 1025,
      settings: {
        slidesToShow: 5
      }
    }, {
      breakpoint: 992,
      settings: {
        slidesToShow: 4
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 580,
      settings: {
        slidesToShow: 2
      }
    }]
  });

  (0, _jquery2.default)('.products-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    accessibility: false,
    infinite: true,
    arrows: true,
    dots: false,
    rows: 0,
    variableWidth: true,
    prevArrow: (0, _jquery2.default)('.profile-welcome__review-navigation > .prev-arrow').html('<svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 1L2 5L6 9" stroke="#5A5E62" stroke-width="1.5"/></svg>'),
    nextArrow: (0, _jquery2.default)('.profile-welcome__review-navigation > .next-arrow').html('<svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L5 5L1 9" stroke="#5A5E62" stroke-width="1.5"/></svg>')
  });
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

if (!Array.from) {
  Array.from = function fn1() {
    var toStr = Object.prototype.toString;
    var isCallable = function fn2(fn) {
      return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
    };
    var toInteger = function fn3(value) {
      var number = Number(value);
      if (isNaN(number)) {
        return 0;
      }
      if (number === 0 || !isFinite(number)) {
        return number;
      }
      return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
    };
    var maxSafeInteger = Math.pow(2, 53) - 1;
    var toLength = function fn4(value) {
      var len = toInteger(value);
      return Math.min(Math.max(len, 0), maxSafeInteger);
    };
    return function from(arrayLike) {
      var C = this;
      var items = Object(arrayLike);
      if (arrayLike == null) {
        throw new TypeError('Array.from requires an array-like object - not null or undefined');
      }
      var mapFn = arguments[1];
      if (typeof mapFn !== 'undefined') {
        mapFn = arguments.length > 1 ? arguments[1] : undefined;
        if (!isCallable(mapFn)) {
          throw new TypeError('Array.from: when provided, the second argument must be a function');
        }
        if (arguments.length > 2) {
          var _T = arguments[2];
        }
      }
      var len = toLength(items.length);
      var A = isCallable(C) ? Object(new C(len)) : new Array(len);
      var k = 0;
      var kValue = void 0;
      while (k < len) {
        kValue = items[k];
        if (mapFn) {
          A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
        } else {
          A[k] = kValue;
        }
        k += 1;
      }
      A.length = len;
      return A;
    };
  }();
}

var Popups = function () {
  function Popups(options) {
    _classCallCheck(this, Popups);

    var defaultOption = {
      htmlBlock: 'html',
      bodyBlock: 'body',
      popupActiveClassName: 'active',
      popupLinkDataAttr: 'data-for',
      popupLinkSelector: '.popup-open',
      popupSelector: '.popup',
      closeButtonSelector: '.popup__close',
      popupOverlaySelector: '.popup__overlay',
      bugIOSClassName: 'iosBugFixCaret'
    };
    this.options = _extends({}, defaultOption, options);
    return this.init(this.options);
  }

  _createClass(Popups, [{
    key: 'init',
    value: function init(options) {
      var _this = this;

      var popupOpen = function popupOpen() {
        var popupInner = document.querySelectorAll(options.popupSelector);
        var link = document.querySelectorAll(options.popupLinkSelector);
        link.forEach(function (option) {
          var data = option.getAttribute(options.popupLinkDataAttr);
          var popupElement = document.querySelector('.' + data);
          if (popupElement) {
            option.addEventListener('click', function (event) {
              event.preventDefault();
              popupInner.forEach(function (popupInnerElement) {
                popupInnerElement.classList.remove(options.popupActiveClassName);
                _this.popupOverlaySelectorDestroy();
                _this.iosRemoveClass();
              });
              popupElement.classList.toggle(options.popupActiveClassName);
              _this.popupOverlaySelectorActive();
            });
          }
        });
      };
      Array.from('[' + options.popupLinkSelector[options.popupLinkDataAttr] + ']').forEach(popupOpen);
      this.popupClose();
    }
  }, {
    key: 'popupOverlaySelectorActive',
    value: function popupOverlaySelectorActive() {
      var htmlBlock = document.querySelector(this.options.htmlBlock);
      var scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      htmlBlock.style.marginRight = scrollbarWidth + 'px';
      htmlBlock.style.overflow = 'hidden';
    }
  }, {
    key: 'popupOverlaySelectorDestroy',
    value: function popupOverlaySelectorDestroy() {
      var htmlBlock = document.querySelector(this.options.htmlBlock);
      htmlBlock.removeAttribute('style');
    }
  }, {
    key: 'iosRemoveClass',
    value: function iosRemoveClass() {
      var bodyBlock = document.querySelector(this.options.bodyBlock);
      bodyBlock.classList.remove(this.options.bugIOSClassName);
    }
  }, {
    key: 'popupCloseButton',
    value: function popupCloseButton() {
      var _this2 = this;

      var popupSelector = document.querySelectorAll(this.options.popupSelector);
      var close = document.querySelectorAll(this.options.closeButtonSelector);
      close.forEach(function (closeElement) {
        closeElement.addEventListener('click', function () {
          popupSelector.forEach(function (popupSelectorElement) {
            popupSelectorElement.classList.remove(_this2.options.popupActiveClassName);
            _this2.popupOverlaySelectorDestroy();
            _this2.iosRemoveClass();
          });
        });
      });
    }
  }, {
    key: 'popupCloseOverlay',
    value: function popupCloseOverlay() {
      var _this3 = this;

      var popupSelector = document.querySelectorAll(this.options.popupSelector);
      var popupOverlaySelectors = document.querySelectorAll(this.options.popupOverlaySelector);
      popupOverlaySelectors.forEach(function (popupOverlaySelectorsElement) {
        popupOverlaySelectorsElement.addEventListener('click', function () {
          popupSelector.forEach(function (popupSelectorElement) {
            popupSelectorElement.classList.remove(_this3.options.popupActiveClassName);
            _this3.popupOverlaySelectorDestroy();
            _this3.iosRemoveClass();
          });
        });
      });
    }
  }, {
    key: 'popupClose',
    value: function popupClose() {
      this.popupCloseButton();
      this.popupCloseOverlay();
    }
  }, {
    key: 'update',
    value: function update() {
      this.init(this.options);
    }
  }]);

  return Popups;
}();

exports.default = Popups;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _toConsumableArray(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }return arr2;
  } else {
    return Array.from(arr);
  }
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

if (!String.prototype.includes) {
  String.prototype.includes = function (search, start) {
    'use strict';

    if (typeof start !== 'number') {
      start = 0;
    }

    if (start + search.length > this.length) {
      return false;
    } else {
      return this.indexOf(search, start) !== -1;
    }
  };
}

var Select = function () {
  function Select(options) {
    _classCallCheck(this, Select);

    var defaultOptions = {
      selector: 'select',
      customSelectClassName: 'select',
      customSelectActiveClassName: 'select--open',
      currentClassName: 'select__current',
      selectListClassName: 'select__list',
      selectItemClassName: 'select__item',
      activeItemClass: 'select__item--active',
      disableItemClass: 'select__item--disabled',
      activeClass: 'select--open',
      placeholderClass: 'placeholder',
      event: 'click',
      onChange: function onChange() /* select */{
        // select onChange event
      }
    };
    this.options = _extends({}, defaultOptions, options);

    return this.init(this.options.selector);
  }

  _createClass(Select, [{
    key: 'init',
    value: function init(selector) {
      var _this = this;

      var selects = document.querySelectorAll(selector);
      if (!selects) return;
      selects.forEach(function (element) {
        var customSelect = _this.renderSelect(element);
        element.insertAdjacentElement('afterEnd', customSelect);
        if (element.dataset.search) {
          var el = document.createElement('li');
          customSelect.querySelector('ul').prepend(el);
        }
      });
    }
  }, {
    key: 'update',
    value: function update() {
      var oldSelect = document.querySelectorAll('.select');
      oldSelect.forEach(function (e) {
        e.parentNode.removeChild(e);
      });
      this.init(this.options.selector);
    }
  }, {
    key: 'renderSelect',
    value: function renderSelect(select) {
      var _this2 = this;

      var currentElement = document.createElement('span');
      var customSelectList = document.createElement('ul');
      var customSelect = document.createElement('div');
      var nativeSelectClasses = select.className.split(' ');
      // add classes to custm select
      customSelect.classList.add(this.options.customSelectClassName);
      if (select.className) {
        var _customSelect$classLi;

        (_customSelect$classLi = customSelect.classList).add.apply(_customSelect$classLi, _toConsumableArray(nativeSelectClasses));
      }

      // add tabindex if it exist
      if (select.getAttribute('tabindex')) {
        customSelect.setAttribute('tabindex', select.getAttribute('tabindex'));
      }
      // add disabled class if it exist
      if (select.disabled) {
        customSelect.classList.add('disabled');
      }
      currentElement.classList.add(this.options.currentClassName);
      customSelectList.classList.add(this.options.selectListClassName);

      customSelect.appendChild(currentElement);
      customSelect.appendChild(customSelectList);

      var options = select.querySelectorAll('option');
      if (!options) return;
      var selected = select.querySelector('option:checked') || select.querySelector('option:first-child');
      // set current
      if (!selected) return;

      var currentOptionImage = selected.getAttribute('data-image');
      var currentHTML = selected.getAttribute('data-display') || selected.innerHTML;
      currentElement.innerHTML = currentHTML;

      if (currentOptionImage) {
        var optionImageElement = '<div class="option-image"><img src="' + currentOptionImage + '" alt=""></div>';
        currentElement.insertAdjacentHTML('afterBegin', optionImageElement);
      }

      // build list
      options.forEach(function (option, index) {
        var optionImage = option.getAttribute('data-image');
        var display = option.getAttribute('data-display');
        var nativeOptionClasses = option.className.split(' ');
        var item = document.createElement('li');
        item.classList.add(_this2.options.selectItemClassName);

        if (option.className) {
          var _item$classList;

          (_item$classList = item.classList).add.apply(_item$classList, _toConsumableArray(nativeOptionClasses));
        }

        if (option.selected) {
          item.classList.add(_this2.options.activeItemClass);
        }

        if (option.disabled) {
          item.classList.add(_this2.options.disableItemClass);
        }

        if (option.selected && option.disabled) {
          currentElement.classList.add(_this2.options.placeholderClass);
        }

        item.setAttribute('data-value', option.value);
        item.innerText = display || option.innerText;

        if (optionImage) {
          var _optionImageElement = '<div class="option-image"><img src="' + optionImage + '" alt=""></div>';
          item.insertAdjacentHTML('afterBegin', _optionImageElement);
        }

        if (select.dataset.search && index === 0) {
          var sh = document.createElement('div');
          sh.classList.add('search-holder');
          var search = document.createElement('input');
          search.type = 'search';
          search.placeholder = select.dataset.search;
          sh.appendChild(search);
          search.addEventListener('click', function (e) {
            e.stopImmediatePropagation();
          });
          var Search = function Search() {
            var _this3 = this;

            var list = customSelectList.querySelectorAll('li');
            list.forEach(function (element) {
              if (!element.classList.contains('search') && !element.textContent.toLowerCase().includes(_this3.value.toLowerCase())) {
                element.classList.add('hidden');
              } else {
                element.classList.remove('hidden');
              }
              if (!_this3.value) {
                element.classList.remove('hidden');
              }
            });
          };
          search.addEventListener('keyup', Search);
          search.addEventListener('change', Search);
          customSelectList.insertAdjacentElement('beforeBegin', sh);
          return;
        }

        customSelectList.appendChild(item);
      });

      this.addListeners(select, customSelect);

      return customSelect;
    }
  }, {
    key: 'addListeners',
    value: function addListeners(select, customSelect) {
      var options = this.options;

      select.addEventListener('change', function changeSelectEvent() {
        if (typeof options.onChange === "function") {
          options.onChange(this);
        }
      });

      customSelect.addEventListener('click', function openSelectEven(event) {
        var _this4 = this;

        var innerHeightToBottom = window.innerHeight - customSelect.getBoundingClientRect().bottom;
        var thisList = this.querySelectorAll('ul');
        this.classList.toggle(options.customSelectActiveClassName);
        document.body.classList.toggle('select-is-open');
        thisList.forEach(function (el) {
          var listHeight = el.offsetHeight;
          if (innerHeightToBottom < listHeight) {
            _this4.classList.toggle('to-up');
          }
        });
        event.stopPropagation();
      });

      document.body.addEventListener('click', function () {
        var openSelect = document.querySelectorAll('.select');
        for (var i = 0; i < openSelect.length; i += 1) {
          openSelect[i].classList.remove(options.customSelectActiveClassName);
        }
      });

      customSelect.addEventListener('click', function closeOthersSelects() {
        var _this5 = this;

        var openSelect = document.querySelectorAll('.select');
        openSelect.forEach(function (selectItem) {
          if (selectItem.classList.contains('select--open')) {
            selectItem.classList.remove(options.customSelectActiveClassName);
            _this5.classList.add(options.customSelectActiveClassName);
          }
        });
      });

      var optionsList = customSelect.getElementsByClassName(options.selectItemClassName);
      var currentElement = customSelect.getElementsByClassName(options.currentClassName)[0];
      var naviveOptions = select.querySelectorAll('option');

      Array.prototype.forEach.call(optionsList, function (item) {
        item.addEventListener('click', function selectEvents(event) {

          if (currentElement.classList.contains(options.placeholderClass)) {
            currentElement.classList.remove(options.placeholderClass);
          }

          if (this.classList.contains(options.activeItemClass)) {
            return;
          }

          if (this.classList.contains(options.disableItemClass)) {
            event.stopPropagation();
            return;
          }
          var index = Array.prototype.indexOf.call(this.parentElement.children, this);

          Array.prototype.forEach.call(customSelect.getElementsByClassName(options.selectItemClassName), function (element) {
            element.classList.remove(options.activeItemClass);
          });

          currentElement.innerHTML = this.innerHTML;
          this.classList.add(options.activeItemClass);

          // change select value
          select.value = this.getAttribute('data-value');
          naviveOptions.forEach(function (nativeItem) {
            nativeItem.selected = false;
          });
          naviveOptions[index].selected = true;
          var changeEvent = document.createEvent('Event');
          changeEvent.initEvent('change', true, true);
          select.dispatchEvent(changeEvent);
        });
      });
    }
  }]);

  return Select;
}();

exports.default = Select;

/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map