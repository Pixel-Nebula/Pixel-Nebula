System.register("chunks:///_virtual/AdsManager.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './FocusHandler.ts'], function (exports) {
    'use strict';
  
    var _defineProperty, cclegacy, _decorator, FocusHandler;
  
    return {
      setters: [function (module) {
        _defineProperty = module.defineProperty;
      }, function (module) {
        cclegacy = module.cclegacy;
        _decorator = module._decorator;
      }, function (module) {
        FocusHandler = module.default;
      }],
      execute: function () {
        var _dec, _class, _class2, _temp;
  
        cclegacy._RF.push({}, "01241sb7RFFxL8+WxYIp3ms", "AdsManager", undefined);
  
        var ccclass = _decorator.ccclass,
            property = _decorator.property;
        var AdsManager = exports('AdsManager', (_dec = ccclass('AdsManager'), _dec(_class = (_temp = _class2 = /*#__PURE__*/function () {
          function AdsManager() {}
  
          AdsManager.init = function init() {
            window._azerionAdHandler.init();
  
            window._azerionAdHandler.addListeners(function () {
              //pause
              try {
                FocusHandler.instance.pauseGame(); // SFXManager.getInstance().setVolume(0);
                // BGMManager.getInstance().setVolume(0);
              } catch (e) {}
            }, function () {
              //resume
              try {
                FocusHandler.instance.resumeGame(); // SFXManager.getInstance().setVolume(SFXManager.isMuted ? 0 : 1);
                // BGMManager.getInstance().setVolume(BGMManager.isMuted ? 0 : 1);
              } catch (e) {}
            });
          };
  
          AdsManager.preloadRewardedAds = function preloadRewardedAds() {
            window._azerionAdHandler.preloadAd('rewarded');
          };
  
          AdsManager.showInterstitialAds = function showInterstitialAds(callback) {
            // SFXManager.getInstance().setVolume(0);
            // BGMManager.getInstance().setVolume(0);
            // SFXManager.getInstance().setVolume(SFXManager.isMuted ? 0 : 1);
            // BGMManager.getInstance().setVolume(BGMManager.isMuted ? 0 : 1);
            // callback();
            AdsManager.isAdPlaying = true;
            AzerionISADPLAYING = true;
  
            window._azerionAdHandler.showInterstitialAd('midroll', function () {
              AdsManager.isAdPlaying = false;
              AzerionISADPLAYING = false;
              callback();
            });
          };
  
          AdsManager.showRewardedAds = function showRewardedAds(onSuccess, onFailed) {
            // SFXManager.getInstance().setVolume(0);
            // BGMManager.getInstance().setVolume(0);
            // SFXManager.getInstance().setVolume(SFXManager.isMuted ? 0 : 1);
            // BGMManager.getInstance().setVolume(BGMManager.isMuted ? 0 : 1);
            // onFailed()
            AdsManager.isAdPlaying = true;
  
            window._azerionAdHandler.showRewardedAd('reward', function () {
              AdsManager.isAdPlaying = false;
              onSuccess();
            }, function () {
              AdsManager.isAdPlaying = false;
              onFailed();
            });
          };
  
          return AdsManager;
        }(), _defineProperty(_class2, "isAdPlaying", false), _temp)) || _class));
  
        cclegacy._RF.pop();
      }
    };
  });
  
  System.register("chunks:///_virtual/PreloadScreen.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './GameController.ts'], function (exports) {
    'use strict';
  
    var _defineProperty, _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, resources, Prefab, instantiate, Component, GameController;
  
    return {
      setters: [function (module) {
        _defineProperty = module.defineProperty;
        _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
        _inheritsLoose = module.inheritsLoose;
        _initializerDefineProperty = module.initializerDefineProperty;
        _assertThisInitialized = module.assertThisInitialized;
      }, function (module) {
        cclegacy = module.cclegacy;
        _decorator = module._decorator;
        resources = module.resources;
        Prefab = module.Prefab;
        instantiate = module.instantiate;
        Component = module.Component;
      }, function (module) {
        GameController = module.GameController;
      }],
      execute: function () {
        var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _class3, _temp;
  
        cclegacy._RF.push({}, "0b079ZlGLxMPoqEt1zDI/O4", "PreloadScreen", undefined);
  
        var ccclass = _decorator.ccclass,
            property = _decorator.property;
        var PreloadScreen = exports('PreloadScreen', (_dec = ccclass('PreloadScreen'), _dec2 = property({
          type: String
        }), _dec3 = property({
          type: String
        }), _dec(_class = (_class2 = (_temp = _class3 = /*#__PURE__*/function (_Component) {
          _inheritsLoose(PreloadScreen, _Component);
  
          function PreloadScreen() {
            var _this;
  
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
  
            _this = _Component.call.apply(_Component, [this].concat(args)) || this;
  
            _initializerDefineProperty(_assertThisInitialized(_this), "prefabPath", _descriptor, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "type", _descriptor2, _assertThisInitialized(_this));
  
            return _this;
          }
  
          var _proto = PreloadScreen.prototype;
  
          _proto.start = function start() {
            PreloadScreen.dataPath[this.type] = this;
            resources.preload(this.prefabPath, Prefab, function (err, prefab) {});
          };
  
          _proto.loadPrefab = function loadPrefab(onFinish) {
            var _this2 = this;
  
            resources.load(this.prefabPath, Prefab, function (err, prefab) {
              var node = instantiate(prefab);
              node.setParent(_this2.node);
              if (_this2.type == "senseiswag") GameController.Instance.senseiSwagScreen = node;else if (_this2.type == "settings") GameController.Instance.settingScreen = node;else if (_this2.type == "language") GameController.Instance.languageScreen = node;else if (_this2.type == "round_point") GameController.Instance.selectRoundScreen = node;else if (_this2.type == "round_finish") GameController.Instance.finishRoundScreen = node;else if (_this2.type == "select_mode") GameController.Instance.selectModeScreen = node;else if (_this2.type == "result") GameController.Instance.resultScreen = node;else if (_this2.type == "gameplay") GameController.Instance.gameplayScreen = node;else if (_this2.type == "cont_peachy") GameController.Instance.contPeachy = node;else if (_this2.type == "cont_deflect") GameController.Instance.contDeflect = node;else if (_this2.type == "cont_berryblast") GameController.Instance.contBerryBlast = node;else if (_this2.type == "result_score") GameController.Instance.resultScore = node;
              node.active = false;
  
              if (_this2.type == "round_finish" || _this2.type == "result") {
                onFinish();
              } else if (_this2.type == "senseiswag") {
                var counter = 0;
                resources.load("particle/particle_juiceStarfruit", Prefab, function (err, prefab) {
                  var node = instantiate(prefab);
                  node.setParent(GameController.Instance.node.parent);
                  GameController.Instance.particleJuiceStarfruit = node;
                  counter += 1;
  
                  if (counter == 2) {
                    onFinish();
                  }
                });
                resources.load("particle/particle_unlockItem", Prefab, function (err, prefab) {
                  var node = instantiate(prefab);
                  node.setParent(GameController.Instance.node.parent);
                  GameController.Instance.particleUnlockItem = node;
                  counter += 1;
  
                  if (counter == 2) {
                    onFinish();
                  }
                });
              } else if (_this2.type == "gameplay" || _this2.type == "select_mode") {
                var totalLoaded = 0;
                PreloadScreen.dataPath["cont_peachy"].loadPrefab(function () {
                  totalLoaded += 1;
  
                  if (totalLoaded == 4) {
                    onFinish();
                  }
                });
                PreloadScreen.dataPath["cont_deflect"].loadPrefab(function () {
                  totalLoaded += 1;
  
                  if (totalLoaded == 4) {
                    onFinish();
                  }
                });
                PreloadScreen.dataPath["cont_berryblast"].loadPrefab(function () {
                  totalLoaded += 1;
  
                  if (totalLoaded == 4) {
                    onFinish();
                  }
                });
                PreloadScreen.dataPath["result_score"].loadPrefab(function () {
                  totalLoaded += 1;
  
                  if (totalLoaded == 4) {
                    onFinish();
                  }
                });
              } else {
                onFinish();
              }
            });
          };
  
          return PreloadScreen;
        }(Component), _defineProperty(_class3, "dataPath", {}), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "prefabPath", [_dec2], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "type", [_dec3], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        })), _class2)) || _class));
  
        cclegacy._RF.pop();
      }
    };
  });
  
  System.register("chunks:///_virtual/LoadingHandler.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './MissionManager.ts', './Data.ts', './SceneLoading.ts'], function (exports) {
    'use strict';
  
    var _inheritsLoose, _defineProperty, _assertThisInitialized, cclegacy, _decorator, director, Component, MissionManager, Data, SceneLoading;
  
    return {
      setters: [function (module) {
        _inheritsLoose = module.inheritsLoose;
        _defineProperty = module.defineProperty;
        _assertThisInitialized = module.assertThisInitialized;
      }, function (module) {
        cclegacy = module.cclegacy;
        _decorator = module._decorator;
        director = module.director;
        Component = module.Component;
      }, function (module) {
        MissionManager = module.MissionManager;
      }, function (module) {
        Data = module.Data;
      }, function (module) {
        SceneLoading = module.SceneLoading;
      }],
      execute: function () {
        var _dec, _class, _temp;
  
        cclegacy._RF.push({}, "0ea0b+BYWtB+pekVUpE9ly9", "LoadingHandler", undefined);
  
        var ccclass = _decorator.ccclass,
            property = _decorator.property;
        var LoadingHandler = exports('LoadingHandler', (_dec = ccclass('LoadingHandler'), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
          _inheritsLoose(LoadingHandler, _Component);
  
          function LoadingHandler() {
            var _this;
  
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
  
            _this = _Component.call.apply(_Component, [this].concat(args)) || this;
  
            _defineProperty(_assertThisInitialized(_this), "curProgress", 0);
  
            _defineProperty(_assertThisInitialized(_this), "lastProgress", 0);
  
            _defineProperty(_assertThisInitialized(_this), "finish", false);
  
            _defineProperty(_assertThisInitialized(_this), "totalCount", 0);
  
            _defineProperty(_assertThisInitialized(_this), "completedCount", 0);
  
            _defineProperty(_assertThisInitialized(_this), "isInitialized", false);
  
            _defineProperty(_assertThisInitialized(_this), "isFinishLoad", false);
  
            _defineProperty(_assertThisInitialized(_this), "percentAsset", 0);
  
            _defineProperty(_assertThisInitialized(_this), "preloadSceneFinish", false);
  
            return _this;
          }
  
          var _proto = LoadingHandler.prototype;
  
          _proto.start = function start() {
            var _this2 = this;
  
            MissionManager.getInstance().loadAllIcon();
            this.percentAsset = 0;
            var me = this;
  
            var preloadGameplay = function preloadGameplay() {
              director.preloadScene("gameplay", function (completedCount, totalCount, item) {
                me.totalCount = totalCount;
                me.completedCount = completedCount;
  
                if (totalCount > 0) {
                  me.percentAsset = completedCount / totalCount;
                }
  
                SceneLoading.getInstance().updateLoadingBar(me.percentAsset);
              }, function (err) {
                _this2.preloadSceneFinish = true;
                me.checkFinish();
              });
            };
  
            Data.getInstance().doLoad();
            preloadGameplay();
          };
  
          _proto.update = function update(deltaTime) {};
  
          _proto.checkFinish = function checkFinish() {
            if (this.preloadSceneFinish) {
              director.loadScene("gameplay");
            }
          };
  
          return LoadingHandler;
        }(Component), _temp)) || _class));
  
        cclegacy._RF.pop();
      }
    };
  });
  
  System.register("chunks:///_virtual/Data.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './BGMManager.ts', './SFXManager.ts', './MissionManager.ts', './GameController.ts'], function (exports) {
    'use strict';
  
    var _defineProperty, cclegacy, _decorator, view, find, Vec3, Camera, UITransform, BGMManager, SFXManager, MissionManager, GameController;
  
    return {
      setters: [function (module) {
        _defineProperty = module.defineProperty;
      }, function (module) {
        cclegacy = module.cclegacy;
        _decorator = module._decorator;
        view = module.view;
        find = module.find;
        Vec3 = module.Vec3;
        Camera = module.Camera;
        UITransform = module.UITransform;
      }, function (module) {
        BGMManager = module.BGMManager;
      }, function (module) {
        SFXManager = module.SFXManager;
      }, function (module) {
        MissionManager = module.MissionManager;
      }, function (module) {
        GameController = module.GameController;
      }],
      execute: function () {
        var _dec, _class, _class2, _temp;
  
        cclegacy._RF.push({}, "17c31mgGDFCOo91QCcLPrZF", "Data", undefined);
  
        var ccclass = _decorator.ccclass,
            property = _decorator.property;
        var Data = exports('Data', (_dec = ccclass('Data'), _dec(_class = (_temp = _class2 = /*#__PURE__*/function () {
          function Data() {
            _defineProperty(this, "lastPlayedWithFriends", 0);
  
            _defineProperty(this, "totalExp", 0);
  
            _defineProperty(this, "starFruit", GameController.RIG_STARFRUIT ? 4000000 : 0);
  
            _defineProperty(this, "dataGlobal", []);
  
            _defineProperty(this, "weeklyEndsIn", 0);
  
            _defineProperty(this, "weeklyTotalUser", 0);
  
            _defineProperty(this, "inventoryPUDeflect", 0);
  
            _defineProperty(this, "inventoryPUBerryBlast", 0);
  
            _defineProperty(this, "inventoryPUPeachyTime", 0);
  
            _defineProperty(this, "needGenerateNewMission", false);
  
            _defineProperty(this, "bladeUsed", 0);
  
            _defineProperty(this, "bgUsed", 0);
  
            _defineProperty(this, "unlockedBlade", [true, false, false, false, false, false, false, false, false, false, false, false]);
  
            _defineProperty(this, "unlockedBG", [true, false, false, false, false]);
          }
  
          Data.getInstance = function getInstance() {
            if (Data.Instance == undefined) {
              Data.Instance = new Data();
            }
  
            return Data.Instance;
          };
  
          var _proto = Data.prototype;
  
          _proto.getBestScore = function getBestScore() {
            return "" + GameController.getInstance().getBestScore();
          };
  
          _proto.convertScoreToStarFruit = function convertScoreToStarFruit(score) {
            var m_curve = 1;
            var m_base = 1.1;
            var m_YShift = 2.25;
            return Math.max(0, Math.round(this.logBase(score * m_curve, m_base) * m_YShift));
          };
  
          _proto.convert2DPosTo3D = function convert2DPosTo3D(worldPosition) {
            var worldPos = worldPosition.clone();
            worldPos.x = worldPos.x * view.getScaleX();
            worldPos.y = worldPos.y * view.getScaleY();
            var MainCamera = find("Main Camera");
            var out = new Vec3(0, 0, 0);
            MainCamera.getComponent(Camera).screenToWorld(worldPos, out);
            return out;
          };
  
          _proto.convert3DPosTo2D = function convert3DPosTo2D(worldPosition, parent) {
            var worldPos = worldPosition.clone();
            worldPos.x = worldPos.x * view.getScaleX();
            worldPos.y = worldPos.y * view.getScaleY();
            var MainCamera = find("Main Camera");
            var out = new Vec3(0, 0, 0);
            parent.getComponent(UITransform).convertToNodeSpaceAR(worldPos, out);
            return out;
          };
  
          _proto.logBase = function logBase(value, base) {
            return Math.log(value) / Math.log(base);
          };
  
          _proto.doLoad = function doLoad() {
            var data = null;
            if (localStorage.getItem("mlasufnuand") != null && localStorage.getItem("mlasufnuand") != "") data = JSON.parse(GameController.protect(localStorage.getItem("mlasufnuand")));
            if (data == null) data = {};
            GameController.haveCreatedShortcut = data['have_created_shortcut'] == undefined ? false : data['have_created_shortcut'];
            if (data['sfx_muted'] != undefined) SFXManager.isMuted = data['sfx_muted'];
            if (data['bgm_muted'] != undefined) BGMManager.isMuted = data['bgm_muted'];
            GameController.TUTORIAL_STATE = data['tutorial_state'] == undefined ? 1 : data['tutorial_state'];
            if (GameController.FORCE_TUTORIAL) GameController.TUTORIAL_STATE = 1;
            if (data['solo_best_score'] != undefined) GameController.bestScore = data['solo_best_score'];
            if (data['star_fruit'] != undefined) Data.getInstance().starFruit = data['star_fruit'];
            if (GameController.RIG_STARFRUIT) Data.getInstance().starFruit = 4000000;
            if (data['inventory_pu_deflect'] != undefined) Data.getInstance().inventoryPUDeflect = data['inventory_pu_deflect'];
            if (data['inventory_pu_berryblast'] != undefined) Data.getInstance().inventoryPUBerryBlast = data['inventory_pu_berryblast'];
            if (data['inventory_pu_peachytime'] != undefined) Data.getInstance().inventoryPUPeachyTime = data['inventory_pu_peachytime'];
            if (data['total_exp'] != undefined) Data.getInstance().totalExp = data['total_exp'];else Data.getInstance().totalExp = 0;
  
            if (data['last_played'] != undefined) {
              var otherDate = new Date(data['last_played']);
              otherDate.setHours(0);
              otherDate.setMinutes(0);
              otherDate.setSeconds(0);
              otherDate.setMilliseconds(0);
              var curDate = new Date();
              curDate.setHours(0);
              curDate.setMinutes(0);
              curDate.setSeconds(0);
              curDate.setMilliseconds(0);
              this.needGenerateNewMission = otherDate < curDate;
              GameController.last_played = new Date().getTime();
            } else {
              GameController.last_played = new Date().getTime();
            }
  
            if (data['list_mission'] != undefined) {
              if (this.needGenerateNewMission) {
                MissionManager.getInstance().generateMission();
              } else {
                MissionManager.getInstance().loadMission(data['list_mission']);
              }
            } else {
              MissionManager.getInstance().generateMission();
            }
  
            if (GameController.RIG_ALWAYS_GENERATE_NEW_MISSION) MissionManager.getInstance().generateMission();
  
            if (GameController.TUTORIAL_STATE == 1) {
              Data.getInstance().bladeUsed = 0;
              Data.getInstance().bgUsed = 0;
            } else {
              if (data['blade_used'] != undefined) Data.getInstance().bladeUsed = data['blade_used'];
              if (data['bg_used'] != undefined) Data.getInstance().bgUsed = data['bg_used'];
            }
  
            if (data['blade_unlocked'] != undefined) {
              for (var i = 0; i < data['blade_unlocked'].length; i++) {
                if (i < Data.getInstance().unlockedBlade.length) {
                  Data.getInstance().unlockedBlade[i] = data['blade_unlocked'][i];
                } else {
                  Data.getInstance().unlockedBlade.push(data['blade_unlocked'][i]);
                }
              }
            }
  
            if (data['bg_unlocked'] != undefined) {
              for (var _i = 0; _i < data['bg_unlocked'].length; _i++) {
                if (_i < Data.getInstance().unlockedBG.length) {
                  Data.getInstance().unlockedBG[_i] = data['bg_unlocked'][_i];
                } else {
                  Data.getInstance().unlockedBG.push(data['bg_unlocked'][_i]);
                }
              }
            }
          };
  
          return Data;
        }(), _defineProperty(_class2, "Instance", void 0), _defineProperty(_class2, "DATA_FRUIT_FACT", [{
          ID: "FF001",
          icon: 0,
          text: "There are approximately 10,000 varieties of apples grown around the world."
        }, {
          ID: "FF002",
          icon: 0,
          text: "25% of an apple's volume is air. That's why they float!"
        }, {
          ID: "FF003",
          icon: 0,
          text: "Over 60 million tons of apples are grown worldwide annually."
        }, {
          ID: "FF004",
          icon: 1,
          text: "Bananas are one of the few fruits that ripen best off the plant."
        }, {
          ID: "FF005",
          icon: 1,
          text: "Bananas have no fat, cholesterol or sodium."
        }, {
          ID: "FF006",
          icon: 1,
          text: "Reindeer like to eat bananas."
        }, {
          ID: "FF007",
          icon: 2,
          text: "Fresh cherries become glazed cherries by replacing their water content with sugar."
        }, {
          ID: "FF008",
          icon: 2,
          text: "Apples, pears, cherries and strawberries are all members of the rose family."
        }, {
          ID: "FF009",
          icon: 3,
          text: "The coconut palm is sometimes called the 'tree of life'."
        }, {
          ID: "FF010",
          icon: 3,
          text: "There are more than 20 billion coconuts harvested each year!"
        }, {
          ID: "FF011",
          icon: 3,
          text: "The coconut is wrapped inside a hard brown shell called a husk."
        }, {
          ID: "FF012",
          icon: 4,
          text: "Dragon fruit can also be made into wine, fruit juice or jam."
        }, {
          ID: "FF013",
          icon: 4,
          text: "The dragon fruit plant only blooms at night."
        }, {
          ID: "FF014",
          icon: 4,
          text: "The dragon fruit is the leading fruit export of Vietnam."
        }, {
          ID: "FF015",
          icon: 5,
          text: "If you warm a lemon before squeezing, it will yield much more juice!"
        }, {
          ID: "FF016",
          icon: 5,
          text: "Lemons contain more sugar than strawberries."
        }, {
          ID: "FF017",
          icon: 5,
          text: "Lemon and salt can be used to treat rust spots, and to clean copper pots."
        }, {
          ID: "FF018",
          icon: 6,
          text: "Limes were fed to british sailors to prevent scurvy."
        }, {
          ID: "FF019",
          icon: 6,
          text: "Limes are free of fat, saturated fat, sodium and cholesterol."
        }, {
          ID: "FF020",
          icon: 6,
          text: "Like most citrus, limes do not freeze well."
        }, {
          ID: "FF021",
          icon: 7,
          text: "Mangoes have as much vitamin c as oranges."
        }, {
          ID: "FF022",
          icon: 7,
          text: "The mango tree grows only in sub-tropical climates."
        }, {
          ID: "FF023",
          icon: 7,
          text: "Chinese medical practitioners use mango to treat dysentery."
        }, {
          ID: "FF024",
          icon: 8,
          text: "Brazil is the largest producer of oranges in the world!"
        }, {
          ID: "FF025",
          icon: 8,
          text: "Orange trees were first grown in China."
        }, {
          ID: "FF026",
          icon: 8,
          text: "One orange supplies a full days vitamin c requirement."
        }, {
          ID: "FF027",
          icon: 9,
          text: "Passion fruit is sweetest when slightly wrinkled."
        }, {
          ID: "FF028",
          icon: 9,
          text: "Passion fruits were first grown in Brazil."
        }, {
          ID: "FF029",
          icon: 9,
          text: "Passion fruit is great for people with high blood pressure!"
        }, {
          ID: "FF030",
          icon: 10,
          text: "Peaches were once known as persian apples."
        }, {
          ID: "FF031",
          icon: 10,
          text: "In China, the peach is a symbol of longevity and good luck."
        }, {
          ID: "FF032",
          icon: 10,
          text: "The peach is a member of the rose family."
        }, {
          ID: "FF033",
          icon: 11,
          text: "Pear wood is hard and can be used to make furniture."
        }, {
          ID: "FF034",
          icon: 11,
          text: "Pears cause the fewest allergic reactions of all fruits."
        }, {
          ID: "FF035",
          icon: 11,
          text: "Most of the vitamin c in pears is found in the skin of the fruit."
        }, {
          ID: "FF036",
          icon: 12,
          text: "Unripe pineapples are toxic."
        }, {
          ID: "FF037",
          icon: 12,
          text: "Pineapples can weigh up to 20 pounds."
        }, {
          ID: "FF038",
          icon: 12,
          text: "The pineapple is originally native to brazil and paraguay."
        }, {
          ID: "FF039",
          icon: 13,
          text: "A plum's skin is well known for having a laxative effect."
        }, {
          ID: "FF040",
          icon: 13,
          text: "Plums are grown on every continent on earth (except antarctica)."
        }, {
          ID: "FF041",
          icon: 13,
          text: "Eating plums helps increase the absorption of iron into the body."
        }, {
          ID: "FF042",
          icon: 14,
          text: "Star fruits average only 30 calories! Eat up!"
        }, {
          ID: "FF043",
          icon: 14,
          text: "Star fruits are an excellent source of fiber!"
        }, {
          ID: "FF044",
          icon: 15,
          text: "The average strawberry has around 200 seeds."
        }, {
          ID: "FF045",
          icon: 15,
          text: "Strawberries were cultivated in ancient rome!"
        }, {
          ID: "FF046",
          icon: 16,
          text: "Watermelons are 92% water!"
        }, {
          ID: "FF047",
          icon: 16,
          text: "The largest watermelon ever grown was 350.5 pounds, or 159 kg!"
        }, {
          ID: "FF048",
          icon: 17,
          text: "Kiwi fruit contains actinidin which can be used to tenderize meat!"
        }, {
          ID: "FF049",
          icon: 17,
          text: "There are over 400 varieties of kiwi fruit in China."
        }, {
          ID: "FF050",
          icon: 17,
          text: "Kiwi fruit has almost twice the vitamin c of an orange."
        }]), _defineProperty(_class2, "DATA_COSTUME_BLADE", [{
          id: "BL001",
          icon: "Blade/BladeIconBasic/spriteFrame",
          name: "Basic Blade",
          prefab: "Blade/prefabs/TipBasicBlade",
          description: "The original, classic silver blade.",
          how_to_get: {
            type: 'default'
          }
        }, {
          id: "BL002",
          icon: "Blade/BladeIconShinyRed/spriteFrame",
          name: "Shiny Red",
          description: "A shiny, red blade.",
          prefab: "Blade/prefabs/TipShinyRed",
          how_to_get: {
            type: 'starfruit',
            value: 500
          }
        }, {
          id: "BL003",
          icon: "Blade/BladeIconViking/spriteFrame",
          name: "Viking Blade",
          description: "A mighty viking's blade, a hefty weapon for satisfying slicing.",
          prefab: "Blade/prefabs/TipVikingBlade",
          how_to_get: {
            type: 'starfruit',
            value: 800
          }
        }, {
          id: "BL004",
          icon: "Blade/BladeIconPiano/spriteFrame",
          name: "Piano Blade",
          prefab: "Blade/prefabs/TipPianoBlade",
          description: "Get in the groove with this harmonious blade!",
          how_to_get: {
            type: 'starfruit',
            value: 1000
          }
        }, {
          id: "BL005",
          icon: "Blade/BladeIconWater/spriteFrame",
          name: "Water Blade",
          prefab: "Blade/prefabs/TipWaterBlade",
          description: "Burst fruit open with this powerful water blade.",
          how_to_get: {
            type: 'starfruit',
            value: 2500
          }
        }, {
          id: "BL006",
          icon: "Blade/BladeIconBamboo/spriteFrame",
          name: "Bamboo Shoot",
          prefab: "Blade/prefabs/TipBambooBlade",
          description: "Made from the forest that Sensei grew up in!",
          how_to_get: {
            type: 'starfruit',
            value: 3000
          }
        }, {
          id: "BL007",
          icon: "Blade/BladeIconBondedRoses/spriteFrame",
          name: "Bonded Roses Blade",
          prefab: "Blade/prefabs/TipBondedRose",
          description: "Be a thorn in a side to fruit everywhere!",
          how_to_get: {
            type: 'starfruit',
            value: 5000
          }
        }, {
          id: "BL008",
          icon: "Blade/BladeIconCandyCane/spriteFrame",
          name: "Candy Cane Blade",
          prefab: "Blade/prefabs/TipCandyCaneBlade",
          description: "This cane isn't just for jolly old men.",
          how_to_get: {
            type: 'starfruit',
            value: 7500
          }
        }, {
          id: "BL009",
          icon: "Blade/BladeIconRainbow/spriteFrame",
          name: "Rainbow Blade",
          prefab: "Blade/prefabs/TipRainbowBlade",
          description: "It's so beautiful.",
          how_to_get: {
            type: 'starfruit',
            value: 10000
          }
        }, {
          id: "BL010",
          icon: "Blade/BladeIconHolly/spriteFrame",
          name: "Holly Blade",
          prefab: "Blade/prefabs/TipHollyBlade",
          description: "Deck the Dojo with boughs of Holly.",
          how_to_get: {
            type: 'starfruit',
            value: 12500
          }
        }, {
          id: "BL011",
          icon: "Blade/BladeIconPartyTime/spriteFrame",
          name: "Party Time",
          prefab: "Blade/prefabs/TipPartyTime",
          description: "It's not 1999, but we can party anyway.",
          how_to_get: {
            type: 'starfruit',
            value: 12500
          }
        }, {
          id: "BL012",
          icon: "Blade/BladeIconFirecracker/spriteFrame",
          name: "Firecracker Blade",
          prefab: "Blade/prefabs/TipFirecrackerBlade",
          description: "Be careful with this blade. It goes off with a bang!",
          how_to_get: {
            type: 'starfruit',
            value: 12500
          }
        }]), _defineProperty(_class2, "DATA_COSTUME_BACKGROUND", [{
          id: "DJ001",
          icon: "background/DojoIconBasic/spriteFrame",
          background: "background/Dojo_Basic/spriteFrame",
          name: "Basic Dojo",
          description: "A humble dojo but Sensei started here.",
          how_to_get: {
            type: 'default'
          }
        }, {
          id: "DJ002",
          icon: "background/DojoIconGreatWave/spriteFrame",
          background: "background/Dojo_GreatWave/spriteFrame",
          name: "Great Wave",
          description: "The famous great wave. A perfect backdrop for slicing fruit!",
          how_to_get: {
            type: 'starfruit',
            value: 2500
          }
        }, {
          id: "DJ003",
          icon: "background/DojoIconYinYang/spriteFrame",
          background: "background/Dojo_YinYang/spriteFrame",
          name: "Yin Yang",
          description: "Balance your body, soul and ninja spirit with yin yang!",
          how_to_get: {
            type: 'starfruit',
            value: 5000
          }
        }, {
          id: "DJ004",
          icon: "background/DojoIconCherryBlossom/spriteFrame",
          background: "background/Dojo_CherryBlossom/spriteFrame",
          name: "Cherry Blossom",
          description: "Let the flower viewing festival begin!",
          how_to_get: {
            type: 'starfruit',
            value: 7500
          }
        }, {
          id: "DJ005",
          icon: "background/DojoIconCloudySkies/spriteFrame",
          background: "background/Dojo_CloudySkies/spriteFrame",
          name: "Cloudy Skies",
          description: "Get some fresh air.",
          how_to_get: {
            type: 'starfruit',
            value: 10000
          }
        }]), _temp)) || _class));
  
        cclegacy._RF.pop();
      }
    };
  });
  
  System.register("chunks:///_virtual/SceneHomescreen.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './Instances.ts', './SFXManager.ts', './MissionManager.ts', './Data.ts', './LevelManager.ts', './GameController.ts', './AdsManager.ts'], function (exports) {
    'use strict';
  
    var _defineProperty, _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Label, screen, Vec3, UITransform, Animation, Component, Instances, SFXManager, MissionManager, Data, LevelManager, GameController, AdsManager;
  
    return {
      setters: [function (module) {
        _defineProperty = module.defineProperty;
        _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
        _inheritsLoose = module.inheritsLoose;
        _initializerDefineProperty = module.initializerDefineProperty;
        _assertThisInitialized = module.assertThisInitialized;
      }, function (module) {
        cclegacy = module.cclegacy;
        _decorator = module._decorator;
        Node = module.Node;
        Label = module.Label;
        screen = module.screen;
        Vec3 = module.Vec3;
        UITransform = module.UITransform;
        Animation = module.Animation;
        Component = module.Component;
      }, function (module) {
        Instances = module.default;
      }, function (module) {
        SFXManager = module.SFXManager;
      }, function (module) {
        MissionManager = module.MissionManager;
      }, function (module) {
        Data = module.Data;
      }, function (module) {
        LevelManager = module.LevelManager;
      }, function (module) {
        GameController = module.GameController;
      }, function (module) {
        AdsManager = module.AdsManager;
      }],
      execute: function () {
        var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _class3, _temp;
  
        cclegacy._RF.push({}, "19cfeEkEAtPR4ufZJYYgPzW", "SceneHomescreen", undefined);
  
        var ccclass = _decorator.ccclass,
            property = _decorator.property;
        var SceneHomescreen = exports('SceneHomescreen', (_dec = ccclass('SceneHomescreen'), _dec2 = property({
          type: Node
        }), _dec3 = property({
          type: Node
        }), _dec4 = property({
          type: Node
        }), _dec5 = property({
          type: Node
        }), _dec6 = property({
          type: Label
        }), _dec7 = property({
          type: Node
        }), _dec8 = property({
          type: Node
        }), _dec(_class = (_class2 = (_temp = _class3 = /*#__PURE__*/function (_Component) {
          _inheritsLoose(SceneHomescreen, _Component);
  
          function SceneHomescreen() {
            var _this;
  
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
  
            _this = _Component.call.apply(_Component, [this].concat(args)) || this;
  
            _initializerDefineProperty(_assertThisInitialized(_this), "textLevelAngka", _descriptor, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "xpBarFillTransparant", _descriptor2, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "xpBarFill", _descriptor3, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "tagGreenClaim", _descriptor4, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "textWithFriends", _descriptor5, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "nodeNotificationNewMission", _descriptor6, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "nodeClaimableMission", _descriptor7, _assertThisInitialized(_this));
  
            _defineProperty(_assertThisInitialized(_this), "holdInput", false);
  
            _defineProperty(_assertThisInitialized(_this), "index", 0);
  
            return _this;
          }
  
          var _proto = SceneHomescreen.prototype;
  
          _proto.onLoad = function onLoad() {
            console.log("HOMESCREEN LOADED");
  
            if (Instances.rotateScreen !== null && Instances.rotateScreen.correctOrientation) {
              AdsManager.showInterstitialAds(function () {});
            } // view.resizeWithBrowserSize(true);
            // view.setResizeCallback(()=>{
            //     let frame = screen.windowSize;
            //     if(frame.width > frame.height){
            //         view.setDesignResolutionSize(1280, 768, 4);
            //     }else{
            //         view.setDesignResolutionSize(768, 1280, 4);
            //     }
            // });
            // if(orientation.style.display != 'block') {
            //     AdsManager.showInterstitialAds(()=>{
            //         SceneLoading.getInstance().changeOrientation();
            //     });
            // } else {
            //     SceneLoading.getInstance().changeOrientation();
            // }
  
          };
  
          _proto.onEnable = function onEnable() {
            this.refresh();
          };
  
          _proto.refresh = function refresh() {
            this.nodeNotificationNewMission.active = false;
            this.nodeClaimableMission.active = false;
  
            if (MissionManager.getInstance().isAnyMissionClaimable()) {
              this.nodeClaimableMission.active = true;
            } else if (Data.getInstance().needGenerateNewMission) {
              this.nodeNotificationNewMission.active = true;
            }
  
            this.updateLevelBar();
            SceneHomescreen.listUserId = [];
            this.checkUnclaimedMissionReward(); //this is for fixing scaling on this game, the original scale does not look good in an iframe
  
            var frame = screen.windowSize;
            var uiAtasHome = this.node.getChildByPath("UI_atasHome");
  
            if (frame.width < 900) {
              uiAtasHome.getChildByName('PlayerInfo').setScale(new Vec3(0.75, 0.75, 0.75));
              uiAtasHome.getChildByName('title').setScale(new Vec3(0.7, 0.7, 0.7));
            }
  
            console.log('uiAtasHome', uiAtasHome);
          };
  
          _proto.updateLevelBar = function updateLevelBar() {
            var dataLevel = LevelManager.getInstance().getDataLevelFromTotalExp();
            this.textLevelAngka.getComponent(Label).string = "" + dataLevel.level;
            this.xpBarFillTransparant.getComponent(UITransform).width = dataLevel.curExp / dataLevel.totalExpToLevelUp * 400;
            this.xpBarFill.getComponent(UITransform).width = dataLevel.curExp / dataLevel.totalExpToLevelUp * 400;
          };
  
          _proto.start = function start() {};
  
          _proto.update = function update(deltaTime) {};
  
          _proto.checkUnclaimedMissionReward = function checkUnclaimedMissionReward() {
            var haveUnclaimedReward = false;
  
            for (var i = 0; i < MissionManager.getInstance().activeMission.length; i++) {
              var data = MissionManager.getInstance().activeMission[i];
              if (data.current >= data.target && !data.claimed) haveUnclaimedReward = true;
            }
  
            this.tagGreenClaim.active = haveUnclaimedReward;
          };
  
          _proto.clickButton = function clickButton(event, customdata) {
            var _this2 = this;
  
            SFXManager.getInstance().play(SFXManager.SFX_SELECT);
            if (this.holdInput) return;
            this.holdInput = true;
  
            var onFinish = function onFinish() {
              _this2.holdInput = false;
            };
  
            if (customdata == "mission") {
              GameController.getInstance().setHoldInput(true);
              if (Data.getInstance().needGenerateNewMission) Data.getInstance().needGenerateNewMission = false;
              var contMissionPopup = GameController.getInstance().mainCanvasOverlay.getChildByPath("container_missionsPopup");
              contMissionPopup.active = true;
              var anim = contMissionPopup.getComponent(Animation);
              anim.play("popupMissions_in");
              anim.once(Animation.EventType.FINISHED, function () {
                onFinish();
              });
            }
          };
  
          return SceneHomescreen;
        }(Component), _defineProperty(_class3, "listUserId", []), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "textLevelAngka", [_dec2], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "xpBarFillTransparant", [_dec3], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "xpBarFill", [_dec4], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "tagGreenClaim", [_dec5], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "textWithFriends", [_dec6], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "nodeNotificationNewMission", [_dec7], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "nodeClaimableMission", [_dec8], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        })), _class2)) || _class));
  
        cclegacy._RF.pop();
      }
    };
  });
  
  System.register("chunks:///_virtual/TextCombo.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './SFXManager.ts', './FruitManager.ts'], function (exports) {
    'use strict';
  
    var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _defineProperty, _createClass, cclegacy, _decorator, Material, Label, LabelOutline, Color, Animation, Component, SFXManager, FruitManager;
  
    return {
      setters: [function (module) {
        _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
        _inheritsLoose = module.inheritsLoose;
        _initializerDefineProperty = module.initializerDefineProperty;
        _assertThisInitialized = module.assertThisInitialized;
        _defineProperty = module.defineProperty;
        _createClass = module.createClass;
      }, function (module) {
        cclegacy = module.cclegacy;
        _decorator = module._decorator;
        Material = module.Material;
        Label = module.Label;
        LabelOutline = module.LabelOutline;
        Color = module.Color;
        Animation = module.Animation;
        Component = module.Component;
      }, function (module) {
        SFXManager = module.SFXManager;
      }, function (module) {
        FruitManager = module.FruitManager;
      }],
      execute: function () {
        var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp;
  
        cclegacy._RF.push({}, "1ce0eccLXdI8rzpVS2bTHgE", "TextCombo", undefined);
  
        var ccclass = _decorator.ccclass,
            property = _decorator.property;
        var TextCombo = exports('TextCombo', (_dec = ccclass('TextCombo'), _dec2 = property({
          type: [Material]
        }), _dec3 = property({
          type: [Material]
        }), _dec4 = property({
          type: [Material]
        }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
          _inheritsLoose(TextCombo, _Component);
  
          function TextCombo() {
            var _this;
  
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
  
            _this = _Component.call.apply(_Component, [this].concat(args)) || this;
  
            _initializerDefineProperty(_assertThisInitialized(_this), "topMaterial", _descriptor, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "middleMaterial", _descriptor2, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "bottomMaterial", _descriptor3, _assertThisInitialized(_this));
  
            _defineProperty(_assertThisInitialized(_this), "_timer", 0);
  
            return _this;
          }
  
          var _proto = TextCombo.prototype;
  
          _proto.onLoad = function onLoad() {};
  
          _proto.start = function start() {};
  
          _proto.update = function update(deltaTime) {
            if (this.node.active) {
              this.timer -= deltaTime;
  
              if (this.timer < 0) {
                this.node.active = false;
                FruitManager.getInstance().putTextFruitcombo(this.node);
              }
            }
          };
  
          _proto.resetTimer = function resetTimer(timer) {
            this.timer = timer;
          };
  
          _proto.updateText = function updateText(combo) {
            this.topLabel = this.node.getChildByPath("top_text").getComponent(Label);
            this.middleLabel = this.node.getChildByPath("middle_text").getComponent(Label);
            this.bottomLabel = this.node.getChildByPath("bottom_text").getComponent(Label);
            this.topLabel.string = combo + " FRUIT";
            this.bottomLabel.string = "+ " + combo;
            var sfxID = combo - 3 + 22;
  
            if (sfxID > 29) {
              sfxID = 29;
            }
  
            SFXManager.getInstance().play(sfxID);
  
            if (combo == 3) {
              this.topLabel.customMaterial = this.topMaterial[0];
              this.middleLabel.customMaterial = this.middleMaterial[0];
              this.bottomLabel.customMaterial = this.bottomMaterial[0];
              this.node.getChildByPath("top_text").getComponent(LabelOutline).color = new Color("#A88700");
              this.node.getChildByPath("middle_text").getComponent(LabelOutline).color = new Color("#A88700");
              this.node.getChildByPath("bottom_text").getComponent(LabelOutline).color = new Color("#A88700");
            } else if (combo == 4) {
              this.topLabel.customMaterial = this.topMaterial[1];
              this.middleLabel.customMaterial = this.middleMaterial[1];
              this.bottomLabel.customMaterial = this.bottomMaterial[1];
              this.node.getChildByPath("top_text").getComponent(LabelOutline).color = new Color("#B96800");
              this.node.getChildByPath("middle_text").getComponent(LabelOutline).color = new Color("#B96800");
              this.node.getChildByPath("bottom_text").getComponent(LabelOutline).color = new Color("#B96800");
            } else if (combo >= 5) {
              this.topLabel.customMaterial = this.topMaterial[2];
              this.middleLabel.customMaterial = this.middleMaterial[2];
              this.bottomLabel.customMaterial = this.bottomMaterial[2];
              this.node.getChildByPath("top_text").getComponent(LabelOutline).color = new Color("#A82806");
              this.node.getChildByPath("middle_text").getComponent(LabelOutline).color = new Color("#A82806");
              this.node.getChildByPath("bottom_text").getComponent(LabelOutline).color = new Color("#A82806");
            }
  
            this.node.getComponent(Animation).play("combo_in_out");
          };
  
          _createClass(TextCombo, [{
            key: "timer",
            get: function get() {
              return this._timer;
            },
            set: function set(value) {
              this._timer = value;
            }
          }]);
  
          return TextCombo;
        }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "topMaterial", [_dec2], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function initializer() {
            return [];
          }
        }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "middleMaterial", [_dec3], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function initializer() {
            return [];
          }
        }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "bottomMaterial", [_dec4], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function initializer() {
            return [];
          }
        })), _class2)) || _class));
  
        cclegacy._RF.pop();
      }
    };
  });
  
  System.register("chunks:///_virtual/ShakeNode.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
    'use strict';
  
    var _inheritsLoose, _defineProperty, _assertThisInitialized, cclegacy, _decorator, Vec3, tween, Component;
  
    return {
      setters: [function (module) {
        _inheritsLoose = module.inheritsLoose;
        _defineProperty = module.defineProperty;
        _assertThisInitialized = module.assertThisInitialized;
      }, function (module) {
        cclegacy = module.cclegacy;
        _decorator = module._decorator;
        Vec3 = module.Vec3;
        tween = module.tween;
        Component = module.Component;
      }],
      execute: function () {
        var _dec, _class, _temp;
  
        cclegacy._RF.push({}, "1d9f79OMKhJuLrGSkhSzGGB", "ShakeNode", undefined);
  
        var ccclass = _decorator.ccclass,
            property = _decorator.property;
        var ShakeNode = exports('ShakeNode', (_dec = ccclass('ShakeNode'), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
          _inheritsLoose(ShakeNode, _Component);
  
          function ShakeNode() {
            var _this;
  
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
  
            _this = _Component.call.apply(_Component, [this].concat(args)) || this;
  
            _defineProperty(_assertThisInitialized(_this), "defaultPosition", new Vec3(0, 0, 0));
  
            _defineProperty(_assertThisInitialized(_this), "shakeTween", null);
  
            return _this;
          }
  
          var _proto = ShakeNode.prototype;
  
          _proto.onLoad = function onLoad() {
            this.defaultPosition = this.node.position.clone();
          };
  
          _proto.start = function start() {};
  
          _proto.shakeEffect = function shakeEffect() {
            if (this.shakeTween != null) this.shakeTween.stop();
            this.shakeTween = tween(this.node).to(0.02, {
              position: new Vec3(5 / 10, 7 / 10, this.node.position.z)
            }).to(0.02, {
              position: new Vec3(-6 / 10, 7 / 10, this.node.position.z)
            }).to(0.02, {
              position: new Vec3(-13 / 10, 3 / 10, this.node.position.z)
            }).to(0.02, {
              position: new Vec3(3 / 10, -6 / 10, this.node.position.z)
            }).to(0.02, {
              position: new Vec3(-5 / 10, 5 / 10, this.node.position.z)
            }).to(0.02, {
              position: new Vec3(2 / 10, -8 / 10, this.node.position.z)
            }).to(0.02, {
              position: new Vec3(-8 / 10, -10 / 10, this.node.position.z)
            }).to(0.02, {
              position: new Vec3(3 / 10, 10 / 10, this.node.position.z)
            }).to(0.02, {
              position: new Vec3(0, 0, this.node.position.z)
            }).start();
          };
  
          _proto.shakeEffect2 = function shakeEffect2(multiplier, defaultPosition) {
            if (this.shakeTween != null) this.shakeTween.stop();
            this.shakeTween = tween(this.node).by(0.01, {
              position: new Vec3(0.5 * multiplier, 0.7 * multiplier, 0)
            }).by(0.01, {
              position: new Vec3(-0.5 * multiplier, -0.7 * multiplier, 0)
            }).by(0.01, {
              position: new Vec3(0.6 * multiplier, 0.7 * multiplier, 0)
            }).by(0.01, {
              position: new Vec3(-0.6 * multiplier, -0.7 * multiplier, 0)
            }).by(0.01, {
              position: new Vec3(-0.3 * multiplier, 0.3 * multiplier, 0)
            }).by(0.01, {
              position: new Vec3(0.3 * multiplier, -0.3 * multiplier, 0)
            }).by(0.01, {
              position: new Vec3(0.3 * multiplier, -0.6 * multiplier, 0)
            }).by(0.01, {
              position: new Vec3(-0.3 * multiplier, 0.6 * multiplier, 0)
            }).by(0.01, {
              position: new Vec3(-0.5 * multiplier, 0.5 * multiplier, 0)
            }).by(0.01, {
              position: new Vec3(0.5 * multiplier, -0.5 * multiplier, 0)
            }).by(0.01, {
              position: new Vec3(0.2 * multiplier, -0.8 * multiplier, 0)
            }).by(0.01, {
              position: new Vec3(-0.2 * multiplier, 0.8 * multiplier, 0)
            }).by(0.01, {
              position: new Vec3(-0.8 * multiplier, -0.1 * multiplier, 0)
            }).by(0.01, {
              position: new Vec3(0.8 * multiplier, 0.1 * multiplier, 0)
            }).by(0.01, {
              position: new Vec3(0.3 * multiplier, 0.1 * multiplier, 0)
            }).by(0.01, {
              position: new Vec3(-0.1 * multiplier, -0.1 * multiplier, 0)
            }).to(0.01, {
              position: defaultPosition
            }).start();
          };
  
          return ShakeNode;
        }(Component), _temp)) || _class));
  
        cclegacy._RF.pop();
      }
    };
  });
  
  System.register("chunks:///_virtual/HalfFruit.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './FruitManager.ts'], function (exports) {
    'use strict';
  
    var _inheritsLoose, _defineProperty, _assertThisInitialized, cclegacy, _decorator, Vec3, Component, FruitManager;
  
    return {
      setters: [function (module) {
        _inheritsLoose = module.inheritsLoose;
        _defineProperty = module.defineProperty;
        _assertThisInitialized = module.assertThisInitialized;
      }, function (module) {
        cclegacy = module.cclegacy;
        _decorator = module._decorator;
        Vec3 = module.Vec3;
        Component = module.Component;
      }, function (module) {
        FruitManager = module.FruitManager;
      }],
      execute: function () {
        var _dec, _class, _temp;
  
        cclegacy._RF.push({}, "2905aHYljFEkaWSnI7TcP1+", "HalfFruit", undefined);
  
        var ccclass = _decorator.ccclass,
            property = _decorator.property;
        var HalfFruit = exports('HalfFruit', (_dec = ccclass('HalfFruit'), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
          _inheritsLoose(HalfFruit, _Component);
  
          function HalfFruit() {
            var _this;
  
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
  
            _this = _Component.call.apply(_Component, [this].concat(args)) || this;
  
            _defineProperty(_assertThisInitialized(_this), "particleTrail", null);
  
            _defineProperty(_assertThisInitialized(_this), "timer", 0);
  
            return _this;
          }
  
          var _proto = HalfFruit.prototype;
  
          _proto.start = function start() {};
  
          _proto.update = function update(deltaTime) {
            if (this.timer > 0 && !FruitManager.HOLD_ALL_HALF_SCHEDULER) {
              this.timer -= deltaTime;
  
              if (this.timer < 0) {
                this.timer = 0;
                this.hideEverything();
              }
            }
          };
  
          _proto.hideEverything = function hideEverything() {
            this.node.setPosition(new Vec3(0, -200, 0));
  
            if (this.particleTrail != null) {
              this.particleTrail.parent = null;
              this.particleTrail.active = false;
              FruitManager.getInstance().putCriticalTrail(this.particleTrail);
              this.particleTrail = null;
            }
          };
  
          _proto.reset = function reset(trail) {
            this.particleTrail = trail;
            this.timer = 2;
          };
  
          return HalfFruit;
        }(Component), _temp)) || _class));
  
        cclegacy._RF.pop();
      }
    };
  });
  
  System.register("chunks:///_virtual/Instances.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
    'use strict';
  
    var _defineProperty, cclegacy;
  
    return {
      setters: [function (module) {
        _defineProperty = module.defineProperty;
      }, function (module) {
        cclegacy = module.cclegacy;
      }],
      execute: function () {
        cclegacy._RF.push({}, "29eb8lksjBORp0iiOPXDufU", "Instances", undefined);
  
        var Instances = exports('default', function Instances() {});
  
        _defineProperty(Instances, "rotateScreen", null);
  
        cclegacy._RF.pop();
      }
    };
  });
  
  System.register("chunks:///_virtual/Jiblet.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './FruitManager.ts'], function (exports) {
    'use strict';
  
    var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _defineProperty, cclegacy, _decorator, Prefab, SpriteFrame, instantiate, find, randomRangeInt, Sprite, Vec3, tween, Color, Component, FruitManager;
  
    return {
      setters: [function (module) {
        _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
        _inheritsLoose = module.inheritsLoose;
        _initializerDefineProperty = module.initializerDefineProperty;
        _assertThisInitialized = module.assertThisInitialized;
        _defineProperty = module.defineProperty;
      }, function (module) {
        cclegacy = module.cclegacy;
        _decorator = module._decorator;
        Prefab = module.Prefab;
        SpriteFrame = module.SpriteFrame;
        instantiate = module.instantiate;
        find = module.find;
        randomRangeInt = module.randomRangeInt;
        Sprite = module.Sprite;
        Vec3 = module.Vec3;
        tween = module.tween;
        Color = module.Color;
        Component = module.Component;
      }, function (module) {
        FruitManager = module.FruitManager;
      }],
      execute: function () {
        var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp;
  
        cclegacy._RF.push({}, "34e7egMYmBBQrIUNzB/xGOK", "Jiblet", undefined);
  
        var ccclass = _decorator.ccclass,
            property = _decorator.property;
        var Jiblet = exports('Jiblet', (_dec = ccclass('Jiblet'), _dec2 = property({
          type: Prefab,
          displayName: "Splat"
        }), _dec3 = property({
          type: SpriteFrame,
          displayName: "SplatSpriteFrame"
        }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
          _inheritsLoose(Jiblet, _Component);
  
          function Jiblet() {
            var _this;
  
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
  
            _this = _Component.call.apply(_Component, [this].concat(args)) || this;
  
            _initializerDefineProperty(_assertThisInitialized(_this), "prefabSplat", _descriptor, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "splatSpriteFrame", _descriptor2, _assertThisInitialized(_this));
  
            _defineProperty(_assertThisInitialized(_this), "poolSplat", []);
  
            _defineProperty(_assertThisInitialized(_this), "timerToSpawn", 0);
  
            return _this;
          }
  
          var _proto = Jiblet.prototype;
  
          _proto.onEnable = function onEnable() {
            this.timerToSpawn = 0;
          };
  
          _proto.start = function start() {};
  
          _proto.update = function update(deltaTime) {
            if (!this.node.active) return;
            this.timerToSpawn -= deltaTime;
  
            if (this.timerToSpawn <= 0) {
              this.spawnSplat();
              this.timerToSpawn += 0.07;
            }
          };
  
          _proto.getSplat = function getSplat() {
            var res;
  
            if (this.poolSplat.length > 0) {
              res = this.poolSplat.pop();
            } else {
              res = instantiate(this.prefabSplat);
            }
  
            return res;
          };
  
          _proto.spawnSplat = function spawnSplat() {
            var _this2 = this;
  
            var splat = this.getSplat();
            splat.setParent(find("CanvasBG/DojoBG/splatEffect"));
            var posSplat = FruitManager.getInstance().convertWorldToUI(this.node.position.clone());
            var duration = 1;
            var delayDuration = randomRangeInt(18, 25) / 10;
            splat.getComponentInChildren(Sprite).spriteFrame = this.splatSpriteFrame;
            splat.setScale(new Vec3(0.7, 0.7, 1));
            splat.setRotationFromEuler(0, 0, randomRangeInt(0, 361));
            tween(splat.getChildByPath("assets")).delay(delayDuration).by(duration, {
              scale: new Vec3(0, 0.12, 0)
            }).start();
            var newScale = randomRangeInt(6, 11) / 10;
            splat.getChildByPath("assets").scale = new Vec3(newScale, newScale, newScale);
            splat.getComponentInChildren(Sprite).color = new Color("#c80025");
            posSplat.x += randomRangeInt(-15, 16);
            posSplat.y += randomRangeInt(-15, 16);
            splat.setPosition(posSplat);
            splat.active = true;
            splat.getComponent(Sprite).color = new Color(255, 255, 255, 255);
            tween(splat).delay(delayDuration).by(duration, {
              position: new Vec3(0, randomRangeInt(-10, -5) * 2, 0)
            }).start();
            tween(splat.getComponent(Sprite)).delay(delayDuration).to(duration, {
              color: new Color(255, 255, 255, 0)
            }).call(function () {
              splat.active = false;
  
              _this2.poolSplat.push(splat);
            }).start();
          };
  
          return Jiblet;
        }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "prefabSplat", [_dec2], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "splatSpriteFrame", [_dec3], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        })), _class2)) || _class));
  
        cclegacy._RF.pop();
      }
    };
  });
  
  System.register("chunks:///_virtual/BladeTipWithLineRenderer.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
    'use strict';
  
    var _inheritsLoose, cclegacy, _decorator, Component;
  
    return {
      setters: [function (module) {
        _inheritsLoose = module.inheritsLoose;
      }, function (module) {
        cclegacy = module.cclegacy;
        _decorator = module._decorator;
        Component = module.Component;
      }],
      execute: function () {
        var _dec, _class;
  
        cclegacy._RF.push({}, "374d173SU1O5ZRreZj2ihLR", "BladeTipWithLineRenderer", undefined);
  
        var ccclass = _decorator.ccclass,
            property = _decorator.property;
        var BladeTipWithLineRenderer = exports('BladeTipWithLineRenderer', (_dec = ccclass('BladeTipWithLineRenderer'), _dec(_class = /*#__PURE__*/function (_Component) {
          _inheritsLoose(BladeTipWithLineRenderer, _Component);
  
          function BladeTipWithLineRenderer() {
            return _Component.apply(this, arguments) || this;
          }
  
          var _proto = BladeTipWithLineRenderer.prototype;
  
          _proto.start = function start() {};
  
          _proto.update = function update(deltaTime) {};
  
          return BladeTipWithLineRenderer;
        }(Component)) || _class));
  
        cclegacy._RF.pop();
      }
    };
  });
  
  System.register("chunks:///_virtual/GameplayLeaderboard.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './GameplayLeaderboardLabel.ts', './GameController.ts'], function (exports) {
    'use strict';
  
    var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Component, GameplayLeaderboardLabel, GameController;
  
    return {
      setters: [function (module) {
        _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
        _inheritsLoose = module.inheritsLoose;
        _initializerDefineProperty = module.initializerDefineProperty;
        _assertThisInitialized = module.assertThisInitialized;
      }, function (module) {
        cclegacy = module.cclegacy;
        _decorator = module._decorator;
        Node = module.Node;
        Component = module.Component;
      }, function (module) {
        GameplayLeaderboardLabel = module.GameplayLeaderboardLabel;
      }, function (module) {
        GameController = module.GameController;
      }],
      execute: function () {
        var _dec, _dec2, _class, _class2, _descriptor, _temp;
  
        cclegacy._RF.push({}, "37ef5WoF5dC9oZA/ECHwG5h", "GameplayLeaderboard", undefined);
  
        var ccclass = _decorator.ccclass,
            property = _decorator.property;
        var GameplayLeaderboard = exports('GameplayLeaderboard', (_dec = ccclass('GameplayLeaderboard'), _dec2 = property({
          type: [Node]
        }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
          _inheritsLoose(GameplayLeaderboard, _Component);
  
          function GameplayLeaderboard() {
            var _this;
  
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
  
            _this = _Component.call.apply(_Component, [this].concat(args)) || this;
  
            _initializerDefineProperty(_assertThisInitialized(_this), "labelRank", _descriptor, _assertThisInitialized(_this));
  
            return _this;
          }
  
          var _proto = GameplayLeaderboard.prototype;
  
          _proto.start = function start() {};
  
          _proto.resetForGameplay = function resetForGameplay() {
            this.refresh();
          };
  
          _proto.refresh = function refresh() {
            var labelPlayer = this.labelRank[0].getComponent(GameplayLeaderboardLabel);
            labelPlayer.setAsPlayer();
            labelPlayer.setBestScore(GameController.getInstance().getBestScore());
            labelPlayer.setScore(GameController.getInstance().score);
          };
  
          return GameplayLeaderboard;
        }(Component), _temp), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "labelRank", [_dec2], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function initializer() {
            return [];
          }
        }), _class2)) || _class));
  
        cclegacy._RF.pop();
      }
    };
  });
  
  System.register("chunks:///_virtual/LevelManager.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './Data.ts', './GameController.ts'], function (exports) {
    'use strict';
  
    var _defineProperty, cclegacy, _decorator, Data, GameController;
  
    return {
      setters: [function (module) {
        _defineProperty = module.defineProperty;
      }, function (module) {
        cclegacy = module.cclegacy;
        _decorator = module._decorator;
      }, function (module) {
        Data = module.Data;
      }, function (module) {
        GameController = module.GameController;
      }],
      execute: function () {
        var _dec, _class, _class2, _temp;
  
        cclegacy._RF.push({}, "3a079XZw7tCv4MMwku3WT5F", "LevelManager", undefined);
  
        var ccclass = _decorator.ccclass,
            property = _decorator.property;
        var LevelManager = exports('LevelManager', (_dec = ccclass('LevelManager'), _dec(_class = (_temp = _class2 = /*#__PURE__*/function () {
          function LevelManager() {
            _defineProperty(this, "levelCap", 25);
  
            _defineProperty(this, "dataExp", [0, 50, 180, 200, 230, 280, 380, 480, 580, 680, 780, 880, 980, 1080, 1180, 1280, 1380, 1480, 1580, 1680, 1780, 1880, 1980, 2080, 2180, 2280, 2380, 2480, 2580, 2680, 2780, 2880, 2980, 3080, 3180, 3280, 3380, 3480, 3580, 3680, 3780, 3880, 3980, 4080, 4180, 4280, 4380, 4480, 4580, 4680, 4780, 4880, 4980, 5080, 5180, 5280, 5380, 5480, 5580, 5680, 5780, 5880, 5980, 6080, 6180, 6280, 6380, 6480, 6580, 6680, 6780, 6880, 6980, 7080, 7180, 7280, 7380, 7480, 7580, 7680, 7780, 7880, 7980, 8080, 8180, 8280, 8380, 8480, 8580, 8680, 8780, 8980, 9080, 9180, 9280, 9380, 9480, 9580, 9680, 10000]);
  
            _defineProperty(this, "levelReward", [{
              level: 1,
              reward: null,
              amount: 0
            }, {
              level: 2,
              reward: "Bomb Deflect",
              amount: 1
            }, {
              level: 3,
              reward: "Berry Blast",
              amount: 1
            }, {
              level: 4,
              reward: "Peachy Time",
              amount: 1
            }, {
              level: 5,
              reward: "Bomb Deflect",
              amount: 2
            }, {
              level: 6,
              reward: "Berry Blast",
              amount: 2
            }, {
              level: 7,
              reward: "Peachy Time",
              amount: 2
            }, {
              level: 8,
              reward: "Bomb Deflect",
              amount: 2
            }, {
              level: 9,
              reward: "Berry Blast",
              amount: 2
            }, {
              level: 10,
              reward: "Peachy Time",
              amount: 2
            }, {
              level: 11,
              reward: "Bomb Deflect",
              amount: 2
            }, {
              level: 12,
              reward: "Berry Blast",
              amount: 2
            }, {
              level: 13,
              reward: "Peachy Time",
              amount: 2
            }, {
              level: 14,
              reward: "Bomb Deflect",
              amount: 3
            }, {
              level: 15,
              reward: "Berry Blast",
              amount: 3
            }, {
              level: 16,
              reward: "Peachy Time",
              amount: 3
            }, {
              level: 17,
              reward: "Bomb Deflect",
              amount: 3
            }, {
              level: 18,
              reward: "Berry Blast",
              amount: 3
            }, {
              level: 19,
              reward: "Peachy Time",
              amount: 3
            }, {
              level: 20,
              reward: "Bomb Deflect",
              amount: 3
            }, {
              level: 21,
              reward: "Berry Blast",
              amount: 3
            }, {
              level: 22,
              reward: "Peachy Time",
              amount: 3
            }, {
              level: 23,
              reward: "Bomb Deflect",
              amount: 3
            }, {
              level: 24,
              reward: "Berry Blast",
              amount: 3
            }, {
              level: 25,
              reward: "Peachy Time",
              amount: 3
            }]);
          }
  
          LevelManager.getInstance = function getInstance() {
            if (LevelManager.Instance == null) LevelManager.Instance = new LevelManager();
            return LevelManager.Instance;
          };
  
          var _proto = LevelManager.prototype;
  
          _proto.getLevelReward = function getLevelReward(level) {
            return this.levelReward[level - 1];
          };
  
          _proto.calculateExp = function calculateExp(score, rule) {
            if (GameController.RIG_EXP_RECEIVED > 0) return GameController.RIG_EXP_RECEIVED;
            var m_curve = rule.curve;
            var m_base = rule.base;
            var m_YShift = rule.yShift;
            return Math.max(0, Math.round(Data.getInstance().logBase(score * m_curve, m_base) * m_YShift));
          };
  
          _proto.getDataLevelFromTotalExp = function getDataLevelFromTotalExp() {
            var level = 1;
            var nextExp = 0;
  
            for (var i = 0; i < this.dataExp.length; i++) {
              nextExp += this.dataExp[i];
  
              if (Data.getInstance().totalExp >= nextExp) {
                level = i + 1;
              } else {
                break;
              }
            }
  
            var curExp = Data.getInstance().totalExp;
            var totalExpToLevelUp = -1;
  
            if (level < this.dataExp.length) {
              totalExpToLevelUp = this.dataExp[level];
              curExp = totalExpToLevelUp - (nextExp - Data.getInstance().totalExp);
            } else {
              level = this.levelCap;
              totalExpToLevelUp = 1;
              curExp = 1;
            }
  
            return {
              level: level,
              curExp: curExp,
              totalExpToLevelUp: totalExpToLevelUp
            };
          };
  
          return LevelManager;
        }(), _defineProperty(_class2, "Instance", null), _defineProperty(_class2, "ARCADE_EXP_CALC_RULE", {
          base: 1.1,
          yShift: 1.6,
          curve: 0.9
        }), _defineProperty(_class2, "CLASSIC_EXP_CALC_RULE", {
          base: 1.1,
          yShift: 2.25,
          curve: 1.01
        }), _defineProperty(_class2, "ZEN_EXP_CALC_RULE", {
          base: 1.1,
          yShift: 2,
          curve: 0.8
        }), _temp)) || _class));
  
        cclegacy._RF.pop();
      }
    };
  });
  
  System.register("chunks:///_virtual/BladeData.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
    'use strict';
  
    var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _defineProperty, cclegacy, _decorator, Prefab, AudioClip, Component;
  
    return {
      setters: [function (module) {
        _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
        _inheritsLoose = module.inheritsLoose;
        _initializerDefineProperty = module.initializerDefineProperty;
        _assertThisInitialized = module.assertThisInitialized;
        _defineProperty = module.defineProperty;
      }, function (module) {
        cclegacy = module.cclegacy;
        _decorator = module._decorator;
        Prefab = module.Prefab;
        AudioClip = module.AudioClip;
        Component = module.Component;
      }],
      execute: function () {
        var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp;
  
        cclegacy._RF.push({}, "3bda4vN6YZNR6VR8krEOY8O", "BladeData", undefined);
  
        var ccclass = _decorator.ccclass,
            property = _decorator.property;
        var BladeData = exports('BladeData', (_dec = ccclass('BladeData'), _dec2 = property({
          type: Prefab
        }), _dec3 = property({
          type: [Prefab]
        }), _dec4 = property({
          type: [AudioClip]
        }), _dec5 = property({
          type: [AudioClip]
        }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
          _inheritsLoose(BladeData, _Component);
  
          function BladeData() {
            var _this;
  
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
  
            _this = _Component.call.apply(_Component, [this].concat(args)) || this;
  
            _initializerDefineProperty(_assertThisInitialized(_this), "trailPrefab", _descriptor, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "particlesPrefab", _descriptor2, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "bladeSFX", _descriptor3, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "sliceSFX", _descriptor4, _assertThisInitialized(_this));
  
            _defineProperty(_assertThisInitialized(_this), "trailObject", void 0);
  
            _defineProperty(_assertThisInitialized(_this), "particlesObject", []);
  
            return _this;
          }
  
          var _proto = BladeData.prototype;
  
          _proto.start = function start() {};
  
          return BladeData;
        }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "trailPrefab", [_dec2], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "particlesPrefab", [_dec3], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function initializer() {
            return [];
          }
        }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "bladeSFX", [_dec4], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function initializer() {
            return [];
          }
        }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "sliceSFX", [_dec5], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function initializer() {
            return [];
          }
        })), _class2)) || _class));
  
        cclegacy._RF.pop();
      }
    };
  });
  
  System.register("chunks:///_virtual/ScenePopupPurchasePU.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './SFXManager.ts', './Data.ts', './GameController.ts'], function (exports) {
    'use strict';
  
    var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _defineProperty, cclegacy, _decorator, Material, Label, Sprite, Button, LabelOutline, Color, Component, SFXManager, Data, GameController;
  
    return {
      setters: [function (module) {
        _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
        _inheritsLoose = module.inheritsLoose;
        _initializerDefineProperty = module.initializerDefineProperty;
        _assertThisInitialized = module.assertThisInitialized;
        _defineProperty = module.defineProperty;
      }, function (module) {
        cclegacy = module.cclegacy;
        _decorator = module._decorator;
        Material = module.Material;
        Label = module.Label;
        Sprite = module.Sprite;
        Button = module.Button;
        LabelOutline = module.LabelOutline;
        Color = module.Color;
        Component = module.Component;
      }, function (module) {
        SFXManager = module.SFXManager;
      }, function (module) {
        Data = module.Data;
      }, function (module) {
        GameController = module.GameController;
      }],
      execute: function () {
        var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp;
  
        cclegacy._RF.push({}, "3f1d5S6BcFPt47lc32Lcgq0", "ScenePopupPurchasePU", undefined);
  
        var ccclass = _decorator.ccclass,
            property = _decorator.property;
        var ScenePopupPurchasePU = exports('ScenePopupPurchasePU', (_dec = ccclass('ScenePopupPurchasePU'), _dec2 = property({
          type: Material
        }), _dec3 = property({
          type: Material
        }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
          _inheritsLoose(ScenePopupPurchasePU, _Component);
  
          function ScenePopupPurchasePU() {
            var _this;
  
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
  
            _this = _Component.call.apply(_Component, [this].concat(args)) || this;
  
            _initializerDefineProperty(_assertThisInitialized(_this), "labellGreenMaterial", _descriptor, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "labellGreyMaterial", _descriptor2, _assertThisInitialized(_this));
  
            _defineProperty(_assertThisInitialized(_this), "powerUpType", "");
  
            _defineProperty(_assertThisInitialized(_this), "holdInput", false);
  
            _defineProperty(_assertThisInitialized(_this), "onBuy", function () {});
  
            return _this;
          }
  
          var _proto = ScenePopupPurchasePU.prototype;
  
          _proto.onEnable = function onEnable() {
            this.holdInput = false;
            this.node.getChildByPath("StarfruitLabel/text_starfruitTop").getComponent(Label).string = GameController.getInstance().formatNumber(parseInt(Data.getInstance().starFruit.toFixed(0)));
            var enoughCurrency = Data.getInstance().starFruit >= 150;
            this.node.getChildByPath("ScrollPurchase/mask/ButtonPurchase").getComponent(Sprite).grayscale = !enoughCurrency;
            this.node.getChildByPath("ScrollPurchase/mask/ButtonPurchase").getComponent(Button).interactable = enoughCurrency;
            this.node.getChildByPath("ScrollPurchase/mask/ButtonPurchase/starfruitBonusLayout/starfruitBonus").getComponent(Sprite).grayscale = !enoughCurrency;
            this.node.getChildByPath("ScrollPurchase/mask/ButtonPurchase/starfruitBonusLayout/text_starfruitBonus").getComponent(Label).material = enoughCurrency ? this.labellGreenMaterial : this.labellGreyMaterial;
            this.node.getChildByPath("ScrollPurchase/mask/ButtonPurchase/starfruitBonusLayout/text_starfruitBonus").getComponent(LabelOutline).color = enoughCurrency ? new Color(51, 78, 0) : new Color(104, 104, 104);
          };
  
          _proto.start = function start() {};
  
          _proto.setPowerUp = function setPowerUp(powerUpType) {
            this.powerUpType = powerUpType;
            this.node.getChildByPath("ScrollPurchase/mask/IconPowerup/BeryBlast").active = powerUpType == "berryblast";
            this.node.getChildByPath("ScrollPurchase/mask/IconPowerup/BombDeflect").active = powerUpType == "deflect";
            this.node.getChildByPath("ScrollPurchase/mask/IconPowerup/PeachyTime").active = powerUpType == "peachtime";
          };
  
          _proto.buttonCloseClicked = function buttonCloseClicked() {
            if (this.holdInput) return;
            SFXManager.getInstance().play(SFXManager.SFX_SELECT);
            this.holdInput = true;
            GameController.getInstance().showPopupPurchasePowerUp(false);
            if (this.powerUpType == "berryblast") ;else if (this.powerUpType == "deflect") ;else if (this.powerUpType == "peachtime") ;
          };
  
          _proto.buttonBuyClicked = function buttonBuyClicked() {
            if (this.holdInput) return;
            SFXManager.getInstance().play(SFXManager.SFX_SELECT);
            this.holdInput = true;
            Data.getInstance().starFruit -= 150;
            this.onBuy();
            GameController.getInstance().showPopupPurchasePowerUp(false);
            if (this.powerUpType == "berryblast") ;else if (this.powerUpType == "deflect") ;else if (this.powerUpType == "peachtime") ;
          };
  
          _proto.setOnBuy = function setOnBuy(callback) {
            this.onBuy = callback;
          };
  
          return ScenePopupPurchasePU;
        }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "labellGreenMaterial", [_dec2], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "labellGreyMaterial", [_dec3], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        })), _class2)) || _class));
  
        cclegacy._RF.pop();
      }
    };
  });
  
  System.register("chunks:///_virtual/ScenePopupInfoPowerup.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './SFXManager.ts', './GameController.ts'], function (exports) {
    'use strict';
  
    var _inheritsLoose, _defineProperty, _assertThisInitialized, cclegacy, _decorator, Component, SFXManager, GameController;
  
    return {
      setters: [function (module) {
        _inheritsLoose = module.inheritsLoose;
        _defineProperty = module.defineProperty;
        _assertThisInitialized = module.assertThisInitialized;
      }, function (module) {
        cclegacy = module.cclegacy;
        _decorator = module._decorator;
        Component = module.Component;
      }, function (module) {
        SFXManager = module.SFXManager;
      }, function (module) {
        GameController = module.GameController;
      }],
      execute: function () {
        var _dec, _class, _temp;
  
        cclegacy._RF.push({}, "3f3a4a0/cVFwZvy0Nw/9MrA", "ScenePopupInfoPowerup", undefined);
  
        var ccclass = _decorator.ccclass,
            property = _decorator.property;
        var ScenePopupInfoPowerup = exports('ScenePopupInfoPowerup', (_dec = ccclass('ScenePopupInfoPowerup'), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
          _inheritsLoose(ScenePopupInfoPowerup, _Component);
  
          function ScenePopupInfoPowerup() {
            var _this;
  
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
  
            _this = _Component.call.apply(_Component, [this].concat(args)) || this;
  
            _defineProperty(_assertThisInitialized(_this), "holdInput", false);
  
            return _this;
          }
  
          var _proto = ScenePopupInfoPowerup.prototype;
  
          _proto.onEnable = function onEnable() {
            this.holdInput = false;
          };
  
          _proto.start = function start() {};
  
          _proto.buttonCloseClicked = function buttonCloseClicked() {
            if (this.holdInput) return;
            SFXManager.getInstance().play(SFXManager.SFX_SELECT);
            this.holdInput = true;
            GameController.getInstance().showPopUpInfoPowerUp(false);
          };
  
          return ScenePopupInfoPowerup;
        }(Component), _temp)) || _class));
  
        cclegacy._RF.pop();
      }
    };
  });
  
  System.register("chunks:///_virtual/FruitPhysics.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './Fruit.ts', './Bomb.ts', './FruitManager.ts'], function (exports) {
    'use strict';
  
    var _defineProperty, _inheritsLoose, _assertThisInitialized, cclegacy, _decorator, Vec3, Vec2, RigidBody, Component, Fruit, Bomb, FruitManager;
  
    return {
      setters: [function (module) {
        _defineProperty = module.defineProperty;
        _inheritsLoose = module.inheritsLoose;
        _assertThisInitialized = module.assertThisInitialized;
      }, function (module) {
        cclegacy = module.cclegacy;
        _decorator = module._decorator;
        Vec3 = module.Vec3;
        Vec2 = module.Vec2;
        RigidBody = module.RigidBody;
        Component = module.Component;
      }, function (module) {
        Fruit = module.Fruit;
      }, function (module) {
        Bomb = module.Bomb;
      }, function (module) {
        FruitManager = module.FruitManager;
      }],
      execute: function () {
        var _dec, _class, _class2, _temp;
  
        cclegacy._RF.push({}, "44361gMlj1Kjqm0hGPiPvAj", "FruitPhysics", undefined);
  
        var ccclass = _decorator.ccclass,
            property = _decorator.property;
        var FruitPhysics = exports('FruitPhysics', (_dec = ccclass('FruitPhysics'), _dec(_class = (_temp = _class2 = /*#__PURE__*/function (_Component) {
          _inheritsLoose(FruitPhysics, _Component);
  
          function FruitPhysics() {
            var _this;
  
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
  
            _this = _Component.call.apply(_Component, [this].concat(args)) || this;
  
            _defineProperty(_assertThisInitialized(_this), "velocity", void 0);
  
            _defineProperty(_assertThisInitialized(_this), "isGameplay", false);
  
            _defineProperty(_assertThisInitialized(_this), "pausePhysics", false);
  
            _defineProperty(_assertThisInitialized(_this), "acceleration", 9.5 * FruitPhysics.OrthographicMutiplier);
  
            _defineProperty(_assertThisInitialized(_this), "m_repelForceFromOtherFruit", 10);
  
            return _this;
          }
  
          var _proto = FruitPhysics.prototype;
  
          _proto.onLoad = function onLoad() {
            this.velocity = new Vec3(0, 0, 0);
          };
  
          _proto.start = function start() {};
  
          FruitPhysics.resetMultiplier = function resetMultiplier() {
            FruitPhysics.DtMultiplier = 1;
            FruitPhysics.BlitzDtMultiplier = 1;
            FruitPhysics.ExtraDtMultiplier = 1;
            FruitPhysics.WaveDtMultiplier = 1;
          };
  
          _proto.update = function update(deltaTime) {
            if (this.pausePhysics) return;
  
            if (this.isGameplay && this.node.active) {
              deltaTime *= FruitPhysics.DtMultiplier * FruitPhysics.BlitzDtMultiplier * FruitPhysics.ExtraDtMultiplier * FruitPhysics.WaveDtMultiplier * FruitPhysics.PomegranateDtMultiplier;
              this.velocity.y -= this.acceleration * deltaTime;
  
              if (this.getComponent(Bomb) != null) {
                for (var i = 0; i < FruitManager.getInstance().getActiveFruit().length; i++) {
                  var curFruit = FruitManager.getInstance().getActiveFruit()[i];
  
                  if (curFruit.getComponent(FruitPhysics) == this || !curFruit.active) {
                    continue;
                  }
  
                  if (this.isTouching(curFruit)) {
                    var otherFruit2 = new Vec2(curFruit.position.x, curFruit.position.y);
                    var curFruit2 = new Vec2(this.node.position.x, this.node.position.y);
                    var resultSubstact = new Vec2();
                    resultSubstact = Vec2.subtract(resultSubstact, curFruit2, otherFruit2);
                    resultSubstact.normalize();
                    var addVelocity2 = resultSubstact.multiplyScalar(this.m_repelForceFromOtherFruit).multiplyScalar(deltaTime);
                    var addVelocity3 = new Vec3(addVelocity2.x, addVelocity2.y, 0);
                    this.velocity = this.velocity.add(addVelocity3);
                    console.log(this.velocity);
                  }
                }
              }
  
              var movement = new Vec3(this.velocity.x * deltaTime, this.velocity.y * deltaTime, this.velocity.z * deltaTime);
              movement.x += this.node.worldPosition.x;
              movement.y += this.node.worldPosition.y;
              movement.z += this.node.worldPosition.z;
              this.node.worldPosition = movement.clone();
            }
          };
  
          _proto.isTouching = function isTouching(other) {
            if (this.getComponent(Bomb) == null && this.getComponent(Fruit) == null) return false;
            if (other.getComponent(Bomb) == null && other.getComponent(Fruit) == null) return false;
            var curRadius = this.getComponent(Bomb) == null ? this.getComponent(Fruit).colliderRadius : this.getComponent(Bomb).colliderRadius;
            var otherRadius = other.getComponent(Bomb) == null ? other.getComponent(Fruit).colliderRadius : other.getComponent(Bomb).colliderRadius;
            var radiiSqr = otherRadius * FruitPhysics.OrthographicMutiplier + curRadius * FruitPhysics.OrthographicMutiplier;
            radiiSqr *= radiiSqr;
            var other2 = new Vec2(other.position.x, other.position.y);
            var cur2 = new Vec2(this.node.position.x, this.node.position.y);
            return Vec2.squaredDistance(other2, cur2) < radiiSqr;
          };
  
          _proto.reset = function reset() {
            this.pausePhysics = false;
          };
  
          _proto.getVelocity = function getVelocity() {
            return this.velocity;
          };
  
          _proto.setVelocity = function setVelocity(velo) {
            this.isGameplay = true;
            this.velocity = velo.clone();
            this.velocity = this.velocity.multiplyScalar(FruitPhysics.OrthographicMutiplier);
  
            if (this.getComponent(RigidBody) != null) {
              this.getComponent(RigidBody).useGravity = false;
            }
          };
  
          return FruitPhysics;
        }(Component), _defineProperty(_class2, "DtMultiplier", 1), _defineProperty(_class2, "BlitzDtMultiplier", 1), _defineProperty(_class2, "ExtraDtMultiplier", 1), _defineProperty(_class2, "WaveDtMultiplier", 1), _defineProperty(_class2, "OrthographicMutiplier", 10 / 4), _defineProperty(_class2, "PomegranateDtMultiplier", 1), _temp)) || _class));
  
        cclegacy._RF.pop();
      }
    };
  });
  
  System.register("chunks:///_virtual/SceneLanguage.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './SFXManager.ts', './GameController.ts'], function (exports) {
    'use strict';
  
    var _inheritsLoose, _defineProperty, _assertThisInitialized, cclegacy, _decorator, Component, SFXManager, GameController;
  
    return {
      setters: [function (module) {
        _inheritsLoose = module.inheritsLoose;
        _defineProperty = module.defineProperty;
        _assertThisInitialized = module.assertThisInitialized;
      }, function (module) {
        cclegacy = module.cclegacy;
        _decorator = module._decorator;
        Component = module.Component;
      }, function (module) {
        SFXManager = module.SFXManager;
      }, function (module) {
        GameController = module.GameController;
      }],
      execute: function () {
        var _dec, _class, _temp;
  
        cclegacy._RF.push({}, "47b18oI1+xKpbv/7R/8J7BL", "SceneLanguage", undefined);
  
        var ccclass = _decorator.ccclass,
            property = _decorator.property;
        var SceneLanguage = exports('SceneLanguage', (_dec = ccclass('SceneLanguage'), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
          _inheritsLoose(SceneLanguage, _Component);
  
          function SceneLanguage() {
            var _this;
  
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
  
            _this = _Component.call.apply(_Component, [this].concat(args)) || this;
  
            _defineProperty(_assertThisInitialized(_this), "holdInput", false);
  
            return _this;
          }
  
          var _proto = SceneLanguage.prototype;
  
          _proto.onEnable = function onEnable() {
            this.holdInput = false;
          };
  
          _proto.start = function start() {};
  
          _proto.backButtonClicked = function backButtonClicked() {
            if (this.holdInput) return;
            this.holdInput = true;
            SFXManager.getInstance().play(SFXManager.SFX_SELECT);
            GameController.getInstance().exitScreen(function () {
              GameController.getInstance().setScreenState(GameController.SCREEN_STATE_SETTING);
            });
          };
  
          return SceneLanguage;
        }(Component), _temp)) || _class));
  
        cclegacy._RF.pop();
      }
    };
  });
  
  System.register("chunks:///_virtual/TextCritical.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './FruitManager.ts'], function (exports) {
    'use strict';
  
    var _inheritsLoose, _defineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Component, FruitManager;
  
    return {
      setters: [function (module) {
        _inheritsLoose = module.inheritsLoose;
        _defineProperty = module.defineProperty;
        _assertThisInitialized = module.assertThisInitialized;
        _createClass = module.createClass;
      }, function (module) {
        cclegacy = module.cclegacy;
        _decorator = module._decorator;
        Component = module.Component;
      }, function (module) {
        FruitManager = module.FruitManager;
      }],
      execute: function () {
        var _dec, _class, _temp;
  
        cclegacy._RF.push({}, "4a143Fh2HlI5oV1juP5TRF2", "TextCritical", undefined);
  
        var ccclass = _decorator.ccclass,
            property = _decorator.property;
        var TextCritical = exports('TextCritical', (_dec = ccclass('TextCritical'), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
          _inheritsLoose(TextCritical, _Component);
  
          function TextCritical() {
            var _this;
  
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
  
            _this = _Component.call.apply(_Component, [this].concat(args)) || this;
  
            _defineProperty(_assertThisInitialized(_this), "_timer", 0);
  
            return _this;
          }
  
          var _proto = TextCritical.prototype;
  
          _proto.onLoad = function onLoad() {};
  
          _proto.start = function start() {};
  
          _proto.update = function update(deltaTime) {
            if (this.node.active) {
              this.timer -= deltaTime;
  
              if (this.timer < 0) {
                this.node.active = false;
                FruitManager.getInstance().putTextCritical(this.node);
              }
            }
          };
  
          _proto.resetTimer = function resetTimer(timer) {
            this.timer = timer;
          };
  
          _createClass(TextCritical, [{
            key: "timer",
            get: function get() {
              return this._timer;
            },
            set: function set(value) {
              this._timer = value;
            }
          }]);
  
          return TextCritical;
        }(Component), _temp)) || _class));
  
        cclegacy._RF.pop();
      }
    };
  });
  
  System.register("chunks:///_virtual/ShareManager.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './GameController.ts'], function (exports) {
    'use strict';
  
    var _defineProperty, cclegacy, _decorator, instantiate, Camera, RenderTexture, screen, GameController;
  
    return {
      setters: [function (module) {
        _defineProperty = module.defineProperty;
      }, function (module) {
        cclegacy = module.cclegacy;
        _decorator = module._decorator;
        instantiate = module.instantiate;
        Camera = module.Camera;
        RenderTexture = module.RenderTexture;
        screen = module.screen;
      }, function (module) {
        GameController = module.GameController;
      }],
      execute: function () {
        var _dec, _class, _class2, _temp;
  
        cclegacy._RF.push({}, "4e38clz1q9L4LJL2HiyfxpW", "ShareManager", undefined);
  
        var ccclass = _decorator.ccclass,
            property = _decorator.property;
        var ShareManager = exports('ShareManager', (_dec = ccclass('ShareManager'), _dec(_class = (_temp = _class2 = /*#__PURE__*/function () {
          function ShareManager() {}
  
          ShareManager.createCaptureCamera = function createCaptureCamera(width, height) {
            if (width === void 0) {
              width = -1;
            }
  
            if (height === void 0) {
              height = -1;
            }
  
            var _node = GameController.getInstance().canvasScreenshot.getChildByPath("Camera");
  
            var _cameraNode = instantiate(_node);
  
            _cameraNode.parent = _node.parent;
  
            var comp = _cameraNode.getComponent(Camera);
  
            ShareManager.createRenderTexture(comp, width, height);
            ShareManager.captureCamera = comp;
          };
  
          ShareManager.createRenderTexture = function createRenderTexture(camera, newWidth, newHeight) {
            console.log(camera.targetTexture);
            var texture = new RenderTexture();
            var _screen$windowSize = screen.windowSize,
                width = _screen$windowSize.width,
                height = _screen$windowSize.height;
  
            if (newWidth != -1 && newHeight != -1) {
              width = newWidth;
              height = newHeight;
            }
  
            texture.initialize({
              width: width,
              height: height
            });
            camera.targetTexture = texture;
            console.log(camera.targetTexture);
          };
  
          ShareManager.getRenderData = function getRenderData(camera) {
            var texture = camera.targetTexture;
            return ShareManager.toB64(texture.readPixels(), texture);
          };
  
          ShareManager.toB64 = function toB64(arrayBuffer, RTex) {
            var canvas = document.createElement('canvas');
            var ctx = canvas.getContext('2d');
            var width = canvas.width = Math.floor(RTex.width);
            var height = canvas.height = Math.floor(RTex.height);
            var rowBytes = width * 4;
  
            for (var row = 0; row < height; row++) {
              var srow = height - 1 - row;
              var imageData = ctx.createImageData(width, 1);
              var start = srow * width * 4;
  
              for (var i = 0; i < rowBytes; i++) {
                imageData.data[i] = arrayBuffer[start + i];
              }
  
              ctx.putImageData(imageData, 0, row);
            }
  
            return canvas.toDataURL();
          };
  
          ShareManager.removeCamera = function removeCamera() {
            if (ShareManager.captureCamera != null) {
              ShareManager.captureCamera.node.destroy();
            }
          };
  
          return ShareManager;
        }(), _defineProperty(_class2, "captureCamera", null), _temp)) || _class));
  
        cclegacy._RF.pop();
      }
    };
  });
  
  System.register("chunks:///_virtual/SceneSetting.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './BGMManager.ts', './SFXManager.ts', './GameController.ts'], function (exports) {
    'use strict';
  
    var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _defineProperty, cclegacy, _decorator, Node, ScrollView, Vec3, Component, BGMManager, SFXManager, GameController;
  
    return {
      setters: [function (module) {
        _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
        _inheritsLoose = module.inheritsLoose;
        _initializerDefineProperty = module.initializerDefineProperty;
        _assertThisInitialized = module.assertThisInitialized;
        _defineProperty = module.defineProperty;
      }, function (module) {
        cclegacy = module.cclegacy;
        _decorator = module._decorator;
        Node = module.Node;
        ScrollView = module.ScrollView;
        Vec3 = module.Vec3;
        Component = module.Component;
      }, function (module) {
        BGMManager = module.BGMManager;
      }, function (module) {
        SFXManager = module.SFXManager;
      }, function (module) {
        GameController = module.GameController;
      }],
      execute: function () {
        var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp;
  
        cclegacy._RF.push({}, "4e499hRXvpKR7v2YjNytVLx", "SceneSetting", undefined);
  
        var ccclass = _decorator.ccclass,
            property = _decorator.property;
        var SceneSetting = exports('SceneSetting', (_dec = ccclass('SceneSetting'), _dec2 = property({
          type: Node
        }), _dec3 = property({
          type: Node
        }), _dec4 = property({
          type: Node
        }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
          _inheritsLoose(SceneSetting, _Component);
  
          function SceneSetting() {
            var _this;
  
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
  
            _this = _Component.call.apply(_Component, [this].concat(args)) || this;
  
            _initializerDefineProperty(_assertThisInitialized(_this), "cont1", _descriptor, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "cont2", _descriptor2, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "content", _descriptor3, _assertThisInitialized(_this));
  
            _defineProperty(_assertThisInitialized(_this), "holdInput", false);
  
            _defineProperty(_assertThisInitialized(_this), "delayAuto", 0);
  
            _defineProperty(_assertThisInitialized(_this), "canScroll", false);
  
            _defineProperty(_assertThisInitialized(_this), "speedScroll", 100);
  
            return _this;
          }
  
          var _proto = SceneSetting.prototype;
  
          _proto.onLoad = function onLoad() {
            var me = this;
            this.node.getChildByPath("creditsBox/ScrollVIewCredits").on(ScrollView.EventType.SCROLL_BEGAN, function () {
              me.canScroll = false;
            });
            this.node.getChildByPath("creditsBox/ScrollVIewCredits").on(ScrollView.EventType.SCROLL_ENDED, function () {
              me.delayAuto = 1;
              me.canScroll = true;
            });
          };
  
          _proto.start = function start() {};
  
          _proto.update = function update(deltaTime) {
            if (this.canScroll) {
              this.delayAuto -= deltaTime;
  
              if (this.delayAuto <= 0) {
                var newVec3 = this.content.position.clone();
                newVec3.y += this.speedScroll * deltaTime;
                this.refreshContentPosition(newVec3);
              }
            } else {
              var _newVec = this.content.position.clone();
  
              this.refreshContentPosition(_newVec);
            }
          };
  
          _proto.refreshContentPosition = function refreshContentPosition(pos) {
            if (pos.y < 0) {
              pos.y += 5250;
            } else if (pos.y > 9800) {
              pos.y -= 5250;
            }
  
            this.content.setPosition(pos);
          };
  
          _proto.onEnable = function onEnable() {
            this.delayAuto = 1;
            this.canScroll = true;
            this.holdInput = false;
            this.node.getChildByPath("audioBox/ButtonSFX/ButtonSFXOn").active = !SFXManager.isMuted;
            this.node.getChildByPath("audioBox/ButtonMusic/ButtonMusicOn").active = !BGMManager.isMuted;
            this.content.setPosition(new Vec3(0, 5250, 0));
            this.cont2.setPosition(new Vec3(0, -5250, 0));
          };
  
          _proto.btnMusicClicked = function btnMusicClicked() {
            if (this.holdInput) return;
            SFXManager.getInstance().play(SFXManager.SFX_SELECT);
            BGMManager.getInstance().muteBGM(!BGMManager.isMuted);
            this.node.getChildByPath("audioBox/ButtonMusic/ButtonMusicOn").active = !BGMManager.isMuted;
            GameController.saveData();
          };
  
          _proto.btnSFXClicked = function btnSFXClicked() {
            if (this.holdInput) return;
            SFXManager.getInstance().muteSFX(!SFXManager.isMuted);
            this.node.getChildByPath("audioBox/ButtonSFX/ButtonSFXOn").active = !SFXManager.isMuted;
            SFXManager.getInstance().play(SFXManager.SFX_SELECT);
            GameController.saveData();
          };
  
          _proto.btnBackClicked = function btnBackClicked() {
            if (this.holdInput) return;
            this.holdInput = true;
            SFXManager.getInstance().play(SFXManager.SFX_SELECT);
            GameController.getInstance().moveToHomescreen();
          };
  
          return SceneSetting;
        }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "cont1", [_dec2], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "cont2", [_dec3], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "content", [_dec4], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        })), _class2)) || _class));
  
        cclegacy._RF.pop();
      }
    };
  });
  
  System.register("chunks:///_virtual/Fruit.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './SFXManager.ts', './BlitzManager.ts', './Data.ts', './HalfFruit.ts', './ShakeNode.ts', './FruitPhysics.ts', './ControllerBlade.ts', './GameController.ts', './ArcadeBonusBoardController.ts', './FruitManager.ts'], function (exports) {
    'use strict';
  
    var _defineProperty, _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, RigidBody, Vec3, randomRangeInt, Camera, Animation, tween, Quat, ParticleSystem, director, Label, view, UITransform, easing, Component, SFXManager, BlitzManager, Data, HalfFruit, ShakeNode, FruitPhysics, ControllerBlade, GameController, ArcadeBonusBoardController, FruitManager;
  
    return {
      setters: [function (module) {
        _defineProperty = module.defineProperty;
        _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
        _inheritsLoose = module.inheritsLoose;
        _initializerDefineProperty = module.initializerDefineProperty;
        _assertThisInitialized = module.assertThisInitialized;
        _createClass = module.createClass;
      }, function (module) {
        cclegacy = module.cclegacy;
        _decorator = module._decorator;
        RigidBody = module.RigidBody;
        Vec3 = module.Vec3;
        randomRangeInt = module.randomRangeInt;
        Camera = module.Camera;
        Animation = module.Animation;
        tween = module.tween;
        Quat = module.Quat;
        ParticleSystem = module.ParticleSystem;
        director = module.director;
        Label = module.Label;
        view = module.view;
        UITransform = module.UITransform;
        easing = module.easing;
        Component = module.Component;
      }, function (module) {
        SFXManager = module.SFXManager;
      }, function (module) {
        BlitzManager = module.BlitzManager;
      }, function (module) {
        Data = module.Data;
      }, function (module) {
        HalfFruit = module.HalfFruit;
      }, function (module) {
        ShakeNode = module.ShakeNode;
      }, function (module) {
        FruitPhysics = module.FruitPhysics;
      }, function (module) {
        ControllerBlade = module.ControllerBlade;
      }, function (module) {
        GameController = module.GameController;
      }, function (module) {
        ArcadeBonusBoardController = module.ArcadeBonusBoardController;
      }, function (module) {
        FruitManager = module.FruitManager;
      }],
      execute: function () {
        var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _class3, _temp;
  
        cclegacy._RF.push({}, "531d0ROmLNAd7d9J2jXBkD6", "Fruit", undefined);
  
        var ccclass = _decorator.ccclass,
            property = _decorator.property;
        var Fruit = exports('Fruit', (_dec = ccclass('Fruit'), _dec2 = property({
          type: String,
          displayName: "Key menu"
        }), _dec3 = property({
          type: String,
          displayName: "Fruit name"
        }), _dec4 = property({
          type: Number,
          displayName: "Collider radius"
        }), _dec(_class = (_class2 = (_temp = _class3 = /*#__PURE__*/function (_Component) {
          _inheritsLoose(Fruit, _Component);
  
          function Fruit() {
            var _this;
  
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
  
            _this = _Component.call.apply(_Component, [this].concat(args)) || this;
  
            _initializerDefineProperty(_assertThisInitialized(_this), "keyMenu", _descriptor, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "fruitName", _descriptor2, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "colliderRadius", _descriptor3, _assertThisInitialized(_this));
  
            _defineProperty(_assertThisInitialized(_this), "jiblet", []);
  
            _defineProperty(_assertThisInitialized(_this), "pomegranatePieces", []);
  
            _defineProperty(_assertThisInitialized(_this), "particleBurst", null);
  
            _defineProperty(_assertThisInitialized(_this), "vRotation", 0);
  
            _defineProperty(_assertThisInitialized(_this), "timerSlicing", 0);
  
            _defineProperty(_assertThisInitialized(_this), "delaySlash", 0);
  
            _defineProperty(_assertThisInitialized(_this), "state", -1);
  
            _defineProperty(_assertThisInitialized(_this), "counter", 0);
  
            _defineProperty(_assertThisInitialized(_this), "lastLinearVelocity", null);
  
            _defineProperty(_assertThisInitialized(_this), "lastAngularVelocity", null);
  
            _defineProperty(_assertThisInitialized(_this), "lastHalfLinearVelocity", null);
  
            _defineProperty(_assertThisInitialized(_this), "lastHalfAngularVelocity", null);
  
            _defineProperty(_assertThisInitialized(_this), "waveId", 0);
  
            _defineProperty(_assertThisInitialized(_this), "slashed", false);
  
            _defineProperty(_assertThisInitialized(_this), "half1", null);
  
            _defineProperty(_assertThisInitialized(_this), "half2", null);
  
            _defineProperty(_assertThisInitialized(_this), "isCritical", false);
  
            _defineProperty(_assertThisInitialized(_this), "paused", false);
  
            _defineProperty(_assertThisInitialized(_this), "fruitIndex", void 0);
  
            _defineProperty(_assertThisInitialized(_this), "_particleShadow", null);
  
            _defineProperty(_assertThisInitialized(_this), "tempPosTargetCam", void 0);
  
            _defineProperty(_assertThisInitialized(_this), "holdMe", void 0);
  
            return _this;
          }
  
          var _proto = Fruit.prototype;
  
          _proto.start = function start() {
            this.fruitIndex = FruitManager.getInstance().getFruitIndexFromName(this.fruitName);
  
            if (this.keyMenu == "") {
              for (var i = 0; i < FruitManager.fruitList.length; i++) {
                var data = FruitManager.fruitList[i];
  
                if (data.id == this.node.name) {
                  this.node.setScale(3 * data.scale, 3 * data.scale, 3 * data.scale);
                }
              }
            }
  
            this.getComponent(RigidBody).applyTorque(new Vec3(randomRangeInt(-100, 100), randomRangeInt(-100, 100), randomRangeInt(-100, 100)));
            this.getComponent(RigidBody).angularDamping = 0;
          };
  
          _proto.getFruitDetail = function getFruitDetail() {
            return FruitManager.fruitList[this.fruitIndex];
          };
  
          _proto.onLoad = function onLoad() {
            if (this.isPomegranate()) {
              Fruit.POMEGRANATE_ACTIVE = true;
              this.delaySlash = 0;
              this.counter = 0;
              this.state = Fruit.STATE_SHOW;
              if (this.fruitName == "") this.fruitName = this.node.name;
  
              for (var i = 1; i <= 8; i++) {
                this.jiblet.push(this.node.getChildByPath("pomegranate_jiblet_" + i));
                this.pomegranatePieces.push(this.node.getChildByPath("pomegranate_p_piece_" + i));
              }
  
              this.particleBurst = this.node.getChildByPath("particle_juicePomeBurst");
              console.log('fruit onload');
            } else {
              if (this.isBerryBlast()) Fruit.BERRYBLAST_ACTIVE = true;
              if (this.fruitName == "") this.fruitName = this.node.name;
              this.half1 = this.node.getChildByName(this.fruitName + 'Half1');
              this.half2 = this.node.getChildByName(this.fruitName + 'Half2');
              console.log('fruit onload');
            }
          };
  
          _proto.onDisable = function onDisable() {
            if (this.isBananaDouble() || this.isBananaFreeze() || this.isBananaFrenzy()) FruitManager.getInstance().specialBananaOnScreen = "";
  
            if (this.isPomegranate()) {
              SFXManager.getInstance().stopLoopSFX(SFXManager.SFX_POME_SPARKLE__LP);
              Fruit.POMEGRANATE_ACTIVE = false;
              FruitManager.getInstance().nextScoreSpawnPomegranate = GameController.getInstance().score + randomRangeInt(50, 151);
            } else if (this.isBerryBlast()) {
              Fruit.BERRYBLAST_ACTIVE = false;
              SFXManager.getInstance().stopLoopSFX(SFXManager.SFX_STRAWBERRY_LOOP);
            } else if (this.isPeachyTime()) {
              SFXManager.getInstance().stopLoopSFX(SFXManager.SFX_PEACH_LOOP);
            }
          };
  
          _proto.forceBurst = function forceBurst(rotation) {
            this.slashed = false;
            this.timerSlicing = 0;
            this.delaySlash = 0;
            var textPomergranateSlice = FruitManager.getInstance().getTextPomegranateSlice();
            var textPomegranateScore = FruitManager.getInstance().getTextPomegranateScore();
            textPomergranateSlice.active = false;
            textPomegranateScore.active = false;
            Fruit.CAMERA_ZOOMED = false;
            FruitManager.getInstance().trySlowAllFruit(1);
            var bladeCamera = GameController.getInstance().canvasBlade.getChildByPath("Camera");
            var bgCamera = GameController.getInstance().mainCanvas2.getChildByPath("Camera");
            var textCamera = GameController.getInstance().canvasForGameplayText.getChildByPath("Camera");
            var textCameraBehind3D = GameController.getInstance().canvasForTextBehind3D.getChildByPath("Camera");
            var camera = GameController.getInstance().camera;
            camera.setPosition(new Vec3(0, 0, 10));
            camera.setRotationFromEuler(new Vec3(0, 0, 0));
            camera.getComponent(Camera).orthoHeight = 10;
            textCamera.setPosition(new Vec3(0, 0, 1000));
            textCamera.setRotationFromEuler(new Vec3(0, 0, 0));
            textCameraBehind3D.setPosition(new Vec3(0, 0, 1000));
            textCameraBehind3D.setRotationFromEuler(new Vec3(0, 0, 0));
            bgCamera.setPosition(new Vec3(0, 0, 1000));
            bgCamera.setRotationFromEuler(new Vec3(0, 0, 0));
            bgCamera.getComponent(Camera).orthoHeight = 384;
            GameController.IMMUNE = false;
            FruitManager.PAUSE_SPAWNING = false;
            FruitManager.HOLD_ALL_HALF_SCHEDULER = false;
            FruitPhysics.PomegranateDtMultiplier = 1;
            this.burst(rotation);
  
            for (var i = FruitManager.getInstance().activePomegranateRay.length - 1; i >= 0; i--) {
              var ray = FruitManager.getInstance().activePomegranateRay.splice(i, 1)[0];
              ray.active = false;
              FruitManager.getInstance().poolPomegranateRay.push(ray);
            }
          };
  
          _proto.burst = function burst(rotation) {
            var me = this;
            GameController.getInstance().mainCanvasOverlay.getChildByPath("flash_pomegranate").getComponent(Animation).play("pomegranate_background_out");
            FruitManager.getInstance().destroyFruitInRadius(this.node.position, -1);
            SFXManager.getInstance().play(SFXManager.SFX_POME_BURST);
            SFXManager.getInstance().play(SFXManager.SFX_POME_ZOOM_OUT);
            var tempSlow = new Vec3(0.0001, 0, 0);
            tween(tempSlow).to(1, {
              x: 1
            }, {
              onUpdate: function onUpdate() {
                FruitManager.getInstance().trySlowAllFruit(tempSlow.x);
              }
            }).start();
            this.slashed = true;
            var newRotation = new Vec3(0, 0, 0);
            newRotation.x = -90;
            newRotation.y = 0;
            newRotation.z = rotation;
            var out = Quat.IDENTITY.clone();
            Quat.fromEuler(out, -90, 0, rotation);
            var baseForce = 12;
            var forceX = Math.sin(rotation * Math.PI / -180) * baseForce;
            var forceY = Math.cos(rotation * Math.PI / -180) * baseForce;
            this.particleBurst.active = true;
            this.particleBurst.setParent(this.node.parent);
            this.particleBurst.setPosition(this.node.position);
  
            for (var i = 0; i < this.jiblet.length; i++) {
              this.jiblet[i].getChildByPath("particle_pomeGibTrail").active = false;
            }
  
            GameController.getInstance().scheduleOnce(function () {
              for (var _i = 0; _i < me.jiblet.length; _i++) {
                me.jiblet[_i].getChildByPath("particle_pomeGibTrail").active = true;
              }
            }, 1.5);
  
            for (var _i2 = 0; _i2 < this.pomegranatePieces.length; _i2++) {
              this.jiblet[_i2].active = true;
  
              this.jiblet[_i2].setParent(this.node.parent);
  
              this.jiblet[_i2].setPosition(this.node.position);
  
              this.jiblet[_i2].setScale(this.node.scale);
  
              this.jiblet[_i2].setWorldRotation(this.node.worldRotation);
  
              this.pomegranatePieces[_i2].active = true;
  
              this.pomegranatePieces[_i2].setParent(this.node.parent);
  
              this.pomegranatePieces[_i2].setPosition(this.node.position);
  
              this.pomegranatePieces[_i2].setScale(this.node.scale);
  
              this.pomegranatePieces[_i2].setWorldRotation(this.node.worldRotation);
  
              forceX = Math.sin(GameController.deg2rad(rotation + 45 * (_i2 + 1))) * baseForce;
              forceY = Math.cos(GameController.deg2rad(rotation + 45 * (_i2 + 1))) * baseForce;
  
              this.pomegranatePieces[_i2].getComponent(FruitPhysics).setVelocity(new Vec3(forceX, forceY, 0));
  
              this.pomegranatePieces[_i2].getComponent(FruitPhysics).acceleration = 0;
  
              this.jiblet[_i2].getComponent(FruitPhysics).setVelocity(new Vec3(forceX, forceY, 0));
  
              this.jiblet[_i2].getComponent(FruitPhysics).acceleration = 0;
            }
  
            this.getComponent(RigidBody).setLinearVelocity(new Vec3(0, 0, 0));
            this.node.active = false;
  
            if (this.particleShadow != null) {
              this.particleShadow.getComponent(ParticleSystem).stop();
            }
          };
  
          _proto.isBananaDouble = function isBananaDouble() {
            return this.node.name.includes("BananaSP_double");
          };
  
          _proto.isBananaFreeze = function isBananaFreeze() {
            return this.node.name.includes("BananaSP_freeze");
          };
  
          _proto.isBananaFrenzy = function isBananaFrenzy() {
            return this.node.name.includes("BananaSP_frenzy");
          };
  
          _proto.isPomegranate = function isPomegranate() {
            return this.node.name.includes("Pomegranate");
          };
  
          _proto.isPeachyTime = function isPeachyTime() {
            return this.node.name.includes("Peachy");
          };
  
          _proto.isBerryBlast = function isBerryBlast() {
            return this.node.name.includes("BerryBlast");
          };
  
          _proto.isFruitSameType = function isFruitSameType(fruitType) {
            return this.node.name.includes(fruitType);
          };
  
          _proto.stopParticlePeachyTime = function stopParticlePeachyTime() {
            this.node.getChildByPath("particle_peachyTrail").getComponent(ParticleSystem).stop();
            this.node.getChildByPath("particle_peachyTrail").getComponent(ParticleSystem).clear();
            this.node.getChildByPath("particle_peachyTrail/star").getComponent(ParticleSystem).stop();
            this.node.getChildByPath("particle_peachyTrail/star").getComponent(ParticleSystem).clear();
            this.node.getChildByPath("particle_peachyTrail/star").active = false;
            this.node.getChildByPath("particle_peachyTrail").active = false;
          };
  
          _proto.startParticlePeachyTime = function startParticlePeachyTime() {
            this.node.getChildByPath("particle_peachyTrail/star").active = true;
            this.node.getChildByPath("particle_peachyTrail").active = true;
            this.node.getChildByPath("particle_peachyTrail").getComponent(ParticleSystem).play();
            this.node.getChildByPath("particle_peachyTrail/star").getComponent(ParticleSystem).play();
          };
  
          _proto.pauseVelocityOnly = function pauseVelocityOnly() {
            if (this.paused) return;
            director.getScheduler().pauseTarget(this);
            this.paused = true;
  
            if (!this.slashed) {
              this.node.getComponent(FruitPhysics).pausePhysics = true;
            } else {
              if (this.half1 != null && this.half2 != null) {
                this.lastHalfLinearVelocity = [new Vec3(0, 0, 0), new Vec3(0, 0, 0)];
                this.half1.getComponent(RigidBody).getLinearVelocity(this.lastHalfLinearVelocity[0]);
                this.half2.getComponent(RigidBody).getLinearVelocity(this.lastHalfLinearVelocity[1]);
                this.half1.getComponent(RigidBody).useGravity = false;
                this.half2.getComponent(RigidBody).useGravity = false;
                this.half1.getComponent(RigidBody).setLinearVelocity(new Vec3(0, 0, 0));
                this.half2.getComponent(RigidBody).setLinearVelocity(new Vec3(0, 0, 0));
              }
            }
          };
  
          _proto.resumeVelocityOnly = function resumeVelocityOnly() {
            if (!this.paused) return;
            director.getScheduler().resumeTarget(this);
            this.paused = false;
  
            if (!this.slashed) {
              this.node.getComponent(FruitPhysics).pausePhysics = false;
            } else {
              if (this.half1 != null && this.half2 != null) {
                this.half1.getComponent(RigidBody).setLinearVelocity(this.lastHalfLinearVelocity[0]);
                this.half2.getComponent(RigidBody).setLinearVelocity(this.lastHalfLinearVelocity[1]);
                this.half1.getComponent(RigidBody).useGravity = true;
                this.half2.getComponent(RigidBody).useGravity = true;
              }
            }
          };
  
          _proto.pausePhysic = function pausePhysic() {
            if (this.paused) return;
            director.getScheduler().pauseTarget(this);
            this.paused = true;
  
            if (!this.slashed) {
              this.lastLinearVelocity = new Vec3(0, 0, 0);
              this.lastAngularVelocity = new Vec3(0, 0, 0);
              this.node.getComponent(FruitPhysics).pausePhysics = true;
              this.getComponent(RigidBody).getAngularVelocity(this.lastAngularVelocity);
              this.getComponent(RigidBody).setAngularVelocity(new Vec3(0, 0, 0));
            } else {
              if (this.half1 != null && this.half2 != null) {
                this.lastHalfLinearVelocity = [new Vec3(0, 0, 0), new Vec3(0, 0, 0)];
                this.half1.getComponent(RigidBody).getLinearVelocity(this.lastHalfLinearVelocity[0]);
                this.half2.getComponent(RigidBody).getLinearVelocity(this.lastHalfLinearVelocity[1]);
                this.lastHalfAngularVelocity = [new Vec3(0, 0, 0), new Vec3(0, 0, 0)];
                this.half1.getComponent(RigidBody).getAngularVelocity(this.lastHalfAngularVelocity[0]);
                this.half2.getComponent(RigidBody).getAngularVelocity(this.lastHalfAngularVelocity[1]);
                this.half1.getComponent(RigidBody).useGravity = false;
                this.half2.getComponent(RigidBody).useGravity = false;
                this.half1.getComponent(RigidBody).setLinearVelocity(new Vec3(0, 0, 0));
                this.half1.getComponent(RigidBody).setAngularVelocity(new Vec3(0, 0, 0));
                this.half2.getComponent(RigidBody).setLinearVelocity(new Vec3(0, 0, 0));
                this.half2.getComponent(RigidBody).setAngularVelocity(new Vec3(0, 0, 0));
              }
            }
          };
  
          _proto.resumePhysic = function resumePhysic() {
            if (!this.paused) return;
            director.getScheduler().resumeTarget(this);
            this.paused = false;
  
            if (!this.slashed) {
              this.node.getComponent(FruitPhysics).pausePhysics = false;
              if (this.getComponent(RigidBody) == null || this.lastAngularVelocity == null) return;
              this.getComponent(RigidBody).setAngularVelocity(this.lastAngularVelocity);
            } else {
              if (this.half1 != null && this.half2 != null) {
                if (this.lastHalfLinearVelocity.length == null) this.lastHalfLinearVelocity = [new Vec3(0, 0, 0), new Vec3(0, 0, 0)];
                this.half1.getComponent(RigidBody).setLinearVelocity(this.lastHalfLinearVelocity[0]);
                this.half2.getComponent(RigidBody).setLinearVelocity(this.lastHalfLinearVelocity[1]);
                this.half1.getComponent(RigidBody).setAngularVelocity(this.lastHalfAngularVelocity[0]);
                this.half2.getComponent(RigidBody).setAngularVelocity(this.lastHalfAngularVelocity[1]);
                this.half1.getComponent(RigidBody).useGravity = true;
                this.half2.getComponent(RigidBody).useGravity = true;
              }
            }
          };
  
          _proto.getSlashed = function getSlashed(rotation, isCritical, getEffect) {
            var _this2 = this;
  
            if (getEffect === void 0) {
              getEffect = true;
            }
  
            if (Data.getInstance().bladeUsed == 9) SFXManager.getInstance().play(randomRangeInt(SFXManager.SFX_HOLLY_IMPACT_1, SFXManager.SFX_HOLLY_IMPACT_4 + 1));else if (Data.getInstance().bladeUsed == 11) SFXManager.getInstance().play(randomRangeInt(SFXManager.SFX_BLADEFIRE_CRACKER_IMPACT_1, SFXManager.SFX_BLADEFIRE_CRACKER_IMPACT_3 + 1));
            var me = this;
            if (this.isPeachyTime()) SFXManager.getInstance().play(SFXManager.SFX_PEACH_SLICE);
  
            if (GameController.gameMode == GameController.MODE_ARCADE) {
              if (!this.isPeachyTime() && !this.isPomegranate() && !this.isBerryBlast() && !this.isBananaFreeze() && !this.isBananaFrenzy() && !this.isBananaDouble() && getEffect) {
                BlitzManager.getInstance().onFruitSliced();
                if (ArcadeBonusBoardController.getInstance().firstSlashFruit == "") ArcadeBonusBoardController.getInstance().firstSlashFruit = this.node.name;
                ArcadeBonusBoardController.getInstance().lastSlashFruit = this.node.name;
              }
  
              var name = this.node.name;
  
              if (!name.includes("BerryBlast")) {
                ArcadeBonusBoardController.getInstance().onlySliceBerry = false;
              }
            }
  
            if (this.isBananaDouble() || this.isBananaFreeze() || this.isBananaFrenzy()) {
              GameController.getInstance().bananaSpecialCount += 1;
  
              if (getEffect) {
                FruitManager.getInstance().specialBananaOnScreen = "";
                var topLabel = null;
  
                if (this.isBananaFreeze()) {
                  SFXManager.getInstance().play(SFXManager.SFX_BANANA_FREEZE_SLICE);
                  if (GameController.gameMode == GameController.MODE_ARCADE) ArcadeBonusBoardController.getInstance().bananaFreezeHitCounter += 1;
                  topLabel = GameController.getInstance().freezeArcadeTopLabel;
                  FruitManager.getInstance().freezeDuration = 7;
                  BlitzManager.getInstance().dtMultiplier = 0.5;
                  FruitManager.getInstance().trySlowAllFruit(0.5);
                  FruitPhysics.BlitzDtMultiplier = 0.5;
                  GameController.Instance.gameplayScreen.getChildByPath("container_time/container/Freeze").getComponent(Animation).play("ui_freeze_in");
                  GameController.Instance.gameplayScreen.getChildByPath("FreezeOverlay").getComponent(Animation).play("ui_freeze_overlay_in");
                } else if (this.isBananaFrenzy()) {
                  SFXManager.getInstance().play(SFXManager.SFX_BANANA_FRENZY_SLICE);
                  if (GameController.gameMode == GameController.MODE_ARCADE) ArcadeBonusBoardController.getInstance().bananaFrenzyHitCounter += 1;
                  topLabel = GameController.getInstance().frenzyArcadeTopLabel;
                  FruitManager.getInstance().frenzyDuration = 7;
                  FruitManager.getInstance().node.getChildByPath("particle_frenzySideLeft").active = true;
                  FruitManager.getInstance().node.getChildByPath("particle_frenzySideRight").active = true;
                  FruitManager.getInstance().startTimer = 0;
                } else if (this.isBananaDouble()) {
                  SFXManager.getInstance().play(SFXManager.SFX_BANANA_DOUBLE_SLICE);
                  if (GameController.gameMode == GameController.MODE_ARCADE) ArcadeBonusBoardController.getInstance().bananaDoubleHitCounter += 1;
                  topLabel = GameController.getInstance().doubleArcadeTopLabel;
                  FruitManager.getInstance().doublePointDuration = 7;
                  GameController.Instance.gameplayScreen.getChildByPath("doublePoints_topLabel").getComponent(Animation).play("doublePointLabel_in");
                  GameController.getInstance().scoreArcadeToDouble = 0;
                  GameController.Instance.gameplayScreen.getChildByPath("doublePoints_topLabel/ArcadeDoublePointsBacking/text_doubleIncrement").getComponent(Label).string = "0";
                  GameController.Instance.gameplayScreen.getChildByPath("doublePoints_topLabel/ArcadeDoublePointsBacking/text_doubleFinalScore").getComponent(Label).string = "0";
                  GameController.Instance.gameplayScreen.getChildByPath("DoublePointOverlay").getComponent(Animation).play("ui_overlay_double_in");
                }
  
                FruitManager.getInstance().freezeDuration = FruitManager.getInstance().freezeDuration > 0 ? 7 : 0;
                FruitManager.getInstance().frenzyDuration = FruitManager.getInstance().frenzyDuration > 0 ? 7 : 0;
                FruitManager.getInstance().doublePointDuration = FruitManager.getInstance().doublePointDuration > 0 ? 7 : 0;
  
                if (topLabel != null) {
                  topLabel.getChildByPath("BananaFrenzyTabBacking").active = this.isBananaFrenzy();
                  topLabel.getChildByPath("BananaFreezeTabBacking").active = this.isBananaFreeze();
                  topLabel.getChildByPath("BananaDoublePointsTabBacking").active = this.isBananaDouble();
                  topLabel.active = true;
                  topLabel.setParent(GameController.Instance.gameplayScreen.getChildByPath("arcade_top_label"));
                  var labelPosition = topLabel.position.clone();
                  labelPosition.y = 62;
                  topLabel.setPosition(labelPosition);
                  topLabel.getComponent(Animation).play("show");
                }
              }
            }
  
            if (this.isPomegranate()) {
              if (this.slashed) return;
              if (this.delaySlash > 0) return;
              if (this.state == Fruit.STATE_BURST) return;
              if (this.holdMe) return;
              this.slashed = true;
              this.getComponent(RigidBody).setAngularVelocity(new Vec3(0, 0, 0));
              var hasilRotation = (Math.abs(rotation) + 90) % 90;
  
              if (hasilRotation > 45) {
                hasilRotation = 45;
              }
  
              this.counter += 1;
  
              if (this.counter == 1) {
                GameController.getInstance().showPomegranateTextSlice(this.node.position, this.counter, hasilRotation);
                GameController.getInstance().showPomegranateTextScore(this.node.position, this.counter, hasilRotation);
              } else {
                GameController.getInstance().changePomergranateTextSlice(this.counter);
                GameController.getInstance().changePomergranateTextScore(this.counter);
              }
  
              if (this.counter % 2 == 0) {
                var ray = FruitManager.getInstance().getPomegranateRayFromPool();
                ray.active = true;
                var pomPos = this.node.position.clone();
                var rayPos = this.node.position.clone();
                var rotationZ = randomRangeInt(0, 26) * 15;
                rayPos.z = pomPos.z - 1;
                ray.setPosition(rayPos);
                ray.setRotationFromEuler(new Vec3(-90, 0, rotationZ));
                ray.setParent(this.node.parent);
                FruitManager.getInstance().activePomegranateRay.push(ray);
                ray.setScale(new Vec3(randomRangeInt(5, 21) / 10, 1, randomRangeInt(10, 21) / 10));
                ray.getComponent(Animation).play("pomergranate_ray_idle");
              }
  
              this.delaySlash = 0.125;
              this.vRotation = rotation;
              SFXManager.getInstance().play(randomRangeInt(SFXManager.SFX_POME_SLICE_1, SFXManager.SFX_POME_SLICE_3 + 1));
              var particleSliced = FruitManager.getInstance().getSliceParticle(this.fruitIndex);
  
              if (particleSliced != null) {
                particleSliced.setRotationFromEuler(0, 0, rotation + 90);
                particleSliced.active = true;
                particleSliced.setPosition(this.node.position);
                particleSliced.setParent(FruitManager.getInstance().node);
                setTimeout(function () {
                  particleSliced.active = false;
                  FruitManager.getInstance().putSlicedParticle(_this2.fruitIndex, particleSliced);
                }, 2000);
              }
  
              this.getComponent(RigidBody).setLinearVelocity(new Vec3(0, 0, 0));
  
              if (this.state == Fruit.STATE_SHOW) {
                GameController.IMMUNE = true;
                ControllerBlade.getInstance().bladeTip.setScale(new Vec3(5, 5, 5));
                GameController.getInstance().pomegranateCount += 1;
                console.log("rotation pome: " + rotation);
                this.node.getChildByPath("pomegranate_single/particle_pomeTrailGlow").active = false;
                this.node.getChildByPath("pomegranate_single/particle_pomeTrail").active = false;
                FruitManager.getInstance().trySlowAllFruit(0.0001);
                SFXManager.getInstance().play(SFXManager.SFX_POME_RAMPDOWN);
                SFXManager.getInstance().stopLoopSFX(SFXManager.SFX_POME_SPARKLE__LP);
                FruitPhysics.PomegranateDtMultiplier = 0.01;
                FruitManager.PAUSE_SPAWNING = true;
                FruitManager.HOLD_ALL_HALF_SCHEDULER = true;
                this.timerSlicing = 5;
                var bladeCamera = GameController.getInstance().canvasBlade.getChildByPath("Camera");
                var textCamera = GameController.getInstance().canvasForGameplayText.getChildByPath("Camera");
                var textCameraBehind3D = GameController.getInstance().canvasForTextBehind3D.getChildByPath("Camera");
                var bgCamera = GameController.getInstance().mainCanvas2.getChildByPath("Camera");
                var camera = GameController.getInstance().camera;
                var out = Quat.IDENTITY.clone();
                Quat.fromEuler(out, 0, 0, hasilRotation);
                var posTargetCam = new Vec3(0, 0, 0);
                camera.getComponent(Camera).worldToScreen(new Vec3(this.node.position.x, this.node.position.y, 0), posTargetCam);
                posTargetCam.divide3f(view.getScaleX(), view.getScaleY(), 1);
                posTargetCam.subtract(new Vec3(bgCamera.parent.getComponent(UITransform).width / 2, bgCamera.parent.getComponent(UITransform).height / 2, 0));
                this.tempPosTargetCam = posTargetCam;
                console.log('cam pome 1: ' + posTargetCam);
                console.log('cam pome 2: ' + this.node.position);
                tween(camera).to(0.3, {
                  position: new Vec3(this.node.position.x, this.node.position.y, 10)
                }, {
                  easing: easing.expoIn
                }).start();
                tween(camera).to(0.3, {
                  rotation: out
                }, {
                  easing: easing.expoIn
                }).start();
                tween(camera.getComponent(Camera)).to(0.15, {
                  orthoHeight: 5
                }, {
                  easing: easing.expoIn
                }).start();
                tween(textCamera).to(0.3, {
                  position: new Vec3(posTargetCam.x, posTargetCam.y, 1000)
                }, {
                  easing: easing.expoIn
                }).start();
                tween(textCamera).to(0.3, {
                  rotation: out
                }, {
                  easing: easing.expoIn
                }).start();
                tween(textCameraBehind3D).to(0.3, {
                  position: new Vec3(posTargetCam.x, posTargetCam.y, 1000)
                }, {
                  easing: easing.expoIn
                }).start();
                tween(textCameraBehind3D).to(0.3, {
                  rotation: out
                }, {
                  easing: easing.expoIn
                }).start();
                this.holdMe = false;
                tween(bgCamera).to(0.3, {
                  position: new Vec3(posTargetCam.x, posTargetCam.y, 1000)
                }, {
                  easing: easing.expoIn
                }).start();
                tween(bgCamera).to(0.3, {
                  rotation: out
                }, {
                  easing: easing.expoIn
                }).start();
                tween(bgCamera.getComponent(Camera)).to(0.3, {
                  orthoHeight: 200
                }, {
                  easing: easing.expoIn
                }).call(function () {
                  me.holdMe = false;
                  GameController.getInstance().setHoldInput(false);
                }).start();
                this.state = Fruit.STATE_SLICING;
                Fruit.CAMERA_ZOOMED = true;
              } else if (this.state == Fruit.STATE_SLICING) {
                if (!this.holdMe) {
                  GameController.getInstance().camera.setPosition(new Vec3(this.node.position.x, this.node.position.y, 10));
                  GameController.getInstance().camera.getComponent(ShakeNode).shakeEffect2(1, new Vec3(this.node.position.x, this.node.position.y, 10));
                  var _posTargetCam = this.tempPosTargetCam;
                  GameController.getInstance().mainCanvas2.getChildByPath("Camera").setPosition(new Vec3(_posTargetCam.x, _posTargetCam.y, 1000));
                  GameController.getInstance().mainCanvas2.getChildByPath("Camera").getComponent(ShakeNode).shakeEffect2(25, new Vec3(_posTargetCam.x, _posTargetCam.y, 1000));
                }
              }
            } else {
              if (this.slashed) return;
  
              if (this.isBerryBlast()) {
                SFXManager.getInstance().play(SFXManager.SFX_STRAWBERRY_SLICE);
                FruitManager.getInstance().destroyFruitInRadius(this.node.position, 6);
              }
  
              for (var i = 0; i < FruitManager.fruitList.length; i++) {
                var data = FruitManager.fruitList[i];
  
                if (data.id == this.node.name) {
                  if (data.impactSFX.includes("Wet")) {
                    var idx = randomRangeInt(1, 4);
  
                    if (data.impactSFX == "FruitImpactBigWet0") {
                      if (idx == 1) SFXManager.getInstance().play(SFXManager.SFX_IMPACT_BIG_WET_1);else if (idx == 2) SFXManager.getInstance().play(SFXManager.SFX_IMPACT_BIG_WET_2);else if (idx == 3) SFXManager.getInstance().play(SFXManager.SFX_IMPACT_BIG_WET_3);
                    } else if (data.impactSFX == "FruitImpactSmallWet0") {
                      if (idx == 1) SFXManager.getInstance().play(SFXManager.SFX_IMPACT_SMALL_WET_1);else if (idx == 2) SFXManager.getInstance().play(SFXManager.SFX_IMPACT_SMALL_WET_2);else if (idx == 3) SFXManager.getInstance().play(SFXManager.SFX_IMPACT_SMALL_WET_3);
                    } else if (data.impactSFX == "FruitImpactMediumWet0") {
                      if (idx == 1) SFXManager.getInstance().play(SFXManager.SFX_IMPACT_MEDIUM_WET_1);else if (idx == 2) SFXManager.getInstance().play(SFXManager.SFX_IMPACT_MEDIUM_WET_2);else if (idx == 3) SFXManager.getInstance().play(SFXManager.SFX_IMPACT_MEDIUM_WET_3);
                    }
                  } else {
                    if (data.impactSFX == "FruitImpactBigHollow") {
                      SFXManager.getInstance().play(SFXManager.SFX_FRUIT_IMPACT_BIG_HOLLOW);
                    } else if (data.impactSFX == "FruitImpactApple") {
                      SFXManager.getInstance().play(SFXManager.SFX_FRUIT_IMPACT_APPLE);
                    } else if (data.impactSFX == "FruitImpactMediumDry") {
                      SFXManager.getInstance().play(SFXManager.SFX_IMPACT_MEDIUM_DRY);
                    }
                  }
  
                  break;
                }
              }
  
              var _particleSliced;
  
              if (isCritical) {
                _particleSliced = FruitManager.getInstance().getCriticalParticle();
              } else {
                _particleSliced = FruitManager.getInstance().getSliceParticle(this.fruitIndex);
              }
  
              if (_particleSliced != null) {
                _particleSliced.setRotationFromEuler(0, 0, rotation + 90);
  
                _particleSliced.active = true;
  
                _particleSliced.setPosition(this.node.position);
  
                _particleSliced.setParent(FruitManager.getInstance().node);
  
                setTimeout(function () {
                  _particleSliced.active = false;
  
                  if (isCritical) {
                    FruitManager.getInstance().putCriticalParticle(_particleSliced);
                  } else {
                    FruitManager.getInstance().putSlicedParticle(_this2.fruitIndex, _particleSliced);
                  }
                }, 2000);
              }
  
              this.slashed = true;
  
              if (this.half1 != null && this.half2 != null) {
                this.isCritical = isCritical;
                var firstHalf = this.half1;
                var secondHalf = this.half2;
                firstHalf.active = true;
                secondHalf.active = true;
                firstHalf.setParent(this.node.parent);
                secondHalf.setParent(this.node.parent);
                firstHalf.setPosition(this.node.position);
                secondHalf.setPosition(this.node.position);
                firstHalf.setScale(this.node.scale);
                secondHalf.setScale(this.node.scale);
                var newRotation = new Vec3(0, 0, 0);
                newRotation.x = -90;
                newRotation.y = 0;
                newRotation.z = rotation;
  
                var _out = Quat.IDENTITY.clone();
  
                Quat.fromEuler(_out, -90, 0, rotation);
                firstHalf.setWorldRotation(_out);
                firstHalf.setRotationFromEuler(newRotation);
                newRotation = new Vec3(0, 0, 0);
                newRotation.x = -90;
                newRotation.y = 0;
                newRotation.z = rotation;
                _out = Quat.IDENTITY.clone();
                Quat.fromEuler(_out, -90, 0, rotation);
                secondHalf.setWorldRotation(_out);
                console.log('rotation: ' + rotation);
                var baseForce = 300;
  
                if (isCritical) {
                  baseForce = 3000;
                }
  
                var forceX = Math.sin(rotation * Math.PI / -180) * baseForce;
                var forceY = Math.cos(rotation * Math.PI / -180) * baseForce;
                firstHalf.getComponent(RigidBody).setLinearVelocity(new Vec3(0, 0, 0));
                firstHalf.getComponent(RigidBody).applyForce(new Vec3(forceX, forceY, 0));
                firstHalf.getComponent(RigidBody).setAngularVelocity(new Vec3(0, 0, 0));
                firstHalf.getComponent(RigidBody).applyLocalTorque(new Vec3(-200, 0, 0));
                forceX = Math.sin((rotation + 180) * Math.PI / -180) * baseForce;
                forceY = Math.cos((rotation + 180) * Math.PI / -180) * baseForce;
                console.log(forceX + ' ' + forceY + ' ' + rotation);
                secondHalf.getComponent(RigidBody).setLinearVelocity(new Vec3(0, 0, 0));
                secondHalf.getComponent(RigidBody).applyForce(new Vec3(forceX, forceY, 0));
                secondHalf.getComponent(RigidBody).setAngularVelocity(new Vec3(0, 0, 0));
                secondHalf.getComponent(RigidBody).applyLocalTorque(new Vec3(200, 0, 0));
                var halfTrail1;
                var halfTrail2;
  
                if (isCritical) {
                  halfTrail1 = FruitManager.getInstance().getCriticaTrail();
                  halfTrail2 = FruitManager.getInstance().getCriticaTrail();
                  halfTrail1.active = true;
                  halfTrail2.active = true;
                  halfTrail1.parent = firstHalf;
                  halfTrail2.parent = secondHalf;
                  if (firstHalf.getComponent(HalfFruit) == null) firstHalf.addComponent(HalfFruit);
                  if (secondHalf.getComponent(HalfFruit) == null) secondHalf.addComponent(HalfFruit);
                  var firstHalfFruit = firstHalf.getComponent(HalfFruit);
                  var secondHalfFruit = secondHalf.getComponent(HalfFruit);
                  firstHalfFruit.reset(halfTrail1);
                  secondHalfFruit.reset(halfTrail2);
                }
  
                this.getComponent(RigidBody).setLinearVelocity(new Vec3(0, 0, 0));
                this.node.active = false;
  
                if (this.particleShadow != null) {
                  this.particleShadow.getComponent(ParticleSystem).stop();
                }
  
                this.half1.getComponent(RigidBody).useGravity = true;
                this.half2.getComponent(RigidBody).useGravity = true;
              } else {
                this.getComponent(RigidBody).setLinearVelocity(new Vec3(0, 0, 0));
                this.node.active = false;
              }
            }
          };
  
          _proto.onEnable = function onEnable() {
            if (this.isPeachyTime()) {
              SFXManager.getInstance().playLoopSFX(SFXManager.SFX_PEACH_LOOP);
              this.startParticlePeachyTime();
            }
  
            if (this.isPomegranate()) {
              this.node.getChildByPath("pomegranate_single/particle_pomeTrailGlow").active = true;
              this.node.getChildByPath("pomegranate_single/particle_pomeTrail").active = true;
              Fruit.POMEGRANATE_ACTIVE = true;
              this.counter = 0;
              this.delaySlash = 0;
  
              if (this.jiblet.length > 0 && this.pomegranatePieces.length > 0) {
                SFXManager.getInstance().playLoopSFX(SFXManager.SFX_POME_SPARKLE__LP);
                this.state = Fruit.STATE_SHOW;
  
                for (var i = 0; i < this.pomegranatePieces.length; i++) {
                  this.jiblet[i].getComponent(FruitPhysics).setVelocity(new Vec3(0, 0, 0));
                  this.jiblet[i].active = false;
                  this.pomegranatePieces[i].getComponent(FruitPhysics).setVelocity(new Vec3(0, 0, 0));
                  this.pomegranatePieces[i].active = false;
                }
  
                this.particleBurst.active = false;
              }
            } else {
              if (this.isBerryBlast()) {
                SFXManager.getInstance().playLoopSFX(SFXManager.SFX_STRAWBERRY_LOOP);
              }
  
              if (this.half1 != null && this.half2 != null && this.half1.active && this.half2.active) {
                if (this.half1.getComponent(HalfFruit) != null) this.half1.getComponent(HalfFruit).hideEverything();
                if (this.half2.getComponent(HalfFruit) != null) this.half2.getComponent(HalfFruit).hideEverything();
  
                if (this.half1 && this.half1.getComponent(RigidBody)) {
                  this.half1.getComponent(RigidBody).setLinearVelocity(Vec3.zero);
                  this.half2.getComponent(RigidBody).setLinearVelocity(Vec3.zero);
                  this.half1.active = false;
                  this.half2.active = false;
                }
              }
            }
          };
  
          _proto.reset = function reset(setTorque) {
            if (setTorque === void 0) {
              setTorque = true;
            }
  
            if (this.node.getComponent(FruitPhysics) != null) this.node.getComponent(FruitPhysics).reset();
            this.paused = false;
            this.node.active = true;
            this.slashed = false;
            var rb = this.getComponent(RigidBody);
            rb.setLinearVelocity(new Vec3(0, 0, 0));
            rb.setAngularVelocity(new Vec3(0, 0, 0));
            rb.useGravity = this.keyMenu == "";
            if (setTorque) this.getComponent(RigidBody).applyTorque(new Vec3(randomRangeInt(-100, 100), randomRangeInt(-100, 100), randomRangeInt(-100, 100)));
            this.getComponent(RigidBody).angularDamping = 0;
  
            if (this.particleShadow != null) {
              this.particleShadow.getComponent(ParticleSystem).stop();
            }
          };
  
          _proto.update = function update(deltaTime) {
            if (GameController.getInstance().getGameState() == GameController.STATE_GAME_PAUSE) return;
  
            if (this.isPomegranate()) {
              if (this.state == Fruit.STATE_SLICING) {
                this.delaySlash -= deltaTime;
  
                if (this.delaySlash <= 0) {
                  this.slashed = false;
                }
  
                this.timerSlicing -= deltaTime;
  
                if (this.timerSlicing <= 0) {
                  var me = this;
                  this.state = Fruit.STATE_BURST;
                  var totalSlash = this.counter;
                  GameController.getInstance().updateScore(GameController.getInstance().score + totalSlash);
                  var textPomergranateSlice = FruitManager.getInstance().getTextPomegranateSlice();
                  var textPomegranateScore = FruitManager.getInstance().getTextPomegranateScore();
                  this.scheduleOnce(function () {
                    Fruit.CAMERA_ZOOMED = false;
                    var bladeCamera = GameController.getInstance().canvasBlade.getChildByPath("Camera");
                    var bgCamera = GameController.getInstance().mainCanvas2.getChildByPath("Camera");
                    var textCamera = GameController.getInstance().canvasForGameplayText.getChildByPath("Camera");
                    var textCameraBehind3D = GameController.getInstance().canvasForTextBehind3D.getChildByPath("Camera");
                    var camera = GameController.getInstance().camera;
                    var out = Quat.IDENTITY.clone();
                    Quat.fromEuler(out, 0, 0, 0);
                    var time = 0.3;
                    tween(camera).to(time, {
                      position: new Vec3(0, 0, 10)
                    }, {
                      easing: easing.expoIn
                    }).start();
                    tween(camera).to(time, {
                      rotation: out
                    }, {
                      easing: easing.expoIn
                    }).start();
                    tween(camera.getComponent(Camera)).to(0.3, {
                      orthoHeight: 10
                    }, {
                      easing: easing.expoIn
                    }).start();
                    tween(textCamera).to(time, {
                      position: new Vec3(0, 0, 1000)
                    }, {
                      easing: easing.expoIn
                    }).start();
                    tween(textCamera).to(time, {
                      rotation: out
                    }, {
                      easing: easing.expoIn
                    }).start();
                    tween(textCameraBehind3D).to(time, {
                      position: new Vec3(0, 0, 1000)
                    }, {
                      easing: easing.expoIn
                    }).start();
                    tween(textCameraBehind3D).to(time, {
                      rotation: out
                    }, {
                      easing: easing.expoIn
                    }).start();
                    tween(bgCamera).to(time, {
                      position: new Vec3(0, 0, 1000)
                    }, {
                      easing: easing.expoIn
                    }).start();
                    tween(bgCamera).to(time, {
                      rotation: out
                    }, {
                      easing: easing.expoIn
                    }).start();
                    tween(bgCamera.getComponent(Camera)).to(time, {
                      orthoHeight: 384
                    }, {
                      easing: easing.expoIn
                    }).call(function () {
                      me.scheduleOnce(function () {
                        GameController.IMMUNE = false;
                        ControllerBlade.getInstance().bladeTip.setScale(new Vec3(5, 5, 5));
                        FruitManager.PAUSE_SPAWNING = false;
                        FruitManager.HOLD_ALL_HALF_SCHEDULER = false;
                        var tempSlow = new Vec3(0.0001, 0, 0);
                        tween(tempSlow).to(1, {
                          x: 1
                        }, {
                          easing: easing.expoIn,
                          onUpdate: function onUpdate() {
                            FruitPhysics.PomegranateDtMultiplier = tempSlow.x;
                          }
                        }).start();
                        GameController.getInstance().camera.getComponent(ShakeNode).shakeEffect();
                        tween(textPomegranateScore).to(0.5, {
                          scale: new Vec3(1.5, 1.5, 1.5)
                        }).call(function () {
                          tween(textPomegranateScore).to(0.75, {
                            scale: new Vec3(0, 0, 0)
                          }).call(function () {
                            textPomegranateScore.active = false;
                          }).start();
                        }).start();
                        tween(textPomergranateSlice).to(0.5, {
                          scale: new Vec3(1.5, 1.5, 1.5)
                        }).call(function () {
                          tween(textPomergranateSlice).to(0.75, {
                            scale: new Vec3(0, 0, 0)
                          }).call(function () {
                            textPomergranateSlice.active = false;
                          }).start();
                        }).start();
                        me.burst(me.vRotation);
                        FruitManager.getInstance().scheduleOnce(function () {
                          for (var i = FruitManager.getInstance().activePomegranateRay.length - 1; i >= 0; i--) {
                            var ray = FruitManager.getInstance().activePomegranateRay.splice(i, 1)[0];
                            ray.active = false;
                            FruitManager.getInstance().poolPomegranateRay.push(ray);
                          }
                        }, 1.5);
                      }, 0.5);
                    }).start();
                  }, 0.25);
                }
              }
            } else {
              if (this.keyMenu == "") {
                if (GameController.TUTORIAL_STATE >= 1 && GameController.TUTORIAL_STATE <= 3) {
                  var fruitPos = this.node.position.clone();
                  var physics = this.node.getComponent(FruitPhysics);
  
                  if (fruitPos.y <= 0 && physics.velocity.y < 0) {
                    fruitPos.y = 0;
                    physics.pausePhysics = true;
                  }
  
                  this.node.setPosition(fruitPos);
                }
              }
            }
          };
  
          _createClass(Fruit, [{
            key: "particleShadow",
            get: function get() {
              return this._particleShadow;
            },
            set: function set(value) {
              this._particleShadow = value;
            }
          }]);
  
          return Fruit;
        }(Component), _defineProperty(_class3, "CAMERA_ZOOMED", false), _defineProperty(_class3, "POMEGRANATE_ACTIVE", false), _defineProperty(_class3, "BERRYBLAST_ACTIVE", false), _defineProperty(_class3, "STATE_SHOW", 0), _defineProperty(_class3, "STATE_SLICING", 1), _defineProperty(_class3, "STATE_BURST", 2), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "keyMenu", [_dec2], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function initializer() {
            return "";
          }
        }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "fruitName", [_dec3], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function initializer() {
            return "";
          }
        }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "colliderRadius", [_dec4], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function initializer() {
            return 0;
          }
        })), _class2)) || _class));
  
        cclegacy._RF.pop();
      }
    };
  });
  
  System.register("chunks:///_virtual/BlitzManager.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './SFXManager.ts', './GameController.ts'], function (exports) {
    'use strict';
  
    var _defineProperty, _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, UIOpacity, lerp, instantiate, Vec3, Animation, Component, SFXManager, GameController;
  
    return {
      setters: [function (module) {
        _defineProperty = module.defineProperty;
        _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
        _inheritsLoose = module.inheritsLoose;
        _initializerDefineProperty = module.initializerDefineProperty;
        _assertThisInitialized = module.assertThisInitialized;
      }, function (module) {
        cclegacy = module.cclegacy;
        _decorator = module._decorator;
        Prefab = module.Prefab;
        UIOpacity = module.UIOpacity;
        lerp = module.lerp;
        instantiate = module.instantiate;
        Vec3 = module.Vec3;
        Animation = module.Animation;
        Component = module.Component;
      }, function (module) {
        SFXManager = module.SFXManager;
      }, function (module) {
        GameController = module.GameController;
      }],
      execute: function () {
        var _dec, _dec2, _class, _class2, _descriptor, _class3, _temp;
  
        cclegacy._RF.push({}, "545d9ME/PlENZ3gIRzYmQaX", "BlitzManager", undefined);
  
        var ccclass = _decorator.ccclass,
            property = _decorator.property;
        var BlitzManager = exports('BlitzManager', (_dec = ccclass('BlitzManager'), _dec2 = property({
          type: [Prefab],
          displayName: "List Prefab Blitz Text"
        }), _dec(_class = (_class2 = (_temp = _class3 = /*#__PURE__*/function (_Component) {
          _inheritsLoose(BlitzManager, _Component);
  
          function BlitzManager() {
            var _this;
  
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
  
            _this = _Component.call.apply(_Component, [this].concat(args)) || this;
  
            _initializerDefineProperty(_assertThisInitialized(_this), "listPrefabBlitzText", _descriptor, _assertThisInitialized(_this));
  
            _defineProperty(_assertThisInitialized(_this), "timerWindow", 0);
  
            _defineProperty(_assertThisInitialized(_this), "comboTimeWindow", 4);
  
            _defineProperty(_assertThisInitialized(_this), "timeWindowIncreasePerSlice", 0.3);
  
            _defineProperty(_assertThisInitialized(_this), "level", 0);
  
            _defineProperty(_assertThisInitialized(_this), "levelCap", 6);
  
            _defineProperty(_assertThisInitialized(_this), "levelIncreaseFruitRequirement", 8);
  
            _defineProperty(_assertThisInitialized(_this), "nextLevelFruitRequirement", 0);
  
            _defineProperty(_assertThisInitialized(_this), "fruitSliceCounter", 0);
  
            _defineProperty(_assertThisInitialized(_this), "pointPerBlitzLevel", 5);
  
            _defineProperty(_assertThisInitialized(_this), "startTimer", false);
  
            _defineProperty(_assertThisInitialized(_this), "dtMultiplier", 1);
  
            return _this;
          }
  
          BlitzManager.getInstance = function getInstance() {
            return BlitzManager.Instance;
          };
  
          var _proto = BlitzManager.prototype;
  
          _proto.onLoad = function onLoad() {
            BlitzManager.Instance = this;
          };
  
          _proto.start = function start() {};
  
          _proto.isActive = function isActive() {
            return this.startTimer;
          };
  
          _proto.reset = function reset() {
            SFXManager.getInstance().stopLoopSFX(SFXManager.SFX_BLITZ_DRUM);
            GameController.Instance.gameplayScreen.getChildByPath("BlitzOverlay").active = false;
            GameController.Instance.gameplayScreen.getChildByPath("BlitzOverlay").getComponent(UIOpacity).opacity = 0;
            this.startTimer = false;
            this.dtMultiplier = 1;
            this.timerWindow = 0;
            this.level = 0;
            this.fruitSliceCounter = 0;
            this.nextLevelFruitRequirement = this.levelIncreaseFruitRequirement;
          };
  
          _proto.update = function update(deltaTime) {
            if (GameController.getInstance().getGameState() == GameController.STATE_GAME_PLAYING) {
              if (this.startTimer) {
                this.timerWindow += deltaTime * this.dtMultiplier;
                GameController.Instance.gameplayScreen.getChildByPath("BlitzOverlay").getComponent(UIOpacity).opacity = lerp(0, 10, (this.comboTimeWindow - this.timerWindow) / 2);
  
                if (this.timerWindow >= this.comboTimeWindow) {
                  SFXManager.getInstance().play(SFXManager.SFX_BLITZ_DRUM_END);
                  this.reset();
                }
              }
            }
          };
  
          _proto.showBlitzText = function showBlitzText() {
            GameController.getInstance().blitzCount += 1;
            var textBlitz = instantiate(this.listPrefabBlitzText[this.level - 1]);
            textBlitz.active = true;
            var oldPos = GameController.getInstance().getLastFruitSlashedPosition();
            GameController.getInstance().updateScore(GameController.getInstance().score + this.level * this.pointPerBlitzLevel);
            textBlitz.setPosition(new Vec3(0, 0, 0));
            textBlitz.setParent(GameController.Instance.canvasForGameplayText);
            textBlitz.getComponent(Animation).play("blitzText_in");
            textBlitz.getComponent(Animation).on(Animation.EventType.FINISHED, function () {
              textBlitz.destroy();
            }, this, true);
          };
  
          _proto.onFruitSliced = function onFruitSliced() {
            this.timerWindow = Math.max(0, this.timerWindow - this.timeWindowIncreasePerSlice);
          };
  
          _proto.addFruitSliceCounter = function addFruitSliceCounter(totalCombo) {
            this.startTimer = true;
            this.fruitSliceCounter += totalCombo;
  
            if (this.fruitSliceCounter >= this.nextLevelFruitRequirement) {
              this.fruitSliceCounter = this.nextLevelFruitRequirement;
              this.level = Math.min(this.level + 1, this.levelCap);
              this.timerWindow = 0;
              this.nextLevelFruitRequirement += this.levelIncreaseFruitRequirement;
              this.showBlitzText();
              SFXManager.getInstance().play(SFXManager.SFX_BLITZ_1 + (this.level - 1));
  
              if (this.level == 1) {
                GameController.Instance.gameplayScreen.getChildByPath("BlitzOverlay").active = true;
                GameController.Instance.gameplayScreen.getChildByPath("BlitzOverlay").getComponent(Animation).play("overlay_idle");
                SFXManager.getInstance().playLoopSFX(SFXManager.SFX_BLITZ_DRUM);
              }
  
              GameController.Instance.gameplayScreen.getChildByPath("BlitzOverlay").getComponent(UIOpacity).opacity = 10;
            }
          };
  
          return BlitzManager;
        }(Component), _defineProperty(_class3, "Instance", void 0), _temp), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "listPrefabBlitzText", [_dec2], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function initializer() {
            return [];
          }
        }), _class2)) || _class));
  
        cclegacy._RF.pop();
      }
    };
  });
  
  System.register("chunks:///_virtual/TextDeflect.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './FruitManager.ts'], function (exports) {
    'use strict';
  
    var _inheritsLoose, _defineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Animation, Component, FruitManager;
  
    return {
      setters: [function (module) {
        _inheritsLoose = module.inheritsLoose;
        _defineProperty = module.defineProperty;
        _assertThisInitialized = module.assertThisInitialized;
        _createClass = module.createClass;
      }, function (module) {
        cclegacy = module.cclegacy;
        _decorator = module._decorator;
        Animation = module.Animation;
        Component = module.Component;
      }, function (module) {
        FruitManager = module.FruitManager;
      }],
      execute: function () {
        var _dec, _class, _temp;
  
        cclegacy._RF.push({}, "5655axo/X9AlZ9a7wV8E7av", "TextDeflect", undefined);
  
        var ccclass = _decorator.ccclass,
            property = _decorator.property;
        var TextDeflect = exports('TextDeflect', (_dec = ccclass('TextDeflect'), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
          _inheritsLoose(TextDeflect, _Component);
  
          function TextDeflect() {
            var _this;
  
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
  
            _this = _Component.call.apply(_Component, [this].concat(args)) || this;
  
            _defineProperty(_assertThisInitialized(_this), "flagTimer", false);
  
            _defineProperty(_assertThisInitialized(_this), "_timer", 0);
  
            return _this;
          }
  
          var _proto = TextDeflect.prototype;
  
          _proto.onLoad = function onLoad() {};
  
          _proto.start = function start() {};
  
          _proto.update = function update(deltaTime) {
            var _this2 = this;
  
            if (this.node.active) {
              this.timer -= deltaTime;
  
              if (this.timer < 0 && !this.flagTimer) {
                this.flagTimer = true;
                this.node.getComponent(Animation).play("deflect_text_out");
                this.node.getComponent(Animation).once(Animation.EventType.FINISHED, function () {
                  FruitManager.getInstance().putTextDeflect(_this2.node);
                });
              }
            }
          };
  
          _proto.resetTimer = function resetTimer(timer) {
            this.timer = timer;
            this.flagTimer = false;
          };
  
          _createClass(TextDeflect, [{
            key: "timer",
            get: function get() {
              return this._timer;
            },
            set: function set(value) {
              this._timer = value;
            }
          }]);
  
          return TextDeflect;
        }(Component), _temp)) || _class));
  
        cclegacy._RF.pop();
      }
    };
  });
  
  System.register("chunks:///_virtual/ColorAssembler2D.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
    'use strict';
  
    var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Color, director, Director, Component;
  
    return {
      setters: [function (module) {
        _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
        _inheritsLoose = module.inheritsLoose;
        _initializerDefineProperty = module.initializerDefineProperty;
        _assertThisInitialized = module.assertThisInitialized;
      }, function (module) {
        cclegacy = module.cclegacy;
        _decorator = module._decorator;
        Color = module.Color;
        director = module.director;
        Director = module.Director;
        Component = module.Component;
      }],
      execute: function () {
        var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp;
  
        cclegacy._RF.push({}, "5ed4cW/5v1F7pgF6o9lUgrE", "ColorAssembler2D", undefined);
  
        var ccclass = _decorator.ccclass,
            property = _decorator.property;
        var ColorAssembler2D = exports('ColorAssembler2D', (_dec = ccclass('ColorAssembler2D'), _dec2 = property({
          type: [Color],
          displayName: "Color Top Left"
        }), _dec3 = property({
          type: [Color],
          displayName: "Color Top Right"
        }), _dec4 = property({
          type: [Color],
          displayName: "Color Bottom Left"
        }), _dec5 = property({
          type: [Color],
          displayName: "Color Bottom Right"
        }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
          _inheritsLoose(ColorAssembler2D, _Component);
  
          function ColorAssembler2D() {
            var _this;
  
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
  
            _this = _Component.call.apply(_Component, [this].concat(args)) || this;
  
            _initializerDefineProperty(_assertThisInitialized(_this), "colorTL", _descriptor, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "colorTR", _descriptor2, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "colorBL", _descriptor3, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "colorBR", _descriptor4, _assertThisInitialized(_this));
  
            return _this;
          }
  
          var _proto = ColorAssembler2D.prototype;
  
          _proto.onEnable = function onEnable() {
            director.once(Director.EVENT_AFTER_DRAW, this._updateColors, this);
          };
  
          _proto.onDisable = function onDisable() {
            director.off(Director.EVENT_AFTER_DRAW, this._updateColors, this);
          };
  
          _proto._updateColors = function _updateColors() {};
  
          return ColorAssembler2D;
        }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "colorTL", [_dec2], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "colorTR", [_dec3], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "colorBL", [_dec4], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "colorBR", [_dec5], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        })), _class2)) || _class));
  
        cclegacy._RF.pop();
      }
    };
  });
  
  System.register("chunks:///_virtual/ServerManager.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
    'use strict';
  
    var _defineProperty, cclegacy, _decorator;
  
    return {
      setters: [function (module) {
        _defineProperty = module.defineProperty;
      }, function (module) {
        cclegacy = module.cclegacy;
        _decorator = module._decorator;
      }],
      execute: function () {
        var _dec, _class, _class2, _temp;
  
        cclegacy._RF.push({}, "62155hpLgtN3qNfmJs68NKY", "ServerManager", undefined);
  
        var ccclass = _decorator.ccclass,
            property = _decorator.property;
        globalThis.id_user = "";
        globalThis.isLocal = false;
        var ServerManager = exports('ServerManager', (_dec = ccclass('ServerManager'), _dec(_class = (_temp = _class2 = /*#__PURE__*/function () {
          function ServerManager() {}
  
          ServerManager.getInstance = function getInstance() {
            if (this.Instance == null) {
              ServerManager.Instance = new ServerManager();
            }
  
            return ServerManager.Instance;
          };
  
          return ServerManager;
        }(), _defineProperty(_class2, "Instance", null), _temp)) || _class));
  
        cclegacy._RF.pop();
      }
    };
  });
  
  System.register("chunks:///_virtual/PopupMission.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './SFXManager.ts', './MissionManager.ts', './Data.ts', './LevelManager.ts', './SceneHomescreen.ts', './MissionLabel.ts', './GameController.ts'], function (exports) {
    'use strict';
  
    var _inheritsLoose, _defineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Animation, Vec3, tween, Component, SFXManager, MissionManager, Data, LevelManager, SceneHomescreen, MissionLabel, GameController;
  
    return {
      setters: [function (module) {
        _inheritsLoose = module.inheritsLoose;
        _defineProperty = module.defineProperty;
        _assertThisInitialized = module.assertThisInitialized;
      }, function (module) {
        cclegacy = module.cclegacy;
        _decorator = module._decorator;
        Label = module.Label;
        Animation = module.Animation;
        Vec3 = module.Vec3;
        tween = module.tween;
        Component = module.Component;
      }, function (module) {
        SFXManager = module.SFXManager;
      }, function (module) {
        MissionManager = module.MissionManager;
      }, function (module) {
        Data = module.Data;
      }, function (module) {
        LevelManager = module.LevelManager;
      }, function (module) {
        SceneHomescreen = module.SceneHomescreen;
      }, function (module) {
        MissionLabel = module.MissionLabel;
      }, function (module) {
        GameController = module.GameController;
      }],
      execute: function () {
        var _dec, _class, _temp;
  
        cclegacy._RF.push({}, "625d6JQb5RMcpritewxLviL", "PopupMission", undefined);
  
        var ccclass = _decorator.ccclass,
            property = _decorator.property;
        var PopupMission = exports('PopupMission', (_dec = ccclass('PopupMission'), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
          _inheritsLoose(PopupMission, _Component);
  
          function PopupMission() {
            var _this;
  
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
  
            _this = _Component.call.apply(_Component, [this].concat(args)) || this;
  
            _defineProperty(_assertThisInitialized(_this), "holdInput", false);
  
            return _this;
          }
  
          var _proto = PopupMission.prototype;
  
          _proto.onEnable = function onEnable() {
            this.refreshMissionUI();
            this.setHoldInput(false);
            var listAnalyticId = [];
  
            for (var i = 0; i < MissionManager.getInstance().activeMission.length; i++) {
              listAnalyticId.push(MissionManager.getInstance().activeMission[i].analytic_id);
            }
          };
  
          _proto.refreshMissionUI = function refreshMissionUI() {
            var me = this;
  
            for (var i = 0; i < MissionManager.getInstance().activeMission.length; i++) {
              var curMission = MissionManager.getInstance().activeMission[i];
              this.node.getChildByPath("cont_Popup/popup/cont_mission/cont_missionEntry" + (i + 1) + "/cont_backingComplete").active = curMission.current >= curMission.target && !curMission.claimed;
              this.node.getChildByPath("cont_Popup/popup/cont_mission/cont_missionEntry" + (i + 1) + "/missionEntry").getComponent(MissionLabel).refresh(curMission, "popup_mission");
              this.node.getChildByPath("cont_Popup/popup/cont_mission/cont_missionEntry" + (i + 1) + "/missionEntry").getComponent(MissionLabel).setOnClaimed(function () {
                me.refreshMissionUI();
                GameController.getInstance().mainCanvas.getChildByPath("homescreen").getComponent(SceneHomescreen).checkUnclaimedMissionReward();
              });
            }
          };
  
          _proto.setHoldInput = function setHoldInput(value) {
            this.holdInput = value;
  
            for (var i = 0; i < MissionManager.getInstance().activeMission.length; i++) {
              this.node.getChildByPath("cont_Popup/popup/cont_mission/cont_missionEntry" + (i + 1) + "/missionEntry").getComponent(MissionLabel).setHoldInput(this.holdInput);
            }
          };
  
          _proto.showAnimationClaimed = function showAnimationClaimed(data, from) {
            var me = this;
            GameController.getInstance().setHoldInput(true);
            this.setHoldInput(true);
            var starfruitTop = this.node.getChildByPath("cont_Exp_Starfruit/StarfruitLabel/text_starfruitTop");
            starfruitTop.getComponent(Label).string = GameController.getInstance().formatNumber(parseInt(Data.getInstance().starFruit.toFixed(0)));
  
            if (data.rewardType == "xp") {
              var totalExpReceived = 0;
              if (data.rewardSize == "small") totalExpReceived = 75;else if (data.rewardSize == "medium") totalExpReceived = 100;else if (data.rewardSize == "large") totalExpReceived = 125;
              this.node.getChildByPath("cont_Exp_Starfruit").getComponent(Animation).play("expStarfruit_label_in");
              this.node.getChildByPath("cont_Exp_Starfruit").getComponent(Animation).on(Animation.EventType.FINISHED, function () {
                var curDataLevel = LevelManager.getInstance().getDataLevelFromTotalExp();
  
                if (curDataLevel.level < LevelManager.getInstance().levelCap) {
                  var target = me.node.getChildByPath("cont_Exp_Starfruit/levelLabel/text_LevelAngka");
                  var XPBarBack = me.node.getChildByPath("cont_Exp_Starfruit/levelLabel/XPBarBack");
                  var XPBarFill = me.node.getChildByPath("cont_Exp_Starfruit/levelLabel/XPBarFill");
                  var XPBarFill_transparant = me.node.getChildByPath("cont_Exp_Starfruit/levelLabel/XPBarFill_transparant");
                  var textLevel = me.node.getChildByPath("cont_Exp_Starfruit/levelLabel/text_LevelAngka");
                  GameController.getInstance().playExpIncrease(from, target, XPBarBack, XPBarFill, XPBarFill_transparant, curDataLevel, totalExpReceived, textLevel, "popup_mission", function () {
                    me.node.getChildByPath("cont_Exp_Starfruit").getComponent(Animation).play("expStarfruit_label_out");
                    GameController.getInstance().setHoldInput(false);
                    me.setHoldInput(false);
                    GameController.getInstance().mainCanvas.getChildByPath("homescreen").getComponent(SceneHomescreen).updateLevelBar();
                  });
                } else {
                  GameController.getInstance().setHoldInput(false);
                  me.setHoldInput(false);
                }
              }, this, true);
            } else if (data.rewardType == "starfruit") {
              var starFruitReward = 0;
              if (data.rewardSize == "small") starFruitReward = 50;else if (data.rewardSize == "medium") starFruitReward = 100;else if (data.rewardSize == "large") starFruitReward = 150;
              this.node.getChildByPath("cont_Exp_Starfruit").getComponent(Animation).play("expStarfruit_label_in");
              this.node.getChildByPath("cont_Exp_Starfruit").getComponent(Animation).on(Animation.EventType.FINISHED, function () {
                var trailStarFruit = GameController.Instance.particleTrailStarfruit;
                var starfruitTop = me.node.getChildByPath("cont_Exp_Starfruit/StarfruitLabel/text_starfruitTop");
                starfruitTop.getComponent(Label).string = GameController.getInstance().formatNumber(parseInt(Data.getInstance().starFruit.toFixed(0)));
                var vecTemp = new Vec3(Data.getInstance().starFruit, 0, 0);
                Data.getInstance().starFruit += starFruitReward;
                GameController.getInstance().playStarfruitIncrement(starFruitReward);
                tween(vecTemp).delay(0.5).to(0.5, {
                  x: Data.getInstance().starFruit
                }, {
                  onUpdate: function onUpdate() {
                    starfruitTop.getComponent(Label).string = GameController.getInstance().formatNumber(parseInt(vecTemp.x.toFixed(0)));
                  }
                }).call(function () {
                  me.node.getChildByPath("cont_Exp_Starfruit").getComponent(Animation).play("expStarfruit_label_out");
                  GameController.getInstance().setHoldInput(false);
                  me.setHoldInput(false);
                }).start();
                trailStarFruit.setWorldPosition(Data.getInstance().convert2DPosTo3D(from.worldPosition));
                var targetPos = me.node.getChildByPath("cont_Exp_Starfruit/StarfruitLabel/starfruitLabelIcon").worldPosition;
                tween(trailStarFruit).to(0.5, {
                  worldPosition: Data.getInstance().convert2DPosTo3D(targetPos)
                }).start();
                GameController.saveData();
              }, this, true);
            }
          };
  
          _proto.start = function start() {};
  
          _proto.update = function update(deltaTime) {
            this.node.getChildByPath("cont_Popup/popup/cont_mission/headerWood/text_Timer").getComponent(Label).string = GameController.getInstance().secondToString(GameController.getInstance().getSecondToNextDay());
          };
  
          _proto.btnCloseClicked = function btnCloseClicked() {
            if (this.holdInput) return;
            SFXManager.getInstance().play(SFXManager.SFX_SELECT);
            var me = this;
            var anim = this.node.getComponent(Animation);
            anim.play("popupMissions_out");
            anim.on(Animation.EventType.FINISHED, function () {
              me.node.active = false;
              GameController.getInstance().setHoldInput(false);
            }, this, true);
          };
  
          return PopupMission;
        }(Component), _temp)) || _class));
  
        cclegacy._RF.pop();
      }
    };
  });
  
  System.register("chunks:///_virtual/ScenePopupBonusArcade.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './SFXManager.ts', './ResourcesManager.ts', './SceneGameplay.ts', './GameController.ts', './ArcadeBonusBoardController.ts'], function (exports) {
    'use strict';
  
    var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _defineProperty, cclegacy, _decorator, Prefab, instantiate, Vec3, UITransform, Animation, Label, SpriteFrame, Sprite, ParticleSystem, Component, easing, Vec2, tween, SFXManager, ResourcesManager, SceneGameplay, GameController, ArcadeBonusBoardController;
  
    return {
      setters: [function (module) {
        _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
        _inheritsLoose = module.inheritsLoose;
        _initializerDefineProperty = module.initializerDefineProperty;
        _assertThisInitialized = module.assertThisInitialized;
        _defineProperty = module.defineProperty;
      }, function (module) {
        cclegacy = module.cclegacy;
        _decorator = module._decorator;
        Prefab = module.Prefab;
        instantiate = module.instantiate;
        Vec3 = module.Vec3;
        UITransform = module.UITransform;
        Animation = module.Animation;
        Label = module.Label;
        SpriteFrame = module.SpriteFrame;
        Sprite = module.Sprite;
        ParticleSystem = module.ParticleSystem;
        Component = module.Component;
        easing = module.easing;
        Vec2 = module.Vec2;
        tween = module.tween;
      }, function (module) {
        SFXManager = module.SFXManager;
      }, function (module) {
        ResourcesManager = module.ResourcesManager;
      }, function (module) {
        SceneGameplay = module.SceneGameplay;
      }, function (module) {
        GameController = module.GameController;
      }, function (module) {
        ArcadeBonusBoardController = module.ArcadeBonusBoardController;
      }],
      execute: function () {
        var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp;
  
        cclegacy._RF.push({}, "66edfEJnShE24ga7+i9qznR", "ScenePopupBonusArcade", undefined);
  
        var ccclass = _decorator.ccclass,
            property = _decorator.property;
        var ScenePopupBonusArcade = exports('ScenePopupBonusArcade', (_dec = ccclass('ScenePopupBonusArcade'), _dec2 = property({
          type: Prefab,
          displayName: "Prefab bonus trail"
        }), _dec3 = property({
          type: Prefab,
          displayName: "Prefab bonus increment"
        }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
          _inheritsLoose(ScenePopupBonusArcade, _Component);
  
          function ScenePopupBonusArcade() {
            var _this;
  
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
  
            _this = _Component.call.apply(_Component, [this].concat(args)) || this;
  
            _initializerDefineProperty(_assertThisInitialized(_this), "prefabBonusTrail", _descriptor, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "prefabBonusIncrement", _descriptor2, _assertThisInitialized(_this));
  
            _defineProperty(_assertThisInitialized(_this), "onExit", null);
  
            _defineProperty(_assertThisInitialized(_this), "topThreeData", []);
  
            _defineProperty(_assertThisInitialized(_this), "activeBonusTrail", []);
  
            _defineProperty(_assertThisInitialized(_this), "activeBonusIncrement", []);
  
            return _this;
          }
  
          var _proto = ScenePopupBonusArcade.prototype;
  
          _proto.start = function start() {};
  
          _proto.update = function update(deltaTime) {};
  
          _proto.show = function show(onShow, onExit) {
            var me = this;
  
            if (this.activeBonusTrail.length == 0) {
              for (var i = 0; i < 6; i++) {
                var trail = instantiate(this.prefabBonusTrail);
                trail.setParent(this.node);
                this.activeBonusTrail.push(trail);
                trail.setPosition(new Vec3(0, 0, 0));
              }
            }
  
            if (this.activeBonusIncrement.length == 0) {
              for (var _i = 0; _i < 5; _i++) {
                var bonus = instantiate(this.prefabBonusIncrement);
                bonus.setParent(this.node);
                this.activeBonusIncrement.push(bonus);
                bonus.setPosition(new Vec3(0, 0, 0));
              }
            }
  
            var wCont = this.node.getComponent(UITransform).width;
            var hCont = this.node.getComponent(UITransform).height;
  
            for (var _i2 = 0; _i2 < this.activeBonusTrail.length; _i2++) {
              this.activeBonusTrail[_i2].setPosition(new Vec3(-wCont, hCont, 0));
            }
  
            for (var _i3 = 0; _i3 < this.activeBonusIncrement.length; _i3++) {
              this.activeBonusIncrement[_i3].setPosition(new Vec3(-wCont, hCont, 0));
            }
  
            this.onExit = onExit;
            this.node.getChildByPath("popup/text_score").active = false;
            this.node.getChildByPath("popup/layoutBonus/ArcadeBonusEntry_1").active = false;
            this.node.getChildByPath("popup/layoutBonus/ArcadeBonusEntry_2").active = false;
            this.node.getChildByPath("popup/layoutBonus/ArcadeBonusEntry_3").active = false;
            this.node.getChildByPath("popup/particle_bonusBrownBurst_1").active = false;
            this.node.getChildByPath("popup/particle_bonusBrownBurst_2").active = false;
            this.node.getChildByPath("popup/particle_bonusRedBurst_1").active = false;
            this.node.getChildByPath("popup/particle_bonusRedBurst_2").active = false;
            this.node.getChildByPath("popup/particle_bonusBlueBurst_1").active = false;
            this.node.getChildByPath("popup/particle_bonusBlueBurst_2").active = false;
            this.node.getChildByPath("popup/particle_bonusTotalBurst").active = false;
            this.node.getChildByPath("cont_particle_bonusConfetti").active = false;
            this.topThreeData = ArcadeBonusBoardController.getInstance().getTopThreeBonus();
            var anim = this.node.getComponent(Animation);
            anim.play("inGameBonusPopup_in");
            anim.on(Animation.EventType.FINISHED, function () {
              SFXManager.getInstance().playLoopSFX(SFXManager.SFX_BONUS_DRUM_ROLL_LOOP);
              me.scheduleOnce(function () {
                onShow();
              }, 1);
            }, this, true);
          };
  
          _proto.tryShowBonus = function tryShowBonus(index) {
            var _this2 = this;
  
            var me = this;
            var totalPoint = 0;
  
            for (var i = 0; i < this.topThreeData.length; i++) {
              totalPoint += this.topThreeData[i].point;
            }
  
            if (index == 4) {
              this.node.getChildByPath("popup/text_score").active = true;
              this.node.getChildByPath("popup/particle_bonusTotalBurst").active = true;
              this.node.getChildByPath("popup/text_score").getComponent(Label).string = "" + totalPoint;
              SFXManager.getInstance().play(SFXManager.SFX_BONUS_APPLAUSE);
              SFXManager.getInstance().stopLoopSFX(SFXManager.SFX_BONUS_DRUM_ROLL_LOOP);
            } else if (index >= 1 && index <= 3) {
              this.node.getChildByPath("popup/layoutBonus/ArcadeBonusEntry_" + index).active = true;
              var data = this.topThreeData[index - 1];
              var textBonus = data.text;
              if (data.type == "BEST_BONUS_COMBO") textBonus = GameController.stringFormat(textBonus, ArcadeBonusBoardController.getInstance().comboCounter);
              me.node.getChildByPath("popup/layoutBonus/ArcadeBonusEntry_" + index + "/bonus_icon_backing/bonus_icon").active = false;
              ResourcesManager.getInstance().loadResources("UI/InGameBonuses/" + data.path + "/spriteFrame", SpriteFrame, function (sf) {
                me.node.getChildByPath("popup/layoutBonus/ArcadeBonusEntry_" + index + "/bonus_icon_backing/bonus_icon").getComponent(Sprite).spriteFrame = sf;
                me.node.getChildByPath("popup/layoutBonus/ArcadeBonusEntry_" + index + "/bonus_icon_backing/bonus_icon").active = true;
              });
              this.node.getChildByPath("popup/layoutBonus/ArcadeBonusEntry_" + index + "/text_bonusOutline/text_bonus").getComponent(Label).string = textBonus;
              this.node.getChildByPath("popup/layoutBonus/ArcadeBonusEntry_" + index + "/text_bonusScoreOutline").getComponent(Label).string = data.point;
              this.node.getChildByPath("popup/layoutBonus/ArcadeBonusEntry_" + index + "/text_bonusScoreOutline/text_bonusScore").getComponent(Label).string = data.point;
  
              if (index == 1) {
                SFXManager.getInstance().play(SFXManager.SFX_BONUS_EXPLOSION_1);
                this.node.getChildByPath("popup/particle_bonusBrownBurst_1").active = true;
                this.node.getChildByPath("popup/particle_bonusBrownBurst_2").active = true;
              } else if (index == 2) {
                SFXManager.getInstance().play(SFXManager.SFX_BONUS_EXPLOSION_2);
                this.node.getChildByPath("popup/particle_bonusRedBurst_1").active = true;
                this.node.getChildByPath("popup/particle_bonusRedBurst_2").active = true;
              } else if (index == 3) {
                SFXManager.getInstance().play(SFXManager.SFX_BONUS_EXPLOSION_3);
                this.node.getChildByPath("popup/particle_bonusBlueBurst_1").active = true;
                this.node.getChildByPath("popup/particle_bonusBlueBurst_2").active = true;
              }
            }
  
            var anim = this.node.getComponent(Animation);
  
            if (index <= 4) {
              anim.play("inGameBonusPopup_shake");
              anim.on(Animation.EventType.FINISHED, function () {
                me.tryShowBonus(index + 1);
              }, this, true);
            } else if (index == 5) {
              (function () {
                var me = _this2;
  
                var wCont = _this2.node.getComponent(UITransform).width;
  
                var hCont = _this2.node.getComponent(UITransform).height;
  
                var _loop = function _loop(_i4) {
                  var idx = _i4;
  
                  _this2.activeBonusTrail[_i4].getComponent(ParticleSystem).play();
  
                  _this2.activeBonusTrail[_i4].getChildByPath("trail").getComponent(ParticleSystem).play();
  
                  _this2.activeBonusTrail[_i4].setWorldPosition(_this2.node.getChildByPath("popup/text_score").worldPosition.clone());
  
                  var ease = easing.expoIn;
                  if (_i4 % 3 == 0) ease = easing.expoOut;else if (_i4 % 2 == 0) ease = easing.linear;else ease = easing.expoIn;
                  var gameplayLeaderboard = GameController.getInstance().gameplayScreen.getComponent(SceneGameplay).gameplayLeaderboard;
                  var finalPosition = gameplayLeaderboard.labelRank[0].worldPosition.clone();
                  var startPosition = new Vec2(_this2.activeBonusTrail[_i4].worldPosition.x, _this2.activeBonusTrail[_i4].worldPosition.y);
                  tween(startPosition).delay(0.15 * _i4).to(1.5, {
                    y: finalPosition.y
                  }, {
                    easing: ease,
                    onUpdate: function onUpdate() {
                      var pos = _this2.activeBonusTrail[_i4].worldPosition.clone();
  
                      pos.y = startPosition.y;
  
                      _this2.activeBonusTrail[_i4].setWorldPosition(pos);
                    }
                  }).start();
                  tween(startPosition).delay(0.15 * _i4).to(1.5, {
                    x: finalPosition.x
                  }, {
                    onUpdate: function onUpdate() {
                      var pos = _this2.activeBonusTrail[_i4].worldPosition.clone();
  
                      pos.x = startPosition.x;
  
                      _this2.activeBonusTrail[_i4].setWorldPosition(pos);
                    }
                  }).call(function () {
                    me.activeBonusTrail[idx].getComponent(ParticleSystem).stop();
                    me.activeBonusTrail[idx].getChildByPath("trail").getComponent(ParticleSystem).stop();
  
                    if (idx == 0) {
                      var vecTemp = new Vec3(GameController.getInstance().score, 0, 0);
                      var finalScore = GameController.getInstance().score + totalPoint;
                      GameController.getInstance().score += totalPoint;
                      GameController.bestScore = Math.max(GameController.bestScore, GameController.getInstance().score);
  
                      if (GameController.context_type != "solo") {
                        if (GameController.getInstance().score > GameController.getInstance().sessionBestScore) {
                          GameController.getInstance().sessionBestScore = Math.max(GameController.getInstance().sessionBestScore, GameController.getInstance().score);
                        }
                      }
  
                      GameController.getInstance().playStarfruitIncrement(totalPoint);
                      var totalPlayed = 19;
                      var curDelay = 0.1;
  
                      for (var _i6 = 0; _i6 < totalPlayed; _i6++) {
                        me.scheduleOnce(function () {
                          SFXManager.getInstance().play(SFXManager.SFX_UI_STARFRUIT_INCREMENT);
                        }, curDelay);
                        curDelay += 0.1;
                      }
  
                      tween(vecTemp).to(2, {
                        x: finalScore
                      }, {
                        onUpdate: function onUpdate() {
                          GameController.getInstance().updateScore(Math.round(vecTemp.x));
                        }
                      }).start();
                    }
  
                    if (idx < me.activeBonusIncrement.length) {
                      me.activeBonusIncrement[idx].setWorldPosition(finalPosition);
                      me.activeBonusIncrement[idx].getComponent(ParticleSystem).play();
  
                      for (var _i7 = 0; _i7 < me.activeBonusIncrement[idx].children.length; _i7++) {
                        var particleSystem = me.activeBonusIncrement[idx].children[_i7].getComponent(ParticleSystem);
  
                        if (particleSystem != null) particleSystem.play();
                      }
                    }
                  }).start();
                };
  
                for (var _i4 = 0; _i4 < _this2.activeBonusTrail.length; _i4++) {
                  _loop(_i4);
                }
  
                _this2.scheduleOnce(function () {
                  SFXManager.getInstance().play(SFXManager.SFX_BONUS_FIREWORK_EXPLODE);
                  me.node.getChildByPath("cont_particle_bonusConfetti").active = true;
  
                  for (var _i5 = 1; _i5 <= 5; _i5++) {
                    var node = me.node.getChildByPath("cont_particle_bonusConfetti/particle_bonusConfetti_" + _i5);
                    node.getComponent(ParticleSystem).play();
  
                    for (var j = 0; j < node.children.length; j++) {
                      var ps = node.children[j].getComponent(ParticleSystem);
                      if (ps != null) ps.play();
                    }
                  }
                }, 2);
  
                _this2.scheduleOnce(function () {
                  anim.play("inGameBonusPopup_out");
                  anim.on(Animation.EventType.FINISHED, function () {
                    me.deactivateParticle();
                    me.onExit();
                  }, this, true);
                }, 5);
              })();
            }
          };
  
          _proto.deactivateParticle = function deactivateParticle() {
            this.node.getChildByPath("popup/particle_bonusBrownBurst_1").active = false;
            this.node.getChildByPath("popup/particle_bonusBrownBurst_2").active = false;
            this.node.getChildByPath("popup/particle_bonusRedBurst_1").active = false;
            this.node.getChildByPath("popup/particle_bonusRedBurst_2").active = false;
            this.node.getChildByPath("popup/particle_bonusBlueBurst_1").active = false;
            this.node.getChildByPath("popup/particle_bonusBlueBurst_2").active = false;
          };
  
          return ScenePopupBonusArcade;
        }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "prefabBonusTrail", [_dec2], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "prefabBonusIncrement", [_dec3], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        })), _class2)) || _class));
  
        cclegacy._RF.pop();
      }
    };
  });
  
  System.register("chunks:///_virtual/ScenePause.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './BGMManager.ts', './SFXManager.ts', './BlitzManager.ts', './MissionManager.ts', './MissionLabel.ts', './SceneGameplay.ts', './ControllerBlade.ts', './GameController.ts', './FruitManager.ts', './AdsManager.ts'], function (exports) {
    'use strict';
  
    var _defineProperty, _inheritsLoose, _assertThisInitialized, _createClass, cclegacy, _decorator, Label, Animation, Component, BGMManager, SFXManager, BlitzManager, MissionManager, MissionLabel, SceneGameplay, ControllerBlade, GameController, FruitManager, AdsManager;
  
    return {
      setters: [function (module) {
        _defineProperty = module.defineProperty;
        _inheritsLoose = module.inheritsLoose;
        _assertThisInitialized = module.assertThisInitialized;
        _createClass = module.createClass;
      }, function (module) {
        cclegacy = module.cclegacy;
        _decorator = module._decorator;
        Label = module.Label;
        Animation = module.Animation;
        Component = module.Component;
      }, function (module) {
        BGMManager = module.BGMManager;
      }, function (module) {
        SFXManager = module.SFXManager;
      }, function (module) {
        BlitzManager = module.BlitzManager;
      }, function (module) {
        MissionManager = module.MissionManager;
      }, function (module) {
        MissionLabel = module.MissionLabel;
      }, function (module) {
        SceneGameplay = module.SceneGameplay;
      }, function (module) {
        ControllerBlade = module.ControllerBlade;
      }, function (module) {
        GameController = module.GameController;
      }, function (module) {
        FruitManager = module.FruitManager;
      }, function (module) {
        AdsManager = module.AdsManager;
      }],
      execute: function () {
        var _dec, _class, _class2, _temp;
  
        cclegacy._RF.push({}, "76f71VENV5CL6CIxvHjGTZ+", "ScenePause", undefined);
  
        var ccclass = _decorator.ccclass,
            property = _decorator.property;
        var ScenePause = exports('ScenePause', (_dec = ccclass('ScenePause'), _dec(_class = (_temp = _class2 = /*#__PURE__*/function (_Component) {
          _inheritsLoose(ScenePause, _Component);
  
          function ScenePause() {
            var _this;
  
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
  
            _this = _Component.call.apply(_Component, [this].concat(args)) || this;
  
            _defineProperty(_assertThisInitialized(_this), "isBtnPauseHidden", true);
  
            _defineProperty(_assertThisInitialized(_this), "_holdButtonPause", false);
  
            _defineProperty(_assertThisInitialized(_this), "holdButtonsPaused", false);
  
            return _this;
          }
  
          ScenePause.getInstance = function getInstance() {
            return ScenePause.Instance;
          };
  
          var _proto = ScenePause.prototype;
  
          _proto.onLoad = function onLoad() {
            ScenePause.Instance = this;
          };
  
          _proto.start = function start() {};
  
          _proto.update = function update() {
            this.node.getChildByPath("text_paused/cont_Popup/popup/cont_mission/headerWood/text_Timer").getComponent(Label).string = GameController.getInstance().secondToString(GameController.getInstance().getSecondToNextDay());
          };
  
          _proto.showButtonPause = function showButtonPause() {
            if (!this.isBtnPauseHidden) return;
            this.holdButtonPause = true;
            this.isBtnPauseHidden = false;
            var anim = this.node.getChildByPath("ButtonPause").getComponent(Animation);
            anim.play("pause_in");
            anim.on(Animation.EventType.FINISHED, function () {
              if (GameController.getInstance().getGameState() == GameController.STATE_GAME_PLAYING) {
                this.holdButtonPause = false;
              }
            }, this, true);
          };
  
          _proto.hideButtonPause = function hideButtonPause() {
            if (this.isBtnPauseHidden) return;
            this.holdButtonPause = true;
            this.isBtnPauseHidden = true;
            var anim = this.node.getChildByPath("ButtonPause").getComponent(Animation);
            anim.play("pause_out");
            anim.on(Animation.EventType.FINISHED, function () {
              if (GameController.getInstance().getGameState() == GameController.STATE_GAME_PLAYING) {
                this.holdButtonPause = false;
              }
            }, this, true);
          };
  
          _proto.btnPauseClicked = function btnPauseClicked() {
            if (this.holdButtonPause) return;
            this.holdButtonsPaused = true;
            this.hideButtonPause();
            GameController.Instance.gameplayScreen.getChildByPath("bg_container_pause").active = true;
            GameController.Instance.gameplayScreen.getChildByPath("bg_container_pause").getComponent(Animation).play("bg_container_continue_show");
            var anim = this.node.getComponent(Animation);
            anim.play("pauseOthers_in");
            anim.on(Animation.EventType.FINISHED, function () {
              this.holdButtonsPaused = false;
            }, this, true);
            GameController.getInstance().setHoldInput(true);
            GameController.getInstance().setGameState(GameController.STATE_GAME_PAUSE);
            this.node.getChildByPath("ButtonSFX/ButtonSFXOn").active = !SFXManager.isMuted;
            this.node.getChildByPath("ButtonMusic/ButtonMusicOn").active = !BGMManager.isMuted;
            SFXManager.getInstance().setVolume(0);
            this.refreshLabelMisi();
          };
  
          _proto.refreshLabelMisi = function refreshLabelMisi() {
            var me = this;
  
            for (var i = 0; i < MissionManager.getInstance().activeMission.length; i++) {
              var curMission = MissionManager.getInstance().activeMission[i];
              this.node.getChildByPath("text_paused/cont_Popup/popup/cont_mission/cont_missionEntry" + (i + 1) + "/cont_backingComplete").active = curMission.current >= curMission.target && !curMission.claimed;
              this.node.getChildByPath("text_paused/cont_Popup/popup/cont_mission/cont_missionEntry" + (i + 1) + "/missionEntry").getComponent(MissionLabel).refresh(curMission, "pause", false);
              this.node.getChildByPath("text_paused/cont_Popup/popup/cont_mission/cont_missionEntry" + (i + 1) + "/missionEntry").getComponent(MissionLabel).setOnClaimed(function () {
                me.refreshLabelMisi();
              });
            }
          };
  
          _proto.btnExitClicked = function btnExitClicked() {
            if (this.holdButtonsPaused) return;
            this.holdButtonsPaused = true;
            BGMManager.getInstance().stopBombBGM();
            BlitzManager.getInstance().reset();
            ControllerBlade.getInstance().stopAllBladeSFX();
            FruitManager.getInstance().reset();
            var animBgContinue = GameController.Instance.gameplayScreen.getChildByPath("bg_container_pause").getComponent(Animation);
            animBgContinue.play("bg_container_continue_hide");
            animBgContinue.on(Animation.EventType.FINISHED, function () {
              GameController.Instance.gameplayScreen.getChildByPath("bg_container_pause").active = false;
            }, this, true);
            var anim = this.node.getComponent(Animation);
            anim.play("pauseOthers_out");
            anim.on(Animation.EventType.FINISHED, function () {
              this.holdButtonsPaused = false;
              GameController.getInstance().gameplayScreen.getComponent(SceneGameplay).gameplayLeaderboard.getComponent(Animation).play("gameplayLeaderboards_out");
              FruitManager.getInstance().tryResumeAllPhysic();
              FruitManager.getInstance().trySlashAllFruit();
              this.scheduleOnce(function () {
                GameController.getInstance().exitScreen(function () {
                  AdsManager.showInterstitialAds(function () {
                    GameController.getInstance().setScreenState(GameController.SCREEN_STATE_HOMESCREEN);
                    GameController.getInstance().setHoldInput(false);
                    GameController.bestScore = GameController.prevBestScore;
                    GameController.saveData();
                  });
                });
              }, 1);
            }, this, true);
          };
  
          _proto.btnRetryClicked = function btnRetryClicked() {
            if (this.holdButtonsPaused) return;
            this.holdButtonsPaused = true;
            SFXManager.getInstance().play(SFXManager.SFX_SELECT);
            BGMManager.getInstance().stopBombBGM();
            BlitzManager.getInstance().reset();
            ControllerBlade.getInstance().stopAllBladeSFX();
            FruitManager.getInstance().reset();
            var animBgContinue = GameController.Instance.gameplayScreen.getChildByPath("bg_container_pause").getComponent(Animation);
            animBgContinue.play("bg_container_continue_hide");
            animBgContinue.on(Animation.EventType.FINISHED, function () {
              GameController.Instance.gameplayScreen.getChildByPath("bg_container_pause").active = false;
            }, this, true);
            var anim = this.node.getComponent(Animation);
            anim.play("pauseOthers_out");
            anim.on(Animation.EventType.FINISHED, function () {
              this.holdButtonsPaused = false;
              GameController.getInstance().setHoldInput(false);
              GameController.getInstance().gameplayScreen.getComponent(SceneGameplay).gameplayLeaderboard.getComponent(Animation).play("gameplayLeaderboards_out");
              FruitManager.getInstance().tryResumeAllPhysic();
              FruitManager.getInstance().trySlashAllFruit();
              this.scheduleOnce(function () {
                var onExitScene = function onExitScene() {
                  GameController.bestScore = GameController.prevBestScore;
                  GameController.getInstance().setScreenState(GameController.SCREEN_STATE_GAMEPLAY);
                  GameController.getInstance().setHoldInput(false);
                  GameController.saveData();
                };
  
                AdsManager.showInterstitialAds(function () {
                  GameController.getInstance().exitScreen(function () {
                    onExitScene();
                  });
                });
              }, 1);
            }, this, true);
          };
  
          _proto.btnResumeClicked = function btnResumeClicked() {
            var _this2 = this;
  
            if (this.holdButtonsPaused) return;
            this.holdButtonsPaused = true;
            SFXManager.getInstance().play(SFXManager.SFX_SELECT);
            var me = this;
            var animBgContinue = GameController.Instance.gameplayScreen.getChildByPath("bg_container_pause").getComponent(Animation);
            animBgContinue.play("bg_container_continue_hide");
            animBgContinue.on(Animation.EventType.FINISHED, function () {
              GameController.Instance.gameplayScreen.getChildByPath("bg_container_pause").active = false;
            }, this, true);
  
            var onAnimationComplete = function onAnimationComplete() {
              _this2.holdButtonsPaused = false;
              FruitManager.getInstance().tryResumeAllPhysic();
              GameController.getInstance().setHoldInput(false);
              me.showButtonPause();
  
              if (GameController.getInstance().getHealth() <= 0) {
                GameController.getInstance().setGameState(GameController.STATE_GAME_LOSE);
              } else {
                GameController.getInstance().setGameState(GameController.STATE_GAME_PLAYING);
              }
            };
  
            AdsManager.showInterstitialAds(function () {
              var anim = _this2.node.getComponent(Animation);
  
              anim.play("pauseOthers_out");
              anim.on(Animation.EventType.FINISHED, function () {
                onAnimationComplete();
              }, _this2, true);
              SFXManager.getInstance().setVolume(SFXManager.isMuted ? 0 : 1);
            });
          };
  
          _proto.btnToggleSFX = function btnToggleSFX() {
            SFXManager.getInstance().muteSFX(!SFXManager.isMuted);
            this.node.getChildByPath("ButtonSFX/ButtonSFXOn").active = !SFXManager.isMuted;
            SFXManager.getInstance().setVolume(0);
            SFXManager.getInstance().play(SFXManager.SFX_SELECT);
            GameController.saveData();
          };
  
          _proto.btnToggleMusic = function btnToggleMusic() {
            SFXManager.getInstance().play(SFXManager.SFX_SELECT);
            BGMManager.getInstance().muteBGM(!BGMManager.isMuted);
            this.node.getChildByPath("ButtonMusic/ButtonMusicOn").active = !BGMManager.isMuted;
            GameController.saveData();
          };
  
          _createClass(ScenePause, [{
            key: "holdButtonPause",
            get: function get() {
              return this._holdButtonPause;
            },
            set: function set(value) {
              this._holdButtonPause = value;
            }
          }]);
  
          return ScenePause;
        }(Component), _defineProperty(_class2, "Instance", void 0), _temp)) || _class));
  
        cclegacy._RF.pop();
      }
    };
  });
  
  System.register("chunks:///_virtual/SceneGameplay.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './GameplayLeaderboard.ts'], function (exports) {
    'use strict';
  
    var _defineProperty, _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, SpriteFrame, Component, GameplayLeaderboard;
  
    return {
      setters: [function (module) {
        _defineProperty = module.defineProperty;
        _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
        _inheritsLoose = module.inheritsLoose;
        _initializerDefineProperty = module.initializerDefineProperty;
        _assertThisInitialized = module.assertThisInitialized;
      }, function (module) {
        cclegacy = module.cclegacy;
        _decorator = module._decorator;
        SpriteFrame = module.SpriteFrame;
        Component = module.Component;
      }, function (module) {
        GameplayLeaderboard = module.GameplayLeaderboard;
      }],
      execute: function () {
        var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _class3, _temp;
  
        cclegacy._RF.push({}, "7863cbzjrlNZqqR9WbURuqb", "SceneGameplay", undefined);
  
        var ccclass = _decorator.ccclass,
            property = _decorator.property;
        var SceneGameplay = exports('SceneGameplay', (_dec = ccclass('SceneGameplay'), _dec2 = property({
          type: SpriteFrame,
          displayName: "default icon score"
        }), _dec3 = property({
          type: GameplayLeaderboard
        }), _dec(_class = (_class2 = (_temp = _class3 = /*#__PURE__*/function (_Component) {
          _inheritsLoose(SceneGameplay, _Component);
  
          function SceneGameplay() {
            var _this;
  
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
  
            _this = _Component.call.apply(_Component, [this].concat(args)) || this;
  
            _initializerDefineProperty(_assertThisInitialized(_this), "defaultIconScore", _descriptor, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "gameplayLeaderboard", _descriptor2, _assertThisInitialized(_this));
  
            return _this;
          }
  
          SceneGameplay.getInstance = function getInstance() {
            return SceneGameplay.Instance;
          };
  
          var _proto = SceneGameplay.prototype;
  
          _proto.onLoad = function onLoad() {
            SceneGameplay.Instance = this;
          };
  
          _proto.start = function start() {};
  
          _proto.showIconDeflect = function showIconDeflect(show) {
            this.node.getChildByPath("container_icon_deflect/layoutPU/iconDeflect").active = show;
          };
  
          _proto.showIconBerry = function showIconBerry(show) {
            this.node.getChildByPath("container_icon_deflect/layoutPU/iconBerry").active = show;
          };
  
          _proto.showIconPeachTime = function showIconPeachTime(show) {
            this.node.getChildByPath("container_icon_deflect/layoutPU/iconPeachy").active = show;
          };
  
          return SceneGameplay;
        }(Component), _defineProperty(_class3, "Instance", void 0), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "defaultIconScore", [_dec2], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "gameplayLeaderboard", [_dec3], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        })), _class2)) || _class));
  
        cclegacy._RF.pop();
      }
    };
  });
  
  System.register("chunks:///_virtual/Utils.ts", ['cc'], function (exports) {
    'use strict';
  
    var cclegacy, sys;
    return {
      setters: [function (module) {
        cclegacy = module.cclegacy;
        sys = module.sys;
      }],
      execute: function () {
        cclegacy._RF.push({}, "7b4ad6SMQJO2JpjyOy7IMS0", "Utils", undefined);
  
        var isMobile = exports('isMobile', function isMobile() {
          return sys.isMobile || sys.platform === "MOBILE_BROWSER" || window.navigator.userAgent.indexOf("Android") > -1 || window.navigator.userAgent.indexOf("iPhone") > -1 || navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;
        });
  
        cclegacy._RF.pop();
      }
    };
  });
  
  System.register("chunks:///_virtual/SuperGraphicsStretch.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
    'use strict';
  
    var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _defineProperty, cclegacy, _decorator, UIVertexFormat, gfx, v2, Color, Vec3, Texture2D, Material, Graphics, Vec2, earcut, warnID, director, RenderingSubMesh;
  
    return {
      setters: [function (module) {
        _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
        _inheritsLoose = module.inheritsLoose;
        _initializerDefineProperty = module.initializerDefineProperty;
        _assertThisInitialized = module.assertThisInitialized;
        _defineProperty = module.defineProperty;
      }, function (module) {
        cclegacy = module.cclegacy;
        _decorator = module._decorator;
        UIVertexFormat = module.UIVertexFormat;
        gfx = module.gfx;
        v2 = module.v2;
        Color = module.Color;
        Vec3 = module.Vec3;
        Texture2D = module.Texture2D;
        Material = module.Material;
        Graphics = module.Graphics;
        Vec2 = module.Vec2;
        earcut = module.earcut;
        warnID = module.warnID;
        director = module.director;
        RenderingSubMesh = module.RenderingSubMesh;
      }],
      execute: function () {
        var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp;
  
        cclegacy._RF.push({}, "7ee77fHCIFPWaMiOgsN5IKA", "SuperGraphicsStretch", undefined);
  
        var ccclass = _decorator.ccclass,
            property = _decorator.property;
        /**
         * Predefined variables
         * Name = SuperGraphics
         * DateTime = Thu Dec 09 2021 11:01:18 GMT+0800 (中国标准时间)
         * Author = 希格斯玻色子
         * FileBasename = SuperGraphics.ts
         * FileBasenameNoExtension = SuperGraphics
         * URL = db://assets/scripts/app/mediator/common/SuperGraphics.ts
         * ManualUrl = https://docs.cocos.com/creator/3.3/manual/zh/
         *
         */
  
        var attributes2 = UIVertexFormat.vfmtPosColor.concat([new gfx.Attribute('a_dist', gfx.Format.R32F), new gfx.Attribute('a_line', gfx.Format.R32F)]);
        var componentPerVertex2 = UIVertexFormat.getComponentPerVertex(attributes2);
        var stride2 = UIVertexFormat.getAttributeStride(attributes2);
  
        var Point2 = /*#__PURE__*/function (_Vec) {
          _inheritsLoose(Point2, _Vec);
  
          function Point2(x, y) {
            var _this;
  
            _this = _Vec.call(this, x, y) || this;
  
            _defineProperty(_assertThisInitialized(_this), "dx", 0);
  
            _defineProperty(_assertThisInitialized(_this), "dy", 0);
  
            _defineProperty(_assertThisInitialized(_this), "dmx", 0);
  
            _defineProperty(_assertThisInitialized(_this), "dmy", 0);
  
            _defineProperty(_assertThisInitialized(_this), "flags", 0);
  
            _defineProperty(_assertThisInitialized(_this), "len", 0);
  
            _defineProperty(_assertThisInitialized(_this), "lineLength", 0);
  
            _defineProperty(_assertThisInitialized(_this), "trueLength", 0);
  
            _this.reset();
  
            return _this;
          }
  
          var _proto = Point2.prototype;
  
          _proto.reset = function reset() {
            this.dx = 0;
            this.dy = 0;
            this.dmx = 0;
            this.dmy = 0;
            this.flags = 0;
            this.len = 0;
            this.lineLength = 0;
            this.trueLength = 0;
          };
  
          return Point2;
        }(Vec2);
  
        var attrBytes2 = 9;
        var _impl = null;
        var MAX_VERTEX = 65535;
        var MAX_INDICES = MAX_VERTEX * 2;
        var PI = Math.PI;
        var max = Math.max;
        var ceil = Math.ceil;
        var acos = Math.acos;
        var cos = Math.cos;
        var sin = Math.sin;
        var atan2 = Math.atan2;
  
        var _tempV2 = v2();
  
        var _renderData = null;
  
        var _curColor = new Color();
  
        var vec3_temps = [];
  
        for (var i = 0; i < 4; i++) {
          vec3_temps.push(new Vec3());
        }
  
        function curveDivs(r, arc, tol) {
          var da = acos(r / (r + tol)) * 2.0;
          return max(2, ceil(arc / da));
        }
  
        function clamp(v, minNum, maxNum) {
          if (v < minNum) {
            return minNum;
          } else if (v > maxNum) {
            return maxNum;
          }
  
          return v;
        }
  
        var lineC = 1;
        var SuperGraphicsStretch = exports('SuperGraphicsStretch', (_dec = ccclass('SuperGraphicsStretch'), _dec2 = property(Texture2D), _dec3 = property(Material), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Graphics) {
          _inheritsLoose(SuperGraphicsStretch, _Graphics);
  
          function SuperGraphicsStretch() {
            var _this2;
  
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
  
            _this2 = _Graphics.call.apply(_Graphics, [this].concat(args)) || this;
  
            _initializerDefineProperty(_assertThisInitialized(_this2), "lineTexture", _descriptor, _assertThisInitialized(_this2));
  
            _initializerDefineProperty(_assertThisInitialized(_this2), "myMat", _descriptor2, _assertThisInitialized(_this2));
  
            _initializerDefineProperty(_assertThisInitialized(_this2), "myLineWidth", _descriptor3, _assertThisInitialized(_this2));
  
            return _this2;
          }
  
          var _proto2 = SuperGraphicsStretch.prototype;
  
          _proto2.onLoad = function onLoad() {
            if (this.lineTexture) {
              this.lineWidth = this.lineTexture.height; // this.lineWidth = 500;
  
              lineC = this.lineWidth / (this.lineTexture.height * 2 * this.lineTexture.width);
              console.log(this.lineWidth + ' ' + lineC); // lineC = 1;
            }
  
            if (this.myMat) {
              this.setMaterial(this.myMat, 0);
              if (this.lineTexture) this.getMaterial(0).setProperty("texture1", this.lineTexture); //  this.getMaterial(0).setProperty("mainTiling", v2(0.9, 1));
              //  this.getMaterial(0).setProperty("mainOffset", v2(0.05, 0));
            }
  
            _Graphics.prototype.onLoad.call(this);
          };
  
          _proto2.updateTexture = function updateTexture() {
            // this.myMat.setProperty("texture1",this.lineTexture);
            // this.getMaterial(0).setProperty("texture1",this.lineTexture);
            this.onLoad();
          };
  
          _proto2.onEnable = function onEnable() {
            if (this.myMat) {
              this.setMaterial(this.myMat, 0);
              if (this.lineTexture) this.getMaterial(0).setProperty("texture1", this.lineTexture); //  this.getMaterial(0).setProperty("mainTiling", v2(0.9, 1));
              //  this.getMaterial(0).setProperty("mainOffset", v2(0.05, 0));
            }
          };
  
          _proto2.start = function start() {}
          /**
           * 初始化assembler渲染数据组装器
           */
          ;
  
          _proto2._flushAssembler = function _flushAssembler() {
            var assembler = Graphics.Assembler.getAssembler(this);
            /*********** */
  
            var superGraphicsAssembler = {}; //复制原组装器的属性
  
            for (var kk in assembler) {
              superGraphicsAssembler[kk] = assembler[kk];
            } //修改新组装器的属性
  
            /**连线 */
  
  
            superGraphicsAssembler.stroke = function (graphics) {
              Color.copy(_curColor, graphics.strokeColor); // graphics.node.getWorldMatrix(_currMatrix);
  
              if (!graphics.impl) {
                return;
              }
  
              this._flattenPaths(graphics.impl);
  
              this._expandStroke(graphics);
  
              graphics.impl.updatePathOffset = true;
              this.end(graphics);
            };
            /**填充 */
  
  
            superGraphicsAssembler.fill = function (graphics) {
              Color.copy(_curColor, graphics.fillColor); // graphics.node.getWorldMatrix(_currMatrix);
  
              this._expandFill(graphics);
  
              if (graphics.impl) {
                graphics.impl.updatePathOffset = true;
              }
  
              this.end(graphics);
            };
            /**路径数据整理 */
  
  
            superGraphicsAssembler._flattenPaths = function (impl) {
              var paths = impl.paths;
  
              for (var _i = impl.pathOffset, l = impl.pathLength; _i < l; _i++) {
                var path = paths[_i];
                var pts = path.points;
                var p0 = pts[pts.length - 1];
                var p1 = pts[0]; // if (pts.length > 2 && p0.equals(p1)) {
                //     path.closed = true;
                //     pts.pop();
                //     p0 = pts[pts.length - 1];
                // }
  
                /******** */
  
                var lineLength = 0;
                pts[0]["lineLength"] = lineLength;
                var p00 = null;
                var p11 = pts[0];
                var subPos = v2();
                /********* */
  
                for (var j = 0, size = pts.length; j < size; j++) {
                  // Calculate segment direction and length
                  var dPos = new Point2(p1.x, p1.y);
                  dPos.subtract(p0);
                  p0.len = dPos.length();
  
                  if (dPos.x || dPos.y) {
                    dPos.normalize();
                  }
  
                  p0.dx = dPos.x;
                  p0.dy = dPos.y; //***** */
  
                  p11 = pts[j];
  
                  if (j != 0) {
                    //p0是上一个，p1是当前这个
                    //p00是上一个，p11是当前这个
                    Vec2.subtract(subPos, p11, p00);
                    lineLength += subPos.length() * lineC;
                    p11["lineLength"] = lineLength;
                  }
  
                  p00 = pts[j]; //******* */
                  // Advance
  
                  p0 = p1;
                  p1 = pts[j + 1];
                }
  
                for (var _j = 0; _j < pts.length; _j++) {
                  // pts[j]["trueLength"] = pts[j]["lineLength"];
                  pts[_j]["lineLength"] /= lineLength; // pts[j]["lineLength"] /= (lineLength*0.9);
                  // if(pts[j]["lineLength"]>1){
                  //     pts[j]["lineLength"] = 1;
                  // }
                  // pts[j]["trueLength"] = lineLength;
                }
  
                if (pts.length > 3 && pts[pts.length - 1].len != pts[pts.length - 2].len) {
                  pts[pts.length - 1].len = pts[pts.length - 2].len;
                } // log(pts);
  
              }
            }; //**获取一个渲染data */
  
  
            superGraphicsAssembler.getRenderData = function (graphics, vertexCount) {
              if (!_impl) {
                return null;
              }
  
              var renderDataList = _impl.getRenderDataList();
  
              var renderData = renderDataList[_impl.dataOffset];
  
              if (!renderData) {
                return null;
              }
  
              var meshBuffer = renderData;
              var maxVertexCount = meshBuffer ? meshBuffer.vertexStart + vertexCount : 0;
  
              if (maxVertexCount > MAX_VERTEX || maxVertexCount * 3 > MAX_INDICES) {
                ++_impl.dataOffset;
  
                if (_impl.dataOffset < renderDataList.length) {
                  renderData = renderDataList[_impl.dataOffset];
                } else {
                  renderData = _impl.requestRenderData();
                  renderDataList[_impl.dataOffset] = renderData;
                }
  
                meshBuffer = renderData;
              }
  
              if (meshBuffer && meshBuffer.vertexCount < maxVertexCount) {
                meshBuffer.request(vertexCount, vertexCount * 3);
              }
  
              return renderData;
            };
  
            var me = this;
            /**组装连线渲染数据 */
  
            superGraphicsAssembler._expandStroke = function (graphics) {
              graphics.lineWidth = me.myLineWidth;
              var w = graphics.lineWidth * 0.5; // console.log('lw: '+graphics.lineWidth);
              // let w = 64;
  
              var lineCap = graphics.lineCap;
              var lineJoin = graphics.lineJoin;
              var miterLimit = graphics.miterLimit;
              _impl = graphics.impl;
  
              if (!_impl) {
                return;
              }
  
              var nCap = curveDivs(w, PI, _impl.tessTol);
  
              this._calculateJoins(_impl, w, lineJoin, miterLimit);
  
              var paths = _impl.paths; // Calculate max vertex usage.
  
              var vertexCount = 0;
  
              for (var _i2 = _impl.pathOffset, l = _impl.pathLength; _i2 < l; _i2++) {
                var path = paths[_i2];
                var pointsLength = path.points.length;
  
                if (lineJoin == 1) {
                  vertexCount += (pointsLength + path.bevel * (nCap + 2) + 1) * 2;
                } else {
                  vertexCount += (pointsLength + path.bevel * 5 + 1) * 2;
                } // plus one for loop
  
  
                if (!path.closed) {
                  // space for caps
                  if (lineCap == 1) {
                    vertexCount += (nCap * 2 + 2) * 2;
                  } else {
                    vertexCount += (3 + 3) * 2;
                  }
                }
              }
  
              var meshBuffer = _renderData = this.getRenderData(graphics, vertexCount);
  
              if (!meshBuffer) {
                return;
              }
  
              var vData = meshBuffer.vData;
              var iData = meshBuffer.iData;
  
              for (var _i3 = _impl.pathOffset, _l = _impl.pathLength; _i3 < _l; _i3++) {
                var _path = paths[_i3];
                var pts = _path.points;
                var _pointsLength = pts.length;
                var offset = meshBuffer.vertexStart;
                var p0 = void 0;
                var p1 = void 0;
                var start = 0;
                var end = 0;
                var loop = _path.closed; // const loop = false;
  
                var startEndL = 0;
  
                if (loop) {
                  // Looping
                  p0 = pts[_pointsLength - 1];
                  p1 = pts[0];
                  start = 0;
                  end = _pointsLength;
                  Vec2.subtract(_tempV2, p1, p0);
                  startEndL = _tempV2.length();
                } else {
                  // Add cap
                  p0 = pts[0];
                  p1 = pts[1];
                  start = 1;
                  end = _pointsLength - 1;
                }
  
                p1 = p1 || p0;
  
                if (!loop) {
                  // Add cap
                  var dPos = new Point2(p1.x, p1.y);
                  dPos.subtract(p0);
                  dPos.normalize();
                  var dx = dPos.x;
                  var dy = dPos.y;
  
                  if (lineCap == 0) {
                    this._buttCapStart(p0, dx, dy, w, 0);
                  } else if (lineCap == 2) {
                    this._buttCapStart(p0, dx, dy, w, w);
                  } else if (lineCap == 1) {
                    this._roundCapStart(p0, dx, dy, w, nCap);
                  }
                }
  
                var totalLength = 0;
  
                for (var j = start; j < end; j++) {
                  totalLength += pts[j + 1].lineLength;
                } // console.log(totalLength);
  
  
                var curLength = 0;
  
                for (var _j2 = start; _j2 < end; ++_j2) {
                  // let totalLength = (pts[j] as Point2).lineLength;
                  var scaleW = (totalLength - curLength) / totalLength; // let scaleW = ((totalLength-p0.x)/totalLength);
                  // console.log('sw1: '+curLength+' '+totalLength+' '+p0.x);
                  // console.log('sw2: '+scaleW);
                  // console.log('dmx: '+(p1.x + p1.dmx * w*scaleW));
                  // console.log('dmx2: '+(p1.x - p1.dmx * w*scaleW));
                  // console.log('dmy: '+p1.dmy);
                  // let scaleW = 0.5;
  
                  if (lineJoin == 1) {
                    this._roundJoin(p0, p1, w * scaleW, w * scaleW, nCap);
                  } else if ((p1.flags & (0x04 | 0x08)) !== 0) {
                    this._bevelJoin(p0, p1, w * scaleW, w * scaleW);
                  } else {
                    console.log("ll: " + curLength / totalLength); // this._vSet!(p1.x + p1.dmx * w*scaleW, p1.y + p1.dmy * w*scaleW, 1,curLength/totalLength);
                    // this._vSet!(p1.x - p1.dmx * w*scaleW, p1.y - p1.dmy * w*scaleW, -1,curLength/totalLength);
  
                    this._vSet(p1.x + p1.dmx * w * scaleW, p1.y + p1.dmy * w * scaleW, 1, p1.lineLength);
  
                    this._vSet(p1.x - p1.dmx * w * scaleW, p1.y - p1.dmy * w * scaleW, -1, p1.lineLength); // this._vSet!(p1.x + p1.dmx * w*scaleW, p1.y + p1.dmy * w*scaleW, 1,totalLength);
                    // this._vSet!(p1.x - p1.dmx * w*scaleW, p1.y - p1.dmy * w*scaleW, -1,totalLength);
  
                  }
  
                  curLength += p1.lineLength;
                  p0 = p1;
                  p1 = pts[_j2 + 1];
                }
  
                if (loop) {
                  // Loop it
                  var vDataOffset = offset * attrBytes2;
  
                  this._vSet(vData[vDataOffset], vData[vDataOffset + 1], 1, startEndL);
  
                  this._vSet(vData[vDataOffset + attrBytes2], vData[vDataOffset + attrBytes2 + 1], -1, startEndL);
                } else {
                  // Add cap
                  var _dPos = new Point2(p1.x, p1.y);
  
                  _dPos.subtract(p0);
  
                  _dPos.normalize();
  
                  var _dx = _dPos.x;
                  var _dy = _dPos.y;
  
                  if (lineCap == 0) {
                    // this._buttCapEnd!(p1, dx, dy, w, 0);
                    this._buttCapEnd(p1, _dx, _dy, 0.5, 0.5);
                  } else if (lineCap == 2) {
                    // this._buttCapEnd!(p1, dx, dy, w, w);
                    this._buttCapEnd(p1, _dx, _dy, 0.5, 0.5);
                  } else if (lineCap == 1) {
                    this._roundCapEnd(p1, _dx, _dy, w, nCap); // this._roundCapEnd!(p1, dx, dy, w, 0);
  
                  }
                } // stroke indices
  
  
                var indicesOffset = meshBuffer.indexStart;
  
                for (var begin = offset + 2, over = meshBuffer.vertexStart; begin < over; begin++) {
                  iData[indicesOffset++] = begin - 2;
                  iData[indicesOffset++] = begin - 1;
                  iData[indicesOffset++] = begin;
                }
  
                meshBuffer.indexStart = indicesOffset;
              }
  
              _renderData = null;
              _impl = null;
            };
            /**组装填充渲染数据 */
  
  
            superGraphicsAssembler._expandFill = function (graphics) {
              _impl = graphics.impl;
  
              if (!_impl) {
                return;
              }
  
              var paths = _impl.paths; // Calculate max vertex usage.
  
              var vertexCount = 0;
  
              for (var _i4 = _impl.pathOffset, l = _impl.pathLength; _i4 < l; _i4++) {
                var path = paths[_i4];
                var pointsLength = path.points.length;
                vertexCount += pointsLength;
              }
  
              var renderData = _renderData = this.getRenderData(graphics, vertexCount);
  
              if (!renderData) {
                return;
              }
  
              var meshBuffer = renderData;
              var vData = meshBuffer.vData;
              var iData = meshBuffer.iData;
  
              for (var _i5 = _impl.pathOffset, _l2 = _impl.pathLength; _i5 < _l2; _i5++) {
                var _path2 = paths[_i5];
                var pts = _path2.points;
                var _pointsLength2 = pts.length;
  
                if (_pointsLength2 === 0) {
                  continue;
                } // Calculate shape vertices.
  
  
                var vertexOffset = renderData.vertexStart;
  
                for (var j = 0; j < _pointsLength2; ++j) {
                  if (pts[j].y > 0) {
                    this._vSet(pts[j].x, pts[j].y, 0, pts[j]["lineLength"]);
                  } else {
                    this._vSet(pts[j].x, pts[j].y, 60, pts[j]["lineLength"]);
                  }
                }
  
                var indicesOffset = renderData.indexStart;
  
                if (_path2.complex) {
                  var earcutData = [];
  
                  for (var _j3 = vertexOffset, end = renderData.vertexStart; _j3 < end; _j3++) {
                    var vDataOffset = _j3 * attrBytes2;
                    earcutData.push(vData[vDataOffset++]);
                    earcutData.push(vData[vDataOffset++]);
                    earcutData.push(vData[vDataOffset++]);
                  }
  
                  var newIndices = earcut(earcutData, null, 3);
  
                  if (!newIndices || newIndices.length === 0) {
                    continue;
                  }
  
                  for (var _j4 = 0, nIndices = newIndices.length; _j4 < nIndices; _j4++) {
                    iData[indicesOffset++] = newIndices[_j4] + vertexOffset;
                  }
                } else {
                  var first = vertexOffset;
  
                  for (var start = vertexOffset + 2, _end = meshBuffer.vertexStart; start < _end; start++) {
                    iData[indicesOffset++] = first;
                    iData[indicesOffset++] = start - 1;
                    iData[indicesOffset++] = start;
                  }
                }
  
                meshBuffer.indexStart = indicesOffset;
              }
  
              _renderData = null;
              _impl = null;
            };
  
            superGraphicsAssembler._buttCapStart = function (p, dx, dy, w, d) {
              var px = p.x - dx * d;
              var py = p.y - dy * d;
              var dlx = dy;
              var dly = -dx;
  
              this._vSet(px + dlx * w, py + dly * w, 1, p.lineLength);
  
              this._vSet(px - dlx * w, py - dly * w, -1, p.lineLength);
            };
  
            superGraphicsAssembler._buttCapEnd = function (p, dx, dy, w, d) {
              var px = p.x + dx * d;
              var py = p.y + dy * d;
              var dlx = dy;
              var dly = -dx;
  
              this._vSet(px + dlx * w, py + dly * w, 1, p.lineLength);
  
              this._vSet(px - dlx * w, py - dly * w, -1, p.lineLength);
            };
  
            superGraphicsAssembler._roundCapStart = function (p, dx, dy, w, nCap) {
              var px = p.x;
              var py = p.y;
              var dlx = dy;
              var dly = -dx;
  
              for (var _i6 = 0; _i6 < nCap; _i6++) {
                var a = _i6 / (nCap - 1) * PI;
                var ax = cos(a) * w;
                var ay = sin(a) * w;
  
                this._vSet(px - dlx * ax - dx * ay, py - dly * ax - dy * ay, 1, p.lineLength);
  
                this._vSet(px, py, 0, p.lineLength);
              }
  
              this._vSet(px + dlx * w, py + dly * w, 1, p.lineLength);
  
              this._vSet(px - dlx * w, py - dly * w, -1, p.lineLength);
            };
  
            superGraphicsAssembler._roundCapEnd = function (p, dx, dy, w, nCap) {
              var px = p.x;
              var py = p.y;
              var dlx = dy;
              var dly = -dx;
  
              this._vSet(px + dlx * w, py + dly * w, 1, p.lineLength);
  
              this._vSet(px - dlx * w, py - dly * w, -1, p.lineLength);
  
              for (var _i7 = 0; _i7 < nCap; _i7++) {
                var a = _i7 / (nCap - 1) * PI;
                var ax = cos(a) * w;
                var ay = sin(a) * w;
  
                this._vSet(px, py, 0, p.lineLength);
  
                this._vSet(px - dlx * ax + dx * ay, py - dly * ax + dy * ay, 1, p.lineLength);
              }
            };
  
            superGraphicsAssembler._roundJoin = function (p0, p1, lw, rw, nCap) {
              var dlx0 = p0.dy;
              var dly0 = -p0.dx;
              var dlx1 = p1.dy;
              var dly1 = -p1.dx;
              var p1x = p1.x;
              var p1y = p1.y;
  
              if ((p1.flags & 0x02) !== 0) {
                var out = this._chooseBevel(p1.flags & 0x08, p0, p1, lw);
  
                var lx0 = out[0];
                var ly0 = out[1];
                var lx1 = out[2];
                var ly1 = out[3];
                var a0 = atan2(-dly0, -dlx0);
                var a1 = atan2(-dly1, -dlx1);
  
                if (a1 > a0) {
                  a1 -= PI * 2;
                }
  
                this._vSet(lx0, ly0, 1, p1.lineLength);
  
                this._vSet(p1x - dlx0 * rw, p1.y - dly0 * rw, -1, p1.lineLength);
  
                var n = clamp(ceil((a0 - a1) / PI) * nCap, 2, nCap);
  
                for (var _i8 = 0; _i8 < n; _i8++) {
                  var u = _i8 / (n - 1);
                  var a = a0 + u * (a1 - a0);
                  var rx = p1x + cos(a) * rw;
                  var ry = p1y + sin(a) * rw;
  
                  this._vSet(p1x, p1y, 0, p1.lineLength);
  
                  this._vSet(rx, ry, -1, p1.lineLength);
                }
  
                this._vSet(lx1, ly1, 1, p1.lineLength);
  
                this._vSet(p1x - dlx1 * rw, p1y - dly1 * rw, -1, p1.lineLength);
              } else {
                var _out = this._chooseBevel(p1.flags & 0x08, p0, p1, -rw);
  
                var rx0 = _out[0];
                var ry0 = _out[1];
                var rx1 = _out[2];
                var ry1 = _out[3];
  
                var _a = atan2(dly0, dlx0);
  
                var _a2 = atan2(dly1, dlx1);
  
                if (_a2 < _a) {
                  _a2 += PI * 2;
                }
  
                this._vSet(p1x + dlx0 * rw, p1y + dly0 * rw, 1, p1.lineLength);
  
                this._vSet(rx0, ry0, -1, p1.lineLength);
  
                var _n = clamp(ceil((_a2 - _a) / PI) * nCap, 2, nCap);
  
                for (var _i9 = 0; _i9 < _n; _i9++) {
                  var _u = _i9 / (_n - 1);
  
                  var _a3 = _a + _u * (_a2 - _a);
  
                  var lx = p1x + cos(_a3) * lw;
                  var ly = p1y + sin(_a3) * lw;
  
                  this._vSet(lx, ly, 1, p1.lineLength);
  
                  this._vSet(p1x, p1y, 0, p1.lineLength);
                }
  
                this._vSet(p1x + dlx1 * rw, p1y + dly1 * rw, 1, p1.lineLength);
  
                this._vSet(rx1, ry1, -1, p1.lineLength);
              }
            };
  
            superGraphicsAssembler._bevelJoin = function (p0, p1, lw, rw) {
              var rx0 = 0;
              var ry0 = 0;
              var rx1 = 0;
              var ry1 = 0;
              var lx0 = 0;
              var ly0 = 0;
              var lx1 = 0;
              var ly1 = 0;
              var dlx0 = p0.dy;
              var dly0 = -p0.dx;
              var dlx1 = p1.dy;
              var dly1 = -p1.dx;
  
              if (p1.flags & 0x02) {
                var out = this._chooseBevel(p1.flags & 0x08, p0, p1, lw);
  
                lx0 = out[0];
                ly0 = out[1];
                lx1 = out[2];
                ly1 = out[3];
  
                this._vSet(lx0, ly0, 1, p1.lineLength);
  
                this._vSet(p1.x - dlx0 * rw, p1.y - dly0 * rw, -1, p1.lineLength);
  
                this._vSet(lx1, ly1, 1, p1.lineLength);
  
                this._vSet(p1.x - dlx1 * rw, p1.y - dly1 * rw, -1, p1.lineLength);
              } else {
                var _out2 = this._chooseBevel(p1.flags & 0x08, p0, p1, -rw);
  
                rx0 = _out2[0];
                ry0 = _out2[1];
                rx1 = _out2[2];
                ry1 = _out2[3];
  
                this._vSet(p1.x + dlx0 * lw, p1.y + dly0 * lw, 1, p1.lineLength);
  
                this._vSet(rx0, ry0, -1, p1.lineLength);
  
                this._vSet(p1.x + dlx1 * lw, p1.y + dly1 * lw, 1, p1.lineLength);
  
                this._vSet(rx1, ry1, -1, p1.lineLength);
              }
            };
            /**设置顶点数据 */
  
  
            superGraphicsAssembler._vSet = function (x, y, distance, lineLong) {
              if (distance === void 0) {
                distance = 0;
              }
  
              if (lineLong === void 0) {
                lineLong = 0;
              }
  
              if (!_renderData) {
                return;
              }
  
              var meshBuffer = _renderData;
              var dataOffset = meshBuffer.vertexStart * attrBytes2;
              var vData = meshBuffer.vData; // vec3.set(_tempVec3, x, y, 0);
              // vec3.transformMat4(_tempVec3, _tempVec3, _currMatrix);
              // console.log('d: '+distance);
              // console.log('ll: '+lineLong);
  
              vData[dataOffset++] = x;
              vData[dataOffset++] = y;
              vData[dataOffset++] = 0;
              Color.toArray(vData, _curColor, dataOffset);
              dataOffset += 4;
              vData[dataOffset++] = distance;
              vData[dataOffset++] = lineLong;
              meshBuffer.vertexStart++;
            };
  
            if (this._assembler !== superGraphicsAssembler) {
              this._assembler = superGraphicsAssembler;
            }
            /************ */
  
          }
          /**创建顶点数据buffer */
          ;
  
          _proto2.activeSubModel = function activeSubModel(idx) {
            if (!this.model) {
              warnID(4500, this.node.name);
              return;
            }
  
            if (this.model.subModels.length <= idx) {
              var gfxDevice = director.root.device;
              var vertexBuffer = gfxDevice.createBuffer(new gfx.BufferInfo(gfx.BufferUsageBit.VERTEX | gfx.BufferUsageBit.TRANSFER_DST, gfx.MemoryUsageBit.DEVICE, 65535 * stride2, stride2));
              var indexBuffer = gfxDevice.createBuffer(new gfx.BufferInfo(gfx.BufferUsageBit.INDEX | gfx.BufferUsageBit.TRANSFER_DST, gfx.MemoryUsageBit.DEVICE, 65535 * Uint16Array.BYTES_PER_ELEMENT * 2, Uint16Array.BYTES_PER_ELEMENT));
              var renderMesh = new RenderingSubMesh([vertexBuffer], attributes2, gfx.PrimitiveMode.TRIANGLE_LIST, indexBuffer);
              renderMesh.subMeshIdx = 0;
              this.model.initSubModel(idx, renderMesh, this.getMaterialInstance(0));
              this["_graphicsUseSubMeshes"].push(renderMesh);
            }
          }
          /**重新刷新渲染数据 */
          ;
  
          _proto2._uploadData = function _uploadData() {
            var impl = this.impl;
  
            if (!impl) {
              return;
            }
  
            var renderDataList = impl && impl.getRenderDataList();
  
            if (renderDataList.length <= 0 || !this.model) {
              return;
            }
  
            var subModelList = this.model.subModels;
  
            for (var _i10 = 0; _i10 < renderDataList.length; _i10++) {
              var renderData = renderDataList[_i10];
              var ia = subModelList[_i10].inputAssembler;
  
              if (renderData.lastFilledVertex === renderData.vertexStart) {
                continue;
              }
  
              var vb = new Float32Array(renderData.vData.buffer, 0, renderData.vertexStart * componentPerVertex2);
              ia.vertexBuffers[0].update(vb);
              ia.vertexCount = renderData.vertexStart;
              var ib = new Uint16Array(renderData.iData.buffer, 0, renderData.indexStart);
              ia.indexBuffer.update(ib);
              ia.indexCount = renderData.indexStart;
              renderData.lastFilledVertex = renderData.vertexStart;
              renderData.lastFilledIndex = renderData.indexStart;
            }
  
            this._isNeedUploadData = false;
          };
  
          return SuperGraphicsStretch;
        }(Graphics), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "lineTexture", [_dec2], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function initializer() {
            return null;
          }
        }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "myMat", [_dec3], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function initializer() {
            return null;
          }
        }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "myLineWidth", [property], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function initializer() {
            return 0;
          }
        })), _class2)) || _class));
  
        cclegacy._RF.pop();
      }
    };
  });
  
  System.register("chunks:///_virtual/SenseiSwagScene.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './SFXManager.ts', './Data.ts', './Fruit.ts', './FruitPhysics.ts', './UIRing.ts', './ItemDetails.ts', './ControllerBlade.ts', './GameController.ts', './AdsManager.ts'], function (exports) {
    'use strict';
  
    var _defineProperty, _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, UITransform, Size, screen, Vec3, instantiate, ScrollView, tween, Label, ParticleSystem, RigidBody, randomRangeInt, Animation, Component, resources, SpriteFrame, SFXManager, Data, Fruit, FruitPhysics, UIRing, ItemDetails, ControllerBlade, GameController, AdsManager;
  
    return {
      setters: [function (module) {
        _defineProperty = module.defineProperty;
        _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
        _inheritsLoose = module.inheritsLoose;
        _initializerDefineProperty = module.initializerDefineProperty;
        _assertThisInitialized = module.assertThisInitialized;
      }, function (module) {
        cclegacy = module.cclegacy;
        _decorator = module._decorator;
        Prefab = module.Prefab;
        UITransform = module.UITransform;
        Size = module.Size;
        screen = module.screen;
        Vec3 = module.Vec3;
        instantiate = module.instantiate;
        ScrollView = module.ScrollView;
        tween = module.tween;
        Label = module.Label;
        ParticleSystem = module.ParticleSystem;
        RigidBody = module.RigidBody;
        randomRangeInt = module.randomRangeInt;
        Animation = module.Animation;
        Component = module.Component;
        resources = module.resources;
        SpriteFrame = module.SpriteFrame;
      }, function (module) {
        SFXManager = module.SFXManager;
      }, function (module) {
        Data = module.Data;
      }, function (module) {
        Fruit = module.Fruit;
      }, function (module) {
        FruitPhysics = module.FruitPhysics;
      }, function (module) {
        UIRing = module.UIRing;
      }, function (module) {
        ItemDetails = module.ItemDetails;
      }, function (module) {
        ControllerBlade = module.ControllerBlade;
      }, function (module) {
        GameController = module.GameController;
      }, function (module) {
        AdsManager = module.AdsManager;
      }],
      execute: function () {
        var _dec, _dec2, _class, _class2, _descriptor, _class3, _temp;
  
        cclegacy._RF.push({}, "7f22fJ4s2dNArsTjqtyV6Fi", "SenseiSwagScene", undefined);
  
        var ccclass = _decorator.ccclass,
            property = _decorator.property;
        var SenseiSwagScene = exports('SenseiSwagScene', (_dec = ccclass('SenseiSwagScene'), _dec2 = property({
          type: Prefab,
          displayName: "Detail Item"
        }), _dec(_class = (_class2 = (_temp = _class3 = /*#__PURE__*/function (_Component) {
          _inheritsLoose(SenseiSwagScene, _Component);
  
          function SenseiSwagScene() {
            var _this;
  
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
  
            _this = _Component.call.apply(_Component, [this].concat(args)) || this;
  
            _initializerDefineProperty(_assertThisInitialized(_this), "prefabDetailItem", _descriptor, _assertThisInitialized(_this));
  
            _defineProperty(_assertThisInitialized(_this), "listItem", []);
  
            _defineProperty(_assertThisInitialized(_this), "poolItem", []);
  
            _defineProperty(_assertThisInitialized(_this), "defaultPosY", 476.15);
  
            _defineProperty(_assertThisInitialized(_this), "currentIndex", 0);
  
            _defineProperty(_assertThisInitialized(_this), "holdInput", false);
  
            _defineProperty(_assertThisInitialized(_this), "nextAnimationOut", "");
  
            _defineProperty(_assertThisInitialized(_this), "lastSelect", false);
  
            return _this;
          }
  
          var _proto = SenseiSwagScene.prototype;
  
          _proto.onEnable = function onEnable() {
            var _this2 = this;
  
            if (SenseiSwagScene.FIRST_INIT) {
              SenseiSwagScene.FIRST_INIT = false;
              return;
            }
  
            this.holdInput = false;
  
            for (var i = 0; i < this.listItem.length; i++) {
              var item = this.listItem[i];
              item.active = false;
              item.parent = null;
              this.poolItem.push(item);
            }
  
            this.listItem = [];
            var curY = 0;
  
            var _loop = function _loop(_i) {
              var data = Data.DATA_COSTUME_BLADE[_i];
  
              var item = _this2.getItemFromPool();
  
              item.setPosition(new Vec3(0, -477.5 + curY, 0));
  
              _this2.listItem.push(item);
  
              curY -= item.getComponent(UITransform).contentSize.height;
              var itemDetails = item.getComponent(ItemDetails);
              itemDetails.updateName(data.name);
              itemDetails.updateHowToGet(data.how_to_get, Data.getInstance().unlockedBlade[_i]);
              itemDetails.description = data.description;
              item.active = false;
  
              if (Data.getInstance().unlockedBlade[_i]) {
                item.getChildByPath("cont_purchase_with").active = false;
                item.getChildByPath("text_purchased").active = true;
              } else {
                item.getChildByPath("cont_purchase_with").active = true;
                item.getChildByPath("text_purchased").active = false;
              }
  
              if (_i == Data.getInstance().bladeUsed) {
                item.getChildByPath("TickSelectedItem").active = true;
              } else {
                item.getChildByPath("TickSelectedItem").active = false;
              }
  
              resources.load(data.icon, SpriteFrame, function (err, spriteFrame) {
                item.active = true;
                itemDetails.updateIcon(spriteFrame);
              });
            };
  
            for (var _i = 0; _i < Data.DATA_COSTUME_BLADE.length; _i++) {
              _loop(_i);
            }
  
            var _loop2 = function _loop2(_i2) {
              var data = Data.DATA_COSTUME_BACKGROUND[_i2];
  
              var item = _this2.getItemFromPool();
  
              item.setPosition(new Vec3(0, -477.5 + curY, 0));
  
              _this2.listItem.push(item);
  
              curY -= item.getComponent(UITransform).contentSize.height;
              var itemDetails = item.getComponent(ItemDetails);
              itemDetails.updateName(data.name);
              itemDetails.updateHowToGet(data.how_to_get, Data.getInstance().unlockedBG[_i2]);
              itemDetails.description = data.description;
              item.active = false;
  
              if (Data.getInstance().unlockedBG[_i2]) {
                item.getChildByPath("cont_purchase_with").active = false;
                item.getChildByPath("text_purchased").active = true;
              } else {
                item.getChildByPath("cont_purchase_with").active = true;
                item.getChildByPath("text_purchased").active = false;
              }
  
              if (_i2 == Data.getInstance().bgUsed) {
                item.getChildByPath("TickSelectedItem").active = true;
              } else {
                item.getChildByPath("TickSelectedItem").active = false;
              }
  
              resources.load(data.icon, SpriteFrame, function (err, spriteFrame) {
                item.active = true;
                itemDetails.updateIcon(spriteFrame);
              });
            };
  
            for (var _i2 = 0; _i2 < Data.DATA_COSTUME_BACKGROUND.length; _i2++) {
              _loop2(_i2);
            }
  
            this.node.getChildByPath("verScrollview/view/content").getComponent(UITransform).setContentSize(new Size(700, Math.abs(curY) + 477.5 + 130)); //resize
  
            if (screen.windowSize.width < 900) {
              var smallerScale = 0.6;
              this.node.setScale(new Vec3(smallerScale, smallerScale, smallerScale));
              console.log('SWAG NODE', this.node);
            }
  
            console.log('=================================>sensei swag');
          };
  
          _proto.trySetFruit = function trySetFruit() {
            this.holdInput = true;
            this.setFruit();
          };
  
          _proto.setFruit = function setFruit() {
            if (SenseiSwagScene.Instance.currentIndex == Data.getInstance().bladeUsed || SenseiSwagScene.Instance.currentIndex == Data.getInstance().bgUsed + Data.DATA_COSTUME_BLADE.length) {
              SenseiSwagScene.Instance.playAnimation("sensei_selected_in", function () {
                SenseiSwagScene.Instance.holdInput = false;
              });
              SenseiSwagScene.Instance.nextAnimationOut = "sensei_selected_out";
            } else {
              SenseiSwagScene.Instance.node.getChildByPath("RightUI/Selected").active = false;
  
              if (SenseiSwagScene.Instance.currentIndex < Data.getInstance().unlockedBlade.length) {
                if (!Data.getInstance().unlockedBlade[SenseiSwagScene.Instance.currentIndex]) {
                  var howToGet = Data.DATA_COSTUME_BLADE[SenseiSwagScene.Instance.currentIndex].how_to_get;
  
                  if (howToGet.type == 'starfruit') {
                    if (Data.getInstance().starFruit >= howToGet.value) {
                      SenseiSwagScene.Instance.nextAnimationOut = "sensei_purchase_out";
                      SenseiSwagScene.Instance.playAnimation("sensei_purchase_in", function () {
                        SenseiSwagScene.Instance.holdInput = false;
                      });
                    } else {
                      SenseiSwagScene.Instance.nextAnimationOut = "sensei_purchLock_out";
                      SenseiSwagScene.Instance.playAnimation("sensei_purchLock_in", function () {
                        SenseiSwagScene.Instance.holdInput = false;
                      });
                    }
                  }
                } else {
                  SenseiSwagScene.Instance.nextAnimationOut = "sensei_select_out";
                  SenseiSwagScene.Instance.playAnimation("sensei_select_in", function () {
                    SenseiSwagScene.Instance.holdInput = false;
                  });
                }
              } else if (SenseiSwagScene.Instance.currentIndex < Data.getInstance().unlockedBlade.length + Data.getInstance().unlockedBG.length) {
                if (!Data.getInstance().unlockedBG[SenseiSwagScene.Instance.currentIndex - Data.getInstance().unlockedBlade.length]) {
                  var _howToGet = Data.DATA_COSTUME_BACKGROUND[SenseiSwagScene.Instance.currentIndex - Data.getInstance().unlockedBlade.length].how_to_get;
  
                  if (_howToGet.type == 'starfruit') {
                    if (Data.getInstance().starFruit >= _howToGet.value) {
                      SenseiSwagScene.Instance.nextAnimationOut = "sensei_purchase_out";
                      SenseiSwagScene.Instance.playAnimation("sensei_purchase_in", function () {
                        SenseiSwagScene.Instance.holdInput = false;
                      });
                    } else {
                      SenseiSwagScene.Instance.nextAnimationOut = "sensei_purchLock_out";
                      SenseiSwagScene.Instance.playAnimation("sensei_purchLock_in", function () {
                        SenseiSwagScene.Instance.holdInput = false;
                      });
                    }
                  }
                } else {
                  SenseiSwagScene.Instance.nextAnimationOut = "sensei_select_out";
                  SenseiSwagScene.Instance.playAnimation("sensei_select_in", function () {
                    SenseiSwagScene.Instance.holdInput = false;
                  });
                }
              }
            }
          };
  
          _proto.getItemFromPool = function getItemFromPool() {
            if (this.poolItem.length == 0) {
              var result = instantiate(this.prefabDetailItem);
              result.setParent(this.node.getChildByPath("verScrollview/view/content"));
              return result;
            } else {
              var _result = this.poolItem.pop();
  
              _result.active = true;
  
              _result.setParent(this.node.getChildByPath("verScrollview/view/content"));
  
              return _result;
            }
          };
  
          _proto.selectCurrent = function selectCurrent(fromPurchase) {
            if (this.currentIndex < Data.DATA_COSTUME_BLADE.length) {
              SFXManager.getInstance().play(SFXManager.SFX_UI_BLADE_EQUIP);
              if (Data.getInstance().bladeUsed == 11) SFXManager.getInstance().stopLoopSFX(SFXManager.SFX_BLADEFIRE_CRACKER_LOOP);
              this.listItem[Data.getInstance().bladeUsed].getChildByPath("TickSelectedItem").active = false;
              Data.getInstance().bladeUsed = this.currentIndex;
              this.listItem[Data.getInstance().bladeUsed].getChildByPath("TickSelectedItem").active = true;
              ControllerBlade.getInstance().stopAllBladeSFX();
              GameController.getInstance().changeBlade(Data.DATA_COSTUME_BLADE[Data.getInstance().bladeUsed].prefab);
            } else {
              SFXManager.getInstance().play(SFXManager.SFX_UI_DOJO_EQUIP);
              this.listItem[Data.getInstance().bgUsed + Data.DATA_COSTUME_BLADE.length].getChildByPath("TickSelectedItem").active = false;
              Data.getInstance().bgUsed = this.currentIndex - Data.DATA_COSTUME_BLADE.length;
              this.listItem[Data.getInstance().bgUsed + Data.DATA_COSTUME_BLADE.length].getChildByPath("TickSelectedItem").active = true;
              GameController.getInstance().changeBackground(Data.DATA_COSTUME_BACKGROUND[Data.getInstance().bgUsed].background);
            }
  
            if (this.currentIndex == Data.getInstance().bladeUsed || this.currentIndex == Data.getInstance().bgUsed + Data.DATA_COSTUME_BLADE.length) {
              if (SenseiSwagScene.Instance.nextAnimationOut != "sensei_selected_out") {
                SenseiSwagScene.Instance.playAnimation(SenseiSwagScene.Instance.nextAnimationOut, function () {
                  SenseiSwagScene.Instance.playAnimation("sensei_selected_in");
                  SenseiSwagScene.Instance.nextAnimationOut = "sensei_selected_out";
                });
              }
            } else {
              SenseiSwagScene.Instance.playAnimation(SenseiSwagScene.Instance.nextAnimationOut, function () {
                SenseiSwagScene.Instance.playAnimation("sensei_select_in");
                SenseiSwagScene.Instance.nextAnimationOut = "sensei_select_out";
              });
            }
  
            GameController.saveData();
          };
  
          _proto.onLoad = function onLoad() {
            SenseiSwagScene.Instance = this;
            this.node.getChildByPath("verScrollview").on(ScrollView.EventType.SCROLL_BEGAN, function () {}, this);
            this.node.getChildByPath("verScrollview").on(ScrollView.EventType.SCROLL_ENDED, function () {
              var _this3 = this;
  
              var curPos = this.node.getChildByPath("verScrollview/view/content").position.clone();
  
              if (curPos.y < this.defaultPosY) {
                curPos.y = this.defaultPosY;
                this.node.getChildByPath("verScrollview/view/content").position = curPos;
              } else {
                var diff = curPos.y - this.defaultPosY;
  
                while (diff > 0) {
                  diff -= 155;
                }
  
                diff = Math.abs(diff);
                var duration = 0;
  
                if (diff >= 155 / 2) {
                  curPos.y -= 155 - diff;
                  duration = Math.abs(155 - diff) / 300;
                } else {
                  curPos.y += diff;
                  duration = Math.abs(diff) / 300;
                }
  
                tween(this.node.getChildByPath("verScrollview/view/content")).to(duration, {
                  position: curPos
                }).call(function () {
                  var description = "";
                  var index = Math.floor(Math.abs(_this3.defaultPosY - curPos.y) / 155);
  
                  if (index < Data.DATA_COSTUME_BLADE.length) {
                    description = Data.DATA_COSTUME_BLADE[index].description;
                  } else {
                    description = Data.DATA_COSTUME_BACKGROUND[index - Data.DATA_COSTUME_BLADE.length].description;
                  }
  
                  _this3.currentIndex = index;
                  _this3.node.getChildByPath("RightUI/ParchmentBoardSenseiSwag/text_description").getComponent(Label).string = description;
  
                  if (_this3.currentIndex == Data.getInstance().bladeUsed || _this3.currentIndex == Data.getInstance().bgUsed + Data.DATA_COSTUME_BLADE.length) {
                    if (SenseiSwagScene.Instance.nextAnimationOut != "sensei_selected_out") {
                      SenseiSwagScene.Instance.playAnimation(SenseiSwagScene.Instance.nextAnimationOut, function () {
                        SenseiSwagScene.Instance.playAnimation("sensei_selected_in");
                        SenseiSwagScene.Instance.nextAnimationOut = "sensei_selected_out";
                      });
                    }
                  } else {
                    if (_this3.currentIndex < Data.getInstance().unlockedBlade.length) {
                      if (!Data.getInstance().unlockedBlade[_this3.currentIndex]) {
                        var howToGet = Data.DATA_COSTUME_BLADE[SenseiSwagScene.Instance.currentIndex].how_to_get;
  
                        if (howToGet.type == 'starfruit') {
                          if (Data.getInstance().starFruit >= howToGet.value) {
                            if (SenseiSwagScene.Instance.nextAnimationOut != "sensei_purchase_out") {
                              SenseiSwagScene.Instance.playAnimation(SenseiSwagScene.Instance.nextAnimationOut, function () {
                                SenseiSwagScene.Instance.playAnimation("sensei_purchase_in");
                                SenseiSwagScene.Instance.nextAnimationOut = "sensei_purchase_out";
                              });
                            }
                          } else {
                            if (SenseiSwagScene.Instance.nextAnimationOut != "sensei_purchLock_out") {
                              SenseiSwagScene.Instance.playAnimation(SenseiSwagScene.Instance.nextAnimationOut, function () {
                                SenseiSwagScene.Instance.playAnimation("sensei_purchLock_in");
                                SenseiSwagScene.Instance.nextAnimationOut = "sensei_purchLock_out";
                              });
                            }
                          }
                        }
                      } else {
                        if (SenseiSwagScene.Instance.nextAnimationOut != "sensei_select_out") {
                          SenseiSwagScene.Instance.playAnimation(SenseiSwagScene.Instance.nextAnimationOut, function () {
                            SenseiSwagScene.Instance.playAnimation("sensei_select_in");
                            SenseiSwagScene.Instance.nextAnimationOut = "sensei_select_out";
                          });
                        }
                      }
                    } else if (_this3.currentIndex < Data.getInstance().unlockedBlade.length + Data.getInstance().unlockedBG.length) {
                      if (!Data.getInstance().unlockedBG[_this3.currentIndex - Data.getInstance().unlockedBlade.length]) {
                        var _howToGet2 = Data.DATA_COSTUME_BACKGROUND[SenseiSwagScene.Instance.currentIndex - Data.getInstance().unlockedBlade.length].how_to_get;
  
                        if (_howToGet2.type == 'starfruit') {
                          if (Data.getInstance().starFruit >= _howToGet2.value) {
                            if (SenseiSwagScene.Instance.nextAnimationOut != "sensei_purchase_out") {
                              SenseiSwagScene.Instance.playAnimation(SenseiSwagScene.Instance.nextAnimationOut, function () {
                                SenseiSwagScene.Instance.playAnimation("sensei_purchase_in");
                                SenseiSwagScene.Instance.nextAnimationOut = "sensei_purchase_out";
                              });
                            }
                          } else {
                            if (SenseiSwagScene.Instance.nextAnimationOut != "sensei_purchLock_out") {
                              SenseiSwagScene.Instance.playAnimation(SenseiSwagScene.Instance.nextAnimationOut, function () {
                                SenseiSwagScene.Instance.playAnimation("sensei_purchLock_in");
                                SenseiSwagScene.Instance.nextAnimationOut = "sensei_purchLock_out";
                              });
                            }
                          }
                        }
                      } else {
                        if (SenseiSwagScene.Instance.nextAnimationOut != "sensei_select_out") {
                          SenseiSwagScene.Instance.playAnimation(SenseiSwagScene.Instance.nextAnimationOut, function () {
                            SenseiSwagScene.Instance.playAnimation("sensei_select_in");
                            SenseiSwagScene.Instance.nextAnimationOut = "sensei_select_out";
                          });
                        }
                      }
                    }
                  }
                }).start();
              }
            }, this);
          };
  
          _proto.start = function start() {};
  
          _proto.update = function update(deltaTime) {};
  
          _proto.btnBackClicked = function btnBackClicked() {
            if (this.holdInput) return;
            this.holdInput = true;
            SFXManager.getInstance().play(SFXManager.SFX_SELECT);
            GameController.getInstance().moveToHomescreen();
          };
  
          _proto.hideNode = function hideNode(node, onComplete) {
            tween(node).to(0.2, {
              scale: new Vec3(0, 0, 0)
            }).call(function () {
              onComplete();
            }).start();
          };
  
          _proto.showNode = function showNode(node, scale, onComplete) {
            if (node.getScale().equals(scale)) {
              onComplete();
              return;
            }
  
            node.setScale(0, 0, 0);
            tween(node).to(0.2, {
              scale: scale
            }).call(function () {
              onComplete();
            }).start();
          };
  
          _proto.tryPurchase = function tryPurchase() {
            var _this4 = this;
  
            var successPurchase = false;
            var howToGet = null;
  
            if (this.currentIndex < Data.getInstance().unlockedBlade.length) {
              if (!Data.getInstance().unlockedBlade[this.currentIndex]) {
                howToGet = Data.DATA_COSTUME_BLADE[this.currentIndex].how_to_get;
                var type = howToGet.type;
  
                if (type == "starfruit") {
                  var value = howToGet.value;
  
                  if (Data.getInstance().starFruit >= value) {
                    Data.getInstance().unlockedBlade[this.currentIndex] = true;
                    GameController.saveData();
                    successPurchase = true;
                    this.listItem[this.currentIndex].getComponent(ItemDetails).updateHowToGet(howToGet, Data.getInstance().unlockedBlade[this.currentIndex]);
                  }
                }
              }
            } else if (this.currentIndex < Data.getInstance().unlockedBlade.length + Data.getInstance().unlockedBG.length) {
              if (!Data.getInstance().unlockedBG[this.currentIndex - Data.getInstance().unlockedBlade.length]) {
                howToGet = Data.DATA_COSTUME_BACKGROUND[this.currentIndex - Data.getInstance().unlockedBlade.length].how_to_get;
                var _type = howToGet.type;
  
                if (_type == "starfruit") {
                  var _value = howToGet.value;
  
                  if (Data.getInstance().starFruit >= _value) {
                    Data.getInstance().unlockedBG[this.currentIndex - Data.getInstance().unlockedBlade.length] = true;
                    successPurchase = true;
                    this.listItem[this.currentIndex].getComponent(ItemDetails).updateHowToGet(howToGet, Data.getInstance().unlockedBG[this.currentIndex - Data.getInstance().unlockedBlade.length]);
                  }
                }
              }
            }
  
            if (successPurchase) {
              this.enableVerticalScroll(false);
              SFXManager.getInstance().play(SFXManager.SFX_UI_BUY);
  
              if (howToGet.type == "starfruit") {
                var _value2 = howToGet.value;
                var vecTemp = new Vec3(Data.getInstance().starFruit, 0, 0);
                Data.getInstance().starFruit -= _value2;
                GameController.getInstance().playStarfruitSpend(_value2);
                tween(vecTemp).to(0.5, {
                  x: Data.getInstance().starFruit
                }, {
                  onUpdate: function onUpdate() {
                    _this4.node.getChildByPath("UI_atasSensei/StarfruitLabel/text_starfruitTop").getComponent(Label).string = GameController.getInstance().formatNumber(parseInt(vecTemp.x.toFixed(0)));
                  }
                }).start();
                GameController.saveData();
              }
  
              var particle = GameController.Instance.particleJuiceStarfruit;
              particle.active = true;
              particle.position = Data.getInstance().convert2DPosTo3D(this.node.getChildByPath("RightUI/button_purchase").worldPosition);
              particle.getComponent(ParticleSystem).play();
              particle.getChildByPath("light3").getComponent(ParticleSystem).play();
              particle.getChildByPath("light").getComponent(ParticleSystem).play();
              particle.getChildByPath("light2").getComponent(ParticleSystem).play();
              particle.getChildByPath("sparkle").getComponent(ParticleSystem).play();
              particle.getChildByPath("juice").getComponent(ParticleSystem).play();
              particle.getChildByPath("sparkle2").getComponent(ParticleSystem).play();
              var particleUnlockItem = GameController.Instance.particleUnlockItem;
              particleUnlockItem.active = true;
              particleUnlockItem.position = Data.getInstance().convert2DPosTo3D(this.listItem[this.currentIndex].getChildByPath("container_icon").worldPosition);
              particleUnlockItem.getComponent(ParticleSystem).play();
              particleUnlockItem.getChildByPath("p_impact").getComponent(ParticleSystem).play();
              particleUnlockItem.getChildByPath("p_ring").getComponent(ParticleSystem).play();
              SenseiSwagScene.Instance.playAnimation(SenseiSwagScene.Instance.nextAnimationOut, function () {
                SenseiSwagScene.Instance.playAnimation("sensei_selected_in");
                SenseiSwagScene.Instance.nextAnimationOut = "sensei_selected_out";
              });
              this.scheduleOnce(function () {
                SenseiSwagScene.Instance.selectCurrent(true);
                this.enableVerticalScroll(true);
              }, 0.4);
            } else {
              var fruitPurchase = this.node.getChildByPath("RightUI/button_purchase").getComponent(UIRing).getFruit().getComponent(Fruit);
              this.scheduleOnce(function () {
                fruitPurchase.reset(false);
                var fruitPhysics = fruitPurchase.node.getComponent(FruitPhysics);
                if (fruitPhysics != null) fruitPhysics.pausePhysics = true;
                fruitPurchase.getComponent(RigidBody).setAngularVelocity(new Vec3(randomRangeInt(-3, 3), randomRangeInt(-3, 3), randomRangeInt(-3, 3)));
              }, 0.4);
            }
          };
  
          _proto.btnAdsClicked = function btnAdsClicked() {
            if (this.holdInput) return;
            this.holdInput = true;
            SFXManager.getInstance().play(SFXManager.SFX_SELECT);
            var me = this;
            AdsManager.showRewardedAds(function () {
              var trailStarFruit = GameController.Instance.particleTrailStarfruit;
              trailStarFruit.setWorldPosition(Data.getInstance().convert2DPosTo3D(me.node.getChildByPath("RightUI/Locked_ad/ButtonBonus/starfruitBonusLayout/text_starfruitBonus").worldPosition));
              var targetPos = me.node.getChildByPath("UI_atasSensei/StarfruitLabel/starfruitLabelIcon/CurrencyStarfruitIcon").worldPosition;
              tween(trailStarFruit).to(0.5, {
                worldPosition: Data.getInstance().convert2DPosTo3D(targetPos)
              }).start();
              var vecTemp = new Vec3(Data.getInstance().starFruit, 0, 0);
              Data.getInstance().starFruit += 50;
              GameController.getInstance().playStarfruitIncrement(50);
              tween(vecTemp).delay(0.5).to(0.5, {
                x: Data.getInstance().starFruit
              }, {
                onUpdate: function onUpdate() {
                  me.node.getChildByPath("UI_atasSensei/StarfruitLabel/text_starfruitTop").getComponent(Label).string = GameController.getInstance().formatNumber(parseInt(vecTemp.x.toFixed(0)));
                }
              }).start();
              GameController.saveData();
              me.node.getChildByPath("RightUI/Selected").active = false;
  
              if (me.currentIndex < Data.getInstance().unlockedBlade.length) {
                var howToGet = Data.DATA_COSTUME_BLADE[SenseiSwagScene.Instance.currentIndex].how_to_get;
                if (howToGet.type == 'starfruit') ;
              } else if (me.currentIndex < Data.getInstance().unlockedBlade.length + Data.getInstance().unlockedBG.length) {
                var _howToGet3 = Data.DATA_COSTUME_BACKGROUND[SenseiSwagScene.Instance.currentIndex - Data.getInstance().unlockedBlade.length].how_to_get;
                if (_howToGet3.type == 'starfruit') ;
              }
  
              me.holdInput = false;
            }, function () {
              me.holdInput = false;
            });
          };
  
          _proto.enableVerticalScroll = function enableVerticalScroll(enable) {
            this.node.getChildByPath("verScrollview").getComponent(ScrollView).vertical = enable;
          };
  
          _proto.playAnimation = function playAnimation(key, onFinish) {
            if (onFinish === void 0) {
              onFinish = function onFinish() {};
            }
  
            var fruit = null;
  
            if (key == "sensei_purchase_in") {
              fruit = this.node.getChildByPath("RightUI/button_purchase").getComponent(UIRing).getFruit();
            } else if (key == "sensei_purchLock_in") {
              fruit = this.node.getChildByPath("RightUI/button_purchaseLock").getComponent(UIRing).getFruit();
            } else if (key == "sensei_select_in") {
              fruit = this.node.getChildByPath("RightUI/button_select").getComponent(UIRing).getFruit();
            }
  
            if (fruit != null) {
              fruit.getComponent(Fruit).reset(false);
              var fruitPhysics = fruit.getComponent(FruitPhysics);
              if (fruitPhysics != null) fruitPhysics.pausePhysics = true;
              fruit.getComponent(RigidBody).setAngularVelocity(new Vec3(randomRangeInt(-3, 3), randomRangeInt(-3, 3), randomRangeInt(-3, 3)));
            }
  
            var anim = this.node.getComponent(Animation);
            anim.play(key);
            anim.on(Animation.EventType.FINISHED, onFinish, this, true);
          };
  
          return SenseiSwagScene;
        }(Component), _defineProperty(_class3, "FIRST_INIT", true), _defineProperty(_class3, "Instance", void 0), _temp), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "prefabDetailItem", [_dec2], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        }), _class2)) || _class));
  
        cclegacy._RF.pop();
      }
    };
  });
  
  System.register("chunks:///_virtual/Bomb.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './SFXManager.ts', './ShakeNode.ts', './FruitPhysics.ts', './ScenePause.ts', './GameController.ts', './ArcadeBonusBoardController.ts', './FruitManager.ts', './AdsManager.ts'], function (exports) {
    'use strict';
  
    var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _defineProperty, _createClass, cclegacy, _decorator, RigidBody, Vec3, randomRangeInt, tween, Animation, Component, SFXManager, ShakeNode, FruitPhysics, ScenePause, GameController, ArcadeBonusBoardController, FruitManager, AdsManager;
  
    return {
      setters: [function (module) {
        _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
        _inheritsLoose = module.inheritsLoose;
        _initializerDefineProperty = module.initializerDefineProperty;
        _assertThisInitialized = module.assertThisInitialized;
        _defineProperty = module.defineProperty;
        _createClass = module.createClass;
      }, function (module) {
        cclegacy = module.cclegacy;
        _decorator = module._decorator;
        RigidBody = module.RigidBody;
        Vec3 = module.Vec3;
        randomRangeInt = module.randomRangeInt;
        tween = module.tween;
        Animation = module.Animation;
        Component = module.Component;
      }, function (module) {
        SFXManager = module.SFXManager;
      }, function (module) {
        ShakeNode = module.ShakeNode;
      }, function (module) {
        FruitPhysics = module.FruitPhysics;
      }, function (module) {
        ScenePause = module.ScenePause;
      }, function (module) {
        GameController = module.GameController;
      }, function (module) {
        ArcadeBonusBoardController = module.ArcadeBonusBoardController;
      }, function (module) {
        FruitManager = module.FruitManager;
      }, function (module) {
        AdsManager = module.AdsManager;
      }],
      execute: function () {
        var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp;
  
        cclegacy._RF.push({}, "87cfbCMeURIPqqySIXa4ZV2", "Bomb", undefined);
  
        var ccclass = _decorator.ccclass,
            property = _decorator.property;
        var Bomb = exports('Bomb', (_dec = ccclass('Bomb'), _dec2 = property({
          type: Number,
          displayName: "Collider radius"
        }), _dec3 = property({
          type: String,
          displayName: "bomb type"
        }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
          _inheritsLoose(Bomb, _Component);
  
          function Bomb() {
            var _this;
  
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
  
            _this = _Component.call.apply(_Component, [this].concat(args)) || this;
  
            _initializerDefineProperty(_assertThisInitialized(_this), "colliderRadius", _descriptor, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "bombType", _descriptor2, _assertThisInitialized(_this));
  
            _defineProperty(_assertThisInitialized(_this), "waveId", 0);
  
            _defineProperty(_assertThisInitialized(_this), "lastLinearVelocity", null);
  
            _defineProperty(_assertThisInitialized(_this), "lastAngularVelocity", null);
  
            _defineProperty(_assertThisInitialized(_this), "slashed", false);
  
            _defineProperty(_assertThisInitialized(_this), "_isDeflected", false);
  
            return _this;
          }
  
          var _proto = Bomb.prototype;
  
          _proto.start = function start() {};
  
          _proto.isBombType = function isBombType(type) {
            return this.bombType == type;
          };
  
          _proto.onEnable = function onEnable() {
            this.getComponent(RigidBody).setAngularVelocity(new Vec3(randomRangeInt(-3, 3), randomRangeInt(-3, 3), randomRangeInt(-3, 3)));
            this.getComponent(RigidBody).angularDamping = 0;
          };
  
          _proto.reset = function reset() {
            this.node.getComponent(FruitPhysics).reset();
            this.slashed = false;
            this.isDeflected = false;
            this.getComponent(RigidBody).setAngularVelocity(new Vec3(randomRangeInt(-3, 3), randomRangeInt(-3, 3), randomRangeInt(-3, 3)));
            this.getComponent(RigidBody).angularDamping = 0;
          };
  
          _proto.getSlashed = function getSlashed() {
            if (GameController.IMMUNE) return false;
  
            if (!this.slashed) {
              if (GameController.gameMode == GameController.MODE_ARCADE) ArcadeBonusBoardController.getInstance().onlySliceBerry = false;
              this.slashed = true;
              return true;
            }
  
            return false;
          };
  
          _proto.deflected = function deflected(rotation) {
            this.isDeflected = true;
            var curVelocity = new Vec3();
            this.getComponent(RigidBody).getLinearVelocity(curVelocity);
            var speedX = -5000;
            this.getComponent(RigidBody).applyForce(new Vec3(speedX * Math.cos(rotation * (Math.PI / 180)), 3000 * Math.sin((rotation + 180) * (Math.PI / 180)), 100));
          };
  
          _proto.pauseVelocityOnly = function pauseVelocityOnly() {
            this.node.getComponent(FruitPhysics).pausePhysics = true;
          };
  
          _proto.resumeVelocityOnly = function resumeVelocityOnly() {
            this.node.getComponent(FruitPhysics).pausePhysics = false;
          };
  
          _proto.pausePhysic = function pausePhysic() {
            this.node.getComponent(FruitPhysics).pausePhysics = true;
            this.lastAngularVelocity = new Vec3(0, 0, 0);
            this.getComponent(RigidBody).getAngularVelocity(this.lastAngularVelocity);
            this.getComponent(RigidBody).setAngularVelocity(new Vec3(0, 0, 0));
          };
  
          _proto.resumePhysic = function resumePhysic() {
            this.node.getComponent(FruitPhysics).pausePhysics = false;
            this.getComponent(RigidBody).setAngularVelocity(this.lastAngularVelocity);
          };
  
          _proto.shakeBomb = function shakeBomb(callback) {
            tween(this.node).by(0.05 / 3, {
              position: new Vec3(-0.4, -0.4, this.node.position.z)
            }).by(0.05 / 3, {
              position: new Vec3(0.4, 0.4, this.node.position.z)
            }).by(0.05 / 3, {
              position: new Vec3(-0.4, 0.4, this.node.position.z)
            }).by(0.05 / 3, {
              position: new Vec3(0.4, -0.4, this.node.position.z)
            }).by(0.05 / 3, {
              position: new Vec3(-0.4, -0.4, this.node.position.z)
            }).by(0.05 / 3, {
              position: new Vec3(0.4, 0.4, this.node.position.z)
            }).by(0.05 / 3, {
              position: new Vec3(-0.4, 0.4, this.node.position.z)
            }).by(0.05 / 3, {
              position: new Vec3(0.4, -0.4, this.node.position.z)
            }).by(0.05 / 3, {
              position: new Vec3(-0.4, -0.4, this.node.position.z)
            }).by(0.05 / 3, {
              position: new Vec3(0.4, 0.4, this.node.position.z)
            }).by(0.05 / 3, {
              position: new Vec3(-0.4, 0.4, this.node.position.z)
            }).by(0.05 / 3, {
              position: new Vec3(0.4, -0.4, this.node.position.z)
            }).by(0.05 / 3, {
              position: new Vec3(-0.4, -0.4, this.node.position.z)
            }).by(0.05 / 3, {
              position: new Vec3(0.4, 0.4, this.node.position.z)
            }).by(0.05 / 3, {
              position: new Vec3(-0.4, 0.4, this.node.position.z)
            }).by(0.05 / 3, {
              position: new Vec3(0.4, -0.4, this.node.position.z)
            }).by(0.05 / 3, {
              position: new Vec3(-0.4, -0.4, this.node.position.z)
            }).by(0.05 / 3, {
              position: new Vec3(0.4, 0.4, this.node.position.z)
            }).by(0.05 / 3, {
              position: new Vec3(-0.4, 0.4, this.node.position.z)
            }).by(0.05 / 3, {
              position: new Vec3(0.4, -0.4, this.node.position.z)
            }).by(0.05 / 3, {
              position: new Vec3(-0.4, -0.4, this.node.position.z)
            }).by(0.05 / 3, {
              position: new Vec3(0.4, 0.4, this.node.position.z)
            }).by(0.05 / 3, {
              position: new Vec3(-0.4, 0.4, this.node.position.z)
            }).by(0.05 / 3, {
              position: new Vec3(0.4, -0.4, this.node.position.z)
            }).by(0.05 / 3, {
              position: new Vec3(-0.4, -0.4, this.node.position.z)
            }).by(0.05 / 3, {
              position: new Vec3(0.4, 0.4, this.node.position.z)
            }).by(0.05 / 3, {
              position: new Vec3(-0.4, 0.4, this.node.position.z)
            }).by(0.05 / 3, {
              position: new Vec3(0.4, -0.4, this.node.position.z)
            }).by(0.05 / 3, {
              position: new Vec3(-0.4, -0.4, this.node.position.z)
            }).by(0.05 / 3, {
              position: new Vec3(0.4, 0.4, this.node.position.z)
            }).by(0.05 / 3, {
              position: new Vec3(-0.4, 0.4, this.node.position.z)
            }).by(0.05 / 3, {
              position: new Vec3(0.4, -0.4, this.node.position.z)
            }).by(0.05 / 3, {
              position: new Vec3(-0.4, -0.4, this.node.position.z)
            }).by(0.05 / 3, {
              position: new Vec3(0.4, 0.4, this.node.position.z)
            }).by(0.05 / 3, {
              position: new Vec3(-0.4, 0.4, this.node.position.z)
            }).by(0.05 / 3, {
              position: new Vec3(0.4, -0.4, this.node.position.z)
            }).by(0.05 / 3, {
              position: new Vec3(-0.4, -0.4, this.node.position.z)
            }).by(0.05 / 3, {
              position: new Vec3(0.4, 0.4, this.node.position.z)
            }).by(0.05 / 3, {
              position: new Vec3(-0.4, 0.4, this.node.position.z)
            }).by(0.05 / 3, {
              position: new Vec3(0.4, -0.4, this.node.position.z)
            }).by(0.05 / 3, {
              position: new Vec3(-0.4, -0.4, this.node.position.z)
            }).by(0.05 / 3, {
              position: new Vec3(0.4, 0.4, this.node.position.z)
            }).by(0.05 / 3, {
              position: new Vec3(-0.4, 0.4, this.node.position.z)
            }).by(0.05 / 3, {
              position: new Vec3(0.4, -0.4, this.node.position.z)
            }).by(0.05 / 3, {
              position: new Vec3(-0.4, -0.4, this.node.position.z)
            }).by(0.05 / 3, {
              position: new Vec3(0.4, 0.4, this.node.position.z)
            }).by(0.05 / 3, {
              position: new Vec3(-0.4, 0.4, this.node.position.z)
            }).by(0.05 / 3, {
              position: new Vec3(0.4, -0.4, this.node.position.z)
            }).call(function () {
              callback();
            }).start();
          };
  
          _proto.animateExplodeTimer = function animateExplodeTimer() {
            var _this2 = this;
  
            GameController.getInstance().camera.getComponent(ShakeNode).shakeEffect();
            var bombPos = this.node.position.clone();
            var anim = GameController.Instance.gameplayScreen.getChildByPath("white_background").getComponent(Animation);
            anim.play("white_background_show");
            anim.on(Animation.EventType.FINISHED, function () {
              bombPos.y = -200;
  
              _this2.node.setPosition(bombPos);
  
              anim.play("white_background_hide");
  
              for (var i = 0; i < FruitManager.getInstance().activeObject.length; i++) {
                var cur = FruitManager.getInstance().activeObject[i];
                var bomb = cur.getComponent(Bomb);
  
                if (bomb != null) {
                  var _bombPos = cur.position.clone();
  
                  _bombPos.y = -200;
                  cur.setPosition(_bombPos);
                }
              }
            }, this, true);
          };
  
          _proto.animateExplode = function animateExplode() {
            var _this3 = this;
  
            FruitManager.getInstance().stopAllObject();
            ScenePause.getInstance().hideButtonPause();
            SFXManager.getInstance().play(SFXManager.SFX_BOMB_EXPLODE_GAMEOVER);
            var rb = this.getComponent(RigidBody);
            rb.setLinearVelocity(new Vec3(0, 0, 0));
            rb.useGravity = false;
            var randomAngle = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  
            var _loop = function _loop(i) {
              var index = i;
              console.log('setting: ' + index);
              var angle = randomAngle.splice(randomRangeInt(0, randomAngle.length), 1)[0];
  
              _this3.scheduleOnce(function () {
                console.log(index);
                GameController.getInstance().camera.getComponent(ShakeNode).shakeEffect();
                var ray = FruitManager.getInstance().poolBombRay[index];
                ray.active = true;
  
                var bombPos = _this3.node.position.clone();
  
                var rayPos = _this3.node.position.clone();
  
                bombPos.z = 5;
                rayPos.z = bombPos.z - 1;
  
                _this3.node.setPosition(bombPos);
  
                ray.setPosition(rayPos);
                ray.setRotationFromEuler(new Vec3(-90, 0, angle * 30));
                ray.setParent(_this3.node.parent);
  
                if (index == FruitManager.getInstance().poolBombRay.length - 1) {
                  var anim = GameController.Instance.gameplayScreen.getChildByPath("white_background").getComponent(Animation);
                  anim.play("white_background_show");
                  anim.on(Animation.EventType.FINISHED, function () {
                    bombPos.y = 200;
  
                    _this3.node.setPosition(bombPos);
  
                    for (var _i = 0; _i < FruitManager.getInstance().poolBombRay.length; _i++) {
                      var _ray = FruitManager.getInstance().poolBombRay[_i];
  
                      _ray.active = false;
                    }
  
                    FruitManager.getInstance().clearActiveObject();
  
                    _this3.scheduleOnce(function () {
                      anim.play("white_background_hide");
                      anim.on(Animation.EventType.FINISHED, function () {
                        if (GameController.getInstance().canRevive) {
                          GameController.getInstance().showOfferContinue();
                          ScenePause.getInstance().hideButtonPause();
                        } else {
                          GameController.getInstance().showGameOver(function () {
                            AdsManager.showInterstitialAds(function () {
                              if (GameController.getInstance().getScreenState() != GameController.SCREEN_STATE_RESULT_REWARD) GameController.getInstance().setScreenState(GameController.SCREEN_STATE_RESULT_REWARD);
                            });
                          });
                        }
                      }, _this3, true);
                    }, 0.5);
                  }, _this3, true);
                }
              }, 0.166 * i);
            };
  
            for (var i = 0; i < FruitManager.getInstance().poolBombRay.length; i++) {
              _loop(i);
            }
          };
  
          _createClass(Bomb, [{
            key: "isDeflected",
            get: function get() {
              return this._isDeflected;
            },
            set: function set(value) {
              this._isDeflected = value;
            }
          }]);
  
          return Bomb;
        }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "colliderRadius", [_dec2], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function initializer() {
            return 0;
          }
        }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "bombType", [_dec3], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function initializer() {
            return "";
          }
        })), _class2)) || _class));
  
        cclegacy._RF.pop();
      }
    };
  });
  
  System.register("chunks:///_virtual/UIRing.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './FruitManager.ts'], function (exports) {
    'use strict';
  
    var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _defineProperty, cclegacy, _decorator, find, Vec3, view, Camera, RigidBody, Component, FruitManager;
  
    return {
      setters: [function (module) {
        _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
        _inheritsLoose = module.inheritsLoose;
        _initializerDefineProperty = module.initializerDefineProperty;
        _assertThisInitialized = module.assertThisInitialized;
        _defineProperty = module.defineProperty;
      }, function (module) {
        cclegacy = module.cclegacy;
        _decorator = module._decorator;
        find = module.find;
        Vec3 = module.Vec3;
        view = module.view;
        Camera = module.Camera;
        RigidBody = module.RigidBody;
        Component = module.Component;
      }, function (module) {
        FruitManager = module.FruitManager;
      }],
      execute: function () {
        var _dec, _class, _class2, _descriptor, _descriptor2, _temp;
  
        cclegacy._RF.push({}, "8d34ekFjbNM5q/X0vM02c7i", "UIRing", undefined);
  
        var ccclass = _decorator.ccclass,
            property = _decorator.property;
        var UIRing = exports('UIRing', (_dec = ccclass('UIRing'), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
          _inheritsLoose(UIRing, _Component);
  
          function UIRing() {
            var _this;
  
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
  
            _this = _Component.call.apply(_Component, [this].concat(args)) || this;
  
            _initializerDefineProperty(_assertThisInitialized(_this), "fruitName", _descriptor, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "action", _descriptor2, _assertThisInitialized(_this));
  
            _defineProperty(_assertThisInitialized(_this), "fruit", null);
  
            _defineProperty(_assertThisInitialized(_this), "MainCamera", void 0);
  
            _defineProperty(_assertThisInitialized(_this), "baseScale", void 0);
  
            _defineProperty(_assertThisInitialized(_this), "calledGetFruit", false);
  
            return _this;
          }
  
          var _proto = UIRing.prototype;
  
          _proto.getFruit = function getFruit() {
            this.calledGetFruit = true;
  
            if (this.fruit == null) {
              console.log('load ring ui');
              this.MainCamera = find("Main Camera");
              console.log(this.fruitName + " , " + this.action);
              var fruit = FruitManager.getInstance().getFruitUI(this.fruitName, this.action);
              this.fruit = fruit;
              var fruitPos = new Vec3(0, 0, 0);
              var worldPos = this.node.getChildByPath("buttonFruit").worldPosition.clone();
              worldPos.x = worldPos.x * view.getScaleX();
              worldPos.y = worldPos.y * view.getScaleY();
              this.MainCamera.getComponent(Camera).screenToWorld(worldPos, fruitPos);
              fruit.setPosition(fruitPos);
              fruit.getComponent(RigidBody).angularDamping = 0;
              this.baseScale = fruit.scale.x;
              fruit.scale = new Vec3(0, 0, 0);
            }
  
            return this.fruit;
          };
  
          _proto.setFruitName = function setFruitName(name) {
            this.fruitName = name;
  
            if (this.fruit != null) {
              this.fruit.destroy();
              this.fruit = null;
            }
          };
  
          _proto.onLoad = function onLoad() {
            if (this.calledGetFruit) return;
            console.log('load ring ui');
            this.MainCamera = find("Main Camera");
            console.log(this.fruitName + " , " + this.action);
            var fruit = FruitManager.getInstance().getFruitUI(this.fruitName, this.action);
            this.fruit = fruit;
            var fruitPos = new Vec3(0, 0, 0);
            var worldPos = this.node.getChildByPath("buttonFruit").worldPosition.clone();
            worldPos.x = worldPos.x * view.getScaleX();
            worldPos.y = worldPos.y * view.getScaleY();
            this.MainCamera.getComponent(Camera).screenToWorld(worldPos, fruitPos);
            fruit.setPosition(fruitPos);
            fruit.getComponent(RigidBody).angularDamping = 0;
            this.baseScale = fruit.scale.x;
            fruit.scale = new Vec3(0, 0, 0);
          };
  
          _proto.update = function update(deltaTime) {
            var fruitPos = new Vec3(0, 0, 0);
            var worldPos = this.node.getChildByPath("buttonFruit").worldPosition.clone();
            worldPos.x = worldPos.x * view.getScaleX();
            worldPos.y = worldPos.y * view.getScaleY();
            this.MainCamera.getComponent(Camera).screenToWorld(worldPos, fruitPos);
            fruitPos.z = -5;
            this.fruit.setPosition(fruitPos);
            var vecScale = this.fruit.scale.clone();
            vecScale.x = this.baseScale * this.node.getChildByPath("buttonFruit").scale.x;
            vecScale.y = this.baseScale * this.node.getChildByPath("buttonFruit").scale.y;
            vecScale.z = this.baseScale * this.node.getChildByPath("buttonFruit").scale.z;
            this.fruit.scale = vecScale;
            var rotation = this.node.getChildByPath("ring").eulerAngles;
            this.node.getChildByPath("ring").setRotationFromEuler(rotation.x, rotation.y, rotation.z + 10 * deltaTime);
          };
  
          return UIRing;
        }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "fruitName", [property], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function initializer() {
            return "";
          }
        }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "action", [property], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function initializer() {
            return "";
          }
        })), _class2)) || _class));
  
        cclegacy._RF.pop();
      }
    };
  });
  
  System.register("chunks:///_virtual/PopupLevelUp.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './SFXManager.ts', './Data.ts', './LevelManager.ts', './GameController.ts'], function (exports) {
    'use strict';
  
    var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _defineProperty, cclegacy, _decorator, SpriteFrame, Label, Sprite, Animation, Component, SFXManager, Data, LevelManager, GameController;
  
    return {
      setters: [function (module) {
        _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
        _inheritsLoose = module.inheritsLoose;
        _initializerDefineProperty = module.initializerDefineProperty;
        _assertThisInitialized = module.assertThisInitialized;
        _defineProperty = module.defineProperty;
      }, function (module) {
        cclegacy = module.cclegacy;
        _decorator = module._decorator;
        SpriteFrame = module.SpriteFrame;
        Label = module.Label;
        Sprite = module.Sprite;
        Animation = module.Animation;
        Component = module.Component;
      }, function (module) {
        SFXManager = module.SFXManager;
      }, function (module) {
        Data = module.Data;
      }, function (module) {
        LevelManager = module.LevelManager;
      }, function (module) {
        GameController = module.GameController;
      }],
      execute: function () {
        var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp;
  
        cclegacy._RF.push({}, "9058cfxX5RIArbndRVivXV8", "PopupLevelUp", undefined);
  
        var ccclass = _decorator.ccclass,
            property = _decorator.property;
        var PopupLevelUp = exports('PopupLevelUp', (_dec = ccclass('PopupLevelUp'), _dec2 = property({
          type: SpriteFrame
        }), _dec3 = property({
          type: SpriteFrame
        }), _dec4 = property({
          type: SpriteFrame
        }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
          _inheritsLoose(PopupLevelUp, _Component);
  
          function PopupLevelUp() {
            var _this;
  
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
  
            _this = _Component.call.apply(_Component, [this].concat(args)) || this;
  
            _initializerDefineProperty(_assertThisInitialized(_this), "iconBombDeflect", _descriptor, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "iconBerryBlast", _descriptor2, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "iconPeachTime", _descriptor3, _assertThisInitialized(_this));
  
            _defineProperty(_assertThisInitialized(_this), "onClosed", function () {});
  
            return _this;
          }
  
          var _proto = PopupLevelUp.prototype;
  
          _proto.start = function start() {};
  
          _proto.refresh = function refresh(level, onClosed) {
            var levelReward = LevelManager.getInstance().getLevelReward(level);
            var reward = levelReward.reward;
            var ammount = levelReward.amount;
            this.node.getChildByPath("Scroll/mask/textPU").getComponent(Label).string = reward;
            var icon = this.iconBombDeflect;
  
            if (reward == "Bomb Deflect") {
              icon = this.iconBombDeflect;
              Data.getInstance().inventoryPUDeflect += ammount;
            } else if (reward == "Berry Blast") {
              icon = this.iconBerryBlast;
              Data.getInstance().inventoryPUBerryBlast += ammount;
            } else if (reward == "Peachy Time") {
              icon = this.iconPeachTime;
              Data.getInstance().inventoryPUPeachyTime += ammount;
            }
  
            GameController.saveData();
            this.node.getChildByPath("Scroll/mask/iconPU").getComponent(Sprite).spriteFrame = icon;
            this.node.getChildByPath("Scroll/mask/textPU_amount").getComponent(Label).string = "x" + ammount;
            this.node.getChildByPath("Scroll/ScrollHeader/Badge/text_LevelAngka").getComponent(Label).string = "" + (level - 1);
            this.node.getChildByPath("Scroll/ScrollHeader/Badge/text_LevelAngkaNew").getComponent(Label).string = "" + level;
            this.onClosed = onClosed;
          };
  
          _proto.btnClaimClicked = function btnClaimClicked() {
            SFXManager.getInstance().play(SFXManager.SFX_UI_POSITIVE);
            var me = this;
            this.node.getComponent(Animation).play("popupLevelUp_out");
            this.node.getComponent(Animation).on(Animation.EventType.FINISHED, function () {
              GameController.getInstance().setHoldInput(false);
              me.node.active = false;
              me.onClosed();
            }, this, true);
          };
  
          return PopupLevelUp;
        }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "iconBombDeflect", [_dec2], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "iconBerryBlast", [_dec3], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "iconPeachTime", [_dec4], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        })), _class2)) || _class));
  
        cclegacy._RF.pop();
      }
    };
  });
  
  System.register("chunks:///_virtual/PolygonSprite.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
    'use strict';
  
    var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Vec2, Sprite, dynamicAtlasManager, Color;
  
    return {
      setters: [function (module) {
        _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
        _inheritsLoose = module.inheritsLoose;
        _initializerDefineProperty = module.initializerDefineProperty;
        _assertThisInitialized = module.assertThisInitialized;
        _createClass = module.createClass;
      }, function (module) {
        cclegacy = module.cclegacy;
        _decorator = module._decorator;
        Vec2 = module.Vec2;
        Sprite = module.Sprite;
        dynamicAtlasManager = module.dynamicAtlasManager;
        Color = module.Color;
      }],
      execute: function () {
        var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _temp;
  
        cclegacy._RF.push({}, "908f9z60kJMEo/fulpkwVQq", "PolygonSprite", undefined);
  
        var ccclass = _decorator.ccclass,
            property = _decorator.property;
        var polygonAssembler = {
          createData: function createData(sprite) {
            var renderData = sprite.requestRenderData();
            return renderData;
          },
          updateRenderData: function updateRenderData(sprite) {
            var frame = sprite.spriteFrame;
            dynamicAtlasManager.packToDynamicAtlas(sprite, frame);
            var renderData = sprite.renderData;
  
            if (renderData && frame) {
              if (renderData.vertDirty) {
                this.updateVertexData(sprite);
              }
  
              if (renderData.uvDirty) {
                this.updateUvs(sprite);
              }
            }
          },
          fillBuffers: function fillBuffers(sprite, renderer) {
            if (sprite === null) {
              return;
            }
  
            var node = sprite.node;
            var buffer = renderer.acquireBufferBatch();
            var vertexOffset = buffer.byteOffset >> 2;
            var indicesOffset = buffer.indicesOffset;
            var vertexId = buffer.vertexOffset;
            var renderData = sprite.renderData;
            var isRecreate = buffer.request(renderData.vertexCount, renderData.indicesCount);
  
            if (!isRecreate) {
              buffer = renderer.currBufferBatch;
              vertexOffset = 0;
              indicesOffset = 0;
              vertexId = 0;
            } // buffer data may be reallocated, need get reference after request.
  
  
            var vBuf = buffer.vData;
            var iBuf = buffer.iData;
            var matrix = node.worldMatrix;
            var a = matrix.m00;
            var b = matrix.m01;
            var c = matrix.m04;
            var d = matrix.m05;
            var tx = matrix.m12;
            var ty = matrix.m13;
  
            for (var i = 0; i < renderData.vertexCount; ++i) {
              var vert = renderData.data[i];
              vBuf[vertexOffset++] = a * vert.x + c * vert.y + tx;
              vBuf[vertexOffset++] = b * vert.x + d * vert.y + ty;
              vBuf[vertexOffset++] = vert.z;
              vBuf[vertexOffset++] = vert.u;
              vBuf[vertexOffset++] = vert.v;
              Color.toArray(vBuf, sprite.color, vertexOffset);
              vertexOffset += 4;
            }
  
            for (var _i = 0; _i < sprite.vertices.length - 2; ++_i) {
              var start = _i;
              iBuf[indicesOffset++] = vertexId;
              iBuf[indicesOffset++] = start + 1 + vertexId;
              iBuf[indicesOffset++] = start + 2 + vertexId; // console.log(i)
            }
          },
          updateVertexData: function updateVertexData(sprite) {
            var renderData = sprite.renderData;
  
            if (!renderData) {
              return;
            }
  
            renderData.vertexCount = renderData.dataLength = sprite.vertices.length;
            renderData.indicesCount = (renderData.vertexCount - 2) * 3;
            renderData.vertDirty = false;
  
            for (var i = 0; i < sprite.vertices.length; ++i) {
              var xy = sprite.vertices[i];
              renderData.data[i].x = xy.x;
              renderData.data[i].y = xy.y;
            }
          },
          updateUvs: function updateUvs(sprite) {
            var renderData = sprite.renderData;
            var uv = sprite.spriteFrame.uv;
            var l = uv[0],
                b = uv[1],
                t = uv[7],
                r = uv[6];
  
            for (var i = 0; i < sprite.uvs.length; ++i) {
              var uvs = sprite.uvs[i];
              renderData.data[i].u = l + (r - l) * uvs.x;
              renderData.data[i].v = b + (t - b) * uvs.y;
            }
  
            renderData.uvDirty = false;
          }
        };
        /**
        author: http://lamyoung.com/
        B站视频: https://space.bilibili.com/1756070/video
        github: https://github.com/baiyuwubing
        gitee 同步地址： https://gitee.com/lamyoung
        qq 交流群: 859642112
        Cocos 论坛 ： https://forum.cocos.org/u/lamyoung/activity/topics
         */
        // 仅限凸多边形
  
        var PolygonSprite = exports('PolygonSprite', (_dec = ccclass('PolygonSprite'), _dec2 = property({
          type: [Vec2]
        }), _dec3 = property({
          type: [Vec2]
        }), _dec4 = property({
          type: [Vec2]
        }), _dec5 = property({
          type: [Vec2]
        }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Sprite) {
          _inheritsLoose(PolygonSprite, _Sprite);
  
          function PolygonSprite() {
            var _this;
  
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
  
            _this = _Sprite.call.apply(_Sprite, [this].concat(args)) || this;
  
            _initializerDefineProperty(_assertThisInitialized(_this), "_vertices", _descriptor, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "_uvs", _descriptor2, _assertThisInitialized(_this));
  
            return _this;
          }
  
          var _proto = PolygonSprite.prototype;
  
          _proto._flushAssembler = function _flushAssembler() {
            var assembler = polygonAssembler;
  
            if (this._assembler !== assembler) {
              this.destroyRenderData();
              this._assembler = assembler;
            }
  
            if (!this._renderData) {
              if (this._assembler && this._assembler.createData) {
                this._renderData = this._assembler.createData(this);
                this._renderData.material = this.getRenderMaterial(0);
                this.markForUpdateRenderData();
  
                this._updateColor();
              }
            }
          };
  
          _createClass(PolygonSprite, [{
            key: "vertices",
            get: function get() {
              return this._vertices;
            },
            set: function set(value) {
              this._vertices = value;
              this.markForUpdateRenderData();
            }
          }, {
            key: "uvs",
            get: function get() {
              return this._uvs;
            },
            set: function set(value) {
              this._uvs = value; //@ts-ignore
  
              this._markForUpdateUvDirty();
  
              this.markForUpdateRenderData();
            }
          }]);
  
          return PolygonSprite;
        }(Sprite), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_vertices", [_dec2], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function initializer() {
            return [new Vec2(-100, -100), new Vec2(100, -100), new Vec2(100, 100), new Vec2(-100, 100)];
          }
        }), _applyDecoratedDescriptor(_class2.prototype, "vertices", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "vertices"), _class2.prototype), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_uvs", [_dec4], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function initializer() {
            return [new Vec2(0, 0), new Vec2(1, 0), new Vec2(1, 1), new Vec2(0, 1)];
          }
        }), _applyDecoratedDescriptor(_class2.prototype, "uvs", [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "uvs"), _class2.prototype)), _class2)) || _class));
  
        cclegacy._RF.pop();
      }
    };
  });
  
  System.register("chunks:///_virtual/UIToWorldNode.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
    'use strict';
  
    var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Camera, Node, Vec3, Component;
  
    return {
      setters: [function (module) {
        _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
        _inheritsLoose = module.inheritsLoose;
        _initializerDefineProperty = module.initializerDefineProperty;
        _assertThisInitialized = module.assertThisInitialized;
      }, function (module) {
        cclegacy = module.cclegacy;
        _decorator = module._decorator;
        Camera = module.Camera;
        Node = module.Node;
        Vec3 = module.Vec3;
        Component = module.Component;
      }],
      execute: function () {
        var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp;
  
        cclegacy._RF.push({}, "91ac1WPrjhGZoTWzyp/q+/N", "UIToWorldNode", undefined);
  
        var ccclass = _decorator.ccclass,
            property = _decorator.property;
        var UIToWorldNode = exports('UIToWorldNode', (_dec = ccclass('UIToWorldNode'), _dec2 = property({
          type: Camera,
          displayName: "Main Camera"
        }), _dec3 = property({
          type: Node,
          displayName: "Target"
        }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
          _inheritsLoose(UIToWorldNode, _Component);
  
          function UIToWorldNode() {
            var _this;
  
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
  
            _this = _Component.call.apply(_Component, [this].concat(args)) || this;
  
            _initializerDefineProperty(_assertThisInitialized(_this), "mainCamera", _descriptor, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "target", _descriptor2, _assertThisInitialized(_this));
  
            return _this;
          }
  
          var _proto = UIToWorldNode.prototype;
  
          _proto.start = function start() {};
  
          _proto.update = function update(deltaTime) {
            var oldPos = this.node.position;
            var newPos = this.mainCamera.convertToUINode(this.target.worldPosition, this.node.getParent());
  
            if (Vec3.distance(oldPos, newPos) != 0) {
              console.log(oldPos.toString() + " -> " + newPos.toString());
              this.node.setPosition(newPos);
            }
          };
  
          return UIToWorldNode;
        }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "mainCamera", [_dec2], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "target", [_dec3], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        })), _class2)) || _class));
  
        cclegacy._RF.pop();
      }
    };
  });
  
  System.register("chunks:///_virtual/ResourcesManager.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
    'use strict';
  
    var _defineProperty, cclegacy, _decorator, resources;
  
    return {
      setters: [function (module) {
        _defineProperty = module.defineProperty;
      }, function (module) {
        cclegacy = module.cclegacy;
        _decorator = module._decorator;
        resources = module.resources;
      }],
      execute: function () {
        var _dec, _class, _class2, _temp;
  
        cclegacy._RF.push({}, "9256a5K6DBAr7ODOe7zi1SD", "ResourcesManager", undefined);
  
        var ccclass = _decorator.ccclass,
            property = _decorator.property;
        var ResourcesManager = exports('ResourcesManager', (_dec = ccclass('ResourcesManager'), _dec(_class = (_temp = _class2 = /*#__PURE__*/function () {
          ResourcesManager.getInstance = function getInstance() {
            if (ResourcesManager.Instance == null) ResourcesManager.Instance = new ResourcesManager();
            return ResourcesManager.Instance;
          };
  
          function ResourcesManager() {
            _defineProperty(this, "listResources", {});
          }
  
          var _proto = ResourcesManager.prototype;
  
          _proto.update = function update(deltaTime) {};
  
          _proto.getResource = function getResource(path, type) {
            return resources.get(path, type);
          };
  
          _proto.loadResources = function loadResources(path, type, onComplete) {
            var _this = this;
  
            if (this.listResources[path] != undefined && this.listResources[path] != null) {
              onComplete(resources.get(path, type));
            } else {
              resources.load(path, type, function (err, loadedObject) {
                _this.listResources[path] = loadedObject;
                onComplete(_this.listResources[path]);
              });
            }
          };
  
          return ResourcesManager;
        }(), _defineProperty(_class2, "Instance", null), _temp)) || _class));
  
        cclegacy._RF.pop();
      }
    };
  });
  
  System.register("chunks:///_virtual/FocusHandler.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './BGMManager.ts', './Instances.ts', './SFXManager.ts', './GameController.ts', './FruitManager.ts', './RotateHandler.ts'], function (exports) {
    'use strict';
  
    var _createForOfIteratorHelperLoose, _createClass, _defineProperty, cclegacy, BGMManager, Instances, SFXManager, GameController, FruitManager, RotateHandler;
  
    return {
      setters: [function (module) {
        _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
        _createClass = module.createClass;
        _defineProperty = module.defineProperty;
      }, function (module) {
        cclegacy = module.cclegacy;
      }, function (module) {
        BGMManager = module.BGMManager;
      }, function (module) {
        Instances = module.default;
      }, function (module) {
        SFXManager = module.SFXManager;
      }, function (module) {
        GameController = module.GameController;
      }, function (module) {
        FruitManager = module.FruitManager;
      }, function (module) {
        RotateHandler = module.RotateHandler;
      }],
      execute: function () {
        cclegacy._RF.push({}, "9611bWz0BBLk5niE1TphH6J", "FocusHandler", undefined);
  
        var FocusHandler = exports('default', /*#__PURE__*/function () {
          function FocusHandler() {
            var _this = this;
  
            _defineProperty(this, "onBlur", void 0);
  
            _defineProperty(this, "onFocus", void 0);
  
            _defineProperty(this, "isFocusApi", true);
  
            this.onBlur = [];
            this.onFocus = [];
  
            var onFocus = function onFocus() {
              // console.log("[WINDOW] focus");
              if (Instances.rotateScreen == null || !Instances.rotateScreen.correctOrientation) return;
              // if (!_this.isFocusApi) return;
              _this.isFocusApi = true;
              _azHasFocus = _this.isFocusApi;
              _this.resumeGame();
  
              _this.invoke(_this.onFocus);
            };
  
            var onBlur = function onBlur() {
              // console.log("[WINDOW] blur");
              if (Instances.rotateScreen == null) return;
              _this.isFocusApi = false;
              _azHasFocus = _this.isFocusApi;
              _this.invoke(_this.onBlur);
  
              _this.pauseGame(); // AudioManager.instances.pause();
              // cc.game.pause();
  
            }; // cc.game.on(cc.game.EVENT_HIDE, onBlur, this);
            // cc.game.on(cc.game.EVENT_SHOW, onFocus, this);
  
  
            window.onfocus = onFocus;
            window.onblur = onBlur;
  
            window.addEventListener('blur', onBlur);
            window.addEventListener('focus', onFocus);
            document.addEventListener('visibilitychange', () => {
              if (document.visibilityState === 'hidden') {
                onBlur();
              }
  
              if (document.visibilityState === 'visible') {
                onFocus();
              }
            })
  
            Instances.rotateScreen.eventTarget.on(RotateHandler.KEY_SIGNAL_CORRECT, onFocus, this);
            Instances.rotateScreen.eventTarget.on(RotateHandler.KEY_SIGNAL_INCORRECT, onBlur, this);
          }
  
          var _proto = FocusHandler.prototype;
  
          _proto.pauseGame = function pauseGame() {
            try {
              SFXManager.getInstance().setVolume(0);
              BGMManager.getInstance().setVolume(0);
              GameController.getInstance().setHoldInput(true);
  
              if (GameController.getInstance().getGameState() == GameController.STATE_GAME_PLAYING) {
                GameController.getInstance().setGameState(GameController.STATE_GAME_PAUSE);
              }
            } catch (e) {
              console.log('Could not pause the game', e);
            }
          };
  
          _proto.resumeGame = function resumeGame() {
            if (!this.isFocusApi) return;
            try {
              SFXManager.getInstance().setVolume(SFXManager.isMuted ? 0 : 1);
              BGMManager.getInstance().setVolume(BGMManager.isMuted ? 0 : 1);
  
              if (GameController.getInstance().getGameState() == GameController.STATE_GAME_PAUSE) {
                if (GameController.getInstance().getHealth() <= 0) {
                  GameController.getInstance().setGameState(GameController.STATE_GAME_LOSE);
                } else {
                  GameController.getInstance().setGameState(GameController.STATE_GAME_PLAYING);
                }
              } //   if(GameController.getInstance().getHealth() <= 0){
              //     GameController.getInstance().setGameState(GameController.STATE_GAME_LOSE);
              //   }else{
              //     GameController.getInstance().setGameState(GameController.STATE_GAME_PLAYING);
              // }
  
  
              FruitManager.getInstance().tryResumeAllPhysic(); // FruitManager.getInstance().tryResumeAllPhysic();
  
              GameController.getInstance().setHoldInput(false);
            } catch (e) {
              console.log('Could not resume the game', e);
            }
          };
  
          _proto.focusApi = function focusApi() {
            this.isFocusApi = true;
            window.onfocus();
          };
  
          _proto.blurApi = function blurApi() {
            this.isFocusApi = false;
            window.onblur();
          };
  
          FocusHandler.initialize = function initialize() {
            // Called for side effect
            this.instance;
          };
  
          FocusHandler.subscribeOnBlur = function subscribeOnBlur(fn) {
            this.instance.subscribe(this.instance.onBlur, fn);
          };
  
          FocusHandler.unsubscribeOnBlur = function unsubscribeOnBlur(fn) {
            this.instance.unsubscribe(this.instance.onBlur, fn);
          };
  
          FocusHandler.subscribeOnFocus = function subscribeOnFocus(fn) {
            this.instance.subscribe(this.instance.onFocus, fn);
          };
  
          FocusHandler.unsubscribeOnFocus = function unsubscribeOnFocus(fn) {
            this.instance.unsubscribe(this.instance.onFocus, fn);
          };
  
          _proto.subscribe = function subscribe(fnArray, fn) {
            if (!fn || fnArray.indexOf(fn) !== -1) return;
            fnArray.push(fn);
          };
  
          _proto.unsubscribe = function unsubscribe(fnArray, fn) {
            var index = fnArray.indexOf(fn);
            if (index === -1) return;
            fnArray.splice(index, 1);
          };
  
          _proto.invoke = function invoke(fnArray) {
            for (var _iterator = _createForOfIteratorHelperLoose(fnArray), _step; !(_step = _iterator()).done;) {
              var fn = _step.value;
              fn();
            }
          };
  
          _createClass(FocusHandler, null, [{
            key: "instance",
            get: function get() {
              if (!this._instance) {
                this._instance = new FocusHandler();
              }
  
              return this._instance;
            }
          }]);
  
          return FocusHandler;
        }());
  
        _defineProperty(FocusHandler, "_instance", void 0);
  
        cclegacy._RF.pop();
      }
    };
  });
  
  System.register("chunks:///_virtual/CustomLabelShadow.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
    'use strict';
  
    var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Color, Vec2, Label, Component;
  
    return {
      setters: [function (module) {
        _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
        _inheritsLoose = module.inheritsLoose;
        _initializerDefineProperty = module.initializerDefineProperty;
        _assertThisInitialized = module.assertThisInitialized;
      }, function (module) {
        cclegacy = module.cclegacy;
        _decorator = module._decorator;
        Color = module.Color;
        Vec2 = module.Vec2;
        Label = module.Label;
        Component = module.Component;
      }],
      execute: function () {
        var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp;
  
        cclegacy._RF.push({}, "96c41znOatAZbf6QFu0yEI3", "CustomLabelShadow", undefined);
  
        var ccclass = _decorator.ccclass,
            property = _decorator.property;
        /**
         * Predefined variables
         * Name = CustomLabelShadow
         * DateTime = Fri Mar 11 2022 09:20:11 GMT+0700 (Western Indonesia Time)
         * Author = jefvin
         * FileBasename = CustomLabelShadow.ts
         * FileBasenameNoExtension = CustomLabelShadow
         * URL = db://assets/custom/CustomLabelShadow.ts
         * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
         *
         */
  
        var CustomLabelShadow = exports('CustomLabelShadow', (_dec = ccclass('CustomLabelShadow'), _dec2 = property({
          type: Color
        }), _dec3 = property({
          type: Vec2
        }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
          _inheritsLoose(CustomLabelShadow, _Component);
  
          function CustomLabelShadow() {
            var _this;
  
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
  
            _this = _Component.call.apply(_Component, [this].concat(args)) || this;
  
            _initializerDefineProperty(_assertThisInitialized(_this), "color", _descriptor, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "offset", _descriptor2, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "blur", _descriptor3, _assertThisInitialized(_this));
  
            return _this;
          }
  
          var _proto = CustomLabelShadow.prototype; // [1]
          // dummy = '';
          // [2]
          // @property
          // serializableDummy = 0;
  
          _proto.start = function start() {} // update (deltaTime: number) {
          //     // [4]
          // }
          ;
  
          _proto._updateRenderData = function _updateRenderData() {
            var label = this.node.getComponent(Label);
  
            if (label) {
              label.updateRenderData(true);
            }
          };
  
          return CustomLabelShadow;
        }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "color", [_dec2], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function initializer() {
            return new Color(0, 0, 0, 255);
          }
        }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "offset", [_dec3], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function initializer() {
            return new Vec2(2, 2);
          }
        }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "blur", [property], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function initializer() {
            return 2;
          }
        })), _class2)) || _class));
        /**
         * [1] Class member could be defined like this.
         * [2] Use `property` decorator if your want the member to be serializable.
         * [3] Your initialization goes here.
         * [4] Your update function goes here.
         *
         * Learn more about scripting: https://docs.cocos.com/creator/3.4/manual/en/scripting/
         * Learn more about CCClass: https://docs.cocos.com/creator/3.4/manual/en/scripting/ccclass.html
         * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.4/manual/en/scripting/life-cycle-callbacks.html
         */
  
        cclegacy._RF.pop();
      }
    };
  });
  
  System.register("chunks:///_virtual/SceneTutorialDeflect.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './GameController.ts', './FruitManager.ts'], function (exports) {
    'use strict';
  
    var _defineProperty, _inheritsLoose, cclegacy, _decorator, Animation, Component, GameController, FruitManager;
  
    return {
      setters: [function (module) {
        _defineProperty = module.defineProperty;
        _inheritsLoose = module.inheritsLoose;
      }, function (module) {
        cclegacy = module.cclegacy;
        _decorator = module._decorator;
        Animation = module.Animation;
        Component = module.Component;
      }, function (module) {
        GameController = module.GameController;
      }, function (module) {
        FruitManager = module.FruitManager;
      }],
      execute: function () {
        var _dec, _class, _class2, _temp;
  
        cclegacy._RF.push({}, "99544WoHgdBwri9fjCkjOnB", "SceneTutorialDeflect", undefined);
  
        var ccclass = _decorator.ccclass,
            property = _decorator.property;
        var SceneTutorialDeflect = exports('SceneTutorialDeflect', (_dec = ccclass('SceneTutorialDeflect'), _dec(_class = (_temp = _class2 = /*#__PURE__*/function (_Component) {
          _inheritsLoose(SceneTutorialDeflect, _Component);
  
          function SceneTutorialDeflect() {
            return _Component.apply(this, arguments) || this;
          }
  
          var _proto = SceneTutorialDeflect.prototype;
  
          _proto.start = function start() {};
  
          _proto.btnClaimRewardClicked = function btnClaimRewardClicked() {
            var anim = this.node.getComponent(Animation);
            anim.play("tutDeflect_out");
            anim.on(Animation.EventType.FINISHED, function () {
              GameController.TUTORIAL_STATE = 0;
              GameController.getInstance().setHoldInput(false);
              FruitManager.getInstance().tryResumeAllPhysic();
              SceneTutorialDeflect.onClaimRewardCallback();
            }, this, true);
          };
  
          return SceneTutorialDeflect;
        }(Component), _defineProperty(_class2, "onClaimRewardCallback", function () {}), _temp)) || _class));
  
        cclegacy._RF.pop();
      }
    };
  });
  
  System.register("chunks:///_virtual/SceneResultScore.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './SFXManager.ts', './Data.ts', './LevelManager.ts', './GameController.ts', './AdsManager.ts'], function (exports) {
    'use strict';
  
    var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _defineProperty, cclegacy, _decorator, Label, Node, UITransform, Vec3, tween, Component, SFXManager, Data, LevelManager, GameController, AdsManager;
  
    return {
      setters: [function (module) {
        _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
        _inheritsLoose = module.inheritsLoose;
        _initializerDefineProperty = module.initializerDefineProperty;
        _assertThisInitialized = module.assertThisInitialized;
        _defineProperty = module.defineProperty;
      }, function (module) {
        cclegacy = module.cclegacy;
        _decorator = module._decorator;
        Label = module.Label;
        Node = module.Node;
        UITransform = module.UITransform;
        Vec3 = module.Vec3;
        tween = module.tween;
        Component = module.Component;
      }, function (module) {
        SFXManager = module.SFXManager;
      }, function (module) {
        Data = module.Data;
      }, function (module) {
        LevelManager = module.LevelManager;
      }, function (module) {
        GameController = module.GameController;
      }, function (module) {
        AdsManager = module.AdsManager;
      }],
      execute: function () {
        var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _temp;
  
        cclegacy._RF.push({}, "9b344aavNRAiKjHCicQFzy2", "SceneResultScore", undefined);
  
        var ccclass = _decorator.ccclass,
            property = _decorator.property;
        var SceneResultScore = exports('SceneResultScore', (_dec = ccclass('SceneResultScore'), _dec2 = property({
          type: Label
        }), _dec3 = property({
          type: Node
        }), _dec4 = property({
          type: Node
        }), _dec5 = property({
          type: Node
        }), _dec6 = property({
          type: Label
        }), _dec7 = property({
          type: Label
        }), _dec8 = property({
          type: Label
        }), _dec9 = property({
          type: Node
        }), _dec10 = property({
          type: Label
        }), _dec11 = property({
          type: Label
        }), _dec12 = property({
          type: Node
        }), _dec13 = property({
          type: Label
        }), _dec14 = property({
          type: Label
        }), _dec15 = property({
          type: Node
        }), _dec16 = property({
          type: Node
        }), _dec17 = property({
          type: Label
        }), _dec18 = property({
          type: Label
        }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
          _inheritsLoose(SceneResultScore, _Component);
  
          function SceneResultScore() {
            var _this;
  
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
  
            _this = _Component.call.apply(_Component, [this].concat(args)) || this;
  
            _initializerDefineProperty(_assertThisInitialized(_this), "labelTextLevel", _descriptor, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "xpBarFillTransparant", _descriptor2, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "xpBarFill", _descriptor3, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "xpBarBack", _descriptor4, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "labelStarfruit", _descriptor5, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "labelScore", _descriptor6, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "labelBestScore", _descriptor7, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "xpLayout", _descriptor8, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "labelXpReceived", _descriptor9, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "labelStarfruitReceived", _descriptor10, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "contButtonBonus", _descriptor11, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "labelXpBonusAds", _descriptor12, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "labelStarfruitBonusAds", _descriptor13, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "contClaimed", _descriptor14, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "nodeStarfruitIconClaimed", _descriptor15, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "labelXpBonusAdsClaimed", _descriptor16, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "labelStarfruitBonusAdsClaimed", _descriptor17, _assertThisInitialized(_this));
  
            _defineProperty(_assertThisInitialized(_this), "totalExpReceived", 0);
  
            _defineProperty(_assertThisInitialized(_this), "starFruitReward", 0);
  
            _defineProperty(_assertThisInitialized(_this), "holdInput", false);
  
            return _this;
          }
  
          var _proto = SceneResultScore.prototype;
  
          _proto.onEnable = function onEnable() {
            this.reset();
            this.labelStarfruit.string = GameController.getInstance().formatNumber(parseInt(Data.getInstance().starFruit.toFixed(0)));
            this.labelScore.string = "" + GameController.Instance.score;
            this.labelBestScore.string = "Best: " + GameController.getInstance().getBestScore();
            var curDataLevel = LevelManager.getInstance().getDataLevelFromTotalExp();
  
            if (curDataLevel.level < LevelManager.getInstance().levelCap) {
              var rule = null;
              if (GameController.gameMode == GameController.MODE_ARCADE) rule = LevelManager.ARCADE_EXP_CALC_RULE;else if (GameController.gameMode == GameController.MODE_CLASSIC) rule = LevelManager.CLASSIC_EXP_CALC_RULE;else if (GameController.gameMode == GameController.MODE_ZEN) rule = LevelManager.ZEN_EXP_CALC_RULE;
              this.totalExpReceived = LevelManager.getInstance().calculateExp(GameController.getInstance().score, rule);
            }
  
            this.labelXpReceived.string = "+ " + this.totalExpReceived;
            this.labelXpBonusAds.string = "+ " + this.totalExpReceived;
            this.labelXpBonusAdsClaimed.string = "+ " + this.totalExpReceived;
            this.starFruitReward = Data.getInstance().convertScoreToStarFruit(GameController.getInstance().score);
            this.labelStarfruitReceived.string = "+ " + this.starFruitReward;
            this.labelStarfruitBonusAds.string = "+ " + this.starFruitReward;
            this.labelStarfruitBonusAdsClaimed.string = "+ " + this.starFruitReward;
            var width = this.xpBarBack.getComponent(UITransform).width;
            this.labelTextLevel.string = "" + curDataLevel.level;
            this.xpBarFill.getComponent(UITransform).width = width * curDataLevel.curExp / curDataLevel.totalExpToLevelUp;
            this.xpBarFillTransparant.getComponent(UITransform).width = width * curDataLevel.curExp / curDataLevel.totalExpToLevelUp;
          };
  
          _proto.start = function start() {};
  
          _proto.doPlayStartAnimation = function doPlayStartAnimation() {
            var _this2 = this;
  
            var curDataLevel = LevelManager.getInstance().getDataLevelFromTotalExp();
            if (this.totalExpReceived > 0) GameController.getInstance().playExpIncrease(this.node.getChildByPath("cont_results/StarFruitEXPLayout/EXPLayout"), this.labelTextLevel.node, this.xpBarBack, this.xpBarFill, this.xpBarFillTransparant, curDataLevel, this.totalExpReceived, this.labelTextLevel.node);
            var trailStarFruit = GameController.Instance.particleTrailStarfruit;
  
            if (this.starFruitReward > 0) {
              var vecTemp = new Vec3(Data.getInstance().starFruit, 0, 0);
              Data.getInstance().starFruit += this.starFruitReward;
              GameController.getInstance().playStarfruitIncrement(this.starFruitReward);
              tween(vecTemp).delay(0.5).to(0.5, {
                x: Data.getInstance().starFruit
              }, {
                onUpdate: function onUpdate() {
                  _this2.labelStarfruit.string = GameController.getInstance().formatNumber(parseInt(vecTemp.x.toFixed(0)));
                }
              }).start();
              trailStarFruit.setWorldPosition(Data.getInstance().convert2DPosTo3D(this.node.getChildByPath("cont_results/StarFruitEXPLayout/starfruitLayout").worldPosition));
              var targetPos = this.node.getChildByPath("UI_atasResultSolo/StarfruitLabel/starfruitLabelIcon/CurrencyStarfruitIcon").worldPosition;
              tween(trailStarFruit).to(0.5, {
                worldPosition: Data.getInstance().convert2DPosTo3D(targetPos)
              }).start();
              GameController.saveData();
            }
          };
  
          _proto.reset = function reset() {
            this.holdInput = false;
            this.contButtonBonus.active = false;
            this.contClaimed.active = false;
            this.totalExpReceived = 0;
          };
  
          _proto.clickButton = function clickButton(event, customdata) {
            var _this3 = this;
  
            if (this.holdInput) return;
            this.holdInput = true;
  
            var onFinish = function onFinish() {
              _this3.holdInput = false;
            };
  
            SFXManager.getInstance().play(SFXManager.SFX_SELECT);
  
            if (customdata == "continue") {
              GameController.getInstance().moveToHomescreen();
            } else if (customdata == "double_reward") {
              var starFruitReward = Data.getInstance().convertScoreToStarFruit(GameController.getInstance().score);
              AdsManager.showRewardedAds(function () {
                var curDataLevel = LevelManager.getInstance().getDataLevelFromTotalExp();
  
                if (curDataLevel.level < LevelManager.getInstance().levelCap && _this3.totalExpReceived > 0) {
                  var rule = null;
                  if (GameController.gameMode == GameController.MODE_ARCADE) rule = LevelManager.ARCADE_EXP_CALC_RULE;else if (GameController.gameMode == GameController.MODE_CLASSIC) rule = LevelManager.CLASSIC_EXP_CALC_RULE;else if (GameController.gameMode == GameController.MODE_ZEN) rule = LevelManager.ZEN_EXP_CALC_RULE;
                  GameController.getInstance().playExpIncrease(_this3.xpLayout, _this3.labelTextLevel.node, _this3.xpBarBack, _this3.xpBarFill, _this3.xpBarFillTransparant, curDataLevel, _this3.totalExpReceived, _this3.labelTextLevel.node);
                }
  
                _this3.contButtonBonus.active = false;
                _this3.contClaimed.active = true;
                _this3.labelStarfruitReceived.string = "+ " + starFruitReward;
                var trailStarFruit = GameController.Instance.particleTrailStarfruit;
  
                if (_this3.starFruitReward > 0) {
                  var vecTemp = new Vec3(Data.getInstance().starFruit, 0, 0);
                  Data.getInstance().starFruit += _this3.starFruitReward;
                  GameController.getInstance().playStarfruitIncrement(_this3.starFruitReward);
                  tween(vecTemp).delay(0.5).to(0.5, {
                    x: Data.getInstance().starFruit
                  }, {
                    onUpdate: function onUpdate() {
                      _this3.labelStarfruit.string = GameController.getInstance().formatNumber(parseInt(vecTemp.x.toFixed(0)));
                    }
                  }).start();
                  trailStarFruit.setWorldPosition(Data.getInstance().convert2DPosTo3D(_this3.node.getChildByPath("cont_results/RewardClaimed/StarFruitEXPLayout/starfruitClaimLayout").worldPosition));
  
                  var targetPos = _this3.node.getChildByPath("UI_atasResultSolo/StarfruitLabel/starfruitLabelIcon/CurrencyStarfruitIcon").worldPosition;
  
                  tween(trailStarFruit).to(0.5, {
                    worldPosition: Data.getInstance().convert2DPosTo3D(targetPos)
                  }).start();
                  GameController.saveData();
                }
  
                onFinish();
              }, function () {
                onFinish();
              });
            }
          };
  
          return SceneResultScore;
        }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "labelTextLevel", [_dec2], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "xpBarFillTransparant", [_dec3], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "xpBarFill", [_dec4], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "xpBarBack", [_dec5], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "labelStarfruit", [_dec6], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "labelScore", [_dec7], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "labelBestScore", [_dec8], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "xpLayout", [_dec9], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "labelXpReceived", [_dec10], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "labelStarfruitReceived", [_dec11], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "contButtonBonus", [_dec12], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "labelXpBonusAds", [_dec13], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "labelStarfruitBonusAds", [_dec14], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "contClaimed", [_dec15], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "nodeStarfruitIconClaimed", [_dec16], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "labelXpBonusAdsClaimed", [_dec17], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "labelStarfruitBonusAdsClaimed", [_dec18], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        })), _class2)) || _class));
  
        cclegacy._RF.pop();
      }
    };
  });
  
  System.register("chunks:///_virtual/SceneContinue.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './ScenePause.ts', './GameController.ts', './FruitManager.ts', './AdsManager.ts'], function (exports) {
    'use strict';
  
    var _inheritsLoose, _defineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Animation, Component, ScenePause, GameController, FruitManager, AdsManager;
  
    return {
      setters: [function (module) {
        _inheritsLoose = module.inheritsLoose;
        _defineProperty = module.defineProperty;
        _assertThisInitialized = module.assertThisInitialized;
      }, function (module) {
        cclegacy = module.cclegacy;
        _decorator = module._decorator;
        Label = module.Label;
        Animation = module.Animation;
        Component = module.Component;
      }, function (module) {
        ScenePause = module.ScenePause;
      }, function (module) {
        GameController = module.GameController;
      }, function (module) {
        FruitManager = module.FruitManager;
      }, function (module) {
        AdsManager = module.AdsManager;
      }],
      execute: function () {
        var _dec, _class, _temp;
  
        cclegacy._RF.push({}, "a6bb9rk+1hGDYgVThmTj0Ci", "SceneContinue", undefined);
  
        var ccclass = _decorator.ccclass,
            property = _decorator.property;
        var SceneContinue = exports('SceneContinue', (_dec = ccclass('SceneContinue'), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
          _inheritsLoose(SceneContinue, _Component);
  
          function SceneContinue() {
            var _this;
  
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
  
            _this = _Component.call.apply(_Component, [this].concat(args)) || this;
  
            _defineProperty(_assertThisInitialized(_this), "holdInput", false);
  
            return _this;
          }
  
          var _proto = SceneContinue.prototype;
  
          _proto.onEnable = function onEnable() {
            this.holdInput = false;
            this.node.getChildByPath("CrossContinue").active = GameController.gameMode == GameController.MODE_CLASSIC;
            this.node.getChildByPath("text_time").active = GameController.gameMode == GameController.MODE_ZEN;
            var text = "";
            if (GameController.gameMode == GameController.MODE_CLASSIC) text = "+1 Extra Lives!";else if (GameController.gameMode == GameController.MODE_ZEN) text = "+10 Seconds!";
            this.node.getChildByPath("text_extraLives").getComponent(Label).string = text;
          };
  
          _proto.start = function start() {};
  
          _proto.btnContinueClicked = function btnContinueClicked() {
            if (this.holdInput) return;
            this.holdInput = true;
            var me = this;
            AdsManager.showRewardedAds(function () {
              GameController.getInstance().useContinue = true;
              var animBgContinue = GameController.Instance.gameplayScreen.getChildByPath("bg_container_continue").getComponent(Animation);
              animBgContinue.play("bg_container_continue_hide");
              animBgContinue.on(Animation.EventType.FINISHED, function () {
                GameController.Instance.gameplayScreen.getChildByPath("bg_container_continue").active = false;
              }, this, true);
              var anim = me.getComponent(Animation);
              anim.play("continue_out");
              anim.on(Animation.EventType.FINISHED, function () {
                me.node.active = false;
                me.holdInput = false;
                ScenePause.getInstance().showButtonPause();
  
                if (GameController.gameMode == GameController.MODE_CLASSIC) {
                  GameController.getInstance().scheduleOnce(function () {
                    if (GameController.getInstance().getHealth() < 3) {
                      GameController.getInstance().updateHealth(GameController.getInstance().getHealth() + 1, true);
                    }
                  }, 0.1);
                } else if (GameController.gameMode == GameController.MODE_ZEN) {
                  GameController.getInstance().updateZenTimer(10);
                }
  
                FruitManager.getInstance().bombCounter = 0;
                FruitManager.getInstance().resetWave();
                GameController.getInstance().setGameState(GameController.STATE_GAME_PLAYING);
                GameController.getInstance().dieFromBomb = false;
                GameController.getInstance().setHoldInput(false);
                GameController.getInstance().gameData.g.push({
                  a: 'rv',
                  t: GameController.getInstance().timerGameplay.toFixed(4)
                });
              }, this, true);
            }, function () {
              var animBgContinue = GameController.Instance.gameplayScreen.getChildByPath("bg_container_continue").getComponent(Animation);
              animBgContinue.play("bg_container_continue_hide");
              animBgContinue.on(Animation.EventType.FINISHED, function () {
                GameController.Instance.gameplayScreen.getChildByPath("bg_container_continue").active = false;
              }, this, true);
              var anim = me.getComponent(Animation);
              anim.play("continue_out");
              anim.on(Animation.EventType.FINISHED, function () {
                me.node.active = false;
                me.holdInput = false;
                GameController.getInstance().showGameOver(function () {
                  AdsManager.showInterstitialAds(function () {
                    if (GameController.getInstance().getScreenState() != GameController.SCREEN_STATE_RESULT_REWARD) GameController.getInstance().setScreenState(GameController.SCREEN_STATE_RESULT_REWARD);
                  });
                });
              }, this, true);
            });
          };
  
          _proto.btnSkipClicked = function btnSkipClicked() {
            if (this.holdInput) return;
            this.holdInput = true;
            var me = this;
            var animBgContinue = GameController.Instance.gameplayScreen.getChildByPath("bg_container_continue").getComponent(Animation);
            animBgContinue.play("bg_container_continue_hide");
            animBgContinue.on(Animation.EventType.FINISHED, function () {
              GameController.Instance.gameplayScreen.getChildByPath("bg_container_continue").active = false;
            }, this, true);
            var anim = this.getComponent(Animation);
            anim.play("continue_out");
            anim.on(Animation.EventType.FINISHED, function () {
              me.node.active = false;
              me.holdInput = false;
              GameController.getInstance().showGameOver(function () {
                AdsManager.showInterstitialAds(function () {
                  if (GameController.getInstance().getScreenState() != GameController.SCREEN_STATE_RESULT_REWARD) GameController.getInstance().setScreenState(GameController.SCREEN_STATE_RESULT_REWARD);
                });
              });
            }, this, true);
          };
  
          return SceneContinue;
        }(Component), _temp)) || _class));
  
        cclegacy._RF.pop();
      }
    };
  });
  
  System.register("chunks:///_virtual/ArcadeBonusBoardController.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './ResourcesManager.ts', './GameController.ts'], function (exports) {
    'use strict';
  
    var _defineProperty, _inheritsLoose, _assertThisInitialized, cclegacy, _decorator, Vec2, SpriteFrame, randomRangeInt, Component, ResourcesManager, GameController;
  
    return {
      setters: [function (module) {
        _defineProperty = module.defineProperty;
        _inheritsLoose = module.inheritsLoose;
        _assertThisInitialized = module.assertThisInitialized;
      }, function (module) {
        cclegacy = module.cclegacy;
        _decorator = module._decorator;
        Vec2 = module.Vec2;
        SpriteFrame = module.SpriteFrame;
        randomRangeInt = module.randomRangeInt;
        Component = module.Component;
      }, function (module) {
        ResourcesManager = module.ResourcesManager;
      }, function (module) {
        GameController = module.GameController;
      }],
      execute: function () {
        var _dec, _class, _class2, _temp;
  
        cclegacy._RF.push({}, "a8fa7BOQaVHLLkO6EYCTcWA", "ArcadeBonusBoardController", undefined);
  
        var ccclass = _decorator.ccclass,
            property = _decorator.property;
        var ArcadeBonusBoardController = exports('ArcadeBonusBoardController', (_dec = ccclass('ArcadeBonusBoardController'), _dec(_class = (_temp = _class2 = /*#__PURE__*/function (_Component) {
          _inheritsLoose(ArcadeBonusBoardController, _Component);
  
          function ArcadeBonusBoardController() {
            var _this;
  
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
  
            _this = _Component.call.apply(_Component, [this].concat(args)) || this;
  
            _defineProperty(_assertThisInitialized(_this), "comboCounter", 0);
  
            _defineProperty(_assertThisInitialized(_this), "anyFruitDropped", false);
  
            _defineProperty(_assertThisInitialized(_this), "bombHitCounter", 0);
  
            _defineProperty(_assertThisInitialized(_this), "bananaFrenzyHitCounter", 0);
  
            _defineProperty(_assertThisInitialized(_this), "bananaFreezeHitCounter", 0);
  
            _defineProperty(_assertThisInitialized(_this), "bananaDoubleHitCounter", 0);
  
            _defineProperty(_assertThisInitialized(_this), "firstSlashFruit", "");
  
            _defineProperty(_assertThisInitialized(_this), "lastSlashFruit", "");
  
            _defineProperty(_assertThisInitialized(_this), "onlySliceBerry", true);
  
            _defineProperty(_assertThisInitialized(_this), "dataBonus", [[{
              type: "DEFAULT",
              point: 5,
              text: "Fruit salad",
              path: "bonus_icon_no_fruit_dropped"
            }, {
              type: "DEFAULT",
              point: 5,
              text: "Juicy slicing",
              path: "bonus_icon_no_fruit_dropped"
            }, {
              type: "DEFAULT",
              point: 5,
              text: "Tasty fruit",
              path: "bonus_icon_no_fruit_dropped"
            }, {
              type: "DEFAULT",
              point: 5,
              text: "Delicious fruit",
              path: "bonus_icon_no_fruit_dropped"
            }, {
              type: "DEFAULT",
              point: 5,
              text: "Fruit mix",
              path: "bonus_icon_no_fruit_dropped"
            }], [{
              type: "BONUS_COMBO",
              combo: 15,
              point: 10,
              text: "Combo rookie",
              path: "bonus_icon_total_combo"
            }, {
              type: "BONUS_COMBO",
              combo: 30,
              point: 15,
              text: "Combo apprentice!",
              path: "bonus_icon_total_combo"
            }, {
              type: "BONUS_COMBO",
              combo: 40,
              point: 25,
              text: "Combo assassin!!",
              path: "bonus_icon_total_combo"
            }, {
              type: "BONUS_COMBO",
              combo: 55,
              point: 35,
              text: "Combo master!!!",
              path: "bonus_icon_total_combo"
            }, {
              type: "BONUS_COMBO",
              combo: 70,
              point: 50,
              text: "Combo god!!!!",
              path: "bonus_icon_total_combo"
            }], [{
              type: "BEST_BONUS_COMBO",
              combo: 3,
              point: 5,
              text: "{0} fruit combo",
              path: "bonus_icon_max_combo"
            }, {
              type: "BEST_BONUS_COMBO",
              combo: 5,
              point: 10,
              text: "{0} fruit combo",
              path: "bonus_icon_max_combo"
            }, {
              type: "BEST_BONUS_COMBO",
              combo: 6,
              point: 20,
              text: "Great {0} fruit combo",
              path: "bonus_icon_max_combo"
            }, {
              type: "BEST_BONUS_COMBO",
              combo: 7,
              point: 30,
              text: "Mega {0} fruit combo",
              path: "bonus_icon_max_combo"
            }, {
              type: "BEST_BONUS_COMBO",
              combo: 8,
              point: 40,
              text: "Glorious {0} fruit combo",
              path: "bonus_icon_max_combo"
            }, {
              type: "BEST_BONUS_COMBO",
              combo: 9,
              point: 50,
              text: "Impossible {0} fruit combo",
              path: "bonus_icon_max_combo"
            }, {
              type: "BEST_BONUS_COMBO",
              combo: 10,
              point: 55,
              text: "{0} fruit combo?!?!",
              path: "bonus_icon_max_combo"
            }], [{
              type: "NO_FRUIT_DROPPED",
              count: 0,
              point: 50,
              text: "No fruit dropped!",
              path: "bonus_icon_no_fruit_dropped"
            }], [{
              type: "BOMB_HIT",
              count: new Vec2(-1, 0),
              point: 10,
              text: "No bombs hit!",
              path: "bonus_icon_no_bombs"
            }, {
              type: "BOMB_HIT",
              count: new Vec2(3, -1),
              point: 50,
              text: "Bomb lover",
              path: "bonus_icon_hit_5_bombs"
            }], [{
              type: "BANANA_HIT",
              count_frenzy: new Vec2(-1, 0),
              count_freeze: new Vec2(-1, 0),
              count_double: new Vec2(-1, 0),
              point: 50,
              text: "No bananas sliced!",
              path: "bonus_icon_no_banana"
            }, {
              type: "BANANA_HIT",
              count_frenzy: new Vec2(1, -1),
              count_freeze: new Vec2(1, -1),
              count_double: new Vec2(1, -1),
              point: 10,
              text: "All three bananas",
              path: "bonus_icon_set_of_three"
            }, {
              type: "BANANA_HIT",
              count_frenzy: new Vec2(1, -1),
              count_freeze: new Vec2(-1, 0),
              count_double: new Vec2(-1, 0),
              point: 30,
              text: "Nothin but frenzy",
              path: "bonus_icon_one_banana"
            }, {
              type: "BANANA_HIT",
              count_frenzy: new Vec2(-1, 0),
              count_freeze: new Vec2(1, -1),
              count_double: new Vec2(-1, 0),
              point: 30,
              text: "Nothin but freeze",
              path: "bonus_icon_one_banana"
            }, {
              type: "BANANA_HIT",
              count_frenzy: new Vec2(-1, 0),
              count_freeze: new Vec2(-1, 0),
              count_double: new Vec2(1, -1),
              point: 30,
              text: "Nothin but double",
              path: "bonus_icon_one_banana"
            }], [{
              type: "SAME_SLASH_FIRST_AND_LAST",
              point: 25,
              text: "First and last fruit",
              path: "bonus_icon_first_last_fruit"
            }], [{
              type: "SCORE_MULTIPLE",
              multiple: 111,
              max: 999,
              point: 50,
              text: "Triple digits",
              path: "bonus_icon_multiple_111"
            }, {
              type: "SCORE_MULTIPLE",
              multiple: 5,
              max: -1,
              point: 10,
              text: "Multiple of five",
              path: "bonus_icon_multiple_5"
            }, {
              type: "SCORE_MULTIPLE",
              multiple: 10,
              max: -1,
              point: 20,
              text: "Multiple of ten",
              path: "bonus_icon_multiple_10"
            }, {
              type: "SCORE_MULTIPLE",
              multiple: 100,
              max: -1,
              point: 40,
              text: "Right on a hundred",
              path: "bonus_icon_multiple_100"
            }], [{
              type: "SLICE_BERRY_ONLY",
              point: 100,
              text: "Nothing but berry",
              path: "bonus_icon_no_fruit_dropped"
            }]]);
  
            return _this;
          }
  
          ArcadeBonusBoardController.getInstance = function getInstance() {
            return ArcadeBonusBoardController.Instance;
          };
  
          var _proto = ArcadeBonusBoardController.prototype;
  
          _proto.onLoad = function onLoad() {
            ArcadeBonusBoardController.Instance = this;
  
            for (var i = 0; i < this.dataBonus.length; i++) {
              for (var j = 0; j < this.dataBonus[i].length; j++) {
                ResourcesManager.getInstance().loadResources("UI/InGameBonuses/" + this.dataBonus[i][j].path + "/spriteFrame", SpriteFrame, function (sf) {});
              }
            }
          };
  
          _proto.start = function start() {};
  
          _proto.reset = function reset() {
            this.comboCounter = 0;
            this.anyFruitDropped = false;
            this.bombHitCounter = 0;
            this.bananaFrenzyHitCounter = 0;
            this.bananaFreezeHitCounter = 0;
            this.bananaDoubleHitCounter = 0;
            this.firstSlashFruit = "";
            this.lastSlashFruit = "";
            this.onlySliceBerry = true;
          };
  
          _proto.getBestPointFrom = function getBestPointFrom(data) {
            var type = data[0].type;
            var candidate = [];
  
            for (var i = 0; i < data.length; i++) {
              if (type == "BOMUS_COMBO") {
                if (this.comboCounter >= data.combo) {
                  candidate.push(data[i]);
                }
              } else if (type == "BEST_BONUS_COMBO") {
                if (this.comboCounter >= data.combo) {
                  candidate.push(data[i]);
                }
              } else if (type == "NO_FRUIT_DROPPED") {
                if (!this.anyFruitDropped) candidate.push(data[i]);
              } else if (type == "BOMB_HIT") {
                this.bombHitCounter;
                var min = data[i].count.x;
                var max = data[i].count.y;
                var valid = true;
  
                if (min != -1) {
                  if (this.bombHitCounter < min) valid = false;
                }
  
                if (max != -1) {
                  if (this.bombHitCounter > max) valid = false;
                }
  
                if (valid) candidate.push(data[i]);
              } else if (type == "BANANA_HIT") {
                var _valid = true;
                var minFrenzy = data[i].count_frenzy.x;
                var maxFrenzy = data[i].count_frenzy.y;
  
                if (minFrenzy != -1) {
                  if (this.bananaFrenzyHitCounter < minFrenzy) _valid = false;
                }
  
                if (maxFrenzy != -1) {
                  if (this.bananaFrenzyHitCounter > maxFrenzy) _valid = false;
                }
  
                var minFreeze = data[i].count_freeze.x;
                var maxFreeze = data[i].count_freeze.y;
  
                if (minFreeze != -1) {
                  if (this.bananaFreezeHitCounter < minFreeze) _valid = false;
                }
  
                if (maxFreeze != -1) {
                  if (this.bananaFreezeHitCounter > maxFreeze) _valid = false;
                }
  
                var minDouble = data[i].count_double.x;
                var maxDouble = data[i].count_double.y;
  
                if (minDouble != -1) {
                  if (this.bananaDoubleHitCounter < minDouble) _valid = false;
                }
  
                if (maxDouble != -1) {
                  if (this.bananaDoubleHitCounter > maxDouble) _valid = false;
                }
  
                if (_valid) candidate.push(data[i]);
              } else if (type == "SAME_SLASH_FIRST_AND_LAST") {
                if (this.firstSlashFruit == this.lastSlashFruit && this.firstSlashFruit != "" && this.lastSlashFruit != "") candidate.push(data[i]);
              } else if (type == "SCORE_MULTIPLE") {
                var multiple = data[i].multiple;
                var _max = data[i].max;
  
                if (GameController.getInstance().score > 0) {
                  if (_max == -1 || GameController.getInstance().score <= _max) {
                    if (GameController.getInstance().score % multiple == 0) candidate.push(data[i]);
                  }
                }
              } else if (type == "SLICE_BERRY_ONLY") {
                if (this.onlySliceBerry && GameController.getInstance().score > 0) candidate.push(data[i]);
              }
            }
  
            var result = null;
  
            for (var _i = 0; _i < candidate.length; _i++) {
              if (result == null) result = candidate[_i];else if (result.point < candidate[_i].point) result = candidate[_i];
            }
  
            return result;
          };
  
          _proto.getTopThreeBonus = function getTopThreeBonus() {
            var result = [];
            var listBestCandidates = [];
  
            for (var _i2 = 1; _i2 < this.dataBonus.length; _i2++) {
              var candidate = this.getBestPointFrom(this.dataBonus[_i2]);
              if (candidate != null) listBestCandidates.push(candidate);
            }
  
            for (var i = 0; i < listBestCandidates.length; i++) {
              for (var j = i + 1; j < listBestCandidates.length; j++) {
                if (listBestCandidates[i].point < listBestCandidates[j].point) {
                  var temp = listBestCandidates[i];
                  listBestCandidates[i] = listBestCandidates[j];
                  listBestCandidates[j] = temp;
                }
              }
            }
  
            for (var _i3 = 0; _i3 < listBestCandidates.length; _i3++) {
              if (result.length == 3) break;
              result.push(listBestCandidates[_i3]);
            }
  
            var listIndex = [0, 1, 2, 3, 4];
  
            while (result.length < 3) {
              var randomIdxListIndex = randomRangeInt(0, listIndex.length);
              var index = listIndex.splice(randomIdxListIndex, 1)[0];
              result.push(this.dataBonus[0][index]);
            }
  
            for (var _i4 = 0; _i4 < result.length; _i4++) {
              for (var j = _i4 + 1; j < result.length; j++) {
                if (result[_i4].point > result[j].point) {
                  var temp = result[_i4];
                  result[_i4] = result[j];
                  result[j] = temp;
                }
              }
            }
  
            return result;
          };
  
          return ArcadeBonusBoardController;
        }(Component), _defineProperty(_class2, "Instance", null), _temp)) || _class));
  
        cclegacy._RF.pop();
      }
    };
  });
  
  System.register("chunks:///_virtual/UIMissionTutorial.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './SFXManager.ts', './GameController.ts'], function (exports) {
    'use strict';
  
    var _defineProperty, _inheritsLoose, _assertThisInitialized, _createClass, cclegacy, _decorator, Animation, Label, Component, SFXManager, GameController;
  
    return {
      setters: [function (module) {
        _defineProperty = module.defineProperty;
        _inheritsLoose = module.inheritsLoose;
        _assertThisInitialized = module.assertThisInitialized;
        _createClass = module.createClass;
      }, function (module) {
        cclegacy = module.cclegacy;
        _decorator = module._decorator;
        Animation = module.Animation;
        Label = module.Label;
        Component = module.Component;
      }, function (module) {
        SFXManager = module.SFXManager;
      }, function (module) {
        GameController = module.GameController;
      }],
      execute: function () {
        var _dec, _class, _class2, _temp;
  
        cclegacy._RF.push({}, "a95e8drUGhDC7ZHCCkD8Lht", "UIMissionTutorial", undefined);
  
        var ccclass = _decorator.ccclass,
            property = _decorator.property;
        var UIMissionTutorial = exports('UIMissionTutorial', (_dec = ccclass('UIMissionTutorial'), _dec(_class = (_temp = _class2 = /*#__PURE__*/function (_Component) {
          _inheritsLoose(UIMissionTutorial, _Component);
  
          function UIMissionTutorial() {
            var _this;
  
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
  
            _this = _Component.call.apply(_Component, [this].concat(args)) || this;
  
            _defineProperty(_assertThisInitialized(_this), "maxFruits", 1);
  
            _defineProperty(_assertThisInitialized(_this), "_counterFruits", 0);
  
            return _this;
          }
  
          UIMissionTutorial.getInstance = function getInstance() {
            return UIMissionTutorial.Instance;
          };
  
          var _proto = UIMissionTutorial.prototype;
  
          _proto.onLoad = function onLoad() {
            UIMissionTutorial.Instance = this;
          };
  
          _proto.start = function start() {};
  
          _proto.show = function show(callbackFinish) {
            if (callbackFinish === void 0) {
              callbackFinish = function callbackFinish() {};
            }
  
            this.node.getChildByPath("cont_scroll/text_middle").active = false;
            this.node.getChildByPath("cont_scroll/text_right").active = true;
            this.node.getChildByPath("cont_scroll/text_left").active = true;
            this.node.getChildByPath("cont_scroll/tick_tutorial").active = true;
            this.node.getChildByPath("cont_scroll/backgound_icon").active = true;
            this.getComponent(Animation).play("othersScore_in");
            this.getComponent(Animation).once(Animation.EventType.FINISHED, function () {
              callbackFinish();
            });
          };
  
          _proto.showComplete = function showComplete(callbackFinish) {
            this.node.getChildByPath("cont_scroll/text_middle").active = true;
            this.node.getChildByPath("cont_scroll/text_right").active = false;
            this.node.getChildByPath("cont_scroll/text_left").active = false;
            this.node.getChildByPath("cont_scroll/tick_tutorial").active = false;
            this.node.getChildByPath("cont_scroll/backgound_icon").active = false;
            callbackFinish();
          };
  
          _proto.hide = function hide(callbackFinish) {
            if (callbackFinish === void 0) {
              callbackFinish = function callbackFinish() {};
            }
  
            this.getComponent(Animation).play("othersScore_out");
            this.getComponent(Animation).once(Animation.EventType.FINISHED, function () {
              callbackFinish();
            });
          };
  
          _proto.resetLabel = function resetLabel(maxFruits) {
            this.maxFruits = maxFruits;
            this.counterFruits = 0;
            this.node.getChildByPath("cont_scroll/text_right").getComponent(Label).string = this.counterFruits + "/" + this.maxFruits;
          };
  
          _proto.updateCountFruits = function updateCountFruits(value, onMissionComplete) {
            if (onMissionComplete === void 0) {
              onMissionComplete = function onMissionComplete() {};
            }
  
            var me = this;
            this.counterFruits = value;
            this.node.getChildByPath("cont_scroll/text_right").getComponent(Label).string = this.counterFruits + "/" + this.maxFruits;
  
            if (this.counterFruits == this.maxFruits) {
              this.scheduleOnce(function () {
                var anim = this.node.getComponent(Animation);
                SFXManager.getInstance().play(SFXManager.SFX_UI_ACHIEVEMENT);
                anim.play("show_tutorial_tick_mission");
                anim.on(Animation.EventType.FINISHED, function () {
                  me.scheduleOnce(function () {
                    if (GameController.TUTORIAL_STATE == 1) UIMissionTutorial.getInstance().resetLabel(3);else if (GameController.TUTORIAL_STATE == 2) UIMissionTutorial.getInstance().resetLabel(5);
  
                    if (GameController.TUTORIAL_STATE < 3) {
                      anim.play("hide_tutorial_tick_mission");
                      anim.on(Animation.EventType.FINISHED, function () {
                        onMissionComplete();
                      }, this, true);
                    } else {
                      onMissionComplete();
                    }
                  }, 0.5);
                }, this, true);
              }, 0.5);
            }
          };
  
          _proto.showTickMission = function showTickMission() {
            var anim = this.node.getComponent(Animation);
            SFXManager.getInstance().play(SFXManager.SFX_UI_ACHIEVEMENT);
            anim.play("show_tutorial_tick_mission");
          };
  
          _createClass(UIMissionTutorial, [{
            key: "counterFruits",
            get: function get() {
              return this._counterFruits;
            },
            set: function set(value) {
              this._counterFruits = value;
            }
          }]);
  
          return UIMissionTutorial;
        }(Component), _defineProperty(_class2, "Instance", void 0), _temp)) || _class));
  
        cclegacy._RF.pop();
      }
    };
  });
  
  System.register("chunks:///_virtual/FollowTarget.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
    'use strict';
  
    var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Vec3, Component;
  
    return {
      setters: [function (module) {
        _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
        _inheritsLoose = module.inheritsLoose;
        _initializerDefineProperty = module.initializerDefineProperty;
        _assertThisInitialized = module.assertThisInitialized;
      }, function (module) {
        cclegacy = module.cclegacy;
        _decorator = module._decorator;
        Node = module.Node;
        Vec3 = module.Vec3;
        Component = module.Component;
      }],
      execute: function () {
        var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _temp;
  
        cclegacy._RF.push({}, "a9b30jub6lG24pxvNe9a7xc", "FollowTarget", undefined);
  
        var ccclass = _decorator.ccclass,
            property = _decorator.property;
        var FollowTarget = exports('FollowTarget', (_dec = ccclass('FollowTarget'), _dec2 = property({
          type: Boolean
        }), _dec3 = property({
          type: Boolean
        }), _dec4 = property({
          type: Boolean
        }), _dec5 = property({
          type: Number
        }), _dec6 = property({
          type: Number
        }), _dec7 = property({
          type: Number
        }), _dec8 = property({
          type: Node
        }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
          _inheritsLoose(FollowTarget, _Component);
  
          function FollowTarget() {
            var _this;
  
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
  
            _this = _Component.call.apply(_Component, [this].concat(args)) || this;
  
            _initializerDefineProperty(_assertThisInitialized(_this), "followX", _descriptor, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "followY", _descriptor2, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "followZ", _descriptor3, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "offsetX", _descriptor4, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "offsetY", _descriptor5, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "offsetZ", _descriptor6, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "targetToFollow", _descriptor7, _assertThisInitialized(_this));
  
            return _this;
          }
  
          var _proto = FollowTarget.prototype;
  
          _proto.start = function start() {};
  
          _proto.update = function update(deltaTime) {
            if (this.targetToFollow != null && this.targetToFollow.position != null) {
              var targetPos = this.targetToFollow.position.clone();
              targetPos.x += this.offsetX;
              targetPos.y += this.offsetY;
              targetPos.z += this.offsetZ;
              var newPosX = this.followX ? targetPos.x : this.node.position.x;
              var newPosY = this.followY ? targetPos.y : this.node.position.y;
              var newPosZ = this.followZ ? targetPos.z : this.node.position.z;
              this.node.setPosition(new Vec3(newPosX, newPosY, newPosZ));
            }
          };
  
          return FollowTarget;
        }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "followX", [_dec2], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function initializer() {
            return true;
          }
        }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "followY", [_dec3], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function initializer() {
            return true;
          }
        }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "followZ", [_dec4], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function initializer() {
            return true;
          }
        }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "offsetX", [_dec5], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function initializer() {
            return 0;
          }
        }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "offsetY", [_dec6], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function initializer() {
            return 0;
          }
        }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "offsetZ", [_dec7], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function initializer() {
            return 0;
          }
        }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "targetToFollow", [_dec8], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function initializer() {
            return null;
          }
        })), _class2)) || _class));
  
        cclegacy._RF.pop();
      }
    };
  });
  
  System.register("chunks:///_virtual/RotateHandler.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './Utils.ts'], function (exports) {
    'use strict';
  
    var _defineProperty, cclegacy, _decorator, screen, log, EventTarget, isMobile;
  
    return {
      setters: [function (module) {
        _defineProperty = module.defineProperty;
      }, function (module) {
        cclegacy = module.cclegacy;
        _decorator = module._decorator;
        screen = module.screen;
        log = module.log;
        EventTarget = module.EventTarget;
      }, function (module) {
        isMobile = module.isMobile;
      }],
      execute: function () {
        var _dec, _class, _class2, _temp;
  
        cclegacy._RF.push({}, "acb9aGyEnNMzKqzqk/F5Efo", "RotateHandler", undefined);
  
        var ccclass = _decorator.ccclass,
            property = _decorator.property;
        /**
         * Predefined variables
         * Name = RotateHandler
         * DateTime = Mon Nov 27 2023 12:48:35 GMT+0100 (Central European Standard Time)
         * Author = azIntGames
         * FileBasename = RotateHandler.ts
         * FileBasenameNoExtension = RotateHandler
         * URL = db://assets/scripts/Shared/RotateHandler.ts
         * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
         *
         */
  
        var TypeRotateScreen;
  
        (function (TypeRotateScreen) {
          TypeRotateScreen[TypeRotateScreen["css"] = 0] = "css";
          TypeRotateScreen[TypeRotateScreen["scene"] = 1] = "scene";
        })(TypeRotateScreen || (TypeRotateScreen = {}));
  
        var RotateHandler = exports('RotateHandler', (_dec = ccclass('RotateHandler'), _dec(_class = (_temp = _class2 = /*#__PURE__*/function () {
          function RotateHandler() {
            _defineProperty(this, "correctOrientation", void 0);
  
            _defineProperty(this, "percentSizeImage", 60);
  
            _defineProperty(this, "landscapeLocked", true);
  
            _defineProperty(this, "portraitLocked", false);
  
            _defineProperty(this, "idContainerRotation", 'screen-orientation');
  
            _defineProperty(this, "idContainerGame", 'GameCanvas');
  
            _defineProperty(this, "type", TypeRotateScreen.css);
  
            _defineProperty(this, "eventTarget", new EventTarget());
          }
  
          RotateHandler.getInstance = function getInstance() {
            return RotateHandler.Instance;
          };
  
          var _proto = RotateHandler.prototype;
  
          _proto.initialize = function initialize() {
            RotateHandler.Instance = this;
            this.correctOrientation = true;
            this.initListener();
            this.setStyleImage();
          };
  
          _proto.start = function start() {// [3]
          } // update (deltaTime: number) {
          //     // [4]
          // }
          ;
  
          _proto.setStyleImage = function setStyleImage() {
            if (!document.getElementById(this.idContainerRotation)) {
              return;
            }
  
            if (this.landscapeLocked) {
              document.getElementById(this.idContainerRotation).style.backgroundSize = this.percentSizeImage + 'vw';
            }
  
            if (this.portraitLocked) {
              document.getElementById(this.idContainerRotation).style.backgroundSize = this.percentSizeImage + 'vh';
            }
          };
  
          _proto.initListener = function initListener() {
            if (isMobile) {
              window.addEventListener("resize", this.checkOrientation.bind(this));
              this.checkOrientation();
            }
          };
  
          _proto.checkOrientation = function checkOrientation() {
            var frame = screen.windowSize;
            var width = window.innerWidth;
            var height = window.innerHeight;
            log(frame.width + " - " + frame.width);
  
            if (this.landscapeLocked) {
              if (width > height) {
                this.handleCorrect();
              } else {
                this.handleIncorrect();
              }
            } else if (this.portraitLocked) {
              if (width < height) {
                this.handleCorrect();
              } else {
                this.handleIncorrect();
              }
            }
          };
  
          _proto.handleCorrect = function handleCorrect() {
            if (!document.getElementById(this.idContainerRotation)) {
              return;
            }
  
            if (this.type === TypeRotateScreen.css) {
              document.getElementById(this.idContainerRotation).style.display = 'none'; //document.getElementById(this.idContainerGame).style.display = 'block';
  
              if (!this.correctOrientation) {
                // cc.game.resume();
                this.correctOrientation = true;
                this.eventTarget.emit(RotateHandler.KEY_SIGNAL_CORRECT); // this.emit(RotateScreenManager.KEY_SIGNAL_CORRECT);
              }
            }
          };
  
          _proto.handleIncorrect = function handleIncorrect() {
            if (!document.getElementById(this.idContainerRotation)) {
              return;
            }
  
            if (this.type === TypeRotateScreen.css) {
              document.getElementById(this.idContainerRotation).style.display = 'block'; //document.getElementById(this.idContainerGame).style.display = 'none';
  
              if (this.correctOrientation) {
                // cc.game.pause();
                this.correctOrientation = false;
                this.eventTarget.emit(RotateHandler.KEY_SIGNAL_INCORRECT); // this.emit(RotateScreenManager.KEY_SIGNAL_INCORRECT);
              }
            }
          };
  
          return RotateHandler;
        }(), _defineProperty(_class2, "KEY_SIGNAL_CORRECT", 'handleCorrect'), _defineProperty(_class2, "KEY_SIGNAL_INCORRECT", 'handleIncorrect'), _defineProperty(_class2, "Instance", void 0), _temp)) || _class));
        /**
         * [1] Class member could be defined like this.
         * [2] Use `property` decorator if your want the member to be serializable.
         * [3] Your initialization goes here.
         * [4] Your update function goes here.
         *
         * Learn more about scripting: https://docs.cocos.com/creator/3.4/manual/en/scripting/
         * Learn more about CCClass: https://docs.cocos.com/creator/3.4/manual/en/scripting/decorator.html
         * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.4/manual/en/scripting/life-cycle-callbacks.html
         */
  
        cclegacy._RF.pop();
      }
    };
  });
  
  System.register("chunks:///_virtual/UIPowerUpButton.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './SFXManager.ts', './Data.ts', './SceneSelectMode.ts', './GameController.ts'], function (exports) {
    'use strict';
  
    var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _defineProperty, cclegacy, _decorator, SpriteFrame, Sprite, Label, Component, SFXManager, Data, SceneSelectMode, GameController;
  
    return {
      setters: [function (module) {
        _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
        _inheritsLoose = module.inheritsLoose;
        _initializerDefineProperty = module.initializerDefineProperty;
        _assertThisInitialized = module.assertThisInitialized;
        _defineProperty = module.defineProperty;
      }, function (module) {
        cclegacy = module.cclegacy;
        _decorator = module._decorator;
        SpriteFrame = module.SpriteFrame;
        Sprite = module.Sprite;
        Label = module.Label;
        Component = module.Component;
      }, function (module) {
        SFXManager = module.SFXManager;
      }, function (module) {
        Data = module.Data;
      }, function (module) {
        SceneSelectMode = module.SceneSelectMode;
      }, function (module) {
        GameController = module.GameController;
      }],
      execute: function () {
        var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp;
  
        cclegacy._RF.push({}, "af7ccajk/pMxLyiOantCAM5", "UIPowerUpButton", undefined);
  
        var ccclass = _decorator.ccclass,
            property = _decorator.property;
        var UIPowerUpButton = exports('UIPowerUpButton', (_dec = ccclass('UIPowerUpButton'), _dec2 = property({
          type: String,
          displayName: "Power up type"
        }), _dec3 = property({
          type: SpriteFrame,
          displayName: "Sprite button unselected"
        }), _dec4 = property({
          type: SpriteFrame,
          displayName: "Sprite button selected"
        }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
          _inheritsLoose(UIPowerUpButton, _Component);
  
          function UIPowerUpButton() {
            var _this;
  
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
  
            _this = _Component.call.apply(_Component, [this].concat(args)) || this;
  
            _initializerDefineProperty(_assertThisInitialized(_this), "powerUpType", _descriptor, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "spriteBtnUnselected", _descriptor2, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "spriteBtnSelected", _descriptor3, _assertThisInitialized(_this));
  
            _defineProperty(_assertThisInitialized(_this), "isEquipped", false);
  
            return _this;
          }
  
          var _proto = UIPowerUpButton.prototype;
  
          _proto.start = function start() {};
  
          _proto.onBuy = function onBuy() {
            var me = this;
            SFXManager.getInstance().play(SFXManager.SFX_SELECT);
            GameController.getInstance().setHoldInput(true);
            GameController.getInstance().showPopupPurchasePowerUp(true, this.powerUpType, function () {
              if (me.powerUpType == "berryblast") Data.getInstance().inventoryPUBerryBlast += 3;else if (me.powerUpType == "deflect") Data.getInstance().inventoryPUDeflect += 3;else if (me.powerUpType == "peachtime") Data.getInstance().inventoryPUPeachyTime += 3;
              GameController.saveData();
              me.setEquipped();
            });
            if (this.powerUpType == "berryblast") ;else if (this.powerUpType == "deflect") ;else if (me.powerUpType == "peachtime") ;
          };
  
          _proto.overallClicked = function overallClicked() {
            var total = 0;
            if (this.powerUpType == "berryblast") total = Data.getInstance().inventoryPUBerryBlast;else if (this.powerUpType == "deflect") total = Data.getInstance().inventoryPUDeflect;else if (this.powerUpType == "peachtime") total = Data.getInstance().inventoryPUPeachyTime;
  
            if (this.isEquipped) {
              this.setUnequipped();
            } else {
              if (total <= 0) this.onBuy();else this.setEquipped();
            }
          };
  
          _proto.setBuyable = function setBuyable() {
            this.isEquipped = false;
  
            if (this.powerUpType == "berryblast") {
              SceneSelectMode.EQUIP_BB = false;
              this.node.getChildByPath("IconPowerup/BeryBlast/BerryBlastBacking").getComponent(Sprite).spriteFrame = this.spriteBtnUnselected;
            } else if (this.powerUpType == "deflect") {
              SceneSelectMode.EQUIP_DB = false;
              this.node.getChildByPath("IconPowerup/BombDeflect/BombDeflectBacking").getComponent(Sprite).spriteFrame = this.spriteBtnUnselected;
            } else if (this.powerUpType == "peachtime") {
              SceneSelectMode.EQUIP_PT = false;
              this.node.getChildByPath("IconPowerup/PeachyTime/PeachyTimeBacking").getComponent(Sprite).spriteFrame = this.spriteBtnUnselected;
            }
  
            this.node.getChildByPath("LabelAngka").active = false;
            this.node.getChildByPath("GreenEquipped").active = false;
            this.node.getChildByPath("YellowPlus").active = true;
          };
  
          _proto.setEquipped = function setEquipped() {
            SFXManager.getInstance().play(SFXManager.SFX_UIPOWER_ENABLE);
            this.isEquipped = true;
  
            if (this.powerUpType == "berryblast") {
              SceneSelectMode.EQUIP_BB = true;
              this.node.getChildByPath("IconPowerup/BeryBlast/BerryBlastBacking").getComponent(Sprite).spriteFrame = this.spriteBtnSelected;
            } else if (this.powerUpType == "deflect") {
              SceneSelectMode.EQUIP_DB = true;
              this.node.getChildByPath("IconPowerup/BombDeflect/BombDeflectBacking").getComponent(Sprite).spriteFrame = this.spriteBtnSelected;
            } else if (this.powerUpType == "peachtime") {
              SceneSelectMode.EQUIP_PT = true;
              this.node.getChildByPath("IconPowerup/PeachyTime/PeachyTimeBacking").getComponent(Sprite).spriteFrame = this.spriteBtnSelected;
            }
  
            this.node.getChildByPath("LabelAngka").active = false;
            this.node.getChildByPath("GreenEquipped").active = true;
            this.node.getChildByPath("YellowPlus").active = false;
          };
  
          _proto.setUnequipped = function setUnequipped() {
            SFXManager.getInstance().play(SFXManager.SFX_UIPOWER_DISABLE);
            this.isEquipped = false;
  
            if (this.powerUpType == "berryblast") {
              SceneSelectMode.EQUIP_BB = false;
              this.node.getChildByPath("IconPowerup/BeryBlast/BerryBlastBacking").getComponent(Sprite).spriteFrame = this.spriteBtnUnselected;
            } else if (this.powerUpType == "deflect") {
              SceneSelectMode.EQUIP_DB = false;
              this.node.getChildByPath("IconPowerup/BombDeflect/BombDeflectBacking").getComponent(Sprite).spriteFrame = this.spriteBtnUnselected;
            } else if (this.powerUpType == "peachtime") {
              SceneSelectMode.EQUIP_PT = false;
              this.node.getChildByPath("IconPowerup/PeachyTime/PeachyTimeBacking").getComponent(Sprite).spriteFrame = this.spriteBtnUnselected;
            }
  
            this.node.getChildByPath("LabelAngka").active = false;
            this.node.getChildByPath("GreenEquipped").active = false;
            this.node.getChildByPath("YellowPlus").active = false;
            var total = 0;
            if (this.powerUpType == "berryblast") total = Data.getInstance().inventoryPUBerryBlast;else if (this.powerUpType == "deflect") total = Data.getInstance().inventoryPUDeflect;else if (this.powerUpType == "peachtime") total = Data.getInstance().inventoryPUPeachyTime;
            if (total > 0) this.setOwned(total);else this.setBuyable();
          };
  
          _proto.setOwned = function setOwned(total) {
            this.isEquipped = false;
  
            if (this.powerUpType == "berryblast") {
              SceneSelectMode.EQUIP_BB = false;
              this.node.getChildByPath("IconPowerup/BeryBlast/BerryBlastBacking").getComponent(Sprite).spriteFrame = this.spriteBtnUnselected;
            } else if (this.powerUpType == "deflect") {
              SceneSelectMode.EQUIP_DB = false;
              this.node.getChildByPath("IconPowerup/BombDeflect/BombDeflectBacking").getComponent(Sprite).spriteFrame = this.spriteBtnUnselected;
            } else if (this.powerUpType == "peachtime") {
              SceneSelectMode.EQUIP_PT = false;
              this.node.getChildByPath("IconPowerup/PeachyTime/PeachyTimeBacking").getComponent(Sprite).spriteFrame = this.spriteBtnUnselected;
            }
  
            this.node.getChildByPath("LabelAngka").active = true;
            this.node.getChildByPath("GreenEquipped").active = false;
            this.node.getChildByPath("YellowPlus").active = false;
            this.node.getChildByPath("LabelAngka/text_PU").getComponent(Label).string = "" + total;
          };
  
          return UIPowerUpButton;
        }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "powerUpType", [_dec2], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function initializer() {
            return "";
          }
        }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "spriteBtnUnselected", [_dec3], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "spriteBtnSelected", [_dec4], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        })), _class2)) || _class));
  
        cclegacy._RF.pop();
      }
    };
  });
  
  System.register("chunks:///_virtual/SuperGraphics.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
    'use strict';
  
    var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _defineProperty, cclegacy, _decorator, UIVertexFormat, gfx, v2, Color, Vec3, Texture2D, Material, Graphics, Vec2, earcut, warnID, director, RenderingSubMesh;
  
    return {
      setters: [function (module) {
        _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
        _inheritsLoose = module.inheritsLoose;
        _initializerDefineProperty = module.initializerDefineProperty;
        _assertThisInitialized = module.assertThisInitialized;
        _defineProperty = module.defineProperty;
      }, function (module) {
        cclegacy = module.cclegacy;
        _decorator = module._decorator;
        UIVertexFormat = module.UIVertexFormat;
        gfx = module.gfx;
        v2 = module.v2;
        Color = module.Color;
        Vec3 = module.Vec3;
        Texture2D = module.Texture2D;
        Material = module.Material;
        Graphics = module.Graphics;
        Vec2 = module.Vec2;
        earcut = module.earcut;
        warnID = module.warnID;
        director = module.director;
        RenderingSubMesh = module.RenderingSubMesh;
      }],
      execute: function () {
        var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp;
  
        cclegacy._RF.push({}, "b82feFO50NE0JlDwPOUJ+Gm", "SuperGraphics", undefined);
  
        var ccclass = _decorator.ccclass,
            property = _decorator.property;
        /**
         * Predefined variables
         * Name = SuperGraphics
         * DateTime = Thu Dec 09 2021 11:01:18 GMT+0800 (中国标准时间)
         * Author = 希格斯玻色子
         * FileBasename = SuperGraphics.ts
         * FileBasenameNoExtension = SuperGraphics
         * URL = db://assets/scripts/app/mediator/common/SuperGraphics.ts
         * ManualUrl = https://docs.cocos.com/creator/3.3/manual/zh/
         *
         */
  
        var attributes2 = UIVertexFormat.vfmtPosColor.concat([new gfx.Attribute('a_dist', gfx.Format.R32F), new gfx.Attribute('a_line', gfx.Format.R32F)]);
        var componentPerVertex2 = UIVertexFormat.getComponentPerVertex(attributes2);
        var stride2 = UIVertexFormat.getAttributeStride(attributes2);
  
        var Point2 = /*#__PURE__*/function (_Vec) {
          _inheritsLoose(Point2, _Vec);
  
          function Point2(x, y) {
            var _this;
  
            _this = _Vec.call(this, x, y) || this;
  
            _defineProperty(_assertThisInitialized(_this), "dx", 0);
  
            _defineProperty(_assertThisInitialized(_this), "dy", 0);
  
            _defineProperty(_assertThisInitialized(_this), "dmx", 0);
  
            _defineProperty(_assertThisInitialized(_this), "dmy", 0);
  
            _defineProperty(_assertThisInitialized(_this), "flags", 0);
  
            _defineProperty(_assertThisInitialized(_this), "len", 0);
  
            _defineProperty(_assertThisInitialized(_this), "lineLength", 0);
  
            _this.reset();
  
            return _this;
          }
  
          var _proto = Point2.prototype;
  
          _proto.reset = function reset() {
            this.dx = 0;
            this.dy = 0;
            this.dmx = 0;
            this.dmy = 0;
            this.flags = 0;
            this.len = 0;
            this.lineLength = 0;
          };
  
          return Point2;
        }(Vec2);
  
        var attrBytes2 = 9;
        var _impl = null;
        var MAX_VERTEX = 65535;
        var MAX_INDICES = MAX_VERTEX * 2;
        var PI = Math.PI;
        var max = Math.max;
        var ceil = Math.ceil;
        var acos = Math.acos;
        var cos = Math.cos;
        var sin = Math.sin;
        var atan2 = Math.atan2;
  
        var _tempV2 = v2();
  
        var _renderData = null;
  
        var _curColor = new Color();
  
        var vec3_temps = [];
  
        for (var i = 0; i < 4; i++) {
          vec3_temps.push(new Vec3());
        }
  
        function curveDivs(r, arc, tol) {
          var da = acos(r / (r + tol)) * 2.0;
          return max(2, ceil(arc / da));
        }
  
        function clamp(v, minNum, maxNum) {
          if (v < minNum) {
            return minNum;
          } else if (v > maxNum) {
            return maxNum;
          }
  
          return v;
        }
  
        var lineC = 1;
        var SuperGraphics = exports('SuperGraphics', (_dec = ccclass('SuperGraphics'), _dec2 = property(Texture2D), _dec3 = property(Material), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Graphics) {
          _inheritsLoose(SuperGraphics, _Graphics);
  
          function SuperGraphics() {
            var _this2;
  
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
  
            _this2 = _Graphics.call.apply(_Graphics, [this].concat(args)) || this;
  
            _initializerDefineProperty(_assertThisInitialized(_this2), "lineTexture", _descriptor, _assertThisInitialized(_this2));
  
            _initializerDefineProperty(_assertThisInitialized(_this2), "myMat", _descriptor2, _assertThisInitialized(_this2));
  
            _initializerDefineProperty(_assertThisInitialized(_this2), "myLineWidth", _descriptor3, _assertThisInitialized(_this2));
  
            return _this2;
          }
  
          var _proto2 = SuperGraphics.prototype;
  
          _proto2.onLoad = function onLoad() {
            if (this.lineTexture) {
              this.lineWidth = this.lineTexture.height; // this.lineWidth = 500;
  
              lineC = this.lineWidth / (this.lineTexture.height * 2 * this.lineTexture.width);
              console.log(this.lineWidth + ' ' + lineC); // lineC = 1;
            }
  
            if (this.myMat) {
              this.setMaterial(this.myMat, 0);
              if (this.lineTexture) this.getMaterial(0).setProperty("texture1", this.lineTexture); //  this.getMaterial(0).setProperty("mainTiling", v2(0.9, 1));
              //  this.getMaterial(0).setProperty("mainOffset", v2(0.05, 0));
            }
  
            _Graphics.prototype.onLoad.call(this);
          };
  
          _proto2.updateTexture = function updateTexture() {
            // this.myMat.setProperty("texture1",this.lineTexture);
            // this.getMaterial(0).setProperty("texture1",this.lineTexture);
            this.onLoad();
          };
  
          _proto2.onEnable = function onEnable() {
            if (this.myMat) {
              this.setMaterial(this.myMat, 0);
              if (this.lineTexture) this.getMaterial(0).setProperty("texture1", this.lineTexture); //  this.getMaterial(0).setProperty("mainTiling", v2(0.9, 1));
              //  this.getMaterial(0).setProperty("mainOffset", v2(0.05, 0));
            }
          };
  
          _proto2.start = function start() {}
          /**
           * 初始化assembler渲染数据组装器
           */
          ;
  
          _proto2._flushAssembler = function _flushAssembler() {
            var assembler = Graphics.Assembler.getAssembler(this);
            /*********** */
  
            var superGraphicsAssembler = {}; //复制原组装器的属性
  
            for (var kk in assembler) {
              superGraphicsAssembler[kk] = assembler[kk];
            } //修改新组装器的属性
  
            /**连线 */
  
  
            superGraphicsAssembler.stroke = function (graphics) {
              Color.copy(_curColor, graphics.strokeColor); // graphics.node.getWorldMatrix(_currMatrix);
  
              if (!graphics.impl) {
                return;
              }
  
              this._flattenPaths(graphics.impl);
  
              this._expandStroke(graphics);
  
              graphics.impl.updatePathOffset = true;
              this.end(graphics);
            };
            /**填充 */
  
  
            superGraphicsAssembler.fill = function (graphics) {
              Color.copy(_curColor, graphics.fillColor); // graphics.node.getWorldMatrix(_currMatrix);
  
              this._expandFill(graphics);
  
              if (graphics.impl) {
                graphics.impl.updatePathOffset = true;
              }
  
              this.end(graphics);
            };
            /**路径数据整理 */
  
  
            superGraphicsAssembler._flattenPaths = function (impl) {
              var paths = impl.paths;
  
              for (var _i = impl.pathOffset, l = impl.pathLength; _i < l; _i++) {
                var path = paths[_i];
                var pts = path.points;
                var p0 = pts[pts.length - 1];
                var p1 = pts[0]; // if (pts.length > 2 && p0.equals(p1)) {
                //     path.closed = true;
                //     pts.pop();
                //     p0 = pts[pts.length - 1];
                // }
  
                /******** */
  
                var lineLength = 0;
                pts[0]["lineLength"] = lineLength;
                var p00 = null;
                var p11 = pts[0];
                var subPos = v2();
                /********* */
  
                for (var j = 0, size = pts.length; j < size; j++) {
                  // Calculate segment direction and length
                  var dPos = new Point2(p1.x, p1.y);
                  dPos.subtract(p0);
                  p0.len = dPos.length();
  
                  if (dPos.x || dPos.y) {
                    dPos.normalize();
                  }
  
                  p0.dx = dPos.x;
                  p0.dy = dPos.y; //***** */
  
                  p11 = pts[j];
  
                  if (j != 0) {
                    //p0是上一个，p1是当前这个
                    //p00是上一个，p11是当前这个
                    Vec2.subtract(subPos, p11, p00);
                    lineLength += subPos.length() * lineC;
                    p11["lineLength"] = lineLength;
                  }
  
                  p00 = pts[j]; //******* */
                  // Advance
  
                  p0 = p1;
                  p1 = pts[j + 1];
                } // for(let j=0;j<pts.length;j++){
                //     // pts[j]["trueLength"] = pts[j]["lineLength"];
                //     pts[j]["lineLength"] /= lineLength;
                //     // pts[j]["trueLength"] = lineLength;
                // }
                // for(let j=0;j<pts.length;j++){
                //     pts[j]["lineLength"] = lineLength;
                // }
                // if (pts.length > 3 && pts[pts.length-1].len != pts[pts.length-2].len){
                //     pts[pts.length - 1].len = pts[pts.length-2].len;
                // }
                // log(pts);
  
              }
            }; //**获取一个渲染data */
  
  
            superGraphicsAssembler.getRenderData = function (graphics, vertexCount) {
              if (!_impl) {
                return null;
              }
  
              var renderDataList = _impl.getRenderDataList();
  
              var renderData = renderDataList[_impl.dataOffset];
  
              if (!renderData) {
                return null;
              }
  
              var meshBuffer = renderData;
              var maxVertexCount = meshBuffer ? meshBuffer.vertexStart + vertexCount : 0;
  
              if (maxVertexCount > MAX_VERTEX || maxVertexCount * 3 > MAX_INDICES) {
                ++_impl.dataOffset;
  
                if (_impl.dataOffset < renderDataList.length) {
                  renderData = renderDataList[_impl.dataOffset];
                } else {
                  renderData = _impl.requestRenderData();
                  renderDataList[_impl.dataOffset] = renderData;
                }
  
                meshBuffer = renderData;
              }
  
              if (meshBuffer && meshBuffer.vertexCount < maxVertexCount) {
                meshBuffer.request(vertexCount, vertexCount * 3);
              }
  
              return renderData;
            };
  
            var me = this;
            /**组装连线渲染数据 */
  
            superGraphicsAssembler._expandStroke = function (graphics) {
              graphics.lineWidth = me.myLineWidth;
              var w = graphics.lineWidth * 0.5; // console.log('lw: '+graphics.lineWidth);
              // let w = 64;
  
              var lineCap = graphics.lineCap;
              var lineJoin = graphics.lineJoin;
              var miterLimit = graphics.miterLimit;
              _impl = graphics.impl;
  
              if (!_impl) {
                return;
              }
  
              var nCap = curveDivs(w, PI, _impl.tessTol);
  
              this._calculateJoins(_impl, w, lineJoin, miterLimit);
  
              var paths = _impl.paths; // Calculate max vertex usage.
  
              var vertexCount = 0;
  
              for (var _i2 = _impl.pathOffset, l = _impl.pathLength; _i2 < l; _i2++) {
                var path = paths[_i2];
                var pointsLength = path.points.length;
  
                if (lineJoin == 1) {
                  vertexCount += (pointsLength + path.bevel * (nCap + 2) + 1) * 2;
                } else {
                  vertexCount += (pointsLength + path.bevel * 5 + 1) * 2;
                } // plus one for loop
  
  
                if (!path.closed) {
                  // space for caps
                  if (lineCap == 1) {
                    vertexCount += (nCap * 2 + 2) * 2;
                  } else {
                    vertexCount += (3 + 3) * 2;
                  }
                }
              }
  
              var meshBuffer = _renderData = this.getRenderData(graphics, vertexCount);
  
              if (!meshBuffer) {
                return;
              }
  
              var vData = meshBuffer.vData;
              var iData = meshBuffer.iData;
  
              for (var _i3 = _impl.pathOffset, _l = _impl.pathLength; _i3 < _l; _i3++) {
                var _path = paths[_i3];
                var pts = _path.points;
                var _pointsLength = pts.length;
                var offset = meshBuffer.vertexStart;
                var p0 = void 0;
                var p1 = void 0;
                var start = 0;
                var end = 0;
                var loop = _path.closed; // const loop = false;
  
                var startEndL = 0;
  
                if (loop) {
                  // Looping
                  p0 = pts[_pointsLength - 1];
                  p1 = pts[0];
                  start = 0;
                  end = _pointsLength;
                  Vec2.subtract(_tempV2, p1, p0);
                  startEndL = _tempV2.length();
                } else {
                  // Add cap
                  p0 = pts[0];
                  p1 = pts[1];
                  start = 1;
                  end = _pointsLength - 1;
                }
  
                p1 = p1 || p0;
  
                if (!loop) {
                  // Add cap
                  var dPos = new Point2(p1.x, p1.y);
                  dPos.subtract(p0);
                  dPos.normalize();
                  var dx = dPos.x;
                  var dy = dPos.y;
  
                  if (lineCap == 0) {
                    this._buttCapStart(p0, dx, dy, w, 0);
                  } else if (lineCap == 2) {
                    this._buttCapStart(p0, dx, dy, w, w);
                  } else if (lineCap == 1) {
                    this._roundCapStart(p0, dx, dy, w, nCap);
                  }
                }
  
                var totalLength = 0;
  
                for (var j = start; j < end; j++) {
                  totalLength += pts[j + 1].lineLength;
                } // console.log(totalLength);
  
  
                var curLength = 0;
  
                for (var _j = start; _j < end; ++_j) {
                  var scaleW = (totalLength - curLength) / totalLength; // let scaleW = 1;
                  // let scaleW = ((totalLength-p0.x)/totalLength);
                  // console.log('sw1: '+curLength+' '+totalLength+' '+p0.x);
                  // console.log('sw2: '+scaleW);
                  // console.log('dmx: '+p1.dmx);
                  // console.log('dmy: '+p1.dmy);
                  // let scaleW = 0.5;
  
                  if (lineJoin == 1) {
                    this._roundJoin(p0, p1, w * scaleW, w * scaleW, nCap);
                  } else if ((p1.flags & (0x04 | 0x08)) !== 0) {
                    this._bevelJoin(p0, p1, w * scaleW, w * scaleW);
                  } else {
                    this._vSet(p1.x + p1.dmx * w * scaleW, p1.y + p1.dmy * w * scaleW, 1, p1.lineLength);
  
                    this._vSet(p1.x - p1.dmx * w * scaleW, p1.y - p1.dmy * w * scaleW, -1, p1.lineLength); // this._vSet!(p1.x + p1.dmx * w*scaleW, p1.y + p1.dmy * w*scaleW, 1,totalLength);
                    // this._vSet!(p1.x - p1.dmx * w*scaleW, p1.y - p1.dmy * w*scaleW, -1,totalLength);
  
                  }
  
                  curLength += p1.lineLength;
                  p0 = p1;
                  p1 = pts[_j + 1];
                }
  
                if (loop) {
                  // Loop it
                  var vDataOffset = offset * attrBytes2;
  
                  this._vSet(vData[vDataOffset], vData[vDataOffset + 1], 1, startEndL);
  
                  this._vSet(vData[vDataOffset + attrBytes2], vData[vDataOffset + attrBytes2 + 1], -1, startEndL);
                } else {
                  // Add cap
                  var _dPos = new Point2(p1.x, p1.y);
  
                  _dPos.subtract(p0);
  
                  _dPos.normalize();
  
                  var _dx = _dPos.x;
                  var _dy = _dPos.y;
  
                  if (lineCap == 0) {
                    // this._buttCapEnd!(p1, dx, dy, w, 0);
                    this._buttCapEnd(p1, _dx, _dy, 0.5, 0.5);
                  } else if (lineCap == 2) {
                    // this._buttCapEnd!(p1, dx, dy, w, w);
                    this._buttCapEnd(p1, _dx, _dy, 0.5, 0.5);
                  } else if (lineCap == 1) {
                    this._roundCapEnd(p1, _dx, _dy, w, nCap);
                  }
                } // stroke indices
  
  
                var indicesOffset = meshBuffer.indexStart;
  
                for (var begin = offset + 2, over = meshBuffer.vertexStart; begin < over; begin++) {
                  iData[indicesOffset++] = begin - 2;
                  iData[indicesOffset++] = begin - 1;
                  iData[indicesOffset++] = begin;
                }
  
                meshBuffer.indexStart = indicesOffset;
              }
  
              _renderData = null;
              _impl = null;
            };
            /**组装填充渲染数据 */
  
  
            superGraphicsAssembler._expandFill = function (graphics) {
              _impl = graphics.impl;
  
              if (!_impl) {
                return;
              }
  
              var paths = _impl.paths; // Calculate max vertex usage.
  
              var vertexCount = 0;
  
              for (var _i4 = _impl.pathOffset, l = _impl.pathLength; _i4 < l; _i4++) {
                var path = paths[_i4];
                var pointsLength = path.points.length;
                vertexCount += pointsLength;
              }
  
              var renderData = _renderData = this.getRenderData(graphics, vertexCount);
  
              if (!renderData) {
                return;
              }
  
              var meshBuffer = renderData;
              var vData = meshBuffer.vData;
              var iData = meshBuffer.iData;
  
              for (var _i5 = _impl.pathOffset, _l2 = _impl.pathLength; _i5 < _l2; _i5++) {
                var _path2 = paths[_i5];
                var pts = _path2.points;
                var _pointsLength2 = pts.length;
  
                if (_pointsLength2 === 0) {
                  continue;
                } // Calculate shape vertices.
  
  
                var vertexOffset = renderData.vertexStart;
  
                for (var j = 0; j < _pointsLength2; ++j) {
                  if (pts[j].y > 0) {
                    this._vSet(pts[j].x, pts[j].y, 0, pts[j]["lineLength"]);
                  } else {
                    this._vSet(pts[j].x, pts[j].y, 60, pts[j]["lineLength"]);
                  }
                }
  
                var indicesOffset = renderData.indexStart;
  
                if (_path2.complex) {
                  var earcutData = [];
  
                  for (var _j2 = vertexOffset, end = renderData.vertexStart; _j2 < end; _j2++) {
                    var vDataOffset = _j2 * attrBytes2;
                    earcutData.push(vData[vDataOffset++]);
                    earcutData.push(vData[vDataOffset++]);
                    earcutData.push(vData[vDataOffset++]);
                  }
  
                  var newIndices = earcut(earcutData, null, 3);
  
                  if (!newIndices || newIndices.length === 0) {
                    continue;
                  }
  
                  for (var _j3 = 0, nIndices = newIndices.length; _j3 < nIndices; _j3++) {
                    iData[indicesOffset++] = newIndices[_j3] + vertexOffset;
                  }
                } else {
                  var first = vertexOffset;
  
                  for (var start = vertexOffset + 2, _end = meshBuffer.vertexStart; start < _end; start++) {
                    iData[indicesOffset++] = first;
                    iData[indicesOffset++] = start - 1;
                    iData[indicesOffset++] = start;
                  }
                }
  
                meshBuffer.indexStart = indicesOffset;
              }
  
              _renderData = null;
              _impl = null;
            };
  
            superGraphicsAssembler._buttCapStart = function (p, dx, dy, w, d) {
              var px = p.x - dx * d;
              var py = p.y - dy * d;
              var dlx = dy;
              var dly = -dx;
  
              this._vSet(px + dlx * w, py + dly * w, 1, p.lineLength);
  
              this._vSet(px - dlx * w, py - dly * w, -1, p.lineLength);
            };
  
            superGraphicsAssembler._buttCapEnd = function (p, dx, dy, w, d) {
              var px = p.x + dx * d;
              var py = p.y + dy * d;
              var dlx = dy;
              var dly = -dx;
  
              this._vSet(px + dlx * w, py + dly * w, 1, p.lineLength);
  
              this._vSet(px - dlx * w, py - dly * w, -1, p.lineLength);
            };
  
            superGraphicsAssembler._roundCapStart = function (p, dx, dy, w, nCap) {
              var px = p.x;
              var py = p.y;
              var dlx = dy;
              var dly = -dx;
  
              for (var _i6 = 0; _i6 < nCap; _i6++) {
                var a = _i6 / (nCap - 1) * PI;
                var ax = cos(a) * w;
                var ay = sin(a) * w;
  
                this._vSet(px - dlx * ax - dx * ay, py - dly * ax - dy * ay, 1, p.lineLength);
  
                this._vSet(px, py, 0, p.lineLength);
              }
  
              this._vSet(px + dlx * w, py + dly * w, 1, p.lineLength);
  
              this._vSet(px - dlx * w, py - dly * w, -1, p.lineLength);
            };
  
            superGraphicsAssembler._roundCapEnd = function (p, dx, dy, w, nCap) {
              var px = p.x;
              var py = p.y;
              var dlx = dy;
              var dly = -dx;
  
              this._vSet(px + dlx * w, py + dly * w, 1, p.lineLength);
  
              this._vSet(px - dlx * w, py - dly * w, -1, p.lineLength);
  
              for (var _i7 = 0; _i7 < nCap; _i7++) {
                var a = _i7 / (nCap - 1) * PI;
                var ax = cos(a) * w;
                var ay = sin(a) * w;
  
                this._vSet(px, py, 0, p.lineLength);
  
                this._vSet(px - dlx * ax + dx * ay, py - dly * ax + dy * ay, 1, p.lineLength);
              }
            };
  
            superGraphicsAssembler._roundJoin = function (p0, p1, lw, rw, nCap) {
              var dlx0 = p0.dy;
              var dly0 = -p0.dx;
              var dlx1 = p1.dy;
              var dly1 = -p1.dx;
              var p1x = p1.x;
              var p1y = p1.y;
  
              if ((p1.flags & 0x02) !== 0) {
                var out = this._chooseBevel(p1.flags & 0x08, p0, p1, lw);
  
                var lx0 = out[0];
                var ly0 = out[1];
                var lx1 = out[2];
                var ly1 = out[3];
                var a0 = atan2(-dly0, -dlx0);
                var a1 = atan2(-dly1, -dlx1);
  
                if (a1 > a0) {
                  a1 -= PI * 2;
                }
  
                this._vSet(lx0, ly0, 1, p1.lineLength);
  
                this._vSet(p1x - dlx0 * rw, p1.y - dly0 * rw, -1, p1.lineLength);
  
                var n = clamp(ceil((a0 - a1) / PI) * nCap, 2, nCap);
  
                for (var _i8 = 0; _i8 < n; _i8++) {
                  var u = _i8 / (n - 1);
                  var a = a0 + u * (a1 - a0);
                  var rx = p1x + cos(a) * rw;
                  var ry = p1y + sin(a) * rw;
  
                  this._vSet(p1x, p1y, 0, p1.lineLength);
  
                  this._vSet(rx, ry, -1, p1.lineLength);
                }
  
                this._vSet(lx1, ly1, 1, p1.lineLength);
  
                this._vSet(p1x - dlx1 * rw, p1y - dly1 * rw, -1, p1.lineLength);
              } else {
                var _out = this._chooseBevel(p1.flags & 0x08, p0, p1, -rw);
  
                var rx0 = _out[0];
                var ry0 = _out[1];
                var rx1 = _out[2];
                var ry1 = _out[3];
  
                var _a = atan2(dly0, dlx0);
  
                var _a2 = atan2(dly1, dlx1);
  
                if (_a2 < _a) {
                  _a2 += PI * 2;
                }
  
                this._vSet(p1x + dlx0 * rw, p1y + dly0 * rw, 1, p1.lineLength);
  
                this._vSet(rx0, ry0, -1, p1.lineLength);
  
                var _n = clamp(ceil((_a2 - _a) / PI) * nCap, 2, nCap);
  
                for (var _i9 = 0; _i9 < _n; _i9++) {
                  var _u = _i9 / (_n - 1);
  
                  var _a3 = _a + _u * (_a2 - _a);
  
                  var lx = p1x + cos(_a3) * lw;
                  var ly = p1y + sin(_a3) * lw;
  
                  this._vSet(lx, ly, 1, p1.lineLength);
  
                  this._vSet(p1x, p1y, 0, p1.lineLength);
                }
  
                this._vSet(p1x + dlx1 * rw, p1y + dly1 * rw, 1, p1.lineLength);
  
                this._vSet(rx1, ry1, -1, p1.lineLength);
              }
            };
  
            superGraphicsAssembler._bevelJoin = function (p0, p1, lw, rw) {
              var rx0 = 0;
              var ry0 = 0;
              var rx1 = 0;
              var ry1 = 0;
              var lx0 = 0;
              var ly0 = 0;
              var lx1 = 0;
              var ly1 = 0;
              var dlx0 = p0.dy;
              var dly0 = -p0.dx;
              var dlx1 = p1.dy;
              var dly1 = -p1.dx;
  
              if (p1.flags & 0x02) {
                var out = this._chooseBevel(p1.flags & 0x08, p0, p1, lw);
  
                lx0 = out[0];
                ly0 = out[1];
                lx1 = out[2];
                ly1 = out[3];
  
                this._vSet(lx0, ly0, 1, p1.lineLength);
  
                this._vSet(p1.x - dlx0 * rw, p1.y - dly0 * rw, -1, p1.lineLength);
  
                this._vSet(lx1, ly1, 1, p1.lineLength);
  
                this._vSet(p1.x - dlx1 * rw, p1.y - dly1 * rw, -1, p1.lineLength);
              } else {
                var _out2 = this._chooseBevel(p1.flags & 0x08, p0, p1, -rw);
  
                rx0 = _out2[0];
                ry0 = _out2[1];
                rx1 = _out2[2];
                ry1 = _out2[3];
  
                this._vSet(p1.x + dlx0 * lw, p1.y + dly0 * lw, 1, p1.lineLength);
  
                this._vSet(rx0, ry0, -1, p1.lineLength);
  
                this._vSet(p1.x + dlx1 * lw, p1.y + dly1 * lw, 1, p1.lineLength);
  
                this._vSet(rx1, ry1, -1, p1.lineLength);
              }
            };
            /**设置顶点数据 */
  
  
            superGraphicsAssembler._vSet = function (x, y, distance, lineLong) {
              if (distance === void 0) {
                distance = 0;
              }
  
              if (lineLong === void 0) {
                lineLong = 0;
              }
  
              if (!_renderData) {
                return;
              }
  
              var meshBuffer = _renderData;
              var dataOffset = meshBuffer.vertexStart * attrBytes2;
              var vData = meshBuffer.vData; // vec3.set(_tempVec3, x, y, 0);
              // vec3.transformMat4(_tempVec3, _tempVec3, _currMatrix);
  
              vData[dataOffset++] = x;
              vData[dataOffset++] = y;
              vData[dataOffset++] = 0;
              Color.toArray(vData, _curColor, dataOffset);
              dataOffset += 4;
              vData[dataOffset++] = distance;
              vData[dataOffset++] = lineLong;
              meshBuffer.vertexStart++;
            };
  
            if (this._assembler !== superGraphicsAssembler) {
              this._assembler = superGraphicsAssembler;
            }
            /************ */
  
          }
          /**创建顶点数据buffer */
          ;
  
          _proto2.activeSubModel = function activeSubModel(idx) {
            if (!this.model) {
              warnID(4500, this.node.name);
              return;
            }
  
            if (this.model.subModels.length <= idx) {
              var gfxDevice = director.root.device;
              var vertexBuffer = gfxDevice.createBuffer(new gfx.BufferInfo(gfx.BufferUsageBit.VERTEX | gfx.BufferUsageBit.TRANSFER_DST, gfx.MemoryUsageBit.DEVICE, 65535 * stride2, stride2));
              var indexBuffer = gfxDevice.createBuffer(new gfx.BufferInfo(gfx.BufferUsageBit.INDEX | gfx.BufferUsageBit.TRANSFER_DST, gfx.MemoryUsageBit.DEVICE, 65535 * Uint16Array.BYTES_PER_ELEMENT * 2, Uint16Array.BYTES_PER_ELEMENT));
              var renderMesh = new RenderingSubMesh([vertexBuffer], attributes2, gfx.PrimitiveMode.TRIANGLE_LIST, indexBuffer);
              renderMesh.subMeshIdx = 0;
              this.model.initSubModel(idx, renderMesh, this.getMaterialInstance(0));
              this["_graphicsUseSubMeshes"].push(renderMesh);
            }
          }
          /**重新刷新渲染数据 */
          ;
  
          _proto2._uploadData = function _uploadData() {
            var impl = this.impl;
  
            if (!impl) {
              return;
            }
  
            var renderDataList = impl && impl.getRenderDataList();
  
            if (renderDataList.length <= 0 || !this.model) {
              return;
            }
  
            var subModelList = this.model.subModels;
  
            for (var _i10 = 0; _i10 < renderDataList.length; _i10++) {
              var renderData = renderDataList[_i10];
              var ia = subModelList[_i10].inputAssembler;
  
              if (renderData.lastFilledVertex === renderData.vertexStart) {
                continue;
              }
  
              var vb = new Float32Array(renderData.vData.buffer, 0, renderData.vertexStart * componentPerVertex2);
              ia.vertexBuffers[0].update(vb);
              ia.vertexCount = renderData.vertexStart;
              var ib = new Uint16Array(renderData.iData.buffer, 0, renderData.indexStart);
              ia.indexBuffer.update(ib);
              ia.indexCount = renderData.indexStart;
              renderData.lastFilledVertex = renderData.vertexStart;
              renderData.lastFilledIndex = renderData.indexStart;
            }
  
            this._isNeedUploadData = false;
          };
  
          return SuperGraphics;
        }(Graphics), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "lineTexture", [_dec2], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function initializer() {
            return null;
          }
        }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "myMat", [_dec3], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function initializer() {
            return null;
          }
        }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "myLineWidth", [property], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function initializer() {
            return 0;
          }
        })), _class2)) || _class));
  
        cclegacy._RF.pop();
      }
    };
  });
  
  System.register("chunks:///_virtual/ContMissionSelectMode.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './MissionManager.ts', './MissionLabel.ts'], function (exports) {
    'use strict';
  
    var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _defineProperty, cclegacy, _decorator, Node, tween, Component, MissionManager, MissionLabel;
  
    return {
      setters: [function (module) {
        _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
        _inheritsLoose = module.inheritsLoose;
        _initializerDefineProperty = module.initializerDefineProperty;
        _assertThisInitialized = module.assertThisInitialized;
        _defineProperty = module.defineProperty;
      }, function (module) {
        cclegacy = module.cclegacy;
        _decorator = module._decorator;
        Node = module.Node;
        tween = module.tween;
        Component = module.Component;
      }, function (module) {
        MissionManager = module.MissionManager;
      }, function (module) {
        MissionLabel = module.MissionLabel;
      }],
      execute: function () {
        var _dec, _dec2, _class, _class2, _descriptor, _temp;
  
        cclegacy._RF.push({}, "c5c0bKW6FJNoou1Rd581B3f", "ContMissionSelectMode", undefined);
  
        var ccclass = _decorator.ccclass,
            property = _decorator.property;
        var ContMissionSelectMode = exports('ContMissionSelectMode', (_dec = ccclass('ContMissionSelectMode'), _dec2 = property({
          type: Node
        }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
          _inheritsLoose(ContMissionSelectMode, _Component);
  
          function ContMissionSelectMode() {
            var _this;
  
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
  
            _this = _Component.call.apply(_Component, [this].concat(args)) || this;
  
            _initializerDefineProperty(_assertThisInitialized(_this), "containerLabelVersus", _descriptor, _assertThisInitialized(_this));
  
            _defineProperty(_assertThisInitialized(_this), "idxMission", 0);
  
            _defineProperty(_assertThisInitialized(_this), "holdInput", false);
  
            _defineProperty(_assertThisInitialized(_this), "idxMenu", 0);
  
            return _this;
          }
  
          var _proto = ContMissionSelectMode.prototype;
  
          _proto.refreshContMission = function refreshContMission() {
            var me = this;
            this.idxMenu = 0;
            this.idxMission = 0;
            this.holdInput = false;
            var contentMission = this.node.getChildByPath("HorScroll/view/content/HorScroll/view/content");
            var contentMissionPos = contentMission.position.clone();
            contentMissionPos.x = -216.494;
            contentMission.setPosition(contentMissionPos);
            var content = this.node.getChildByPath("HorScroll/view/content");
            var contentPos = content.position.clone();
            contentPos.x = -232.523;
            content.setPosition(contentPos);
            this.node.getChildByPath("HorScroll/view/content/HorScroll/dot_1/CarouselDot").active = this.idxMission == 0;
            this.node.getChildByPath("HorScroll/view/content/HorScroll/dot_2/CarouselDot").active = this.idxMission == 1;
            this.node.getChildByPath("HorScroll/view/content/HorScroll/dot_3/CarouselDot").active = this.idxMission == 2;
  
            for (var i = 0; i < MissionManager.getInstance().activeMission.length; i++) {
              var curMission = MissionManager.getInstance().activeMission[i];
              this.node.getChildByPath("HorScroll/view/content/HorScroll/view/content/missionEntry_" + (i + 1)).getComponent(MissionLabel).refresh(curMission, "select_mode");
              this.node.getChildByPath("HorScroll/view/content/HorScroll/view/content/missionEntry_" + (i + 1)).getComponent(MissionLabel).setOnClaimed(function () {
                me.refreshContMission();
              });
            }
  
            this.refreshArrowButton();
            this.refreshMissionBackground();
          };
  
          _proto.setHoldInput = function setHoldInput(value) {
            this.holdInput = value;
  
            for (var i = 0; i < MissionManager.getInstance().activeMission.length; i++) {
              this.node.getChildByPath("HorScroll/view/content/HorScroll/view/content/missionEntry_" + (i + 1)).getComponent(MissionLabel).setHoldInput(value);
            }
          };
  
          _proto.tryMoveMenu = function tryMoveMenu(valueToAdd) {
            this.idxMenu += valueToAdd;
  
            if (this.idxMenu > 1) {
              this.idxMenu = 1;
              return false;
            } else {
              var me = this;
              var content = this.node.getChildByPath("HorScroll/view/content");
              var contentPos = content.position.clone();
              if (this.idxMenu == 1) contentPos.x = -699.823;else contentPos.x = -232.523;
              this.idxMission = 0;
              var contentMission = this.node.getChildByPath("HorScroll/view/content/HorScroll/view/content");
              var contentMissionPos = contentMission.position.clone();
              contentMissionPos.x = -216.494;
              contentMission.setPosition(contentMissionPos);
              tween(content).to(0.1, {
                position: contentPos
              }).call(function () {
                me.node.getChildByPath("HorScroll/view/content/HorScroll/dot_1/CarouselDot").active = me.idxMission == 0;
                me.node.getChildByPath("HorScroll/view/content/HorScroll/dot_2/CarouselDot").active = me.idxMission == 1;
                me.node.getChildByPath("HorScroll/view/content/HorScroll/dot_3/CarouselDot").active = me.idxMission == 2;
                me.holdInput = false;
                me.refreshMissionBackground();
              }).start();
              return true;
            }
          };
  
          _proto.tryMoveMission = function tryMoveMission(valueToAdd) {
            this.idxMission += valueToAdd;
  
            if (this.idxMission > 2) {
              this.idxMission = 2;
              return false;
            } else {
              var me = this;
              var contentMission = this.node.getChildByPath("HorScroll/view/content/HorScroll/view/content");
              var contentMissionPos = contentMission.position.clone();
              contentMissionPos.x = -216.494 - 435 * this.idxMission;
              tween(contentMission).to(0.1, {
                position: contentMissionPos
              }).call(function () {
                me.node.getChildByPath("HorScroll/view/content/HorScroll/dot_1/CarouselDot").active = me.idxMission == 0;
                me.node.getChildByPath("HorScroll/view/content/HorScroll/dot_2/CarouselDot").active = me.idxMission == 1;
                me.node.getChildByPath("HorScroll/view/content/HorScroll/dot_3/CarouselDot").active = me.idxMission == 2;
                me.holdInput = false;
                me.refreshMissionBackground();
              }).start();
              return true;
            }
          };
  
          _proto.btnNextClicked = function btnNextClicked() {
            if (this.holdInput) return;
            this.holdInput = true;
  
            if (this.containerLabelVersus != null && this.containerLabelVersus.active) {
              if (!this.tryMoveMenu(1)) {
                this.tryMoveMission(1);
              }
            } else {
              this.tryMoveMission(1);
            }
  
            this.refreshArrowButton();
          };
  
          _proto.btnPrevClicked = function btnPrevClicked() {
            if (this.holdInput) return;
            this.holdInput = true;
  
            if (this.containerLabelVersus != null && this.containerLabelVersus.active) {
              if (this.idxMission > 0) {
                this.tryMoveMission(-1);
              } else {
                this.tryMoveMenu(-1);
              }
            } else {
              this.tryMoveMission(-1);
            }
  
            this.refreshArrowButton();
          };
  
          _proto.refreshArrowButton = function refreshArrowButton() {
            var right = this.node.getChildByPath("ArrowMissionRight");
            var left = this.node.getChildByPath("ArrowMissionLeft");
  
            if (this.containerLabelVersus != null && this.containerLabelVersus.active) {
              left.active = this.idxMenu > 0;
              right.active = this.idxMission < MissionManager.getInstance().activeMission.length - 1;
            } else {
              right.active = this.idxMission < MissionManager.getInstance().activeMission.length - 1;
              left.active = this.idxMission > 0;
            }
          };
  
          _proto.refreshMissionBackground = function refreshMissionBackground() {
            var curMission = MissionManager.getInstance().activeMission[this.idxMission];
            this.node.getChildByPath("HorScroll/view/content/HorScroll/MissionGrad/MissionGradient").active = curMission.current < curMission.target || curMission.claimed;
            this.node.getChildByPath("HorScroll/view/content/HorScroll/MissionGrad/MissionCompleteGradientStroke").active = curMission.current >= curMission.target && !curMission.claimed;
            this.node.getChildByPath("HorScroll/view/content/HorScroll/MissionGrad/MissionCompleteGradient").active = curMission.current >= curMission.target && !curMission.claimed;
          };
  
          _proto.start = function start() {};
  
          return ContMissionSelectMode;
        }(Component), _temp), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "containerLabelVersus", [_dec2], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function initializer() {
            return null;
          }
        }), _class2)) || _class));
  
        cclegacy._RF.pop();
      }
    };
  });
  
  System.register("chunks:///_virtual/SceneLoading.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './Instances.ts', './RotateHandler.ts', './FocusHandler.ts', './AdsManager.ts'], function (exports) {
    'use strict';
  
    var _defineProperty, _inheritsLoose, cclegacy, _decorator, UITransform, Vec3, screen, setDisplayStats, ProgressBar, Component, Instances, RotateHandler, FocusHandler, AdsManager;
  
    return {
      setters: [function (module) {
        _defineProperty = module.defineProperty;
        _inheritsLoose = module.inheritsLoose;
      }, function (module) {
        cclegacy = module.cclegacy;
        _decorator = module._decorator;
        UITransform = module.UITransform;
        Vec3 = module.Vec3;
        screen = module.screen;
        setDisplayStats = module.setDisplayStats;
        ProgressBar = module.ProgressBar;
        Component = module.Component;
      }, function (module) {
        Instances = module.default;
      }, function (module) {
        RotateHandler = module.RotateHandler;
      }, function (module) {
        FocusHandler = module.default;
      }, function (module) {
        AdsManager = module.AdsManager;
      }],
      execute: function () {
        var _dec, _class, _class2, _temp;
  
        cclegacy._RF.push({}, "c94299uflFBvpaB1IqBJqol", "SceneLoading", undefined);
  
        var ccclass = _decorator.ccclass,
            property = _decorator.property;
        var SceneLoading = exports('SceneLoading', (_dec = ccclass('SceneLoading'), _dec(_class = (_temp = _class2 = /*#__PURE__*/function (_Component) {
          _inheritsLoose(SceneLoading, _Component);
  
          function SceneLoading() {
            return _Component.apply(this, arguments) || this;
          }
  
          SceneLoading.getInstance = function getInstance() {
            return SceneLoading.Instance;
          };
  
          var _proto = SceneLoading.prototype;
  
          _proto.onLoad = function onLoad() {
            SceneLoading.Instance = this;
            AdsManager.init();
            Instances.rotateScreen = new RotateHandler();
            Instances.rotateScreen.initialize();
            FocusHandler.initialize();
            var bgWidth = this.node.getChildByPath("Background").getComponent(UITransform).width;
            var bgHeight = this.node.getChildByPath("Background").getComponent(UITransform).height;
            var canvasWidth = this.node.getComponent(UITransform).width;
            var canvasHeight = this.node.getComponent(UITransform).height;
            var diffWidth = bgWidth / canvasWidth;
            var diffHeight = bgHeight / canvasHeight;
  
            if (diffWidth < 1 || diffHeight < 1) {
              var minDiff = Math.min(diffWidth, diffHeight);
  
              if (diffWidth < 1 && minDiff == diffWidth) {
                var newScale = canvasWidth / bgWidth;
                this.node.getChildByPath("Background").setScale(new Vec3(newScale, newScale, newScale));
                console.log('newScale', newScale);
              } else if (diffHeight < 1 && minDiff == diffHeight) {
                var _newScale = canvasHeight / bgHeight;
  
                this.node.getChildByPath("Background").setScale(new Vec3(_newScale, _newScale, _newScale));
                console.log('newScale', _newScale);
              }
            }
  
            if (screen.windowSize.width < 900) {
              var smallerScale = 0.6;
              this.node.getChildByPath("Background").setScale(new Vec3(smallerScale, smallerScale, smallerScale));
              var loadingBarPos = this.node.getChildByPath("LoadingBar").position.clone();
              this.node.getChildByPath("LoadingBar").setPosition(new Vec3(loadingBarPos.x, -85, loadingBarPos.z));
              var textPos = this.node.getChildByPath("text_loading").position.clone();
              this.node.getChildByPath("text_loading").setPosition(new Vec3(textPos.x, -180, textPos.z));
            }
  
            console.log('test', this.node.getChildByPath("LoadingBar"));
            setDisplayStats(false);
            AdsManager.preloadRewardedAds();
          };
  
          _proto.start = function start() {};
  
          _proto.updateLoadingBar = function updateLoadingBar(progress) {
            if (screen.windowSize.width < 900) {
              var loadingBarPos = this.node.getChildByPath("LoadingBar").position.clone();
              this.node.getChildByPath("LoadingBar").setPosition(new Vec3(loadingBarPos.x, -225, loadingBarPos.z));
            }
  
            this.node.getChildByPath("LoadingBar").getComponent(ProgressBar).progress = progress;
          };
  
          return SceneLoading;
        }(Component), _defineProperty(_class2, "Instance", void 0), _temp)) || _class));
  
        cclegacy._RF.pop();
      }
    };
  });
  
  System.register("chunks:///_virtual/SceneDeflectOffer.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './SFXManager.ts', './SceneGameplay.ts', './ScenePause.ts', './GameController.ts', './AdsManager.ts'], function (exports) {
    'use strict';
  
    var _defineProperty, _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Animation, Component, SFXManager, SceneGameplay, ScenePause, GameController, AdsManager;
  
    return {
      setters: [function (module) {
        _defineProperty = module.defineProperty;
        _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
        _inheritsLoose = module.inheritsLoose;
        _initializerDefineProperty = module.initializerDefineProperty;
        _assertThisInitialized = module.assertThisInitialized;
        _createClass = module.createClass;
      }, function (module) {
        cclegacy = module.cclegacy;
        _decorator = module._decorator;
        Animation = module.Animation;
        Component = module.Component;
      }, function (module) {
        SFXManager = module.SFXManager;
      }, function (module) {
        SceneGameplay = module.SceneGameplay;
      }, function (module) {
        ScenePause = module.ScenePause;
      }, function (module) {
        GameController = module.GameController;
      }, function (module) {
        AdsManager = module.AdsManager;
      }],
      execute: function () {
        var _dec, _dec2, _class, _class2, _descriptor, _class3, _temp;
  
        cclegacy._RF.push({}, "cbc993uy0RGNZvVly9bTotR", "SceneDeflectOffer", undefined);
  
        var ccclass = _decorator.ccclass,
            property = _decorator.property;
        var SceneDeflectOffer = exports('SceneDeflectOffer', (_dec = ccclass('SceneDeflectOffer'), _dec2 = property({
          type: String,
          displayName: "Power up type"
        }), _dec(_class = (_class2 = (_temp = _class3 = /*#__PURE__*/function (_Component) {
          _inheritsLoose(SceneDeflectOffer, _Component);
  
          function SceneDeflectOffer() {
            var _this;
  
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
  
            _this = _Component.call.apply(_Component, [this].concat(args)) || this;
  
            _initializerDefineProperty(_assertThisInitialized(_this), "powerUpType", _descriptor, _assertThisInitialized(_this));
  
            _defineProperty(_assertThisInitialized(_this), "_holdInput", false);
  
            return _this;
          }
  
          var _proto = SceneDeflectOffer.prototype;
  
          _proto.onEnable = function onEnable() {
            this.holdInput = false;
          };
  
          _proto.start = function start() {};
  
          _proto.btnClaimRewardClicked = function btnClaimRewardClicked() {
            var _this2 = this;
  
            if (this.holdInput) return;
            this.holdInput = true;
  
            if (SceneDeflectOffer.FROM_SELECT_MODE_SCREEN) {
              SceneDeflectOffer.FROM_SELECT_MODE_SCREEN = false;
              var containerDeflectAnimation = this.getComponent(Animation);
              containerDeflectAnimation.play("deflectClaim_out");
              containerDeflectAnimation.on(Animation.EventType.FINISHED, function () {
                _this2.holdInput = false;
                _this2.node.active = false;
                GameController.getInstance().setHoldInput(false);
              }, this, true);
            } else {
              var me = this;
  
              var _containerDeflectAnimation = this.getComponent(Animation);
  
              _containerDeflectAnimation.play("deflectClaim_out");
  
              _containerDeflectAnimation.on(Animation.EventType.FINISHED, function () {
                me.holdInput = false;
                SFXManager.getInstance().play(SFXManager.SFX_GAMESTART);
                if (me.powerUpType == "deflect") GameController.getInstance().useDeflectPowerUp();else if (me.powerUpType == "berryblast") GameController.getInstance().useBerryBlastPowerUp();else if (me.powerUpType == "peachtime") GameController.getInstance().usePeachTimePowerUp();
                var anim = GameController.Instance.gameplayScreen.getComponent(Animation);
                anim.play("animation_ready_go");
                anim.on(Animation.EventType.FINISHED, function () {
                  GameController.getInstance().setGameState(GameController.STATE_GAME_PLAYING);
                  ScenePause.getInstance().showButtonPause();
                }, _this2, true);
                _this2.node.active = false;
              }, this, true);
            }
          };
  
          _proto.btnFreeWatchAdClicked = function btnFreeWatchAdClicked() {
            if (this.holdInput) return;
            this.holdInput = true;
            var me = this;
            AdsManager.showRewardedAds(function () {
              var _this3 = this;
  
              if (me.powerUpType == "deflect") {
                GameController.getInstance().gameData.d = 1;
                GameController.getInstance().useDeflect = true;
              } else if (me.powerUpType == "berryblast") ;else if (me.powerUpType == "peachtime") ;
  
              var containerDeflectAnimation = me.getComponent(Animation);
              containerDeflectAnimation.play("deflectOffer_out");
              containerDeflectAnimation.on(Animation.EventType.FINISHED, function () {
                containerDeflectAnimation.play("deflectClaim_in");
                containerDeflectAnimation.on(Animation.EventType.FINISHED, function () {
                  me.holdInput = false;
                  containerDeflectAnimation.play("deflectClaim_idle");
                }, _this3, true);
              }, this, true);
            }, function () {
              me.skipDeflect();
            });
          };
  
          _proto.btnSkipClicked = function btnSkipClicked() {
            if (this.holdInput) return;
            this.skipDeflect();
          };
  
          _proto.skipDeflect = function skipDeflect() {
            var _this4 = this;
  
            this.holdInput = true;
            var me = this;
            var containerDeflectAnimation = this.getComponent(Animation);
            containerDeflectAnimation.play("deflectOffer_out");
            containerDeflectAnimation.on(Animation.EventType.FINISHED, function () {
              me.holdInput = false;
              SFXManager.getInstance().play(SFXManager.SFX_GAMESTART);
              if (me.powerUpType == "deflect") SceneGameplay.getInstance().showIconDeflect(false);else if (me.powerUpType == "berryblast") SceneGameplay.getInstance().showIconBerry(false);else if (me.powerUpType == "peachtime") SceneGameplay.getInstance().showIconPeachTime(false);
              var anim = GameController.Instance.gameplayScreen.getComponent(Animation);
              anim.play("animation_ready_go");
              anim.on(Animation.EventType.FINISHED, function () {
                GameController.getInstance().setGameState(GameController.STATE_GAME_PLAYING);
                ScenePause.getInstance().showButtonPause();
              }, _this4, true);
            }, this, true);
          };
  
          _createClass(SceneDeflectOffer, [{
            key: "holdInput",
            get: function get() {
              return this._holdInput;
            },
            set: function set(value) {
              this._holdInput = value;
            }
          }]);
  
          return SceneDeflectOffer;
        }(Component), _defineProperty(_class3, "FROM_SELECT_MODE_SCREEN", false), _temp), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "powerUpType", [_dec2], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        }), _class2)) || _class));
  
        cclegacy._RF.pop();
      }
    };
  });
  
  System.register("chunks:///_virtual/GameController.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './BGMManager.ts', './BladeData.ts', './SFXManager.ts', './BlitzManager.ts', './MissionManager.ts', './Data.ts', './Fruit.ts', './FruitPhysics.ts', './LevelManager.ts', './SceneHomescreen.ts', './PopupMission.ts', './UIRing.ts', './SceneSelectMode.ts', './SceneGameplay.ts', './ScenePause.ts', './SenseiSwagScene.ts', './UIMissionTutorial.ts', './SceneDeflectOffer.ts', './ControllerBlade.ts', './PreloadScreen.ts', './PopupLevelUp.ts', './ScenePopupBonusArcade.ts', './ScenePopupPurchasePU.ts', './TextCombo.ts', './TextCritical.ts', './TextDeflect.ts', './SceneResultScore.ts', './ArcadeBonusBoardController.ts', './FruitManager.ts', './AdsManager.ts'], function (exports) {
    'use strict';
  
    var _defineProperty, _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, SpriteFrame, Node, Prefab, Material, Label, Vec3, resources, instantiate, UITransform, Sprite, Animation, ParticleSystem, tween, randomRangeInt, UIOpacity, lerp, Vec4, Color, LabelOutline, Button, assetManager, Texture2D, Component, BGMManager, BladeData, SFXManager, BlitzManager, MissionManager, Data, Fruit, FruitPhysics, LevelManager, SceneHomescreen, PopupMission, UIRing, SceneSelectMode, SceneGameplay, ScenePause, SenseiSwagScene, UIMissionTutorial, SceneDeflectOffer, ControllerBlade, PreloadScreen, PopupLevelUp, ScenePopupBonusArcade, ScenePopupPurchasePU, TextCombo, TextCritical, TextDeflect, SceneResultScore, ArcadeBonusBoardController, FruitManager, AdsManager;
  
    return {
      setters: [function (module) {
        _defineProperty = module.defineProperty;
        _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
        _inheritsLoose = module.inheritsLoose;
        _initializerDefineProperty = module.initializerDefineProperty;
        _assertThisInitialized = module.assertThisInitialized;
        _createClass = module.createClass;
      }, function (module) {
        cclegacy = module.cclegacy;
        _decorator = module._decorator;
        SpriteFrame = module.SpriteFrame;
        Node = module.Node;
        Prefab = module.Prefab;
        Material = module.Material;
        Label = module.Label;
        Vec3 = module.Vec3;
        resources = module.resources;
        instantiate = module.instantiate;
        UITransform = module.UITransform;
        Sprite = module.Sprite;
        Animation = module.Animation;
        ParticleSystem = module.ParticleSystem;
        tween = module.tween;
        randomRangeInt = module.randomRangeInt;
        UIOpacity = module.UIOpacity;
        lerp = module.lerp;
        Vec4 = module.Vec4;
        Color = module.Color;
        LabelOutline = module.LabelOutline;
        Button = module.Button;
        assetManager = module.assetManager;
        Texture2D = module.Texture2D;
        Component = module.Component;
      }, function (module) {
        BGMManager = module.BGMManager;
      }, function (module) {
        BladeData = module.BladeData;
      }, function (module) {
        SFXManager = module.SFXManager;
      }, function (module) {
        BlitzManager = module.BlitzManager;
      }, function (module) {
        MissionManager = module.MissionManager;
      }, function (module) {
        Data = module.Data;
      }, function (module) {
        Fruit = module.Fruit;
      }, function (module) {
        FruitPhysics = module.FruitPhysics;
      }, function (module) {
        LevelManager = module.LevelManager;
      }, function (module) {
        SceneHomescreen = module.SceneHomescreen;
      }, function (module) {
        PopupMission = module.PopupMission;
      }, function (module) {
        UIRing = module.UIRing;
      }, function (module) {
        SceneSelectMode = module.SceneSelectMode;
      }, function (module) {
        SceneGameplay = module.SceneGameplay;
      }, function (module) {
        ScenePause = module.ScenePause;
      }, function (module) {
        SenseiSwagScene = module.SenseiSwagScene;
      }, function (module) {
        UIMissionTutorial = module.UIMissionTutorial;
      }, function (module) {
        SceneDeflectOffer = module.SceneDeflectOffer;
      }, function (module) {
        ControllerBlade = module.ControllerBlade;
      }, function (module) {
        PreloadScreen = module.PreloadScreen;
      }, function (module) {
        PopupLevelUp = module.PopupLevelUp;
      }, function (module) {
        ScenePopupBonusArcade = module.ScenePopupBonusArcade;
      }, function (module) {
        ScenePopupPurchasePU = module.ScenePopupPurchasePU;
      }, function (module) {
        TextCombo = module.TextCombo;
      }, function (module) {
        TextCritical = module.TextCritical;
      }, function (module) {
        TextDeflect = module.TextDeflect;
      }, function (module) {
        SceneResultScore = module.SceneResultScore;
      }, function (module) {
        ArcadeBonusBoardController = module.ArcadeBonusBoardController;
      }, function (module) {
        FruitManager = module.FruitManager;
      }, function (module) {
        AdsManager = module.AdsManager;
      }],
      execute: function () {
        var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _class3, _temp;
  
        cclegacy._RF.push({}, "cc64cOlEZxLkafi0Pm+9Hpt", "GameController", undefined);
  
        var ccclass = _decorator.ccclass,
            property = _decorator.property;
        var GameController = exports('GameController', (_dec = ccclass('GameController'), _dec2 = property({
          type: [SpriteFrame]
        }), _dec3 = property({
          type: Node,
          displayName: "Blade Canvas"
        }), _dec4 = property({
          type: Node,
          displayName: "Main Canvas for text gameplay behind 3D"
        }), _dec5 = property({
          type: Node,
          displayName: "Main Canvas for text gameplay"
        }), _dec6 = property({
          type: Node,
          displayName: "Main Canvas2"
        }), _dec7 = property({
          type: Node,
          displayName: "Main Canvas"
        }), _dec8 = property({
          type: Node,
          displayName: "Main Canvas Overlay"
        }), _dec9 = property({
          type: Node,
          displayName: "Canvas Screenshot"
        }), _dec10 = property({
          type: Node,
          displayName: "Main Screen 3D"
        }), _dec11 = property({
          type: Node,
          displayName: "Camera"
        }), _dec12 = property({
          type: Node
        }), _dec13 = property({
          type: Node
        }), _dec14 = property({
          type: Prefab,
          displayName: "Arcade top label"
        }), _dec15 = property({
          type: Material
        }), _dec16 = property({
          type: Material
        }), _dec17 = property({
          type: Material
        }), _dec18 = property({
          type: Material
        }), _dec19 = property({
          type: Label
        }), _dec(_class = (_class2 = (_temp = _class3 = /*#__PURE__*/function (_Component) {
          _inheritsLoose(GameController, _Component);
  
          function GameController() {
            var _this;
  
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
  
            _this = _Component.call.apply(_Component, [this].concat(args)) || this;
  
            _initializerDefineProperty(_assertThisInitialized(_this), "iconFruitFact", _descriptor, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "canvasBlade", _descriptor2, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "canvasForTextBehind3D", _descriptor3, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "canvasForGameplayText", _descriptor4, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "mainCanvas2", _descriptor5, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "mainCanvas", _descriptor6, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "mainCanvasOverlay", _descriptor7, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "canvasScreenshot", _descriptor8, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "mainScreen", _descriptor9, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "camera", _descriptor10, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "loadingScreen", _descriptor11, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "homescreen", _descriptor12, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "prefabArcadeTopLabel", _descriptor13, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "matBestScoreBiasa", _descriptor14, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "matBestScoreNew", _descriptor15, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "matZenTimerNormal", _descriptor16, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "matZenTimerTimeOut", _descriptor17, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "labelLog", _descriptor18, _assertThisInitialized(_this));
  
            _defineProperty(_assertThisInitialized(_this), "pomegranateTween", null);
  
            _defineProperty(_assertThisInitialized(_this), "screenState", 0);
  
            _defineProperty(_assertThisInitialized(_this), "gameState", 0);
  
            _defineProperty(_assertThisInitialized(_this), "freezeArcadeTopLabel", null);
  
            _defineProperty(_assertThisInitialized(_this), "frenzyArcadeTopLabel", null);
  
            _defineProperty(_assertThisInitialized(_this), "doubleArcadeTopLabel", null);
  
            _defineProperty(_assertThisInitialized(_this), "zenTimer", 0);
  
            _defineProperty(_assertThisInitialized(_this), "arcadeTimer", 0);
  
            _defineProperty(_assertThisInitialized(_this), "gameData", {});
  
            _defineProperty(_assertThisInitialized(_this), "timerGameplay", 0);
  
            _defineProperty(_assertThisInitialized(_this), "criticalCount", 0);
  
            _defineProperty(_assertThisInitialized(_this), "comboCount", 0);
  
            _defineProperty(_assertThisInitialized(_this), "missedFruitCount", 0);
  
            _defineProperty(_assertThisInitialized(_this), "berryBlastCount", 0);
  
            _defineProperty(_assertThisInitialized(_this), "peachyCount", 0);
  
            _defineProperty(_assertThisInitialized(_this), "pomegranateCount", 0);
  
            _defineProperty(_assertThisInitialized(_this), "useDeflect", false);
  
            _defineProperty(_assertThisInitialized(_this), "useContinue", false);
  
            _defineProperty(_assertThisInitialized(_this), "bananaSpecialCount", 0);
  
            _defineProperty(_assertThisInitialized(_this), "blitzCount", 0);
  
            _defineProperty(_assertThisInitialized(_this), "arcadeBombCount", 0);
  
            _defineProperty(_assertThisInitialized(_this), "spawnedPomegranateForArcade", false);
  
            _defineProperty(_assertThisInitialized(_this), "targetRevive", 100);
  
            _defineProperty(_assertThisInitialized(_this), "havePlayRingOutArcade", false);
  
            _defineProperty(_assertThisInitialized(_this), "_countNotSendCustomUpdate", 0);
  
            _defineProperty(_assertThisInitialized(_this), "_sessionRank", -1);
  
            _defineProperty(_assertThisInitialized(_this), "_sessionBestScore", 0);
  
            _defineProperty(_assertThisInitialized(_this), "_scoreArcadeToDouble", 0);
  
            _defineProperty(_assertThisInitialized(_this), "_score", 0);
  
            _defineProperty(_assertThisInitialized(_this), "_holdInput", false);
  
            _defineProperty(_assertThisInitialized(_this), "lastFruitSlashedPosition", new Vec3(0, 0, 0));
  
            _defineProperty(_assertThisInitialized(_this), "_dieFromBomb", false);
  
            _defineProperty(_assertThisInitialized(_this), "_canRevive", true);
  
            _defineProperty(_assertThisInitialized(_this), "breakCombo", false);
  
            _defineProperty(_assertThisInitialized(_this), "combo", 0);
  
            _defineProperty(_assertThisInitialized(_this), "timerCombo", 0);
  
            _defineProperty(_assertThisInitialized(_this), "health", 3);
  
            _defineProperty(_assertThisInitialized(_this), "listUIFruit", []);
  
            _defineProperty(_assertThisInitialized(_this), "_deflectCounter", 0);
  
            _defineProperty(_assertThisInitialized(_this), "counterSFXTickTock", 0);
  
            _defineProperty(_assertThisInitialized(_this), "timerSFXTickTock", 0);
  
            _defineProperty(_assertThisInitialized(_this), "backgroundChanged", false);
  
            _defineProperty(_assertThisInitialized(_this), "startCalled", false);
  
            _defineProperty(_assertThisInitialized(_this), "gameplayTimer", 0);
  
            _defineProperty(_assertThisInitialized(_this), "senseiSwagScreen", null);
  
            _defineProperty(_assertThisInitialized(_this), "settingScreen", null);
  
            _defineProperty(_assertThisInitialized(_this), "languageScreen", null);
  
            _defineProperty(_assertThisInitialized(_this), "finishRoundScreen", null);
  
            _defineProperty(_assertThisInitialized(_this), "selectRoundScreen", null);
  
            _defineProperty(_assertThisInitialized(_this), "selectModeScreen", null);
  
            _defineProperty(_assertThisInitialized(_this), "resultScreen", null);
  
            _defineProperty(_assertThisInitialized(_this), "gameplayScreen", null);
  
            _defineProperty(_assertThisInitialized(_this), "resultScore", null);
  
            _defineProperty(_assertThisInitialized(_this), "contPeachy", null);
  
            _defineProperty(_assertThisInitialized(_this), "contDeflect", null);
  
            _defineProperty(_assertThisInitialized(_this), "contBerryBlast", null);
  
            _defineProperty(_assertThisInitialized(_this), "particleExpUp", null);
  
            _defineProperty(_assertThisInitialized(_this), "particleJuiceStarfruit", null);
  
            _defineProperty(_assertThisInitialized(_this), "particleLifeUp", null);
  
            _defineProperty(_assertThisInitialized(_this), "particlePUGain", null);
  
            _defineProperty(_assertThisInitialized(_this), "particleTrailExpGain", null);
  
            _defineProperty(_assertThisInitialized(_this), "particleTrailStarfruit", null);
  
            _defineProperty(_assertThisInitialized(_this), "particleUnlockItem", null);
  
            _defineProperty(_assertThisInitialized(_this), "listPlayerGameplay", []);
  
            _defineProperty(_assertThisInitialized(_this), "totalPlayerInContext", 0);
  
            _defineProperty(_assertThisInitialized(_this), "totalPlayerFetchPerCalled", 100);
  
            _defineProperty(_assertThisInitialized(_this), "canPopulateListPlayerGameplay", true);
  
            return _this;
          }
  
          var _proto = GameController.prototype;
  
          _proto.getLastFruitSlashedPosition = function getLastFruitSlashedPosition() {
            return this.lastFruitSlashedPosition;
          };
  
          _proto.setLastFruitSlashedPosition = function setLastFruitSlashedPosition(value) {
            if (this.lastFruitSlashedPosition.x != 0 || this.lastFruitSlashedPosition.y != 0 || this.lastFruitSlashedPosition.z != 0) {
              var angle = GameController.rad2deg(Vec3.angle(this.lastFruitSlashedPosition, value));
              this.breakCombo = angle > 60 || angle < -60;
            }
  
            this.lastFruitSlashedPosition = value;
          };
  
          GameController.getInstance = function getInstance() {
            return GameController.Instance;
          };
  
          _proto.onLoad = function onLoad() {
            var _this2 = this;
  
            GameController.Instance = this;
            resources.load("prefab screen/SFXManager", Prefab, function (err, prefab) {
              var node = instantiate(prefab);
              node.setParent(_this2.node.parent);
            });
            this.changeBackground(Data.DATA_COSTUME_BACKGROUND[Data.getInstance().bgUsed].background, function () {
              _this2.loadingScreen.active = false;
              _this2.backgroundChanged = true;
              if (_this2.startCalled) _this2.onStarted();
            });
            this.changeBlade(Data.DATA_COSTUME_BLADE[Data.getInstance().bladeUsed].prefab);
            var bgWidth = this.mainCanvas2.getChildByPath("DojoBG").getComponent(UITransform).width;
            var bgHeight = this.mainCanvas2.getChildByPath("DojoBG").getComponent(UITransform).height;
            var canvasWidth = this.mainCanvas2.getComponent(UITransform).width;
            var canvasHeight = this.mainCanvas2.getComponent(UITransform).height;
            var diffWidth = bgWidth / canvasWidth;
            var diffHeight = bgHeight / canvasHeight;
  
            if (diffWidth < 1 || diffHeight < 1) {
              var minDiff = Math.min(diffWidth, diffHeight);
  
              if (diffWidth < 1 && minDiff == diffWidth) {
                var newScale = canvasWidth / bgWidth;
                this.mainCanvas2.getChildByName("DojoBG").setScale(new Vec3(newScale, newScale, newScale));
              } else if (diffHeight < 1 && minDiff == diffHeight) {
                var _newScale = canvasHeight / bgHeight;
  
                this.mainCanvas2.getChildByName("DojoBG").setScale(new Vec3(_newScale, _newScale, _newScale));
              }
            }
          };
  
          _proto.start = function start() {
            this.freezeArcadeTopLabel = instantiate(this.prefabArcadeTopLabel);
            this.frenzyArcadeTopLabel = instantiate(this.prefabArcadeTopLabel);
            this.doubleArcadeTopLabel = instantiate(this.prefabArcadeTopLabel);
            this.preloadIconSenseiSwag();
            this.startCalled = true;
            this.loadParticle();
            GameController.saveData();
  
            if (this.backgroundChanged) {
              this.onStarted();
            }
          };
  
          _proto.getRankDegree = function getRankDegree(rank) {
            var iRank = parseInt(rank) % 100;
  
            if (iRank < 10 || iRank > 20) {
              var lastNum = iRank % 10;
  
              if (lastNum == 1) {
                return "st";
              } else if (lastNum == 2) {
                return "nd";
              } else if (lastNum == 3) {
                return "rd";
              }
            }
  
            return "th";
          };
  
          _proto.changeBackground = function changeBackground(spriteFramePath, onBGChanged) {
            var _this3 = this;
  
            if (onBGChanged === void 0) {
              onBGChanged = function onBGChanged() {};
            }
  
            resources.load(spriteFramePath, SpriteFrame, function (err, spriteFrame) {
              _this3.mainCanvas2.getChildByPath("DojoBG").getComponent(Sprite).spriteFrame = spriteFrame;
              onBGChanged();
            });
          };
  
          _proto.changeBlade = function changeBlade(prefabPath) {
            resources.load(prefabPath, Prefab, function (err, thePrefab) {
              var currentTip = ControllerBlade.Instance.bladeTip.getChildByName("BladeTip");
              var currentParticle = ControllerBlade.Instance.bladeTip.getChildByName("Particle0");
              var currentTrail = ControllerBlade.Instance.trailGraphics;
              var newTip = instantiate(thePrefab);
              newTip.setParent(currentTip.parent, false);
              newTip.name = "BladeTip";
              currentTip.name = "RemovedBlade";
              currentTip.destroy();
  
              if (currentParticle) {
                currentParticle.name = "RemovedParticle";
                currentParticle.destroy();
              }
  
              var newTrail = instantiate(newTip.getComponent(BladeData).trailPrefab);
              ControllerBlade.Instance.trailGraphics = newTrail;
              newTrail.parent = currentTrail.parent;
              newTrail.position = currentTrail.position;
              currentTrail.destroy();
              var particlesData = newTip.getComponent(BladeData).particlesPrefab;
  
              for (var i = 0; i < particlesData.length; i++) {
                var particles = instantiate(particlesData[i]);
                particles.parent = newTip.parent;
                particles.name = "Particle" + i;
              }
  
              ControllerBlade.Instance.resetBladeData();
            });
          };
  
          _proto.preloadIconSenseiSwag = function preloadIconSenseiSwag() {
            for (var i = 0; i < Data.DATA_COSTUME_BLADE.length; i++) {
              var data = Data.DATA_COSTUME_BLADE[i];
              resources.preload(data.icon, SpriteFrame);
            }
  
            for (var _i = 0; _i < Data.DATA_COSTUME_BACKGROUND.length; _i++) {
              var _data = Data.DATA_COSTUME_BACKGROUND[_i];
              resources.preload(_data.icon, SpriteFrame);
            }
          };
  
          _proto.loadParticle = function loadParticle() {
            var _this4 = this;
  
            resources.load("particle/particle_EXPUp", Prefab, function (err, prefab) {
              var node = instantiate(prefab);
              node.setParent(_this4.node.parent);
              _this4.particleExpUp = node;
            });
            resources.load("particle/particle_trailEXPGain", Prefab, function (err, prefab) {
              var node = instantiate(prefab);
              node.setParent(_this4.node.parent);
              _this4.particleTrailExpGain = node;
            });
            resources.load("particle/particle_lifeUp", Prefab, function (err, prefab) {
              var node = instantiate(prefab);
              node.setParent(_this4.node.parent);
              _this4.particleLifeUp = node;
            });
            resources.load("particle/particle_PUgain", Prefab, function (err, prefab) {
              var node = instantiate(prefab);
              node.setParent(_this4.node.parent);
              _this4.particlePUGain = node;
            });
            resources.load("particle/particle_trailStarfruit", Prefab, function (err, prefab) {
              var node = instantiate(prefab);
              node.setParent(_this4.node.parent);
              _this4.particleTrailStarfruit = node;
            });
          };
  
          _proto.onStarted = function onStarted() {
            if (GameController.TUTORIAL_STATE == 1) {
              this.setScreenState(GameController.SCREEN_STATE_GAMEPLAY);
            } else {
              this.setScreenState(GameController.SCREEN_STATE_HOMESCREEN);
            }
          };
  
          _proto.update = function update(dt) {
            if (this.haveChangeDay()) {
              GameController.last_played = new Date().getTime();
              MissionManager.getInstance().generateMission();
              GameController.saveData();
  
              if (this.gameState == GameController.STATE_GAME_PAUSE) {
                ScenePause.getInstance().refreshLabelMisi();
              } else if (GameController.getInstance().mainCanvasOverlay.getChildByPath("container_missionsPopup").active) {
                var contMissionPopup = GameController.getInstance().mainCanvasOverlay.getChildByPath("container_missionsPopup");
                contMissionPopup.getComponent(PopupMission).refreshMissionUI();
              }
            }
  
            if (this.screenState == GameController.SCREEN_STATE_GAMEPLAY) {
              this.timerGameplay += dt;
  
              if (this.gameState == GameController.STATE_GAME_PLAYING) {
                if (this.timerSFXTickTock > 0) {
                  this.timerSFXTickTock -= dt;
  
                  if (this.timerSFXTickTock <= 0) {
                    this.timerSFXTickTock = 0;
                    this.tryPlaySFXTickTock(this.counterSFXTickTock + 1);
                  }
                }
  
                this.gameplayTimer += dt;
  
                if (GameController.gameMode == GameController.MODE_ZEN) {
                  GameController.getInstance().updateZenTimer(this.zenTimer - dt);
  
                  if (this.zenTimer < 0) {
                    SFXManager.getInstance().play(SFXManager.SFX_TIME_RING_OUT);
                    GameController.getInstance().setGameState(GameController.STATE_GAME_LOSE);
  
                    if (FruitManager.getInstance().activeObject.length == 0) {
                      if (GameController.getInstance().canRevive) {
                        GameController.getInstance().showOfferContinue();
                        ScenePause.getInstance().hideButtonPause();
                      } else {
                        GameController.getInstance().showGameOver(function () {
                          AdsManager.showInterstitialAds(function () {
                            if (GameController.getInstance().getScreenState() != GameController.SCREEN_STATE_RESULT_REWARD) GameController.getInstance().setScreenState(GameController.SCREEN_STATE_RESULT_REWARD);
                          });
                        });
                      }
                    }
                  }
                } else if (GameController.gameMode == GameController.MODE_ARCADE) {
                  if (FruitManager.getInstance().freezeDuration <= 0) GameController.getInstance().updateArcadeTimer(this.arcadeTimer - dt);
  
                  if (this.arcadeTimer <= 0) {
                    if (!this.havePlayRingOutArcade) {
                      SFXManager.getInstance().play(SFXManager.SFX_TIME_RING_OUT);
                      this.havePlayRingOutArcade = true;
                    }
  
                    if (FruitManager.getInstance().activeObject.length == 0) {
                      if (FruitManager.getInstance().freezeDuration > 0) FruitManager.getInstance().deactivateArcadeFreeze();
                      if (FruitManager.getInstance().frenzyDuration > 0) FruitManager.getInstance().deactivateArcadeFrenzy();
                      if (FruitManager.getInstance().doublePointDuration > 0) FruitManager.getInstance().deactivateArcadeDouble();
  
                      if (!this.spawnedPomegranateForArcade) {
                        this.spawnedPomegranateForArcade = true;
                        FruitManager.getInstance().spawnFruit("Pomegranate", 0, {
                          vx: 0,
                          vy: 10
                        });
                      } else {
                        ScenePause.getInstance().holdButtonPause = true;
                        ScenePause.getInstance().hideButtonPause();
                        GameController.getInstance().setGameState(GameController.STATE_GAME_LOSE);
                        GameController.getInstance().scheduleOnce(function () {
                          var popup = GameController.Instance.gameplayScreen.getChildByPath("cont_inGameBonusPopup").getComponent(ScenePopupBonusArcade);
                          popup.show(function () {
                            popup.tryShowBonus(1);
                          }, function () {
                            var callback = function callback() {
                              GameController.getInstance().exitScreen(function () {
                                AdsManager.showInterstitialAds(function () {
                                  if (GameController.getInstance().getScreenState() != GameController.SCREEN_STATE_RESULT_REWARD) GameController.getInstance().setScreenState(GameController.SCREEN_STATE_RESULT_REWARD);
                                });
                              });
                            };
  
                            callback();
                          });
                        }, 2);
                      }
                    }
                  }
                }
  
                if (this.timerCombo > 0) {
                  this.timerCombo -= dt;
  
                  if (this.timerCombo <= 0 || this.breakCombo) {
                    this.breakCombo = false;
                    this.timerCombo = 0;
                    if (this.combo >= 3) this.showCombo();
                    this.combo = 0;
                  }
                }
              }
            }
          };
  
          _proto.showPopUpLevelUp = function showPopUpLevelUp(level, onClosed) {
            GameController.getInstance().setHoldInput(true);
            SFXManager.getInstance().play(SFXManager.SFX_LEVEL_UP_BURST);
            this.mainCanvasOverlay.getChildByPath("cont_LevelUpPopup").active = true;
            this.mainCanvasOverlay.getChildByPath("cont_LevelUpPopup").getComponent(Animation).play("popupLevelUp_in");
            this.mainCanvasOverlay.getChildByPath("cont_LevelUpPopup").getComponent(PopupLevelUp).refresh(level, onClosed);
            this.scheduleOnce(function () {
              SFXManager.getInstance().play(SFXManager.SFX_LEVEL_UP_UNLOCK);
            }, 2.58);
          };
  
          _proto.playParticleAndChild = function playParticleAndChild(node) {
            node.getComponent(ParticleSystem).play();
  
            for (var i = 0; i < node.children.length; i++) {
              node.children[i].getComponent(ParticleSystem).play();
            }
          };
  
          _proto.stopParticleAndChild = function stopParticleAndChild(node) {
            node.getComponent(ParticleSystem).stop();
  
            for (var i = 0; i < node.children.length; i++) {
              node.children[i].getComponent(ParticleSystem).stop();
            }
          };
  
          _proto.playExpIncrease = function playExpIncrease(from, target, XPBarBack, XPBarFill, XPBarFill_transparant, curDataLevel, totalExpReceived, textLevel, playShuriken, onFinish) {
            if (playShuriken === void 0) {
              playShuriken = "";
            }
  
            if (onFinish === void 0) {
              onFinish = function onFinish() {};
            }
  
            GameController.getInstance().setHoldInput(true);
            var width = XPBarBack.getComponent(UITransform).width;
            XPBarFill.getComponent(UITransform).width = width * curDataLevel.curExp / curDataLevel.totalExpToLevelUp;
            XPBarFill_transparant.getComponent(UITransform).width = width * curDataLevel.curExp / curDataLevel.totalExpToLevelUp;
            textLevel.getComponent(Label).string = "" + curDataLevel.level;
            var expLeftForNextLevel = curDataLevel.totalExpToLevelUp - curDataLevel.curExp;
            var curExp = curDataLevel.curExp + totalExpReceived;
            var expPercentage = Math.min(1, curExp / curDataLevel.totalExpToLevelUp);
            var trailExp = GameController.Instance.particleTrailExpGain;
            var particleExpUp = GameController.Instance.particleExpUp;
            GameController.getInstance().stopParticleAndChild(trailExp);
            GameController.getInstance().stopParticleAndChild(particleExpUp);
            var defaultHeight = XPBarBack.getComponent(UITransform).height;
            GameController.getInstance().playParticleAndChild(trailExp);
            trailExp.setWorldPosition(Data.getInstance().convert2DPosTo3D(from.worldPosition));
            var targetPos = target.worldPosition;
            tween(trailExp).to(1, {
              worldPosition: Data.getInstance().convert2DPosTo3D(targetPos)
            }).call(function () {
              GameController.getInstance().stopParticleAndChild(trailExp);
              tween(XPBarBack.getComponent(UITransform)).delay(0.25).to(0.25, {
                height: 40
              }).start();
              tween(XPBarFill.getComponent(UITransform)).delay(0.25).to(0.25, {
                height: 40
              }).start();
              tween(XPBarFill_transparant.getComponent(UITransform)).delay(0.25).to(0.25, {
                height: 40
              }).call(function () {
                tween(XPBarFill_transparant.getComponent(UITransform)).to(0.5, {
                  width: width * expPercentage
                }).call(function () {
                  if (expPercentage >= 1) SFXManager.getInstance().play(SFXManager.SFX_XP_LAUNCH);
                  GameController.getInstance().stopParticleAndChild(particleExpUp);
  
                  var startFillBarExp = function startFillBarExp() {
                    tween(XPBarFill.getComponent(UITransform)).to(playShuriken != "" ? 1.5 : 0.5, {
                      width: width * expPercentage
                    }).call(function () {
                      tween(XPBarBack.getComponent(UITransform)).to(0.25, {
                        height: defaultHeight
                      }).start();
                      tween(XPBarFill.getComponent(UITransform)).to(0.25, {
                        height: defaultHeight
                      }).start();
                      tween(XPBarFill_transparant.getComponent(UITransform)).to(0.25, {
                        height: defaultHeight
                      }).call(function () {
                        if (expPercentage >= 1) {
                          totalExpReceived = totalExpReceived - expLeftForNextLevel;
                          Data.getInstance().totalExp += expLeftForNextLevel;
                          curDataLevel = LevelManager.getInstance().getDataLevelFromTotalExp();
                          GameController.getInstance().showPopUpLevelUp(curDataLevel.level, function () {
                            if (curDataLevel.level < LevelManager.getInstance().levelCap && totalExpReceived > 0) {
                              GameController.getInstance().playExpIncrease(from, target, XPBarBack, XPBarFill, XPBarFill_transparant, curDataLevel, totalExpReceived, textLevel, playShuriken, onFinish);
                            } else {
                              GameController.getInstance().setHoldInput(false);
  
                              if (curDataLevel.level >= LevelManager.getInstance().levelCap) {
                                XPBarFill.getComponent(UITransform).width = width * curDataLevel.curExp / curDataLevel.totalExpToLevelUp;
                                XPBarFill_transparant.getComponent(UITransform).width = width * curDataLevel.curExp / curDataLevel.totalExpToLevelUp;
                                textLevel.getComponent(Label).string = "" + curDataLevel.level;
                              }
                            }
                          });
                        } else {
                          GameController.getInstance().setHoldInput(false);
                          Data.getInstance().totalExp += totalExpReceived;
                          curDataLevel = LevelManager.getInstance().getDataLevelFromTotalExp();
                          XPBarFill.getComponent(UITransform).width = width * curDataLevel.curExp / curDataLevel.totalExpToLevelUp;
                          XPBarFill_transparant.getComponent(UITransform).width = width * curDataLevel.curExp / curDataLevel.totalExpToLevelUp;
                          textLevel.getComponent(Label).string = "" + curDataLevel.level;
                          onFinish();
                        }
  
                        GameController.saveData();
                      }).start();
                    }).start();
                  };
  
                  if (playShuriken != "") {
                    if (playShuriken == "popup_mission") {
                      var contMissionPopup = GameController.getInstance().mainCanvasOverlay.getChildByPath("container_missionsPopup");
                      contMissionPopup.getChildByPath("cont_Exp_Starfruit").getComponent(Animation).play("shurikenExp_anim");
                      GameController.getInstance().scheduleOnce(function () {
                        startFillBarExp();
                      }, 0.25);
                    } else if (playShuriken == "select_mode") {
                      var sceneSelectMode = GameController.Instance.selectModeScreen;
                      sceneSelectMode.getChildByPath("cont_Exp_Starfruit").getComponent(Animation).play("shurikenExp_anim");
                      GameController.getInstance().scheduleOnce(function () {
                        startFillBarExp();
                      }, 0.25);
                    }
                  } else {
                    startFillBarExp();
                  }
                }).start();
              }).start();
              var wpos = textLevel.worldPosition.clone();
              wpos.x += 30;
              particleExpUp.setWorldPosition(Data.getInstance().convert2DPosTo3D(wpos));
              GameController.getInstance().playParticleAndChild(particleExpUp);
            }).start();
            this.scheduleOnce(function () {
              SFXManager.getInstance().play(SFXManager.SFX_XP_INCREASE);
            }, 0.25);
          };
  
          _proto.moveToHomescreen = function moveToHomescreen() {
            var _this5 = this;
  
            SFXManager.getInstance().play(SFXManager.SFX_SELECT);
            this.exitScreen(function () {
              _this5.setScreenState(GameController.SCREEN_STATE_HOMESCREEN);
            });
          };
  
          _proto.formatNumber = function formatNumber(number) {
            return number.toLocaleString("en-US");
          };
  
          _proto.rerandomFruitFact = function rerandomFruitFact(icon, text, index) {
            if (index === void 0) {
              index = -1;
            }
  
            if (index == -1) index = randomRangeInt(0, Data.DATA_FRUIT_FACT.length);
            var dataFruitFact = Data.DATA_FRUIT_FACT[index];
            icon.spriteFrame = GameController.getInstance().iconFruitFact[dataFruitFact.icon];
            text.string = dataFruitFact.text;
            return index;
          };
  
          _proto.showCritical = function showCritical() {
            MissionManager.getInstance().tryAddProgress("GETCRITICAL", 1);
            this.criticalCount += 1;
            var textCritical = FruitManager.getInstance().getTextCritical();
            textCritical.getComponent(TextCritical).resetTimer(1);
            textCritical.active = true;
            var oldPos = this.lastFruitSlashedPosition;
            this.updateScore(this.score + 10);
            SFXManager.getInstance().play(30);
            textCritical.getComponent(Animation).play("combo_in_out");
            textCritical.setPosition(FruitManager.getInstance().convertWorldToCanvas(oldPos, GameController.getInstance().canvasForGameplayText));
            textCritical.setParent(GameController.Instance.canvasForGameplayText);
          };
  
          _proto.showSpecificFruitText = function showSpecificFruitText(topText, fruitPos) {
            var text = FruitManager.getInstance().getTextSpecificFruit();
            text.active = true;
            text.setScale(new Vec3(0, 0, 0));
            text.getChildByPath("top_text").getComponent(Label).string = topText;
            var newPos = FruitManager.getInstance().convertWorldToCanvas(fruitPos, GameController.getInstance().canvasForGameplayText);
            GameController.getInstance().scheduleOnce(function () {
              text.getComponent(Animation).play("combo_in_out_specific");
              text.getComponent(Animation).on(Animation.EventType.FINISHED, function () {
                text.active = false;
                text.destroy();
              }, this, true);
            }, 0.1);
            text.setPosition(newPos);
            text.setParent(GameController.Instance.canvasForGameplayText);
          };
  
          _proto.showPeachTimeText = function showPeachTimeText(fruitPos) {
            var textPeachyTime = FruitManager.getInstance().getTextPeachyTime();
            textPeachyTime.active = true;
            textPeachyTime.setScale(new Vec3(0, 0, 0));
            GameController.getInstance().scheduleOnce(function () {
              textPeachyTime.getComponent(Animation).play("combo_in_out");
            }, 0.1);
            textPeachyTime.setPosition(FruitManager.getInstance().convertWorldToCanvas(fruitPos, GameController.getInstance().canvasForGameplayText));
            textPeachyTime.setParent(GameController.Instance.canvasForGameplayText);
          };
  
          _proto.showPomegranateTextScore = function showPomegranateTextScore(fruitPosition, counter, rotationZ) {
            var textPomegranate = FruitManager.getInstance().getTextPomegranateScore();
            textPomegranate.active = true;
            textPomegranate.setRotationFromEuler(new Vec3(0, 0, rotationZ));
            var textPomegranateSlice = FruitManager.getInstance().getTextPomegranateSlice();
            var newPos = textPomegranateSlice.position.clone();
            newPos.x += Math.sin(GameController.deg2rad(rotationZ)) * 120;
            newPos.y -= Math.cos(GameController.deg2rad(rotationZ)) * 120;
            textPomegranate.setPosition(newPos);
            textPomegranate.setParent(GameController.Instance.canvasForTextBehind3D);
            textPomegranate.getChildByPath("text_score_1").getComponent(UIOpacity).opacity = 255;
            textPomegranate.getChildByPath("text_score_2").getComponent(UIOpacity).opacity = 255;
            textPomegranate.getChildByPath("text_score_3").getComponent(UIOpacity).opacity = 255;
            textPomegranate.setScale(new Vec3(0, 0, 0));
            textPomegranate.getChildByPath("text_score_1").getComponent(Label).string = "+ " + counter;
            textPomegranate.getChildByPath("text_score_2").getComponent(Label).string = "+ " + counter;
            textPomegranate.getChildByPath("text_score_3").getComponent(Label).string = "+ " + counter;
          };
  
          _proto.changePomergranateTextScore = function changePomergranateTextScore(counter) {
            var textPomegranate = FruitManager.getInstance().getTextPomegranateScore();
            textPomegranate.active = true;
            textPomegranate.setScale(new Vec3(0, 0, 0));
            var material = textPomegranate.getChildByPath("text_score_1").getComponent(Label).getMaterial(0);
  
            if (counter <= 17) {
              var lerpValueR = lerp(255, 255, counter / 17) / 255;
              var lerpValueG = lerp(219, 104, counter / 17) / 255;
              var lerpValueB = lerp(50, 31, counter / 17) / 255;
              var lerpValueA = 1;
              material.setProperty("mainColor", new Vec4(lerpValueR, lerpValueG, lerpValueB, lerpValueA));
              lerpValueR = lerp(255, 255, counter / 17) / 255;
              lerpValueG = lerp(244, 213, counter / 17) / 255;
              lerpValueB = lerp(196, 194, counter / 17) / 255;
              lerpValueA = 1;
              material.setProperty("secondColor", new Vec4(lerpValueR, lerpValueG, lerpValueB, lerpValueA));
              lerpValueR = lerp(211, 211, counter / 17) / 255;
              lerpValueG = lerp(150, 86, counter / 17) / 255;
              lerpValueB = lerp(6, 59, counter / 17) / 255;
              lerpValueA = 1;
              material.setProperty("thirdColor", new Vec4(lerpValueR, lerpValueG, lerpValueB, lerpValueA));
              lerpValueR = lerp(255, 255, counter / 17) / 255;
              lerpValueG = lerp(218, 118, counter / 17) / 255;
              lerpValueB = lerp(46, 53, counter / 17) / 255;
              lerpValueA = 1;
              material.setProperty("fourthColor", new Vec4(lerpValueR, lerpValueG, lerpValueB, lerpValueA));
              Color.lerp(textPomegranate.getChildByPath("text_score_1").getComponent(LabelOutline).color, new Color("#A97800"), new Color("#AA2201"), counter / 17);
            } else {
              var offset = 35 - 17;
              var tempCounter = counter - 17;
  
              if (tempCounter > offset) {
                tempCounter = offset;
              }
  
              var _lerpValueR = lerp(255, 138, tempCounter / offset) / 255;
  
              var _lerpValueG = lerp(104, 47, tempCounter / offset) / 255;
  
              var _lerpValueB = lerp(31, 255, tempCounter / offset) / 255;
  
              var _lerpValueA = 1;
              material.setProperty("mainColor", new Vec4(_lerpValueR, _lerpValueG, _lerpValueB, _lerpValueA));
              _lerpValueR = lerp(255, 220, tempCounter / offset) / 255;
              _lerpValueG = lerp(213, 194, tempCounter / offset) / 255;
              _lerpValueB = lerp(194, 255, tempCounter / offset) / 255;
              _lerpValueA = 1;
              material.setProperty("secondColor", new Vec4(_lerpValueR, _lerpValueG, _lerpValueB, _lerpValueA));
              _lerpValueR = lerp(211, 109, tempCounter / offset) / 255;
              _lerpValueG = lerp(86, 46, tempCounter / offset) / 255;
              _lerpValueB = lerp(59, 239, tempCounter / offset) / 255;
              _lerpValueA = 1;
              material.setProperty("thirdColor", new Vec4(_lerpValueR, _lerpValueG, _lerpValueB, _lerpValueA));
              _lerpValueR = lerp(255, 109, tempCounter / offset) / 255;
              _lerpValueG = lerp(118, 46, tempCounter / offset) / 255;
              _lerpValueB = lerp(53, 239, tempCounter / offset) / 255;
              _lerpValueA = 1;
              material.setProperty("fourthColor", new Vec4(_lerpValueR, _lerpValueG, _lerpValueB, _lerpValueA));
              Color.lerp(textPomegranate.getChildByPath("text_score_1").getComponent(LabelOutline).color, new Color("#AA2201"), new Color("#3700AA"), tempCounter / offset);
            }
  
            textPomegranate.getChildByPath("text_score_1").getComponent(Label).string = "+ " + counter;
            textPomegranate.getChildByPath("text_score_2").getComponent(Label).string = "+ " + counter;
            textPomegranate.getChildByPath("text_score_3").getComponent(Label).string = "+ " + counter;
          };
  
          _proto.showPomegranateTextSlice = function showPomegranateTextSlice(fruitPosition, counter, rotationZ) {
            var textPomegranate = FruitManager.getInstance().getTextPomegranateSlice();
            textPomegranate.active = true;
            textPomegranate.setRotationFromEuler(new Vec3(0, 0, rotationZ));
            var slicePos = FruitManager.getInstance().convertWorldToCanvas(fruitPosition, GameController.getInstance().canvasForGameplayText);
            var posTextX = 250 * Math.cos(rotationZ);
            var posTextY = 250 * Math.sin(rotationZ);
            slicePos.y += Math.abs(posTextY);
            slicePos.x -= Math.abs(posTextX);
            textPomegranate.setPosition(slicePos);
            textPomegranate.setParent(GameController.Instance.canvasForGameplayText);
            textPomegranate.getChildByPath("text_1").getComponent(UIOpacity).opacity = 255;
            textPomegranate.getChildByPath("text_2").getComponent(UIOpacity).opacity = 255;
            textPomegranate.getChildByPath("text_3").getComponent(UIOpacity).opacity = 255;
            textPomegranate.setScale(new Vec3(0, 0, 0));
            if (this.pomegranateTween != null) this.pomegranateTween.stop();
            this.pomegranateTween = tween(textPomegranate).to(0.1, {
              scale: new Vec3(1, 1, 1)
            }).start();
            var text = "";
            if (counter == 1) text = "Slice!";else text = counter + " Hits";
            textPomegranate.getChildByPath("text_1").getComponent(Label).string = text;
            textPomegranate.getChildByPath("text_2").getComponent(Label).string = text;
            textPomegranate.getChildByPath("text_3").getComponent(Label).string = text;
          };
  
          _proto.changePomergranateTextSlice = function changePomergranateTextSlice(counter) {
            var textPomegranate = FruitManager.getInstance().getTextPomegranateSlice();
            textPomegranate.setScale(new Vec3(0, 0, 0));
            if (this.pomegranateTween != null) this.pomegranateTween.stop();
            this.pomegranateTween = tween(textPomegranate).to(0.1, {
              scale: new Vec3(1, 1, 1)
            }).start();
            var text = "";
            if (counter == 0) text = "Slice!";else text = counter + " Hits";
            var material = textPomegranate.getChildByPath("text_1").getComponent(Label).getMaterial(0);
  
            if (counter <= 17) {
              var lerpValueR = lerp(255, 255, counter / 17) / 255;
              var lerpValueG = lerp(219, 104, counter / 17) / 255;
              var lerpValueB = lerp(50, 31, counter / 17) / 255;
              var lerpValueA = 1;
              material.setProperty("mainColor", new Vec4(lerpValueR, lerpValueG, lerpValueB, lerpValueA));
              lerpValueR = lerp(255, 255, counter / 17) / 255;
              lerpValueG = lerp(244, 213, counter / 17) / 255;
              lerpValueB = lerp(196, 194, counter / 17) / 255;
              lerpValueA = 1;
              material.setProperty("secondColor", new Vec4(lerpValueR, lerpValueG, lerpValueB, lerpValueA));
              lerpValueR = lerp(211, 211, counter / 17) / 255;
              lerpValueG = lerp(150, 86, counter / 17) / 255;
              lerpValueB = lerp(6, 59, counter / 17) / 255;
              lerpValueA = 1;
              material.setProperty("thirdColor", new Vec4(lerpValueR, lerpValueG, lerpValueB, lerpValueA));
              lerpValueR = lerp(255, 255, counter / 17) / 255;
              lerpValueG = lerp(218, 118, counter / 17) / 255;
              lerpValueB = lerp(46, 53, counter / 17) / 255;
              lerpValueA = 1;
              material.setProperty("fourthColor", new Vec4(lerpValueR, lerpValueG, lerpValueB, lerpValueA));
              Color.lerp(textPomegranate.getChildByPath("text_1").getComponent(LabelOutline).color, new Color("#A97800"), new Color("#AA2201"), counter / 17);
            } else {
              var offset = 35 - 17;
              var tempCounter = counter - 17;
  
              if (tempCounter > offset) {
                tempCounter = offset;
              }
  
              var _lerpValueR2 = lerp(255, 138, tempCounter / offset) / 255;
  
              var _lerpValueG2 = lerp(104, 47, tempCounter / offset) / 255;
  
              var _lerpValueB2 = lerp(31, 255, tempCounter / offset) / 255;
  
              var _lerpValueA2 = 1;
              material.setProperty("mainColor", new Vec4(_lerpValueR2, _lerpValueG2, _lerpValueB2, _lerpValueA2));
              _lerpValueR2 = lerp(255, 220, tempCounter / offset) / 255;
              _lerpValueG2 = lerp(213, 194, tempCounter / offset) / 255;
              _lerpValueB2 = lerp(194, 255, tempCounter / offset) / 255;
              _lerpValueA2 = 1;
              material.setProperty("secondColor", new Vec4(_lerpValueR2, _lerpValueG2, _lerpValueB2, _lerpValueA2));
              _lerpValueR2 = lerp(211, 109, tempCounter / offset) / 255;
              _lerpValueG2 = lerp(86, 46, tempCounter / offset) / 255;
              _lerpValueB2 = lerp(59, 239, tempCounter / offset) / 255;
              _lerpValueA2 = 1;
              material.setProperty("thirdColor", new Vec4(_lerpValueR2, _lerpValueG2, _lerpValueB2, _lerpValueA2));
              _lerpValueR2 = lerp(255, 109, tempCounter / offset) / 255;
              _lerpValueG2 = lerp(118, 46, tempCounter / offset) / 255;
              _lerpValueB2 = lerp(53, 239, tempCounter / offset) / 255;
              _lerpValueA2 = 1;
              material.setProperty("fourthColor", new Vec4(_lerpValueR2, _lerpValueG2, _lerpValueB2, _lerpValueA2));
              Color.lerp(textPomegranate.getChildByPath("text_1").getComponent(LabelOutline).color, new Color("#AA2201"), new Color("#3700AA"), tempCounter / offset);
            }
  
            textPomegranate.getChildByPath("text_1").getComponent(Label).string = text;
            textPomegranate.getChildByPath("text_2").getComponent(Label).string = text;
            textPomegranate.getChildByPath("text_3").getComponent(Label).string = text;
          };
  
          _proto.showCombo = function showCombo() {
            if (GameController.gameMode == GameController.MODE_ARCADE) {
              ArcadeBonusBoardController.getInstance().comboCounter += 1;
              BlitzManager.getInstance().addFruitSliceCounter(this.combo);
            }
  
            MissionManager.getInstance().tryAddProgress("COMBOTOTAL", 1);
            MissionManager.getInstance().trySetProgress("FRUITCOMBO", this.combo);
            this.comboCount += 1;
            var textFruitCombo = FruitManager.getInstance().getTextFruitCombo();
            textFruitCombo.getComponent(TextCombo).resetTimer(1);
            textFruitCombo.active = true;
            var oldPos = this.lastFruitSlashedPosition;
            this.updateScore(this.score + this.combo);
            textFruitCombo.setPosition(FruitManager.getInstance().convertWorldToCanvas(oldPos, GameController.getInstance().canvasForGameplayText));
            textFruitCombo.setParent(GameController.Instance.canvasForGameplayText);
            textFruitCombo.getComponent(TextCombo).updateText(this.combo);
          };
  
          _proto.showReduceScoreText = function showReduceScoreText(position) {
            var text = FruitManager.getInstance().getPurpleBombTextFromPool();
            text.active = true;
            text.setScale(new Vec3(0, 0, 0));
            text.setPosition(FruitManager.getInstance().convertWorldToCanvas(position, GameController.getInstance().canvasForGameplayText));
            text.setParent(GameController.Instance.canvasForGameplayText);
            text.getComponent(Animation).play("combo_in_out");
            text.getComponent(Animation).on(Animation.EventType.FINISHED, function () {
              FruitManager.getInstance().poolPurpleBombText.push(text);
            }, this, true);
          };
  
          _proto.showBerryBlastText = function showBerryBlastText(position) {
            var text = FruitManager.getInstance().getTextBerryBlast();
            text.active = true;
            text.setPosition(FruitManager.getInstance().convertWorldToCanvas(position, GameController.getInstance().canvasForGameplayText));
            text.setParent(GameController.Instance.canvasForGameplayText);
            text.getComponent(Animation).play("combo_in_out");
            text.getComponent(Animation).on(Animation.EventType.FINISHED, function () {
              text.active = false;
              FruitManager.getInstance().putTextBerryBlast(text);
            }, this, true);
          };
  
          _proto.showDeflectText = function showDeflectText(position) {
            var text = FruitManager.getInstance().getTextDeflect();
            text.getComponent(TextDeflect).resetTimer(1);
            text.active = true;
            text.setPosition(FruitManager.getInstance().convertWorldToCanvas(position, GameController.getInstance().canvasForGameplayText));
            text.setParent(GameController.Instance.canvasForGameplayText);
            text.getChildByPath("text_none_left").active = false;
            text.getChildByPath("text_left").active = false;
  
            if (GameController.getInstance().deflectCounter <= 0) {
              text.getChildByPath("text_none_left").active = true;
              text.getChildByPath("text_none_left").getComponent(Label).string = "NONE LEFT!";
            } else {
              text.getChildByPath("text_left").active = true;
              text.getChildByPath("text_left").getComponent(Label).string = GameController.getInstance().deflectCounter + " LEFT!";
            }
  
            text.getComponent(Animation).play("deflect_text_in");
          };
  
          _proto.updateTimerCombo = function updateTimerCombo(timer) {
            this.timerCombo = timer;
          };
  
          _proto.getTimerCombo = function getTimerCombo() {
            return this.timerCombo;
          };
  
          _proto.updateCombo = function updateCombo(combo) {
            this.combo = combo;
          };
  
          _proto.getCombo = function getCombo() {
            return this.combo;
          };
  
          _proto.setGameState = function setGameState(value) {
            this.gameState = value;
  
            if (this.gameState == GameController.STATE_GAME_LOSE) {
              this.unscheduleAllCallbacks();
            } else if (this.gameState == GameController.STATE_GAME_PAUSE) {
              FruitManager.getInstance().tryPauseAllFruit();
            } else if (this.gameState == GameController.STATE_GAME_PLAYING) {
              this.gameplayScreen.getComponent(SceneGameplay).gameplayLeaderboard.getComponent(Animation).play("gameplayLeaderboards_in");
            }
          };
  
          _proto.getGameState = function getGameState() {
            return this.gameState;
          };
  
          _proto.exitScreen = function exitScreen(callback) {
            if (this.screenState == GameController.SCREEN_STATE_SELECT_MODE) {
              GameController.Instance.selectModeScreen.getComponent(Animation).play("selectMode_out");
              GameController.Instance.selectModeScreen.getComponent(Animation).once(Animation.EventType.FINISHED, callback);
            } else if (this.screenState == GameController.SCREEN_STATE_HOMESCREEN) {
              this.homescreen.getComponent(Animation).play("homescreenP1_out");
              this.homescreen.getComponent(Animation).once(Animation.EventType.FINISHED, callback);
            } else if (this.screenState == GameController.SCREEN_STATE_GAMEPLAY) {
              GameController.Instance.gameplayScreen.getComponent(Animation).play("animation_hide_ui");
              GameController.Instance.gameplayScreen.getComponent(Animation).once(Animation.EventType.FINISHED, callback);
            } else if (this.screenState == GameController.SCREEN_STATE_RESULT_REWARD) {
              GameController.Instance.resultScore.getComponent(Animation).play("resultScoreEXP_out");
              GameController.Instance.resultScore.getComponent(Animation).once(Animation.EventType.FINISHED, callback);
            } else if (this.screenState == GameController.SCREEN_STATE_SENSEI_SWAG) {
              if (GameController.Instance.senseiSwagScreen != null) {
                GameController.Instance.senseiSwagScreen.getComponent(Animation).play("sensei_out");
                GameController.Instance.senseiSwagScreen.getComponent(Animation).once(Animation.EventType.FINISHED, callback);
              }
            } else if (this.screenState == GameController.SCREEN_STATE_SETTING) {
              GameController.Instance.settingScreen.getComponent(Animation).play("settings_out");
              GameController.Instance.settingScreen.getComponent(Animation).once(Animation.EventType.FINISHED, callback);
            } else if (this.screenState == GameController.SCREEN_STATE_LANGUAGE) {
              GameController.Instance.languageScreen.getComponent(Animation).play("language_out");
              GameController.Instance.languageScreen.getComponent(Animation).once(Animation.EventType.FINISHED, callback);
            }
          };
  
          _proto.showBasePopUp = function showBasePopUp(code, onButtonEvent, onCloseEvent) {
            this.mainCanvasOverlay.getChildByPath("container_basePopup").active = true;
            this.mainCanvasOverlay.getChildByPath("container_basePopup").getComponent(Animation).play("popup_in");
            var title = "";
            var content = "";
            var button = "";
  
            if (code == 'nudge_signal') {
              title = "SENDING SIGNAL";
              content = "Your fruit ninja friends\nwill soon receive your signal and start challenging you!\n\nLet's get a head start and collect more scores!";
              button = "PLAY NOW!";
            } else if (code == "maximum_tournament") {
              title = "INFORMATION";
              content = "Maximum tournament\ncount reached!\n\nLet's complete existing\ntournaments first and collect\nthe prizes!";
              button = "OK";
            }
  
            this.mainCanvasOverlay.getChildByPath("container_basePopup/cont_Popup/popup/headerPopupWood/text_headerWood").getComponent(Label).string = title;
            this.mainCanvasOverlay.getChildByPath("container_basePopup/cont_Popup/popup/text_info").getComponent(Label).string = content;
            this.mainCanvasOverlay.getChildByPath("container_basePopup/cont_Popup/popup/ButtonOK/text_OK").getComponent(Label).string = button;
            var nodeClose = this.mainCanvasOverlay.getChildByPath("container_basePopup/cont_Popup/popup/headerPopupWood/TabCrossFolded");
            var nodeButton = this.mainCanvasOverlay.getChildByPath("container_basePopup/cont_Popup/popup/ButtonOK");
            if (nodeClose.hasEventListener(Button.EventType.CLICK)) nodeClose.off(Button.EventType.CLICK);
            if (nodeButton.hasEventListener(Button.EventType.CLICK)) nodeButton.off(Button.EventType.CLICK);
            nodeClose.on(Button.EventType.CLICK, function () {
              SFXManager.getInstance().play(SFXManager.SFX_SELECT);
              nodeClose.getComponent(Button).interactable = true;
              onCloseEvent();
            });
            nodeButton.on(Button.EventType.CLICK, function () {
              SFXManager.getInstance().play(SFXManager.SFX_SELECT);
              nodeButton.getComponent(Button).interactable = true;
              onButtonEvent();
            });
          };
  
          _proto.hideBasePopUp = function hideBasePopUp(callback) {
            var me = this;
            this.mainCanvasOverlay.getChildByPath("container_basePopup").active = true;
            this.mainCanvasOverlay.getChildByPath("container_basePopup").getComponent(Animation).play("popup_out");
            this.mainCanvasOverlay.getChildByPath("container_basePopup").getComponent(Animation).once(Animation.EventType.FINISHED, function () {
              me.mainCanvasOverlay.getChildByPath("container_basePopup").active = false;
              callback();
            }, this);
          };
  
          _proto.showPopUpInfoPowerUp = function showPopUpInfoPowerUp(show) {
            var popup = this.mainCanvasOverlay.getChildByPath("popup_infoPU");
            if (show) popup.active = true;
            popup.getComponent(Animation).play(show ? "popup_infoPU_in" : "popup_infoPU_out");
            popup.getComponent(Animation).on(Animation.EventType.FINISHED, function () {
              if (!show) {
                popup.active = false;
                GameController.getInstance().setHoldInput(false);
              }
            }, this, true);
          };
  
          _proto.showPopupPurchasePowerUp = function showPopupPurchasePowerUp(show, powerUpType, onBuy) {
            if (powerUpType === void 0) {
              powerUpType = "";
            }
  
            if (onBuy === void 0) {
              onBuy = function onBuy() {};
            }
  
            var popup = this.mainCanvasOverlay.getChildByPath("popup_purchasePU");
  
            if (show) {
              popup.getComponent(ScenePopupPurchasePU).setPowerUp(powerUpType);
              popup.active = true;
            }
  
            popup.getComponent(ScenePopupPurchasePU).setOnBuy(onBuy);
            popup.getComponent(Animation).play(show ? "popup_purchasePU_in" : "popup_purchasePU_out");
            popup.getComponent(Animation).on(Animation.EventType.FINISHED, function () {
              if (!show) {
                popup.active = false;
                GameController.getInstance().setHoldInput(false);
              }
            }, this, true);
          };
  
          _proto.resetScreen = function resetScreen(screen) {
            this.listUIFruit = [];
            var fruitList = screen.getComponentsInChildren(UIRing);
            console.log('set fruit');
            console.log(fruitList.length);
  
            for (var i = 0; i < fruitList.length; i++) {
              if (fruitList[i].node.active) this.listUIFruit.push(fruitList[i].getFruit());
            }
  
            for (var _i2 = 0; _i2 < this.listUIFruit.length; _i2++) {
              this.listUIFruit[_i2].getComponent(Fruit).reset();
  
              var fruitPhysics = this.listUIFruit[_i2].getComponent(FruitPhysics);
  
              if (fruitPhysics != null) fruitPhysics.pausePhysics = true;
            }
          };
  
          _proto.setScreenStateOnly = function setScreenStateOnly(value) {
            this.screenState = value;
          };
  
          _proto.loadScreen = function loadScreen(preloadScreen, onFinish) {
            var _this6 = this;
  
            GameController.getInstance().setHoldInput(true);
            this.loadingScreen.active = true; //this is one place to init Rotate handler
            // Instances.rotateScreen = new RotateHandler();
            // Instances.rotateScreen.initialize();
            // FocusHandler.initialize();
  
            preloadScreen.loadPrefab(function () {
              GameController.getInstance().setHoldInput(false);
              _this6.loadingScreen.active = false;
              onFinish();
            });
          };
  
          _proto.loadAllManualEntriesProfpic = function loadAllManualEntriesProfpic(manualEntries, onFinish) {
            var counter = 0;
  
            for (var i = 0; i < manualEntries.length; i++) {
              GameController.loadImageWithoutExt(manualEntries[i].photo, function () {
                counter += 1;
  
                if (counter == manualEntries.length) {
                  onFinish();
                }
              });
            }
          };
  
          _proto.setScreenState = function setScreenState(value, onLoad) {
            var _this7 = this;
  
            if (onLoad === void 0) {
              onLoad = function onLoad() {};
            }
  
            this.screenState = value;
            this.listUIFruit = [];
  
            if (this.screenState != GameController.SCREEN_STATE_GAMEPLAY) {
              BGMManager.getInstance().play(BGMManager.BGM_MUSIC_MENU);
            }
  
            this.homescreen.active = this.screenState == GameController.SCREEN_STATE_HOMESCREEN;
  
            if (this.screenState == GameController.SCREEN_STATE_HOMESCREEN) {
              this.homescreen.getComponent(SceneHomescreen).refresh();
              this.homescreen.getComponent(Animation).play("homescreenP1_in");
              BGMManager.getInstance().play(BGMManager.BGM_MUSIC_MENU);
              this.dieFromBomb = false;
              var fruitList = this.homescreen.getComponentsInChildren(UIRing);
  
              for (var i = 0; i < fruitList.length; i++) {
                this.listUIFruit.push(fruitList[i].getFruit());
              }
            }
  
            if (GameController.Instance.selectModeScreen != null) {
              GameController.Instance.selectModeScreen.active = this.screenState == GameController.SCREEN_STATE_SELECT_MODE;
  
              if (this.screenState == GameController.SCREEN_STATE_SELECT_MODE) {
                var sceneSelectMode = GameController.Instance.selectModeScreen.getComponent(SceneSelectMode);
                sceneSelectMode.setFrom(SceneSelectMode.from, SceneSelectMode.mode, SceneSelectMode.entries);
                sceneSelectMode.setTitle(SceneSelectMode.title);
                GameController.Instance.selectModeScreen.getComponent(Animation).play("selectMode_in");
  
                var _fruitList = GameController.Instance.selectModeScreen.getComponentsInChildren(UIRing);
  
                console.log('set fruit');
                console.log(_fruitList.length);
  
                for (var _i3 = 0; _i3 < _fruitList.length; _i3++) {
                  this.listUIFruit.push(_fruitList[_i3].getFruit());
                }
              }
            } else {
              if (this.screenState == GameController.SCREEN_STATE_SELECT_MODE) {
                this.loadScreen(PreloadScreen.dataPath['select_mode'], function () {
                  _this7.setScreenState(GameController.SCREEN_STATE_SELECT_MODE);
                });
              }
            }
  
            if (GameController.Instance.settingScreen != null) {
              GameController.Instance.settingScreen.active = this.screenState == GameController.SCREEN_STATE_SETTING;
  
              if (this.screenState == GameController.SCREEN_STATE_SETTING) {
                GameController.Instance.settingScreen.getComponent(Animation).play("settings_in");
  
                var _fruitList2 = GameController.Instance.settingScreen.getComponentsInChildren(UIRing);
  
                console.log('set fruit');
                console.log(_fruitList2.length);
  
                for (var _i4 = 0; _i4 < _fruitList2.length; _i4++) {
                  this.listUIFruit.push(_fruitList2[_i4].getFruit());
                }
              }
            } else {
              if (this.screenState == GameController.SCREEN_STATE_SETTING) {
                this.loadScreen(PreloadScreen.dataPath["settings"], function () {
                  GameController.getInstance().setScreenState(GameController.SCREEN_STATE_SETTING);
                });
              }
            }
  
            if (GameController.Instance.languageScreen != null) {
              GameController.Instance.languageScreen.active = this.screenState == GameController.SCREEN_STATE_LANGUAGE;
  
              if (this.screenState == GameController.SCREEN_STATE_LANGUAGE) {
                GameController.Instance.languageScreen.getComponent(Animation).play("language_in");
              }
            } else {
              if (this.screenState == GameController.SCREEN_STATE_LANGUAGE) {
                this.loadScreen(PreloadScreen.dataPath["language"], function () {
                  _this7.setScreenState(GameController.SCREEN_STATE_LANGUAGE);
                });
              }
            }
  
            if (GameController.Instance.senseiSwagScreen != null) {
              GameController.Instance.senseiSwagScreen.active = this.screenState == GameController.SCREEN_STATE_SENSEI_SWAG;
  
              if (this.screenState == GameController.SCREEN_STATE_SENSEI_SWAG) {
                SenseiSwagScene.Instance.playAnimation("sensei_in", function () {
                  SenseiSwagScene.Instance.trySetFruit();
                });
                GameController.Instance.senseiSwagScreen.getChildByPath("UI_atasSensei/StarfruitLabel/text_starfruitTop").getComponent(Label).string = GameController.getInstance().formatNumber(parseInt(Data.getInstance().starFruit.toFixed(0)));
  
                var _fruitList3 = GameController.Instance.senseiSwagScreen.getComponentsInChildren(UIRing);
  
                console.log('set fruit');
                console.log(_fruitList3.length);
  
                for (var _i5 = 0; _i5 < _fruitList3.length; _i5++) {
                  this.listUIFruit.push(_fruitList3[_i5].getFruit());
                }
              }
            } else {
              if (this.screenState == GameController.SCREEN_STATE_SENSEI_SWAG) {
                this.loadScreen(PreloadScreen.dataPath["senseiswag"], function () {
                  GameController.getInstance().setScreenState(GameController.SCREEN_STATE_SENSEI_SWAG);
                });
              }
            }
  
            if (GameController.Instance.gameplayScreen != null) {
              GameController.Instance.gameplayScreen.active = this.screenState == GameController.SCREEN_STATE_GAMEPLAY;
  
              if (this.screenState == GameController.SCREEN_STATE_GAMEPLAY) {
                this.listPlayerGameplay = [];
                this.canPopulateListPlayerGameplay = true;
                this.gameplayScreen.getComponent(SceneGameplay).gameplayLeaderboard.resetForGameplay();
  
                var onLeaderboardLoaded = function onLeaderboardLoaded() {
                  onLoad();
                  SceneGameplay.getInstance().showIconBerry(false);
                  SceneGameplay.getInstance().showIconDeflect(false);
                  SceneGameplay.getInstance().showIconPeachTime(false);
                  _this7.score = 0;
                  _this7.timerGameplay = 0;
                  GameController.getInstance().gameData = {
                    d: 0,
                    g: [],
                    s: 0
                  };
                  GameController.prevBestScore = GameController.bestScore;
                  GameController.fruitMode = "normal";
  
                  var onGameplayReady = function onGameplayReady() {
                    _this7.loadingScreen.active = false; // SceneLoading.getInstance().changeOrientation();
  
                    if (GameController.FORCE_FRUIT_MODE != "") GameController.fruitMode = GameController.FORCE_FRUIT_MODE;
                    var textGameStart = "READY";
  
                    if (GameController.gameMode == GameController.MODE_ZEN) {
                      textGameStart = "";
                      if (GameController.fruitMode == "greenapple") textGameStart = "Apple Party!\n";else if (GameController.fruitMode == "watermelon") textGameStart = "Watermelon Party!\n";else if (GameController.fruitMode == "pineapple") textGameStart = "Pineapple Party\n";else if (GameController.fruitMode == "orange") textGameStart = "Orange Party\n";else if (GameController.fruitMode == "coconut") textGameStart = "Coconut Party\n";
                      textGameStart += "90 seconds";
                    } else if (GameController.gameMode == GameController.MODE_ARCADE) {
                      textGameStart = "60 seconds";
                    }
  
                    GameController.Instance.gameplayScreen.getChildByPath("text_game_start").getComponent(Label).string = textGameStart;
                    GameController.Instance.gameplayScreen.getChildByPath("text_game_start/text_filler").getComponent(Label).string = textGameStart;
                    GameController.Instance.gameplayScreen.getChildByPath("container_cross").active = GameController.gameMode == GameController.MODE_CLASSIC;
                    GameController.Instance.gameplayScreen.getChildByPath("container_time").active = GameController.gameMode == GameController.MODE_ZEN || GameController.gameMode == GameController.MODE_ARCADE;
  
                    if (GameController.fruitMode == "" || GameController.fruitMode == "normal") {
                      if (GameController.gameMode == GameController.MODE_CLASSIC) {
                        MissionManager.getInstance().tryAddProgress("PLAYGAMESCLASSIC", 1);
                      } else if (GameController.gameMode == GameController.MODE_ZEN) {
                        MissionManager.getInstance().tryAddProgress("PLAYGAMESZEN", 1);
                      } else if (GameController.gameMode == GameController.MODE_ARCADE) {
                        MissionManager.getInstance().tryAddProgress("PLAYGAMESARCADE", 1);
                      }
                    }
  
                    if (GameController.TUTORIAL_STATE >= 1 && GameController.TUTORIAL_STATE <= 3) {
                      GameController.TUTORIAL_STATE = 1;
                      GameController.getInstance().gameData = {
                        d: 1,
                        g: [],
                        s: 0
                      };
                    } else GameController.TUTORIAL_STATE = 0;
  
                    FruitPhysics.resetMultiplier();
                    _this7.havePlayRingOutArcade = false;
                    _this7.useDeflect = false;
                    _this7.useContinue = false;
                    _this7.criticalCount = 0;
                    _this7.combo = 0;
                    _this7.comboCount = 0;
                    _this7.missedFruitCount = 0;
                    _this7.berryBlastCount = 0;
                    _this7.peachyCount = 0;
                    _this7.pomegranateCount = 0;
                    _this7.zenTimer = 90;
                    _this7.gameplayTimer = 0;
                    _this7.arcadeTimer = 60;
                    _this7.bananaSpecialCount = 0;
                    _this7.blitzCount = 0;
                    _this7.arcadeBombCount = 0;
                    _this7.timerSFXTickTock = 0;
                    _this7.counterSFXTickTock = 0;
                    _this7.spawnedPomegranateForArcade = false;
  
                    _this7.freezeArcadeTopLabel.setParent(null);
  
                    _this7.freezeArcadeTopLabel.active = false;
  
                    _this7.frenzyArcadeTopLabel.setParent(null);
  
                    _this7.frenzyArcadeTopLabel.active = false;
  
                    _this7.doubleArcadeTopLabel.setParent(null);
  
                    _this7.doubleArcadeTopLabel.active = false;
                    _this7.canRevive = false;
                    _this7.dieFromBomb = false;
                    BGMManager.getInstance().play(BGMManager.BGM_AMB_ARENA);
                    _this7.targetRevive = 100;
                    GameController.getInstance().updateScore(0);
                    GameController.getInstance().updateHealth(3);
                    if (GameController.gameMode == GameController.MODE_ZEN) GameController.getInstance().updateZenTimer(_this7.zenTimer);else if (GameController.gameMode == GameController.MODE_ARCADE) GameController.getInstance().updateZenTimer(_this7.arcadeTimer);
                    GameController.Instance.gameplayScreen.getChildByPath("container_time/container/Freeze").getComponent(UIOpacity).opacity = 0;
                    GameController.Instance.gameplayScreen.getChildByPath("FreezeOverlay").getComponent(UIOpacity).opacity = 0;
                    GameController.Instance.gameplayScreen.getChildByPath("DoublePointOverlay").getComponent(UIOpacity).opacity = 0;
                    _this7.breakCombo = false;
                    ArcadeBonusBoardController.getInstance().reset();
                    BlitzManager.getInstance().reset();
                    FruitManager.getInstance().reset();
  
                    _this7.setGameState(GameController.STATE_GAME_COUNTDOWN);
  
                    _this7.deflectCounter = 0;
                    GameController.PEACHY_TIME = false;
                    GameController.BERRYBLAST_POWERUP = false;
  
                    if (SceneSelectMode.EQUIP_BB) {
                      Data.getInstance().inventoryPUBerryBlast -= 1;
                      GameController.getInstance().useBerryBlastPowerUp();
                    }
  
                    if (GameController.gameMode == GameController.MODE_CLASSIC) {
                      if (GameController.counterWithoutWatchFreePowerup >= 2 && (GameController.TUTORIAL_STATE == 0 || GameController.TUTORIAL_STATE == 4) && !SceneSelectMode.EQUIP_DB && !SceneSelectMode.EQUIP_BB && false) {
                        GameController.counterWithoutWatchFreePowerup = 0;
  
                        if (randomRangeInt(1, 101) <= 50) {
                          GameController.Instance.contDeflect.active = true;
                          var containerDeflectAnimation = GameController.Instance.contDeflect.getComponent(Animation);
                          containerDeflectAnimation.play("deflectOffer_in");
                          containerDeflectAnimation.on(Animation.EventType.FINISHED, function () {
                            GameController.Instance.contDeflect.getComponent(SceneDeflectOffer).holdInput = false;
                          }, _this7, true);
                        } else {
                          GameController.Instance.contBerryBlast.active = true;
  
                          var _containerDeflectAnimation = GameController.Instance.contBerryBlast.getComponent(Animation);
  
                          _containerDeflectAnimation.play("deflectOffer_in");
  
                          _containerDeflectAnimation.on(Animation.EventType.FINISHED, function () {
                            GameController.Instance.contBerryBlast.getComponent(SceneDeflectOffer).holdInput = false;
                          }, _this7, true);
                        }
                      } else {
                        if (SceneSelectMode.EQUIP_DB) {
                          Data.getInstance().inventoryPUDeflect -= 1;
                          GameController.getInstance().useDeflectPowerUp();
                        }
  
                        if (!SceneSelectMode.EQUIP_DB && !SceneSelectMode.EQUIP_BB) GameController.counterWithoutWatchFreePowerup += 1;
                        SFXManager.getInstance().play(SFXManager.SFX_GAMESTART);
                        var anim = GameController.Instance.gameplayScreen.getComponent(Animation);
                        anim.play("animation_ready_go");
                        anim.on(Animation.EventType.FINISHED, function () {
                          GameController.getInstance().setGameState(GameController.STATE_GAME_PLAYING);
                          if (GameController.TUTORIAL_STATE == 0) ScenePause.getInstance().showButtonPause();
                        }, _this7, true);
  
                        if (GameController.TUTORIAL_STATE == 1) {
                          UIMissionTutorial.getInstance().show();
                          UIMissionTutorial.getInstance().resetLabel(1);
                        }
                      }
                    } else if (GameController.gameMode == GameController.MODE_ZEN) {
                      if (GameController.counterWithoutWatchFreePowerup >= 2 && (GameController.TUTORIAL_STATE == 0 || GameController.TUTORIAL_STATE == 4) && !SceneSelectMode.EQUIP_BB && !SceneSelectMode.EQUIP_PT && false) {
                        GameController.counterWithoutWatchFreePowerup = 0;
  
                        if (randomRangeInt(1, 101) <= 50) {
                          GameController.Instance.contPeachy.active = true;
  
                          var _containerDeflectAnimation2 = GameController.Instance.contPeachy.getComponent(Animation);
  
                          _containerDeflectAnimation2.play("deflectOffer_in");
  
                          _containerDeflectAnimation2.on(Animation.EventType.FINISHED, function () {
                            GameController.Instance.contPeachy.getComponent(SceneDeflectOffer).holdInput = false;
                          }, _this7, true);
                        } else {
                          GameController.Instance.contBerryBlast.active = true;
  
                          var _containerDeflectAnimation3 = GameController.Instance.contBerryBlast.getComponent(Animation);
  
                          _containerDeflectAnimation3.play("deflectOffer_in");
  
                          _containerDeflectAnimation3.on(Animation.EventType.FINISHED, function () {
                            GameController.Instance.contBerryBlast.getComponent(SceneDeflectOffer).holdInput = false;
                          }, _this7, true);
                        }
                      } else {
                        if (!SceneSelectMode.EQUIP_PT && !SceneSelectMode.EQUIP_BB) GameController.counterWithoutWatchFreePowerup += 1;
  
                        if (SceneSelectMode.EQUIP_PT) {
                          Data.getInstance().inventoryPUPeachyTime -= 1;
                          GameController.getInstance().usePeachTimePowerUp();
                        }
  
                        SFXManager.getInstance().play(SFXManager.SFX_GAMESTART);
  
                        var _anim = GameController.Instance.gameplayScreen.getComponent(Animation);
  
                        _anim.play("animation_ready_go");
  
                        _anim.on(Animation.EventType.FINISHED, function () {
                          GameController.getInstance().setGameState(GameController.STATE_GAME_PLAYING);
                          ScenePause.getInstance().showButtonPause();
                        }, _this7, true);
                      }
                    } else if (GameController.gameMode == GameController.MODE_ARCADE) {
                      if (GameController.counterWithoutWatchFreePowerup >= 2 && (GameController.TUTORIAL_STATE == 0 || GameController.TUTORIAL_STATE == 4) && !SceneSelectMode.EQUIP_BB && !SceneSelectMode.EQUIP_PT && !SceneSelectMode.EQUIP_DB && false) {
                        GameController.counterWithoutWatchFreePowerup = 0;
                        var pu = [0, 1, 2];
                        var random = pu[randomRangeInt(0, pu.length)];
  
                        if (random == 0) {
                          GameController.Instance.contDeflect.active = true;
  
                          var _containerDeflectAnimation4 = GameController.Instance.contDeflect.getComponent(Animation);
  
                          _containerDeflectAnimation4.play("deflectOffer_in");
  
                          _containerDeflectAnimation4.on(Animation.EventType.FINISHED, function () {
                            GameController.Instance.contDeflect.getComponent(SceneDeflectOffer).holdInput = false;
                          }, _this7, true);
                        } else if (random == 1) {
                          GameController.Instance.contPeachy.active = true;
  
                          var _containerDeflectAnimation5 = GameController.Instance.contPeachy.getComponent(Animation);
  
                          _containerDeflectAnimation5.play("deflectOffer_in");
  
                          _containerDeflectAnimation5.on(Animation.EventType.FINISHED, function () {
                            GameController.Instance.contPeachy.getComponent(SceneDeflectOffer).holdInput = false;
                          }, _this7, true);
                        } else {
                          GameController.Instance.contBerryBlast.active = true;
  
                          var _containerDeflectAnimation6 = GameController.Instance.contBerryBlast.getComponent(Animation);
  
                          _containerDeflectAnimation6.play("deflectOffer_in");
  
                          _containerDeflectAnimation6.on(Animation.EventType.FINISHED, function () {
                            GameController.Instance.contBerryBlast.getComponent(SceneDeflectOffer).holdInput = false;
                          }, _this7, true);
                        }
                      } else {
                        if (!SceneSelectMode.EQUIP_PT && !SceneSelectMode.EQUIP_BB && !SceneSelectMode.EQUIP_DB) GameController.counterWithoutWatchFreePowerup += 1;
  
                        if (SceneSelectMode.EQUIP_DB) {
                          Data.getInstance().inventoryPUDeflect -= 1;
                          GameController.getInstance().useDeflectPowerUp();
                        }
  
                        if (SceneSelectMode.EQUIP_PT) {
                          Data.getInstance().inventoryPUPeachyTime -= 1;
                          GameController.getInstance().usePeachTimePowerUp();
                        }
  
                        SFXManager.getInstance().play(SFXManager.SFX_GAMESTART);
  
                        var _anim2 = GameController.Instance.gameplayScreen.getComponent(Animation);
  
                        _anim2.play("animation_ready_go");
  
                        _anim2.on(Animation.EventType.FINISHED, function () {
                          GameController.getInstance().setGameState(GameController.STATE_GAME_PLAYING);
                          ScenePause.getInstance().showButtonPause();
                        }, _this7, true);
                      }
                    }
  
                    SceneSelectMode.EQUIP_BB = false;
                    SceneSelectMode.EQUIP_DB = false;
                    SceneSelectMode.EQUIP_PT = false;
                    GameController.saveData();
                  };
  
                  GameController.getInstance().updateScore(0);
                  onGameplayReady();
                };
  
                this.loadingScreen.active = true;
                this.gameplayScreen.getComponent(SceneGameplay).gameplayLeaderboard.refresh();
                onLeaderboardLoaded();
              }
            } else {
              if (this.screenState == GameController.SCREEN_STATE_GAMEPLAY) {
                this.loadScreen(PreloadScreen.dataPath["gameplay"], function () {
                  GameController.Instance.setScreenState(GameController.SCREEN_STATE_GAMEPLAY);
                });
              }
            }
  
            if (this.resultScore != null) this.resultScore.active = this.screenState == GameController.SCREEN_STATE_RESULT_REWARD;
  
            if (this.screenState == GameController.SCREEN_STATE_RESULT_REWARD) {
              this.resultScore.getComponent(Animation).play("resultScoreEXP_in");
              this.resultScore.getComponent(Animation).once(Animation.EventType.FINISHED, function () {
                _this7.resultScore.getComponent(SceneResultScore).doPlayStartAnimation();
              });
            }
  
            if (this.screenState != GameController.SCREEN_STATE_SENSEI_SWAG) {
              for (var _i6 = 0; _i6 < this.listUIFruit.length; _i6++) {
                this.listUIFruit[_i6].getComponent(Fruit).reset();
  
                var fruitPhysics = this.listUIFruit[_i6].getComponent(FruitPhysics);
  
                if (fruitPhysics != null) fruitPhysics.pausePhysics = true;
              }
            }
          };
  
          _proto.shuffle = function shuffle(array) {
            var currentIndex = array.length,
                randomIndex;
  
            while (currentIndex != 0) {
              randomIndex = Math.floor(Math.random() * currentIndex);
              currentIndex--;
              var _ref = [array[randomIndex], array[currentIndex]];
              array[currentIndex] = _ref[0];
              array[randomIndex] = _ref[1];
            }
  
            return array;
          };
  
          _proto.useBerryBlastPowerUp = function useBerryBlastPowerUp() {
            GameController.BERRYBLAST_POWERUP = true;
            SceneGameplay.getInstance().showIconBerry(true);
          };
  
          _proto.useDeflectPowerUp = function useDeflectPowerUp() {
            GameController.getInstance().deflectCounter = 3;
            SceneGameplay.getInstance().showIconDeflect(true);
          };
  
          _proto.usePeachTimePowerUp = function usePeachTimePowerUp() {
            GameController.PEACHY_TIME = true;
            SceneGameplay.getInstance().showIconPeachTime(true);
          };
  
          _proto.isPwfRoundEnded = function isPwfRoundEnded(entries) {
            var roundEnded = entries.length == 0;
  
            if (entries.length > 0) {
              var player1HaveExtraData = entries[0].getExtraData() != "{}";
  
              if (entries.length == 1) {
                if (player1HaveExtraData) {
                  var p1Json = JSON.parse(entries[0].getExtraData());
  
                  if (p1Json.roundStarted == undefined) {
                    roundEnded = true;
                  } else {
                    var millisRoundStarted = p1Json.roundStarted;
                    var millisCurrentTime = new Date().getTime();
                    var millisDifference = millisCurrentTime - millisRoundStarted;
                    roundEnded = millisDifference >= GameController.ROUND_DURATION_IN_MILLIS;
                  }
                } else {
                  roundEnded = true;
                }
              } else if (entries.length == 2) {
                var player2HaveExtraData = entries[1].getExtraData() != "{}";
  
                if (player1HaveExtraData || player2HaveExtraData) {
                  var lastRoundStarted = 0;
  
                  if (player1HaveExtraData) {
                    var _p1Json = JSON.parse(entries[0].getExtraData());
  
                    if (_p1Json.roundStarted != undefined) lastRoundStarted = _p1Json.roundStarted;
                  }
  
                  if (player2HaveExtraData) {
                    var p2Json = JSON.parse(entries[1].getExtraData());
                    if (p2Json.roundStarted != undefined) lastRoundStarted = Math.max(p2Json.roundStarted, lastRoundStarted);
                  }
  
                  if (lastRoundStarted == 0) {
                    roundEnded = true;
                  } else {
                    var _millisRoundStarted = lastRoundStarted;
  
                    var _millisCurrentTime = new Date().getTime();
  
                    var _millisDifference = _millisCurrentTime - _millisRoundStarted;
  
                    roundEnded = _millisDifference >= GameController.ROUND_DURATION_IN_MILLIS;
                  }
                } else {
                  roundEnded = true;
                }
              }
            }
  
            return roundEnded;
          };
  
          _proto.getScreenState = function getScreenState() {
            return this.screenState;
          };
  
          _proto.getHealth = function getHealth() {
            return this.health;
          };
  
          _proto.getBestScore = function getBestScore() {
            if (GameController.context_type == "solo") return GameController.bestScore;else return this.sessionBestScore;
          };
  
          _proto.setBestScore = function setBestScore(value) {
            if (GameController.context_type == "solo") GameController.bestScore = value;else this.sessionBestScore = value;
          };
  
          _proto.updateScore = function updateScore(value) {
            if (GameController.gameMode == GameController.MODE_ARCADE && FruitManager.getInstance().doublePointDuration > 0) {
              this.scoreArcadeToDouble += value - this.score;
              this.scoreArcadeToDouble = Math.max(0, this.scoreArcadeToDouble);
              GameController.Instance.gameplayScreen.getChildByPath("doublePoints_topLabel/ArcadeDoublePointsBacking/text_doubleIncrement").getComponent(Label).string = this.scoreArcadeToDouble + "";
              return;
            }
  
            this.score = Math.max(0, value);
            this.gameplayScreen.getComponent(SceneGameplay).gameplayLeaderboard.refresh();
            if (GameController.gameMode == GameController.MODE_ARCADE) {
              MissionManager.getInstance().trySetProgress("POINTSSINGLEARCADE", this.score);
            }
            if (GameController.gameMode == GameController.MODE_CLASSIC) {
              MissionManager.getInstance().trySetProgress("POINTSSINGLECLASSIC", this.score);
            }
            if (GameController.gameMode == GameController.MODE_ZEN) {
              MissionManager.getInstance().trySetProgress("POINTSSINGLEZEN", this.score);
            }
  
            if (FruitManager.getInstance().nextScoreSpawnPomegranate != -1 && this.score >= FruitManager.getInstance().nextScoreSpawnPomegranate && GameController.gameMode == GameController.MODE_CLASSIC && !Fruit.POMEGRANATE_ACTIVE) {
              FruitManager.getInstance().spawnFruit("Pomegranate", 9 * (randomRangeInt(0, 100) < 50 ? -1 : 1));
            }
  
            GameController.bestScore = Math.max(GameController.bestScore, this.score);
  
            if (this.score >= this.targetRevive) {
              this.targetRevive += 100;
  
              if (GameController.gameMode == GameController.MODE_CLASSIC) {
                if (this.getHealth() < 3) {
                  this.updateHealth(this.getHealth() + 1, true);
                }
              }
            }
          };
  
          _proto.getZenTimer = function getZenTimer() {
            return this.zenTimer;
          };
  
          _proto.updateZenTimer = function updateZenTimer(second) {
            this.zenTimer = second;
            second = Math.ceil(second);
            var m = Math.floor(second % 3600 / 60);
            var s = Math.floor(second % 60);
            GameController.Instance.gameplayScreen.getChildByPath("container_time/container/text_time").getComponent(Label).string = m + ":" + (s < 10 ? "0" : "") + s;
            if (second > 10) GameController.Instance.gameplayScreen.getChildByPath("container_time/container/text_time").getComponent(Label).material = this.matZenTimerNormal;
  
            if (second > 10) {
              GameController.Instance.gameplayScreen.getChildByPath("container_time").getComponent(Animation).stop();
              GameController.Instance.gameplayScreen.getChildByPath("container_time").getComponent(UIOpacity).opacity = 255;
            } else {
              if (second <= 10 && second > 3) {
                if (!GameController.Instance.gameplayScreen.getChildByPath("container_time").getComponent(Animation).getState("timer_zen_timeout").isPlaying) {
                  GameController.Instance.gameplayScreen.getChildByPath("container_time").getComponent(Animation).play("timer_zen_timeout");
                  this.tryPlaySFXTickTock(1);
                }
              } else if (second > 0 && second <= 3) {
                if (!GameController.Instance.gameplayScreen.getChildByPath("container_time").getComponent(Animation).getState("timer_zen_timeout_x2").isPlaying) {
                  GameController.Instance.gameplayScreen.getChildByPath("container_time").getComponent(Animation).play("timer_zen_timeout_x2");
                }
              } else {
                GameController.Instance.gameplayScreen.getChildByPath("container_time").getComponent(Animation).stop();
                GameController.Instance.gameplayScreen.getChildByPath("container_time").getComponent(UIOpacity).opacity = 255;
              }
            }
          };
  
          _proto.updateArcadeTimer = function updateArcadeTimer(second) {
            this.arcadeTimer = second;
            second = Math.max(0, Math.ceil(second));
            var m = Math.floor(second % 3600 / 60);
            var s = Math.floor(second % 60);
            GameController.Instance.gameplayScreen.getChildByPath("container_time/container/text_time").getComponent(Label).string = m + ":" + (s < 10 ? "0" : "") + s;
            if (second > 10) GameController.Instance.gameplayScreen.getChildByPath("container_time/container/text_time").getComponent(Label).material = this.matZenTimerNormal;
  
            if (second > 10) {
              GameController.Instance.gameplayScreen.getChildByPath("container_time").getComponent(Animation).stop();
              GameController.Instance.gameplayScreen.getChildByPath("container_time").getComponent(UIOpacity).opacity = 255;
            } else {
              if (second <= 10 && second > 3) {
                if (!GameController.Instance.gameplayScreen.getChildByPath("container_time").getComponent(Animation).getState("timer_zen_timeout").isPlaying) {
                  GameController.Instance.gameplayScreen.getChildByPath("container_time").getComponent(Animation).play("timer_zen_timeout");
                  this.tryPlaySFXTickTock(1);
                }
              } else if (second > 0 && second <= 3) {
                if (!GameController.Instance.gameplayScreen.getChildByPath("container_time").getComponent(Animation).getState("timer_zen_timeout_x2").isPlaying) {
                  GameController.Instance.gameplayScreen.getChildByPath("container_time").getComponent(Animation).play("timer_zen_timeout_x2");
                }
              } else {
                GameController.Instance.gameplayScreen.getChildByPath("container_time").getComponent(Animation).stop();
                GameController.Instance.gameplayScreen.getChildByPath("container_time").getComponent(UIOpacity).opacity = 255;
              }
            }
          };
  
          _proto.tryPlaySFXTickTock = function tryPlaySFXTickTock(counter) {
            this.counterSFXTickTock = counter;
            var timer = null;
            if (GameController.gameMode == GameController.MODE_ZEN) timer = this.zenTimer;else if (GameController.gameMode == GameController.MODE_ARCADE) timer = this.arcadeTimer;else return;
            if (timer > 10) return;
            if (timer <= 0) return;
            if (counter % 2 == 1) SFXManager.getInstance().play(SFXManager.SFX_TIME_TICK);else SFXManager.getInstance().play(SFXManager.SFX_TIME_TOCK);
            this.timerSFXTickTock = 0.25;
          };
  
          _proto.updateHealth = function updateHealth(health, playAnimationHeal) {
            if (playAnimationHeal === void 0) {
              playAnimationHeal = false;
            }
  
            this.health = health;
  
            for (var i = 1; i <= 3; i++) {
              var cross = GameController.Instance.gameplayScreen.getChildByPath("container_cross/crosses/cross_" + i + "/cross_red");
              var particle = GameController.Instance.particleLifeUp;
              var anim = GameController.Instance.gameplayScreen.getChildByPath("container_cross/crosses/cross_" + i).getComponent(Animation);
  
              if (!cross.active && i > this.health) {
                cross.active = true;
                anim.play("cross_show");
              } else if (i <= this.health) {
                anim.play('cross_recovered');
  
                if (playAnimationHeal) {
                  SFXManager.Instance.play(SFXManager.SFX_EXTRA_LIFE);
                  particle.active = true;
                  particle.position = Data.getInstance().convert2DPosTo3D(cross.worldPosition);
                  particle.getComponent(ParticleSystem).play();
                  particle.getChildByPath("p_impact").getComponent(ParticleSystem).play();
                  particle.getChildByPath("p_ring").getComponent(ParticleSystem).play();
                }
              }
            }
          };
  
          _proto.showOfferContinue = function showOfferContinue() {
            GameController.getInstance().canRevive = false;
            GameController.Instance.gameplayScreen.getChildByPath("bg_container_continue").active = true;
            GameController.Instance.gameplayScreen.getChildByPath("bg_container_continue").getComponent(Animation).play("bg_container_continue_show");
            GameController.Instance.gameplayScreen.getChildByPath("container_continue").active = true;
            var anim = GameController.Instance.gameplayScreen.getChildByPath("container_continue").getComponent(Animation);
            anim.play("continue_in");
          };
  
          _proto.showGameOver = function showGameOver(callback) {
            this.gameplayScreen.getComponent(SceneGameplay).gameplayLeaderboard.getComponent(Animation).play("gameplayLeaderboards_out");
            BGMManager.getInstance().stop();
            SFXManager.getInstance().play(SFXManager.SFX_GAMEOVER);
            ScenePause.getInstance().holdButtonPause = true;
  
            var onAnimationComplete = function onAnimationComplete() {
              ScenePause.getInstance().hideButtonPause();
              GameController.getInstance().gameData.s = GameController.getInstance().score;
              console.log(GameController.getInstance().gameData);
              callback();
            };
  
            var anim = GameController.Instance.gameplayScreen.getComponent(Animation);
            anim.play("animation_game_over");
            anim.on(Animation.EventType.FINISHED, function () {
              onAnimationComplete();
            }, this, true);
          };
  
          _proto.setHoldInput = function setHoldInput(value) {
            this.holdInput = value;
            if (this.holdInput) ControllerBlade.getInstance().forceTouchEnd();
          };
  
          _proto.playAgainSolo = function playAgainSolo() {
            GameController.getInstance().setHoldInput(false);
            SceneSelectMode.setFrom("result", "", []);
            SceneSelectMode.setTitle("Solo Play");
            GameController.context_type = "solo";
            SceneSelectMode.setOnSlash(function () {
              GameController.getInstance().setHoldInput(true);
              GameController.context_type = "solo";
              GameController.getInstance().exitScreen(function () {
                GameController.getInstance().setHoldInput(false);
                GameController.getInstance().setScreenState(GameController.SCREEN_STATE_GAMEPLAY);
              });
            });
            GameController.getInstance().setScreenState(GameController.SCREEN_STATE_SELECT_MODE);
          };
  
          _proto.showBlackBG = function showBlackBG(show) {
            var blackBackground = GameController.getInstance().mainCanvasOverlay.getChildByPath("black_background");
            var anim = blackBackground.getComponent(Animation);
            anim.stop();
  
            if (show) {
              anim.play("black_background_in");
            } else {
              anim.play("black_background_out");
            }
          };
  
          _proto.ImageToDataURL = function ImageToDataURL(image) {
            var canvas = document.createElement("canvas");
            var context = canvas.getContext("2d");
            canvas.width = image.width;
            canvas.height = image.height;
            context === null || context === void 0 ? void 0 : context.drawImage(image.data, 0, 0, image.width, image.height);
            return canvas.toDataURL();
          };
  
          GameController.protect = function protect(toSave) {
            var res = "";
  
            for (var i = 0; i < toSave.length; i++) {
              res += String.fromCharCode(toSave.charCodeAt(i) ^ 170);
            }
  
            return res;
          };
  
          GameController.saveData = function saveData() {
            var saveData = {};
            var tutorialState = 0;
            if (GameController.TUTORIAL_STATE >= 1 && GameController.TUTORIAL_STATE <= 3) tutorialState = 1;
            saveData = {
              tutorial_state: tutorialState,
              solo_best_score: GameController.bestScore,
              star_fruit: Data.getInstance().starFruit,
              bg_used: Data.getInstance().bgUsed,
              blade_used: Data.getInstance().bladeUsed,
              bg_unlocked: Data.getInstance().unlockedBG,
              blade_unlocked: Data.getInstance().unlockedBlade,
              have_created_shortcut: GameController.haveCreatedShortcut,
              inventory_pu_deflect: Data.getInstance().inventoryPUDeflect,
              inventory_pu_berryblast: Data.getInstance().inventoryPUBerryBlast,
              inventory_pu_peachytime: Data.getInstance().inventoryPUPeachyTime,
              list_mission: MissionManager.getInstance().generateMissionDataToSave(),
              last_played: GameController.last_played,
              total_exp: Data.getInstance().totalExp,
              sfx_muted: SFXManager.isMuted,
              bgm_muted: BGMManager.isMuted
            };
            var finalSaveData = GameController.protect(JSON.stringify(saveData));
            localStorage.setItem("mlasufnuand", finalSaveData);
          };
  
          _proto.haveChangeDay = function haveChangeDay() {
            var lastPlayed = new Date(GameController.last_played);
            lastPlayed.setHours(0);
            lastPlayed.setMinutes(0);
            lastPlayed.setSeconds(0);
            lastPlayed.setMilliseconds(0);
            var curDate = new Date();
            curDate.setHours(0);
            curDate.setMinutes(0);
            curDate.setSeconds(0);
            curDate.setMilliseconds(0);
            return lastPlayed < curDate;
          };
  
          GameController.loadImage = function loadImage(url, onFinish) {
            GameController.loadImageWithoutExt(url, onFinish);
          };
  
          GameController.loadImageWithoutExt = function loadImageWithoutExt(url, onFinish) {
            if (url == "") {
              resources.load("AvatarWatermelonSliced/spriteFrame", SpriteFrame, function (err, spriteFrame) {
                onFinish(spriteFrame);
              });
            } else {
              if (GameController.jsonProfilePicture[url] == undefined) {
                assetManager.loadRemote(url, {
                  ext: '.png'
                }, function (err, imageAsset) {
                  var spriteFrame = new SpriteFrame();
                  var texture = new Texture2D();
                  texture.image = imageAsset;
                  spriteFrame.texture = texture;
                  GameController.jsonProfilePicture[url] = spriteFrame;
                  onFinish(spriteFrame);
                });
              } else {
                onFinish(GameController.jsonProfilePicture[url]);
              }
            }
          };
  
          _proto.sortEntries = function sortEntries(entries, isTournament) {
            if (isTournament === void 0) {
              isTournament = false;
            }
  
            var entriesManualSort = [];
  
            if (isTournament) {
              for (var i = 0; i < entries.length; i++) {
                var name = entries[i].getPlayer().getName();
                var photo = entries[i].getPlayer().getPhoto();
                var id = entries[i].getPlayer().getID();
                var score = entries[i].getScore();
                var rank = entries[i].getRank();
                entriesManualSort.push({
                  id: id,
                  name: name,
                  photo: photo,
                  score: score,
                  rank: rank
                });
              }
  
              return entriesManualSort;
            } else {
              if (entries.length <= 2) {
                var lastRoundStarted = 0;
  
                for (var _i7 = 0; _i7 < entries.length; _i7++) {
                  var json = JSON.parse(entries[_i7].getExtraData());
                  if (json.roundStarted) lastRoundStarted = Math.max(lastRoundStarted, json.roundStarted);
                }
  
                for (var _i8 = 0; _i8 < entries.length; _i8++) {
                  var _name = entries[_i8].getPlayer().getName();
  
                  var _photo = entries[_i8].getPlayer().getPhoto();
  
                  var _id = entries[_i8].getPlayer().getID();
  
                  var _score = 0;
  
                  var _json = JSON.parse(entries[_i8].getExtraData());
  
                  if (_json.lastUpdated && _json.bestScore && lastRoundStarted > 0) {
                    if (_json.lastUpdated >= lastRoundStarted) _score = _json.bestScore;
                  }
  
                  entriesManualSort.push({
                    id: _id,
                    name: _name,
                    photo: _photo,
                    score: _score,
                    rank: 0
                  });
                }
              } else {
                for (var _i9 = 0; _i9 < entries.length; _i9++) {
                  var _name2 = entries[_i9].getPlayer().getName();
  
                  var _photo2 = entries[_i9].getPlayer().getPhoto();
  
                  var _id2 = entries[_i9].getPlayer().getID();
  
                  var _score2 = entries[_i9].getScore();
  
                  entriesManualSort.push({
                    id: _id2,
                    name: _name2,
                    photo: _photo2,
                    score: _score2,
                    rank: 0
                  });
                }
              }
  
              for (var _i10 = 0; _i10 < entriesManualSort.length; _i10++) {
                for (var j = _i10 + 1; j < entriesManualSort.length; j++) {
                  if (entriesManualSort[j].score > entriesManualSort[_i10].score) {
                    var temp = entriesManualSort[j];
                    entriesManualSort[j] = entriesManualSort[_i10];
                    entriesManualSort[_i10] = temp;
                  }
                }
              }
  
              for (var _i11 = 0; _i11 < entriesManualSort.length; _i11++) {
                entriesManualSort[_i11].rank = _i11 + 1;
              }
  
              return entriesManualSort;
            }
          };
  
          _proto.playStarfruitIncrement = function playStarfruitIncrement(starfruitReward) {
            if (starfruitReward < 10) {
              this.scheduleOnce(function () {
                SFXManager.getInstance().play(SFXManager.SFX_UI_STARFRUIT_INCREMENT);
              }, 0.1);
            } else {
              var totalPlayed = Math.min(Math.floor(starfruitReward / 10), 10);
              var offsetDelay = 0.3 / totalPlayed;
              var curDelay = 0.1;
  
              for (var i = 0; i < totalPlayed; i++) {
                this.scheduleOnce(function () {
                  SFXManager.getInstance().play(SFXManager.SFX_UI_STARFRUIT_INCREMENT);
                }, curDelay);
                curDelay += offsetDelay;
              }
            }
          };
  
          _proto.playStarfruitSpend = function playStarfruitSpend(value) {
            if (value < 10) {
              this.scheduleOnce(function () {
                SFXManager.getInstance().play(SFXManager.SFX_UI_STARFRUIT_SPEND);
              }, 0.1);
            } else {
              var totalPlayed = Math.min(Math.floor(value / 10), 10);
              var offsetDelay = 0.4 / totalPlayed;
              var curDelay = 0;
  
              for (var i = 0; i < totalPlayed; i++) {
                this.scheduleOnce(function () {
                  SFXManager.getInstance().play(SFXManager.SFX_UI_STARFRUIT_SPEND);
                }, curDelay);
                curDelay += offsetDelay;
              }
            }
          };
  
          _proto.getSecondToNextDay = function getSecondToNextDay() {
            var cur = new Date();
            var nextReset = new Date();
            nextReset.setDate(nextReset.getDate() + 1);
            nextReset.setHours(0);
            nextReset.setMinutes(0);
            nextReset.setSeconds(0);
            return (nextReset.getTime() - cur.getTime()) / 1000;
          };
  
          _proto.secondToString = function secondToString(second) {
            var d = Math.floor(second / (3600 * 24));
            var h = Math.floor(second % (3600 * 24) / 3600);
            var m = Math.floor(second % 3600 / 60);
            var s = Math.floor(second % 60);
            var text = '';
            if (d > 0) text = d + 'D ' + h + 'H';else if (h > 0) text = h + 'H ' + m + 'M';else if (m > 0) text = m + 'M ' + s + 'S';else if (s > 0) text = s + 'S';
            return text;
          };
  
          GameController.deg2rad = function deg2rad(degree) {
            return degree * (Math.PI / 180);
          };
  
          GameController.rad2deg = function rad2deg(rad) {
            return rad * (180 / Math.PI);
          };
  
          GameController.stringFormat = function stringFormat(template) {
            for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
              args[_key2 - 1] = arguments[_key2];
            }
  
            return template.replace(/{(\d+)}/g, function (match, number) {
              return typeof args[number] != 'undefined' ? args[number] : match;
            });
          };
  
          _createClass(GameController, [{
            key: "countNotSendCustomUpdate",
            get: function get() {
              return this._countNotSendCustomUpdate;
            },
            set: function set(value) {
              this._countNotSendCustomUpdate = value;
            }
          }, {
            key: "sessionRank",
            get: function get() {
              return this._sessionRank;
            },
            set: function set(value) {
              this._sessionRank = value;
            }
          }, {
            key: "sessionBestScore",
            get: function get() {
              return this._sessionBestScore;
            },
            set: function set(value) {
              this._sessionBestScore = value;
            }
          }, {
            key: "scoreArcadeToDouble",
            get: function get() {
              return this._scoreArcadeToDouble;
            },
            set: function set(value) {
              this._scoreArcadeToDouble = value;
            }
          }, {
            key: "score",
            get: function get() {
              return this._score;
            },
            set: function set(value) {
              this._score = value;
            }
          }, {
            key: "holdInput",
            get: function get() {
              return this._holdInput;
            },
            set: function set(value) {
              this._holdInput = value;
            }
          }, {
            key: "dieFromBomb",
            get: function get() {
              return this._dieFromBomb;
            },
            set: function set(value) {
              this._dieFromBomb = value;
            }
          }, {
            key: "canRevive",
            get: function get() {
              return this._canRevive;
            },
            set: function set(value) {
              this._canRevive = value;
            }
          }, {
            key: "deflectCounter",
            get: function get() {
              return this._deflectCounter;
            },
            set: function set(value) {
              this._deflectCounter = value;
            }
          }]);
  
          return GameController;
        }(Component), _defineProperty(_class3, "FORCE_TUTORIAL", false), _defineProperty(_class3, "FORCE_NO_CONNECTED_FRIENDS", false), _defineProperty(_class3, "FORCE_FRUIT_MODE", ""), _defineProperty(_class3, "isServerLocal", false), _defineProperty(_class3, "RIG_STARFRUIT", false), _defineProperty(_class3, "RIG_NO_SAVE_DATA", false), _defineProperty(_class3, "RIG_NO_LOAD_DATA", false), _defineProperty(_class3, "RIG_ALWAYS_GENERATE_NEW_MISSION", false), _defineProperty(_class3, "RIG_BANANA_ARCADE_EASY_SPAWN", false), _defineProperty(_class3, "RIG_MISSION_SPECIFIC", false), _defineProperty(_class3, "RIG_MISSION_AUTO_COMPLETE", false), _defineProperty(_class3, "ROUND_DURATION_IN_MILLIS", 259200000), _defineProperty(_class3, "RIG_EXP_RECEIVED", 0), _defineProperty(_class3, "entryPoint", null), _defineProperty(_class3, "counterWithoutWatchFreePowerup", 0), _defineProperty(_class3, "BERRYBLAST_POWERUP", false), _defineProperty(_class3, "PEACHY_TIME", false), _defineProperty(_class3, "MODE_CLASSIC", 0), _defineProperty(_class3, "MODE_ZEN", 1), _defineProperty(_class3, "MODE_ARCADE", 2), _defineProperty(_class3, "gameMode", 0), _defineProperty(_class3, "fruitMode", ""), _defineProperty(_class3, "loadedImage", {}), _defineProperty(_class3, "Instance", null), _defineProperty(_class3, "haveCreatedShortcut", false), _defineProperty(_class3, "context_type", "solo"), _defineProperty(_class3, "start_context_on_solo", false), _defineProperty(_class3, "connectedPlayer", []), _defineProperty(_class3, "TUTORIAL_STATE", 0), _defineProperty(_class3, "last_played", 0), _defineProperty(_class3, "IMMUNE", false), _defineProperty(_class3, "SCREEN_STATE_HOMESCREEN", 0), _defineProperty(_class3, "SCREEN_STATE_GAMEPLAY", 1), _defineProperty(_class3, "SCREEN_STATE_SENSEI_SWAG", 3), _defineProperty(_class3, "SCREEN_STATE_SETTING", 4), _defineProperty(_class3, "SCREEN_STATE_LANGUAGE", 5), _defineProperty(_class3, "SCREEN_STATE_SELECT_MODE", 6), _defineProperty(_class3, "SCREEN_STATE_RESULT_REWARD", 7), _defineProperty(_class3, "STATE_GAME_COUNTDOWN", 0), _defineProperty(_class3, "STATE_GAME_PLAYING", 1), _defineProperty(_class3, "STATE_GAME_LOSE", 2), _defineProperty(_class3, "STATE_GAME_PAUSE", 3), _defineProperty(_class3, "countSeenResult", 0), _defineProperty(_class3, "bestScore", 0), _defineProperty(_class3, "prevBestScore", 0), _defineProperty(_class3, "jsonProfilePicture", {}), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "iconFruitFact", [_dec2], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function initializer() {
            return [];
          }
        }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "canvasBlade", [_dec3], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "canvasForTextBehind3D", [_dec4], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "canvasForGameplayText", [_dec5], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "mainCanvas2", [_dec6], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "mainCanvas", [_dec7], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "mainCanvasOverlay", [_dec8], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "canvasScreenshot", [_dec9], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "mainScreen", [_dec10], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "camera", [_dec11], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "loadingScreen", [_dec12], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "homescreen", [_dec13], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "prefabArcadeTopLabel", [_dec14], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "matBestScoreBiasa", [_dec15], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "matBestScoreNew", [_dec16], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "matZenTimerNormal", [_dec17], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "matZenTimerTimeOut", [_dec18], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "labelLog", [_dec19], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        })), _class2)) || _class));
  
        cclegacy._RF.pop();
      }
    };
  });
  
  System.register("chunks:///_virtual/FruitManager.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './BGMManager.ts', './SFXManager.ts', './BlitzManager.ts', './Fruit.ts', './FruitPhysics.ts', './ScenePause.ts', './Bomb.ts', './ControllerBlade.ts', './GameController.ts', './ArcadeBonusBoardController.ts', './FollowTarget.ts', './AdsManager.ts'], function (exports) {
    'use strict';
  
    var _defineProperty, _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Prefab, Label, Camera, instantiate, randomRangeInt, Vec3, setDisplayStats, PhysicsSystem, Animation, ParticleSystem, randomRange, RigidBody, Quat, BoxCollider, MeshRenderer, find, view, Sprite, Color, AnimationComponent, UITransform, Component, tween, BGMManager, SFXManager, BlitzManager, Fruit, FruitPhysics, ScenePause, Bomb, ControllerBlade, GameController, ArcadeBonusBoardController, FollowTarget, AdsManager;
  
    return {
      setters: [function (module) {
        _defineProperty = module.defineProperty;
        _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
        _inheritsLoose = module.inheritsLoose;
        _initializerDefineProperty = module.initializerDefineProperty;
        _assertThisInitialized = module.assertThisInitialized;
        _createClass = module.createClass;
      }, function (module) {
        cclegacy = module.cclegacy;
        _decorator = module._decorator;
        Prefab = module.Prefab;
        Label = module.Label;
        Camera = module.Camera;
        instantiate = module.instantiate;
        randomRangeInt = module.randomRangeInt;
        Vec3 = module.Vec3;
        setDisplayStats = module.setDisplayStats;
        PhysicsSystem = module.PhysicsSystem;
        Animation = module.Animation;
        ParticleSystem = module.ParticleSystem;
        randomRange = module.randomRange;
        RigidBody = module.RigidBody;
        Quat = module.Quat;
        BoxCollider = module.BoxCollider;
        MeshRenderer = module.MeshRenderer;
        find = module.find;
        view = module.view;
        Sprite = module.Sprite;
        Color = module.Color;
        AnimationComponent = module.AnimationComponent;
        UITransform = module.UITransform;
        Component = module.Component;
        tween = module.tween;
      }, function (module) {
        BGMManager = module.BGMManager;
      }, function (module) {
        SFXManager = module.SFXManager;
      }, function (module) {
        BlitzManager = module.BlitzManager;
      }, function (module) {
        Fruit = module.Fruit;
      }, function (module) {
        FruitPhysics = module.FruitPhysics;
      }, function (module) {
        ScenePause = module.ScenePause;
      }, function (module) {
        Bomb = module.Bomb;
      }, function (module) {
        ControllerBlade = module.ControllerBlade;
      }, function (module) {
        GameController = module.GameController;
      }, function (module) {
        ArcadeBonusBoardController = module.ArcadeBonusBoardController;
      }, function (module) {
        FollowTarget = module.FollowTarget;
      }, function (module) {
        AdsManager = module.AdsManager;
      }],
      execute: function () {
        var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _class3, _temp;
  
        cclegacy._RF.push({}, "d5c3cQbdXFEeJj9fFHZTltE", "FruitManager", undefined);
  
        var ccclass = _decorator.ccclass,
            property = _decorator.property;
        var FruitManager = exports('FruitManager', (_dec = ccclass('FruitManager'), _dec2 = property({
          type: [Prefab]
        }), _dec3 = property({
          type: [Prefab]
        }), _dec4 = property({
          type: Prefab
        }), _dec5 = property({
          type: Prefab
        }), _dec6 = property({
          type: Prefab
        }), _dec7 = property({
          type: Prefab
        }), _dec8 = property({
          type: Prefab
        }), _dec9 = property({
          type: Prefab
        }), _dec10 = property({
          type: Prefab
        }), _dec11 = property({
          type: Prefab
        }), _dec12 = property({
          type: Prefab
        }), _dec13 = property({
          type: Prefab
        }), _dec14 = property({
          type: Prefab
        }), _dec15 = property({
          type: Prefab
        }), _dec16 = property({
          type: Prefab
        }), _dec17 = property({
          type: Prefab
        }), _dec18 = property({
          type: Prefab
        }), _dec19 = property({
          type: Prefab
        }), _dec20 = property({
          type: Prefab
        }), _dec21 = property({
          type: Prefab
        }), _dec22 = property({
          type: Prefab,
          displayName: "Prefab specific fruit"
        }), _dec23 = property({
          type: Prefab
        }), _dec24 = property({
          type: Prefab
        }), _dec25 = property({
          type: Label
        }), _dec26 = property({
          type: Camera,
          displayName: "Main Camera"
        }), _dec27 = property({
          type: Number
        }), _dec(_class = (_class2 = (_temp = _class3 = /*#__PURE__*/function (_Component) {
          _inheritsLoose(FruitManager, _Component);
  
          function FruitManager() {
            var _this;
  
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
  
            _this = _Component.call.apply(_Component, [this].concat(args)) || this;
  
            _initializerDefineProperty(_assertThisInitialized(_this), "fruitFBXList", _descriptor, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "juiceParticle", _descriptor2, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "prefabCriticalParticle", _descriptor3, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "prefabTrailParticle", _descriptor4, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "prefabBombRay", _descriptor5, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "prefabCross", _descriptor6, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "prefabParticleFront", _descriptor7, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "prefabParticleBack", _descriptor8, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "prefabParticleShadow", _descriptor9, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "textFruitCombo", _descriptor10, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "textFruitCritical", _descriptor11, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "textBerryBlast", _descriptor12, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "prefabBerryBlastShockwave", _descriptor13, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "prefabTextPomegranateScore", _descriptor14, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "prefabTextPomegranateSlice", _descriptor15, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "prefabPomegranateRay", _descriptor16, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "prefabPomegranateRay2D", _descriptor17, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "prefabBombPurpleText", _descriptor18, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "prefabTextPeachyTime", _descriptor19, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "prefabPeachyBurst", _descriptor20, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "prefabSpecificFruit", _descriptor21, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "textBombDeflect", _descriptor22, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "particleBombDeflect", _descriptor23, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "textFruitCount", _descriptor24, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "mainCamera", _descriptor25, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "forceFreezeSpawnBeforeEndGame", _descriptor26, _assertThisInitialized(_this));
  
            _defineProperty(_assertThisInitialized(_this), "lastBananaSpawn", 0);
  
            _defineProperty(_assertThisInitialized(_this), "potentialBananas", []);
  
            _defineProperty(_assertThisInitialized(_this), "poolTextBerryBlast", []);
  
            _defineProperty(_assertThisInitialized(_this), "poolBerryBlastShockwave", []);
  
            _defineProperty(_assertThisInitialized(_this), "_startTimer", 0);
  
            _defineProperty(_assertThisInitialized(_this), "nextScoreSpawnPomegranate", 50);
  
            _defineProperty(_assertThisInitialized(_this), "activeObject", []);
  
            _defineProperty(_assertThisInitialized(_this), "poolObject", []);
  
            _defineProperty(_assertThisInitialized(_this), "_poolPurpleBombText", []);
  
            _defineProperty(_assertThisInitialized(_this), "textPomegranateScore", null);
  
            _defineProperty(_assertThisInitialized(_this), "textPomegranateSlice", null);
  
            _defineProperty(_assertThisInitialized(_this), "textPeachyTime", null);
  
            _defineProperty(_assertThisInitialized(_this), "_poolPomegranateRay", []);
  
            _defineProperty(_assertThisInitialized(_this), "_activePomegranateRay", []);
  
            _defineProperty(_assertThisInitialized(_this), "_poolPomegranateRay2D", []);
  
            _defineProperty(_assertThisInitialized(_this), "_activePomegranateRay2D", []);
  
            _defineProperty(_assertThisInitialized(_this), "textFruitCombos", []);
  
            _defineProperty(_assertThisInitialized(_this), "textFruitCriticals", []);
  
            _defineProperty(_assertThisInitialized(_this), "poolSlicedParticle", []);
  
            _defineProperty(_assertThisInitialized(_this), "textBombDeflects", []);
  
            _defineProperty(_assertThisInitialized(_this), "particleDeflects", []);
  
            _defineProperty(_assertThisInitialized(_this), "poolJuiceParticle", []);
  
            _defineProperty(_assertThisInitialized(_this), "poolCriticalParticle", []);
  
            _defineProperty(_assertThisInitialized(_this), "poolTrailCritical", []);
  
            _defineProperty(_assertThisInitialized(_this), "poolBackParticle", []);
  
            _defineProperty(_assertThisInitialized(_this), "fruitToSpawnList", []);
  
            _defineProperty(_assertThisInitialized(_this), "poolCrosses", []);
  
            _defineProperty(_assertThisInitialized(_this), "poolShadowParticle", []);
  
            _defineProperty(_assertThisInitialized(_this), "_poolBombRay", []);
  
            _defineProperty(_assertThisInitialized(_this), "_countdown", 3);
  
            _defineProperty(_assertThisInitialized(_this), "_bombCounter", 0);
  
            _defineProperty(_assertThisInitialized(_this), "specialBananaOnScreen", "");
  
            _defineProperty(_assertThisInitialized(_this), "spawnCount", 0);
  
            _defineProperty(_assertThisInitialized(_this), "waveList", [{
              id: 1,
              minWave: 0,
              chance: 90,
              chanceRegrowth: 0.33,
              delay: 1,
              dtScale: 0.9,
              dtScaleIncrease: 0,
              fruitChance: [{
                fruits: ['Watermelon'],
                min: 1,
                max: 1,
                between: 0
              }]
            }, {
              id: 2,
              minWave: 1,
              chance: 90,
              chanceRegrowth: 0.33,
              delay: 1,
              dtScale: 0.9,
              dtScaleIncrease: 0,
              fruitChance: [{
                fruits: ['R'],
                min: 1,
                max: 1,
                between: 0
              }]
            }, {
              id: 3,
              minWave: 2,
              chance: 90,
              chanceRegrowth: 0.33,
              delay: 1,
              dtScale: 0.9,
              dtScaleIncrease: 0,
              fruitChance: [{
                fruits: ['R'],
                min: 2,
                max: 3,
                between: 0
              }]
            }, {
              id: 4,
              minWave: 4,
              chance: 90,
              chanceRegrowth: 0.33,
              delay: 0.8,
              dtScale: 0.9,
              dtScaleIncrease: 0,
              fruitChance: [{
                fruits: ['Bomb'],
                min: 1,
                max: 2,
                between: 0
              }]
            }, {
              id: 5,
              minWave: 5,
              chance: 90,
              chanceRegrowth: 0.33,
              delay: 0.8,
              dtScale: 0.9,
              dtScaleIncrease: 0,
              fruitChance: [{
                fruits: ['Bomb'],
                min: 1,
                max: 1,
                between: 0
              }, {
                fruits: ['R'],
                min: 1,
                max: 2,
                between: 0
              }]
            }, {
              id: 6,
              minWave: 5,
              chance: 90,
              chanceRegrowth: 0.33,
              delay: 0.8,
              dtScale: 0.9,
              dtScaleIncrease: 0,
              fruitChance: [{
                fruits: ['R'],
                min: 7,
                max: 7,
                between: 0.7
              }]
            }, {
              id: 7,
              minWave: 9,
              chance: 90,
              chanceRegrowth: 0.33,
              delay: 0.8,
              dtScale: 0.95,
              dtScaleIncrease: 0,
              fruitChance: [{
                fruits: ['R', 'R', 'B'],
                min: 4,
                max: 6,
                between: 0.6
              }]
            }, {
              id: 8,
              minWave: 9,
              chance: 90,
              chanceRegrowth: 0.33,
              delay: 0.8,
              dtScale: 0.95,
              dtScaleIncrease: 0,
              fruitChance: [{
                fruits: ['R'],
                min: 4,
                max: 6,
                between: 0
              }]
            }, {
              id: 9,
              minWave: 9,
              chance: 90,
              chanceRegrowth: 0.33,
              delay: 0.8,
              dtScale: 0.95,
              dtScaleIncrease: 0,
              fruitChance: [{
                fruits: ['R', 'R', 'R', 'B'],
                min: 3,
                max: 4,
                between: 0
              }]
            }, {
              id: 10,
              minWave: 14,
              chance: 90,
              chanceRegrowth: 0.33,
              delay: 0.8,
              dtScale: 0.95,
              dtScaleIncrease: 0,
              fruitChance: [{
                fruits: ['Bomb'],
                min: 1,
                max: 2,
                between: 0
              }, {
                fruits: ['R'],
                min: 2,
                max: 3,
                between: 0
              }]
            }, {
              id: 11,
              minWave: 14,
              chance: 90,
              chanceRegrowth: 0.33,
              delay: 0.8,
              dtScale: 1.0,
              dtScaleIncrease: 0,
              fruitChance: [{
                fruits: ['R', 'R', 'B'],
                min: 16,
                max: 16,
                between: 0.4
              }]
            }, {
              id: 12,
              minWave: 14,
              chance: 90,
              chanceRegrowth: 0.33,
              delay: 0.8,
              dtScale: 1.0,
              dtScaleIncrease: 0,
              fruitChance: [{
                fruits: ['R'],
                min: 10,
                max: 10,
                between: 0.3
              }]
            }, {
              id: 13,
              minWave: 19,
              chance: 90,
              chanceRegrowth: 0.33,
              delay: 0.8,
              dtScale: 1.0,
              dtScaleIncrease: 0,
              fruitChance: [{
                fruits: ['R', 'R', 'B'],
                min: 8,
                max: 8,
                between: 0.5,
                delayInc: -0.2
              }]
            }, {
              id: 14,
              minWave: 19,
              chance: 90,
              chanceRegrowth: 0.33,
              delay: 0.8,
              dtScale: 1.0,
              dtScaleIncrease: 0,
              fruitChance: [{
                fruits: ['R', 'R', 'R', 'R', 'R', 'B'],
                min: 4,
                max: 6,
                between: 0
              }]
            }, {
              id: 15,
              minWave: 22,
              chance: 67,
              chanceRegrowth: 0.33,
              delay: 0.8,
              dtScale: 1.0,
              dtScaleIncrease: 0.02,
              fruitChance: [{
                fruits: ['R', 'R', 'R', 'B'],
                min: 5,
                max: 10,
                between: 0.4
              }]
            }, {
              id: 16,
              minWave: 22,
              chance: 67,
              chanceRegrowth: 0.33,
              delay: 0.8,
              dtScale: 1.0,
              dtScaleIncrease: 0.02,
              fruitChance: [{
                fruits: ['R', 'R', 'R', 'B'],
                min: 3,
                max: 5,
                between: 0.4
              }]
            }, {
              id: 17,
              minWave: 22,
              chance: 67,
              chanceRegrowth: 0.33,
              delay: 0.8,
              dtScale: 0.9,
              dtScaleIncrease: 0.02,
              fruitChance: [{
                fruits: ['R'],
                min: 4,
                max: 7,
                between: 0.25
              }]
            }, {
              id: 18,
              minWave: 22,
              chance: 68,
              chanceRegrowth: 0.33,
              delay: 0.8,
              dtScale: 1.0,
              dtScaleIncrease: 0.02,
              fruitChance: [{
                fruits: ['R', 'R', 'B'],
                min: 5,
                max: 7,
                between: 0.4
              }]
            }]);
  
            _defineProperty(_assertThisInitialized(_this), "waveListZen", [{
              id: 1,
              minWave: 0,
              maxWave: 2,
              chance: 10,
              chanceRegrowth: 0.25,
              delay: 0.2,
              dtScale: 0.95,
              dtScaleIncrease: 0,
              fruitChance: [{
                fruits: ['R'],
                min: 4,
                max: 6,
                between: 0.4
              }]
            }, {
              id: 2,
              minWave: 0,
              chance: 10,
              chanceRegrowth: 0.25,
              delay: 0.2,
              dtScale: 0.95,
              dtScaleIncrease: 0,
              fruitChance: [{
                fruits: ['R'],
                min: 4,
                max: 8,
                between: 0.3
              }]
            }, {
              id: 3,
              minWave: 1,
              chance: 5,
              chanceRegrowth: 0.25,
              delay: 0.2,
              dtScale: 0.95,
              dtScaleIncrease: 0,
              fruitChance: [{
                fruits: ['1F'],
                min: 4,
                max: 10,
                between: 0.4
              }]
            }, {
              id: 4,
              minWave: 1,
              chance: 8,
              chanceRegrowth: 0.25,
              delay: 0.2,
              dtScale: 0.95,
              dtScaleIncrease: 0,
              fruitChance: [{
                fruits: ['R'],
                min: 4,
                max: 10,
                between: 0.4
              }]
            }, {
              id: 5,
              minWave: 1,
              chance: 7,
              chanceRegrowth: 0.25,
              delay: 0.2,
              dtScale: 0.95,
              dtScaleIncrease: 0,
              fruitChance: [{
                fruits: ['R'],
                min: 4,
                max: 14,
                between: 0.2
              }]
            }, {
              id: 6,
              minWave: 1,
              chance: 20,
              chanceRegrowth: 0.25,
              delay: 0.2,
              dtScale: 0.95,
              dtScaleIncrease: 0,
              fruitChance: [{
                fruits: ['R'],
                min: 3,
                max: 7,
                between: 0.2
              }]
            }, {
              id: 7,
              minWave: 1,
              chance: 10,
              chanceRegrowth: 0.25,
              delay: 0.2,
              dtScale: 0.95,
              dtScaleIncrease: 0,
              fruitChance: [{
                fruits: ['1F'],
                min: 3,
                max: 7,
                between: 0.2
              }]
            }, {
              id: 8,
              minWave: 1,
              chance: 10,
              chanceRegrowth: 0.25,
              delay: 0.2,
              dtScale: 0.95,
              dtScaleIncrease: 0,
              fruitChance: [{
                fruits: ['1F'],
                min: 3,
                max: 7,
                between: 0.2
              }]
            }, {
              id: 9,
              minWave: 1,
              chance: 15,
              chanceRegrowth: 0.25,
              delay: 0.2,
              dtScale: 0.95,
              dtScaleIncrease: 0,
              fruitChance: [{
                fruits: ['R'],
                min: 4,
                max: 7,
                between: 0.8
              }, {
                fruits: ['R'],
                min: 3,
                max: 7,
                between: 0.75
              }]
            }, {
              id: 10,
              minWave: 1,
              chance: 15,
              chanceRegrowth: 0.25,
              delay: 0.2,
              dtScale: 0.95,
              dtScaleIncrease: 0,
              fruitChance: [{
                fruits: ['R'],
                min: 2,
                max: 2,
                between: 0.5
              }, {
                fruits: ['R'],
                min: 2,
                max: 2,
                between: 0.5
              }, {
                fruits: ['R'],
                min: 1,
                max: 1,
                between: 1.2
              }]
            }, {
              id: 11,
              minWave: 1,
              chance: 15,
              chanceRegrowth: 0.25,
              delay: 0.2,
              dtScale: 0.95,
              dtScaleIncrease: 0,
              fruitChance: [{
                fruits: ['R'],
                min: 3,
                max: 3,
                between: 0.5
              }, {
                fruits: ['R'],
                min: 1,
                max: 1,
                between: 0.5
              }, {
                fruits: ['R'],
                min: 1,
                max: 1,
                between: 0.9
              }]
            }, {
              id: 12,
              minWave: 1,
              chance: 18,
              chanceRegrowth: 0.25,
              delay: 0.2,
              dtScale: 0.95,
              dtScaleIncrease: 0,
              fruitChance: [{
                fruits: ['R'],
                min: 1,
                max: 1,
                between: 0
              }, {
                fruits: ['R'],
                min: 1,
                max: 1,
                between: 0.45
              }, {
                fruits: ['R'],
                min: 1,
                max: 1,
                between: 0.9
              }, {
                fruits: ['R'],
                min: 1,
                max: 1,
                between: 0.9
              }]
            }]);
  
            _defineProperty(_assertThisInitialized(_this), "waveListArcade", [{
              id: 1,
              minWave: 0,
              maxWave: 2,
              chance: 50,
              chanceRegrowth: 0,
              delay: 0.4,
              dtScale: 1,
              dtScaleIncrease: 0,
              fruitChance: [{
                fruits: ['1F'],
                min: 4,
                max: 7,
                between: 0.35
              }]
            }, {
              id: 2,
              minWave: 0,
              maxWave: 2,
              chance: 30,
              chanceRegrowth: 0,
              delay: 0.4,
              dtScale: 1,
              dtScaleIncrease: 0,
              fruitChance: [{
                fruits: ['R'],
                min: 3,
                max: 5,
                between: 0
              }]
            }, {
              id: 3,
              minWave: 0,
              maxWave: 2,
              chance: 100,
              chanceRegrowth: 0,
              delay: 0.4,
              dtScale: 1,
              dtScaleIncrease: 0,
              fruitChance: [{
                fruits: ['R'],
                min: 4,
                max: 7,
                between: 0.25
              }]
            }, {
              id: 4,
              minWave: 0,
              maxWave: 2,
              chance: 100,
              chanceRegrowth: 0,
              delay: 0.4,
              dtScale: 1,
              dtScaleIncrease: 0,
              fruitChance: [{
                fruits: ['R'],
                min: 4,
                max: 7,
                between: 0.15
              }]
            }, {
              id: 5,
              minWave: 2,
              chance: 50,
              chanceRegrowth: 0,
              delay: 0.4,
              dtScale: 1,
              dtScaleIncrease: 0,
              fruitChance: [{
                fruits: ['1F'],
                min: 4,
                max: 7,
                between: 0.35
              }]
            }, {
              id: 6,
              minWave: 2,
              chance: 30,
              chanceRegrowth: 0,
              delay: 0.4,
              dtScale: 1,
              dtScaleIncrease: 0,
              fruitChance: [{
                fruits: ['1F'],
                min: 3,
                max: 5,
                between: 0
              }]
            }, {
              id: 7,
              minWave: 2,
              chance: 80,
              chanceRegrowth: 0,
              delay: 0.4,
              dtScale: 1,
              dtScaleIncrease: 0,
              fruitChance: [{
                fruits: ['R'],
                min: 4,
                max: 6,
                between: 0.375
              }]
            }, {
              id: 8,
              minWave: 2,
              chance: 100,
              chanceRegrowth: 0,
              delay: 0.4,
              dtScale: 1,
              dtScaleIncrease: 0,
              fruitChance: [{
                fruits: ['R'],
                min: 3,
                max: 4,
                between: 0
              }, {
                fruits: ['Bomb_purple'],
                min: 1,
                max: 2,
                between: 0
              }]
            }, {
              id: 9,
              minWave: 2,
              chance: 80,
              chanceRegrowth: 0,
              delay: 0.4,
              dtScale: 1,
              dtScaleIncrease: 0,
              fruitChance: [{
                fruits: ['R'],
                min: 3,
                max: 5,
                between: 0
              }]
            }, {
              id: 10,
              minWave: 2,
              chance: 100,
              chanceRegrowth: 0,
              delay: 0.4,
              dtScale: 1,
              dtScaleIncrease: 0,
              fruitChance: [{
                fruits: ['R'],
                min: 4,
                max: 7,
                between: 0.25
              }]
            }, {
              id: 11,
              minWave: 2,
              chance: 100,
              chanceRegrowth: 0,
              delay: 0.4,
              dtScale: 1,
              dtScaleIncrease: 0,
              fruitChance: [{
                fruits: ['R'],
                min: 5,
                max: 7,
                between: 0.3
              }]
            }, {
              id: 12,
              minWave: 2,
              chance: 100,
              chanceRegrowth: 0,
              delay: 0.4,
              dtScale: 1,
              dtScaleIncrease: 0,
              fruitChance: [{
                fruits: ['R'],
                min: 4,
                max: 6,
                between: 0.8
              }, {
                fruits: ['R'],
                min: 4,
                max: 6,
                between: 0.6
              }]
            }, {
              id: 13,
              minWave: 2,
              chance: 100,
              chanceRegrowth: 0,
              delay: 0.4,
              dtScale: 1,
              dtScaleIncrease: 0,
              fruitChance: [{
                fruits: ['R'],
                min: 4,
                max: 7,
                between: 0.15
              }]
            }]);
  
            _defineProperty(_assertThisInitialized(_this), "waveListArcadeFrenzy", [{
              id: 1,
              minWave: 0,
              chance: 15,
              chanceRegrowth: 0,
              delay: 0.2,
              dtScale: 1,
              dtScaleIncrease: 0,
              fruitChance: [{
                fruits: ['R'],
                min: 1,
                max: 2,
                between: 0.3,
                forcePosition: "left"
              }, {
                fruits: ['R'],
                min: 1,
                max: 2,
                between: 0.3,
                forcePosition: "right"
              }]
            }, {
              id: 2,
              minWave: 0,
              chance: 10,
              chanceRegrowth: 0,
              delay: 0.003,
              dtScale: 1,
              dtScaleIncrease: 0,
              fruitChance: [{
                fruits: ['R'],
                min: 1,
                max: 2,
                between: 0.35,
                forcePosition: "left"
              }, {
                fruits: ['R'],
                min: 1,
                max: 2,
                between: 0.35,
                forcePosition: "right"
              }]
            }, {
              id: 3,
              minWave: 0,
              chance: 5,
              chanceRegrowth: 0,
              delay: 0.2,
              dtScale: 1,
              dtScaleIncrease: 0,
              fruitChance: [{
                fruits: ['R'],
                min: 3,
                max: 3,
                between: 0.05,
                forcePosition: "left"
              }, {
                fruits: ['R'],
                min: 3,
                max: 3,
                between: 0.05,
                forcePosition: "right"
              }]
            }]);
  
            _defineProperty(_assertThisInitialized(_this), "frenzyDuration", 0);
  
            _defineProperty(_assertThisInitialized(_this), "freezeDuration", 0);
  
            _defineProperty(_assertThisInitialized(_this), "doublePointDuration", 0);
  
            _defineProperty(_assertThisInitialized(_this), "_waveCounter", 0);
  
            _defineProperty(_assertThisInitialized(_this), "timerToSpawnBananaArcade", 0);
  
            _defineProperty(_assertThisInitialized(_this), "lastNumber", 0);
  
            return _this;
          }
  
          FruitManager.getInstance = function getInstance() {
            return FruitManager.Instance;
          };
  
          var _proto = FruitManager.prototype;
  
          _proto.onLoad = function onLoad() {
            this.poolObject = [];
  
            for (var i = 0; i < this.fruitFBXList.length; i++) {
              this.poolObject.push([]);
            }
  
            this.poolJuiceParticle = [];
  
            for (var _i = 0; _i < this.juiceParticle.length; _i++) {
              this.poolJuiceParticle.push([]);
            }
  
            FruitManager.Instance = this;
  
            for (var _i2 = 0; _i2 < 3; _i2++) {
              var textDeflect = instantiate(this.textBombDeflect);
              textDeflect.active = false;
              this.textBombDeflects.push(textDeflect);
              var particleDeflect = instantiate(this.particleBombDeflect);
              particleDeflect.active = false;
              this.particleDeflects.push(particleDeflect);
            }
  
            for (var _i3 = 0; _i3 < 20; _i3++) {
              var textFruitCombo = instantiate(this.textFruitCombo);
  
              for (var j = 0; j < this.juiceParticle.length; j++) {
                if (this.juiceParticle[j] != null) {
                  var pJuice = instantiate(this.juiceParticle[j]);
                  pJuice.active = false;
                  this.poolJuiceParticle[j].push(pJuice);
                }
              }
  
              textFruitCombo.active = false;
              this.textFruitCombos.push(textFruitCombo);
              var pshadow = instantiate(this.prefabParticleShadow);
              pshadow.active = false;
              this.poolShadowParticle.push(pshadow);
            }
  
            for (var _i4 = 0; _i4 < 3; _i4++) {
              var crosses = instantiate(this.prefabCross);
              this.poolCrosses.push(crosses);
            }
  
            var startRand = randomRangeInt(1, 13) * 30;
  
            for (var _i5 = 0; _i5 < 8; _i5++) {
              var bombRay = instantiate(this.prefabBombRay);
              bombRay.active = false;
              bombRay.setRotationFromEuler(new Vec3(-90, 0, startRand + _i5 * 30));
  
              this._poolBombRay.push(bombRay);
            }
  
            setDisplayStats(false);
          };
  
          _proto.showPeachyTimeBurst = function showPeachyTimeBurst(position) {
            var burst;
            burst = instantiate(this.prefabPeachyBurst);
            burst.active = true;
            burst.setPosition(position);
            burst.setParent(this.node.parent);
            this.scheduleOnce(function () {
              burst.active = false;
              burst.destroy();
            }, 5);
          };
  
          _proto.showShockwave = function showShockwave(position) {
            var shockwave;
            shockwave = instantiate(this.prefabBerryBlastShockwave);
            shockwave.active = true;
            shockwave.setPosition(position);
            shockwave.setParent(this.node.parent);
            this.scheduleOnce(function () {
              shockwave.active = false;
              shockwave.destroy();
            }, 5);
          };
  
          _proto.trySlowAllFruit = function trySlowAllFruit(factor) {
            PhysicsSystem.instance.gravity = new Vec3(0, -45 * factor, 0);
          };
  
          _proto.destroyFruitInRadius = function destroyFruitInRadius(centerPosition, radius, getScore) {
            if (getScore === void 0) {
              getScore = true;
            }
  
            var centerPos = centerPosition.clone();
            centerPos.z = 0;
  
            for (var i = 0; i < this.activeObject.length; i++) {
              var object = this.activeObject[i];
  
              if (object.getComponent(Bomb) == null && object.getComponent(Fruit) != null) {
                var fruit = object.getComponent(Fruit);
  
                if (!fruit.isPomegranate() && !fruit.isBerryBlast()) {
                  var otherPos = object.getPosition().clone();
                  otherPos.z = 0;
  
                  if (Math.abs(Vec3.distance(centerPos, otherPos)) <= radius || radius < 0) {
                    var degree = randomRangeInt(0, 360);
                    fruit.getSlashed(degree, false, getScore);
                    GameController.getInstance().gameData.g.push({
                      a: 'sf',
                      t: GameController.getInstance().timerGameplay.toFixed(4),
                      n: fruit.waveId
                    });
  
                    if (getScore) {
                      GameController.getInstance().updateScore(GameController.getInstance().score + 1);
                      GameController.getInstance().setLastFruitSlashedPosition(fruit.node.position);
                      GameController.getInstance().updateCombo(GameController.getInstance().getCombo() + 1);
  
                      if (GameController.getInstance().getCombo() == 1) {
                        GameController.getInstance().breakCombo = false;
                        GameController.getInstance().updateTimerCombo(0.3);
                      } else {
                        GameController.getInstance().updateTimerCombo(GameController.getInstance().getTimerCombo() + 0.1);
                      }
                    }
                  }
                }
              }
            }
          };
  
          _proto.getPurpleBombTextFromPool = function getPurpleBombTextFromPool() {
            if (this.poolPurpleBombText.length == 0) return instantiate(this.prefabBombPurpleText);else return this.poolPurpleBombText.pop();
          };
  
          _proto.getPomegranateRayFromPool = function getPomegranateRayFromPool() {
            var result;
            if (this.poolPomegranateRay.length == 0) result = instantiate(this.prefabPomegranateRay);else result = this.poolPomegranateRay.pop();
            return result;
          };
  
          _proto.getPomegranateRay2DFromPool = function getPomegranateRay2DFromPool() {
            var result;
            if (this.poolPomegranateRay2D.length == 0) result = instantiate(this.prefabPomegranateRay2D);else result = this.poolPomegranateRay2D.pop();
            return result;
          };
  
          _proto.resetWave = function resetWave() {
            this.fruitToSpawnList = [];
            this.startTimer = 1;
          };
  
          _proto.deactivateArcadeDouble = function deactivateArcadeDouble() {
            GameController.getInstance().scoreArcadeToDouble = GameController.getInstance().scoreArcadeToDouble * 2;
            GameController.Instance.gameplayScreen.getChildByPath("doublePoints_topLabel/ArcadeDoublePointsBacking/text_doubleFinalScore").getComponent(Label).string = GameController.getInstance().scoreArcadeToDouble + "";
            GameController.Instance.gameplayScreen.getChildByPath("DoublePointOverlay").getComponent(Animation).play("ui_overlay_double_out");
            GameController.Instance.gameplayScreen.getChildByPath("doublePoints_topLabel").getComponent(Animation).play("doublePointLabel_out");
            GameController.Instance.gameplayScreen.getChildByPath("doublePoints_topLabel").getComponent(Animation).on(Animation.EventType.FINISHED, function () {
              GameController.getInstance().updateScore(GameController.getInstance().score + GameController.getInstance().scoreArcadeToDouble);
            }, this, true);
            this.doublePointDuration = 0;
            GameController.getInstance().doubleArcadeTopLabel.getComponent(Animation).play("hide");
            GameController.getInstance().doubleArcadeTopLabel.getComponent(Animation).on(Animation.EventType.FINISHED, function () {
              GameController.getInstance().doubleArcadeTopLabel.setParent(null);
              GameController.getInstance().doubleArcadeTopLabel.active = false;
            }, this, true);
          };
  
          _proto.deactivateArcadeFrenzy = function deactivateArcadeFrenzy() {
            FruitManager.getInstance().node.getChildByPath("particle_frenzySideLeft").active = false;
            FruitManager.getInstance().node.getChildByPath("particle_frenzySideRight").active = false;
            this.frenzyDuration = 0;
            GameController.getInstance().frenzyArcadeTopLabel.getComponent(Animation).play("hide");
            GameController.getInstance().frenzyArcadeTopLabel.getComponent(Animation).on(Animation.EventType.FINISHED, function () {
              GameController.getInstance().frenzyArcadeTopLabel.setParent(null);
              GameController.getInstance().frenzyArcadeTopLabel.active = false;
            }, this, true);
          };
  
          _proto.deactivateArcadeFreeze = function deactivateArcadeFreeze() {
            FruitManager.getInstance().trySlowAllFruit(1);
            FruitPhysics.BlitzDtMultiplier = 1;
            GameController.Instance.gameplayScreen.getChildByPath("container_time/container/Freeze").getComponent(Animation).play("ui_freeze_out");
            GameController.Instance.gameplayScreen.getChildByPath("FreezeOverlay").getComponent(Animation).play("ui_freeze_overlay_out");
            BlitzManager.getInstance().dtMultiplier = 1;
            this.freezeDuration = 0;
            GameController.getInstance().freezeArcadeTopLabel.getComponent(Animation).play("hide");
            GameController.getInstance().freezeArcadeTopLabel.getComponent(Animation).on(Animation.EventType.FINISHED, function () {
              GameController.getInstance().freezeArcadeTopLabel.setParent(null);
              GameController.getInstance().freezeArcadeTopLabel.active = false;
            }, this, true);
          };
  
          _proto.update = function update(deltaTime) {
            if (FruitManager.PAUSE_SPAWNING) return;
  
            if (GameController.getInstance().getScreenState() == GameController.SCREEN_STATE_GAMEPLAY) {
              if (GameController.getInstance().getGameState() == GameController.STATE_GAME_COUNTDOWN) ;else if (GameController.getInstance().getGameState() == GameController.STATE_GAME_PLAYING) {
                if (GameController.TUTORIAL_STATE == 0 || GameController.TUTORIAL_STATE == 4) {
                  if (GameController.gameMode == GameController.MODE_ARCADE) {
                    if (this.frenzyDuration > 0) {
                      this.frenzyDuration -= deltaTime;
  
                      if (this.frenzyDuration <= 0) {
                        FruitManager.getInstance().deactivateArcadeFrenzy();
                      }
                    }
  
                    if (this.freezeDuration > 0) {
                      this.freezeDuration -= deltaTime;
  
                      if (this.freezeDuration <= 0) {
                        FruitManager.getInstance().deactivateArcadeFreeze();
                      }
                    }
  
                    if (this.doublePointDuration > 0) {
                      this.doublePointDuration -= deltaTime;
  
                      if (this.doublePointDuration <= 0) {
                        FruitManager.getInstance().deactivateArcadeDouble();
                      }
                    }
                  }
  
                  this.startTimer -= deltaTime;
  
                  if (this.startTimer <= 0) {
                    if (GameController.gameMode == GameController.MODE_ARCADE) {
                      if (GameController.getInstance().arcadeTimer > 0) this.getWave();
                    } else {
                      this.getWave();
                    }
                  }
  
                  for (var i = 0; i < this.fruitToSpawnList.length; i++) {
                    var obj = this.fruitToSpawnList[i];
                    obj.delay -= deltaTime;
                    var velocity = null;
                    if (obj.velocity) velocity = obj.velocity;
                    var position = null;
                    if (obj.position) position = obj.position;
                    if (obj.delay <= 0) this.spawnFruit(obj.toSpawn, obj.x, velocity, obj.waveId, position);
                  }
  
                  var newArr = [];
  
                  for (var a = 0; a < this.fruitToSpawnList.length; a++) {
                    var _obj = this.fruitToSpawnList[a];
                    if (_obj.delay > 0) newArr.push(_obj);
                  }
  
                  this.fruitToSpawnList = newArr;
                } else {
                  for (var _i6 = 0; _i6 < this.activeObject.length; _i6++) {
                    var fruit = this.activeObject[_i6];
  
                    if (fruit.getComponent(FruitPhysics).getVelocity().y < 0) {
                      if (fruit.getComponent(Fruit) !== null) {
                        fruit.getComponent(Fruit).pauseVelocityOnly();
                      }
  
                      if (GameController.TUTORIAL_STATE >= 1 && GameController.TUTORIAL_STATE <= 3) {
                        var contFinger = GameController.Instance.gameplayScreen.getChildByPath("container_tutorial_finger");
  
                        if (!contFinger.active) {
                          contFinger.active = true;
                          contFinger.getComponent(Animation).play("animation_swipe_hand");
                        }
                      }
                    }
                  }
  
                  if (this.startTimer <= 0) {
                    this.startTimer = 1;
                    this.fruitToSpawnList = [];
                    var waveId = 0;
  
                    if (GameController.TUTORIAL_STATE == 1) {
                      waveId = -1;
                      this.fruitToSpawnList.push({
                        toSpawn: "Watermelon",
                        x: 0,
                        vx: 0
                      });
                      GameController.getInstance().gameData.g.push({
                        a: 'w',
                        t: GameController.getInstance().timerGameplay.toFixed(4),
                        i: -1,
                        n: [1]
                      });
                    } else if (GameController.TUTORIAL_STATE == 2) {
                      waveId = -2;
                      this.fruitToSpawnList.push({
                        toSpawn: "R",
                        x: -5,
                        vx: 0
                      });
                      this.fruitToSpawnList.push({
                        toSpawn: "Watermelon",
                        x: 0,
                        vx: 0
                      });
                      this.fruitToSpawnList.push({
                        toSpawn: "R",
                        x: 5,
                        vx: 0
                      });
                      GameController.getInstance().gameData.g.push({
                        a: 'w',
                        t: GameController.getInstance().timerGameplay.toFixed(4),
                        i: -2,
                        n: [3]
                      });
                    } else if (GameController.TUTORIAL_STATE == 3) {
                      waveId = -3;
                      this.fruitToSpawnList.push({
                        toSpawn: "R",
                        x: -10,
                        vx: 0
                      });
                      this.fruitToSpawnList.push({
                        toSpawn: "R",
                        x: -5,
                        vx: 0
                      });
                      this.fruitToSpawnList.push({
                        toSpawn: "Watermelon",
                        x: 0,
                        vx: 0
                      });
                      this.fruitToSpawnList.push({
                        toSpawn: "R",
                        x: 5,
                        vx: 0
                      });
                      this.fruitToSpawnList.push({
                        toSpawn: "R",
                        x: 10,
                        vx: 0
                      });
                      GameController.getInstance().gameData.g.push({
                        a: 'w',
                        t: GameController.getInstance().timerGameplay.toFixed(4),
                        i: -3,
                        n: [5]
                      });
                    }
  
                    var list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
                    var specFruit = list[randomRangeInt(0, list.length)];
  
                    for (var _i7 = 0; _i7 < this.fruitToSpawnList.length; _i7++) {
                      var _obj2 = this.fruitToSpawnList[_i7];
                      var toSpawn = _obj2.toSpawn;
                      if (_obj2.toSpawn == "1F") toSpawn = this.getFruitNameFromIndex(specFruit);
                      this.spawnFruit(toSpawn, _obj2.x, {
                        vx: _obj2.vx,
                        vy: 9.5
                      }, waveId);
                    }
                  }
                }
              } else if (GameController.getInstance().getGameState() == GameController.STATE_GAME_LOSE) ;
            }
  
            for (var _i8 = this.activeObject.length - 1; _i8 >= 0; _i8--) {
              var curFruit = this.activeObject[_i8];
              var isFruit = curFruit.getComponent(Fruit) != null;
              var isBomb = curFruit.getComponent(Bomb) != null;
  
              if (curFruit.active) {
                var pos = curFruit.position;
  
                if (isFruit && pos.y <= -12) {
                  if (curFruit.getComponent(Fruit).isPomegranate()) SFXManager.getInstance().stopLoopSFX(SFXManager.SFX_POME_SPARKLE__LP);else if (curFruit.getComponent(Fruit).isBerryBlast()) SFXManager.getInstance().stopLoopSFX(SFXManager.SFX_STRAWBERRY_LOOP);else if (curFruit.getComponent(Fruit).isPeachyTime()) SFXManager.getInstance().stopLoopSFX(SFXManager.SFX_PEACH_LOOP);
                  curFruit.active = false;
                  this.poolObject[this.getFruitIndexFromName(curFruit.name)].push(curFruit);
                  this.activeObject.splice(_i8, 1);
  
                  if (GameController.gameMode == GameController.MODE_ARCADE) {
                    ArcadeBonusBoardController.getInstance().anyFruitDropped = true;
                  }
  
                  if (GameController.gameMode == GameController.MODE_CLASSIC && !curFruit.getComponent(Fruit).isPomegranate() && !curFruit.getComponent(Fruit).isBerryBlast()) {
                    GameController.getInstance().gameData.g.push({
                      a: 'lf',
                      t: GameController.getInstance().timerGameplay.toFixed(4),
                      n: curFruit.getComponent(Fruit).waveId
                    });
  
                    if (GameController.getInstance().getHealth() > 0) {
                      if (!GameController.IMMUNE) {
                        GameController.getInstance().updateHealth(GameController.getInstance().getHealth() - 1);
                        GameController.getInstance().missedFruitCount += 1;
  
                        if (GameController.getInstance().getHealth() <= 0) {
                          GameController.getInstance().setGameState(GameController.STATE_GAME_LOSE);
                        }
                      }
                    }
  
                    this.showCross(pos);
                    SFXManager.getInstance().play(SFXManager.SFX_GANK);
                  }
                } else if (isBomb) {
                  if (pos.x < -20 || pos.x > 20 || pos.y <= -14 || pos.y >= 14) {
                    if (curFruit.getComponent(Bomb).isDeflected) {
                      SFXManager.getInstance().play(SFXManager.SFX_POWERUP_DEFLECT_EXPLODE);
                      var cameraAnim = GameController.getInstance().mainCanvas.getChildByPath("Camera").getComponent(Animation);
                      if (cameraAnim.getState("camera_shake").isPlaying) cameraAnim.stop();
                      cameraAnim.play("camera_shake");
                      var bgBombAnim = GameController.Instance.gameplayScreen.getChildByPath("bg_container_bomb_deflected").getComponent(Animation);
                      if (bgBombAnim.getState("bg_container_bomb_deflected_show").isPlaying) bgBombAnim.stop();
                      bgBombAnim.play("bg_container_bomb_deflected_show");
                    }
  
                    this.poolObject[this.getFruitIndexFromName(curFruit.name)].push(curFruit);
                    this.activeObject.splice(_i8, 1);
                    this.bombCounter -= 1;
  
                    if (this.bombCounter <= 0) {
                      this.bombCounter = 0;
                      BGMManager.getInstance().stopBombBGM();
                    }
                  }
                }
              } else {
                if (isFruit) {
                  if (curFruit.getComponent(Fruit).isPomegranate()) {
                    this.poolObject[this.getFruitIndexFromName("Pomegranate")].push(curFruit);
                    this.activeObject.splice(_i8, 1);
                  } else if (curFruit.getComponent(Fruit).isBerryBlast()) {
                    this.poolObject[this.getFruitIndexFromName("BerryBlast")].push(curFruit);
                    this.activeObject.splice(_i8, 1);
                  } else {
                    if (curFruit.getComponent(Fruit).half1.position.y <= -12 || curFruit.getComponent(Fruit).half1.position.y >= 9) {
                      this.poolObject[this.getFruitIndexFromName(curFruit.name)].push(curFruit);
                      this.activeObject.splice(_i8, 1);
                    }
                  }
                }
              }
  
              if (GameController.getInstance().getGameState() == GameController.STATE_GAME_LOSE && !GameController.getInstance().dieFromBomb) {
                if (this.activeObject.length == 0) {
                  if (GameController.getInstance().canRevive) {
                    GameController.getInstance().showOfferContinue();
                    ScenePause.getInstance().hideButtonPause();
                  } else {
                    GameController.getInstance().showGameOver(function () {
                      AdsManager.showInterstitialAds(function () {
                        if (GameController.getInstance().getScreenState() != GameController.SCREEN_STATE_RESULT_REWARD) GameController.getInstance().setScreenState(GameController.SCREEN_STATE_RESULT_REWARD);
                      });
                    });
                  }
                }
              }
            }
          };
  
          _proto.getFruitNameFromIndex = function getFruitNameFromIndex(index) {
            switch (index) {
              case 0:
                return 'AppleGreen';
  
              case 1:
                return 'Banana';
  
              case 2:
                return 'Coconut';
  
              case 3:
                return 'Kiwifruit';
  
              case 4:
                return 'Lemon';
  
              case 5:
                return 'Mango';
  
              case 6:
                return 'Orange';
  
              case 7:
                return 'Peach';
  
              case 8:
                return 'Pineapple';
  
              case 9:
                return 'Watermelon';
  
              case 10:
                return 'Starfruit';
  
              case 11:
                return 'Starfruit_half_top';
  
              case 12:
                return 'Starfruit_half_top_gray';
  
              case 13:
                return 'Bomb';
  
              case 14:
                return 'AppleRed';
  
              case 15:
                return 'Pomegranate';
  
              case 16:
                return 'MysteryBoxRV';
  
              case 17:
                return 'BerryBlast';
  
              case 18:
                return 'Peachy';
  
              case 19:
                return 'Bomb_purple';
  
              case 20:
                return 'BananaSP_freeze';
  
              case 21:
                return 'BananaSP_double';
  
              case 22:
                return 'BananaSP_frenzy';
            }
  
            return 'AppleGreen';
          };
  
          _proto.getFruitIndexFromName = function getFruitIndexFromName(name) {
            switch (name) {
              case 'AppleGreen':
                return 0;
  
              case 'Banana':
                return 1;
  
              case 'Coconut':
                return 2;
  
              case 'Kiwifruit':
                return 3;
  
              case 'Lemon':
                return 4;
  
              case 'Mango':
                return 5;
  
              case 'Orange':
                return 6;
  
              case 'Peach':
                return 7;
  
              case 'Pineapple':
                return 8;
  
              case 'Watermelon':
                return 9;
  
              case 'Starfruit':
                return 10;
  
              case 'Starfruit_half_top':
                return 11;
  
              case 'Starfruit_half_top_gray':
                return 12;
  
              case 'Bomb':
                return 13;
  
              case 'AppleRed':
                return 14;
  
              case 'Pomegranate':
                return 15;
  
              case 'MysteryBoxRV':
                return 16;
  
              case 'BerryBlast':
                return 17;
  
              case 'Peachy':
                return 18;
  
              case 'Bomb_purple':
                return 19;
  
              case 'BananaSP_freeze':
                return 20;
  
              case 'BananaSP_double':
                return 21;
  
              case 'BananaSP_frenzy':
                return 22;
            }
  
            return 0;
          };
  
          _proto.getSliceParticle = function getSliceParticle(index) {
            if (this.poolJuiceParticle[index].length > 0) {
              return this.poolJuiceParticle[index].pop();
            } else {
              if (this.juiceParticle[index] == null) {
                return null;
              }
  
              return instantiate(this.juiceParticle[index]);
            }
          };
  
          _proto.putSlicedParticle = function putSlicedParticle(index, obj) {
            this.poolJuiceParticle[index].push(obj);
          };
  
          _proto.getCriticaTrail = function getCriticaTrail() {
            if (this.poolTrailCritical.length > 0) {
              var result = this.poolTrailCritical.pop();
              result.getComponent(ParticleSystem).clear();
              return result;
            } else {
              return instantiate(this.prefabTrailParticle);
            }
          };
  
          _proto.putCriticalTrail = function putCriticalTrail(obj) {
            this.poolTrailCritical.push(obj);
          };
  
          _proto.getCriticalParticle = function getCriticalParticle() {
            if (this.poolCriticalParticle.length > 0) {
              var result = this.poolCriticalParticle.pop();
              result.getChildByPath("particle_juiceSmall").getComponent(ParticleSystem).clear();
              result.getComponent(ParticleSystem).clear();
              return result;
            } else {
              return instantiate(this.prefabCriticalParticle);
            }
          };
  
          _proto.putCriticalParticle = function putCriticalParticle(obj) {
            this.poolCriticalParticle.push(obj);
          };
  
          _proto.getBackParticle = function getBackParticle() {
            if (this.poolBackParticle.length > 0) {
              return this.poolBackParticle.pop();
            } else {
              return instantiate(this.prefabParticleBack);
            }
          };
  
          _proto.getShadowParticle = function getShadowParticle() {
            if (this.poolShadowParticle.length > 0) {
              return this.poolShadowParticle.pop();
            } else {
              return instantiate(this.prefabParticleShadow);
            }
          };
  
          _proto.putBackParticle = function putBackParticle(obj) {
            this.poolBackParticle.push(obj);
          };
  
          _proto.putShadowParticle = function putShadowParticle(obj) {
            this.poolShadowParticle.push(obj);
          };
  
          _proto.getTextFruitCombo = function getTextFruitCombo() {
            if (this.textFruitCombos.length > 0) {
              return this.textFruitCombos.pop();
            } else {
              return instantiate(this.textFruitCombo);
            }
          };
  
          _proto.putTextFruitcombo = function putTextFruitcombo(obj) {
            this.textFruitCombos.push(obj);
          };
  
          _proto.getParticleBombDeflect = function getParticleBombDeflect() {
            if (this.particleDeflects.length > 0) {
              return this.particleDeflects.pop();
            } else {
              return instantiate(this.particleBombDeflect);
            }
          };
  
          _proto.putBombDeflect = function putBombDeflect(obj) {
            this.particleDeflects.push(obj);
          };
  
          _proto.getTextBerryBlast = function getTextBerryBlast() {
            if (this.poolTextBerryBlast.length > 0) {
              return this.poolTextBerryBlast.pop();
            } else {
              return instantiate(this.textBerryBlast);
            }
          };
  
          _proto.putTextBerryBlast = function putTextBerryBlast(obj) {
            this.poolTextBerryBlast.push(obj);
          };
  
          _proto.getTextDeflect = function getTextDeflect() {
            if (this.textBombDeflects.length > 0) {
              return this.textBombDeflects.pop();
            } else {
              return instantiate(this.textBombDeflect);
            }
          };
  
          _proto.putTextDeflect = function putTextDeflect(obj) {
            this.textBombDeflects.push(obj);
          };
  
          _proto.getTextCritical = function getTextCritical() {
            if (this.textFruitCriticals.length > 0) {
              return this.textFruitCriticals.pop();
            } else {
              return instantiate(this.textFruitCritical);
            }
          };
  
          _proto.putTextCritical = function putTextCritical(obj) {
            this.textFruitCriticals.push(obj);
          };
  
          _proto.convertWorldToUI = function convertWorldToUI(worldPos) {
            return this.mainCamera.convertToUINode(worldPos, GameController.Instance.mainCanvas);
          };
  
          _proto.convertWorldToCanvas = function convertWorldToCanvas(worldPos, canvas) {
            return this.mainCamera.convertToUINode(worldPos, canvas);
          };
  
          _proto.getWave = function getWave() {
            if (this.waveCounter >= 15) FruitPhysics.WaveDtMultiplier += 0.02;
            var capableWave = [];
            var lastMinWave = 0;
            var listWave = [];
            if (GameController.gameMode == GameController.MODE_CLASSIC) listWave = this.waveList;else if (GameController.gameMode == GameController.MODE_ZEN) listWave = this.waveListZen;else if (GameController.gameMode == GameController.MODE_ARCADE) {
              if (this.waveCounter >= 2 && this.specialBananaOnScreen == "") {
                this.potentialBananas = ['BananaSP_freeze', 'BananaSP_double', 'BananaSP_frenzy'];
  
                for (var i = this.potentialBananas.length - 1; i >= 0; i--) {
                  var curType = this.potentialBananas[i];
                  if (curType == "BananaSP_freeze" && this.freezeDuration > 0) this.potentialBananas.splice(i, 1);else if (curType == "BananaSP_double" && this.doublePointDuration > 0) this.potentialBananas.splice(i, 1);else if (curType == "BananaSP_frenzy" && this.frenzyDuration > 0) this.potentialBananas.splice(i, 1);
                }
  
                if (this.potentialBananas.length > 0) {
                  var randomNumber = (randomRangeInt(0, 2500) + this.lastNumber) % 2500;
                  this.lastNumber = randomNumber;
                  var probability = this.potentialBananas.length == 0 ? 1000 : this.potentialBananas.length == 2 ? 375 : 225;
                  if (GameController.RIG_BANANA_ARCADE_EASY_SPAWN) randomNumber = 0;
  
                  if (randomNumber <= probability) {
                    var velocity = {
                      vx: 0,
                      vy: 9.5
                    };
                    var position = new Vec3(0, 0, this.spawnCount * -5);
                    var listPosition = ['top', 'left', 'right'];
                    var randomPosittion = listPosition[randomRangeInt(0, listPosition.length)];
  
                    if (randomPosittion == "top") {
                      velocity = {
                        vx: 0,
                        vy: -5
                      };
                      position.x = 0;
                      position.y = 14;
                    } else if (randomPosittion == 'left') {
                      velocity = {
                        vx: 7.2,
                        vy: 5.6
                      };
                      position.x = -18;
                      position.y = 0;
                    } else if (randomPosittion == 'right') {
                      velocity = {
                        vx: -7.2,
                        vy: 5.6
                      };
                      position.x = 18;
                      position.y = 0;
                    }
  
                    var bananaType = this.potentialBananas[randomRangeInt(0, this.potentialBananas.length)];
                    this.specialBananaOnScreen = bananaType;
                    this.spawnFruit(bananaType, 0, velocity, 0, position);
                  }
                }
              }
  
              if (FruitManager.getInstance().frenzyDuration > 0) listWave = this.waveListArcadeFrenzy;else listWave = this.waveListArcade;
            }
  
            for (var _i9 = 0; _i9 < listWave.length; _i9++) {
              var maxWave = Number.MAX_VALUE;
              if (listWave[_i9].maxWave) maxWave = listWave[_i9].maxWave;
  
              if (this.waveCounter >= listWave[_i9].minWave && this.waveCounter < maxWave) {
                if (lastMinWave == listWave[_i9].minWave) {
                  capableWave.push(listWave[_i9]);
                } else {
                  lastMinWave = listWave[_i9].minWave;
                  capableWave = [];
                  capableWave.push(listWave[_i9]);
                }
              }
            }
  
            var idRand = randomRangeInt(0, capableWave.length);
            var waveUsed = capableWave[idRand];
            var wData = {
              a: 'w',
              t: GameController.getInstance().timerGameplay.toFixed(4),
              i: waveUsed.id,
              n: []
            };
            var totalDelay = 0;
            this.spawnCount = 0;
  
            for (var _i10 = 0; _i10 < waveUsed.fruitChance.length; _i10++) {
              var forcePosition = "";
              if (waveUsed.fruitChance[_i10].forcePosition) forcePosition = waveUsed.fruitChance[_i10].forcePosition;
              var fruitToSpawn = waveUsed.fruitChance[_i10].fruits;
              var nFruit = randomRangeInt(waveUsed.fruitChance[_i10].min, waveUsed.fruitChance[_i10].max + 1);
              var delay = waveUsed.fruitChance[_i10].between;
              console.log('spawning wave: ' + waveUsed.id + ' on index: ' + _i10 + ' for ' + nFruit + ' fruits, interval: ' + delay);
              wData.n.push(nFruit);
              var listX = [];
              var listVx = [];
              var list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
              var specFruit = list[randomRangeInt(0, list.length)];
  
              for (var j = 0; j < nFruit; j++) {
                var toSpawn = fruitToSpawn[j % fruitToSpawn.length];
                if (toSpawn == "1F") toSpawn = this.getFruitNameFromIndex(specFruit);
                var timeSpawn = j * delay;
                if (listX.length == 0) listX = [11, 9, 7, 5, 3, -3, -5, -7, -9, -11];
                if (listVx.length == 0) listVx = [250, 300];
                var idxListX = randomRangeInt(0, listX.length);
                var xUsed = randomRange(-9, 9);
                var idxListVx = randomRangeInt(0, listVx.length);
                var vxUsed = listVx.splice(idxListVx, 1)[0];
                if (xUsed > 0) vxUsed *= -1;
  
                if (timeSpawn == 0) {
                  if (forcePosition == "") this.spawnFruit(toSpawn, xUsed, null, waveUsed.id);else {
                    var _velocity = {
                      vx: 0,
                      vy: 9.5
                    };
  
                    var _position = new Vec3(0, 0, this.spawnCount * -5);
  
                    if (forcePosition == 'left') {
                      _velocity = {
                        vx: randomRangeInt(75, 90) / 10,
                        vy: randomRangeInt(60, 75) / 10
                      };
                      _position.x = randomRangeInt(18, 21) * -1;
                      _position.y = randomRangeInt(0, 25) / 10 * (randomRangeInt(0, 100) < 50 ? -1 : 1);
                    } else if (forcePosition == 'right') {
                      _velocity = {
                        vx: randomRangeInt(75, 90) / -10,
                        vy: randomRangeInt(60, 75) / 10
                      };
                      _position.x = randomRangeInt(18, 21);
                      _position.y = randomRangeInt(0, 25) / 10 * (randomRangeInt(0, 100) < 50 ? -1 : 1);
                    }
  
                    this.spawnFruit(toSpawn, 0, _velocity, waveUsed.id, _position);
                  }
                } else {
                  if (forcePosition == "") this.scheduleSpawnFruit(toSpawn, xUsed, vxUsed, timeSpawn, waveUsed.id);else {
                    var _velocity2 = {
                      vx: 0,
                      vy: 9.5
                    };
  
                    var _position2 = new Vec3(0, 0, this.spawnCount * -5);
  
                    if (forcePosition == 'left') {
                      _velocity2 = {
                        vx: 9,
                        vy: 7
                      };
                      _position2.x = -18;
                      _position2.y = 0;
                    } else if (forcePosition == 'right') {
                      _velocity2 = {
                        vx: -9,
                        vy: 7
                      };
                      _position2.x = 18;
                      _position2.y = 0;
                    }
  
                    this.scheduleSpawnFruit(toSpawn, xUsed, vxUsed, timeSpawn, waveUsed.id, _position2, _velocity2);
                  }
                }
              }
  
              if (totalDelay < nFruit * delay) {
                totalDelay = nFruit * delay;
              }
            }
  
            GameController.getInstance().gameData.g.push(wData);
            this.startTimer = waveUsed.delay + totalDelay + 2;
  
            if (GameController.gameMode == GameController.MODE_ARCADE) {
              if (FruitManager.getInstance().frenzyDuration > 0) {
                this.startTimer = waveUsed.delay + totalDelay;
              } else {
                this.startTimer = waveUsed.delay + totalDelay + 1;
              }
            }
  
            this.waveCounter++;
          };
  
          _proto.getActiveFruit = function getActiveFruit() {
            return this.activeObject;
          };
  
          _proto.reset = function reset() {
            FruitManager.DATA_PEACH_ZEN.current = FruitManager.DATA_PEACH_ZEN.base;
            this.freezeDuration = 0;
            this.frenzyDuration = 0;
            this.doublePointDuration = 0;
            GameController.Instance.gameplayScreen.getChildByPath("doublePoints_topLabel").getComponent(Animation).play("doublePointLabel_out_insant");
            this.node.getChildByPath("particle_frenzySideLeft").active = false;
            this.node.getChildByPath("particle_frenzySideRight").active = false;
            FruitManager.getInstance().trySlowAllFruit(1);
            FruitPhysics.BlitzDtMultiplier = 1;
            this.timerToSpawnBananaArcade = 0;
            this.specialBananaOnScreen = "";
            this.fruitToSpawnList = [];
            this.countdown = 3;
            this.waveCounter = 0;
            this.bombCounter = 0;
            this.startTimer = 0;
            this.nextScoreSpawnPomegranate = randomRangeInt(50, 151);
            this.lastBananaSpawn = 0;
          };
  
          _proto.scheduleSpawnFruit = function scheduleSpawnFruit(toSpawn, x, vx, delay, waveId, position, velocity) {
            if (position === void 0) {
              position = null;
            }
  
            if (velocity === void 0) {
              velocity = null;
            }
  
            this.fruitToSpawnList.push({
              toSpawn: toSpawn,
              x: x,
              vx: vx,
              delay: delay,
              waveId: waveId,
              position: position,
              velocity: velocity
            });
          };
  
          _proto.getFruitUI = function getFruitUI(keyFruit, action) {
            var index = this.getFruitIndexFromName(keyFruit);
            var fruit = this.getFruitFromPool(index);
            fruit.getComponent(Fruit).fruitName = keyFruit;
            fruit.getComponent(Fruit).keyMenu = action;
            fruit.getComponent(RigidBody).setLinearVelocity(new Vec3(0, 0, 0));
            fruit.getComponent(RigidBody).useGravity = false;
            if (fruit.getComponent(FruitPhysics) != null) fruit.getComponent(FruitPhysics).pausePhysics = true;
            fruit.scale = new Vec3(3, 3, 3);
            return fruit;
          };
  
          _proto.spawnFruit = function spawnFruit(toSpawn, x, velo, idWave, overridePosition) {
            if (velo === void 0) {
              velo = null;
            }
  
            if (idWave === void 0) {
              idWave = 0;
            }
  
            if (overridePosition === void 0) {
              overridePosition = null;
            }
  
            var isRandom = toSpawn == "R";
            if (toSpawn == "B") toSpawn = "Bomb";
            var index = 0;
            var listIndex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
            if (GameController.BERRYBLAST_POWERUP && !Fruit.BERRYBLAST_ACTIVE) listIndex.push(17);
  
            if (isRandom) {
              index = listIndex[randomRangeInt(0, listIndex.length)];
            } else {
              index = this.getFruitIndexFromName(toSpawn);
            }
  
            if (GameController.PEACHY_TIME) {
              if (index != 13 && index != 15 && index != 17 && index != 18) {
                if (GameController.gameMode == GameController.MODE_ZEN && GameController.getInstance().getZenTimer() > 4 || GameController.gameMode == GameController.MODE_ARCADE && GameController.getInstance().arcadeTimer > 4) {
                  if (FruitManager.DATA_PEACH_ZEN.current > randomRangeInt(0, 100)) {
                    FruitManager.DATA_PEACH_ZEN.current = Math.max(0, FruitManager.DATA_PEACH_ZEN.chance_decrease);
                    index = this.getFruitIndexFromName("Peachy");
                  } else {
                    FruitManager.DATA_PEACH_ZEN.current += FruitManager.DATA_PEACH_ZEN.per_fruit_increase;
                  }
                }
              }
            }
  
            var fruit = this.getFruitFromPool(index);
            this.activeObject.push(fruit);
            fruit.getComponent(RigidBody).setLinearVelocity(new Vec3(0, 0, 0));
            if (overridePosition != null) fruit.setPosition(overridePosition);else fruit.setPosition(new Vec3(x, -11, this.spawnCount * -5));
            if (fruit.getComponent(Fruit) != null) fruit.getComponent(Fruit).waveId = idWave;
            if (fruit.getComponent(Bomb) != null) fruit.getComponent(Bomb).waveId = idWave;
            var isBomb = toSpawn == "Bomb" || toSpawn == "Bomb_purple";
  
            if (!isBomb) {
              if (fruit.getComponent(Fruit).particleShadow == null) {
                var shadowParticle = this.getShadowParticle();
                shadowParticle.setParent(fruit.getParent());
                shadowParticle.active = true;
                shadowParticle.setPosition(fruit.position);
                shadowParticle.getComponent(FollowTarget).targetToFollow = fruit;
                shadowParticle.getComponent(ParticleSystem).play();
                fruit.getComponent(Fruit).particleShadow = shadowParticle;
              } else {
                fruit.getComponent(Fruit).particleShadow.getComponent(ParticleSystem).play();
              }
  
              SFXManager.getInstance().play(SFXManager.SFX_FRUIT_LAUNCH);
              if (fruit.getComponent(FruitPhysics) == null) fruit.addComponent(FruitPhysics);
  
              if (velo == null) {
                var angleVariation = {
                  min: FruitManager.m_directionAngleVariation.min,
                  max: FruitManager.m_directionAngleVariation.max
                };
                var rotationVariation = new Quat();
                var back = new Vec3();
                back = Vec3.negate(back, Vec3.FORWARD);
                var deg = randomRange(angleVariation.min, angleVariation.max);
  
                if (x < 0) {
                  deg *= -1;
                }
  
                Quat.fromAxisAngle(rotationVariation, back, GameController.deg2rad(deg));
                var velocityVariation = randomRange(FruitManager.m_velocity.min, FruitManager.m_velocity.max);
                var finalVelocity = new Vec3();
                finalVelocity = Vec3.transformQuat(finalVelocity, Vec3.UP, rotationVariation);
                finalVelocity = finalVelocity.multiplyScalar(velocityVariation);
                fruit.getComponent(FruitPhysics).setVelocity(finalVelocity);
              } else {
                fruit.getComponent(FruitPhysics).setVelocity(new Vec3(velo.vx, velo.vy, 0));
              }
  
              this.spawnCount++;
            } else {
              if (velo == null) {
                var _angleVariation = {
                  min: FruitManager.m_directionAngleVariation.min,
                  max: FruitManager.m_directionAngleVariation.max
                };
  
                var _rotationVariation = new Quat();
  
                var _deg = randomRange(_angleVariation.min, _angleVariation.max);
  
                if (x < 0) {
                  _deg *= -1;
                }
  
                Quat.fromAxisAngle(_rotationVariation, new Vec3(0, 0, -1), GameController.deg2rad(_deg));
  
                var _velocityVariation = randomRange(FruitManager.m_velocity.min, FruitManager.m_velocity.max);
  
                var _finalVelocity = new Vec3();
  
                _finalVelocity = Vec3.transformQuat(_finalVelocity, Vec3.UP, _rotationVariation);
                _finalVelocity = _finalVelocity.multiplyScalar(_velocityVariation);
                fruit.getComponent(FruitPhysics).setVelocity(_finalVelocity);
              } else {
                fruit.getComponent(FruitPhysics).setVelocity(new Vec3(velo.vx, velo.vy, 0));
              }
  
              this.spawnCount++;
              this.bombCounter += 1;
              BGMManager.getInstance().playBombBGM();
              SFXManager.getInstance().play(SFXManager.SFX_BOMB_LAUNCH);
            }
          };
  
          _proto.getFruitFromPool = function getFruitFromPool(index) {
            var result;
  
            if (this.poolObject[index].length == 0) {
              result = instantiate(this.fruitFBXList[index]);
              result.setParent(this.node);
              result.setScale(new Vec3(3, 3, 3));
              result.addComponent(BoxCollider);
            } else {
              result = this.poolObject[index].pop();
            }
  
            if (result.getComponent(Fruit) != null) result.getComponent(Fruit).reset();else if (result.getComponent(Bomb) != null) result.getComponent(Bomb).reset();
            if (result.getComponent(FruitPhysics) != null) result.getComponent(FruitPhysics).pausePhysics = false;
            result.getComponent(RigidBody).setLinearVelocity(new Vec3(0, 0, 0));
            result.active = true;
            return result;
          };
  
          _proto.stopAllObject = function stopAllObject() {
            this.tryPauseAllFruit();
          };
  
          _proto.tryPauseAllFruit = function tryPauseAllFruit() {
            for (var i = this.activeObject.length - 1; i >= 0; i--) {
              var curFruit = this.activeObject[i];
              if (curFruit.getComponent(Fruit) != null) curFruit.getComponent(Fruit).pausePhysic();
              if (curFruit.getComponent(Bomb) != null) curFruit.getComponent(Bomb).pausePhysic();
            }
          };
  
          _proto.tryResumeAllPhysic = function tryResumeAllPhysic() {
            for (var i = this.activeObject.length - 1; i >= 0; i--) {
              var curFruit = this.activeObject[i];
              if (curFruit.getComponent(Fruit) != null) curFruit.getComponent(Fruit).resumePhysic();else if (curFruit.getComponent(Bomb) != null) curFruit.getComponent(Bomb).resumePhysic();
            }
          };
  
          _proto.trySlashAllFruit = function trySlashAllFruit() {
            for (var i = this.activeObject.length - 1; i >= 0; i--) {
              var fruit = this.activeObject[i];
  
              if (fruit.getComponent(Fruit) != null) {
                var posFruit = fruit.worldPosition;
                var w = (fruit.getComponentInChildren(MeshRenderer).mesh.struct.maxPosition.x - fruit.getComponentInChildren(MeshRenderer).mesh.struct.minPosition.x) * fruit.worldScale.x;
                var h = (fruit.getComponentInChildren(MeshRenderer).mesh.struct.maxPosition.y - fruit.getComponentInChildren(MeshRenderer).mesh.struct.minPosition.y) * fruit.worldScale.y;
                var fruitPos = {
                  x: posFruit.x,
                  y: posFruit.y,
                  width: w,
                  height: h
                };
                var degree = randomRangeInt(0, 360);
  
                if (fruit.getComponent(Fruit).isPomegranate()) {
                  fruit.getComponent(Fruit).forceBurst(degree);
                } else {
                  fruit.getComponent(Fruit).getSlashed(degree, false);
                }
  
                var fruitDetail = fruit.getComponent(Fruit).getFruitDetail();
  
                if (fruitDetail.splashTex != "none") {
                  (function () {
                    var splash = ControllerBlade.getInstance().getSplash();
                    splash.setParent(find("BladeCanvas"));
                    var posSplash = new Vec3(0, 0, 0);
                    ControllerBlade.getInstance().camera.worldToScreen(new Vec3(fruitPos.x, fruitPos.y, 0), posSplash);
                    posSplash.x /= view.getScaleX();
                    posSplash.y /= view.getScaleY();
                    splash.setRotationFromEuler(0, 0, degree + 90);
                    splash.getComponentInChildren(Sprite).color = new Color(fruit.getComponent(Fruit).getFruitDetail().splashColor);
                    splash.setWorldPosition(posSplash);
                    splash.active = true;
                    splash.getComponent(AnimationComponent).play("fruitSplash_spriteAnim");
                    splash.getComponent(AnimationComponent).once(Animation.EventType.FINISHED, function () {
                      splash.getComponent(AnimationComponent).stop();
                      splash.active = false;
                      ControllerBlade.getInstance().tryPutPoolSplash(splash);
                    });
                    var basePosition = posSplash;
                    var hasSliced = false;
                    var splashCount = randomRangeInt(fruitDetail.minSplash, fruitDetail.maxSplash + 1);
  
                    var _loop = function _loop(_i11) {
                      var splat = ControllerBlade.getInstance().getSplat();
                      splat.setParent(find("CanvasBG/DojoBG/splatEffect"));
                      var posSplat = basePosition.clone();
                      posSplat.x += randomRangeInt(-10, 10) * 10;
                      posSplat.y += randomRangeInt(-10, 10) * 10;
                      var duration = 1;
                      var delayDuration = randomRangeInt(18, 25) / 10;
  
                      if (fruitDetail.splashTex == "splash2") {
                        splat.getComponentInChildren(Sprite).spriteFrame = ControllerBlade.getInstance().splatSpriteFrame[randomRangeInt(3, 4)];
                        splat.scale = new Vec3(0.7, 0.7, 1);
                        splat.setRotationFromEuler(0, 0, 0);
                      } else {
                        if (randomRangeInt(0, 100) % 2 == 0 || hasSliced) {
                          splat.getComponentInChildren(Sprite).spriteFrame = ControllerBlade.getInstance().splatSpriteFrame[randomRangeInt(1, 2)];
                          splat.scale = new Vec3(0.7, 0.7, 1);
                          splat.setRotationFromEuler(0, 0, 0);
                          tween(splat.getChildByPath("assets")).delay(delayDuration).by(duration, {
                            scale: new Vec3(0, 0.12, 0)
                          }).start();
                        } else {
                          hasSliced = true;
                          splat.getComponentInChildren(Sprite).spriteFrame = ControllerBlade.getInstance().splatSpriteFrame[randomRangeInt(5, 6)];
                          splat.scale = new Vec3(-0.7, 0.7, 1);
                          posSplat = basePosition.clone();
                          posSplat.x -= Math.cos(degree * Math.PI / 180) * 200;
                          posSplat.y -= Math.sin(degree * Math.PI / 180) * 100;
                          splat.setRotationFromEuler(0, 0, degree);
                        }
                      }
  
                      splat.getChildByPath("assets").scale = new Vec3(1, 1, 1);
                      splat.getComponentInChildren(Sprite).color = new Color(fruit.getComponent(Fruit).getFruitDetail().splashColor);
                      splat.setWorldPosition(posSplat);
                      splat.active = true;
                      splat.getComponent(Sprite).color = new Color(255, 255, 255, 255);
                      tween(splat).delay(delayDuration).by(duration, {
                        position: new Vec3(0, randomRangeInt(-10, -5) * 2, 0)
                      }).start();
                      tween(splat.getComponent(Sprite)).delay(delayDuration).to(duration, {
                        color: new Color(255, 255, 255, 0)
                      }).call(function () {
                        splat.active = false;
                        ControllerBlade.getInstance().tryPutPoolSplat(splat);
                      }).start();
                    };
  
                    for (var _i11 = 0; _i11 < splashCount; _i11++) {
                      _loop();
                    }
                  })();
                }
              }
            }
          };
  
          _proto.getTextPomegranateSlice = function getTextPomegranateSlice() {
            if (this.textPomegranateSlice == null) this.textPomegranateSlice = instantiate(this.prefabTextPomegranateSlice);
            return this.textPomegranateSlice;
          };
  
          _proto.getTextPomegranateScore = function getTextPomegranateScore() {
            if (this.textPomegranateScore == null) this.textPomegranateScore = instantiate(this.prefabTextPomegranateScore);
            return this.textPomegranateScore;
          };
  
          _proto.getTextPeachyTime = function getTextPeachyTime() {
            if (this.textPeachyTime == null) this.textPeachyTime = instantiate(this.prefabTextPeachyTime);
            return this.textPeachyTime;
          };
  
          _proto.getTextSpecificFruit = function getTextSpecificFruit() {
            return instantiate(this.prefabSpecificFruit);
          };
  
          _proto.clearActiveObject = function clearActiveObject() {
            for (var i = this.activeObject.length - 1; i >= 0; i--) {
              var curFruit = this.activeObject[i];
              var fruitComp = curFruit.getComponent(Fruit);
  
              if (fruitComp != null) {
                fruitComp.reset();
              }
  
              this.poolObject[this.getFruitIndexFromName(curFruit.name)].push(curFruit);
              this.activeObject.splice(i, 1);
              var newPos = curFruit.position.clone();
              newPos.y = -200;
              curFruit.setPosition(newPos);
            }
          };
  
          _proto.getCrossFromPool = function getCrossFromPool() {
            var result;
  
            if (this.poolCrosses.length == 0) {
              result = instantiate(this.prefabCross);
            } else {
              result = this.poolCrosses.pop();
            }
  
            return result;
          };
  
          _proto.showCross = function showCross(position) {
            var _this2 = this;
  
            var cross = this.getCrossFromPool();
            cross.active = true;
            cross.setParent(GameController.Instance.gameplayScreen);
            var UIPos = this.convertWorldToUI(position);
            var hCanvas = GameController.Instance.mainCanvas.getComponent(UITransform).height;
            UIPos.y = -hCanvas / 2 + 25 + 64 / 2;
            cross.setPosition(UIPos);
            var anim = cross.getComponent(Animation);
            anim.play("cross_gameplay_show");
            anim.on(Animation.EventType.FINISHED, function () {
              _this2.poolCrosses.push(cross);
  
              cross.removeFromParent();
              cross.active = false;
            }, this, true);
          };
  
          _createClass(FruitManager, [{
            key: "startTimer",
            get: function get() {
              return this._startTimer;
            },
            set: function set(value) {
              this._startTimer = value;
            }
          }, {
            key: "poolPurpleBombText",
            get: function get() {
              return this._poolPurpleBombText;
            },
            set: function set(value) {
              this._poolPurpleBombText = value;
            }
          }, {
            key: "poolPomegranateRay",
            get: function get() {
              return this._poolPomegranateRay;
            },
            set: function set(value) {
              this._poolPomegranateRay = value;
            }
          }, {
            key: "activePomegranateRay",
            get: function get() {
              return this._activePomegranateRay;
            },
            set: function set(value) {
              this._activePomegranateRay = value;
            }
          }, {
            key: "poolPomegranateRay2D",
            get: function get() {
              return this._poolPomegranateRay2D;
            },
            set: function set(value) {
              this._poolPomegranateRay2D = value;
            }
          }, {
            key: "activePomegranateRay2D",
            get: function get() {
              return this._activePomegranateRay2D;
            },
            set: function set(value) {
              this._activePomegranateRay2D = value;
            }
          }, {
            key: "poolBombRay",
            get: function get() {
              return this._poolBombRay;
            },
            set: function set(value) {
              this._poolBombRay = value;
            }
          }, {
            key: "countdown",
            get: function get() {
              return this._countdown;
            },
            set: function set(value) {
              this._countdown = value;
            }
          }, {
            key: "bombCounter",
            get: function get() {
              return this._bombCounter;
            },
            set: function set(value) {
              this._bombCounter = value;
            }
          }, {
            key: "waveCounter",
            get: function get() {
              return this._waveCounter;
            },
            set: function set(value) {
              this._waveCounter = value;
            }
          }]);
  
          return FruitManager;
        }(Component), _defineProperty(_class3, "m_velocity", {
          min: 10.1,
          max: 11.5
        }), _defineProperty(_class3, "m_directionAngleVariation", {
          min: 0,
          max: 10
        }), _defineProperty(_class3, "fruitList", [{
          id: "AppleGreen",
          scale: 1.064,
          splashColor: "#FEDC35",
          alpha: 179,
          splashTex: 'splash2',
          droplets: 'JuicePineapple',
          impactSFX: 'FruitImpactApple',
          minSplash: 2,
          maxSplash: 2
        }, {
          id: "Banana",
          scale: 0.95,
          splashTex: 'none',
          droplets: 'none',
          impactSFX: 'FruitImpactMediumDry'
        }, {
          id: "Coconut",
          scale: 1.2413,
          splashColor: "#F9FFFF",
          alpha: 179,
          splashTex: 'splash',
          droplets: 'JuiceDragonFruit',
          impactSFX: 'FruitImpactBigHollow',
          minSplash: 2,
          maxSplash: 4
        }, {
          id: "Kiwifruit",
          scale: 0.8866,
          splashColor: "#54AD10",
          alpha: 180,
          splashTex: 'splash',
          droplets: 'JuiceGreen',
          impactSFX: 'FruitImpactSmallWet0',
          minSplash: 1,
          maxSplash: 4
        }, {
          id: "Lemon",
          scale: 0.9753,
          splashColor: "#FFEF3F",
          alpha: 180,
          splashTex: 'splash',
          droplets: 'JuicePineapple',
          impactSFX: 'FruitImpactMediumWet0',
          minSplash: 3,
          maxSplash: 4
        }, {
          id: "Mango",
          scale: 1.1526,
          splashColor: "#FFB720",
          alpha: 180,
          splashTex: 'splash',
          droplets: 'JuiceMango',
          impactSFX: 'FruitImpactMediumWet0',
          minSplash: 2,
          maxSplash: 4
        }, {
          id: "Orange",
          scale: 1.034,
          splashColor: "#FC7804",
          alpha: 180,
          splashTex: 'splash',
          droplets: 'JuiceOrange',
          impactSFX: 'FruitImpactBigWet0',
          minSplash: 3,
          maxSplash: 4
        }, {
          id: "Peach",
          scale: 1.0108,
          splashColor: "#FFC51B",
          alpha: 180,
          splashTex: 'splash',
          droplets: 'JuiceMango',
          impactSFX: 'FruitImpactMediumWet0',
          minSplash: 4,
          maxSplash: 4
        }, {
          id: "Pineapple",
          scale: 1.1526,
          splashColor: "#FFEF3F",
          alpha: 180,
          splashTex: 'splash',
          droplets: 'JuicePineapple',
          impactSFX: 'FruitImpactBigWet0',
          minSplash: 2,
          maxSplash: 3
        }, {
          id: "Watermelon",
          scale: 1.33,
          splashColor: "#FB2618",
          alpha: 255,
          splashTex: 'splash',
          droplets: 'JuiceRed',
          impactSFX: 'FruitImpactBigWet0',
          minSplash: 3,
          maxSplash: 4
        }, {
          id: "Starfruit",
          scale: 0.85,
          splashColor: "#fbff9e",
          alpha: 180,
          splashTex: 'splash',
          droplets: 'JuicePineapple',
          impactSFX: 'FruitImpactBigWet0',
          minSplash: 2,
          maxSplash: 3
        }, {
          id: "Starfruit_half_top",
          scale: 0.85,
          splashColor: "#fbff9e",
          alpha: 180,
          splashTex: 'splash',
          droplets: 'JuicePineapple',
          impactSFX: 'FruitImpactBigWet0',
          minSplash: 2,
          maxSplash: 3
        }, {
          id: "Starfruit_half_top_gray",
          scale: 0.85,
          splashTex: 'none',
          droplets: 'none',
          impactSFX: 'FruitImpactBigWet0'
        }, {
          id: "Bomb",
          scale: 1.0,
          splashTex: 'none',
          droplets: 'none',
          impactSFX: 'BombExplodeGameOver'
        }, {
          id: "AppleRed",
          scale: 1.064,
          splashColor: "#FEDC35",
          alpha: 179,
          splashTex: 'splash2',
          droplets: 'JuicePineapple',
          impactSFX: 'FruitImpactApple',
          minSplash: 2,
          maxSplash: 2
        }, {
          id: "Pomegranate",
          scale: 1.38,
          splashColor: "#c80025",
          alpha: 179,
          splashTex: 'slice12',
          droplets: 'JuiceRed',
          impactSFX: 'FruitImpactApple',
          minSplash: 1,
          maxSplash: 1
        }, {
          id: "MysteryBoxRV",
          scale: 1,
          splashTex: 'none',
          droplets: 'none',
          impactSFX: 'FruitImpactMediumDry'
        }, {
          id: "BerryBlast",
          scale: 1.15,
          splashColor: "#FB2819",
          alpha: 179,
          splashTex: 'splash2',
          droplets: 'JuiceRed',
          impactSFX: 'FruitImpactApple',
          minSplash: 1,
          maxSplash: 4
        }, {
          id: "Peachy",
          scale: 1.15,
          splashColor: "#FFC51B",
          alpha: 179,
          splashTex: 'splash2',
          droplets: 'JuiceRed',
          impactSFX: 'FruitImpactApple',
          minSplash: 5,
          maxSplash: 4
        }, {
          id: "Bomb_purple",
          scale: 1.0,
          splashTex: 'none',
          droplets: 'none',
          impactSFX: 'BombExplodeGameOver'
        }, {
          id: "BananaSP_freeze",
          scale: 0.95,
          splashTex: 'none',
          droplets: 'none',
          impactSFX: 'FruitImpactMediumDry'
        }, {
          id: "BananaSP_double",
          scale: 0.95,
          splashTex: 'none',
          droplets: 'none',
          impactSFX: 'FruitImpactMediumDry'
        }, {
          id: "BananaSP_frenzy",
          scale: 0.95,
          splashTex: 'none',
          droplets: 'none',
          impactSFX: 'FruitImpactMediumDry'
        }]), _defineProperty(_class3, "PAUSE_SPAWNING", false), _defineProperty(_class3, "HOLD_ALL_HALF_SCHEDULER", false), _defineProperty(_class3, "DATA_PEACH_ZEN", {
          current: 0,
          base: 0,
          per_fruit_increase: 0.15,
          chance_decrease: -0.35
        }), _defineProperty(_class3, "Instance", void 0), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "fruitFBXList", [_dec2], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function initializer() {
            return [];
          }
        }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "juiceParticle", [_dec3], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function initializer() {
            return [];
          }
        }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "prefabCriticalParticle", [_dec4], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "prefabTrailParticle", [_dec5], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "prefabBombRay", [_dec6], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "prefabCross", [_dec7], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "prefabParticleFront", [_dec8], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "prefabParticleBack", [_dec9], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "prefabParticleShadow", [_dec10], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "textFruitCombo", [_dec11], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "textFruitCritical", [_dec12], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "textBerryBlast", [_dec13], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "prefabBerryBlastShockwave", [_dec14], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "prefabTextPomegranateScore", [_dec15], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "prefabTextPomegranateSlice", [_dec16], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "prefabPomegranateRay", [_dec17], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "prefabPomegranateRay2D", [_dec18], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "prefabBombPurpleText", [_dec19], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "prefabTextPeachyTime", [_dec20], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "prefabPeachyBurst", [_dec21], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "prefabSpecificFruit", [_dec22], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "textBombDeflect", [_dec23], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "particleBombDeflect", [_dec24], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "textFruitCount", [_dec25], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "mainCamera", [_dec26], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "forceFreezeSpawnBeforeEndGame", [_dec27], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function initializer() {
            return 10;
          }
        })), _class2)) || _class));
  
        cclegacy._RF.pop();
      }
    };
  });
  
  System.register("chunks:///_virtual/ControllerBlade.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './BGMManager.ts', './BladeData.ts', './SFXManager.ts', './BlitzManager.ts', './Data.ts', './ShakeNode.ts', './Fruit.ts', './SceneSelectMode.ts', './SceneGameplay.ts', './ScenePause.ts', './Bomb.ts', './SceneTutorialDeflect.ts', './SenseiSwagScene.ts', './UIMissionTutorial.ts', './SceneDeflectOffer.ts', './GameController.ts', './ArcadeBonusBoardController.ts', './FruitManager.ts', './AdsManager.ts'], function (exports) {
    'use strict';
  
    var _defineProperty, _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Camera, Line, Prefab, SpriteFrame, Vec3, find, Input, Graphics, instantiate, CurveRange, ParticleSystem, view, Vec2, randomRangeInt, Intersection2D, Sprite, Color, AnimationComponent, Animation, Component, MeshRenderer, tween, BGMManager, BladeData, SFXManager, BlitzManager, Data, ShakeNode, Fruit, SceneSelectMode, SceneGameplay, ScenePause, Bomb, SceneTutorialDeflect, SenseiSwagScene, UIMissionTutorial, SceneDeflectOffer, GameController, ArcadeBonusBoardController, FruitManager, AdsManager;
  
    return {
      setters: [function (module) {
        _defineProperty = module.defineProperty;
        _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
        _inheritsLoose = module.inheritsLoose;
        _initializerDefineProperty = module.initializerDefineProperty;
        _assertThisInitialized = module.assertThisInitialized;
      }, function (module) {
        cclegacy = module.cclegacy;
        _decorator = module._decorator;
        Node = module.Node;
        Camera = module.Camera;
        Line = module.Line;
        Prefab = module.Prefab;
        SpriteFrame = module.SpriteFrame;
        Vec3 = module.Vec3;
        find = module.find;
        Input = module.Input;
        Graphics = module.Graphics;
        instantiate = module.instantiate;
        CurveRange = module.CurveRange;
        ParticleSystem = module.ParticleSystem;
        view = module.view;
        Vec2 = module.Vec2;
        randomRangeInt = module.randomRangeInt;
        Intersection2D = module.Intersection2D;
        Sprite = module.Sprite;
        Color = module.Color;
        AnimationComponent = module.AnimationComponent;
        Animation = module.Animation;
        Component = module.Component;
        MeshRenderer = module.MeshRenderer;
        tween = module.tween;
      }, function (module) {
        BGMManager = module.BGMManager;
      }, function (module) {
        BladeData = module.BladeData;
      }, function (module) {
        SFXManager = module.SFXManager;
      }, function (module) {
        BlitzManager = module.BlitzManager;
      }, function (module) {
        Data = module.Data;
      }, function (module) {
        ShakeNode = module.ShakeNode;
      }, function (module) {
        Fruit = module.Fruit;
      }, function (module) {
        SceneSelectMode = module.SceneSelectMode;
      }, function (module) {
        SceneGameplay = module.SceneGameplay;
      }, function (module) {
        ScenePause = module.ScenePause;
      }, function (module) {
        Bomb = module.Bomb;
      }, function (module) {
        SceneTutorialDeflect = module.SceneTutorialDeflect;
      }, function (module) {
        SenseiSwagScene = module.SenseiSwagScene;
      }, function (module) {
        UIMissionTutorial = module.UIMissionTutorial;
      }, function (module) {
        SceneDeflectOffer = module.SceneDeflectOffer;
      }, function (module) {
        GameController = module.GameController;
      }, function (module) {
        ArcadeBonusBoardController = module.ArcadeBonusBoardController;
      }, function (module) {
        FruitManager = module.FruitManager;
      }, function (module) {
        AdsManager = module.AdsManager;
      }],
      execute: function () {
        var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _class3, _temp;
  
        cclegacy._RF.push({}, "d7347eZappP+qQRvW00cqin", "ControllerBlade", undefined);
  
        var ccclass = _decorator.ccclass,
            property = _decorator.property;
        var ControllerBlade = exports('ControllerBlade', (_dec = ccclass('ControllerBlade'), _dec2 = property({
          type: [Node],
          displayName: "Blade Tip"
        }), _dec3 = property({
          type: [Camera],
          displayName: "Camera"
        }), _dec4 = property({
          type: [Line],
          displayName: "Line Trail"
        }), _dec5 = property({
          type: [Node],
          displayName: "TrailV2"
        }), _dec6 = property({
          type: [Node],
          displayName: "TrailV3"
        }), _dec7 = property({
          type: [Prefab],
          displayName: "Splash"
        }), _dec8 = property({
          type: [Prefab],
          displayName: "SliceDiamond"
        }), _dec9 = property({
          type: [Prefab],
          displayName: "Splat"
        }), _dec10 = property({
          type: [Prefab],
          displayName: "SliceDiamondCritical"
        }), _dec11 = property({
          type: [SpriteFrame],
          displayName: "SplatSpriteFrame"
        }), _dec(_class = (_class2 = (_temp = _class3 = /*#__PURE__*/function (_Component) {
          _inheritsLoose(ControllerBlade, _Component);
  
          function ControllerBlade() {
            var _this;
  
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
  
            _this = _Component.call.apply(_Component, [this].concat(args)) || this;
  
            _initializerDefineProperty(_assertThisInitialized(_this), "bladeTip", _descriptor, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "camera", _descriptor2, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "line", _descriptor3, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "trail", _descriptor4, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "trailGraphics", _descriptor5, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "prefabSplash", _descriptor6, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "prefabSliceDiamond", _descriptor7, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "prefabSplat", _descriptor8, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "prefabSliceDiamondCritical", _descriptor9, _assertThisInitialized(_this));
  
            _defineProperty(_assertThisInitialized(_this), "poolSplash", []);
  
            _defineProperty(_assertThisInitialized(_this), "poolSlice", []);
  
            _defineProperty(_assertThisInitialized(_this), "poolSliceCritical", []);
  
            _defineProperty(_assertThisInitialized(_this), "poolSplat", []);
  
            _initializerDefineProperty(_assertThisInitialized(_this), "splatSpriteFrame", _descriptor10, _assertThisInitialized(_this));
  
            _defineProperty(_assertThisInitialized(_this), "timerToShiftLine", 0);
  
            _defineProperty(_assertThisInitialized(_this), "touching", false);
  
            _defineProperty(_assertThisInitialized(_this), "maxPosition", 15);
  
            _defineProperty(_assertThisInitialized(_this), "input", {
              x: 0,
              y: 0
            });
  
            _defineProperty(_assertThisInitialized(_this), "linePosition", []);
  
            _defineProperty(_assertThisInitialized(_this), "pointTimer", []);
  
            _defineProperty(_assertThisInitialized(_this), "trailDistance", 0);
  
            _defineProperty(_assertThisInitialized(_this), "currentTouchID", -1);
  
            _defineProperty(_assertThisInitialized(_this), "distanceMove", 0);
  
            _defineProperty(_assertThisInitialized(_this), "firstPosition", new Vec3(0, 0, 0));
  
            _defineProperty(_assertThisInitialized(_this), "lastSFXSound", 0);
  
            _defineProperty(_assertThisInitialized(_this), "spawnRateParticleData", []);
  
            _defineProperty(_assertThisInitialized(_this), "sfxBlades", []);
  
            _defineProperty(_assertThisInitialized(_this), "sfxSlices", []);
  
            _defineProperty(_assertThisInitialized(_this), "lastRandCrit", 0);
  
            return _this;
          }
  
          ControllerBlade.getInstance = function getInstance() {
            return ControllerBlade.Instance;
          };
  
          var _proto = ControllerBlade.prototype;
  
          _proto.onLoad = function onLoad() {
            ControllerBlade.Instance = this;
          };
  
          _proto.start = function start() {
            find("Canvas").on(Input.EventType.TOUCH_START, this.touchStart, this, true);
            find("Canvas").on(Input.EventType.TOUCH_MOVE, this.touchMove, this, true);
            find("Canvas").on(Input.EventType.TOUCH_END, this.touchEnd, this, true);
            var ctx = this.trailGraphics.getComponent(Graphics);
            ctx.clear();
            this.resetBladeData();
          };
  
          _proto.getSplash = function getSplash() {
            var res;
  
            if (this.poolSplash.length > 0) {
              res = this.poolSplash.pop();
            } else {
              res = instantiate(this.prefabSplash);
            }
  
            return res;
          };
  
          _proto.getSplat = function getSplat() {
            var res;
  
            if (this.poolSplat.length > 0) {
              res = this.poolSplat.pop();
            } else {
              res = instantiate(this.prefabSplat);
            }
  
            return res;
          };
  
          _proto.getSliceDiamond = function getSliceDiamond() {
            var res;
  
            if (this.poolSlice.length > 0) {
              res = this.poolSlice.pop();
            } else {
              res = instantiate(this.prefabSliceDiamond);
            }
  
            return res;
          };
  
          _proto.getSliceDiamondCritical = function getSliceDiamondCritical() {
            var res;
  
            if (this.poolSliceCritical.length > 0) {
              res = this.poolSliceCritical.pop();
            } else {
              res = instantiate(this.prefabSliceDiamondCritical);
            }
  
            return res;
          };
  
          _proto.update = function update(deltaTime) {
            this.checkFruits(true);
  
            if (GameController.getInstance().getScreenState() == GameController.SCREEN_STATE_GAMEPLAY) {
              this.checkFruits(false);
            }
  
            this.trail.position = this.bladeTip.position;
  
            for (var index = 0; index < this.linePosition.length; index++) {
              this.pointTimer[index] += deltaTime;
  
              if (this.pointTimer[index] >= 0.2) {
                this.linePosition.splice(index, 1);
                this.pointTimer.splice(index, 1);
                index -= 1;
              }
            }
  
            this.lastSFXSound -= deltaTime;
  
            if (this.linePosition.length == 0) {
              var ctx = this.trailGraphics.getComponent(Graphics);
              ctx.clear();
  
              if (!this.touching) {
                this.bladeTip.getChildByPath("BladeTip").active = false;
  
                if (this.bladeTip.getChildByPath("Particle0")) {
                  var curveRange = new CurveRange();
                  curveRange.constant = 0;
                  this.bladeTip.getChildByPath("Particle0").getComponent(ParticleSystem).rateOverTime = curveRange;
                  var allPS = this.bladeTip.getChildByPath("Particle0").getComponentsInChildren(ParticleSystem);
  
                  for (var i = 0; i < allPS.length; i++) {
                    allPS[i].rateOverTime = curveRange;
                  }
                }
              }
            } else {
              var _ctx = this.trailGraphics.getComponent(Graphics);
  
              _ctx.clear();
  
              if (this.linePosition.length > 0) {
                var out = new Vec3();
                this.camera.worldToScreen(this.linePosition[0], out);
                var scalePosY = 1 / view.getScaleY();
                var scalePosX = 1 / view.getScaleX();
                out.x *= scalePosX;
                out.y *= scalePosY;
  
                _ctx.moveTo(out.x, out.y);
  
                _ctx.lineWidth = 32;
                var prevPos = out.clone();
  
                for (var _i = 1; _i < this.linePosition.length; _i++) {
                  this.camera.worldToScreen(this.linePosition[_i], out);
                  out.x *= scalePosX;
                  out.y *= scalePosY;
  
                  _ctx.lineTo(out.x, out.y);
  
                  var distance = Vec2.distance(prevPos, out);
  
                  if (this.lastSFXSound <= 0 && distance >= 50) {
                    this.lastSFXSound = 0.3;
  
                    if (this.sfxBlades.length > 0) {
                      SFXManager.getInstance().playClip(this.sfxBlades[randomRangeInt(0, this.sfxBlades.length)]);
                    }
                  }
  
                  prevPos = out.clone();
                }
  
                _ctx.stroke();
              }
            }
          };
  
          _proto.tryPutPoolSplash = function tryPutPoolSplash(node) {
            this.poolSplash.push(node);
          };
  
          _proto.tryPutPoolSplat = function tryPutPoolSplat(node) {
            this.poolSplat.push(node);
          };
  
          _proto.checkFruits = function checkFruits(isUI) {
            var _this2 = this;
  
            var me = this;
            var points = this.linePosition;
            var listFruit = isUI ? GameController.getInstance().listUIFruit : FruitManager.getInstance().getActiveFruit();
  
            var _loop = function _loop(i) {
              listFruit.forEach(function (value, index, array) {
                if (value.active) {
                  var posFruit = value.worldPosition;
                  var w = (value.getComponentInChildren(MeshRenderer).mesh.struct.maxPosition.x - value.getComponentInChildren(MeshRenderer).mesh.struct.minPosition.x) * value.worldScale.x;
                  var h = (value.getComponentInChildren(MeshRenderer).mesh.struct.maxPosition.y - value.getComponentInChildren(MeshRenderer).mesh.struct.minPosition.y) * value.worldScale.y;
                  var fruitPos = {
                    x: posFruit.x,
                    y: posFruit.y,
                    width: w,
                    height: h
                  };
                  var isFruit = value.getComponent(Fruit) != null;
                  var isBomb = value.getComponent(Bomb) != null;
  
                  if (me.checkIntersects(fruitPos, new Vec2(points[i].x, points[i].y), new Vec2(points[i - 1].x, points[i - 1].y), isFruit)) {
                    if (isFruit) {
                      var fruit = value.getComponent(Fruit);
                      var dy = points[i].y - points[i - 1].y;
                      var dx = points[i].x - points[i - 1].x;
                      var degree = Math.atan2(dy, dx) / Math.PI * 180;
  
                      if (!fruit.slashed) {
                        if (fruit.keyMenu != "invalid") {
                          var isCritical = false;
  
                          if (fruit.keyMenu == "") {
                            _this2.lastRandCrit += randomRangeInt(1, 101);
                            _this2.lastRandCrit %= 100;
                            if (fruit.isPomegranate() || fruit.isBerryBlast()) isCritical = false;else isCritical = _this2.lastRandCrit <= 7;
  
                            if (GameController.TUTORIAL_STATE >= 1 && GameController.TUTORIAL_STATE <= 3) {
                              UIMissionTutorial.getInstance().updateCountFruits(UIMissionTutorial.getInstance().counterFruits + 1, function () {
                                var contFinger = GameController.Instance.gameplayScreen.getChildByPath("container_tutorial_finger");
  
                                if (contFinger.active) {
                                  contFinger.getComponent(Animation).stop();
                                  contFinger.active = false;
                                }
  
                                if (GameController.TUTORIAL_STATE == 3) {
                                  GameController.TUTORIAL_STATE = 4;
                                  UIMissionTutorial.getInstance().showComplete(function () {
                                    me.scheduleOnce(function () {
                                      UIMissionTutorial.getInstance().hide();
                                    }, 3);
                                  });
                                  ScenePause.getInstance().showButtonPause();
                                  GameController.saveData();
                                } else {
                                  GameController.TUTORIAL_STATE += 1;
                                  GameController.saveData();
                                }
  
                                UIMissionTutorial.getInstance().counterFruits = 0;
                                FruitManager.getInstance().startTimer = 0;
                              });
                              isCritical = false;
                            }
  
                            if (isCritical) GameController.getInstance().gameData.g.push({
                              a: 'sfc',
                              t: GameController.getInstance().timerGameplay.toFixed(4),
                              n: fruit.waveId
                            });else if (fruit.isBerryBlast()) GameController.getInstance().gameData.g.push({
                              a: 'sfb',
                              t: GameController.getInstance().timerGameplay.toFixed(4),
                              n: fruit.waveId
                            });else GameController.getInstance().gameData.g.push({
                              a: 'sf',
                              t: GameController.getInstance().timerGameplay.toFixed(4),
                              n: fruit.waveId
                            });
                          }
  
                          if (_this2.sfxSlices.length > 0) {
                            SFXManager.getInstance().playClip(_this2.sfxSlices[randomRangeInt(0, _this2.sfxSlices.length)]);
                          }
  
                          fruit.getSlashed(degree, isCritical);
                          var fruitDetail = fruit.getComponent(Fruit).getFruitDetail();
  
                          if (fruitDetail.splashTex != "none") {
                            var splash = _this2.getSplash();
  
                            splash.setParent(find("BladeCanvas"));
  
                            var _posSplash = new Vec3(0, 0, 0);
  
                            _this2.camera.worldToScreen(new Vec3(fruitPos.x, fruitPos.y, 0), _posSplash);
  
                            _posSplash.x /= view.getScaleX();
                            _posSplash.y /= view.getScaleY();
                            var bgCamera = GameController.getInstance().mainCanvas2.getChildByPath("Camera");
                            splash.setRotationFromEuler(0, 0, degree + 90);
  
                            if (isCritical) {
                              splash.getComponentInChildren(Sprite).color = new Color("#1A5F90");
                            } else {
                              splash.getComponentInChildren(Sprite).color = new Color(fruit.getComponent(Fruit).getFruitDetail().splashColor);
                            }
  
                            splash.setWorldPosition(_posSplash);
                            splash.active = true;
                            splash.getComponent(AnimationComponent).play("fruitSplash_spriteAnim");
                            splash.getComponent(AnimationComponent).once(Animation.EventType.FINISHED, function () {
                              splash.getComponent(AnimationComponent).stop();
                              splash.active = false;
  
                              _this2.poolSplash.push(splash);
                            });
                            _posSplash.x += bgCamera.position.x;
                            _posSplash.y += bgCamera.position.y;
                            var basePosition = _posSplash;
                            var hasSliced = false;
                            var splashCount = randomRangeInt(fruitDetail.minSplash, fruitDetail.maxSplash + 1);
  
                            if (isCritical) {
                              splashCount *= 2;
                            }
  
                            var _loop2 = function _loop2(_i2) {
                              if (fruit.getComponent(Fruit).isPomegranate() && fruit.getComponent(Fruit).counter % 2 != 0) return "break";
  
                              var splat = _this2.getSplat();
  
                              splat.setParent(find("CanvasBG/DojoBG/splatEffect"));
                              var posSplat = basePosition.clone();
  
                              if (fruitDetail.splashTex != "slice12") {
                                posSplat.x += randomRangeInt(-10, 10) * 10;
                                posSplat.y += randomRangeInt(-10, 10) * 10;
                              } else {
                                posSplat.x += randomRangeInt(-10, 10) * 1;
                                posSplat.y += randomRangeInt(-10, 10) * 1;
                              }
  
                              var duration = 1;
                              var delayDuration = randomRangeInt(18, 25) / 10;
                              var customTime = 0;
  
                              if (fruitDetail.splashTex == "slice12") {
                                customTime = fruit.getComponent(Fruit).timerSlicing;
                                hasSliced = true;
                                posSplat = basePosition.clone();
  
                                if (randomRangeInt(0, 100) <= 25) {
                                  splat.getComponentInChildren(Sprite).spriteFrame = _this2.splatSpriteFrame[1];
                                } else {
                                  splat.getComponentInChildren(Sprite).spriteFrame = _this2.splatSpriteFrame[randomRangeInt(4, 6)];
                                  posSplat.x -= Math.cos(degree * Math.PI / 180) * 200;
                                  posSplat.y -= Math.sin(degree * Math.PI / 180) * 100;
                                }
  
                                splat.scale = new Vec3(-0.7, 0.7, 1);
                                splat.setRotationFromEuler(0, 0, degree);
                              } else if (fruitDetail.splashTex == "splash2") {
                                splat.getComponentInChildren(Sprite).spriteFrame = _this2.splatSpriteFrame[randomRangeInt(3, 4)];
                                splat.scale = new Vec3(0.7, 0.7, 1);
                                splat.setRotationFromEuler(0, 0, 0);
                              } else {
                                if (randomRangeInt(0, 100) % 2 == 0 || hasSliced) {
                                  splat.getComponentInChildren(Sprite).spriteFrame = _this2.splatSpriteFrame[randomRangeInt(1, 2)];
                                  splat.scale = new Vec3(0.7, 0.7, 1);
                                  splat.setRotationFromEuler(0, 0, 0);
                                  tween(splat.getChildByPath("assets")).delay(delayDuration).by(duration, {
                                    scale: new Vec3(0, 0.12, 0)
                                  }).start();
                                } else {
                                  hasSliced = true;
                                  splat.getComponentInChildren(Sprite).spriteFrame = _this2.splatSpriteFrame[randomRangeInt(5, 6)];
                                  splat.scale = new Vec3(-0.7, 0.7, 1);
                                  posSplat = basePosition.clone();
                                  posSplat.x -= Math.cos(degree * Math.PI / 180) * 200;
                                  posSplat.y -= Math.sin(degree * Math.PI / 180) * 100;
                                  splat.setRotationFromEuler(0, 0, degree);
                                }
                              }
  
                              splat.getChildByPath("assets").scale = new Vec3(1, 1, 1);
  
                              if (isCritical) {
                                splat.getComponentInChildren(Sprite).color = new Color("#1A5F90");
                              } else {
                                splat.getComponentInChildren(Sprite).color = new Color(fruit.getComponent(Fruit).getFruitDetail().splashColor);
                              }
  
                              splat.setWorldPosition(posSplat);
                              splat.active = true;
                              splat.getComponent(Sprite).color = new Color(255, 255, 255, 255);
                              tween(splat).delay(delayDuration + customTime).by(duration, {
                                position: new Vec3(0, randomRangeInt(-10, -5) * 2, 0)
                              }).start();
                              tween(splat.getComponent(Sprite)).delay(delayDuration + customTime).to(duration, {
                                color: new Color(255, 255, 255, 0)
                              }).call(function () {
                                splat.active = false;
  
                                _this2.poolSplat.push(splat);
                              }).start();
                            };
  
                            for (var _i2 = 0; _i2 < splashCount; _i2++) {
                              var _ret = _loop2(_i2);
  
                              if (_ret === "break") break;
                            }
                          }
  
                          var sliceDiamond;
  
                          if (isCritical) {
                            GameController.Instance.showCritical();
                            sliceDiamond = _this2.getSliceDiamondCritical();
                          } else {
                            sliceDiamond = _this2.getSliceDiamond();
                          }
  
                          sliceDiamond.setParent(find("BladeCanvas"));
                          var posSplash = new Vec3(0, 0, 0);
  
                          _this2.camera.worldToScreen(new Vec3(fruitPos.x, fruitPos.y, 0), posSplash);
  
                          posSplash.x /= view.getScaleX();
                          posSplash.y /= view.getScaleY();
                          sliceDiamond.active = true;
                          sliceDiamond.setRotationFromEuler(0, 0, degree + 90);
                          sliceDiamond.setWorldPosition(posSplash);
  
                          if (isCritical) {
                            sliceDiamond.getComponent(Animation).play("fruitSlice_diamond_critical");
  
                            if (Fruit.CAMERA_ZOOMED) {
                              sliceDiamond.getChildByPath("assets").setScale(new Vec3(2, 2, 2));
                              sliceDiamond.getChildByPath("assets-001").setScale(new Vec3(2, 2, 2));
                            } else {
                              sliceDiamond.getChildByPath("assets").setScale(new Vec3(1, 1, 1));
                              sliceDiamond.getChildByPath("assets-001").setScale(new Vec3(1, 1, 1));
                            }
                          } else {
                            sliceDiamond.getComponent(Animation).play("fruitSlice_diamond");
                            if (Fruit.CAMERA_ZOOMED) sliceDiamond.getChildByPath("assets").setScale(new Vec3(2, 2, 2));else sliceDiamond.getChildByPath("assets").setScale(new Vec3(1, 1, 1));
                          }
  
                          sliceDiamond.getComponent(Animation).once(Animation.EventType.FINISHED, function () {
                            sliceDiamond.getComponent(Animation).stop();
                            sliceDiamond.active = false;
  
                            if (isCritical) {
                              _this2.poolSliceCritical.push(sliceDiamond);
                            } else {
                              _this2.poolSlice.push(sliceDiamond);
                            }
                          });
                        }
  
                        if (fruit.keyMenu == "") {
                          if (fruit.isPomegranate()) ;else {
                            if (fruit.isPeachyTime()) {
                              GameController.getInstance().peachyCount += 1;
                              fruit.stopParticlePeachyTime();
                              GameController.getInstance().showPeachTimeText(fruit.node.position);
                              FruitManager.getInstance().showPeachyTimeBurst(fruit.node.position);
                              if (GameController.gameMode == GameController.MODE_ZEN) GameController.getInstance().updateZenTimer(GameController.getInstance().getZenTimer() + 2);else if (GameController.gameMode == GameController.MODE_ARCADE) GameController.getInstance().updateArcadeTimer(GameController.getInstance().arcadeTimer + 2);
                            } else if (fruit.isBerryBlast()) {
                              GameController.getInstance().berryBlastCount += 1;
                              GameController.getInstance().updateScore(GameController.getInstance().score + 5);
                              GameController.getInstance().camera.getComponent(ShakeNode).shakeEffect();
                              FruitManager.getInstance().showShockwave(fruit.node.position);
                              GameController.getInstance().showBerryBlastText(fruit.node.position);
                            } else {
                              GameController.getInstance().updateScore(GameController.getInstance().score + 1);
                              GameController.getInstance().setLastFruitSlashedPosition(fruit.node.position);
                              var specificFruitName = "";
  
                              if (GameController.fruitMode == "greenapple" && fruit.isFruitSameType("AppleGreen")) {
                                specificFruitName = "APPLE";
                              } else if (GameController.fruitMode == "watermelon" && fruit.isFruitSameType("Watermelon")) {
                                specificFruitName = "WATERMELON";
                              } else if (GameController.fruitMode == "pineapple" && fruit.isFruitSameType("Pineapple")) {
                                specificFruitName = "PINEAPPLE";
                              } else if (GameController.fruitMode == "orange" && fruit.isFruitSameType("Orange")) {
                                specificFruitName = "ORANGE";
                              } else if (GameController.fruitMode == "coconut" && fruit.isFruitSameType("Coconut")) {
                                specificFruitName = "COCONUT";
                              }
  
                              if (specificFruitName != "") {
                                SFXManager.getInstance().play(SFXManager.SFX_COMBO_10_FRUIT_PLUS);
                                GameController.getInstance().updateScore(GameController.getInstance().score + 1);
                                GameController.getInstance().showSpecificFruitText(specificFruitName, fruit.node.position);
                              }
  
                              GameController.getInstance().updateCombo(GameController.getInstance().getCombo() + 1);
  
                              if (GameController.getInstance().getCombo() == 1) {
                                GameController.getInstance().breakCombo = false;
                                GameController.getInstance().updateTimerCombo(0.3);
                              } else {
                                if (GameController.gameMode == GameController.MODE_ARCADE && FruitManager.getInstance().frenzyDuration >= 0) ;else {
                                  GameController.getInstance().updateTimerCombo(GameController.getInstance().getTimerCombo() + 0.1);
                                }
                              }
                            }
                          }
                        } else if (fruit.keyMenu == "get_random_powerup") {
                          GameController.getInstance().setHoldInput(true);
                          AdsManager.showRewardedAds(function () {
                            GameController.counterWithoutWatchFreePowerup = 0;
                            SceneSelectMode.getInstance().showBtnAds(false);
                            var listPowerUp = [0, 1, 2];
                            if (SceneSelectMode.game_mode.includes("zen")) listPowerUp = [0, 2];else if (SceneSelectMode.game_mode.includes("classic")) listPowerUp = [0, 1];
                            var random = listPowerUp[randomRangeInt(0, listPowerUp.length)];
  
                            if (random == 0) {
                              Data.getInstance().inventoryPUBerryBlast += 1;
                              GameController.saveData();
                              SceneDeflectOffer.FROM_SELECT_MODE_SCREEN = true;
                              SceneSelectMode.getInstance().showClaimBerryBlast();
                            } else if (random == 1) {
                              Data.getInstance().inventoryPUDeflect += 1;
                              GameController.saveData();
                              SceneDeflectOffer.FROM_SELECT_MODE_SCREEN = true;
                              SceneSelectMode.getInstance().showClaimDeflect();
                            } else if (random == 2) {
                              Data.getInstance().inventoryPUPeachyTime += 1;
                              GameController.saveData();
                              SceneDeflectOffer.FROM_SELECT_MODE_SCREEN = true;
                              SceneSelectMode.getInstance().showClaimPeachyTime();
                            }
  
                            GameController.Instance.selectModeScreen.getComponent(SceneSelectMode).refreshPowerUp();
                          }, function () {
                            GameController.getInstance().resetScreen(SceneSelectMode.getInstance().node);
                            GameController.getInstance().setHoldInput(false);
                            var listPowerUp = [0, 1, 2];
                            var random = listPowerUp[randomRangeInt(0, listPowerUp.length)];
                          });
                        } else if (fruit.keyMenu == "pilih_state_classic" || fruit.keyMenu == "pilih_state_zen" || fruit.keyMenu == "pilih_state_arcade") {
                          var mode = "classic";
                          var title = "";
  
                          if (fruit.keyMenu == "pilih_state_classic") {
                            GameController.gameMode = GameController.MODE_CLASSIC;
                            mode = "classic";
                            title = "Classic Mode";
                            SceneSelectMode.game_mode = "classic";
                          } else if (fruit.keyMenu == "pilih_state_zen") {
                            GameController.gameMode = GameController.MODE_ZEN;
                            mode = "zen";
                            title = "Zen Mode";
                            SceneSelectMode.game_mode = "zen";
                          } else if (fruit.keyMenu == "pilih_state_arcade") {
                            GameController.gameMode = GameController.MODE_ARCADE;
                            mode = "arcade";
                            title = "Arcade Mode";
                            SceneSelectMode.game_mode = "arcade";
                          }
  
                          GameController.getInstance().setHoldInput(true);
                          GameController.getInstance().exitScreen(function () {
                            GameController.getInstance().setHoldInput(false);
                            SceneSelectMode.setFrom("homescreen", mode, []);
                            SceneSelectMode.setTitle(title);
                            GameController.context_type = "solo";
                            GameController.getInstance().setScreenState(GameController.SCREEN_STATE_SELECT_MODE);
                          });
                        } else if (fruit.keyMenu == "pilih_state_startplay") {
                          GameController.getInstance().setHoldInput(true);
                          GameController.context_type = "solo";
                          GameController.getInstance().exitScreen(function () {
                            GameController.getInstance().setHoldInput(false);
                            GameController.getInstance().setScreenState(GameController.SCREEN_STATE_GAMEPLAY);
                          });
                        } else if (fruit.keyMenu == "solo_mode_slash") {
                          GameController.getInstance().setHoldInput(true);
                          GameController.getInstance().exitScreen(function () {
                            GameController.getInstance().setHoldInput(false);
                            SceneSelectMode.setFrom("homescreen", "", []);
                            SceneSelectMode.setTitle("Solo Play");
                            GameController.context_type = "solo";
                            GameController.getInstance().setScreenState(GameController.SCREEN_STATE_SELECT_MODE);
                          });
                        } else if (fruit.keyMenu == "result_move_to_homescreen") {
                          AdsManager.showInterstitialAds(function () {
                            GameController.getInstance().moveToHomescreen();
                          });
                        } else if (fruit.keyMenu == "move_to_senseiswag") {
                          GameController.getInstance().setHoldInput(true);
                          GameController.getInstance().exitScreen(function () {
                            GameController.getInstance().setHoldInput(false);
                            GameController.getInstance().setScreenState(GameController.SCREEN_STATE_SENSEI_SWAG);
                          });
                        } else if (fruit.keyMenu == "move_to_setting") {
                          GameController.getInstance().setHoldInput(true);
                          GameController.getInstance().exitScreen(function () {
                            GameController.getInstance().setHoldInput(false);
                            GameController.getInstance().setScreenState(GameController.SCREEN_STATE_SETTING);
                          });
                        } else if (fruit.keyMenu == 'select_sensei_swag') {
                          SenseiSwagScene.Instance.selectCurrent();
  
                          _this2.showSplat(fruitPos, degree, fruit);
                        } else if (fruit.keyMenu == 'try_purchase_sensei_swag') {
                          SenseiSwagScene.Instance.tryPurchase();
  
                          _this2.showSplat(fruitPos, degree, fruit);
                        } else if (fruit.keyMenu == "move_to_language") {
                          GameController.Instance.settingScreen.getComponent(Animation).play("settings_out");
                          GameController.Instance.settingScreen.getComponent(Animation).once(Animation.EventType.FINISHED, function () {
                            GameController.getInstance().setScreenState(GameController.SCREEN_STATE_LANGUAGE);
                          });
                        } else if (fruit.keyMenu == "result_move_to_homescreen") {
                          GameController.getInstance().setScreenState(GameController.SCREEN_STATE_HOMESCREEN);
                        }
                      }
                    } else if (isBomb) {
                      var bomb = value.getComponent(Bomb);
  
                      if (bomb != null && bomb.getSlashed()) {
                        if (bomb.isBombType("gameover")) GameController.getInstance().gameData.g.push({
                          a: 'sb',
                          t: GameController.getInstance().timerGameplay.toFixed(4),
                          n: bomb.waveId
                        });
  
                        if (GameController.TUTORIAL_STATE == 4) {
                          GameController.getInstance().setHoldInput(true);
                          GameController.TUTORIAL_STATE = 5;
                          FruitManager.getInstance().tryPauseAllFruit();
                          BGMManager.getInstance().stopBombBGM();
                          ScenePause.getInstance().holdButtonPause = true;
                          bomb.shakeBomb(function () {
                            var contTutorialDeflect = GameController.getInstance().mainCanvasOverlay.getChildByPath("container_tutorialDeflect");
                            contTutorialDeflect.active = true;
                            var anim = contTutorialDeflect.getComponent(Animation);
                            anim.play("tutDeflect_in");
                            anim.on(Animation.EventType.FINISHED, function () {
                              anim.play("tutDeflect_idle");
                            }, this, true);
                          });
  
                          var _dy = points[i].y - points[i - 1].y;
  
                          var _dx = points[i].x - points[i - 1].x;
  
                          var _degree = GameController.rad2deg(Math.atan2(_dy, _dx));
  
                          SceneTutorialDeflect.onClaimRewardCallback = function () {
                            ScenePause.getInstance().holdButtonPause = false;
                            GameController.getInstance().useDeflectPowerUp();
                            SFXManager.getInstance().play(SFXManager.SFX_POWERUP_DEFLECT);
                            bomb.deflected(_degree);
                            var particleBomb = FruitManager.getInstance().getParticleBombDeflect();
                            particleBomb.setParent(FruitManager.getInstance().node);
                            particleBomb.active = true;
                            particleBomb.setPosition(bomb.node.position);
                            particleBomb.setRotationFromEuler(0, 0, _degree + 270);
                            var pBomb = particleBomb.getComponent(ParticleSystem);
                            pBomb.startRotationZ.constant = GameController.deg2rad(_degree - 90);
                            pBomb.velocityOvertimeModule.x.constant = 7 * Math.sin(GameController.deg2rad(_degree + 90));
                            pBomb.velocityOvertimeModule.y.constant = -7 * Math.cos(GameController.deg2rad(_degree + 90));
                            pBomb.play();
                            var pSpark = particleBomb.getChildByName("particle_spark").getComponent(ParticleSystem);
                            pSpark.play();
                          };
                        } else {
                          if (GameController.getInstance().deflectCounter <= 0) {
                            if (GameController.gameMode == GameController.MODE_ARCADE) {
                              ArcadeBonusBoardController.getInstance().bombHitCounter += 1;
                            }
  
                            if (bomb.isBombType("gameover")) {
                              BGMManager.getInstance().stopBombBGM();
                              bomb.animateExplode();
                              GameController.getInstance().dieFromBomb = true;
                              GameController.getInstance().setGameState(GameController.STATE_GAME_LOSE);
                            } else if (bomb.isBombType("reduce_timer")) {
                              GameController.getInstance().arcadeBombCount += 1;
                              FruitManager.getInstance().destroyFruitInRadius(bomb.node.position, -1, false);
                              SFXManager.getInstance().play(SFXManager.SFX_BOMB_EXPLODE_ARCADE);
                              bomb.animateExplodeTimer();
                              GameController.getInstance().showReduceScoreText(bomb.node.position);
                              GameController.getInstance().updateScore(GameController.getInstance().score - 10);
  
                              if (BlitzManager.getInstance().isActive()) {
                                BlitzManager.getInstance().reset();
                                SFXManager.getInstance().play(SFXManager.SFX_BLITZ_DRUM_END);
                              }
                            }
                          } else {
                            SFXManager.getInstance().play(SFXManager.SFX_POWERUP_DEFLECT);
  
                            var _dy2 = points[i].y - points[i - 1].y;
  
                            var _dx2 = points[i].x - points[i - 1].x;
  
                            var _degree2 = GameController.rad2deg(Math.atan2(_dy2, _dx2));
  
                            bomb.deflected(_degree2);
                            var particleBomb = FruitManager.getInstance().getParticleBombDeflect();
                            particleBomb.setParent(FruitManager.getInstance().node);
                            particleBomb.active = true;
                            particleBomb.setPosition(bomb.node.position);
                            particleBomb.setRotationFromEuler(0, 0, _degree2 + 270);
                            var pBomb = particleBomb.getComponent(ParticleSystem);
                            pBomb.startRotationZ.constant = GameController.deg2rad(_degree2 - 90);
                            pBomb.velocityOvertimeModule.x.constant = 7 * Math.sin(GameController.deg2rad(_degree2 + 90));
                            pBomb.velocityOvertimeModule.y.constant = -7 * Math.cos(GameController.deg2rad(_degree2 + 90));
                            pBomb.play();
                            var pSpark = particleBomb.getChildByName("particle_spark").getComponent(ParticleSystem);
                            pSpark.play();
                            console.log("bomb deflect: " + _degree2);
                            console.log("bomb deflect: " + pBomb.startRotationZ.constant + " " + pBomb.velocityOvertimeModule.x.constant + " " + pBomb.velocityOvertimeModule.y.constant);
  
                            _this2.scheduleOnce(function () {
                              FruitManager.getInstance().putBombDeflect(particleBomb);
                            }, 1);
  
                            GameController.getInstance().deflectCounter -= 1;
                            GameController.getInstance().showDeflectText(bomb.node.position);
  
                            if (GameController.getInstance().deflectCounter <= 0) {
                              SceneGameplay.getInstance().showIconDeflect(false);
                            }
                          }
                        }
                      }
                    }
                  }
                }
              });
            };
  
            for (var i = 1; i < points.length; i++) {
              _loop(i);
            }
          };
  
          _proto.checkIntersects = function checkIntersects(fruit, firstPoint, secondPoint, isFruit) {
            if (GameController.getInstance().getScreenState() == GameController.SCREEN_STATE_GAMEPLAY && GameController.getInstance().getGameState() == GameController.STATE_GAME_LOSE) return;
            var topLeft = new Vec2(fruit.x - fruit.width / 2, fruit.y - fruit.height / 2);
            var bottomRight = new Vec2(fruit.x + fruit.width / 2, fruit.y + fruit.height / 2);
            var bottomLeft = new Vec2(fruit.x - fruit.width / 2, fruit.y + fruit.height / 2);
            var topRight = new Vec2(fruit.x + fruit.width / 2, fruit.y - fruit.height / 2);
            var intersectA = Intersection2D.lineLine(topLeft, bottomRight, firstPoint, secondPoint);
            var intersectB = Intersection2D.lineLine(bottomLeft, topRight, firstPoint, secondPoint);
  
            if (intersectA || intersectB) {
              if (isFruit) {
                return true;
              } else {
                var distance = Intersection2D.pointLineDistance(new Vec2(fruit.x, fruit.y), firstPoint, secondPoint, true);
                if (distance <= 1) return true;
              }
            }
  
            return false;
          };
  
          _proto.tryMoveTip = function tryMoveTip(position) {
            if (GameController.getInstance().getScreenState() == GameController.SCREEN_STATE_GAMEPLAY && GameController.getInstance().getGameState() == GameController.STATE_GAME_LOSE) return;
            var prevPos = this.bladeTip.position.clone();
            var newPos = position;
            if (this.linePosition.length >= this.maxPosition) this.linePosition.pop();
            var distance = Math.sqrt(Math.pow(newPos.x - prevPos.x, 2) + Math.pow(newPos.y - prevPos.y, 2));
            this.trailDistance += distance;
  
            if (this.trailDistance >= 0.15) {
              var angle = Math.atan2(newPos.y - prevPos.y, newPos.x - prevPos.x) * 180 / Math.PI;
              this.bladeTip.setRotationFromEuler(new Vec3(this.bladeTip.rotation.x, this.bladeTip.rotation.y, angle));
              var linePosition = position.clone();
              this.trailDistance = 0;
              this.linePosition.unshift(linePosition);
              this.pointTimer.unshift(0);
              this.line.positions = this.linePosition;
              this.line.node.active = false;
              this.line.node.active = true;
            }
  
            this.bladeTip.setPosition(position);
          };
  
          _proto.resetBladeData = function resetBladeData() {
            this.spawnRateParticleData = [];
  
            if (this.bladeTip.getChildByPath("Particle0")) {
              this.spawnRateParticleData.push(this.bladeTip.getChildByPath("Particle0").getComponent(ParticleSystem).rateOverTime);
              var allPS = this.bladeTip.getChildByPath("Particle0").getComponentsInChildren(ParticleSystem);
  
              for (var i = 0; i < allPS.length; i++) {
                this.spawnRateParticleData.push(allPS[i].rateOverTime);
              }
            }
  
            this.sfxBlades = this.bladeTip.getChildByPath("BladeTip").getComponent(BladeData).bladeSFX;
            this.sfxSlices = this.bladeTip.getChildByPath("BladeTip").getComponent(BladeData).sliceSFX;
          };
  
          _proto.touchStart = function touchStart(touch) {
            if (GameController.getInstance().holdInput) {
              this.stopAllBladeSFX();
              this.distanceMove = 0;
              return;
            }
  
            if (GameController.getInstance().getScreenState() == GameController.SCREEN_STATE_GAMEPLAY && GameController.getInstance().getGameState() == GameController.STATE_GAME_LOSE) {
              this.stopAllBladeSFX();
              this.distanceMove = 0;
              return;
            }
  
            console.log('touch_start');
            if (Data.getInstance().bladeUsed == 11) SFXManager.getInstance().playLoopSFX(SFXManager.SFX_BLADEFIRE_CRACKER_LOOP);
            var listTouch = touch.getAllTouches();
  
            if (this.currentTouchID == -1) {
              touch = listTouch[0];
              this.currentTouchID = touch.getID();
            } else {
              for (var i = 0; i < listTouch.length; i++) {
                if (listTouch[i].getID() == this.currentTouchID) {
                  touch = listTouch[i];
                  break;
                }
              }
            }
  
            this.touching = true;
            this.bladeTip.getChildByPath("BladeTip").active = true;
  
            if (this.bladeTip.getChildByPath("Particle0")) {
              this.bladeTip.getChildByPath("Particle0").getComponent(ParticleSystem).rateOverTime = this.spawnRateParticleData[0];
              var allPS = this.bladeTip.getChildByPath("Particle0").getComponentsInChildren(ParticleSystem);
  
              for (var _i3 = 0; _i3 < allPS.length; _i3++) {
                allPS[_i3].rateOverTime = this.spawnRateParticleData[_i3 + 1];
              }
            }
  
            var touchLocation = new Vec3(touch.getLocation().x, touch.getLocation().y, 0);
            var cameraScreenToWorld = this.camera.screenToWorld(touchLocation);
            this.input.x = cameraScreenToWorld.x;
            this.input.y = cameraScreenToWorld.y;
            var newPos = new Vec3(new Vec3(cameraScreenToWorld.x, cameraScreenToWorld.y, this.bladeTip.position.z));
            this.tryMoveTip(newPos);
            this.distanceMove = 0;
            this.firstPosition = this.bladeTip.position.clone();
          };
  
          _proto.touchMove = function touchMove(touch) {
            if (GameController.getInstance().holdInput) {
              this.stopAllBladeSFX();
              return;
            }
  
            if (GameController.getInstance().getScreenState() == GameController.SCREEN_STATE_GAMEPLAY && GameController.getInstance().getGameState() == GameController.STATE_GAME_LOSE) {
              this.stopAllBladeSFX();
              return;
            }
  
            if (!this.touching) {
              this.stopAllBladeSFX();
              return;
            }
  
            var listTouch = touch.getAllTouches();
  
            if (this.currentTouchID == -1) {
              touch = listTouch[0];
              this.currentTouchID = touch.getID();
            } else {
              for (var i = 0; i < listTouch.length; i++) {
                if (listTouch[i].getID() == this.currentTouchID) {
                  touch = listTouch[i];
                  break;
                }
              }
            }
  
            var touchLocation = new Vec3(touch.getLocation().x, touch.getLocation().y, 0);
            var cameraScreenToWorld = this.camera.screenToWorld(touchLocation);
            this.input.x = cameraScreenToWorld.x;
            this.input.y = cameraScreenToWorld.y;
            var newPos = new Vec3(new Vec3(cameraScreenToWorld.x, cameraScreenToWorld.y, this.bladeTip.position.z));
            this.tryMoveTip(newPos);
            this.distanceMove += Vec3.distance(this.bladeTip.position, this.firstPosition);
            this.firstPosition = this.bladeTip.position.clone();
  
            if (this.distanceMove >= 10) {
              if (Data.getInstance().bladeUsed == 9) SFXManager.getInstance().play(randomRangeInt(SFXManager.SFX_HOLLY_SWIPE_1, SFXManager.SFX_HOLLY_SWIPE_3 + 1));else if (Data.getInstance().bladeUsed == 10) SFXManager.getInstance().play(randomRangeInt(SFXManager.SFX_PARTY_SWIPE_1, SFXManager.SFX_PARTY_SWIPE_4 + 1));else if (Data.getInstance().bladeUsed == 11) SFXManager.getInstance().play(randomRangeInt(SFXManager.SFX_BLADEFIRE_CRACKER_SWIPE_1, SFXManager.SFX_BLADEFIRE_CRACKER_SWIPE_5 + 1));
              this.distanceMove = 0;
            }
          };
  
          _proto.stopAllBladeSFX = function stopAllBladeSFX() {
            if (Data.getInstance().bladeUsed == 11) SFXManager.getInstance().stopLoopSFX(SFXManager.SFX_BLADEFIRE_CRACKER_LOOP);
          };
  
          _proto.touchEnd = function touchEnd(touch) {
            this.currentTouchID = -1;
            this.trailDistance = 0;
            this.touching = false;
            this.stopAllBladeSFX();
            this.distanceMove = 0;
          };
  
          _proto.forceTouchEnd = function forceTouchEnd() {
            this.stopAllBladeSFX();
            this.distanceMove = 0;
            this.currentTouchID = -1;
            this.trailDistance = 0;
            this.touching = false;
          };
  
          _proto.showSplat = function showSplat(fruitPos, degree, fruit) {
            var _this3 = this;
  
            var splash = this.getSplash();
            splash.setParent(find("BladeCanvas"));
            var posSplash = new Vec3(0, 0, 0);
            this.camera.worldToScreen(new Vec3(fruitPos.x, fruitPos.y, 0), posSplash);
            posSplash.x /= view.getScaleX();
            posSplash.y /= view.getScaleY();
            splash.setRotationFromEuler(0, 0, degree + 90);
            splash.getComponentInChildren(Sprite).color = new Color(fruit.getComponent(Fruit).getFruitDetail().splashColor);
            splash.setWorldPosition(posSplash);
            splash.active = true;
            splash.getComponent(AnimationComponent).play("fruitSplash_spriteAnim");
            splash.getComponent(AnimationComponent).once(Animation.EventType.FINISHED, function () {
              splash.getComponent(AnimationComponent).stop();
              splash.active = false;
  
              _this3.poolSplash.push(splash);
            });
            var fruitDetail = fruit.getComponent(Fruit).getFruitDetail();
            var basePosition = posSplash;
            var hasSliced = false;
            var splashCount = randomRangeInt(fruitDetail.minSplash, fruitDetail.maxSplash + 1);
  
            var _loop3 = function _loop3(i) {
              var splat = _this3.getSplat();
  
              splat.setParent(GameController.Instance.senseiSwagScreen.getChildByPath("BG"));
              var posSplat = basePosition.clone();
              posSplat.x += randomRangeInt(-10, 10) * 10;
              posSplat.y += randomRangeInt(-10, 10) * 10;
              var duration = 1;
              var delayDuration = randomRangeInt(18, 25) / 10;
  
              if (fruitDetail.splashTex == "splash2") {
                splat.getComponentInChildren(Sprite).spriteFrame = _this3.splatSpriteFrame[randomRangeInt(3, 4)];
                splat.scale = new Vec3(0.7, 0.7, 1);
                splat.setRotationFromEuler(0, 0, 0);
              } else {
                if (randomRangeInt(0, 100) % 2 == 0 || hasSliced) {
                  splat.getComponentInChildren(Sprite).spriteFrame = _this3.splatSpriteFrame[randomRangeInt(1, 2)];
                  splat.scale = new Vec3(0.7, 0.7, 1);
                  splat.setRotationFromEuler(0, 0, 0);
                  tween(splat.getChildByPath("assets")).delay(delayDuration).by(duration, {
                    scale: new Vec3(0, 0.12, 0)
                  }).start();
                } else {
                  hasSliced = true;
                  splat.getComponentInChildren(Sprite).spriteFrame = _this3.splatSpriteFrame[randomRangeInt(5, 6)];
                  splat.scale = new Vec3(-0.7, 0.7, 1);
                  posSplat = basePosition.clone();
                  posSplat.x -= Math.cos(degree * Math.PI / 180) * 200;
                  posSplat.y -= Math.sin(degree * Math.PI / 180) * 100;
                  splat.setRotationFromEuler(0, 0, degree);
                }
              }
  
              splat.getChildByPath("assets").scale = new Vec3(1, 1, 1);
              splat.getComponentInChildren(Sprite).color = new Color(fruit.getComponent(Fruit).getFruitDetail().splashColor);
              splat.setWorldPosition(posSplat);
              splat.active = true;
              splat.getComponent(Sprite).color = new Color(255, 255, 255, 255);
              tween(splat).delay(delayDuration).by(duration, {
                position: new Vec3(0, randomRangeInt(-10, -5) * 2, 0)
              }).start();
              tween(splat.getComponent(Sprite)).delay(delayDuration).to(duration, {
                color: new Color(255, 255, 255, 0)
              }).call(function () {
                splat.active = false;
  
                _this3.poolSplat.push(splat);
              }).start();
            };
  
            for (var i = 0; i < splashCount; i++) {
              _loop3();
            }
          };
  
          return ControllerBlade;
        }(Component), _defineProperty(_class3, "Instance", null), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bladeTip", [_dec2], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "camera", [_dec3], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "line", [_dec4], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "trail", [_dec5], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "trailGraphics", [_dec6], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "prefabSplash", [_dec7], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "prefabSliceDiamond", [_dec8], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "prefabSplat", [_dec9], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "prefabSliceDiamondCritical", [_dec10], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "splatSpriteFrame", [_dec11], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function initializer() {
            return [];
          }
        })), _class2)) || _class));
  
        cclegacy._RF.pop();
      }
    };
  });
  
  System.register("chunks:///_virtual/ItemDetails.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './GameController.ts'], function (exports) {
    'use strict';
  
    var _inheritsLoose, _defineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Label, Sprite, Component, GameController;
  
    return {
      setters: [function (module) {
        _inheritsLoose = module.inheritsLoose;
        _defineProperty = module.defineProperty;
        _assertThisInitialized = module.assertThisInitialized;
        _createClass = module.createClass;
      }, function (module) {
        cclegacy = module.cclegacy;
        _decorator = module._decorator;
        Label = module.Label;
        Sprite = module.Sprite;
        Component = module.Component;
      }, function (module) {
        GameController = module.GameController;
      }],
      execute: function () {
        var _dec, _class, _temp;
  
        cclegacy._RF.push({}, "dadedJrRzNGHoNaXxzlj3ER", "ItemDetails", undefined);
  
        var ccclass = _decorator.ccclass,
            property = _decorator.property;
        var ItemDetails = exports('ItemDetails', (_dec = ccclass('ItemDetails'), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
          _inheritsLoose(ItemDetails, _Component);
  
          function ItemDetails() {
            var _this;
  
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
  
            _this = _Component.call.apply(_Component, [this].concat(args)) || this;
  
            _defineProperty(_assertThisInitialized(_this), "_description", "");
  
            return _this;
          }
  
          var _proto = ItemDetails.prototype;
  
          _proto.start = function start() {};
  
          _proto.update = function update(deltaTime) {};
  
          _proto.updateName = function updateName(name) {
            this.node.getChildByPath("text_itemName").getComponent(Label).string = name;
          };
  
          _proto.updateIcon = function updateIcon(image) {
            this.node.getChildByPath("container_icon/icon").getComponent(Sprite).spriteFrame = image;
          };
  
          _proto.updateHowToGet = function updateHowToGet(data, isPurchased) {
            this.node.getChildByPath("cont_purchase_with").active = false;
            this.node.getChildByPath("text_purchased").active = false;
            this.node.getChildByPath("container_icon/LockedBladeDojo").active = !isPurchased;
  
            if (data.type == "default" || isPurchased) {
              this.node.getChildByPath("text_purchased").active = true;
            } else if (data.type == "starfruit") {
              this.node.getChildByPath("cont_purchase_with").active = true;
              this.node.getChildByPath("cont_purchase_with/text_starfruit").getComponent(Label).string = "" + GameController.getInstance().formatNumber(data.value);
            }
          };
  
          _createClass(ItemDetails, [{
            key: "description",
            get: function get() {
              return this._description;
            },
            set: function set(value) {
              this._description = value;
            }
          }]);
  
          return ItemDetails;
        }(Component), _temp)) || _class));
  
        cclegacy._RF.pop();
      }
    };
  });
  
  System.register("chunks:///_virtual/SceneSelectMode.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './SFXManager.ts', './Data.ts', './LevelManager.ts', './ContMissionSelectMode.ts', './UIPowerUpButton.ts', './UIRing.ts', './GameController.ts'], function (exports) {
    'use strict';
  
    var _defineProperty, _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, SpriteFrame, Node, Label, Animation, Vec3, tween, Sprite, Component, SFXManager, Data, LevelManager, ContMissionSelectMode, UIPowerUpButton, UIRing, GameController;
  
    return {
      setters: [function (module) {
        _defineProperty = module.defineProperty;
        _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
        _inheritsLoose = module.inheritsLoose;
        _initializerDefineProperty = module.initializerDefineProperty;
        _assertThisInitialized = module.assertThisInitialized;
      }, function (module) {
        cclegacy = module.cclegacy;
        _decorator = module._decorator;
        SpriteFrame = module.SpriteFrame;
        Node = module.Node;
        Label = module.Label;
        Animation = module.Animation;
        Vec3 = module.Vec3;
        tween = module.tween;
        Sprite = module.Sprite;
        Component = module.Component;
      }, function (module) {
        SFXManager = module.SFXManager;
      }, function (module) {
        Data = module.Data;
      }, function (module) {
        LevelManager = module.LevelManager;
      }, function (module) {
        ContMissionSelectMode = module.ContMissionSelectMode;
      }, function (module) {
        UIPowerUpButton = module.UIPowerUpButton;
      }, function (module) {
        UIRing = module.UIRing;
      }, function (module) {
        GameController = module.GameController;
      }],
      execute: function () {
        var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _class3, _temp;
  
        cclegacy._RF.push({}, "de107JTSr1L16aYZ4TAYFtf", "SceneSelectMode", undefined);
  
        var ccclass = _decorator.ccclass,
            property = _decorator.property;
        var SceneSelectMode = exports('SceneSelectMode', (_dec = ccclass('SceneSelectMode'), _dec2 = property({
          type: SpriteFrame,
          displayName: "Frame start play classic mode"
        }), _dec3 = property({
          type: SpriteFrame,
          displayName: "Frame start play zen mode"
        }), _dec4 = property({
          type: SpriteFrame,
          displayName: "Frame start play arcade mode"
        }), _dec5 = property({
          type: Node
        }), _dec6 = property({
          type: Node
        }), _dec7 = property({
          type: Node
        }), _dec8 = property({
          type: Node
        }), _dec9 = property({
          type: Node
        }), _dec10 = property({
          type: Node
        }), _dec11 = property({
          type: Node
        }), _dec12 = property({
          type: Node
        }), _dec(_class = (_class2 = (_temp = _class3 = /*#__PURE__*/function (_Component) {
          _inheritsLoose(SceneSelectMode, _Component);
  
          function SceneSelectMode() {
            var _this;
  
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
  
            _this = _Component.call.apply(_Component, [this].concat(args)) || this;
  
            _initializerDefineProperty(_assertThisInitialized(_this), "frameSPClassicMode", _descriptor, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "frameSPZenMode", _descriptor2, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "frameSPArcadeMode", _descriptor3, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "btnBerryBlast", _descriptor4, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "btnDeflectBomb", _descriptor5, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "btnPeachyTime", _descriptor6, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "contMissionNotTournament", _descriptor7, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "buttonClassic", _descriptor8, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "buttonZen", _descriptor9, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "buttonArcade", _descriptor10, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "buttonStartPlay", _descriptor11, _assertThisInitialized(_this));
  
            _defineProperty(_assertThisInitialized(_this), "holdInput", false);
  
            return _this;
          }
  
          SceneSelectMode.getInstance = function getInstance() {
            return SceneSelectMode.Instance;
          };
  
          var _proto = SceneSelectMode.prototype;
  
          _proto.onLoad = function onLoad() {
            SceneSelectMode.Instance = this;
            this.node.active = false;
          };
  
          _proto.onEnable = function onEnable() {
            SceneSelectMode.EQUIP_BB = false;
            SceneSelectMode.EQUIP_DB = false;
            SceneSelectMode.EQUIP_PT = false;
            this.holdInput = false;
  
            if (Data.getInstance().inventoryPUBerryBlast > 0) {
              this.btnBerryBlast.getComponent(UIPowerUpButton).setOwned(Data.getInstance().inventoryPUBerryBlast);
            } else {
              this.btnBerryBlast.getComponent(UIPowerUpButton).setBuyable();
            }
  
            if (Data.getInstance().inventoryPUDeflect > 0) {
              this.btnDeflectBomb.getComponent(UIPowerUpButton).setOwned(Data.getInstance().inventoryPUDeflect);
            } else {
              this.btnDeflectBomb.getComponent(UIPowerUpButton).setBuyable();
            }
  
            if (Data.getInstance().inventoryPUPeachyTime > 0) {
              this.btnPeachyTime.getComponent(UIPowerUpButton).setOwned(Data.getInstance().inventoryPUPeachyTime);
            } else {
              this.btnPeachyTime.getComponent(UIPowerUpButton).setBuyable();
            }
  
            this.showBtnAds(false);
            this.node.getChildByPath("UI_bawah/cont_missions").getComponent(ContMissionSelectMode).refreshContMission();
          };
  
          _proto.refreshPowerUp = function refreshPowerUp() {
            var powerUpBB = this.btnBerryBlast.getComponent(UIPowerUpButton);
            var powerUpDB = this.btnDeflectBomb.getComponent(UIPowerUpButton);
            var powerUpPT = this.btnPeachyTime.getComponent(UIPowerUpButton);
  
            if (Data.getInstance().inventoryPUBerryBlast > 0 && !powerUpBB.isEquipped) {
              this.btnBerryBlast.getComponent(UIPowerUpButton).setOwned(Data.getInstance().inventoryPUBerryBlast);
            }
  
            if (Data.getInstance().inventoryPUDeflect > 0 && !powerUpDB.isEquipped) {
              this.btnDeflectBomb.getComponent(UIPowerUpButton).setOwned(Data.getInstance().inventoryPUDeflect);
            }
  
            if (Data.getInstance().inventoryPUPeachyTime > 0 && !powerUpPT.isEquipped) {
              this.btnPeachyTime.getComponent(UIPowerUpButton).setOwned(Data.getInstance().inventoryPUPeachyTime);
            }
          };
  
          _proto.setHoldInput = function setHoldInput(value) {
            this.holdInput = value;
            this.node.getChildByPath("UI_bawah/cont_missions").getComponent(ContMissionSelectMode).setHoldInput(value);
          };
  
          _proto.showAnimationClaimed = function showAnimationClaimed(data, from) {
            var me = this;
            GameController.getInstance().setHoldInput(true);
            this.setHoldInput(true);
            var starfruitTop = this.node.getChildByPath("cont_Exp_Starfruit/StarfruitLabel/text_starfruitTop");
            starfruitTop.getComponent(Label).string = GameController.getInstance().formatNumber(parseInt(Data.getInstance().starFruit.toFixed(0)));
  
            if (data.rewardType == "xp") {
              var totalExpReceived = 0;
              if (data.rewardSize == "small") totalExpReceived = 75;else if (data.rewardSize == "medium") totalExpReceived = 100;else if (data.rewardSize == "large") totalExpReceived = 125;
              this.node.getChildByPath("cont_Exp_Starfruit").getComponent(Animation).play("expStarfruit_label_in");
              this.node.getChildByPath("cont_Exp_Starfruit").getComponent(Animation).on(Animation.EventType.FINISHED, function () {
                var curDataLevel = LevelManager.getInstance().getDataLevelFromTotalExp();
  
                if (curDataLevel.level < LevelManager.getInstance().levelCap) {
                  var target = me.node.getChildByPath("cont_Exp_Starfruit/levelLabel/text_LevelAngka");
                  var XPBarBack = me.node.getChildByPath("cont_Exp_Starfruit/levelLabel/XPBarBack");
                  var XPBarFill = me.node.getChildByPath("cont_Exp_Starfruit/levelLabel/XPBarFill");
                  var XPBarFill_transparant = me.node.getChildByPath("cont_Exp_Starfruit/levelLabel/XPBarFill_transparant");
                  var textLevel = me.node.getChildByPath("cont_Exp_Starfruit/levelLabel/text_LevelAngka");
                  GameController.getInstance().playExpIncrease(from, target, XPBarBack, XPBarFill, XPBarFill_transparant, curDataLevel, totalExpReceived, textLevel, "select_mode", function () {
                    me.node.getChildByPath("cont_Exp_Starfruit").getComponent(Animation).play("expStarfruit_label_out");
                    GameController.getInstance().setHoldInput(false);
                    me.setHoldInput(false);
                  });
                } else {
                  GameController.getInstance().setHoldInput(false);
                  me.setHoldInput(false);
                }
              }, this, true);
            } else if (data.rewardType == "starfruit") {
              var starFruitReward = 0;
              if (data.rewardSize == "small") starFruitReward = 50;else if (data.rewardSize == "medium") starFruitReward = 100;else if (data.rewardSize == "large") starFruitReward = 150;
              this.node.getChildByPath("cont_Exp_Starfruit").getComponent(Animation).play("expStarfruit_label_in");
              this.node.getChildByPath("cont_Exp_Starfruit").getComponent(Animation).on(Animation.EventType.FINISHED, function () {
                var trailStarFruit = GameController.Instance.particleTrailStarfruit;
                var starfruitTop = me.node.getChildByPath("cont_Exp_Starfruit/StarfruitLabel/text_starfruitTop");
                starfruitTop.getComponent(Label).string = GameController.getInstance().formatNumber(parseInt(Data.getInstance().starFruit.toFixed(0)));
                var vecTemp = new Vec3(Data.getInstance().starFruit, 0, 0);
                Data.getInstance().starFruit += starFruitReward;
                GameController.getInstance().playStarfruitIncrement(starFruitReward);
                tween(vecTemp).delay(0.5).to(0.5, {
                  x: Data.getInstance().starFruit
                }, {
                  onUpdate: function onUpdate() {
                    starfruitTop.getComponent(Label).string = GameController.getInstance().formatNumber(parseInt(vecTemp.x.toFixed(0)));
                  }
                }).call(function () {
                  me.node.getChildByPath("cont_Exp_Starfruit").getComponent(Animation).play("expStarfruit_label_out");
                  GameController.getInstance().setHoldInput(false);
                  me.setHoldInput(false);
                }).start();
                trailStarFruit.setWorldPosition(Data.getInstance().convert2DPosTo3D(from.worldPosition));
                var targetPos = me.node.getChildByPath("cont_Exp_Starfruit/StarfruitLabel/starfruitLabelIcon").worldPosition;
                tween(trailStarFruit).to(0.5, {
                  worldPosition: Data.getInstance().convert2DPosTo3D(targetPos)
                }).start();
                GameController.saveData();
              }, this, true);
            }
          };
  
          _proto.start = function start() {};
  
          _proto.update = function update(deltaTime) {};
  
          _proto.showBtnAds = function showBtnAds(show) {
            this.node.getChildByPath("UI_bawah/button_Ad").active = show;
          };
  
          _proto.showClaimBerryBlast = function showClaimBerryBlast() {
            GameController.Instance.contBerryBlast.active = true;
            GameController.Instance.contBerryBlast.getComponent(Animation).play("deflectClaim_in");
            GameController.Instance.contBerryBlast.getComponent(Animation).on(Animation.EventType.FINISHED, function () {
              GameController.Instance.contBerryBlast.getComponent(Animation).play("deflectClaim_idle");
            }, this, true);
          };
  
          _proto.showClaimDeflect = function showClaimDeflect() {
            GameController.Instance.contDeflect.active = true;
            GameController.Instance.contDeflect.getComponent(Animation).play("deflectClaim_in");
            GameController.Instance.contDeflect.getComponent(Animation).on(Animation.EventType.FINISHED, function () {
              GameController.Instance.contDeflect.getComponent(Animation).play("deflectClaim_idle");
            }, this, true);
          };
  
          _proto.showClaimPeachyTime = function showClaimPeachyTime() {
            GameController.Instance.contPeachy.active = true;
            GameController.Instance.contPeachy.getComponent(Animation).play("deflectClaim_in");
            GameController.Instance.contPeachy.getComponent(Animation).on(Animation.EventType.FINISHED, function () {
              GameController.Instance.contPeachy.getComponent(Animation).play("deflectClaim_idle");
            }, this, true);
          };
  
          _proto.closeClaimBerryBlast = function closeClaimBerryBlast() {
            GameController.getInstance().setHoldInput(false);
            GameController.Instance.contBerryBlast.getComponent(Animation).play("deflectClaim_out");
            GameController.Instance.contBerryBlast.getComponent(Animation).once(Animation.EventType.FINISHED, function () {
              GameController.Instance.contBerryBlast.active = false;
            });
            this.btnBerryBlast.getComponent(UIPowerUpButton).setEquipped();
          };
  
          _proto.closeClaimDeflect = function closeClaimDeflect() {
            GameController.getInstance().setHoldInput(false);
            GameController.Instance.contDeflect.getComponent(Animation).play("deflectClaim_out");
            GameController.Instance.contDeflect.getComponent(Animation).once(Animation.EventType.FINISHED, function () {
              GameController.Instance.contDeflect.active = false;
            });
            this.btnDeflectBomb.getComponent(UIPowerUpButton).setEquipped();
          };
  
          _proto.closeClaimPeachyTime = function closeClaimPeachyTime() {
            GameController.getInstance().setHoldInput(false);
            GameController.Instance.contPeachy.getComponent(Animation).play("deflectClaim_out");
            GameController.Instance.contPeachy.getComponent(Animation).once(Animation.EventType.FINISHED, function () {
              GameController.Instance.contPeachy.active = false;
            });
            this.btnPeachyTime.getComponent(UIPowerUpButton).setEquipped();
          };
  
          SceneSelectMode.setOnSlash = function setOnSlash(callback) {
            SceneSelectMode.onSlash = callback;
          };
  
          SceneSelectMode.setTitle = function setTitle(title) {
            SceneSelectMode.title = title;
          };
  
          _proto.setTitle = function setTitle(title) {
            this.node.getChildByPath("UI_atas/text_title").getComponent(Label).string = title;
          };
  
          SceneSelectMode.setFrom = function setFrom(from, mode, entries) {
            SceneSelectMode.from = from;
            SceneSelectMode.mode = mode;
            SceneSelectMode.entries = entries;
          };
  
          _proto.setFrom = function setFrom(from, mode, entries) {
            if (mode === void 0) {
              mode = "";
            }
  
            SceneSelectMode.from = from;
            SceneSelectMode.mode = mode;
            this.contMissionNotTournament.active = true;
            this.buttonClassic.active = false;
            this.buttonZen.active = false;
            this.buttonArcade.active = false;
            this.buttonStartPlay.active = false;
            this.buttonClassic.active = mode == "";
            this.buttonZen.active = mode == "";
            this.buttonArcade.active = mode == "";
            this.buttonStartPlay.active = mode.includes("arcade") || mode.includes("zen") || mode == "classic";
            var buttonStartPlayToUse = null;
            if (this.buttonStartPlay.active) buttonStartPlayToUse = this.buttonStartPlay;
            this.btnBerryBlast.active = false;
            this.btnDeflectBomb.active = false;
            this.btnPeachyTime.active = false;
  
            if (mode == "") {
              this.btnBerryBlast.active = true;
              this.btnDeflectBomb.active = true;
              this.btnPeachyTime.active = true;
              this.btnBerryBlast.setScale(new Vec3(1, 1, 1));
              this.btnDeflectBomb.setScale(new Vec3(1, 1, 1));
              this.btnPeachyTime.setScale(new Vec3(1, 1, 1));
            } else if (mode.includes("classic")) {
              this.btnBerryBlast.active = true;
              this.btnDeflectBomb.active = true;
              this.btnBerryBlast.setScale(new Vec3(1.3, 1.3, 1.3));
              this.btnDeflectBomb.setScale(new Vec3(1.3, 1.3, 1.3));
            } else if (mode.includes("zen")) {
              this.btnBerryBlast.active = true;
              this.btnPeachyTime.active = true;
              this.btnBerryBlast.setScale(new Vec3(1.3, 1.3, 1.3));
              this.btnPeachyTime.setScale(new Vec3(1.3, 1.3, 1.3));
            } else if (mode.includes("arcade")) {
              this.btnBerryBlast.active = true;
              this.btnDeflectBomb.active = true;
              this.btnPeachyTime.active = true;
              this.btnBerryBlast.setScale(new Vec3(1, 1, 1));
              this.btnDeflectBomb.setScale(new Vec3(1, 1, 1));
              this.btnPeachyTime.setScale(new Vec3(1, 1, 1));
            }
  
            if (buttonStartPlayToUse != null) {
              var fruitName = "Watermelon";
  
              if (mode == "classic") {
                fruitName = "Watermelon";
                buttonStartPlayToUse.getChildByPath("ring").getComponent(Sprite).spriteFrame = this.frameSPClassicMode;
              } else if (mode.includes("zen")) {
                fruitName = "AppleRed";
                buttonStartPlayToUse.getChildByPath("ring").getComponent(Sprite).spriteFrame = this.frameSPZenMode;
              } else if (mode.includes("arcade")) {
                fruitName = "Banana";
                buttonStartPlayToUse.getChildByPath("ring").getComponent(Sprite).spriteFrame = this.frameSPArcadeMode;
              }
  
              buttonStartPlayToUse.getComponent(UIRing).setFruitName(fruitName);
            }
          };
  
          _proto.backButtonClicked = function backButtonClicked() {
            if (this.holdInput) return;
            this.holdInput = true;
            SFXManager.getInstance().play(SFXManager.SFX_SELECT);
            GameController.getInstance().setHoldInput(true);
            GameController.getInstance().exitScreen(function () {
              GameController.getInstance().setHoldInput(false);
              if (SceneSelectMode.from == "homescreen") GameController.getInstance().setScreenState(GameController.SCREEN_STATE_HOMESCREEN);else if (SceneSelectMode.from == "result") GameController.getInstance().setScreenState(GameController.SCREEN_STATE_HOMESCREEN);else GameController.getInstance().setScreenState(GameController.SCREEN_STATE_HOMESCREEN);
            });
          };
  
          _proto.buttonInfoClicked = function buttonInfoClicked() {
            SFXManager.getInstance().play(SFXManager.SFX_SELECT);
            GameController.getInstance().setHoldInput(true);
            GameController.getInstance().showPopUpInfoPowerUp(true);
          };
  
          return SceneSelectMode;
        }(Component), _defineProperty(_class3, "onSlash", void 0), _defineProperty(_class3, "from", void 0), _defineProperty(_class3, "title", void 0), _defineProperty(_class3, "mode", void 0), _defineProperty(_class3, "entries", []), _defineProperty(_class3, "game_mode", ""), _defineProperty(_class3, "Instance", void 0), _defineProperty(_class3, "EQUIP_BB", false), _defineProperty(_class3, "EQUIP_DB", false), _defineProperty(_class3, "EQUIP_PT", false), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "frameSPClassicMode", [_dec2], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "frameSPZenMode", [_dec3], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "frameSPArcadeMode", [_dec4], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "btnBerryBlast", [_dec5], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "btnDeflectBomb", [_dec6], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "btnPeachyTime", [_dec7], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "contMissionNotTournament", [_dec8], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "buttonClassic", [_dec9], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "buttonZen", [_dec10], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "buttonArcade", [_dec11], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "buttonStartPlay", [_dec12], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        })), _class2)) || _class));
  
        cclegacy._RF.pop();
      }
    };
  });
  
  System.register("chunks:///_virtual/MissionManager.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './ResourcesManager.ts', './GameController.ts'], function (exports) {
    'use strict';
  
    var _defineProperty, _inheritsLoose, _assertThisInitialized, cclegacy, _decorator, SpriteFrame, randomRangeInt, Component, ResourcesManager, GameController;
  
    return {
      setters: [function (module) {
        _defineProperty = module.defineProperty;
        _inheritsLoose = module.inheritsLoose;
        _assertThisInitialized = module.assertThisInitialized;
      }, function (module) {
        cclegacy = module.cclegacy;
        _decorator = module._decorator;
        SpriteFrame = module.SpriteFrame;
        randomRangeInt = module.randomRangeInt;
        Component = module.Component;
      }, function (module) {
        ResourcesManager = module.ResourcesManager;
      }, function (module) {
        GameController = module.GameController;
      }],
      execute: function () {
        var _dec, _class, _class2, _temp;
  
        cclegacy._RF.push({}, "e40aax39YJDmZk2d8qjbrZU", "MissionManager", undefined);
  
        var ccclass = _decorator.ccclass,
            property = _decorator.property;
        var MissionManager = exports('MissionManager', (_dec = ccclass('MissionManager'), _dec(_class = (_temp = _class2 = /*#__PURE__*/function (_Component) {
          _inheritsLoose(MissionManager, _Component);
  
          function MissionManager() {
            var _this;
  
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
  
            _this = _Component.call.apply(_Component, [this].concat(args)) || this;
  
            _defineProperty(_assertThisInitialized(_this), "gemMissionWeight", 7);
  
            _defineProperty(_assertThisInitialized(_this), "powerUpMissionWeight", 25);
  
            _defineProperty(_assertThisInitialized(_this), "starfruitMissionWeight", 34);
  
            _defineProperty(_assertThisInitialized(_this), "expMissionWeight", 34);
  
            _defineProperty(_assertThisInitialized(_this), "maxMission", 3);
  
            _defineProperty(_assertThisInitialized(_this), "data_mission", [[{
              analytic_id: "MIS001",
              type: "COMBOTOTAL20",
              target: 20,
              current: 0,
              text: "Get 20 combos",
              claimed: false,
              icon: "Score",
              rewardType: "starfruit",
              rewardSize: "small",
              togotext: true
            }, {
              analytic_id: "MIS002",
              type: "COMBOTOTAL30",
              target: 30,
              current: 0,
              text: "Get 30 combos",
              claimed: false,
              icon: "BladeStars02",
              rewardType: "starfruit",
              rewardSize: "medium",
              togotext: true
            }, {
              analytic_id: "MIS003",
              type: "COMBOTOTAL40",
              target: 40,
              current: 0,
              text: "Get 40 combos",
              claimed: false,
              icon: "BladeStars01",
              rewardType: "starfruit",
              rewardSize: "large",
              togotext: true
            }], [{
              analytic_id: "MIS004",
              type: "FRUITCOMBO05",
              target: 5,
              current: 0,
              text: "Get a 5 Fruit Combo!",
              claimed: false,
              icon: "AppleGreenSlice",
              rewardType: "starfruit",
              rewardSize: "small",
              togotext: false
            }, {
              analytic_id: "MIS005",
              type: "FRUITCOMBO06",
              target: 6,
              current: 0,
              text: "Get a 6 Fruit Combo!",
              claimed: false,
              icon: "AppleRedSlice",
              rewardType: "starfruit",
              rewardSize: "small",
              togotext: false
            }, {
              analytic_id: "MIS006",
              type: "FRUITCOMBO07",
              target: 7,
              current: 0,
              text: "Get a 7 Fruit Combo!",
              claimed: false,
              icon: "LimeSlice",
              rewardType: "starfruit",
              rewardSize: "small",
              togotext: false
            }, {
              analytic_id: "MIS007",
              type: "FRUITCOMBO08",
              target: 8,
              current: 0,
              text: "Get a 8 Fruit Combo!",
              claimed: false,
              icon: "CoconutSlice",
              rewardType: "starfruit",
              rewardSize: "medium",
              togotext: false
            }, {
              analytic_id: "MIS008",
              type: "FRUITCOMBO09",
              target: 9,
              current: 0,
              text: "Get a 9 Fruit Combo!",
              claimed: false,
              icon: "PineappleSlice",
              rewardType: "starfruit",
              rewardSize: "medium",
              togotext: false
            }, {
              analytic_id: "MIS009",
              type: "FRUITCOMBO10",
              target: 10,
              current: 0,
              text: "Get a 10 Fruit Combo!",
              claimed: false,
              icon: "PassionSlice",
              rewardType: "starfruit",
              rewardSize: "large",
              togotext: false
            }, {
              analytic_id: "MIS010",
              type: "FRUITCOMBO13",
              target: 13,
              current: 0,
              text: "Get a 13 Fruit Combo!",
              claimed: false,
              icon: "MangoSlice",
              rewardType: "starfruit",
              rewardSize: "large",
              togotext: false
            }, {
              analytic_id: "MIS011",
              type: "FRUITCOMBO15",
              target: 15,
              current: 0,
              text: "Get a 15 Fruit Combo!",
              claimed: false,
              icon: "CherrySlice",
              rewardType: "starfruit",
              rewardSize: "large",
              togotext: false
            }], [{
              analytic_id: "MIS012",
              type: "GETCRITICAL10",
              target: 10,
              current: 0,
              text: "Get 10 Criticals!",
              claimed: false,
              icon: "BladeStars03",
              rewardType: "starfruit",
              rewardSize: "small",
              togotext: true
            }, {
              analytic_id: "MIS013",
              type: "GETCRITICAL30",
              target: 30,
              current: 0,
              text: "Get 30 Criticals!",
              claimed: false,
              icon: "CriticalSlice",
              rewardType: "starfruit",
              rewardSize: "small",
              togotext: true
            }, {
              analytic_id: "MIS014",
              type: "GETCRITICAL40",
              target: 40,
              current: 0,
              text: "Get 40 Criticals!",
              claimed: false,
              icon: "BladeStars03",
              rewardType: "starfruit",
              rewardSize: "medium",
              togotext: true
            }, {
              analytic_id: "MIS015",
              type: "GETCRITICAL50",
              target: 50,
              current: 0,
              text: "Get 50 Criticals!",
              claimed: false,
              icon: "CriticalSlice",
              rewardType: "starfruit",
              rewardSize: "large",
              togotext: true
            }], [{
              analytic_id: "MIS016",
              type: "PLAYGAMESARCADE3",
              target: 3,
              current: 0,
              text: "Play a game of Arcade",
              claimed: false,
              icon: "Pomegranate",
              rewardType: "powerup",
              rewardSize: "small",
              togotext: true
            }, {
              analytic_id: "MIS017",
              type: "PLAYGAMESARCADE4",
              target: 4,
              current: 0,
              text: "Play 4 games of Arcade",
              claimed: false,
              icon: "FrenzyBanana",
              rewardType: "powerup",
              rewardSize: "medium",
              togotext: true
            }, {
              analytic_id: "MIS018",
              type: "PLAYGAMESARCADE5",
              target: 5,
              current: 0,
              text: "Play 5 games of Arcade",
              claimed: false,
              icon: "BananaSlice",
              rewardType: "powerup",
              rewardSize: "large",
              togotext: true
            }], [{
              analytic_id: "MIS019",
              type: "PLAYGAMESCLASSIC3",
              target: 3,
              current: 0,
              text: "Play 3 games of Classic",
              claimed: false,
              icon: "Classic",
              rewardType: "powerup",
              rewardSize: "small",
              togotext: true
            }, {
              analytic_id: "MIS020",
              type: "PLAYGAMESCLASSIC4",
              target: 4,
              current: 0,
              text: "Play 4 games of Classic",
              claimed: false,
              icon: "Bomb",
              rewardType: "powerup",
              rewardSize: "medium",
              togotext: true
            }, {
              analytic_id: "MIS021",
              type: "PLAYGAMESCLASSIC5",
              target: 5,
              current: 0,
              text: "Play 5 games of Classic",
              claimed: false,
              icon: "WatermelonSliced",
              rewardType: "powerup",
              rewardSize: "large",
              togotext: true
            }], [{
              analytic_id: "MIS022",
              type: "PLAYGAMESZEN3",
              target: 3,
              current: 0,
              text: "Play 3 games of Zen",
              claimed: false,
              icon: "Zen",
              rewardType: "powerup",
              rewardSize: "small",
              togotext: true
            }, {
              analytic_id: "MIS023",
              type: "PLAYGAMESZEN4",
              target: 4,
              current: 0,
              text: "Play 4 games of Zen",
              claimed: false,
              icon: "Zen",
              rewardType: "powerup",
              rewardSize: "medium",
              togotext: true
            }, {
              analytic_id: "MIS024",
              type: "PLAYGAMESZEN5",
              target: 5,
              current: 0,
              text: "Play 5 games of Zen",
              claimed: false,
              icon: "Zen",
              rewardType: "powerup",
              rewardSize: "large",
              togotext: true
            }], [{
              analytic_id: "MIS030",
              type: "POINTSSINGLEARCADE800",
              target: 800,
              current: 0,
              text: "Score 800+ points in Arcade mode",
              claimed: false,
              icon: "BananaSlice",
              rewardType: "xp",
              rewardSize: "small",
              togotext: false
            }, {
              analytic_id: "MIS025",
              type: "POINTSSINGLEARCADE1000",
              target: 1000,
              current: 0,
              text: "Score 1000+ points in Arcade mode",
              claimed: false,
              icon: "FreezeBanana",
              rewardType: "xp",
              rewardSize: "small",
              togotext: false
            }, {
              analytic_id: "MIS026",
              type: "POINTSSINGLEARCADE1200",
              target: 1200,
              current: 0,
              text: "Score 1200+ points in Arcade mode",
              claimed: false,
              icon: "DoublePointBanana",
              rewardType: "xp",
              rewardSize: "medium",
              togotext: false
            }, {
              analytic_id: "MIS027",
              type: "POINTSSINGLEARCADE1400",
              target: 1400,
              current: 0,
              text: "Score 1400+ points in Arcade mode",
              claimed: false,
              icon: "Score",
              rewardType: "xp",
              rewardSize: "medium",
              togotext: false
            }, {
              analytic_id: "MIS028",
              type: "POINTSSINGLEARCADE1600",
              target: 1600,
              current: 0,
              text: "Score 1600+ points in Arcade mode",
              claimed: false,
              icon: "FrenzyBanana",
              rewardType: "xp",
              rewardSize: "large",
              togotext: false
            }, {
              analytic_id: "MIS029",
              type: "POINTSSINGLEARCADE1800",
              target: 1800,
              current: 0,
              text: "Score 1800+ points in Arcade mode",
              claimed: false,
              icon: "Bonus",
              rewardType: "xp",
              rewardSize: "large",
              togotext: false
            }], [{
              analytic_id: "MIS033",
              type: "POINTSSINGLECLASSIC50",
              target: 50,
              current: 0,
              text: "Score 50+ points in Classic mode",
              claimed: false,
              icon: "PearSlice",
              rewardType: "xp",
              rewardSize: "small",
              togotext: false
            }, {
              analytic_id: "MIS031",
              type: "POINTSSINGLECLASSIC100",
              target: 100,
              current: 0,
              text: "Score 100+ points in Classic mode",
              claimed: false,
              icon: "PineappleSlice",
              rewardType: "xp",
              rewardSize: "medium",
              togotext: false
            }, {
              analytic_id: "MIS032",
              type: "POINTSSINGLECLASSIC250",
              target: 250,
              current: 0,
              text: "Score 250+ points in Classic mode",
              claimed: false,
              icon: "LimeSlice",
              rewardType: "xp",
              rewardSize: "large",
              togotext: false
            }], [{
              analytic_id: "MIS034",
              type: "POINTSSINGLEZEN200",
              target: 200,
              current: 0,
              text: "Score 200+ points in Zen mode",
              claimed: false,
              icon: "AppleGreenSlice",
              rewardType: "xp",
              rewardSize: "small",
              togotext: false
            }, {
              analytic_id: "MIS035",
              type: "POINTSSINGLEZEN250",
              target: 250,
              current: 0,
              text: "Score 250+ points in Classic mode",
              claimed: false,
              icon: "AppleRedSlice",
              rewardType: "xp",
              rewardSize: "medium",
              togotext: false
            }, {
              analytic_id: "MIS036",
              type: "POINTSSINGLEZEN280",
              target: 280,
              current: 0,
              text: "Score 280+ points in Classic mode",
              claimed: false,
              icon: "AppleRedSlice",
              rewardType: "xp",
              rewardSize: "large",
              togotext: false
            }]]);
  
            _defineProperty(_assertThisInitialized(_this), "activeMission", []);
  
            return _this;
          }
  
          MissionManager.getInstance = function getInstance() {
            if (MissionManager.Instance == null) MissionManager.Instance = new MissionManager();
            return MissionManager.Instance;
          };
  
          var _proto = MissionManager.prototype;
  
          _proto.isAnyMissionClaimable = function isAnyMissionClaimable() {
            for (var i = 0; i < this.activeMission.length; i++) {
              var curMission = MissionManager.getInstance().activeMission[i];
  
              if (!curMission.claimed && curMission.current >= curMission.target) {
                return true;
              }
            }
  
            return false;
          };
  
          _proto.loadAllIcon = function loadAllIcon() {
            for (var i = 0; i < this.data_mission.length; i++) {
              for (var j = 0; j < this.data_mission[i].length; j++) {
                ResourcesManager.getInstance().loadResources("UI/missionIcon/" + this.data_mission[i][j].icon + "/spriteFrame", SpriteFrame, function (sf) {});
              }
            }
  
            var pathIcon = ["UI/missionReward/CurrencyStarfruitIcon/spriteFrame", "UI/missionReward/IconHudPowerupBerryBlast/spriteFrame", "UI/missionReward/IconHudPowerupBombDeflect/spriteFrame", "UI/missionReward/IconHudPowerupPeachyTime/spriteFrame", "UI/missionReward/IconXPShuriken/spriteFrame"];
  
            for (var _i = 0; _i < pathIcon.length; _i++) {
              ResourcesManager.getInstance().loadResources(pathIcon[_i], SpriteFrame, function (sf) {});
            }
          };
  
          _proto.setClaimed = function setClaimed(type) {
            for (var i = 0; i < this.activeMission.length; i++) {
              if (this.activeMission[i].type == type) this.activeMission[i].claimed = true;
            }
          };
  
          _proto.generateMissionDataToSave = function generateMissionDataToSave() {
            var data = [];
  
            for (var i = 0; i < this.activeMission.length; i++) {
              data.push({
                type: this.activeMission[i].type,
                current: this.activeMission[i].current,
                claimed: this.activeMission[i].claimed,
                rewardType: this.activeMission[i].rewardType
              });
            }
  
            return data;
          };
  
          _proto.loadMission = function loadMission(savedData) {
            for (var i = 0; i < savedData.length; i++) {
              var mission = this.findMission(savedData[i].type);
  
              if (mission != null) {
                mission.current = savedData[i].current;
                mission.claimed = savedData[i].claimed;
                mission.rewardType = savedData[i].rewardType;
                this.activeMission.push(mission);
              }
            }
          };
  
          _proto.findMission = function findMission(type) {
            for (var i = 0; i < this.data_mission.length; i++) {
              for (var j = 0; j < this.data_mission[i].length; j++) {
                if (this.data_mission[i][j].type == type) return this.data_mission[i][j];
              }
            }
  
            return null;
          };
  
          _proto.generateMission = function generateMission() {
            if (GameController.RIG_MISSION_SPECIFIC) {
              this.activeMission = [this.data_mission[3][0], this.data_mission[0][0], this.data_mission[7][0]];
              this.activeMission[0].rewardType = "bomb_deflect";
            } else {
              this.activeMission = [];
              var listIdxMisiPowerUp = [];
              var listIdxMisiStarfruit = [];
              var listIdxMisiExp = [];
  
              for (var i = 0; i < this.data_mission.length; i++) {
                var rewardType = this.data_mission[i][0].rewardType;
                if (rewardType == "starfruit") listIdxMisiStarfruit.push(i);else if (rewardType == "powerup") listIdxMisiPowerUp.push(i);else if (rewardType == "xp") listIdxMisiExp.push(i);
              }
  
              var totalNumber = this.powerUpMissionWeight + this.starfruitMissionWeight + this.expMissionWeight;
  
              for (var _i2 = 0; _i2 < this.maxMission; _i2++) {
                var random = randomRangeInt(0, totalNumber);
                var idxDataMission = -1;
  
                if (random < this.powerUpMissionWeight) {
                  idxDataMission = listIdxMisiPowerUp.splice(randomRangeInt(0, listIdxMisiPowerUp.length), 1)[0];
                } else if (random < this.powerUpMissionWeight + this.starfruitMissionWeight) {
                  idxDataMission = listIdxMisiStarfruit.splice(randomRangeInt(0, listIdxMisiStarfruit.length), 1)[0];
                } else if (random < this.powerUpMissionWeight + this.starfruitMissionWeight + this.expMissionWeight) {
                  idxDataMission = listIdxMisiExp.splice(randomRangeInt(0, listIdxMisiExp.length), 1)[0];
                }
  
                var listMisi = this.data_mission[idxDataMission];
                var choosenMission = listMisi[randomRangeInt(0, listMisi.length)];
  
                if (choosenMission.rewardType == "powerup") {
                  var listReward = ['berry_blast', 'bomb_deflect', 'peachy_time'];
                  choosenMission.rewardType = listReward[randomRangeInt(0, listReward.length)];
                }
  
                this.activeMission.push(choosenMission);
              }
            }
  
            if (GameController.RIG_MISSION_AUTO_COMPLETE) {
              for (var _i3 = 0; _i3 < this.activeMission.length; _i3++) {
                this.activeMission[_i3].current = 999999;
              }
            }
          };
  
          _proto.trySetProgress = function trySetProgress(type, progressToAdd) {
            for (var i = 0; i < this.activeMission.length; i++) {
              var curMission = this.activeMission[i];
  
              if (curMission.type.includes(type) && curMission.current < curMission.target) {
                curMission.current = progressToAdd;
  
                if (GameController.getInstance().getScreenState() != GameController.SCREEN_STATE_GAMEPLAY) {
                  GameController.saveData();
                }
              }
            }
          };
  
          _proto.tryAddProgress = function tryAddProgress(type, progressToAdd) {
            for (var i = 0; i < this.activeMission.length; i++) {
              var curMission = this.activeMission[i];
  
              if (curMission.type.includes(type) && curMission.current < curMission.target) {
                curMission.current += progressToAdd;
  
                if (GameController.getInstance().getScreenState() != GameController.SCREEN_STATE_GAMEPLAY) {
                  GameController.saveData();
                }
              }
            }
          };
  
          return MissionManager;
        }(Component), _defineProperty(_class2, "Instance", null), _temp)) || _class));
  
        cclegacy._RF.pop();
      }
    };
  });
  
  System.register("chunks:///_virtual/MissionLabel.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './SFXManager.ts', './ResourcesManager.ts', './MissionManager.ts', './Data.ts', './PopupMission.ts', './SceneSelectMode.ts', './GameController.ts'], function (exports) {
    'use strict';
  
    var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _defineProperty, cclegacy, _decorator, Material, ParticleSystem, Label, Color, SpriteFrame, Sprite, LabelOutline, Component, SFXManager, ResourcesManager, MissionManager, Data, PopupMission, SceneSelectMode, GameController;
  
    return {
      setters: [function (module) {
        _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
        _inheritsLoose = module.inheritsLoose;
        _initializerDefineProperty = module.initializerDefineProperty;
        _assertThisInitialized = module.assertThisInitialized;
        _defineProperty = module.defineProperty;
      }, function (module) {
        cclegacy = module.cclegacy;
        _decorator = module._decorator;
        Material = module.Material;
        ParticleSystem = module.ParticleSystem;
        Label = module.Label;
        Color = module.Color;
        SpriteFrame = module.SpriteFrame;
        Sprite = module.Sprite;
        LabelOutline = module.LabelOutline;
        Component = module.Component;
      }, function (module) {
        SFXManager = module.SFXManager;
      }, function (module) {
        ResourcesManager = module.ResourcesManager;
      }, function (module) {
        MissionManager = module.MissionManager;
      }, function (module) {
        Data = module.Data;
      }, function (module) {
        PopupMission = module.PopupMission;
      }, function (module) {
        SceneSelectMode = module.SceneSelectMode;
      }, function (module) {
        GameController = module.GameController;
      }],
      execute: function () {
        var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp;
  
        cclegacy._RF.push({}, "e76acDkfy9Coq4yyvH5geNL", "MissionLabel", undefined);
  
        var ccclass = _decorator.ccclass,
            property = _decorator.property;
        var MissionLabel = exports('MissionLabel', (_dec = ccclass('MissionLabel'), _dec2 = property({
          type: Material,
          displayName: "Mat exp"
        }), _dec3 = property({
          type: Material,
          displayName: "Mat starfruit"
        }), _dec4 = property({
          type: Material,
          displayName: "Mat power up"
        }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
          _inheritsLoose(MissionLabel, _Component);
  
          function MissionLabel() {
            var _this;
  
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
  
            _this = _Component.call.apply(_Component, [this].concat(args)) || this;
  
            _initializerDefineProperty(_assertThisInitialized(_this), "matExp", _descriptor, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "matStarfruit", _descriptor2, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "matPowerup", _descriptor3, _assertThisInitialized(_this));
  
            _defineProperty(_assertThisInitialized(_this), "from", "");
  
            _defineProperty(_assertThisInitialized(_this), "data", void 0);
  
            _defineProperty(_assertThisInitialized(_this), "callbackOnClaimed", function () {});
  
            _defineProperty(_assertThisInitialized(_this), "holdInput", false);
  
            return _this;
          }
  
          var _proto = MissionLabel.prototype;
  
          _proto.start = function start() {};
  
          _proto.setHoldInput = function setHoldInput(value) {
            this.holdInput = value;
          };
  
          _proto.onClaimClicked = function onClaimClicked() {
            if (this.holdInput) return;
            SFXManager.getInstance().play(SFXManager.SFX_UI_POSITIVE);
  
            if (this.data.rewardType == "starfruit" || this.data.rewardType == "xp") {
              if (this.data.rewardType == "starfruit") {
                if (SceneSelectMode.from == "popup_mission") {
                  var contMissionPopup = GameController.getInstance().mainCanvasOverlay.getChildByPath("container_missionsPopup").getComponent(PopupMission);
                  contMissionPopup.showAnimationClaimed(this.data, this.node.getChildByPath("layoutMissionClaim/layoutMissionReward/Icon"));
                } else if (SceneSelectMode.from == "select_mode") {
                  var sceneSelectMode = GameController.Instance.selectModeScreen.getComponent(SceneSelectMode);
                  sceneSelectMode.showAnimationClaimed(this.data, this.node.getChildByPath("layoutMissionClaim/layoutMissionReward/Icon"));
                }
              } else if (this.data.rewardType == "xp") {
                if (SceneSelectMode.from == "popup_mission") {
                  var _contMissionPopup = GameController.getInstance().mainCanvasOverlay.getChildByPath("container_missionsPopup").getComponent(PopupMission);
  
                  _contMissionPopup.showAnimationClaimed(this.data, this.node.getChildByPath("layoutMissionClaim/layoutMissionReward/Icon"));
                } else if (SceneSelectMode.from == "select_mode") {
                  var _sceneSelectMode = GameController.Instance.selectModeScreen.getComponent(SceneSelectMode);
  
                  _sceneSelectMode.showAnimationClaimed(this.data, this.node.getChildByPath("layoutMissionClaim/layoutMissionReward/Icon"));
                }
              }
            } else if (this.data.rewardType == "berry_blast" || this.data.rewardType == "bomb_deflect" || this.data.rewardType == "peachy_time") {
              if (this.data.rewardType == "berry_blast") {
                var value = 0;
                if (this.data.rewardSize == "small") value = 1;else if (this.data.rewardSize == "medium") value = 2;else if (this.data.rewardSize == "large") value = 3;
                Data.getInstance().inventoryPUBerryBlast += value;
                var particlePU = GameController.Instance.particlePUGain;
                particlePU.setWorldPosition(Data.getInstance().convert2DPosTo3D(this.node.getChildByPath("layoutMissionClaim/ButtonClaim").worldPosition));
                particlePU.getComponent(ParticleSystem).play();
              } else if (this.data.rewardType == "bomb_deflect") {
                var _value = 0;
                if (this.data.rewardSize == "small") _value = 1;else if (this.data.rewardSize == "medium") _value = 2;else if (this.data.rewardSize == "large") _value = 3;
                Data.getInstance().inventoryPUDeflect += _value;
                var _particlePU = GameController.Instance.particlePUGain;
  
                _particlePU.setWorldPosition(Data.getInstance().convert2DPosTo3D(this.node.getChildByPath("layoutMissionClaim/ButtonClaim").worldPosition));
  
                _particlePU.getComponent(ParticleSystem).play();
              } else if (this.data.rewardType == "peachy_time") {
                var _value2 = 0;
                if (this.data.rewardSize == "small") _value2 = 1;else if (this.data.rewardSize == "medium") _value2 = 2;else if (this.data.rewardSize == "large") _value2 = 3;
                Data.getInstance().inventoryPUPeachyTime += _value2;
                var _particlePU2 = GameController.Instance.particlePUGain;
  
                _particlePU2.setWorldPosition(Data.getInstance().convert2DPosTo3D(this.node.getChildByPath("layoutMissionClaim/ButtonClaim").worldPosition));
  
                _particlePU2.getComponent(ParticleSystem).play();
              }
  
              if (SceneSelectMode.from == "select_mode") {
                GameController.Instance.selectModeScreen.getComponent(SceneSelectMode).refreshPowerUp();
              }
            }
  
            MissionManager.getInstance().setClaimed(this.data.type);
            GameController.saveData();
            this.callbackOnClaimed();
          };
  
          _proto.setOnClaimed = function setOnClaimed(callbackOnClaimed) {
            this.callbackOnClaimed = callbackOnClaimed;
          };
  
          _proto.refresh = function refresh(data, from, showClaimButton) {
            if (showClaimButton === void 0) {
              showClaimButton = true;
            }
  
            this.data = data;
            var iconBackingGreen = this.node.getChildByPath("MissionIconBacking/MissionIconBackingGreen");
            var icon = this.node.getChildByPath("MissionIconBacking/MissionIcon");
            var title = this.node.getChildByPath("mission_textLayout/missions_text");
            var titleProgress = this.node.getChildByPath("mission_textLayout/missions_textProgress");
            var missionReward = this.node.getChildByPath("layoutMissionClaim/layoutMissionReward");
            var btnClaim = this.node.getChildByPath("layoutMissionClaim/ButtonClaim");
            var tickClaim = this.node.getChildByPath("layoutMissionClaim/TickGreenClaimed");
            var rewardText = this.node.getChildByPath("layoutMissionClaim/layoutMissionReward/text_point");
            var rewardIcon = this.node.getChildByPath("layoutMissionClaim/layoutMissionReward/Icon");
            missionReward.active = !data.claimed;
            btnClaim.active = !data.claimed && data.current >= data.target && showClaimButton;
            tickClaim.active = data.claimed;
            titleProgress.active = data.togotext && data.current < data.target;
            title.getComponent(Label).string = data.text;
            if (data.current < data.target) title.getComponent(Label).color = new Color(154, 97, 39);else title.getComponent(Label).color = new Color(27, 128, 27);
            if (titleProgress.active) titleProgress.getComponent(Label).string = data.target - data.current + " to go!";
            iconBackingGreen.active = data.current >= data.target;
            icon.active = false;
            ResourcesManager.getInstance().loadResources("UI/missionIcon/" + data.icon + "/spriteFrame", SpriteFrame, function (sf) {
              icon.active = true;
              icon.getComponent(Sprite).spriteFrame = sf;
            });
            var rewardType = data.rewardType;
            var rewardSize = data.rewardSize;
            var pathIcon = "";
            var rewardValue = 0;
  
            if (rewardType == "starfruit") {
              rewardText.getComponent(Label).customMaterial = this.matStarfruit;
              rewardText.getComponent(LabelOutline).color = new Color(51, 78, 0);
              if (rewardSize == "small") rewardValue = 50;else if (rewardSize == "medium") rewardValue = 100;else if (rewardSize == "large") rewardValue = 150;
              pathIcon = "UI/missionReward/CurrencyStarfruitIcon/spriteFrame";
            } else if (rewardType == "berry_blast") {
              rewardText.getComponent(Label).customMaterial = this.matPowerup;
              rewardText.getComponent(LabelOutline).color = new Color(69, 69, 69);
              if (rewardSize == "small") rewardValue = 1;else if (rewardSize == "medium") rewardValue = 2;else if (rewardSize == "large") rewardValue = 3;
              pathIcon = "UI/missionReward/IconHudPowerupBerryBlast/spriteFrame";
            } else if (rewardType == "bomb_deflect") {
              rewardText.getComponent(Label).customMaterial = this.matPowerup;
              rewardText.getComponent(LabelOutline).color = new Color(69, 69, 69);
              if (rewardSize == "small") rewardValue = 1;else if (rewardSize == "medium") rewardValue = 2;else if (rewardSize == "large") rewardValue = 3;
              pathIcon = "UI/missionReward/IconHudPowerupBombDeflect/spriteFrame";
            } else if (rewardType == "peachy_time") {
              rewardText.getComponent(Label).customMaterial = this.matPowerup;
              rewardText.getComponent(LabelOutline).color = new Color(69, 69, 69);
              if (rewardSize == "small") rewardValue = 1;else if (rewardSize == "medium") rewardValue = 2;else if (rewardSize == "large") rewardValue = 3;
              pathIcon = "UI/missionReward/IconHudPowerupPeachyTime/spriteFrame";
            } else if (rewardType == "xp") {
              rewardText.getComponent(Label).customMaterial = this.matExp;
              rewardText.getComponent(LabelOutline).color = new Color(117, 38, 104);
              if (rewardSize == "small") rewardValue = 75;else if (rewardSize == "medium") rewardValue = 100;else if (rewardSize == "large") rewardValue = 125;
              pathIcon = "UI/missionReward/IconXPShuriken/spriteFrame";
            }
  
            rewardIcon.active = false;
            ResourcesManager.getInstance().loadResources(pathIcon, SpriteFrame, function (sf) {
              rewardIcon.active = true;
              rewardIcon.getComponent(Sprite).spriteFrame = sf;
            });
            rewardText.getComponent(Label).string = "" + rewardValue;
          };
  
          return MissionLabel;
        }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "matExp", [_dec2], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "matStarfruit", [_dec3], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "matPowerup", [_dec4], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        })), _class2)) || _class));
  
        cclegacy._RF.pop();
      }
    };
  });
  
  System.register("chunks:///_virtual/BGMManager.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
    'use strict';
  
    var _defineProperty, _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, AudioClip, AudioSource, Component;
  
    return {
      setters: [function (module) {
        _defineProperty = module.defineProperty;
        _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
        _inheritsLoose = module.inheritsLoose;
        _initializerDefineProperty = module.initializerDefineProperty;
        _assertThisInitialized = module.assertThisInitialized;
      }, function (module) {
        cclegacy = module.cclegacy;
        _decorator = module._decorator;
        AudioClip = module.AudioClip;
        AudioSource = module.AudioSource;
        Component = module.Component;
      }],
      execute: function () {
        var _dec, _dec2, _class, _class2, _descriptor, _class3, _temp;
  
        cclegacy._RF.push({}, "f26442EaRBEEaxopYmLZeNE", "BGMManager", undefined);
  
        var ccclass = _decorator.ccclass,
            property = _decorator.property;
        var BGMManager = exports('BGMManager', (_dec = ccclass('BGMManager'), _dec2 = property({
          type: [AudioClip]
        }), _dec(_class = (_class2 = (_temp = _class3 = /*#__PURE__*/function (_Component) {
          _inheritsLoose(BGMManager, _Component);
  
          function BGMManager() {
            var _this;
  
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
  
            _this = _Component.call.apply(_Component, [this].concat(args)) || this;
  
            _initializerDefineProperty(_assertThisInitialized(_this), "listBGM", _descriptor, _assertThisInitialized(_this));
  
            _defineProperty(_assertThisInitialized(_this), "activeSound", -1);
  
            _defineProperty(_assertThisInitialized(_this), "audioSource", void 0);
  
            _defineProperty(_assertThisInitialized(_this), "audioSourceForBomb", void 0);
  
            return _this;
          }
  
          BGMManager.getInstance = function getInstance() {
            return BGMManager.Instance;
          };
  
          var _proto = BGMManager.prototype;
  
          _proto.onLoad = function onLoad() {
            BGMManager.Instance = this;
          };
  
          _proto.start = function start() {
            this.audioSource = this.getComponent(AudioSource);
            this.audioSourceForBomb = this.addComponent(AudioSource);
            this.audioSourceForBomb.clip = this.listBGM[BGMManager.BGM_BOMB_FUSE];
            this.audioSourceForBomb.loop = true;
            this.audioSourceForBomb.stop();
          };
  
          _proto.playBombBGM = function playBombBGM() {
            if (!this.audioSourceForBomb.playing) {
              this.audioSourceForBomb.play();
            }
  
            if (BGMManager.isMuted || AzerionISADPLAYING) this.audioSourceForBomb.volume = 0;else if (!BGMManager.isMuted || !AzerionISADPLAYING) this.audioSourceForBomb.volume = 1;
          };
  
          _proto.stopBombBGM = function stopBombBGM() {
            this.audioSourceForBomb.stop();
          };
  
          _proto.play = function play(id) {
            if (this.activeSound == id) return;
  
            if (this.activeSound != -1) {
              this.audioSource.stop();
            }
  
            this.activeSound = id;
            this.audioSource.clip = this.listBGM[id];
            this.audioSource.loop = true;
            this.audioSource.play();
            if (BGMManager.isMuted || AzerionISADPLAYING || !_azHasFocus) this.audioSource.volume = 0;else if (!BGMManager.isMuted || !AzerionISADPLAYING || _azHasFocus) this.audioSource.volume = 1;
          };
  
          _proto.stop = function stop() {
            this.audioSource.stop();
            this.activeSound = -1;
          };
  
          _proto.muteBGM = function muteBGM(value) {
            BGMManager.isMuted = value;
  
            if (BGMManager.isMuted) {
              this.audioSource.volume = 0;
              this.audioSourceForBomb.volume = 0;
            } else {
              this.audioSource.volume = 1;
              this.audioSourceForBomb.volume = 1;
            }
          };
  
          _proto.setVolume = function setVolume(volume) {
            this.audioSource.volume = volume;
            this.audioSourceForBomb.volume = volume;
          };
  
          return BGMManager;
        }(Component), _defineProperty(_class3, "BGM_AMB_ARENA", 0), _defineProperty(_class3, "BGM_BOMB_FUSE", 1), _defineProperty(_class3, "BGM_MUSIC_MENU", 2), _defineProperty(_class3, "Instance", null), _defineProperty(_class3, "isMuted", false), _temp), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "listBGM", [_dec2], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function initializer() {
            return [];
          }
        }), _class2)) || _class));
  
        cclegacy._RF.pop();
      }
    };
  });
  
  System.register("chunks:///_virtual/GameplayLeaderboardLabel.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
    'use strict';
  
    var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Component;
  
    return {
      setters: [function (module) {
        _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
        _inheritsLoose = module.inheritsLoose;
        _initializerDefineProperty = module.initializerDefineProperty;
        _assertThisInitialized = module.assertThisInitialized;
      }, function (module) {
        cclegacy = module.cclegacy;
        _decorator = module._decorator;
        Label = module.Label;
        Component = module.Component;
      }],
      execute: function () {
        var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp;
  
        cclegacy._RF.push({}, "f770c98ah1IZJzia0BNr6Da", "GameplayLeaderboardLabel", undefined);
  
        var ccclass = _decorator.ccclass,
            property = _decorator.property;
        var GameplayLeaderboardLabel = exports('GameplayLeaderboardLabel', (_dec = ccclass('GameplayLeaderboardLabel'), _dec2 = property({
          type: Label
        }), _dec3 = property({
          type: Label
        }), _dec4 = property({
          type: Label
        }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
          _inheritsLoose(GameplayLeaderboardLabel, _Component);
  
          function GameplayLeaderboardLabel() {
            var _this;
  
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
  
            _this = _Component.call.apply(_Component, [this].concat(args)) || this;
  
            _initializerDefineProperty(_assertThisInitialized(_this), "playerName", _descriptor, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "playerScore", _descriptor2, _assertThisInitialized(_this));
  
            _initializerDefineProperty(_assertThisInitialized(_this), "playerBestScore", _descriptor3, _assertThisInitialized(_this));
  
            return _this;
          }
  
          var _proto = GameplayLeaderboardLabel.prototype;
  
          _proto.start = function start() {};
  
          _proto.setAsPlayer = function setAsPlayer() {
            this.playerScore.node.active = true;
            this.playerBestScore.node.active = true;
          };
  
          _proto.setAsFirstRank = function setAsFirstRank() {
            this.playerScore.node.active = true;
            this.playerBestScore.node.active = false;
          };
  
          _proto.setAsOtherPlayer = function setAsOtherPlayer() {
            this.playerScore.node.active = true;
            this.playerBestScore.node.active = false;
          };
  
          _proto.setScore = function setScore(score) {
            this.playerScore.string = "" + score;
          };
  
          _proto.setBestScore = function setBestScore(bestScore) {
            this.playerBestScore.string = "Best: " + bestScore;
          };
  
          _proto.setName = function setName(name) {
            this.playerName.string = name;
          };
  
          return GameplayLeaderboardLabel;
        }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "playerName", [_dec2], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "playerScore", [_dec3], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "playerBestScore", [_dec4], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: null
        })), _class2)) || _class));
  
        cclegacy._RF.pop();
      }
    };
  });
  
  System.register("chunks:///_virtual/SFXManager.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
    'use strict';
  
    var _defineProperty, _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, AudioClip, AudioSource, Component;
  
    return {
      setters: [function (module) {
        _defineProperty = module.defineProperty;
        _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
        _inheritsLoose = module.inheritsLoose;
        _initializerDefineProperty = module.initializerDefineProperty;
        _assertThisInitialized = module.assertThisInitialized;
      }, function (module) {
        cclegacy = module.cclegacy;
        _decorator = module._decorator;
        AudioClip = module.AudioClip;
        AudioSource = module.AudioSource;
        Component = module.Component;
      }],
      execute: function () {
        var _dec, _dec2, _class, _class2, _descriptor, _class3, _temp;
  
        cclegacy._RF.push({}, "f86a9cRdghLa7oGhooUzlH9", "SFXManager", undefined);
  
        var ccclass = _decorator.ccclass,
            property = _decorator.property;
        var SFXManager = exports('SFXManager', (_dec = ccclass('SFXManager'), _dec2 = property({
          type: [AudioClip]
        }), _dec(_class = (_class2 = (_temp = _class3 = /*#__PURE__*/function (_Component) {
          _inheritsLoose(SFXManager, _Component);
  
          function SFXManager() {
            var _this;
  
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
  
            _this = _Component.call.apply(_Component, [this].concat(args)) || this;
  
            _initializerDefineProperty(_assertThisInitialized(_this), "listSFX", _descriptor, _assertThisInitialized(_this));
  
            _defineProperty(_assertThisInitialized(_this), "audioSource", void 0);
  
            _defineProperty(_assertThisInitialized(_this), "audioSourcePomeSparkleLoop", void 0);
  
            _defineProperty(_assertThisInitialized(_this), "audioSourceStrawberryLoop", void 0);
  
            _defineProperty(_assertThisInitialized(_this), "audioPeachLoop", void 0);
  
            _defineProperty(_assertThisInitialized(_this), "audioSourceFireCrackerLoop", void 0);
  
            _defineProperty(_assertThisInitialized(_this), "audioSourceBlitzDrum", void 0);
  
            _defineProperty(_assertThisInitialized(_this), "audioSourceDrumRoll", void 0);
  
            _defineProperty(_assertThisInitialized(_this), "notInit", true);
  
            _defineProperty(_assertThisInitialized(_this), "listLoopAudioSource", []);
  
            return _this;
          }
  
          SFXManager.getInstance = function getInstance() {
            return SFXManager.Instance;
          };
  
          var _proto = SFXManager.prototype;
  
          _proto.onLoad = function onLoad() {
            SFXManager.Instance = this;
            SFXManager.Instance.notInit = false;
          };
  
          _proto.start = function start() {
            this.audioSource = this.getComponent(AudioSource);
            this.audioSourcePomeSparkleLoop = this.addComponent(AudioSource);
            this.audioSourceStrawberryLoop = this.addComponent(AudioSource);
            this.audioPeachLoop = this.addComponent(AudioSource);
            this.audioSourceFireCrackerLoop = this.addComponent(AudioSource);
            this.audioSourceBlitzDrum = this.addComponent(AudioSource);
            this.audioSourceDrumRoll = this.addComponent(AudioSource);
            this.listLoopAudioSource = [this.audioSourcePomeSparkleLoop, this.audioSourceStrawberryLoop, this.audioPeachLoop, this.audioSourceFireCrackerLoop, this.audioSourceBlitzDrum, this.audioSourceDrumRoll];
          };
  
          _proto.playLoopSFX = function playLoopSFX(id) {
            var audioSource = null;
            if (id == SFXManager.SFX_POME_SPARKLE__LP) audioSource = this.audioSourcePomeSparkleLoop;else if (id == SFXManager.SFX_STRAWBERRY_LOOP) audioSource = this.audioSourceStrawberryLoop;else if (id == SFXManager.SFX_PEACH_LOOP) audioSource = this.audioPeachLoop;else if (id == SFXManager.SFX_BLADEFIRE_CRACKER_LOOP) audioSource = this.audioSourceFireCrackerLoop;else if (id == SFXManager.SFX_BLITZ_DRUM) audioSource = this.audioSourceBlitzDrum;else if (id == SFXManager.SFX_BONUS_DRUM_ROLL_LOOP) audioSource = this.audioSourceDrumRoll;
            audioSource.clip = this.listSFX[id];
            audioSource.loop = true;
            audioSource.play();
            if (SFXManager.isMuted || AzerionISADPLAYING) audioSource.volume = 0;else if (!SFXManager.isMuted) audioSource.volume = 1;
          };
  
          _proto.stopLoopSFX = function stopLoopSFX(id) {
            if (id == SFXManager.SFX_POME_SPARKLE__LP) this.audioSourcePomeSparkleLoop.stop();else if (id == SFXManager.SFX_STRAWBERRY_LOOP) this.audioSourceStrawberryLoop.stop();else if (id == SFXManager.SFX_PEACH_LOOP) this.audioPeachLoop.stop();else if (id == SFXManager.SFX_BLADEFIRE_CRACKER_LOOP) this.audioSourceFireCrackerLoop.stop();else if (id == SFXManager.SFX_BLITZ_DRUM) this.audioSourceBlitzDrum.stop();else if (id == SFXManager.SFX_BONUS_DRUM_ROLL_LOOP) this.audioSourceDrumRoll.stop();
          };
  
          _proto.play = function play(id) {
            if (SFXManager.Instance.notInit) return;
            if(!AzerionISADPLAYING) {
            this.audioSource.playOneShot(this.listSFX[id]);
            }
            if (SFXManager.isMuted || AzerionISADPLAYING) this.audioSource.volume = 0;else this.audioSource.volume = 1;
          };
  
          _proto.playClip = function playClip(clip) {
            this.audioSource.playOneShot(clip);
            if (SFXManager.isMuted || AzerionISADPLAYING) this.audioSource.volume = 0;else this.audioSource.volume = 1;
          };
  
          _proto.muteSFX = function muteSFX(value) {
            SFXManager.isMuted = value;
  
            if (SFXManager.isMuted) {
              this.audioSource.volume = 0;
  
              for (var i = 0; i < this.listLoopAudioSource.length; i++) {
                this.listLoopAudioSource[i].volume = 0;
              }
            } else {
              this.audioSource.volume = 1;
  
              for (var _i = 0; _i < this.listLoopAudioSource.length; _i++) {
                this.listLoopAudioSource[_i].volume = 1;
              }
            }
          };
  
          _proto.setVolume = function setVolume(volume) {
            this.audioSource.volume = volume;
  
            for (var i = 0; i < this.listLoopAudioSource.length; i++) {
              this.listLoopAudioSource[i].volume = volume;
            }
          };
  
          return SFXManager;
        }(Component), _defineProperty(_class3, "SFX_BLADE_REGULAR_1", 0), _defineProperty(_class3, "SFX_BLADE_REGULAR_2", 1), _defineProperty(_class3, "SFX_BLADE_REGULAR_3", 2), _defineProperty(_class3, "SFX_BLADE_REGULAR_4", 3), _defineProperty(_class3, "SFX_BLADE_REGULAR_5", 4), _defineProperty(_class3, "SFX_BLADE_REGULAR_6", 5), _defineProperty(_class3, "SFX_BLADE_REGULAR_7", 6), _defineProperty(_class3, "SFX_BOMB_EXPLODE_GAMEOVER", 7), _defineProperty(_class3, "SFX_BOMB_LAUNCH", 8), _defineProperty(_class3, "SFX_FRUIT_IMPACT_APPLE", 9), _defineProperty(_class3, "SFX_FRUIT_IMPACT_BIG_HOLLOW", 10), _defineProperty(_class3, "SFX_IMPACT_BIG_WET_1", 11), _defineProperty(_class3, "SFX_IMPACT_BIG_WET_2", 12), _defineProperty(_class3, "SFX_IMPACT_BIG_WET_3", 13), _defineProperty(_class3, "SFX_IMPACT_MEDIUM_DRY", 14), _defineProperty(_class3, "SFX_IMPACT_MEDIUM_WET_1", 15), _defineProperty(_class3, "SFX_IMPACT_MEDIUM_WET_2", 16), _defineProperty(_class3, "SFX_IMPACT_MEDIUM_WET_3", 17), _defineProperty(_class3, "SFX_IMPACT_SMALL_WET_1", 18), _defineProperty(_class3, "SFX_IMPACT_SMALL_WET_2", 19), _defineProperty(_class3, "SFX_IMPACT_SMALL_WET_3", 20), _defineProperty(_class3, "SFX_FRUIT_LAUNCH", 21), _defineProperty(_class3, "SFX_COMBO_FRUIT_3", 22), _defineProperty(_class3, "SFX_COMBO_FRUIT_4", 23), _defineProperty(_class3, "SFX_COMBO_FRUIT_5", 24), _defineProperty(_class3, "SFX_COMBO_FRUIT_6", 25), _defineProperty(_class3, "SFX_COMBO_FRUIT_7", 26), _defineProperty(_class3, "SFX_COMBO_FRUIT_8", 27), _defineProperty(_class3, "SFX_COMBO_FRUIT_9", 28), _defineProperty(_class3, "SFX_COMBO_FRUIT_10", 29), _defineProperty(_class3, "SFX_CRITICAL", 30), _defineProperty(_class3, "SFX_EXTRA_LIFE", 31), _defineProperty(_class3, "SFX_GAMEOVER", 32), _defineProperty(_class3, "SFX_GAMESTART", 33), _defineProperty(_class3, "SFX_GANK", 34), _defineProperty(_class3, "SFX_SELECT", 35), _defineProperty(_class3, "SFX_POWERUP_DEFLECT", 36), _defineProperty(_class3, "SFX_POWERUP_DEFLECT_EXPLODE", 37), _defineProperty(_class3, "SFX_UI_BACK", 38), _defineProperty(_class3, "SFX_UI_BLADE_EQUIP", 39), _defineProperty(_class3, "SFX_UI_BUY", 40), _defineProperty(_class3, "SFX_UI_DOJO_EQUIP", 41), _defineProperty(_class3, "SFX_UI_STARFRUIT_INCREMENT", 42), _defineProperty(_class3, "SFX_UI_STARFRUIT_SPEND", 43), _defineProperty(_class3, "SFX_UI_ACHIEVEMENT", 44), _defineProperty(_class3, "SFX_POME_SLICE_1", 45), _defineProperty(_class3, "SFX_POME_SLICE_2", 46), _defineProperty(_class3, "SFX_POME_SLICE_3", 47), _defineProperty(_class3, "SFX_POME_BURST", 48), _defineProperty(_class3, "SFX_POME_RAMPDOWN", 49), _defineProperty(_class3, "SFX_POME_SPARKLE__LP", 50), _defineProperty(_class3, "SFX_POME_ZOOM_OUT", 51), _defineProperty(_class3, "SFX_TIME_TICK", 52), _defineProperty(_class3, "SFX_TIME_TOCK", 53), _defineProperty(_class3, "SFX_TIME_RING_OUT", 54), _defineProperty(_class3, "SFX_UIPOWER_ENABLE", 55), _defineProperty(_class3, "SFX_UIPOWER_DISABLE", 56), _defineProperty(_class3, "SFX_STRAWBERRY_SLICE", 57), _defineProperty(_class3, "SFX_STRAWBERRY_LOOP", 58), _defineProperty(_class3, "SFX_COMBO_10_FRUIT_PLUS", 59), _defineProperty(_class3, "SFX_PEACH_LOOP", 60), _defineProperty(_class3, "SFX_PEACH_SLICE", 61), _defineProperty(_class3, "SFX_BLADEFIRE_CRACKER_IMPACT_1", 62), _defineProperty(_class3, "SFX_BLADEFIRE_CRACKER_IMPACT_2", 63), _defineProperty(_class3, "SFX_BLADEFIRE_CRACKER_IMPACT_3", 64), _defineProperty(_class3, "SFX_BLADEFIRE_CRACKER_LOOP", 65), _defineProperty(_class3, "SFX_BLADEFIRE_CRACKER_SWIPE_1", 66), _defineProperty(_class3, "SFX_BLADEFIRE_CRACKER_SWIPE_2", 67), _defineProperty(_class3, "SFX_BLADEFIRE_CRACKER_SWIPE_3", 68), _defineProperty(_class3, "SFX_BLADEFIRE_CRACKER_SWIPE_4", 69), _defineProperty(_class3, "SFX_BLADEFIRE_CRACKER_SWIPE_5", 70), _defineProperty(_class3, "SFX_HOLLY_IMPACT_1", 71), _defineProperty(_class3, "SFX_HOLLY_IMPACT_2", 72), _defineProperty(_class3, "SFX_HOLLY_IMPACT_3", 73), _defineProperty(_class3, "SFX_HOLLY_IMPACT_4", 74), _defineProperty(_class3, "SFX_HOLLY_SWIPE_1", 75), _defineProperty(_class3, "SFX_HOLLY_SWIPE_2", 76), _defineProperty(_class3, "SFX_HOLLY_SWIPE_3", 77), _defineProperty(_class3, "SFX_PARTY_SWIPE_1", 78), _defineProperty(_class3, "SFX_PARTY_SWIPE_2", 79), _defineProperty(_class3, "SFX_PARTY_SWIPE_3", 80), _defineProperty(_class3, "SFX_PARTY_SWIPE_4", 81), _defineProperty(_class3, "SFX_BANANA_FREEZE_SLICE", 82), _defineProperty(_class3, "SFX_BANANA_FRENZY_SLICE", 83), _defineProperty(_class3, "SFX_BANANA_DOUBLE_SLICE", 84), _defineProperty(_class3, "SFX_BLITZ_DRUM_LIGHT", 85), _defineProperty(_class3, "SFX_BLITZ_DRUM", 86), _defineProperty(_class3, "SFX_BLITZ_DRUM_END", 87), _defineProperty(_class3, "SFX_BLITZ_1", 88), _defineProperty(_class3, "SFX_BLITZ_2", 89), _defineProperty(_class3, "SFX_BLITZ_3", 90), _defineProperty(_class3, "SFX_BLITZ_4", 91), _defineProperty(_class3, "SFX_BLITZ_5", 92), _defineProperty(_class3, "SFX_BLITZ_6", 93), _defineProperty(_class3, "SFX_BONUS_DRUM_ROLL_LOOP", 94), _defineProperty(_class3, "SFX_BONUS_EXPLOSION_1", 95), _defineProperty(_class3, "SFX_BONUS_EXPLOSION_2", 96), _defineProperty(_class3, "SFX_BONUS_EXPLOSION_3", 97), _defineProperty(_class3, "SFX_BONUS_FIREWORK_EXPLODE", 98), _defineProperty(_class3, "SFX_BONUS_APPLAUSE", 99), _defineProperty(_class3, "SFX_BOMB_EXPLODE_ARCADE", 100), _defineProperty(_class3, "SFX_UI_POSITIVE", 101), _defineProperty(_class3, "SFX_LEVEL_UP_BURST", 102), _defineProperty(_class3, "SFX_LEVEL_UP_UNLOCK", 103), _defineProperty(_class3, "SFX_XP_INCREASE", 104), _defineProperty(_class3, "SFX_XP_LAUNCH", 105), _defineProperty(_class3, "Instance", {
          playLoopSFX: function playLoopSFX(id) {},
          stopLoopSFX: function stopLoopSFX(id) {},
          play: function play(idx) {},
          playClip: function playClip(clip) {},
          muteSFX: function muteSFX(value) {},
          setVolume: function setVolume(volume) {}
        }), _defineProperty(_class3, "isMuted", false), _temp), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "listSFX", [_dec2], {
          configurable: true,
          enumerable: true,
          writable: true,
          initializer: function initializer() {
            return [];
          }
        }), _class2)) || _class));
  
        cclegacy._RF.pop();
      }
    };
  });
  
  System.register("chunks:///_virtual/main", ['./BGMManager.ts', './Instances.ts', './BladeData.ts', './SFXManager.ts', './BlitzManager.ts', './ResourcesManager.ts', './MissionManager.ts', './Data.ts', './HalfFruit.ts', './ShakeNode.ts', './Fruit.ts', './FruitPhysics.ts', './LevelManager.ts', './SceneHomescreen.ts', './PopupMission.ts', './ContMissionSelectMode.ts', './UIPowerUpButton.ts', './UIRing.ts', './SceneSelectMode.ts', './MissionLabel.ts', './GameplayLeaderboardLabel.ts', './GameplayLeaderboard.ts', './SceneGameplay.ts', './ScenePause.ts', './Bomb.ts', './SceneTutorialDeflect.ts', './ItemDetails.ts', './SenseiSwagScene.ts', './UIMissionTutorial.ts', './SceneDeflectOffer.ts', './ControllerBlade.ts', './PreloadScreen.ts', './PopupLevelUp.ts', './ScenePopupBonusArcade.ts', './ScenePopupPurchasePU.ts', './TextCombo.ts', './TextCritical.ts', './TextDeflect.ts', './SceneResultScore.ts', './GameController.ts', './ArcadeBonusBoardController.ts', './FollowTarget.ts', './FruitManager.ts', './Utils.ts', './RotateHandler.ts', './FocusHandler.ts', './AdsManager.ts', './SceneLoading.ts', './LoadingHandler.ts', './Jiblet.ts', './BladeTipWithLineRenderer.ts', './ScenePopupInfoPowerup.ts', './SceneLanguage.ts', './ShareManager.ts', './SceneSetting.ts', './ColorAssembler2D.ts', './ServerManager.ts', './SuperGraphicsStretch.ts', './PolygonSprite.ts', './UIToWorldNode.ts', './CustomLabelShadow.ts', './SceneContinue.ts', './SuperGraphics.ts'], function () {
    'use strict';
  
    return {
      setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      execute: function () {}
    };
  });
  
  (function(r) {
    r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main');
  })(function(mid, cid) {
      System.register(mid, [cid], function (_export, _context) {
      return {
          setters: [function(_m) {
              var _exportObj = {};
  
              for (var _key in _m) {
                if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
              }
  
              _export(_exportObj);
          }],
          execute: function () { }
      };
      });
  });
  