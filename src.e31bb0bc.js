// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"sass/main.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./../images/hero/hero-bg-mob.png":[["hero-bg-mob.0bbf9343.png","images/hero/hero-bg-mob.png"],"images/hero/hero-bg-mob.png"],"./../images/hero/hero-bg-mob@2x.png":[["hero-bg-mob@2x.56e1f94c.png","images/hero/hero-bg-mob@2x.png"],"images/hero/hero-bg-mob@2x.png"],"./../images/hero/hero-bg-tabl.png":[["hero-bg-tabl.a76acd68.png","images/hero/hero-bg-tabl.png"],"images/hero/hero-bg-tabl.png"],"./../images/hero/hero-bg-tabl@2x.png":[["hero-bg-tabl@2x.98af70dd.png","images/hero/hero-bg-tabl@2x.png"],"images/hero/hero-bg-tabl@2x.png"],"./../images/hero/hero-bg-desc.png":[["hero-bg-desc.97b5f1e4.png","images/hero/hero-bg-desc.png"],"images/hero/hero-bg-desc.png"],"./../images/hero/hero-bg-desc@2x.png":[["hero-bg-desc@2x.a0ac0cad.png","images/hero/hero-bg-desc@2x.png"],"images/hero/hero-bg-desc@2x.png"],"./../images/cross.svg":[["cross.b107c138.svg","images/cross.svg"],"images/cross.svg"],"./../images/teacher/vector.svg":[["vector.af1c769d.svg","images/teacher/vector.svg"],"images/teacher/vector.svg"],"./../images/features/features-icon-1.svg":[["features-icon-1.5f5c6820.svg","images/features/features-icon-1.svg"],"images/features/features-icon-1.svg"],"./../images/features/features-icon-1desc.svg":[["features-icon-1desc.5aecfe17.svg","images/features/features-icon-1desc.svg"],"images/features/features-icon-1desc.svg"],"./../images/features/features-icon-2.svg":[["features-icon-2.ebdd3ff3.svg","images/features/features-icon-2.svg"],"images/features/features-icon-2.svg"],"./../images/features/features-icon-2desc.svg":[["features-icon-2desc.12ada567.svg","images/features/features-icon-2desc.svg"],"images/features/features-icon-2desc.svg"],"./../images/features/features-icon-3.svg":[["features-icon-3.6c7b6190.svg","images/features/features-icon-3.svg"],"images/features/features-icon-3.svg"],"./../images/features/features-icon-3desc.svg":[["features-icon-3desc.00e32898.svg","images/features/features-icon-3desc.svg"],"images/features/features-icon-3desc.svg"],"./../images/problems/group.png":[["group.008128be.png","images/problems/group.png"],"images/problems/group.png"],"./../images/teacher/icon.svg":[["icon.9bbb83d8.svg","images/teacher/icon.svg"],"images/teacher/icon.svg"],"./../images/header_footer/campfire.svg":[["campfire.f154a267.svg","images/header_footer/campfire.svg"],"images/header_footer/campfire.svg"],"./../images/registration/bg-form-mobil.jpg":[["bg-form-mobil.4e080d35.jpg","images/registration/bg-form-mobil.jpg"],"images/registration/bg-form-mobil.jpg"],"./../images/registration/bg-form-mobil@2x.jpg":[["bg-form-mobil@2x.b55f94fd.jpg","images/registration/bg-form-mobil@2x.jpg"],"images/registration/bg-form-mobil@2x.jpg"],"./../images/registration/bg-form-tablet.jpg":[["bg-form-tablet.27e6dbb7.jpg","images/registration/bg-form-tablet.jpg"],"images/registration/bg-form-tablet.jpg"],"./../images/registration/bg-form-tablet@2x.jpg":[["bg-form-tablet@2x.f5b7e471.jpg","images/registration/bg-form-tablet@2x.jpg"],"images/registration/bg-form-tablet@2x.jpg"],"./../images/registration/bg-form-desktop.jpg":[["bg-form-desktop.9a5033cd.jpg","images/registration/bg-form-desktop.jpg"],"images/registration/bg-form-desktop.jpg"],"./../images/registration/bg-form-desktop@2x.jpg":[["bg-form-desktop@2x.89ad67a6.jpg","images/registration/bg-form-desktop@2x.jpg"],"images/registration/bg-form-desktop@2x.jpg"],"./../images/feedback/instagram-icon.jpg":[["instagram-icon.9ed492c8.jpg","images/feedback/instagram-icon.jpg"],"images/feedback/instagram-icon.jpg"],"./../images/feedback/icon-previous-arrow.svg":[["icon-previous-arrow.6b67a643.svg","images/feedback/icon-previous-arrow.svg"],"images/feedback/icon-previous-arrow.svg"],"./../images/feedback/icon-next-arrow.svg":[["icon-next-arrow.95ea0703.svg","images/feedback/icon-next-arrow.svg"],"images/feedback/icon-next-arrow.svg"],"./../images/feedback/anna/anna-icon-108x108@2x.jpg":[["anna-icon-108x108@2x.756a71af.jpg","images/feedback/anna/anna-icon-108x108@2x.jpg"],"images/feedback/anna/anna-icon-108x108@2x.jpg"],"./../images/feedback/anna/anna-icon-108x108@2x.webp":[["anna-icon-108x108@2x.79950270.webp","images/feedback/anna/anna-icon-108x108@2x.webp"],"images/feedback/anna/anna-icon-108x108@2x.webp"],"./../images/feedback/lena/lena-icon-108x108@2x.jpg":[["lena-icon-108x108@2x.d49a992b.jpg","images/feedback/lena/lena-icon-108x108@2x.jpg"],"images/feedback/lena/lena-icon-108x108@2x.jpg"],"./../images/feedback/lena/lena-icon-108x108@2x.webp":[["lena-icon-108x108@2x.95a05a6d.webp","images/feedback/lena/lena-icon-108x108@2x.webp"],"images/feedback/lena/lena-icon-108x108@2x.webp"],"./../images/feedback/igor/igor-icon-108x108@2x.jpg":[["igor-icon-108x108@2x.ec00a76e.jpg","images/feedback/igor/igor-icon-108x108@2x.jpg"],"images/feedback/igor/igor-icon-108x108@2x.jpg"],"./../images/feedback/igor/igor-icon-108x108@2x.webp":[["igor-icon-108x108@2x.be2326e6.webp","images/feedback/igor/igor-icon-108x108@2x.webp"],"images/feedback/igor/igor-icon-108x108@2x.webp"],"./../images/feedback/tatiana/tatiana-icon-108x108@2x.jpg":[["tatiana-icon-108x108@2x.e7ca3661.jpg","images/feedback/tatiana/tatiana-icon-108x108@2x.jpg"],"images/feedback/tatiana/tatiana-icon-108x108@2x.jpg"],"./../images/feedback/tatiana/tatiana-icon-108x108@2x.webp":[["tatiana-icon-108x108@2x.cb86a18f.webp","images/feedback/tatiana/tatiana-icon-108x108@2x.webp"],"images/feedback/tatiana/tatiana-icon-108x108@2x.webp"],"./../images/feedback/tanya/tanya-icon-108x108@2x.jpg":[["tanya-icon-108x108@2x.cc77eb37.jpg","images/feedback/tanya/tanya-icon-108x108@2x.jpg"],"images/feedback/tanya/tanya-icon-108x108@2x.jpg"],"./../images/feedback/tanya/tanya-icon-108x108@2x.webp":[["tanya-icon-108x108@2x.cf0da470.webp","images/feedback/tanya/tanya-icon-108x108@2x.webp"],"images/feedback/tanya/tanya-icon-108x108@2x.webp"],"./../images/feedback/women/women-icon-108x108@2x.jpg":[["women-icon-108x108@2x.1cccb037.jpg","images/feedback/women/women-icon-108x108@2x.jpg"],"images/feedback/women/women-icon-108x108@2x.jpg"],"./../images/feedback/women/women-icon-108x108@2x.webp":[["women-icon-108x108@2x.e3aa3f29.webp","images/feedback/women/women-icon-108x108@2x.webp"],"images/feedback/women/women-icon-108x108@2x.webp"],"./../images/feedback/girl/girl-icon-108x108@2x.jpg":[["girl-icon-108x108@2x.74b38d98.jpg","images/feedback/girl/girl-icon-108x108@2x.jpg"],"images/feedback/girl/girl-icon-108x108@2x.jpg"],"./../images/feedback/girl/girl-icon-108x108@2x.webp":[["girl-icon-108x108@2x.44688b32.webp","images/feedback/girl/girl-icon-108x108@2x.webp"],"images/feedback/girl/girl-icon-108x108@2x.webp"],"./../images/header_footer/phone-icon.svg":[["phone-icon.b84140e2.svg","images/header_footer/phone-icon.svg"],"images/header_footer/phone-icon.svg"],"./../images/header_footer/instagram-icon.svg":[["instagram-icon.5c16de12.svg","images/header_footer/instagram-icon.svg"],"images/header_footer/instagram-icon.svg"],"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"index.js":[function(require,module,exports) {
"use strict";

require("./sass/main.scss");
},{"./sass/main.scss":"sass/main.scss"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49314" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map