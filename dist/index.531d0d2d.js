// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"dHflk":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "f1958654531d0d2d";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"3frdX":[function(require,module,exports) {
var _database = require("firebase/database");
var _firebaseConfig = require("./libs/firebaseConfig");
var _productCard = require("./templates/productCard");
async function pageInit() {
    const productRef = _database.ref(_firebaseConfig.db, 'Products/');
    const productSnapShot = await _database.get(productRef);
    const data = productSnapShot.val();
    Object.values(data).map((product)=>{
        const card = _productCard.productCard(product);
        console.log(card);
        // productCard(product) returns the element created from template
        document.querySelector('.product-cards').append(card);
    });
}
pageInit();

},{"firebase/database":"bpqHw","./templates/productCard":"5vZiB","./libs/firebaseConfig":"cFl8N"}],"bpqHw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _database = require("@firebase/database");
parcelHelpers.exportAll(_database, exports);

},{"@firebase/database":"cQryS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cQryS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DataSnapshot", ()=>DataSnapshot
);
parcelHelpers.export(exports, "Database", ()=>Database
);
parcelHelpers.export(exports, "OnDisconnect", ()=>OnDisconnect
);
parcelHelpers.export(exports, "QueryConstraint", ()=>QueryConstraint
);
parcelHelpers.export(exports, "TransactionResult", ()=>TransactionResult
);
parcelHelpers.export(exports, "_QueryImpl", ()=>QueryImpl
);
parcelHelpers.export(exports, "_QueryParams", ()=>QueryParams
);
parcelHelpers.export(exports, "_ReferenceImpl", ()=>ReferenceImpl
);
parcelHelpers.export(exports, "_TEST_ACCESS_forceRestClient", ()=>forceRestClient
);
parcelHelpers.export(exports, "_TEST_ACCESS_hijackHash", ()=>hijackHash
);
parcelHelpers.export(exports, "_repoManagerDatabaseFromApp", ()=>repoManagerDatabaseFromApp
);
parcelHelpers.export(exports, "_setSDKVersion", ()=>setSDKVersion
);
parcelHelpers.export(exports, "_validatePathString", ()=>validatePathString
);
parcelHelpers.export(exports, "_validateWritablePath", ()=>validateWritablePath
);
parcelHelpers.export(exports, "child", ()=>child
);
parcelHelpers.export(exports, "connectDatabaseEmulator", ()=>connectDatabaseEmulator
);
parcelHelpers.export(exports, "enableLogging", ()=>enableLogging
);
parcelHelpers.export(exports, "endAt", ()=>endAt
);
parcelHelpers.export(exports, "endBefore", ()=>endBefore
);
parcelHelpers.export(exports, "equalTo", ()=>equalTo
);
parcelHelpers.export(exports, "get", ()=>get
);
parcelHelpers.export(exports, "getDatabase", ()=>getDatabase
);
parcelHelpers.export(exports, "goOffline", ()=>goOffline
);
parcelHelpers.export(exports, "goOnline", ()=>goOnline
);
parcelHelpers.export(exports, "increment", ()=>increment
);
parcelHelpers.export(exports, "limitToFirst", ()=>limitToFirst
);
parcelHelpers.export(exports, "limitToLast", ()=>limitToLast
);
parcelHelpers.export(exports, "off", ()=>off
);
parcelHelpers.export(exports, "onChildAdded", ()=>onChildAdded
);
parcelHelpers.export(exports, "onChildChanged", ()=>onChildChanged
);
parcelHelpers.export(exports, "onChildMoved", ()=>onChildMoved
);
parcelHelpers.export(exports, "onChildRemoved", ()=>onChildRemoved
);
parcelHelpers.export(exports, "onDisconnect", ()=>onDisconnect
);
parcelHelpers.export(exports, "onValue", ()=>onValue
);
parcelHelpers.export(exports, "orderByChild", ()=>orderByChild
);
parcelHelpers.export(exports, "orderByKey", ()=>orderByKey
);
parcelHelpers.export(exports, "orderByPriority", ()=>orderByPriority
);
parcelHelpers.export(exports, "orderByValue", ()=>orderByValue
);
parcelHelpers.export(exports, "push", ()=>push
);
parcelHelpers.export(exports, "query", ()=>query
);
parcelHelpers.export(exports, "ref", ()=>ref
);
parcelHelpers.export(exports, "refFromURL", ()=>refFromURL
);
parcelHelpers.export(exports, "remove", ()=>remove
);
parcelHelpers.export(exports, "runTransaction", ()=>runTransaction
);
parcelHelpers.export(exports, "serverTimestamp", ()=>serverTimestamp
);
parcelHelpers.export(exports, "set", ()=>set
);
parcelHelpers.export(exports, "setPriority", ()=>setPriority
);
parcelHelpers.export(exports, "setWithPriority", ()=>setWithPriority
);
parcelHelpers.export(exports, "startAfter", ()=>startAfter
);
parcelHelpers.export(exports, "startAt", ()=>startAt
);
parcelHelpers.export(exports, "update", ()=>update
);
var _app = require("@firebase/app");
var _component = require("@firebase/component");
var _util = require("@firebase/util");
var _logger = require("@firebase/logger");
var process = require("process");
const name = "@firebase/database";
const version = "0.12.5";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** The semver (www.semver.org) version of the SDK. */ let SDK_VERSION = '';
/**
 * SDK_VERSION should be set before any database instance is created
 * @internal
 */ function setSDKVersion(version1) {
    SDK_VERSION = version1;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Wraps a DOM Storage object and:
 * - automatically encode objects as JSON strings before storing them to allow us to store arbitrary types.
 * - prefixes names with "firebase:" to avoid collisions with app data.
 *
 * We automatically (see storage.js) create two such wrappers, one for sessionStorage,
 * and one for localStorage.
 *
 */ class DOMStorageWrapper {
    /**
     * @param domStorage_ - The underlying storage object (e.g. localStorage or sessionStorage)
     */ constructor(domStorage_){
        this.domStorage_ = domStorage_;
        // Use a prefix to avoid collisions with other stuff saved by the app.
        this.prefix_ = 'firebase:';
    }
    /**
     * @param key - The key to save the value under
     * @param value - The value being stored, or null to remove the key.
     */ set(key, value) {
        if (value == null) this.domStorage_.removeItem(this.prefixedName_(key));
        else this.domStorage_.setItem(this.prefixedName_(key), _util.stringify(value));
    }
    /**
     * @returns The value that was stored under this key, or null
     */ get(key) {
        const storedVal = this.domStorage_.getItem(this.prefixedName_(key));
        if (storedVal == null) return null;
        else return _util.jsonEval(storedVal);
    }
    remove(key) {
        this.domStorage_.removeItem(this.prefixedName_(key));
    }
    prefixedName_(name1) {
        return this.prefix_ + name1;
    }
    toString() {
        return this.domStorage_.toString();
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * An in-memory storage implementation that matches the API of DOMStorageWrapper
 * (TODO: create interface for both to implement).
 */ class MemoryStorage {
    constructor(){
        this.cache_ = {
        };
        this.isInMemoryStorage = true;
    }
    set(key, value) {
        if (value == null) delete this.cache_[key];
        else this.cache_[key] = value;
    }
    get(key) {
        if (_util.contains(this.cache_, key)) return this.cache_[key];
        return null;
    }
    remove(key) {
        delete this.cache_[key];
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Helper to create a DOMStorageWrapper or else fall back to MemoryStorage.
 * TODO: Once MemoryStorage and DOMStorageWrapper have a shared interface this method annotation should change
 * to reflect this type
 *
 * @param domStorageName - Name of the underlying storage object
 *   (e.g. 'localStorage' or 'sessionStorage').
 * @returns Turning off type information until a common interface is defined.
 */ const createStoragefor = function(domStorageName) {
    try {
        // NOTE: just accessing "localStorage" or "window['localStorage']" may throw a security exception,
        // so it must be inside the try/catch.
        if (typeof window !== 'undefined' && typeof window[domStorageName] !== 'undefined') {
            // Need to test cache. Just because it's here doesn't mean it works
            const domStorage = window[domStorageName];
            domStorage.setItem('firebase:sentinel', 'cache');
            domStorage.removeItem('firebase:sentinel');
            return new DOMStorageWrapper(domStorage);
        }
    } catch (e) {
    }
    // Failed to create wrapper.  Just return in-memory storage.
    // TODO: log?
    return new MemoryStorage();
};
/** A storage object that lasts across sessions */ const PersistentStorage = createStoragefor('localStorage');
/** A storage object that only lasts one session */ const SessionStorage = createStoragefor('sessionStorage');
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const logClient = new _logger.Logger('@firebase/database');
/**
 * Returns a locally-unique ID (generated by just incrementing up from 0 each time its called).
 */ const LUIDGenerator = function() {
    let id = 1;
    return function() {
        return id++;
    };
}();
/**
 * Sha1 hash of the input string
 * @param str - The string to hash
 * @returns {!string} The resulting hash
 */ const sha1 = function(str) {
    const utf8Bytes = _util.stringToByteArray(str);
    const sha11 = new _util.Sha1();
    sha11.update(utf8Bytes);
    const sha1Bytes = sha11.digest();
    return _util.base64.encodeByteArray(sha1Bytes);
};
const buildLogMessage_ = function(...varArgs) {
    let message = '';
    for(let i = 0; i < varArgs.length; i++){
        const arg = varArgs[i];
        if (Array.isArray(arg) || arg && typeof arg === 'object' && // eslint-disable-next-line @typescript-eslint/no-explicit-any
        typeof arg.length === 'number') message += buildLogMessage_.apply(null, arg);
        else if (typeof arg === 'object') message += _util.stringify(arg);
        else message += arg;
        message += ' ';
    }
    return message;
};
/**
 * Use this for all debug messages in Firebase.
 */ let logger = null;
/**
 * Flag to check for log availability on first log message
 */ let firstLog_ = true;
/**
 * The implementation of Firebase.enableLogging (defined here to break dependencies)
 * @param logger_ - A flag to turn on logging, or a custom logger
 * @param persistent - Whether or not to persist logging settings across refreshes
 */ const enableLogging$1 = function(logger_, persistent) {
    _util.assert(!persistent || logger_ === true || logger_ === false, "Can't turn on custom loggers persistently.");
    if (logger_ === true) {
        logClient.logLevel = _logger.LogLevel.VERBOSE;
        logger = logClient.log.bind(logClient);
        if (persistent) SessionStorage.set('logging_enabled', true);
    } else if (typeof logger_ === 'function') logger = logger_;
    else {
        logger = null;
        SessionStorage.remove('logging_enabled');
    }
};
const log = function(...varArgs) {
    if (firstLog_ === true) {
        firstLog_ = false;
        if (logger === null && SessionStorage.get('logging_enabled') === true) enableLogging$1(true);
    }
    if (logger) {
        const message = buildLogMessage_.apply(null, varArgs);
        logger(message);
    }
};
const logWrapper = function(prefix) {
    return function(...varArgs) {
        log(prefix, ...varArgs);
    };
};
const error = function(...varArgs) {
    const message = 'FIREBASE INTERNAL ERROR: ' + buildLogMessage_(...varArgs);
    logClient.error(message);
};
const fatal = function(...varArgs) {
    const message = `FIREBASE FATAL ERROR: ${buildLogMessage_(...varArgs)}`;
    logClient.error(message);
    throw new Error(message);
};
const warn = function(...varArgs) {
    const message = 'FIREBASE WARNING: ' + buildLogMessage_(...varArgs);
    logClient.warn(message);
};
/**
 * Logs a warning if the containing page uses https. Called when a call to new Firebase
 * does not use https.
 */ const warnIfPageIsSecure = function() {
    // Be very careful accessing browser globals. Who knows what may or may not exist.
    if (typeof window !== 'undefined' && window.location && window.location.protocol && window.location.protocol.indexOf('https:') !== -1) warn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");
};
/**
 * Returns true if data is NaN, or +/- Infinity.
 */ const isInvalidJSONNumber = function(data) {
    return typeof data === 'number' && (data !== data || data === Number.POSITIVE_INFINITY || data === Number.NEGATIVE_INFINITY);
};
const executeWhenDOMReady = function(fn) {
    if (_util.isNodeSdk() || document.readyState === 'complete') fn();
    else {
        // Modeled after jQuery. Try DOMContentLoaded and onreadystatechange (which
        // fire before onload), but fall back to onload.
        let called = false;
        const wrappedFn = function() {
            if (!document.body) {
                setTimeout(wrappedFn, Math.floor(10));
                return;
            }
            if (!called) {
                called = true;
                fn();
            }
        };
        if (document.addEventListener) {
            document.addEventListener('DOMContentLoaded', wrappedFn, false);
            // fallback to onload.
            window.addEventListener('load', wrappedFn, false);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } else if (document.attachEvent) {
            // IE.
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            document.attachEvent('onreadystatechange', ()=>{
                if (document.readyState === 'complete') wrappedFn();
            });
            // fallback to onload.
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            window.attachEvent('onload', wrappedFn);
        // jQuery has an extra hack for IE that we could employ (based on
        // http://javascript.nwbox.com/IEContentLoaded/) But it looks really old.
        // I'm hoping we don't need it.
        }
    }
};
/**
 * Minimum key name. Invalid for actual data, used as a marker to sort before any valid names
 */ const MIN_NAME = '[MIN_NAME]';
/**
 * Maximum key name. Invalid for actual data, used as a marker to sort above any valid names
 */ const MAX_NAME = '[MAX_NAME]';
/**
 * Compares valid Firebase key names, plus min and max name
 */ const nameCompare = function(a, b) {
    if (a === b) return 0;
    else if (a === MIN_NAME || b === MAX_NAME) return -1;
    else if (b === MIN_NAME || a === MAX_NAME) return 1;
    else {
        const aAsInt = tryParseInt(a), bAsInt = tryParseInt(b);
        if (aAsInt !== null) {
            if (bAsInt !== null) return aAsInt - bAsInt === 0 ? a.length - b.length : aAsInt - bAsInt;
            else return -1;
        } else if (bAsInt !== null) return 1;
        else return a < b ? -1 : 1;
    }
};
/**
 * @returns {!number} comparison result.
 */ const stringCompare = function(a, b) {
    if (a === b) return 0;
    else if (a < b) return -1;
    else return 1;
};
const requireKey = function(key, obj) {
    if (obj && key in obj) return obj[key];
    else throw new Error('Missing required key (' + key + ') in object: ' + _util.stringify(obj));
};
const ObjectToUniqueKey = function(obj) {
    if (typeof obj !== 'object' || obj === null) return _util.stringify(obj);
    const keys = [];
    // eslint-disable-next-line guard-for-in
    for(const k in obj)keys.push(k);
    // Export as json, but with the keys sorted.
    keys.sort();
    let key = '{';
    for(let i = 0; i < keys.length; i++){
        if (i !== 0) key += ',';
        key += _util.stringify(keys[i]);
        key += ':';
        key += ObjectToUniqueKey(obj[keys[i]]);
    }
    key += '}';
    return key;
};
/**
 * Splits a string into a number of smaller segments of maximum size
 * @param str - The string
 * @param segsize - The maximum number of chars in the string.
 * @returns The string, split into appropriately-sized chunks
 */ const splitStringBySize = function(str, segsize) {
    const len = str.length;
    if (len <= segsize) return [
        str
    ];
    const dataSegs = [];
    for(let c = 0; c < len; c += segsize)if (c + segsize > len) dataSegs.push(str.substring(c, len));
    else dataSegs.push(str.substring(c, c + segsize));
    return dataSegs;
};
/**
 * Apply a function to each (key, value) pair in an object or
 * apply a function to each (index, value) pair in an array
 * @param obj - The object or array to iterate over
 * @param fn - The function to apply
 */ function each(obj, fn) {
    for(const key in obj)if (obj.hasOwnProperty(key)) fn(key, obj[key]);
}
/**
 * Borrowed from http://hg.secondlife.com/llsd/src/tip/js/typedarray.js (MIT License)
 * I made one modification at the end and removed the NaN / Infinity
 * handling (since it seemed broken [caused an overflow] and we don't need it).  See MJL comments.
 * @param v - A double
 *
 */ const doubleToIEEE754String = function(v) {
    _util.assert(!isInvalidJSONNumber(v), 'Invalid JSON number'); // MJL
    const ebits = 11, fbits = 52;
    const bias = (1 << ebits - 1) - 1;
    let s, e, f, ln, i;
    // Compute sign, exponent, fraction
    // Skip NaN / Infinity handling --MJL.
    if (v === 0) {
        e = 0;
        f = 0;
        s = 1 / v === -Infinity ? 1 : 0;
    } else {
        s = v < 0;
        v = Math.abs(v);
        if (v >= Math.pow(2, 1 - bias)) {
            // Normalized
            ln = Math.min(Math.floor(Math.log(v) / Math.LN2), bias);
            e = ln + bias;
            f = Math.round(v * Math.pow(2, fbits - ln) - Math.pow(2, fbits));
        } else {
            // Denormalized
            e = 0;
            f = Math.round(v / Math.pow(2, 1 - bias - fbits));
        }
    }
    // Pack sign, exponent, fraction
    const bits = [];
    for(i = fbits; i; i -= 1){
        bits.push(f % 2 ? 1 : 0);
        f = Math.floor(f / 2);
    }
    for(i = ebits; i; i -= 1){
        bits.push(e % 2 ? 1 : 0);
        e = Math.floor(e / 2);
    }
    bits.push(s ? 1 : 0);
    bits.reverse();
    const str = bits.join('');
    // Return the data as a hex string. --MJL
    let hexByteString = '';
    for(i = 0; i < 64; i += 8){
        let hexByte = parseInt(str.substr(i, 8), 2).toString(16);
        if (hexByte.length === 1) hexByte = '0' + hexByte;
        hexByteString = hexByteString + hexByte;
    }
    return hexByteString.toLowerCase();
};
/**
 * Used to detect if we're in a Chrome content script (which executes in an
 * isolated environment where long-polling doesn't work).
 */ const isChromeExtensionContentScript = function() {
    return !!(typeof window === 'object' && window['chrome'] && window['chrome']['extension'] && !/^chrome/.test(window.location.href));
};
/**
 * Used to detect if we're in a Windows 8 Store app.
 */ const isWindowsStoreApp = function() {
    // Check for the presence of a couple WinRT globals
    return typeof Windows === 'object' && typeof Windows.UI === 'object';
};
/**
 * Converts a server error code to a Javascript Error
 */ function errorForServerCode(code, query1) {
    let reason = 'Unknown Error';
    if (code === 'too_big') reason = "The data requested exceeds the maximum size that can be accessed with a single request.";
    else if (code === 'permission_denied') reason = "Client doesn't have permission to access the desired data.";
    else if (code === 'unavailable') reason = 'The service is unavailable';
    const error1 = new Error(code + ' at ' + query1._path.toString() + ': ' + reason);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    error1.code = code.toUpperCase();
    return error1;
}
/**
 * Used to test for integer-looking strings
 */ const INTEGER_REGEXP_ = new RegExp('^-?(0*)\\d{1,10}$');
/**
 * For use in keys, the minimum possible 32-bit integer.
 */ const INTEGER_32_MIN = -2147483648;
/**
 * For use in kyes, the maximum possible 32-bit integer.
 */ const INTEGER_32_MAX = 2147483647;
/**
 * If the string contains a 32-bit integer, return it.  Else return null.
 */ const tryParseInt = function(str) {
    if (INTEGER_REGEXP_.test(str)) {
        const intVal = Number(str);
        if (intVal >= INTEGER_32_MIN && intVal <= INTEGER_32_MAX) return intVal;
    }
    return null;
};
/**
 * Helper to run some code but catch any exceptions and re-throw them later.
 * Useful for preventing user callbacks from breaking internal code.
 *
 * Re-throwing the exception from a setTimeout is a little evil, but it's very
 * convenient (we don't have to try to figure out when is a safe point to
 * re-throw it), and the behavior seems reasonable:
 *
 * * If you aren't pausing on exceptions, you get an error in the console with
 *   the correct stack trace.
 * * If you're pausing on all exceptions, the debugger will pause on your
 *   exception and then again when we rethrow it.
 * * If you're only pausing on uncaught exceptions, the debugger will only pause
 *   on us re-throwing it.
 *
 * @param fn - The code to guard.
 */ const exceptionGuard = function(fn) {
    try {
        fn();
    } catch (e) {
        // Re-throw exception when it's safe.
        setTimeout(()=>{
            // It used to be that "throw e" would result in a good console error with
            // relevant context, but as of Chrome 39, you just get the firebase.js
            // file/line number where we re-throw it, which is useless. So we log
            // e.stack explicitly.
            const stack = e.stack || '';
            warn('Exception was thrown by user callback.', stack);
            throw e;
        }, Math.floor(0));
    }
};
/**
 * @returns {boolean} true if we think we're currently being crawled.
 */ const beingCrawled = function() {
    const userAgent = typeof window === 'object' && window['navigator'] && window['navigator']['userAgent'] || '';
    // For now we whitelist the most popular crawlers.  We should refine this to be the set of crawlers we
    // believe to support JavaScript/AJAX rendering.
    // NOTE: Google Webmaster Tools doesn't really belong, but their "This is how a visitor to your website
    // would have seen the page" is flaky if we don't treat it as a crawler.
    return userAgent.search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i) >= 0;
};
/**
 * Same as setTimeout() except on Node.JS it will /not/ prevent the process from exiting.
 *
 * It is removed with clearTimeout() as normal.
 *
 * @param fn - Function to run.
 * @param time - Milliseconds to wait before running.
 * @returns The setTimeout() return value.
 */ const setTimeoutNonBlocking = function(fn, time) {
    const timeout = setTimeout(fn, time);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (typeof timeout === 'object' && timeout['unref']) // eslint-disable-next-line @typescript-eslint/no-explicit-any
    timeout['unref']();
    return timeout;
};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Abstraction around AppCheck's token fetching capabilities.
 */ class AppCheckTokenProvider {
    constructor(appName_, appCheckProvider){
        this.appName_ = appName_;
        this.appCheckProvider = appCheckProvider;
        this.appCheck = appCheckProvider === null || appCheckProvider === void 0 ? void 0 : appCheckProvider.getImmediate({
            optional: true
        });
        if (!this.appCheck) appCheckProvider === null || appCheckProvider === void 0 || appCheckProvider.get().then((appCheck)=>this.appCheck = appCheck
        );
    }
    getToken(forceRefresh) {
        if (!this.appCheck) return new Promise((resolve, reject)=>{
            // Support delayed initialization of FirebaseAppCheck. This allows our
            // customers to initialize the RTDB SDK before initializing Firebase
            // AppCheck and ensures that all requests are authenticated if a token
            // becomes available before the timoeout below expires.
            setTimeout(()=>{
                if (this.appCheck) this.getToken(forceRefresh).then(resolve, reject);
                else resolve(null);
            }, 0);
        });
        return this.appCheck.getToken(forceRefresh);
    }
    addTokenChangeListener(listener) {
        var _a;
        (_a = this.appCheckProvider) === null || _a === void 0 || _a.get().then((appCheck)=>appCheck.addTokenListener(listener)
        );
    }
    notifyForInvalidToken() {
        warn(`Provided AppCheck credentials for the app named "${this.appName_}" ` + 'are invalid. This usually indicates your app was not initialized correctly.');
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Abstraction around FirebaseApp's token fetching capabilities.
 */ class FirebaseAuthTokenProvider {
    constructor(appName_, firebaseOptions_, authProvider_){
        this.appName_ = appName_;
        this.firebaseOptions_ = firebaseOptions_;
        this.authProvider_ = authProvider_;
        this.auth_ = null;
        this.auth_ = authProvider_.getImmediate({
            optional: true
        });
        if (!this.auth_) authProvider_.onInit((auth)=>this.auth_ = auth
        );
    }
    getToken(forceRefresh) {
        if (!this.auth_) return new Promise((resolve, reject)=>{
            // Support delayed initialization of FirebaseAuth. This allows our
            // customers to initialize the RTDB SDK before initializing Firebase
            // Auth and ensures that all requests are authenticated if a token
            // becomes available before the timoeout below expires.
            setTimeout(()=>{
                if (this.auth_) this.getToken(forceRefresh).then(resolve, reject);
                else resolve(null);
            }, 0);
        });
        return this.auth_.getToken(forceRefresh).catch((error2)=>{
            // TODO: Need to figure out all the cases this is raised and whether
            // this makes sense.
            if (error2 && error2.code === 'auth/token-not-initialized') {
                log('Got auth/token-not-initialized error.  Treating as null token.');
                return null;
            } else return Promise.reject(error2);
        });
    }
    addTokenChangeListener(listener) {
        // TODO: We might want to wrap the listener and call it with no args to
        // avoid a leaky abstraction, but that makes removing the listener harder.
        if (this.auth_) this.auth_.addAuthTokenListener(listener);
        else this.authProvider_.get().then((auth)=>auth.addAuthTokenListener(listener)
        );
    }
    removeTokenChangeListener(listener) {
        this.authProvider_.get().then((auth)=>auth.removeAuthTokenListener(listener)
        );
    }
    notifyForInvalidToken() {
        let errorMessage = 'Provided authentication credentials for the app named "' + this.appName_ + '" are invalid. This usually indicates your app was not ' + 'initialized correctly. ';
        if ('credential' in this.firebaseOptions_) errorMessage += "Make sure the \"credential\" property provided to initializeApp() is authorized to access the specified \"databaseURL\" and is from the correct project.";
        else if ('serviceAccount' in this.firebaseOptions_) errorMessage += "Make sure the \"serviceAccount\" property provided to initializeApp() is authorized to access the specified \"databaseURL\" and is from the correct project.";
        else errorMessage += "Make sure the \"apiKey\" and \"databaseURL\" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.";
        warn(errorMessage);
    }
}
/* AuthTokenProvider that supplies a constant token. Used by Admin SDK or mockUserToken with emulators. */ class EmulatorTokenProvider {
    constructor(accessToken){
        this.accessToken = accessToken;
    }
    getToken(forceRefresh) {
        return Promise.resolve({
            accessToken: this.accessToken
        });
    }
    addTokenChangeListener(listener) {
        // Invoke the listener immediately to match the behavior in Firebase Auth
        // (see packages/auth/src/auth.js#L1807)
        listener(this.accessToken);
    }
    removeTokenChangeListener(listener) {
    }
    notifyForInvalidToken() {
    }
}
/** A string that is treated as an admin access token by the RTDB emulator. Used by Admin SDK. */ EmulatorTokenProvider.OWNER = 'owner';
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const PROTOCOL_VERSION = '5';
const VERSION_PARAM = 'v';
const TRANSPORT_SESSION_PARAM = 's';
const REFERER_PARAM = 'r';
const FORGE_REF = 'f';
// Matches console.firebase.google.com, firebase-console-*.corp.google.com and
// firebase.corp.google.com
const FORGE_DOMAIN_RE = /(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/;
const LAST_SESSION_PARAM = 'ls';
const APPLICATION_ID_PARAM = 'p';
const APP_CHECK_TOKEN_PARAM = 'ac';
const WEBSOCKET = 'websocket';
const LONG_POLLING = 'long_polling';
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A class that holds metadata about a Repo object
 */ class RepoInfo {
    /**
     * @param host - Hostname portion of the url for the repo
     * @param secure - Whether or not this repo is accessed over ssl
     * @param namespace - The namespace represented by the repo
     * @param webSocketOnly - Whether to prefer websockets over all other transports (used by Nest).
     * @param nodeAdmin - Whether this instance uses Admin SDK credentials
     * @param persistenceKey - Override the default session persistence storage key
     */ constructor(host, secure, namespace, webSocketOnly, nodeAdmin = false, persistenceKey = '', includeNamespaceInQueryParams = false){
        this.secure = secure;
        this.namespace = namespace;
        this.webSocketOnly = webSocketOnly;
        this.nodeAdmin = nodeAdmin;
        this.persistenceKey = persistenceKey;
        this.includeNamespaceInQueryParams = includeNamespaceInQueryParams;
        this._host = host.toLowerCase();
        this._domain = this._host.substr(this._host.indexOf('.') + 1);
        this.internalHost = PersistentStorage.get('host:' + host) || this._host;
    }
    isCacheableHost() {
        return this.internalHost.substr(0, 2) === 's-';
    }
    isCustomHost() {
        return this._domain !== 'firebaseio.com' && this._domain !== 'firebaseio-demo.com';
    }
    get host() {
        return this._host;
    }
    set host(newHost) {
        if (newHost !== this.internalHost) {
            this.internalHost = newHost;
            if (this.isCacheableHost()) PersistentStorage.set('host:' + this._host, this.internalHost);
        }
    }
    toString() {
        let str = this.toURLString();
        if (this.persistenceKey) str += '<' + this.persistenceKey + '>';
        return str;
    }
    toURLString() {
        const protocol = this.secure ? 'https://' : 'http://';
        const query2 = this.includeNamespaceInQueryParams ? `?ns=${this.namespace}` : '';
        return `${protocol}${this.host}/${query2}`;
    }
}
function repoInfoNeedsQueryParam(repoInfo) {
    return repoInfo.host !== repoInfo.internalHost || repoInfo.isCustomHost() || repoInfo.includeNamespaceInQueryParams;
}
/**
 * Returns the websocket URL for this repo
 * @param repoInfo - RepoInfo object
 * @param type - of connection
 * @param params - list
 * @returns The URL for this repo
 */ function repoInfoConnectionURL(repoInfo, type, params) {
    _util.assert(typeof type === 'string', 'typeof type must == string');
    _util.assert(typeof params === 'object', 'typeof params must == object');
    let connURL;
    if (type === WEBSOCKET) connURL = (repoInfo.secure ? 'wss://' : 'ws://') + repoInfo.internalHost + '/.ws?';
    else if (type === LONG_POLLING) connURL = (repoInfo.secure ? 'https://' : 'http://') + repoInfo.internalHost + '/.lp?';
    else throw new Error('Unknown connection type: ' + type);
    if (repoInfoNeedsQueryParam(repoInfo)) params['ns'] = repoInfo.namespace;
    const pairs = [];
    each(params, (key, value)=>{
        pairs.push(key + '=' + value);
    });
    return connURL + pairs.join('&');
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Tracks a collection of stats.
 */ class StatsCollection {
    constructor(){
        this.counters_ = {
        };
    }
    incrementCounter(name2, amount = 1) {
        if (!_util.contains(this.counters_, name2)) this.counters_[name2] = 0;
        this.counters_[name2] += amount;
    }
    get() {
        return _util.deepCopy(this.counters_);
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const collections = {
};
const reporters = {
};
function statsManagerGetCollection(repoInfo) {
    const hashString = repoInfo.toString();
    if (!collections[hashString]) collections[hashString] = new StatsCollection();
    return collections[hashString];
}
function statsManagerGetOrCreateReporter(repoInfo, creatorFunction) {
    const hashString = repoInfo.toString();
    if (!reporters[hashString]) reporters[hashString] = creatorFunction();
    return reporters[hashString];
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * This class ensures the packets from the server arrive in order
 * This class takes data from the server and ensures it gets passed into the callbacks in order.
 */ class PacketReceiver {
    /**
     * @param onMessage_
     */ constructor(onMessage_){
        this.onMessage_ = onMessage_;
        this.pendingResponses = [];
        this.currentResponseNum = 0;
        this.closeAfterResponse = -1;
        this.onClose = null;
    }
    closeAfter(responseNum, callback) {
        this.closeAfterResponse = responseNum;
        this.onClose = callback;
        if (this.closeAfterResponse < this.currentResponseNum) {
            this.onClose();
            this.onClose = null;
        }
    }
    /**
     * Each message from the server comes with a response number, and an array of data. The responseNumber
     * allows us to ensure that we process them in the right order, since we can't be guaranteed that all
     * browsers will respond in the same order as the requests we sent
     */ handleResponse(requestNum, data) {
        this.pendingResponses[requestNum] = data;
        while(this.pendingResponses[this.currentResponseNum]){
            const toProcess = this.pendingResponses[this.currentResponseNum];
            delete this.pendingResponses[this.currentResponseNum];
            for(let i = 0; i < toProcess.length; ++i)if (toProcess[i]) exceptionGuard(()=>{
                this.onMessage_(toProcess[i]);
            });
            if (this.currentResponseNum === this.closeAfterResponse) {
                if (this.onClose) {
                    this.onClose();
                    this.onClose = null;
                }
                break;
            }
            this.currentResponseNum++;
        }
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // URL query parameters associated with longpolling
const FIREBASE_LONGPOLL_START_PARAM = 'start';
const FIREBASE_LONGPOLL_CLOSE_COMMAND = 'close';
const FIREBASE_LONGPOLL_COMMAND_CB_NAME = 'pLPCommand';
const FIREBASE_LONGPOLL_DATA_CB_NAME = 'pRTLPCB';
const FIREBASE_LONGPOLL_ID_PARAM = 'id';
const FIREBASE_LONGPOLL_PW_PARAM = 'pw';
const FIREBASE_LONGPOLL_SERIAL_PARAM = 'ser';
const FIREBASE_LONGPOLL_CALLBACK_ID_PARAM = 'cb';
const FIREBASE_LONGPOLL_SEGMENT_NUM_PARAM = 'seg';
const FIREBASE_LONGPOLL_SEGMENTS_IN_PACKET = 'ts';
const FIREBASE_LONGPOLL_DATA_PARAM = 'd';
const FIREBASE_LONGPOLL_DISCONN_FRAME_REQUEST_PARAM = 'dframe';
//Data size constants.
//TODO: Perf: the maximum length actually differs from browser to browser.
// We should check what browser we're on and set accordingly.
const MAX_URL_DATA_SIZE = 1870;
const SEG_HEADER_SIZE = 30; //ie: &seg=8299234&ts=982389123&d=
const MAX_PAYLOAD_SIZE = MAX_URL_DATA_SIZE - SEG_HEADER_SIZE;
/**
 * Keepalive period
 * send a fresh request at minimum every 25 seconds. Opera has a maximum request
 * length of 30 seconds that we can't exceed.
 */ const KEEPALIVE_REQUEST_INTERVAL = 25000;
/**
 * How long to wait before aborting a long-polling connection attempt.
 */ const LP_CONNECT_TIMEOUT = 30000;
/**
 * This class manages a single long-polling connection.
 */ class BrowserPollConnection {
    /**
     * @param connId An identifier for this connection, used for logging
     * @param repoInfo The info for the endpoint to send data to.
     * @param applicationId The Firebase App ID for this project.
     * @param appCheckToken The AppCheck token for this client.
     * @param authToken The AuthToken to use for this connection.
     * @param transportSessionId Optional transportSessionid if we are
     * reconnecting for an existing transport session
     * @param lastSessionId Optional lastSessionId if the PersistentConnection has
     * already created a connection previously
     */ constructor(connId, repoInfo, applicationId, appCheckToken, authToken, transportSessionId, lastSessionId){
        this.connId = connId;
        this.repoInfo = repoInfo;
        this.applicationId = applicationId;
        this.appCheckToken = appCheckToken;
        this.authToken = authToken;
        this.transportSessionId = transportSessionId;
        this.lastSessionId = lastSessionId;
        this.bytesSent = 0;
        this.bytesReceived = 0;
        this.everConnected_ = false;
        this.log_ = logWrapper(connId);
        this.stats_ = statsManagerGetCollection(repoInfo);
        this.urlFn = (params)=>{
            // Always add the token if we have one.
            if (this.appCheckToken) params[APP_CHECK_TOKEN_PARAM] = this.appCheckToken;
            return repoInfoConnectionURL(repoInfo, LONG_POLLING, params);
        };
    }
    /**
     * @param onMessage - Callback when messages arrive
     * @param onDisconnect - Callback with connection lost.
     */ open(onMessage, onDisconnect1) {
        this.curSegmentNum = 0;
        this.onDisconnect_ = onDisconnect1;
        this.myPacketOrderer = new PacketReceiver(onMessage);
        this.isClosed_ = false;
        this.connectTimeoutTimer_ = setTimeout(()=>{
            this.log_('Timed out trying to connect.');
            // Make sure we clear the host cache
            this.onClosed_();
            this.connectTimeoutTimer_ = null;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        }, Math.floor(LP_CONNECT_TIMEOUT));
        // Ensure we delay the creation of the iframe until the DOM is loaded.
        executeWhenDOMReady(()=>{
            if (this.isClosed_) return;
            //Set up a callback that gets triggered once a connection is set up.
            this.scriptTagHolder = new FirebaseIFrameScriptHolder((...args)=>{
                const [command, arg1, arg2, arg3, arg4] = args;
                this.incrementIncomingBytes_(args);
                if (!this.scriptTagHolder) return; // we closed the connection.
                if (this.connectTimeoutTimer_) {
                    clearTimeout(this.connectTimeoutTimer_);
                    this.connectTimeoutTimer_ = null;
                }
                this.everConnected_ = true;
                if (command === FIREBASE_LONGPOLL_START_PARAM) {
                    this.id = arg1;
                    this.password = arg2;
                } else if (command === FIREBASE_LONGPOLL_CLOSE_COMMAND) {
                    // Don't clear the host cache. We got a response from the server, so we know it's reachable
                    if (arg1) {
                        // We aren't expecting any more data (other than what the server's already in the process of sending us
                        // through our already open polls), so don't send any more.
                        this.scriptTagHolder.sendNewPolls = false;
                        // arg1 in this case is the last response number sent by the server. We should try to receive
                        // all of the responses up to this one before closing
                        this.myPacketOrderer.closeAfter(arg1, ()=>{
                            this.onClosed_();
                        });
                    } else this.onClosed_();
                } else throw new Error('Unrecognized command received: ' + command);
            }, (...args)=>{
                const [pN, data] = args;
                this.incrementIncomingBytes_(args);
                this.myPacketOrderer.handleResponse(pN, data);
            }, ()=>{
                this.onClosed_();
            }, this.urlFn);
            //Send the initial request to connect. The serial number is simply to keep the browser from pulling previous results
            //from cache.
            const urlParams = {
            };
            urlParams[FIREBASE_LONGPOLL_START_PARAM] = 't';
            urlParams[FIREBASE_LONGPOLL_SERIAL_PARAM] = Math.floor(Math.random() * 100000000);
            if (this.scriptTagHolder.uniqueCallbackIdentifier) urlParams[FIREBASE_LONGPOLL_CALLBACK_ID_PARAM] = this.scriptTagHolder.uniqueCallbackIdentifier;
            urlParams[VERSION_PARAM] = PROTOCOL_VERSION;
            if (this.transportSessionId) urlParams[TRANSPORT_SESSION_PARAM] = this.transportSessionId;
            if (this.lastSessionId) urlParams[LAST_SESSION_PARAM] = this.lastSessionId;
            if (this.applicationId) urlParams[APPLICATION_ID_PARAM] = this.applicationId;
            if (this.appCheckToken) urlParams[APP_CHECK_TOKEN_PARAM] = this.appCheckToken;
            if (typeof location !== 'undefined' && location.hostname && FORGE_DOMAIN_RE.test(location.hostname)) urlParams[REFERER_PARAM] = FORGE_REF;
            const connectURL = this.urlFn(urlParams);
            this.log_('Connecting via long-poll to ' + connectURL);
            this.scriptTagHolder.addTag(connectURL, ()=>{
            /* do nothing */ });
        });
    }
    /**
     * Call this when a handshake has completed successfully and we want to consider the connection established
     */ start() {
        this.scriptTagHolder.startLongPoll(this.id, this.password);
        this.addDisconnectPingFrame(this.id, this.password);
    }
    /**
     * Forces long polling to be considered as a potential transport
     */ static forceAllow() {
        BrowserPollConnection.forceAllow_ = true;
    }
    /**
     * Forces longpolling to not be considered as a potential transport
     */ static forceDisallow() {
        BrowserPollConnection.forceDisallow_ = true;
    }
    // Static method, use string literal so it can be accessed in a generic way
    static isAvailable() {
        if (_util.isNodeSdk()) return false;
        else if (BrowserPollConnection.forceAllow_) return true;
        else // NOTE: In React-Native there's normally no 'document', but if you debug a React-Native app in
        // the Chrome debugger, 'document' is defined, but document.createElement is null (2015/06/08).
        return !BrowserPollConnection.forceDisallow_ && typeof document !== 'undefined' && document.createElement != null && !isChromeExtensionContentScript() && !isWindowsStoreApp();
    }
    /**
     * No-op for polling
     */ markConnectionHealthy() {
    }
    /**
     * Stops polling and cleans up the iframe
     */ shutdown_() {
        this.isClosed_ = true;
        if (this.scriptTagHolder) {
            this.scriptTagHolder.close();
            this.scriptTagHolder = null;
        }
        //remove the disconnect frame, which will trigger an XHR call to the server to tell it we're leaving.
        if (this.myDisconnFrame) {
            document.body.removeChild(this.myDisconnFrame);
            this.myDisconnFrame = null;
        }
        if (this.connectTimeoutTimer_) {
            clearTimeout(this.connectTimeoutTimer_);
            this.connectTimeoutTimer_ = null;
        }
    }
    /**
     * Triggered when this transport is closed
     */ onClosed_() {
        if (!this.isClosed_) {
            this.log_('Longpoll is closing itself');
            this.shutdown_();
            if (this.onDisconnect_) {
                this.onDisconnect_(this.everConnected_);
                this.onDisconnect_ = null;
            }
        }
    }
    /**
     * External-facing close handler. RealTime has requested we shut down. Kill our connection and tell the server
     * that we've left.
     */ close() {
        if (!this.isClosed_) {
            this.log_('Longpoll is being closed.');
            this.shutdown_();
        }
    }
    /**
     * Send the JSON object down to the server. It will need to be stringified, base64 encoded, and then
     * broken into chunks (since URLs have a small maximum length).
     * @param data - The JSON data to transmit.
     */ send(data) {
        const dataStr = _util.stringify(data);
        this.bytesSent += dataStr.length;
        this.stats_.incrementCounter('bytes_sent', dataStr.length);
        //first, lets get the base64-encoded data
        const base64data = _util.base64Encode(dataStr);
        //We can only fit a certain amount in each URL, so we need to split this request
        //up into multiple pieces if it doesn't fit in one request.
        const dataSegs = splitStringBySize(base64data, MAX_PAYLOAD_SIZE);
        //Enqueue each segment for transmission. We assign each chunk a sequential ID and a total number
        //of segments so that we can reassemble the packet on the server.
        for(let i = 0; i < dataSegs.length; i++){
            this.scriptTagHolder.enqueueSegment(this.curSegmentNum, dataSegs.length, dataSegs[i]);
            this.curSegmentNum++;
        }
    }
    /**
     * This is how we notify the server that we're leaving.
     * We aren't able to send requests with DHTML on a window close event, but we can
     * trigger XHR requests in some browsers (everything but Opera basically).
     */ addDisconnectPingFrame(id, pw) {
        if (_util.isNodeSdk()) return;
        this.myDisconnFrame = document.createElement('iframe');
        const urlParams = {
        };
        urlParams[FIREBASE_LONGPOLL_DISCONN_FRAME_REQUEST_PARAM] = 't';
        urlParams[FIREBASE_LONGPOLL_ID_PARAM] = id;
        urlParams[FIREBASE_LONGPOLL_PW_PARAM] = pw;
        this.myDisconnFrame.src = this.urlFn(urlParams);
        this.myDisconnFrame.style.display = 'none';
        document.body.appendChild(this.myDisconnFrame);
    }
    /**
     * Used to track the bytes received by this client
     */ incrementIncomingBytes_(args) {
        // TODO: This is an annoying perf hit just to track the number of incoming bytes.  Maybe it should be opt-in.
        const bytesReceived = _util.stringify(args).length;
        this.bytesReceived += bytesReceived;
        this.stats_.incrementCounter('bytes_received', bytesReceived);
    }
}
/*********************************************************************************************
 * A wrapper around an iframe that is used as a long-polling script holder.
 *********************************************************************************************/ class FirebaseIFrameScriptHolder {
    /**
     * @param commandCB - The callback to be called when control commands are recevied from the server.
     * @param onMessageCB - The callback to be triggered when responses arrive from the server.
     * @param onDisconnect - The callback to be triggered when this tag holder is closed
     * @param urlFn - A function that provides the URL of the endpoint to send data to.
     */ constructor(commandCB, onMessageCB, onDisconnect2, urlFn){
        this.onDisconnect = onDisconnect2;
        this.urlFn = urlFn;
        //We maintain a count of all of the outstanding requests, because if we have too many active at once it can cause
        //problems in some browsers.
        this.outstandingRequests = new Set();
        //A queue of the pending segments waiting for transmission to the server.
        this.pendingSegs = [];
        //A serial number. We use this for two things:
        // 1) A way to ensure the browser doesn't cache responses to polls
        // 2) A way to make the server aware when long-polls arrive in a different order than we started them. The
        //    server needs to release both polls in this case or it will cause problems in Opera since Opera can only execute
        //    JSONP code in the order it was added to the iframe.
        this.currentSerial = Math.floor(Math.random() * 100000000);
        // This gets set to false when we're "closing down" the connection (e.g. we're switching transports but there's still
        // incoming data from the server that we're waiting for).
        this.sendNewPolls = true;
        if (!_util.isNodeSdk()) {
            //Each script holder registers a couple of uniquely named callbacks with the window. These are called from the
            //iframes where we put the long-polling script tags. We have two callbacks:
            //   1) Command Callback - Triggered for control issues, like starting a connection.
            //   2) Message Callback - Triggered when new data arrives.
            this.uniqueCallbackIdentifier = LUIDGenerator();
            window[FIREBASE_LONGPOLL_COMMAND_CB_NAME + this.uniqueCallbackIdentifier] = commandCB;
            window[FIREBASE_LONGPOLL_DATA_CB_NAME + this.uniqueCallbackIdentifier] = onMessageCB;
            //Create an iframe for us to add script tags to.
            this.myIFrame = FirebaseIFrameScriptHolder.createIFrame_();
            // Set the iframe's contents.
            let script = '';
            // if we set a javascript url, it's IE and we need to set the document domain. The javascript url is sufficient
            // for ie9, but ie8 needs to do it again in the document itself.
            if (this.myIFrame.src && this.myIFrame.src.substr(0, 11) === 'javascript:') {
                const currentDomain = document.domain;
                script = '<script>document.domain="' + currentDomain + '";</script>';
            }
            const iframeContents = '<html><body>' + script + '</body></html>';
            try {
                this.myIFrame.doc.open();
                this.myIFrame.doc.write(iframeContents);
                this.myIFrame.doc.close();
            } catch (e) {
                log('frame writing exception');
                if (e.stack) log(e.stack);
                log(e);
            }
        } else {
            this.commandCB = commandCB;
            this.onMessageCB = onMessageCB;
        }
    }
    /**
     * Each browser has its own funny way to handle iframes. Here we mush them all together into one object that I can
     * actually use.
     */ static createIFrame_() {
        const iframe = document.createElement('iframe');
        iframe.style.display = 'none';
        // This is necessary in order to initialize the document inside the iframe
        if (document.body) {
            document.body.appendChild(iframe);
            try {
                // If document.domain has been modified in IE, this will throw an error, and we need to set the
                // domain of the iframe's document manually. We can do this via a javascript: url as the src attribute
                // Also note that we must do this *after* the iframe has been appended to the page. Otherwise it doesn't work.
                const a = iframe.contentWindow.document;
                if (!a) // Apologies for the log-spam, I need to do something to keep closure from optimizing out the assignment above.
                log('No IE domain setting required');
            } catch (e) {
                const domain = document.domain;
                iframe.src = "javascript:void((function(){document.open();document.domain='" + domain + "';document.close();})())";
            }
        } else // LongPollConnection attempts to delay initialization until the document is ready, so hopefully this
        // never gets hit.
        throw 'Document body has not initialized. Wait to initialize Firebase until after the document is ready.';
        // Get the document of the iframe in a browser-specific way.
        if (iframe.contentDocument) iframe.doc = iframe.contentDocument; // Firefox, Opera, Safari
        else if (iframe.contentWindow) iframe.doc = iframe.contentWindow.document; // Internet Explorer
        else if (iframe.document) // eslint-disable-next-line @typescript-eslint/no-explicit-any
        iframe.doc = iframe.document; //others?
        return iframe;
    }
    /**
     * Cancel all outstanding queries and remove the frame.
     */ close() {
        //Mark this iframe as dead, so no new requests are sent.
        this.alive = false;
        if (this.myIFrame) {
            //We have to actually remove all of the html inside this iframe before removing it from the
            //window, or IE will continue loading and executing the script tags we've already added, which
            //can lead to some errors being thrown. Setting innerHTML seems to be the easiest way to do this.
            this.myIFrame.doc.body.innerHTML = '';
            setTimeout(()=>{
                if (this.myIFrame !== null) {
                    document.body.removeChild(this.myIFrame);
                    this.myIFrame = null;
                }
            }, Math.floor(0));
        }
        // Protect from being called recursively.
        const onDisconnect3 = this.onDisconnect;
        if (onDisconnect3) {
            this.onDisconnect = null;
            onDisconnect3();
        }
    }
    /**
     * Actually start the long-polling session by adding the first script tag(s) to the iframe.
     * @param id - The ID of this connection
     * @param pw - The password for this connection
     */ startLongPoll(id, pw) {
        this.myID = id;
        this.myPW = pw;
        this.alive = true;
        //send the initial request. If there are requests queued, make sure that we transmit as many as we are currently able to.
        while(this.newRequest_());
    }
    /**
     * This is called any time someone might want a script tag to be added. It adds a script tag when there aren't
     * too many outstanding requests and we are still alive.
     *
     * If there are outstanding packet segments to send, it sends one. If there aren't, it sends a long-poll anyways if
     * needed.
     */ newRequest_() {
        // We keep one outstanding request open all the time to receive data, but if we need to send data
        // (pendingSegs.length > 0) then we create a new request to send the data.  The server will automatically
        // close the old request.
        if (this.alive && this.sendNewPolls && this.outstandingRequests.size < (this.pendingSegs.length > 0 ? 2 : 1)) {
            //construct our url
            this.currentSerial++;
            const urlParams = {
            };
            urlParams[FIREBASE_LONGPOLL_ID_PARAM] = this.myID;
            urlParams[FIREBASE_LONGPOLL_PW_PARAM] = this.myPW;
            urlParams[FIREBASE_LONGPOLL_SERIAL_PARAM] = this.currentSerial;
            let theURL = this.urlFn(urlParams);
            //Now add as much data as we can.
            let curDataString = '';
            let i = 0;
            while(this.pendingSegs.length > 0){
                //first, lets see if the next segment will fit.
                const nextSeg = this.pendingSegs[0];
                if (nextSeg.d.length + SEG_HEADER_SIZE + curDataString.length <= MAX_URL_DATA_SIZE) {
                    //great, the segment will fit. Lets append it.
                    const theSeg = this.pendingSegs.shift();
                    curDataString = curDataString + '&' + FIREBASE_LONGPOLL_SEGMENT_NUM_PARAM + i + '=' + theSeg.seg + '&' + FIREBASE_LONGPOLL_SEGMENTS_IN_PACKET + i + '=' + theSeg.ts + '&' + FIREBASE_LONGPOLL_DATA_PARAM + i + '=' + theSeg.d;
                    i++;
                } else break;
            }
            theURL = theURL + curDataString;
            this.addLongPollTag_(theURL, this.currentSerial);
            return true;
        } else return false;
    }
    /**
     * Queue a packet for transmission to the server.
     * @param segnum - A sequential id for this packet segment used for reassembly
     * @param totalsegs - The total number of segments in this packet
     * @param data - The data for this segment.
     */ enqueueSegment(segnum, totalsegs, data) {
        //add this to the queue of segments to send.
        this.pendingSegs.push({
            seg: segnum,
            ts: totalsegs,
            d: data
        });
        //send the data immediately if there isn't already data being transmitted, unless
        //startLongPoll hasn't been called yet.
        if (this.alive) this.newRequest_();
    }
    /**
     * Add a script tag for a regular long-poll request.
     * @param url - The URL of the script tag.
     * @param serial - The serial number of the request.
     */ addLongPollTag_(url, serial) {
        //remember that we sent this request.
        this.outstandingRequests.add(serial);
        const doNewRequest = ()=>{
            this.outstandingRequests.delete(serial);
            this.newRequest_();
        };
        // If this request doesn't return on its own accord (by the server sending us some data), we'll
        // create a new one after the KEEPALIVE interval to make sure we always keep a fresh request open.
        const keepaliveTimeout = setTimeout(doNewRequest, Math.floor(KEEPALIVE_REQUEST_INTERVAL));
        const readyStateCB = ()=>{
            // Request completed.  Cancel the keepalive.
            clearTimeout(keepaliveTimeout);
            // Trigger a new request so we can continue receiving data.
            doNewRequest();
        };
        this.addTag(url, readyStateCB);
    }
    /**
     * Add an arbitrary script tag to the iframe.
     * @param url - The URL for the script tag source.
     * @param loadCB - A callback to be triggered once the script has loaded.
     */ addTag(url, loadCB) {
        if (_util.isNodeSdk()) // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.doNodeLongPoll(url, loadCB);
        else setTimeout(()=>{
            try {
                // if we're already closed, don't add this poll
                if (!this.sendNewPolls) return;
                const newScript = this.myIFrame.doc.createElement('script');
                newScript.type = 'text/javascript';
                newScript.async = true;
                newScript.src = url;
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                newScript.onload = newScript.onreadystatechange = function() {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    const rstate = newScript.readyState;
                    if (!rstate || rstate === 'loaded' || rstate === 'complete') {
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        newScript.onload = newScript.onreadystatechange = null;
                        if (newScript.parentNode) newScript.parentNode.removeChild(newScript);
                        loadCB();
                    }
                };
                newScript.onerror = ()=>{
                    log('Long-poll script failed to load: ' + url);
                    this.sendNewPolls = false;
                    this.close();
                };
                this.myIFrame.doc.body.appendChild(newScript);
            } catch (e) {
            // TODO: we should make this error visible somehow
            }
        }, Math.floor(1));
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const WEBSOCKET_MAX_FRAME_SIZE = 16384;
const WEBSOCKET_KEEPALIVE_INTERVAL = 45000;
let WebSocketImpl = null;
if (typeof MozWebSocket !== 'undefined') WebSocketImpl = MozWebSocket;
else if (typeof WebSocket !== 'undefined') WebSocketImpl = WebSocket;
/**
 * Create a new websocket connection with the given callbacks.
 */ class WebSocketConnection {
    /**
     * @param connId identifier for this transport
     * @param repoInfo The info for the websocket endpoint.
     * @param applicationId The Firebase App ID for this project.
     * @param appCheckToken The App Check Token for this client.
     * @param authToken The Auth Token for this client.
     * @param transportSessionId Optional transportSessionId if this is connecting
     * to an existing transport session
     * @param lastSessionId Optional lastSessionId if there was a previous
     * connection
     */ constructor(connId, repoInfo, applicationId, appCheckToken, authToken, transportSessionId, lastSessionId){
        this.connId = connId;
        this.applicationId = applicationId;
        this.appCheckToken = appCheckToken;
        this.authToken = authToken;
        this.keepaliveTimer = null;
        this.frames = null;
        this.totalFrames = 0;
        this.bytesSent = 0;
        this.bytesReceived = 0;
        this.log_ = logWrapper(this.connId);
        this.stats_ = statsManagerGetCollection(repoInfo);
        this.connURL = WebSocketConnection.connectionURL_(repoInfo, transportSessionId, lastSessionId, appCheckToken);
        this.nodeAdmin = repoInfo.nodeAdmin;
    }
    /**
     * @param repoInfo - The info for the websocket endpoint.
     * @param transportSessionId - Optional transportSessionId if this is connecting to an existing transport
     *                                         session
     * @param lastSessionId - Optional lastSessionId if there was a previous connection
     * @returns connection url
     */ static connectionURL_(repoInfo, transportSessionId, lastSessionId, appCheckToken) {
        const urlParams = {
        };
        urlParams[VERSION_PARAM] = PROTOCOL_VERSION;
        if (!_util.isNodeSdk() && typeof location !== 'undefined' && location.hostname && FORGE_DOMAIN_RE.test(location.hostname)) urlParams[REFERER_PARAM] = FORGE_REF;
        if (transportSessionId) urlParams[TRANSPORT_SESSION_PARAM] = transportSessionId;
        if (lastSessionId) urlParams[LAST_SESSION_PARAM] = lastSessionId;
        if (appCheckToken) urlParams[APP_CHECK_TOKEN_PARAM] = appCheckToken;
        return repoInfoConnectionURL(repoInfo, WEBSOCKET, urlParams);
    }
    /**
     * @param onMessage - Callback when messages arrive
     * @param onDisconnect - Callback with connection lost.
     */ open(onMessage, onDisconnect4) {
        this.onDisconnect = onDisconnect4;
        this.onMessage = onMessage;
        this.log_('Websocket connecting to ' + this.connURL);
        this.everConnected_ = false;
        // Assume failure until proven otherwise.
        PersistentStorage.set('previous_websocket_failure', true);
        try {
            if (_util.isNodeSdk()) {
                const device = this.nodeAdmin ? 'AdminNode' : 'Node';
                // UA Format: Firebase/<wire_protocol>/<sdk_version>/<platform>/<device>
                const options = {
                    headers: {
                        'User-Agent': `Firebase/${PROTOCOL_VERSION}/${SDK_VERSION}/${process.platform}/${device}`,
                        'X-Firebase-GMPID': this.applicationId || ''
                    }
                };
                // If using Node with admin creds, AppCheck-related checks are unnecessary.
                // Note that we send the credentials here even if they aren't admin credentials, which is
                // not a problem.
                // Note that this header is just used to bypass appcheck, and the token should still be sent
                // through the websocket connection once it is established.
                if (this.authToken) options.headers['Authorization'] = `Bearer ${this.authToken}`;
                if (this.appCheckToken) options.headers['X-Firebase-AppCheck'] = this.appCheckToken;
                // Plumb appropriate http_proxy environment variable into faye-websocket if it exists.
                const env = {
                };
                const proxy = this.connURL.indexOf('wss://') === 0 ? env['HTTPS_PROXY'] || env['https_proxy'] : env['HTTP_PROXY'] || env['http_proxy'];
                if (proxy) options['proxy'] = {
                    origin: proxy
                };
                this.mySock = new WebSocketImpl(this.connURL, [], options);
            } else {
                const options = {
                    headers: {
                        'X-Firebase-GMPID': this.applicationId || '',
                        'X-Firebase-AppCheck': this.appCheckToken || ''
                    }
                };
                this.mySock = new WebSocketImpl(this.connURL, [], options);
            }
        } catch (e1) {
            this.log_('Error instantiating WebSocket.');
            const error3 = e1.message || e1.data;
            if (error3) this.log_(error3);
            this.onClosed_();
            return;
        }
        this.mySock.onopen = ()=>{
            this.log_('Websocket connected.');
            this.everConnected_ = true;
        };
        this.mySock.onclose = ()=>{
            this.log_('Websocket connection was disconnected.');
            this.mySock = null;
            this.onClosed_();
        };
        this.mySock.onmessage = (m)=>{
            this.handleIncomingFrame(m);
        };
        this.mySock.onerror = (e)=>{
            this.log_('WebSocket error.  Closing connection.');
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const error4 = e.message || e.data;
            if (error4) this.log_(error4);
            this.onClosed_();
        };
    }
    /**
     * No-op for websockets, we don't need to do anything once the connection is confirmed as open
     */ start() {
    }
    static forceDisallow() {
        WebSocketConnection.forceDisallow_ = true;
    }
    static isAvailable() {
        let isOldAndroid = false;
        if (typeof navigator !== 'undefined' && navigator.userAgent) {
            const oldAndroidRegex = /Android ([0-9]{0,}\.[0-9]{0,})/;
            const oldAndroidMatch = navigator.userAgent.match(oldAndroidRegex);
            if (oldAndroidMatch && oldAndroidMatch.length > 1) {
                if (parseFloat(oldAndroidMatch[1]) < 4.4) isOldAndroid = true;
            }
        }
        return !isOldAndroid && WebSocketImpl !== null && !WebSocketConnection.forceDisallow_;
    }
    /**
     * Returns true if we previously failed to connect with this transport.
     */ static previouslyFailed() {
        // If our persistent storage is actually only in-memory storage,
        // we default to assuming that it previously failed to be safe.
        return PersistentStorage.isInMemoryStorage || PersistentStorage.get('previous_websocket_failure') === true;
    }
    markConnectionHealthy() {
        PersistentStorage.remove('previous_websocket_failure');
    }
    appendFrame_(data) {
        this.frames.push(data);
        if (this.frames.length === this.totalFrames) {
            const fullMess = this.frames.join('');
            this.frames = null;
            const jsonMess = _util.jsonEval(fullMess);
            //handle the message
            this.onMessage(jsonMess);
        }
    }
    /**
     * @param frameCount - The number of frames we are expecting from the server
     */ handleNewFrameCount_(frameCount) {
        this.totalFrames = frameCount;
        this.frames = [];
    }
    /**
     * Attempts to parse a frame count out of some text. If it can't, assumes a value of 1
     * @returns Any remaining data to be process, or null if there is none
     */ extractFrameCount_(data) {
        _util.assert(this.frames === null, 'We already have a frame buffer');
        // TODO: The server is only supposed to send up to 9999 frames (i.e. length <= 4), but that isn't being enforced
        // currently.  So allowing larger frame counts (length <= 6).  See https://app.asana.com/0/search/8688598998380/8237608042508
        if (data.length <= 6) {
            const frameCount = Number(data);
            if (!isNaN(frameCount)) {
                this.handleNewFrameCount_(frameCount);
                return null;
            }
        }
        this.handleNewFrameCount_(1);
        return data;
    }
    /**
     * Process a websocket frame that has arrived from the server.
     * @param mess - The frame data
     */ handleIncomingFrame(mess) {
        if (this.mySock === null) return; // Chrome apparently delivers incoming packets even after we .close() the connection sometimes.
        const data = mess['data'];
        this.bytesReceived += data.length;
        this.stats_.incrementCounter('bytes_received', data.length);
        this.resetKeepAlive();
        if (this.frames !== null) // we're buffering
        this.appendFrame_(data);
        else {
            // try to parse out a frame count, otherwise, assume 1 and process it
            const remainingData = this.extractFrameCount_(data);
            if (remainingData !== null) this.appendFrame_(remainingData);
        }
    }
    /**
     * Send a message to the server
     * @param data - The JSON object to transmit
     */ send(data) {
        this.resetKeepAlive();
        const dataStr = _util.stringify(data);
        this.bytesSent += dataStr.length;
        this.stats_.incrementCounter('bytes_sent', dataStr.length);
        //We can only fit a certain amount in each websocket frame, so we need to split this request
        //up into multiple pieces if it doesn't fit in one request.
        const dataSegs = splitStringBySize(dataStr, WEBSOCKET_MAX_FRAME_SIZE);
        //Send the length header
        if (dataSegs.length > 1) this.sendString_(String(dataSegs.length));
        //Send the actual data in segments.
        for(let i = 0; i < dataSegs.length; i++)this.sendString_(dataSegs[i]);
    }
    shutdown_() {
        this.isClosed_ = true;
        if (this.keepaliveTimer) {
            clearInterval(this.keepaliveTimer);
            this.keepaliveTimer = null;
        }
        if (this.mySock) {
            this.mySock.close();
            this.mySock = null;
        }
    }
    onClosed_() {
        if (!this.isClosed_) {
            this.log_('WebSocket is closing itself');
            this.shutdown_();
            // since this is an internal close, trigger the close listener
            if (this.onDisconnect) {
                this.onDisconnect(this.everConnected_);
                this.onDisconnect = null;
            }
        }
    }
    /**
     * External-facing close handler.
     * Close the websocket and kill the connection.
     */ close() {
        if (!this.isClosed_) {
            this.log_('WebSocket is being closed');
            this.shutdown_();
        }
    }
    /**
     * Kill the current keepalive timer and start a new one, to ensure that it always fires N seconds after
     * the last activity.
     */ resetKeepAlive() {
        clearInterval(this.keepaliveTimer);
        this.keepaliveTimer = setInterval(()=>{
            //If there has been no websocket activity for a while, send a no-op
            if (this.mySock) this.sendString_('0');
            this.resetKeepAlive();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        }, Math.floor(WEBSOCKET_KEEPALIVE_INTERVAL));
    }
    /**
     * Send a string over the websocket.
     *
     * @param str - String to send.
     */ sendString_(str) {
        // Firefox seems to sometimes throw exceptions (NS_ERROR_UNEXPECTED) from websocket .send()
        // calls for some unknown reason.  We treat these as an error and disconnect.
        // See https://app.asana.com/0/58926111402292/68021340250410
        try {
            this.mySock.send(str);
        } catch (e) {
            this.log_('Exception thrown from WebSocket.send():', e.message || e.data, 'Closing connection.');
            setTimeout(this.onClosed_.bind(this), 0);
        }
    }
}
/**
 * Number of response before we consider the connection "healthy."
 */ WebSocketConnection.responsesRequiredToBeHealthy = 2;
/**
 * Time to wait for the connection te become healthy before giving up.
 */ WebSocketConnection.healthyTimeout = 30000;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Currently simplistic, this class manages what transport a Connection should use at various stages of its
 * lifecycle.
 *
 * It starts with longpolling in a browser, and httppolling on node. It then upgrades to websockets if
 * they are available.
 */ class TransportManager {
    /**
     * @param repoInfo - Metadata around the namespace we're connecting to
     */ constructor(repoInfo){
        this.initTransports_(repoInfo);
    }
    static get ALL_TRANSPORTS() {
        return [
            BrowserPollConnection,
            WebSocketConnection
        ];
    }
    initTransports_(repoInfo) {
        const isWebSocketsAvailable = WebSocketConnection && WebSocketConnection['isAvailable']();
        let isSkipPollConnection = isWebSocketsAvailable && !WebSocketConnection.previouslyFailed();
        if (repoInfo.webSocketOnly) {
            if (!isWebSocketsAvailable) warn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway.");
            isSkipPollConnection = true;
        }
        if (isSkipPollConnection) this.transports_ = [
            WebSocketConnection
        ];
        else {
            const transports = this.transports_ = [];
            for (const transport of TransportManager.ALL_TRANSPORTS)if (transport && transport['isAvailable']()) transports.push(transport);
        }
    }
    /**
     * @returns The constructor for the initial transport to use
     */ initialTransport() {
        if (this.transports_.length > 0) return this.transports_[0];
        else throw new Error('No transports available');
    }
    /**
     * @returns The constructor for the next transport, or null
     */ upgradeTransport() {
        if (this.transports_.length > 1) return this.transports_[1];
        else return null;
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // Abort upgrade attempt if it takes longer than 60s.
const UPGRADE_TIMEOUT = 60000;
// For some transports (WebSockets), we need to "validate" the transport by exchanging a few requests and responses.
// If we haven't sent enough requests within 5s, we'll start sending noop ping requests.
const DELAY_BEFORE_SENDING_EXTRA_REQUESTS = 5000;
// If the initial data sent triggers a lot of bandwidth (i.e. it's a large put or a listen for a large amount of data)
// then we may not be able to exchange our ping/pong requests within the healthy timeout.  So if we reach the timeout
// but we've sent/received enough bytes, we don't cancel the connection.
const BYTES_SENT_HEALTHY_OVERRIDE = 10240;
const BYTES_RECEIVED_HEALTHY_OVERRIDE = 102400;
const MESSAGE_TYPE = 't';
const MESSAGE_DATA = 'd';
const CONTROL_SHUTDOWN = 's';
const CONTROL_RESET = 'r';
const CONTROL_ERROR = 'e';
const CONTROL_PONG = 'o';
const SWITCH_ACK = 'a';
const END_TRANSMISSION = 'n';
const PING = 'p';
const SERVER_HELLO = 'h';
/**
 * Creates a new real-time connection to the server using whichever method works
 * best in the current browser.
 */ class Connection {
    /**
     * @param id - an id for this connection
     * @param repoInfo_ - the info for the endpoint to connect to
     * @param applicationId_ - the Firebase App ID for this project
     * @param appCheckToken_ - The App Check Token for this device.
     * @param authToken_ - The auth token for this session.
     * @param onMessage_ - the callback to be triggered when a server-push message arrives
     * @param onReady_ - the callback to be triggered when this connection is ready to send messages.
     * @param onDisconnect_ - the callback to be triggered when a connection was lost
     * @param onKill_ - the callback to be triggered when this connection has permanently shut down.
     * @param lastSessionId - last session id in persistent connection. is used to clean up old session in real-time server
     */ constructor(id, repoInfo_, applicationId_, appCheckToken_, authToken_, onMessage_, onReady_, onDisconnect_, onKill_, lastSessionId){
        this.id = id;
        this.repoInfo_ = repoInfo_;
        this.applicationId_ = applicationId_;
        this.appCheckToken_ = appCheckToken_;
        this.authToken_ = authToken_;
        this.onMessage_ = onMessage_;
        this.onReady_ = onReady_;
        this.onDisconnect_ = onDisconnect_;
        this.onKill_ = onKill_;
        this.lastSessionId = lastSessionId;
        this.connectionCount = 0;
        this.pendingDataMessages = [];
        this.state_ = 0 /* CONNECTING */ ;
        this.log_ = logWrapper('c:' + this.id + ':');
        this.transportManager_ = new TransportManager(repoInfo_);
        this.log_('Connection created');
        this.start_();
    }
    /**
     * Starts a connection attempt
     */ start_() {
        const conn = this.transportManager_.initialTransport();
        this.conn_ = new conn(this.nextTransportId_(), this.repoInfo_, this.applicationId_, this.appCheckToken_, this.authToken_, null, this.lastSessionId);
        // For certain transports (WebSockets), we need to send and receive several messages back and forth before we
        // can consider the transport healthy.
        this.primaryResponsesRequired_ = conn['responsesRequiredToBeHealthy'] || 0;
        const onMessageReceived = this.connReceiver_(this.conn_);
        const onConnectionLost = this.disconnReceiver_(this.conn_);
        this.tx_ = this.conn_;
        this.rx_ = this.conn_;
        this.secondaryConn_ = null;
        this.isHealthy_ = false;
        /*
         * Firefox doesn't like when code from one iframe tries to create another iframe by way of the parent frame.
         * This can occur in the case of a redirect, i.e. we guessed wrong on what server to connect to and received a reset.
         * Somehow, setTimeout seems to make this ok. That doesn't make sense from a security perspective, since you should
         * still have the context of your originating frame.
         */ setTimeout(()=>{
            // this.conn_ gets set to null in some of the tests. Check to make sure it still exists before using it
            this.conn_ && this.conn_.open(onMessageReceived, onConnectionLost);
        }, Math.floor(0));
        const healthyTimeoutMS = conn['healthyTimeout'] || 0;
        if (healthyTimeoutMS > 0) this.healthyTimeout_ = setTimeoutNonBlocking(()=>{
            this.healthyTimeout_ = null;
            if (!this.isHealthy_) {
                if (this.conn_ && this.conn_.bytesReceived > BYTES_RECEIVED_HEALTHY_OVERRIDE) {
                    this.log_('Connection exceeded healthy timeout but has received ' + this.conn_.bytesReceived + ' bytes.  Marking connection healthy.');
                    this.isHealthy_ = true;
                    this.conn_.markConnectionHealthy();
                } else if (this.conn_ && this.conn_.bytesSent > BYTES_SENT_HEALTHY_OVERRIDE) this.log_('Connection exceeded healthy timeout but has sent ' + this.conn_.bytesSent + ' bytes.  Leaving connection alive.');
                else {
                    this.log_('Closing unhealthy connection after timeout.');
                    this.close();
                }
            }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        }, Math.floor(healthyTimeoutMS));
    }
    nextTransportId_() {
        return 'c:' + this.id + ':' + this.connectionCount++;
    }
    disconnReceiver_(conn) {
        return (everConnected)=>{
            if (conn === this.conn_) this.onConnectionLost_(everConnected);
            else if (conn === this.secondaryConn_) {
                this.log_('Secondary connection lost.');
                this.onSecondaryConnectionLost_();
            } else this.log_('closing an old connection');
        };
    }
    connReceiver_(conn) {
        return (message)=>{
            if (this.state_ !== 2 /* DISCONNECTED */ ) {
                if (conn === this.rx_) this.onPrimaryMessageReceived_(message);
                else if (conn === this.secondaryConn_) this.onSecondaryMessageReceived_(message);
                else this.log_('message on old connection');
            }
        };
    }
    /**
     * @param dataMsg - An arbitrary data message to be sent to the server
     */ sendRequest(dataMsg) {
        // wrap in a data message envelope and send it on
        const msg = {
            t: 'd',
            d: dataMsg
        };
        this.sendData_(msg);
    }
    tryCleanupConnection() {
        if (this.tx_ === this.secondaryConn_ && this.rx_ === this.secondaryConn_) {
            this.log_('cleaning up and promoting a connection: ' + this.secondaryConn_.connId);
            this.conn_ = this.secondaryConn_;
            this.secondaryConn_ = null;
        // the server will shutdown the old connection
        }
    }
    onSecondaryControl_(controlData) {
        if (MESSAGE_TYPE in controlData) {
            const cmd = controlData[MESSAGE_TYPE];
            if (cmd === SWITCH_ACK) this.upgradeIfSecondaryHealthy_();
            else if (cmd === CONTROL_RESET) {
                // Most likely the session wasn't valid. Abandon the switch attempt
                this.log_('Got a reset on secondary, closing it');
                this.secondaryConn_.close();
                // If we were already using this connection for something, than we need to fully close
                if (this.tx_ === this.secondaryConn_ || this.rx_ === this.secondaryConn_) this.close();
            } else if (cmd === CONTROL_PONG) {
                this.log_('got pong on secondary.');
                this.secondaryResponsesRequired_--;
                this.upgradeIfSecondaryHealthy_();
            }
        }
    }
    onSecondaryMessageReceived_(parsedData) {
        const layer = requireKey('t', parsedData);
        const data = requireKey('d', parsedData);
        if (layer === 'c') this.onSecondaryControl_(data);
        else if (layer === 'd') // got a data message, but we're still second connection. Need to buffer it up
        this.pendingDataMessages.push(data);
        else throw new Error('Unknown protocol layer: ' + layer);
    }
    upgradeIfSecondaryHealthy_() {
        if (this.secondaryResponsesRequired_ <= 0) {
            this.log_('Secondary connection is healthy.');
            this.isHealthy_ = true;
            this.secondaryConn_.markConnectionHealthy();
            this.proceedWithUpgrade_();
        } else {
            // Send a ping to make sure the connection is healthy.
            this.log_('sending ping on secondary.');
            this.secondaryConn_.send({
                t: 'c',
                d: {
                    t: PING,
                    d: {
                    }
                }
            });
        }
    }
    proceedWithUpgrade_() {
        // tell this connection to consider itself open
        this.secondaryConn_.start();
        // send ack
        this.log_('sending client ack on secondary');
        this.secondaryConn_.send({
            t: 'c',
            d: {
                t: SWITCH_ACK,
                d: {
                }
            }
        });
        // send end packet on primary transport, switch to sending on this one
        // can receive on this one, buffer responses until end received on primary transport
        this.log_('Ending transmission on primary');
        this.conn_.send({
            t: 'c',
            d: {
                t: END_TRANSMISSION,
                d: {
                }
            }
        });
        this.tx_ = this.secondaryConn_;
        this.tryCleanupConnection();
    }
    onPrimaryMessageReceived_(parsedData) {
        // Must refer to parsedData properties in quotes, so closure doesn't touch them.
        const layer = requireKey('t', parsedData);
        const data = requireKey('d', parsedData);
        if (layer === 'c') this.onControl_(data);
        else if (layer === 'd') this.onDataMessage_(data);
    }
    onDataMessage_(message) {
        this.onPrimaryResponse_();
        // We don't do anything with data messages, just kick them up a level
        this.onMessage_(message);
    }
    onPrimaryResponse_() {
        if (!this.isHealthy_) {
            this.primaryResponsesRequired_--;
            if (this.primaryResponsesRequired_ <= 0) {
                this.log_('Primary connection is healthy.');
                this.isHealthy_ = true;
                this.conn_.markConnectionHealthy();
            }
        }
    }
    onControl_(controlData) {
        const cmd = requireKey(MESSAGE_TYPE, controlData);
        if (MESSAGE_DATA in controlData) {
            const payload = controlData[MESSAGE_DATA];
            if (cmd === SERVER_HELLO) this.onHandshake_(payload);
            else if (cmd === END_TRANSMISSION) {
                this.log_('recvd end transmission on primary');
                this.rx_ = this.secondaryConn_;
                for(let i = 0; i < this.pendingDataMessages.length; ++i)this.onDataMessage_(this.pendingDataMessages[i]);
                this.pendingDataMessages = [];
                this.tryCleanupConnection();
            } else if (cmd === CONTROL_SHUTDOWN) // This was previously the 'onKill' callback passed to the lower-level connection
            // payload in this case is the reason for the shutdown. Generally a human-readable error
            this.onConnectionShutdown_(payload);
            else if (cmd === CONTROL_RESET) // payload in this case is the host we should contact
            this.onReset_(payload);
            else if (cmd === CONTROL_ERROR) error('Server Error: ' + payload);
            else if (cmd === CONTROL_PONG) {
                this.log_('got pong on primary.');
                this.onPrimaryResponse_();
                this.sendPingOnPrimaryIfNecessary_();
            } else error('Unknown control packet command: ' + cmd);
        }
    }
    /**
     * @param handshake - The handshake data returned from the server
     */ onHandshake_(handshake) {
        const timestamp = handshake.ts;
        const version2 = handshake.v;
        const host = handshake.h;
        this.sessionId = handshake.s;
        this.repoInfo_.host = host;
        // if we've already closed the connection, then don't bother trying to progress further
        if (this.state_ === 0 /* CONNECTING */ ) {
            this.conn_.start();
            this.onConnectionEstablished_(this.conn_, timestamp);
            if (PROTOCOL_VERSION !== version2) warn('Protocol version mismatch detected');
            // TODO: do we want to upgrade? when? maybe a delay?
            this.tryStartUpgrade_();
        }
    }
    tryStartUpgrade_() {
        const conn = this.transportManager_.upgradeTransport();
        if (conn) this.startUpgrade_(conn);
    }
    startUpgrade_(conn) {
        this.secondaryConn_ = new conn(this.nextTransportId_(), this.repoInfo_, this.applicationId_, this.appCheckToken_, this.authToken_, this.sessionId);
        // For certain transports (WebSockets), we need to send and receive several messages back and forth before we
        // can consider the transport healthy.
        this.secondaryResponsesRequired_ = conn['responsesRequiredToBeHealthy'] || 0;
        const onMessage = this.connReceiver_(this.secondaryConn_);
        const onDisconnect5 = this.disconnReceiver_(this.secondaryConn_);
        this.secondaryConn_.open(onMessage, onDisconnect5);
        // If we haven't successfully upgraded after UPGRADE_TIMEOUT, give up and kill the secondary.
        setTimeoutNonBlocking(()=>{
            if (this.secondaryConn_) {
                this.log_('Timed out trying to upgrade.');
                this.secondaryConn_.close();
            }
        }, Math.floor(UPGRADE_TIMEOUT));
    }
    onReset_(host) {
        this.log_('Reset packet received.  New host: ' + host);
        this.repoInfo_.host = host;
        // TODO: if we're already "connected", we need to trigger a disconnect at the next layer up.
        // We don't currently support resets after the connection has already been established
        if (this.state_ === 1 /* CONNECTED */ ) this.close();
        else {
            // Close whatever connections we have open and start again.
            this.closeConnections_();
            this.start_();
        }
    }
    onConnectionEstablished_(conn, timestamp) {
        this.log_('Realtime connection established.');
        this.conn_ = conn;
        this.state_ = 1 /* CONNECTED */ ;
        if (this.onReady_) {
            this.onReady_(timestamp, this.sessionId);
            this.onReady_ = null;
        }
        // If after 5 seconds we haven't sent enough requests to the server to get the connection healthy,
        // send some pings.
        if (this.primaryResponsesRequired_ === 0) {
            this.log_('Primary connection is healthy.');
            this.isHealthy_ = true;
        } else setTimeoutNonBlocking(()=>{
            this.sendPingOnPrimaryIfNecessary_();
        }, Math.floor(DELAY_BEFORE_SENDING_EXTRA_REQUESTS));
    }
    sendPingOnPrimaryIfNecessary_() {
        // If the connection isn't considered healthy yet, we'll send a noop ping packet request.
        if (!this.isHealthy_ && this.state_ === 1 /* CONNECTED */ ) {
            this.log_('sending ping on primary.');
            this.sendData_({
                t: 'c',
                d: {
                    t: PING,
                    d: {
                    }
                }
            });
        }
    }
    onSecondaryConnectionLost_() {
        const conn = this.secondaryConn_;
        this.secondaryConn_ = null;
        if (this.tx_ === conn || this.rx_ === conn) // we are relying on this connection already in some capacity. Therefore, a failure is real
        this.close();
    }
    /**
     * @param everConnected - Whether or not the connection ever reached a server. Used to determine if
     * we should flush the host cache
     */ onConnectionLost_(everConnected) {
        this.conn_ = null;
        // NOTE: IF you're seeing a Firefox error for this line, I think it might be because it's getting
        // called on window close and RealtimeState.CONNECTING is no longer defined.  Just a guess.
        if (!everConnected && this.state_ === 0 /* CONNECTING */ ) {
            this.log_('Realtime connection failed.');
            // Since we failed to connect at all, clear any cached entry for this namespace in case the machine went away
            if (this.repoInfo_.isCacheableHost()) {
                PersistentStorage.remove('host:' + this.repoInfo_.host);
                // reset the internal host to what we would show the user, i.e. <ns>.firebaseio.com
                this.repoInfo_.internalHost = this.repoInfo_.host;
            }
        } else if (this.state_ === 1 /* CONNECTED */ ) this.log_('Realtime connection lost.');
        this.close();
    }
    onConnectionShutdown_(reason) {
        this.log_('Connection shutdown command received. Shutting down...');
        if (this.onKill_) {
            this.onKill_(reason);
            this.onKill_ = null;
        }
        // We intentionally don't want to fire onDisconnect (kill is a different case),
        // so clear the callback.
        this.onDisconnect_ = null;
        this.close();
    }
    sendData_(data) {
        if (this.state_ !== 1 /* CONNECTED */ ) throw 'Connection is not connected';
        else this.tx_.send(data);
    }
    /**
     * Cleans up this connection, calling the appropriate callbacks
     */ close() {
        if (this.state_ !== 2 /* DISCONNECTED */ ) {
            this.log_('Closing realtime connection.');
            this.state_ = 2 /* DISCONNECTED */ ;
            this.closeConnections_();
            if (this.onDisconnect_) {
                this.onDisconnect_();
                this.onDisconnect_ = null;
            }
        }
    }
    closeConnections_() {
        this.log_('Shutting down all connections');
        if (this.conn_) {
            this.conn_.close();
            this.conn_ = null;
        }
        if (this.secondaryConn_) {
            this.secondaryConn_.close();
            this.secondaryConn_ = null;
        }
        if (this.healthyTimeout_) {
            clearTimeout(this.healthyTimeout_);
            this.healthyTimeout_ = null;
        }
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Interface defining the set of actions that can be performed against the Firebase server
 * (basically corresponds to our wire protocol).
 *
 * @interface
 */ class ServerActions {
    put(pathString, data, onComplete, hash) {
    }
    merge(pathString, data, onComplete, hash) {
    }
    /**
     * Refreshes the auth token for the current connection.
     * @param token - The authentication token
     */ refreshAuthToken(token) {
    }
    /**
     * Refreshes the app check token for the current connection.
     * @param token The app check token
     */ refreshAppCheckToken(token) {
    }
    onDisconnectPut(pathString, data, onComplete) {
    }
    onDisconnectMerge(pathString, data, onComplete) {
    }
    onDisconnectCancel(pathString, onComplete) {
    }
    reportStats(stats) {
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Base class to be used if you want to emit events. Call the constructor with
 * the set of allowed event names.
 */ class EventEmitter {
    constructor(allowedEvents_){
        this.allowedEvents_ = allowedEvents_;
        this.listeners_ = {
        };
        _util.assert(Array.isArray(allowedEvents_) && allowedEvents_.length > 0, 'Requires a non-empty array');
    }
    /**
     * To be called by derived classes to trigger events.
     */ trigger(eventType, ...varArgs) {
        if (Array.isArray(this.listeners_[eventType])) {
            // Clone the list, since callbacks could add/remove listeners.
            const listeners = [
                ...this.listeners_[eventType]
            ];
            for(let i = 0; i < listeners.length; i++)listeners[i].callback.apply(listeners[i].context, varArgs);
        }
    }
    on(eventType, callback, context) {
        this.validateEventType_(eventType);
        this.listeners_[eventType] = this.listeners_[eventType] || [];
        this.listeners_[eventType].push({
            callback,
            context
        });
        const eventData = this.getInitialEvent(eventType);
        if (eventData) callback.apply(context, eventData);
    }
    off(eventType, callback, context) {
        this.validateEventType_(eventType);
        const listeners = this.listeners_[eventType] || [];
        for(let i = 0; i < listeners.length; i++)if (listeners[i].callback === callback && (!context || context === listeners[i].context)) {
            listeners.splice(i, 1);
            return;
        }
    }
    validateEventType_(eventType) {
        _util.assert(this.allowedEvents_.find((et)=>{
            return et === eventType;
        }), 'Unknown event: ' + eventType);
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Monitors online state (as reported by window.online/offline events).
 *
 * The expectation is that this could have many false positives (thinks we are online
 * when we're not), but no false negatives.  So we can safely use it to determine when
 * we definitely cannot reach the internet.
 */ class OnlineMonitor extends EventEmitter {
    constructor(){
        super([
            'online'
        ]);
        this.online_ = true;
        // We've had repeated complaints that Cordova apps can get stuck "offline", e.g.
        // https://forum.ionicframework.com/t/firebase-connection-is-lost-and-never-come-back/43810
        // It would seem that the 'online' event does not always fire consistently. So we disable it
        // for Cordova.
        if (typeof window !== 'undefined' && typeof window.addEventListener !== 'undefined' && !_util.isMobileCordova()) {
            window.addEventListener('online', ()=>{
                if (!this.online_) {
                    this.online_ = true;
                    this.trigger('online', true);
                }
            }, false);
            window.addEventListener('offline', ()=>{
                if (this.online_) {
                    this.online_ = false;
                    this.trigger('online', false);
                }
            }, false);
        }
    }
    static getInstance() {
        return new OnlineMonitor();
    }
    getInitialEvent(eventType) {
        _util.assert(eventType === 'online', 'Unknown event type: ' + eventType);
        return [
            this.online_
        ];
    }
    currentlyOnline() {
        return this.online_;
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** Maximum key depth. */ const MAX_PATH_DEPTH = 32;
/** Maximum number of (UTF8) bytes in a Firebase path. */ const MAX_PATH_LENGTH_BYTES = 768;
/**
 * An immutable object representing a parsed path.  It's immutable so that you
 * can pass them around to other functions without worrying about them changing
 * it.
 */ class Path {
    /**
     * @param pathOrString - Path string to parse, or another path, or the raw
     * tokens array
     */ constructor(pathOrString, pieceNum){
        if (pieceNum === void 0) {
            this.pieces_ = pathOrString.split('/');
            // Remove empty pieces.
            let copyTo = 0;
            for(let i = 0; i < this.pieces_.length; i++)if (this.pieces_[i].length > 0) {
                this.pieces_[copyTo] = this.pieces_[i];
                copyTo++;
            }
            this.pieces_.length = copyTo;
            this.pieceNum_ = 0;
        } else {
            this.pieces_ = pathOrString;
            this.pieceNum_ = pieceNum;
        }
    }
    toString() {
        let pathString = '';
        for(let i = this.pieceNum_; i < this.pieces_.length; i++)if (this.pieces_[i] !== '') pathString += '/' + this.pieces_[i];
        return pathString || '/';
    }
}
function newEmptyPath() {
    return new Path('');
}
function pathGetFront(path) {
    if (path.pieceNum_ >= path.pieces_.length) return null;
    return path.pieces_[path.pieceNum_];
}
/**
 * @returns The number of segments in this path
 */ function pathGetLength(path) {
    return path.pieces_.length - path.pieceNum_;
}
function pathPopFront(path) {
    let pieceNum = path.pieceNum_;
    if (pieceNum < path.pieces_.length) pieceNum++;
    return new Path(path.pieces_, pieceNum);
}
function pathGetBack(path) {
    if (path.pieceNum_ < path.pieces_.length) return path.pieces_[path.pieces_.length - 1];
    return null;
}
function pathToUrlEncodedString(path) {
    let pathString = '';
    for(let i = path.pieceNum_; i < path.pieces_.length; i++)if (path.pieces_[i] !== '') pathString += '/' + encodeURIComponent(String(path.pieces_[i]));
    return pathString || '/';
}
/**
 * Shallow copy of the parts of the path.
 *
 */ function pathSlice(path, begin = 0) {
    return path.pieces_.slice(path.pieceNum_ + begin);
}
function pathParent(path) {
    if (path.pieceNum_ >= path.pieces_.length) return null;
    const pieces = [];
    for(let i = path.pieceNum_; i < path.pieces_.length - 1; i++)pieces.push(path.pieces_[i]);
    return new Path(pieces, 0);
}
function pathChild(path, childPathObj) {
    const pieces = [];
    for(let i = path.pieceNum_; i < path.pieces_.length; i++)pieces.push(path.pieces_[i]);
    if (childPathObj instanceof Path) for(let i1 = childPathObj.pieceNum_; i1 < childPathObj.pieces_.length; i1++)pieces.push(childPathObj.pieces_[i1]);
    else {
        const childPieces = childPathObj.split('/');
        for(let i = 0; i < childPieces.length; i++)if (childPieces[i].length > 0) pieces.push(childPieces[i]);
    }
    return new Path(pieces, 0);
}
/**
 * @returns True if there are no segments in this path
 */ function pathIsEmpty(path) {
    return path.pieceNum_ >= path.pieces_.length;
}
/**
 * @returns The path from outerPath to innerPath
 */ function newRelativePath(outerPath, innerPath) {
    const outer = pathGetFront(outerPath), inner = pathGetFront(innerPath);
    if (outer === null) return innerPath;
    else if (outer === inner) return newRelativePath(pathPopFront(outerPath), pathPopFront(innerPath));
    else throw new Error('INTERNAL ERROR: innerPath (' + innerPath + ') is not within ' + 'outerPath (' + outerPath + ')');
}
/**
 * @returns -1, 0, 1 if left is less, equal, or greater than the right.
 */ function pathCompare(left, right) {
    const leftKeys = pathSlice(left, 0);
    const rightKeys = pathSlice(right, 0);
    for(let i = 0; i < leftKeys.length && i < rightKeys.length; i++){
        const cmp = nameCompare(leftKeys[i], rightKeys[i]);
        if (cmp !== 0) return cmp;
    }
    if (leftKeys.length === rightKeys.length) return 0;
    return leftKeys.length < rightKeys.length ? -1 : 1;
}
/**
 * @returns true if paths are the same.
 */ function pathEquals(path, other) {
    if (pathGetLength(path) !== pathGetLength(other)) return false;
    for(let i = path.pieceNum_, j = other.pieceNum_; i <= path.pieces_.length; i++, j++){
        if (path.pieces_[i] !== other.pieces_[j]) return false;
    }
    return true;
}
/**
 * @returns True if this path is a parent (or the same as) other
 */ function pathContains(path, other) {
    let i = path.pieceNum_;
    let j = other.pieceNum_;
    if (pathGetLength(path) > pathGetLength(other)) return false;
    while(i < path.pieces_.length){
        if (path.pieces_[i] !== other.pieces_[j]) return false;
        ++i;
        ++j;
    }
    return true;
}
/**
 * Dynamic (mutable) path used to count path lengths.
 *
 * This class is used to efficiently check paths for valid
 * length (in UTF8 bytes) and depth (used in path validation).
 *
 * Throws Error exception if path is ever invalid.
 *
 * The definition of a path always begins with '/'.
 */ class ValidationPath {
    /**
     * @param path - Initial Path.
     * @param errorPrefix_ - Prefix for any error messages.
     */ constructor(path, errorPrefix_){
        this.errorPrefix_ = errorPrefix_;
        this.parts_ = pathSlice(path, 0);
        /** Initialize to number of '/' chars needed in path. */ this.byteLength_ = Math.max(1, this.parts_.length);
        for(let i = 0; i < this.parts_.length; i++)this.byteLength_ += _util.stringLength(this.parts_[i]);
        validationPathCheckValid(this);
    }
}
function validationPathPush(validationPath, child1) {
    // Count the needed '/'
    if (validationPath.parts_.length > 0) validationPath.byteLength_ += 1;
    validationPath.parts_.push(child1);
    validationPath.byteLength_ += _util.stringLength(child1);
    validationPathCheckValid(validationPath);
}
function validationPathPop(validationPath) {
    const last = validationPath.parts_.pop();
    validationPath.byteLength_ -= _util.stringLength(last);
    // Un-count the previous '/'
    if (validationPath.parts_.length > 0) validationPath.byteLength_ -= 1;
}
function validationPathCheckValid(validationPath) {
    if (validationPath.byteLength_ > MAX_PATH_LENGTH_BYTES) throw new Error(validationPath.errorPrefix_ + 'has a key path longer than ' + MAX_PATH_LENGTH_BYTES + ' bytes (' + validationPath.byteLength_ + ').');
    if (validationPath.parts_.length > MAX_PATH_DEPTH) throw new Error(validationPath.errorPrefix_ + 'path specified exceeds the maximum depth that can be written (' + MAX_PATH_DEPTH + ') or object contains a cycle ' + validationPathToErrorString(validationPath));
}
/**
 * String for use in error messages - uses '.' notation for path.
 */ function validationPathToErrorString(validationPath) {
    if (validationPath.parts_.length === 0) return '';
    return "in property '" + validationPath.parts_.join('.') + "'";
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class VisibilityMonitor extends EventEmitter {
    constructor(){
        super([
            'visible'
        ]);
        let hidden;
        let visibilityChange;
        if (typeof document !== 'undefined' && typeof document.addEventListener !== 'undefined') {
            if (typeof document['hidden'] !== 'undefined') {
                // Opera 12.10 and Firefox 18 and later support
                visibilityChange = 'visibilitychange';
                hidden = 'hidden';
            } else if (typeof document['mozHidden'] !== 'undefined') {
                visibilityChange = 'mozvisibilitychange';
                hidden = 'mozHidden';
            } else if (typeof document['msHidden'] !== 'undefined') {
                visibilityChange = 'msvisibilitychange';
                hidden = 'msHidden';
            } else if (typeof document['webkitHidden'] !== 'undefined') {
                visibilityChange = 'webkitvisibilitychange';
                hidden = 'webkitHidden';
            }
        }
        // Initially, we always assume we are visible. This ensures that in browsers
        // without page visibility support or in cases where we are never visible
        // (e.g. chrome extension), we act as if we are visible, i.e. don't delay
        // reconnects
        this.visible_ = true;
        if (visibilityChange) document.addEventListener(visibilityChange, ()=>{
            const visible = !document[hidden];
            if (visible !== this.visible_) {
                this.visible_ = visible;
                this.trigger('visible', visible);
            }
        }, false);
    }
    static getInstance() {
        return new VisibilityMonitor();
    }
    getInitialEvent(eventType) {
        _util.assert(eventType === 'visible', 'Unknown event type: ' + eventType);
        return [
            this.visible_
        ];
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const RECONNECT_MIN_DELAY = 1000;
const RECONNECT_MAX_DELAY_DEFAULT = 300000; // 5 minutes in milliseconds (Case: 1858)
const GET_CONNECT_TIMEOUT = 3000;
const RECONNECT_MAX_DELAY_FOR_ADMINS = 30000; // 30 seconds for admin clients (likely to be a backend server)
const RECONNECT_DELAY_MULTIPLIER = 1.3;
const RECONNECT_DELAY_RESET_TIMEOUT = 30000; // Reset delay back to MIN_DELAY after being connected for 30sec.
const SERVER_KILL_INTERRUPT_REASON = 'server_kill';
// If auth fails repeatedly, we'll assume something is wrong and log a warning / back off.
const INVALID_TOKEN_THRESHOLD = 3;
/**
 * Firebase connection.  Abstracts wire protocol and handles reconnecting.
 *
 * NOTE: All JSON objects sent to the realtime connection must have property names enclosed
 * in quotes to make sure the closure compiler does not minify them.
 */ class PersistentConnection extends ServerActions {
    /**
     * @param repoInfo_ - Data about the namespace we are connecting to
     * @param applicationId_ - The Firebase App ID for this project
     * @param onDataUpdate_ - A callback for new data from the server
     */ constructor(repoInfo_, applicationId_, onDataUpdate_, onConnectStatus_, onServerInfoUpdate_, authTokenProvider_, appCheckTokenProvider_, authOverride_){
        super();
        this.repoInfo_ = repoInfo_;
        this.applicationId_ = applicationId_;
        this.onDataUpdate_ = onDataUpdate_;
        this.onConnectStatus_ = onConnectStatus_;
        this.onServerInfoUpdate_ = onServerInfoUpdate_;
        this.authTokenProvider_ = authTokenProvider_;
        this.appCheckTokenProvider_ = appCheckTokenProvider_;
        this.authOverride_ = authOverride_;
        // Used for diagnostic logging.
        this.id = PersistentConnection.nextPersistentConnectionId_++;
        this.log_ = logWrapper('p:' + this.id + ':');
        this.interruptReasons_ = {
        };
        this.listens = new Map();
        this.outstandingPuts_ = [];
        this.outstandingGets_ = [];
        this.outstandingPutCount_ = 0;
        this.outstandingGetCount_ = 0;
        this.onDisconnectRequestQueue_ = [];
        this.connected_ = false;
        this.reconnectDelay_ = RECONNECT_MIN_DELAY;
        this.maxReconnectDelay_ = RECONNECT_MAX_DELAY_DEFAULT;
        this.securityDebugCallback_ = null;
        this.lastSessionId = null;
        this.establishConnectionTimer_ = null;
        this.visible_ = false;
        // Before we get connected, we keep a queue of pending messages to send.
        this.requestCBHash_ = {
        };
        this.requestNumber_ = 0;
        this.realtime_ = null;
        this.authToken_ = null;
        this.appCheckToken_ = null;
        this.forceTokenRefresh_ = false;
        this.invalidAuthTokenCount_ = 0;
        this.invalidAppCheckTokenCount_ = 0;
        this.firstConnection_ = true;
        this.lastConnectionAttemptTime_ = null;
        this.lastConnectionEstablishedTime_ = null;
        if (authOverride_ && !_util.isNodeSdk()) throw new Error('Auth override specified in options, but not supported on non Node.js platforms');
        VisibilityMonitor.getInstance().on('visible', this.onVisible_, this);
        if (repoInfo_.host.indexOf('fblocal') === -1) OnlineMonitor.getInstance().on('online', this.onOnline_, this);
    }
    sendRequest(action, body, onResponse) {
        const curReqNum = ++this.requestNumber_;
        const msg = {
            r: curReqNum,
            a: action,
            b: body
        };
        this.log_(_util.stringify(msg));
        _util.assert(this.connected_, "sendRequest call when we're not connected not allowed.");
        this.realtime_.sendRequest(msg);
        if (onResponse) this.requestCBHash_[curReqNum] = onResponse;
    }
    get(query3) {
        this.initConnection_();
        const deferred = new _util.Deferred();
        const request = {
            p: query3._path.toString(),
            q: query3._queryObject
        };
        const outstandingGet = {
            action: 'g',
            request,
            onComplete: (message)=>{
                const payload = message['d'];
                if (message['s'] === 'ok') {
                    this.onDataUpdate_(request['p'], payload, /*isMerge*/ false, /*tag*/ null);
                    deferred.resolve(payload);
                } else deferred.reject(payload);
            }
        };
        this.outstandingGets_.push(outstandingGet);
        this.outstandingGetCount_++;
        const index = this.outstandingGets_.length - 1;
        if (!this.connected_) setTimeout(()=>{
            const get1 = this.outstandingGets_[index];
            if (get1 === undefined || outstandingGet !== get1) return;
            delete this.outstandingGets_[index];
            this.outstandingGetCount_--;
            if (this.outstandingGetCount_ === 0) this.outstandingGets_ = [];
            this.log_('get ' + index + ' timed out on connection');
            deferred.reject(new Error('Client is offline.'));
        }, GET_CONNECT_TIMEOUT);
        if (this.connected_) this.sendGet_(index);
        return deferred.promise;
    }
    listen(query4, currentHashFn, tag, onComplete) {
        this.initConnection_();
        const queryId = query4._queryIdentifier;
        const pathString = query4._path.toString();
        this.log_('Listen called for ' + pathString + ' ' + queryId);
        if (!this.listens.has(pathString)) this.listens.set(pathString, new Map());
        _util.assert(query4._queryParams.isDefault() || !query4._queryParams.loadsAllData(), 'listen() called for non-default but complete query');
        _util.assert(!this.listens.get(pathString).has(queryId), 'listen() called twice for same path/queryId.');
        const listenSpec = {
            onComplete,
            hashFn: currentHashFn,
            query: query4,
            tag
        };
        this.listens.get(pathString).set(queryId, listenSpec);
        if (this.connected_) this.sendListen_(listenSpec);
    }
    sendGet_(index) {
        const get2 = this.outstandingGets_[index];
        this.sendRequest('g', get2.request, (message)=>{
            delete this.outstandingGets_[index];
            this.outstandingGetCount_--;
            if (this.outstandingGetCount_ === 0) this.outstandingGets_ = [];
            if (get2.onComplete) get2.onComplete(message);
        });
    }
    sendListen_(listenSpec) {
        const query5 = listenSpec.query;
        const pathString = query5._path.toString();
        const queryId = query5._queryIdentifier;
        this.log_('Listen on ' + pathString + ' for ' + queryId);
        const req = {
            p: pathString
        };
        const action = 'q';
        // Only bother to send query if it's non-default.
        if (listenSpec.tag) {
            req['q'] = query5._queryObject;
            req['t'] = listenSpec.tag;
        }
        req[/*hash*/ 'h'] = listenSpec.hashFn();
        this.sendRequest(action, req, (message)=>{
            const payload = message[/*data*/ 'd'];
            const status = message[/*status*/ 's'];
            // print warnings in any case...
            PersistentConnection.warnOnListenWarnings_(payload, query5);
            const currentListenSpec = this.listens.get(pathString) && this.listens.get(pathString).get(queryId);
            // only trigger actions if the listen hasn't been removed and readded
            if (currentListenSpec === listenSpec) {
                this.log_('listen response', message);
                if (status !== 'ok') this.removeListen_(pathString, queryId);
                if (listenSpec.onComplete) listenSpec.onComplete(status, payload);
            }
        });
    }
    static warnOnListenWarnings_(payload, query6) {
        if (payload && typeof payload === 'object' && _util.contains(payload, 'w')) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const warnings = _util.safeGet(payload, 'w');
            if (Array.isArray(warnings) && ~warnings.indexOf('no_index')) {
                const indexSpec = '".indexOn": "' + query6._queryParams.getIndex().toString() + '"';
                const indexPath = query6._path.toString();
                warn(`Using an unspecified index. Your data will be downloaded and ` + `filtered on the client. Consider adding ${indexSpec} at ` + `${indexPath} to your security rules for better performance.`);
            }
        }
    }
    refreshAuthToken(token) {
        this.authToken_ = token;
        this.log_('Auth token refreshed');
        if (this.authToken_) this.tryAuth();
        else //If we're connected we want to let the server know to unauthenticate us. If we're not connected, simply delete
        //the credential so we dont become authenticated next time we connect.
        if (this.connected_) this.sendRequest('unauth', {
        }, ()=>{
        });
        this.reduceReconnectDelayIfAdminCredential_(token);
    }
    reduceReconnectDelayIfAdminCredential_(credential) {
        // NOTE: This isn't intended to be bulletproof (a malicious developer can always just modify the client).
        // Additionally, we don't bother resetting the max delay back to the default if auth fails / expires.
        const isFirebaseSecret = credential && credential.length === 40;
        if (isFirebaseSecret || _util.isAdmin(credential)) {
            this.log_('Admin auth credential detected.  Reducing max reconnect time.');
            this.maxReconnectDelay_ = RECONNECT_MAX_DELAY_FOR_ADMINS;
        }
    }
    refreshAppCheckToken(token) {
        this.appCheckToken_ = token;
        this.log_('App check token refreshed');
        if (this.appCheckToken_) this.tryAppCheck();
        else //If we're connected we want to let the server know to unauthenticate us.
        //If we're not connected, simply delete the credential so we dont become
        // authenticated next time we connect.
        if (this.connected_) this.sendRequest('unappeck', {
        }, ()=>{
        });
    }
    /**
     * Attempts to authenticate with the given credentials. If the authentication attempt fails, it's triggered like
     * a auth revoked (the connection is closed).
     */ tryAuth() {
        if (this.connected_ && this.authToken_) {
            const token = this.authToken_;
            const authMethod = _util.isValidFormat(token) ? 'auth' : 'gauth';
            const requestData = {
                cred: token
            };
            if (this.authOverride_ === null) requestData['noauth'] = true;
            else if (typeof this.authOverride_ === 'object') requestData['authvar'] = this.authOverride_;
            this.sendRequest(authMethod, requestData, (res)=>{
                const status = res[/*status*/ 's'];
                const data = res[/*data*/ 'd'] || 'error';
                if (this.authToken_ === token) {
                    if (status === 'ok') this.invalidAuthTokenCount_ = 0;
                    else // Triggers reconnect and force refresh for auth token
                    this.onAuthRevoked_(status, data);
                }
            });
        }
    }
    /**
     * Attempts to authenticate with the given token. If the authentication
     * attempt fails, it's triggered like the token was revoked (the connection is
     * closed).
     */ tryAppCheck() {
        if (this.connected_ && this.appCheckToken_) this.sendRequest('appcheck', {
            'token': this.appCheckToken_
        }, (res)=>{
            const status = res[/*status*/ 's'];
            const data = res[/*data*/ 'd'] || 'error';
            if (status === 'ok') this.invalidAppCheckTokenCount_ = 0;
            else this.onAppCheckRevoked_(status, data);
        });
    }
    /**
     * @inheritDoc
     */ unlisten(query7, tag) {
        const pathString = query7._path.toString();
        const queryId = query7._queryIdentifier;
        this.log_('Unlisten called for ' + pathString + ' ' + queryId);
        _util.assert(query7._queryParams.isDefault() || !query7._queryParams.loadsAllData(), 'unlisten() called for non-default but complete query');
        const listen = this.removeListen_(pathString, queryId);
        if (listen && this.connected_) this.sendUnlisten_(pathString, queryId, query7._queryObject, tag);
    }
    sendUnlisten_(pathString, queryId, queryObj, tag) {
        this.log_('Unlisten on ' + pathString + ' for ' + queryId);
        const req = {
            p: pathString
        };
        const action = 'n';
        // Only bother sending queryId if it's non-default.
        if (tag) {
            req['q'] = queryObj;
            req['t'] = tag;
        }
        this.sendRequest(action, req);
    }
    onDisconnectPut(pathString, data, onComplete) {
        this.initConnection_();
        if (this.connected_) this.sendOnDisconnect_('o', pathString, data, onComplete);
        else this.onDisconnectRequestQueue_.push({
            pathString,
            action: 'o',
            data,
            onComplete
        });
    }
    onDisconnectMerge(pathString, data, onComplete) {
        this.initConnection_();
        if (this.connected_) this.sendOnDisconnect_('om', pathString, data, onComplete);
        else this.onDisconnectRequestQueue_.push({
            pathString,
            action: 'om',
            data,
            onComplete
        });
    }
    onDisconnectCancel(pathString, onComplete) {
        this.initConnection_();
        if (this.connected_) this.sendOnDisconnect_('oc', pathString, null, onComplete);
        else this.onDisconnectRequestQueue_.push({
            pathString,
            action: 'oc',
            data: null,
            onComplete
        });
    }
    sendOnDisconnect_(action, pathString, data, onComplete) {
        const request = {
            p: pathString,
            /*data*/ d: data
        };
        this.log_('onDisconnect ' + action, request);
        this.sendRequest(action, request, (response)=>{
            if (onComplete) setTimeout(()=>{
                onComplete(response[/*status*/ 's'], response[/* data */ 'd']);
            }, Math.floor(0));
        });
    }
    put(pathString, data, onComplete, hash) {
        this.putInternal('p', pathString, data, onComplete, hash);
    }
    merge(pathString, data, onComplete, hash) {
        this.putInternal('m', pathString, data, onComplete, hash);
    }
    putInternal(action, pathString, data, onComplete, hash) {
        this.initConnection_();
        const request = {
            /*path*/ p: pathString,
            /*data*/ d: data
        };
        if (hash !== undefined) request[/*hash*/ 'h'] = hash;
        // TODO: Only keep track of the most recent put for a given path?
        this.outstandingPuts_.push({
            action,
            request,
            onComplete
        });
        this.outstandingPutCount_++;
        const index = this.outstandingPuts_.length - 1;
        if (this.connected_) this.sendPut_(index);
        else this.log_('Buffering put: ' + pathString);
    }
    sendPut_(index) {
        const action = this.outstandingPuts_[index].action;
        const request = this.outstandingPuts_[index].request;
        const onComplete = this.outstandingPuts_[index].onComplete;
        this.outstandingPuts_[index].queued = this.connected_;
        this.sendRequest(action, request, (message)=>{
            this.log_(action + ' response', message);
            delete this.outstandingPuts_[index];
            this.outstandingPutCount_--;
            // Clean up array occasionally.
            if (this.outstandingPutCount_ === 0) this.outstandingPuts_ = [];
            if (onComplete) onComplete(message[/*status*/ 's'], message[/* data */ 'd']);
        });
    }
    reportStats(stats) {
        // If we're not connected, we just drop the stats.
        if (this.connected_) {
            const request = {
                c: stats
            };
            this.log_('reportStats', request);
            this.sendRequest(/*stats*/ 's', request, (result)=>{
                const status = result[/*status*/ 's'];
                if (status !== 'ok') {
                    const errorReason = result[/* data */ 'd'];
                    this.log_('reportStats', 'Error sending stats: ' + errorReason);
                }
            });
        }
    }
    onDataMessage_(message) {
        if ('r' in message) {
            // this is a response
            this.log_('from server: ' + _util.stringify(message));
            const reqNum = message['r'];
            const onResponse = this.requestCBHash_[reqNum];
            if (onResponse) {
                delete this.requestCBHash_[reqNum];
                onResponse(message[/*body*/ 'b']);
            }
        } else if ('error' in message) throw 'A server-side error has occurred: ' + message['error'];
        else if ('a' in message) // a and b are action and body, respectively
        this.onDataPush_(message['a'], message['b']);
    }
    onDataPush_(action, body) {
        this.log_('handleServerMessage', action, body);
        if (action === 'd') this.onDataUpdate_(body[/*path*/ 'p'], body[/*data*/ 'd'], /*isMerge*/ false, body['t']);
        else if (action === 'm') this.onDataUpdate_(body[/*path*/ 'p'], body[/*data*/ 'd'], /*isMerge=*/ true, body['t']);
        else if (action === 'c') this.onListenRevoked_(body[/*path*/ 'p'], body[/*query*/ 'q']);
        else if (action === 'ac') this.onAuthRevoked_(body[/*status code*/ 's'], body[/* explanation */ 'd']);
        else if (action === 'apc') this.onAppCheckRevoked_(body[/*status code*/ 's'], body[/* explanation */ 'd']);
        else if (action === 'sd') this.onSecurityDebugPacket_(body);
        else error('Unrecognized action received from server: ' + _util.stringify(action) + '\nAre you using the latest client?');
    }
    onReady_(timestamp, sessionId) {
        this.log_('connection ready');
        this.connected_ = true;
        this.lastConnectionEstablishedTime_ = new Date().getTime();
        this.handleTimestamp_(timestamp);
        this.lastSessionId = sessionId;
        if (this.firstConnection_) this.sendConnectStats_();
        this.restoreState_();
        this.firstConnection_ = false;
        this.onConnectStatus_(true);
    }
    scheduleConnect_(timeout) {
        _util.assert(!this.realtime_, "Scheduling a connect when we're already connected/ing?");
        if (this.establishConnectionTimer_) clearTimeout(this.establishConnectionTimer_);
        // NOTE: Even when timeout is 0, it's important to do a setTimeout to work around an infuriating "Security Error" in
        // Firefox when trying to write to our long-polling iframe in some scenarios (e.g. Forge or our unit tests).
        this.establishConnectionTimer_ = setTimeout(()=>{
            this.establishConnectionTimer_ = null;
            this.establishConnection_();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        }, Math.floor(timeout));
    }
    initConnection_() {
        if (!this.realtime_ && this.firstConnection_) this.scheduleConnect_(0);
    }
    onVisible_(visible) {
        // NOTE: Tabbing away and back to a window will defeat our reconnect backoff, but I think that's fine.
        if (visible && !this.visible_ && this.reconnectDelay_ === this.maxReconnectDelay_) {
            this.log_('Window became visible.  Reducing delay.');
            this.reconnectDelay_ = RECONNECT_MIN_DELAY;
            if (!this.realtime_) this.scheduleConnect_(0);
        }
        this.visible_ = visible;
    }
    onOnline_(online) {
        if (online) {
            this.log_('Browser went online.');
            this.reconnectDelay_ = RECONNECT_MIN_DELAY;
            if (!this.realtime_) this.scheduleConnect_(0);
        } else {
            this.log_('Browser went offline.  Killing connection.');
            if (this.realtime_) this.realtime_.close();
        }
    }
    onRealtimeDisconnect_() {
        this.log_('data client disconnected');
        this.connected_ = false;
        this.realtime_ = null;
        // Since we don't know if our sent transactions succeeded or not, we need to cancel them.
        this.cancelSentTransactions_();
        // Clear out the pending requests.
        this.requestCBHash_ = {
        };
        if (this.shouldReconnect_()) {
            if (!this.visible_) {
                this.log_("Window isn't visible.  Delaying reconnect.");
                this.reconnectDelay_ = this.maxReconnectDelay_;
                this.lastConnectionAttemptTime_ = new Date().getTime();
            } else if (this.lastConnectionEstablishedTime_) {
                // If we've been connected long enough, reset reconnect delay to minimum.
                const timeSinceLastConnectSucceeded = new Date().getTime() - this.lastConnectionEstablishedTime_;
                if (timeSinceLastConnectSucceeded > RECONNECT_DELAY_RESET_TIMEOUT) this.reconnectDelay_ = RECONNECT_MIN_DELAY;
                this.lastConnectionEstablishedTime_ = null;
            }
            const timeSinceLastConnectAttempt = new Date().getTime() - this.lastConnectionAttemptTime_;
            let reconnectDelay = Math.max(0, this.reconnectDelay_ - timeSinceLastConnectAttempt);
            reconnectDelay = Math.random() * reconnectDelay;
            this.log_('Trying to reconnect in ' + reconnectDelay + 'ms');
            this.scheduleConnect_(reconnectDelay);
            // Adjust reconnect delay for next time.
            this.reconnectDelay_ = Math.min(this.maxReconnectDelay_, this.reconnectDelay_ * RECONNECT_DELAY_MULTIPLIER);
        }
        this.onConnectStatus_(false);
    }
    async establishConnection_() {
        if (this.shouldReconnect_()) {
            this.log_('Making a connection attempt');
            this.lastConnectionAttemptTime_ = new Date().getTime();
            this.lastConnectionEstablishedTime_ = null;
            const onDataMessage = this.onDataMessage_.bind(this);
            const onReady = this.onReady_.bind(this);
            const onDisconnect6 = this.onRealtimeDisconnect_.bind(this);
            const connId = this.id + ':' + PersistentConnection.nextConnectionId_++;
            const lastSessionId = this.lastSessionId;
            let canceled = false;
            let connection = null;
            const closeFn = function() {
                if (connection) connection.close();
                else {
                    canceled = true;
                    onDisconnect6();
                }
            };
            const sendRequestFn = function(msg) {
                _util.assert(connection, "sendRequest call when we're not connected not allowed.");
                connection.sendRequest(msg);
            };
            this.realtime_ = {
                close: closeFn,
                sendRequest: sendRequestFn
            };
            const forceRefresh = this.forceTokenRefresh_;
            this.forceTokenRefresh_ = false;
            try {
                // First fetch auth and app check token, and establish connection after
                // fetching the token was successful
                const [authToken, appCheckToken] = await Promise.all([
                    this.authTokenProvider_.getToken(forceRefresh),
                    this.appCheckTokenProvider_.getToken(forceRefresh)
                ]);
                if (!canceled) {
                    log('getToken() completed. Creating connection.');
                    this.authToken_ = authToken && authToken.accessToken;
                    this.appCheckToken_ = appCheckToken && appCheckToken.token;
                    connection = new Connection(connId, this.repoInfo_, this.applicationId_, this.appCheckToken_, this.authToken_, onDataMessage, onReady, onDisconnect6, /* onKill= */ (reason)=>{
                        warn(reason + ' (' + this.repoInfo_.toString() + ')');
                        this.interrupt(SERVER_KILL_INTERRUPT_REASON);
                    }, lastSessionId);
                } else log('getToken() completed but was canceled');
            } catch (error5) {
                this.log_('Failed to get token: ' + error5);
                if (!canceled) {
                    if (this.repoInfo_.nodeAdmin) // This may be a critical error for the Admin Node.js SDK, so log a warning.
                    // But getToken() may also just have temporarily failed, so we still want to
                    // continue retrying.
                    warn(error5);
                    closeFn();
                }
            }
        }
    }
    interrupt(reason) {
        log('Interrupting connection for reason: ' + reason);
        this.interruptReasons_[reason] = true;
        if (this.realtime_) this.realtime_.close();
        else {
            if (this.establishConnectionTimer_) {
                clearTimeout(this.establishConnectionTimer_);
                this.establishConnectionTimer_ = null;
            }
            if (this.connected_) this.onRealtimeDisconnect_();
        }
    }
    resume(reason) {
        log('Resuming connection for reason: ' + reason);
        delete this.interruptReasons_[reason];
        if (_util.isEmpty(this.interruptReasons_)) {
            this.reconnectDelay_ = RECONNECT_MIN_DELAY;
            if (!this.realtime_) this.scheduleConnect_(0);
        }
    }
    handleTimestamp_(timestamp) {
        const delta = timestamp - new Date().getTime();
        this.onServerInfoUpdate_({
            serverTimeOffset: delta
        });
    }
    cancelSentTransactions_() {
        for(let i = 0; i < this.outstandingPuts_.length; i++){
            const put = this.outstandingPuts_[i];
            if (put && /*hash*/ 'h' in put.request && put.queued) {
                if (put.onComplete) put.onComplete('disconnect');
                delete this.outstandingPuts_[i];
                this.outstandingPutCount_--;
            }
        }
        // Clean up array occasionally.
        if (this.outstandingPutCount_ === 0) this.outstandingPuts_ = [];
    }
    onListenRevoked_(pathString, query8) {
        // Remove the listen and manufacture a "permission_denied" error for the failed listen.
        let queryId;
        if (!query8) queryId = 'default';
        else queryId = query8.map((q)=>ObjectToUniqueKey(q)
        ).join('$');
        const listen = this.removeListen_(pathString, queryId);
        if (listen && listen.onComplete) listen.onComplete('permission_denied');
    }
    removeListen_(pathString, queryId) {
        const normalizedPathString = new Path(pathString).toString(); // normalize path.
        let listen;
        if (this.listens.has(normalizedPathString)) {
            const map = this.listens.get(normalizedPathString);
            listen = map.get(queryId);
            map.delete(queryId);
            if (map.size === 0) this.listens.delete(normalizedPathString);
        } else // all listens for this path has already been removed
        listen = undefined;
        return listen;
    }
    onAuthRevoked_(statusCode, explanation) {
        log('Auth token revoked: ' + statusCode + '/' + explanation);
        this.authToken_ = null;
        this.forceTokenRefresh_ = true;
        this.realtime_.close();
        if (statusCode === 'invalid_token' || statusCode === 'permission_denied') {
            // We'll wait a couple times before logging the warning / increasing the
            // retry period since oauth tokens will report as "invalid" if they're
            // just expired. Plus there may be transient issues that resolve themselves.
            this.invalidAuthTokenCount_++;
            if (this.invalidAuthTokenCount_ >= INVALID_TOKEN_THRESHOLD) {
                // Set a long reconnect delay because recovery is unlikely
                this.reconnectDelay_ = RECONNECT_MAX_DELAY_FOR_ADMINS;
                // Notify the auth token provider that the token is invalid, which will log
                // a warning
                this.authTokenProvider_.notifyForInvalidToken();
            }
        }
    }
    onAppCheckRevoked_(statusCode, explanation) {
        log('App check token revoked: ' + statusCode + '/' + explanation);
        this.appCheckToken_ = null;
        this.forceTokenRefresh_ = true;
        // Note: We don't close the connection as the developer may not have
        // enforcement enabled. The backend closes connections with enforcements.
        if (statusCode === 'invalid_token' || statusCode === 'permission_denied') {
            // We'll wait a couple times before logging the warning / increasing the
            // retry period since oauth tokens will report as "invalid" if they're
            // just expired. Plus there may be transient issues that resolve themselves.
            this.invalidAppCheckTokenCount_++;
            if (this.invalidAppCheckTokenCount_ >= INVALID_TOKEN_THRESHOLD) this.appCheckTokenProvider_.notifyForInvalidToken();
        }
    }
    onSecurityDebugPacket_(body) {
        if (this.securityDebugCallback_) this.securityDebugCallback_(body);
        else if ('msg' in body) console.log('FIREBASE: ' + body['msg'].replace('\n', '\nFIREBASE: '));
    }
    restoreState_() {
        //Re-authenticate ourselves if we have a credential stored.
        this.tryAuth();
        this.tryAppCheck();
        // Puts depend on having received the corresponding data update from the server before they complete, so we must
        // make sure to send listens before puts.
        for (const queries of this.listens.values())for (const listenSpec of queries.values())this.sendListen_(listenSpec);
        for(let i = 0; i < this.outstandingPuts_.length; i++)if (this.outstandingPuts_[i]) this.sendPut_(i);
        while(this.onDisconnectRequestQueue_.length){
            const request = this.onDisconnectRequestQueue_.shift();
            this.sendOnDisconnect_(request.action, request.pathString, request.data, request.onComplete);
        }
        for(let i2 = 0; i2 < this.outstandingGets_.length; i2++)if (this.outstandingGets_[i2]) this.sendGet_(i2);
    }
    /**
     * Sends client stats for first connection
     */ sendConnectStats_() {
        const stats = {
        };
        let clientName = 'js';
        if (_util.isNodeSdk()) {
            if (this.repoInfo_.nodeAdmin) clientName = 'admin_node';
            else clientName = 'node';
        }
        stats['sdk.' + clientName + '.' + SDK_VERSION.replace(/\./g, '-')] = 1;
        if (_util.isMobileCordova()) stats['framework.cordova'] = 1;
        else if (_util.isReactNative()) stats['framework.reactnative'] = 1;
        this.reportStats(stats);
    }
    shouldReconnect_() {
        const online = OnlineMonitor.getInstance().currentlyOnline();
        return _util.isEmpty(this.interruptReasons_) && online;
    }
}
PersistentConnection.nextPersistentConnectionId_ = 0;
/**
 * Counter for number of connections created. Mainly used for tagging in the logs
 */ PersistentConnection.nextConnectionId_ = 0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class NamedNode {
    constructor(name3, node){
        this.name = name3;
        this.node = node;
    }
    static Wrap(name4, node) {
        return new NamedNode(name4, node);
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Index {
    /**
     * @returns A standalone comparison function for
     * this index
     */ getCompare() {
        return this.compare.bind(this);
    }
    /**
     * Given a before and after value for a node, determine if the indexed value has changed. Even if they are different,
     * it's possible that the changes are isolated to parts of the snapshot that are not indexed.
     *
     *
     * @returns True if the portion of the snapshot being indexed changed between oldNode and newNode
     */ indexedValueChanged(oldNode, newNode) {
        const oldWrapped = new NamedNode(MIN_NAME, oldNode);
        const newWrapped = new NamedNode(MIN_NAME, newNode);
        return this.compare(oldWrapped, newWrapped) !== 0;
    }
    /**
     * @returns a node wrapper that will sort equal to or less than
     * any other node wrapper, using this index
     */ minPost() {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return NamedNode.MIN;
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let __EMPTY_NODE;
class KeyIndex extends Index {
    static get __EMPTY_NODE() {
        return __EMPTY_NODE;
    }
    static set __EMPTY_NODE(val) {
        __EMPTY_NODE = val;
    }
    compare(a, b) {
        return nameCompare(a.name, b.name);
    }
    isDefinedOn(node) {
        // We could probably return true here (since every node has a key), but it's never called
        // so just leaving unimplemented for now.
        throw _util.assertionError('KeyIndex.isDefinedOn not expected to be called.');
    }
    indexedValueChanged(oldNode, newNode) {
        return false; // The key for a node never changes.
    }
    minPost() {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return NamedNode.MIN;
    }
    maxPost() {
        // TODO: This should really be created once and cached in a static property, but
        // NamedNode isn't defined yet, so I can't use it in a static.  Bleh.
        return new NamedNode(MAX_NAME, __EMPTY_NODE);
    }
    makePost(indexValue, name) {
        _util.assert(typeof indexValue === 'string', 'KeyIndex indexValue must always be a string.');
        // We just use empty node, but it'll never be compared, since our comparator only looks at name.
        return new NamedNode(indexValue, __EMPTY_NODE);
    }
    /**
     * @returns String representation for inclusion in a query spec
     */ toString() {
        return '.key';
    }
}
const KEY_INDEX = new KeyIndex();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * An iterator over an LLRBNode.
 */ class SortedMapIterator {
    /**
     * @param node - Node to iterate.
     * @param isReverse_ - Whether or not to iterate in reverse
     */ constructor(node, startKey, comparator, isReverse_, resultGenerator_ = null){
        this.isReverse_ = isReverse_;
        this.resultGenerator_ = resultGenerator_;
        this.nodeStack_ = [];
        let cmp = 1;
        while(!node.isEmpty()){
            cmp = startKey ? comparator(node.key, startKey) : 1;
            // flip the comparison if we're going in reverse
            if (isReverse_) cmp *= -1;
            if (cmp < 0) {
                // This node is less than our start key. ignore it
                if (this.isReverse_) node = node.left;
                else node = node.right;
            } else if (cmp === 0) {
                // This node is exactly equal to our start key. Push it on the stack, but stop iterating;
                this.nodeStack_.push(node);
                break;
            } else {
                // This node is greater than our start key, add it to the stack and move to the next one
                this.nodeStack_.push(node);
                if (this.isReverse_) node = node.right;
                else node = node.left;
            }
        }
    }
    getNext() {
        if (this.nodeStack_.length === 0) return null;
        let node = this.nodeStack_.pop();
        let result;
        if (this.resultGenerator_) result = this.resultGenerator_(node.key, node.value);
        else result = {
            key: node.key,
            value: node.value
        };
        if (this.isReverse_) {
            node = node.left;
            while(!node.isEmpty()){
                this.nodeStack_.push(node);
                node = node.right;
            }
        } else {
            node = node.right;
            while(!node.isEmpty()){
                this.nodeStack_.push(node);
                node = node.left;
            }
        }
        return result;
    }
    hasNext() {
        return this.nodeStack_.length > 0;
    }
    peek() {
        if (this.nodeStack_.length === 0) return null;
        const node = this.nodeStack_[this.nodeStack_.length - 1];
        if (this.resultGenerator_) return this.resultGenerator_(node.key, node.value);
        else return {
            key: node.key,
            value: node.value
        };
    }
}
/**
 * Represents a node in a Left-leaning Red-Black tree.
 */ class LLRBNode {
    /**
     * @param key - Key associated with this node.
     * @param value - Value associated with this node.
     * @param color - Whether this node is red.
     * @param left - Left child.
     * @param right - Right child.
     */ constructor(key, value, color, left, right){
        this.key = key;
        this.value = value;
        this.color = color != null ? color : LLRBNode.RED;
        this.left = left != null ? left : SortedMap.EMPTY_NODE;
        this.right = right != null ? right : SortedMap.EMPTY_NODE;
    }
    /**
     * Returns a copy of the current node, optionally replacing pieces of it.
     *
     * @param key - New key for the node, or null.
     * @param value - New value for the node, or null.
     * @param color - New color for the node, or null.
     * @param left - New left child for the node, or null.
     * @param right - New right child for the node, or null.
     * @returns The node copy.
     */ copy(key, value, color, left, right) {
        return new LLRBNode(key != null ? key : this.key, value != null ? value : this.value, color != null ? color : this.color, left != null ? left : this.left, right != null ? right : this.right);
    }
    /**
     * @returns The total number of nodes in the tree.
     */ count() {
        return this.left.count() + 1 + this.right.count();
    }
    /**
     * @returns True if the tree is empty.
     */ isEmpty() {
        return false;
    }
    /**
     * Traverses the tree in key order and calls the specified action function
     * for each node.
     *
     * @param action - Callback function to be called for each
     *   node.  If it returns true, traversal is aborted.
     * @returns The first truthy value returned by action, or the last falsey
     *   value returned by action
     */ inorderTraversal(action) {
        return this.left.inorderTraversal(action) || !!action(this.key, this.value) || this.right.inorderTraversal(action);
    }
    /**
     * Traverses the tree in reverse key order and calls the specified action function
     * for each node.
     *
     * @param action - Callback function to be called for each
     * node.  If it returns true, traversal is aborted.
     * @returns True if traversal was aborted.
     */ reverseTraversal(action) {
        return this.right.reverseTraversal(action) || action(this.key, this.value) || this.left.reverseTraversal(action);
    }
    /**
     * @returns The minimum node in the tree.
     */ min_() {
        if (this.left.isEmpty()) return this;
        else return this.left.min_();
    }
    /**
     * @returns The maximum key in the tree.
     */ minKey() {
        return this.min_().key;
    }
    /**
     * @returns The maximum key in the tree.
     */ maxKey() {
        if (this.right.isEmpty()) return this.key;
        else return this.right.maxKey();
    }
    /**
     * @param key - Key to insert.
     * @param value - Value to insert.
     * @param comparator - Comparator.
     * @returns New tree, with the key/value added.
     */ insert(key, value, comparator) {
        let n = this;
        const cmp = comparator(key, n.key);
        if (cmp < 0) n = n.copy(null, null, null, n.left.insert(key, value, comparator), null);
        else if (cmp === 0) n = n.copy(null, value, null, null, null);
        else n = n.copy(null, null, null, null, n.right.insert(key, value, comparator));
        return n.fixUp_();
    }
    /**
     * @returns New tree, with the minimum key removed.
     */ removeMin_() {
        if (this.left.isEmpty()) return SortedMap.EMPTY_NODE;
        let n = this;
        if (!n.left.isRed_() && !n.left.left.isRed_()) n = n.moveRedLeft_();
        n = n.copy(null, null, null, n.left.removeMin_(), null);
        return n.fixUp_();
    }
    /**
     * @param key - The key of the item to remove.
     * @param comparator - Comparator.
     * @returns New tree, with the specified item removed.
     */ remove(key, comparator) {
        let n, smallest;
        n = this;
        if (comparator(key, n.key) < 0) {
            if (!n.left.isEmpty() && !n.left.isRed_() && !n.left.left.isRed_()) n = n.moveRedLeft_();
            n = n.copy(null, null, null, n.left.remove(key, comparator), null);
        } else {
            if (n.left.isRed_()) n = n.rotateRight_();
            if (!n.right.isEmpty() && !n.right.isRed_() && !n.right.left.isRed_()) n = n.moveRedRight_();
            if (comparator(key, n.key) === 0) {
                if (n.right.isEmpty()) return SortedMap.EMPTY_NODE;
                else {
                    smallest = n.right.min_();
                    n = n.copy(smallest.key, smallest.value, null, null, n.right.removeMin_());
                }
            }
            n = n.copy(null, null, null, null, n.right.remove(key, comparator));
        }
        return n.fixUp_();
    }
    /**
     * @returns Whether this is a RED node.
     */ isRed_() {
        return this.color;
    }
    /**
     * @returns New tree after performing any needed rotations.
     */ fixUp_() {
        let n = this;
        if (n.right.isRed_() && !n.left.isRed_()) n = n.rotateLeft_();
        if (n.left.isRed_() && n.left.left.isRed_()) n = n.rotateRight_();
        if (n.left.isRed_() && n.right.isRed_()) n = n.colorFlip_();
        return n;
    }
    /**
     * @returns New tree, after moveRedLeft.
     */ moveRedLeft_() {
        let n = this.colorFlip_();
        if (n.right.left.isRed_()) {
            n = n.copy(null, null, null, null, n.right.rotateRight_());
            n = n.rotateLeft_();
            n = n.colorFlip_();
        }
        return n;
    }
    /**
     * @returns New tree, after moveRedRight.
     */ moveRedRight_() {
        let n = this.colorFlip_();
        if (n.left.left.isRed_()) {
            n = n.rotateRight_();
            n = n.colorFlip_();
        }
        return n;
    }
    /**
     * @returns New tree, after rotateLeft.
     */ rotateLeft_() {
        const nl = this.copy(null, null, LLRBNode.RED, null, this.right.left);
        return this.right.copy(null, null, this.color, nl, null);
    }
    /**
     * @returns New tree, after rotateRight.
     */ rotateRight_() {
        const nr = this.copy(null, null, LLRBNode.RED, this.left.right, null);
        return this.left.copy(null, null, this.color, null, nr);
    }
    /**
     * @returns Newt ree, after colorFlip.
     */ colorFlip_() {
        const left = this.left.copy(null, null, !this.left.color, null, null);
        const right = this.right.copy(null, null, !this.right.color, null, null);
        return this.copy(null, null, !this.color, left, right);
    }
    /**
     * For testing.
     *
     * @returns True if all is well.
     */ checkMaxDepth_() {
        const blackDepth = this.check_();
        return Math.pow(2, blackDepth) <= this.count() + 1;
    }
    check_() {
        if (this.isRed_() && this.left.isRed_()) throw new Error('Red node has red child(' + this.key + ',' + this.value + ')');
        if (this.right.isRed_()) throw new Error('Right child of (' + this.key + ',' + this.value + ') is red');
        const blackDepth = this.left.check_();
        if (blackDepth !== this.right.check_()) throw new Error('Black depths differ');
        else return blackDepth + (this.isRed_() ? 0 : 1);
    }
}
LLRBNode.RED = true;
LLRBNode.BLACK = false;
/**
 * Represents an empty node (a leaf node in the Red-Black Tree).
 */ class LLRBEmptyNode {
    /**
     * Returns a copy of the current node.
     *
     * @returns The node copy.
     */ copy(key, value, color, left, right) {
        return this;
    }
    /**
     * Returns a copy of the tree, with the specified key/value added.
     *
     * @param key - Key to be added.
     * @param value - Value to be added.
     * @param comparator - Comparator.
     * @returns New tree, with item added.
     */ insert(key, value, comparator) {
        return new LLRBNode(key, value, null);
    }
    /**
     * Returns a copy of the tree, with the specified key removed.
     *
     * @param key - The key to remove.
     * @param comparator - Comparator.
     * @returns New tree, with item removed.
     */ remove(key, comparator) {
        return this;
    }
    /**
     * @returns The total number of nodes in the tree.
     */ count() {
        return 0;
    }
    /**
     * @returns True if the tree is empty.
     */ isEmpty() {
        return true;
    }
    /**
     * Traverses the tree in key order and calls the specified action function
     * for each node.
     *
     * @param action - Callback function to be called for each
     * node.  If it returns true, traversal is aborted.
     * @returns True if traversal was aborted.
     */ inorderTraversal(action) {
        return false;
    }
    /**
     * Traverses the tree in reverse key order and calls the specified action function
     * for each node.
     *
     * @param action - Callback function to be called for each
     * node.  If it returns true, traversal is aborted.
     * @returns True if traversal was aborted.
     */ reverseTraversal(action) {
        return false;
    }
    minKey() {
        return null;
    }
    maxKey() {
        return null;
    }
    check_() {
        return 0;
    }
    /**
     * @returns Whether this node is red.
     */ isRed_() {
        return false;
    }
}
/**
 * An immutable sorted map implementation, based on a Left-leaning Red-Black
 * tree.
 */ class SortedMap {
    /**
     * @param comparator_ - Key comparator.
     * @param root_ - Optional root node for the map.
     */ constructor(comparator_, root_ = SortedMap.EMPTY_NODE){
        this.comparator_ = comparator_;
        this.root_ = root_;
    }
    /**
     * Returns a copy of the map, with the specified key/value added or replaced.
     * (TODO: We should perhaps rename this method to 'put')
     *
     * @param key - Key to be added.
     * @param value - Value to be added.
     * @returns New map, with item added.
     */ insert(key, value) {
        return new SortedMap(this.comparator_, this.root_.insert(key, value, this.comparator_).copy(null, null, LLRBNode.BLACK, null, null));
    }
    /**
     * Returns a copy of the map, with the specified key removed.
     *
     * @param key - The key to remove.
     * @returns New map, with item removed.
     */ remove(key) {
        return new SortedMap(this.comparator_, this.root_.remove(key, this.comparator_).copy(null, null, LLRBNode.BLACK, null, null));
    }
    /**
     * Returns the value of the node with the given key, or null.
     *
     * @param key - The key to look up.
     * @returns The value of the node with the given key, or null if the
     * key doesn't exist.
     */ get(key) {
        let cmp;
        let node = this.root_;
        while(!node.isEmpty()){
            cmp = this.comparator_(key, node.key);
            if (cmp === 0) return node.value;
            else if (cmp < 0) node = node.left;
            else if (cmp > 0) node = node.right;
        }
        return null;
    }
    /**
     * Returns the key of the item *before* the specified key, or null if key is the first item.
     * @param key - The key to find the predecessor of
     * @returns The predecessor key.
     */ getPredecessorKey(key) {
        let cmp, node = this.root_, rightParent = null;
        while(!node.isEmpty()){
            cmp = this.comparator_(key, node.key);
            if (cmp === 0) {
                if (!node.left.isEmpty()) {
                    node = node.left;
                    while(!node.right.isEmpty())node = node.right;
                    return node.key;
                } else if (rightParent) return rightParent.key;
                else return null; // first item.
            } else if (cmp < 0) node = node.left;
            else if (cmp > 0) {
                rightParent = node;
                node = node.right;
            }
        }
        throw new Error('Attempted to find predecessor key for a nonexistent key.  What gives?');
    }
    /**
     * @returns True if the map is empty.
     */ isEmpty() {
        return this.root_.isEmpty();
    }
    /**
     * @returns The total number of nodes in the map.
     */ count() {
        return this.root_.count();
    }
    /**
     * @returns The minimum key in the map.
     */ minKey() {
        return this.root_.minKey();
    }
    /**
     * @returns The maximum key in the map.
     */ maxKey() {
        return this.root_.maxKey();
    }
    /**
     * Traverses the map in key order and calls the specified action function
     * for each key/value pair.
     *
     * @param action - Callback function to be called
     * for each key/value pair.  If action returns true, traversal is aborted.
     * @returns The first truthy value returned by action, or the last falsey
     *   value returned by action
     */ inorderTraversal(action) {
        return this.root_.inorderTraversal(action);
    }
    /**
     * Traverses the map in reverse key order and calls the specified action function
     * for each key/value pair.
     *
     * @param action - Callback function to be called
     * for each key/value pair.  If action returns true, traversal is aborted.
     * @returns True if the traversal was aborted.
     */ reverseTraversal(action) {
        return this.root_.reverseTraversal(action);
    }
    /**
     * Returns an iterator over the SortedMap.
     * @returns The iterator.
     */ getIterator(resultGenerator) {
        return new SortedMapIterator(this.root_, null, this.comparator_, false, resultGenerator);
    }
    getIteratorFrom(key, resultGenerator) {
        return new SortedMapIterator(this.root_, key, this.comparator_, false, resultGenerator);
    }
    getReverseIteratorFrom(key, resultGenerator) {
        return new SortedMapIterator(this.root_, key, this.comparator_, true, resultGenerator);
    }
    getReverseIterator(resultGenerator) {
        return new SortedMapIterator(this.root_, null, this.comparator_, true, resultGenerator);
    }
}
/**
 * Always use the same empty node, to reduce memory.
 */ SortedMap.EMPTY_NODE = new LLRBEmptyNode();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function NAME_ONLY_COMPARATOR(left, right) {
    return nameCompare(left.name, right.name);
}
function NAME_COMPARATOR(left, right) {
    return nameCompare(left, right);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let MAX_NODE$2;
function setMaxNode$1(val) {
    MAX_NODE$2 = val;
}
const priorityHashText = function(priority) {
    if (typeof priority === 'number') return 'number:' + doubleToIEEE754String(priority);
    else return 'string:' + priority;
};
/**
 * Validates that a priority snapshot Node is valid.
 */ const validatePriorityNode = function(priorityNode) {
    if (priorityNode.isLeafNode()) {
        const val = priorityNode.val();
        _util.assert(typeof val === 'string' || typeof val === 'number' || typeof val === 'object' && _util.contains(val, '.sv'), 'Priority must be a string or number.');
    } else _util.assert(priorityNode === MAX_NODE$2 || priorityNode.isEmpty(), 'priority of unexpected type.');
    // Don't call getPriority() on MAX_NODE to avoid hitting assertion.
    _util.assert(priorityNode === MAX_NODE$2 || priorityNode.getPriority().isEmpty(), "Priority nodes can't have a priority of their own.");
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let __childrenNodeConstructor;
/**
 * LeafNode is a class for storing leaf nodes in a DataSnapshot.  It
 * implements Node and stores the value of the node (a string,
 * number, or boolean) accessible via getValue().
 */ class LeafNode {
    /**
     * @param value_ - The value to store in this leaf node. The object type is
     * possible in the event of a deferred value
     * @param priorityNode_ - The priority of this node.
     */ constructor(value_, priorityNode_ = LeafNode.__childrenNodeConstructor.EMPTY_NODE){
        this.value_ = value_;
        this.priorityNode_ = priorityNode_;
        this.lazyHash_ = null;
        _util.assert(this.value_ !== undefined && this.value_ !== null, "LeafNode shouldn't be created with null/undefined value.");
        validatePriorityNode(this.priorityNode_);
    }
    static set __childrenNodeConstructor(val) {
        __childrenNodeConstructor = val;
    }
    static get __childrenNodeConstructor() {
        return __childrenNodeConstructor;
    }
    /** @inheritDoc */ isLeafNode() {
        return true;
    }
    /** @inheritDoc */ getPriority() {
        return this.priorityNode_;
    }
    /** @inheritDoc */ updatePriority(newPriorityNode) {
        return new LeafNode(this.value_, newPriorityNode);
    }
    /** @inheritDoc */ getImmediateChild(childName) {
        // Hack to treat priority as a regular child
        if (childName === '.priority') return this.priorityNode_;
        else return LeafNode.__childrenNodeConstructor.EMPTY_NODE;
    }
    /** @inheritDoc */ getChild(path) {
        if (pathIsEmpty(path)) return this;
        else if (pathGetFront(path) === '.priority') return this.priorityNode_;
        else return LeafNode.__childrenNodeConstructor.EMPTY_NODE;
    }
    hasChild() {
        return false;
    }
    /** @inheritDoc */ getPredecessorChildName(childName, childNode) {
        return null;
    }
    /** @inheritDoc */ updateImmediateChild(childName, newChildNode) {
        if (childName === '.priority') return this.updatePriority(newChildNode);
        else if (newChildNode.isEmpty() && childName !== '.priority') return this;
        else return LeafNode.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(childName, newChildNode).updatePriority(this.priorityNode_);
    }
    /** @inheritDoc */ updateChild(path, newChildNode) {
        const front = pathGetFront(path);
        if (front === null) return newChildNode;
        else if (newChildNode.isEmpty() && front !== '.priority') return this;
        else {
            _util.assert(front !== '.priority' || pathGetLength(path) === 1, '.priority must be the last token in a path');
            return this.updateImmediateChild(front, LeafNode.__childrenNodeConstructor.EMPTY_NODE.updateChild(pathPopFront(path), newChildNode));
        }
    }
    /** @inheritDoc */ isEmpty() {
        return false;
    }
    /** @inheritDoc */ numChildren() {
        return 0;
    }
    /** @inheritDoc */ forEachChild(index, action) {
        return false;
    }
    val(exportFormat) {
        if (exportFormat && !this.getPriority().isEmpty()) return {
            '.value': this.getValue(),
            '.priority': this.getPriority().val()
        };
        else return this.getValue();
    }
    /** @inheritDoc */ hash() {
        if (this.lazyHash_ === null) {
            let toHash = '';
            if (!this.priorityNode_.isEmpty()) toHash += 'priority:' + priorityHashText(this.priorityNode_.val()) + ':';
            const type = typeof this.value_;
            toHash += type + ':';
            if (type === 'number') toHash += doubleToIEEE754String(this.value_);
            else toHash += this.value_;
            this.lazyHash_ = sha1(toHash);
        }
        return this.lazyHash_;
    }
    /**
     * Returns the value of the leaf node.
     * @returns The value of the node.
     */ getValue() {
        return this.value_;
    }
    compareTo(other) {
        if (other === LeafNode.__childrenNodeConstructor.EMPTY_NODE) return 1;
        else if (other instanceof LeafNode.__childrenNodeConstructor) return -1;
        else {
            _util.assert(other.isLeafNode(), 'Unknown node type');
            return this.compareToLeafNode_(other);
        }
    }
    /**
     * Comparison specifically for two leaf nodes
     */ compareToLeafNode_(otherLeaf) {
        const otherLeafType = typeof otherLeaf.value_;
        const thisLeafType = typeof this.value_;
        const otherIndex = LeafNode.VALUE_TYPE_ORDER.indexOf(otherLeafType);
        const thisIndex = LeafNode.VALUE_TYPE_ORDER.indexOf(thisLeafType);
        _util.assert(otherIndex >= 0, 'Unknown leaf type: ' + otherLeafType);
        _util.assert(thisIndex >= 0, 'Unknown leaf type: ' + thisLeafType);
        if (otherIndex === thisIndex) {
            // Same type, compare values
            if (thisLeafType === 'object') // Deferred value nodes are all equal, but we should also never get to this point...
            return 0;
            else {
                // Note that this works because true > false, all others are number or string comparisons
                if (this.value_ < otherLeaf.value_) return -1;
                else if (this.value_ === otherLeaf.value_) return 0;
                else return 1;
            }
        } else return thisIndex - otherIndex;
    }
    withIndex() {
        return this;
    }
    isIndexed() {
        return true;
    }
    equals(other) {
        if (other === this) return true;
        else if (other.isLeafNode()) {
            const otherLeaf = other;
            return this.value_ === otherLeaf.value_ && this.priorityNode_.equals(otherLeaf.priorityNode_);
        } else return false;
    }
}
/**
 * The sort order for comparing leaf nodes of different types. If two leaf nodes have
 * the same type, the comparison falls back to their value
 */ LeafNode.VALUE_TYPE_ORDER = [
    'object',
    'boolean',
    'number',
    'string'
];
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let nodeFromJSON$1;
let MAX_NODE$1;
function setNodeFromJSON(val) {
    nodeFromJSON$1 = val;
}
function setMaxNode(val) {
    MAX_NODE$1 = val;
}
class PriorityIndex extends Index {
    compare(a, b) {
        const aPriority = a.node.getPriority();
        const bPriority = b.node.getPriority();
        const indexCmp = aPriority.compareTo(bPriority);
        if (indexCmp === 0) return nameCompare(a.name, b.name);
        else return indexCmp;
    }
    isDefinedOn(node) {
        return !node.getPriority().isEmpty();
    }
    indexedValueChanged(oldNode, newNode) {
        return !oldNode.getPriority().equals(newNode.getPriority());
    }
    minPost() {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return NamedNode.MIN;
    }
    maxPost() {
        return new NamedNode(MAX_NAME, new LeafNode('[PRIORITY-POST]', MAX_NODE$1));
    }
    makePost(indexValue, name5) {
        const priorityNode = nodeFromJSON$1(indexValue);
        return new NamedNode(name5, new LeafNode('[PRIORITY-POST]', priorityNode));
    }
    /**
     * @returns String representation for inclusion in a query spec
     */ toString() {
        return '.priority';
    }
}
const PRIORITY_INDEX = new PriorityIndex();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const LOG_2 = Math.log(2);
class Base12Num {
    constructor(length){
        const logBase2 = (num)=>// eslint-disable-next-line @typescript-eslint/no-explicit-any
            parseInt(Math.log(num) / LOG_2, 10)
        ;
        const bitMask = (bits)=>parseInt(Array(bits + 1).join('1'), 2)
        ;
        this.count = logBase2(length + 1);
        this.current_ = this.count - 1;
        const mask = bitMask(this.count);
        this.bits_ = length + 1 & mask;
    }
    nextBitIsOne() {
        //noinspection JSBitwiseOperatorUsage
        const result = !(this.bits_ & 1 << this.current_);
        this.current_--;
        return result;
    }
}
/**
 * Takes a list of child nodes and constructs a SortedSet using the given comparison
 * function
 *
 * Uses the algorithm described in the paper linked here:
 * http://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.46.1458
 *
 * @param childList - Unsorted list of children
 * @param cmp - The comparison method to be used
 * @param keyFn - An optional function to extract K from a node wrapper, if K's
 * type is not NamedNode
 * @param mapSortFn - An optional override for comparator used by the generated sorted map
 */ const buildChildSet = function(childList, cmp, keyFn, mapSortFn) {
    childList.sort(cmp);
    const buildBalancedTree = function(low, high) {
        const length = high - low;
        let namedNode;
        let key;
        if (length === 0) return null;
        else if (length === 1) {
            namedNode = childList[low];
            key = keyFn ? keyFn(namedNode) : namedNode;
            return new LLRBNode(key, namedNode.node, LLRBNode.BLACK, null, null);
        } else {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const middle = parseInt(length / 2, 10) + low;
            const left = buildBalancedTree(low, middle);
            const right = buildBalancedTree(middle + 1, high);
            namedNode = childList[middle];
            key = keyFn ? keyFn(namedNode) : namedNode;
            return new LLRBNode(key, namedNode.node, LLRBNode.BLACK, left, right);
        }
    };
    const buildFrom12Array = function(base12) {
        let node = null;
        let root = null;
        let index = childList.length;
        const buildPennant = function(chunkSize, color) {
            const low = index - chunkSize;
            const high = index;
            index -= chunkSize;
            const childTree = buildBalancedTree(low + 1, high);
            const namedNode = childList[low];
            const key = keyFn ? keyFn(namedNode) : namedNode;
            attachPennant(new LLRBNode(key, namedNode.node, color, null, childTree));
        };
        const attachPennant = function(pennant) {
            if (node) {
                node.left = pennant;
                node = pennant;
            } else {
                root = pennant;
                node = pennant;
            }
        };
        for(let i = 0; i < base12.count; ++i){
            const isOne = base12.nextBitIsOne();
            // The number of nodes taken in each slice is 2^(arr.length - (i + 1))
            const chunkSize = Math.pow(2, base12.count - (i + 1));
            if (isOne) buildPennant(chunkSize, LLRBNode.BLACK);
            else {
                // current == 2
                buildPennant(chunkSize, LLRBNode.BLACK);
                buildPennant(chunkSize, LLRBNode.RED);
            }
        }
        return root;
    };
    const base121 = new Base12Num(childList.length);
    const root1 = buildFrom12Array(base121);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return new SortedMap(mapSortFn || cmp, root1);
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let _defaultIndexMap;
const fallbackObject = {
};
class IndexMap {
    constructor(indexes_, indexSet_){
        this.indexes_ = indexes_;
        this.indexSet_ = indexSet_;
    }
    /**
     * The default IndexMap for nodes without a priority
     */ static get Default() {
        _util.assert(fallbackObject && PRIORITY_INDEX, 'ChildrenNode.ts has not been loaded');
        _defaultIndexMap = _defaultIndexMap || new IndexMap({
            '.priority': fallbackObject
        }, {
            '.priority': PRIORITY_INDEX
        });
        return _defaultIndexMap;
    }
    get(indexKey) {
        const sortedMap = _util.safeGet(this.indexes_, indexKey);
        if (!sortedMap) throw new Error('No index defined for ' + indexKey);
        if (sortedMap instanceof SortedMap) return sortedMap;
        else // The index exists, but it falls back to just name comparison. Return null so that the calling code uses the
        // regular child map
        return null;
    }
    hasIndex(indexDefinition) {
        return _util.contains(this.indexSet_, indexDefinition.toString());
    }
    addIndex(indexDefinition, existingChildren) {
        _util.assert(indexDefinition !== KEY_INDEX, "KeyIndex always exists and isn't meant to be added to the IndexMap.");
        const childList = [];
        let sawIndexedValue = false;
        const iter = existingChildren.getIterator(NamedNode.Wrap);
        let next = iter.getNext();
        while(next){
            sawIndexedValue = sawIndexedValue || indexDefinition.isDefinedOn(next.node);
            childList.push(next);
            next = iter.getNext();
        }
        let newIndex;
        if (sawIndexedValue) newIndex = buildChildSet(childList, indexDefinition.getCompare());
        else newIndex = fallbackObject;
        const indexName = indexDefinition.toString();
        const newIndexSet = Object.assign({
        }, this.indexSet_);
        newIndexSet[indexName] = indexDefinition;
        const newIndexes = Object.assign({
        }, this.indexes_);
        newIndexes[indexName] = newIndex;
        return new IndexMap(newIndexes, newIndexSet);
    }
    /**
     * Ensure that this node is properly tracked in any indexes that we're maintaining
     */ addToIndexes(namedNode, existingChildren) {
        const newIndexes = _util.map(this.indexes_, (indexedChildren, indexName)=>{
            const index = _util.safeGet(this.indexSet_, indexName);
            _util.assert(index, 'Missing index implementation for ' + indexName);
            if (indexedChildren === fallbackObject) {
                // Check to see if we need to index everything
                if (index.isDefinedOn(namedNode.node)) {
                    // We need to build this index
                    const childList = [];
                    const iter = existingChildren.getIterator(NamedNode.Wrap);
                    let next = iter.getNext();
                    while(next){
                        if (next.name !== namedNode.name) childList.push(next);
                        next = iter.getNext();
                    }
                    childList.push(namedNode);
                    return buildChildSet(childList, index.getCompare());
                } else // No change, this remains a fallback
                return fallbackObject;
            } else {
                const existingSnap = existingChildren.get(namedNode.name);
                let newChildren = indexedChildren;
                if (existingSnap) newChildren = newChildren.remove(new NamedNode(namedNode.name, existingSnap));
                return newChildren.insert(namedNode, namedNode.node);
            }
        });
        return new IndexMap(newIndexes, this.indexSet_);
    }
    /**
     * Create a new IndexMap instance with the given value removed
     */ removeFromIndexes(namedNode, existingChildren) {
        const newIndexes = _util.map(this.indexes_, (indexedChildren)=>{
            if (indexedChildren === fallbackObject) // This is the fallback. Just return it, nothing to do in this case
            return indexedChildren;
            else {
                const existingSnap = existingChildren.get(namedNode.name);
                if (existingSnap) return indexedChildren.remove(new NamedNode(namedNode.name, existingSnap));
                else // No record of this child
                return indexedChildren;
            }
        });
        return new IndexMap(newIndexes, this.indexSet_);
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // TODO: For memory savings, don't store priorityNode_ if it's empty.
let EMPTY_NODE;
/**
 * ChildrenNode is a class for storing internal nodes in a DataSnapshot
 * (i.e. nodes with children).  It implements Node and stores the
 * list of children in the children property, sorted by child name.
 */ class ChildrenNode {
    /**
     * @param children_ - List of children of this node..
     * @param priorityNode_ - The priority of this node (as a snapshot node).
     */ constructor(children_, priorityNode_, indexMap_){
        this.children_ = children_;
        this.priorityNode_ = priorityNode_;
        this.indexMap_ = indexMap_;
        this.lazyHash_ = null;
        /**
         * Note: The only reason we allow null priority is for EMPTY_NODE, since we can't use
         * EMPTY_NODE as the priority of EMPTY_NODE.  We might want to consider making EMPTY_NODE its own
         * class instead of an empty ChildrenNode.
         */ if (this.priorityNode_) validatePriorityNode(this.priorityNode_);
        if (this.children_.isEmpty()) _util.assert(!this.priorityNode_ || this.priorityNode_.isEmpty(), 'An empty node cannot have a priority');
    }
    static get EMPTY_NODE() {
        return EMPTY_NODE || (EMPTY_NODE = new ChildrenNode(new SortedMap(NAME_COMPARATOR), null, IndexMap.Default));
    }
    /** @inheritDoc */ isLeafNode() {
        return false;
    }
    /** @inheritDoc */ getPriority() {
        return this.priorityNode_ || EMPTY_NODE;
    }
    /** @inheritDoc */ updatePriority(newPriorityNode) {
        if (this.children_.isEmpty()) // Don't allow priorities on empty nodes
        return this;
        else return new ChildrenNode(this.children_, newPriorityNode, this.indexMap_);
    }
    /** @inheritDoc */ getImmediateChild(childName) {
        // Hack to treat priority as a regular child
        if (childName === '.priority') return this.getPriority();
        else {
            const child2 = this.children_.get(childName);
            return child2 === null ? EMPTY_NODE : child2;
        }
    }
    /** @inheritDoc */ getChild(path) {
        const front = pathGetFront(path);
        if (front === null) return this;
        return this.getImmediateChild(front).getChild(pathPopFront(path));
    }
    /** @inheritDoc */ hasChild(childName) {
        return this.children_.get(childName) !== null;
    }
    /** @inheritDoc */ updateImmediateChild(childName, newChildNode) {
        _util.assert(newChildNode, 'We should always be passing snapshot nodes');
        if (childName === '.priority') return this.updatePriority(newChildNode);
        else {
            const namedNode = new NamedNode(childName, newChildNode);
            let newChildren, newIndexMap;
            if (newChildNode.isEmpty()) {
                newChildren = this.children_.remove(childName);
                newIndexMap = this.indexMap_.removeFromIndexes(namedNode, this.children_);
            } else {
                newChildren = this.children_.insert(childName, newChildNode);
                newIndexMap = this.indexMap_.addToIndexes(namedNode, this.children_);
            }
            const newPriority = newChildren.isEmpty() ? EMPTY_NODE : this.priorityNode_;
            return new ChildrenNode(newChildren, newPriority, newIndexMap);
        }
    }
    /** @inheritDoc */ updateChild(path, newChildNode) {
        const front = pathGetFront(path);
        if (front === null) return newChildNode;
        else {
            _util.assert(pathGetFront(path) !== '.priority' || pathGetLength(path) === 1, '.priority must be the last token in a path');
            const newImmediateChild = this.getImmediateChild(front).updateChild(pathPopFront(path), newChildNode);
            return this.updateImmediateChild(front, newImmediateChild);
        }
    }
    /** @inheritDoc */ isEmpty() {
        return this.children_.isEmpty();
    }
    /** @inheritDoc */ numChildren() {
        return this.children_.count();
    }
    /** @inheritDoc */ val(exportFormat) {
        if (this.isEmpty()) return null;
        const obj = {
        };
        let numKeys = 0, maxKey = 0, allIntegerKeys = true;
        this.forEachChild(PRIORITY_INDEX, (key, childNode)=>{
            obj[key] = childNode.val(exportFormat);
            numKeys++;
            if (allIntegerKeys && ChildrenNode.INTEGER_REGEXP_.test(key)) maxKey = Math.max(maxKey, Number(key));
            else allIntegerKeys = false;
        });
        if (!exportFormat && allIntegerKeys && maxKey < 2 * numKeys) {
            // convert to array.
            const array = [];
            // eslint-disable-next-line guard-for-in
            for(const key in obj)array[key] = obj[key];
            return array;
        } else {
            if (exportFormat && !this.getPriority().isEmpty()) obj['.priority'] = this.getPriority().val();
            return obj;
        }
    }
    /** @inheritDoc */ hash() {
        if (this.lazyHash_ === null) {
            let toHash = '';
            if (!this.getPriority().isEmpty()) toHash += 'priority:' + priorityHashText(this.getPriority().val()) + ':';
            this.forEachChild(PRIORITY_INDEX, (key, childNode)=>{
                const childHash = childNode.hash();
                if (childHash !== '') toHash += ':' + key + ':' + childHash;
            });
            this.lazyHash_ = toHash === '' ? '' : sha1(toHash);
        }
        return this.lazyHash_;
    }
    /** @inheritDoc */ getPredecessorChildName(childName, childNode, index) {
        const idx = this.resolveIndex_(index);
        if (idx) {
            const predecessor1 = idx.getPredecessorKey(new NamedNode(childName, childNode));
            return predecessor1 ? predecessor1.name : null;
        } else return this.children_.getPredecessorKey(childName);
    }
    getFirstChildName(indexDefinition) {
        const idx = this.resolveIndex_(indexDefinition);
        if (idx) {
            const minKey = idx.minKey();
            return minKey && minKey.name;
        } else return this.children_.minKey();
    }
    getFirstChild(indexDefinition) {
        const minKey = this.getFirstChildName(indexDefinition);
        if (minKey) return new NamedNode(minKey, this.children_.get(minKey));
        else return null;
    }
    /**
     * Given an index, return the key name of the largest value we have, according to that index
     */ getLastChildName(indexDefinition) {
        const idx = this.resolveIndex_(indexDefinition);
        if (idx) {
            const maxKey = idx.maxKey();
            return maxKey && maxKey.name;
        } else return this.children_.maxKey();
    }
    getLastChild(indexDefinition) {
        const maxKey = this.getLastChildName(indexDefinition);
        if (maxKey) return new NamedNode(maxKey, this.children_.get(maxKey));
        else return null;
    }
    forEachChild(index, action) {
        const idx = this.resolveIndex_(index);
        if (idx) return idx.inorderTraversal((wrappedNode)=>{
            return action(wrappedNode.name, wrappedNode.node);
        });
        else return this.children_.inorderTraversal(action);
    }
    getIterator(indexDefinition) {
        return this.getIteratorFrom(indexDefinition.minPost(), indexDefinition);
    }
    getIteratorFrom(startPost, indexDefinition) {
        const idx = this.resolveIndex_(indexDefinition);
        if (idx) return idx.getIteratorFrom(startPost, (key)=>key
        );
        else {
            const iterator = this.children_.getIteratorFrom(startPost.name, NamedNode.Wrap);
            let next = iterator.peek();
            while(next != null && indexDefinition.compare(next, startPost) < 0){
                iterator.getNext();
                next = iterator.peek();
            }
            return iterator;
        }
    }
    getReverseIterator(indexDefinition) {
        return this.getReverseIteratorFrom(indexDefinition.maxPost(), indexDefinition);
    }
    getReverseIteratorFrom(endPost, indexDefinition) {
        const idx = this.resolveIndex_(indexDefinition);
        if (idx) return idx.getReverseIteratorFrom(endPost, (key)=>{
            return key;
        });
        else {
            const iterator = this.children_.getReverseIteratorFrom(endPost.name, NamedNode.Wrap);
            let next = iterator.peek();
            while(next != null && indexDefinition.compare(next, endPost) > 0){
                iterator.getNext();
                next = iterator.peek();
            }
            return iterator;
        }
    }
    compareTo(other) {
        if (this.isEmpty()) {
            if (other.isEmpty()) return 0;
            else return -1;
        } else if (other.isLeafNode() || other.isEmpty()) return 1;
        else if (other === MAX_NODE) return -1;
        else // Must be another node with children.
        return 0;
    }
    withIndex(indexDefinition) {
        if (indexDefinition === KEY_INDEX || this.indexMap_.hasIndex(indexDefinition)) return this;
        else {
            const newIndexMap = this.indexMap_.addIndex(indexDefinition, this.children_);
            return new ChildrenNode(this.children_, this.priorityNode_, newIndexMap);
        }
    }
    isIndexed(index) {
        return index === KEY_INDEX || this.indexMap_.hasIndex(index);
    }
    equals(other) {
        if (other === this) return true;
        else if (other.isLeafNode()) return false;
        else {
            const otherChildrenNode = other;
            if (!this.getPriority().equals(otherChildrenNode.getPriority())) return false;
            else if (this.children_.count() === otherChildrenNode.children_.count()) {
                const thisIter = this.getIterator(PRIORITY_INDEX);
                const otherIter = otherChildrenNode.getIterator(PRIORITY_INDEX);
                let thisCurrent = thisIter.getNext();
                let otherCurrent = otherIter.getNext();
                while(thisCurrent && otherCurrent){
                    if (thisCurrent.name !== otherCurrent.name || !thisCurrent.node.equals(otherCurrent.node)) return false;
                    thisCurrent = thisIter.getNext();
                    otherCurrent = otherIter.getNext();
                }
                return thisCurrent === null && otherCurrent === null;
            } else return false;
        }
    }
    /**
     * Returns a SortedMap ordered by index, or null if the default (by-key) ordering can be used
     * instead.
     *
     */ resolveIndex_(indexDefinition) {
        if (indexDefinition === KEY_INDEX) return null;
        else return this.indexMap_.get(indexDefinition.toString());
    }
}
ChildrenNode.INTEGER_REGEXP_ = /^(0|[1-9]\d*)$/;
class MaxNode extends ChildrenNode {
    constructor(){
        super(new SortedMap(NAME_COMPARATOR), ChildrenNode.EMPTY_NODE, IndexMap.Default);
    }
    compareTo(other) {
        if (other === this) return 0;
        else return 1;
    }
    equals(other) {
        // Not that we every compare it, but MAX_NODE is only ever equal to itself
        return other === this;
    }
    getPriority() {
        return this;
    }
    getImmediateChild(childName) {
        return ChildrenNode.EMPTY_NODE;
    }
    isEmpty() {
        return false;
    }
}
/**
 * Marker that will sort higher than any other snapshot.
 */ const MAX_NODE = new MaxNode();
Object.defineProperties(NamedNode, {
    MIN: {
        value: new NamedNode(MIN_NAME, ChildrenNode.EMPTY_NODE)
    },
    MAX: {
        value: new NamedNode(MAX_NAME, MAX_NODE)
    }
});
/**
 * Reference Extensions
 */ KeyIndex.__EMPTY_NODE = ChildrenNode.EMPTY_NODE;
LeafNode.__childrenNodeConstructor = ChildrenNode;
setMaxNode$1(MAX_NODE);
setMaxNode(MAX_NODE);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const USE_HINZE = true;
/**
 * Constructs a snapshot node representing the passed JSON and returns it.
 * @param json - JSON to create a node for.
 * @param priority - Optional priority to use.  This will be ignored if the
 * passed JSON contains a .priority property.
 */ function nodeFromJSON(json, priority = null) {
    if (json === null) return ChildrenNode.EMPTY_NODE;
    if (typeof json === 'object' && '.priority' in json) priority = json['.priority'];
    _util.assert(priority === null || typeof priority === 'string' || typeof priority === 'number' || typeof priority === 'object' && '.sv' in priority, 'Invalid priority type found: ' + typeof priority);
    if (typeof json === 'object' && '.value' in json && json['.value'] !== null) json = json['.value'];
    // Valid leaf nodes include non-objects or server-value wrapper objects
    if (typeof json !== 'object' || '.sv' in json) {
        const jsonLeaf = json;
        return new LeafNode(jsonLeaf, nodeFromJSON(priority));
    }
    if (!(json instanceof Array) && USE_HINZE) {
        const children = [];
        let childrenHavePriority = false;
        const hinzeJsonObj = json;
        each(hinzeJsonObj, (key, child3)=>{
            if (key.substring(0, 1) !== '.') {
                // Ignore metadata nodes
                const childNode = nodeFromJSON(child3);
                if (!childNode.isEmpty()) {
                    childrenHavePriority = childrenHavePriority || !childNode.getPriority().isEmpty();
                    children.push(new NamedNode(key, childNode));
                }
            }
        });
        if (children.length === 0) return ChildrenNode.EMPTY_NODE;
        const childSet = buildChildSet(children, NAME_ONLY_COMPARATOR, (namedNode)=>namedNode.name
        , NAME_COMPARATOR);
        if (childrenHavePriority) {
            const sortedChildSet = buildChildSet(children, PRIORITY_INDEX.getCompare());
            return new ChildrenNode(childSet, nodeFromJSON(priority), new IndexMap({
                '.priority': sortedChildSet
            }, {
                '.priority': PRIORITY_INDEX
            }));
        } else return new ChildrenNode(childSet, nodeFromJSON(priority), IndexMap.Default);
    } else {
        let node = ChildrenNode.EMPTY_NODE;
        each(json, (key, childData)=>{
            if (_util.contains(json, key)) {
                if (key.substring(0, 1) !== '.') {
                    // ignore metadata nodes.
                    const childNode = nodeFromJSON(childData);
                    if (childNode.isLeafNode() || !childNode.isEmpty()) node = node.updateImmediateChild(key, childNode);
                }
            }
        });
        return node.updatePriority(nodeFromJSON(priority));
    }
}
setNodeFromJSON(nodeFromJSON);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class PathIndex extends Index {
    constructor(indexPath_){
        super();
        this.indexPath_ = indexPath_;
        _util.assert(!pathIsEmpty(indexPath_) && pathGetFront(indexPath_) !== '.priority', "Can't create PathIndex with empty path or .priority key");
    }
    extractChild(snap) {
        return snap.getChild(this.indexPath_);
    }
    isDefinedOn(node) {
        return !node.getChild(this.indexPath_).isEmpty();
    }
    compare(a, b) {
        const aChild = this.extractChild(a.node);
        const bChild = this.extractChild(b.node);
        const indexCmp = aChild.compareTo(bChild);
        if (indexCmp === 0) return nameCompare(a.name, b.name);
        else return indexCmp;
    }
    makePost(indexValue, name6) {
        const valueNode = nodeFromJSON(indexValue);
        const node = ChildrenNode.EMPTY_NODE.updateChild(this.indexPath_, valueNode);
        return new NamedNode(name6, node);
    }
    maxPost() {
        const node = ChildrenNode.EMPTY_NODE.updateChild(this.indexPath_, MAX_NODE);
        return new NamedNode(MAX_NAME, node);
    }
    toString() {
        return pathSlice(this.indexPath_, 0).join('/');
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ValueIndex extends Index {
    compare(a, b) {
        const indexCmp = a.node.compareTo(b.node);
        if (indexCmp === 0) return nameCompare(a.name, b.name);
        else return indexCmp;
    }
    isDefinedOn(node) {
        return true;
    }
    indexedValueChanged(oldNode, newNode) {
        return !oldNode.equals(newNode);
    }
    minPost() {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return NamedNode.MIN;
    }
    maxPost() {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return NamedNode.MAX;
    }
    makePost(indexValue, name7) {
        const valueNode = nodeFromJSON(indexValue);
        return new NamedNode(name7, valueNode);
    }
    /**
     * @returns String representation for inclusion in a query spec
     */ toString() {
        return '.value';
    }
}
const VALUE_INDEX = new ValueIndex();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // Modeled after base64 web-safe chars, but ordered by ASCII.
const PUSH_CHARS = '-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz';
const MIN_PUSH_CHAR = '-';
const MAX_PUSH_CHAR = 'z';
const MAX_KEY_LEN = 786;
/**
 * Fancy ID generator that creates 20-character string identifiers with the
 * following properties:
 *
 * 1. They're based on timestamp so that they sort *after* any existing ids.
 * 2. They contain 72-bits of random data after the timestamp so that IDs won't
 *    collide with other clients' IDs.
 * 3. They sort *lexicographically* (so the timestamp is converted to characters
 *    that will sort properly).
 * 4. They're monotonically increasing. Even if you generate more than one in
 *    the same timestamp, the latter ones will sort after the former ones. We do
 *    this by using the previous random bits but "incrementing" them by 1 (only
 *    in the case of a timestamp collision).
 */ const nextPushId = function() {
    // Timestamp of last push, used to prevent local collisions if you push twice
    // in one ms.
    let lastPushTime = 0;
    // We generate 72-bits of randomness which get turned into 12 characters and
    // appended to the timestamp to prevent collisions with other clients. We
    // store the last characters we generated because in the event of a collision,
    // we'll use those same characters except "incremented" by one.
    const lastRandChars = [];
    return function(now) {
        const duplicateTime = now === lastPushTime;
        lastPushTime = now;
        let i;
        const timeStampChars = new Array(8);
        for(i = 7; i >= 0; i--){
            timeStampChars[i] = PUSH_CHARS.charAt(now % 64);
            // NOTE: Can't use << here because javascript will convert to int and lose
            // the upper bits.
            now = Math.floor(now / 64);
        }
        _util.assert(now === 0, 'Cannot push at time == 0');
        let id = timeStampChars.join('');
        if (!duplicateTime) for(i = 0; i < 12; i++)lastRandChars[i] = Math.floor(Math.random() * 64);
        else {
            // If the timestamp hasn't changed since last push, use the same random
            // number, except incremented by 1.
            for(i = 11; i >= 0 && lastRandChars[i] === 63; i--)lastRandChars[i] = 0;
            lastRandChars[i]++;
        }
        for(i = 0; i < 12; i++)id += PUSH_CHARS.charAt(lastRandChars[i]);
        _util.assert(id.length === 20, 'nextPushId: Length should be 20.');
        return id;
    };
}();
const successor = function(key) {
    if (key === '' + INTEGER_32_MAX) // See https://firebase.google.com/docs/database/web/lists-of-data#data-order
    return MIN_PUSH_CHAR;
    const keyAsInt = tryParseInt(key);
    if (keyAsInt != null) return '' + (keyAsInt + 1);
    const next = new Array(key.length);
    for(let i = 0; i < next.length; i++)next[i] = key.charAt(i);
    if (next.length < MAX_KEY_LEN) {
        next.push(MIN_PUSH_CHAR);
        return next.join('');
    }
    let i3 = next.length - 1;
    while(i3 >= 0 && next[i3] === MAX_PUSH_CHAR)i3--;
    // `successor` was called on the largest possible key, so return the
    // MAX_NAME, which sorts larger than all keys.
    if (i3 === -1) return MAX_NAME;
    const source = next[i3];
    const sourcePlusOne = PUSH_CHARS.charAt(PUSH_CHARS.indexOf(source) + 1);
    next[i3] = sourcePlusOne;
    return next.slice(0, i3 + 1).join('');
};
// `key` is assumed to be non-empty.
const predecessor = function(key) {
    if (key === '' + INTEGER_32_MIN) return MIN_NAME;
    const keyAsInt = tryParseInt(key);
    if (keyAsInt != null) return '' + (keyAsInt - 1);
    const next = new Array(key.length);
    for(let i = 0; i < next.length; i++)next[i] = key.charAt(i);
    // If `key` ends in `MIN_PUSH_CHAR`, the largest key lexicographically
    // smaller than `key`, is `key[0:key.length - 1]`. The next key smaller
    // than that, `predecessor(predecessor(key))`, is
    //
    // `key[0:key.length - 2] + (key[key.length - 1] - 1) + \
    //   { MAX_PUSH_CHAR repeated MAX_KEY_LEN - (key.length - 1) times }
    //
    // analogous to increment/decrement for base-10 integers.
    //
    // This works because lexigographic comparison works character-by-character,
    // using length as a tie-breaker if one key is a prefix of the other.
    if (next[next.length - 1] === MIN_PUSH_CHAR) {
        if (next.length === 1) // See https://firebase.google.com/docs/database/web/lists-of-data#orderbykey
        return '' + INTEGER_32_MAX;
        delete next[next.length - 1];
        return next.join('');
    }
    // Replace the last character with it's immediate predecessor, and
    // fill the suffix of the key with MAX_PUSH_CHAR. This is the
    // lexicographically largest possible key smaller than `key`.
    next[next.length - 1] = PUSH_CHARS.charAt(PUSH_CHARS.indexOf(next[next.length - 1]) - 1);
    return next.join('') + MAX_PUSH_CHAR.repeat(MAX_KEY_LEN - next.length);
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function changeValue(snapshotNode) {
    return {
        type: "value" /* VALUE */ ,
        snapshotNode
    };
}
function changeChildAdded(childName, snapshotNode) {
    return {
        type: "child_added" /* CHILD_ADDED */ ,
        snapshotNode,
        childName
    };
}
function changeChildRemoved(childName, snapshotNode) {
    return {
        type: "child_removed" /* CHILD_REMOVED */ ,
        snapshotNode,
        childName
    };
}
function changeChildChanged(childName, snapshotNode, oldSnap) {
    return {
        type: "child_changed" /* CHILD_CHANGED */ ,
        snapshotNode,
        childName,
        oldSnap
    };
}
function changeChildMoved(childName, snapshotNode) {
    return {
        type: "child_moved" /* CHILD_MOVED */ ,
        snapshotNode,
        childName
    };
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Doesn't really filter nodes but applies an index to the node and keeps track of any changes
 */ class IndexedFilter {
    constructor(index_){
        this.index_ = index_;
    }
    updateChild(snap, key, newChild, affectedPath, source, optChangeAccumulator) {
        _util.assert(snap.isIndexed(this.index_), 'A node must be indexed if only a child is updated');
        const oldChild = snap.getImmediateChild(key);
        // Check if anything actually changed.
        if (oldChild.getChild(affectedPath).equals(newChild.getChild(affectedPath))) {
            // There's an edge case where a child can enter or leave the view because affectedPath was set to null.
            // In this case, affectedPath will appear null in both the old and new snapshots.  So we need
            // to avoid treating these cases as "nothing changed."
            if (oldChild.isEmpty() === newChild.isEmpty()) // Nothing changed.
            // This assert should be valid, but it's expensive (can dominate perf testing) so don't actually do it.
            //assert(oldChild.equals(newChild), 'Old and new snapshots should be equal.');
            return snap;
        }
        if (optChangeAccumulator != null) {
            if (newChild.isEmpty()) {
                if (snap.hasChild(key)) optChangeAccumulator.trackChildChange(changeChildRemoved(key, oldChild));
                else _util.assert(snap.isLeafNode(), 'A child remove without an old child only makes sense on a leaf node');
            } else if (oldChild.isEmpty()) optChangeAccumulator.trackChildChange(changeChildAdded(key, newChild));
            else optChangeAccumulator.trackChildChange(changeChildChanged(key, newChild, oldChild));
        }
        if (snap.isLeafNode() && newChild.isEmpty()) return snap;
        else // Make sure the node is indexed
        return snap.updateImmediateChild(key, newChild).withIndex(this.index_);
    }
    updateFullNode(oldSnap, newSnap, optChangeAccumulator) {
        if (optChangeAccumulator != null) {
            if (!oldSnap.isLeafNode()) oldSnap.forEachChild(PRIORITY_INDEX, (key, childNode)=>{
                if (!newSnap.hasChild(key)) optChangeAccumulator.trackChildChange(changeChildRemoved(key, childNode));
            });
            if (!newSnap.isLeafNode()) newSnap.forEachChild(PRIORITY_INDEX, (key, childNode)=>{
                if (oldSnap.hasChild(key)) {
                    const oldChild = oldSnap.getImmediateChild(key);
                    if (!oldChild.equals(childNode)) optChangeAccumulator.trackChildChange(changeChildChanged(key, childNode, oldChild));
                } else optChangeAccumulator.trackChildChange(changeChildAdded(key, childNode));
            });
        }
        return newSnap.withIndex(this.index_);
    }
    updatePriority(oldSnap, newPriority) {
        if (oldSnap.isEmpty()) return ChildrenNode.EMPTY_NODE;
        else return oldSnap.updatePriority(newPriority);
    }
    filtersNodes() {
        return false;
    }
    getIndexedFilter() {
        return this;
    }
    getIndex() {
        return this.index_;
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Filters nodes by range and uses an IndexFilter to track any changes after filtering the node
 */ class RangedFilter {
    constructor(params){
        this.indexedFilter_ = new IndexedFilter(params.getIndex());
        this.index_ = params.getIndex();
        this.startPost_ = RangedFilter.getStartPost_(params);
        this.endPost_ = RangedFilter.getEndPost_(params);
    }
    getStartPost() {
        return this.startPost_;
    }
    getEndPost() {
        return this.endPost_;
    }
    matches(node) {
        return this.index_.compare(this.getStartPost(), node) <= 0 && this.index_.compare(node, this.getEndPost()) <= 0;
    }
    updateChild(snap, key, newChild, affectedPath, source, optChangeAccumulator) {
        if (!this.matches(new NamedNode(key, newChild))) newChild = ChildrenNode.EMPTY_NODE;
        return this.indexedFilter_.updateChild(snap, key, newChild, affectedPath, source, optChangeAccumulator);
    }
    updateFullNode(oldSnap, newSnap, optChangeAccumulator) {
        if (newSnap.isLeafNode()) // Make sure we have a children node with the correct index, not a leaf node;
        newSnap = ChildrenNode.EMPTY_NODE;
        let filtered = newSnap.withIndex(this.index_);
        // Don't support priorities on queries
        filtered = filtered.updatePriority(ChildrenNode.EMPTY_NODE);
        const self = this;
        newSnap.forEachChild(PRIORITY_INDEX, (key, childNode)=>{
            if (!self.matches(new NamedNode(key, childNode))) filtered = filtered.updateImmediateChild(key, ChildrenNode.EMPTY_NODE);
        });
        return this.indexedFilter_.updateFullNode(oldSnap, filtered, optChangeAccumulator);
    }
    updatePriority(oldSnap, newPriority) {
        // Don't support priorities on queries
        return oldSnap;
    }
    filtersNodes() {
        return true;
    }
    getIndexedFilter() {
        return this.indexedFilter_;
    }
    getIndex() {
        return this.index_;
    }
    static getStartPost_(params) {
        if (params.hasStart()) {
            const startName = params.getIndexStartName();
            return params.getIndex().makePost(params.getIndexStartValue(), startName);
        } else return params.getIndex().minPost();
    }
    static getEndPost_(params) {
        if (params.hasEnd()) {
            const endName = params.getIndexEndName();
            return params.getIndex().makePost(params.getIndexEndValue(), endName);
        } else return params.getIndex().maxPost();
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Applies a limit and a range to a node and uses RangedFilter to do the heavy lifting where possible
 */ class LimitedFilter {
    constructor(params){
        this.rangedFilter_ = new RangedFilter(params);
        this.index_ = params.getIndex();
        this.limit_ = params.getLimit();
        this.reverse_ = !params.isViewFromLeft();
    }
    updateChild(snap, key, newChild, affectedPath, source, optChangeAccumulator) {
        if (!this.rangedFilter_.matches(new NamedNode(key, newChild))) newChild = ChildrenNode.EMPTY_NODE;
        if (snap.getImmediateChild(key).equals(newChild)) // No change
        return snap;
        else if (snap.numChildren() < this.limit_) return this.rangedFilter_.getIndexedFilter().updateChild(snap, key, newChild, affectedPath, source, optChangeAccumulator);
        else return this.fullLimitUpdateChild_(snap, key, newChild, source, optChangeAccumulator);
    }
    updateFullNode(oldSnap, newSnap, optChangeAccumulator) {
        let filtered;
        if (newSnap.isLeafNode() || newSnap.isEmpty()) // Make sure we have a children node with the correct index, not a leaf node;
        filtered = ChildrenNode.EMPTY_NODE.withIndex(this.index_);
        else if (this.limit_ * 2 < newSnap.numChildren() && newSnap.isIndexed(this.index_)) {
            // Easier to build up a snapshot, since what we're given has more than twice the elements we want
            filtered = ChildrenNode.EMPTY_NODE.withIndex(this.index_);
            // anchor to the startPost, endPost, or last element as appropriate
            let iterator;
            if (this.reverse_) iterator = newSnap.getReverseIteratorFrom(this.rangedFilter_.getEndPost(), this.index_);
            else iterator = newSnap.getIteratorFrom(this.rangedFilter_.getStartPost(), this.index_);
            let count = 0;
            while(iterator.hasNext() && count < this.limit_){
                const next = iterator.getNext();
                let inRange;
                if (this.reverse_) inRange = this.index_.compare(this.rangedFilter_.getStartPost(), next) <= 0;
                else inRange = this.index_.compare(next, this.rangedFilter_.getEndPost()) <= 0;
                if (inRange) {
                    filtered = filtered.updateImmediateChild(next.name, next.node);
                    count++;
                } else break;
            }
        } else {
            // The snap contains less than twice the limit. Faster to delete from the snap than build up a new one
            filtered = newSnap.withIndex(this.index_);
            // Don't support priorities on queries
            filtered = filtered.updatePriority(ChildrenNode.EMPTY_NODE);
            let startPost;
            let endPost;
            let cmp;
            let iterator;
            if (this.reverse_) {
                iterator = filtered.getReverseIterator(this.index_);
                startPost = this.rangedFilter_.getEndPost();
                endPost = this.rangedFilter_.getStartPost();
                const indexCompare = this.index_.getCompare();
                cmp = (a, b)=>indexCompare(b, a)
                ;
            } else {
                iterator = filtered.getIterator(this.index_);
                startPost = this.rangedFilter_.getStartPost();
                endPost = this.rangedFilter_.getEndPost();
                cmp = this.index_.getCompare();
            }
            let count = 0;
            let foundStartPost = false;
            while(iterator.hasNext()){
                const next = iterator.getNext();
                if (!foundStartPost && cmp(startPost, next) <= 0) // start adding
                foundStartPost = true;
                const inRange = foundStartPost && count < this.limit_ && cmp(next, endPost) <= 0;
                if (inRange) count++;
                else filtered = filtered.updateImmediateChild(next.name, ChildrenNode.EMPTY_NODE);
            }
        }
        return this.rangedFilter_.getIndexedFilter().updateFullNode(oldSnap, filtered, optChangeAccumulator);
    }
    updatePriority(oldSnap, newPriority) {
        // Don't support priorities on queries
        return oldSnap;
    }
    filtersNodes() {
        return true;
    }
    getIndexedFilter() {
        return this.rangedFilter_.getIndexedFilter();
    }
    getIndex() {
        return this.index_;
    }
    fullLimitUpdateChild_(snap, childKey, childSnap, source, changeAccumulator) {
        // TODO: rename all cache stuff etc to general snap terminology
        let cmp;
        if (this.reverse_) {
            const indexCmp = this.index_.getCompare();
            cmp = (a, b)=>indexCmp(b, a)
            ;
        } else cmp = this.index_.getCompare();
        const oldEventCache = snap;
        _util.assert(oldEventCache.numChildren() === this.limit_, '');
        const newChildNamedNode = new NamedNode(childKey, childSnap);
        const windowBoundary = this.reverse_ ? oldEventCache.getFirstChild(this.index_) : oldEventCache.getLastChild(this.index_);
        const inRange = this.rangedFilter_.matches(newChildNamedNode);
        if (oldEventCache.hasChild(childKey)) {
            const oldChildSnap = oldEventCache.getImmediateChild(childKey);
            let nextChild = source.getChildAfterChild(this.index_, windowBoundary, this.reverse_);
            while(nextChild != null && (nextChild.name === childKey || oldEventCache.hasChild(nextChild.name)))// There is a weird edge case where a node is updated as part of a merge in the write tree, but hasn't
            // been applied to the limited filter yet. Ignore this next child which will be updated later in
            // the limited filter...
            nextChild = source.getChildAfterChild(this.index_, nextChild, this.reverse_);
            const compareNext = nextChild == null ? 1 : cmp(nextChild, newChildNamedNode);
            const remainsInWindow = inRange && !childSnap.isEmpty() && compareNext >= 0;
            if (remainsInWindow) {
                if (changeAccumulator != null) changeAccumulator.trackChildChange(changeChildChanged(childKey, childSnap, oldChildSnap));
                return oldEventCache.updateImmediateChild(childKey, childSnap);
            } else {
                if (changeAccumulator != null) changeAccumulator.trackChildChange(changeChildRemoved(childKey, oldChildSnap));
                const newEventCache = oldEventCache.updateImmediateChild(childKey, ChildrenNode.EMPTY_NODE);
                const nextChildInRange = nextChild != null && this.rangedFilter_.matches(nextChild);
                if (nextChildInRange) {
                    if (changeAccumulator != null) changeAccumulator.trackChildChange(changeChildAdded(nextChild.name, nextChild.node));
                    return newEventCache.updateImmediateChild(nextChild.name, nextChild.node);
                } else return newEventCache;
            }
        } else if (childSnap.isEmpty()) // we're deleting a node, but it was not in the window, so ignore it
        return snap;
        else if (inRange) {
            if (cmp(windowBoundary, newChildNamedNode) >= 0) {
                if (changeAccumulator != null) {
                    changeAccumulator.trackChildChange(changeChildRemoved(windowBoundary.name, windowBoundary.node));
                    changeAccumulator.trackChildChange(changeChildAdded(childKey, childSnap));
                }
                return oldEventCache.updateImmediateChild(childKey, childSnap).updateImmediateChild(windowBoundary.name, ChildrenNode.EMPTY_NODE);
            } else return snap;
        } else return snap;
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * This class is an immutable-from-the-public-api struct containing a set of query parameters defining a
 * range to be returned for a particular location. It is assumed that validation of parameters is done at the
 * user-facing API level, so it is not done here.
 *
 * @internal
 */ class QueryParams {
    constructor(){
        this.limitSet_ = false;
        this.startSet_ = false;
        this.startNameSet_ = false;
        this.startAfterSet_ = false;
        this.endSet_ = false;
        this.endNameSet_ = false;
        this.endBeforeSet_ = false;
        this.limit_ = 0;
        this.viewFrom_ = '';
        this.indexStartValue_ = null;
        this.indexStartName_ = '';
        this.indexEndValue_ = null;
        this.indexEndName_ = '';
        this.index_ = PRIORITY_INDEX;
    }
    hasStart() {
        return this.startSet_;
    }
    hasStartAfter() {
        return this.startAfterSet_;
    }
    hasEndBefore() {
        return this.endBeforeSet_;
    }
    /**
     * @returns True if it would return from left.
     */ isViewFromLeft() {
        if (this.viewFrom_ === '') // limit(), rather than limitToFirst or limitToLast was called.
        // This means that only one of startSet_ and endSet_ is true. Use them
        // to calculate which side of the view to anchor to. If neither is set,
        // anchor to the end.
        return this.startSet_;
        else return this.viewFrom_ === "l" /* VIEW_FROM_LEFT */ ;
    }
    /**
     * Only valid to call if hasStart() returns true
     */ getIndexStartValue() {
        _util.assert(this.startSet_, 'Only valid if start has been set');
        return this.indexStartValue_;
    }
    /**
     * Only valid to call if hasStart() returns true.
     * Returns the starting key name for the range defined by these query parameters
     */ getIndexStartName() {
        _util.assert(this.startSet_, 'Only valid if start has been set');
        if (this.startNameSet_) return this.indexStartName_;
        else return MIN_NAME;
    }
    hasEnd() {
        return this.endSet_;
    }
    /**
     * Only valid to call if hasEnd() returns true.
     */ getIndexEndValue() {
        _util.assert(this.endSet_, 'Only valid if end has been set');
        return this.indexEndValue_;
    }
    /**
     * Only valid to call if hasEnd() returns true.
     * Returns the end key name for the range defined by these query parameters
     */ getIndexEndName() {
        _util.assert(this.endSet_, 'Only valid if end has been set');
        if (this.endNameSet_) return this.indexEndName_;
        else return MAX_NAME;
    }
    hasLimit() {
        return this.limitSet_;
    }
    /**
     * @returns True if a limit has been set and it has been explicitly anchored
     */ hasAnchoredLimit() {
        return this.limitSet_ && this.viewFrom_ !== '';
    }
    /**
     * Only valid to call if hasLimit() returns true
     */ getLimit() {
        _util.assert(this.limitSet_, 'Only valid if limit has been set');
        return this.limit_;
    }
    getIndex() {
        return this.index_;
    }
    loadsAllData() {
        return !(this.startSet_ || this.endSet_ || this.limitSet_);
    }
    isDefault() {
        return this.loadsAllData() && this.index_ === PRIORITY_INDEX;
    }
    copy() {
        const copy = new QueryParams();
        copy.limitSet_ = this.limitSet_;
        copy.limit_ = this.limit_;
        copy.startSet_ = this.startSet_;
        copy.indexStartValue_ = this.indexStartValue_;
        copy.startNameSet_ = this.startNameSet_;
        copy.indexStartName_ = this.indexStartName_;
        copy.endSet_ = this.endSet_;
        copy.indexEndValue_ = this.indexEndValue_;
        copy.endNameSet_ = this.endNameSet_;
        copy.indexEndName_ = this.indexEndName_;
        copy.index_ = this.index_;
        copy.viewFrom_ = this.viewFrom_;
        return copy;
    }
}
function queryParamsGetNodeFilter(queryParams) {
    if (queryParams.loadsAllData()) return new IndexedFilter(queryParams.getIndex());
    else if (queryParams.hasLimit()) return new LimitedFilter(queryParams);
    else return new RangedFilter(queryParams);
}
function queryParamsLimitToFirst(queryParams, newLimit) {
    const newParams = queryParams.copy();
    newParams.limitSet_ = true;
    newParams.limit_ = newLimit;
    newParams.viewFrom_ = "l" /* VIEW_FROM_LEFT */ ;
    return newParams;
}
function queryParamsLimitToLast(queryParams, newLimit) {
    const newParams = queryParams.copy();
    newParams.limitSet_ = true;
    newParams.limit_ = newLimit;
    newParams.viewFrom_ = "r" /* VIEW_FROM_RIGHT */ ;
    return newParams;
}
function queryParamsStartAt(queryParams, indexValue, key) {
    const newParams = queryParams.copy();
    newParams.startSet_ = true;
    if (indexValue === undefined) indexValue = null;
    newParams.indexStartValue_ = indexValue;
    if (key != null) {
        newParams.startNameSet_ = true;
        newParams.indexStartName_ = key;
    } else {
        newParams.startNameSet_ = false;
        newParams.indexStartName_ = '';
    }
    return newParams;
}
function queryParamsStartAfter(queryParams, indexValue, key) {
    let params;
    if (queryParams.index_ === KEY_INDEX) {
        if (typeof indexValue === 'string') indexValue = successor(indexValue);
        params = queryParamsStartAt(queryParams, indexValue, key);
    } else {
        let childKey;
        if (key == null) childKey = MAX_NAME;
        else childKey = successor(key);
        params = queryParamsStartAt(queryParams, indexValue, childKey);
    }
    params.startAfterSet_ = true;
    return params;
}
function queryParamsEndAt(queryParams, indexValue, key) {
    const newParams = queryParams.copy();
    newParams.endSet_ = true;
    if (indexValue === undefined) indexValue = null;
    newParams.indexEndValue_ = indexValue;
    if (key !== undefined) {
        newParams.endNameSet_ = true;
        newParams.indexEndName_ = key;
    } else {
        newParams.endNameSet_ = false;
        newParams.indexEndName_ = '';
    }
    return newParams;
}
function queryParamsEndBefore(queryParams, indexValue, key) {
    let childKey;
    let params;
    if (queryParams.index_ === KEY_INDEX) {
        if (typeof indexValue === 'string') indexValue = predecessor(indexValue);
        params = queryParamsEndAt(queryParams, indexValue, key);
    } else {
        if (key == null) childKey = MIN_NAME;
        else childKey = predecessor(key);
        params = queryParamsEndAt(queryParams, indexValue, childKey);
    }
    params.endBeforeSet_ = true;
    return params;
}
function queryParamsOrderBy(queryParams, index) {
    const newParams = queryParams.copy();
    newParams.index_ = index;
    return newParams;
}
/**
 * Returns a set of REST query string parameters representing this query.
 *
 * @returns query string parameters
 */ function queryParamsToRestQueryStringParameters(queryParams) {
    const qs = {
    };
    if (queryParams.isDefault()) return qs;
    let orderBy;
    if (queryParams.index_ === PRIORITY_INDEX) orderBy = "$priority" /* PRIORITY_INDEX */ ;
    else if (queryParams.index_ === VALUE_INDEX) orderBy = "$value" /* VALUE_INDEX */ ;
    else if (queryParams.index_ === KEY_INDEX) orderBy = "$key" /* KEY_INDEX */ ;
    else {
        _util.assert(queryParams.index_ instanceof PathIndex, 'Unrecognized index type!');
        orderBy = queryParams.index_.toString();
    }
    qs["orderBy" /* ORDER_BY */ ] = _util.stringify(orderBy);
    if (queryParams.startSet_) {
        qs["startAt" /* START_AT */ ] = _util.stringify(queryParams.indexStartValue_);
        if (queryParams.startNameSet_) qs["startAt" /* START_AT */ ] += ',' + _util.stringify(queryParams.indexStartName_);
    }
    if (queryParams.endSet_) {
        qs["endAt" /* END_AT */ ] = _util.stringify(queryParams.indexEndValue_);
        if (queryParams.endNameSet_) qs["endAt" /* END_AT */ ] += ',' + _util.stringify(queryParams.indexEndName_);
    }
    if (queryParams.limitSet_) {
        if (queryParams.isViewFromLeft()) qs["limitToFirst" /* LIMIT_TO_FIRST */ ] = queryParams.limit_;
        else qs["limitToLast" /* LIMIT_TO_LAST */ ] = queryParams.limit_;
    }
    return qs;
}
function queryParamsGetQueryObject(queryParams) {
    const obj = {
    };
    if (queryParams.startSet_) {
        obj["sp" /* INDEX_START_VALUE */ ] = queryParams.indexStartValue_;
        if (queryParams.startNameSet_) obj["sn" /* INDEX_START_NAME */ ] = queryParams.indexStartName_;
    }
    if (queryParams.endSet_) {
        obj["ep" /* INDEX_END_VALUE */ ] = queryParams.indexEndValue_;
        if (queryParams.endNameSet_) obj["en" /* INDEX_END_NAME */ ] = queryParams.indexEndName_;
    }
    if (queryParams.limitSet_) {
        obj["l" /* LIMIT */ ] = queryParams.limit_;
        let viewFrom = queryParams.viewFrom_;
        if (viewFrom === '') {
            if (queryParams.isViewFromLeft()) viewFrom = "l" /* VIEW_FROM_LEFT */ ;
            else viewFrom = "r" /* VIEW_FROM_RIGHT */ ;
        }
        obj["vf" /* VIEW_FROM */ ] = viewFrom;
    }
    // For now, priority index is the default, so we only specify if it's some other index
    if (queryParams.index_ !== PRIORITY_INDEX) obj["i" /* INDEX */ ] = queryParams.index_.toString();
    return obj;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * An implementation of ServerActions that communicates with the server via REST requests.
 * This is mostly useful for compatibility with crawlers, where we don't want to spin up a full
 * persistent connection (using WebSockets or long-polling)
 */ class ReadonlyRestClient extends ServerActions {
    /**
     * @param repoInfo_ - Data about the namespace we are connecting to
     * @param onDataUpdate_ - A callback for new data from the server
     */ constructor(repoInfo_, onDataUpdate_, authTokenProvider_, appCheckTokenProvider_){
        super();
        this.repoInfo_ = repoInfo_;
        this.onDataUpdate_ = onDataUpdate_;
        this.authTokenProvider_ = authTokenProvider_;
        this.appCheckTokenProvider_ = appCheckTokenProvider_;
        /** @private {function(...[*])} */ this.log_ = logWrapper('p:rest:');
        /**
         * We don't actually need to track listens, except to prevent us calling an onComplete for a listen
         * that's been removed. :-/
         */ this.listens_ = {
        };
    }
    reportStats(stats) {
        throw new Error('Method not implemented.');
    }
    static getListenId_(query9, tag) {
        if (tag !== undefined) return 'tag$' + tag;
        else {
            _util.assert(query9._queryParams.isDefault(), "should have a tag if it's not a default query.");
            return query9._path.toString();
        }
    }
    /** @inheritDoc */ listen(query10, currentHashFn, tag, onComplete) {
        const pathString = query10._path.toString();
        this.log_('Listen called for ' + pathString + ' ' + query10._queryIdentifier);
        // Mark this listener so we can tell if it's removed.
        const listenId = ReadonlyRestClient.getListenId_(query10, tag);
        const thisListen = {
        };
        this.listens_[listenId] = thisListen;
        const queryStringParameters = queryParamsToRestQueryStringParameters(query10._queryParams);
        this.restRequest_(pathString + '.json', queryStringParameters, (error6, result)=>{
            let data = result;
            if (error6 === 404) {
                data = null;
                error6 = null;
            }
            if (error6 === null) this.onDataUpdate_(pathString, data, /*isMerge=*/ false, tag);
            if (_util.safeGet(this.listens_, listenId) === thisListen) {
                let status;
                if (!error6) status = 'ok';
                else if (error6 === 401) status = 'permission_denied';
                else status = 'rest_error:' + error6;
                onComplete(status, null);
            }
        });
    }
    /** @inheritDoc */ unlisten(query11, tag) {
        const listenId = ReadonlyRestClient.getListenId_(query11, tag);
        delete this.listens_[listenId];
    }
    get(query12) {
        const queryStringParameters = queryParamsToRestQueryStringParameters(query12._queryParams);
        const pathString = query12._path.toString();
        const deferred = new _util.Deferred();
        this.restRequest_(pathString + '.json', queryStringParameters, (error7, result)=>{
            let data = result;
            if (error7 === 404) {
                data = null;
                error7 = null;
            }
            if (error7 === null) {
                this.onDataUpdate_(pathString, data, /*isMerge=*/ false, /*tag=*/ null);
                deferred.resolve(data);
            } else deferred.reject(new Error(data));
        });
        return deferred.promise;
    }
    /** @inheritDoc */ refreshAuthToken(token) {
    // no-op since we just always call getToken.
    }
    /**
     * Performs a REST request to the given path, with the provided query string parameters,
     * and any auth credentials we have.
     */ restRequest_(pathString, queryStringParameters = {
    }, callback) {
        queryStringParameters['format'] = 'export';
        return Promise.all([
            this.authTokenProvider_.getToken(/*forceRefresh=*/ false),
            this.appCheckTokenProvider_.getToken(/*forceRefresh=*/ false)
        ]).then(([authToken, appCheckToken])=>{
            if (authToken && authToken.accessToken) queryStringParameters['auth'] = authToken.accessToken;
            if (appCheckToken && appCheckToken.token) queryStringParameters['ac'] = appCheckToken.token;
            const url = (this.repoInfo_.secure ? 'https://' : 'http://') + this.repoInfo_.host + pathString + '?' + 'ns=' + this.repoInfo_.namespace + _util.querystring(queryStringParameters);
            this.log_('Sending REST request for ' + url);
            const xhr = new XMLHttpRequest();
            xhr.onreadystatechange = ()=>{
                if (callback && xhr.readyState === 4) {
                    this.log_('REST Response for ' + url + ' received. status:', xhr.status, 'response:', xhr.responseText);
                    let res = null;
                    if (xhr.status >= 200 && xhr.status < 300) {
                        try {
                            res = _util.jsonEval(xhr.responseText);
                        } catch (e) {
                            warn('Failed to parse JSON response for ' + url + ': ' + xhr.responseText);
                        }
                        callback(null, res);
                    } else {
                        // 401 and 404 are expected.
                        if (xhr.status !== 401 && xhr.status !== 404) warn('Got unsuccessful REST response for ' + url + ' Status: ' + xhr.status);
                        callback(xhr.status);
                    }
                    callback = null;
                }
            };
            xhr.open('GET', url, /*asynchronous=*/ true);
            xhr.send();
        });
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Mutable object which basically just stores a reference to the "latest" immutable snapshot.
 */ class SnapshotHolder {
    constructor(){
        this.rootNode_ = ChildrenNode.EMPTY_NODE;
    }
    getNode(path) {
        return this.rootNode_.getChild(path);
    }
    updateSnapshot(path, newSnapshotNode) {
        this.rootNode_ = this.rootNode_.updateChild(path, newSnapshotNode);
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function newSparseSnapshotTree() {
    return {
        value: null,
        children: new Map()
    };
}
/**
 * Stores the given node at the specified path. If there is already a node
 * at a shallower path, it merges the new data into that snapshot node.
 *
 * @param path - Path to look up snapshot for.
 * @param data - The new data, or null.
 */ function sparseSnapshotTreeRemember(sparseSnapshotTree, path, data) {
    if (pathIsEmpty(path)) {
        sparseSnapshotTree.value = data;
        sparseSnapshotTree.children.clear();
    } else if (sparseSnapshotTree.value !== null) sparseSnapshotTree.value = sparseSnapshotTree.value.updateChild(path, data);
    else {
        const childKey = pathGetFront(path);
        if (!sparseSnapshotTree.children.has(childKey)) sparseSnapshotTree.children.set(childKey, newSparseSnapshotTree());
        const child4 = sparseSnapshotTree.children.get(childKey);
        path = pathPopFront(path);
        sparseSnapshotTreeRemember(child4, path, data);
    }
}
/**
 * Purge the data at path from the cache.
 *
 * @param path - Path to look up snapshot for.
 * @returns True if this node should now be removed.
 */ function sparseSnapshotTreeForget(sparseSnapshotTree, path) {
    if (pathIsEmpty(path)) {
        sparseSnapshotTree.value = null;
        sparseSnapshotTree.children.clear();
        return true;
    } else {
        if (sparseSnapshotTree.value !== null) {
            if (sparseSnapshotTree.value.isLeafNode()) // We're trying to forget a node that doesn't exist
            return false;
            else {
                const value = sparseSnapshotTree.value;
                sparseSnapshotTree.value = null;
                value.forEachChild(PRIORITY_INDEX, (key, tree)=>{
                    sparseSnapshotTreeRemember(sparseSnapshotTree, new Path(key), tree);
                });
                return sparseSnapshotTreeForget(sparseSnapshotTree, path);
            }
        } else if (sparseSnapshotTree.children.size > 0) {
            const childKey = pathGetFront(path);
            path = pathPopFront(path);
            if (sparseSnapshotTree.children.has(childKey)) {
                const safeToRemove = sparseSnapshotTreeForget(sparseSnapshotTree.children.get(childKey), path);
                if (safeToRemove) sparseSnapshotTree.children.delete(childKey);
            }
            return sparseSnapshotTree.children.size === 0;
        } else return true;
    }
}
/**
 * Recursively iterates through all of the stored tree and calls the
 * callback on each one.
 *
 * @param prefixPath - Path to look up node for.
 * @param func - The function to invoke for each tree.
 */ function sparseSnapshotTreeForEachTree(sparseSnapshotTree, prefixPath, func) {
    if (sparseSnapshotTree.value !== null) func(prefixPath, sparseSnapshotTree.value);
    else sparseSnapshotTreeForEachChild(sparseSnapshotTree, (key, tree)=>{
        const path = new Path(prefixPath.toString() + '/' + key);
        sparseSnapshotTreeForEachTree(tree, path, func);
    });
}
/**
 * Iterates through each immediate child and triggers the callback.
 * Only seems to be used in tests.
 *
 * @param func - The function to invoke for each child.
 */ function sparseSnapshotTreeForEachChild(sparseSnapshotTree, func) {
    sparseSnapshotTree.children.forEach((tree, key)=>{
        func(key, tree);
    });
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Returns the delta from the previous call to get stats.
 *
 * @param collection_ - The collection to "listen" to.
 */ class StatsListener {
    constructor(collection_){
        this.collection_ = collection_;
        this.last_ = null;
    }
    get() {
        const newStats = this.collection_.get();
        const delta = Object.assign({
        }, newStats);
        if (this.last_) each(this.last_, (stat, value)=>{
            delta[stat] = delta[stat] - value;
        });
        this.last_ = newStats;
        return delta;
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // Assuming some apps may have a short amount of time on page, and a bulk of firebase operations probably
// happen on page load, we try to report our first set of stats pretty quickly, but we wait at least 10
// seconds to try to ensure the Firebase connection is established / settled.
const FIRST_STATS_MIN_TIME = 10000;
const FIRST_STATS_MAX_TIME = 30000;
// We'll continue to report stats on average every 5 minutes.
const REPORT_STATS_INTERVAL = 300000;
class StatsReporter {
    constructor(collection, server_){
        this.server_ = server_;
        this.statsToReport_ = {
        };
        this.statsListener_ = new StatsListener(collection);
        const timeout = FIRST_STATS_MIN_TIME + (FIRST_STATS_MAX_TIME - FIRST_STATS_MIN_TIME) * Math.random();
        setTimeoutNonBlocking(this.reportStats_.bind(this), Math.floor(timeout));
    }
    reportStats_() {
        const stats = this.statsListener_.get();
        const reportedStats = {
        };
        let haveStatsToReport = false;
        each(stats, (stat, value)=>{
            if (value > 0 && _util.contains(this.statsToReport_, stat)) {
                reportedStats[stat] = value;
                haveStatsToReport = true;
            }
        });
        if (haveStatsToReport) this.server_.reportStats(reportedStats);
        // queue our next run.
        setTimeoutNonBlocking(this.reportStats_.bind(this), Math.floor(Math.random() * 2 * REPORT_STATS_INTERVAL));
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 *
 * @enum
 */ var OperationType;
(function(OperationType1) {
    OperationType1[OperationType1["OVERWRITE"] = 0] = "OVERWRITE";
    OperationType1[OperationType1["MERGE"] = 1] = "MERGE";
    OperationType1[OperationType1["ACK_USER_WRITE"] = 2] = "ACK_USER_WRITE";
    OperationType1[OperationType1["LISTEN_COMPLETE"] = 3] = "LISTEN_COMPLETE";
})(OperationType || (OperationType = {
}));
function newOperationSourceUser() {
    return {
        fromUser: true,
        fromServer: false,
        queryId: null,
        tagged: false
    };
}
function newOperationSourceServer() {
    return {
        fromUser: false,
        fromServer: true,
        queryId: null,
        tagged: false
    };
}
function newOperationSourceServerTaggedQuery(queryId) {
    return {
        fromUser: false,
        fromServer: true,
        queryId,
        tagged: true
    };
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class AckUserWrite {
    /**
     * @param affectedTree - A tree containing true for each affected path. Affected paths can't overlap.
     */ constructor(/** @inheritDoc */ path, /** @inheritDoc */ affectedTree, /** @inheritDoc */ revert){
        this.path = path;
        this.affectedTree = affectedTree;
        this.revert = revert;
        /** @inheritDoc */ this.type = OperationType.ACK_USER_WRITE;
        /** @inheritDoc */ this.source = newOperationSourceUser();
    }
    operationForChild(childName) {
        if (!pathIsEmpty(this.path)) {
            _util.assert(pathGetFront(this.path) === childName, 'operationForChild called for unrelated child.');
            return new AckUserWrite(pathPopFront(this.path), this.affectedTree, this.revert);
        } else if (this.affectedTree.value != null) {
            _util.assert(this.affectedTree.children.isEmpty(), 'affectedTree should not have overlapping affected paths.');
            // All child locations are affected as well; just return same operation.
            return this;
        } else {
            const childTree = this.affectedTree.subtree(new Path(childName));
            return new AckUserWrite(newEmptyPath(), childTree, this.revert);
        }
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ListenComplete {
    constructor(source, path){
        this.source = source;
        this.path = path;
        /** @inheritDoc */ this.type = OperationType.LISTEN_COMPLETE;
    }
    operationForChild(childName) {
        if (pathIsEmpty(this.path)) return new ListenComplete(this.source, newEmptyPath());
        else return new ListenComplete(this.source, pathPopFront(this.path));
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Overwrite {
    constructor(source, path, snap){
        this.source = source;
        this.path = path;
        this.snap = snap;
        /** @inheritDoc */ this.type = OperationType.OVERWRITE;
    }
    operationForChild(childName) {
        if (pathIsEmpty(this.path)) return new Overwrite(this.source, newEmptyPath(), this.snap.getImmediateChild(childName));
        else return new Overwrite(this.source, pathPopFront(this.path), this.snap);
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Merge {
    constructor(/** @inheritDoc */ source, /** @inheritDoc */ path, /** @inheritDoc */ children){
        this.source = source;
        this.path = path;
        this.children = children;
        /** @inheritDoc */ this.type = OperationType.MERGE;
    }
    operationForChild(childName) {
        if (pathIsEmpty(this.path)) {
            const childTree = this.children.subtree(new Path(childName));
            if (childTree.isEmpty()) // This child is unaffected
            return null;
            else if (childTree.value) // We have a snapshot for the child in question.  This becomes an overwrite of the child.
            return new Overwrite(this.source, newEmptyPath(), childTree.value);
            else // This is a merge at a deeper level
            return new Merge(this.source, newEmptyPath(), childTree);
        } else {
            _util.assert(pathGetFront(this.path) === childName, "Can't get a merge for a child not on the path of the operation");
            return new Merge(this.source, pathPopFront(this.path), this.children);
        }
    }
    toString() {
        return 'Operation(' + this.path + ': ' + this.source.toString() + ' merge: ' + this.children.toString() + ')';
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A cache node only stores complete children. Additionally it holds a flag whether the node can be considered fully
 * initialized in the sense that we know at one point in time this represented a valid state of the world, e.g.
 * initialized with data from the server, or a complete overwrite by the client. The filtered flag also tracks
 * whether a node potentially had children removed due to a filter.
 */ class CacheNode {
    constructor(node_, fullyInitialized_, filtered_){
        this.node_ = node_;
        this.fullyInitialized_ = fullyInitialized_;
        this.filtered_ = filtered_;
    }
    /**
     * Returns whether this node was fully initialized with either server data or a complete overwrite by the client
     */ isFullyInitialized() {
        return this.fullyInitialized_;
    }
    /**
     * Returns whether this node is potentially missing children due to a filter applied to the node
     */ isFiltered() {
        return this.filtered_;
    }
    isCompleteForPath(path) {
        if (pathIsEmpty(path)) return this.isFullyInitialized() && !this.filtered_;
        const childKey = pathGetFront(path);
        return this.isCompleteForChild(childKey);
    }
    isCompleteForChild(key) {
        return this.isFullyInitialized() && !this.filtered_ || this.node_.hasChild(key);
    }
    getNode() {
        return this.node_;
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * An EventGenerator is used to convert "raw" changes (Change) as computed by the
 * CacheDiffer into actual events (Event) that can be raised.  See generateEventsForChanges()
 * for details.
 *
 */ class EventGenerator {
    constructor(query_){
        this.query_ = query_;
        this.index_ = this.query_._queryParams.getIndex();
    }
}
/**
 * Given a set of raw changes (no moved events and prevName not specified yet), and a set of
 * EventRegistrations that should be notified of these changes, generate the actual events to be raised.
 *
 * Notes:
 *  - child_moved events will be synthesized at this time for any child_changed events that affect
 *    our index.
 *  - prevName will be calculated based on the index ordering.
 */ function eventGeneratorGenerateEventsForChanges(eventGenerator, changes, eventCache, eventRegistrations) {
    const events = [];
    const moves = [];
    changes.forEach((change)=>{
        if (change.type === "child_changed" /* CHILD_CHANGED */  && eventGenerator.index_.indexedValueChanged(change.oldSnap, change.snapshotNode)) moves.push(changeChildMoved(change.childName, change.snapshotNode));
    });
    eventGeneratorGenerateEventsForType(eventGenerator, events, "child_removed" /* CHILD_REMOVED */ , changes, eventRegistrations, eventCache);
    eventGeneratorGenerateEventsForType(eventGenerator, events, "child_added" /* CHILD_ADDED */ , changes, eventRegistrations, eventCache);
    eventGeneratorGenerateEventsForType(eventGenerator, events, "child_moved" /* CHILD_MOVED */ , moves, eventRegistrations, eventCache);
    eventGeneratorGenerateEventsForType(eventGenerator, events, "child_changed" /* CHILD_CHANGED */ , changes, eventRegistrations, eventCache);
    eventGeneratorGenerateEventsForType(eventGenerator, events, "value" /* VALUE */ , changes, eventRegistrations, eventCache);
    return events;
}
/**
 * Given changes of a single change type, generate the corresponding events.
 */ function eventGeneratorGenerateEventsForType(eventGenerator, events, eventType, changes, registrations, eventCache) {
    const filteredChanges = changes.filter((change)=>change.type === eventType
    );
    filteredChanges.sort((a, b)=>eventGeneratorCompareChanges(eventGenerator, a, b)
    );
    filteredChanges.forEach((change)=>{
        const materializedChange = eventGeneratorMaterializeSingleChange(eventGenerator, change, eventCache);
        registrations.forEach((registration)=>{
            if (registration.respondsTo(change.type)) events.push(registration.createEvent(materializedChange, eventGenerator.query_));
        });
    });
}
function eventGeneratorMaterializeSingleChange(eventGenerator, change, eventCache) {
    if (change.type === 'value' || change.type === 'child_removed') return change;
    else {
        change.prevName = eventCache.getPredecessorChildName(change.childName, change.snapshotNode, eventGenerator.index_);
        return change;
    }
}
function eventGeneratorCompareChanges(eventGenerator, a, b) {
    if (a.childName == null || b.childName == null) throw _util.assertionError('Should only compare child_ events.');
    const aWrapped = new NamedNode(a.childName, a.snapshotNode);
    const bWrapped = new NamedNode(b.childName, b.snapshotNode);
    return eventGenerator.index_.compare(aWrapped, bWrapped);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function newViewCache(eventCache, serverCache) {
    return {
        eventCache,
        serverCache
    };
}
function viewCacheUpdateEventSnap(viewCache, eventSnap, complete, filtered) {
    return newViewCache(new CacheNode(eventSnap, complete, filtered), viewCache.serverCache);
}
function viewCacheUpdateServerSnap(viewCache, serverSnap, complete, filtered) {
    return newViewCache(viewCache.eventCache, new CacheNode(serverSnap, complete, filtered));
}
function viewCacheGetCompleteEventSnap(viewCache) {
    return viewCache.eventCache.isFullyInitialized() ? viewCache.eventCache.getNode() : null;
}
function viewCacheGetCompleteServerSnap(viewCache) {
    return viewCache.serverCache.isFullyInitialized() ? viewCache.serverCache.getNode() : null;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let emptyChildrenSingleton;
/**
 * Singleton empty children collection.
 *
 */ const EmptyChildren = ()=>{
    if (!emptyChildrenSingleton) emptyChildrenSingleton = new SortedMap(stringCompare);
    return emptyChildrenSingleton;
};
/**
 * A tree with immutable elements.
 */ class ImmutableTree {
    constructor(value, children = EmptyChildren()){
        this.value = value;
        this.children = children;
    }
    static fromObject(obj) {
        let tree = new ImmutableTree(null);
        each(obj, (childPath, childSnap)=>{
            tree = tree.set(new Path(childPath), childSnap);
        });
        return tree;
    }
    /**
     * True if the value is empty and there are no children
     */ isEmpty() {
        return this.value === null && this.children.isEmpty();
    }
    /**
     * Given a path and predicate, return the first node and the path to that node
     * where the predicate returns true.
     *
     * TODO Do a perf test -- If we're creating a bunch of `{path: value:}`
     * objects on the way back out, it may be better to pass down a pathSoFar obj.
     *
     * @param relativePath - The remainder of the path
     * @param predicate - The predicate to satisfy to return a node
     */ findRootMostMatchingPathAndValue(relativePath, predicate) {
        if (this.value != null && predicate(this.value)) return {
            path: newEmptyPath(),
            value: this.value
        };
        else {
            if (pathIsEmpty(relativePath)) return null;
            else {
                const front = pathGetFront(relativePath);
                const child5 = this.children.get(front);
                if (child5 !== null) {
                    const childExistingPathAndValue = child5.findRootMostMatchingPathAndValue(pathPopFront(relativePath), predicate);
                    if (childExistingPathAndValue != null) {
                        const fullPath = pathChild(new Path(front), childExistingPathAndValue.path);
                        return {
                            path: fullPath,
                            value: childExistingPathAndValue.value
                        };
                    } else return null;
                } else return null;
            }
        }
    }
    /**
     * Find, if it exists, the shortest subpath of the given path that points a defined
     * value in the tree
     */ findRootMostValueAndPath(relativePath) {
        return this.findRootMostMatchingPathAndValue(relativePath, ()=>true
        );
    }
    /**
     * @returns The subtree at the given path
     */ subtree(relativePath) {
        if (pathIsEmpty(relativePath)) return this;
        else {
            const front = pathGetFront(relativePath);
            const childTree = this.children.get(front);
            if (childTree !== null) return childTree.subtree(pathPopFront(relativePath));
            else return new ImmutableTree(null);
        }
    }
    /**
     * Sets a value at the specified path.
     *
     * @param relativePath - Path to set value at.
     * @param toSet - Value to set.
     * @returns Resulting tree.
     */ set(relativePath, toSet) {
        if (pathIsEmpty(relativePath)) return new ImmutableTree(toSet, this.children);
        else {
            const front = pathGetFront(relativePath);
            const child6 = this.children.get(front) || new ImmutableTree(null);
            const newChild = child6.set(pathPopFront(relativePath), toSet);
            const newChildren = this.children.insert(front, newChild);
            return new ImmutableTree(this.value, newChildren);
        }
    }
    /**
     * Removes the value at the specified path.
     *
     * @param relativePath - Path to value to remove.
     * @returns Resulting tree.
     */ remove(relativePath) {
        if (pathIsEmpty(relativePath)) {
            if (this.children.isEmpty()) return new ImmutableTree(null);
            else return new ImmutableTree(null, this.children);
        } else {
            const front = pathGetFront(relativePath);
            const child7 = this.children.get(front);
            if (child7) {
                const newChild = child7.remove(pathPopFront(relativePath));
                let newChildren;
                if (newChild.isEmpty()) newChildren = this.children.remove(front);
                else newChildren = this.children.insert(front, newChild);
                if (this.value === null && newChildren.isEmpty()) return new ImmutableTree(null);
                else return new ImmutableTree(this.value, newChildren);
            } else return this;
        }
    }
    /**
     * Gets a value from the tree.
     *
     * @param relativePath - Path to get value for.
     * @returns Value at path, or null.
     */ get(relativePath) {
        if (pathIsEmpty(relativePath)) return this.value;
        else {
            const front = pathGetFront(relativePath);
            const child8 = this.children.get(front);
            if (child8) return child8.get(pathPopFront(relativePath));
            else return null;
        }
    }
    /**
     * Replace the subtree at the specified path with the given new tree.
     *
     * @param relativePath - Path to replace subtree for.
     * @param newTree - New tree.
     * @returns Resulting tree.
     */ setTree(relativePath, newTree) {
        if (pathIsEmpty(relativePath)) return newTree;
        else {
            const front = pathGetFront(relativePath);
            const child9 = this.children.get(front) || new ImmutableTree(null);
            const newChild = child9.setTree(pathPopFront(relativePath), newTree);
            let newChildren;
            if (newChild.isEmpty()) newChildren = this.children.remove(front);
            else newChildren = this.children.insert(front, newChild);
            return new ImmutableTree(this.value, newChildren);
        }
    }
    /**
     * Performs a depth first fold on this tree. Transforms a tree into a single
     * value, given a function that operates on the path to a node, an optional
     * current value, and a map of child names to folded subtrees
     */ fold(fn) {
        return this.fold_(newEmptyPath(), fn);
    }
    /**
     * Recursive helper for public-facing fold() method
     */ fold_(pathSoFar, fn) {
        const accum = {
        };
        this.children.inorderTraversal((childKey, childTree)=>{
            accum[childKey] = childTree.fold_(pathChild(pathSoFar, childKey), fn);
        });
        return fn(pathSoFar, this.value, accum);
    }
    /**
     * Find the first matching value on the given path. Return the result of applying f to it.
     */ findOnPath(path, f) {
        return this.findOnPath_(path, newEmptyPath(), f);
    }
    findOnPath_(pathToFollow, pathSoFar, f) {
        const result = this.value ? f(pathSoFar, this.value) : false;
        if (result) return result;
        else {
            if (pathIsEmpty(pathToFollow)) return null;
            else {
                const front = pathGetFront(pathToFollow);
                const nextChild = this.children.get(front);
                if (nextChild) return nextChild.findOnPath_(pathPopFront(pathToFollow), pathChild(pathSoFar, front), f);
                else return null;
            }
        }
    }
    foreachOnPath(path, f) {
        return this.foreachOnPath_(path, newEmptyPath(), f);
    }
    foreachOnPath_(pathToFollow, currentRelativePath, f) {
        if (pathIsEmpty(pathToFollow)) return this;
        else {
            if (this.value) f(currentRelativePath, this.value);
            const front = pathGetFront(pathToFollow);
            const nextChild = this.children.get(front);
            if (nextChild) return nextChild.foreachOnPath_(pathPopFront(pathToFollow), pathChild(currentRelativePath, front), f);
            else return new ImmutableTree(null);
        }
    }
    /**
     * Calls the given function for each node in the tree that has a value.
     *
     * @param f - A function to be called with the path from the root of the tree to
     * a node, and the value at that node. Called in depth-first order.
     */ foreach(f) {
        this.foreach_(newEmptyPath(), f);
    }
    foreach_(currentRelativePath, f) {
        this.children.inorderTraversal((childName, childTree)=>{
            childTree.foreach_(pathChild(currentRelativePath, childName), f);
        });
        if (this.value) f(currentRelativePath, this.value);
    }
    foreachChild(f) {
        this.children.inorderTraversal((childName, childTree)=>{
            if (childTree.value) f(childName, childTree.value);
        });
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * This class holds a collection of writes that can be applied to nodes in unison. It abstracts away the logic with
 * dealing with priority writes and multiple nested writes. At any given path there is only allowed to be one write
 * modifying that path. Any write to an existing path or shadowing an existing path will modify that existing write
 * to reflect the write added.
 */ class CompoundWrite {
    constructor(writeTree_){
        this.writeTree_ = writeTree_;
    }
    static empty() {
        return new CompoundWrite(new ImmutableTree(null));
    }
}
function compoundWriteAddWrite(compoundWrite, path, node) {
    if (pathIsEmpty(path)) return new CompoundWrite(new ImmutableTree(node));
    else {
        const rootmost = compoundWrite.writeTree_.findRootMostValueAndPath(path);
        if (rootmost != null) {
            const rootMostPath = rootmost.path;
            let value = rootmost.value;
            const relativePath = newRelativePath(rootMostPath, path);
            value = value.updateChild(relativePath, node);
            return new CompoundWrite(compoundWrite.writeTree_.set(rootMostPath, value));
        } else {
            const subtree = new ImmutableTree(node);
            const newWriteTree1 = compoundWrite.writeTree_.setTree(path, subtree);
            return new CompoundWrite(newWriteTree1);
        }
    }
}
function compoundWriteAddWrites(compoundWrite, path, updates) {
    let newWrite = compoundWrite;
    each(updates, (childKey, node)=>{
        newWrite = compoundWriteAddWrite(newWrite, pathChild(path, childKey), node);
    });
    return newWrite;
}
/**
 * Will remove a write at the given path and deeper paths. This will <em>not</em> modify a write at a higher
 * location, which must be removed by calling this method with that path.
 *
 * @param compoundWrite - The CompoundWrite to remove.
 * @param path - The path at which a write and all deeper writes should be removed
 * @returns The new CompoundWrite with the removed path
 */ function compoundWriteRemoveWrite(compoundWrite, path) {
    if (pathIsEmpty(path)) return CompoundWrite.empty();
    else {
        const newWriteTree2 = compoundWrite.writeTree_.setTree(path, new ImmutableTree(null));
        return new CompoundWrite(newWriteTree2);
    }
}
/**
 * Returns whether this CompoundWrite will fully overwrite a node at a given location and can therefore be
 * considered "complete".
 *
 * @param compoundWrite - The CompoundWrite to check.
 * @param path - The path to check for
 * @returns Whether there is a complete write at that path
 */ function compoundWriteHasCompleteWrite(compoundWrite, path) {
    return compoundWriteGetCompleteNode(compoundWrite, path) != null;
}
/**
 * Returns a node for a path if and only if the node is a "complete" overwrite at that path. This will not aggregate
 * writes from deeper paths, but will return child nodes from a more shallow path.
 *
 * @param compoundWrite - The CompoundWrite to get the node from.
 * @param path - The path to get a complete write
 * @returns The node if complete at that path, or null otherwise.
 */ function compoundWriteGetCompleteNode(compoundWrite, path) {
    const rootmost = compoundWrite.writeTree_.findRootMostValueAndPath(path);
    if (rootmost != null) return compoundWrite.writeTree_.get(rootmost.path).getChild(newRelativePath(rootmost.path, path));
    else return null;
}
/**
 * Returns all children that are guaranteed to be a complete overwrite.
 *
 * @param compoundWrite - The CompoundWrite to get children from.
 * @returns A list of all complete children.
 */ function compoundWriteGetCompleteChildren(compoundWrite) {
    const children = [];
    const node = compoundWrite.writeTree_.value;
    if (node != null) // If it's a leaf node, it has no children; so nothing to do.
    {
        if (!node.isLeafNode()) node.forEachChild(PRIORITY_INDEX, (childName, childNode)=>{
            children.push(new NamedNode(childName, childNode));
        });
    } else compoundWrite.writeTree_.children.inorderTraversal((childName, childTree)=>{
        if (childTree.value != null) children.push(new NamedNode(childName, childTree.value));
    });
    return children;
}
function compoundWriteChildCompoundWrite(compoundWrite, path) {
    if (pathIsEmpty(path)) return compoundWrite;
    else {
        const shadowingNode = compoundWriteGetCompleteNode(compoundWrite, path);
        if (shadowingNode != null) return new CompoundWrite(new ImmutableTree(shadowingNode));
        else return new CompoundWrite(compoundWrite.writeTree_.subtree(path));
    }
}
/**
 * Returns true if this CompoundWrite is empty and therefore does not modify any nodes.
 * @returns Whether this CompoundWrite is empty
 */ function compoundWriteIsEmpty(compoundWrite) {
    return compoundWrite.writeTree_.isEmpty();
}
/**
 * Applies this CompoundWrite to a node. The node is returned with all writes from this CompoundWrite applied to the
 * node
 * @param node - The node to apply this CompoundWrite to
 * @returns The node with all writes applied
 */ function compoundWriteApply(compoundWrite, node) {
    return applySubtreeWrite(newEmptyPath(), compoundWrite.writeTree_, node);
}
function applySubtreeWrite(relativePath, writeTree, node) {
    if (writeTree.value != null) // Since there a write is always a leaf, we're done here
    return node.updateChild(relativePath, writeTree.value);
    else {
        let priorityWrite = null;
        writeTree.children.inorderTraversal((childKey, childTree)=>{
            if (childKey === '.priority') {
                // Apply priorities at the end so we don't update priorities for either empty nodes or forget
                // to apply priorities to empty nodes that are later filled
                _util.assert(childTree.value !== null, 'Priority writes must always be leaf nodes');
                priorityWrite = childTree.value;
            } else node = applySubtreeWrite(pathChild(relativePath, childKey), childTree, node);
        });
        // If there was a priority write, we only apply it if the node is not empty
        if (!node.getChild(relativePath).isEmpty() && priorityWrite !== null) node = node.updateChild(pathChild(relativePath, '.priority'), priorityWrite);
        return node;
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Create a new WriteTreeRef for the given path. For use with a new sync point at the given path.
 *
 */ function writeTreeChildWrites(writeTree, path) {
    return newWriteTreeRef(path, writeTree);
}
/**
 * Record a new overwrite from user code.
 *
 * @param visible - This is set to false by some transactions. It should be excluded from event caches
 */ function writeTreeAddOverwrite(writeTree, path, snap, writeId, visible) {
    _util.assert(writeId > writeTree.lastWriteId, 'Stacking an older write on top of newer ones');
    if (visible === undefined) visible = true;
    writeTree.allWrites.push({
        path,
        snap,
        writeId,
        visible
    });
    if (visible) writeTree.visibleWrites = compoundWriteAddWrite(writeTree.visibleWrites, path, snap);
    writeTree.lastWriteId = writeId;
}
/**
 * Record a new merge from user code.
 */ function writeTreeAddMerge(writeTree, path, changedChildren, writeId) {
    _util.assert(writeId > writeTree.lastWriteId, 'Stacking an older merge on top of newer ones');
    writeTree.allWrites.push({
        path,
        children: changedChildren,
        writeId,
        visible: true
    });
    writeTree.visibleWrites = compoundWriteAddWrites(writeTree.visibleWrites, path, changedChildren);
    writeTree.lastWriteId = writeId;
}
function writeTreeGetWrite(writeTree, writeId) {
    for(let i = 0; i < writeTree.allWrites.length; i++){
        const record = writeTree.allWrites[i];
        if (record.writeId === writeId) return record;
    }
    return null;
}
/**
 * Remove a write (either an overwrite or merge) that has been successfully acknowledge by the server. Recalculates
 * the tree if necessary.  We return true if it may have been visible, meaning views need to reevaluate.
 *
 * @returns true if the write may have been visible (meaning we'll need to reevaluate / raise
 * events as a result).
 */ function writeTreeRemoveWrite(writeTree, writeId) {
    // Note: disabling this check. It could be a transaction that preempted another transaction, and thus was applied
    // out of order.
    //const validClear = revert || this.allWrites_.length === 0 || writeId <= this.allWrites_[0].writeId;
    //assert(validClear, "Either we don't have this write, or it's the first one in the queue");
    const idx = writeTree.allWrites.findIndex((s)=>{
        return s.writeId === writeId;
    });
    _util.assert(idx >= 0, 'removeWrite called with nonexistent writeId.');
    const writeToRemove = writeTree.allWrites[idx];
    writeTree.allWrites.splice(idx, 1);
    let removedWriteWasVisible = writeToRemove.visible;
    let removedWriteOverlapsWithOtherWrites = false;
    let i = writeTree.allWrites.length - 1;
    while(removedWriteWasVisible && i >= 0){
        const currentWrite = writeTree.allWrites[i];
        if (currentWrite.visible) {
            if (i >= idx && writeTreeRecordContainsPath_(currentWrite, writeToRemove.path)) // The removed write was completely shadowed by a subsequent write.
            removedWriteWasVisible = false;
            else if (pathContains(writeToRemove.path, currentWrite.path)) // Either we're covering some writes or they're covering part of us (depending on which came first).
            removedWriteOverlapsWithOtherWrites = true;
        }
        i--;
    }
    if (!removedWriteWasVisible) return false;
    else if (removedWriteOverlapsWithOtherWrites) {
        // There's some shadowing going on. Just rebuild the visible writes from scratch.
        writeTreeResetTree_(writeTree);
        return true;
    } else {
        // There's no shadowing.  We can safely just remove the write(s) from visibleWrites.
        if (writeToRemove.snap) writeTree.visibleWrites = compoundWriteRemoveWrite(writeTree.visibleWrites, writeToRemove.path);
        else {
            const children = writeToRemove.children;
            each(children, (childName)=>{
                writeTree.visibleWrites = compoundWriteRemoveWrite(writeTree.visibleWrites, pathChild(writeToRemove.path, childName));
            });
        }
        return true;
    }
}
function writeTreeRecordContainsPath_(writeRecord, path) {
    if (writeRecord.snap) return pathContains(writeRecord.path, path);
    else {
        for(const childName in writeRecord.children){
            if (writeRecord.children.hasOwnProperty(childName) && pathContains(pathChild(writeRecord.path, childName), path)) return true;
        }
        return false;
    }
}
/**
 * Re-layer the writes and merges into a tree so we can efficiently calculate event snapshots
 */ function writeTreeResetTree_(writeTree) {
    writeTree.visibleWrites = writeTreeLayerTree_(writeTree.allWrites, writeTreeDefaultFilter_, newEmptyPath());
    if (writeTree.allWrites.length > 0) writeTree.lastWriteId = writeTree.allWrites[writeTree.allWrites.length - 1].writeId;
    else writeTree.lastWriteId = -1;
}
/**
 * The default filter used when constructing the tree. Keep everything that's visible.
 */ function writeTreeDefaultFilter_(write) {
    return write.visible;
}
/**
 * Static method. Given an array of WriteRecords, a filter for which ones to include, and a path, construct the tree of
 * event data at that path.
 */ function writeTreeLayerTree_(writes, filter, treeRoot) {
    let compoundWrite = CompoundWrite.empty();
    for(let i = 0; i < writes.length; ++i){
        const write = writes[i];
        // Theory, a later set will either:
        // a) abort a relevant transaction, so no need to worry about excluding it from calculating that transaction
        // b) not be relevant to a transaction (separate branch), so again will not affect the data for that transaction
        if (filter(write)) {
            const writePath = write.path;
            let relativePath;
            if (write.snap) {
                if (pathContains(treeRoot, writePath)) {
                    relativePath = newRelativePath(treeRoot, writePath);
                    compoundWrite = compoundWriteAddWrite(compoundWrite, relativePath, write.snap);
                } else if (pathContains(writePath, treeRoot)) {
                    relativePath = newRelativePath(writePath, treeRoot);
                    compoundWrite = compoundWriteAddWrite(compoundWrite, newEmptyPath(), write.snap.getChild(relativePath));
                }
            } else if (write.children) {
                if (pathContains(treeRoot, writePath)) {
                    relativePath = newRelativePath(treeRoot, writePath);
                    compoundWrite = compoundWriteAddWrites(compoundWrite, relativePath, write.children);
                } else if (pathContains(writePath, treeRoot)) {
                    relativePath = newRelativePath(writePath, treeRoot);
                    if (pathIsEmpty(relativePath)) compoundWrite = compoundWriteAddWrites(compoundWrite, newEmptyPath(), write.children);
                    else {
                        const child10 = _util.safeGet(write.children, pathGetFront(relativePath));
                        if (child10) {
                            // There exists a child in this node that matches the root path
                            const deepNode = child10.getChild(pathPopFront(relativePath));
                            compoundWrite = compoundWriteAddWrite(compoundWrite, newEmptyPath(), deepNode);
                        }
                    }
                }
            } else throw _util.assertionError('WriteRecord should have .snap or .children');
        }
    }
    return compoundWrite;
}
/**
 * Given optional, underlying server data, and an optional set of constraints (exclude some sets, include hidden
 * writes), attempt to calculate a complete snapshot for the given path
 *
 * @param writeIdsToExclude - An optional set to be excluded
 * @param includeHiddenWrites - Defaults to false, whether or not to layer on writes with visible set to false
 */ function writeTreeCalcCompleteEventCache(writeTree, treePath, completeServerCache, writeIdsToExclude, includeHiddenWrites) {
    if (!writeIdsToExclude && !includeHiddenWrites) {
        const shadowingNode = compoundWriteGetCompleteNode(writeTree.visibleWrites, treePath);
        if (shadowingNode != null) return shadowingNode;
        else {
            const subMerge = compoundWriteChildCompoundWrite(writeTree.visibleWrites, treePath);
            if (compoundWriteIsEmpty(subMerge)) return completeServerCache;
            else if (completeServerCache == null && !compoundWriteHasCompleteWrite(subMerge, newEmptyPath())) // We wouldn't have a complete snapshot, since there's no underlying data and no complete shadow
            return null;
            else {
                const layeredCache = completeServerCache || ChildrenNode.EMPTY_NODE;
                return compoundWriteApply(subMerge, layeredCache);
            }
        }
    } else {
        const merge = compoundWriteChildCompoundWrite(writeTree.visibleWrites, treePath);
        if (!includeHiddenWrites && compoundWriteIsEmpty(merge)) return completeServerCache;
        else {
            // If the server cache is null, and we don't have a complete cache, we need to return null
            if (!includeHiddenWrites && completeServerCache == null && !compoundWriteHasCompleteWrite(merge, newEmptyPath())) return null;
            else {
                const filter = function(write) {
                    return (write.visible || includeHiddenWrites) && (!writeIdsToExclude || !~writeIdsToExclude.indexOf(write.writeId)) && (pathContains(write.path, treePath) || pathContains(treePath, write.path));
                };
                const mergeAtPath = writeTreeLayerTree_(writeTree.allWrites, filter, treePath);
                const layeredCache = completeServerCache || ChildrenNode.EMPTY_NODE;
                return compoundWriteApply(mergeAtPath, layeredCache);
            }
        }
    }
}
/**
 * With optional, underlying server data, attempt to return a children node of children that we have complete data for.
 * Used when creating new views, to pre-fill their complete event children snapshot.
 */ function writeTreeCalcCompleteEventChildren(writeTree, treePath, completeServerChildren) {
    let completeChildren = ChildrenNode.EMPTY_NODE;
    const topLevelSet = compoundWriteGetCompleteNode(writeTree.visibleWrites, treePath);
    if (topLevelSet) {
        if (!topLevelSet.isLeafNode()) // we're shadowing everything. Return the children.
        topLevelSet.forEachChild(PRIORITY_INDEX, (childName, childSnap)=>{
            completeChildren = completeChildren.updateImmediateChild(childName, childSnap);
        });
        return completeChildren;
    } else if (completeServerChildren) {
        // Layer any children we have on top of this
        // We know we don't have a top-level set, so just enumerate existing children
        const merge = compoundWriteChildCompoundWrite(writeTree.visibleWrites, treePath);
        completeServerChildren.forEachChild(PRIORITY_INDEX, (childName, childNode)=>{
            const node = compoundWriteApply(compoundWriteChildCompoundWrite(merge, new Path(childName)), childNode);
            completeChildren = completeChildren.updateImmediateChild(childName, node);
        });
        // Add any complete children we have from the set
        compoundWriteGetCompleteChildren(merge).forEach((namedNode)=>{
            completeChildren = completeChildren.updateImmediateChild(namedNode.name, namedNode.node);
        });
        return completeChildren;
    } else {
        // We don't have anything to layer on top of. Layer on any children we have
        // Note that we can return an empty snap if we have a defined delete
        const merge = compoundWriteChildCompoundWrite(writeTree.visibleWrites, treePath);
        compoundWriteGetCompleteChildren(merge).forEach((namedNode)=>{
            completeChildren = completeChildren.updateImmediateChild(namedNode.name, namedNode.node);
        });
        return completeChildren;
    }
}
/**
 * Given that the underlying server data has updated, determine what, if anything, needs to be
 * applied to the event cache.
 *
 * Possibilities:
 *
 * 1. No writes are shadowing. Events should be raised, the snap to be applied comes from the server data
 *
 * 2. Some write is completely shadowing. No events to be raised
 *
 * 3. Is partially shadowed. Events
 *
 * Either existingEventSnap or existingServerSnap must exist
 */ function writeTreeCalcEventCacheAfterServerOverwrite(writeTree, treePath, childPath, existingEventSnap, existingServerSnap) {
    _util.assert(existingEventSnap || existingServerSnap, 'Either existingEventSnap or existingServerSnap must exist');
    const path = pathChild(treePath, childPath);
    if (compoundWriteHasCompleteWrite(writeTree.visibleWrites, path)) // At this point we can probably guarantee that we're in case 2, meaning no events
    // May need to check visibility while doing the findRootMostValueAndPath call
    return null;
    else {
        // No complete shadowing. We're either partially shadowing or not shadowing at all.
        const childMerge = compoundWriteChildCompoundWrite(writeTree.visibleWrites, path);
        if (compoundWriteIsEmpty(childMerge)) // We're not shadowing at all. Case 1
        return existingServerSnap.getChild(childPath);
        else // This could be more efficient if the serverNode + updates doesn't change the eventSnap
        // However this is tricky to find out, since user updates don't necessary change the server
        // snap, e.g. priority updates on empty nodes, or deep deletes. Another special case is if the server
        // adds nodes, but doesn't change any existing writes. It is therefore not enough to
        // only check if the updates change the serverNode.
        // Maybe check if the merge tree contains these special cases and only do a full overwrite in that case?
        return compoundWriteApply(childMerge, existingServerSnap.getChild(childPath));
    }
}
/**
 * Returns a complete child for a given server snap after applying all user writes or null if there is no
 * complete child for this ChildKey.
 */ function writeTreeCalcCompleteChild(writeTree, treePath, childKey, existingServerSnap) {
    const path = pathChild(treePath, childKey);
    const shadowingNode = compoundWriteGetCompleteNode(writeTree.visibleWrites, path);
    if (shadowingNode != null) return shadowingNode;
    else {
        if (existingServerSnap.isCompleteForChild(childKey)) {
            const childMerge = compoundWriteChildCompoundWrite(writeTree.visibleWrites, path);
            return compoundWriteApply(childMerge, existingServerSnap.getNode().getImmediateChild(childKey));
        } else return null;
    }
}
/**
 * Returns a node if there is a complete overwrite for this path. More specifically, if there is a write at
 * a higher path, this will return the child of that write relative to the write and this path.
 * Returns null if there is no write at this path.
 */ function writeTreeShadowingWrite(writeTree, path) {
    return compoundWriteGetCompleteNode(writeTree.visibleWrites, path);
}
/**
 * This method is used when processing child remove events on a query. If we can, we pull in children that were outside
 * the window, but may now be in the window.
 */ function writeTreeCalcIndexedSlice(writeTree, treePath, completeServerData, startPost, count, reverse, index) {
    let toIterate;
    const merge = compoundWriteChildCompoundWrite(writeTree.visibleWrites, treePath);
    const shadowingNode = compoundWriteGetCompleteNode(merge, newEmptyPath());
    if (shadowingNode != null) toIterate = shadowingNode;
    else if (completeServerData != null) toIterate = compoundWriteApply(merge, completeServerData);
    else // no children to iterate on
    return [];
    toIterate = toIterate.withIndex(index);
    if (!toIterate.isEmpty() && !toIterate.isLeafNode()) {
        const nodes = [];
        const cmp = index.getCompare();
        const iter = reverse ? toIterate.getReverseIteratorFrom(startPost, index) : toIterate.getIteratorFrom(startPost, index);
        let next = iter.getNext();
        while(next && nodes.length < count){
            if (cmp(next, startPost) !== 0) nodes.push(next);
            next = iter.getNext();
        }
        return nodes;
    } else return [];
}
function newWriteTree() {
    return {
        visibleWrites: CompoundWrite.empty(),
        allWrites: [],
        lastWriteId: -1
    };
}
/**
 * If possible, returns a complete event cache, using the underlying server data if possible. In addition, can be used
 * to get a cache that includes hidden writes, and excludes arbitrary writes. Note that customizing the returned node
 * can lead to a more expensive calculation.
 *
 * @param writeIdsToExclude - Optional writes to exclude.
 * @param includeHiddenWrites - Defaults to false, whether or not to layer on writes with visible set to false
 */ function writeTreeRefCalcCompleteEventCache(writeTreeRef, completeServerCache, writeIdsToExclude, includeHiddenWrites) {
    return writeTreeCalcCompleteEventCache(writeTreeRef.writeTree, writeTreeRef.treePath, completeServerCache, writeIdsToExclude, includeHiddenWrites);
}
/**
 * If possible, returns a children node containing all of the complete children we have data for. The returned data is a
 * mix of the given server data and write data.
 *
 */ function writeTreeRefCalcCompleteEventChildren(writeTreeRef, completeServerChildren) {
    return writeTreeCalcCompleteEventChildren(writeTreeRef.writeTree, writeTreeRef.treePath, completeServerChildren);
}
/**
 * Given that either the underlying server data has updated or the outstanding writes have updated, determine what,
 * if anything, needs to be applied to the event cache.
 *
 * Possibilities:
 *
 * 1. No writes are shadowing. Events should be raised, the snap to be applied comes from the server data
 *
 * 2. Some write is completely shadowing. No events to be raised
 *
 * 3. Is partially shadowed. Events should be raised
 *
 * Either existingEventSnap or existingServerSnap must exist, this is validated via an assert
 *
 *
 */ function writeTreeRefCalcEventCacheAfterServerOverwrite(writeTreeRef, path, existingEventSnap, existingServerSnap) {
    return writeTreeCalcEventCacheAfterServerOverwrite(writeTreeRef.writeTree, writeTreeRef.treePath, path, existingEventSnap, existingServerSnap);
}
/**
 * Returns a node if there is a complete overwrite for this path. More specifically, if there is a write at
 * a higher path, this will return the child of that write relative to the write and this path.
 * Returns null if there is no write at this path.
 *
 */ function writeTreeRefShadowingWrite(writeTreeRef, path) {
    return writeTreeShadowingWrite(writeTreeRef.writeTree, pathChild(writeTreeRef.treePath, path));
}
/**
 * This method is used when processing child remove events on a query. If we can, we pull in children that were outside
 * the window, but may now be in the window
 */ function writeTreeRefCalcIndexedSlice(writeTreeRef, completeServerData, startPost, count, reverse, index) {
    return writeTreeCalcIndexedSlice(writeTreeRef.writeTree, writeTreeRef.treePath, completeServerData, startPost, count, reverse, index);
}
/**
 * Returns a complete child for a given server snap after applying all user writes or null if there is no
 * complete child for this ChildKey.
 */ function writeTreeRefCalcCompleteChild(writeTreeRef, childKey, existingServerCache) {
    return writeTreeCalcCompleteChild(writeTreeRef.writeTree, writeTreeRef.treePath, childKey, existingServerCache);
}
/**
 * Return a WriteTreeRef for a child.
 */ function writeTreeRefChild(writeTreeRef, childName) {
    return newWriteTreeRef(pathChild(writeTreeRef.treePath, childName), writeTreeRef.writeTree);
}
function newWriteTreeRef(path, writeTree) {
    return {
        treePath: path,
        writeTree
    };
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ChildChangeAccumulator {
    constructor(){
        this.changeMap = new Map();
    }
    trackChildChange(change) {
        const type = change.type;
        const childKey = change.childName;
        _util.assert(type === "child_added" /* CHILD_ADDED */  || type === "child_changed" /* CHILD_CHANGED */  || type === "child_removed" /* CHILD_REMOVED */ , 'Only child changes supported for tracking');
        _util.assert(childKey !== '.priority', 'Only non-priority child changes can be tracked.');
        const oldChange = this.changeMap.get(childKey);
        if (oldChange) {
            const oldType = oldChange.type;
            if (type === "child_added" /* CHILD_ADDED */  && oldType === "child_removed" /* CHILD_REMOVED */ ) this.changeMap.set(childKey, changeChildChanged(childKey, change.snapshotNode, oldChange.snapshotNode));
            else if (type === "child_removed" /* CHILD_REMOVED */  && oldType === "child_added" /* CHILD_ADDED */ ) this.changeMap.delete(childKey);
            else if (type === "child_removed" /* CHILD_REMOVED */  && oldType === "child_changed" /* CHILD_CHANGED */ ) this.changeMap.set(childKey, changeChildRemoved(childKey, oldChange.oldSnap));
            else if (type === "child_changed" /* CHILD_CHANGED */  && oldType === "child_added" /* CHILD_ADDED */ ) this.changeMap.set(childKey, changeChildAdded(childKey, change.snapshotNode));
            else if (type === "child_changed" /* CHILD_CHANGED */  && oldType === "child_changed" /* CHILD_CHANGED */ ) this.changeMap.set(childKey, changeChildChanged(childKey, change.snapshotNode, oldChange.oldSnap));
            else throw _util.assertionError('Illegal combination of changes: ' + change + ' occurred after ' + oldChange);
        } else this.changeMap.set(childKey, change);
    }
    getChanges() {
        return Array.from(this.changeMap.values());
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * An implementation of CompleteChildSource that never returns any additional children
 */ // eslint-disable-next-line @typescript-eslint/naming-convention
class NoCompleteChildSource_ {
    getCompleteChild(childKey) {
        return null;
    }
    getChildAfterChild(index, child, reverse) {
        return null;
    }
}
/**
 * Singleton instance.
 */ const NO_COMPLETE_CHILD_SOURCE = new NoCompleteChildSource_();
/**
 * An implementation of CompleteChildSource that uses a WriteTree in addition to any other server data or
 * old event caches available to calculate complete children.
 */ class WriteTreeCompleteChildSource {
    constructor(writes_, viewCache_, optCompleteServerCache_ = null){
        this.writes_ = writes_;
        this.viewCache_ = viewCache_;
        this.optCompleteServerCache_ = optCompleteServerCache_;
    }
    getCompleteChild(childKey) {
        const node = this.viewCache_.eventCache;
        if (node.isCompleteForChild(childKey)) return node.getNode().getImmediateChild(childKey);
        else {
            const serverNode = this.optCompleteServerCache_ != null ? new CacheNode(this.optCompleteServerCache_, true, false) : this.viewCache_.serverCache;
            return writeTreeRefCalcCompleteChild(this.writes_, childKey, serverNode);
        }
    }
    getChildAfterChild(index, child11, reverse) {
        const completeServerData = this.optCompleteServerCache_ != null ? this.optCompleteServerCache_ : viewCacheGetCompleteServerSnap(this.viewCache_);
        const nodes = writeTreeRefCalcIndexedSlice(this.writes_, completeServerData, child11, 1, reverse, index);
        if (nodes.length === 0) return null;
        else return nodes[0];
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function newViewProcessor(filter) {
    return {
        filter
    };
}
function viewProcessorAssertIndexed(viewProcessor, viewCache) {
    _util.assert(viewCache.eventCache.getNode().isIndexed(viewProcessor.filter.getIndex()), 'Event snap not indexed');
    _util.assert(viewCache.serverCache.getNode().isIndexed(viewProcessor.filter.getIndex()), 'Server snap not indexed');
}
function viewProcessorApplyOperation(viewProcessor, oldViewCache, operation, writesCache, completeCache) {
    const accumulator = new ChildChangeAccumulator();
    let newViewCache1, filterServerNode;
    if (operation.type === OperationType.OVERWRITE) {
        const overwrite = operation;
        if (overwrite.source.fromUser) newViewCache1 = viewProcessorApplyUserOverwrite(viewProcessor, oldViewCache, overwrite.path, overwrite.snap, writesCache, completeCache, accumulator);
        else {
            _util.assert(overwrite.source.fromServer, 'Unknown source.');
            // We filter the node if it's a tagged update or the node has been previously filtered  and the
            // update is not at the root in which case it is ok (and necessary) to mark the node unfiltered
            // again
            filterServerNode = overwrite.source.tagged || oldViewCache.serverCache.isFiltered() && !pathIsEmpty(overwrite.path);
            newViewCache1 = viewProcessorApplyServerOverwrite(viewProcessor, oldViewCache, overwrite.path, overwrite.snap, writesCache, completeCache, filterServerNode, accumulator);
        }
    } else if (operation.type === OperationType.MERGE) {
        const merge = operation;
        if (merge.source.fromUser) newViewCache1 = viewProcessorApplyUserMerge(viewProcessor, oldViewCache, merge.path, merge.children, writesCache, completeCache, accumulator);
        else {
            _util.assert(merge.source.fromServer, 'Unknown source.');
            // We filter the node if it's a tagged update or the node has been previously filtered
            filterServerNode = merge.source.tagged || oldViewCache.serverCache.isFiltered();
            newViewCache1 = viewProcessorApplyServerMerge(viewProcessor, oldViewCache, merge.path, merge.children, writesCache, completeCache, filterServerNode, accumulator);
        }
    } else if (operation.type === OperationType.ACK_USER_WRITE) {
        const ackUserWrite = operation;
        if (!ackUserWrite.revert) newViewCache1 = viewProcessorAckUserWrite(viewProcessor, oldViewCache, ackUserWrite.path, ackUserWrite.affectedTree, writesCache, completeCache, accumulator);
        else newViewCache1 = viewProcessorRevertUserWrite(viewProcessor, oldViewCache, ackUserWrite.path, writesCache, completeCache, accumulator);
    } else if (operation.type === OperationType.LISTEN_COMPLETE) newViewCache1 = viewProcessorListenComplete(viewProcessor, oldViewCache, operation.path, writesCache, accumulator);
    else throw _util.assertionError('Unknown operation type: ' + operation.type);
    const changes = accumulator.getChanges();
    viewProcessorMaybeAddValueEvent(oldViewCache, newViewCache1, changes);
    return {
        viewCache: newViewCache1,
        changes
    };
}
function viewProcessorMaybeAddValueEvent(oldViewCache, newViewCache2, accumulator) {
    const eventSnap = newViewCache2.eventCache;
    if (eventSnap.isFullyInitialized()) {
        const isLeafOrEmpty = eventSnap.getNode().isLeafNode() || eventSnap.getNode().isEmpty();
        const oldCompleteSnap = viewCacheGetCompleteEventSnap(oldViewCache);
        if (accumulator.length > 0 || !oldViewCache.eventCache.isFullyInitialized() || isLeafOrEmpty && !eventSnap.getNode().equals(oldCompleteSnap) || !eventSnap.getNode().getPriority().equals(oldCompleteSnap.getPriority())) accumulator.push(changeValue(viewCacheGetCompleteEventSnap(newViewCache2)));
    }
}
function viewProcessorGenerateEventCacheAfterServerEvent(viewProcessor, viewCache, changePath, writesCache, source, accumulator) {
    const oldEventSnap = viewCache.eventCache;
    if (writeTreeRefShadowingWrite(writesCache, changePath) != null) // we have a shadowing write, ignore changes
    return viewCache;
    else {
        let newEventCache, serverNode;
        if (pathIsEmpty(changePath)) {
            // TODO: figure out how this plays with "sliding ack windows"
            _util.assert(viewCache.serverCache.isFullyInitialized(), 'If change path is empty, we must have complete server data');
            if (viewCache.serverCache.isFiltered()) {
                // We need to special case this, because we need to only apply writes to complete children, or
                // we might end up raising events for incomplete children. If the server data is filtered deep
                // writes cannot be guaranteed to be complete
                const serverCache = viewCacheGetCompleteServerSnap(viewCache);
                const completeChildren = serverCache instanceof ChildrenNode ? serverCache : ChildrenNode.EMPTY_NODE;
                const completeEventChildren = writeTreeRefCalcCompleteEventChildren(writesCache, completeChildren);
                newEventCache = viewProcessor.filter.updateFullNode(viewCache.eventCache.getNode(), completeEventChildren, accumulator);
            } else {
                const completeNode = writeTreeRefCalcCompleteEventCache(writesCache, viewCacheGetCompleteServerSnap(viewCache));
                newEventCache = viewProcessor.filter.updateFullNode(viewCache.eventCache.getNode(), completeNode, accumulator);
            }
        } else {
            const childKey = pathGetFront(changePath);
            if (childKey === '.priority') {
                _util.assert(pathGetLength(changePath) === 1, "Can't have a priority with additional path components");
                const oldEventNode = oldEventSnap.getNode();
                serverNode = viewCache.serverCache.getNode();
                // we might have overwrites for this priority
                const updatedPriority = writeTreeRefCalcEventCacheAfterServerOverwrite(writesCache, changePath, oldEventNode, serverNode);
                if (updatedPriority != null) newEventCache = viewProcessor.filter.updatePriority(oldEventNode, updatedPriority);
                else // priority didn't change, keep old node
                newEventCache = oldEventSnap.getNode();
            } else {
                const childChangePath = pathPopFront(changePath);
                // update child
                let newEventChild;
                if (oldEventSnap.isCompleteForChild(childKey)) {
                    serverNode = viewCache.serverCache.getNode();
                    const eventChildUpdate = writeTreeRefCalcEventCacheAfterServerOverwrite(writesCache, changePath, oldEventSnap.getNode(), serverNode);
                    if (eventChildUpdate != null) newEventChild = oldEventSnap.getNode().getImmediateChild(childKey).updateChild(childChangePath, eventChildUpdate);
                    else // Nothing changed, just keep the old child
                    newEventChild = oldEventSnap.getNode().getImmediateChild(childKey);
                } else newEventChild = writeTreeRefCalcCompleteChild(writesCache, childKey, viewCache.serverCache);
                if (newEventChild != null) newEventCache = viewProcessor.filter.updateChild(oldEventSnap.getNode(), childKey, newEventChild, childChangePath, source, accumulator);
                else // no complete child available or no change
                newEventCache = oldEventSnap.getNode();
            }
        }
        return viewCacheUpdateEventSnap(viewCache, newEventCache, oldEventSnap.isFullyInitialized() || pathIsEmpty(changePath), viewProcessor.filter.filtersNodes());
    }
}
function viewProcessorApplyServerOverwrite(viewProcessor, oldViewCache, changePath, changedSnap, writesCache, completeCache, filterServerNode, accumulator) {
    const oldServerSnap = oldViewCache.serverCache;
    let newServerCache;
    const serverFilter = filterServerNode ? viewProcessor.filter : viewProcessor.filter.getIndexedFilter();
    if (pathIsEmpty(changePath)) newServerCache = serverFilter.updateFullNode(oldServerSnap.getNode(), changedSnap, null);
    else if (serverFilter.filtersNodes() && !oldServerSnap.isFiltered()) {
        // we want to filter the server node, but we didn't filter the server node yet, so simulate a full update
        const newServerNode = oldServerSnap.getNode().updateChild(changePath, changedSnap);
        newServerCache = serverFilter.updateFullNode(oldServerSnap.getNode(), newServerNode, null);
    } else {
        const childKey = pathGetFront(changePath);
        if (!oldServerSnap.isCompleteForPath(changePath) && pathGetLength(changePath) > 1) // We don't update incomplete nodes with updates intended for other listeners
        return oldViewCache;
        const childChangePath = pathPopFront(changePath);
        const childNode = oldServerSnap.getNode().getImmediateChild(childKey);
        const newChildNode = childNode.updateChild(childChangePath, changedSnap);
        if (childKey === '.priority') newServerCache = serverFilter.updatePriority(oldServerSnap.getNode(), newChildNode);
        else newServerCache = serverFilter.updateChild(oldServerSnap.getNode(), childKey, newChildNode, childChangePath, NO_COMPLETE_CHILD_SOURCE, null);
    }
    const newViewCache3 = viewCacheUpdateServerSnap(oldViewCache, newServerCache, oldServerSnap.isFullyInitialized() || pathIsEmpty(changePath), serverFilter.filtersNodes());
    const source = new WriteTreeCompleteChildSource(writesCache, newViewCache3, completeCache);
    return viewProcessorGenerateEventCacheAfterServerEvent(viewProcessor, newViewCache3, changePath, writesCache, source, accumulator);
}
function viewProcessorApplyUserOverwrite(viewProcessor, oldViewCache, changePath, changedSnap, writesCache, completeCache, accumulator) {
    const oldEventSnap = oldViewCache.eventCache;
    let newViewCache4, newEventCache;
    const source = new WriteTreeCompleteChildSource(writesCache, oldViewCache, completeCache);
    if (pathIsEmpty(changePath)) {
        newEventCache = viewProcessor.filter.updateFullNode(oldViewCache.eventCache.getNode(), changedSnap, accumulator);
        newViewCache4 = viewCacheUpdateEventSnap(oldViewCache, newEventCache, true, viewProcessor.filter.filtersNodes());
    } else {
        const childKey = pathGetFront(changePath);
        if (childKey === '.priority') {
            newEventCache = viewProcessor.filter.updatePriority(oldViewCache.eventCache.getNode(), changedSnap);
            newViewCache4 = viewCacheUpdateEventSnap(oldViewCache, newEventCache, oldEventSnap.isFullyInitialized(), oldEventSnap.isFiltered());
        } else {
            const childChangePath = pathPopFront(changePath);
            const oldChild = oldEventSnap.getNode().getImmediateChild(childKey);
            let newChild;
            if (pathIsEmpty(childChangePath)) // Child overwrite, we can replace the child
            newChild = changedSnap;
            else {
                const childNode = source.getCompleteChild(childKey);
                if (childNode != null) {
                    if (pathGetBack(childChangePath) === '.priority' && childNode.getChild(pathParent(childChangePath)).isEmpty()) // This is a priority update on an empty node. If this node exists on the server, the
                    // server will send down the priority in the update, so ignore for now
                    newChild = childNode;
                    else newChild = childNode.updateChild(childChangePath, changedSnap);
                } else // There is no complete child node available
                newChild = ChildrenNode.EMPTY_NODE;
            }
            if (!oldChild.equals(newChild)) {
                const newEventSnap = viewProcessor.filter.updateChild(oldEventSnap.getNode(), childKey, newChild, childChangePath, source, accumulator);
                newViewCache4 = viewCacheUpdateEventSnap(oldViewCache, newEventSnap, oldEventSnap.isFullyInitialized(), viewProcessor.filter.filtersNodes());
            } else newViewCache4 = oldViewCache;
        }
    }
    return newViewCache4;
}
function viewProcessorCacheHasChild(viewCache, childKey) {
    return viewCache.eventCache.isCompleteForChild(childKey);
}
function viewProcessorApplyUserMerge(viewProcessor, viewCache, path, changedChildren, writesCache, serverCache, accumulator) {
    // HACK: In the case of a limit query, there may be some changes that bump things out of the
    // window leaving room for new items.  It's important we process these changes first, so we
    // iterate the changes twice, first processing any that affect items currently in view.
    // TODO: I consider an item "in view" if cacheHasChild is true, which checks both the server
    // and event snap.  I'm not sure if this will result in edge cases when a child is in one but
    // not the other.
    let curViewCache = viewCache;
    changedChildren.foreach((relativePath, childNode)=>{
        const writePath = pathChild(path, relativePath);
        if (viewProcessorCacheHasChild(viewCache, pathGetFront(writePath))) curViewCache = viewProcessorApplyUserOverwrite(viewProcessor, curViewCache, writePath, childNode, writesCache, serverCache, accumulator);
    });
    changedChildren.foreach((relativePath, childNode)=>{
        const writePath = pathChild(path, relativePath);
        if (!viewProcessorCacheHasChild(viewCache, pathGetFront(writePath))) curViewCache = viewProcessorApplyUserOverwrite(viewProcessor, curViewCache, writePath, childNode, writesCache, serverCache, accumulator);
    });
    return curViewCache;
}
function viewProcessorApplyMerge(viewProcessor, node, merge) {
    merge.foreach((relativePath, childNode)=>{
        node = node.updateChild(relativePath, childNode);
    });
    return node;
}
function viewProcessorApplyServerMerge(viewProcessor, viewCache, path, changedChildren, writesCache, serverCache, filterServerNode, accumulator) {
    // If we don't have a cache yet, this merge was intended for a previously listen in the same location. Ignore it and
    // wait for the complete data update coming soon.
    if (viewCache.serverCache.getNode().isEmpty() && !viewCache.serverCache.isFullyInitialized()) return viewCache;
    // HACK: In the case of a limit query, there may be some changes that bump things out of the
    // window leaving room for new items.  It's important we process these changes first, so we
    // iterate the changes twice, first processing any that affect items currently in view.
    // TODO: I consider an item "in view" if cacheHasChild is true, which checks both the server
    // and event snap.  I'm not sure if this will result in edge cases when a child is in one but
    // not the other.
    let curViewCache = viewCache;
    let viewMergeTree;
    if (pathIsEmpty(path)) viewMergeTree = changedChildren;
    else viewMergeTree = new ImmutableTree(null).setTree(path, changedChildren);
    const serverNode = viewCache.serverCache.getNode();
    viewMergeTree.children.inorderTraversal((childKey, childTree)=>{
        if (serverNode.hasChild(childKey)) {
            const serverChild = viewCache.serverCache.getNode().getImmediateChild(childKey);
            const newChild = viewProcessorApplyMerge(viewProcessor, serverChild, childTree);
            curViewCache = viewProcessorApplyServerOverwrite(viewProcessor, curViewCache, new Path(childKey), newChild, writesCache, serverCache, filterServerNode, accumulator);
        }
    });
    viewMergeTree.children.inorderTraversal((childKey, childMergeTree)=>{
        const isUnknownDeepMerge = !viewCache.serverCache.isCompleteForChild(childKey) && childMergeTree.value === undefined;
        if (!serverNode.hasChild(childKey) && !isUnknownDeepMerge) {
            const serverChild = viewCache.serverCache.getNode().getImmediateChild(childKey);
            const newChild = viewProcessorApplyMerge(viewProcessor, serverChild, childMergeTree);
            curViewCache = viewProcessorApplyServerOverwrite(viewProcessor, curViewCache, new Path(childKey), newChild, writesCache, serverCache, filterServerNode, accumulator);
        }
    });
    return curViewCache;
}
function viewProcessorAckUserWrite(viewProcessor, viewCache, ackPath, affectedTree, writesCache, completeCache, accumulator) {
    if (writeTreeRefShadowingWrite(writesCache, ackPath) != null) return viewCache;
    // Only filter server node if it is currently filtered
    const filterServerNode = viewCache.serverCache.isFiltered();
    // Essentially we'll just get our existing server cache for the affected paths and re-apply it as a server update
    // now that it won't be shadowed.
    const serverCache = viewCache.serverCache;
    if (affectedTree.value != null) {
        // This is an overwrite.
        if (pathIsEmpty(ackPath) && serverCache.isFullyInitialized() || serverCache.isCompleteForPath(ackPath)) return viewProcessorApplyServerOverwrite(viewProcessor, viewCache, ackPath, serverCache.getNode().getChild(ackPath), writesCache, completeCache, filterServerNode, accumulator);
        else if (pathIsEmpty(ackPath)) {
            // This is a goofy edge case where we are acking data at this location but don't have full data.  We
            // should just re-apply whatever we have in our cache as a merge.
            let changedChildren = new ImmutableTree(null);
            serverCache.getNode().forEachChild(KEY_INDEX, (name8, node)=>{
                changedChildren = changedChildren.set(new Path(name8), node);
            });
            return viewProcessorApplyServerMerge(viewProcessor, viewCache, ackPath, changedChildren, writesCache, completeCache, filterServerNode, accumulator);
        } else return viewCache;
    } else {
        // This is a merge.
        let changedChildren = new ImmutableTree(null);
        affectedTree.foreach((mergePath, value)=>{
            const serverCachePath = pathChild(ackPath, mergePath);
            if (serverCache.isCompleteForPath(serverCachePath)) changedChildren = changedChildren.set(mergePath, serverCache.getNode().getChild(serverCachePath));
        });
        return viewProcessorApplyServerMerge(viewProcessor, viewCache, ackPath, changedChildren, writesCache, completeCache, filterServerNode, accumulator);
    }
}
function viewProcessorListenComplete(viewProcessor, viewCache, path, writesCache, accumulator) {
    const oldServerNode = viewCache.serverCache;
    const newViewCache5 = viewCacheUpdateServerSnap(viewCache, oldServerNode.getNode(), oldServerNode.isFullyInitialized() || pathIsEmpty(path), oldServerNode.isFiltered());
    return viewProcessorGenerateEventCacheAfterServerEvent(viewProcessor, newViewCache5, path, writesCache, NO_COMPLETE_CHILD_SOURCE, accumulator);
}
function viewProcessorRevertUserWrite(viewProcessor, viewCache, path, writesCache, completeServerCache, accumulator) {
    let complete;
    if (writeTreeRefShadowingWrite(writesCache, path) != null) return viewCache;
    else {
        const source = new WriteTreeCompleteChildSource(writesCache, viewCache, completeServerCache);
        const oldEventCache = viewCache.eventCache.getNode();
        let newEventCache;
        if (pathIsEmpty(path) || pathGetFront(path) === '.priority') {
            let newNode;
            if (viewCache.serverCache.isFullyInitialized()) newNode = writeTreeRefCalcCompleteEventCache(writesCache, viewCacheGetCompleteServerSnap(viewCache));
            else {
                const serverChildren = viewCache.serverCache.getNode();
                _util.assert(serverChildren instanceof ChildrenNode, 'serverChildren would be complete if leaf node');
                newNode = writeTreeRefCalcCompleteEventChildren(writesCache, serverChildren);
            }
            newEventCache = viewProcessor.filter.updateFullNode(oldEventCache, newNode, accumulator);
        } else {
            const childKey = pathGetFront(path);
            let newChild = writeTreeRefCalcCompleteChild(writesCache, childKey, viewCache.serverCache);
            if (newChild == null && viewCache.serverCache.isCompleteForChild(childKey)) newChild = oldEventCache.getImmediateChild(childKey);
            if (newChild != null) newEventCache = viewProcessor.filter.updateChild(oldEventCache, childKey, newChild, pathPopFront(path), source, accumulator);
            else if (viewCache.eventCache.getNode().hasChild(childKey)) // No complete child available, delete the existing one, if any
            newEventCache = viewProcessor.filter.updateChild(oldEventCache, childKey, ChildrenNode.EMPTY_NODE, pathPopFront(path), source, accumulator);
            else newEventCache = oldEventCache;
            if (newEventCache.isEmpty() && viewCache.serverCache.isFullyInitialized()) {
                // We might have reverted all child writes. Maybe the old event was a leaf node
                complete = writeTreeRefCalcCompleteEventCache(writesCache, viewCacheGetCompleteServerSnap(viewCache));
                if (complete.isLeafNode()) newEventCache = viewProcessor.filter.updateFullNode(newEventCache, complete, accumulator);
            }
        }
        complete = viewCache.serverCache.isFullyInitialized() || writeTreeRefShadowingWrite(writesCache, newEmptyPath()) != null;
        return viewCacheUpdateEventSnap(viewCache, newEventCache, complete, viewProcessor.filter.filtersNodes());
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A view represents a specific location and query that has 1 or more event registrations.
 *
 * It does several things:
 *  - Maintains the list of event registrations for this location/query.
 *  - Maintains a cache of the data visible for this location/query.
 *  - Applies new operations (via applyOperation), updates the cache, and based on the event
 *    registrations returns the set of events to be raised.
 */ class View {
    constructor(query_, initialViewCache){
        this.query_ = query_;
        this.eventRegistrations_ = [];
        const params = this.query_._queryParams;
        const indexFilter = new IndexedFilter(params.getIndex());
        const filter = queryParamsGetNodeFilter(params);
        this.processor_ = newViewProcessor(filter);
        const initialServerCache = initialViewCache.serverCache;
        const initialEventCache = initialViewCache.eventCache;
        // Don't filter server node with other filter than index, wait for tagged listen
        const serverSnap = indexFilter.updateFullNode(ChildrenNode.EMPTY_NODE, initialServerCache.getNode(), null);
        const eventSnap = filter.updateFullNode(ChildrenNode.EMPTY_NODE, initialEventCache.getNode(), null);
        const newServerCache = new CacheNode(serverSnap, initialServerCache.isFullyInitialized(), indexFilter.filtersNodes());
        const newEventCache = new CacheNode(eventSnap, initialEventCache.isFullyInitialized(), filter.filtersNodes());
        this.viewCache_ = newViewCache(newEventCache, newServerCache);
        this.eventGenerator_ = new EventGenerator(this.query_);
    }
    get query() {
        return this.query_;
    }
}
function viewGetServerCache(view) {
    return view.viewCache_.serverCache.getNode();
}
function viewGetCompleteNode(view) {
    return viewCacheGetCompleteEventSnap(view.viewCache_);
}
function viewGetCompleteServerCache(view, path) {
    const cache = viewCacheGetCompleteServerSnap(view.viewCache_);
    if (cache) {
        // If this isn't a "loadsAllData" view, then cache isn't actually a complete cache and
        // we need to see if it contains the child we're interested in.
        if (view.query._queryParams.loadsAllData() || !pathIsEmpty(path) && !cache.getImmediateChild(pathGetFront(path)).isEmpty()) return cache.getChild(path);
    }
    return null;
}
function viewIsEmpty(view) {
    return view.eventRegistrations_.length === 0;
}
function viewAddEventRegistration(view, eventRegistration) {
    view.eventRegistrations_.push(eventRegistration);
}
/**
 * @param eventRegistration - If null, remove all callbacks.
 * @param cancelError - If a cancelError is provided, appropriate cancel events will be returned.
 * @returns Cancel events, if cancelError was provided.
 */ function viewRemoveEventRegistration(view, eventRegistration, cancelError) {
    const cancelEvents = [];
    if (cancelError) {
        _util.assert(eventRegistration == null, 'A cancel should cancel all event registrations.');
        const path = view.query._path;
        view.eventRegistrations_.forEach((registration)=>{
            const maybeEvent = registration.createCancelEvent(cancelError, path);
            if (maybeEvent) cancelEvents.push(maybeEvent);
        });
    }
    if (eventRegistration) {
        let remaining = [];
        for(let i = 0; i < view.eventRegistrations_.length; ++i){
            const existing = view.eventRegistrations_[i];
            if (!existing.matches(eventRegistration)) remaining.push(existing);
            else if (eventRegistration.hasAnyCallback()) {
                // We're removing just this one
                remaining = remaining.concat(view.eventRegistrations_.slice(i + 1));
                break;
            }
        }
        view.eventRegistrations_ = remaining;
    } else view.eventRegistrations_ = [];
    return cancelEvents;
}
/**
 * Applies the given Operation, updates our cache, and returns the appropriate events.
 */ function viewApplyOperation(view, operation, writesCache, completeServerCache) {
    if (operation.type === OperationType.MERGE && operation.source.queryId !== null) {
        _util.assert(viewCacheGetCompleteServerSnap(view.viewCache_), 'We should always have a full cache before handling merges');
        _util.assert(viewCacheGetCompleteEventSnap(view.viewCache_), 'Missing event cache, even though we have a server cache');
    }
    const oldViewCache = view.viewCache_;
    const result = viewProcessorApplyOperation(view.processor_, oldViewCache, operation, writesCache, completeServerCache);
    viewProcessorAssertIndexed(view.processor_, result.viewCache);
    _util.assert(result.viewCache.serverCache.isFullyInitialized() || !oldViewCache.serverCache.isFullyInitialized(), 'Once a server snap is complete, it should never go back');
    view.viewCache_ = result.viewCache;
    return viewGenerateEventsForChanges_(view, result.changes, result.viewCache.eventCache.getNode(), null);
}
function viewGetInitialEvents(view, registration) {
    const eventSnap = view.viewCache_.eventCache;
    const initialChanges = [];
    if (!eventSnap.getNode().isLeafNode()) {
        const eventNode = eventSnap.getNode();
        eventNode.forEachChild(PRIORITY_INDEX, (key, childNode)=>{
            initialChanges.push(changeChildAdded(key, childNode));
        });
    }
    if (eventSnap.isFullyInitialized()) initialChanges.push(changeValue(eventSnap.getNode()));
    return viewGenerateEventsForChanges_(view, initialChanges, eventSnap.getNode(), registration);
}
function viewGenerateEventsForChanges_(view, changes, eventCache, eventRegistration) {
    const registrations = eventRegistration ? [
        eventRegistration
    ] : view.eventRegistrations_;
    return eventGeneratorGenerateEventsForChanges(view.eventGenerator_, changes, eventCache, registrations);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let referenceConstructor$1;
/**
 * SyncPoint represents a single location in a SyncTree with 1 or more event registrations, meaning we need to
 * maintain 1 or more Views at this location to cache server data and raise appropriate events for server changes
 * and user writes (set, transaction, update).
 *
 * It's responsible for:
 *  - Maintaining the set of 1 or more views necessary at this location (a SyncPoint with 0 views should be removed).
 *  - Proxying user / server operations to the views as appropriate (i.e. applyServerOverwrite,
 *    applyUserOverwrite, etc.)
 */ class SyncPoint {
    constructor(){
        /**
         * The Views being tracked at this location in the tree, stored as a map where the key is a
         * queryId and the value is the View for that query.
         *
         * NOTE: This list will be quite small (usually 1, but perhaps 2 or 3; any more is an odd use case).
         */ this.views = new Map();
    }
}
function syncPointSetReferenceConstructor(val) {
    _util.assert(!referenceConstructor$1, '__referenceConstructor has already been defined');
    referenceConstructor$1 = val;
}
function syncPointGetReferenceConstructor() {
    _util.assert(referenceConstructor$1, 'Reference.ts has not been loaded');
    return referenceConstructor$1;
}
function syncPointIsEmpty(syncPoint) {
    return syncPoint.views.size === 0;
}
function syncPointApplyOperation(syncPoint, operation, writesCache, optCompleteServerCache) {
    const queryId = operation.source.queryId;
    if (queryId !== null) {
        const view = syncPoint.views.get(queryId);
        _util.assert(view != null, 'SyncTree gave us an op for an invalid query.');
        return viewApplyOperation(view, operation, writesCache, optCompleteServerCache);
    } else {
        let events = [];
        for (const view of syncPoint.views.values())events = events.concat(viewApplyOperation(view, operation, writesCache, optCompleteServerCache));
        return events;
    }
}
/**
 * Get a view for the specified query.
 *
 * @param query - The query to return a view for
 * @param writesCache
 * @param serverCache
 * @param serverCacheComplete
 * @returns Events to raise.
 */ function syncPointGetView(syncPoint, query13, writesCache, serverCache, serverCacheComplete) {
    const queryId = query13._queryIdentifier;
    const view = syncPoint.views.get(queryId);
    if (!view) {
        // TODO: make writesCache take flag for complete server node
        let eventCache = writeTreeRefCalcCompleteEventCache(writesCache, serverCacheComplete ? serverCache : null);
        let eventCacheComplete = false;
        if (eventCache) eventCacheComplete = true;
        else if (serverCache instanceof ChildrenNode) {
            eventCache = writeTreeRefCalcCompleteEventChildren(writesCache, serverCache);
            eventCacheComplete = false;
        } else {
            eventCache = ChildrenNode.EMPTY_NODE;
            eventCacheComplete = false;
        }
        const viewCache = newViewCache(new CacheNode(eventCache, eventCacheComplete, false), new CacheNode(serverCache, serverCacheComplete, false));
        return new View(query13, viewCache);
    }
    return view;
}
/**
 * Add an event callback for the specified query.
 *
 * @param query
 * @param eventRegistration
 * @param writesCache
 * @param serverCache - Complete server cache, if we have it.
 * @param serverCacheComplete
 * @returns Events to raise.
 */ function syncPointAddEventRegistration(syncPoint, query14, eventRegistration, writesCache, serverCache, serverCacheComplete) {
    const view = syncPointGetView(syncPoint, query14, writesCache, serverCache, serverCacheComplete);
    if (!syncPoint.views.has(query14._queryIdentifier)) syncPoint.views.set(query14._queryIdentifier, view);
    // This is guaranteed to exist now, we just created anything that was missing
    viewAddEventRegistration(view, eventRegistration);
    return viewGetInitialEvents(view, eventRegistration);
}
/**
 * Remove event callback(s).  Return cancelEvents if a cancelError is specified.
 *
 * If query is the default query, we'll check all views for the specified eventRegistration.
 * If eventRegistration is null, we'll remove all callbacks for the specified view(s).
 *
 * @param eventRegistration - If null, remove all callbacks.
 * @param cancelError - If a cancelError is provided, appropriate cancel events will be returned.
 * @returns removed queries and any cancel events
 */ function syncPointRemoveEventRegistration(syncPoint, query15, eventRegistration, cancelError) {
    const queryId = query15._queryIdentifier;
    const removed = [];
    let cancelEvents = [];
    const hadCompleteView = syncPointHasCompleteView(syncPoint);
    if (queryId === 'default') // When you do ref.off(...), we search all views for the registration to remove.
    for (const [viewQueryId, view] of syncPoint.views.entries()){
        cancelEvents = cancelEvents.concat(viewRemoveEventRegistration(view, eventRegistration, cancelError));
        if (viewIsEmpty(view)) {
            syncPoint.views.delete(viewQueryId);
            // We'll deal with complete views later.
            if (!view.query._queryParams.loadsAllData()) removed.push(view.query);
        }
    }
    else {
        // remove the callback from the specific view.
        const view = syncPoint.views.get(queryId);
        if (view) {
            cancelEvents = cancelEvents.concat(viewRemoveEventRegistration(view, eventRegistration, cancelError));
            if (viewIsEmpty(view)) {
                syncPoint.views.delete(queryId);
                // We'll deal with complete views later.
                if (!view.query._queryParams.loadsAllData()) removed.push(view.query);
            }
        }
    }
    if (hadCompleteView && !syncPointHasCompleteView(syncPoint)) // We removed our last complete view.
    removed.push(new (syncPointGetReferenceConstructor())(query15._repo, query15._path));
    return {
        removed,
        events: cancelEvents
    };
}
function syncPointGetQueryViews(syncPoint) {
    const result = [];
    for (const view of syncPoint.views.values())if (!view.query._queryParams.loadsAllData()) result.push(view);
    return result;
}
/**
 * @param path - The path to the desired complete snapshot
 * @returns A complete cache, if it exists
 */ function syncPointGetCompleteServerCache(syncPoint, path) {
    let serverCache = null;
    for (const view of syncPoint.views.values())serverCache = serverCache || viewGetCompleteServerCache(view, path);
    return serverCache;
}
function syncPointViewForQuery(syncPoint, query16) {
    const params = query16._queryParams;
    if (params.loadsAllData()) return syncPointGetCompleteView(syncPoint);
    else {
        const queryId = query16._queryIdentifier;
        return syncPoint.views.get(queryId);
    }
}
function syncPointViewExistsForQuery(syncPoint, query17) {
    return syncPointViewForQuery(syncPoint, query17) != null;
}
function syncPointHasCompleteView(syncPoint) {
    return syncPointGetCompleteView(syncPoint) != null;
}
function syncPointGetCompleteView(syncPoint) {
    for (const view of syncPoint.views.values()){
        if (view.query._queryParams.loadsAllData()) return view;
    }
    return null;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let referenceConstructor;
function syncTreeSetReferenceConstructor(val) {
    _util.assert(!referenceConstructor, '__referenceConstructor has already been defined');
    referenceConstructor = val;
}
function syncTreeGetReferenceConstructor() {
    _util.assert(referenceConstructor, 'Reference.ts has not been loaded');
    return referenceConstructor;
}
/**
 * Static tracker for next query tag.
 */ let syncTreeNextQueryTag_ = 1;
/**
 * SyncTree is the central class for managing event callback registration, data caching, views
 * (query processing), and event generation.  There are typically two SyncTree instances for
 * each Repo, one for the normal Firebase data, and one for the .info data.
 *
 * It has a number of responsibilities, including:
 *  - Tracking all user event callbacks (registered via addEventRegistration() and removeEventRegistration()).
 *  - Applying and caching data changes for user set(), transaction(), and update() calls
 *    (applyUserOverwrite(), applyUserMerge()).
 *  - Applying and caching data changes for server data changes (applyServerOverwrite(),
 *    applyServerMerge()).
 *  - Generating user-facing events for server and user changes (all of the apply* methods
 *    return the set of events that need to be raised as a result).
 *  - Maintaining the appropriate set of server listens to ensure we are always subscribed
 *    to the correct set of paths and queries to satisfy the current set of user event
 *    callbacks (listens are started/stopped using the provided listenProvider).
 *
 * NOTE: Although SyncTree tracks event callbacks and calculates events to raise, the actual
 * events are returned to the caller rather than raised synchronously.
 *
 */ class SyncTree {
    /**
     * @param listenProvider_ - Used by SyncTree to start / stop listening
     *   to server data.
     */ constructor(listenProvider_){
        this.listenProvider_ = listenProvider_;
        /**
         * Tree of SyncPoints.  There's a SyncPoint at any location that has 1 or more views.
         */ this.syncPointTree_ = new ImmutableTree(null);
        /**
         * A tree of all pending user writes (user-initiated set()'s, transaction()'s, update()'s, etc.).
         */ this.pendingWriteTree_ = newWriteTree();
        this.tagToQueryMap = new Map();
        this.queryToTagMap = new Map();
    }
}
/**
 * Apply the data changes for a user-generated set() or transaction() call.
 *
 * @returns Events to raise.
 */ function syncTreeApplyUserOverwrite(syncTree, path, newData, writeId, visible) {
    // Record pending write.
    writeTreeAddOverwrite(syncTree.pendingWriteTree_, path, newData, writeId, visible);
    if (!visible) return [];
    else return syncTreeApplyOperationToSyncPoints_(syncTree, new Overwrite(newOperationSourceUser(), path, newData));
}
/**
 * Apply the data from a user-generated update() call
 *
 * @returns Events to raise.
 */ function syncTreeApplyUserMerge(syncTree, path, changedChildren, writeId) {
    // Record pending merge.
    writeTreeAddMerge(syncTree.pendingWriteTree_, path, changedChildren, writeId);
    const changeTree = ImmutableTree.fromObject(changedChildren);
    return syncTreeApplyOperationToSyncPoints_(syncTree, new Merge(newOperationSourceUser(), path, changeTree));
}
/**
 * Acknowledge a pending user write that was previously registered with applyUserOverwrite() or applyUserMerge().
 *
 * @param revert - True if the given write failed and needs to be reverted
 * @returns Events to raise.
 */ function syncTreeAckUserWrite(syncTree, writeId, revert = false) {
    const write = writeTreeGetWrite(syncTree.pendingWriteTree_, writeId);
    const needToReevaluate = writeTreeRemoveWrite(syncTree.pendingWriteTree_, writeId);
    if (!needToReevaluate) return [];
    else {
        let affectedTree = new ImmutableTree(null);
        if (write.snap != null) // overwrite
        affectedTree = affectedTree.set(newEmptyPath(), true);
        else each(write.children, (pathString)=>{
            affectedTree = affectedTree.set(new Path(pathString), true);
        });
        return syncTreeApplyOperationToSyncPoints_(syncTree, new AckUserWrite(write.path, affectedTree, revert));
    }
}
/**
 * Apply new server data for the specified path..
 *
 * @returns Events to raise.
 */ function syncTreeApplyServerOverwrite(syncTree, path, newData) {
    return syncTreeApplyOperationToSyncPoints_(syncTree, new Overwrite(newOperationSourceServer(), path, newData));
}
/**
 * Apply new server data to be merged in at the specified path.
 *
 * @returns Events to raise.
 */ function syncTreeApplyServerMerge(syncTree, path, changedChildren) {
    const changeTree = ImmutableTree.fromObject(changedChildren);
    return syncTreeApplyOperationToSyncPoints_(syncTree, new Merge(newOperationSourceServer(), path, changeTree));
}
/**
 * Apply a listen complete for a query
 *
 * @returns Events to raise.
 */ function syncTreeApplyListenComplete(syncTree, path) {
    return syncTreeApplyOperationToSyncPoints_(syncTree, new ListenComplete(newOperationSourceServer(), path));
}
/**
 * Apply a listen complete for a tagged query
 *
 * @returns Events to raise.
 */ function syncTreeApplyTaggedListenComplete(syncTree, path, tag) {
    const queryKey = syncTreeQueryKeyForTag_(syncTree, tag);
    if (queryKey) {
        const r = syncTreeParseQueryKey_(queryKey);
        const queryPath = r.path, queryId = r.queryId;
        const relativePath = newRelativePath(queryPath, path);
        const op = new ListenComplete(newOperationSourceServerTaggedQuery(queryId), relativePath);
        return syncTreeApplyTaggedOperation_(syncTree, queryPath, op);
    } else // We've already removed the query. No big deal, ignore the update
    return [];
}
/**
 * Remove event callback(s).
 *
 * If query is the default query, we'll check all queries for the specified eventRegistration.
 * If eventRegistration is null, we'll remove all callbacks for the specified query/queries.
 *
 * @param eventRegistration - If null, all callbacks are removed.
 * @param cancelError - If a cancelError is provided, appropriate cancel events will be returned.
 * @returns Cancel events, if cancelError was provided.
 */ function syncTreeRemoveEventRegistration(syncTree, query18, eventRegistration, cancelError) {
    // Find the syncPoint first. Then deal with whether or not it has matching listeners
    const path = query18._path;
    const maybeSyncPoint = syncTree.syncPointTree_.get(path);
    let cancelEvents = [];
    // A removal on a default query affects all queries at that location. A removal on an indexed query, even one without
    // other query constraints, does *not* affect all queries at that location. So this check must be for 'default', and
    // not loadsAllData().
    if (maybeSyncPoint && (query18._queryIdentifier === 'default' || syncPointViewExistsForQuery(maybeSyncPoint, query18))) {
        const removedAndEvents = syncPointRemoveEventRegistration(maybeSyncPoint, query18, eventRegistration, cancelError);
        if (syncPointIsEmpty(maybeSyncPoint)) syncTree.syncPointTree_ = syncTree.syncPointTree_.remove(path);
        const removed = removedAndEvents.removed;
        cancelEvents = removedAndEvents.events;
        // We may have just removed one of many listeners and can short-circuit this whole process
        // We may also not have removed a default listener, in which case all of the descendant listeners should already be
        // properly set up.
        //
        // Since indexed queries can shadow if they don't have other query constraints, check for loadsAllData(), instead of
        // queryId === 'default'
        const removingDefault = -1 !== removed.findIndex((query19)=>{
            return query19._queryParams.loadsAllData();
        });
        const covered = syncTree.syncPointTree_.findOnPath(path, (relativePath, parentSyncPoint)=>syncPointHasCompleteView(parentSyncPoint)
        );
        if (removingDefault && !covered) {
            const subtree = syncTree.syncPointTree_.subtree(path);
            // There are potentially child listeners. Determine what if any listens we need to send before executing the
            // removal
            if (!subtree.isEmpty()) {
                // We need to fold over our subtree and collect the listeners to send
                const newViews = syncTreeCollectDistinctViewsForSubTree_(subtree);
                // Ok, we've collected all the listens we need. Set them up.
                for(let i = 0; i < newViews.length; ++i){
                    const view = newViews[i], newQuery = view.query;
                    const listener = syncTreeCreateListenerForView_(syncTree, view);
                    syncTree.listenProvider_.startListening(syncTreeQueryForListening_(newQuery), syncTreeTagForQuery_(syncTree, newQuery), listener.hashFn, listener.onComplete);
                }
            }
        }
        // If we removed anything and we're not covered by a higher up listen, we need to stop listening on this query
        // The above block has us covered in terms of making sure we're set up on listens lower in the tree.
        // Also, note that if we have a cancelError, it's already been removed at the provider level.
        if (!covered && removed.length > 0 && !cancelError) {
            // If we removed a default, then we weren't listening on any of the other queries here. Just cancel the one
            // default. Otherwise, we need to iterate through and cancel each individual query
            if (removingDefault) {
                // We don't tag default listeners
                const defaultTag = null;
                syncTree.listenProvider_.stopListening(syncTreeQueryForListening_(query18), defaultTag);
            } else removed.forEach((queryToRemove)=>{
                const tagToRemove = syncTree.queryToTagMap.get(syncTreeMakeQueryKey_(queryToRemove));
                syncTree.listenProvider_.stopListening(syncTreeQueryForListening_(queryToRemove), tagToRemove);
            });
        }
        // Now, clear all of the tags we're tracking for the removed listens
        syncTreeRemoveTags_(syncTree, removed);
    }
    return cancelEvents;
}
/**
 * Apply new server data for the specified tagged query.
 *
 * @returns Events to raise.
 */ function syncTreeApplyTaggedQueryOverwrite(syncTree, path, snap, tag) {
    const queryKey = syncTreeQueryKeyForTag_(syncTree, tag);
    if (queryKey != null) {
        const r = syncTreeParseQueryKey_(queryKey);
        const queryPath = r.path, queryId = r.queryId;
        const relativePath = newRelativePath(queryPath, path);
        const op = new Overwrite(newOperationSourceServerTaggedQuery(queryId), relativePath, snap);
        return syncTreeApplyTaggedOperation_(syncTree, queryPath, op);
    } else // Query must have been removed already
    return [];
}
/**
 * Apply server data to be merged in for the specified tagged query.
 *
 * @returns Events to raise.
 */ function syncTreeApplyTaggedQueryMerge(syncTree, path, changedChildren, tag) {
    const queryKey = syncTreeQueryKeyForTag_(syncTree, tag);
    if (queryKey) {
        const r = syncTreeParseQueryKey_(queryKey);
        const queryPath = r.path, queryId = r.queryId;
        const relativePath = newRelativePath(queryPath, path);
        const changeTree = ImmutableTree.fromObject(changedChildren);
        const op = new Merge(newOperationSourceServerTaggedQuery(queryId), relativePath, changeTree);
        return syncTreeApplyTaggedOperation_(syncTree, queryPath, op);
    } else // We've already removed the query. No big deal, ignore the update
    return [];
}
/**
 * Add an event callback for the specified query.
 *
 * @returns Events to raise.
 */ function syncTreeAddEventRegistration(syncTree, query20, eventRegistration) {
    const path = query20._path;
    let serverCache = null;
    let foundAncestorDefaultView = false;
    // Any covering writes will necessarily be at the root, so really all we need to find is the server cache.
    // Consider optimizing this once there's a better understanding of what actual behavior will be.
    syncTree.syncPointTree_.foreachOnPath(path, (pathToSyncPoint, sp)=>{
        const relativePath = newRelativePath(pathToSyncPoint, path);
        serverCache = serverCache || syncPointGetCompleteServerCache(sp, relativePath);
        foundAncestorDefaultView = foundAncestorDefaultView || syncPointHasCompleteView(sp);
    });
    let syncPoint = syncTree.syncPointTree_.get(path);
    if (!syncPoint) {
        syncPoint = new SyncPoint();
        syncTree.syncPointTree_ = syncTree.syncPointTree_.set(path, syncPoint);
    } else {
        foundAncestorDefaultView = foundAncestorDefaultView || syncPointHasCompleteView(syncPoint);
        serverCache = serverCache || syncPointGetCompleteServerCache(syncPoint, newEmptyPath());
    }
    let serverCacheComplete;
    if (serverCache != null) serverCacheComplete = true;
    else {
        serverCacheComplete = false;
        serverCache = ChildrenNode.EMPTY_NODE;
        const subtree = syncTree.syncPointTree_.subtree(path);
        subtree.foreachChild((childName, childSyncPoint)=>{
            const completeCache = syncPointGetCompleteServerCache(childSyncPoint, newEmptyPath());
            if (completeCache) serverCache = serverCache.updateImmediateChild(childName, completeCache);
        });
    }
    const viewAlreadyExists = syncPointViewExistsForQuery(syncPoint, query20);
    if (!viewAlreadyExists && !query20._queryParams.loadsAllData()) {
        // We need to track a tag for this query
        const queryKey = syncTreeMakeQueryKey_(query20);
        _util.assert(!syncTree.queryToTagMap.has(queryKey), 'View does not exist, but we have a tag');
        const tag = syncTreeGetNextQueryTag_();
        syncTree.queryToTagMap.set(queryKey, tag);
        syncTree.tagToQueryMap.set(tag, queryKey);
    }
    const writesCache = writeTreeChildWrites(syncTree.pendingWriteTree_, path);
    let events = syncPointAddEventRegistration(syncPoint, query20, eventRegistration, writesCache, serverCache, serverCacheComplete);
    if (!viewAlreadyExists && !foundAncestorDefaultView) {
        const view = syncPointViewForQuery(syncPoint, query20);
        events = events.concat(syncTreeSetupListener_(syncTree, query20, view));
    }
    return events;
}
/**
 * Returns a complete cache, if we have one, of the data at a particular path. If the location does not have a
 * listener above it, we will get a false "null". This shouldn't be a problem because transactions will always
 * have a listener above, and atomic operations would correctly show a jitter of <increment value> ->
 *     <incremented total> as the write is applied locally and then acknowledged at the server.
 *
 * Note: this method will *include* hidden writes from transaction with applyLocally set to false.
 *
 * @param path - The path to the data we want
 * @param writeIdsToExclude - A specific set to be excluded
 */ function syncTreeCalcCompleteEventCache(syncTree, path, writeIdsToExclude) {
    const includeHiddenSets = true;
    const writeTree = syncTree.pendingWriteTree_;
    const serverCache1 = syncTree.syncPointTree_.findOnPath(path, (pathSoFar, syncPoint)=>{
        const relativePath = newRelativePath(pathSoFar, path);
        const serverCache = syncPointGetCompleteServerCache(syncPoint, relativePath);
        if (serverCache) return serverCache;
    });
    return writeTreeCalcCompleteEventCache(writeTree, path, serverCache1, writeIdsToExclude, includeHiddenSets);
}
function syncTreeGetServerValue(syncTree, query21) {
    const path = query21._path;
    let serverCache = null;
    // Any covering writes will necessarily be at the root, so really all we need to find is the server cache.
    // Consider optimizing this once there's a better understanding of what actual behavior will be.
    syncTree.syncPointTree_.foreachOnPath(path, (pathToSyncPoint, sp)=>{
        const relativePath = newRelativePath(pathToSyncPoint, path);
        serverCache = serverCache || syncPointGetCompleteServerCache(sp, relativePath);
    });
    let syncPoint = syncTree.syncPointTree_.get(path);
    if (!syncPoint) {
        syncPoint = new SyncPoint();
        syncTree.syncPointTree_ = syncTree.syncPointTree_.set(path, syncPoint);
    } else serverCache = serverCache || syncPointGetCompleteServerCache(syncPoint, newEmptyPath());
    const serverCacheComplete = serverCache != null;
    const serverCacheNode = serverCacheComplete ? new CacheNode(serverCache, true, false) : null;
    const writesCache = writeTreeChildWrites(syncTree.pendingWriteTree_, query21._path);
    const view = syncPointGetView(syncPoint, query21, writesCache, serverCacheComplete ? serverCacheNode.getNode() : ChildrenNode.EMPTY_NODE, serverCacheComplete);
    return viewGetCompleteNode(view);
}
/**
 * A helper method that visits all descendant and ancestor SyncPoints, applying the operation.
 *
 * NOTES:
 * - Descendant SyncPoints will be visited first (since we raise events depth-first).
 *
 * - We call applyOperation() on each SyncPoint passing three things:
 *   1. A version of the Operation that has been made relative to the SyncPoint location.
 *   2. A WriteTreeRef of any writes we have cached at the SyncPoint location.
 *   3. A snapshot Node with cached server data, if we have it.
 *
 * - We concatenate all of the events returned by each SyncPoint and return the result.
 */ function syncTreeApplyOperationToSyncPoints_(syncTree, operation) {
    return syncTreeApplyOperationHelper_(operation, syncTree.syncPointTree_, /*serverCache=*/ null, writeTreeChildWrites(syncTree.pendingWriteTree_, newEmptyPath()));
}
/**
 * Recursive helper for applyOperationToSyncPoints_
 */ function syncTreeApplyOperationHelper_(operation, syncPointTree, serverCache, writesCache) {
    if (pathIsEmpty(operation.path)) return syncTreeApplyOperationDescendantsHelper_(operation, syncPointTree, serverCache, writesCache);
    else {
        const syncPoint = syncPointTree.get(newEmptyPath());
        // If we don't have cached server data, see if we can get it from this SyncPoint.
        if (serverCache == null && syncPoint != null) serverCache = syncPointGetCompleteServerCache(syncPoint, newEmptyPath());
        let events = [];
        const childName = pathGetFront(operation.path);
        const childOperation = operation.operationForChild(childName);
        const childTree = syncPointTree.children.get(childName);
        if (childTree && childOperation) {
            const childServerCache = serverCache ? serverCache.getImmediateChild(childName) : null;
            const childWritesCache = writeTreeRefChild(writesCache, childName);
            events = events.concat(syncTreeApplyOperationHelper_(childOperation, childTree, childServerCache, childWritesCache));
        }
        if (syncPoint) events = events.concat(syncPointApplyOperation(syncPoint, operation, writesCache, serverCache));
        return events;
    }
}
/**
 * Recursive helper for applyOperationToSyncPoints_
 */ function syncTreeApplyOperationDescendantsHelper_(operation, syncPointTree, serverCache, writesCache) {
    const syncPoint = syncPointTree.get(newEmptyPath());
    // If we don't have cached server data, see if we can get it from this SyncPoint.
    if (serverCache == null && syncPoint != null) serverCache = syncPointGetCompleteServerCache(syncPoint, newEmptyPath());
    let events = [];
    syncPointTree.children.inorderTraversal((childName, childTree)=>{
        const childServerCache = serverCache ? serverCache.getImmediateChild(childName) : null;
        const childWritesCache = writeTreeRefChild(writesCache, childName);
        const childOperation = operation.operationForChild(childName);
        if (childOperation) events = events.concat(syncTreeApplyOperationDescendantsHelper_(childOperation, childTree, childServerCache, childWritesCache));
    });
    if (syncPoint) events = events.concat(syncPointApplyOperation(syncPoint, operation, writesCache, serverCache));
    return events;
}
function syncTreeCreateListenerForView_(syncTree, view) {
    const query22 = view.query;
    const tag = syncTreeTagForQuery_(syncTree, query22);
    return {
        hashFn: ()=>{
            const cache = viewGetServerCache(view) || ChildrenNode.EMPTY_NODE;
            return cache.hash();
        },
        onComplete: (status)=>{
            if (status === 'ok') {
                if (tag) return syncTreeApplyTaggedListenComplete(syncTree, query22._path, tag);
                else return syncTreeApplyListenComplete(syncTree, query22._path);
            } else {
                // If a listen failed, kill all of the listeners here, not just the one that triggered the error.
                // Note that this may need to be scoped to just this listener if we change permissions on filtered children
                const error8 = errorForServerCode(status, query22);
                return syncTreeRemoveEventRegistration(syncTree, query22, /*eventRegistration*/ null, error8);
            }
        }
    };
}
/**
 * Return the tag associated with the given query.
 */ function syncTreeTagForQuery_(syncTree, query23) {
    const queryKey = syncTreeMakeQueryKey_(query23);
    return syncTree.queryToTagMap.get(queryKey);
}
/**
 * Given a query, computes a "queryKey" suitable for use in our queryToTagMap_.
 */ function syncTreeMakeQueryKey_(query24) {
    return query24._path.toString() + '$' + query24._queryIdentifier;
}
/**
 * Return the query associated with the given tag, if we have one
 */ function syncTreeQueryKeyForTag_(syncTree, tag) {
    return syncTree.tagToQueryMap.get(tag);
}
/**
 * Given a queryKey (created by makeQueryKey), parse it back into a path and queryId.
 */ function syncTreeParseQueryKey_(queryKey) {
    const splitIndex = queryKey.indexOf('$');
    _util.assert(splitIndex !== -1 && splitIndex < queryKey.length - 1, 'Bad queryKey.');
    return {
        queryId: queryKey.substr(splitIndex + 1),
        path: new Path(queryKey.substr(0, splitIndex))
    };
}
/**
 * A helper method to apply tagged operations
 */ function syncTreeApplyTaggedOperation_(syncTree, queryPath, operation) {
    const syncPoint = syncTree.syncPointTree_.get(queryPath);
    _util.assert(syncPoint, "Missing sync point for query tag that we're tracking");
    const writesCache = writeTreeChildWrites(syncTree.pendingWriteTree_, queryPath);
    return syncPointApplyOperation(syncPoint, operation, writesCache, null);
}
/**
 * This collapses multiple unfiltered views into a single view, since we only need a single
 * listener for them.
 */ function syncTreeCollectDistinctViewsForSubTree_(subtree) {
    return subtree.fold((relativePath, maybeChildSyncPoint, childMap)=>{
        if (maybeChildSyncPoint && syncPointHasCompleteView(maybeChildSyncPoint)) {
            const completeView = syncPointGetCompleteView(maybeChildSyncPoint);
            return [
                completeView
            ];
        } else {
            // No complete view here, flatten any deeper listens into an array
            let views = [];
            if (maybeChildSyncPoint) views = syncPointGetQueryViews(maybeChildSyncPoint);
            each(childMap, (_key, childViews)=>{
                views = views.concat(childViews);
            });
            return views;
        }
    });
}
/**
 * Normalizes a query to a query we send the server for listening
 *
 * @returns The normalized query
 */ function syncTreeQueryForListening_(query25) {
    if (query25._queryParams.loadsAllData() && !query25._queryParams.isDefault()) // We treat queries that load all data as default queries
    // Cast is necessary because ref() technically returns Firebase which is actually fb.api.Firebase which inherits
    // from Query
    return new (syncTreeGetReferenceConstructor())(query25._repo, query25._path);
    else return query25;
}
function syncTreeRemoveTags_(syncTree, queries) {
    for(let j = 0; j < queries.length; ++j){
        const removedQuery = queries[j];
        if (!removedQuery._queryParams.loadsAllData()) {
            // We should have a tag for this
            const removedQueryKey = syncTreeMakeQueryKey_(removedQuery);
            const removedQueryTag = syncTree.queryToTagMap.get(removedQueryKey);
            syncTree.queryToTagMap.delete(removedQueryKey);
            syncTree.tagToQueryMap.delete(removedQueryTag);
        }
    }
}
/**
 * Static accessor for query tags.
 */ function syncTreeGetNextQueryTag_() {
    return syncTreeNextQueryTag_++;
}
/**
 * For a given new listen, manage the de-duplication of outstanding subscriptions.
 *
 * @returns This method can return events to support synchronous data sources
 */ function syncTreeSetupListener_(syncTree, query26, view1) {
    const path = query26._path;
    const tag = syncTreeTagForQuery_(syncTree, query26);
    const listener = syncTreeCreateListenerForView_(syncTree, view1);
    const events = syncTree.listenProvider_.startListening(syncTreeQueryForListening_(query26), tag, listener.hashFn, listener.onComplete);
    const subtree = syncTree.syncPointTree_.subtree(path);
    // The root of this subtree has our query. We're here because we definitely need to send a listen for that, but we
    // may need to shadow other listens as well.
    if (tag) _util.assert(!syncPointHasCompleteView(subtree.value), "If we're adding a query, it shouldn't be shadowed");
    else {
        // Shadow everything at or below this location, this is a default listener.
        const queriesToStop = subtree.fold((relativePath, maybeChildSyncPoint, childMap)=>{
            if (!pathIsEmpty(relativePath) && maybeChildSyncPoint && syncPointHasCompleteView(maybeChildSyncPoint)) return [
                syncPointGetCompleteView(maybeChildSyncPoint).query
            ];
            else {
                // No default listener here, flatten any deeper queries into an array
                let queries = [];
                if (maybeChildSyncPoint) queries = queries.concat(syncPointGetQueryViews(maybeChildSyncPoint).map((view)=>view.query
                ));
                each(childMap, (_key, childQueries)=>{
                    queries = queries.concat(childQueries);
                });
                return queries;
            }
        });
        for(let i = 0; i < queriesToStop.length; ++i){
            const queryToStop = queriesToStop[i];
            syncTree.listenProvider_.stopListening(syncTreeQueryForListening_(queryToStop), syncTreeTagForQuery_(syncTree, queryToStop));
        }
    }
    return events;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ExistingValueProvider {
    constructor(node_){
        this.node_ = node_;
    }
    getImmediateChild(childName) {
        const child12 = this.node_.getImmediateChild(childName);
        return new ExistingValueProvider(child12);
    }
    node() {
        return this.node_;
    }
}
class DeferredValueProvider {
    constructor(syncTree, path){
        this.syncTree_ = syncTree;
        this.path_ = path;
    }
    getImmediateChild(childName) {
        const childPath = pathChild(this.path_, childName);
        return new DeferredValueProvider(this.syncTree_, childPath);
    }
    node() {
        return syncTreeCalcCompleteEventCache(this.syncTree_, this.path_);
    }
}
/**
 * Generate placeholders for deferred values.
 */ const generateWithValues = function(values) {
    values = values || {
    };
    values['timestamp'] = values['timestamp'] || new Date().getTime();
    return values;
};
/**
 * Value to use when firing local events. When writing server values, fire
 * local events with an approximate value, otherwise return value as-is.
 */ const resolveDeferredLeafValue = function(value, existingVal, serverValues) {
    if (!value || typeof value !== 'object') return value;
    _util.assert('.sv' in value, 'Unexpected leaf node or priority contents');
    if (typeof value['.sv'] === 'string') return resolveScalarDeferredValue(value['.sv'], existingVal, serverValues);
    else if (typeof value['.sv'] === 'object') return resolveComplexDeferredValue(value['.sv'], existingVal);
    else _util.assert(false, 'Unexpected server value: ' + JSON.stringify(value, null, 2));
};
const resolveScalarDeferredValue = function(op, existing, serverValues) {
    switch(op){
        case 'timestamp':
            return serverValues['timestamp'];
        default:
            _util.assert(false, 'Unexpected server value: ' + op);
    }
};
const resolveComplexDeferredValue = function(op, existing, unused) {
    if (!op.hasOwnProperty('increment')) _util.assert(false, 'Unexpected server value: ' + JSON.stringify(op, null, 2));
    const delta = op['increment'];
    if (typeof delta !== 'number') _util.assert(false, 'Unexpected increment value: ' + delta);
    const existingNode = existing.node();
    _util.assert(existingNode !== null && typeof existingNode !== 'undefined', 'Expected ChildrenNode.EMPTY_NODE for nulls');
    // Incrementing a non-number sets the value to the incremented amount
    if (!existingNode.isLeafNode()) return delta;
    const leaf = existingNode;
    const existingVal = leaf.getValue();
    if (typeof existingVal !== 'number') return delta;
    // No need to do over/underflow arithmetic here because JS only handles floats under the covers
    return existingVal + delta;
};
/**
 * Recursively replace all deferred values and priorities in the tree with the
 * specified generated replacement values.
 * @param path - path to which write is relative
 * @param node - new data written at path
 * @param syncTree - current data
 */ const resolveDeferredValueTree = function(path, node, syncTree, serverValues) {
    return resolveDeferredValue(node, new DeferredValueProvider(syncTree, path), serverValues);
};
/**
 * Recursively replace all deferred values and priorities in the node with the
 * specified generated replacement values.  If there are no server values in the node,
 * it'll be returned as-is.
 */ const resolveDeferredValueSnapshot = function(node, existing, serverValues) {
    return resolveDeferredValue(node, new ExistingValueProvider(existing), serverValues);
};
function resolveDeferredValue(node, existingVal, serverValues) {
    const rawPri = node.getPriority().val();
    const priority = resolveDeferredLeafValue(rawPri, existingVal.getImmediateChild('.priority'), serverValues);
    let newNode;
    if (node.isLeafNode()) {
        const leafNode = node;
        const value = resolveDeferredLeafValue(leafNode.getValue(), existingVal, serverValues);
        if (value !== leafNode.getValue() || priority !== leafNode.getPriority().val()) return new LeafNode(value, nodeFromJSON(priority));
        else return node;
    } else {
        const childrenNode = node;
        newNode = childrenNode;
        if (priority !== childrenNode.getPriority().val()) newNode = newNode.updatePriority(new LeafNode(priority));
        childrenNode.forEachChild(PRIORITY_INDEX, (childName, childNode)=>{
            const newChildNode = resolveDeferredValue(childNode, existingVal.getImmediateChild(childName), serverValues);
            if (newChildNode !== childNode) newNode = newNode.updateImmediateChild(childName, newChildNode);
        });
        return newNode;
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A light-weight tree, traversable by path.  Nodes can have both values and children.
 * Nodes are not enumerated (by forEachChild) unless they have a value or non-empty
 * children.
 */ class Tree {
    /**
     * @param name - Optional name of the node.
     * @param parent - Optional parent node.
     * @param node - Optional node to wrap.
     */ constructor(name9 = '', parent = null, node = {
        children: {
        },
        childCount: 0
    }){
        this.name = name9;
        this.parent = parent;
        this.node = node;
    }
}
/**
 * Returns a sub-Tree for the given path.
 *
 * @param pathObj - Path to look up.
 * @returns Tree for path.
 */ function treeSubTree(tree, pathObj) {
    // TODO: Require pathObj to be Path?
    let path = pathObj instanceof Path ? pathObj : new Path(pathObj);
    let child13 = tree, next = pathGetFront(path);
    while(next !== null){
        const childNode = _util.safeGet(child13.node.children, next) || {
            children: {
            },
            childCount: 0
        };
        child13 = new Tree(next, child13, childNode);
        path = pathPopFront(path);
        next = pathGetFront(path);
    }
    return child13;
}
/**
 * Returns the data associated with this tree node.
 *
 * @returns The data or null if no data exists.
 */ function treeGetValue(tree) {
    return tree.node.value;
}
/**
 * Sets data to this tree node.
 *
 * @param value - Value to set.
 */ function treeSetValue(tree, value) {
    tree.node.value = value;
    treeUpdateParents(tree);
}
/**
 * @returns Whether the tree has any children.
 */ function treeHasChildren(tree) {
    return tree.node.childCount > 0;
}
/**
 * @returns Whethe rthe tree is empty (no value or children).
 */ function treeIsEmpty(tree) {
    return treeGetValue(tree) === undefined && !treeHasChildren(tree);
}
/**
 * Calls action for each child of this tree node.
 *
 * @param action - Action to be called for each child.
 */ function treeForEachChild(tree, action) {
    each(tree.node.children, (child14, childTree)=>{
        action(new Tree(child14, tree, childTree));
    });
}
/**
 * Does a depth-first traversal of this node's descendants, calling action for each one.
 *
 * @param action - Action to be called for each child.
 * @param includeSelf - Whether to call action on this node as well. Defaults to
 *   false.
 * @param childrenFirst - Whether to call action on children before calling it on
 *   parent.
 */ function treeForEachDescendant(tree, action, includeSelf, childrenFirst) {
    if (includeSelf && !childrenFirst) action(tree);
    treeForEachChild(tree, (child15)=>{
        treeForEachDescendant(child15, action, true, childrenFirst);
    });
    if (includeSelf && childrenFirst) action(tree);
}
/**
 * Calls action on each ancestor node.
 *
 * @param action - Action to be called on each parent; return
 *   true to abort.
 * @param includeSelf - Whether to call action on this node as well.
 * @returns true if the action callback returned true.
 */ function treeForEachAncestor(tree, action, includeSelf) {
    let node = includeSelf ? tree : tree.parent;
    while(node !== null){
        if (action(node)) return true;
        node = node.parent;
    }
    return false;
}
/**
 * @returns The path of this tree node, as a Path.
 */ function treeGetPath(tree) {
    return new Path(tree.parent === null ? tree.name : treeGetPath(tree.parent) + '/' + tree.name);
}
/**
 * Adds or removes this child from its parent based on whether it's empty or not.
 */ function treeUpdateParents(tree) {
    if (tree.parent !== null) treeUpdateChild(tree.parent, tree.name, tree);
}
/**
 * Adds or removes the passed child to this tree node, depending on whether it's empty.
 *
 * @param childName - The name of the child to update.
 * @param child - The child to update.
 */ function treeUpdateChild(tree, childName, child16) {
    const childEmpty = treeIsEmpty(child16);
    const childExists = _util.contains(tree.node.children, childName);
    if (childEmpty && childExists) {
        delete tree.node.children[childName];
        tree.node.childCount--;
        treeUpdateParents(tree);
    } else if (!childEmpty && !childExists) {
        tree.node.children[childName] = child16.node;
        tree.node.childCount++;
        treeUpdateParents(tree);
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * True for invalid Firebase keys
 */ const INVALID_KEY_REGEX_ = /[\[\].#$\/\u0000-\u001F\u007F]/;
/**
 * True for invalid Firebase paths.
 * Allows '/' in paths.
 */ const INVALID_PATH_REGEX_ = /[\[\].#$\u0000-\u001F\u007F]/;
/**
 * Maximum number of characters to allow in leaf value
 */ const MAX_LEAF_SIZE_ = 10485760;
const isValidKey = function(key) {
    return typeof key === 'string' && key.length !== 0 && !INVALID_KEY_REGEX_.test(key);
};
const isValidPathString = function(pathString) {
    return typeof pathString === 'string' && pathString.length !== 0 && !INVALID_PATH_REGEX_.test(pathString);
};
const isValidRootPathString = function(pathString) {
    if (pathString) // Allow '/.info/' at the beginning.
    pathString = pathString.replace(/^\/*\.info(\/|$)/, '/');
    return isValidPathString(pathString);
};
const isValidPriority = function(priority) {
    return priority === null || typeof priority === 'string' || typeof priority === 'number' && !isInvalidJSONNumber(priority) || priority && typeof priority === 'object' && // eslint-disable-next-line @typescript-eslint/no-explicit-any
    _util.contains(priority, '.sv');
};
/**
 * Pre-validate a datum passed as an argument to Firebase function.
 */ const validateFirebaseDataArg = function(fnName, value, path, optional) {
    if (optional && value === undefined) return;
    validateFirebaseData(_util.errorPrefix(fnName, 'value'), value, path);
};
/**
 * Validate a data object client-side before sending to server.
 */ const validateFirebaseData = function(errorPrefix, data, path_) {
    const path = path_ instanceof Path ? new ValidationPath(path_, errorPrefix) : path_;
    if (data === undefined) throw new Error(errorPrefix + 'contains undefined ' + validationPathToErrorString(path));
    if (typeof data === 'function') throw new Error(errorPrefix + 'contains a function ' + validationPathToErrorString(path) + ' with contents = ' + data.toString());
    if (isInvalidJSONNumber(data)) throw new Error(errorPrefix + 'contains ' + data.toString() + ' ' + validationPathToErrorString(path));
    // Check max leaf size, but try to avoid the utf8 conversion if we can.
    if (typeof data === 'string' && data.length > MAX_LEAF_SIZE_ / 3 && _util.stringLength(data) > MAX_LEAF_SIZE_) throw new Error(errorPrefix + 'contains a string greater than ' + MAX_LEAF_SIZE_ + ' utf8 bytes ' + validationPathToErrorString(path) + " ('" + data.substring(0, 50) + "...')");
    // TODO = Perf = Consider combining the recursive validation of keys into NodeFromJSON
    // to save extra walking of large objects.
    if (data && typeof data === 'object') {
        let hasDotValue = false;
        let hasActualChild = false;
        each(data, (key, value)=>{
            if (key === '.value') hasDotValue = true;
            else if (key !== '.priority' && key !== '.sv') {
                hasActualChild = true;
                if (!isValidKey(key)) throw new Error(errorPrefix + ' contains an invalid key (' + key + ') ' + validationPathToErrorString(path) + '.  Keys must be non-empty strings ' + 'and can\'t contain ".", "#", "$", "/", "[", or "]"');
            }
            validationPathPush(path, key);
            validateFirebaseData(errorPrefix, value, path);
            validationPathPop(path);
        });
        if (hasDotValue && hasActualChild) throw new Error(errorPrefix + ' contains ".value" child ' + validationPathToErrorString(path) + ' in addition to actual children.');
    }
};
/**
 * Pre-validate paths passed in the firebase function.
 */ const validateFirebaseMergePaths = function(errorPrefix, mergePaths) {
    let i, curPath;
    for(i = 0; i < mergePaths.length; i++){
        curPath = mergePaths[i];
        const keys = pathSlice(curPath);
        for(let j = 0; j < keys.length; j++){
            if (keys[j] === '.priority' && j === keys.length - 1) ;
            else if (!isValidKey(keys[j])) throw new Error(errorPrefix + 'contains an invalid key (' + keys[j] + ') in path ' + curPath.toString() + '. Keys must be non-empty strings ' + 'and can\'t contain ".", "#", "$", "/", "[", or "]"');
        }
    }
    // Check that update keys are not descendants of each other.
    // We rely on the property that sorting guarantees that ancestors come
    // right before descendants.
    mergePaths.sort(pathCompare);
    let prevPath = null;
    for(i = 0; i < mergePaths.length; i++){
        curPath = mergePaths[i];
        if (prevPath !== null && pathContains(prevPath, curPath)) throw new Error(errorPrefix + 'contains a path ' + prevPath.toString() + ' that is ancestor of another path ' + curPath.toString());
        prevPath = curPath;
    }
};
/**
 * pre-validate an object passed as an argument to firebase function (
 * must be an object - e.g. for firebase.update()).
 */ const validateFirebaseMergeDataArg = function(fnName, data, path, optional) {
    if (optional && data === undefined) return;
    const errorPrefix$1 = _util.errorPrefix(fnName, 'values');
    if (!(data && typeof data === 'object') || Array.isArray(data)) throw new Error(errorPrefix$1 + ' must be an object containing the children to replace.');
    const mergePaths = [];
    each(data, (key, value)=>{
        const curPath = new Path(key);
        validateFirebaseData(errorPrefix$1, value, pathChild(path, curPath));
        if (pathGetBack(curPath) === '.priority') {
            if (!isValidPriority(value)) throw new Error(errorPrefix$1 + "contains an invalid value for '" + curPath.toString() + "', which must be a valid " + 'Firebase priority (a string, finite number, server value, or null).');
        }
        mergePaths.push(curPath);
    });
    validateFirebaseMergePaths(errorPrefix$1, mergePaths);
};
const validatePriority = function(fnName, priority, optional) {
    if (optional && priority === undefined) return;
    if (isInvalidJSONNumber(priority)) throw new Error(_util.errorPrefix(fnName, 'priority') + 'is ' + priority.toString() + ', but must be a valid Firebase priority (a string, finite number, ' + 'server value, or null).');
    // Special case to allow importing data with a .sv.
    if (!isValidPriority(priority)) throw new Error(_util.errorPrefix(fnName, 'priority') + 'must be a valid Firebase priority ' + '(a string, finite number, server value, or null).');
};
const validateKey = function(fnName, argumentName, key, optional) {
    if (optional && key === undefined) return;
    if (!isValidKey(key)) throw new Error(_util.errorPrefix(fnName, argumentName) + 'was an invalid key = "' + key + '".  Firebase keys must be non-empty strings and ' + 'can\'t contain ".", "#", "$", "/", "[", or "]").');
};
/**
 * @internal
 */ const validatePathString = function(fnName, argumentName, pathString, optional) {
    if (optional && pathString === undefined) return;
    if (!isValidPathString(pathString)) throw new Error(_util.errorPrefix(fnName, argumentName) + 'was an invalid path = "' + pathString + '". Paths must be non-empty strings and ' + 'can\'t contain ".", "#", "$", "[", or "]"');
};
const validateRootPathString = function(fnName, argumentName, pathString, optional) {
    if (pathString) // Allow '/.info/' at the beginning.
    pathString = pathString.replace(/^\/*\.info(\/|$)/, '/');
    validatePathString(fnName, argumentName, pathString, optional);
};
/**
 * @internal
 */ const validateWritablePath = function(fnName, path) {
    if (pathGetFront(path) === '.info') throw new Error(fnName + " failed = Can't modify data under /.info/");
};
const validateUrl = function(fnName, parsedUrl) {
    // TODO = Validate server better.
    const pathString = parsedUrl.path.toString();
    if (!(typeof parsedUrl.repoInfo.host === 'string') || parsedUrl.repoInfo.host.length === 0 || !isValidKey(parsedUrl.repoInfo.namespace) && parsedUrl.repoInfo.host.split(':')[0] !== 'localhost' || pathString.length !== 0 && !isValidRootPathString(pathString)) throw new Error(_util.errorPrefix(fnName, 'url') + 'must be a valid firebase URL and ' + 'the path can\'t contain ".", "#", "$", "[", or "]".');
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * The event queue serves a few purposes:
 * 1. It ensures we maintain event order in the face of event callbacks doing operations that result in more
 *    events being queued.
 * 2. raiseQueuedEvents() handles being called reentrantly nicely.  That is, if in the course of raising events,
 *    raiseQueuedEvents() is called again, the "inner" call will pick up raising events where the "outer" call
 *    left off, ensuring that the events are still raised synchronously and in order.
 * 3. You can use raiseEventsAtPath and raiseEventsForChangedPath to ensure only relevant previously-queued
 *    events are raised synchronously.
 *
 * NOTE: This can all go away if/when we move to async events.
 *
 */ class EventQueue {
    constructor(){
        this.eventLists_ = [];
        /**
         * Tracks recursion depth of raiseQueuedEvents_, for debugging purposes.
         */ this.recursionDepth_ = 0;
    }
}
/**
 * @param eventDataList - The new events to queue.
 */ function eventQueueQueueEvents(eventQueue, eventDataList) {
    // We group events by path, storing them in a single EventList, to make it easier to skip over them quickly.
    let currList = null;
    for(let i = 0; i < eventDataList.length; i++){
        const data = eventDataList[i];
        const path = data.getPath();
        if (currList !== null && !pathEquals(path, currList.path)) {
            eventQueue.eventLists_.push(currList);
            currList = null;
        }
        if (currList === null) currList = {
            events: [],
            path
        };
        currList.events.push(data);
    }
    if (currList) eventQueue.eventLists_.push(currList);
}
/**
 * Queues the specified events and synchronously raises all events (including previously queued ones)
 * for the specified path.
 *
 * It is assumed that the new events are all for the specified path.
 *
 * @param path - The path to raise events for.
 * @param eventDataList - The new events to raise.
 */ function eventQueueRaiseEventsAtPath(eventQueue, path, eventDataList) {
    eventQueueQueueEvents(eventQueue, eventDataList);
    eventQueueRaiseQueuedEventsMatchingPredicate(eventQueue, (eventPath)=>pathEquals(eventPath, path)
    );
}
/**
 * Queues the specified events and synchronously raises all events (including previously queued ones) for
 * locations related to the specified change path (i.e. all ancestors and descendants).
 *
 * It is assumed that the new events are all related (ancestor or descendant) to the specified path.
 *
 * @param changedPath - The path to raise events for.
 * @param eventDataList - The events to raise
 */ function eventQueueRaiseEventsForChangedPath(eventQueue, changedPath, eventDataList) {
    eventQueueQueueEvents(eventQueue, eventDataList);
    eventQueueRaiseQueuedEventsMatchingPredicate(eventQueue, (eventPath)=>pathContains(eventPath, changedPath) || pathContains(changedPath, eventPath)
    );
}
function eventQueueRaiseQueuedEventsMatchingPredicate(eventQueue, predicate) {
    eventQueue.recursionDepth_++;
    let sentAll = true;
    for(let i = 0; i < eventQueue.eventLists_.length; i++){
        const eventList = eventQueue.eventLists_[i];
        if (eventList) {
            const eventPath = eventList.path;
            if (predicate(eventPath)) {
                eventListRaise(eventQueue.eventLists_[i]);
                eventQueue.eventLists_[i] = null;
            } else sentAll = false;
        }
    }
    if (sentAll) eventQueue.eventLists_ = [];
    eventQueue.recursionDepth_--;
}
/**
 * Iterates through the list and raises each event
 */ function eventListRaise(eventList) {
    for(let i = 0; i < eventList.events.length; i++){
        const eventData = eventList.events[i];
        if (eventData !== null) {
            eventList.events[i] = null;
            const eventFn = eventData.getEventRunner();
            if (logger) log('event: ' + eventData.toString());
            exceptionGuard(eventFn);
        }
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const INTERRUPT_REASON = 'repo_interrupt';
/**
 * If a transaction does not succeed after 25 retries, we abort it. Among other
 * things this ensure that if there's ever a bug causing a mismatch between
 * client / server hashes for some data, we won't retry indefinitely.
 */ const MAX_TRANSACTION_RETRIES = 25;
/**
 * A connection to a single data repository.
 */ class Repo {
    constructor(repoInfo_, forceRestClient_, authTokenProvider_, appCheckProvider_){
        this.repoInfo_ = repoInfo_;
        this.forceRestClient_ = forceRestClient_;
        this.authTokenProvider_ = authTokenProvider_;
        this.appCheckProvider_ = appCheckProvider_;
        this.dataUpdateCount = 0;
        this.statsListener_ = null;
        this.eventQueue_ = new EventQueue();
        this.nextWriteId_ = 1;
        this.interceptServerDataCallback_ = null;
        /** A list of data pieces and paths to be set when this client disconnects. */ this.onDisconnect_ = newSparseSnapshotTree();
        /** Stores queues of outstanding transactions for Firebase locations. */ this.transactionQueueTree_ = new Tree();
        // TODO: This should be @private but it's used by test_access.js and internal.js
        this.persistentConnection_ = null;
        // This key is intentionally not updated if RepoInfo is later changed or replaced
        this.key = this.repoInfo_.toURLString();
    }
    /**
     * @returns The URL corresponding to the root of this Firebase.
     */ toString() {
        return (this.repoInfo_.secure ? 'https://' : 'http://') + this.repoInfo_.host;
    }
}
function repoStart(repo, appId, authOverride) {
    repo.stats_ = statsManagerGetCollection(repo.repoInfo_);
    if (repo.forceRestClient_ || beingCrawled()) {
        repo.server_ = new ReadonlyRestClient(repo.repoInfo_, (pathString, data, isMerge, tag)=>{
            repoOnDataUpdate(repo, pathString, data, isMerge, tag);
        }, repo.authTokenProvider_, repo.appCheckProvider_);
        // Minor hack: Fire onConnect immediately, since there's no actual connection.
        setTimeout(()=>repoOnConnectStatus(repo, /* connectStatus= */ true)
        , 0);
    } else {
        // Validate authOverride
        if (typeof authOverride !== 'undefined' && authOverride !== null) {
            if (typeof authOverride !== 'object') throw new Error('Only objects are supported for option databaseAuthVariableOverride');
            try {
                _util.stringify(authOverride);
            } catch (e) {
                throw new Error('Invalid authOverride provided: ' + e);
            }
        }
        repo.persistentConnection_ = new PersistentConnection(repo.repoInfo_, appId, (pathString, data, isMerge, tag)=>{
            repoOnDataUpdate(repo, pathString, data, isMerge, tag);
        }, (connectStatus)=>{
            repoOnConnectStatus(repo, connectStatus);
        }, (updates)=>{
            repoOnServerInfoUpdate(repo, updates);
        }, repo.authTokenProvider_, repo.appCheckProvider_, authOverride);
        repo.server_ = repo.persistentConnection_;
    }
    repo.authTokenProvider_.addTokenChangeListener((token)=>{
        repo.server_.refreshAuthToken(token);
    });
    repo.appCheckProvider_.addTokenChangeListener((result)=>{
        repo.server_.refreshAppCheckToken(result.token);
    });
    // In the case of multiple Repos for the same repoInfo (i.e. there are multiple Firebase.Contexts being used),
    // we only want to create one StatsReporter.  As such, we'll report stats over the first Repo created.
    repo.statsReporter_ = statsManagerGetOrCreateReporter(repo.repoInfo_, ()=>new StatsReporter(repo.stats_, repo.server_)
    );
    // Used for .info.
    repo.infoData_ = new SnapshotHolder();
    repo.infoSyncTree_ = new SyncTree({
        startListening: (query27, tag, currentHashFn, onComplete)=>{
            let infoEvents = [];
            const node = repo.infoData_.getNode(query27._path);
            // This is possibly a hack, but we have different semantics for .info endpoints. We don't raise null events
            // on initial data...
            if (!node.isEmpty()) {
                infoEvents = syncTreeApplyServerOverwrite(repo.infoSyncTree_, query27._path, node);
                setTimeout(()=>{
                    onComplete('ok');
                }, 0);
            }
            return infoEvents;
        },
        stopListening: ()=>{
        }
    });
    repoUpdateInfo(repo, 'connected', false);
    repo.serverSyncTree_ = new SyncTree({
        startListening: (query28, tag, currentHashFn, onComplete)=>{
            repo.server_.listen(query28, currentHashFn, tag, (status, data)=>{
                const events = onComplete(status, data);
                eventQueueRaiseEventsForChangedPath(repo.eventQueue_, query28._path, events);
            });
            // No synchronous events for network-backed sync trees
            return [];
        },
        stopListening: (query29, tag)=>{
            repo.server_.unlisten(query29, tag);
        }
    });
}
/**
 * @returns The time in milliseconds, taking the server offset into account if we have one.
 */ function repoServerTime(repo) {
    const offsetNode = repo.infoData_.getNode(new Path('.info/serverTimeOffset'));
    const offset = offsetNode.val() || 0;
    return new Date().getTime() + offset;
}
/**
 * Generate ServerValues using some variables from the repo object.
 */ function repoGenerateServerValues(repo) {
    return generateWithValues({
        timestamp: repoServerTime(repo)
    });
}
/**
 * Called by realtime when we get new messages from the server.
 */ function repoOnDataUpdate(repo, pathString, data, isMerge, tag) {
    // For testing.
    repo.dataUpdateCount++;
    const path = new Path(pathString);
    data = repo.interceptServerDataCallback_ ? repo.interceptServerDataCallback_(pathString, data) : data;
    let events = [];
    if (tag) {
        if (isMerge) {
            const taggedChildren = _util.map(data, (raw)=>nodeFromJSON(raw)
            );
            events = syncTreeApplyTaggedQueryMerge(repo.serverSyncTree_, path, taggedChildren, tag);
        } else {
            const taggedSnap = nodeFromJSON(data);
            events = syncTreeApplyTaggedQueryOverwrite(repo.serverSyncTree_, path, taggedSnap, tag);
        }
    } else if (isMerge) {
        const changedChildren = _util.map(data, (raw)=>nodeFromJSON(raw)
        );
        events = syncTreeApplyServerMerge(repo.serverSyncTree_, path, changedChildren);
    } else {
        const snap = nodeFromJSON(data);
        events = syncTreeApplyServerOverwrite(repo.serverSyncTree_, path, snap);
    }
    let affectedPath = path;
    if (events.length > 0) // Since we have a listener outstanding for each transaction, receiving any events
    // is a proxy for some change having occurred.
    affectedPath = repoRerunTransactions(repo, path);
    eventQueueRaiseEventsForChangedPath(repo.eventQueue_, affectedPath, events);
}
function repoOnConnectStatus(repo, connectStatus) {
    repoUpdateInfo(repo, 'connected', connectStatus);
    if (connectStatus === false) repoRunOnDisconnectEvents(repo);
}
function repoOnServerInfoUpdate(repo, updates) {
    each(updates, (key, value)=>{
        repoUpdateInfo(repo, key, value);
    });
}
function repoUpdateInfo(repo, pathString, value) {
    const path = new Path('/.info/' + pathString);
    const newNode = nodeFromJSON(value);
    repo.infoData_.updateSnapshot(path, newNode);
    const events = syncTreeApplyServerOverwrite(repo.infoSyncTree_, path, newNode);
    eventQueueRaiseEventsForChangedPath(repo.eventQueue_, path, events);
}
function repoGetNextWriteId(repo) {
    return repo.nextWriteId_++;
}
/**
 * The purpose of `getValue` is to return the latest known value
 * satisfying `query`.
 *
 * This method will first check for in-memory cached values
 * belonging to active listeners. If they are found, such values
 * are considered to be the most up-to-date.
 *
 * If the client is not connected, this method will try to
 * establish a connection and request the value for `query`. If
 * the client is not able to retrieve the query result, it reports
 * an error.
 *
 * @param query - The query to surface a value for.
 */ function repoGetValue(repo, query30) {
    // Only active queries are cached. There is no persisted cache.
    const cached = syncTreeGetServerValue(repo.serverSyncTree_, query30);
    if (cached != null) return Promise.resolve(cached);
    return repo.server_.get(query30).then((payload)=>{
        const node = nodeFromJSON(payload).withIndex(query30._queryParams.getIndex());
        const events = syncTreeApplyServerOverwrite(repo.serverSyncTree_, query30._path, node);
        eventQueueRaiseEventsAtPath(repo.eventQueue_, query30._path, events);
        return Promise.resolve(node);
    }, (err)=>{
        repoLog(repo, 'get for query ' + _util.stringify(query30) + ' failed: ' + err);
        return Promise.reject(new Error(err));
    });
}
function repoSetWithPriority(repo, path, newVal, newPriority, onComplete) {
    repoLog(repo, 'set', {
        path: path.toString(),
        value: newVal,
        priority: newPriority
    });
    // TODO: Optimize this behavior to either (a) store flag to skip resolving where possible and / or
    // (b) store unresolved paths on JSON parse
    const serverValues = repoGenerateServerValues(repo);
    const newNodeUnresolved = nodeFromJSON(newVal, newPriority);
    const existing = syncTreeCalcCompleteEventCache(repo.serverSyncTree_, path);
    const newNode = resolveDeferredValueSnapshot(newNodeUnresolved, existing, serverValues);
    const writeId = repoGetNextWriteId(repo);
    const events = syncTreeApplyUserOverwrite(repo.serverSyncTree_, path, newNode, writeId, true);
    eventQueueQueueEvents(repo.eventQueue_, events);
    repo.server_.put(path.toString(), newNodeUnresolved.val(/*export=*/ true), (status, errorReason)=>{
        const success = status === 'ok';
        if (!success) warn('set at ' + path + ' failed: ' + status);
        const clearEvents = syncTreeAckUserWrite(repo.serverSyncTree_, writeId, !success);
        eventQueueRaiseEventsForChangedPath(repo.eventQueue_, path, clearEvents);
        repoCallOnCompleteCallback(repo, onComplete, status, errorReason);
    });
    const affectedPath = repoAbortTransactions(repo, path);
    repoRerunTransactions(repo, affectedPath);
    // We queued the events above, so just flush the queue here
    eventQueueRaiseEventsForChangedPath(repo.eventQueue_, affectedPath, []);
}
function repoUpdate(repo, path, childrenToMerge, onComplete) {
    repoLog(repo, 'update', {
        path: path.toString(),
        value: childrenToMerge
    });
    // Start with our existing data and merge each child into it.
    let empty = true;
    const serverValues = repoGenerateServerValues(repo);
    const changedChildren = {
    };
    each(childrenToMerge, (changedKey, changedValue)=>{
        empty = false;
        changedChildren[changedKey] = resolveDeferredValueTree(pathChild(path, changedKey), nodeFromJSON(changedValue), repo.serverSyncTree_, serverValues);
    });
    if (!empty) {
        const writeId = repoGetNextWriteId(repo);
        const events = syncTreeApplyUserMerge(repo.serverSyncTree_, path, changedChildren, writeId);
        eventQueueQueueEvents(repo.eventQueue_, events);
        repo.server_.merge(path.toString(), childrenToMerge, (status, errorReason)=>{
            const success = status === 'ok';
            if (!success) warn('update at ' + path + ' failed: ' + status);
            const clearEvents = syncTreeAckUserWrite(repo.serverSyncTree_, writeId, !success);
            const affectedPath = clearEvents.length > 0 ? repoRerunTransactions(repo, path) : path;
            eventQueueRaiseEventsForChangedPath(repo.eventQueue_, affectedPath, clearEvents);
            repoCallOnCompleteCallback(repo, onComplete, status, errorReason);
        });
        each(childrenToMerge, (changedPath)=>{
            const affectedPath = repoAbortTransactions(repo, pathChild(path, changedPath));
            repoRerunTransactions(repo, affectedPath);
        });
        // We queued the events above, so just flush the queue here
        eventQueueRaiseEventsForChangedPath(repo.eventQueue_, path, []);
    } else {
        log("update() called with empty data.  Don't do anything.");
        repoCallOnCompleteCallback(repo, onComplete, 'ok', undefined);
    }
}
/**
 * Applies all of the changes stored up in the onDisconnect_ tree.
 */ function repoRunOnDisconnectEvents(repo) {
    repoLog(repo, 'onDisconnectEvents');
    const serverValues = repoGenerateServerValues(repo);
    const resolvedOnDisconnectTree = newSparseSnapshotTree();
    sparseSnapshotTreeForEachTree(repo.onDisconnect_, newEmptyPath(), (path, node)=>{
        const resolved = resolveDeferredValueTree(path, node, repo.serverSyncTree_, serverValues);
        sparseSnapshotTreeRemember(resolvedOnDisconnectTree, path, resolved);
    });
    let events = [];
    sparseSnapshotTreeForEachTree(resolvedOnDisconnectTree, newEmptyPath(), (path, snap)=>{
        events = events.concat(syncTreeApplyServerOverwrite(repo.serverSyncTree_, path, snap));
        const affectedPath = repoAbortTransactions(repo, path);
        repoRerunTransactions(repo, affectedPath);
    });
    repo.onDisconnect_ = newSparseSnapshotTree();
    eventQueueRaiseEventsForChangedPath(repo.eventQueue_, newEmptyPath(), events);
}
function repoOnDisconnectCancel(repo, path, onComplete) {
    repo.server_.onDisconnectCancel(path.toString(), (status, errorReason)=>{
        if (status === 'ok') sparseSnapshotTreeForget(repo.onDisconnect_, path);
        repoCallOnCompleteCallback(repo, onComplete, status, errorReason);
    });
}
function repoOnDisconnectSet(repo, path, value, onComplete) {
    const newNode = nodeFromJSON(value);
    repo.server_.onDisconnectPut(path.toString(), newNode.val(/*export=*/ true), (status, errorReason)=>{
        if (status === 'ok') sparseSnapshotTreeRemember(repo.onDisconnect_, path, newNode);
        repoCallOnCompleteCallback(repo, onComplete, status, errorReason);
    });
}
function repoOnDisconnectSetWithPriority(repo, path, value, priority, onComplete) {
    const newNode = nodeFromJSON(value, priority);
    repo.server_.onDisconnectPut(path.toString(), newNode.val(/*export=*/ true), (status, errorReason)=>{
        if (status === 'ok') sparseSnapshotTreeRemember(repo.onDisconnect_, path, newNode);
        repoCallOnCompleteCallback(repo, onComplete, status, errorReason);
    });
}
function repoOnDisconnectUpdate(repo, path, childrenToMerge, onComplete) {
    if (_util.isEmpty(childrenToMerge)) {
        log("onDisconnect().update() called with empty data.  Don't do anything.");
        repoCallOnCompleteCallback(repo, onComplete, 'ok', undefined);
        return;
    }
    repo.server_.onDisconnectMerge(path.toString(), childrenToMerge, (status, errorReason)=>{
        if (status === 'ok') each(childrenToMerge, (childName, childNode)=>{
            const newChildNode = nodeFromJSON(childNode);
            sparseSnapshotTreeRemember(repo.onDisconnect_, pathChild(path, childName), newChildNode);
        });
        repoCallOnCompleteCallback(repo, onComplete, status, errorReason);
    });
}
function repoAddEventCallbackForQuery(repo, query31, eventRegistration) {
    let events;
    if (pathGetFront(query31._path) === '.info') events = syncTreeAddEventRegistration(repo.infoSyncTree_, query31, eventRegistration);
    else events = syncTreeAddEventRegistration(repo.serverSyncTree_, query31, eventRegistration);
    eventQueueRaiseEventsAtPath(repo.eventQueue_, query31._path, events);
}
function repoRemoveEventCallbackForQuery(repo, query32, eventRegistration) {
    // These are guaranteed not to raise events, since we're not passing in a cancelError. However, we can future-proof
    // a little bit by handling the return values anyways.
    let events;
    if (pathGetFront(query32._path) === '.info') events = syncTreeRemoveEventRegistration(repo.infoSyncTree_, query32, eventRegistration);
    else events = syncTreeRemoveEventRegistration(repo.serverSyncTree_, query32, eventRegistration);
    eventQueueRaiseEventsAtPath(repo.eventQueue_, query32._path, events);
}
function repoInterrupt(repo) {
    if (repo.persistentConnection_) repo.persistentConnection_.interrupt(INTERRUPT_REASON);
}
function repoResume(repo) {
    if (repo.persistentConnection_) repo.persistentConnection_.resume(INTERRUPT_REASON);
}
function repoLog(repo, ...varArgs) {
    let prefix = '';
    if (repo.persistentConnection_) prefix = repo.persistentConnection_.id + ':';
    log(prefix, ...varArgs);
}
function repoCallOnCompleteCallback(repo, callback, status, errorReason) {
    if (callback) exceptionGuard(()=>{
        if (status === 'ok') callback(null);
        else {
            const code = (status || 'error').toUpperCase();
            let message = code;
            if (errorReason) message += ': ' + errorReason;
            const error9 = new Error(message);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            error9.code = code;
            callback(error9);
        }
    });
}
/**
 * Creates a new transaction, adds it to the transactions we're tracking, and
 * sends it to the server if possible.
 *
 * @param path - Path at which to do transaction.
 * @param transactionUpdate - Update callback.
 * @param onComplete - Completion callback.
 * @param unwatcher - Function that will be called when the transaction no longer
 * need data updates for `path`.
 * @param applyLocally - Whether or not to make intermediate results visible
 */ function repoStartTransaction(repo, path, transactionUpdate, onComplete, unwatcher, applyLocally) {
    repoLog(repo, 'transaction on ' + path);
    // Initialize transaction.
    const transaction = {
        path,
        update: transactionUpdate,
        onComplete,
        // One of TransactionStatus enums.
        status: null,
        // Used when combining transactions at different locations to figure out
        // which one goes first.
        order: LUIDGenerator(),
        // Whether to raise local events for this transaction.
        applyLocally,
        // Count of how many times we've retried the transaction.
        retryCount: 0,
        // Function to call to clean up our .on() listener.
        unwatcher,
        // Stores why a transaction was aborted.
        abortReason: null,
        currentWriteId: null,
        currentInputSnapshot: null,
        currentOutputSnapshotRaw: null,
        currentOutputSnapshotResolved: null
    };
    // Run transaction initially.
    const currentState = repoGetLatestState(repo, path, undefined);
    transaction.currentInputSnapshot = currentState;
    const newVal = transaction.update(currentState.val());
    if (newVal === undefined) {
        // Abort transaction.
        transaction.unwatcher();
        transaction.currentOutputSnapshotRaw = null;
        transaction.currentOutputSnapshotResolved = null;
        if (transaction.onComplete) transaction.onComplete(null, false, transaction.currentInputSnapshot);
    } else {
        validateFirebaseData('transaction failed: Data returned ', newVal, transaction.path);
        // Mark as run and add to our queue.
        transaction.status = 0 /* RUN */ ;
        const queueNode = treeSubTree(repo.transactionQueueTree_, path);
        const nodeQueue = treeGetValue(queueNode) || [];
        nodeQueue.push(transaction);
        treeSetValue(queueNode, nodeQueue);
        // Update visibleData and raise events
        // Note: We intentionally raise events after updating all of our
        // transaction state, since the user could start new transactions from the
        // event callbacks.
        let priorityForNode;
        if (typeof newVal === 'object' && newVal !== null && _util.contains(newVal, '.priority')) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            priorityForNode = _util.safeGet(newVal, '.priority');
            _util.assert(isValidPriority(priorityForNode), "Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.");
        } else {
            const currentNode = syncTreeCalcCompleteEventCache(repo.serverSyncTree_, path) || ChildrenNode.EMPTY_NODE;
            priorityForNode = currentNode.getPriority().val();
        }
        const serverValues = repoGenerateServerValues(repo);
        const newNodeUnresolved = nodeFromJSON(newVal, priorityForNode);
        const newNode = resolveDeferredValueSnapshot(newNodeUnresolved, currentState, serverValues);
        transaction.currentOutputSnapshotRaw = newNodeUnresolved;
        transaction.currentOutputSnapshotResolved = newNode;
        transaction.currentWriteId = repoGetNextWriteId(repo);
        const events = syncTreeApplyUserOverwrite(repo.serverSyncTree_, path, newNode, transaction.currentWriteId, transaction.applyLocally);
        eventQueueRaiseEventsForChangedPath(repo.eventQueue_, path, events);
        repoSendReadyTransactions(repo, repo.transactionQueueTree_);
    }
}
/**
 * @param excludeSets - A specific set to exclude
 */ function repoGetLatestState(repo, path, excludeSets) {
    return syncTreeCalcCompleteEventCache(repo.serverSyncTree_, path, excludeSets) || ChildrenNode.EMPTY_NODE;
}
/**
 * Sends any already-run transactions that aren't waiting for outstanding
 * transactions to complete.
 *
 * Externally it's called with no arguments, but it calls itself recursively
 * with a particular transactionQueueTree node to recurse through the tree.
 *
 * @param node - transactionQueueTree node to start at.
 */ function repoSendReadyTransactions(repo, node = repo.transactionQueueTree_) {
    // Before recursing, make sure any completed transactions are removed.
    if (!node) repoPruneCompletedTransactionsBelowNode(repo, node);
    if (treeGetValue(node)) {
        const queue = repoBuildTransactionQueue(repo, node);
        _util.assert(queue.length > 0, 'Sending zero length transaction queue');
        const allRun = queue.every((transaction)=>transaction.status === 0 /* RUN */ 
        );
        // If they're all run (and not sent), we can send them.  Else, we must wait.
        if (allRun) repoSendTransactionQueue(repo, treeGetPath(node), queue);
    } else if (treeHasChildren(node)) treeForEachChild(node, (childNode)=>{
        repoSendReadyTransactions(repo, childNode);
    });
}
/**
 * Given a list of run transactions, send them to the server and then handle
 * the result (success or failure).
 *
 * @param path - The location of the queue.
 * @param queue - Queue of transactions under the specified location.
 */ function repoSendTransactionQueue(repo, path, queue) {
    // Mark transactions as sent and increment retry count!
    const setsToIgnore = queue.map((txn)=>{
        return txn.currentWriteId;
    });
    const latestState = repoGetLatestState(repo, path, setsToIgnore);
    let snapToSend = latestState;
    const latestHash = latestState.hash();
    for(let i5 = 0; i5 < queue.length; i5++){
        const txn = queue[i5];
        _util.assert(txn.status === 0 /* RUN */ , 'tryToSendTransactionQueue_: items in queue should all be run.');
        txn.status = 1 /* SENT */ ;
        txn.retryCount++;
        const relativePath = newRelativePath(path, txn.path);
        // If we've gotten to this point, the output snapshot must be defined.
        snapToSend = snapToSend.updateChild(relativePath /** @type {!Node} */ , txn.currentOutputSnapshotRaw);
    }
    const dataToSend = snapToSend.val(true);
    const pathToSend = path;
    // Send the put.
    repo.server_.put(pathToSend.toString(), dataToSend, (status)=>{
        repoLog(repo, 'transaction put response', {
            path: pathToSend.toString(),
            status
        });
        let events = [];
        if (status === 'ok') {
            // Queue up the callbacks and fire them after cleaning up all of our
            // transaction state, since the callback could trigger more
            // transactions or sets.
            const callbacks = [];
            for(let i = 0; i < queue.length; i++){
                queue[i].status = 2 /* COMPLETED */ ;
                events = events.concat(syncTreeAckUserWrite(repo.serverSyncTree_, queue[i].currentWriteId));
                if (queue[i].onComplete) // We never unset the output snapshot, and given that this
                // transaction is complete, it should be set
                callbacks.push(()=>queue[i].onComplete(null, true, queue[i].currentOutputSnapshotResolved)
                );
                queue[i].unwatcher();
            }
            // Now remove the completed transactions.
            repoPruneCompletedTransactionsBelowNode(repo, treeSubTree(repo.transactionQueueTree_, path));
            // There may be pending transactions that we can now send.
            repoSendReadyTransactions(repo, repo.transactionQueueTree_);
            eventQueueRaiseEventsForChangedPath(repo.eventQueue_, path, events);
            // Finally, trigger onComplete callbacks.
            for(let i4 = 0; i4 < callbacks.length; i4++)exceptionGuard(callbacks[i4]);
        } else {
            // transactions are no longer sent.  Update their status appropriately.
            if (status === 'datastale') {
                for(let i = 0; i < queue.length; i++)if (queue[i].status === 3 /* SENT_NEEDS_ABORT */ ) queue[i].status = 4 /* NEEDS_ABORT */ ;
                else queue[i].status = 0 /* RUN */ ;
            } else {
                warn('transaction at ' + pathToSend.toString() + ' failed: ' + status);
                for(let i = 0; i < queue.length; i++){
                    queue[i].status = 4 /* NEEDS_ABORT */ ;
                    queue[i].abortReason = status;
                }
            }
            repoRerunTransactions(repo, path);
        }
    }, latestHash);
}
/**
 * Finds all transactions dependent on the data at changedPath and reruns them.
 *
 * Should be called any time cached data changes.
 *
 * Return the highest path that was affected by rerunning transactions. This
 * is the path at which events need to be raised for.
 *
 * @param changedPath - The path in mergedData that changed.
 * @returns The rootmost path that was affected by rerunning transactions.
 */ function repoRerunTransactions(repo, changedPath) {
    const rootMostTransactionNode = repoGetAncestorTransactionNode(repo, changedPath);
    const path = treeGetPath(rootMostTransactionNode);
    const queue = repoBuildTransactionQueue(repo, rootMostTransactionNode);
    repoRerunTransactionQueue(repo, queue, path);
    return path;
}
/**
 * Does all the work of rerunning transactions (as well as cleans up aborted
 * transactions and whatnot).
 *
 * @param queue - The queue of transactions to run.
 * @param path - The path the queue is for.
 */ function repoRerunTransactionQueue(repo, queue, path) {
    if (queue.length === 0) return; // Nothing to do!
    // Queue up the callbacks and fire them after cleaning up all of our
    // transaction state, since the callback could trigger more transactions or
    // sets.
    const callbacks = [];
    let events = [];
    // Ignore all of the sets we're going to re-run.
    const txnsToRerun = queue.filter((q)=>{
        return q.status === 0 /* RUN */ ;
    });
    const setsToIgnore = txnsToRerun.map((q)=>{
        return q.currentWriteId;
    });
    for(let i = 0; i < queue.length; i++){
        const transaction = queue[i];
        const relativePath = newRelativePath(path, transaction.path);
        let abortTransaction = false, abortReason;
        _util.assert(relativePath !== null, 'rerunTransactionsUnderNode_: relativePath should not be null.');
        if (transaction.status === 4 /* NEEDS_ABORT */ ) {
            abortTransaction = true;
            abortReason = transaction.abortReason;
            events = events.concat(syncTreeAckUserWrite(repo.serverSyncTree_, transaction.currentWriteId, true));
        } else if (transaction.status === 0 /* RUN */ ) {
            if (transaction.retryCount >= MAX_TRANSACTION_RETRIES) {
                abortTransaction = true;
                abortReason = 'maxretry';
                events = events.concat(syncTreeAckUserWrite(repo.serverSyncTree_, transaction.currentWriteId, true));
            } else {
                // This code reruns a transaction
                const currentNode = repoGetLatestState(repo, transaction.path, setsToIgnore);
                transaction.currentInputSnapshot = currentNode;
                const newData = queue[i].update(currentNode.val());
                if (newData !== undefined) {
                    validateFirebaseData('transaction failed: Data returned ', newData, transaction.path);
                    let newDataNode = nodeFromJSON(newData);
                    const hasExplicitPriority = typeof newData === 'object' && newData != null && _util.contains(newData, '.priority');
                    if (!hasExplicitPriority) // Keep the old priority if there wasn't a priority explicitly specified.
                    newDataNode = newDataNode.updatePriority(currentNode.getPriority());
                    const oldWriteId = transaction.currentWriteId;
                    const serverValues = repoGenerateServerValues(repo);
                    const newNodeResolved = resolveDeferredValueSnapshot(newDataNode, currentNode, serverValues);
                    transaction.currentOutputSnapshotRaw = newDataNode;
                    transaction.currentOutputSnapshotResolved = newNodeResolved;
                    transaction.currentWriteId = repoGetNextWriteId(repo);
                    // Mutates setsToIgnore in place
                    setsToIgnore.splice(setsToIgnore.indexOf(oldWriteId), 1);
                    events = events.concat(syncTreeApplyUserOverwrite(repo.serverSyncTree_, transaction.path, newNodeResolved, transaction.currentWriteId, transaction.applyLocally));
                    events = events.concat(syncTreeAckUserWrite(repo.serverSyncTree_, oldWriteId, true));
                } else {
                    abortTransaction = true;
                    abortReason = 'nodata';
                    events = events.concat(syncTreeAckUserWrite(repo.serverSyncTree_, transaction.currentWriteId, true));
                }
            }
        }
        eventQueueRaiseEventsForChangedPath(repo.eventQueue_, path, events);
        events = [];
        if (abortTransaction) {
            // Abort.
            queue[i].status = 2 /* COMPLETED */ ;
            // Removing a listener can trigger pruning which can muck with
            // mergedData/visibleData (as it prunes data). So defer the unwatcher
            // until we're done.
            (function(unwatcher) {
                setTimeout(unwatcher, Math.floor(0));
            })(queue[i].unwatcher);
            if (queue[i].onComplete) {
                if (abortReason === 'nodata') callbacks.push(()=>queue[i].onComplete(null, false, queue[i].currentInputSnapshot)
                );
                else callbacks.push(()=>queue[i].onComplete(new Error(abortReason), false, null)
                );
            }
        }
    }
    // Clean up completed transactions.
    repoPruneCompletedTransactionsBelowNode(repo, repo.transactionQueueTree_);
    // Now fire callbacks, now that we're in a good, known state.
    for(let i6 = 0; i6 < callbacks.length; i6++)exceptionGuard(callbacks[i6]);
    // Try to send the transaction result to the server.
    repoSendReadyTransactions(repo, repo.transactionQueueTree_);
}
/**
 * Returns the rootmost ancestor node of the specified path that has a pending
 * transaction on it, or just returns the node for the given path if there are
 * no pending transactions on any ancestor.
 *
 * @param path - The location to start at.
 * @returns The rootmost node with a transaction.
 */ function repoGetAncestorTransactionNode(repo, path) {
    let front;
    // Start at the root and walk deeper into the tree towards path until we
    // find a node with pending transactions.
    let transactionNode = repo.transactionQueueTree_;
    front = pathGetFront(path);
    while(front !== null && treeGetValue(transactionNode) === undefined){
        transactionNode = treeSubTree(transactionNode, front);
        path = pathPopFront(path);
        front = pathGetFront(path);
    }
    return transactionNode;
}
/**
 * Builds the queue of all transactions at or below the specified
 * transactionNode.
 *
 * @param transactionNode
 * @returns The generated queue.
 */ function repoBuildTransactionQueue(repo, transactionNode) {
    // Walk any child transaction queues and aggregate them into a single queue.
    const transactionQueue = [];
    repoAggregateTransactionQueuesForNode(repo, transactionNode, transactionQueue);
    // Sort them by the order the transactions were created.
    transactionQueue.sort((a, b)=>a.order - b.order
    );
    return transactionQueue;
}
function repoAggregateTransactionQueuesForNode(repo, node, queue) {
    const nodeQueue = treeGetValue(node);
    if (nodeQueue) for(let i = 0; i < nodeQueue.length; i++)queue.push(nodeQueue[i]);
    treeForEachChild(node, (child17)=>{
        repoAggregateTransactionQueuesForNode(repo, child17, queue);
    });
}
/**
 * Remove COMPLETED transactions at or below this node in the transactionQueueTree_.
 */ function repoPruneCompletedTransactionsBelowNode(repo, node) {
    const queue = treeGetValue(node);
    if (queue) {
        let to = 0;
        for(let from = 0; from < queue.length; from++)if (queue[from].status !== 2 /* COMPLETED */ ) {
            queue[to] = queue[from];
            to++;
        }
        queue.length = to;
        treeSetValue(node, queue.length > 0 ? queue : undefined);
    }
    treeForEachChild(node, (childNode)=>{
        repoPruneCompletedTransactionsBelowNode(repo, childNode);
    });
}
/**
 * Aborts all transactions on ancestors or descendants of the specified path.
 * Called when doing a set() or update() since we consider them incompatible
 * with transactions.
 *
 * @param path - Path for which we want to abort related transactions.
 */ function repoAbortTransactions(repo, path) {
    const affectedPath = treeGetPath(repoGetAncestorTransactionNode(repo, path));
    const transactionNode = treeSubTree(repo.transactionQueueTree_, path);
    treeForEachAncestor(transactionNode, (node)=>{
        repoAbortTransactionsOnNode(repo, node);
    });
    repoAbortTransactionsOnNode(repo, transactionNode);
    treeForEachDescendant(transactionNode, (node)=>{
        repoAbortTransactionsOnNode(repo, node);
    });
    return affectedPath;
}
/**
 * Abort transactions stored in this transaction queue node.
 *
 * @param node - Node to abort transactions for.
 */ function repoAbortTransactionsOnNode(repo, node) {
    const queue = treeGetValue(node);
    if (queue) {
        // Queue up the callbacks and fire them after cleaning up all of our
        // transaction state, since the callback could trigger more transactions
        // or sets.
        const callbacks = [];
        // Go through queue.  Any already-sent transactions must be marked for
        // abort, while the unsent ones can be immediately aborted and removed.
        let events = [];
        let lastSent = -1;
        for(let i = 0; i < queue.length; i++){
            if (queue[i].status === 3 /* SENT_NEEDS_ABORT */ ) ;
            else if (queue[i].status === 1 /* SENT */ ) {
                _util.assert(lastSent === i - 1, 'All SENT items should be at beginning of queue.');
                lastSent = i;
                // Mark transaction for abort when it comes back.
                queue[i].status = 3 /* SENT_NEEDS_ABORT */ ;
                queue[i].abortReason = 'set';
            } else {
                _util.assert(queue[i].status === 0 /* RUN */ , 'Unexpected transaction status in abort');
                // We can abort it immediately.
                queue[i].unwatcher();
                events = events.concat(syncTreeAckUserWrite(repo.serverSyncTree_, queue[i].currentWriteId, true));
                if (queue[i].onComplete) callbacks.push(queue[i].onComplete.bind(null, new Error('set'), false, null));
            }
        }
        if (lastSent === -1) // We're not waiting for any sent transactions.  We can clear the queue.
        treeSetValue(node, undefined);
        else // Remove the transactions we aborted.
        queue.length = lastSent + 1;
        // Now fire the callbacks.
        eventQueueRaiseEventsForChangedPath(repo.eventQueue_, treeGetPath(node), events);
        for(let i7 = 0; i7 < callbacks.length; i7++)exceptionGuard(callbacks[i7]);
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function decodePath(pathString) {
    let pathStringDecoded = '';
    const pieces = pathString.split('/');
    for(let i = 0; i < pieces.length; i++)if (pieces[i].length > 0) {
        let piece = pieces[i];
        try {
            piece = decodeURIComponent(piece.replace(/\+/g, ' '));
        } catch (e) {
        }
        pathStringDecoded += '/' + piece;
    }
    return pathStringDecoded;
}
/**
 * @returns key value hash
 */ function decodeQuery(queryString) {
    const results = {
    };
    if (queryString.charAt(0) === '?') queryString = queryString.substring(1);
    for (const segment of queryString.split('&')){
        if (segment.length === 0) continue;
        const kv = segment.split('=');
        if (kv.length === 2) results[decodeURIComponent(kv[0])] = decodeURIComponent(kv[1]);
        else warn(`Invalid query segment '${segment}' in query '${queryString}'`);
    }
    return results;
}
const parseRepoInfo = function(dataURL, nodeAdmin) {
    const parsedUrl = parseDatabaseURL(dataURL), namespace = parsedUrl.namespace;
    if (parsedUrl.domain === 'firebase.com') fatal(parsedUrl.host + ' is no longer supported. ' + 'Please use <YOUR FIREBASE>.firebaseio.com instead');
    // Catch common error of uninitialized namespace value.
    if ((!namespace || namespace === 'undefined') && parsedUrl.domain !== 'localhost') fatal('Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com');
    if (!parsedUrl.secure) warnIfPageIsSecure();
    const webSocketOnly = parsedUrl.scheme === 'ws' || parsedUrl.scheme === 'wss';
    return {
        repoInfo: new RepoInfo(parsedUrl.host, parsedUrl.secure, namespace, nodeAdmin, webSocketOnly, /*persistenceKey=*/ '', /*includeNamespaceInQueryParams=*/ namespace !== parsedUrl.subdomain),
        path: new Path(parsedUrl.pathString)
    };
};
const parseDatabaseURL = function(dataURL) {
    // Default to empty strings in the event of a malformed string.
    let host = '', domain = '', subdomain = '', pathString = '', namespace = '';
    // Always default to SSL, unless otherwise specified.
    let secure = true, scheme = 'https', port = 443;
    // Don't do any validation here. The caller is responsible for validating the result of parsing.
    if (typeof dataURL === 'string') {
        // Parse scheme.
        let colonInd = dataURL.indexOf('//');
        if (colonInd >= 0) {
            scheme = dataURL.substring(0, colonInd - 1);
            dataURL = dataURL.substring(colonInd + 2);
        }
        // Parse host, path, and query string.
        let slashInd = dataURL.indexOf('/');
        if (slashInd === -1) slashInd = dataURL.length;
        let questionMarkInd = dataURL.indexOf('?');
        if (questionMarkInd === -1) questionMarkInd = dataURL.length;
        host = dataURL.substring(0, Math.min(slashInd, questionMarkInd));
        if (slashInd < questionMarkInd) // For pathString, questionMarkInd will always come after slashInd
        pathString = decodePath(dataURL.substring(slashInd, questionMarkInd));
        const queryParams = decodeQuery(dataURL.substring(Math.min(dataURL.length, questionMarkInd)));
        // If we have a port, use scheme for determining if it's secure.
        colonInd = host.indexOf(':');
        if (colonInd >= 0) {
            secure = scheme === 'https' || scheme === 'wss';
            port = parseInt(host.substring(colonInd + 1), 10);
        } else colonInd = host.length;
        const hostWithoutPort = host.slice(0, colonInd);
        if (hostWithoutPort.toLowerCase() === 'localhost') domain = 'localhost';
        else if (hostWithoutPort.split('.').length <= 2) domain = hostWithoutPort;
        else {
            // Interpret the subdomain of a 3 or more component URL as the namespace name.
            const dotInd = host.indexOf('.');
            subdomain = host.substring(0, dotInd).toLowerCase();
            domain = host.substring(dotInd + 1);
            // Normalize namespaces to lowercase to share storage / connection.
            namespace = subdomain;
        }
        // Always treat the value of the `ns` as the namespace name if it is present.
        if ('ns' in queryParams) namespace = queryParams['ns'];
    }
    return {
        host,
        port,
        domain,
        subdomain,
        secure,
        scheme,
        pathString,
        namespace
    };
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Encapsulates the data needed to raise an event
 */ class DataEvent {
    /**
     * @param eventType - One of: value, child_added, child_changed, child_moved, child_removed
     * @param eventRegistration - The function to call to with the event data. User provided
     * @param snapshot - The data backing the event
     * @param prevName - Optional, the name of the previous child for child_* events.
     */ constructor(eventType, eventRegistration, snapshot, prevName){
        this.eventType = eventType;
        this.eventRegistration = eventRegistration;
        this.snapshot = snapshot;
        this.prevName = prevName;
    }
    getPath() {
        const ref1 = this.snapshot.ref;
        if (this.eventType === 'value') return ref1._path;
        else return ref1.parent._path;
    }
    getEventType() {
        return this.eventType;
    }
    getEventRunner() {
        return this.eventRegistration.getEventRunner(this);
    }
    toString() {
        return this.getPath().toString() + ':' + this.eventType + ':' + _util.stringify(this.snapshot.exportVal());
    }
}
class CancelEvent {
    constructor(eventRegistration, error10, path){
        this.eventRegistration = eventRegistration;
        this.error = error10;
        this.path = path;
    }
    getPath() {
        return this.path;
    }
    getEventType() {
        return 'cancel';
    }
    getEventRunner() {
        return this.eventRegistration.getEventRunner(this);
    }
    toString() {
        return this.path.toString() + ':cancel';
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A wrapper class that converts events from the database@exp SDK to the legacy
 * Database SDK. Events are not converted directly as event registration relies
 * on reference comparison of the original user callback (see `matches()`) and
 * relies on equality of the legacy SDK's `context` object.
 */ class CallbackContext {
    constructor(snapshotCallback, cancelCallback){
        this.snapshotCallback = snapshotCallback;
        this.cancelCallback = cancelCallback;
    }
    onValue(expDataSnapshot, previousChildName) {
        this.snapshotCallback.call(null, expDataSnapshot, previousChildName);
    }
    onCancel(error11) {
        _util.assert(this.hasCancelCallback, 'Raising a cancel event on a listener with no cancel callback');
        return this.cancelCallback.call(null, error11);
    }
    get hasCancelCallback() {
        return !!this.cancelCallback;
    }
    matches(other) {
        return this.snapshotCallback === other.snapshotCallback || this.snapshotCallback.userCallback !== undefined && this.snapshotCallback.userCallback === other.snapshotCallback.userCallback && this.snapshotCallback.context === other.snapshotCallback.context;
    }
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * The `onDisconnect` class allows you to write or clear data when your client
 * disconnects from the Database server. These updates occur whether your
 * client disconnects cleanly or not, so you can rely on them to clean up data
 * even if a connection is dropped or a client crashes.
 *
 * The `onDisconnect` class is most commonly used to manage presence in
 * applications where it is useful to detect how many clients are connected and
 * when other clients disconnect. See
 * {@link https://firebase.google.com/docs/database/web/offline-capabilities | Enabling Offline Capabilities in JavaScript}
 * for more information.
 *
 * To avoid problems when a connection is dropped before the requests can be
 * transferred to the Database server, these functions should be called before
 * writing any data.
 *
 * Note that `onDisconnect` operations are only triggered once. If you want an
 * operation to occur each time a disconnect occurs, you'll need to re-establish
 * the `onDisconnect` operations each time you reconnect.
 */ class OnDisconnect {
    /** @hideconstructor */ constructor(_repo, _path){
        this._repo = _repo;
        this._path = _path;
    }
    /**
     * Cancels all previously queued `onDisconnect()` set or update events for this
     * location and all children.
     *
     * If a write has been queued for this location via a `set()` or `update()` at a
     * parent location, the write at this location will be canceled, though writes
     * to sibling locations will still occur.
     *
     * @returns Resolves when synchronization to the server is complete.
     */ cancel() {
        const deferred = new _util.Deferred();
        repoOnDisconnectCancel(this._repo, this._path, deferred.wrapCallback(()=>{
        }));
        return deferred.promise;
    }
    /**
     * Ensures the data at this location is deleted when the client is disconnected
     * (due to closing the browser, navigating to a new page, or network issues).
     *
     * @returns Resolves when synchronization to the server is complete.
     */ remove() {
        validateWritablePath('OnDisconnect.remove', this._path);
        const deferred = new _util.Deferred();
        repoOnDisconnectSet(this._repo, this._path, null, deferred.wrapCallback(()=>{
        }));
        return deferred.promise;
    }
    /**
     * Ensures the data at this location is set to the specified value when the
     * client is disconnected (due to closing the browser, navigating to a new page,
     * or network issues).
     *
     * `set()` is especially useful for implementing "presence" systems, where a
     * value should be changed or cleared when a user disconnects so that they
     * appear "offline" to other users. See
     * {@link https://firebase.google.com/docs/database/web/offline-capabilities | Enabling Offline Capabilities in JavaScript}
     * for more information.
     *
     * Note that `onDisconnect` operations are only triggered once. If you want an
     * operation to occur each time a disconnect occurs, you'll need to re-establish
     * the `onDisconnect` operations each time.
     *
     * @param value - The value to be written to this location on disconnect (can
     * be an object, array, string, number, boolean, or null).
     * @returns Resolves when synchronization to the Database is complete.
     */ set(value) {
        validateWritablePath('OnDisconnect.set', this._path);
        validateFirebaseDataArg('OnDisconnect.set', value, this._path, false);
        const deferred = new _util.Deferred();
        repoOnDisconnectSet(this._repo, this._path, value, deferred.wrapCallback(()=>{
        }));
        return deferred.promise;
    }
    /**
     * Ensures the data at this location is set to the specified value and priority
     * when the client is disconnected (due to closing the browser, navigating to a
     * new page, or network issues).
     *
     * @param value - The value to be written to this location on disconnect (can
     * be an object, array, string, number, boolean, or null).
     * @param priority - The priority to be written (string, number, or null).
     * @returns Resolves when synchronization to the Database is complete.
     */ setWithPriority(value, priority) {
        validateWritablePath('OnDisconnect.setWithPriority', this._path);
        validateFirebaseDataArg('OnDisconnect.setWithPriority', value, this._path, false);
        validatePriority('OnDisconnect.setWithPriority', priority, false);
        const deferred = new _util.Deferred();
        repoOnDisconnectSetWithPriority(this._repo, this._path, value, priority, deferred.wrapCallback(()=>{
        }));
        return deferred.promise;
    }
    /**
     * Writes multiple values at this location when the client is disconnected (due
     * to closing the browser, navigating to a new page, or network issues).
     *
     * The `values` argument contains multiple property-value pairs that will be
     * written to the Database together. Each child property can either be a simple
     * property (for example, "name") or a relative path (for example, "name/first")
     * from the current location to the data to update.
     *
     * As opposed to the `set()` method, `update()` can be use to selectively update
     * only the referenced properties at the current location (instead of replacing
     * all the child properties at the current location).
     *
     * @param values - Object containing multiple values.
     * @returns Resolves when synchronization to the Database is complete.
     */ update(values) {
        validateWritablePath('OnDisconnect.update', this._path);
        validateFirebaseMergeDataArg('OnDisconnect.update', values, this._path, false);
        const deferred = new _util.Deferred();
        repoOnDisconnectUpdate(this._repo, this._path, values, deferred.wrapCallback(()=>{
        }));
        return deferred.promise;
    }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @internal
 */ class QueryImpl {
    /**
     * @hideconstructor
     */ constructor(_repo, _path, _queryParams, _orderByCalled){
        this._repo = _repo;
        this._path = _path;
        this._queryParams = _queryParams;
        this._orderByCalled = _orderByCalled;
    }
    get key() {
        if (pathIsEmpty(this._path)) return null;
        else return pathGetBack(this._path);
    }
    get ref() {
        return new ReferenceImpl(this._repo, this._path);
    }
    get _queryIdentifier() {
        const obj = queryParamsGetQueryObject(this._queryParams);
        const id = ObjectToUniqueKey(obj);
        return id === '{}' ? 'default' : id;
    }
    /**
     * An object representation of the query parameters used by this Query.
     */ get _queryObject() {
        return queryParamsGetQueryObject(this._queryParams);
    }
    isEqual(other) {
        other = _util.getModularInstance(other);
        if (!(other instanceof QueryImpl)) return false;
        const sameRepo = this._repo === other._repo;
        const samePath = pathEquals(this._path, other._path);
        const sameQueryIdentifier = this._queryIdentifier === other._queryIdentifier;
        return sameRepo && samePath && sameQueryIdentifier;
    }
    toJSON() {
        return this.toString();
    }
    toString() {
        return this._repo.toString() + pathToUrlEncodedString(this._path);
    }
}
/**
 * Validates that no other order by call has been made
 */ function validateNoPreviousOrderByCall(query33, fnName) {
    if (query33._orderByCalled === true) throw new Error(fnName + ": You can't combine multiple orderBy calls.");
}
/**
 * Validates start/end values for queries.
 */ function validateQueryEndpoints(params) {
    let startNode = null;
    let endNode = null;
    if (params.hasStart()) startNode = params.getIndexStartValue();
    if (params.hasEnd()) endNode = params.getIndexEndValue();
    if (params.getIndex() === KEY_INDEX) {
        const tooManyArgsError = "Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().";
        const wrongArgTypeError = "Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";
        if (params.hasStart()) {
            const startName = params.getIndexStartName();
            if (startName !== MIN_NAME) throw new Error(tooManyArgsError);
            else if (typeof startNode !== 'string') throw new Error(wrongArgTypeError);
        }
        if (params.hasEnd()) {
            const endName = params.getIndexEndName();
            if (endName !== MAX_NAME) throw new Error(tooManyArgsError);
            else if (typeof endNode !== 'string') throw new Error(wrongArgTypeError);
        }
    } else if (params.getIndex() === PRIORITY_INDEX) {
        if (startNode != null && !isValidPriority(startNode) || endNode != null && !isValidPriority(endNode)) throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).");
    } else {
        _util.assert(params.getIndex() instanceof PathIndex || params.getIndex() === VALUE_INDEX, 'unknown index type.');
        if (startNode != null && typeof startNode === 'object' || endNode != null && typeof endNode === 'object') throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.");
    }
}
/**
 * Validates that limit* has been called with the correct combination of parameters
 */ function validateLimit(params) {
    if (params.hasStart() && params.hasEnd() && params.hasLimit() && !params.hasAnchoredLimit()) throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.");
}
/**
 * @internal
 */ class ReferenceImpl extends QueryImpl {
    /** @hideconstructor */ constructor(repo, path){
        super(repo, path, new QueryParams(), false);
    }
    get parent() {
        const parentPath = pathParent(this._path);
        return parentPath === null ? null : new ReferenceImpl(this._repo, parentPath);
    }
    get root() {
        let ref2 = this;
        while(ref2.parent !== null)ref2 = ref2.parent;
        return ref2;
    }
}
/**
 * A `DataSnapshot` contains data from a Database location.
 *
 * Any time you read data from the Database, you receive the data as a
 * `DataSnapshot`. A `DataSnapshot` is passed to the event callbacks you attach
 * with `on()` or `once()`. You can extract the contents of the snapshot as a
 * JavaScript object by calling the `val()` method. Alternatively, you can
 * traverse into the snapshot by calling `child()` to return child snapshots
 * (which you could then call `val()` on).
 *
 * A `DataSnapshot` is an efficiently generated, immutable copy of the data at
 * a Database location. It cannot be modified and will never change (to modify
 * data, you always call the `set()` method on a `Reference` directly).
 */ class DataSnapshot {
    /**
     * @param _node - A SnapshotNode to wrap.
     * @param ref - The location this snapshot came from.
     * @param _index - The iteration order for this snapshot
     * @hideconstructor
     */ constructor(_node, /**
     * The location of this DataSnapshot.
     */ ref3, _index){
        this._node = _node;
        this.ref = ref3;
        this._index = _index;
    }
    /**
     * Gets the priority value of the data in this `DataSnapshot`.
     *
     * Applications need not use priority but can order collections by
     * ordinary properties (see
     * {@link https://firebase.google.com/docs/database/web/lists-of-data#sorting_and_filtering_data |Sorting and filtering data}
     * ).
     */ get priority() {
        // typecast here because we never return deferred values or internal priorities (MAX_PRIORITY)
        return this._node.getPriority().val();
    }
    /**
     * The key (last part of the path) of the location of this `DataSnapshot`.
     *
     * The last token in a Database location is considered its key. For example,
     * "ada" is the key for the /users/ada/ node. Accessing the key on any
     * `DataSnapshot` will return the key for the location that generated it.
     * However, accessing the key on the root URL of a Database will return
     * `null`.
     */ get key() {
        return this.ref.key;
    }
    /** Returns the number of child properties of this `DataSnapshot`. */ get size() {
        return this._node.numChildren();
    }
    /**
     * Gets another `DataSnapshot` for the location at the specified relative path.
     *
     * Passing a relative path to the `child()` method of a DataSnapshot returns
     * another `DataSnapshot` for the location at the specified relative path. The
     * relative path can either be a simple child name (for example, "ada") or a
     * deeper, slash-separated path (for example, "ada/name/first"). If the child
     * location has no data, an empty `DataSnapshot` (that is, a `DataSnapshot`
     * whose value is `null`) is returned.
     *
     * @param path - A relative path to the location of child data.
     */ child(path) {
        const childPath = new Path(path);
        const childRef = child(this.ref, path);
        return new DataSnapshot(this._node.getChild(childPath), childRef, PRIORITY_INDEX);
    }
    /**
     * Returns true if this `DataSnapshot` contains any data. It is slightly more
     * efficient than using `snapshot.val() !== null`.
     */ exists() {
        return !this._node.isEmpty();
    }
    /**
     * Exports the entire contents of the DataSnapshot as a JavaScript object.
     *
     * The `exportVal()` method is similar to `val()`, except priority information
     * is included (if available), making it suitable for backing up your data.
     *
     * @returns The DataSnapshot's contents as a JavaScript value (Object,
     *   Array, string, number, boolean, or `null`).
     */ // eslint-disable-next-line @typescript-eslint/no-explicit-any
    exportVal() {
        return this._node.val(true);
    }
    /**
     * Enumerates the top-level children in the `DataSnapshot`.
     *
     * Because of the way JavaScript objects work, the ordering of data in the
     * JavaScript object returned by `val()` is not guaranteed to match the
     * ordering on the server nor the ordering of `onChildAdded()` events. That is
     * where `forEach()` comes in handy. It guarantees the children of a
     * `DataSnapshot` will be iterated in their query order.
     *
     * If no explicit `orderBy*()` method is used, results are returned
     * ordered by key (unless priorities are used, in which case, results are
     * returned by priority).
     *
     * @param action - A function that will be called for each child DataSnapshot.
     * The callback can return true to cancel further enumeration.
     * @returns true if enumeration was canceled due to your callback returning
     * true.
     */ forEach(action) {
        if (this._node.isLeafNode()) return false;
        const childrenNode = this._node;
        // Sanitize the return value to a boolean. ChildrenNode.forEachChild has a weird return type...
        return !!childrenNode.forEachChild(this._index, (key, node)=>{
            return action(new DataSnapshot(node, child(this.ref, key), PRIORITY_INDEX));
        });
    }
    /**
     * Returns true if the specified child path has (non-null) data.
     *
     * @param path - A relative path to the location of a potential child.
     * @returns `true` if data exists at the specified child path; else
     *  `false`.
     */ hasChild(path) {
        const childPath = new Path(path);
        return !this._node.getChild(childPath).isEmpty();
    }
    /**
     * Returns whether or not the `DataSnapshot` has any non-`null` child
     * properties.
     *
     * You can use `hasChildren()` to determine if a `DataSnapshot` has any
     * children. If it does, you can enumerate them using `forEach()`. If it
     * doesn't, then either this snapshot contains a primitive value (which can be
     * retrieved with `val()`) or it is empty (in which case, `val()` will return
     * `null`).
     *
     * @returns true if this snapshot has any children; else false.
     */ hasChildren() {
        if (this._node.isLeafNode()) return false;
        else return !this._node.isEmpty();
    }
    /**
     * Returns a JSON-serializable representation of this object.
     */ toJSON() {
        return this.exportVal();
    }
    /**
     * Extracts a JavaScript value from a `DataSnapshot`.
     *
     * Depending on the data in a `DataSnapshot`, the `val()` method may return a
     * scalar type (string, number, or boolean), an array, or an object. It may
     * also return null, indicating that the `DataSnapshot` is empty (contains no
     * data).
     *
     * @returns The DataSnapshot's contents as a JavaScript value (Object,
     *   Array, string, number, boolean, or `null`).
     */ // eslint-disable-next-line @typescript-eslint/no-explicit-any
    val() {
        return this._node.val();
    }
}
/**
 *
 * Returns a `Reference` representing the location in the Database
 * corresponding to the provided path. If no path is provided, the `Reference`
 * will point to the root of the Database.
 *
 * @param db - The database instance to obtain a reference for.
 * @param path - Optional path representing the location the returned
 *   `Reference` will point. If not provided, the returned `Reference` will
 *   point to the root of the Database.
 * @returns If a path is provided, a `Reference`
 *   pointing to the provided path. Otherwise, a `Reference` pointing to the
 *   root of the Database.
 */ function ref(db, path) {
    db = _util.getModularInstance(db);
    db._checkNotDeleted('ref');
    return path !== undefined ? child(db._root, path) : db._root;
}
/**
 * Returns a `Reference` representing the location in the Database
 * corresponding to the provided Firebase URL.
 *
 * An exception is thrown if the URL is not a valid Firebase Database URL or it
 * has a different domain than the current `Database` instance.
 *
 * Note that all query parameters (`orderBy`, `limitToLast`, etc.) are ignored
 * and are not applied to the returned `Reference`.
 *
 * @param db - The database instance to obtain a reference for.
 * @param url - The Firebase URL at which the returned `Reference` will
 *   point.
 * @returns A `Reference` pointing to the provided
 *   Firebase URL.
 */ function refFromURL(db, url) {
    db = _util.getModularInstance(db);
    db._checkNotDeleted('refFromURL');
    const parsedURL = parseRepoInfo(url, db._repo.repoInfo_.nodeAdmin);
    validateUrl('refFromURL', parsedURL);
    const repoInfo = parsedURL.repoInfo;
    if (!db._repo.repoInfo_.isCustomHost() && repoInfo.host !== db._repo.repoInfo_.host) fatal("refFromURL: Host name does not match the current database: (found " + repoInfo.host + ' but expected ' + db._repo.repoInfo_.host + ')');
    return ref(db, parsedURL.path.toString());
}
/**
 * Gets a `Reference` for the location at the specified relative path.
 *
 * The relative path can either be a simple child name (for example, "ada") or
 * a deeper slash-separated path (for example, "ada/name/first").
 *
 * @param parent - The parent location.
 * @param path - A relative path from this location to the desired child
 *   location.
 * @returns The specified child location.
 */ function child(parent, path) {
    parent = _util.getModularInstance(parent);
    if (pathGetFront(parent._path) === null) validateRootPathString('child', 'path', path, false);
    else validatePathString('child', 'path', path, false);
    return new ReferenceImpl(parent._repo, pathChild(parent._path, path));
}
/**
 * Returns an `OnDisconnect` object - see
 * {@link https://firebase.google.com/docs/database/web/offline-capabilities | Enabling Offline Capabilities in JavaScript}
 * for more information on how to use it.
 *
 * @param ref - The reference to add OnDisconnect triggers for.
 */ function onDisconnect(ref4) {
    ref4 = _util.getModularInstance(ref4);
    return new OnDisconnect(ref4._repo, ref4._path);
}
/**
 * Generates a new child location using a unique key and returns its
 * `Reference`.
 *
 * This is the most common pattern for adding data to a collection of items.
 *
 * If you provide a value to `push()`, the value is written to the
 * generated location. If you don't pass a value, nothing is written to the
 * database and the child remains empty (but you can use the `Reference`
 * elsewhere).
 *
 * The unique keys generated by `push()` are ordered by the current time, so the
 * resulting list of items is chronologically sorted. The keys are also
 * designed to be unguessable (they contain 72 random bits of entropy).
 *
 * See {@link https://firebase.google.com/docs/database/web/lists-of-data#append_to_a_list_of_data | Append to a list of data}
 * </br>See {@link ttps://firebase.googleblog.com/2015/02/the-2120-ways-to-ensure-unique_68.html | The 2^120 Ways to Ensure Unique Identifiers}
 *
 * @param parent - The parent location.
 * @param value - Optional value to be written at the generated location.
 * @returns Combined `Promise` and `Reference`; resolves when write is complete,
 * but can be used immediately as the `Reference` to the child location.
 */ function push(parent, value) {
    parent = _util.getModularInstance(parent);
    validateWritablePath('push', parent._path);
    validateFirebaseDataArg('push', value, parent._path, true);
    const now = repoServerTime(parent._repo);
    const name10 = nextPushId(now);
    // push() returns a ThennableReference whose promise is fulfilled with a
    // regular Reference. We use child() to create handles to two different
    // references. The first is turned into a ThennableReference below by adding
    // then() and catch() methods and is used as the return value of push(). The
    // second remains a regular Reference and is used as the fulfilled value of
    // the first ThennableReference.
    const thennablePushRef = child(parent, name10);
    const pushRef = child(parent, name10);
    let promise;
    if (value != null) promise = set(pushRef, value).then(()=>pushRef
    );
    else promise = Promise.resolve(pushRef);
    thennablePushRef.then = promise.then.bind(promise);
    thennablePushRef.catch = promise.then.bind(promise, undefined);
    return thennablePushRef;
}
/**
 * Removes the data at this Database location.
 *
 * Any data at child locations will also be deleted.
 *
 * The effect of the remove will be visible immediately and the corresponding
 * event 'value' will be triggered. Synchronization of the remove to the
 * Firebase servers will also be started, and the returned Promise will resolve
 * when complete. If provided, the onComplete callback will be called
 * asynchronously after synchronization has finished.
 *
 * @param ref - The location to remove.
 * @returns Resolves when remove on server is complete.
 */ function remove(ref5) {
    validateWritablePath('remove', ref5._path);
    return set(ref5, null);
}
/**
 * Writes data to this Database location.
 *
 * This will overwrite any data at this location and all child locations.
 *
 * The effect of the write will be visible immediately, and the corresponding
 * events ("value", "child_added", etc.) will be triggered. Synchronization of
 * the data to the Firebase servers will also be started, and the returned
 * Promise will resolve when complete. If provided, the `onComplete` callback
 * will be called asynchronously after synchronization has finished.
 *
 * Passing `null` for the new value is equivalent to calling `remove()`; namely,
 * all data at this location and all child locations will be deleted.
 *
 * `set()` will remove any priority stored at this location, so if priority is
 * meant to be preserved, you need to use `setWithPriority()` instead.
 *
 * Note that modifying data with `set()` will cancel any pending transactions
 * at that location, so extreme care should be taken if mixing `set()` and
 * `transaction()` to modify the same data.
 *
 * A single `set()` will generate a single "value" event at the location where
 * the `set()` was performed.
 *
 * @param ref - The location to write to.
 * @param value - The value to be written (string, number, boolean, object,
 *   array, or null).
 * @returns Resolves when write to server is complete.
 */ function set(ref6, value) {
    ref6 = _util.getModularInstance(ref6);
    validateWritablePath('set', ref6._path);
    validateFirebaseDataArg('set', value, ref6._path, false);
    const deferred = new _util.Deferred();
    repoSetWithPriority(ref6._repo, ref6._path, value, /*priority=*/ null, deferred.wrapCallback(()=>{
    }));
    return deferred.promise;
}
/**
 * Sets a priority for the data at this Database location.
 *
 * Applications need not use priority but can order collections by
 * ordinary properties (see
 * {@link https://firebase.google.com/docs/database/web/lists-of-data#sorting_and_filtering_data | Sorting and filtering data}
 * ).
 *
 * @param ref - The location to write to.
 * @param priority - The priority to be written (string, number, or null).
 * @returns Resolves when write to server is complete.
 */ function setPriority(ref7, priority) {
    ref7 = _util.getModularInstance(ref7);
    validateWritablePath('setPriority', ref7._path);
    validatePriority('setPriority', priority, false);
    const deferred = new _util.Deferred();
    repoSetWithPriority(ref7._repo, pathChild(ref7._path, '.priority'), priority, null, deferred.wrapCallback(()=>{
    }));
    return deferred.promise;
}
/**
 * Writes data the Database location. Like `set()` but also specifies the
 * priority for that data.
 *
 * Applications need not use priority but can order collections by
 * ordinary properties (see
 * {@link https://firebase.google.com/docs/database/web/lists-of-data#sorting_and_filtering_data | Sorting and filtering data}
 * ).
 *
 * @param ref - The location to write to.
 * @param value - The value to be written (string, number, boolean, object,
 *   array, or null).
 * @param priority - The priority to be written (string, number, or null).
 * @returns Resolves when write to server is complete.
 */ function setWithPriority(ref8, value, priority) {
    validateWritablePath('setWithPriority', ref8._path);
    validateFirebaseDataArg('setWithPriority', value, ref8._path, false);
    validatePriority('setWithPriority', priority, false);
    if (ref8.key === '.length' || ref8.key === '.keys') throw 'setWithPriority failed: ' + ref8.key + ' is a read-only object.';
    const deferred = new _util.Deferred();
    repoSetWithPriority(ref8._repo, ref8._path, value, priority, deferred.wrapCallback(()=>{
    }));
    return deferred.promise;
}
/**
 * Writes multiple values to the Database at once.
 *
 * The `values` argument contains multiple property-value pairs that will be
 * written to the Database together. Each child property can either be a simple
 * property (for example, "name") or a relative path (for example,
 * "name/first") from the current location to the data to update.
 *
 * As opposed to the `set()` method, `update()` can be use to selectively update
 * only the referenced properties at the current location (instead of replacing
 * all the child properties at the current location).
 *
 * The effect of the write will be visible immediately, and the corresponding
 * events ('value', 'child_added', etc.) will be triggered. Synchronization of
 * the data to the Firebase servers will also be started, and the returned
 * Promise will resolve when complete. If provided, the `onComplete` callback
 * will be called asynchronously after synchronization has finished.
 *
 * A single `update()` will generate a single "value" event at the location
 * where the `update()` was performed, regardless of how many children were
 * modified.
 *
 * Note that modifying data with `update()` will cancel any pending
 * transactions at that location, so extreme care should be taken if mixing
 * `update()` and `transaction()` to modify the same data.
 *
 * Passing `null` to `update()` will remove the data at this location.
 *
 * See
 * {@link https://firebase.googleblog.com/2015/09/introducing-multi-location-updates-and_86.html | Introducing multi-location updates and more}.
 *
 * @param ref - The location to write to.
 * @param values - Object containing multiple values.
 * @returns Resolves when update on server is complete.
 */ function update(ref9, values) {
    validateFirebaseMergeDataArg('update', values, ref9._path, false);
    const deferred = new _util.Deferred();
    repoUpdate(ref9._repo, ref9._path, values, deferred.wrapCallback(()=>{
    }));
    return deferred.promise;
}
/**
 * Gets the most up-to-date result for this query.
 *
 * @param query - The query to run.
 * @returns A `Promise` which resolves to the resulting DataSnapshot if a value is
 * available, or rejects if the client is unable to return a value (e.g., if the
 * server is unreachable and there is nothing cached).
 */ function get(query34) {
    query34 = _util.getModularInstance(query34);
    return repoGetValue(query34._repo, query34).then((node)=>{
        return new DataSnapshot(node, new ReferenceImpl(query34._repo, query34._path), query34._queryParams.getIndex());
    });
}
/**
 * Represents registration for 'value' events.
 */ class ValueEventRegistration {
    constructor(callbackContext){
        this.callbackContext = callbackContext;
    }
    respondsTo(eventType) {
        return eventType === 'value';
    }
    createEvent(change, query35) {
        const index = query35._queryParams.getIndex();
        return new DataEvent('value', this, new DataSnapshot(change.snapshotNode, new ReferenceImpl(query35._repo, query35._path), index));
    }
    getEventRunner(eventData) {
        if (eventData.getEventType() === 'cancel') return ()=>this.callbackContext.onCancel(eventData.error)
        ;
        else return ()=>this.callbackContext.onValue(eventData.snapshot, null)
        ;
    }
    createCancelEvent(error12, path) {
        if (this.callbackContext.hasCancelCallback) return new CancelEvent(this, error12, path);
        else return null;
    }
    matches(other) {
        if (!(other instanceof ValueEventRegistration)) return false;
        else if (!other.callbackContext || !this.callbackContext) // If no callback specified, we consider it to match any callback.
        return true;
        else return other.callbackContext.matches(this.callbackContext);
    }
    hasAnyCallback() {
        return this.callbackContext !== null;
    }
}
/**
 * Represents the registration of a child_x event.
 */ class ChildEventRegistration {
    constructor(eventType, callbackContext){
        this.eventType = eventType;
        this.callbackContext = callbackContext;
    }
    respondsTo(eventType) {
        let eventToCheck = eventType === 'children_added' ? 'child_added' : eventType;
        eventToCheck = eventToCheck === 'children_removed' ? 'child_removed' : eventToCheck;
        return this.eventType === eventToCheck;
    }
    createCancelEvent(error13, path) {
        if (this.callbackContext.hasCancelCallback) return new CancelEvent(this, error13, path);
        else return null;
    }
    createEvent(change, query36) {
        _util.assert(change.childName != null, 'Child events should have a childName.');
        const childRef = child(new ReferenceImpl(query36._repo, query36._path), change.childName);
        const index = query36._queryParams.getIndex();
        return new DataEvent(change.type, this, new DataSnapshot(change.snapshotNode, childRef, index), change.prevName);
    }
    getEventRunner(eventData) {
        if (eventData.getEventType() === 'cancel') return ()=>this.callbackContext.onCancel(eventData.error)
        ;
        else return ()=>this.callbackContext.onValue(eventData.snapshot, eventData.prevName)
        ;
    }
    matches(other) {
        if (other instanceof ChildEventRegistration) return this.eventType === other.eventType && (!this.callbackContext || !other.callbackContext || this.callbackContext.matches(other.callbackContext));
        return false;
    }
    hasAnyCallback() {
        return !!this.callbackContext;
    }
}
function addEventListener(query37, eventType, callback, cancelCallbackOrListenOptions, options) {
    let cancelCallback;
    if (typeof cancelCallbackOrListenOptions === 'object') {
        cancelCallback = undefined;
        options = cancelCallbackOrListenOptions;
    }
    if (typeof cancelCallbackOrListenOptions === 'function') cancelCallback = cancelCallbackOrListenOptions;
    if (options && options.onlyOnce) {
        const userCallback = callback;
        const onceCallback = (dataSnapshot, previousChildName)=>{
            repoRemoveEventCallbackForQuery(query37._repo, query37, container);
            userCallback(dataSnapshot, previousChildName);
        };
        onceCallback.userCallback = callback.userCallback;
        onceCallback.context = callback.context;
        callback = onceCallback;
    }
    const callbackContext = new CallbackContext(callback, cancelCallback || undefined);
    const container = eventType === 'value' ? new ValueEventRegistration(callbackContext) : new ChildEventRegistration(eventType, callbackContext);
    repoAddEventCallbackForQuery(query37._repo, query37, container);
    return ()=>repoRemoveEventCallbackForQuery(query37._repo, query37, container)
    ;
}
function onValue(query38, callback, cancelCallbackOrListenOptions, options) {
    return addEventListener(query38, 'value', callback, cancelCallbackOrListenOptions, options);
}
function onChildAdded(query39, callback, cancelCallbackOrListenOptions, options) {
    return addEventListener(query39, 'child_added', callback, cancelCallbackOrListenOptions, options);
}
function onChildChanged(query40, callback, cancelCallbackOrListenOptions, options) {
    return addEventListener(query40, 'child_changed', callback, cancelCallbackOrListenOptions, options);
}
function onChildMoved(query41, callback, cancelCallbackOrListenOptions, options) {
    return addEventListener(query41, 'child_moved', callback, cancelCallbackOrListenOptions, options);
}
function onChildRemoved(query42, callback, cancelCallbackOrListenOptions, options) {
    return addEventListener(query42, 'child_removed', callback, cancelCallbackOrListenOptions, options);
}
/**
 * Detaches a callback previously attached with `on()`.
 *
 * Detach a callback previously attached with `on()`. Note that if `on()` was
 * called multiple times with the same eventType and callback, the callback
 * will be called multiple times for each event, and `off()` must be called
 * multiple times to remove the callback. Calling `off()` on a parent listener
 * will not automatically remove listeners registered on child nodes, `off()`
 * must also be called on any child listeners to remove the callback.
 *
 * If a callback is not specified, all callbacks for the specified eventType
 * will be removed. Similarly, if no eventType is specified, all callbacks
 * for the `Reference` will be removed.
 *
 * Individual listeners can also be removed by invoking their unsubscribe
 * callbacks.
 *
 * @param query - The query that the listener was registered with.
 * @param eventType - One of the following strings: "value", "child_added",
 * "child_changed", "child_removed", or "child_moved." If omitted, all callbacks
 * for the `Reference` will be removed.
 * @param callback - The callback function that was passed to `on()` or
 * `undefined` to remove all callbacks.
 */ function off(query43, eventType, callback) {
    let container = null;
    const expCallback = callback ? new CallbackContext(callback) : null;
    if (eventType === 'value') container = new ValueEventRegistration(expCallback);
    else if (eventType) container = new ChildEventRegistration(eventType, expCallback);
    repoRemoveEventCallbackForQuery(query43._repo, query43, container);
}
/**
 * A `QueryConstraint` is used to narrow the set of documents returned by a
 * Database query. `QueryConstraint`s are created by invoking {@link endAt},
 * {@link endBefore}, {@link startAt}, {@link startAfter}, {@link
 * limitToFirst}, {@link limitToLast}, {@link orderByChild},
 * {@link orderByChild}, {@link orderByKey} , {@link orderByPriority} ,
 * {@link orderByValue}  or {@link equalTo} and
 * can then be passed to {@link query} to create a new query instance that
 * also contains this `QueryConstraint`.
 */ class QueryConstraint {
}
class QueryEndAtConstraint extends QueryConstraint {
    constructor(_value, _key){
        super();
        this._value = _value;
        this._key = _key;
    }
    _apply(query44) {
        validateFirebaseDataArg('endAt', this._value, query44._path, true);
        const newParams = queryParamsEndAt(query44._queryParams, this._value, this._key);
        validateLimit(newParams);
        validateQueryEndpoints(newParams);
        if (query44._queryParams.hasEnd()) throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");
        return new QueryImpl(query44._repo, query44._path, newParams, query44._orderByCalled);
    }
}
/**
 * Creates a `QueryConstraint` with the specified ending point.
 *
 * Using `startAt()`, `startAfter()`, `endBefore()`, `endAt()` and `equalTo()`
 * allows you to choose arbitrary starting and ending points for your queries.
 *
 * The ending point is inclusive, so children with exactly the specified value
 * will be included in the query. The optional key argument can be used to
 * further limit the range of the query. If it is specified, then children that
 * have exactly the specified value must also have a key name less than or equal
 * to the specified key.
 *
 * You can read more about `endAt()` in
 * {@link https://firebase.google.com/docs/database/web/lists-of-data#filtering_data | Filtering data}.
 *
 * @param value - The value to end at. The argument type depends on which
 * `orderBy*()` function was used in this query. Specify a value that matches
 * the `orderBy*()` type. When used in combination with `orderByKey()`, the
 * value must be a string.
 * @param key - The child key to end at, among the children with the previously
 * specified priority. This argument is only allowed if ordering by child,
 * value, or priority.
 */ function endAt(value, key) {
    validateKey('endAt', 'key', key, true);
    return new QueryEndAtConstraint(value, key);
}
class QueryEndBeforeConstraint extends QueryConstraint {
    constructor(_value, _key){
        super();
        this._value = _value;
        this._key = _key;
    }
    _apply(query45) {
        validateFirebaseDataArg('endBefore', this._value, query45._path, false);
        const newParams = queryParamsEndBefore(query45._queryParams, this._value, this._key);
        validateLimit(newParams);
        validateQueryEndpoints(newParams);
        if (query45._queryParams.hasEnd()) throw new Error("endBefore: Starting point was already set (by another call to endAt, endBefore or equalTo).");
        return new QueryImpl(query45._repo, query45._path, newParams, query45._orderByCalled);
    }
}
/**
 * Creates a `QueryConstraint` with the specified ending point (exclusive).
 *
 * Using `startAt()`, `startAfter()`, `endBefore()`, `endAt()` and `equalTo()`
 * allows you to choose arbitrary starting and ending points for your queries.
 *
 * The ending point is exclusive. If only a value is provided, children
 * with a value less than the specified value will be included in the query.
 * If a key is specified, then children must have a value lesss than or equal
 * to the specified value and a a key name less than the specified key.
 *
 * @param value - The value to end before. The argument type depends on which
 * `orderBy*()` function was used in this query. Specify a value that matches
 * the `orderBy*()` type. When used in combination with `orderByKey()`, the
 * value must be a string.
 * @param key - The child key to end before, among the children with the
 * previously specified priority. This argument is only allowed if ordering by
 * child, value, or priority.
 */ function endBefore(value, key) {
    validateKey('endBefore', 'key', key, true);
    return new QueryEndBeforeConstraint(value, key);
}
class QueryStartAtConstraint extends QueryConstraint {
    constructor(_value, _key){
        super();
        this._value = _value;
        this._key = _key;
    }
    _apply(query46) {
        validateFirebaseDataArg('startAt', this._value, query46._path, true);
        const newParams = queryParamsStartAt(query46._queryParams, this._value, this._key);
        validateLimit(newParams);
        validateQueryEndpoints(newParams);
        if (query46._queryParams.hasStart()) throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");
        return new QueryImpl(query46._repo, query46._path, newParams, query46._orderByCalled);
    }
}
/**
 * Creates a `QueryConstraint` with the specified starting point.
 *
 * Using `startAt()`, `startAfter()`, `endBefore()`, `endAt()` and `equalTo()`
 * allows you to choose arbitrary starting and ending points for your queries.
 *
 * The starting point is inclusive, so children with exactly the specified value
 * will be included in the query. The optional key argument can be used to
 * further limit the range of the query. If it is specified, then children that
 * have exactly the specified value must also have a key name greater than or
 * equal to the specified key.
 *
 * You can read more about `startAt()` in
 * {@link https://firebase.google.com/docs/database/web/lists-of-data#filtering_data | Filtering data}.
 *
 * @param value - The value to start at. The argument type depends on which
 * `orderBy*()` function was used in this query. Specify a value that matches
 * the `orderBy*()` type. When used in combination with `orderByKey()`, the
 * value must be a string.
 * @param key - The child key to start at. This argument is only allowed if
 * ordering by child, value, or priority.
 */ function startAt(value = null, key) {
    validateKey('startAt', 'key', key, true);
    return new QueryStartAtConstraint(value, key);
}
class QueryStartAfterConstraint extends QueryConstraint {
    constructor(_value, _key){
        super();
        this._value = _value;
        this._key = _key;
    }
    _apply(query47) {
        validateFirebaseDataArg('startAfter', this._value, query47._path, false);
        const newParams = queryParamsStartAfter(query47._queryParams, this._value, this._key);
        validateLimit(newParams);
        validateQueryEndpoints(newParams);
        if (query47._queryParams.hasStart()) throw new Error("startAfter: Starting point was already set (by another call to startAt, startAfter, or equalTo).");
        return new QueryImpl(query47._repo, query47._path, newParams, query47._orderByCalled);
    }
}
/**
 * Creates a `QueryConstraint` with the specified starting point (exclusive).
 *
 * Using `startAt()`, `startAfter()`, `endBefore()`, `endAt()` and `equalTo()`
 * allows you to choose arbitrary starting and ending points for your queries.
 *
 * The starting point is exclusive. If only a value is provided, children
 * with a value greater than the specified value will be included in the query.
 * If a key is specified, then children must have a value greater than or equal
 * to the specified value and a a key name greater than the specified key.
 *
 * @param value - The value to start after. The argument type depends on which
 * `orderBy*()` function was used in this query. Specify a value that matches
 * the `orderBy*()` type. When used in combination with `orderByKey()`, the
 * value must be a string.
 * @param key - The child key to start after. This argument is only allowed if
 * ordering by child, value, or priority.
 */ function startAfter(value, key) {
    validateKey('startAfter', 'key', key, true);
    return new QueryStartAfterConstraint(value, key);
}
class QueryLimitToFirstConstraint extends QueryConstraint {
    constructor(_limit){
        super();
        this._limit = _limit;
    }
    _apply(query48) {
        if (query48._queryParams.hasLimit()) throw new Error("limitToFirst: Limit was already set (by another call to limitToFirst or limitToLast).");
        return new QueryImpl(query48._repo, query48._path, queryParamsLimitToFirst(query48._queryParams, this._limit), query48._orderByCalled);
    }
}
/**
 * Creates a new `QueryConstraint` that if limited to the first specific number
 * of children.
 *
 * The `limitToFirst()` method is used to set a maximum number of children to be
 * synced for a given callback. If we set a limit of 100, we will initially only
 * receive up to 100 `child_added` events. If we have fewer than 100 messages
 * stored in our Database, a `child_added` event will fire for each message.
 * However, if we have over 100 messages, we will only receive a `child_added`
 * event for the first 100 ordered messages. As items change, we will receive
 * `child_removed` events for each item that drops out of the active list so
 * that the total number stays at 100.
 *
 * You can read more about `limitToFirst()` in
 * {@link https://firebase.google.com/docs/database/web/lists-of-data#filtering_data | Filtering data}.
 *
 * @param limit - The maximum number of nodes to include in this query.
 */ function limitToFirst(limit) {
    if (typeof limit !== 'number' || Math.floor(limit) !== limit || limit <= 0) throw new Error('limitToFirst: First argument must be a positive integer.');
    return new QueryLimitToFirstConstraint(limit);
}
class QueryLimitToLastConstraint extends QueryConstraint {
    constructor(_limit){
        super();
        this._limit = _limit;
    }
    _apply(query49) {
        if (query49._queryParams.hasLimit()) throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");
        return new QueryImpl(query49._repo, query49._path, queryParamsLimitToLast(query49._queryParams, this._limit), query49._orderByCalled);
    }
}
/**
 * Creates a new `QueryConstraint` that is limited to return only the last
 * specified number of children.
 *
 * The `limitToLast()` method is used to set a maximum number of children to be
 * synced for a given callback. If we set a limit of 100, we will initially only
 * receive up to 100 `child_added` events. If we have fewer than 100 messages
 * stored in our Database, a `child_added` event will fire for each message.
 * However, if we have over 100 messages, we will only receive a `child_added`
 * event for the last 100 ordered messages. As items change, we will receive
 * `child_removed` events for each item that drops out of the active list so
 * that the total number stays at 100.
 *
 * You can read more about `limitToLast()` in
 * {@link https://firebase.google.com/docs/database/web/lists-of-data#filtering_data | Filtering data}.
 *
 * @param limit - The maximum number of nodes to include in this query.
 */ function limitToLast(limit) {
    if (typeof limit !== 'number' || Math.floor(limit) !== limit || limit <= 0) throw new Error('limitToLast: First argument must be a positive integer.');
    return new QueryLimitToLastConstraint(limit);
}
class QueryOrderByChildConstraint extends QueryConstraint {
    constructor(_path){
        super();
        this._path = _path;
    }
    _apply(query50) {
        validateNoPreviousOrderByCall(query50, 'orderByChild');
        const parsedPath = new Path(this._path);
        if (pathIsEmpty(parsedPath)) throw new Error('orderByChild: cannot pass in empty path. Use orderByValue() instead.');
        const index = new PathIndex(parsedPath);
        const newParams = queryParamsOrderBy(query50._queryParams, index);
        validateQueryEndpoints(newParams);
        return new QueryImpl(query50._repo, query50._path, newParams, /*orderByCalled=*/ true);
    }
}
/**
 * Creates a new `QueryConstraint` that orders by the specified child key.
 *
 * Queries can only order by one key at a time. Calling `orderByChild()`
 * multiple times on the same query is an error.
 *
 * Firebase queries allow you to order your data by any child key on the fly.
 * However, if you know in advance what your indexes will be, you can define
 * them via the .indexOn rule in your Security Rules for better performance. See
 * the{@link https://firebase.google.com/docs/database/security/indexing-data}
 * rule for more information.
 *
 * You can read more about `orderByChild()` in
 * {@link https://firebase.google.com/docs/database/web/lists-of-data#sort_data | Sort data}.
 *
 * @param path - The path to order by.
 */ function orderByChild(path) {
    if (path === '$key') throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');
    else if (path === '$priority') throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');
    else if (path === '$value') throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');
    validatePathString('orderByChild', 'path', path, false);
    return new QueryOrderByChildConstraint(path);
}
class QueryOrderByKeyConstraint extends QueryConstraint {
    _apply(query51) {
        validateNoPreviousOrderByCall(query51, 'orderByKey');
        const newParams = queryParamsOrderBy(query51._queryParams, KEY_INDEX);
        validateQueryEndpoints(newParams);
        return new QueryImpl(query51._repo, query51._path, newParams, /*orderByCalled=*/ true);
    }
}
/**
 * Creates a new `QueryConstraint` that orders by the key.
 *
 * Sorts the results of a query by their (ascending) key values.
 *
 * You can read more about `orderByKey()` in
 * {@link https://firebase.google.com/docs/database/web/lists-of-data#sort_data | Sort data}.
 */ function orderByKey() {
    return new QueryOrderByKeyConstraint();
}
class QueryOrderByPriorityConstraint extends QueryConstraint {
    _apply(query52) {
        validateNoPreviousOrderByCall(query52, 'orderByPriority');
        const newParams = queryParamsOrderBy(query52._queryParams, PRIORITY_INDEX);
        validateQueryEndpoints(newParams);
        return new QueryImpl(query52._repo, query52._path, newParams, /*orderByCalled=*/ true);
    }
}
/**
 * Creates a new `QueryConstraint` that orders by priority.
 *
 * Applications need not use priority but can order collections by
 * ordinary properties (see
 * {@link https://firebase.google.com/docs/database/web/lists-of-data#sort_data | Sort data}
 * for alternatives to priority.
 */ function orderByPriority() {
    return new QueryOrderByPriorityConstraint();
}
class QueryOrderByValueConstraint extends QueryConstraint {
    _apply(query53) {
        validateNoPreviousOrderByCall(query53, 'orderByValue');
        const newParams = queryParamsOrderBy(query53._queryParams, VALUE_INDEX);
        validateQueryEndpoints(newParams);
        return new QueryImpl(query53._repo, query53._path, newParams, /*orderByCalled=*/ true);
    }
}
/**
 * Creates a new `QueryConstraint` that orders by value.
 *
 * If the children of a query are all scalar values (string, number, or
 * boolean), you can order the results by their (ascending) values.
 *
 * You can read more about `orderByValue()` in
 * {@link https://firebase.google.com/docs/database/web/lists-of-data#sort_data | Sort data}.
 */ function orderByValue() {
    return new QueryOrderByValueConstraint();
}
class QueryEqualToValueConstraint extends QueryConstraint {
    constructor(_value, _key){
        super();
        this._value = _value;
        this._key = _key;
    }
    _apply(query54) {
        validateFirebaseDataArg('equalTo', this._value, query54._path, false);
        if (query54._queryParams.hasStart()) throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");
        if (query54._queryParams.hasEnd()) throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");
        return new QueryEndAtConstraint(this._value, this._key)._apply(new QueryStartAtConstraint(this._value, this._key)._apply(query54));
    }
}
/**
 * Creates a `QueryConstraint` that includes children that match the specified
 * value.
 *
 * Using `startAt()`, `startAfter()`, `endBefore()`, `endAt()` and `equalTo()`
 * allows you to choose arbitrary starting and ending points for your queries.
 *
 * The optional key argument can be used to further limit the range of the
 * query. If it is specified, then children that have exactly the specified
 * value must also have exactly the specified key as their key name. This can be
 * used to filter result sets with many matches for the same value.
 *
 * You can read more about `equalTo()` in
 * {@link https://firebase.google.com/docs/database/web/lists-of-data#filtering_data | Filtering data}.
 *
 * @param value - The value to match for. The argument type depends on which
 * `orderBy*()` function was used in this query. Specify a value that matches
 * the `orderBy*()` type. When used in combination with `orderByKey()`, the
 * value must be a string.
 * @param key - The child key to start at, among the children with the
 * previously specified priority. This argument is only allowed if ordering by
 * child, value, or priority.
 */ function equalTo(value, key) {
    validateKey('equalTo', 'key', key, true);
    return new QueryEqualToValueConstraint(value, key);
}
/**
 * Creates a new immutable instance of `Query` that is extended to also include
 * additional query constraints.
 *
 * @param query - The Query instance to use as a base for the new constraints.
 * @param queryConstraints - The list of `QueryConstraint`s to apply.
 * @throws if any of the provided query constraints cannot be combined with the
 * existing or new constraints.
 */ function query(query55, ...queryConstraints) {
    let queryImpl = _util.getModularInstance(query55);
    for (const constraint of queryConstraints)queryImpl = constraint._apply(queryImpl);
    return queryImpl;
}
/**
 * Define reference constructor in various modules
 *
 * We are doing this here to avoid several circular
 * dependency issues
 */ syncPointSetReferenceConstructor(ReferenceImpl);
syncTreeSetReferenceConstructor(ReferenceImpl);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * This variable is also defined in the firebase Node.js Admin SDK. Before
 * modifying this definition, consult the definition in:
 *
 * https://github.com/firebase/firebase-admin-node
 *
 * and make sure the two are consistent.
 */ const FIREBASE_DATABASE_EMULATOR_HOST_VAR = 'FIREBASE_DATABASE_EMULATOR_HOST';
/**
 * Creates and caches `Repo` instances.
 */ const repos = {
};
/**
 * If true, any new `Repo` will be created to use `ReadonlyRestClient` (for testing purposes).
 */ let useRestClient = false;
/**
 * Update an existing `Repo` in place to point to a new host/port.
 */ function repoManagerApplyEmulatorSettings(repo, host, port, tokenProvider) {
    repo.repoInfo_ = new RepoInfo(`${host}:${port}`, /* secure= */ false, repo.repoInfo_.namespace, repo.repoInfo_.webSocketOnly, repo.repoInfo_.nodeAdmin, repo.repoInfo_.persistenceKey, repo.repoInfo_.includeNamespaceInQueryParams);
    if (tokenProvider) repo.authTokenProvider_ = tokenProvider;
}
/**
 * This function should only ever be called to CREATE a new database instance.
 * @internal
 */ function repoManagerDatabaseFromApp(app, authProvider, appCheckProvider, url, nodeAdmin) {
    let dbUrl = url || app.options.databaseURL;
    if (dbUrl === undefined) {
        if (!app.options.projectId) fatal("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp().");
        log('Using default host for project ', app.options.projectId);
        dbUrl = `${app.options.projectId}-default-rtdb.firebaseio.com`;
    }
    let parsedUrl = parseRepoInfo(dbUrl, nodeAdmin);
    let repoInfo = parsedUrl.repoInfo;
    let isEmulator;
    let dbEmulatorHost = undefined;
    if (typeof process !== 'undefined') dbEmulatorHost = process.env[FIREBASE_DATABASE_EMULATOR_HOST_VAR];
    if (dbEmulatorHost) {
        isEmulator = true;
        dbUrl = `http://${dbEmulatorHost}?ns=${repoInfo.namespace}`;
        parsedUrl = parseRepoInfo(dbUrl, nodeAdmin);
        repoInfo = parsedUrl.repoInfo;
    } else isEmulator = !parsedUrl.repoInfo.secure;
    const authTokenProvider = nodeAdmin && isEmulator ? new EmulatorTokenProvider(EmulatorTokenProvider.OWNER) : new FirebaseAuthTokenProvider(app.name, app.options, authProvider);
    validateUrl('Invalid Firebase Database URL', parsedUrl);
    if (!pathIsEmpty(parsedUrl.path)) fatal("Database URL must point to the root of a Firebase Database (not including a child path).");
    const repo = repoManagerCreateRepo(repoInfo, app, authTokenProvider, new AppCheckTokenProvider(app.name, appCheckProvider));
    return new Database(repo, app);
}
/**
 * Remove the repo and make sure it is disconnected.
 *
 */ function repoManagerDeleteRepo(repo, appName) {
    const appRepos = repos[appName];
    // This should never happen...
    if (!appRepos || appRepos[repo.key] !== repo) fatal(`Database ${appName}(${repo.repoInfo_}) has already been deleted.`);
    repoInterrupt(repo);
    delete appRepos[repo.key];
}
/**
 * Ensures a repo doesn't already exist and then creates one using the
 * provided app.
 *
 * @param repoInfo - The metadata about the Repo
 * @returns The Repo object for the specified server / repoName.
 */ function repoManagerCreateRepo(repoInfo, app, authTokenProvider, appCheckProvider) {
    let appRepos = repos[app.name];
    if (!appRepos) {
        appRepos = {
        };
        repos[app.name] = appRepos;
    }
    let repo = appRepos[repoInfo.toURLString()];
    if (repo) fatal('Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.');
    repo = new Repo(repoInfo, useRestClient, authTokenProvider, appCheckProvider);
    appRepos[repoInfo.toURLString()] = repo;
    return repo;
}
/**
 * Forces us to use ReadonlyRestClient instead of PersistentConnection for new Repos.
 */ function repoManagerForceRestClient(forceRestClient1) {
    useRestClient = forceRestClient1;
}
/**
 * Class representing a Firebase Realtime Database.
 */ class Database {
    /** @hideconstructor */ constructor(_repoInternal, /** The {@link @firebase/app#FirebaseApp} associated with this Realtime Database instance. */ app){
        this._repoInternal = _repoInternal;
        this.app = app;
        /** Represents a `Database` instance. */ this['type'] = 'database';
        /** Track if the instance has been used (root or repo accessed) */ this._instanceStarted = false;
    }
    get _repo() {
        if (!this._instanceStarted) {
            repoStart(this._repoInternal, this.app.options.appId, this.app.options['databaseAuthVariableOverride']);
            this._instanceStarted = true;
        }
        return this._repoInternal;
    }
    get _root() {
        if (!this._rootInternal) this._rootInternal = new ReferenceImpl(this._repo, newEmptyPath());
        return this._rootInternal;
    }
    _delete() {
        if (this._rootInternal !== null) {
            repoManagerDeleteRepo(this._repo, this.app.name);
            this._repoInternal = null;
            this._rootInternal = null;
        }
        return Promise.resolve();
    }
    _checkNotDeleted(apiName) {
        if (this._rootInternal === null) fatal('Cannot call ' + apiName + ' on a deleted database.');
    }
}
/**
 * Returns the instance of the Realtime Database SDK that is associated
 * with the provided {@link @firebase/app#FirebaseApp}. Initializes a new instance with
 * with default settings if no instance exists or if the existing instance uses
 * a custom database URL.
 *
 * @param app - The {@link @firebase/app#FirebaseApp} instance that the returned Realtime
 * Database instance is associated with.
 * @param url - The URL of the Realtime Database instance to connect to. If not
 * provided, the SDK connects to the default instance of the Firebase App.
 * @returns The `Database` instance of the provided app.
 */ function getDatabase(app = _app.getApp(), url) {
    return _app._getProvider(app, 'database').getImmediate({
        identifier: url
    });
}
/**
 * Modify the provided instance to communicate with the Realtime Database
 * emulator.
 *
 * <p>Note: This method must be called before performing any other operation.
 *
 * @param db - The instance to modify.
 * @param host - The emulator host (ex: localhost)
 * @param port - The emulator port (ex: 8080)
 * @param options.mockUserToken - the mock auth token to use for unit testing Security Rules
 */ function connectDatabaseEmulator(db, host, port, options = {
}) {
    db = _util.getModularInstance(db);
    db._checkNotDeleted('useEmulator');
    if (db._instanceStarted) fatal('Cannot call useEmulator() after instance has already been initialized.');
    const repo = db._repoInternal;
    let tokenProvider = undefined;
    if (repo.repoInfo_.nodeAdmin) {
        if (options.mockUserToken) fatal('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".');
        tokenProvider = new EmulatorTokenProvider(EmulatorTokenProvider.OWNER);
    } else if (options.mockUserToken) {
        const token = typeof options.mockUserToken === 'string' ? options.mockUserToken : _util.createMockUserToken(options.mockUserToken, db.app.options.projectId);
        tokenProvider = new EmulatorTokenProvider(token);
    }
    // Modify the repo to apply emulator settings
    repoManagerApplyEmulatorSettings(repo, host, port, tokenProvider);
}
/**
 * Disconnects from the server (all Database operations will be completed
 * offline).
 *
 * The client automatically maintains a persistent connection to the Database
 * server, which will remain active indefinitely and reconnect when
 * disconnected. However, the `goOffline()` and `goOnline()` methods may be used
 * to control the client connection in cases where a persistent connection is
 * undesirable.
 *
 * While offline, the client will no longer receive data updates from the
 * Database. However, all Database operations performed locally will continue to
 * immediately fire events, allowing your application to continue behaving
 * normally. Additionally, each operation performed locally will automatically
 * be queued and retried upon reconnection to the Database server.
 *
 * To reconnect to the Database and begin receiving remote events, see
 * `goOnline()`.
 *
 * @param db - The instance to disconnect.
 */ function goOffline(db) {
    db = _util.getModularInstance(db);
    db._checkNotDeleted('goOffline');
    repoInterrupt(db._repo);
}
/**
 * Reconnects to the server and synchronizes the offline Database state
 * with the server state.
 *
 * This method should be used after disabling the active connection with
 * `goOffline()`. Once reconnected, the client will transmit the proper data
 * and fire the appropriate events so that your client "catches up"
 * automatically.
 *
 * @param db - The instance to reconnect.
 */ function goOnline(db) {
    db = _util.getModularInstance(db);
    db._checkNotDeleted('goOnline');
    repoResume(db._repo);
}
function enableLogging(logger1, persistent) {
    enableLogging$1(logger1, persistent);
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function registerDatabase(variant) {
    setSDKVersion(_app.SDK_VERSION);
    _app._registerComponent(new _component.Component('database', (container, { instanceIdentifier: url  })=>{
        const app = container.getProvider('app').getImmediate();
        const authProvider = container.getProvider('auth-internal');
        const appCheckProvider = container.getProvider('app-check-internal');
        return repoManagerDatabaseFromApp(app, authProvider, appCheckProvider, url);
    }, "PUBLIC" /* PUBLIC */ ).setMultipleInstances(true));
    _app.registerVersion(name, version, variant);
    // BUILD_TARGET will be replaced by values like esm5, esm2017, cjs5, etc during the compilation
    _app.registerVersion(name, version, 'esm2017');
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const SERVER_TIMESTAMP = {
    '.sv': 'timestamp'
};
/**
 * Returns a placeholder value for auto-populating the current timestamp (time
 * since the Unix epoch, in milliseconds) as determined by the Firebase
 * servers.
 */ function serverTimestamp() {
    return SERVER_TIMESTAMP;
}
/**
 * Returns a placeholder value that can be used to atomically increment the
 * current database value by the provided delta.
 *
 * @param delta - the amount to modify the current value atomically.
 * @returns A placeholder value for modifying data atomically server-side.
 */ function increment(delta) {
    return {
        '.sv': {
            'increment': delta
        }
    };
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A type for the resolve value of {@link runTransaction}.
 */ class TransactionResult {
    /** @hideconstructor */ constructor(/** Whether the transaction was successfully committed. */ committed, /** The resulting data snapshot. */ snapshot){
        this.committed = committed;
        this.snapshot = snapshot;
    }
    /** Returns a JSON-serializable representation of this object. */ toJSON() {
        return {
            committed: this.committed,
            snapshot: this.snapshot.toJSON()
        };
    }
}
/**
 * Atomically modifies the data at this location.
 *
 * Atomically modify the data at this location. Unlike a normal `set()`, which
 * just overwrites the data regardless of its previous value, `runTransaction()` is
 * used to modify the existing value to a new value, ensuring there are no
 * conflicts with other clients writing to the same location at the same time.
 *
 * To accomplish this, you pass `runTransaction()` an update function which is
 * used to transform the current value into a new value. If another client
 * writes to the location before your new value is successfully written, your
 * update function will be called again with the new current value, and the
 * write will be retried. This will happen repeatedly until your write succeeds
 * without conflict or you abort the transaction by not returning a value from
 * your update function.
 *
 * Note: Modifying data with `set()` will cancel any pending transactions at
 * that location, so extreme care should be taken if mixing `set()` and
 * `runTransaction()` to update the same data.
 *
 * Note: When using transactions with Security and Firebase Rules in place, be
 * aware that a client needs `.read` access in addition to `.write` access in
 * order to perform a transaction. This is because the client-side nature of
 * transactions requires the client to read the data in order to transactionally
 * update it.
 *
 * @param ref - The location to atomically modify.
 * @param transactionUpdate - A developer-supplied function which will be passed
 * the current data stored at this location (as a JavaScript object). The
 * function should return the new value it would like written (as a JavaScript
 * object). If `undefined` is returned (i.e. you return with no arguments) the
 * transaction will be aborted and the data at this location will not be
 * modified.
 * @param options - An options object to configure transactions.
 * @returns A `Promise` that can optionally be used instead of the `onComplete`
 * callback to handle success and failure.
 */ function runTransaction(ref10, // eslint-disable-next-line @typescript-eslint/no-explicit-any
transactionUpdate, options) {
    var _a;
    ref10 = _util.getModularInstance(ref10);
    validateWritablePath('Reference.transaction', ref10._path);
    if (ref10.key === '.length' || ref10.key === '.keys') throw 'Reference.transaction failed: ' + ref10.key + ' is a read-only object.';
    const applyLocally = (_a = options === null || options === void 0 ? void 0 : options.applyLocally) !== null && _a !== void 0 ? _a : true;
    const deferred = new _util.Deferred();
    const promiseComplete = (error14, committed, node)=>{
        let dataSnapshot = null;
        if (error14) deferred.reject(error14);
        else {
            dataSnapshot = new DataSnapshot(node, new ReferenceImpl(ref10._repo, ref10._path), PRIORITY_INDEX);
            deferred.resolve(new TransactionResult(committed, dataSnapshot));
        }
    };
    // Add a watch to make sure we get server updates.
    const unwatcher = onValue(ref10, ()=>{
    });
    repoStartTransaction(ref10._repo, ref10._path, transactionUpdate, promiseComplete, unwatcher, applyLocally);
    return deferred.promise;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
PersistentConnection.prototype.simpleListen = function(pathString, onComplete) {
    this.sendRequest('q', {
        p: pathString
    }, onComplete);
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
PersistentConnection.prototype.echo = function(data, onEcho) {
    this.sendRequest('echo', {
        d: data
    }, onEcho);
};
/**
 * @internal
 */ const hijackHash = function(newHash) {
    const oldPut = PersistentConnection.prototype.put;
    PersistentConnection.prototype.put = function(pathString, data, onComplete, hash) {
        if (hash !== undefined) hash = newHash();
        oldPut.call(this, pathString, data, onComplete, hash);
    };
    return function() {
        PersistentConnection.prototype.put = oldPut;
    };
};
/**
 * Forces the RepoManager to create Repos that use ReadonlyRestClient instead of PersistentConnection.
 * @internal
 */ const forceRestClient = function(forceRestClient2) {
    repoManagerForceRestClient(forceRestClient2);
};
/**
 * Firebase Realtime Database
 *
 * @packageDocumentation
 */ registerDatabase();

},{"@firebase/app":"3AcPV","@firebase/component":"bi1VB","@firebase/util":"ePiK6","@firebase/logger":"fZmft","process":"d5jf4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3AcPV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FirebaseError", ()=>_util.FirebaseError
);
parcelHelpers.export(exports, "SDK_VERSION", ()=>SDK_VERSION
);
parcelHelpers.export(exports, "_DEFAULT_ENTRY_NAME", ()=>DEFAULT_ENTRY_NAME
);
parcelHelpers.export(exports, "_addComponent", ()=>_addComponent
);
parcelHelpers.export(exports, "_addOrOverwriteComponent", ()=>_addOrOverwriteComponent
);
parcelHelpers.export(exports, "_apps", ()=>_apps
);
parcelHelpers.export(exports, "_clearComponents", ()=>_clearComponents
);
parcelHelpers.export(exports, "_components", ()=>_components
);
parcelHelpers.export(exports, "_getProvider", ()=>_getProvider
);
parcelHelpers.export(exports, "_registerComponent", ()=>_registerComponent
);
parcelHelpers.export(exports, "_removeServiceInstance", ()=>_removeServiceInstance
);
parcelHelpers.export(exports, "deleteApp", ()=>deleteApp
);
parcelHelpers.export(exports, "getApp", ()=>getApp
);
parcelHelpers.export(exports, "getApps", ()=>getApps
);
parcelHelpers.export(exports, "initializeApp", ()=>initializeApp
);
parcelHelpers.export(exports, "onLog", ()=>onLog
);
parcelHelpers.export(exports, "registerVersion", ()=>registerVersion
);
parcelHelpers.export(exports, "setLogLevel", ()=>setLogLevel
);
var _component = require("@firebase/component");
var _logger = require("@firebase/logger");
var _util = require("@firebase/util");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class PlatformLoggerServiceImpl {
    constructor(container){
        this.container = container;
    }
    // In initial implementation, this will be called by installations on
    // auth token refresh, and installations will send this string.
    getPlatformInfoString() {
        const providers = this.container.getProviders();
        // Loop through providers and get library/version pairs from any that are
        // version components.
        return providers.map((provider)=>{
            if (isVersionServiceProvider(provider)) {
                const service = provider.getImmediate();
                return `${service.library}/${service.version}`;
            } else return null;
        }).filter((logString)=>logString
        ).join(' ');
    }
}
/**
 *
 * @param provider check if this provider provides a VersionService
 *
 * NOTE: Using Provider<'app-version'> is a hack to indicate that the provider
 * provides VersionService. The provider is not necessarily a 'app-version'
 * provider.
 */ function isVersionServiceProvider(provider) {
    const component = provider.getComponent();
    return (component === null || component === void 0 ? void 0 : component.type) === "VERSION" /* VERSION */ ;
}
const name$o = "@firebase/app";
const version$1 = "0.7.15";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const logger = new _logger.Logger('@firebase/app');
const name$n = "@firebase/app-compat";
const name$m = "@firebase/analytics-compat";
const name$l = "@firebase/analytics";
const name$k = "@firebase/app-check-compat";
const name$j = "@firebase/app-check";
const name$i = "@firebase/auth";
const name$h = "@firebase/auth-compat";
const name$g = "@firebase/database";
const name$f = "@firebase/database-compat";
const name$e = "@firebase/functions";
const name$d = "@firebase/functions-compat";
const name$c = "@firebase/installations";
const name$b = "@firebase/installations-compat";
const name$a = "@firebase/messaging";
const name$9 = "@firebase/messaging-compat";
const name$8 = "@firebase/performance";
const name$7 = "@firebase/performance-compat";
const name$6 = "@firebase/remote-config";
const name$5 = "@firebase/remote-config-compat";
const name$4 = "@firebase/storage";
const name$3 = "@firebase/storage-compat";
const name$2 = "@firebase/firestore";
const name$1 = "@firebase/firestore-compat";
const name = "firebase";
const version = "9.6.5";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * The default app name
 *
 * @internal
 */ const DEFAULT_ENTRY_NAME = '[DEFAULT]';
const PLATFORM_LOG_STRING = {
    [name$o]: 'fire-core',
    [name$n]: 'fire-core-compat',
    [name$l]: 'fire-analytics',
    [name$m]: 'fire-analytics-compat',
    [name$j]: 'fire-app-check',
    [name$k]: 'fire-app-check-compat',
    [name$i]: 'fire-auth',
    [name$h]: 'fire-auth-compat',
    [name$g]: 'fire-rtdb',
    [name$f]: 'fire-rtdb-compat',
    [name$e]: 'fire-fn',
    [name$d]: 'fire-fn-compat',
    [name$c]: 'fire-iid',
    [name$b]: 'fire-iid-compat',
    [name$a]: 'fire-fcm',
    [name$9]: 'fire-fcm-compat',
    [name$8]: 'fire-perf',
    [name$7]: 'fire-perf-compat',
    [name$6]: 'fire-rc',
    [name$5]: 'fire-rc-compat',
    [name$4]: 'fire-gcs',
    [name$3]: 'fire-gcs-compat',
    [name$2]: 'fire-fst',
    [name$1]: 'fire-fst-compat',
    'fire-js': 'fire-js',
    [name]: 'fire-js-all'
};
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @internal
 */ const _apps = new Map();
/**
 * Registered components.
 *
 * @internal
 */ // eslint-disable-next-line @typescript-eslint/no-explicit-any
const _components = new Map();
/**
 * @param component - the component being added to this app's container
 *
 * @internal
 */ function _addComponent(app, component) {
    try {
        app.container.addComponent(component);
    } catch (e) {
        logger.debug(`Component ${component.name} failed to register with FirebaseApp ${app.name}`, e);
    }
}
/**
 *
 * @internal
 */ function _addOrOverwriteComponent(app, component) {
    app.container.addOrOverwriteComponent(component);
}
/**
 *
 * @param component - the component to register
 * @returns whether or not the component is registered successfully
 *
 * @internal
 */ function _registerComponent(component) {
    const componentName = component.name;
    if (_components.has(componentName)) {
        logger.debug(`There were multiple attempts to register component ${componentName}.`);
        return false;
    }
    _components.set(componentName, component);
    // add the component to existing app instances
    for (const app of _apps.values())_addComponent(app, component);
    return true;
}
/**
 *
 * @param app - FirebaseApp instance
 * @param name - service name
 *
 * @returns the provider for the service with the matching name
 *
 * @internal
 */ function _getProvider(app, name1) {
    return app.container.getProvider(name1);
}
/**
 *
 * @param app - FirebaseApp instance
 * @param name - service name
 * @param instanceIdentifier - service instance identifier in case the service supports multiple instances
 *
 * @internal
 */ function _removeServiceInstance(app, name2, instanceIdentifier = DEFAULT_ENTRY_NAME) {
    _getProvider(app, name2).clearInstance(instanceIdentifier);
}
/**
 * Test only
 *
 * @internal
 */ function _clearComponents() {
    _components.clear();
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const ERRORS = {
    ["no-app" /* NO_APP */ ]: "No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",
    ["bad-app-name" /* BAD_APP_NAME */ ]: "Illegal App name: '{$appName}",
    ["duplicate-app" /* DUPLICATE_APP */ ]: "Firebase App named '{$appName}' already exists with different options or config",
    ["app-deleted" /* APP_DELETED */ ]: "Firebase App named '{$appName}' already deleted",
    ["invalid-app-argument" /* INVALID_APP_ARGUMENT */ ]: "firebase.{$appName}() takes either no argument or a Firebase App instance.",
    ["invalid-log-argument" /* INVALID_LOG_ARGUMENT */ ]: 'First argument to `onLog` must be null or a function.'
};
const ERROR_FACTORY = new _util.ErrorFactory('app', 'Firebase', ERRORS);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class FirebaseAppImpl {
    constructor(options, config, container){
        this._isDeleted = false;
        this._options = Object.assign({
        }, options);
        this._config = Object.assign({
        }, config);
        this._name = config.name;
        this._automaticDataCollectionEnabled = config.automaticDataCollectionEnabled;
        this._container = container;
        this.container.addComponent(new _component.Component('app', ()=>this
        , "PUBLIC" /* PUBLIC */ ));
    }
    get automaticDataCollectionEnabled() {
        this.checkDestroyed();
        return this._automaticDataCollectionEnabled;
    }
    set automaticDataCollectionEnabled(val) {
        this.checkDestroyed();
        this._automaticDataCollectionEnabled = val;
    }
    get name() {
        this.checkDestroyed();
        return this._name;
    }
    get options() {
        this.checkDestroyed();
        return this._options;
    }
    get config() {
        this.checkDestroyed();
        return this._config;
    }
    get container() {
        return this._container;
    }
    get isDeleted() {
        return this._isDeleted;
    }
    set isDeleted(val) {
        this._isDeleted = val;
    }
    /**
     * This function will throw an Error if the App has already been deleted -
     * use before performing API actions on the App.
     */ checkDestroyed() {
        if (this.isDeleted) throw ERROR_FACTORY.create("app-deleted" /* APP_DELETED */ , {
            appName: this._name
        });
    }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * The current SDK version.
 *
 * @public
 */ const SDK_VERSION = version;
function initializeApp(options, rawConfig = {
}) {
    if (typeof rawConfig !== 'object') {
        const name3 = rawConfig;
        rawConfig = {
            name: name3
        };
    }
    const config = Object.assign({
        name: DEFAULT_ENTRY_NAME,
        automaticDataCollectionEnabled: false
    }, rawConfig);
    const name4 = config.name;
    if (typeof name4 !== 'string' || !name4) throw ERROR_FACTORY.create("bad-app-name" /* BAD_APP_NAME */ , {
        appName: String(name4)
    });
    const existingApp = _apps.get(name4);
    if (existingApp) {
        // return the existing app if options and config deep equal the ones in the existing app.
        if (_util.deepEqual(options, existingApp.options) && _util.deepEqual(config, existingApp.config)) return existingApp;
        else throw ERROR_FACTORY.create("duplicate-app" /* DUPLICATE_APP */ , {
            appName: name4
        });
    }
    const container = new _component.ComponentContainer(name4);
    for (const component of _components.values())container.addComponent(component);
    const newApp = new FirebaseAppImpl(options, config, container);
    _apps.set(name4, newApp);
    return newApp;
}
/**
 * Retrieves a {@link @firebase/app#FirebaseApp} instance.
 *
 * When called with no arguments, the default app is returned. When an app name
 * is provided, the app corresponding to that name is returned.
 *
 * An exception is thrown if the app being retrieved has not yet been
 * initialized.
 *
 * @example
 * ```javascript
 * // Return the default app
 * const app = getApp();
 * ```
 *
 * @example
 * ```javascript
 * // Return a named app
 * const otherApp = getApp("otherApp");
 * ```
 *
 * @param name - Optional name of the app to return. If no name is
 *   provided, the default is `"[DEFAULT]"`.
 *
 * @returns The app corresponding to the provided app name.
 *   If no app name is provided, the default app is returned.
 *
 * @public
 */ function getApp(name5 = DEFAULT_ENTRY_NAME) {
    const app = _apps.get(name5);
    if (!app) throw ERROR_FACTORY.create("no-app" /* NO_APP */ , {
        appName: name5
    });
    return app;
}
/**
 * A (read-only) array of all initialized apps.
 * @public
 */ function getApps() {
    return Array.from(_apps.values());
}
/**
 * Renders this app unusable and frees the resources of all associated
 * services.
 *
 * @example
 * ```javascript
 * deleteApp(app)
 *   .then(function() {
 *     console.log("App deleted successfully");
 *   })
 *   .catch(function(error) {
 *     console.log("Error deleting app:", error);
 *   });
 * ```
 *
 * @public
 */ async function deleteApp(app) {
    const name6 = app.name;
    if (_apps.has(name6)) {
        _apps.delete(name6);
        await Promise.all(app.container.getProviders().map((provider)=>provider.delete()
        ));
        app.isDeleted = true;
    }
}
/**
 * Registers a library's name and version for platform logging purposes.
 * @param library - Name of 1p or 3p library (e.g. firestore, angularfire)
 * @param version - Current version of that library.
 * @param variant - Bundle variant, e.g., node, rn, etc.
 *
 * @public
 */ function registerVersion(libraryKeyOrName, version1, variant) {
    var _a;
    // TODO: We can use this check to whitelist strings when/if we set up
    // a good whitelist system.
    let library = (_a = PLATFORM_LOG_STRING[libraryKeyOrName]) !== null && _a !== void 0 ? _a : libraryKeyOrName;
    if (variant) library += `-${variant}`;
    const libraryMismatch = library.match(/\s|\//);
    const versionMismatch = version1.match(/\s|\//);
    if (libraryMismatch || versionMismatch) {
        const warning = [
            `Unable to register library "${library}" with version "${version1}":`
        ];
        if (libraryMismatch) warning.push(`library name "${library}" contains illegal characters (whitespace or "/")`);
        if (libraryMismatch && versionMismatch) warning.push('and');
        if (versionMismatch) warning.push(`version name "${version1}" contains illegal characters (whitespace or "/")`);
        logger.warn(warning.join(' '));
        return;
    }
    _registerComponent(new _component.Component(`${library}-version`, ()=>({
            library,
            version: version1
        })
    , "VERSION" /* VERSION */ ));
}
/**
 * Sets log handler for all Firebase SDKs.
 * @param logCallback - An optional custom log handler that executes user code whenever
 * the Firebase SDK makes a logging call.
 *
 * @public
 */ function onLog(logCallback, options) {
    if (logCallback !== null && typeof logCallback !== 'function') throw ERROR_FACTORY.create("invalid-log-argument" /* INVALID_LOG_ARGUMENT */ );
    _logger.setUserLogHandler(logCallback, options);
}
/**
 * Sets log level for all Firebase SDKs.
 *
 * All of the log types above the current log level are captured (i.e. if
 * you set the log level to `info`, errors are logged, but `debug` and
 * `verbose` logs are not).
 *
 * @public
 */ function setLogLevel(logLevel) {
    _logger.setLogLevel(logLevel);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function registerCoreComponents(variant) {
    _registerComponent(new _component.Component('platform-logger', (container)=>new PlatformLoggerServiceImpl(container)
    , "PRIVATE" /* PRIVATE */ ));
    // Register `app` package.
    registerVersion(name$o, version$1, variant);
    // BUILD_TARGET will be replaced by values like esm5, esm2017, cjs5, etc during the compilation
    registerVersion(name$o, version$1, 'esm2017');
    // Register platform SDK identifier (no version).
    registerVersion('fire-js', '');
}
/**
 * Firebase App
 *
 * @remarks This package coordinates the communication between the different Firebase components
 * @packageDocumentation
 */ registerCoreComponents('');

},{"@firebase/component":"bi1VB","@firebase/logger":"fZmft","@firebase/util":"ePiK6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bi1VB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Component", ()=>Component
);
parcelHelpers.export(exports, "ComponentContainer", ()=>ComponentContainer
);
parcelHelpers.export(exports, "Provider", ()=>Provider
);
var _util = require("@firebase/util");
/**
 * Component for service name T, e.g. `auth`, `auth-internal`
 */ class Component {
    /**
     *
     * @param name The public service name, e.g. app, auth, firestore, database
     * @param instanceFactory Service factory responsible for creating the public interface
     * @param type whether the service provided by the component is public or private
     */ constructor(name, instanceFactory, type){
        this.name = name;
        this.instanceFactory = instanceFactory;
        this.type = type;
        this.multipleInstances = false;
        /**
         * Properties to be added to the service namespace
         */ this.serviceProps = {
        };
        this.instantiationMode = "LAZY" /* LAZY */ ;
        this.onInstanceCreated = null;
    }
    setInstantiationMode(mode) {
        this.instantiationMode = mode;
        return this;
    }
    setMultipleInstances(multipleInstances) {
        this.multipleInstances = multipleInstances;
        return this;
    }
    setServiceProps(props) {
        this.serviceProps = props;
        return this;
    }
    setInstanceCreatedCallback(callback) {
        this.onInstanceCreated = callback;
        return this;
    }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const DEFAULT_ENTRY_NAME = '[DEFAULT]';
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Provider for instance for service name T, e.g. 'auth', 'auth-internal'
 * NameServiceMapping[T] is an alias for the type of the instance
 */ class Provider {
    constructor(name, container){
        this.name = name;
        this.container = container;
        this.component = null;
        this.instances = new Map();
        this.instancesDeferred = new Map();
        this.instancesOptions = new Map();
        this.onInitCallbacks = new Map();
    }
    /**
     * @param identifier A provider can provide mulitple instances of a service
     * if this.component.multipleInstances is true.
     */ get(identifier) {
        // if multipleInstances is not supported, use the default name
        const normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
        if (!this.instancesDeferred.has(normalizedIdentifier)) {
            const deferred = new _util.Deferred();
            this.instancesDeferred.set(normalizedIdentifier, deferred);
            if (this.isInitialized(normalizedIdentifier) || this.shouldAutoInitialize()) // initialize the service if it can be auto-initialized
            try {
                const instance = this.getOrInitializeService({
                    instanceIdentifier: normalizedIdentifier
                });
                if (instance) deferred.resolve(instance);
            } catch (e) {
            // when the instance factory throws an exception during get(), it should not cause
            // a fatal error. We just return the unresolved promise in this case.
            }
        }
        return this.instancesDeferred.get(normalizedIdentifier).promise;
    }
    getImmediate(options) {
        var _a;
        // if multipleInstances is not supported, use the default name
        const normalizedIdentifier = this.normalizeInstanceIdentifier(options === null || options === void 0 ? void 0 : options.identifier);
        const optional = (_a = options === null || options === void 0 ? void 0 : options.optional) !== null && _a !== void 0 ? _a : false;
        if (this.isInitialized(normalizedIdentifier) || this.shouldAutoInitialize()) try {
            return this.getOrInitializeService({
                instanceIdentifier: normalizedIdentifier
            });
        } catch (e) {
            if (optional) return null;
            else throw e;
        }
        else {
            // In case a component is not initialized and should/can not be auto-initialized at the moment, return null if the optional flag is set, or throw
            if (optional) return null;
            else throw Error(`Service ${this.name} is not available`);
        }
    }
    getComponent() {
        return this.component;
    }
    setComponent(component) {
        if (component.name !== this.name) throw Error(`Mismatching Component ${component.name} for Provider ${this.name}.`);
        if (this.component) throw Error(`Component for ${this.name} has already been provided`);
        this.component = component;
        // return early without attempting to initialize the component if the component requires explicit initialization (calling `Provider.initialize()`)
        if (!this.shouldAutoInitialize()) return;
        // if the service is eager, initialize the default instance
        if (isComponentEager(component)) try {
            this.getOrInitializeService({
                instanceIdentifier: DEFAULT_ENTRY_NAME
            });
        } catch (e) {
        // when the instance factory for an eager Component throws an exception during the eager
        // initialization, it should not cause a fatal error.
        // TODO: Investigate if we need to make it configurable, because some component may want to cause
        // a fatal error in this case?
        }
        // Create service instances for the pending promises and resolve them
        // NOTE: if this.multipleInstances is false, only the default instance will be created
        // and all promises with resolve with it regardless of the identifier.
        for (const [instanceIdentifier, instanceDeferred] of this.instancesDeferred.entries()){
            const normalizedIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
            try {
                // `getOrInitializeService()` should always return a valid instance since a component is guaranteed. use ! to make typescript happy.
                const instance = this.getOrInitializeService({
                    instanceIdentifier: normalizedIdentifier
                });
                instanceDeferred.resolve(instance);
            } catch (e) {
            // when the instance factory throws an exception, it should not cause
            // a fatal error. We just leave the promise unresolved.
            }
        }
    }
    clearInstance(identifier = DEFAULT_ENTRY_NAME) {
        this.instancesDeferred.delete(identifier);
        this.instancesOptions.delete(identifier);
        this.instances.delete(identifier);
    }
    // app.delete() will call this method on every provider to delete the services
    // TODO: should we mark the provider as deleted?
    async delete() {
        const services = Array.from(this.instances.values());
        await Promise.all([
            ...services.filter((service)=>'INTERNAL' in service
            ) // legacy services
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .map((service)=>service.INTERNAL.delete()
            ),
            ...services.filter((service)=>'_delete' in service
            ) // modularized services
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .map((service)=>service._delete()
            )
        ]);
    }
    isComponentSet() {
        return this.component != null;
    }
    isInitialized(identifier = DEFAULT_ENTRY_NAME) {
        return this.instances.has(identifier);
    }
    getOptions(identifier = DEFAULT_ENTRY_NAME) {
        return this.instancesOptions.get(identifier) || {
        };
    }
    initialize(opts = {
    }) {
        const { options ={
        }  } = opts;
        const normalizedIdentifier = this.normalizeInstanceIdentifier(opts.instanceIdentifier);
        if (this.isInitialized(normalizedIdentifier)) throw Error(`${this.name}(${normalizedIdentifier}) has already been initialized`);
        if (!this.isComponentSet()) throw Error(`Component ${this.name} has not been registered yet`);
        const instance = this.getOrInitializeService({
            instanceIdentifier: normalizedIdentifier,
            options
        });
        // resolve any pending promise waiting for the service instance
        for (const [instanceIdentifier, instanceDeferred] of this.instancesDeferred.entries()){
            const normalizedDeferredIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
            if (normalizedIdentifier === normalizedDeferredIdentifier) instanceDeferred.resolve(instance);
        }
        return instance;
    }
    /**
     *
     * @param callback - a function that will be invoked  after the provider has been initialized by calling provider.initialize().
     * The function is invoked SYNCHRONOUSLY, so it should not execute any longrunning tasks in order to not block the program.
     *
     * @param identifier An optional instance identifier
     * @returns a function to unregister the callback
     */ onInit(callback, identifier) {
        var _a;
        const normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
        const existingCallbacks = (_a = this.onInitCallbacks.get(normalizedIdentifier)) !== null && _a !== void 0 ? _a : new Set();
        existingCallbacks.add(callback);
        this.onInitCallbacks.set(normalizedIdentifier, existingCallbacks);
        const existingInstance = this.instances.get(normalizedIdentifier);
        if (existingInstance) callback(existingInstance, normalizedIdentifier);
        return ()=>{
            existingCallbacks.delete(callback);
        };
    }
    /**
     * Invoke onInit callbacks synchronously
     * @param instance the service instance`
     */ invokeOnInitCallbacks(instance, identifier) {
        const callbacks = this.onInitCallbacks.get(identifier);
        if (!callbacks) return;
        for (const callback of callbacks)try {
            callback(instance, identifier);
        } catch (_a) {
        // ignore errors in the onInit callback
        }
    }
    getOrInitializeService({ instanceIdentifier , options ={
    }  }) {
        let instance = this.instances.get(instanceIdentifier);
        if (!instance && this.component) {
            instance = this.component.instanceFactory(this.container, {
                instanceIdentifier: normalizeIdentifierForFactory(instanceIdentifier),
                options
            });
            this.instances.set(instanceIdentifier, instance);
            this.instancesOptions.set(instanceIdentifier, options);
            /**
             * Invoke onInit listeners.
             * Note this.component.onInstanceCreated is different, which is used by the component creator,
             * while onInit listeners are registered by consumers of the provider.
             */ this.invokeOnInitCallbacks(instance, instanceIdentifier);
            /**
             * Order is important
             * onInstanceCreated() should be called after this.instances.set(instanceIdentifier, instance); which
             * makes `isInitialized()` return true.
             */ if (this.component.onInstanceCreated) try {
                this.component.onInstanceCreated(this.container, instanceIdentifier, instance);
            } catch (_a) {
            // ignore errors in the onInstanceCreatedCallback
            }
        }
        return instance || null;
    }
    normalizeInstanceIdentifier(identifier = DEFAULT_ENTRY_NAME) {
        if (this.component) return this.component.multipleInstances ? identifier : DEFAULT_ENTRY_NAME;
        else return identifier; // assume multiple instances are supported before the component is provided.
    }
    shouldAutoInitialize() {
        return !!this.component && this.component.instantiationMode !== "EXPLICIT" /* EXPLICIT */ ;
    }
}
// undefined should be passed to the service factory for the default instance
function normalizeIdentifierForFactory(identifier) {
    return identifier === DEFAULT_ENTRY_NAME ? undefined : identifier;
}
function isComponentEager(component) {
    return component.instantiationMode === "EAGER" /* EAGER */ ;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * ComponentContainer that provides Providers for service name T, e.g. `auth`, `auth-internal`
 */ class ComponentContainer {
    constructor(name){
        this.name = name;
        this.providers = new Map();
    }
    /**
     *
     * @param component Component being added
     * @param overwrite When a component with the same name has already been registered,
     * if overwrite is true: overwrite the existing component with the new component and create a new
     * provider with the new component. It can be useful in tests where you want to use different mocks
     * for different tests.
     * if overwrite is false: throw an exception
     */ addComponent(component) {
        const provider = this.getProvider(component.name);
        if (provider.isComponentSet()) throw new Error(`Component ${component.name} has already been registered with ${this.name}`);
        provider.setComponent(component);
    }
    addOrOverwriteComponent(component) {
        const provider = this.getProvider(component.name);
        if (provider.isComponentSet()) // delete the existing provider from the container, so we can register the new component
        this.providers.delete(component.name);
        this.addComponent(component);
    }
    /**
     * getProvider provides a type safe interface where it can only be called with a field name
     * present in NameServiceMapping interface.
     *
     * Firebase SDKs providing services should extend NameServiceMapping interface to register
     * themselves.
     */ getProvider(name) {
        if (this.providers.has(name)) return this.providers.get(name);
        // create a Provider for a service that hasn't registered with Firebase
        const provider = new Provider(name, this);
        this.providers.set(name, provider);
        return provider;
    }
    getProviders() {
        return Array.from(this.providers.values());
    }
}

},{"@firebase/util":"ePiK6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ePiK6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CONSTANTS", ()=>CONSTANTS
);
parcelHelpers.export(exports, "Deferred", ()=>Deferred
);
parcelHelpers.export(exports, "ErrorFactory", ()=>ErrorFactory
);
parcelHelpers.export(exports, "FirebaseError", ()=>FirebaseError
);
parcelHelpers.export(exports, "MAX_VALUE_MILLIS", ()=>MAX_VALUE_MILLIS
);
parcelHelpers.export(exports, "RANDOM_FACTOR", ()=>RANDOM_FACTOR
);
parcelHelpers.export(exports, "Sha1", ()=>Sha1
);
parcelHelpers.export(exports, "areCookiesEnabled", ()=>areCookiesEnabled
);
parcelHelpers.export(exports, "assert", ()=>assert
);
parcelHelpers.export(exports, "assertionError", ()=>assertionError
);
parcelHelpers.export(exports, "async", ()=>async
);
parcelHelpers.export(exports, "base64", ()=>base64
);
parcelHelpers.export(exports, "base64Decode", ()=>base64Decode
);
parcelHelpers.export(exports, "base64Encode", ()=>base64Encode
);
parcelHelpers.export(exports, "base64urlEncodeWithoutPadding", ()=>base64urlEncodeWithoutPadding
);
parcelHelpers.export(exports, "calculateBackoffMillis", ()=>calculateBackoffMillis
);
parcelHelpers.export(exports, "contains", ()=>contains
);
parcelHelpers.export(exports, "createMockUserToken", ()=>createMockUserToken
);
parcelHelpers.export(exports, "createSubscribe", ()=>createSubscribe
);
parcelHelpers.export(exports, "decode", ()=>decode
);
parcelHelpers.export(exports, "deepCopy", ()=>deepCopy
);
parcelHelpers.export(exports, "deepEqual", ()=>deepEqual
);
parcelHelpers.export(exports, "deepExtend", ()=>deepExtend
);
parcelHelpers.export(exports, "errorPrefix", ()=>errorPrefix
);
parcelHelpers.export(exports, "extractQuerystring", ()=>extractQuerystring
);
parcelHelpers.export(exports, "getGlobal", ()=>getGlobal
);
parcelHelpers.export(exports, "getModularInstance", ()=>getModularInstance
);
parcelHelpers.export(exports, "getUA", ()=>getUA
);
parcelHelpers.export(exports, "isAdmin", ()=>isAdmin
);
parcelHelpers.export(exports, "isBrowser", ()=>isBrowser
);
parcelHelpers.export(exports, "isBrowserExtension", ()=>isBrowserExtension
);
parcelHelpers.export(exports, "isElectron", ()=>isElectron
);
parcelHelpers.export(exports, "isEmpty", ()=>isEmpty
);
parcelHelpers.export(exports, "isIE", ()=>isIE
);
parcelHelpers.export(exports, "isIndexedDBAvailable", ()=>isIndexedDBAvailable
);
parcelHelpers.export(exports, "isMobileCordova", ()=>isMobileCordova
);
parcelHelpers.export(exports, "isNode", ()=>isNode
);
parcelHelpers.export(exports, "isNodeSdk", ()=>isNodeSdk
);
parcelHelpers.export(exports, "isReactNative", ()=>isReactNative
);
parcelHelpers.export(exports, "isSafari", ()=>isSafari
);
parcelHelpers.export(exports, "isUWP", ()=>isUWP
);
parcelHelpers.export(exports, "isValidFormat", ()=>isValidFormat
);
parcelHelpers.export(exports, "isValidTimestamp", ()=>isValidTimestamp
);
parcelHelpers.export(exports, "issuedAtTime", ()=>issuedAtTime
);
parcelHelpers.export(exports, "jsonEval", ()=>jsonEval
);
parcelHelpers.export(exports, "map", ()=>map
);
parcelHelpers.export(exports, "ordinal", ()=>ordinal
);
parcelHelpers.export(exports, "querystring", ()=>querystring
);
parcelHelpers.export(exports, "querystringDecode", ()=>querystringDecode
);
parcelHelpers.export(exports, "safeGet", ()=>safeGet
);
parcelHelpers.export(exports, "stringLength", ()=>stringLength
);
parcelHelpers.export(exports, "stringToByteArray", ()=>stringToByteArray
);
parcelHelpers.export(exports, "stringify", ()=>stringify
);
parcelHelpers.export(exports, "validateArgCount", ()=>validateArgCount
);
parcelHelpers.export(exports, "validateCallback", ()=>validateCallback
);
parcelHelpers.export(exports, "validateContextObject", ()=>validateContextObject
);
parcelHelpers.export(exports, "validateIndexedDBOpenable", ()=>validateIndexedDBOpenable
);
parcelHelpers.export(exports, "validateNamespace", ()=>validateNamespace
);
var global = arguments[3];
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @fileoverview Firebase constants.  Some of these (@defines) can be overridden at compile-time.
 */ const CONSTANTS = {
    /**
     * @define {boolean} Whether this is the client Node.js SDK.
     */ NODE_CLIENT: false,
    /**
     * @define {boolean} Whether this is the Admin Node.js SDK.
     */ NODE_ADMIN: false,
    /**
     * Firebase SDK Version
     */ SDK_VERSION: '${JSCORE_VERSION}'
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Throws an error if the provided assertion is falsy
 */ const assert = function(assertion, message) {
    if (!assertion) throw assertionError(message);
};
/**
 * Returns an Error object suitable for throwing.
 */ const assertionError = function(message) {
    return new Error('Firebase Database (' + CONSTANTS.SDK_VERSION + ') INTERNAL ASSERT FAILED: ' + message);
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const stringToByteArray$1 = function(str) {
    // TODO(user): Use native implementations if/when available
    const out = [];
    let p = 0;
    for(let i = 0; i < str.length; i++){
        let c = str.charCodeAt(i);
        if (c < 128) out[p++] = c;
        else if (c < 2048) {
            out[p++] = c >> 6 | 192;
            out[p++] = c & 63 | 128;
        } else if ((c & 64512) === 55296 && i + 1 < str.length && (str.charCodeAt(i + 1) & 64512) === 56320) {
            // Surrogate Pair
            c = 65536 + ((c & 1023) << 10) + (str.charCodeAt(++i) & 1023);
            out[p++] = c >> 18 | 240;
            out[p++] = c >> 12 & 63 | 128;
            out[p++] = c >> 6 & 63 | 128;
            out[p++] = c & 63 | 128;
        } else {
            out[p++] = c >> 12 | 224;
            out[p++] = c >> 6 & 63 | 128;
            out[p++] = c & 63 | 128;
        }
    }
    return out;
};
/**
 * Turns an array of numbers into the string given by the concatenation of the
 * characters to which the numbers correspond.
 * @param bytes Array of numbers representing characters.
 * @return Stringification of the array.
 */ const byteArrayToString = function(bytes) {
    // TODO(user): Use native implementations if/when available
    const out = [];
    let pos = 0, c = 0;
    while(pos < bytes.length){
        const c1 = bytes[pos++];
        if (c1 < 128) out[c++] = String.fromCharCode(c1);
        else if (c1 > 191 && c1 < 224) {
            const c2 = bytes[pos++];
            out[c++] = String.fromCharCode((c1 & 31) << 6 | c2 & 63);
        } else if (c1 > 239 && c1 < 365) {
            // Surrogate Pair
            const c2 = bytes[pos++];
            const c3 = bytes[pos++];
            const c4 = bytes[pos++];
            const u = ((c1 & 7) << 18 | (c2 & 63) << 12 | (c3 & 63) << 6 | c4 & 63) - 65536;
            out[c++] = String.fromCharCode(55296 + (u >> 10));
            out[c++] = String.fromCharCode(56320 + (u & 1023));
        } else {
            const c2 = bytes[pos++];
            const c3 = bytes[pos++];
            out[c++] = String.fromCharCode((c1 & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
        }
    }
    return out.join('');
};
// We define it as an object literal instead of a class because a class compiled down to es5 can't
// be treeshaked. https://github.com/rollup/rollup/issues/1691
// Static lookup maps, lazily populated by init_()
const base64 = {
    /**
     * Maps bytes to characters.
     */ byteToCharMap_: null,
    /**
     * Maps characters to bytes.
     */ charToByteMap_: null,
    /**
     * Maps bytes to websafe characters.
     * @private
     */ byteToCharMapWebSafe_: null,
    /**
     * Maps websafe characters to bytes.
     * @private
     */ charToByteMapWebSafe_: null,
    /**
     * Our default alphabet, shared between
     * ENCODED_VALS and ENCODED_VALS_WEBSAFE
     */ ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
    /**
     * Our default alphabet. Value 64 (=) is special; it means "nothing."
     */ get ENCODED_VALS () {
        return this.ENCODED_VALS_BASE + '+/=';
    },
    /**
     * Our websafe alphabet.
     */ get ENCODED_VALS_WEBSAFE () {
        return this.ENCODED_VALS_BASE + '-_.';
    },
    /**
     * Whether this browser supports the atob and btoa functions. This extension
     * started at Mozilla but is now implemented by many browsers. We use the
     * ASSUME_* variables to avoid pulling in the full useragent detection library
     * but still allowing the standard per-browser compilations.
     *
     */ HAS_NATIVE_SUPPORT: typeof atob === 'function',
    /**
     * Base64-encode an array of bytes.
     *
     * @param input An array of bytes (numbers with
     *     value in [0, 255]) to encode.
     * @param webSafe Boolean indicating we should use the
     *     alternative alphabet.
     * @return The base64 encoded string.
     */ encodeByteArray (input, webSafe) {
        if (!Array.isArray(input)) throw Error('encodeByteArray takes an array as a parameter');
        this.init_();
        const byteToCharMap = webSafe ? this.byteToCharMapWebSafe_ : this.byteToCharMap_;
        const output = [];
        for(let i = 0; i < input.length; i += 3){
            const byte1 = input[i];
            const haveByte2 = i + 1 < input.length;
            const byte2 = haveByte2 ? input[i + 1] : 0;
            const haveByte3 = i + 2 < input.length;
            const byte3 = haveByte3 ? input[i + 2] : 0;
            const outByte1 = byte1 >> 2;
            const outByte2 = (byte1 & 3) << 4 | byte2 >> 4;
            let outByte3 = (byte2 & 15) << 2 | byte3 >> 6;
            let outByte4 = byte3 & 63;
            if (!haveByte3) {
                outByte4 = 64;
                if (!haveByte2) outByte3 = 64;
            }
            output.push(byteToCharMap[outByte1], byteToCharMap[outByte2], byteToCharMap[outByte3], byteToCharMap[outByte4]);
        }
        return output.join('');
    },
    /**
     * Base64-encode a string.
     *
     * @param input A string to encode.
     * @param webSafe If true, we should use the
     *     alternative alphabet.
     * @return The base64 encoded string.
     */ encodeString (input, webSafe) {
        // Shortcut for Mozilla browsers that implement
        // a native base64 encoder in the form of "btoa/atob"
        if (this.HAS_NATIVE_SUPPORT && !webSafe) return btoa(input);
        return this.encodeByteArray(stringToByteArray$1(input), webSafe);
    },
    /**
     * Base64-decode a string.
     *
     * @param input to decode.
     * @param webSafe True if we should use the
     *     alternative alphabet.
     * @return string representing the decoded value.
     */ decodeString (input, webSafe) {
        // Shortcut for Mozilla browsers that implement
        // a native base64 encoder in the form of "btoa/atob"
        if (this.HAS_NATIVE_SUPPORT && !webSafe) return atob(input);
        return byteArrayToString(this.decodeStringToByteArray(input, webSafe));
    },
    /**
     * Base64-decode a string.
     *
     * In base-64 decoding, groups of four characters are converted into three
     * bytes.  If the encoder did not apply padding, the input length may not
     * be a multiple of 4.
     *
     * In this case, the last group will have fewer than 4 characters, and
     * padding will be inferred.  If the group has one or two characters, it decodes
     * to one byte.  If the group has three characters, it decodes to two bytes.
     *
     * @param input Input to decode.
     * @param webSafe True if we should use the web-safe alphabet.
     * @return bytes representing the decoded value.
     */ decodeStringToByteArray (input, webSafe) {
        this.init_();
        const charToByteMap = webSafe ? this.charToByteMapWebSafe_ : this.charToByteMap_;
        const output = [];
        for(let i = 0; i < input.length;){
            const byte1 = charToByteMap[input.charAt(i++)];
            const haveByte2 = i < input.length;
            const byte2 = haveByte2 ? charToByteMap[input.charAt(i)] : 0;
            ++i;
            const haveByte3 = i < input.length;
            const byte3 = haveByte3 ? charToByteMap[input.charAt(i)] : 64;
            ++i;
            const haveByte4 = i < input.length;
            const byte4 = haveByte4 ? charToByteMap[input.charAt(i)] : 64;
            ++i;
            if (byte1 == null || byte2 == null || byte3 == null || byte4 == null) throw Error();
            const outByte1 = byte1 << 2 | byte2 >> 4;
            output.push(outByte1);
            if (byte3 !== 64) {
                const outByte2 = byte2 << 4 & 240 | byte3 >> 2;
                output.push(outByte2);
                if (byte4 !== 64) {
                    const outByte3 = byte3 << 6 & 192 | byte4;
                    output.push(outByte3);
                }
            }
        }
        return output;
    },
    /**
     * Lazy static initialization function. Called before
     * accessing any of the static map variables.
     * @private
     */ init_ () {
        if (!this.byteToCharMap_) {
            this.byteToCharMap_ = {
            };
            this.charToByteMap_ = {
            };
            this.byteToCharMapWebSafe_ = {
            };
            this.charToByteMapWebSafe_ = {
            };
            // We want quick mappings back and forth, so we precompute two maps.
            for(let i = 0; i < this.ENCODED_VALS.length; i++){
                this.byteToCharMap_[i] = this.ENCODED_VALS.charAt(i);
                this.charToByteMap_[this.byteToCharMap_[i]] = i;
                this.byteToCharMapWebSafe_[i] = this.ENCODED_VALS_WEBSAFE.charAt(i);
                this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]] = i;
                // Be forgiving when decoding and correctly decode both encodings.
                if (i >= this.ENCODED_VALS_BASE.length) {
                    this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)] = i;
                    this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)] = i;
                }
            }
        }
    }
};
/**
 * URL-safe base64 encoding
 */ const base64Encode = function(str) {
    const utf8Bytes = stringToByteArray$1(str);
    return base64.encodeByteArray(utf8Bytes, true);
};
/**
 * URL-safe base64 encoding (without "." padding in the end).
 * e.g. Used in JSON Web Token (JWT) parts.
 */ const base64urlEncodeWithoutPadding = function(str) {
    // Use base64url encoding and remove padding in the end (dot characters).
    return base64Encode(str).replace(/\./g, '');
};
/**
 * URL-safe base64 decoding
 *
 * NOTE: DO NOT use the global atob() function - it does NOT support the
 * base64Url variant encoding.
 *
 * @param str To be decoded
 * @return Decoded result, if possible
 */ const base64Decode = function(str) {
    try {
        return base64.decodeString(str, true);
    } catch (e) {
        console.error('base64Decode failed: ', e);
    }
    return null;
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Do a deep-copy of basic JavaScript Objects or Arrays.
 */ function deepCopy(value) {
    return deepExtend(undefined, value);
}
/**
 * Copy properties from source to target (recursively allows extension
 * of Objects and Arrays).  Scalar values in the target are over-written.
 * If target is undefined, an object of the appropriate type will be created
 * (and returned).
 *
 * We recursively copy all child properties of plain Objects in the source- so
 * that namespace- like dictionaries are merged.
 *
 * Note that the target can be a function, in which case the properties in
 * the source Object are copied onto it as static properties of the Function.
 *
 * Note: we don't merge __proto__ to prevent prototype pollution
 */ function deepExtend(target, source) {
    if (!(source instanceof Object)) return source;
    switch(source.constructor){
        case Date:
            // Treat Dates like scalars; if the target date object had any child
            // properties - they will be lost!
            const dateValue = source;
            return new Date(dateValue.getTime());
        case Object:
            if (target === undefined) target = {
            };
            break;
        case Array:
            // Always copy the array source and overwrite the target.
            target = [];
            break;
        default:
            // Not a plain Object - treat it as a scalar.
            return source;
    }
    for(const prop in source){
        // use isValidKey to guard against prototype pollution. See https://snyk.io/vuln/SNYK-JS-LODASH-450202
        if (!source.hasOwnProperty(prop) || !isValidKey(prop)) continue;
        target[prop] = deepExtend(target[prop], source[prop]);
    }
    return target;
}
function isValidKey(key) {
    return key !== '__proto__';
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Deferred {
    constructor(){
        this.reject = ()=>{
        };
        this.resolve = ()=>{
        };
        this.promise = new Promise((resolve, reject)=>{
            this.resolve = resolve;
            this.reject = reject;
        });
    }
    /**
     * Our API internals are not promiseified and cannot because our callback APIs have subtle expectations around
     * invoking promises inline, which Promises are forbidden to do. This method accepts an optional node-style callback
     * and returns a node-style callback which will resolve or reject the Deferred's promise.
     */ wrapCallback(callback) {
        return (error, value)=>{
            if (error) this.reject(error);
            else this.resolve(value);
            if (typeof callback === 'function') {
                // Attaching noop handler just in case developer wasn't expecting
                // promises
                this.promise.catch(()=>{
                });
                // Some of our callbacks don't expect a value and our own tests
                // assert that the parameter length is 1
                if (callback.length === 1) callback(error);
                else callback(error, value);
            }
        };
    }
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function createMockUserToken(token, projectId) {
    if (token.uid) throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');
    // Unsecured JWTs use "none" as the algorithm.
    const header = {
        alg: 'none',
        type: 'JWT'
    };
    const project = projectId || 'demo-project';
    const iat = token.iat || 0;
    const sub = token.sub || token.user_id;
    if (!sub) throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");
    const payload = Object.assign({
        // Set all required fields to decent defaults
        iss: `https://securetoken.google.com/${project}`,
        aud: project,
        iat,
        exp: iat + 3600,
        auth_time: iat,
        sub,
        user_id: sub,
        firebase: {
            sign_in_provider: 'custom',
            identities: {
            }
        }
    }, token);
    // Unsecured JWTs use the empty string as a signature.
    const signature = '';
    return [
        base64urlEncodeWithoutPadding(JSON.stringify(header)),
        base64urlEncodeWithoutPadding(JSON.stringify(payload)),
        signature
    ].join('.');
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Returns navigator.userAgent string or '' if it's not defined.
 * @return user agent string
 */ function getUA() {
    if (typeof navigator !== 'undefined' && typeof navigator['userAgent'] === 'string') return navigator['userAgent'];
    else return '';
}
/**
 * Detect Cordova / PhoneGap / Ionic frameworks on a mobile device.
 *
 * Deliberately does not rely on checking `file://` URLs (as this fails PhoneGap
 * in the Ripple emulator) nor Cordova `onDeviceReady`, which would normally
 * wait for a callback.
 */ function isMobileCordova() {
    return typeof window !== 'undefined' && // @ts-ignore Setting up an broadly applicable index signature for Window
    // just to deal with this case would probably be a bad idea.
    !!(window['cordova'] || window['phonegap'] || window['PhoneGap']) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(getUA());
}
/**
 * Detect Node.js.
 *
 * @return true if Node.js environment is detected.
 */ // Node detection logic from: https://github.com/iliakan/detect-node/
function isNode() {
    try {
        return Object.prototype.toString.call(global.process) === '[object process]';
    } catch (e) {
        return false;
    }
}
/**
 * Detect Browser Environment
 */ function isBrowser() {
    return typeof self === 'object' && self.self === self;
}
function isBrowserExtension() {
    const runtime = typeof chrome === 'object' ? chrome.runtime : typeof browser === 'object' ? browser.runtime : undefined;
    return typeof runtime === 'object' && runtime.id !== undefined;
}
/**
 * Detect React Native.
 *
 * @return true if ReactNative environment is detected.
 */ function isReactNative() {
    return typeof navigator === 'object' && navigator['product'] === 'ReactNative';
}
/** Detects Electron apps. */ function isElectron() {
    return getUA().indexOf('Electron/') >= 0;
}
/** Detects Internet Explorer. */ function isIE() {
    const ua = getUA();
    return ua.indexOf('MSIE ') >= 0 || ua.indexOf('Trident/') >= 0;
}
/** Detects Universal Windows Platform apps. */ function isUWP() {
    return getUA().indexOf('MSAppHost/') >= 0;
}
/**
 * Detect whether the current SDK build is the Node version.
 *
 * @return true if it's the Node SDK build.
 */ function isNodeSdk() {
    return CONSTANTS.NODE_CLIENT === true || CONSTANTS.NODE_ADMIN === true;
}
/** Returns true if we are running in Safari. */ function isSafari() {
    return !isNode() && navigator.userAgent.includes('Safari') && !navigator.userAgent.includes('Chrome');
}
/**
 * This method checks if indexedDB is supported by current browser/service worker context
 * @return true if indexedDB is supported by current browser/service worker context
 */ function isIndexedDBAvailable() {
    return typeof indexedDB === 'object';
}
/**
 * This method validates browser/sw context for indexedDB by opening a dummy indexedDB database and reject
 * if errors occur during the database open operation.
 *
 * @throws exception if current browser/sw context can't run idb.open (ex: Safari iframe, Firefox
 * private browsing)
 */ function validateIndexedDBOpenable() {
    return new Promise((resolve, reject)=>{
        try {
            let preExist = true;
            const DB_CHECK_NAME = 'validate-browser-context-for-indexeddb-analytics-module';
            const request = self.indexedDB.open(DB_CHECK_NAME);
            request.onsuccess = ()=>{
                request.result.close();
                // delete database only when it doesn't pre-exist
                if (!preExist) self.indexedDB.deleteDatabase(DB_CHECK_NAME);
                resolve(true);
            };
            request.onupgradeneeded = ()=>{
                preExist = false;
            };
            request.onerror = ()=>{
                var _a;
                reject(((_a = request.error) === null || _a === void 0 ? void 0 : _a.message) || '');
            };
        } catch (error) {
            reject(error);
        }
    });
}
/**
 *
 * This method checks whether cookie is enabled within current browser
 * @return true if cookie is enabled within current browser
 */ function areCookiesEnabled() {
    if (typeof navigator === 'undefined' || !navigator.cookieEnabled) return false;
    return true;
}
/**
 * Polyfill for `globalThis` object.
 * @returns the `globalThis` object for the given environment.
 */ function getGlobal() {
    if (typeof self !== 'undefined') return self;
    if (typeof window !== 'undefined') return window;
    if (typeof global !== 'undefined') return global;
    throw new Error('Unable to locate global object.');
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @fileoverview Standardized Firebase Error.
 *
 * Usage:
 *
 *   // Typescript string literals for type-safe codes
 *   type Err =
 *     'unknown' |
 *     'object-not-found'
 *     ;
 *
 *   // Closure enum for type-safe error codes
 *   // at-enum {string}
 *   var Err = {
 *     UNKNOWN: 'unknown',
 *     OBJECT_NOT_FOUND: 'object-not-found',
 *   }
 *
 *   let errors: Map<Err, string> = {
 *     'generic-error': "Unknown error",
 *     'file-not-found': "Could not find file: {$file}",
 *   };
 *
 *   // Type-safe function - must pass a valid error code as param.
 *   let error = new ErrorFactory<Err>('service', 'Service', errors);
 *
 *   ...
 *   throw error.create(Err.GENERIC);
 *   ...
 *   throw error.create(Err.FILE_NOT_FOUND, {'file': fileName});
 *   ...
 *   // Service: Could not file file: foo.txt (service/file-not-found).
 *
 *   catch (e) {
 *     assert(e.message === "Could not find file: foo.txt.");
 *     if (e.code === 'service/file-not-found') {
 *       console.log("Could not read file: " + e['file']);
 *     }
 *   }
 */ const ERROR_NAME = 'FirebaseError';
// Based on code from:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Custom_Error_Types
class FirebaseError extends Error {
    constructor(/** The error code for this error. */ code, message, /** Custom data for this error. */ customData){
        super(message);
        this.code = code;
        this.customData = customData;
        /** The custom name for all FirebaseErrors. */ this.name = ERROR_NAME;
        // Fix For ES5
        // https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
        Object.setPrototypeOf(this, FirebaseError.prototype);
        // Maintains proper stack trace for where our error was thrown.
        // Only available on V8.
        if (Error.captureStackTrace) Error.captureStackTrace(this, ErrorFactory.prototype.create);
    }
}
class ErrorFactory {
    constructor(service, serviceName, errors){
        this.service = service;
        this.serviceName = serviceName;
        this.errors = errors;
    }
    create(code, ...data) {
        const customData = data[0] || {
        };
        const fullCode = `${this.service}/${code}`;
        const template = this.errors[code];
        const message = template ? replaceTemplate(template, customData) : 'Error';
        // Service Name: Error message (service/code).
        const fullMessage = `${this.serviceName}: ${message} (${fullCode}).`;
        const error = new FirebaseError(fullCode, fullMessage, customData);
        return error;
    }
}
function replaceTemplate(template, data) {
    return template.replace(PATTERN, (_, key)=>{
        const value = data[key];
        return value != null ? String(value) : `<${key}?>`;
    });
}
const PATTERN = /\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Evaluates a JSON string into a javascript object.
 *
 * @param {string} str A string containing JSON.
 * @return {*} The javascript object representing the specified JSON.
 */ function jsonEval(str) {
    return JSON.parse(str);
}
/**
 * Returns JSON representing a javascript object.
 * @param {*} data Javascript object to be stringified.
 * @return {string} The JSON contents of the object.
 */ function stringify(data) {
    return JSON.stringify(data);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Decodes a Firebase auth. token into constituent parts.
 *
 * Notes:
 * - May return with invalid / incomplete claims if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */ const decode = function(token) {
    let header = {
    }, claims = {
    }, data = {
    }, signature = '';
    try {
        const parts = token.split('.');
        header = jsonEval(base64Decode(parts[0]) || '');
        claims = jsonEval(base64Decode(parts[1]) || '');
        signature = parts[2];
        data = claims['d'] || {
        };
        delete claims['d'];
    } catch (e) {
    }
    return {
        header,
        claims,
        data,
        signature
    };
};
/**
 * Decodes a Firebase auth. token and checks the validity of its time-based claims. Will return true if the
 * token is within the time window authorized by the 'nbf' (not-before) and 'iat' (issued-at) claims.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */ const isValidTimestamp = function(token) {
    const claims = decode(token).claims;
    const now = Math.floor(new Date().getTime() / 1000);
    let validSince = 0, validUntil = 0;
    if (typeof claims === 'object') {
        if (claims.hasOwnProperty('nbf')) validSince = claims['nbf'];
        else if (claims.hasOwnProperty('iat')) validSince = claims['iat'];
        if (claims.hasOwnProperty('exp')) validUntil = claims['exp'];
        else // token will expire after 24h by default
        validUntil = validSince + 86400;
    }
    return !!now && !!validSince && !!validUntil && now >= validSince && now <= validUntil;
};
/**
 * Decodes a Firebase auth. token and returns its issued at time if valid, null otherwise.
 *
 * Notes:
 * - May return null if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */ const issuedAtTime = function(token) {
    const claims = decode(token).claims;
    if (typeof claims === 'object' && claims.hasOwnProperty('iat')) return claims['iat'];
    return null;
};
/**
 * Decodes a Firebase auth. token and checks the validity of its format. Expects a valid issued-at time.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */ const isValidFormat = function(token) {
    const decoded = decode(token), claims = decoded.claims;
    return !!claims && typeof claims === 'object' && claims.hasOwnProperty('iat');
};
/**
 * Attempts to peer into an auth token and determine if it's an admin auth token by looking at the claims portion.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */ const isAdmin = function(token) {
    const claims = decode(token).claims;
    return typeof claims === 'object' && claims['admin'] === true;
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function contains(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
}
function safeGet(obj, key) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) return obj[key];
    else return undefined;
}
function isEmpty(obj) {
    for(const key in obj){
        if (Object.prototype.hasOwnProperty.call(obj, key)) return false;
    }
    return true;
}
function map(obj, fn, contextObj) {
    const res = {
    };
    for(const key in obj)if (Object.prototype.hasOwnProperty.call(obj, key)) res[key] = fn.call(contextObj, obj[key], key, obj);
    return res;
}
/**
 * Deep equal two objects. Support Arrays and Objects.
 */ function deepEqual(a, b) {
    if (a === b) return true;
    const aKeys = Object.keys(a);
    const bKeys = Object.keys(b);
    for (const k of aKeys){
        if (!bKeys.includes(k)) return false;
        const aProp = a[k];
        const bProp = b[k];
        if (isObject(aProp) && isObject(bProp)) {
            if (!deepEqual(aProp, bProp)) return false;
        } else if (aProp !== bProp) return false;
    }
    for (const k1 of bKeys){
        if (!aKeys.includes(k1)) return false;
    }
    return true;
}
function isObject(thing) {
    return thing !== null && typeof thing === 'object';
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Returns a querystring-formatted string (e.g. &arg=val&arg2=val2) from a
 * params object (e.g. {arg: 'val', arg2: 'val2'})
 * Note: You must prepend it with ? when adding it to a URL.
 */ function querystring(querystringParams) {
    const params = [];
    for (const [key, value] of Object.entries(querystringParams))if (Array.isArray(value)) value.forEach((arrayVal)=>{
        params.push(encodeURIComponent(key) + '=' + encodeURIComponent(arrayVal));
    });
    else params.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
    return params.length ? '&' + params.join('&') : '';
}
/**
 * Decodes a querystring (e.g. ?arg=val&arg2=val2) into a params object
 * (e.g. {arg: 'val', arg2: 'val2'})
 */ function querystringDecode(querystring1) {
    const obj = {
    };
    const tokens = querystring1.replace(/^\?/, '').split('&');
    tokens.forEach((token)=>{
        if (token) {
            const [key, value] = token.split('=');
            obj[decodeURIComponent(key)] = decodeURIComponent(value);
        }
    });
    return obj;
}
/**
 * Extract the query string part of a URL, including the leading question mark (if present).
 */ function extractQuerystring(url) {
    const queryStart = url.indexOf('?');
    if (!queryStart) return '';
    const fragmentStart = url.indexOf('#', queryStart);
    return url.substring(queryStart, fragmentStart > 0 ? fragmentStart : undefined);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @fileoverview SHA-1 cryptographic hash.
 * Variable names follow the notation in FIPS PUB 180-3:
 * http://csrc.nist.gov/publications/fips/fips180-3/fips180-3_final.pdf.
 *
 * Usage:
 *   var sha1 = new sha1();
 *   sha1.update(bytes);
 *   var hash = sha1.digest();
 *
 * Performance:
 *   Chrome 23:   ~400 Mbit/s
 *   Firefox 16:  ~250 Mbit/s
 *
 */ /**
 * SHA-1 cryptographic hash constructor.
 *
 * The properties declared here are discussed in the above algorithm document.
 * @constructor
 * @final
 * @struct
 */ class Sha1 {
    constructor(){
        /**
         * Holds the previous values of accumulated variables a-e in the compress_
         * function.
         * @private
         */ this.chain_ = [];
        /**
         * A buffer holding the partially computed hash result.
         * @private
         */ this.buf_ = [];
        /**
         * An array of 80 bytes, each a part of the message to be hashed.  Referred to
         * as the message schedule in the docs.
         * @private
         */ this.W_ = [];
        /**
         * Contains data needed to pad messages less than 64 bytes.
         * @private
         */ this.pad_ = [];
        /**
         * @private {number}
         */ this.inbuf_ = 0;
        /**
         * @private {number}
         */ this.total_ = 0;
        this.blockSize = 64;
        this.pad_[0] = 128;
        for(let i = 1; i < this.blockSize; ++i)this.pad_[i] = 0;
        this.reset();
    }
    reset() {
        this.chain_[0] = 1732584193;
        this.chain_[1] = 4023233417;
        this.chain_[2] = 2562383102;
        this.chain_[3] = 271733878;
        this.chain_[4] = 3285377520;
        this.inbuf_ = 0;
        this.total_ = 0;
    }
    /**
     * Internal compress helper function.
     * @param buf Block to compress.
     * @param offset Offset of the block in the buffer.
     * @private
     */ compress_(buf, offset) {
        if (!offset) offset = 0;
        const W = this.W_;
        // get 16 big endian words
        if (typeof buf === 'string') for(let i = 0; i < 16; i++){
            // TODO(user): [bug 8140122] Recent versions of Safari for Mac OS and iOS
            // have a bug that turns the post-increment ++ operator into pre-increment
            // during JIT compilation.  We have code that depends heavily on SHA-1 for
            // correctness and which is affected by this bug, so I've removed all uses
            // of post-increment ++ in which the result value is used.  We can revert
            // this change once the Safari bug
            // (https://bugs.webkit.org/show_bug.cgi?id=109036) has been fixed and
            // most clients have been updated.
            W[i] = buf.charCodeAt(offset) << 24 | buf.charCodeAt(offset + 1) << 16 | buf.charCodeAt(offset + 2) << 8 | buf.charCodeAt(offset + 3);
            offset += 4;
        }
        else for(let i1 = 0; i1 < 16; i1++){
            W[i1] = buf[offset] << 24 | buf[offset + 1] << 16 | buf[offset + 2] << 8 | buf[offset + 3];
            offset += 4;
        }
        // expand to 80 words
        for(let i2 = 16; i2 < 80; i2++){
            const t = W[i2 - 3] ^ W[i2 - 8] ^ W[i2 - 14] ^ W[i2 - 16];
            W[i2] = (t << 1 | t >>> 31) & 4294967295;
        }
        let a = this.chain_[0];
        let b = this.chain_[1];
        let c = this.chain_[2];
        let d = this.chain_[3];
        let e = this.chain_[4];
        let f, k;
        // TODO(user): Try to unroll this loop to speed up the computation.
        for(let i3 = 0; i3 < 80; i3++){
            if (i3 < 40) {
                if (i3 < 20) {
                    f = d ^ b & (c ^ d);
                    k = 1518500249;
                } else {
                    f = b ^ c ^ d;
                    k = 1859775393;
                }
            } else if (i3 < 60) {
                f = b & c | d & (b | c);
                k = 2400959708;
            } else {
                f = b ^ c ^ d;
                k = 3395469782;
            }
            const t = (a << 5 | a >>> 27) + f + e + k + W[i3] & 4294967295;
            e = d;
            d = c;
            c = (b << 30 | b >>> 2) & 4294967295;
            b = a;
            a = t;
        }
        this.chain_[0] = this.chain_[0] + a & 4294967295;
        this.chain_[1] = this.chain_[1] + b & 4294967295;
        this.chain_[2] = this.chain_[2] + c & 4294967295;
        this.chain_[3] = this.chain_[3] + d & 4294967295;
        this.chain_[4] = this.chain_[4] + e & 4294967295;
    }
    update(bytes, length) {
        // TODO(johnlenz): tighten the function signature and remove this check
        if (bytes == null) return;
        if (length === undefined) length = bytes.length;
        const lengthMinusBlock = length - this.blockSize;
        let n = 0;
        // Using local instead of member variables gives ~5% speedup on Firefox 16.
        const buf = this.buf_;
        let inbuf = this.inbuf_;
        // The outer while loop should execute at most twice.
        while(n < length){
            // When we have no data in the block to top up, we can directly process the
            // input buffer (assuming it contains sufficient data). This gives ~25%
            // speedup on Chrome 23 and ~15% speedup on Firefox 16, but requires that
            // the data is provided in large chunks (or in multiples of 64 bytes).
            if (inbuf === 0) while(n <= lengthMinusBlock){
                this.compress_(bytes, n);
                n += this.blockSize;
            }
            if (typeof bytes === 'string') while(n < length){
                buf[inbuf] = bytes.charCodeAt(n);
                ++inbuf;
                ++n;
                if (inbuf === this.blockSize) {
                    this.compress_(buf);
                    inbuf = 0;
                    break;
                }
            }
            else while(n < length){
                buf[inbuf] = bytes[n];
                ++inbuf;
                ++n;
                if (inbuf === this.blockSize) {
                    this.compress_(buf);
                    inbuf = 0;
                    break;
                }
            }
        }
        this.inbuf_ = inbuf;
        this.total_ += length;
    }
    /** @override */ digest() {
        const digest = [];
        let totalBits = this.total_ * 8;
        // Add pad 0x80 0x00*.
        if (this.inbuf_ < 56) this.update(this.pad_, 56 - this.inbuf_);
        else this.update(this.pad_, this.blockSize - (this.inbuf_ - 56));
        // Add # bits.
        for(let i = this.blockSize - 1; i >= 56; i--){
            this.buf_[i] = totalBits & 255;
            totalBits /= 256; // Don't use bit-shifting here!
        }
        this.compress_(this.buf_);
        let n = 0;
        for(let i4 = 0; i4 < 5; i4++)for(let j = 24; j >= 0; j -= 8){
            digest[n] = this.chain_[i4] >> j & 255;
            ++n;
        }
        return digest;
    }
}
/**
 * Helper to make a Subscribe function (just like Promise helps make a
 * Thenable).
 *
 * @param executor Function which can make calls to a single Observer
 *     as a proxy.
 * @param onNoObservers Callback when count of Observers goes to zero.
 */ function createSubscribe(executor, onNoObservers) {
    const proxy = new ObserverProxy(executor, onNoObservers);
    return proxy.subscribe.bind(proxy);
}
/**
 * Implement fan-out for any number of Observers attached via a subscribe
 * function.
 */ class ObserverProxy {
    /**
     * @param executor Function which can make calls to a single Observer
     *     as a proxy.
     * @param onNoObservers Callback when count of Observers goes to zero.
     */ constructor(executor, onNoObservers){
        this.observers = [];
        this.unsubscribes = [];
        this.observerCount = 0;
        // Micro-task scheduling by calling task.then().
        this.task = Promise.resolve();
        this.finalized = false;
        this.onNoObservers = onNoObservers;
        // Call the executor asynchronously so subscribers that are called
        // synchronously after the creation of the subscribe function
        // can still receive the very first value generated in the executor.
        this.task.then(()=>{
            executor(this);
        }).catch((e)=>{
            this.error(e);
        });
    }
    next(value) {
        this.forEachObserver((observer)=>{
            observer.next(value);
        });
    }
    error(error) {
        this.forEachObserver((observer)=>{
            observer.error(error);
        });
        this.close(error);
    }
    complete() {
        this.forEachObserver((observer)=>{
            observer.complete();
        });
        this.close();
    }
    /**
     * Subscribe function that can be used to add an Observer to the fan-out list.
     *
     * - We require that no event is sent to a subscriber sychronously to their
     *   call to subscribe().
     */ subscribe(nextOrObserver, error, complete) {
        let observer;
        if (nextOrObserver === undefined && error === undefined && complete === undefined) throw new Error('Missing Observer.');
        // Assemble an Observer object when passed as callback functions.
        if (implementsAnyMethods(nextOrObserver, [
            'next',
            'error',
            'complete'
        ])) observer = nextOrObserver;
        else observer = {
            next: nextOrObserver,
            error,
            complete
        };
        if (observer.next === undefined) observer.next = noop;
        if (observer.error === undefined) observer.error = noop;
        if (observer.complete === undefined) observer.complete = noop;
        const unsub = this.unsubscribeOne.bind(this, this.observers.length);
        // Attempt to subscribe to a terminated Observable - we
        // just respond to the Observer with the final error or complete
        // event.
        if (this.finalized) // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.task.then(()=>{
            try {
                if (this.finalError) observer.error(this.finalError);
                else observer.complete();
            } catch (e) {
            // nothing
            }
            return;
        });
        this.observers.push(observer);
        return unsub;
    }
    // Unsubscribe is synchronous - we guarantee that no events are sent to
    // any unsubscribed Observer.
    unsubscribeOne(i) {
        if (this.observers === undefined || this.observers[i] === undefined) return;
        delete this.observers[i];
        this.observerCount -= 1;
        if (this.observerCount === 0 && this.onNoObservers !== undefined) this.onNoObservers(this);
    }
    forEachObserver(fn) {
        if (this.finalized) // Already closed by previous event....just eat the additional values.
        return;
        // Since sendOne calls asynchronously - there is no chance that
        // this.observers will become undefined.
        for(let i = 0; i < this.observers.length; i++)this.sendOne(i, fn);
    }
    // Call the Observer via one of it's callback function. We are careful to
    // confirm that the observe has not been unsubscribed since this asynchronous
    // function had been queued.
    sendOne(i, fn) {
        // Execute the callback asynchronously
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.task.then(()=>{
            if (this.observers !== undefined && this.observers[i] !== undefined) try {
                fn(this.observers[i]);
            } catch (e) {
                // Ignore exceptions raised in Observers or missing methods of an
                // Observer.
                // Log error to console. b/31404806
                if (typeof console !== 'undefined' && console.error) console.error(e);
            }
        });
    }
    close(err) {
        if (this.finalized) return;
        this.finalized = true;
        if (err !== undefined) this.finalError = err;
        // Proxy is no longer needed - garbage collect references
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.task.then(()=>{
            this.observers = undefined;
            this.onNoObservers = undefined;
        });
    }
}
/** Turn synchronous function into one called asynchronously. */ // eslint-disable-next-line @typescript-eslint/ban-types
function async(fn, onError) {
    return (...args)=>{
        Promise.resolve(true).then(()=>{
            fn(...args);
        }).catch((error)=>{
            if (onError) onError(error);
        });
    };
}
/**
 * Return true if the object passed in implements any of the named methods.
 */ function implementsAnyMethods(obj, methods) {
    if (typeof obj !== 'object' || obj === null) return false;
    for (const method of methods){
        if (method in obj && typeof obj[method] === 'function') return true;
    }
    return false;
}
function noop() {
// do nothing
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Check to make sure the appropriate number of arguments are provided for a public function.
 * Throws an error if it fails.
 *
 * @param fnName The function name
 * @param minCount The minimum number of arguments to allow for the function call
 * @param maxCount The maximum number of argument to allow for the function call
 * @param argCount The actual number of arguments provided.
 */ const validateArgCount = function(fnName, minCount, maxCount, argCount) {
    let argError;
    if (argCount < minCount) argError = 'at least ' + minCount;
    else if (argCount > maxCount) argError = maxCount === 0 ? 'none' : 'no more than ' + maxCount;
    if (argError) {
        const error = fnName + ' failed: Was called with ' + argCount + (argCount === 1 ? ' argument.' : ' arguments.') + ' Expects ' + argError + '.';
        throw new Error(error);
    }
};
/**
 * Generates a string to prefix an error message about failed argument validation
 *
 * @param fnName The function name
 * @param argName The name of the argument
 * @return The prefix to add to the error thrown for validation.
 */ function errorPrefix(fnName, argName) {
    return `${fnName} failed: ${argName} argument `;
}
/**
 * @param fnName
 * @param argumentNumber
 * @param namespace
 * @param optional
 */ function validateNamespace(fnName, namespace, optional) {
    if (optional && !namespace) return;
    if (typeof namespace !== 'string') //TODO: I should do more validation here. We only allow certain chars in namespaces.
    throw new Error(errorPrefix(fnName, 'namespace') + 'must be a valid firebase namespace.');
}
function validateCallback(fnName, argumentName, // eslint-disable-next-line @typescript-eslint/ban-types
callback, optional) {
    if (optional && !callback) return;
    if (typeof callback !== 'function') throw new Error(errorPrefix(fnName, argumentName) + 'must be a valid function.');
}
function validateContextObject(fnName, argumentName, context, optional) {
    if (optional && !context) return;
    if (typeof context !== 'object' || context === null) throw new Error(errorPrefix(fnName, argumentName) + 'must be a valid context object.');
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // Code originally came from goog.crypt.stringToUtf8ByteArray, but for some reason they
// automatically replaced '\r\n' with '\n', and they didn't handle surrogate pairs,
// so it's been modified.
// Note that not all Unicode characters appear as single characters in JavaScript strings.
// fromCharCode returns the UTF-16 encoding of a character - so some Unicode characters
// use 2 characters in Javascript.  All 4-byte UTF-8 characters begin with a first
// character in the range 0xD800 - 0xDBFF (the first character of a so-called surrogate
// pair).
// See http://www.ecma-international.org/ecma-262/5.1/#sec-15.1.3
/**
 * @param {string} str
 * @return {Array}
 */ const stringToByteArray = function(str) {
    const out = [];
    let p = 0;
    for(let i = 0; i < str.length; i++){
        let c = str.charCodeAt(i);
        // Is this the lead surrogate in a surrogate pair?
        if (c >= 55296 && c <= 56319) {
            const high = c - 55296; // the high 10 bits.
            i++;
            assert(i < str.length, 'Surrogate pair missing trail surrogate.');
            const low = str.charCodeAt(i) - 56320; // the low 10 bits.
            c = 65536 + (high << 10) + low;
        }
        if (c < 128) out[p++] = c;
        else if (c < 2048) {
            out[p++] = c >> 6 | 192;
            out[p++] = c & 63 | 128;
        } else if (c < 65536) {
            out[p++] = c >> 12 | 224;
            out[p++] = c >> 6 & 63 | 128;
            out[p++] = c & 63 | 128;
        } else {
            out[p++] = c >> 18 | 240;
            out[p++] = c >> 12 & 63 | 128;
            out[p++] = c >> 6 & 63 | 128;
            out[p++] = c & 63 | 128;
        }
    }
    return out;
};
/**
 * Calculate length without actually converting; useful for doing cheaper validation.
 * @param {string} str
 * @return {number}
 */ const stringLength = function(str) {
    let p = 0;
    for(let i = 0; i < str.length; i++){
        const c = str.charCodeAt(i);
        if (c < 128) p++;
        else if (c < 2048) p += 2;
        else if (c >= 55296 && c <= 56319) {
            // Lead surrogate of a surrogate pair.  The pair together will take 4 bytes to represent.
            p += 4;
            i++; // skip trail surrogate.
        } else p += 3;
    }
    return p;
};
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * The amount of milliseconds to exponentially increase.
 */ const DEFAULT_INTERVAL_MILLIS = 1000;
/**
 * The factor to backoff by.
 * Should be a number greater than 1.
 */ const DEFAULT_BACKOFF_FACTOR = 2;
/**
 * The maximum milliseconds to increase to.
 *
 * <p>Visible for testing
 */ const MAX_VALUE_MILLIS = 14400000; // Four hours, like iOS and Android.
/**
 * The percentage of backoff time to randomize by.
 * See
 * http://go/safe-client-behavior#step-1-determine-the-appropriate-retry-interval-to-handle-spike-traffic
 * for context.
 *
 * <p>Visible for testing
 */ const RANDOM_FACTOR = 0.5;
/**
 * Based on the backoff method from
 * https://github.com/google/closure-library/blob/master/closure/goog/math/exponentialbackoff.js.
 * Extracted here so we don't need to pass metadata and a stateful ExponentialBackoff object around.
 */ function calculateBackoffMillis(backoffCount, intervalMillis = DEFAULT_INTERVAL_MILLIS, backoffFactor = DEFAULT_BACKOFF_FACTOR) {
    // Calculates an exponentially increasing value.
    // Deviation: calculates value from count and a constant interval, so we only need to save value
    // and count to restore state.
    const currBaseValue = intervalMillis * Math.pow(backoffFactor, backoffCount);
    // A random "fuzz" to avoid waves of retries.
    // Deviation: randomFactor is required.
    const randomWait = Math.round(// A fraction of the backoff value to add/subtract.
    // Deviation: changes multiplication order to improve readability.
    RANDOM_FACTOR * currBaseValue * (Math.random() - 0.5) * 2);
    // Limits backoff to max to avoid effectively permanent backoff.
    return Math.min(MAX_VALUE_MILLIS, currBaseValue + randomWait);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Provide English ordinal letters after a number
 */ function ordinal(i) {
    if (!Number.isFinite(i)) return `${i}`;
    return i + indicator(i);
}
function indicator(i) {
    i = Math.abs(i);
    const cent = i % 100;
    if (cent >= 10 && cent <= 20) return 'th';
    const dec = i % 10;
    if (dec === 1) return 'st';
    if (dec === 2) return 'nd';
    if (dec === 3) return 'rd';
    return 'th';
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function getModularInstance(service) {
    if (service && service._delegate) return service._delegate;
    else return service;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"fZmft":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "LogLevel", ()=>LogLevel
);
parcelHelpers.export(exports, "Logger", ()=>Logger
);
parcelHelpers.export(exports, "setLogLevel", ()=>setLogLevel
);
parcelHelpers.export(exports, "setUserLogHandler", ()=>setUserLogHandler
);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A container for all of the Logger instances
 */ const instances = [];
/**
 * The JS SDK supports 5 log levels and also allows a user the ability to
 * silence the logs altogether.
 *
 * The order is a follows:
 * DEBUG < VERBOSE < INFO < WARN < ERROR
 *
 * All of the log types above the current log level will be captured (i.e. if
 * you set the log level to `INFO`, errors will still be logged, but `DEBUG` and
 * `VERBOSE` logs will not)
 */ var LogLevel;
(function(LogLevel1) {
    LogLevel1[LogLevel1["DEBUG"] = 0] = "DEBUG";
    LogLevel1[LogLevel1["VERBOSE"] = 1] = "VERBOSE";
    LogLevel1[LogLevel1["INFO"] = 2] = "INFO";
    LogLevel1[LogLevel1["WARN"] = 3] = "WARN";
    LogLevel1[LogLevel1["ERROR"] = 4] = "ERROR";
    LogLevel1[LogLevel1["SILENT"] = 5] = "SILENT";
})(LogLevel || (LogLevel = {
}));
const levelStringToEnum = {
    'debug': LogLevel.DEBUG,
    'verbose': LogLevel.VERBOSE,
    'info': LogLevel.INFO,
    'warn': LogLevel.WARN,
    'error': LogLevel.ERROR,
    'silent': LogLevel.SILENT
};
/**
 * The default log level
 */ const defaultLogLevel = LogLevel.INFO;
/**
 * By default, `console.debug` is not displayed in the developer console (in
 * chrome). To avoid forcing users to have to opt-in to these logs twice
 * (i.e. once for firebase, and once in the console), we are sending `DEBUG`
 * logs to the `console.log` function.
 */ const ConsoleMethod = {
    [LogLevel.DEBUG]: 'log',
    [LogLevel.VERBOSE]: 'log',
    [LogLevel.INFO]: 'info',
    [LogLevel.WARN]: 'warn',
    [LogLevel.ERROR]: 'error'
};
/**
 * The default log handler will forward DEBUG, VERBOSE, INFO, WARN, and ERROR
 * messages on to their corresponding console counterparts (if the log method
 * is supported by the current log level)
 */ const defaultLogHandler = (instance, logType, ...args)=>{
    if (logType < instance.logLevel) return;
    const now = new Date().toISOString();
    const method = ConsoleMethod[logType];
    if (method) console[method](`[${now}]  ${instance.name}:`, ...args);
    else throw new Error(`Attempted to log a message with an invalid logType (value: ${logType})`);
};
class Logger {
    /**
     * Gives you an instance of a Logger to capture messages according to
     * Firebase's logging scheme.
     *
     * @param name The name that the logs will be associated with
     */ constructor(name){
        this.name = name;
        /**
         * The log level of the given Logger instance.
         */ this._logLevel = defaultLogLevel;
        /**
         * The main (internal) log handler for the Logger instance.
         * Can be set to a new function in internal package code but not by user.
         */ this._logHandler = defaultLogHandler;
        /**
         * The optional, additional, user-defined log handler for the Logger instance.
         */ this._userLogHandler = null;
        /**
         * Capture the current instance for later use
         */ instances.push(this);
    }
    get logLevel() {
        return this._logLevel;
    }
    set logLevel(val) {
        if (!(val in LogLevel)) throw new TypeError(`Invalid value "${val}" assigned to \`logLevel\``);
        this._logLevel = val;
    }
    // Workaround for setter/getter having to be the same type.
    setLogLevel(val) {
        this._logLevel = typeof val === 'string' ? levelStringToEnum[val] : val;
    }
    get logHandler() {
        return this._logHandler;
    }
    set logHandler(val) {
        if (typeof val !== 'function') throw new TypeError('Value assigned to `logHandler` must be a function');
        this._logHandler = val;
    }
    get userLogHandler() {
        return this._userLogHandler;
    }
    set userLogHandler(val) {
        this._userLogHandler = val;
    }
    /**
     * The functions below are all based on the `console` interface
     */ debug(...args) {
        this._userLogHandler && this._userLogHandler(this, LogLevel.DEBUG, ...args);
        this._logHandler(this, LogLevel.DEBUG, ...args);
    }
    log(...args) {
        this._userLogHandler && this._userLogHandler(this, LogLevel.VERBOSE, ...args);
        this._logHandler(this, LogLevel.VERBOSE, ...args);
    }
    info(...args) {
        this._userLogHandler && this._userLogHandler(this, LogLevel.INFO, ...args);
        this._logHandler(this, LogLevel.INFO, ...args);
    }
    warn(...args) {
        this._userLogHandler && this._userLogHandler(this, LogLevel.WARN, ...args);
        this._logHandler(this, LogLevel.WARN, ...args);
    }
    error(...args) {
        this._userLogHandler && this._userLogHandler(this, LogLevel.ERROR, ...args);
        this._logHandler(this, LogLevel.ERROR, ...args);
    }
}
function setLogLevel(level) {
    instances.forEach((inst)=>{
        inst.setLogLevel(level);
    });
}
function setUserLogHandler(logCallback, options) {
    for (const instance1 of instances){
        let customLogLevel = null;
        if (options && options.level) customLogLevel = levelStringToEnum[options.level];
        if (logCallback === null) instance1.userLogHandler = null;
        else instance1.userLogHandler = (instance, level, ...args)=>{
            const message = args.map((arg)=>{
                if (arg == null) return null;
                else if (typeof arg === 'string') return arg;
                else if (typeof arg === 'number' || typeof arg === 'boolean') return arg.toString();
                else if (arg instanceof Error) return arg.message;
                else try {
                    return JSON.stringify(arg);
                } catch (ignored) {
                    return null;
                }
            }).filter((arg)=>arg
            ).join(' ');
            if (level >= (customLogLevel !== null && customLogLevel !== void 0 ? customLogLevel : instance.logLevel)) logCallback({
                level: LogLevel[level].toLowerCase(),
                message,
                args,
                type: instance.name
            });
        };
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d5jf4":[function(require,module,exports) {
// shim for using process in browser
var process = module.exports = {
};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function() {
    try {
        if (typeof setTimeout === 'function') cachedSetTimeout = setTimeout;
        else cachedSetTimeout = defaultSetTimout;
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') cachedClearTimeout = clearTimeout;
        else cachedClearTimeout = defaultClearTimeout;
    } catch (e1) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
    if (!draining || !currentQueue) return;
    draining = false;
    if (currentQueue.length) queue = currentQueue.concat(queue);
    else queueIndex = -1;
    if (queue.length) drainQueue();
}
function drainQueue() {
    if (draining) return;
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while(len){
        currentQueue = queue;
        queue = [];
        while(++queueIndex < len)if (currentQueue) currentQueue[queueIndex].run();
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) runTimeout(drainQueue);
};
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {
};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {
};
function noop() {
}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function(name) {
    return [];
};
process.binding = function(name) {
    throw new Error('process.binding is not supported');
};
process.cwd = function() {
    return '/';
};
process.chdir = function(dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() {
    return 0;
};

},{}],"5vZiB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "productCard", ()=>productCard
);
function productCard({ imageUrlPath , title , description , price , category  }) {
    const template = `
    <div class="product-card">
        <div class="product-tumb">
            <img src="${imageUrlPath}" alt="product: ${title}">
        </div>
        <div class="product-details">
            <span class="product-category">${category}</span>
            <h4><a href="">${title}</a></h4>
            <p>${description}</p>
            <div class="product-bottom-details">
                <div class="product-price">$${price}</div>
                <div class="product-links">
                    <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                    </svg><i class="fa fa-heart"></i></a>
                    <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-square" viewBox="0 0 16 16">
                        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                    </svg><i class="fa fa-shopping-cart"></i></a>
                </div>
            </div>
        </div>
    </div>
    `;
    const element = document.createRange().createContextualFragment(template).children[0];
    return element;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cFl8N":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
//export service objects
parcelHelpers.export(exports, "db", ()=>db
);
parcelHelpers.export(exports, "storage", ()=>storage
);
// Import the functions you need from the SDKs you need
var _app = require("firebase/app");
var _database = require("firebase/database");
var _storage = require("firebase/storage");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBCeWSm4F0Kzc2CGwF3h9XqF_lqOUSuy9o",
    authDomain: "hinode-anime.firebaseapp.com",
    databaseURL: "https://hinode-anime-default-rtdb.firebaseio.com",
    projectId: "hinode-anime",
    storageBucket: "hinode-anime.appspot.com",
    messagingSenderId: "100189736865",
    appId: "1:100189736865:web:9d7b63478bc1e3991505e0"
};
// Initialize Firebase
const app = _app.initializeApp(firebaseConfig);
const db = _database.getDatabase(app);
const storage = _storage.getStorage(app);

},{"firebase/app":"5wGMN","firebase/database":"bpqHw","firebase/storage":"9dDUH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5wGMN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _app = require("@firebase/app");
parcelHelpers.exportAll(_app, exports);
var name = "firebase";
var version = "9.6.5";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ _app.registerVersion(name, version, 'app');

},{"@firebase/app":"3AcPV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9dDUH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _storage = require("@firebase/storage");
parcelHelpers.exportAll(_storage, exports);

},{"@firebase/storage":"jEcdO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jEcdO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "StringFormat", ()=>StringFormat
);
parcelHelpers.export(exports, "_FbsBlob", ()=>FbsBlob
);
parcelHelpers.export(exports, "_Location", ()=>Location
);
parcelHelpers.export(exports, "_TaskEvent", ()=>TaskEvent
);
parcelHelpers.export(exports, "_TaskState", ()=>TaskState
);
parcelHelpers.export(exports, "_UploadTask", ()=>UploadTask
);
parcelHelpers.export(exports, "_dataFromString", ()=>dataFromString
);
parcelHelpers.export(exports, "_getChild", ()=>_getChild
);
parcelHelpers.export(exports, "_invalidArgument", ()=>invalidArgument
);
parcelHelpers.export(exports, "_invalidRootOperation", ()=>invalidRootOperation
);
parcelHelpers.export(exports, "connectStorageEmulator", ()=>connectStorageEmulator
);
parcelHelpers.export(exports, "deleteObject", ()=>deleteObject
);
parcelHelpers.export(exports, "getBlob", ()=>getBlob
);
parcelHelpers.export(exports, "getBytes", ()=>getBytes
);
parcelHelpers.export(exports, "getDownloadURL", ()=>getDownloadURL
);
parcelHelpers.export(exports, "getMetadata", ()=>getMetadata
);
parcelHelpers.export(exports, "getStorage", ()=>getStorage
);
parcelHelpers.export(exports, "getStream", ()=>getStream
);
parcelHelpers.export(exports, "list", ()=>list
);
parcelHelpers.export(exports, "listAll", ()=>listAll
);
parcelHelpers.export(exports, "ref", ()=>ref
);
parcelHelpers.export(exports, "updateMetadata", ()=>updateMetadata
);
parcelHelpers.export(exports, "uploadBytes", ()=>uploadBytes
);
parcelHelpers.export(exports, "uploadBytesResumable", ()=>uploadBytesResumable
);
parcelHelpers.export(exports, "uploadString", ()=>uploadString
);
var _app = require("@firebase/app");
var _util = require("@firebase/util");
var _component = require("@firebase/component");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @fileoverview Constants used in the Firebase Storage library.
 */ /**
 * Domain name for firebase storage.
 */ const DEFAULT_HOST = 'firebasestorage.googleapis.com';
/**
 * The key in Firebase config json for the storage bucket.
 */ const CONFIG_STORAGE_BUCKET_KEY = 'storageBucket';
/**
 * 2 minutes
 *
 * The timeout for all operations except upload.
 */ const DEFAULT_MAX_OPERATION_RETRY_TIME = 120000;
/**
 * 10 minutes
 *
 * The timeout for upload.
 */ const DEFAULT_MAX_UPLOAD_RETRY_TIME = 600000;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * An error returned by the Firebase Storage SDK.
 * @public
 */ class StorageError extends _util.FirebaseError {
    /**
     * @param code - A StorageErrorCode string to be prefixed with 'storage/' and
     *  added to the end of the message.
     * @param message  - Error message.
     */ constructor(code, message){
        super(prependCode(code), `Firebase Storage: ${message} (${prependCode(code)})`);
        /**
         * Stores custom error data unque to StorageError.
         */ this.customData = {
            serverResponse: null
        };
        this._baseMessage = this.message;
        // Without this, `instanceof StorageError`, in tests for example,
        // returns false.
        Object.setPrototypeOf(this, StorageError.prototype);
    }
    /**
     * Compares a StorageErrorCode against this error's code, filtering out the prefix.
     */ _codeEquals(code) {
        return prependCode(code) === this.code;
    }
    /**
     * Optional response message that was added by the server.
     */ get serverResponse() {
        return this.customData.serverResponse;
    }
    set serverResponse(serverResponse) {
        this.customData.serverResponse = serverResponse;
        if (this.customData.serverResponse) this.message = `${this._baseMessage}\n${this.customData.serverResponse}`;
        else this.message = this._baseMessage;
    }
}
function prependCode(code) {
    return 'storage/' + code;
}
function unknown() {
    const message = "An unknown error occurred, please check the error payload for server response.";
    return new StorageError("unknown" /* UNKNOWN */ , message);
}
function objectNotFound(path) {
    return new StorageError("object-not-found" /* OBJECT_NOT_FOUND */ , "Object '" + path + "' does not exist.");
}
function quotaExceeded(bucket) {
    return new StorageError("quota-exceeded" /* QUOTA_EXCEEDED */ , "Quota for bucket '" + bucket + "' exceeded, please view quota on " + 'https://firebase.google.com/pricing/.');
}
function unauthenticated() {
    const message = "User is not authenticated, please authenticate using Firebase Authentication and try again.";
    return new StorageError("unauthenticated" /* UNAUTHENTICATED */ , message);
}
function unauthorizedApp() {
    return new StorageError("unauthorized-app" /* UNAUTHORIZED_APP */ , 'This app does not have permission to access Firebase Storage on this project.');
}
function unauthorized(path) {
    return new StorageError("unauthorized" /* UNAUTHORIZED */ , "User does not have permission to access '" + path + "'.");
}
function retryLimitExceeded() {
    return new StorageError("retry-limit-exceeded" /* RETRY_LIMIT_EXCEEDED */ , 'Max retry time for operation exceeded, please try again.');
}
function canceled() {
    return new StorageError("canceled" /* CANCELED */ , 'User canceled the upload/download.');
}
function invalidUrl(url) {
    return new StorageError("invalid-url" /* INVALID_URL */ , "Invalid URL '" + url + "'.");
}
function invalidDefaultBucket(bucket) {
    return new StorageError("invalid-default-bucket" /* INVALID_DEFAULT_BUCKET */ , "Invalid default bucket '" + bucket + "'.");
}
function noDefaultBucket() {
    return new StorageError("no-default-bucket" /* NO_DEFAULT_BUCKET */ , "No default bucket found. Did you set the '" + CONFIG_STORAGE_BUCKET_KEY + "' property when initializing the app?");
}
function cannotSliceBlob() {
    return new StorageError("cannot-slice-blob" /* CANNOT_SLICE_BLOB */ , 'Cannot slice blob for upload. Please retry the upload.');
}
function serverFileWrongSize() {
    return new StorageError("server-file-wrong-size" /* SERVER_FILE_WRONG_SIZE */ , 'Server recorded incorrect upload file size, please retry the upload.');
}
function noDownloadURL() {
    return new StorageError("no-download-url" /* NO_DOWNLOAD_URL */ , 'The given file does not have any download URLs.');
}
/**
 * @internal
 */ function invalidArgument(message) {
    return new StorageError("invalid-argument" /* INVALID_ARGUMENT */ , message);
}
function appDeleted() {
    return new StorageError("app-deleted" /* APP_DELETED */ , 'The Firebase app was deleted.');
}
/**
 * @param name - The name of the operation that was invalid.
 *
 * @internal
 */ function invalidRootOperation(name1) {
    return new StorageError("invalid-root-operation" /* INVALID_ROOT_OPERATION */ , "The operation '" + name1 + "' cannot be performed on a root reference, create a non-root " + "reference using child, such as .child('file.png').");
}
/**
 * @param format - The format that was not valid.
 * @param message - A message describing the format violation.
 */ function invalidFormat(format, message) {
    return new StorageError("invalid-format" /* INVALID_FORMAT */ , "String does not match format '" + format + "': " + message);
}
/**
 * @param message - A message describing the internal error.
 */ function internalError(message) {
    throw new StorageError("internal-error" /* INTERNAL_ERROR */ , 'Internal error: ' + message);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Firebase Storage location data.
 *
 * @internal
 */ class Location {
    constructor(bucket, path){
        this.bucket = bucket;
        this.path_ = path;
    }
    get path() {
        return this.path_;
    }
    get isRoot() {
        return this.path.length === 0;
    }
    fullServerUrl() {
        const encode = encodeURIComponent;
        return '/b/' + encode(this.bucket) + '/o/' + encode(this.path);
    }
    bucketOnlyServerUrl() {
        const encode = encodeURIComponent;
        return '/b/' + encode(this.bucket) + '/o';
    }
    static makeFromBucketSpec(bucketString, host) {
        let bucketLocation;
        try {
            bucketLocation = Location.makeFromUrl(bucketString, host);
        } catch (e) {
            // Not valid URL, use as-is. This lets you put bare bucket names in
            // config.
            return new Location(bucketString, '');
        }
        if (bucketLocation.path === '') return bucketLocation;
        else throw invalidDefaultBucket(bucketString);
    }
    static makeFromUrl(url, host) {
        let location = null;
        const bucketDomain = '([A-Za-z0-9.\\-_]+)';
        function gsModify(loc) {
            if (loc.path.charAt(loc.path.length - 1) === '/') loc.path_ = loc.path_.slice(0, -1);
        }
        const gsPath = '(/(.*))?$';
        const gsRegex = new RegExp('^gs://' + bucketDomain + gsPath, 'i');
        const gsIndices = {
            bucket: 1,
            path: 3
        };
        function httpModify(loc) {
            loc.path_ = decodeURIComponent(loc.path);
        }
        const version1 = 'v[A-Za-z0-9_]+';
        const firebaseStorageHost = host.replace(/[.]/g, '\\.');
        const firebaseStoragePath = '(/([^?#]*).*)?$';
        const firebaseStorageRegExp = new RegExp(`^https?://${firebaseStorageHost}/${version1}/b/${bucketDomain}/o${firebaseStoragePath}`, 'i');
        const firebaseStorageIndices = {
            bucket: 1,
            path: 3
        };
        const cloudStorageHost = host === DEFAULT_HOST ? '(?:storage.googleapis.com|storage.cloud.google.com)' : host;
        const cloudStoragePath = '([^?#]*)';
        const cloudStorageRegExp = new RegExp(`^https?://${cloudStorageHost}/${bucketDomain}/${cloudStoragePath}`, 'i');
        const cloudStorageIndices = {
            bucket: 1,
            path: 2
        };
        const groups = [
            {
                regex: gsRegex,
                indices: gsIndices,
                postModify: gsModify
            },
            {
                regex: firebaseStorageRegExp,
                indices: firebaseStorageIndices,
                postModify: httpModify
            },
            {
                regex: cloudStorageRegExp,
                indices: cloudStorageIndices,
                postModify: httpModify
            }
        ];
        for(let i = 0; i < groups.length; i++){
            const group = groups[i];
            const captures = group.regex.exec(url);
            if (captures) {
                const bucketValue = captures[group.indices.bucket];
                let pathValue = captures[group.indices.path];
                if (!pathValue) pathValue = '';
                location = new Location(bucketValue, pathValue);
                group.postModify(location);
                break;
            }
        }
        if (location == null) throw invalidUrl(url);
        return location;
    }
}
/**
 * A request whose promise always fails.
 */ class FailRequest {
    constructor(error){
        this.promise_ = Promise.reject(error);
    }
    /** @inheritDoc */ getPromise() {
        return this.promise_;
    }
    /** @inheritDoc */ cancel(_appDelete = false) {
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @param f May be invoked
 *     before the function returns.
 * @param callback Get all the arguments passed to the function
 *     passed to f, including the initial boolean.
 */ function start(f, // eslint-disable-next-line @typescript-eslint/no-explicit-any
callback, timeout) {
    // TODO(andysoto): make this code cleaner (probably refactor into an actual
    // type instead of a bunch of functions with state shared in the closure)
    let waitSeconds = 1;
    // Would type this as "number" but that doesn't work for Node so ¯\_(ツ)_/¯
    // TODO: find a way to exclude Node type definition for storage because storage only works in browser
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let retryTimeoutId = null;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let globalTimeoutId = null;
    let hitTimeout = false;
    let cancelState = 0;
    function canceled1() {
        return cancelState === 2;
    }
    let triggeredCallback = false;
    function triggerCallback(...args) {
        if (!triggeredCallback) {
            triggeredCallback = true;
            callback.apply(null, args);
        }
    }
    function callWithDelay(millis) {
        retryTimeoutId = setTimeout(()=>{
            retryTimeoutId = null;
            f(handler, canceled1());
        }, millis);
    }
    function clearGlobalTimeout() {
        if (globalTimeoutId) clearTimeout(globalTimeoutId);
    }
    function handler(success, ...args) {
        if (triggeredCallback) {
            clearGlobalTimeout();
            return;
        }
        if (success) {
            clearGlobalTimeout();
            triggerCallback.call(null, success, ...args);
            return;
        }
        const mustStop = canceled1() || hitTimeout;
        if (mustStop) {
            clearGlobalTimeout();
            triggerCallback.call(null, success, ...args);
            return;
        }
        if (waitSeconds < 64) /* TODO(andysoto): don't back off so quickly if we know we're offline. */ waitSeconds *= 2;
        let waitMillis;
        if (cancelState === 1) {
            cancelState = 2;
            waitMillis = 0;
        } else waitMillis = (waitSeconds + Math.random()) * 1000;
        callWithDelay(waitMillis);
    }
    let stopped = false;
    function stop1(wasTimeout) {
        if (stopped) return;
        stopped = true;
        clearGlobalTimeout();
        if (triggeredCallback) return;
        if (retryTimeoutId !== null) {
            if (!wasTimeout) cancelState = 2;
            clearTimeout(retryTimeoutId);
            callWithDelay(0);
        } else if (!wasTimeout) cancelState = 1;
    }
    callWithDelay(0);
    globalTimeoutId = setTimeout(()=>{
        hitTimeout = true;
        stop1(true);
    }, timeout);
    return stop1;
}
/**
 * Stops the retry loop from repeating.
 * If the function is currently "in between" retries, it is invoked immediately
 * with the second parameter as "true". Otherwise, it will be invoked once more
 * after the current invocation finishes iff the current invocation would have
 * triggered another retry.
 */ function stop(id) {
    id(false);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function isJustDef(p) {
    return p !== void 0;
}
// eslint-disable-next-line @typescript-eslint/ban-types
function isFunction(p) {
    return typeof p === 'function';
}
function isNonArrayObject(p) {
    return typeof p === 'object' && !Array.isArray(p);
}
function isString(p) {
    return typeof p === 'string' || p instanceof String;
}
function isNativeBlob(p) {
    return isNativeBlobDefined() && p instanceof Blob;
}
function isNativeBlobDefined() {
    return typeof Blob !== 'undefined';
}
function validateNumber(argument, minValue, maxValue, value) {
    if (value < minValue) throw invalidArgument(`Invalid value for '${argument}'. Expected ${minValue} or greater.`);
    if (value > maxValue) throw invalidArgument(`Invalid value for '${argument}'. Expected ${maxValue} or less.`);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function makeUrl(urlPart, host, protocol) {
    let origin = host;
    if (protocol == null) origin = `https://${host}`;
    return `${protocol}://${origin}/v0${urlPart}`;
}
function makeQueryString(params) {
    const encode = encodeURIComponent;
    let queryPart = '?';
    for(const key in params)if (params.hasOwnProperty(key)) {
        const nextPart = encode(key) + '=' + encode(params[key]);
        queryPart = queryPart + nextPart + '&';
    }
    // Chop off the extra '&' or '?' on the end
    queryPart = queryPart.slice(0, -1);
    return queryPart;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Error codes for requests made by the the XhrIo wrapper.
 */ var ErrorCode;
(function(ErrorCode1) {
    ErrorCode1[ErrorCode1["NO_ERROR"] = 0] = "NO_ERROR";
    ErrorCode1[ErrorCode1["NETWORK_ERROR"] = 1] = "NETWORK_ERROR";
    ErrorCode1[ErrorCode1["ABORT"] = 2] = "ABORT";
})(ErrorCode || (ErrorCode = {
}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Handles network logic for all Storage Requests, including error reporting and
 * retries with backoff.
 *
 * @param I - the type of the backend's network response.
 * @param - O the output type used by the rest of the SDK. The conversion
 * happens in the specified `callback_`.
 */ class NetworkRequest {
    constructor(url_, method_, headers_, body_, successCodes_, additionalRetryCodes_, callback_, errorCallback_, timeout_, progressCallback_, connectionFactory_){
        this.url_ = url_;
        this.method_ = method_;
        this.headers_ = headers_;
        this.body_ = body_;
        this.successCodes_ = successCodes_;
        this.additionalRetryCodes_ = additionalRetryCodes_;
        this.callback_ = callback_;
        this.errorCallback_ = errorCallback_;
        this.timeout_ = timeout_;
        this.progressCallback_ = progressCallback_;
        this.connectionFactory_ = connectionFactory_;
        this.pendingConnection_ = null;
        this.backoffId_ = null;
        this.canceled_ = false;
        this.appDelete_ = false;
        this.promise_ = new Promise((resolve, reject)=>{
            this.resolve_ = resolve;
            this.reject_ = reject;
            this.start_();
        });
    }
    /**
     * Actually starts the retry loop.
     */ start_() {
        const doTheRequest = (backoffCallback, canceled2)=>{
            if (canceled2) {
                backoffCallback(false, new RequestEndStatus(false, null, true));
                return;
            }
            const connection = this.connectionFactory_();
            this.pendingConnection_ = connection;
            const progressListener = (progressEvent)=>{
                const loaded = progressEvent.loaded;
                const total = progressEvent.lengthComputable ? progressEvent.total : -1;
                if (this.progressCallback_ !== null) this.progressCallback_(loaded, total);
            };
            if (this.progressCallback_ !== null) connection.addUploadProgressListener(progressListener);
            // connection.send() never rejects, so we don't need to have a error handler or use catch on the returned promise.
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            connection.send(this.url_, this.method_, this.body_, this.headers_).then(()=>{
                if (this.progressCallback_ !== null) connection.removeUploadProgressListener(progressListener);
                this.pendingConnection_ = null;
                const hitServer = connection.getErrorCode() === ErrorCode.NO_ERROR;
                const status = connection.getStatus();
                if (!hitServer || this.isRetryStatusCode_(status)) {
                    const wasCanceled = connection.getErrorCode() === ErrorCode.ABORT;
                    backoffCallback(false, new RequestEndStatus(false, null, wasCanceled));
                    return;
                }
                const successCode = this.successCodes_.indexOf(status) !== -1;
                backoffCallback(true, new RequestEndStatus(successCode, connection));
            });
        };
        /**
         * @param requestWentThrough - True if the request eventually went
         *     through, false if it hit the retry limit or was canceled.
         */ const backoffDone = (requestWentThrough, status)=>{
            const resolve = this.resolve_;
            const reject = this.reject_;
            const connection = status.connection;
            if (status.wasSuccessCode) try {
                const result = this.callback_(connection, connection.getResponse());
                if (isJustDef(result)) resolve(result);
                else resolve();
            } catch (e) {
                reject(e);
            }
            else {
                if (connection !== null) {
                    const err = unknown();
                    err.serverResponse = connection.getErrorText();
                    if (this.errorCallback_) reject(this.errorCallback_(connection, err));
                    else reject(err);
                } else if (status.canceled) {
                    const err = this.appDelete_ ? appDeleted() : canceled();
                    reject(err);
                } else {
                    const err = retryLimitExceeded();
                    reject(err);
                }
            }
        };
        if (this.canceled_) backoffDone(false, new RequestEndStatus(false, null, true));
        else this.backoffId_ = start(doTheRequest, backoffDone, this.timeout_);
    }
    /** @inheritDoc */ getPromise() {
        return this.promise_;
    }
    /** @inheritDoc */ cancel(appDelete) {
        this.canceled_ = true;
        this.appDelete_ = appDelete || false;
        if (this.backoffId_ !== null) stop(this.backoffId_);
        if (this.pendingConnection_ !== null) this.pendingConnection_.abort();
    }
    isRetryStatusCode_(status) {
        // The codes for which to retry came from this page:
        // https://cloud.google.com/storage/docs/exponential-backoff
        const isFiveHundredCode = status >= 500 && status < 600;
        const extraRetryCodes = [
            // Request Timeout: web server didn't receive full request in time.
            408,
            // Too Many Requests: you're getting rate-limited, basically.
            429
        ];
        const isExtraRetryCode = extraRetryCodes.indexOf(status) !== -1;
        const isRequestSpecificRetryCode = this.additionalRetryCodes_.indexOf(status) !== -1;
        return isFiveHundredCode || isExtraRetryCode || isRequestSpecificRetryCode;
    }
}
/**
 * A collection of information about the result of a network request.
 * @param opt_canceled - Defaults to false.
 */ class RequestEndStatus {
    constructor(wasSuccessCode, connection, canceled3){
        this.wasSuccessCode = wasSuccessCode;
        this.connection = connection;
        this.canceled = !!canceled3;
    }
}
function addAuthHeader_(headers, authToken) {
    if (authToken !== null && authToken.length > 0) headers['Authorization'] = 'Firebase ' + authToken;
}
function addVersionHeader_(headers, firebaseVersion) {
    headers['X-Firebase-Storage-Version'] = 'webjs/' + (firebaseVersion !== null && firebaseVersion !== void 0 ? firebaseVersion : 'AppManager');
}
function addGmpidHeader_(headers, appId) {
    if (appId) headers['X-Firebase-GMPID'] = appId;
}
function addAppCheckHeader_(headers, appCheckToken) {
    if (appCheckToken !== null) headers['X-Firebase-AppCheck'] = appCheckToken;
}
function makeRequest(requestInfo, appId, authToken, appCheckToken, requestFactory, firebaseVersion) {
    const queryPart = makeQueryString(requestInfo.urlParams);
    const url = requestInfo.url + queryPart;
    const headers = Object.assign({
    }, requestInfo.headers);
    addGmpidHeader_(headers, appId);
    addAuthHeader_(headers, authToken);
    addVersionHeader_(headers, firebaseVersion);
    addAppCheckHeader_(headers, appCheckToken);
    return new NetworkRequest(url, requestInfo.method, headers, requestInfo.body, requestInfo.successCodes, requestInfo.additionalRetryCodes, requestInfo.handler, requestInfo.errorHandler, requestInfo.timeout, requestInfo.progressCallback, requestFactory);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function getBlobBuilder() {
    if (typeof BlobBuilder !== 'undefined') return BlobBuilder;
    else if (typeof WebKitBlobBuilder !== 'undefined') return WebKitBlobBuilder;
    else return undefined;
}
/**
 * Concatenates one or more values together and converts them to a Blob.
 *
 * @param args The values that will make up the resulting blob.
 * @return The blob.
 */ function getBlob$1(...args) {
    const BlobBuilder = getBlobBuilder();
    if (BlobBuilder !== undefined) {
        const bb = new BlobBuilder();
        for(let i = 0; i < args.length; i++)bb.append(args[i]);
        return bb.getBlob();
    } else {
        if (isNativeBlobDefined()) return new Blob(args);
        else throw new StorageError("unsupported-environment" /* UNSUPPORTED_ENVIRONMENT */ , "This browser doesn't seem to support creating Blobs");
    }
}
/**
 * Slices the blob. The returned blob contains data from the start byte
 * (inclusive) till the end byte (exclusive). Negative indices cannot be used.
 *
 * @param blob The blob to be sliced.
 * @param start Index of the starting byte.
 * @param end Index of the ending byte.
 * @return The blob slice or null if not supported.
 */ function sliceBlob(blob, start1, end) {
    if (blob.webkitSlice) return blob.webkitSlice(start1, end);
    else if (blob.mozSlice) return blob.mozSlice(start1, end);
    else if (blob.slice) return blob.slice(start1, end);
    return null;
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** Converts a Base64 encoded string to a binary string. */ function decodeBase64(encoded) {
    return atob(encoded);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * An enumeration of the possible string formats for upload.
 * @public
 */ const StringFormat = {
    /**
     * Indicates the string should be interpreted "raw", that is, as normal text.
     * The string will be interpreted as UTF-16, then uploaded as a UTF-8 byte
     * sequence.
     * Example: The string 'Hello! \\ud83d\\ude0a' becomes the byte sequence
     * 48 65 6c 6c 6f 21 20 f0 9f 98 8a
     */ RAW: 'raw',
    /**
     * Indicates the string should be interpreted as base64-encoded data.
     * Padding characters (trailing '='s) are optional.
     * Example: The string 'rWmO++E6t7/rlw==' becomes the byte sequence
     * ad 69 8e fb e1 3a b7 bf eb 97
     */ BASE64: 'base64',
    /**
     * Indicates the string should be interpreted as base64url-encoded data.
     * Padding characters (trailing '='s) are optional.
     * Example: The string 'rWmO--E6t7_rlw==' becomes the byte sequence
     * ad 69 8e fb e1 3a b7 bf eb 97
     */ BASE64URL: 'base64url',
    /**
     * Indicates the string is a data URL, such as one obtained from
     * canvas.toDataURL().
     * Example: the string 'data:application/octet-stream;base64,aaaa'
     * becomes the byte sequence
     * 69 a6 9a
     * (the content-type "application/octet-stream" is also applied, but can
     * be overridden in the metadata object).
     */ DATA_URL: 'data_url'
};
class StringData {
    constructor(data, contentType){
        this.data = data;
        this.contentType = contentType || null;
    }
}
/**
 * @internal
 */ function dataFromString(format, stringData) {
    switch(format){
        case StringFormat.RAW:
            return new StringData(utf8Bytes_(stringData));
        case StringFormat.BASE64:
        case StringFormat.BASE64URL:
            return new StringData(base64Bytes_(format, stringData));
        case StringFormat.DATA_URL:
            return new StringData(dataURLBytes_(stringData), dataURLContentType_(stringData));
    }
    // assert(false);
    throw unknown();
}
function utf8Bytes_(value) {
    const b = [];
    for(let i = 0; i < value.length; i++){
        let c = value.charCodeAt(i);
        if (c <= 127) b.push(c);
        else if (c <= 2047) b.push(192 | c >> 6, 128 | c & 63);
        else {
            if ((c & 64512) === 55296) {
                // The start of a surrogate pair.
                const valid = i < value.length - 1 && (value.charCodeAt(i + 1) & 64512) === 56320;
                if (!valid) // The second surrogate wasn't there.
                b.push(239, 191, 189);
                else {
                    const hi = c;
                    const lo = value.charCodeAt(++i);
                    c = 65536 | (hi & 1023) << 10 | lo & 1023;
                    b.push(240 | c >> 18, 128 | c >> 12 & 63, 128 | c >> 6 & 63, 128 | c & 63);
                }
            } else if ((c & 64512) === 56320) // Invalid low surrogate.
            b.push(239, 191, 189);
            else b.push(224 | c >> 12, 128 | c >> 6 & 63, 128 | c & 63);
        }
    }
    return new Uint8Array(b);
}
function percentEncodedBytes_(value) {
    let decoded;
    try {
        decoded = decodeURIComponent(value);
    } catch (e) {
        throw invalidFormat(StringFormat.DATA_URL, 'Malformed data URL.');
    }
    return utf8Bytes_(decoded);
}
function base64Bytes_(format, value) {
    switch(format){
        case StringFormat.BASE64:
            {
                const hasMinus = value.indexOf('-') !== -1;
                const hasUnder = value.indexOf('_') !== -1;
                if (hasMinus || hasUnder) {
                    const invalidChar = hasMinus ? '-' : '_';
                    throw invalidFormat(format, "Invalid character '" + invalidChar + "' found: is it base64url encoded?");
                }
                break;
            }
        case StringFormat.BASE64URL:
            {
                const hasPlus = value.indexOf('+') !== -1;
                const hasSlash = value.indexOf('/') !== -1;
                if (hasPlus || hasSlash) {
                    const invalidChar = hasPlus ? '+' : '/';
                    throw invalidFormat(format, "Invalid character '" + invalidChar + "' found: is it base64 encoded?");
                }
                value = value.replace(/-/g, '+').replace(/_/g, '/');
                break;
            }
    }
    let bytes;
    try {
        bytes = decodeBase64(value);
    } catch (e) {
        throw invalidFormat(format, 'Invalid character found');
    }
    const array = new Uint8Array(bytes.length);
    for(let i = 0; i < bytes.length; i++)array[i] = bytes.charCodeAt(i);
    return array;
}
class DataURLParts {
    constructor(dataURL){
        this.base64 = false;
        this.contentType = null;
        const matches = dataURL.match(/^data:([^,]+)?,/);
        if (matches === null) throw invalidFormat(StringFormat.DATA_URL, "Must be formatted 'data:[<mediatype>][;base64],<data>");
        const middle = matches[1] || null;
        if (middle != null) {
            this.base64 = endsWith(middle, ';base64');
            this.contentType = this.base64 ? middle.substring(0, middle.length - 7) : middle;
        }
        this.rest = dataURL.substring(dataURL.indexOf(',') + 1);
    }
}
function dataURLBytes_(dataUrl) {
    const parts = new DataURLParts(dataUrl);
    if (parts.base64) return base64Bytes_(StringFormat.BASE64, parts.rest);
    else return percentEncodedBytes_(parts.rest);
}
function dataURLContentType_(dataUrl) {
    const parts = new DataURLParts(dataUrl);
    return parts.contentType;
}
function endsWith(s, end) {
    const longEnough = s.length >= end.length;
    if (!longEnough) return false;
    return s.substring(s.length - end.length) === end;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @param opt_elideCopy - If true, doesn't copy mutable input data
 *     (e.g. Uint8Arrays). Pass true only if you know the objects will not be
 *     modified after this blob's construction.
 *
 * @internal
 */ class FbsBlob {
    constructor(data, elideCopy){
        let size = 0;
        let blobType = '';
        if (isNativeBlob(data)) {
            this.data_ = data;
            size = data.size;
            blobType = data.type;
        } else if (data instanceof ArrayBuffer) {
            if (elideCopy) this.data_ = new Uint8Array(data);
            else {
                this.data_ = new Uint8Array(data.byteLength);
                this.data_.set(new Uint8Array(data));
            }
            size = this.data_.length;
        } else if (data instanceof Uint8Array) {
            if (elideCopy) this.data_ = data;
            else {
                this.data_ = new Uint8Array(data.length);
                this.data_.set(data);
            }
            size = data.length;
        }
        this.size_ = size;
        this.type_ = blobType;
    }
    size() {
        return this.size_;
    }
    type() {
        return this.type_;
    }
    slice(startByte, endByte) {
        if (isNativeBlob(this.data_)) {
            const realBlob = this.data_;
            const sliced = sliceBlob(realBlob, startByte, endByte);
            if (sliced === null) return null;
            return new FbsBlob(sliced);
        } else {
            const slice = new Uint8Array(this.data_.buffer, startByte, endByte - startByte);
            return new FbsBlob(slice, true);
        }
    }
    static getBlob(...args) {
        if (isNativeBlobDefined()) {
            const blobby = args.map((val)=>{
                if (val instanceof FbsBlob) return val.data_;
                else return val;
            });
            return new FbsBlob(getBlob$1.apply(null, blobby));
        } else {
            const uint8Arrays = args.map((val)=>{
                if (isString(val)) return dataFromString(StringFormat.RAW, val).data;
                else // Blobs don't exist, so this has to be a Uint8Array.
                return val.data_;
            });
            let finalLength = 0;
            uint8Arrays.forEach((array)=>{
                finalLength += array.byteLength;
            });
            const merged = new Uint8Array(finalLength);
            let index = 0;
            uint8Arrays.forEach((array)=>{
                for(let i = 0; i < array.length; i++)merged[index++] = array[i];
            });
            return new FbsBlob(merged, true);
        }
    }
    uploadData() {
        return this.data_;
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Returns the Object resulting from parsing the given JSON, or null if the
 * given string does not represent a JSON object.
 */ function jsonObjectOrNull(s) {
    let obj;
    try {
        obj = JSON.parse(s);
    } catch (e) {
        return null;
    }
    if (isNonArrayObject(obj)) return obj;
    else return null;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @fileoverview Contains helper methods for manipulating paths.
 */ /**
 * @return Null if the path is already at the root.
 */ function parent(path) {
    if (path.length === 0) return null;
    const index = path.lastIndexOf('/');
    if (index === -1) return '';
    const newPath = path.slice(0, index);
    return newPath;
}
function child(path, childPath) {
    const canonicalChildPath = childPath.split('/').filter((component)=>component.length > 0
    ).join('/');
    if (path.length === 0) return canonicalChildPath;
    else return path + '/' + canonicalChildPath;
}
/**
 * Returns the last component of a path.
 * '/foo/bar' -> 'bar'
 * '/foo/bar/baz/' -> 'baz/'
 * '/a' -> 'a'
 */ function lastComponent(path) {
    const index = path.lastIndexOf('/', path.length - 2);
    if (index === -1) return path;
    else return path.slice(index + 1);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function noXform_(metadata, value) {
    return value;
}
class Mapping {
    constructor(server, local, writable, xform){
        this.server = server;
        this.local = local || server;
        this.writable = !!writable;
        this.xform = xform || noXform_;
    }
}
let mappings_ = null;
function xformPath(fullPath) {
    if (!isString(fullPath) || fullPath.length < 2) return fullPath;
    else return lastComponent(fullPath);
}
function getMappings() {
    if (mappings_) return mappings_;
    const mappings = [];
    mappings.push(new Mapping('bucket'));
    mappings.push(new Mapping('generation'));
    mappings.push(new Mapping('metageneration'));
    mappings.push(new Mapping('name', 'fullPath', true));
    function mappingsXformPath(_metadata, fullPath) {
        return xformPath(fullPath);
    }
    const nameMapping = new Mapping('name');
    nameMapping.xform = mappingsXformPath;
    mappings.push(nameMapping);
    /**
     * Coerces the second param to a number, if it is defined.
     */ function xformSize(_metadata, size) {
        if (size !== undefined) return Number(size);
        else return size;
    }
    const sizeMapping = new Mapping('size');
    sizeMapping.xform = xformSize;
    mappings.push(sizeMapping);
    mappings.push(new Mapping('timeCreated'));
    mappings.push(new Mapping('updated'));
    mappings.push(new Mapping('md5Hash', null, true));
    mappings.push(new Mapping('cacheControl', null, true));
    mappings.push(new Mapping('contentDisposition', null, true));
    mappings.push(new Mapping('contentEncoding', null, true));
    mappings.push(new Mapping('contentLanguage', null, true));
    mappings.push(new Mapping('contentType', null, true));
    mappings.push(new Mapping('metadata', 'customMetadata', true));
    mappings_ = mappings;
    return mappings_;
}
function addRef(metadata, service) {
    function generateRef() {
        const bucket = metadata['bucket'];
        const path = metadata['fullPath'];
        const loc = new Location(bucket, path);
        return service._makeStorageReference(loc);
    }
    Object.defineProperty(metadata, 'ref', {
        get: generateRef
    });
}
function fromResource(service, resource, mappings) {
    const metadata = {
    };
    metadata['type'] = 'file';
    const len = mappings.length;
    for(let i = 0; i < len; i++){
        const mapping = mappings[i];
        metadata[mapping.local] = mapping.xform(metadata, resource[mapping.server]);
    }
    addRef(metadata, service);
    return metadata;
}
function fromResourceString(service, resourceString, mappings) {
    const obj = jsonObjectOrNull(resourceString);
    if (obj === null) return null;
    const resource = obj;
    return fromResource(service, resource, mappings);
}
function downloadUrlFromResourceString(metadata, resourceString, host, protocol) {
    const obj = jsonObjectOrNull(resourceString);
    if (obj === null) return null;
    if (!isString(obj['downloadTokens'])) // This can happen if objects are uploaded through GCS and retrieved
    // through list, so we don't want to throw an Error.
    return null;
    const tokens = obj['downloadTokens'];
    if (tokens.length === 0) return null;
    const encode = encodeURIComponent;
    const tokensList = tokens.split(',');
    const urls = tokensList.map((token)=>{
        const bucket = metadata['bucket'];
        const path = metadata['fullPath'];
        const urlPart = '/b/' + encode(bucket) + '/o/' + encode(path);
        const base = makeUrl(urlPart, host, protocol);
        const queryString = makeQueryString({
            alt: 'media',
            token
        });
        return base + queryString;
    });
    return urls[0];
}
function toResourceString(metadata, mappings) {
    const resource = {
    };
    const len = mappings.length;
    for(let i = 0; i < len; i++){
        const mapping = mappings[i];
        if (mapping.writable) resource[mapping.server] = metadata[mapping.local];
    }
    return JSON.stringify(resource);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const PREFIXES_KEY = 'prefixes';
const ITEMS_KEY = 'items';
function fromBackendResponse(service, bucket, resource) {
    const listResult = {
        prefixes: [],
        items: [],
        nextPageToken: resource['nextPageToken']
    };
    if (resource[PREFIXES_KEY]) for (const path of resource[PREFIXES_KEY]){
        const pathWithoutTrailingSlash = path.replace(/\/$/, '');
        const reference = service._makeStorageReference(new Location(bucket, pathWithoutTrailingSlash));
        listResult.prefixes.push(reference);
    }
    if (resource[ITEMS_KEY]) for (const item of resource[ITEMS_KEY]){
        const reference = service._makeStorageReference(new Location(bucket, item['name']));
        listResult.items.push(reference);
    }
    return listResult;
}
function fromResponseString(service, bucket, resourceString) {
    const obj = jsonObjectOrNull(resourceString);
    if (obj === null) return null;
    const resource = obj;
    return fromBackendResponse(service, bucket, resource);
}
/**
 * Contains a fully specified request.
 *
 * @param I - the type of the backend's network response.
 * @param O - the output response type used by the rest of the SDK.
 */ class RequestInfo {
    constructor(url, method, /**
     * Returns the value with which to resolve the request's promise. Only called
     * if the request is successful. Throw from this function to reject the
     * returned Request's promise with the thrown error.
     * Note: The XhrIo passed to this function may be reused after this callback
     * returns. Do not keep a reference to it in any way.
     */ handler, timeout){
        this.url = url;
        this.method = method;
        this.handler = handler;
        this.timeout = timeout;
        this.urlParams = {
        };
        this.headers = {
        };
        this.body = null;
        this.errorHandler = null;
        /**
         * Called with the current number of bytes uploaded and total size (-1 if not
         * computable) of the request body (i.e. used to report upload progress).
         */ this.progressCallback = null;
        this.successCodes = [
            200
        ];
        this.additionalRetryCodes = [];
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Throws the UNKNOWN StorageError if cndn is false.
 */ function handlerCheck(cndn) {
    if (!cndn) throw unknown();
}
function metadataHandler(service, mappings) {
    function handler(xhr, text) {
        const metadata = fromResourceString(service, text, mappings);
        handlerCheck(metadata !== null);
        return metadata;
    }
    return handler;
}
function listHandler(service, bucket) {
    function handler(xhr, text) {
        const listResult = fromResponseString(service, bucket, text);
        handlerCheck(listResult !== null);
        return listResult;
    }
    return handler;
}
function downloadUrlHandler(service, mappings) {
    function handler(xhr, text) {
        const metadata = fromResourceString(service, text, mappings);
        handlerCheck(metadata !== null);
        return downloadUrlFromResourceString(metadata, text, service.host, service._protocol);
    }
    return handler;
}
function sharedErrorHandler(location) {
    function errorHandler(xhr, err) {
        let newErr;
        if (xhr.getStatus() === 401) {
            if (// This exact message string is the only consistent part of the
            // server's error response that identifies it as an App Check error.
            xhr.getErrorText().includes('Firebase App Check token is invalid')) newErr = unauthorizedApp();
            else newErr = unauthenticated();
        } else {
            if (xhr.getStatus() === 402) newErr = quotaExceeded(location.bucket);
            else if (xhr.getStatus() === 403) newErr = unauthorized(location.path);
            else newErr = err;
        }
        newErr.serverResponse = err.serverResponse;
        return newErr;
    }
    return errorHandler;
}
function objectErrorHandler(location) {
    const shared = sharedErrorHandler(location);
    function errorHandler(xhr, err) {
        let newErr = shared(xhr, err);
        if (xhr.getStatus() === 404) newErr = objectNotFound(location.path);
        newErr.serverResponse = err.serverResponse;
        return newErr;
    }
    return errorHandler;
}
function getMetadata$2(service, location, mappings) {
    const urlPart = location.fullServerUrl();
    const url = makeUrl(urlPart, service.host, service._protocol);
    const method = 'GET';
    const timeout = service.maxOperationRetryTime;
    const requestInfo = new RequestInfo(url, method, metadataHandler(service, mappings), timeout);
    requestInfo.errorHandler = objectErrorHandler(location);
    return requestInfo;
}
function list$2(service, location, delimiter, pageToken, maxResults) {
    const urlParams = {
    };
    if (location.isRoot) urlParams['prefix'] = '';
    else urlParams['prefix'] = location.path + '/';
    if (delimiter && delimiter.length > 0) urlParams['delimiter'] = delimiter;
    if (pageToken) urlParams['pageToken'] = pageToken;
    if (maxResults) urlParams['maxResults'] = maxResults;
    const urlPart = location.bucketOnlyServerUrl();
    const url = makeUrl(urlPart, service.host, service._protocol);
    const method = 'GET';
    const timeout = service.maxOperationRetryTime;
    const requestInfo = new RequestInfo(url, method, listHandler(service, location.bucket), timeout);
    requestInfo.urlParams = urlParams;
    requestInfo.errorHandler = sharedErrorHandler(location);
    return requestInfo;
}
function getBytes$1(service, location, maxDownloadSizeBytes) {
    const urlPart = location.fullServerUrl();
    const url = makeUrl(urlPart, service.host, service._protocol) + '?alt=media';
    const method = 'GET';
    const timeout = service.maxOperationRetryTime;
    const requestInfo = new RequestInfo(url, method, (_, data)=>data
    , timeout);
    requestInfo.errorHandler = objectErrorHandler(location);
    if (maxDownloadSizeBytes !== undefined) {
        requestInfo.headers['Range'] = `bytes=0-${maxDownloadSizeBytes}`;
        requestInfo.successCodes = [
            200 /* OK */ ,
            206 /* Partial Content */ 
        ];
    }
    return requestInfo;
}
function getDownloadUrl(service, location, mappings) {
    const urlPart = location.fullServerUrl();
    const url = makeUrl(urlPart, service.host, service._protocol);
    const method = 'GET';
    const timeout = service.maxOperationRetryTime;
    const requestInfo = new RequestInfo(url, method, downloadUrlHandler(service, mappings), timeout);
    requestInfo.errorHandler = objectErrorHandler(location);
    return requestInfo;
}
function updateMetadata$2(service, location, metadata, mappings) {
    const urlPart = location.fullServerUrl();
    const url = makeUrl(urlPart, service.host, service._protocol);
    const method = 'PATCH';
    const body = toResourceString(metadata, mappings);
    const headers = {
        'Content-Type': 'application/json; charset=utf-8'
    };
    const timeout = service.maxOperationRetryTime;
    const requestInfo = new RequestInfo(url, method, metadataHandler(service, mappings), timeout);
    requestInfo.headers = headers;
    requestInfo.body = body;
    requestInfo.errorHandler = objectErrorHandler(location);
    return requestInfo;
}
function deleteObject$2(service, location) {
    const urlPart = location.fullServerUrl();
    const url = makeUrl(urlPart, service.host, service._protocol);
    const method = 'DELETE';
    const timeout = service.maxOperationRetryTime;
    function handler(_xhr, _text) {
    }
    const requestInfo = new RequestInfo(url, method, handler, timeout);
    requestInfo.successCodes = [
        200,
        204
    ];
    requestInfo.errorHandler = objectErrorHandler(location);
    return requestInfo;
}
function determineContentType_(metadata, blob) {
    return metadata && metadata['contentType'] || blob && blob.type() || 'application/octet-stream';
}
function metadataForUpload_(location, blob, metadata) {
    const metadataClone = Object.assign({
    }, metadata);
    metadataClone['fullPath'] = location.path;
    metadataClone['size'] = blob.size();
    if (!metadataClone['contentType']) metadataClone['contentType'] = determineContentType_(null, blob);
    return metadataClone;
}
/**
 * Prepare RequestInfo for uploads as Content-Type: multipart.
 */ function multipartUpload(service, location, mappings, blob, metadata) {
    const urlPart = location.bucketOnlyServerUrl();
    const headers = {
        'X-Goog-Upload-Protocol': 'multipart'
    };
    function genBoundary() {
        let str = '';
        for(let i = 0; i < 2; i++)str = str + Math.random().toString().slice(2);
        return str;
    }
    const boundary = genBoundary();
    headers['Content-Type'] = 'multipart/related; boundary=' + boundary;
    const metadata_ = metadataForUpload_(location, blob, metadata);
    const metadataString = toResourceString(metadata_, mappings);
    const preBlobPart = '--' + boundary + '\r\n' + 'Content-Type: application/json; charset=utf-8\r\n\r\n' + metadataString + '\r\n--' + boundary + '\r\n' + 'Content-Type: ' + metadata_['contentType'] + '\r\n\r\n';
    const postBlobPart = '\r\n--' + boundary + '--';
    const body = FbsBlob.getBlob(preBlobPart, blob, postBlobPart);
    if (body === null) throw cannotSliceBlob();
    const urlParams = {
        name: metadata_['fullPath']
    };
    const url = makeUrl(urlPart, service.host, service._protocol);
    const method = 'POST';
    const timeout = service.maxUploadRetryTime;
    const requestInfo = new RequestInfo(url, method, metadataHandler(service, mappings), timeout);
    requestInfo.urlParams = urlParams;
    requestInfo.headers = headers;
    requestInfo.body = body.uploadData();
    requestInfo.errorHandler = sharedErrorHandler(location);
    return requestInfo;
}
/**
 * @param current The number of bytes that have been uploaded so far.
 * @param total The total number of bytes in the upload.
 * @param opt_finalized True if the server has finished the upload.
 * @param opt_metadata The upload metadata, should
 *     only be passed if opt_finalized is true.
 */ class ResumableUploadStatus {
    constructor(current, total, finalized, metadata){
        this.current = current;
        this.total = total;
        this.finalized = !!finalized;
        this.metadata = metadata || null;
    }
}
function checkResumeHeader_(xhr, allowed) {
    let status = null;
    try {
        status = xhr.getResponseHeader('X-Goog-Upload-Status');
    } catch (e) {
        handlerCheck(false);
    }
    const allowedStatus = allowed || [
        'active'
    ];
    handlerCheck(!!status && allowedStatus.indexOf(status) !== -1);
    return status;
}
function createResumableUpload(service, location, mappings, blob, metadata) {
    const urlPart = location.bucketOnlyServerUrl();
    const metadataForUpload = metadataForUpload_(location, blob, metadata);
    const urlParams = {
        name: metadataForUpload['fullPath']
    };
    const url1 = makeUrl(urlPart, service.host, service._protocol);
    const method = 'POST';
    const headers = {
        'X-Goog-Upload-Protocol': 'resumable',
        'X-Goog-Upload-Command': 'start',
        'X-Goog-Upload-Header-Content-Length': `${blob.size()}`,
        'X-Goog-Upload-Header-Content-Type': metadataForUpload['contentType'],
        'Content-Type': 'application/json; charset=utf-8'
    };
    const body = toResourceString(metadataForUpload, mappings);
    const timeout = service.maxUploadRetryTime;
    function handler(xhr) {
        checkResumeHeader_(xhr);
        let url;
        try {
            url = xhr.getResponseHeader('X-Goog-Upload-URL');
        } catch (e) {
            handlerCheck(false);
        }
        handlerCheck(isString(url));
        return url;
    }
    const requestInfo = new RequestInfo(url1, method, handler, timeout);
    requestInfo.urlParams = urlParams;
    requestInfo.headers = headers;
    requestInfo.body = body;
    requestInfo.errorHandler = sharedErrorHandler(location);
    return requestInfo;
}
/**
 * @param url From a call to fbs.requests.createResumableUpload.
 */ function getResumableUploadStatus(service, location, url, blob) {
    const headers = {
        'X-Goog-Upload-Command': 'query'
    };
    function handler(xhr) {
        const status = checkResumeHeader_(xhr, [
            'active',
            'final'
        ]);
        let sizeString = null;
        try {
            sizeString = xhr.getResponseHeader('X-Goog-Upload-Size-Received');
        } catch (e) {
            handlerCheck(false);
        }
        if (!sizeString) // null or empty string
        handlerCheck(false);
        const size = Number(sizeString);
        handlerCheck(!isNaN(size));
        return new ResumableUploadStatus(size, blob.size(), status === 'final');
    }
    const method = 'POST';
    const timeout = service.maxUploadRetryTime;
    const requestInfo = new RequestInfo(url, method, handler, timeout);
    requestInfo.headers = headers;
    requestInfo.errorHandler = sharedErrorHandler(location);
    return requestInfo;
}
/**
 * Any uploads via the resumable upload API must transfer a number of bytes
 * that is a multiple of this number.
 */ const RESUMABLE_UPLOAD_CHUNK_SIZE = 262144;
/**
 * @param url From a call to fbs.requests.createResumableUpload.
 * @param chunkSize Number of bytes to upload.
 * @param status The previous status.
 *     If not passed or null, we start from the beginning.
 * @throws fbs.Error If the upload is already complete, the passed in status
 *     has a final size inconsistent with the blob, or the blob cannot be sliced
 *     for upload.
 */ function continueResumableUpload(location, service, url, blob, chunkSize, mappings, status, progressCallback) {
    // TODO(andysoto): standardize on internal asserts
    // assert(!(opt_status && opt_status.finalized));
    const status_ = new ResumableUploadStatus(0, 0);
    if (status) {
        status_.current = status.current;
        status_.total = status.total;
    } else {
        status_.current = 0;
        status_.total = blob.size();
    }
    if (blob.size() !== status_.total) throw serverFileWrongSize();
    const bytesLeft = status_.total - status_.current;
    let bytesToUpload = bytesLeft;
    if (chunkSize > 0) bytesToUpload = Math.min(bytesToUpload, chunkSize);
    const startByte = status_.current;
    const endByte = startByte + bytesToUpload;
    const uploadCommand = bytesToUpload === bytesLeft ? 'upload, finalize' : 'upload';
    const headers = {
        'X-Goog-Upload-Command': uploadCommand,
        'X-Goog-Upload-Offset': `${status_.current}`
    };
    const body = blob.slice(startByte, endByte);
    if (body === null) throw cannotSliceBlob();
    function handler(xhr, text) {
        // TODO(andysoto): Verify the MD5 of each uploaded range:
        // the 'x-range-md5' header comes back with status code 308 responses.
        // We'll only be able to bail out though, because you can't re-upload a
        // range that you previously uploaded.
        const uploadStatus = checkResumeHeader_(xhr, [
            'active',
            'final'
        ]);
        const newCurrent = status_.current + bytesToUpload;
        const size = blob.size();
        let metadata;
        if (uploadStatus === 'final') metadata = metadataHandler(service, mappings)(xhr, text);
        else metadata = null;
        return new ResumableUploadStatus(newCurrent, size, uploadStatus === 'final', metadata);
    }
    const method = 'POST';
    const timeout = service.maxUploadRetryTime;
    const requestInfo = new RequestInfo(url, method, handler, timeout);
    requestInfo.headers = headers;
    requestInfo.body = body.uploadData();
    requestInfo.progressCallback = progressCallback || null;
    requestInfo.errorHandler = sharedErrorHandler(location);
    return requestInfo;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * An event that is triggered on a task.
 * @internal
 */ const TaskEvent = {
    /**
     * For this event,
     * <ul>
     *   <li>The `next` function is triggered on progress updates and when the
     *       task is paused/resumed with an `UploadTaskSnapshot` as the first
     *       argument.</li>
     *   <li>The `error` function is triggered if the upload is canceled or fails
     *       for another reason.</li>
     *   <li>The `complete` function is triggered if the upload completes
     *       successfully.</li>
     * </ul>
     */ STATE_CHANGED: 'state_changed'
};
// type keys = keyof TaskState
/**
 * Represents the current state of a running upload.
 * @internal
 */ const TaskState = {
    /** The task is currently transferring data. */ RUNNING: 'running',
    /** The task was paused by the user. */ PAUSED: 'paused',
    /** The task completed successfully. */ SUCCESS: 'success',
    /** The task was canceled. */ CANCELED: 'canceled',
    /** The task failed with an error. */ ERROR: 'error'
};
function taskStateFromInternalTaskState(state) {
    switch(state){
        case "running" /* RUNNING */ :
        case "pausing" /* PAUSING */ :
        case "canceling" /* CANCELING */ :
            return TaskState.RUNNING;
        case "paused" /* PAUSED */ :
            return TaskState.PAUSED;
        case "success" /* SUCCESS */ :
            return TaskState.SUCCESS;
        case "canceled" /* CANCELED */ :
            return TaskState.CANCELED;
        case "error" /* ERROR */ :
            return TaskState.ERROR;
        default:
            // TODO(andysoto): assert(false);
            return TaskState.ERROR;
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Observer {
    constructor(nextOrObserver, error, complete){
        const asFunctions = isFunction(nextOrObserver) || error != null || complete != null;
        if (asFunctions) {
            this.next = nextOrObserver;
            this.error = error !== null && error !== void 0 ? error : undefined;
            this.complete = complete !== null && complete !== void 0 ? complete : undefined;
        } else {
            const observer = nextOrObserver;
            this.next = observer.next;
            this.error = observer.error;
            this.complete = observer.complete;
        }
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Returns a function that invokes f with its arguments asynchronously as a
 * microtask, i.e. as soon as possible after the current script returns back
 * into browser code.
 */ // eslint-disable-next-line @typescript-eslint/ban-types
function async(f) {
    return (...argsToForward)=>{
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        Promise.resolve().then(()=>f(...argsToForward)
        );
    };
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** An override for the text-based Connection. Used in tests. */ let textFactoryOverride = null;
/**
 * Network layer for browsers. We use this instead of goog.net.XhrIo because
 * goog.net.XhrIo is hyuuuuge and doesn't work in React Native on Android.
 */ class XhrConnection {
    constructor(){
        this.sent_ = false;
        this.xhr_ = new XMLHttpRequest();
        this.initXhr();
        this.errorCode_ = ErrorCode.NO_ERROR;
        this.sendPromise_ = new Promise((resolve)=>{
            this.xhr_.addEventListener('abort', ()=>{
                this.errorCode_ = ErrorCode.ABORT;
                resolve();
            });
            this.xhr_.addEventListener('error', ()=>{
                this.errorCode_ = ErrorCode.NETWORK_ERROR;
                resolve();
            });
            this.xhr_.addEventListener('load', ()=>{
                resolve();
            });
        });
    }
    send(url, method, body, headers) {
        if (this.sent_) throw internalError('cannot .send() more than once');
        this.sent_ = true;
        this.xhr_.open(method, url, true);
        if (headers !== undefined) {
            for(const key in headers)if (headers.hasOwnProperty(key)) this.xhr_.setRequestHeader(key, headers[key].toString());
        }
        if (body !== undefined) this.xhr_.send(body);
        else this.xhr_.send();
        return this.sendPromise_;
    }
    getErrorCode() {
        if (!this.sent_) throw internalError('cannot .getErrorCode() before sending');
        return this.errorCode_;
    }
    getStatus() {
        if (!this.sent_) throw internalError('cannot .getStatus() before sending');
        try {
            return this.xhr_.status;
        } catch (e) {
            return -1;
        }
    }
    getResponse() {
        if (!this.sent_) throw internalError('cannot .getResponse() before sending');
        return this.xhr_.response;
    }
    getErrorText() {
        if (!this.sent_) throw internalError('cannot .getErrorText() before sending');
        return this.xhr_.statusText;
    }
    /** Aborts the request. */ abort() {
        this.xhr_.abort();
    }
    getResponseHeader(header) {
        return this.xhr_.getResponseHeader(header);
    }
    addUploadProgressListener(listener) {
        if (this.xhr_.upload != null) this.xhr_.upload.addEventListener('progress', listener);
    }
    removeUploadProgressListener(listener) {
        if (this.xhr_.upload != null) this.xhr_.upload.removeEventListener('progress', listener);
    }
}
class XhrTextConnection extends XhrConnection {
    initXhr() {
        this.xhr_.responseType = 'text';
    }
}
function newTextConnection() {
    return textFactoryOverride ? textFactoryOverride() : new XhrTextConnection();
}
class XhrBytesConnection extends XhrConnection {
    initXhr() {
        this.xhr_.responseType = 'arraybuffer';
    }
}
function newBytesConnection() {
    return new XhrBytesConnection();
}
class XhrBlobConnection extends XhrConnection {
    initXhr() {
        this.xhr_.responseType = 'blob';
    }
}
function newBlobConnection() {
    return new XhrBlobConnection();
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Represents a blob being uploaded. Can be used to pause/resume/cancel the
 * upload and manage callbacks for various events.
 * @internal
 */ class UploadTask {
    /**
     * @param ref - The firebaseStorage.Reference object this task came
     *     from, untyped to avoid cyclic dependencies.
     * @param blob - The blob to upload.
     */ constructor(ref1, blob, metadata = null){
        /**
         * Number of bytes transferred so far.
         */ this._transferred = 0;
        this._needToFetchStatus = false;
        this._needToFetchMetadata = false;
        this._observers = [];
        this._error = undefined;
        this._uploadUrl = undefined;
        this._request = undefined;
        this._chunkMultiplier = 1;
        this._resolve = undefined;
        this._reject = undefined;
        this._ref = ref1;
        this._blob = blob;
        this._metadata = metadata;
        this._mappings = getMappings();
        this._resumable = this._shouldDoResumable(this._blob);
        this._state = "running" /* RUNNING */ ;
        this._errorHandler = (error)=>{
            this._request = undefined;
            this._chunkMultiplier = 1;
            if (error._codeEquals("canceled" /* CANCELED */ )) {
                this._needToFetchStatus = true;
                this.completeTransitions_();
            } else {
                this._error = error;
                this._transition("error" /* ERROR */ );
            }
        };
        this._metadataErrorHandler = (error)=>{
            this._request = undefined;
            if (error._codeEquals("canceled" /* CANCELED */ )) this.completeTransitions_();
            else {
                this._error = error;
                this._transition("error" /* ERROR */ );
            }
        };
        this._promise = new Promise((resolve, reject)=>{
            this._resolve = resolve;
            this._reject = reject;
            this._start();
        });
        // Prevent uncaught rejections on the internal promise from bubbling out
        // to the top level with a dummy handler.
        this._promise.then(null, ()=>{
        });
    }
    _makeProgressCallback() {
        const sizeBefore = this._transferred;
        return (loaded)=>this._updateProgress(sizeBefore + loaded)
        ;
    }
    _shouldDoResumable(blob) {
        return blob.size() > 262144;
    }
    _start() {
        if (this._state !== "running" /* RUNNING */ ) // This can happen if someone pauses us in a resume callback, for example.
        return;
        if (this._request !== undefined) return;
        if (this._resumable) {
            if (this._uploadUrl === undefined) this._createResumable();
            else {
                if (this._needToFetchStatus) this._fetchStatus();
                else if (this._needToFetchMetadata) // Happens if we miss the metadata on upload completion.
                this._fetchMetadata();
                else this._continueUpload();
            }
        } else this._oneShotUpload();
    }
    _resolveToken(callback) {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        Promise.all([
            this._ref.storage._getAuthToken(),
            this._ref.storage._getAppCheckToken()
        ]).then(([authToken, appCheckToken])=>{
            switch(this._state){
                case "running" /* RUNNING */ :
                    callback(authToken, appCheckToken);
                    break;
                case "canceling" /* CANCELING */ :
                    this._transition("canceled" /* CANCELED */ );
                    break;
                case "pausing" /* PAUSING */ :
                    this._transition("paused" /* PAUSED */ );
                    break;
            }
        });
    }
    // TODO(andysoto): assert false
    _createResumable() {
        this._resolveToken((authToken, appCheckToken)=>{
            const requestInfo = createResumableUpload(this._ref.storage, this._ref._location, this._mappings, this._blob, this._metadata);
            const createRequest = this._ref.storage._makeRequest(requestInfo, newTextConnection, authToken, appCheckToken);
            this._request = createRequest;
            createRequest.getPromise().then((url)=>{
                this._request = undefined;
                this._uploadUrl = url;
                this._needToFetchStatus = false;
                this.completeTransitions_();
            }, this._errorHandler);
        });
    }
    _fetchStatus() {
        // TODO(andysoto): assert(this.uploadUrl_ !== null);
        const url = this._uploadUrl;
        this._resolveToken((authToken, appCheckToken)=>{
            const requestInfo = getResumableUploadStatus(this._ref.storage, this._ref._location, url, this._blob);
            const statusRequest = this._ref.storage._makeRequest(requestInfo, newTextConnection, authToken, appCheckToken);
            this._request = statusRequest;
            statusRequest.getPromise().then((status)=>{
                this._request = undefined;
                this._updateProgress(status.current);
                this._needToFetchStatus = false;
                if (status.finalized) this._needToFetchMetadata = true;
                this.completeTransitions_();
            }, this._errorHandler);
        });
    }
    _continueUpload() {
        const chunkSize = RESUMABLE_UPLOAD_CHUNK_SIZE * this._chunkMultiplier;
        const status = new ResumableUploadStatus(this._transferred, this._blob.size());
        // TODO(andysoto): assert(this.uploadUrl_ !== null);
        const url = this._uploadUrl;
        this._resolveToken((authToken, appCheckToken)=>{
            let requestInfo;
            try {
                requestInfo = continueResumableUpload(this._ref._location, this._ref.storage, url, this._blob, chunkSize, this._mappings, status, this._makeProgressCallback());
            } catch (e) {
                this._error = e;
                this._transition("error" /* ERROR */ );
                return;
            }
            const uploadRequest = this._ref.storage._makeRequest(requestInfo, newTextConnection, authToken, appCheckToken);
            this._request = uploadRequest;
            uploadRequest.getPromise().then((newStatus)=>{
                this._increaseMultiplier();
                this._request = undefined;
                this._updateProgress(newStatus.current);
                if (newStatus.finalized) {
                    this._metadata = newStatus.metadata;
                    this._transition("success" /* SUCCESS */ );
                } else this.completeTransitions_();
            }, this._errorHandler);
        });
    }
    _increaseMultiplier() {
        const currentSize = RESUMABLE_UPLOAD_CHUNK_SIZE * this._chunkMultiplier;
        // Max chunk size is 32M.
        if (currentSize < 33554432) this._chunkMultiplier *= 2;
    }
    _fetchMetadata() {
        this._resolveToken((authToken, appCheckToken)=>{
            const requestInfo = getMetadata$2(this._ref.storage, this._ref._location, this._mappings);
            const metadataRequest = this._ref.storage._makeRequest(requestInfo, newTextConnection, authToken, appCheckToken);
            this._request = metadataRequest;
            metadataRequest.getPromise().then((metadata)=>{
                this._request = undefined;
                this._metadata = metadata;
                this._transition("success" /* SUCCESS */ );
            }, this._metadataErrorHandler);
        });
    }
    _oneShotUpload() {
        this._resolveToken((authToken, appCheckToken)=>{
            const requestInfo = multipartUpload(this._ref.storage, this._ref._location, this._mappings, this._blob, this._metadata);
            const multipartRequest = this._ref.storage._makeRequest(requestInfo, newTextConnection, authToken, appCheckToken);
            this._request = multipartRequest;
            multipartRequest.getPromise().then((metadata)=>{
                this._request = undefined;
                this._metadata = metadata;
                this._updateProgress(this._blob.size());
                this._transition("success" /* SUCCESS */ );
            }, this._errorHandler);
        });
    }
    _updateProgress(transferred) {
        const old = this._transferred;
        this._transferred = transferred;
        // A progress update can make the "transferred" value smaller (e.g. a
        // partial upload not completed by server, after which the "transferred"
        // value may reset to the value at the beginning of the request).
        if (this._transferred !== old) this._notifyObservers();
    }
    _transition(state) {
        if (this._state === state) return;
        switch(state){
            case "canceling" /* CANCELING */ :
                // TODO(andysoto):
                // assert(this.state_ === InternalTaskState.RUNNING ||
                //        this.state_ === InternalTaskState.PAUSING);
                this._state = state;
                if (this._request !== undefined) this._request.cancel();
                break;
            case "pausing" /* PAUSING */ :
                // TODO(andysoto):
                // assert(this.state_ === InternalTaskState.RUNNING);
                this._state = state;
                if (this._request !== undefined) this._request.cancel();
                break;
            case "running" /* RUNNING */ :
                // TODO(andysoto):
                // assert(this.state_ === InternalTaskState.PAUSED ||
                //        this.state_ === InternalTaskState.PAUSING);
                const wasPaused = this._state === "paused" /* PAUSED */ ;
                this._state = state;
                if (wasPaused) {
                    this._notifyObservers();
                    this._start();
                }
                break;
            case "paused" /* PAUSED */ :
                // TODO(andysoto):
                // assert(this.state_ === InternalTaskState.PAUSING);
                this._state = state;
                this._notifyObservers();
                break;
            case "canceled" /* CANCELED */ :
                // TODO(andysoto):
                // assert(this.state_ === InternalTaskState.PAUSED ||
                //        this.state_ === InternalTaskState.CANCELING);
                this._error = canceled();
                this._state = state;
                this._notifyObservers();
                break;
            case "error" /* ERROR */ :
                // TODO(andysoto):
                // assert(this.state_ === InternalTaskState.RUNNING ||
                //        this.state_ === InternalTaskState.PAUSING ||
                //        this.state_ === InternalTaskState.CANCELING);
                this._state = state;
                this._notifyObservers();
                break;
            case "success" /* SUCCESS */ :
                // TODO(andysoto):
                // assert(this.state_ === InternalTaskState.RUNNING ||
                //        this.state_ === InternalTaskState.PAUSING ||
                //        this.state_ === InternalTaskState.CANCELING);
                this._state = state;
                this._notifyObservers();
                break;
        }
    }
    completeTransitions_() {
        switch(this._state){
            case "pausing" /* PAUSING */ :
                this._transition("paused" /* PAUSED */ );
                break;
            case "canceling" /* CANCELING */ :
                this._transition("canceled" /* CANCELED */ );
                break;
            case "running" /* RUNNING */ :
                this._start();
                break;
        }
    }
    /**
     * A snapshot of the current task state.
     */ get snapshot() {
        const externalState = taskStateFromInternalTaskState(this._state);
        return {
            bytesTransferred: this._transferred,
            totalBytes: this._blob.size(),
            state: externalState,
            metadata: this._metadata,
            task: this,
            ref: this._ref
        };
    }
    /**
     * Adds a callback for an event.
     * @param type - The type of event to listen for.
     * @param nextOrObserver -
     *     The `next` function, which gets called for each item in
     *     the event stream, or an observer object with some or all of these three
     *     properties (`next`, `error`, `complete`).
     * @param error - A function that gets called with a `StorageError`
     *     if the event stream ends due to an error.
     * @param completed - A function that gets called if the
     *     event stream ends normally.
     * @returns
     *     If only the event argument is passed, returns a function you can use to
     *     add callbacks (see the examples above). If more than just the event
     *     argument is passed, returns a function you can call to unregister the
     *     callbacks.
     */ on(type, nextOrObserver, error, completed) {
        const observer = new Observer(nextOrObserver || undefined, error || undefined, completed || undefined);
        this._addObserver(observer);
        return ()=>{
            this._removeObserver(observer);
        };
    }
    /**
     * This object behaves like a Promise, and resolves with its snapshot data
     * when the upload completes.
     * @param onFulfilled - The fulfillment callback. Promise chaining works as normal.
     * @param onRejected - The rejection callback.
     */ then(onFulfilled, onRejected) {
        // These casts are needed so that TypeScript can infer the types of the
        // resulting Promise.
        return this._promise.then(onFulfilled, onRejected);
    }
    /**
     * Equivalent to calling `then(null, onRejected)`.
     */ catch(onRejected) {
        return this.then(null, onRejected);
    }
    /**
     * Adds the given observer.
     */ _addObserver(observer) {
        this._observers.push(observer);
        this._notifyObserver(observer);
    }
    /**
     * Removes the given observer.
     */ _removeObserver(observer) {
        const i = this._observers.indexOf(observer);
        if (i !== -1) this._observers.splice(i, 1);
    }
    _notifyObservers() {
        this._finishPromise();
        const observers = this._observers.slice();
        observers.forEach((observer)=>{
            this._notifyObserver(observer);
        });
    }
    _finishPromise() {
        if (this._resolve !== undefined) {
            let triggered = true;
            switch(taskStateFromInternalTaskState(this._state)){
                case TaskState.SUCCESS:
                    async(this._resolve.bind(null, this.snapshot))();
                    break;
                case TaskState.CANCELED:
                case TaskState.ERROR:
                    const toCall = this._reject;
                    async(toCall.bind(null, this._error))();
                    break;
                default:
                    triggered = false;
                    break;
            }
            if (triggered) {
                this._resolve = undefined;
                this._reject = undefined;
            }
        }
    }
    _notifyObserver(observer) {
        const externalState = taskStateFromInternalTaskState(this._state);
        switch(externalState){
            case TaskState.RUNNING:
            case TaskState.PAUSED:
                if (observer.next) async(observer.next.bind(observer, this.snapshot))();
                break;
            case TaskState.SUCCESS:
                if (observer.complete) async(observer.complete.bind(observer))();
                break;
            case TaskState.CANCELED:
            case TaskState.ERROR:
                if (observer.error) async(observer.error.bind(observer, this._error))();
                break;
            default:
                // TODO(andysoto): assert(false);
                if (observer.error) async(observer.error.bind(observer, this._error))();
        }
    }
    /**
     * Resumes a paused task. Has no effect on a currently running or failed task.
     * @returns True if the operation took effect, false if ignored.
     */ resume() {
        const valid = this._state === "paused" /* PAUSED */  || this._state === "pausing" /* PAUSING */ ;
        if (valid) this._transition("running" /* RUNNING */ );
        return valid;
    }
    /**
     * Pauses a currently running task. Has no effect on a paused or failed task.
     * @returns True if the operation took effect, false if ignored.
     */ pause() {
        const valid = this._state === "running" /* RUNNING */ ;
        if (valid) this._transition("pausing" /* PAUSING */ );
        return valid;
    }
    /**
     * Cancels a currently running or paused task. Has no effect on a complete or
     * failed task.
     * @returns True if the operation took effect, false if ignored.
     */ cancel() {
        const valid = this._state === "running" /* RUNNING */  || this._state === "pausing" /* PAUSING */ ;
        if (valid) this._transition("canceling" /* CANCELING */ );
        return valid;
    }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Provides methods to interact with a bucket in the Firebase Storage service.
 * @internal
 * @param _location - An fbs.location, or the URL at
 *     which to base this object, in one of the following forms:
 *         gs://<bucket>/<object-path>
 *         http[s]://firebasestorage.googleapis.com/
 *                     <api-version>/b/<bucket>/o/<object-path>
 *     Any query or fragment strings will be ignored in the http[s]
 *     format. If no value is passed, the storage object will use a URL based on
 *     the project ID of the base firebase.App instance.
 */ class Reference {
    constructor(_service, location){
        this._service = _service;
        if (location instanceof Location) this._location = location;
        else this._location = Location.makeFromUrl(location, _service.host);
    }
    /**
     * Returns the URL for the bucket and path this object references,
     *     in the form gs://<bucket>/<object-path>
     * @override
     */ toString() {
        return 'gs://' + this._location.bucket + '/' + this._location.path;
    }
    _newRef(service, location) {
        return new Reference(service, location);
    }
    /**
     * A reference to the root of this object's bucket.
     */ get root() {
        const location = new Location(this._location.bucket, '');
        return this._newRef(this._service, location);
    }
    /**
     * The name of the bucket containing this reference's object.
     */ get bucket() {
        return this._location.bucket;
    }
    /**
     * The full path of this object.
     */ get fullPath() {
        return this._location.path;
    }
    /**
     * The short name of this object, which is the last component of the full path.
     * For example, if fullPath is 'full/path/image.png', name is 'image.png'.
     */ get name() {
        return lastComponent(this._location.path);
    }
    /**
     * The `StorageService` instance this `StorageReference` is associated with.
     */ get storage() {
        return this._service;
    }
    /**
     * A `StorageReference` pointing to the parent location of this `StorageReference`, or null if
     * this reference is the root.
     */ get parent() {
        const newPath = parent(this._location.path);
        if (newPath === null) return null;
        const location = new Location(this._location.bucket, newPath);
        return new Reference(this._service, location);
    }
    /**
     * Utility function to throw an error in methods that do not accept a root reference.
     */ _throwIfRoot(name2) {
        if (this._location.path === '') throw invalidRootOperation(name2);
    }
}
/**
 * Download the bytes at the object's location.
 * @returns A Promise containing the downloaded bytes.
 */ function getBytesInternal(ref2, maxDownloadSizeBytes) {
    ref2._throwIfRoot('getBytes');
    const requestInfo = getBytes$1(ref2.storage, ref2._location, maxDownloadSizeBytes);
    return ref2.storage.makeRequestWithTokens(requestInfo, newBytesConnection).then((bytes)=>maxDownloadSizeBytes !== undefined ? bytes.slice(0, maxDownloadSizeBytes) : bytes
    );
}
/**
 * Download the bytes at the object's location.
 * @returns A Promise containing the downloaded blob.
 */ function getBlobInternal(ref3, maxDownloadSizeBytes) {
    ref3._throwIfRoot('getBlob');
    const requestInfo = getBytes$1(ref3.storage, ref3._location, maxDownloadSizeBytes);
    return ref3.storage.makeRequestWithTokens(requestInfo, newBlobConnection).then((blob)=>maxDownloadSizeBytes !== undefined ? blob.slice(0, maxDownloadSizeBytes) : blob
    );
}
/**
 * Uploads data to this object's location.
 * The upload is not resumable.
 *
 * @param ref - StorageReference where data should be uploaded.
 * @param data - The data to upload.
 * @param metadata - Metadata for the newly uploaded data.
 * @returns A Promise containing an UploadResult
 */ function uploadBytes$1(ref4, data, metadata) {
    ref4._throwIfRoot('uploadBytes');
    const requestInfo = multipartUpload(ref4.storage, ref4._location, getMappings(), new FbsBlob(data, true), metadata);
    return ref4.storage.makeRequestWithTokens(requestInfo, newTextConnection).then((finalMetadata)=>{
        return {
            metadata: finalMetadata,
            ref: ref4
        };
    });
}
/**
 * Uploads data to this object's location.
 * The upload can be paused and resumed, and exposes progress updates.
 * @public
 * @param ref - StorageReference where data should be uploaded.
 * @param data - The data to upload.
 * @param metadata - Metadata for the newly uploaded data.
 * @returns An UploadTask
 */ function uploadBytesResumable$1(ref5, data, metadata) {
    ref5._throwIfRoot('uploadBytesResumable');
    return new UploadTask(ref5, new FbsBlob(data), metadata);
}
/**
 * Uploads a string to this object's location.
 * The upload is not resumable.
 * @public
 * @param ref - StorageReference where string should be uploaded.
 * @param value - The string to upload.
 * @param format - The format of the string to upload.
 * @param metadata - Metadata for the newly uploaded string.
 * @returns A Promise containing an UploadResult
 */ function uploadString$1(ref6, value, format = StringFormat.RAW, metadata) {
    ref6._throwIfRoot('uploadString');
    const data = dataFromString(format, value);
    const metadataClone = Object.assign({
    }, metadata);
    if (metadataClone['contentType'] == null && data.contentType != null) metadataClone['contentType'] = data.contentType;
    return uploadBytes$1(ref6, data.data, metadataClone);
}
/**
 * List all items (files) and prefixes (folders) under this storage reference.
 *
 * This is a helper method for calling list() repeatedly until there are
 * no more results. The default pagination size is 1000.
 *
 * Note: The results may not be consistent if objects are changed while this
 * operation is running.
 *
 * Warning: listAll may potentially consume too many resources if there are
 * too many results.
 * @public
 * @param ref - StorageReference to get list from.
 *
 * @returns A Promise that resolves with all the items and prefixes under
 *      the current storage reference. `prefixes` contains references to
 *      sub-directories and `items` contains references to objects in this
 *      folder. `nextPageToken` is never returned.
 */ function listAll$1(ref7) {
    const accumulator = {
        prefixes: [],
        items: []
    };
    return listAllHelper(ref7, accumulator).then(()=>accumulator
    );
}
/**
 * Separated from listAll because async functions can't use "arguments".
 * @param ref
 * @param accumulator
 * @param pageToken
 */ async function listAllHelper(ref8, accumulator, pageToken) {
    const opt = {
        // maxResults is 1000 by default.
        pageToken
    };
    const nextPage = await list$1(ref8, opt);
    accumulator.prefixes.push(...nextPage.prefixes);
    accumulator.items.push(...nextPage.items);
    if (nextPage.nextPageToken != null) await listAllHelper(ref8, accumulator, nextPage.nextPageToken);
}
/**
 * List items (files) and prefixes (folders) under this storage reference.
 *
 * List API is only available for Firebase Rules Version 2.
 *
 * GCS is a key-blob store. Firebase Storage imposes the semantic of '/'
 * delimited folder structure.
 * Refer to GCS's List API if you want to learn more.
 *
 * To adhere to Firebase Rules's Semantics, Firebase Storage does not
 * support objects whose paths end with "/" or contain two consecutive
 * "/"s. Firebase Storage List API will filter these unsupported objects.
 * list() may fail if there are too many unsupported objects in the bucket.
 * @public
 *
 * @param ref - StorageReference to get list from.
 * @param options - See ListOptions for details.
 * @returns A Promise that resolves with the items and prefixes.
 *      `prefixes` contains references to sub-folders and `items`
 *      contains references to objects in this folder. `nextPageToken`
 *      can be used to get the rest of the results.
 */ function list$1(ref9, options) {
    if (options != null) {
        if (typeof options.maxResults === 'number') validateNumber('options.maxResults', /* minValue= */ 1, /* maxValue= */ 1000, options.maxResults);
    }
    const op = options || {
    };
    const requestInfo = list$2(ref9.storage, ref9._location, /*delimiter= */ '/', op.pageToken, op.maxResults);
    return ref9.storage.makeRequestWithTokens(requestInfo, newTextConnection);
}
/**
 * A `Promise` that resolves with the metadata for this object. If this
 * object doesn't exist or metadata cannot be retreived, the promise is
 * rejected.
 * @public
 * @param ref - StorageReference to get metadata from.
 */ function getMetadata$1(ref10) {
    ref10._throwIfRoot('getMetadata');
    const requestInfo = getMetadata$2(ref10.storage, ref10._location, getMappings());
    return ref10.storage.makeRequestWithTokens(requestInfo, newTextConnection);
}
/**
 * Updates the metadata for this object.
 * @public
 * @param ref - StorageReference to update metadata for.
 * @param metadata - The new metadata for the object.
 *     Only values that have been explicitly set will be changed. Explicitly
 *     setting a value to null will remove the metadata.
 * @returns A `Promise` that resolves
 *     with the new metadata for this object.
 *     See `firebaseStorage.Reference.prototype.getMetadata`
 */ function updateMetadata$1(ref11, metadata) {
    ref11._throwIfRoot('updateMetadata');
    const requestInfo = updateMetadata$2(ref11.storage, ref11._location, metadata, getMappings());
    return ref11.storage.makeRequestWithTokens(requestInfo, newTextConnection);
}
/**
 * Returns the download URL for the given Reference.
 * @public
 * @returns A `Promise` that resolves with the download
 *     URL for this object.
 */ function getDownloadURL$1(ref12) {
    ref12._throwIfRoot('getDownloadURL');
    const requestInfo = getDownloadUrl(ref12.storage, ref12._location, getMappings());
    return ref12.storage.makeRequestWithTokens(requestInfo, newTextConnection).then((url)=>{
        if (url === null) throw noDownloadURL();
        return url;
    });
}
/**
 * Deletes the object at this location.
 * @public
 * @param ref - StorageReference for object to delete.
 * @returns A `Promise` that resolves if the deletion succeeds.
 */ function deleteObject$1(ref13) {
    ref13._throwIfRoot('deleteObject');
    const requestInfo = deleteObject$2(ref13.storage, ref13._location);
    return ref13.storage.makeRequestWithTokens(requestInfo, newTextConnection);
}
/**
 * Returns reference for object obtained by appending `childPath` to `ref`.
 *
 * @param ref - StorageReference to get child of.
 * @param childPath - Child path from provided ref.
 * @returns A reference to the object obtained by
 * appending childPath, removing any duplicate, beginning, or trailing
 * slashes.
 *
 */ function _getChild$1(ref14, childPath) {
    const newPath = child(ref14._location.path, childPath);
    const location = new Location(ref14._location.bucket, newPath);
    return new Reference(ref14.storage, location);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function isUrl(path) {
    return /^[A-Za-z]+:\/\//.test(path);
}
/**
 * Returns a firebaseStorage.Reference for the given url.
 */ function refFromURL(service, url) {
    return new Reference(service, url);
}
/**
 * Returns a firebaseStorage.Reference for the given path in the default
 * bucket.
 */ function refFromPath(ref15, path) {
    if (ref15 instanceof FirebaseStorageImpl) {
        const service = ref15;
        if (service._bucket == null) throw noDefaultBucket();
        const reference = new Reference(service, service._bucket);
        if (path != null) return refFromPath(reference, path);
        else return reference;
    } else {
        // ref is a Reference
        if (path !== undefined) return _getChild$1(ref15, path);
        else return ref15;
    }
}
function ref$1(serviceOrRef, pathOrUrl) {
    if (pathOrUrl && isUrl(pathOrUrl)) {
        if (serviceOrRef instanceof FirebaseStorageImpl) return refFromURL(serviceOrRef, pathOrUrl);
        else throw invalidArgument('To use ref(service, url), the first argument must be a Storage instance.');
    } else return refFromPath(serviceOrRef, pathOrUrl);
}
function extractBucket(host, config) {
    const bucketString = config === null || config === void 0 ? void 0 : config[CONFIG_STORAGE_BUCKET_KEY];
    if (bucketString == null) return null;
    return Location.makeFromBucketSpec(bucketString, host);
}
function connectStorageEmulator$1(storage, host, port, options = {
}) {
    storage.host = `${host}:${port}`;
    storage._protocol = 'http';
    const { mockUserToken  } = options;
    if (mockUserToken) storage._overrideAuthToken = typeof mockUserToken === 'string' ? mockUserToken : _util.createMockUserToken(mockUserToken, storage.app.options.projectId);
}
/**
 * A service that provides Firebase Storage Reference instances.
 * @param opt_url - gs:// url to a custom Storage Bucket
 *
 * @internal
 */ class FirebaseStorageImpl {
    constructor(/**
     * FirebaseApp associated with this StorageService instance.
     */ app, _authProvider, /**
     * @internal
     */ _appCheckProvider, /**
     * @internal
     */ _url, _firebaseVersion){
        this.app = app;
        this._authProvider = _authProvider;
        this._appCheckProvider = _appCheckProvider;
        this._url = _url;
        this._firebaseVersion = _firebaseVersion;
        this._bucket = null;
        /**
         * This string can be in the formats:
         * - host
         * - host:port
         */ this._host = DEFAULT_HOST;
        this._protocol = 'https';
        this._appId = null;
        this._deleted = false;
        this._maxOperationRetryTime = DEFAULT_MAX_OPERATION_RETRY_TIME;
        this._maxUploadRetryTime = DEFAULT_MAX_UPLOAD_RETRY_TIME;
        this._requests = new Set();
        if (_url != null) this._bucket = Location.makeFromBucketSpec(_url, this._host);
        else this._bucket = extractBucket(this._host, this.app.options);
    }
    /**
     * The host string for this service, in the form of `host` or
     * `host:port`.
     */ get host() {
        return this._host;
    }
    set host(host) {
        this._host = host;
        if (this._url != null) this._bucket = Location.makeFromBucketSpec(this._url, host);
        else this._bucket = extractBucket(host, this.app.options);
    }
    /**
     * The maximum time to retry uploads in milliseconds.
     */ get maxUploadRetryTime() {
        return this._maxUploadRetryTime;
    }
    set maxUploadRetryTime(time) {
        validateNumber('time', /* minValue=*/ 0, /* maxValue= */ Number.POSITIVE_INFINITY, time);
        this._maxUploadRetryTime = time;
    }
    /**
     * The maximum time to retry operations other than uploads or downloads in
     * milliseconds.
     */ get maxOperationRetryTime() {
        return this._maxOperationRetryTime;
    }
    set maxOperationRetryTime(time) {
        validateNumber('time', /* minValue=*/ 0, /* maxValue= */ Number.POSITIVE_INFINITY, time);
        this._maxOperationRetryTime = time;
    }
    async _getAuthToken() {
        if (this._overrideAuthToken) return this._overrideAuthToken;
        const auth = this._authProvider.getImmediate({
            optional: true
        });
        if (auth) {
            const tokenData = await auth.getToken();
            if (tokenData !== null) return tokenData.accessToken;
        }
        return null;
    }
    async _getAppCheckToken() {
        const appCheck = this._appCheckProvider.getImmediate({
            optional: true
        });
        if (appCheck) {
            const result = await appCheck.getToken();
            // TODO: What do we want to do if there is an error getting the token?
            // Context: appCheck.getToken() will never throw even if an error happened. In the error case, a dummy token will be
            // returned along with an error field describing the error. In general, we shouldn't care about the error condition and just use
            // the token (actual or dummy) to send requests.
            return result.token;
        }
        return null;
    }
    /**
     * Stop running requests and prevent more from being created.
     */ _delete() {
        if (!this._deleted) {
            this._deleted = true;
            this._requests.forEach((request)=>request.cancel()
            );
            this._requests.clear();
        }
        return Promise.resolve();
    }
    /**
     * Returns a new firebaseStorage.Reference object referencing this StorageService
     * at the given Location.
     */ _makeStorageReference(loc) {
        return new Reference(this, loc);
    }
    /**
     * @param requestInfo - HTTP RequestInfo object
     * @param authToken - Firebase auth token
     */ _makeRequest(requestInfo, requestFactory, authToken, appCheckToken) {
        if (!this._deleted) {
            const request = makeRequest(requestInfo, this._appId, authToken, appCheckToken, requestFactory, this._firebaseVersion);
            this._requests.add(request);
            // Request removes itself from set when complete.
            request.getPromise().then(()=>this._requests.delete(request)
            , ()=>this._requests.delete(request)
            );
            return request;
        } else return new FailRequest(appDeleted());
    }
    async makeRequestWithTokens(requestInfo, requestFactory) {
        const [authToken, appCheckToken] = await Promise.all([
            this._getAuthToken(),
            this._getAppCheckToken()
        ]);
        return this._makeRequest(requestInfo, requestFactory, authToken, appCheckToken).getPromise();
    }
}
const name = "@firebase/storage";
const version = "0.9.2";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Type constant for Firebase Storage.
 */ const STORAGE_TYPE = 'storage';
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Downloads the data at the object's location. Returns an error if the object
 * is not found.
 *
 * To use this functionality, you have to whitelist your app's origin in your
 * Cloud Storage bucket. See also
 * https://cloud.google.com/storage/docs/configuring-cors
 *
 * @public
 * @param ref - StorageReference where data should be downloaded.
 * @param maxDownloadSizeBytes - If set, the maximum allowed size in bytes to
 * retrieve.
 * @returns A Promise containing the object's bytes
 */ function getBytes(ref16, maxDownloadSizeBytes) {
    ref16 = _util.getModularInstance(ref16);
    return getBytesInternal(ref16, maxDownloadSizeBytes);
}
/**
 * Uploads data to this object's location.
 * The upload is not resumable.
 * @public
 * @param ref - {@link StorageReference} where data should be uploaded.
 * @param data - The data to upload.
 * @param metadata - Metadata for the data to upload.
 * @returns A Promise containing an UploadResult
 */ function uploadBytes(ref17, data, metadata) {
    ref17 = _util.getModularInstance(ref17);
    return uploadBytes$1(ref17, data, metadata);
}
/**
 * Uploads a string to this object's location.
 * The upload is not resumable.
 * @public
 * @param ref - {@link StorageReference} where string should be uploaded.
 * @param value - The string to upload.
 * @param format - The format of the string to upload.
 * @param metadata - Metadata for the string to upload.
 * @returns A Promise containing an UploadResult
 */ function uploadString(ref18, value, format, metadata) {
    ref18 = _util.getModularInstance(ref18);
    return uploadString$1(ref18, value, format, metadata);
}
/**
 * Uploads data to this object's location.
 * The upload can be paused and resumed, and exposes progress updates.
 * @public
 * @param ref - {@link StorageReference} where data should be uploaded.
 * @param data - The data to upload.
 * @param metadata - Metadata for the data to upload.
 * @returns An UploadTask
 */ function uploadBytesResumable(ref19, data, metadata) {
    ref19 = _util.getModularInstance(ref19);
    return uploadBytesResumable$1(ref19, data, metadata);
}
/**
 * A `Promise` that resolves with the metadata for this object. If this
 * object doesn't exist or metadata cannot be retreived, the promise is
 * rejected.
 * @public
 * @param ref - {@link StorageReference} to get metadata from.
 */ function getMetadata(ref20) {
    ref20 = _util.getModularInstance(ref20);
    return getMetadata$1(ref20);
}
/**
 * Updates the metadata for this object.
 * @public
 * @param ref - {@link StorageReference} to update metadata for.
 * @param metadata - The new metadata for the object.
 *     Only values that have been explicitly set will be changed. Explicitly
 *     setting a value to null will remove the metadata.
 * @returns A `Promise` that resolves with the new metadata for this object.
 */ function updateMetadata(ref21, metadata) {
    ref21 = _util.getModularInstance(ref21);
    return updateMetadata$1(ref21, metadata);
}
/**
 * List items (files) and prefixes (folders) under this storage reference.
 *
 * List API is only available for Firebase Rules Version 2.
 *
 * GCS is a key-blob store. Firebase Storage imposes the semantic of '/'
 * delimited folder structure.
 * Refer to GCS's List API if you want to learn more.
 *
 * To adhere to Firebase Rules's Semantics, Firebase Storage does not
 * support objects whose paths end with "/" or contain two consecutive
 * "/"s. Firebase Storage List API will filter these unsupported objects.
 * list() may fail if there are too many unsupported objects in the bucket.
 * @public
 *
 * @param ref - {@link StorageReference} to get list from.
 * @param options - See {@link ListOptions} for details.
 * @returns A `Promise` that resolves with the items and prefixes.
 *      `prefixes` contains references to sub-folders and `items`
 *      contains references to objects in this folder. `nextPageToken`
 *      can be used to get the rest of the results.
 */ function list(ref22, options) {
    ref22 = _util.getModularInstance(ref22);
    return list$1(ref22, options);
}
/**
 * List all items (files) and prefixes (folders) under this storage reference.
 *
 * This is a helper method for calling list() repeatedly until there are
 * no more results. The default pagination size is 1000.
 *
 * Note: The results may not be consistent if objects are changed while this
 * operation is running.
 *
 * Warning: `listAll` may potentially consume too many resources if there are
 * too many results.
 * @public
 * @param ref - {@link StorageReference} to get list from.
 *
 * @returns A `Promise` that resolves with all the items and prefixes under
 *      the current storage reference. `prefixes` contains references to
 *      sub-directories and `items` contains references to objects in this
 *      folder. `nextPageToken` is never returned.
 */ function listAll(ref23) {
    ref23 = _util.getModularInstance(ref23);
    return listAll$1(ref23);
}
/**
 * Returns the download URL for the given {@link StorageReference}.
 * @public
 * @param ref - {@link StorageReference} to get the download URL for.
 * @returns A `Promise` that resolves with the download
 *     URL for this object.
 */ function getDownloadURL(ref24) {
    ref24 = _util.getModularInstance(ref24);
    return getDownloadURL$1(ref24);
}
/**
 * Deletes the object at this location.
 * @public
 * @param ref - {@link StorageReference} for object to delete.
 * @returns A `Promise` that resolves if the deletion succeeds.
 */ function deleteObject(ref25) {
    ref25 = _util.getModularInstance(ref25);
    return deleteObject$1(ref25);
}
function ref(serviceOrRef, pathOrUrl) {
    serviceOrRef = _util.getModularInstance(serviceOrRef);
    return ref$1(serviceOrRef, pathOrUrl);
}
/**
 * @internal
 */ function _getChild(ref26, childPath) {
    return _getChild$1(ref26, childPath);
}
/**
 * Gets a {@link FirebaseStorage} instance for the given Firebase app.
 * @public
 * @param app - Firebase app to get {@link FirebaseStorage} instance for.
 * @param bucketUrl - The gs:// url to your Firebase Storage Bucket.
 * If not passed, uses the app's default Storage Bucket.
 * @returns A {@link FirebaseStorage} instance.
 */ function getStorage(app = _app.getApp(), bucketUrl) {
    app = _util.getModularInstance(app);
    const storageProvider = _app._getProvider(app, STORAGE_TYPE);
    const storageInstance = storageProvider.getImmediate({
        identifier: bucketUrl
    });
    return storageInstance;
}
/**
 * Modify this {@link FirebaseStorage} instance to communicate with the Cloud Storage emulator.
 *
 * @param storage - The {@link FirebaseStorage} instance
 * @param host - The emulator host (ex: localhost)
 * @param port - The emulator port (ex: 5001)
 * @param options - Emulator options. `options.mockUserToken` is the mock auth
 * token to use for unit testing Security Rules.
 * @public
 */ function connectStorageEmulator(storage, host, port, options = {
}) {
    connectStorageEmulator$1(storage, host, port, options);
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Downloads the data at the object's location. Returns an error if the object
 * is not found.
 *
 * To use this functionality, you have to whitelist your app's origin in your
 * Cloud Storage bucket. See also
 * https://cloud.google.com/storage/docs/configuring-cors
 *
 * This API is not available in Node.
 *
 * @public
 * @param ref - StorageReference where data should be downloaded.
 * @param maxDownloadSizeBytes - If set, the maximum allowed size in bytes to
 * retrieve.
 * @returns A Promise that resolves with a Blob containing the object's bytes
 */ function getBlob(ref27, maxDownloadSizeBytes) {
    ref27 = _util.getModularInstance(ref27);
    return getBlobInternal(ref27, maxDownloadSizeBytes);
}
/**
 * Downloads the data at the object's location. Raises an error event if the
 * object is not found.
 *
 * This API is only available in Node.
 *
 * @public
 * @param ref - StorageReference where data should be downloaded.
 * @param maxDownloadSizeBytes - If set, the maximum allowed size in bytes to
 * retrieve.
 * @returns A stream with the object's data as bytes
 */ function getStream(ref, maxDownloadSizeBytes) {
    throw new Error('getStream() is only supported by NodeJS builds');
}
/**
 * Cloud Storage for Firebase
 *
 * @packageDocumentation
 */ function factory(container, { instanceIdentifier: url  }) {
    const app = container.getProvider('app').getImmediate();
    const authProvider = container.getProvider('auth-internal');
    const appCheckProvider = container.getProvider('app-check-internal');
    return new FirebaseStorageImpl(app, authProvider, appCheckProvider, url, _app.SDK_VERSION);
}
function registerStorage() {
    _app._registerComponent(new _component.Component(STORAGE_TYPE, factory, "PUBLIC" /* PUBLIC */ ).setMultipleInstances(true));
    //RUNTIME_ENV will be replaced during the compilation to "node" for nodejs and an empty string for browser
    _app.registerVersion(name, version, '');
    // BUILD_TARGET will be replaced by values like esm5, esm2017, cjs5, etc during the compilation
    _app.registerVersion(name, version, 'esm2017');
}
registerStorage();

},{"@firebase/app":"3AcPV","@firebase/util":"ePiK6","@firebase/component":"bi1VB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["dHflk","3frdX"], "3frdX", "parcelRequire94c2")

//# sourceMappingURL=index.531d0d2d.js.map