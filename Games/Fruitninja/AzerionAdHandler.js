/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 322:
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(38)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, LoaderHelper_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.AdHandler = void 0;
    var ContentStatus;
    (function (ContentStatus) {
        ContentStatus["PAUSED"] = "Paused";
        ContentStatus["RESUMED"] = "Resumed";
    })(ContentStatus || (ContentStatus = {}));
    var AdHandler = /** @class */ (function () {
        function AdHandler() {
        }
        AdHandler.init = function () {
            this.azAdWrapper = new window.h5ads.AdWrapper(window['_azerionIntegration']['advType'], window['_azerionIntegration']['gdId']);
            this.contentStatus = ContentStatus.RESUMED;
        };
        AdHandler.addListeners = function (pauseCallback, resumeCallback) {
            var _this = this;
            this.azAdWrapper.on(h5ads.AdEvents.CONTENT_PAUSED, function () {
                console.log('CONTENT_PAUSED');
                _this.contentStatus = ContentStatus.PAUSED;
                if (pauseCallback) {
                    pauseCallback();
                }
            });
            this.azAdWrapper.on(h5ads.AdEvents.CONTENT_RESUMED, function () {
                console.log('CONTENT_RESUMED');
                _this.contentStatus = ContentStatus.RESUMED;
                if (resumeCallback) {
                    resumeCallback();
                }
                window.focus();
            });
        };
        AdHandler.showInterstitialAd = function (type, resumeCallback, pauseCallback) {
            var _this = this;
            LoaderHelper_1.LoaderHelper.show();
            var onPauseTriggered = function () {
                console.log('DEBUG: onPauseTriggered');
                LoaderHelper_1.LoaderHelper.hide();
                if (pauseCallback) {
                    pauseCallback.call(_this);
                }
                _this.azAdWrapper.removeListener(h5ads.AdEvents.CONTENT_PAUSED, onPauseTriggered);
            };
            var onAdComplete = function () {
                console.log('DEBUG: onAdComplete');
                LoaderHelper_1.LoaderHelper.hide();
                if (resumeCallback) {
                    resumeCallback.call(_this);
                }
                _this.azAdWrapper.removeListener(h5ads.AdEvents.CONTENT_RESUMED, onAdComplete);
            };
            this.azAdWrapper.on(h5ads.AdEvents.CONTENT_RESUMED, onAdComplete);
            this.azAdWrapper.on(h5ads.AdEvents.CONTENT_PAUSED, onPauseTriggered);
            this.azAdWrapper.showAd(h5ads.AdType.interstitial);
        };
        AdHandler.showRewardedAd = function (type, onContinueCallback, onAdFailCallback) {
            var _this = this;
            LoaderHelper_1.LoaderHelper.show();
            var rewarded = false;
            var onAdComplete = function () {
                console.log('DEBUG: onAdSuccess: rewarded');
                LoaderHelper_1.LoaderHelper.hide();
                if (rewarded) {
                    if (onContinueCallback) {
                        onContinueCallback.call(_this);
                    }
                }
                else {
                    if (onAdFailCallback) {
                        onAdFailCallback.call(_this);
                    }
                }
                _this.azAdWrapper.removeListener(h5ads.AdEvents.CONTENT_RESUMED, onAdComplete);
                _this.azAdWrapper.preloadAd(h5ads.AdType.rewarded);
                _this.azAdWrapper.removeAllListeners(h5ads.AdEvents.AD_REWARDED);
            };
            this.azAdWrapper.addListener(h5ads.AdEvents.AD_REWARDED, function () {
                rewarded = true;
            });
            this.azAdWrapper.on(h5ads.AdEvents.CONTENT_RESUMED, onAdComplete);
            this.azAdWrapper.showAd(h5ads.AdType.rewarded);
        };
        AdHandler.isAdPlaying = function () {
            return this.contentStatus === ContentStatus.PAUSED;
        };
        AdHandler.preloadAd = function (adType) {
            this.azAdWrapper.preloadAd(adType);
        };
        AdHandler.rewardedAdAvailable = function () {
            return this.azAdWrapper.adAvailable(h5ads.AdType.rewarded);
        };
        return AdHandler;
    }());
    exports.AdHandler = AdHandler;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 38:
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.LoaderHelper = void 0;
    var LoaderHelper = /** @class */ (function () {
        function LoaderHelper() {
        }
        LoaderHelper.show = function () {
            var loader = document.getElementById('loader');
            if (loader) {
                loader.style.display = 'block';
            }
        };
        LoaderHelper.hide = function () {
            var loader = document.getElementById('loader');
            if (loader) {
                loader.style.display = 'none';
            }
        };
        return LoaderHelper;
    }());
    exports.LoaderHelper = LoaderHelper;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 726:
/***/ ((module, exports, __webpack_require__) => {

var __webpack_unused_export__;
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(322)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, AdHandler_1) {
    "use strict";
    __webpack_unused_export__ = ({ value: true });
    var createAdHandler = function () {
        window['_azerionAdHandler'] = AdHandler_1.AdHandler;
    };
    createAdHandler();
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module used 'module' so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(726);
/******/ 	
/******/ })()
;
