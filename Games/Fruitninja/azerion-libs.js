var _azerionBuildVersion = "tc-20";
var _azerionIntegration = {
    "gdId": "a186dc9ac7f548f884db8ff54df6dd9f",
    "rtgEnabled": false,
    "lbEnabled": false,
    "fbType": "dummy",
    "alxType": "none",
    "advType": "gd",
    "af": false,
    "sa": false,
    "la": true,
    "bd": 8,
    "playBtn": true,
    "cp": false,
    "build": {
        "version": "tc-20",
        "timeStamp": 1707212686574,
        "h": "4d9ca5a3"
    },
    "p": "gd",
    "lng": null,
    "gmoEnabled": false,
    "gameTitle": "Fruit Ninja"
};
var playBtn = true;
var fbrqBD = 8;
var fbrqLA = true;
var fbrqSA = false;
/* uglified */
(()=>{
    var i = {
        34: e=>{
            "use strict";
            var i = Object.prototype.hasOwnProperty
              , p = "~";
            function n() {}
            function o(e, t, n) {
                this.fn = e,
                this.context = t,
                this.once = n || !1
            }
            function r(e, t, n, i, r) {
                if ("function" != typeof n)
                    throw new TypeError("The listener must be a function");
                n = new o(n,i || e,r),
                i = p ? p + t : t;
                return e._events[i] ? e._events[i].fn ? e._events[i] = [e._events[i], n] : e._events[i].push(n) : (e._events[i] = n,
                e._eventsCount++),
                e
            }
            function l(e, t) {
                0 == --e._eventsCount ? e._events = new n : delete e._events[t]
            }
            function t() {
                this._events = new n,
                this._eventsCount = 0
            }
            Object.create && (n.prototype = Object.create(null),
            (new n).__proto__ || (p = !1)),
            t.prototype.eventNames = function() {
                var e, t, n = [];
                if (0 === this._eventsCount)
                    return n;
                for (t in e = this._events)
                    i.call(e, t) && n.push(p ? t.slice(1) : t);
                return Object.getOwnPropertySymbols ? n.concat(Object.getOwnPropertySymbols(e)) : n
            }
            ,
            t.prototype.listeners = function(e) {
                var e = p ? p + e : e
                  , t = this._events[e];
                if (!t)
                    return [];
                if (t.fn)
                    return [t.fn];
                for (var n = 0, i = t.length, r = new Array(i); n < i; n++)
                    r[n] = t[n].fn;
                return r
            }
            ,
            t.prototype.listenerCount = function(e) {
                e = p ? p + e : e,
                e = this._events[e];
                return e ? e.fn ? 1 : e.length : 0
            }
            ,
            t.prototype.emit = function(e, t, n, i, r, o) {
                var a = p ? p + e : e;
                if (!this._events[a])
                    return !1;
                var s, l = this._events[a], d = arguments.length;
                if (l.fn) {
                    switch (l.once && this.removeListener(e, l.fn, void 0, !0),
                    d) {
                    case 1:
                        return l.fn.call(l.context),
                        !0;
                    case 2:
                        return l.fn.call(l.context, t),
                        !0;
                    case 3:
                        return l.fn.call(l.context, t, n),
                        !0;
                    case 4:
                        return l.fn.call(l.context, t, n, i),
                        !0;
                    case 5:
                        return l.fn.call(l.context, t, n, i, r),
                        !0;
                    case 6:
                        return l.fn.call(l.context, t, n, i, r, o),
                        !0
                    }
                    for (h = 1,
                    s = new Array(d - 1); h < d; h++)
                        s[h - 1] = arguments[h];
                    l.fn.apply(l.context, s)
                } else
                    for (var c, u = l.length, h = 0; h < u; h++)
                        switch (l[h].once && this.removeListener(e, l[h].fn, void 0, !0),
                        d) {
                        case 1:
                            l[h].fn.call(l[h].context);
                            break;
                        case 2:
                            l[h].fn.call(l[h].context, t);
                            break;
                        case 3:
                            l[h].fn.call(l[h].context, t, n);
                            break;
                        case 4:
                            l[h].fn.call(l[h].context, t, n, i);
                            break;
                        default:
                            if (!s)
                                for (c = 1,
                                s = new Array(d - 1); c < d; c++)
                                    s[c - 1] = arguments[c];
                            l[h].fn.apply(l[h].context, s)
                        }
                return !0
            }
            ,
            t.prototype.on = function(e, t, n) {
                return r(this, e, t, n, !1)
            }
            ,
            t.prototype.once = function(e, t, n) {
                return r(this, e, t, n, !0)
            }
            ,
            t.prototype.removeListener = function(e, t, n, i) {
                e = p ? p + e : e;
                if (this._events[e])
                    if (t) {
                        var r = this._events[e];
                        if (r.fn)
                            r.fn !== t || i && !r.once || n && r.context !== n || l(this, e);
                        else {
                            for (var o = 0, a = [], s = r.length; o < s; o++)
                                (r[o].fn !== t || i && !r[o].once || n && r[o].context !== n) && a.push(r[o]);
                            a.length ? this._events[e] = 1 === a.length ? a[0] : a : l(this, e)
                        }
                    } else
                        l(this, e);
                return this
            }
            ,
            t.prototype.removeAllListeners = function(e) {
                return e ? (e = p ? p + e : e,
                this._events[e] && l(this, e)) : (this._events = new n,
                this._eventsCount = 0),
                this
            }
            ,
            t.prototype.off = t.prototype.removeListener,
            t.prototype.addListener = t.prototype.on,
            t.prefixed = p,
            e.exports = t.EventEmitter = t
        }
        ,
        729: (e,t,n)=>{
            n = [n, t, n(548), n(498)],
            t = function(e, t, n, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.AdType = t.AdEvents = t.ProviderTypes = t.GameDistributionBannerSize = t.GameDistributionAlignment = t.AdWrapper = void 0,
                Object.defineProperty(t, "AdWrapper", {
                    enumerable: !0,
                    get: function() {
                        return n.AdWrapper
                    }
                }),
                Object.defineProperty(t, "GameDistributionAlignment", {
                    enumerable: !0,
                    get: function() {
                        return i.GameDistributionAlignment
                    }
                }),
                Object.defineProperty(t, "GameDistributionBannerSize", {
                    enumerable: !0,
                    get: function() {
                        return i.GameDistributionBannerSize
                    }
                }),
                Object.defineProperty(t, "ProviderTypes", {
                    enumerable: !0,
                    get: function() {
                        return i.ProviderTypes
                    }
                }),
                Object.defineProperty(t, "AdEvents", {
                    enumerable: !0,
                    get: function() {
                        return i.AdEvents
                    }
                }),
                Object.defineProperty(t, "AdType", {
                    enumerable: !0,
                    get: function() {
                        return i.AdType
                    }
                })
            }
            .apply(t, n);
            void 0 !== t && (e.exports = t)
        }
        ,
        470: (e,t,n)=>{
            n = [n, t, n(12)],
            t = function(e, t, n) {
                "use strict";
                function i() {
                    this.adsEnabled = !1
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.JioAdProvider = void 0,
                i.prototype.setManager = function(e) {
                    this.adManager = e,
                    this.jioGamesSP = null == (e = window._azerionJGSDK) ? void 0 : e.JioGamesSP
                }
                ,
                i.prototype.showAd = function(e) {
                    e === n.AdType.interstitial ? this.jioGamesSP.showAdMidRoll() : e === n.AdType.rewarded && this.jioGamesSP.showAdRewarded(),
                    this.resumeGameplay()
                }
                ,
                i.prototype.resumeGameplay = function() {
                    this.adManager.emit(n.AdEvents.CONTENT_RESUMED)
                }
                ,
                i.prototype.preloadAd = function(e) {
                    void 0 === e && (e = n.AdType.interstitial),
                    console.log("Calling cache Jio Ad"),
                    e === n.AdType.interstitial && this.jioGamesSP.cacheAdMidRoll(),
                    e === n.AdType.rewarded && this.jioGamesSP.cacheAdRewarded()
                }
                ,
                i.prototype.destroyAd = function() {}
                ,
                i.prototype.hideAd = function() {}
                ,
                i.prototype.adAvailable = function(e) {
                    return e === n.AdType.interstitial ? this.jioGamesSP.isMidrollAdAvailable() : e === n.AdType.rewarded && this.jioGamesSP.isRewardedAdAvailable()
                }
                ,
                t.JioAdProvider = i
            }
            .apply(t, n);
            void 0 !== t && (e.exports = t)
        }
        ,
        766: (e,t,n)=>{
            n = [n, t, n(470)],
            t = function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.JioAdProvider = void 0,
                Object.defineProperty(t, "JioAdProvider", {
                    enumerable: !0,
                    get: function() {
                        return n.JioAdProvider
                    }
                })
            }
            .apply(t, n);
            void 0 !== t && (e.exports = t)
        }
        ,
        110: (e,t,n)=>{
            n = [n, t, n(12)],
            t = function(e, t, n) {
                "use strict";
                function i() {
                    this.adsEnabled = !1
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.AdFreeUntrackedProvider = void 0,
                i.prototype.setManager = function(e) {
                    this.adManager = e
                }
                ,
                i.prototype.showAd = function(e) {
                    void 0 === e && (e = n.AdType.interstitial),
                    this.resumeGameplay()
                }
                ,
                i.prototype.resumeGameplay = function() {
                    this.adManager.emit(n.AdEvents.CONTENT_RESUMED)
                }
                ,
                i.prototype.preloadAd = function(e) {
                    void 0 === e && n.AdType.interstitial
                }
                ,
                i.prototype.destroyAd = function() {}
                ,
                i.prototype.hideAd = function() {}
                ,
                i.prototype.adAvailable = function(e) {
                    return !0
                }
                ,
                t.AdFreeUntrackedProvider = i
            }
            .apply(t, n);
            void 0 !== t && (e.exports = t)
        }
        ,
        592: (e,t,n)=>{
            n = [n, t, n(260)],
            t = function(e, t, i) {
                "use strict";
                function n(e) {
                    var t = this;
                    this.scaleFactor = 1,
                    this.offsetX = 0,
                    this.offsetY = 0,
                    this.dummyBannerConfigList = [{
                        sizeType: i.DummyBannerSize.LargeRectangle,
                        width: 336,
                        height: 280
                    }, {
                        sizeType: i.DummyBannerSize.MediumRectangle,
                        width: 300,
                        height: 250
                    }, {
                        sizeType: i.DummyBannerSize.Billboard,
                        width: 970,
                        height: 250
                    }, {
                        sizeType: i.DummyBannerSize.Leaderboard,
                        width: 728,
                        height: 90
                    }, {
                        sizeType: i.DummyBannerSize.Skyscraper,
                        width: 120,
                        height: 600
                    }, {
                        sizeType: i.DummyBannerSize.WideSkyscraper,
                        width: 160,
                        height: 600
                    }],
                    this.element = document.createElement("div"),
                    this.element.style.position = "absolute",
                    this.element.style.top = "0px",
                    this.element.style.left = "0px",
                    this.element.id = "banner-".concat(Date.now()).concat(1e7 * Math.random() | 0),
                    document.body.appendChild(this.element),
                    this.setSize(e),
                    this.resizeListener = function() {
                        return t.resize()
                    }
                    ,
                    window.addEventListener("resize", this.resizeListener),
                    this.loadBanner().catch(function() {
                        return console.log("Could not create Dummy Banner")
                    })
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.DummyBanner = void 0,
                n.prototype.getBoundingClientRect = function() {
                    return {
                        left: 0,
                        top: 0,
                        width: window.innerWidth,
                        height: window.innerHeight
                    }
                }
                ,
                n.prototype.loadBanner = function() {
                    var n = Math.floor(2 * Math.random());
                    return console.log("[Dummy]:Banner Available =>", 0 === n),
                    new Promise(function(e, t) {
                        1 === n ? t("No Dummy banner available") : e()
                    }
                    )
                }
                ,
                n.prototype.destroy = function() {
                    try {
                        document.body.removeChild(this.element),
                        this.resizeListener && (window.removeEventListener("resize", this.resizeListener),
                        this.resizeListener = null),
                        delete this.element,
                        delete this.parent,
                        delete this.alignment
                    } catch (e) {
                        console.log("Could not destroy Dummy Banner")
                    }
                }
                ,
                n.prototype.getUpdatedPosition = function() {
                    var e = this.getBoundingClientRect()
                      , t = 0
                      , n = 0;
                    switch (this.alignment) {
                    case i.DummyAlignment.TopLeft:
                        t = e.left,
                        n = e.top;
                        break;
                    case i.DummyAlignment.TopCenter:
                        t = e.left + e.width / 2 - this.width * this.scaleFactor / 2,
                        n = e.top;
                        break;
                    case i.DummyAlignment.TopRight:
                        t = e.left + e.width - this.width * this.scaleFactor,
                        n = e.top;
                        break;
                    case i.DummyAlignment.CenterLeft:
                        t = e.left,
                        n = e.top + e.height / 2 - this.height * this.scaleFactor / 2;
                        break;
                    case i.DummyAlignment.Center:
                        t = e.left + e.width / 2 - this.width * this.scaleFactor / 2,
                        n = e.top + e.height / 2 - this.height * this.scaleFactor / 2;
                        break;
                    case i.DummyAlignment.CenterRight:
                        t = e.left + e.width - this.width * this.scaleFactor,
                        n = e.top + e.height / 2 - this.height * this.scaleFactor / 2;
                        break;
                    case i.DummyAlignment.BottomLeft:
                        t = e.left,
                        n = e.top + e.height - this.height * this.scaleFactor;
                        break;
                    case i.DummyAlignment.BottomCenter:
                        t = e.left + e.width / 2 - this.width * this.scaleFactor / 2,
                        n = e.top + e.height - this.height * this.scaleFactor;
                        break;
                    case i.DummyAlignment.BottomRight:
                        t = e.left + e.width - this.width * this.scaleFactor,
                        n = e.top + e.height - this.height * this.scaleFactor
                    }
                    return {
                        x: t,
                        y: n
                    }
                }
                ,
                n.prototype.alignIn = function(e) {
                    this.alignment = e;
                    e = this.getUpdatedPosition();
                    this.element.style.left = "".concat(e.x + this.offsetX, "px"),
                    this.element.style.top = "".concat(e.y + this.offsetY, "px")
                }
                ,
                n.prototype.resize = function() {
                    this.alignment && this.element && this.alignIn(this.alignment)
                }
                ,
                n.prototype.setSize = function(t) {
                    var e = this.dummyBannerConfigList.filter(function(e) {
                        return e.sizeType === t
                    });
                    e && 0 < e.length && (e = e[0],
                    this.width = e.width,
                    this.height = e.height,
                    this.element.style.width = "".concat(this.width, "px"),
                    this.element.style.height = "".concat(this.height, "px"))
                }
                ,
                t.DummyBanner = n
            }
            .apply(t, n);
            void 0 !== t && (e.exports = t)
        }
        ,
        670: (e,t,n)=>{
            n = [n, t, n(12), n(592)],
            t = function(e, t, i, n) {
                "use strict";
                function r() {
                    this.adsEnabled = !1
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.DummyProvider = void 0,
                r.prototype.setManager = function(e) {
                    this.adManager = e,
                    this.adsEnabled = !0
                }
                ,
                r.prototype.showAd = function(e) {
                    var t = this
                      , n = (void 0 === e && (e = i.AdType.interstitial),
                    console.log("[Dummy]: Ad type requested = ", e === i.AdType.interstitial ? "interstitial" : "rewarded"),
                    this.adManager.emit(i.AdEvents.CONTENT_PAUSED),
                    Math.floor(2 * Math.random()));
                    console.log("[Dummy]:Ad Available =>", 0 === n),
                    1 === n ? (console.log("[Dummy]:AD ERROR / UNAVAILABLE"),
                    i.AdType.rewarded,
                    setTimeout(function() {
                        console.log("[Dummy]: Resuming game"),
                        t.resumeGameplay()
                    }, 800)) : (e === i.AdType.rewarded && setTimeout(function() {
                        console.log("[Dummy]: Reward Claimed for rewarded ad"),
                        t.adManager.emit(i.AdEvents.AD_REWARDED)
                    }, 400),
                    setTimeout(function() {
                        console.log("[Dummy]: Finished watching ad"),
                        console.log("[Dummy]: Resuming game"),
                        t.resumeGameplay()
                    }, 800))
                }
                ,
                r.prototype.resumeGameplay = function() {
                    this.adManager.emit(i.AdEvents.CONTENT_RESUMED)
                }
                ,
                r.prototype.preloadAd = function(e) {
                    void 0 === e && i.AdType.interstitial
                }
                ,
                r.prototype.destroyAd = function() {}
                ,
                r.prototype.hideAd = function() {}
                ,
                r.prototype.adAvailable = function(e) {
                    return !0
                }
                ,
                r.prototype.getBanner = function(e) {
                    return this.adsEnabled ? new n.DummyBanner(e) : null
                }
                ,
                t.DummyProvider = r
            }
            .apply(t, n);
            void 0 !== t && (e.exports = t)
        }
        ,
        474: (e,t,n)=>{
            n = [n, t, n(12), n(444)],
            t = function(e, t, r, n) {
                "use strict";
                var i, o;
                function a(e) {
                    var t, n, i = this;
                    if (this.adsEnabled = !1,
                    this.hasRewarded = !1,
                    this.adShowing = !1,
                    !e)
                        throw new Error("Valid game id is not provided for GD Ad provider");
                    window.GD_OPTIONS = {
                        gameId: e,
                        advertisementSettings: {
                            autoplay: !1
                        },
                        onEvent: function(e) {
                            switch (e.name) {
                            case "SDK_GAME_PAUSE":
                                i.adManager.emit(r.AdEvents.CONTENT_PAUSED);
                                break;
                            case "SDK_GAME_START":
                            case "SDK_ERROR":
                            case "AD_SDK_CANCELED":
                                i.adManager.emit(r.AdEvents.CONTENT_RESUMED);
                                break;
                            case "SDK_READY":
                                i.sdkLoaded();
                                break;
                            case "SDK_REWARDED_WATCH_COMPLETE":
                                i.adManager.emit(r.AdEvents.AD_REWARDED),
                                i.hasRewarded = !1;
                                break;
                            case "AD_ERROR":
                                console.log("GD SDK: ad error")
                            }
                        }
                    },
                    e = "gamedistribution-jssdk",
                    n = (t = document).getElementsByTagName("script")[0],
                    t.getElementById(e) || ((t = t.createElement("script")).id = e,
                    t.src = "./gamedistribution.main.min.js",
                    n.parentNode && n.parentNode.insertBefore(t, n))
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.GameDistribution = t.GameDistributionAdType = void 0,
                (o = i = t.GameDistributionAdType || (t.GameDistributionAdType = {})).interstitial = "interstitial",
                o.rewarded = "rewarded",
                o.display = "display",
                a.prototype.setManager = function(e) {
                    this.adManager = e,
                    this.adManager.emit(r.AdEvents.AD_PROVIDER_LOADED)
                }
                ,
                a.prototype.sdkLoaded = function() {
                    this.adsEnabled = !0
                }
                ,
                a.prototype.showAd = function(t) {
                    var n = this;
                    this.adsEnabled ? void 0 === window.gdsdk || window.gdsdk && void 0 === window.gdsdk.showAd ? (this.adsEnabled = !1,
                    this.adManager.emit(r.AdEvents.CONTENT_RESUMED)) : window.gdsdk.showAd(t === r.AdType.rewarded ? i.rewarded : i.interstitial).catch(function(e) {
                        t === r.AdType.rewarded && n.hasRewarded && (n.hasRewarded = !1),
                        e && console.log("Ad error", e),
                        n.adManager.emit(r.AdEvents.AD_RENDER_ERROR),
                        n.adManager.emit(r.AdEvents.CONTENT_RESUMED)
                    }) : this.adManager.emit(r.AdEvents.CONTENT_RESUMED)
                }
                ,
                a.prototype.preloadAd = function(e) {
                    var t = this;
                    !this.hasRewarded && this.adsEnabled && e === r.AdType.rewarded && (console.log("preloading ad"),
                    window.gdsdk.preloadAd(i.rewarded).then(function() {
                        t.hasRewarded = !0,
                        t.adManager.emit(r.AdEvents.AD_LOADED, e)
                    }))
                }
                ,
                a.prototype.adAvailable = function(e) {
                    return e !== r.AdType.rewarded || this.hasRewarded
                }
                ,
                a.prototype.destroyAd = function() {}
                ,
                a.prototype.hideAd = function() {}
                ,
                a.prototype.getBanner = function(e) {
                    return this.adsEnabled ? ((e = new n.GameDistributionBanner(e)).loadBanner().catch(function() {
                        return console.log("Could not create GD Banner")
                    }),
                    e) : null
                }
                ,
                t.GameDistribution = a
            }
            .apply(t, n);
            void 0 !== t && (e.exports = t)
        }
        ,
        444: (e,t,n)=>{
            n = [n, t, n(474), n(869)],
            t = function(e, t, n, i) {
                "use strict";
                function r(e) {
                    this.scaleFactor = 1,
                    this.offsetX = 0,
                    this.offsetY = 0,
                    this.element = document.createElement("div"),
                    this.element.style.position = "absolute",
                    this.element.style.top = "0px",
                    this.element.style.left = "0px",
                    this.element.id = "banner-".concat(Date.now()).concat(1e7 * Math.random() | 0),
                    this.setSize(e),
                    document.body.appendChild(this.element)
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.GameDistributionBanner = void 0,
                r.prototype.getBoundingClientRect = function() {
                    return {
                        left: 0,
                        top: 0,
                        width: window.innerWidth,
                        height: window.innerHeight
                    }
                }
                ,
                r.prototype.loadBanner = function() {
                    return void 0 === window.gdsdk ? Promise.reject("GD Sdk not available, probably due to adblocker") : window.gdsdk.showAd(n.GameDistributionAdType.display, {
                        containerId: this.element.id
                    })
                }
                ,
                r.prototype.destroy = function() {
                    document.body.removeChild(this.element),
                    this.resizeListener && window.removeEventListener("resize", this.resizeListener),
                    delete this.element,
                    delete this.parent,
                    delete this.alignment
                }
                ,
                r.prototype.alignIn = function(e) {
                    var t = this;
                    this.parent ? console.warn("Banner already aligned, ignoring...") : (this.parent = this.getBoundingClientRect(),
                    this.alignment = e,
                    this.resizeListener = function() {
                        return t.resize()
                    }
                    ,
                    window.addEventListener("resize", this.resizeListener),
                    this.resize())
                }
                ,
                r.prototype.setOffset = function(e, t) {
                    void 0 === t && (t = 0),
                    this.offsetX = e = void 0 === e ? 0 : e,
                    this.offsetY = t,
                    this.resize()
                }
                ,
                r.prototype.resize = function() {
                    if (this.parent) {
                        var e = this.parent;
                        switch (this.alignment) {
                        case i.GameDistributionAlignment.TopLeft:
                            this.position(e.left, e.top);
                            break;
                        case i.GameDistributionAlignment.TopCenter:
                            this.position(e.left + e.width / 2 - this.width * this.scaleFactor / 2, e.top);
                            break;
                        case i.GameDistributionAlignment.TopRight:
                            this.position(e.left + e.width - this.width * this.scaleFactor, e.top);
                            break;
                        case i.GameDistributionAlignment.CenterLeft:
                            this.position(e.left, e.top + e.height / 2 - this.height * this.scaleFactor / 2);
                            break;
                        case i.GameDistributionAlignment.Center:
                            this.position(e.left + e.width / 2 - this.width * this.scaleFactor / 2, e.top + e.height / 2 - this.height * this.scaleFactor / 2);
                            break;
                        case i.GameDistributionAlignment.CenterRight:
                            this.position(e.left + e.width - this.width * this.scaleFactor, e.top + e.height / 2 - this.height * this.scaleFactor / 2);
                            break;
                        case i.GameDistributionAlignment.BottomLeft:
                            this.position(e.left, e.top + e.height - this.height * this.scaleFactor);
                            break;
                        case i.GameDistributionAlignment.BottomCenter:
                            this.position(e.left + e.width / 2 - this.width * this.scaleFactor / 2, e.top + e.height - this.height * this.scaleFactor);
                            break;
                        case i.GameDistributionAlignment.BottomRight:
                            this.position(e.left + e.width - this.width * this.scaleFactor, e.top + e.height - this.height * this.scaleFactor)
                        }
                    }
                }
                ,
                r.prototype.setSize = function(e) {
                    var t, n;
                    switch (e) {
                    default:
                    case i.GameDistributionBannerSize.LargeRectangle:
                        t = 336,
                        n = 280;
                        break;
                    case i.GameDistributionBannerSize.MediumRectangle:
                        t = 300,
                        n = 250;
                        break;
                    case i.GameDistributionBannerSize.Billboard:
                        t = 970,
                        n = 250;
                        break;
                    case i.GameDistributionBannerSize.Leaderboard:
                        t = 728,
                        n = 90;
                        break;
                    case i.GameDistributionBannerSize.Skyscraper:
                        t = 120,
                        n = 600;
                        break;
                    case i.GameDistributionBannerSize.WideSkyscraper:
                        t = 160,
                        n = 600
                    }
                    this.width = t,
                    this.height = n,
                    this.element.style.width = "".concat(t, "px"),
                    this.element.style.height = "".concat(n, "px")
                }
                ,
                r.prototype.position = function(e, t) {
                    this.element.style.left = "".concat(e + this.offsetX, "px"),
                    this.element.style.top = "".concat(t + this.offsetY, "px")
                }
                ,
                r.prototype.scale = function(e) {
                    this.element.style.transformOrigin = "left top",
                    this.scaleFactor = e,
                    this.element.style.transform = "scale(".concat(e, ")")
                }
                ,
                t.GameDistributionBanner = r
            }
            .apply(t, n);
            void 0 !== t && (e.exports = t)
        }
        ,
        654: (e,t,n)=>{
            n = [n, t, n(12)],
            t = function(e, t, i) {
                "use strict";
                function n(e) {
                    var t, n, i, r = this;
                    this.adsEnabled = !1,
                    t = "yandex-jssdk",
                    i = (n = document).getElementsByTagName("script")[0],
                    n.getElementById(t) || ((n = n.createElement("script")).addEventListener("load", function() {
                        r.initialize()
                    }),
                    n.id = t,
                    n.src = "//yandex.ru/games/sdk/v2",
                    i.parentNode.insertBefore(n, i))
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.YandexAdProvider = void 0,
                n.prototype.setManager = function(e) {
                    this.adManager = e
                }
                ,
                n.prototype.showAd = function(e) {
                    var t, n = this;
                    void 0 === e && (e = i.AdType.interstitial),
                    this.adsEnabled && window.hasOwnProperty("_YaSDK") ? e === i.AdType.interstitial && null != (t = null == (t = window._YaSDK) ? void 0 : t.adv) && t.adOpened || (e === i.AdType.rewarded ? null != (t = null == (e = null == (t = window._YaSDK) ? void 0 : t.adv) ? void 0 : e.showRewardedVideo) && t.call(e, {
                        callbacks: {
                            onOpen: function() {
                                console.log("Video ad open."),
                                n.adManager.emit(i.AdEvents.CONTENT_PAUSED)
                            },
                            onRewarded: function() {
                                console.log("Rewarded!"),
                                n.adManager.emit(i.AdEvents.AD_REWARDED)
                            },
                            onClose: function() {
                                console.log("Video ad closed."),
                                n.resumeGameplay()
                            },
                            onError: function(e) {
                                console.log("Error while open video ad:", e),
                                n.resumeGameplay()
                            }
                        }
                    }) : null != (t = null == (e = null == (t = window._YaSDK) ? void 0 : t.adv) ? void 0 : e.showFullscreenAdv) && t.call(e, {
                        callbacks: {
                            onOpen: function() {
                                console.log("Video ad open."),
                                n.adManager.emit(i.AdEvents.CONTENT_PAUSED)
                            },
                            onClose: function() {
                                n.resumeGameplay()
                            },
                            onError: function() {
                                n.resumeGameplay()
                            }
                        }
                    })) : this.resumeGameplay()
                }
                ,
                n.prototype.initialize = function() {
                    var t = this;
                    window.YaGames.init().then(function(e) {
                        window._YaSDK = e,
                        t.adsEnabled = !0
                    })
                }
                ,
                n.prototype.resumeGameplay = function() {
                    this.adManager.emit(i.AdEvents.CONTENT_RESUMED)
                }
                ,
                n.prototype.preloadAd = function(e) {
                    void 0 === e && (e = i.AdType.interstitial),
                    this.adManager.emit(i.AdEvents.AD_LOADED, e)
                }
                ,
                n.prototype.destroyAd = function() {}
                ,
                n.prototype.hideAd = function() {}
                ,
                n.prototype.adAvailable = function(e) {
                    return !0
                }
                ,
                t.YandexAdProvider = n
            }
            .apply(t, n);
            void 0 !== t && (e.exports = t)
        }
        ,
        563: (e,t,n)=>{
            n = [n, t, n(110), n(670), n(474), n(444), n(654)],
            t = function(e, t, n, i, r, o, a) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.YandexAdProvider = t.GameDistributionBanner = t.GameDistribution = t.DummyProvider = t.AdFreeUntrackedProvider = void 0,
                Object.defineProperty(t, "AdFreeUntrackedProvider", {
                    enumerable: !0,
                    get: function() {
                        return n.AdFreeUntrackedProvider
                    }
                }),
                Object.defineProperty(t, "DummyProvider", {
                    enumerable: !0,
                    get: function() {
                        return i.DummyProvider
                    }
                }),
                Object.defineProperty(t, "GameDistribution", {
                    enumerable: !0,
                    get: function() {
                        return r.GameDistribution
                    }
                }),
                Object.defineProperty(t, "GameDistributionBanner", {
                    enumerable: !0,
                    get: function() {
                        return o.GameDistributionBanner
                    }
                }),
                Object.defineProperty(t, "YandexAdProvider", {
                    enumerable: !0,
                    get: function() {
                        return a.YandexAdProvider
                    }
                })
            }
            .apply(t, n);
            void 0 !== t && (e.exports = t)
        }
        ,
        260: (e,t,n)=>{
            n = function(e, t) {
                "use strict";
                var n;
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.DummyAlignment = t.DummyBannerSize = void 0,
                (n = t.DummyBannerSize || (t.DummyBannerSize = {}))[n.LargeRectangle = 0] = "LargeRectangle",
                n[n.MediumRectangle = 1] = "MediumRectangle",
                n[n.Billboard = 2] = "Billboard",
                n[n.Leaderboard = 3] = "Leaderboard",
                n[n.Skyscraper = 4] = "Skyscraper",
                n[n.WideSkyscraper = 5] = "WideSkyscraper",
                (n = t.DummyAlignment || (t.DummyAlignment = {}))[n.TopLeft = 0] = "TopLeft",
                n[n.TopCenter = 1] = "TopCenter",
                n[n.TopRight = 2] = "TopRight",
                n[n.CenterLeft = 3] = "CenterLeft",
                n[n.Center = 4] = "Center",
                n[n.CenterRight = 5] = "CenterRight",
                n[n.BottomLeft = 6] = "BottomLeft",
                n[n.BottomCenter = 7] = "BottomCenter",
                n[n.BottomRight = 8] = "BottomRight"
            }
            .apply(t, [n, t]);
            void 0 !== n && (e.exports = n)
        }
        ,
        869: (e,t,n)=>{
            n = function(e, t) {
                "use strict";
                var n;
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.GameDistributionAlignment = t.GameDistributionBannerSize = void 0,
                (n = t.GameDistributionBannerSize || (t.GameDistributionBannerSize = {}))[n.LargeRectangle = 0] = "LargeRectangle",
                n[n.MediumRectangle = 1] = "MediumRectangle",
                n[n.Billboard = 2] = "Billboard",
                n[n.Leaderboard = 3] = "Leaderboard",
                n[n.Skyscraper = 4] = "Skyscraper",
                n[n.WideSkyscraper = 5] = "WideSkyscraper",
                (n = t.GameDistributionAlignment || (t.GameDistributionAlignment = {}))[n.TopLeft = 0] = "TopLeft",
                n[n.TopCenter = 1] = "TopCenter",
                n[n.TopRight = 2] = "TopRight",
                n[n.CenterLeft = 3] = "CenterLeft",
                n[n.Center = 4] = "Center",
                n[n.CenterRight = 5] = "CenterRight",
                n[n.BottomLeft = 6] = "BottomLeft",
                n[n.BottomCenter = 7] = "BottomCenter",
                n[n.BottomRight = 8] = "BottomRight"
            }
            .apply(t, [n, t]);
            void 0 !== n && (e.exports = n)
        }
        ,
        498: (e,t,n)=>{
            n = [n, t, n(12), n(869)],
            t = function(e, t, n, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.GameDistributionAlignment = t.GameDistributionBannerSize = t.ProviderTypes = t.AdType = t.AdEvents = void 0,
                Object.defineProperty(t, "AdEvents", {
                    enumerable: !0,
                    get: function() {
                        return n.AdEvents
                    }
                }),
                Object.defineProperty(t, "AdType", {
                    enumerable: !0,
                    get: function() {
                        return n.AdType
                    }
                }),
                Object.defineProperty(t, "ProviderTypes", {
                    enumerable: !0,
                    get: function() {
                        return n.ProviderTypes
                    }
                }),
                Object.defineProperty(t, "GameDistributionBannerSize", {
                    enumerable: !0,
                    get: function() {
                        return i.GameDistributionBannerSize
                    }
                }),
                Object.defineProperty(t, "GameDistributionAlignment", {
                    enumerable: !0,
                    get: function() {
                        return i.GameDistributionAlignment
                    }
                })
            }
            .apply(t, n);
            void 0 !== t && (e.exports = t)
        }
        ,
        12: (e,t,n)=>{
            n = function(e, t) {
                "use strict";
                var n;
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.ProviderTypes = t.AdType = t.AdEvents = void 0,
                (n = t.AdEvents || (t.AdEvents = {})).CONTENT_PAUSED = "onContentPaused",
                n.CONTENT_RESUMED = "onContentResumed",
                n.AD_PROGRESSION = "onAdProgression",
                n.AD_DISABLED = "onAdsDisabled",
                n.AD_CLICKED = "onAdClicked",
                n.AD_REWARDED = "onAdRewardGranted",
                n.BANNER_SHOWN = "onBannerShown",
                n.BANNER_HIDDEN = "onBannerHidden",
                n.AD_LOADED = "onAdLoaded",
                n.AD_PROVIDER_LOADED = "onAdProviderLoaded",
                n.AD_RENDER_ERROR = "onAdRenderError",
                (n = t.AdType || (t.AdType = {}))[n.interstitial = 0] = "interstitial",
                n[n.rewarded = 1] = "rewarded",
                n[n.banner = 2] = "banner",
                (n = t.ProviderTypes || (t.ProviderTypes = {})).Yandex = "yx",
                n.Dummy = "dm",
                n.AdFree = "af",
                n.GD = "gd",
                n.GDBanner = "gdb",
                n.Jio = "jio"
            }
            .apply(t, [n, t]);
            void 0 !== n && (e.exports = n)
        }
        ,
        548: function(e, t, n) {
            var i, l = this && this.__extends || (i = function(e, t) {
                return (i = Object.setPrototypeOf || ({
                    __proto__: []
                }instanceof Array ? function(e, t) {
                    e.__proto__ = t
                }
                : function(e, t) {
                    for (var n in t)
                        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                }
                ))(e, t)
            }
            ,
            function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
                function n() {
                    this.constructor = e
                }
                i(e, t),
                e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
                new n)
            }
            ), d = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            , n = [n, t, n(34), n(12), n(563), n(766)], t = function(e, t, n, i, r, o) {
                "use strict";
                var a;
                function s(e, t) {
                    var n = a.call(this) || this;
                    switch (n.bannerActive = !1,
                    n.provider = null,
                    e) {
                    case i.ProviderTypes.AdFree:
                        n.provider = new r.AdFreeUntrackedProvider;
                        break;
                    case i.ProviderTypes.Dummy:
                        n.provider = new r.DummyProvider;
                        break;
                    case i.ProviderTypes.Yandex:
                        n.provider = new r.YandexAdProvider;
                        break;
                    case i.ProviderTypes.Jio:
                        n.provider = new o.JioAdProvider;
                        break;
                    default:
                    case i.ProviderTypes.GD:
                        n.provider = new r.GameDistribution(t)
                    }
                    return n.provider.setManager(n),
                    n
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                t.AdWrapper = void 0,
                n = d(n),
                a = n.default,
                l(s, a),
                s.prototype.showAd = function(e) {
                    for (var t = [], n = 1; n < arguments.length; n++)
                        t[n - 1] = arguments[n];
                    if (null === this.provider)
                        throw new Error("Can not request an ad without an provider, please attach an ad provider!");
                    t.unshift(e),
                    this.provider.showAd.apply(this.provider, t)
                }
                ,
                s.prototype.getBanner = function() {
                    for (var e = [], t = 0; t < arguments.length; t++)
                        e[t] = arguments[t];
                    if (null === this.provider)
                        throw new Error("Can not load a banner without an provider, please attach an ad provider!");
                    return "function" == typeof this.provider.getBanner ? this.provider.getBanner.apply(this.provider, e) : null
                }
                ,
                s.prototype.preloadAd = function(e) {
                    for (var t = [], n = 1; n < arguments.length; n++)
                        t[n - 1] = arguments[n];
                    if (null === this.provider)
                        throw new Error("Can not preload an ad without an provider, please attach an ad provider!");
                    t.unshift(e),
                    this.provider.preloadAd.apply(this.provider, t)
                }
                ,
                s.prototype.destroyAd = function(e) {
                    for (var t = [], n = 1; n < arguments.length; n++)
                        t[n - 1] = arguments[n];
                    if (null === this.provider)
                        throw new Error("Can not destroy an ad without an provider, please attach an ad provider!");
                    t.unshift(e),
                    this.provider.destroyAd.apply(this.provider, t)
                }
                ,
                s.prototype.hideAd = function(e) {
                    for (var t = [], n = 1; n < arguments.length; n++)
                        t[n - 1] = arguments[n];
                    if (null === this.provider)
                        throw new Error("Can not hide an ad without an provider, please attach an ad provider!");
                    t.unshift(e),
                    this.provider.hideAd.apply(this.provider, t)
                }
                ,
                s.prototype.adsEnabled = function() {
                    if (null === this.provider)
                        throw new Error("Can not hide an ad without an provider, please attach an ad provider!");
                    return this.provider.adsEnabled
                }
                ,
                s.prototype.adAvailable = function(e) {
                    for (var t = [], n = 1; n < arguments.length; n++)
                        t[n - 1] = arguments[n];
                    if (null === this.provider)
                        throw new Error("Can not hide an ad without an provider, please attach an ad provider!");
                    return t.unshift(e),
                    this.provider.adAvailable.apply(this.provider, t)
                }
                ,
                t.AdWrapper = s
            }
            .apply(t, n);
            void 0 !== t && (e.exports = t)
        }
    }
      , r = {}
      , e = function e(t) {
        var n = r[t];
        return (void 0 !== n ? n : (n = r[t] = {
            exports: {}
        },
        i[t].call(n.exports, n, n.exports, e),
        n)).exports
    }(729);
    self.h5ads = e
}
)(),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = "undefined" != typeof globalThis ? globalThis : e || self).h5branding = e.h5branding || {})
}(this, function(o) {
    "use strict";
    var N = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
    function l() {
        throw new Error("Dynamic requires are not currently supported by rollup-plugin-commonjs")
    }
    function e(e, t) {
        return e(t = {
            exports: {}
        }, t.exports),
        t.exports
    }
    e(function(e, I) {
        function l(e) {
            return "function" == typeof e
        }
        function t() {
            var e = setTimeout;
            return function() {
                return e(n, 1)
            }
        }
        function n() {
            for (var e = 0; e < o; e += 2)
                (0,
                S[e])(S[e + 1]),
                S[e] = void 0,
                S[e + 1] = void 0;
            o = 0
        }
        function z() {
            try {
                var e = Function("return this")().require("vertx");
                return void 0 !== (v = e.runOnLoop || e.runOnContext) ? function() {
                    v(n)
                }
                : t()
            } catch (e) {
                return t()
            }
        }
        function d(e, t) {
            var n, i = this, r = new this.constructor(u), o = (void 0 === r[k] && y(r),
            i._state);
            return o ? (n = arguments[o - 1],
            _(function() {
                return m(o, r, n, i._result)
            })) : a(i, r, e, t),
            r
        }
        function c(e) {
            var t;
            return e && "object" == typeof e && e.constructor === this ? e : (p(t = new this(u), e),
            t)
        }
        function u() {}
        function j(e, i, r) {
            _(function(t) {
                var n = !1
                  , e = function(e, t, n, i) {
                    try {
                        e.call(t, n, i)
                    } catch (e) {
                        return e
                    }
                }(r, i, function(e) {
                    n || (n = !0,
                    (i !== e ? p : f)(t, e))
                }, function(e) {
                    n || (n = !0,
                    g(t, e))
                }, t._label);
                !n && e && (n = !0,
                g(t, e))
            }, e)
        }
        function h(e, t, n) {
            var i, r;
            t.constructor === e.constructor && n === d && t.constructor.resolve === c ? (i = e,
            (r = t)._state === B ? f(i, r._result) : r._state === L ? g(i, r._result) : a(r, void 0, function(e) {
                return p(i, e)
            }, function(e) {
                return g(i, e)
            })) : void 0 !== n && l(n) ? j(e, t, n) : f(e, t)
        }
        function p(t, e) {
            if (t === e)
                g(t, new TypeError("You cannot resolve a promise with itself"));
            else if (n = typeof e,
            null === e || "object" != n && "function" != n)
                f(t, e);
            else {
                n = void 0;
                try {
                    n = e.then
                } catch (e) {
                    return void g(t, e)
                }
                h(t, e, n)
            }
            var n
        }
        function G(e) {
            e._onerror && e._onerror(e._result),
            s(e)
        }
        function f(e, t) {
            e._state === C && (e._result = t,
            e._state = B,
            0 !== e._subscribers.length) && _(s, e)
        }
        function g(e, t) {
            e._state === C && (e._state = L,
            e._result = t,
            _(G, e))
        }
        function a(e, t, n, i) {
            var r = e._subscribers
              , o = r.length;
            e._onerror = null,
            r[o] = t,
            r[o + B] = n,
            r[o + L] = i,
            0 === o && e._state && _(s, e)
        }
        function s(e) {
            var t = e._subscribers
              , n = e._state;
            if (0 !== t.length) {
                for (var i, r = void 0, o = e._result, a = 0; a < t.length; a += 3)
                    i = t[a],
                    r = t[a + n],
                    i ? m(n, i, r, o) : r(o);
                e._subscribers.length = 0
            }
        }
        function m(e, t, n, i) {
            var r = l(n)
              , o = void 0
              , a = void 0
              , s = !0;
            if (r) {
                try {
                    o = n(i)
                } catch (e) {
                    s = !1,
                    a = e
                }
                if (t === o)
                    return void g(t, new TypeError("A promises callback cannot return that same promise."))
            } else
                o = i;
            t._state === C && (r && s ? p(t, o) : !1 === s ? g(t, a) : e === B ? f(t, o) : e === L && g(t, o))
        }
        function y(e) {
            e[k] = R++,
            e._state = void 0,
            e._result = void 0,
            e._subscribers = []
        }
        function i(e, t) {
            this._instanceConstructor = e,
            this.promise = new e(u),
            this.promise[k] || y(this.promise),
            w(t) ? (this.length = t.length,
            this._remaining = t.length,
            this._result = new Array(this.length),
            0 !== this.length && (this.length = this.length || 0,
            this._enumerate(t),
            0 !== this._remaining) || f(this.promise, this._result)) : g(this.promise, new Error("Array Methods must be provided an Array"))
        }
        function r(e) {
            if (this[k] = R++,
            this._result = this._state = void 0,
            this._subscribers = [],
            u !== e) {
                if ("function" != typeof e)
                    throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
                if (!(this instanceof r))
                    throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
                var t = this;
                try {
                    e(function(e) {
                        p(t, e)
                    }, function(e) {
                        g(t, e)
                    })
                } catch (e) {
                    g(t, e)
                }
            }
        }
        var w, o, v, b, _, A, x, D, S, T, E, O, P, k, C, B, L, R, F, M;
        e.exports = (w = Array.isArray || function(e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        }
        ,
        b = v = void (o = 0),
        _ = function(e, t) {
            S[o] = e,
            S[o + 1] = t,
            2 === (o += 2) && (b ? b(n) : P())
        }
        ,
        e = "undefined" != typeof window ? window : void 0,
        A = (A = e || {}).MutationObserver || A.WebKitMutationObserver,
        x = "undefined" == typeof self && "undefined" != typeof process && "[object process]" === {}.toString.call(process),
        D = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel,
        S = new Array(1e3),
        P = void 0,
        P = x ? function() {
            return process.nextTick(n)
        }
        : A ? (E = 0,
        x = new A(n),
        O = document.createTextNode(""),
        x.observe(O, {
            characterData: !0
        }),
        function() {
            O.data = E = ++E % 2
        }
        ) : D ? ((T = new MessageChannel).port1.onmessage = n,
        function() {
            return T.port2.postMessage(0)
        }
        ) : (void 0 === e ? z : t)(),
        k = Math.random().toString(36).substring(2),
        C = void 0,
        B = 1,
        L = 2,
        R = 0,
        i.prototype._enumerate = function(e) {
            for (var t = 0; this._state === C && t < e.length; t++)
                this._eachEntry(e[t], t)
        }
        ,
        i.prototype._eachEntry = function(t, e) {
            var n = this._instanceConstructor
              , i = n.resolve;
            if (i === c) {
                var r, o = void 0, a = void 0, s = !1;
                try {
                    o = t.then
                } catch (e) {
                    s = !0,
                    a = e
                }
                o === d && t._state !== C ? this._settledAt(t._state, e, t._result) : "function" != typeof o ? (this._remaining--,
                this._result[e] = t) : n === M ? (r = new n(u),
                s ? g(r, a) : h(r, t, o),
                this._willSettleAt(r, e)) : this._willSettleAt(new n(function(e) {
                    return e(t)
                }
                ), e)
            } else
                this._willSettleAt(i(t), e)
        }
        ,
        i.prototype._settledAt = function(e, t, n) {
            var i = this.promise;
            i._state === C && (this._remaining--,
            e === L ? g(i, n) : this._result[t] = n),
            0 === this._remaining && f(i, this._result)
        }
        ,
        i.prototype._willSettleAt = function(e, t) {
            var n = this;
            a(e, void 0, function(e) {
                return n._settledAt(B, t, e)
            }, function(e) {
                return n._settledAt(L, t, e)
            })
        }
        ,
        F = i,
        r.prototype.catch = function(e) {
            return this.then(null, e)
        }
        ,
        r.prototype.finally = function(t) {
            var n = this.constructor;
            return l(t) ? this.then(function(e) {
                return n.resolve(t()).then(function() {
                    return e
                })
            }, function(e) {
                return n.resolve(t()).then(function() {
                    throw e
                })
            }) : this.then(t, t)
        }
        ,
        (M = r).prototype.then = d,
        M.all = function(e) {
            return new F(this,e).promise
        }
        ,
        M.race = function(r) {
            var o = this;
            return w(r) ? new o(function(e, t) {
                for (var n = r.length, i = 0; i < n; i++)
                    o.resolve(r[i]).then(e, t)
            }
            ) : new o(function(e, t) {
                return t(new TypeError("You must pass an array to race."))
            }
            )
        }
        ,
        M.resolve = c,
        M.reject = function(e) {
            var t = new this(u);
            return g(t, e),
            t
        }
        ,
        M._setScheduler = function(e) {
            b = e
        }
        ,
        M._setAsap = function(e) {
            _ = e
        }
        ,
        M._asap = _,
        M.polyfill = function() {
            var e = void 0;
            if (void 0 !== N)
                e = N;
            else if ("undefined" != typeof self)
                e = self;
            else
                try {
                    e = Function("return this")()
                } catch (e) {
                    throw new Error("polyfill failed because global object is unavailable in this environment")
                }
            var t = e.Promise;
            if (t) {
                var n = null;
                try {
                    n = Object.prototype.toString.call(t.resolve())
                } catch (e) {}
                if ("[object Promise]" === n && !t.cast)
                    return
            }
            e.Promise = M
        }
        ,
        M.Promise = M)
    }).polyfill(),
    t.has = function(e) {
        var t, n, i = e.lastIndexOf(".");
        return !(i <= 0 || i >= e.length - 1 || (t = e.lastIndexOf(".", i - 1)) <= 0 || i - 1 <= t || !(n = r[e.slice(i + 1)])) && 0 <= n.indexOf(" " + e.slice(t + 1, i) + " ")
    }
    ,
    t.is = function(e) {
        var t, n = e.lastIndexOf(".");
        return !(n <= 0 || n >= e.length - 1 || 0 <= e.lastIndexOf(".", n - 1) || !(t = r[e.slice(n + 1)])) && 0 <= t.indexOf(" " + e.slice(0, n) + " ")
    }
    ,
    t.get = function(e) {
        var t, n, i = e.lastIndexOf(".");
        return i <= 0 || i >= e.length - 1 || (t = e.lastIndexOf(".", i - 1)) <= 0 || i - 1 <= t || !(n = r[e.slice(i + 1)]) || n.indexOf(" " + e.slice(t + 1, i) + " ") < 0 ? null : e.slice(t + 1)
    }
    ;
    var r, n = t;
    function t() {}
    a.setList = function(e) {
        r = e || {}
    }
    ,
    a.getDomain = function(e) {
        var t;
        return r ? (t = e.match(/\./g)) && t.length < 2 ? e : (t = this.getTld(e)) ? (t = e.length - t.length - 1,
        t = e.lastIndexOf(".", t - 1) + 1,
        e.substring(t) || "") : null : null
    }
    ,
    a.getTld = function(e) {
        var t;
        return r ? (t = e.lastIndexOf("."),
        t = e.substring(t + 1),
        r[t.toLowerCase()] && n.get(e) || t) : ""
    }
    ,
    a.KEY = "Domains";
    var i = a;
    function a() {}
    Object.defineProperty(d, "instance", {
        get: function() {
            return d.classInstance = void 0 === d.classInstance ? new d : d.classInstance
        },
        enumerable: !1,
        configurable: !0
    }),
    d.prototype.load = function(t, e, n) {
        var i = this;
        return this.contains(t) ? Promise.reject("Already in cache.") : (this.cache[t] = {
            url: e,
            data: null
        },
        this.requestXhr(e, n).then(function(e) {
            return i.loadComplete(t, e)
        }).catch(function(e) {
            return i.remove(t),
            Promise.reject(e)
        }))
    }
    ,
    d.prototype.loadComplete = function(e, t) {
        if (!this.contains(e))
            return Promise.reject("Item was removed from cache before loading was complete.");
        try {
            var n = JSON.parse(t);
            return this.cache[e].data = n,
            Promise.resolve(n)
        } catch (e) {
            return Promise.reject("There was an error parsing JSON file.")
        }
    }
    ,
    d.prototype.remove = function(e) {
        this.contains(e) && delete this.cache[e]
    }
    ,
    d.prototype.get = function(e) {
        return this.contains(e) ? this.cache[e].data : null
    }
    ,
    d.prototype.contains = function(e) {
        return this.cache.hasOwnProperty(e)
    }
    ,
    d.prototype.isLoading = function(e) {
        return this.contains(e) && null === this.cache[e].data
    }
    ,
    d.prototype.isLoaded = function(e) {
        return this.contains(e) && null !== this.cache[e].data
    }
    ,
    d.prototype.loadScript = function(i, e, r) {
        return new Promise(function(e, t) {
            var n = document.createElement("script");
            n.src = i,
            n.async = !1,
            n.onload = function() {
                "function" == typeof r && r(),
                e()
            }
            ,
            document.head.appendChild(n)
        }
        )
    }
    ,
    d.prototype.requestXhr = function(n, i) {
        var r;
        return void 0 === i && (i = "application/json"),
        window.XMLHttpRequest ? (r = new XMLHttpRequest,
        new Promise(function(e, t) {
            r.onreadystatechange = function() {
                4 === r.readyState && (200 === r.status ? (e(r.responseText),
                r.onreadystatechange = null) : 0 < r.status && (t("There was a problem with the request: status ".concat(r.status)),
                r.onreadystatechange = null))
            }
            ;
            try {
                r.open("GET", n, !0),
                r.setRequestHeader("Content-Type", i),
                r.send()
            } catch (e) {
                t("Error: Unable to send request, CORS not allowed.")
            }
        }
        )) : Promise.reject("Unable to send request, XMLHttpRequest not supported.")
    }
    ;
    var s = d;
    function d() {
        this.cache = {}
    }
    function c(o, a, s, l) {
        return new (s = s || Promise)(function(e, t) {
            function n(e) {
                try {
                    r(l.next(e))
                } catch (e) {
                    t(e)
                }
            }
            function i(e) {
                try {
                    r(l.throw(e))
                } catch (e) {
                    t(e)
                }
            }
            function r(t) {
                t.done ? e(t.value) : new s(function(e) {
                    e(t.value)
                }
                ).then(n, i)
            }
            r((l = l.apply(o, a || [])).next())
        }
        )
    }
    function u(i, r) {
        var o, a, s, l = {
            label: 0,
            sent: function() {
                if (1 & s[0])
                    throw s[1];
                return s[1]
            },
            trys: [],
            ops: []
        }, e = {
            next: t(0),
            throw: t(1),
            return: t(2)
        };
        return "function" == typeof Symbol && (e[Symbol.iterator] = function() {
            return this
        }
        ),
        e;
        function t(n) {
            return function(e) {
                var t = [n, e];
                if (o)
                    throw new TypeError("Generator is already executing.");
                for (; l; )
                    try {
                        if (o = 1,
                        a && (s = 2 & t[0] ? a.return : t[0] ? a.throw || ((s = a.return) && s.call(a),
                        0) : a.next) && !(s = s.call(a, t[1])).done)
                            return s;
                        switch (a = 0,
                        (t = s ? [2 & t[0], s.value] : t)[0]) {
                        case 0:
                        case 1:
                            s = t;
                            break;
                        case 4:
                            return l.label++,
                            {
                                value: t[1],
                                done: !1
                            };
                        case 5:
                            l.label++,
                            a = t[1],
                            t = [0];
                            continue;
                        case 7:
                            t = l.ops.pop(),
                            l.trys.pop();
                            continue;
                        default:
                            if (!(s = 0 < (s = l.trys).length && s[s.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                l = 0;
                                continue
                            }
                            if (3 === t[0] && (!s || t[1] > s[0] && t[1] < s[3]))
                                l.label = t[1];
                            else if (6 === t[0] && l.label < s[1])
                                l.label = s[1],
                                s = t;
                            else {
                                if (!(s && l.label < s[2])) {
                                    s[2] && l.ops.pop(),
                                    l.trys.pop();
                                    continue
                                }
                                l.label = s[2],
                                l.ops.push(t)
                            }
                        }
                        t = r.call(i, l)
                    } catch (e) {
                        t = [6, e],
                        a = 0
                    } finally {
                        o = s = 0
                    }
                if (5 & t[0])
                    throw t[1];
                return {
                    value: t[0] ? t[1] : void 0,
                    done: !0
                }
            }
        }
    }
    o.BrandingDomain = void 0,
    (O = o.BrandingDomain || (o.BrandingDomain = {}))[O.Neutral = 0] = "Neutral",
    O[O.Yepi = 1] = "Yepi",
    O[O.Spele = 2] = "Spele",
    O[O.Funnygames = 3] = "Funnygames",
    O[O.Kizi = 4] = "Kizi",
    O[O.PlayCell = 5] = "PlayCell",
    O[O.GameCell = 6] = "GameCell",
    O[O.Bild = 7] = "Bild",
    O[O.AGame = 8] = "AGame",
    O[O.Admeen = 9] = "Admeen",
    O[O.PlayTime = 10] = "PlayTime",
    O[O.Zigiz = 11] = "Zigiz",
    p.isBip = function() {
        return -1 !== window.location.search.indexOf("bipgaming") || "bip.fbrq.io" === window.location.host
    }
    ,
    p.isPlaycellApp = function() {
        return -1 !== window.location.search.indexOf("playcellApp")
    }
    ,
    p.isAGame = function() {
        return -1 !== window.location.search.indexOf("agame")
    }
    ,
    p.isAirfi = function() {
        return !!window.hasOwnProperty("airfi") && window.airfi
    }
    ,
    p.isPlaytime = function() {
        return -1 !== window.location.host.indexOf("playtime.nl")
    }
    ,
    p.isBild = function() {
        return "bild.fbrq.io" === window.location.host || -1 !== window.location.host.indexOf("contentfleet.com")
    }
    ,
    p.isYandex = function() {
        return window.hasOwnProperty("_YaSDK") || window.hasOwnProperty("YaGames")
    }
    ,
    p.getYandexBaseURL = function() {
        var e;
        return null != (e = null == (e = window.YandexGamesSDKEnvironment) ? void 0 : e.browser) && e.lang && "en" === window.YandexGamesSDKEnvironment.browser.lang ? "yandex.com" : "yandex.ru"
    }
    ,
    p.isLagged = function(e, t) {
        var n = new RegExp(t);
        try {
            var i = e.match(n);
            if (i && 0 < i.length)
                return i[0] === t
        } catch (e) {
            console.log("Could not match lagged sitename and url")
        }
        return !1
    }
    ,
    p.isAeria = function() {
        return p.isSpecificPartner(window.location.search, "gd_sdk_referrer_url", "aeriagames")
    }
    ,
    p.isPopCom = function() {
        return p.isWhitelistedSite(["play123.com", "playground123.com", "spelletjes123.nl", "jeux123.fr", "jogos123.net", "juegos123.net", "giochi123.net", "spiele123.com", "play123.in", "igrice123.rs", "igre123.net", "igre123.com"], window.location.search)
    }
    ,
    p.isDab3 = function() {
        return p.isWhitelistedSite(["lagged.cn", "lagged.vn", "lagged.se", "lagged.fr", "lagged.jp", "lagged.id", "lagged.kr", "spellen2.com", "lagged.me", "spiel2.com", "lagged.ru", "oyun.io", "lagged.es", "lagged.com.br", "maxg.com", "lagged.com", "gamesbutler.com", "8iz.com"], window.location.search)
    }
    ,
    p.isPakap = function() {
        return p.isWhitelistedSite(["jeux-gratuits.com"], window.location.search)
    }
    ,
    p.isKostenlos = function() {
        return p.isWhitelistedSite(["spiele-kostenlos-online.de"], window.location.search)
    }
    ,
    p.isChildFriendly = function() {
        return p.isWhitelistedSite(["spielaffe.de"], window.location.search)
    }
    ,
    p.isHighscoreAllowed = function() {
        return p.isWhitelistedSite(["play123.com", "playground123.com", "spelletjes123.nl", "jeux123.fr", "jogos123.net", "juegos123.net", "giochi123.net", "spiele123.com", "play123.in", "igrice123.rs", "igre123.net", "igre123.com", "lagged.cn", "lagged.vn", "lagged.se", "lagged.fr", "lagged.jp", "lagged.id", "lagged.kr", "spellen2.com", "lagged.me", "spiel2.com", "lagged.ru", "oyun.io", "lagged.es", "lagged.com.br", "maxg.com", "lagged.com", "gamesbutler.com", "8iz.com", "jeux-gratuits.com", "spiele-kostenlos-online.de"], window.location.search)
    }
    ,
    p.isWhitelistedSite = function(e, t) {
        e = e.filter(function(e) {
            return p.isSpecificPartner(t, "gd_sdk_referrer_url", e)
        });
        return !!(e && 0 < e.length)
    }
    ,
    p.isSpecificPartner = function(e, t, n) {
        var i = !1;
        try {
            var r = new URLSearchParams(e).get(t);
            r && -1 !== r.indexOf(n) && (i = !0)
        } catch (e) {
            console.log("Could not read gd sdk referrer for ".concat(n), e)
        }
        return i
    }
    ,
    p.getReferrerHostName = function(e) {
        try {
            var t = new URLSearchParams(e).get("gd_sdk_referrer_url");
            if (t) {
                var n = new URL(t).hostname;
                if (-1 !== n.indexOf("gamedistribution"))
                    return "gd";
                var i = n.split(".").join("");
                if (i)
                    return i
            }
        } catch (e) {
            console.log("could not get hostname:".concat(e))
        }
        return "gd"
    }
    ;
    var h = p;
    function p() {}
    o.UtmTargets = void 0,
    (O = o.UtmTargets || (o.UtmTargets = {}))[O.splashscreen = 0] = "splashscreen",
    O[O.logo = 1] = "logo",
    O[O.facebook = 2] = "facebook",
    O[O.twitter = 3] = "twitter",
    O[O.playstore = 4] = "playstore",
    O[O.appstore = 5] = "appstore",
    O[O.more_games = 6] = "more_games",
    O[O.download_game = 7] = "download_game",
    O[O.walkthrough = 8] = "walkthrough",
    O[O.disclaimer = 9] = "disclaimer",
    O[O.highscores = 10] = "highscores",
    g.getProtocol = function(e) {
        return e ? "https://" : "//"
    }
    ,
    g.getUtmContent = function(e) {
        return "string" == typeof e ? e : o.UtmTargets[e]
    }
    ,
    g.getDomainURL = function(e, t) {
        var n;
        switch (e) {
        case o.BrandingDomain.Spele:
            n = t + "www.spele.nl";
            break;
        case o.BrandingDomain.Yepi:
            n = t + "www.yepi.com";
            break;
        case o.BrandingDomain.Admeen:
            n = "https://media.admeen.com/branding/link.php";
            break;
        case o.BrandingDomain.PlayCell:
            n = t + "www.playcell.com";
            break;
        case o.BrandingDomain.GameCell:
            n = t + "www.gamecell.com";
            break;
        case o.BrandingDomain.Kizi:
            n = t + "www.kizi.com";
            break;
        case o.BrandingDomain.Bild:
            n = t + "www.bildspielt.de";
            break;
        case o.BrandingDomain.Funnygames:
            n = t + "www.funnygames.nu";
            break;
        case o.BrandingDomain.PlayTime:
            n = t + "playtime.nl";
            break;
        default:
        case o.BrandingDomain.AGame:
            n = t + "www.agame.com";
            break;
        case o.BrandingDomain.Zigiz:
            n = t + "m.zigiz.com"
        }
        return n
    }
    ,
    g.getPromoURL = function(e, t, n, i, r) {
        return window.hasOwnProperty("_YaSDK") || window.hasOwnProperty("YaGames") ? "https://".concat(h.getYandexBaseURL(), "/games/developer?name=Azerion") : e === o.BrandingDomain.Admeen ? "https://media.admeen.com/branding/link.php" : e === o.BrandingDomain.Bild ? t : t + "/?utm_source=" + n + "&utm_medium=html5&utm_term=" + i + "&utm_content=" + r + "&utm_campaign=Gamedistribution"
    }
    ;
    var f = g;
    function g() {}
    function m(e, t, n) {
        var i = document.createElement("script");
        i.setAttribute("src", e + "?v=" + t),
        "function" == typeof n && (i.onload = n),
        document.body.appendChild(i)
    }
    w.loadPortalScript = function(e) {
        e && e.hasOwnProperty("minijuegos") && -1 !== e.minijuegos.indexOf(x.getSourceSite()) && (void 0 !== window.mpConfig ? window.mpConfig.partner = "orange-games" : window.mpConfig = {
            partner: "orange-games"
        },
        m("https://ext.minijuegosgratis.com/external-host/main.js", Date.now() / 1e3)),
        e && e.hasOwnProperty("kongregate") && -1 !== e.kongregate.indexOf(x.getSourceSite()) && m("https://cdn1.kongregate.com/javascripts/kongregate_api.js", Date.now() / 1e3, function() {
            "undefined" != typeof kongregateAPI && kongregateAPI.loadAPI(function() {
                window.kongregate = kongregateAPI.getAPI()
            })
        }),
        e && e.hasOwnProperty("newgrounds") && -1 !== e.newgrounds.indexOf(x.getSourceSite()) && m("https://cdn.fbrq.io/@azerion/splash/assets/scripts/newgroundsio.min.js", Date.now() / 1e3)
    }
    ;
    var y = w;
    function w() {}
    b.isStandAlone = function() {
        var e;
        return null != (e = window._azerionIntegration) && e.sa ? null == (e = window._azerionIntegration) ? void 0 : e.sa : !!window.hasOwnProperty("fbrqSA") && window.fbrqSA
    }
    ,
    b.hasDomainForCustomBuild = function() {
        var e;
        return (null == (e = window._azerionIntegration) ? void 0 : e.bd) || window.hasOwnProperty("fbrqBD")
    }
    ,
    b.getDomainForCustomBuild = function() {
        var e;
        return null != (e = window._azerionIntegration) && e.bd && (null == (e = window._azerionIntegration) ? void 0 : e.bd)in o.BrandingDomain ? null == (e = window._azerionIntegration) ? void 0 : e.bd : window.hasOwnProperty("fbrqBD") && window.fbrqBD in o.BrandingDomain ? window.fbrqBD : void 0
    }
    ,
    b.hasLinksSettingsForCustomBuild = function() {
        var e;
        return (null == (e = window._azerionIntegration) ? void 0 : e.la) || window.hasOwnProperty("fbrqLA")
    }
    ,
    b.getLinkSettingsForCustomBuild = function() {
        var e;
        return null != (e = window._azerionIntegration) && e.la ? null == (e = window._azerionIntegration) ? void 0 : e.la : window.hasOwnProperty("fbrqLA") ? window.hasOwnProperty("fbrqLA") : void 0
    }
    ;
    var v = b;
    function b() {}
    A.preload = function(e) {
        var t = Promise.all([s.instance.load(i.KEY, "".concat(x.ASSET_LOCATION, "json/domains.json?v=").concat(e), "text/plain"), s.instance.load(A.SITELOCK_PORTALS, "".concat(x.ASSET_LOCATION, "json/sitelock.json?v=").concat(e), "text/plain")]);
        return Promise.all([s.instance.load(A.INTERNAL_PORTALS_KEY, "".concat(x.ASSET_LOCATION, "json/internal.json?v=").concat(e), "text/plain"), s.instance.load(A.CONTRACTED_PORTALS_KEY, "".concat(x.ASSET_LOCATION, "json/contracted.json?v=").concat(e), "text/plain"), s.instance.load(A.SPECIAL_PORTALS_KEY, "".concat(x.ASSET_LOCATION, "json/special.json?v=").concat(e), "text/plain")]),
        t.then(function(e) {
            var t = e[0]
              , e = e[1];
            i.setList(t),
            y.loadPortalScript(e),
            A.setSiteLock(e)
        }).catch(function() {
            console.warn("Unable to parse json")
        })
    }
    ,
    A.setSiteLock = function(e) {
        A.siteLocks = e
    }
    ,
    Object.defineProperty(A, "brandingLogoUrl", {
        get: function() {
            var e;
            switch (x.isOnDevice() || h.isAirfi() ? x.ASSET_LOCATION = "assets/" : "fbrq.io" === x.getSourceSite(!0) && (x.ASSET_LOCATION = "https://" + window.location.host + "/@azerion/splash/assets/"),
            x.getBrandingDomain()) {
            case o.BrandingDomain.Spele:
                e = "spele";
                break;
            case o.BrandingDomain.PlayCell:
                e = "playcell";
                break;
            case o.BrandingDomain.GameCell:
                e = "gamecell";
                break;
            case o.BrandingDomain.Yepi:
                e = "yepi";
                break;
            case o.BrandingDomain.Admeen:
                e = "admeen";
                break;
            case o.BrandingDomain.Bild:
                e = "bild";
                break;
            case o.BrandingDomain.Kizi:
                e = "kizi";
                break;
            case o.BrandingDomain.Funnygames:
                e = "funnygames";
                break;
            case o.BrandingDomain.PlayTime:
                e = "playtime";
                break;
            default:
            case o.BrandingDomain.AGame:
                e = "agame";
                break;
            case o.BrandingDomain.Zigiz:
                e = "zigiz"
            }
            return x.ASSET_LOCATION + "images/branding_logo_" + e + "_small.png"
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(A, "brandingBackgroundColor", {
        get: function() {
            var e;
            switch (x.getBrandingDomain()) {
            case o.BrandingDomain.Spele:
                e = "#4a72ad";
                break;
            case o.BrandingDomain.PlayCell:
                e = "#52a1e1";
                break;
            case o.BrandingDomain.GameCell:
                e = "#c600b2";
                break;
            case o.BrandingDomain.Yepi:
                e = "#0573a7";
                break;
            case o.BrandingDomain.AGame:
                e = "#0C486C";
                break;
            case o.BrandingDomain.Admeen:
                e = "#4267B2";
                break;
            case o.BrandingDomain.Bild:
                e = "#de0000";
                break;
            default:
            case o.BrandingDomain.Kizi:
                e = "#012f50";
                break;
            case o.BrandingDomain.Funnygames:
                e = "#33b0ff";
                break;
            case o.BrandingDomain.PlayTime:
            case o.BrandingDomain.Zigiz:
                e = "#023a63"
            }
            return e
        },
        enumerable: !1,
        configurable: !0
    }),
    A.blockedDomain = function() {
        return false
    }
    ,
    A.createCampaignURL = function(e, t) {
        var n = x.getSourceSite()
          , i = x.getBrandingDomain()
          , r = f.getProtocol(x.isOnDevice())
          , r = f.getDomainURL(i, r)
          , t = f.getUtmContent(t);
        return f.getPromoURL(i, r, n, e, t)
    }
    ,
    A.openCampaignLink = function(e, t) {
        e = A.createCampaignURL(e, t);
        A.blockedDomain() || (t = window.open(e)) && t.focus && t.focus()
    }
    ,
    A.isInternal = function() {
        return A.hostMatchesList(s.instance.get(A.INTERNAL_PORTALS_KEY))
    }
    ,
    A.isContracted = function() {
        return A.hostMatchesList(s.instance.get(A.CONTRACTED_PORTALS_KEY))
    }
    ,
    A.isSpecial = function() {
        return A.hostMatchesList(s.instance.get(A.SPECIAL_PORTALS_KEY))
    }
    ,
    A.isAdmeen = function() {
        var e;
        return !(!A.siteLocks || !A.siteLocks.hasOwnProperty("admeen")) && (e = A.siteLocks.admeen,
        A.hostMatchesList(e))
    }
    ,
    A.isKongregate = function() {
        var e;
        return !(!A.siteLocks || !A.siteLocks.hasOwnProperty("kongregate")) && (e = A.siteLocks.kongregate,
        A.hostMatchesList(e))
    }
    ,
    A.isNewgrounds = function() {
        var e;
        return !(!A.siteLocks || !A.siteLocks.hasOwnProperty("newgrounds")) && (e = A.siteLocks.newgrounds,
        A.hostMatchesList(e))
    }
    ,
    A.crossPromoAllowed = function() {
        var e = A.siteLocks.yandex;
        return A.hostMatchesList(e)
    }
    ,
    A.outGoingLinksAllowed = function() {
        return !(h.isAirfi() || A.isSpecial() || A.isContracted()) && (!v.hasLinksSettingsForCustomBuild() || v.getLinkSettingsForCustomBuild())
    }
    ,
    A.hostMatchesList = function(e) {
        e = e || [];
        for (var t = x.getSourceSite(), n = 0; n < e.length; n++)
            if (t === e[n])
                return !0;
        return !1
    }
    ,
    A.LOGO_KEY = "branding_logo",
    A.INTERNAL_PORTALS_KEY = "branding_portals",
    A.CONTRACTED_PORTALS_KEY = "branding_contracted",
    A.SPECIAL_PORTALS_KEY = "branding_special",
    A.SITELOCK_PORTALS = "sitelock_portals",
    A.DOMAIN_OVERWRITE = null,
    A.analyticsEnabled = !0;
    var _ = A;
    function A() {}
    D.loadHost = function() {
        return c(this, void 0, void 0, function() {
            var t, n;
            return u(this, function(e) {
                switch (e.label) {
                case 0:
                    if (t = document.referrer || window.location.host,
                    !window.hasOwnProperty("gdsdk"))
                        return [3, 4];
                    e.label = 1;
                case 1:
                    return e.trys.push([1, 3, , 4]),
                    [4, window.gdsdk.getSession()];
                case 2:
                    return n = e.sent(),
                    t = n.location.parentDomain,
                    [3, 4];
                case 3:
                    return n = e.sent(),
                    console.log(n),
                    [3, 4];
                case 4:
                    return D.HOST = t,
                    [2]
                }
            })
        })
    }
    ,
    D.getSourceSite = function(e) {
        var t = D.HOST;
        return -1 !== (t = (e = void 0 !== e && e) ? window.location.host : t).indexOf("embed.gamedistribution.com") && -1 !== window.location.search.indexOf("gd_sdk_referrer_url") && (t = D.getUrlParameter("gd_sdk_referrer_url") || t),
        t = decodeURIComponent(t),
        h.isBild() ? "bildspielt.de" : h.isBip() ? "bipgaming.com" : (t = (t = -1 < t.indexOf("://") ? t.split("/")[2] : t.split("/")[0]).split(":")[0],
        null !== (e = i.getDomain(t)) ? e : 3 === t.split(".").length ? t.substr(t.indexOf(".") + 1) : t)
    }
    ,
    D.getBrandingDomain = function() {
        if (v.hasDomainForCustomBuild())
            return v.getDomainForCustomBuild();
        if (_.DOMAIN_OVERWRITE)
            return _.DOMAIN_OVERWRITE;
        var e = D.getSourceSite();
        if (_.isAdmeen())
            return o.BrandingDomain.Admeen;
        if (h.isPlaycellApp() || h.isBip())
            return o.BrandingDomain.PlayCell;
        switch (e) {
        case "spele.nl":
            return o.BrandingDomain.Spele;
        case "yepi.com":
            return o.BrandingDomain.Yepi;
        case "oyunskor.com":
        case "barbioyunu.com.tr":
        case "bebekoyunu.com.tr":
        case "oyunkolu.com":
        case "oyungemisi.com":
        case "oyunlar1.com":
        case "oyunkuzusu.com":
        case "kraloyun.com":
        case "rekoroyun.com":
        case "oyundedem.com":
        case "oyunoyna.com":
        case "pastaoyunu.com.tr":
        case "playcell.com":
            return o.BrandingDomain.PlayCell;
        case "gamecell.com":
            return o.BrandingDomain.GameCell;
        case "playxl.com":
            return o.BrandingDomain.Admeen;
        case "kizi.com":
            return o.BrandingDomain.Kizi;
        case "bildspielt.de":
            return o.BrandingDomain.Bild;
        case "funnygames.nl":
            return o.BrandingDomain.Funnygames;
        case "playtime.nl":
            return o.BrandingDomain.PlayTime;
        default:
        case "agame.com":
            return o.BrandingDomain.AGame;
        case "gmbl.nl":
        case "zigiz.com":
            return o.BrandingDomain.Zigiz;
        case "coolmathgames.com":
            return o.BrandingDomain.Neutral
        }
    }
    ,
    D.getReferrer = function(e) {
        return -1 !== e.indexOf("?ref=") ? e.substr(e.indexOf("?ref=") + 5) : e
    }
    ,
    D.inIframe = function() {
        try {
            return window.self !== window.top
        } catch (e) {
            return !0
        }
    }
    ,
    D.inGDGameZone = function() {
        return -1 !== document.referrer.indexOf("")
    }
    ,
    D.getDomain = function(e) {
        var t = document.createElement("a");
        return t.href = e,
        t.origin
    }
    ,
    D.isOnDevice = function() {
        return true
    }
    ,
    D.isTc = function() {
        return true
    }
    ,
    D.getRandomRange = function(e, t) {
        return Math.random() * (t - e) + e | 0
    }
    ,
    D.getUrlParameter = function(e) {
        e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        e = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(location.search);
        return null === e ? "" : decodeURIComponent(e[1].replace(/\+/g, " "))
    }
    ,
    D.intTimeToString = function(e) {
        var t = Math.floor(e / 3600)
          , n = Math.floor(e % 3600 / 60)
          , e = e % 60;
        return (t < 10 ? "0" + t : t.toString()) + ":" + (n < 10 ? "0" + n : n.toString()) + ":" + (e < 10 ? "0" + e : e.toString())
    }
    ,
    D.LANGUAGE = "en",
    D.HOST = document.referrer || window.location.host,
    D.ASSET_LOCATION = v.isStandAlone() ? "assets/" : "https://cdn.fbrq.io/@azerion/splash/assets/";
    var x = D;
    function D() {}
    T.getUrlParams = function(e, t) {
        var n = null;
        try {
            n = new URLSearchParams(t).get(e)
        } catch (e) {
            console.log("Could not get url parameters : ", e)
        }
        return n
    }
    ,
    T.hasBooleanValue = function(e, t) {
        e = T.getUrlParams(e, t);
        return !!e && "true" === e
    }
    ,
    T.enableDebugMode = function() {
        return T.hasBooleanValue("azerionIntegrationDebug", T.search)
    }
    ,
    T.showVersioning = function() {
        return T.hasBooleanValue("showAzVersion", T.search)
    }
    ,
    T.getBuildInfo = function(e) {
        var t = {
            build: {
                version: "",
                commit: "",
                timeStamp: new Date
            },
            gdId: ""
        };
        try {
            var n = e.build
              , i = e.gdId;
            t.build = n || t.build,
            t.gdId = i
        } catch (e) {
            console.log("Could not get build info:".concat(e))
        }
        return t
    }
    ,
    T.showBuildInfo = function(e) {
        var t, n;
        T.search = e,
        T.enableDebugMode() && T.showVersioning() && ((e = document.createElement("div")).id = "az-debug-box",
        e.style.position = "absolute",
        e.style.top = "90%",
        e.style.left = "10px",
        e.style.width = "50vw",
        e.style.height = "60px",
        e.style.zIndex = "999",
        e.style.padding = "5px 5px",
        e.style.borderRadius = "5px",
        e.style.backgroundColor = "rgba(255, 255, 255, 0.4)",
        e.style.display = "flex",
        e.style.flexDirection = "column",
        e.style.justifyContent = "space-between",
        e.style.color = "black",
        e.style.fontSize = "14px",
        document.body.append(e),
        t = T.getBuildInfo(window._azerionIntegration),
        (n = document.createElement("div")).id = "az-version",
        n.textContent = "Build version:: ".concat(t.build.version),
        e.appendChild(n),
        (n = document.createElement("div")).id = "az-date",
        n.textContent = "Build creation date:: ".concat(new Date(t.build.timeStamp).toDateString()),
        e.appendChild(n),
        (n = document.createElement("div")).id = "az-gdId",
        n.textContent = "GD Id:: ".concat(t.gdId),
        e.appendChild(n))
    }
    ;
    var S = T;
    function T() {}
    var E = e(function(e, t) {
        e.exports = function n(i, r, o) {
            function a(t, e) {
                if (!r[t]) {
                    if (!i[t]) {
                        if (!e && l)
                            return l();
                        if (s)
                            return s(t, !0);
                        e = new Error("Cannot find module '" + t + "'");
                        throw e.code = "MODULE_NOT_FOUND",
                        e
                    }
                    e = r[t] = {
                        exports: {}
                    };
                    i[t][0].call(e.exports, function(e) {
                        return a(i[t][1][e] || e)
                    }, e, e.exports, n, i, r, o)
                }
                return r[t].exports
            }
            for (var s = l, e = 0; e < o.length; e++)
                a(o[e]);
            return a
        }({
            1: [function(e, j, G) {
                !function() {
                    var c, n, u, h, p, e, f, s, d, l, g, o, r, a, i, m, t, y, w = this || Function("return this")(), v = (e = Date.now || function() {
                        return +new Date
                    }
                    ,
                    f = "undefined" != typeof SHIFTY_DEBUG_NOW ? SHIFTY_DEBUG_NOW : e,
                    n = "undefined" != typeof window && (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || window.mozCancelRequestAnimationFrame && window.mozRequestAnimationFrame) || setTimeout,
                    P.prototype.tween = function(e) {
                        return this._isTweening ? this : (void 0 === e && this._configured || this.setConfig(e),
                        this._timestamp = f(),
                        this._start(this.get(), this._attachment),
                        this.resume())
                    }
                    ,
                    P.prototype.setConfig = function(e) {
                        e = e || {},
                        this._configured = !0,
                        this._attachment = e.attachment,
                        this._pausedAtTime = null,
                        this._scheduleId = null,
                        this._delay = e.delay || 0,
                        this._start = e.start || b,
                        this._step = e.step || b,
                        this._finish = e.finish || b,
                        this._duration = e.duration || 500,
                        this._currentState = A({}, e.from || this.get()),
                        this._originalState = this.get(),
                        this._targetState = A({}, e.to || this.get());
                        var t = this
                          , n = (this._timeoutHandler = function() {
                            E(t, t._timestamp, t._delay, t._duration, t._currentState, t._originalState, t._targetState, t._easing, t._step, t._scheduleFunction)
                        }
                        ,
                        this._currentState)
                          , i = this._targetState;
                        return x(i, n),
                        this._easing = O(n, e.easing || "linear"),
                        this._filterArgs = [n, this._originalState, i, this._easing],
                        T(this, "tweenCreated"),
                        this
                    }
                    ,
                    P.prototype.get = function() {
                        return A({}, this._currentState)
                    }
                    ,
                    P.prototype.set = function(e) {
                        this._currentState = e
                    }
                    ,
                    P.prototype.pause = function() {
                        return this._pausedAtTime = f(),
                        this._isPaused = !0,
                        this
                    }
                    ,
                    P.prototype.resume = function() {
                        return this._isPaused && (this._timestamp += f() - this._pausedAtTime),
                        this._isPaused = !1,
                        this._isTweening = !0,
                        this._timeoutHandler(),
                        this
                    }
                    ,
                    P.prototype.seek = function(e) {
                        e = Math.max(e, 0);
                        var t = f();
                        return this._timestamp + e === 0 || (this._timestamp = t - e,
                        this.isPlaying()) || (this._isTweening = !0,
                        this._isPaused = !1,
                        E(this, this._timestamp, this._delay, this._duration, this._currentState, this._originalState, this._targetState, this._easing, this._step, this._scheduleFunction, t),
                        this.pause()),
                        this
                    }
                    ,
                    P.prototype.stop = function(e) {
                        return this._isTweening = !1,
                        this._isPaused = !1,
                        this._timeoutHandler = b,
                        (w.cancelAnimationFrame || w.webkitCancelAnimationFrame || w.oCancelAnimationFrame || w.msCancelAnimationFrame || w.mozCancelRequestAnimationFrame || w.clearTimeout)(this._scheduleId),
                        e && (T(this, "beforeTween"),
                        D(1, this._currentState, this._originalState, this._targetState, 1, 0, this._easing),
                        T(this, "afterTween"),
                        T(this, "afterTweenEnd"),
                        this._finish.call(this, this._currentState, this._attachment)),
                        this
                    }
                    ,
                    P.prototype.isPlaying = function() {
                        return this._isTweening && !this._isPaused
                    }
                    ,
                    P.prototype.setScheduleFunction = function(e) {
                        this._scheduleFunction = e
                    }
                    ,
                    P.prototype.dispose = function() {
                        for (var e in this)
                            this.hasOwnProperty(e) && delete this[e]
                    }
                    ,
                    P.prototype.filter = {},
                    c = P.prototype.formula = {
                        linear: function(e) {
                            return e
                        }
                    },
                    A(P, {
                        now: f,
                        each: _,
                        tweenProps: D,
                        tweenProp: S,
                        applyFilter: T,
                        shallowCopy: A,
                        defaults: x,
                        composeEasingObject: O
                    }),
                    "function" == typeof SHIFTY_DEBUG_NOW && (w.timeoutHandler = E),
                    "object" == typeof G ? j.exports = P : void 0 === w.Tweenable && (w.Tweenable = P),
                    P);
                    function b() {}
                    function _(e, t) {
                        for (var n in e)
                            Object.hasOwnProperty.call(e, n) && t(n)
                    }
                    function A(t, n) {
                        return _(n, function(e) {
                            t[e] = n[e]
                        }),
                        t
                    }
                    function x(t, n) {
                        _(n, function(e) {
                            void 0 === t[e] && (t[e] = n[e])
                        })
                    }
                    function D(e, t, n, i, r, o, a) {
                        var s, l, d = e < o ? 0 : (e - o) / r;
                        for (s in t)
                            t.hasOwnProperty(s) && (l = "function" == typeof (l = a[s]) ? l : c[l],
                            t[s] = S(n[s], i[s], l, d));
                        return t
                    }
                    function S(e, t, n, i) {
                        return e + (t - e) * n(i)
                    }
                    function T(t, n) {
                        var i = P.prototype.filter
                          , r = t._filterArgs;
                        _(i, function(e) {
                            void 0 !== i[e][n] && i[e][n].apply(t, r)
                        })
                    }
                    function E(e, t, n, i, r, o, a, s, l, d, c) {
                        p = t + n + i,
                        u = Math.min(c || f(), p),
                        h = p <= u,
                        p = i - (p - u),
                        e.isPlaying() && (h ? (l(a, e._attachment, p),
                        e.stop(!0)) : (e._scheduleId = d(e._timeoutHandler, 1e3 / 60),
                        T(e, "beforeTween"),
                        u < t + n ? D(1, r, o, a, 1, 1, s) : D(u, r, o, a, i, t + n, s),
                        T(e, "afterTween"),
                        l(r, e._attachment, p)))
                    }
                    function O(e, t) {
                        var n = {}
                          , i = typeof t;
                        return _(e, "string" == i || "function" == i ? function(e) {
                            n[e] = t
                        }
                        : function(e) {
                            n[e] || (n[e] = t[e] || "linear")
                        }
                        ),
                        n
                    }
                    function P(e, t) {
                        this._currentState = e || {},
                        this._configured = !1,
                        this._scheduleFunction = n,
                        void 0 !== t && this.setConfig(t)
                    }
                    function k(n) {
                        d.each(n, function(e) {
                            var t = n[e];
                            "string" == typeof t && t.match(i) && (n[e] = B(i, t, I))
                        })
                    }
                    function I(e) {
                        3 === (e = (e = e).replace(/#/, "")).length && (e = (e = e.split(""))[0] + e[0] + e[1] + e[1] + e[2] + e[2]),
                        t[0] = C(e.substr(0, 2)),
                        t[1] = C(e.substr(2, 2)),
                        t[2] = C(e.substr(4, 2));
                        e = t;
                        return "rgb(" + e[0] + "," + e[1] + "," + e[2] + ")"
                    }
                    function C(e) {
                        return parseInt(e, 16)
                    }
                    function B(e, t, n) {
                        var i = t.match(e)
                          , r = t.replace(e, m);
                        if (i)
                            for (var o, a = i.length, s = 0; s < a; s++)
                                o = i.shift(),
                                r = r.replace(m, n(o));
                        return r
                    }
                    function z(e) {
                        for (var t = e.match(o), n = t.length, i = e.match(a)[0], r = 0; r < n; r++)
                            i += parseInt(t[r], 10) + ",";
                        return i.slice(0, -1) + ")"
                    }
                    function L(r, o) {
                        d.each(o, function(e) {
                            for (var t = M(r[e]), n = t.length, i = 0; i < n; i++)
                                r[o[e].chunkNames[i]] = +t[i];
                            delete r[e]
                        })
                    }
                    function R(n, i) {
                        d.each(i, function(e) {
                            n[e];
                            var t = function(e, t) {
                                y.length = 0;
                                for (var n = t.length, i = 0; i < n; i++)
                                    y.push(e[t[i]]);
                                return y
                            }(function(e, t) {
                                for (var n, i = {}, r = t.length, o = 0; o < r; o++)
                                    i[n = t[o]] = e[n],
                                    delete e[n];
                                return i
                            }(n, i[e].chunkNames), i[e].chunkNames)
                              , t = function(e, t) {
                                for (var n = e, i = t.length, r = 0; r < i; r++)
                                    n = n.replace(m, +t[r].toFixed(4));
                                return n
                            }(i[e].formatString, t);
                            n[e] = B(r, t, z)
                        })
                    }
                    function M(e) {
                        return e.match(o)
                    }
                    v.shallowCopy(v.prototype.formula, {
                        easeInQuad: function(e) {
                            return Math.pow(e, 2)
                        },
                        easeOutQuad: function(e) {
                            return -(Math.pow(e - 1, 2) - 1)
                        },
                        easeInOutQuad: function(e) {
                            return (e /= .5) < 1 ? .5 * Math.pow(e, 2) : -.5 * ((e -= 2) * e - 2)
                        },
                        easeInCubic: function(e) {
                            return Math.pow(e, 3)
                        },
                        easeOutCubic: function(e) {
                            return Math.pow(e - 1, 3) + 1
                        },
                        easeInOutCubic: function(e) {
                            return (e /= .5) < 1 ? .5 * Math.pow(e, 3) : .5 * (Math.pow(e - 2, 3) + 2)
                        },
                        easeInQuart: function(e) {
                            return Math.pow(e, 4)
                        },
                        easeOutQuart: function(e) {
                            return -(Math.pow(e - 1, 4) - 1)
                        },
                        easeInOutQuart: function(e) {
                            return (e /= .5) < 1 ? .5 * Math.pow(e, 4) : -.5 * ((e -= 2) * Math.pow(e, 3) - 2)
                        },
                        easeInQuint: function(e) {
                            return Math.pow(e, 5)
                        },
                        easeOutQuint: function(e) {
                            return Math.pow(e - 1, 5) + 1
                        },
                        easeInOutQuint: function(e) {
                            return (e /= .5) < 1 ? .5 * Math.pow(e, 5) : .5 * (Math.pow(e - 2, 5) + 2)
                        },
                        easeInSine: function(e) {
                            return 1 - Math.cos(e * (Math.PI / 2))
                        },
                        easeOutSine: function(e) {
                            return Math.sin(e * (Math.PI / 2))
                        },
                        easeInOutSine: function(e) {
                            return -.5 * (Math.cos(Math.PI * e) - 1)
                        },
                        easeInExpo: function(e) {
                            return 0 === e ? 0 : Math.pow(2, 10 * (e - 1))
                        },
                        easeOutExpo: function(e) {
                            return 1 === e ? 1 : 1 - Math.pow(2, -10 * e)
                        },
                        easeInOutExpo: function(e) {
                            return 0 === e ? 0 : 1 === e ? 1 : (e /= .5) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (2 - Math.pow(2, -10 * --e))
                        },
                        easeInCirc: function(e) {
                            return -(Math.sqrt(1 - e * e) - 1)
                        },
                        easeOutCirc: function(e) {
                            return Math.sqrt(1 - Math.pow(e - 1, 2))
                        },
                        easeInOutCirc: function(e) {
                            return (e /= .5) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
                        },
                        easeOutBounce: function(e) {
                            return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
                        },
                        easeInBack: function(e) {
                            return e * e * (2.70158 * e - 1.70158)
                        },
                        easeOutBack: function(e) {
                            return --e * e * (2.70158 * e + 1.70158) + 1
                        },
                        easeInOutBack: function(e) {
                            var t = 1.70158;
                            return (e /= .5) < 1 ? e * e * ((1 + (t *= 1.525)) * e - t) * .5 : .5 * ((e -= 2) * e * ((1 + (t *= 1.525)) * e + t) + 2)
                        },
                        elastic: function(e) {
                            return -1 * Math.pow(4, -8 * e) * Math.sin((6 * e - 1) * (2 * Math.PI) / 2) + 1
                        },
                        swingFromTo: function(e) {
                            var t = 1.70158;
                            return (e /= .5) < 1 ? e * e * ((1 + (t *= 1.525)) * e - t) * .5 : .5 * ((e -= 2) * e * ((1 + (t *= 1.525)) * e + t) + 2)
                        },
                        swingFrom: function(e) {
                            return e * e * (2.70158 * e - 1.70158)
                        },
                        swingTo: function(e) {
                            return --e * e * (2.70158 * e + 1.70158) + 1
                        },
                        bounce: function(e) {
                            return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
                        },
                        bouncePast: function(e) {
                            return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : e < 2.5 / 2.75 ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
                        },
                        easeFromTo: function(e) {
                            return (e /= .5) < 1 ? .5 * Math.pow(e, 4) : -.5 * ((e -= 2) * Math.pow(e, 3) - 2)
                        },
                        easeFrom: function(e) {
                            return Math.pow(e, 4)
                        },
                        easeTo: function(e) {
                            return Math.pow(e, .25)
                        }
                    }),
                    v.setBezierFunction = function(e, t, n, i, r) {
                        function o(e) {
                            return c = (r = 1) - (h = 3 * (t = a)) - (u = 3 * ((n = p) - a) - h),
                            (((1 - (n = 3 * s) - (t = 3 * ((i = f) - s) - n)) * (i = function(e, t) {
                                for (var n, i, r, o, a = e, s = 0; s < 8; s++) {
                                    if (d(r = l(a) - e) < t)
                                        return a;
                                    if (d(o = (3 * c * a + 2 * u) * a + h) < 1e-6)
                                        break;
                                    a -= r / o
                                }
                                if ((a = e) < (n = 0))
                                    return n;
                                if ((i = 1) < a)
                                    return i;
                                for (; n < i; ) {
                                    if (d((r = l(a)) - e) < t)
                                        return a;
                                    r < e ? n = a : i = a,
                                    a = .5 * (i - n) + n
                                }
                                return a
                            }(e, 1 / (200 * r))) + t) * i + n) * i;
                            function l(e) {
                                return ((c * e + u) * e + h) * e
                            }
                            function d(e) {
                                return 0 <= e ? e : 0 - e
                            }
                            var t, n, i, r, c, u, h
                        }
                        var a, s, p, f, a = t, s = n, p = i, f = r;
                        return o.displayName = e,
                        o.x1 = t,
                        o.y1 = n,
                        o.x2 = i,
                        o.y2 = r,
                        v.prototype.formula[e] = o
                    }
                    ,
                    v.unsetBezierFunction = function(e) {
                        delete v.prototype.formula[e]
                    }
                    ,
                    (s = new v)._filterArgs = [],
                    v.interpolate = function(e, t, n, i, r) {
                        var o = v.shallowCopy({}, e)
                          , r = r || 0
                          , i = v.composeEasingObject(e, i || "linear")
                          , a = (s.set({}),
                        s._filterArgs)
                          , a = (a.length = 0,
                        a[0] = o,
                        a[1] = e,
                        a[2] = t,
                        a[3] = i,
                        v.applyFilter(s, "tweenCreated"),
                        v.applyFilter(s, "beforeTween"),
                        v.tweenProps(n, o, e, t, 1, r, i));
                        return v.applyFilter(s, "afterTween"),
                        a
                    }
                    ,
                    d = v,
                    l = /(\d|\-|\.)/,
                    g = /([^\-0-9\.]+)/g,
                    o = /[0-9.\-]+/g,
                    r = new RegExp("rgb\\(" + o.source + /,\s*/.source + o.source + /,\s*/.source + o.source + "\\)","g"),
                    a = /^.*\(/,
                    i = /#([0-9]|[a-f]){3,6}/gi,
                    m = "VAL",
                    t = [],
                    y = [],
                    d.prototype.filter.token = {
                        tweenCreated: function(e, t, n, i) {
                            var o, a;
                            k(e),
                            k(t),
                            k(n),
                            this._tokenData = (o = e,
                            a = {},
                            d.each(o, function(e) {
                                var r, t, n = o[e];
                                "string" == typeof n && (r = M(n),
                                a[e] = {
                                    formatString: ((t = (n = n).match(g)) ? 1 !== t.length && !n.charAt(0).match(l) || t.unshift("") : t = ["", ""],
                                    t.join(m)),
                                    chunkNames: function(e) {
                                        for (var t = [], n = r.length, i = 0; i < n; i++)
                                            t.push("_" + e + "_" + i);
                                        return t
                                    }(e)
                                })
                            }),
                            a)
                        },
                        beforeTween: function(e, t, n, i) {
                            var s = i
                              , l = this._tokenData;
                            d.each(l, function(e) {
                                var t = l[e].chunkNames
                                  , n = t.length
                                  , i = s[e];
                                if ("string" == typeof i)
                                    for (var r = i.split(" "), o = r[r.length - 1], a = 0; a < n; a++)
                                        s[t[a]] = r[a] || o;
                                else
                                    for (a = 0; a < n; a++)
                                        s[t[a]] = i;
                                delete s[e]
                            }),
                            L(e, this._tokenData),
                            L(t, this._tokenData),
                            L(n, this._tokenData)
                        },
                        afterTween: function(e, t, n, i) {
                            var a, s;
                            R(e, this._tokenData),
                            R(t, this._tokenData),
                            R(n, this._tokenData),
                            a = i,
                            s = this._tokenData,
                            d.each(s, function(e) {
                                var t = s[e].chunkNames
                                  , n = t.length
                                  , i = a[t[0]];
                                if ("string" == typeof i) {
                                    for (var r = "", o = 0; o < n; o++)
                                        r += " " + a[t[o]],
                                        delete a[t[o]];
                                    a[e] = r.substr(1)
                                } else
                                    a[e] = i
                            })
                        }
                    }
                }
                .call(null)
            }
            , {}],
            2: [function(e, t, n) {
                function i(e, t) {
                    this._pathTemplate = "M 50,50 m 0,-{radius} a {radius},{radius} 0 1 1 0,{2radius} a {radius},{radius} 0 1 1 0,-{2radius}",
                    this.containerAspectRatio = 1,
                    r.apply(this, arguments)
                }
                var r = e("./shape")
                  , o = e("./utils");
                ((i.prototype = new r).constructor = i).prototype._pathString = function(e) {
                    var t = e.strokeWidth
                      , e = 50 - (e.trailWidth && e.trailWidth > e.strokeWidth ? e.trailWidth : t) / 2;
                    return o.render(this._pathTemplate, {
                        radius: e,
                        "2radius": 2 * e
                    })
                }
                ,
                i.prototype._trailString = function(e) {
                    return this._pathString(e)
                }
                ,
                t.exports = i
            }
            , {
                "./shape": 7,
                "./utils": 9
            }],
            3: [function(e, t, n) {
                function i(e, t) {
                    this._pathTemplate = "M 0,{center} L 100,{center}",
                    r.apply(this, arguments)
                }
                var r = e("./shape")
                  , o = e("./utils");
                ((i.prototype = new r).constructor = i).prototype._initializeSvg = function(e, t) {
                    e.setAttribute("viewBox", "0 0 100 " + t.strokeWidth),
                    e.setAttribute("preserveAspectRatio", "none")
                }
                ,
                i.prototype._pathString = function(e) {
                    return o.render(this._pathTemplate, {
                        center: e.strokeWidth / 2
                    })
                }
                ,
                i.prototype._trailString = function(e) {
                    return this._pathString(e)
                }
                ,
                t.exports = i
            }
            , {
                "./shape": 7,
                "./utils": 9
            }],
            4: [function(e, t, n) {
                t.exports = {
                    Line: e("./line"),
                    Circle: e("./circle"),
                    SemiCircle: e("./semicircle"),
                    Square: e("./square"),
                    Path: e("./path"),
                    Shape: e("./shape"),
                    utils: e("./utils")
                }
            }
            , {
                "./circle": 2,
                "./line": 3,
                "./path": 5,
                "./semicircle": 6,
                "./shape": 7,
                "./square": 8,
                "./utils": 9
            }],
            5: [function(e, t, n) {
                function i(e, t) {
                    if (!(this instanceof i))
                        throw new Error("Constructor was called without new keyword");
                    t = l.extend({
                        duration: 800,
                        easing: "linear",
                        from: {},
                        to: {},
                        step: function() {}
                    }, t),
                    e = l.isString(e) ? document.querySelector(e) : e,
                    this.path = e,
                    this._opts = t,
                    this._tweenable = null;
                    e = this.path.getTotalLength();
                    this.path.style.strokeDasharray = e + " " + e,
                    this.set(0)
                }
                var s = e("shifty")
                  , l = e("./utils")
                  , r = {
                    easeIn: "easeInCubic",
                    easeOut: "easeOutCubic",
                    easeInOut: "easeInOutCubic"
                };
                i.prototype.value = function() {
                    var e = this._getComputedDashOffset()
                      , t = this.path.getTotalLength();
                    return parseFloat((1 - e / t).toFixed(6), 10)
                }
                ,
                i.prototype.set = function(e) {
                    this.stop(),
                    this.path.style.strokeDashoffset = this._progressToOffset(e);
                    var t, n = this._opts.step;
                    l.isFunction(n) && (t = this._easing(this._opts.easing),
                    n(this._calculateTo(e, t), this._opts.shape || this, this._opts.attachment))
                }
                ,
                i.prototype.stop = function() {
                    this._stopTween(),
                    this.path.style.strokeDashoffset = this._getComputedDashOffset()
                }
                ,
                i.prototype.animate = function(e, n, t) {
                    n = n || {},
                    l.isFunction(n) && (t = n,
                    n = {});
                    var i = l.extend({}, n)
                      , r = l.extend({}, this._opts)
                      , r = (n = l.extend(r, n),
                    this._easing(n.easing))
                      , i = this._resolveFromAndTo(e, r, i)
                      , o = (this.stop(),
                    this.path.getBoundingClientRect(),
                    this._getComputedDashOffset())
                      , e = this._progressToOffset(e)
                      , a = this;
                    this._tweenable = new s,
                    this._tweenable.tween({
                        from: l.extend({
                            offset: o
                        }, i.from),
                        to: l.extend({
                            offset: e
                        }, i.to),
                        duration: n.duration,
                        easing: r,
                        step: function(e) {
                            a.path.style.strokeDashoffset = e.offset;
                            var t = n.shape || a;
                            n.step(e, t, n.attachment)
                        },
                        finish: function(e) {
                            l.isFunction(t) && t()
                        }
                    })
                }
                ,
                i.prototype._getComputedDashOffset = function() {
                    var e = window.getComputedStyle(this.path, null);
                    return parseFloat(e.getPropertyValue("stroke-dashoffset"), 10)
                }
                ,
                i.prototype._progressToOffset = function(e) {
                    var t = this.path.getTotalLength();
                    return t - e * t
                }
                ,
                i.prototype._resolveFromAndTo = function(e, t, n) {
                    return n.from && n.to ? {
                        from: n.from,
                        to: n.to
                    } : {
                        from: this._calculateFrom(t),
                        to: this._calculateTo(e, t)
                    }
                }
                ,
                i.prototype._calculateFrom = function(e) {
                    return s.interpolate(this._opts.from, this._opts.to, this.value(), e)
                }
                ,
                i.prototype._calculateTo = function(e, t) {
                    return s.interpolate(this._opts.from, this._opts.to, e, t)
                }
                ,
                i.prototype._stopTween = function() {
                    null !== this._tweenable && (this._tweenable.stop(),
                    this._tweenable = null)
                }
                ,
                i.prototype._easing = function(e) {
                    return r.hasOwnProperty(e) ? r[e] : e
                }
                ,
                t.exports = i
            }
            , {
                "./utils": 9,
                shifty: 1
            }],
            6: [function(e, t, n) {
                function i(e, t) {
                    this._pathTemplate = "M 50,50 m -{radius},0 a {radius},{radius} 0 1 1 {2radius},0",
                    this.containerAspectRatio = 2,
                    r.apply(this, arguments)
                }
                var r = e("./shape")
                  , o = e("./circle")
                  , a = e("./utils");
                ((i.prototype = new r).constructor = i).prototype._initializeSvg = function(e, t) {
                    e.setAttribute("viewBox", "0 0 100 50")
                }
                ,
                i.prototype._initializeTextContainer = function(e, t, n) {
                    e.text.style && (n.style.top = "auto",
                    n.style.bottom = "0",
                    e.text.alignToBottom ? a.setStyle(n, "transform", "translate(-50%, 0)") : a.setStyle(n, "transform", "translate(-50%, 50%)"))
                }
                ,
                i.prototype._pathString = o.prototype._pathString,
                i.prototype._trailString = o.prototype._trailString,
                t.exports = i
            }
            , {
                "./circle": 2,
                "./shape": 7,
                "./utils": 9
            }],
            7: [function(e, t, n) {
                function i(e, t) {
                    if (!(this instanceof i))
                        throw new Error("Constructor was called without new keyword");
                    if (0 !== arguments.length) {
                        this._opts = o.extend({
                            color: "#555",
                            strokeWidth: 1,
                            trailColor: null,
                            trailWidth: null,
                            fill: null,
                            text: {
                                style: {
                                    color: null,
                                    position: "absolute",
                                    left: "50%",
                                    top: "50%",
                                    padding: 0,
                                    margin: 0,
                                    transform: {
                                        prefix: !0,
                                        value: "translate(-50%, -50%)"
                                    }
                                },
                                autoStyleContainer: !0,
                                alignToBottom: !0,
                                value: null,
                                className: "progressbar-text"
                            },
                            svgStyle: {
                                display: "block",
                                width: "100%"
                            },
                            warnings: !1
                        }, t, !0),
                        o.isObject(t) && void 0 !== t.svgStyle && (this._opts.svgStyle = t.svgStyle),
                        o.isObject(t) && o.isObject(t.text) && void 0 !== t.text.style && (this._opts.text.style = t.text.style);
                        var t = this._createSvgView(this._opts)
                          , n = o.isString(e) ? document.querySelector(e) : e;
                        if (!n)
                            throw new Error("Container does not exist: " + e);
                        this._container = n,
                        this._container.appendChild(t.svg),
                        this._opts.warnings && this._warnContainerAspectRatio(this._container),
                        this._opts.svgStyle && o.setStyles(t.svg, this._opts.svgStyle),
                        this.svg = t.svg,
                        this.path = t.path,
                        this.trail = t.trail,
                        this.text = null;
                        e = o.extend({
                            attachment: void 0,
                            shape: this
                        }, this._opts);
                        this._progressPath = new r(t.path,e),
                        o.isObject(this._opts.text) && null !== this._opts.text.value && this.setText(this._opts.text.value)
                    }
                }
                var r = e("./path")
                  , o = e("./utils")
                  , a = "Object is destroyed";
                i.prototype.animate = function(e, t, n) {
                    if (null === this._progressPath)
                        throw new Error(a);
                    this._progressPath.animate(e, t, n)
                }
                ,
                i.prototype.stop = function() {
                    if (null === this._progressPath)
                        throw new Error(a);
                    void 0 !== this._progressPath && this._progressPath.stop()
                }
                ,
                i.prototype.destroy = function() {
                    if (null === this._progressPath)
                        throw new Error(a);
                    this.stop(),
                    this.svg.parentNode.removeChild(this.svg),
                    this.svg = null,
                    this.path = null,
                    this.trail = null,
                    (this._progressPath = null) !== this.text && (this.text.parentNode.removeChild(this.text),
                    this.text = null)
                }
                ,
                i.prototype.set = function(e) {
                    if (null === this._progressPath)
                        throw new Error(a);
                    this._progressPath.set(e)
                }
                ,
                i.prototype.value = function() {
                    if (null === this._progressPath)
                        throw new Error(a);
                    return void 0 === this._progressPath ? 0 : this._progressPath.value()
                }
                ,
                i.prototype.setText = function(e) {
                    if (null === this._progressPath)
                        throw new Error(a);
                    null === this.text && (this.text = this._createTextContainer(this._opts, this._container),
                    this._container.appendChild(this.text)),
                    o.isObject(e) ? (o.removeChildren(this.text),
                    this.text.appendChild(e)) : this.text.innerHTML = e
                }
                ,
                i.prototype._createSvgView = function(e) {
                    var t = document.createElementNS("http://www.w3.org/2000/svg", "svg")
                      , n = (this._initializeSvg(t, e),
                    null)
                      , e = ((e.trailColor || e.trailWidth) && (n = this._createTrail(e),
                    t.appendChild(n)),
                    this._createPath(e));
                    return t.appendChild(e),
                    {
                        svg: t,
                        path: e,
                        trail: n
                    }
                }
                ,
                i.prototype._initializeSvg = function(e, t) {
                    e.setAttribute("viewBox", "0 0 100 100")
                }
                ,
                i.prototype._createPath = function(e) {
                    var t = this._pathString(e);
                    return this._createPathElement(t, e)
                }
                ,
                i.prototype._createTrail = function(e) {
                    var t = this._trailString(e)
                      , e = o.extend({}, e);
                    return e.trailColor || (e.trailColor = "#eee"),
                    e.trailWidth || (e.trailWidth = e.strokeWidth),
                    e.color = e.trailColor,
                    e.strokeWidth = e.trailWidth,
                    e.fill = null,
                    this._createPathElement(t, e)
                }
                ,
                i.prototype._createPathElement = function(e, t) {
                    var n = document.createElementNS("http://www.w3.org/2000/svg", "path");
                    return n.setAttribute("d", e),
                    n.setAttribute("stroke", t.color),
                    n.setAttribute("stroke-width", t.strokeWidth),
                    t.fill ? n.setAttribute("fill", t.fill) : n.setAttribute("fill-opacity", "0"),
                    n
                }
                ,
                i.prototype._createTextContainer = function(e, t) {
                    var n = document.createElement("div")
                      , i = (n.className = e.text.className,
                    e.text.style);
                    return i && (e.text.autoStyleContainer && (t.style.position = "relative"),
                    o.setStyles(n, i),
                    i.color || (n.style.color = e.color)),
                    this._initializeTextContainer(e, t, n),
                    n
                }
                ,
                i.prototype._initializeTextContainer = function(e, t, n) {}
                ,
                i.prototype._pathString = function(e) {
                    throw new Error("Override this function for each progress bar")
                }
                ,
                i.prototype._trailString = function(e) {
                    throw new Error("Override this function for each progress bar")
                }
                ,
                i.prototype._warnContainerAspectRatio = function(e) {
                    var t, n, i;
                    this.containerAspectRatio && (t = window.getComputedStyle(e, null),
                    n = parseFloat(t.getPropertyValue("width"), 10),
                    i = parseFloat(t.getPropertyValue("height"), 10),
                    o.floatEquals(this.containerAspectRatio, n / i) || (console.warn("Incorrect aspect ratio of container", "#" + e.id, "detected:", t.getPropertyValue("width") + "(width)", "/", t.getPropertyValue("height") + "(height)", "=", n / i),
                    console.warn("Aspect ratio of should be", this.containerAspectRatio)))
                }
                ,
                t.exports = i
            }
            , {
                "./path": 5,
                "./utils": 9
            }],
            8: [function(e, t, n) {
                function i(e, t) {
                    this._pathTemplate = "M 0,{halfOfStrokeWidth} L {width},{halfOfStrokeWidth} L {width},{width} L {halfOfStrokeWidth},{width} L {halfOfStrokeWidth},{strokeWidth}",
                    this._trailTemplate = "M {startMargin},{halfOfStrokeWidth} L {width},{halfOfStrokeWidth} L {width},{width} L {halfOfStrokeWidth},{width} L {halfOfStrokeWidth},{halfOfStrokeWidth}",
                    r.apply(this, arguments)
                }
                var r = e("./shape")
                  , o = e("./utils");
                ((i.prototype = new r).constructor = i).prototype._pathString = function(e) {
                    var t = 100 - e.strokeWidth / 2;
                    return o.render(this._pathTemplate, {
                        width: t,
                        strokeWidth: e.strokeWidth,
                        halfOfStrokeWidth: e.strokeWidth / 2
                    })
                }
                ,
                i.prototype._trailString = function(e) {
                    var t = 100 - e.strokeWidth / 2;
                    return o.render(this._trailTemplate, {
                        width: t,
                        strokeWidth: e.strokeWidth,
                        halfOfStrokeWidth: e.strokeWidth / 2,
                        startMargin: e.strokeWidth / 2 - e.trailWidth / 2
                    })
                }
                ,
                t.exports = i
            }
            , {
                "./shape": 7,
                "./utils": 9
            }],
            9: [function(e, t, n) {
                var o = "Webkit Moz O ms".split(" ");
                function i(e, t, n) {
                    for (var i = e.style, r = 0; r < o.length; ++r)
                        i[o[r] + a(t)] = n;
                    i[t] = n
                }
                function a(e) {
                    return e.charAt(0).toUpperCase() + e.slice(1)
                }
                function s(e) {
                    return "[object Array]" !== Object.prototype.toString.call(e) && "object" == typeof e && !!e
                }
                function r(e, t) {
                    for (var n in e)
                        e.hasOwnProperty(n) && t(e[n], n)
                }
                t.exports = {
                    extend: function e(t, n, i) {
                        for (var r in t = t || {},
                        i = i || !1,
                        n = n || {}) {
                            var o, a;
                            n.hasOwnProperty(r) && (o = t[r],
                            a = n[r],
                            i && s(o) && s(a) ? t[r] = e(o, a, i) : t[r] = a)
                        }
                        return t
                    },
                    render: function(e, t) {
                        var n, i, r, o = e;
                        for (n in t)
                            t.hasOwnProperty(n) && (i = t[n],
                            r = new RegExp("\\{" + n + "\\}","g"),
                            o = o.replace(r, i));
                        return o
                    },
                    setStyle: i,
                    setStyles: function(n, e) {
                        r(e, function(e, t) {
                            null != e && (s(e) && !0 === e.prefix ? i(n, t, e.value) : n.style[t] = e)
                        })
                    },
                    capitalize: a,
                    isString: function(e) {
                        return "string" == typeof e || e instanceof String
                    },
                    isFunction: function(e) {
                        return "function" == typeof e
                    },
                    isObject: s,
                    forEachObject: r,
                    floatEquals: function(e, t) {
                        return Math.abs(e - t) < .001
                    },
                    removeChildren: function(e) {
                        for (; e.firstChild; )
                            e.removeChild(e.firstChild)
                    }
                }
            }
            , {}]
        }, {}, [4])(4)
    })
      , O = (P.getInstance = function(e) {
        if (!P.instance) {
            if (!e)
                throw new Error("Can not create new SplashLoader instance without options!");
            P.instance = new P(e)
        }
        return P.instance
    }
    ,
    P.prototype.create = function() {
        return c(this, void 0, void 0, function() {
            var i, r, o, a;
            return u(this, function(e) {
                switch (e.label) {
                case 0:
                    return S.showBuildInfo(window.location.search),
                    r = "\n        #h5branding-center {\n            position: absolute;\n            top: 45%;\n            left: 50%;\n            transform: translate(-50%, -20%);\n            text-align: center;\n            width: 100%;\n        }\n        #h5branding-wrapper {\n            position: relative;\n            z-index: 665;\n            width: 150px;\n            height: 150px;\n            display:inline-block;\n            margin: 35px 40px 96px 40px;\n        }\n\n        #h5branding-version {\n            position: absolute;\n            right: 10px;\n            font-family: Helvetica, Arial, sans-serif;\n            color: #ffffff;\n            font-size: 0.8em;\n            top: 10px;\n            display: none;\n        }\n\n        #h5branding-wrapper > #h5branding-bar, #h5branding-wrapper > img {\n            box-shadow: inset 10px 10px 20px 5px rgba(0, 0, 0, 0.5);\n            border-radius: 50%;\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n        }\n\n        #h5branding-ad {\n            position: relative;\n            z-index: 667;\n            border-radius: 5px;\n            border: 3px solid white;\n            background: rgba(256, 256, 256, 0.2);\n            width: 336px;\n            height: 280px;\n            display: none;\n            margin: 0px 10px 0px 10px;\n        }\n\n        #h5branding-wrapper > img {\n            /* Needs appropriate vendor prefixes */\n            box-sizing: border-box;\n\n            /* This needs to be equal to strokeWidth */\n            padding: 4%;\n        }\n\n        #h5branding-wrapper > img {\n            border-radius: 50%;\n            box-shadow: inset 0 5px 5px rgba(0, 0, 0, 0.5), 5px 5px 7px rgba(0, 0, 0, 0.3);\n        }\n\n        #h5branding-container {\n            box-sizing: border-box;\n            position: absolute;\n            z-index: 664;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n            background-color: #006099;\n            overflow: hidden;\n        }\n\n        #h5branding-background {\n            position: absolute;\n            top: -25%;\n            left: -25%;\n            width: 150%;\n            height: 150%;\n            background-size: cover;\n            filter: blur(40px) brightness(1.5);\n        }\n\n        @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n             /* IE10+ CSS styles go here */\n             #h5branding-background {\n                background-image: none !important;\n             }\n        }\n\n        #h5branding-logo {\n            position: absolute;\n            margin: 0 auto;\n            left: 0;\n            right: 0;\n            text-align: center;\n            top: 10%;\n        }\n\n        #h5branding-logo > img {\n            height: 150px;\n        }\n\n        #h5branding-title {\n            position: absolute;\n            width: 100%;\n            background: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.5) 50%, transparent);\n            color: #fff;\n            text-shadow: 0 0 1px rgba(0, 0, 0, 0.7);\n            bottom:10%;\n            padding: 15px 0;\n            text-align: center;\n            font-size: 18px;\n            font-family: Helvetica, Arial, sans-serif;\n            font-weight: bold;\n            line-height: 100%;\n        }\n\n        #h5branding-button {\n            /* border: 0; */\n            padding: 10px 22px;\n            border-radius: 5px;\n            border: 3px solid white;\n            background: linear-gradient(0deg, #dddddd, #ffffff);\n            color: #222;\n            text-transform: uppercase;\n            text-shadow: 0 0 1px #fff;\n            font-family: Helvetica, Arial, sans-serif;\n            font-weight: bold;\n            font-size: 18px;\n            cursor: pointer;\n            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);\n            display: none;\n            width: 150px;\n            position: absolute;\n            top: 170px;\n            margin: 0 auto;\n            left: 0;\n            right: 0;\n        }\n\n        @media (orientation: portrait) and (max-width: 1080px) {\n            #h5branding-logo > img {\n                height: initial;\n                width:100%;\n            }\n        }\n\n        @media (orientation: landscape) and (max-height: 640px) {\n            #h5branding-title {\n                display: none;\n            }\n\n            #h5branding-logo > img {\n                height: 100px;\n            }\n        }\n\n        @media (orientation: landscape) and (max-height: 460px) {\n        /*This fix is for is for iPhone 13*/\n            #h5branding-title {\n                display: block;\n                bottom: 5%;\n            }\n\n            #h5branding-wrapper {\n                width: 110px;\n                height: 110px;\n                margin: 0;\n                transform: scale(0.8, 0.8);\n            }\n\n            #h5branding-logo {\n                top: 0;\n                transform: scale(0.5, 0.5);\n            }\n\n            #h5branding-button {\n                top: initial;\n                width: 110px;\n                position: absolute;\n                top: 140px;\n                left: 0;\n                right: 0;\n            }\n\n            #h5branding-ad {\n               display: none !important;\n            }\n\n            #h5branding-center {\n                transform: translate(-50%, -50%);\n            }\n        }\n\n        @media (orientation: portrait) and (max-width: 250px) {\n            #h5branding-logo {\n                top: 2%;\n            }\n        }\n\n        @media (orientation: landscape) and (max-width: 330px) {\n             #h5branding-button {\n                top: 120px;\n            }\n\n            #h5branding-logo > img {\n                height: 70px;\n            }\n        }\n\n        @media (max-width: 600px) and (max-height: 850px) {\n            #h5branding-ad {\n               display: none !important;\n            }\n        }\n\n        @media (max-width: 600px) and (max-height: 1100px) {\n            #h5branding-center {\n                top: 40%;\n            }\n\n            #h5branding-title {\n               bottom: 5%\n            }\n        }\n\n        @media (max-width: 600px) and (max-height: 900px) {\n        /*This fix is for is for iPhone*/\n            #h5branding-title {\n               display: block\n            }\n        }\n\n        @media (orientation: landscape) and (min-width: 800px) {\n            #h5branding-wrapper {\n                margin-left: 120px;\n                margin-right: 120px;\n            }\n        }\n\n        ",
                    t = this.getGameLogoUrl(),
                    n = this.options.gameTitle,
                    i = '\n        <div id="h5branding-background"></div>\n        <div id="h5branding-version"></div>\n        <div id="h5branding-logo"></div>\n        <div id="h5branding-center">\n            <div id="h5branding-ad"></div>\n            <div id="h5branding-wrapper">\n                <img src="'.concat(t, '" />\n                <div id="h5branding-bar"></div>\n                <button id="h5branding-button" onclick="h5branding.SplashLoader.getInstance().onPlayButtonClick();">Play</button>\n            </div>\n        </div>\n        <div id="h5branding-title">').concat(n, "</div>\n    "),
                    o = document.head || document.getElementsByTagName("head")[0],
                    (a = document.createElement("style")).type = "text/css",
                    a.styleSheet ? a.styleSheet.cssText = r : a.appendChild(document.createTextNode(r)),
                    o.appendChild(a),
                    (r = document.createElement("div")).innerHTML = i,
                    r.id = "h5branding-container",
                    (o = document.body || document.getElementsByTagName("body")[0]).insertBefore(r, o.firstChild),
                    this.circleLoader = new E.Circle("#h5branding-bar",{
                        strokeWidth: 3,
                        color: this.options.barColor
                    }),
                    (a = document.getElementById("h5branding-version")) && (a.innerHTML = this.options.version),
                    [4, this.loadLibs()];
                case 1:
                    return e.sent(),
                    [4, x.loadHost()];
                case 2:
                    return e.sent(),
                    [4, this.loadBranding()];
                case 3:
                    return e.sent(),
                    this.loaded = !0,
                    [2]
                }
                var t, n
            })
        })
    }
    ,
    P.prototype.loadBranding = function() {
        return c(this, void 0, void 0, function() {
            var t, n;
            return u(this, function(e) {
                switch (e.label) {
                case 0:
                    return [4, _.preload(Date.now().toString())];
                case 1:
                    return e.sent(),
                    (t = document.getElementById("h5branding-background")) && (t.style.backgroundColor = _.brandingBackgroundColor),
                    (t = document.getElementById("h5branding-logo")) && x.getBrandingDomain() !== o.BrandingDomain.Neutral && ((n = document.createElement("img")).src = _.brandingLogoUrl.replace("_small", ""),
                    t.appendChild(n)),
                    [2]
                }
            })
        })
    }
    ,
    P.prototype.loadLibs = function() {
        var n = this
          , i = this.options.libs.map(function(e, t) {
            return s.instance.loadScript(e, !0, function() {
                n.setScriptloadProgress(i.length, t + 1)
            })
        });
        return Promise.all(i)
    }
    ,
    Object.defineProperty(P.prototype, "bannerAllowed", {
        get: function() {
            var e = document.body.clientWidth
              , t = document.body.clientHeight;
            return this.progress < 100 && !(t < e && t <= 460) && !(e < 600 && t < 850)
        },
        enumerable: !1,
        configurable: !0
    }),
    P.prototype.showBanner = function() {
        var e;
        return this.bannerAllowed && (e = document.getElementById("h5branding-ad")) ? (e.style.display = "inline-flex",
        e) : null
    }
    ,
    P.prototype.setScriptloadProgress = function(e, t) {
        this.circleLoader.animate(.3 * t / e, null, function() {})
    }
    ,
    P.prototype.setLoadProgress = function(e) {
        var t, n = this;
        this.loaded && (100 == (this.progress = e = 30 + .7 * e) ? (t = document.querySelector("#h5branding-button"),
        this.circleLoader.animate(1, null, function() {
            !x.inGDGameZone() && t && !0 === n.showPlayButton ? t.style.display = "block" : !x.inGDGameZone() && !1 !== n.showPlayButton || n.onPlayButtonClick()
        })) : this.circleLoader.animate(e / 100, null, function() {}))
    }
    ,
    P.prototype.setButtonCallback = function(e) {
        this.buttonCallback = e
    }
    ,
    P.prototype.onPlayButtonClick = function() {
        this.buttonCallback && this.buttonCallback()
    }
    ,
    P.prototype.destroy = function() {
        var e = document.querySelector("#h5branding-container");
        null !== e && null !== e.parentNode && e.parentNode.removeChild(e)
    }
    ,
    P.prototype.getGameLogoUrl = function() {
        return "assets/icon.jpeg"
    }
    ,
    P);
    function P(e) {
        this.circleLoader = null,
        this.loaded = !1,
        this.showPlayButton = "undefined" == typeof playBtn || playBtn,
        this.progress = 0,
        this.options = {
            gameId: "12346",
            gameTitle: "Place Holder",
            gameName: "place-holder",
            libs: [],
            version: "dev",
            barColor: "white",
            gaMeasurementId: "none"
        },
        this.options.gameId = e.gameId,
        this.options.gameTitle = e.gameTitle,
        this.options.version = e.version,
        this.options.barColor = e.barColor || this.options.barColor,
        this.options.libs = e.libs,
        this.options.gaMeasurementId = e.gaMeasurementId
    }
    function k() {}
    k.updateAeriaIFrameSrc = function() {
        try {
            var e = "pc"
              , t = ((window.navigator.userAgent.includes("Mac") && "ontouchend"in document && -1 === window.navigator.userAgent.indexOf("iPhone") || window.navigator.userAgent.includes("Android") && -1 === window.navigator.userAgent.indexOf("Mobile")) && (e = "tablet"),
            (window.navigator.userAgent.includes("Android") && window.navigator.userAgent.includes("Mobile") || window.navigator.userAgent.includes("Mac") && window.navigator.userAgent.includes("iPhone")) && (e = "smartphone"),
            document.getElementById("menu_yg"));
            t.src = t.src.replace("pc", e)
        } catch (e) {
            console.log("could not update Aeria iframe source")
        }
    }
    ,
    k.addYMenuListener = function() {
        try {
            var t = document.getElementById("menu-button");
            t.onclick = function() {
                var e = document.getElementById("menu-content");
                "-300px" === e.style.left ? (e.style.left = "0",
                t.style.left = "300px") : (e.style.left = "-300px",
                t.style.left = "0")
            }
        } catch (e) {
            console.log("Could not add a listener to button")
        }
    }
    ,
    k.addYLoginListenerForAeria = function(t) {
        h.isAeria() && window.addEventListener("message", function(e) {
            "resultBoxClosed" === e.data.action && t()
        }, !1)
    }
    ,
    k.toggleYMenuButtonVisibility = function() {
        var e = h.isAeria();
        document.getElementById("menu-header").style.display = e ? "block" : "none"
    }
    ,
    k.onGameLoad = function(e) {
        k.updateAeriaIFrameSrc(),
        k.toggleYMenuButtonVisibility(),
        k.addYLoginListenerForAeria(e),
        k.addYMenuListener()
    }
    ,
    k.sendScoreEvent = function(e, t, n) {
        if (h.isAeria() && window.hasOwnProperty("gdsdk")) {
            console.log("DEBUG: sending events for Aeria:aeriaID:score", e, t);
            try {
                var i = function() {
                    var e = !1;
                    try {
                        var t = new URLSearchParams(window.location.search)
                          , n = new URL(t.get("gd_sdk_referrer_url")).hostname;
                        n && -1 === n.indexOf("minigame-stg") && (e = !0)
                    } catch (e) {
                        console.log("Could not verify if prod or staging for Aeria")
                    }
                    return e
                }() ? "production" : "staging";
                window.top.postMessage({
                    action: "score",
                    data: {
                        gameId: e,
                        score: t
                    },
                    env: i,
                    system: "Softgames"
                }, "*"),
                n && n()
            } catch (e) {
                console.log("Could not send Aeria event: ".concat(e))
            }
        }
    }
    ,
    o.AeriaIntegration = k,
    o.Branding = _,
    o.DebugTools = S,
    o.Domain = i,
    o.Hosts = h,
    o.SplashLoader = O,
    o.Utils = x,
    Object.defineProperty(o, "__esModule", {
        value: !0
    })
});
/******/
(()=>{
    // webpackBootstrap
    /******/
    var __webpack_modules__ = ({

        /***/
        542: /***/
        ((module,exports,__webpack_require__)=>{

            var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports],
            __WEBPACK_AMD_DEFINE_RESULT__ = (function(require, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", ({
                    value: true
                }));
                exports.AzGdVersion = void 0;
                var AzGdVersion = /** @class */
                (function() {
                    function AzGdVersion() {}
                    AzGdVersion.prototype.trigger = function(eventName, cb, args) {
                        try {
                            cb();
                        } catch (e) {
                            console.log('Could not trigger event game');
                            cb();
                        }
                    }
                    ;
                    return AzGdVersion;
                }());
                exports.AzGdVersion = AzGdVersion;
            }
            ).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
            __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

            /***/
        }
        ),

        /***/
        40: /***/
        ((module,exports,__webpack_require__)=>{

            var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports],
            __WEBPACK_AMD_DEFINE_RESULT__ = (function(require, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", ({
                    value: true
                }));
                exports.EasyGameBox = void 0;
                var EasyGameBox = /** @class */
                (function() {
                    function EasyGameBox() {}
                    EasyGameBox.prototype.trigger = function(eventName, cb, score, gameData) {
                        try {
                            var payload = {
                                callback: cb,
                                score: score,
                                data: gameData
                            };
                            window[eventName](payload);
                        } catch (e) {
                            console.log('Could not trigger event game');
                            cb();
                        }
                    }
                    ;
                    return EasyGameBox;
                }());
                exports.EasyGameBox = EasyGameBox;
            }
            ).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
            __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

            /***/
        }
        ),

        /***/
        543: /***/
        ((module,exports,__webpack_require__)=>{

            var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(40), __webpack_require__(542)],
            __WEBPACK_AMD_DEFINE_RESULT__ = (function(require, exports, EasyGameBox_1, AzGdVersion_1) {
                "use strict";
                Object.defineProperty(exports, "__esModule", ({
                    value: true
                }));
                exports.EventHandler = void 0;
                var EventHandler = /** @class */
                (function() {
                    function EventHandler() {}
                    EventHandler.init = function(type) {
                        switch (type) {
                        case 'gmo':
                            this.event = new EasyGameBox_1.EasyGameBox();
                            break;
                        default:
                        case 'gd':
                            this.event = new AzGdVersion_1.AzGdVersion();
                            break;
                        }
                    }
                    ;
                    EventHandler.trigger = function(eventName, cb, score, gameData) {
                        this.event.trigger(eventName, cb, score, gameData);
                    }
                    ;
                    return EventHandler;
                }());
                exports.EventHandler = EventHandler;
            }
            ).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
            __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

            /***/
        }
        ),

        /***/
        729: /***/
        ((module,exports,__webpack_require__)=>{

            var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(543)],
            __WEBPACK_AMD_DEFINE_RESULT__ = (function(require, exports, EventHandler_1) {
                "use strict";
                Object.defineProperty(exports, "__esModule", ({
                    value: true
                }));
                exports.EventHandler = void 0;
                Object.defineProperty(exports, "EventHandler", ({
                    enumerable: true,
                    get: function() {
                        return EventHandler_1.EventHandler;
                    }
                }));
            }
            ).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
            __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

            /***/
        }
        )
        /******/
    });
    /************************************************************************/
    /******/
    // The module cache
    /******/
    var __webpack_module_cache__ = {};
    /******/
    /******/
    // The require function
    /******/
    function __webpack_require__(moduleId) {
        /******/
        // Check if module is in cache
        /******/
        var cachedModule = __webpack_module_cache__[moduleId];
        /******/
        if (cachedModule !== undefined) {
            /******/
            return cachedModule.exports;
            /******/
        }
        /******/
        // Create a new module (and put it into the cache)
        /******/
        var module = __webpack_module_cache__[moduleId] = {
            /******/
            // no module.id needed
            /******/
            // no module.loaded needed
            /******/
            exports: {}/******/
        };
        /******/
        /******/
        // Execute the module function
        /******/
        __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
        /******/
        /******/
        // Return the exports of the module
        /******/
        return module.exports;
        /******/
    }
    /******/
    /************************************************************************/
    /******/
    /******/
    // startup
    /******/
    // Load entry module and return exports
    /******/
    // This entry module used 'module' so it can't be inlined
    /******/
    var __webpack_exports__ = __webpack_require__(729);
    /******/
    self._azIntGmo = __webpack_exports__;
    /******/
    /******/
}
)();