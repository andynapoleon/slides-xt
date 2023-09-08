/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 705:
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ 742:
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ 738:
/***/ ((module) => {



module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ 118:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(738);
/* harmony import */ var _css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(705);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(742);
/* harmony import */ var _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(562), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(643), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(921), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*!
* reveal.js 4.5.0
* https://revealjs.com
* MIT licensed
*
* Copyright (C) 2011-2023 Hakim El Hattab, https://hakim.se
*/
.reveal .r-stretch,.reveal .stretch{max-width:none;max-height:none}.reveal pre.r-stretch code,.reveal pre.stretch code{height:100%;max-height:100%;box-sizing:border-box}.reveal .r-fit-text{display:inline-block;white-space:nowrap}.reveal .r-stack{display:grid}.reveal .r-stack>*{grid-area:1/1;margin:auto}.reveal .r-hstack,.reveal .r-vstack{display:flex}.reveal .r-hstack img,.reveal .r-hstack video,.reveal .r-vstack img,.reveal .r-vstack video{min-width:0;min-height:0;object-fit:contain}.reveal .r-vstack{flex-direction:column;align-items:center;justify-content:center}.reveal .r-hstack{flex-direction:row;align-items:center;justify-content:center}.reveal .items-stretch{align-items:stretch}.reveal .items-start{align-items:flex-start}.reveal .items-center{align-items:center}.reveal .items-end{align-items:flex-end}.reveal .justify-between{justify-content:space-between}.reveal .justify-around{justify-content:space-around}.reveal .justify-start{justify-content:flex-start}.reveal .justify-center{justify-content:center}.reveal .justify-end{justify-content:flex-end}html.reveal-full-page{width:100%;height:100%;height:100vh;height:calc(var(--vh,1vh) * 100);overflow:hidden}.reveal-viewport{height:100%;overflow:hidden;position:relative;line-height:1;margin:0;background-color:#fff;color:#000}.reveal-viewport:fullscreen{top:0!important;left:0!important;width:100%!important;height:100%!important;transform:none!important}.reveal .fragment{transition:all .2s ease}.reveal .fragment:not(.custom){opacity:0;visibility:hidden;will-change:opacity}.reveal .fragment.visible{opacity:1;visibility:inherit}.reveal .fragment.disabled{transition:none}.reveal .fragment.grow{opacity:1;visibility:inherit}.reveal .fragment.grow.visible{transform:scale(1.3)}.reveal .fragment.shrink{opacity:1;visibility:inherit}.reveal .fragment.shrink.visible{transform:scale(.7)}.reveal .fragment.zoom-in{transform:scale(.1)}.reveal .fragment.zoom-in.visible{transform:none}.reveal .fragment.fade-out{opacity:1;visibility:inherit}.reveal .fragment.fade-out.visible{opacity:0;visibility:hidden}.reveal .fragment.semi-fade-out{opacity:1;visibility:inherit}.reveal .fragment.semi-fade-out.visible{opacity:.5;visibility:inherit}.reveal .fragment.strike{opacity:1;visibility:inherit}.reveal .fragment.strike.visible{text-decoration:line-through}.reveal .fragment.fade-up{transform:translate(0,40px)}.reveal .fragment.fade-up.visible{transform:translate(0,0)}.reveal .fragment.fade-down{transform:translate(0,-40px)}.reveal .fragment.fade-down.visible{transform:translate(0,0)}.reveal .fragment.fade-right{transform:translate(-40px,0)}.reveal .fragment.fade-right.visible{transform:translate(0,0)}.reveal .fragment.fade-left{transform:translate(40px,0)}.reveal .fragment.fade-left.visible{transform:translate(0,0)}.reveal .fragment.current-visible,.reveal .fragment.fade-in-then-out{opacity:0;visibility:hidden}.reveal .fragment.current-visible.current-fragment,.reveal .fragment.fade-in-then-out.current-fragment{opacity:1;visibility:inherit}.reveal .fragment.fade-in-then-semi-out{opacity:0;visibility:hidden}.reveal .fragment.fade-in-then-semi-out.visible{opacity:.5;visibility:inherit}.reveal .fragment.fade-in-then-semi-out.current-fragment{opacity:1;visibility:inherit}.reveal .fragment.highlight-blue,.reveal .fragment.highlight-current-blue,.reveal .fragment.highlight-current-green,.reveal .fragment.highlight-current-red,.reveal .fragment.highlight-green,.reveal .fragment.highlight-red{opacity:1;visibility:inherit}.reveal .fragment.highlight-red.visible{color:#ff2c2d}.reveal .fragment.highlight-green.visible{color:#17ff2e}.reveal .fragment.highlight-blue.visible{color:#1b91ff}.reveal .fragment.highlight-current-red.current-fragment{color:#ff2c2d}.reveal .fragment.highlight-current-green.current-fragment{color:#17ff2e}.reveal .fragment.highlight-current-blue.current-fragment{color:#1b91ff}.reveal:after{content:"";font-style:italic}.reveal iframe{z-index:1}.reveal a{position:relative}@keyframes bounce-right{0%,10%,25%,40%,50%{transform:translateX(0)}20%{transform:translateX(10px)}30%{transform:translateX(-5px)}}@keyframes bounce-left{0%,10%,25%,40%,50%{transform:translateX(0)}20%{transform:translateX(-10px)}30%{transform:translateX(5px)}}@keyframes bounce-down{0%,10%,25%,40%,50%{transform:translateY(0)}20%{transform:translateY(10px)}30%{transform:translateY(-5px)}}.reveal .controls{display:none;position:absolute;top:auto;bottom:12px;right:12px;left:auto;z-index:11;color:#000;pointer-events:none;font-size:10px}.reveal .controls button{position:absolute;padding:0;background-color:transparent;border:0;outline:0;cursor:pointer;color:currentColor;transform:scale(.9999);transition:color .2s ease,opacity .2s ease,transform .2s ease;z-index:2;pointer-events:auto;font-size:inherit;visibility:hidden;opacity:0;-webkit-appearance:none;-webkit-tap-highlight-color:transparent}.reveal .controls .controls-arrow:after,.reveal .controls .controls-arrow:before{content:"";position:absolute;top:0;left:0;width:2.6em;height:.5em;border-radius:.25em;background-color:currentColor;transition:all .15s ease,background-color .8s ease;transform-origin:.2em 50%;will-change:transform}.reveal .controls .controls-arrow{position:relative;width:3.6em;height:3.6em}.reveal .controls .controls-arrow:before{transform:translateX(.5em) translateY(1.55em) rotate(45deg)}.reveal .controls .controls-arrow:after{transform:translateX(.5em) translateY(1.55em) rotate(-45deg)}.reveal .controls .controls-arrow:hover:before{transform:translateX(.5em) translateY(1.55em) rotate(40deg)}.reveal .controls .controls-arrow:hover:after{transform:translateX(.5em) translateY(1.55em) rotate(-40deg)}.reveal .controls .controls-arrow:active:before{transform:translateX(.5em) translateY(1.55em) rotate(36deg)}.reveal .controls .controls-arrow:active:after{transform:translateX(.5em) translateY(1.55em) rotate(-36deg)}.reveal .controls .navigate-left{right:6.4em;bottom:3.2em;transform:translateX(-10px)}.reveal .controls .navigate-left.highlight{animation:bounce-left 2s 50 both ease-out}.reveal .controls .navigate-right{right:0;bottom:3.2em;transform:translateX(10px)}.reveal .controls .navigate-right .controls-arrow{transform:rotate(180deg)}.reveal .controls .navigate-right.highlight{animation:bounce-right 2s 50 both ease-out}.reveal .controls .navigate-up{right:3.2em;bottom:6.4em;transform:translateY(-10px)}.reveal .controls .navigate-up .controls-arrow{transform:rotate(90deg)}.reveal .controls .navigate-down{right:3.2em;bottom:-1.4em;padding-bottom:1.4em;transform:translateY(10px)}.reveal .controls .navigate-down .controls-arrow{transform:rotate(-90deg)}.reveal .controls .navigate-down.highlight{animation:bounce-down 2s 50 both ease-out}.reveal .controls[data-controls-back-arrows=faded] .navigate-up.enabled{opacity:.3}.reveal .controls[data-controls-back-arrows=faded] .navigate-up.enabled:hover{opacity:1}.reveal .controls[data-controls-back-arrows=hidden] .navigate-up.enabled{opacity:0;visibility:hidden}.reveal .controls .enabled{visibility:visible;opacity:.9;cursor:pointer;transform:none}.reveal .controls .enabled.fragmented{opacity:.5}.reveal .controls .enabled.fragmented:hover,.reveal .controls .enabled:hover{opacity:1}.reveal:not(.rtl) .controls[data-controls-back-arrows=faded] .navigate-left.enabled{opacity:.3}.reveal:not(.rtl) .controls[data-controls-back-arrows=faded] .navigate-left.enabled:hover{opacity:1}.reveal:not(.rtl) .controls[data-controls-back-arrows=hidden] .navigate-left.enabled{opacity:0;visibility:hidden}.reveal.rtl .controls[data-controls-back-arrows=faded] .navigate-right.enabled{opacity:.3}.reveal.rtl .controls[data-controls-back-arrows=faded] .navigate-right.enabled:hover{opacity:1}.reveal.rtl .controls[data-controls-back-arrows=hidden] .navigate-right.enabled{opacity:0;visibility:hidden}.reveal[data-navigation-mode=linear].has-horizontal-slides .navigate-down,.reveal[data-navigation-mode=linear].has-horizontal-slides .navigate-up{display:none}.reveal:not(.has-vertical-slides) .controls .navigate-left,.reveal[data-navigation-mode=linear].has-horizontal-slides .navigate-left{bottom:1.4em;right:5.5em}.reveal:not(.has-vertical-slides) .controls .navigate-right,.reveal[data-navigation-mode=linear].has-horizontal-slides .navigate-right{bottom:1.4em;right:.5em}.reveal:not(.has-horizontal-slides) .controls .navigate-up{right:1.4em;bottom:5em}.reveal:not(.has-horizontal-slides) .controls .navigate-down{right:1.4em;bottom:.5em}.reveal.has-dark-background .controls{color:#fff}.reveal.has-light-background .controls{color:#000}.reveal.no-hover .controls .controls-arrow:active:before,.reveal.no-hover .controls .controls-arrow:hover:before{transform:translateX(.5em) translateY(1.55em) rotate(45deg)}.reveal.no-hover .controls .controls-arrow:active:after,.reveal.no-hover .controls .controls-arrow:hover:after{transform:translateX(.5em) translateY(1.55em) rotate(-45deg)}@media screen and (min-width:500px){.reveal .controls[data-controls-layout=edges]{top:0;right:0;bottom:0;left:0}.reveal .controls[data-controls-layout=edges] .navigate-down,.reveal .controls[data-controls-layout=edges] .navigate-left,.reveal .controls[data-controls-layout=edges] .navigate-right,.reveal .controls[data-controls-layout=edges] .navigate-up{bottom:auto;right:auto}.reveal .controls[data-controls-layout=edges] .navigate-left{top:50%;left:.8em;margin-top:-1.8em}.reveal .controls[data-controls-layout=edges] .navigate-right{top:50%;right:.8em;margin-top:-1.8em}.reveal .controls[data-controls-layout=edges] .navigate-up{top:.8em;left:50%;margin-left:-1.8em}.reveal .controls[data-controls-layout=edges] .navigate-down{bottom:-.3em;left:50%;margin-left:-1.8em}}.reveal .progress{position:absolute;display:none;height:3px;width:100%;bottom:0;left:0;z-index:10;background-color:rgba(0,0,0,.2);color:#fff}.reveal .progress:after{content:"";display:block;position:absolute;height:10px;width:100%;top:-10px}.reveal .progress span{display:block;height:100%;width:100%;background-color:currentColor;transition:transform .8s cubic-bezier(.26,.86,.44,.985);transform-origin:0 0;transform:scaleX(0)}.reveal .slide-number{position:absolute;display:block;right:8px;bottom:8px;z-index:31;font-family:Helvetica,sans-serif;font-size:12px;line-height:1;color:#fff;background-color:rgba(0,0,0,.4);padding:5px}.reveal .slide-number a{color:currentColor}.reveal .slide-number-delimiter{margin:0 3px}.reveal{position:relative;width:100%;height:100%;overflow:hidden;touch-action:pinch-zoom}.reveal.embedded{touch-action:pan-y}.reveal .slides{position:absolute;width:100%;height:100%;top:0;right:0;bottom:0;left:0;margin:auto;pointer-events:none;overflow:visible;z-index:1;text-align:center;perspective:600px;perspective-origin:50% 40%}.reveal .slides>section{perspective:600px}.reveal .slides>section,.reveal .slides>section>section{display:none;position:absolute;width:100%;pointer-events:auto;z-index:10;transform-style:flat;transition:transform-origin .8s cubic-bezier(.26,.86,.44,.985),transform .8s cubic-bezier(.26,.86,.44,.985),visibility .8s cubic-bezier(.26,.86,.44,.985),opacity .8s cubic-bezier(.26,.86,.44,.985)}.reveal[data-transition-speed=fast] .slides section{transition-duration:.4s}.reveal[data-transition-speed=slow] .slides section{transition-duration:1.2s}.reveal .slides section[data-transition-speed=fast]{transition-duration:.4s}.reveal .slides section[data-transition-speed=slow]{transition-duration:1.2s}.reveal .slides>section.stack{padding-top:0;padding-bottom:0;pointer-events:none;height:100%}.reveal .slides>section.present,.reveal .slides>section>section.present{display:block;z-index:11;opacity:1}.reveal .slides>section:empty,.reveal .slides>section>section:empty,.reveal .slides>section>section[data-background-interactive],.reveal .slides>section[data-background-interactive]{pointer-events:none}.reveal.center,.reveal.center .slides,.reveal.center .slides section{min-height:0!important}.reveal .slides>section:not(.present),.reveal .slides>section>section:not(.present){pointer-events:none}.reveal.overview .slides>section,.reveal.overview .slides>section>section{pointer-events:auto}.reveal .slides>section.future,.reveal .slides>section.future>section,.reveal .slides>section.past,.reveal .slides>section.past>section,.reveal .slides>section>section.future,.reveal .slides>section>section.past{opacity:0}.reveal .slides>section[data-transition=slide].past,.reveal .slides>section[data-transition~=slide-out].past,.reveal.slide .slides>section:not([data-transition]).past{transform:translate(-150%,0)}.reveal .slides>section[data-transition=slide].future,.reveal .slides>section[data-transition~=slide-in].future,.reveal.slide .slides>section:not([data-transition]).future{transform:translate(150%,0)}.reveal .slides>section>section[data-transition=slide].past,.reveal .slides>section>section[data-transition~=slide-out].past,.reveal.slide .slides>section>section:not([data-transition]).past{transform:translate(0,-150%)}.reveal .slides>section>section[data-transition=slide].future,.reveal .slides>section>section[data-transition~=slide-in].future,.reveal.slide .slides>section>section:not([data-transition]).future{transform:translate(0,150%)}.reveal .slides>section[data-transition=linear].past,.reveal .slides>section[data-transition~=linear-out].past,.reveal.linear .slides>section:not([data-transition]).past{transform:translate(-150%,0)}.reveal .slides>section[data-transition=linear].future,.reveal .slides>section[data-transition~=linear-in].future,.reveal.linear .slides>section:not([data-transition]).future{transform:translate(150%,0)}.reveal .slides>section>section[data-transition=linear].past,.reveal .slides>section>section[data-transition~=linear-out].past,.reveal.linear .slides>section>section:not([data-transition]).past{transform:translate(0,-150%)}.reveal .slides>section>section[data-transition=linear].future,.reveal .slides>section>section[data-transition~=linear-in].future,.reveal.linear .slides>section>section:not([data-transition]).future{transform:translate(0,150%)}.reveal .slides section[data-transition=default].stack,.reveal.default .slides section.stack{transform-style:preserve-3d}.reveal .slides>section[data-transition=default].past,.reveal .slides>section[data-transition~=default-out].past,.reveal.default .slides>section:not([data-transition]).past{transform:translate3d(-100%,0,0) rotateY(-90deg) translate3d(-100%,0,0)}.reveal .slides>section[data-transition=default].future,.reveal .slides>section[data-transition~=default-in].future,.reveal.default .slides>section:not([data-transition]).future{transform:translate3d(100%,0,0) rotateY(90deg) translate3d(100%,0,0)}.reveal .slides>section>section[data-transition=default].past,.reveal .slides>section>section[data-transition~=default-out].past,.reveal.default .slides>section>section:not([data-transition]).past{transform:translate3d(0,-300px,0) rotateX(70deg) translate3d(0,-300px,0)}.reveal .slides>section>section[data-transition=default].future,.reveal .slides>section>section[data-transition~=default-in].future,.reveal.default .slides>section>section:not([data-transition]).future{transform:translate3d(0,300px,0) rotateX(-70deg) translate3d(0,300px,0)}.reveal .slides section[data-transition=convex].stack,.reveal.convex .slides section.stack{transform-style:preserve-3d}.reveal .slides>section[data-transition=convex].past,.reveal .slides>section[data-transition~=convex-out].past,.reveal.convex .slides>section:not([data-transition]).past{transform:translate3d(-100%,0,0) rotateY(-90deg) translate3d(-100%,0,0)}.reveal .slides>section[data-transition=convex].future,.reveal .slides>section[data-transition~=convex-in].future,.reveal.convex .slides>section:not([data-transition]).future{transform:translate3d(100%,0,0) rotateY(90deg) translate3d(100%,0,0)}.reveal .slides>section>section[data-transition=convex].past,.reveal .slides>section>section[data-transition~=convex-out].past,.reveal.convex .slides>section>section:not([data-transition]).past{transform:translate3d(0,-300px,0) rotateX(70deg) translate3d(0,-300px,0)}.reveal .slides>section>section[data-transition=convex].future,.reveal .slides>section>section[data-transition~=convex-in].future,.reveal.convex .slides>section>section:not([data-transition]).future{transform:translate3d(0,300px,0) rotateX(-70deg) translate3d(0,300px,0)}.reveal .slides section[data-transition=concave].stack,.reveal.concave .slides section.stack{transform-style:preserve-3d}.reveal .slides>section[data-transition=concave].past,.reveal .slides>section[data-transition~=concave-out].past,.reveal.concave .slides>section:not([data-transition]).past{transform:translate3d(-100%,0,0) rotateY(90deg) translate3d(-100%,0,0)}.reveal .slides>section[data-transition=concave].future,.reveal .slides>section[data-transition~=concave-in].future,.reveal.concave .slides>section:not([data-transition]).future{transform:translate3d(100%,0,0) rotateY(-90deg) translate3d(100%,0,0)}.reveal .slides>section>section[data-transition=concave].past,.reveal .slides>section>section[data-transition~=concave-out].past,.reveal.concave .slides>section>section:not([data-transition]).past{transform:translate3d(0,-80%,0) rotateX(-70deg) translate3d(0,-80%,0)}.reveal .slides>section>section[data-transition=concave].future,.reveal .slides>section>section[data-transition~=concave-in].future,.reveal.concave .slides>section>section:not([data-transition]).future{transform:translate3d(0,80%,0) rotateX(70deg) translate3d(0,80%,0)}.reveal .slides section[data-transition=zoom],.reveal.zoom .slides section:not([data-transition]){transition-timing-function:ease}.reveal .slides>section[data-transition=zoom].past,.reveal .slides>section[data-transition~=zoom-out].past,.reveal.zoom .slides>section:not([data-transition]).past{visibility:hidden;transform:scale(16)}.reveal .slides>section[data-transition=zoom].future,.reveal .slides>section[data-transition~=zoom-in].future,.reveal.zoom .slides>section:not([data-transition]).future{visibility:hidden;transform:scale(.2)}.reveal .slides>section>section[data-transition=zoom].past,.reveal .slides>section>section[data-transition~=zoom-out].past,.reveal.zoom .slides>section>section:not([data-transition]).past{transform:scale(16)}.reveal .slides>section>section[data-transition=zoom].future,.reveal .slides>section>section[data-transition~=zoom-in].future,.reveal.zoom .slides>section>section:not([data-transition]).future{transform:scale(.2)}.reveal.cube .slides{perspective:1300px}.reveal.cube .slides section{padding:30px;min-height:700px;backface-visibility:hidden;box-sizing:border-box;transform-style:preserve-3d}.reveal.center.cube .slides section{min-height:0}.reveal.cube .slides section:not(.stack):before{content:"";position:absolute;display:block;width:100%;height:100%;left:0;top:0;background:rgba(0,0,0,.1);border-radius:4px;transform:translateZ(-20px)}.reveal.cube .slides section:not(.stack):after{content:"";position:absolute;display:block;width:90%;height:30px;left:5%;bottom:0;background:0 0;z-index:1;border-radius:4px;box-shadow:0 95px 25px rgba(0,0,0,.2);transform:translateZ(-90px) rotateX(65deg)}.reveal.cube .slides>section.stack{padding:0;background:0 0}.reveal.cube .slides>section.past{transform-origin:100% 0;transform:translate3d(-100%,0,0) rotateY(-90deg)}.reveal.cube .slides>section.future{transform-origin:0 0;transform:translate3d(100%,0,0) rotateY(90deg)}.reveal.cube .slides>section>section.past{transform-origin:0 100%;transform:translate3d(0,-100%,0) rotateX(90deg)}.reveal.cube .slides>section>section.future{transform-origin:0 0;transform:translate3d(0,100%,0) rotateX(-90deg)}.reveal.page .slides{perspective-origin:0 50%;perspective:3000px}.reveal.page .slides section{padding:30px;min-height:700px;box-sizing:border-box;transform-style:preserve-3d}.reveal.page .slides section.past{z-index:12}.reveal.page .slides section:not(.stack):before{content:"";position:absolute;display:block;width:100%;height:100%;left:0;top:0;background:rgba(0,0,0,.1);transform:translateZ(-20px)}.reveal.page .slides section:not(.stack):after{content:"";position:absolute;display:block;width:90%;height:30px;left:5%;bottom:0;background:0 0;z-index:1;border-radius:4px;box-shadow:0 95px 25px rgba(0,0,0,.2);-webkit-transform:translateZ(-90px) rotateX(65deg)}.reveal.page .slides>section.stack{padding:0;background:0 0}.reveal.page .slides>section.past{transform-origin:0 0;transform:translate3d(-40%,0,0) rotateY(-80deg)}.reveal.page .slides>section.future{transform-origin:100% 0;transform:translate3d(0,0,0)}.reveal.page .slides>section>section.past{transform-origin:0 0;transform:translate3d(0,-40%,0) rotateX(80deg)}.reveal.page .slides>section>section.future{transform-origin:0 100%;transform:translate3d(0,0,0)}.reveal .slides section[data-transition=fade],.reveal.fade .slides section:not([data-transition]),.reveal.fade .slides>section>section:not([data-transition]){transform:none;transition:opacity .5s}.reveal.fade.overview .slides section,.reveal.fade.overview .slides>section>section{transition:none}.reveal .slides section[data-transition=none],.reveal.none .slides section:not([data-transition]){transform:none;transition:none}.reveal .pause-overlay{position:absolute;top:0;left:0;width:100%;height:100%;background:#000;visibility:hidden;opacity:0;z-index:100;transition:all 1s ease}.reveal .pause-overlay .resume-button{position:absolute;bottom:20px;right:20px;color:#ccc;border-radius:2px;padding:6px 14px;border:2px solid #ccc;font-size:16px;background:0 0;cursor:pointer}.reveal .pause-overlay .resume-button:hover{color:#fff;border-color:#fff}.reveal.paused .pause-overlay{visibility:visible;opacity:1}.reveal .no-transition,.reveal .no-transition *,.reveal .slides.disable-slide-transitions section{transition:none!important}.reveal .slides.disable-slide-transitions section{transform:none!important}.reveal .backgrounds{position:absolute;width:100%;height:100%;top:0;left:0;perspective:600px}.reveal .slide-background{display:none;position:absolute;width:100%;height:100%;opacity:0;visibility:hidden;overflow:hidden;background-color:rgba(0,0,0,0);transition:all .8s cubic-bezier(.26,.86,.44,.985)}.reveal .slide-background-content{position:absolute;width:100%;height:100%;background-position:50% 50%;background-repeat:no-repeat;background-size:cover}.reveal .slide-background.stack{display:block}.reveal .slide-background.present{opacity:1;visibility:visible;z-index:2}.print-pdf .reveal .slide-background{opacity:1!important;visibility:visible!important}.reveal .slide-background video{position:absolute;width:100%;height:100%;max-width:none;max-height:none;top:0;left:0;object-fit:cover}.reveal .slide-background[data-background-size=contain] video{object-fit:contain}.reveal>.backgrounds .slide-background[data-background-transition=none],.reveal[data-background-transition=none]>.backgrounds .slide-background:not([data-background-transition]){transition:none}.reveal>.backgrounds .slide-background[data-background-transition=slide],.reveal[data-background-transition=slide]>.backgrounds .slide-background:not([data-background-transition]){opacity:1}.reveal>.backgrounds .slide-background.past[data-background-transition=slide],.reveal[data-background-transition=slide]>.backgrounds .slide-background.past:not([data-background-transition]){transform:translate(-100%,0)}.reveal>.backgrounds .slide-background.future[data-background-transition=slide],.reveal[data-background-transition=slide]>.backgrounds .slide-background.future:not([data-background-transition]){transform:translate(100%,0)}.reveal>.backgrounds .slide-background>.slide-background.past[data-background-transition=slide],.reveal[data-background-transition=slide]>.backgrounds .slide-background>.slide-background.past:not([data-background-transition]){transform:translate(0,-100%)}.reveal>.backgrounds .slide-background>.slide-background.future[data-background-transition=slide],.reveal[data-background-transition=slide]>.backgrounds .slide-background>.slide-background.future:not([data-background-transition]){transform:translate(0,100%)}.reveal>.backgrounds .slide-background.past[data-background-transition=convex],.reveal[data-background-transition=convex]>.backgrounds .slide-background.past:not([data-background-transition]){opacity:0;transform:translate3d(-100%,0,0) rotateY(-90deg) translate3d(-100%,0,0)}.reveal>.backgrounds .slide-background.future[data-background-transition=convex],.reveal[data-background-transition=convex]>.backgrounds .slide-background.future:not([data-background-transition]){opacity:0;transform:translate3d(100%,0,0) rotateY(90deg) translate3d(100%,0,0)}.reveal>.backgrounds .slide-background>.slide-background.past[data-background-transition=convex],.reveal[data-background-transition=convex]>.backgrounds .slide-background>.slide-background.past:not([data-background-transition]){opacity:0;transform:translate3d(0,-100%,0) rotateX(90deg) translate3d(0,-100%,0)}.reveal>.backgrounds .slide-background>.slide-background.future[data-background-transition=convex],.reveal[data-background-transition=convex]>.backgrounds .slide-background>.slide-background.future:not([data-background-transition]){opacity:0;transform:translate3d(0,100%,0) rotateX(-90deg) translate3d(0,100%,0)}.reveal>.backgrounds .slide-background.past[data-background-transition=concave],.reveal[data-background-transition=concave]>.backgrounds .slide-background.past:not([data-background-transition]){opacity:0;transform:translate3d(-100%,0,0) rotateY(90deg) translate3d(-100%,0,0)}.reveal>.backgrounds .slide-background.future[data-background-transition=concave],.reveal[data-background-transition=concave]>.backgrounds .slide-background.future:not([data-background-transition]){opacity:0;transform:translate3d(100%,0,0) rotateY(-90deg) translate3d(100%,0,0)}.reveal>.backgrounds .slide-background>.slide-background.past[data-background-transition=concave],.reveal[data-background-transition=concave]>.backgrounds .slide-background>.slide-background.past:not([data-background-transition]){opacity:0;transform:translate3d(0,-100%,0) rotateX(-90deg) translate3d(0,-100%,0)}.reveal>.backgrounds .slide-background>.slide-background.future[data-background-transition=concave],.reveal[data-background-transition=concave]>.backgrounds .slide-background>.slide-background.future:not([data-background-transition]){opacity:0;transform:translate3d(0,100%,0) rotateX(90deg) translate3d(0,100%,0)}.reveal>.backgrounds .slide-background[data-background-transition=zoom],.reveal[data-background-transition=zoom]>.backgrounds .slide-background:not([data-background-transition]){transition-timing-function:ease}.reveal>.backgrounds .slide-background.past[data-background-transition=zoom],.reveal[data-background-transition=zoom]>.backgrounds .slide-background.past:not([data-background-transition]){opacity:0;visibility:hidden;transform:scale(16)}.reveal>.backgrounds .slide-background.future[data-background-transition=zoom],.reveal[data-background-transition=zoom]>.backgrounds .slide-background.future:not([data-background-transition]){opacity:0;visibility:hidden;transform:scale(.2)}.reveal>.backgrounds .slide-background>.slide-background.past[data-background-transition=zoom],.reveal[data-background-transition=zoom]>.backgrounds .slide-background>.slide-background.past:not([data-background-transition]){opacity:0;visibility:hidden;transform:scale(16)}.reveal>.backgrounds .slide-background>.slide-background.future[data-background-transition=zoom],.reveal[data-background-transition=zoom]>.backgrounds .slide-background>.slide-background.future:not([data-background-transition]){opacity:0;visibility:hidden;transform:scale(.2)}.reveal[data-transition-speed=fast]>.backgrounds .slide-background{transition-duration:.4s}.reveal[data-transition-speed=slow]>.backgrounds .slide-background{transition-duration:1.2s}.reveal [data-auto-animate-target^=unmatched]{will-change:opacity}.reveal section[data-auto-animate]:not(.stack):not([data-auto-animate=running]) [data-auto-animate-target^=unmatched]{opacity:0}.reveal.overview{perspective-origin:50% 50%;perspective:700px}.reveal.overview .slides{-moz-transform-style:preserve-3d}.reveal.overview .slides section{height:100%;top:0!important;opacity:1!important;overflow:hidden;visibility:visible!important;cursor:pointer;box-sizing:border-box}.reveal.overview .slides section.present,.reveal.overview .slides section:hover{outline:10px solid rgba(150,150,150,.4);outline-offset:10px}.reveal.overview .slides section .fragment{opacity:1;transition:none}.reveal.overview .slides section:after,.reveal.overview .slides section:before{display:none!important}.reveal.overview .slides>section.stack{padding:0;top:0!important;background:0 0;outline:0;overflow:visible}.reveal.overview .backgrounds{perspective:inherit;-moz-transform-style:preserve-3d}.reveal.overview .backgrounds .slide-background{opacity:1;visibility:visible;outline:10px solid rgba(150,150,150,.1);outline-offset:10px}.reveal.overview .backgrounds .slide-background.stack{overflow:visible}.reveal.overview .slides section,.reveal.overview-deactivating .slides section{transition:none}.reveal.overview .backgrounds .slide-background,.reveal.overview-deactivating .backgrounds .slide-background{transition:none}.reveal.rtl .slides,.reveal.rtl .slides h1,.reveal.rtl .slides h2,.reveal.rtl .slides h3,.reveal.rtl .slides h4,.reveal.rtl .slides h5,.reveal.rtl .slides h6{direction:rtl;font-family:sans-serif}.reveal.rtl code,.reveal.rtl pre{direction:ltr}.reveal.rtl ol,.reveal.rtl ul{text-align:right}.reveal.rtl .progress span{transform-origin:100% 0}.reveal.has-parallax-background .backgrounds{transition:all .8s ease}.reveal.has-parallax-background[data-transition-speed=fast] .backgrounds{transition-duration:.4s}.reveal.has-parallax-background[data-transition-speed=slow] .backgrounds{transition-duration:1.2s}.reveal>.overlay{position:absolute;top:0;left:0;width:100%;height:100%;z-index:1000;background:rgba(0,0,0,.9);transition:all .3s ease}.reveal>.overlay .spinner{position:absolute;display:block;top:50%;left:50%;width:32px;height:32px;margin:-16px 0 0 -16px;z-index:10;background-image:url(${___CSS_LOADER_URL_REPLACEMENT_0___});visibility:visible;opacity:.6;transition:all .3s ease}.reveal>.overlay header{position:absolute;left:0;top:0;width:100%;padding:5px;z-index:2;box-sizing:border-box}.reveal>.overlay header a{display:inline-block;width:40px;height:40px;line-height:36px;padding:0 10px;float:right;opacity:.6;box-sizing:border-box}.reveal>.overlay header a:hover{opacity:1}.reveal>.overlay header a .icon{display:inline-block;width:20px;height:20px;background-position:50% 50%;background-size:100%;background-repeat:no-repeat}.reveal>.overlay header a.close .icon{background-image:url(${___CSS_LOADER_URL_REPLACEMENT_1___})}.reveal>.overlay header a.external .icon{background-image:url(${___CSS_LOADER_URL_REPLACEMENT_2___})}.reveal>.overlay .viewport{position:absolute;display:flex;top:50px;right:0;bottom:0;left:0}.reveal>.overlay.overlay-preview .viewport iframe{width:100%;height:100%;max-width:100%;max-height:100%;border:0;opacity:0;visibility:hidden;transition:all .3s ease}.reveal>.overlay.overlay-preview.loaded .viewport iframe{opacity:1;visibility:visible}.reveal>.overlay.overlay-preview.loaded .viewport-inner{position:absolute;z-index:-1;left:0;top:45%;width:100%;text-align:center;letter-spacing:normal}.reveal>.overlay.overlay-preview .x-frame-error{opacity:0;transition:opacity .3s ease .3s}.reveal>.overlay.overlay-preview.loaded .x-frame-error{opacity:1}.reveal>.overlay.overlay-preview.loaded .spinner{opacity:0;visibility:hidden;transform:scale(.2)}.reveal>.overlay.overlay-help .viewport{overflow:auto;color:#fff}.reveal>.overlay.overlay-help .viewport .viewport-inner{width:600px;margin:auto;padding:20px 20px 80px 20px;text-align:center;letter-spacing:normal}.reveal>.overlay.overlay-help .viewport .viewport-inner .title{font-size:20px}.reveal>.overlay.overlay-help .viewport .viewport-inner table{border:1px solid #fff;border-collapse:collapse;font-size:16px}.reveal>.overlay.overlay-help .viewport .viewport-inner table td,.reveal>.overlay.overlay-help .viewport .viewport-inner table th{width:200px;padding:14px;border:1px solid #fff;vertical-align:middle}.reveal>.overlay.overlay-help .viewport .viewport-inner table th{padding-top:20px;padding-bottom:20px}.reveal .playback{position:absolute;left:15px;bottom:20px;z-index:30;cursor:pointer;transition:all .4s ease;-webkit-tap-highlight-color:transparent}.reveal.overview .playback{opacity:0;visibility:hidden}.reveal .hljs{min-height:100%}.reveal .hljs table{margin:initial}.reveal .hljs-ln-code,.reveal .hljs-ln-numbers{padding:0;border:0}.reveal .hljs-ln-numbers{opacity:.6;padding-right:.75em;text-align:right;vertical-align:top}.reveal .hljs.has-highlights tr:not(.highlight-line){opacity:.4}.reveal .hljs:not(:first-child).fragment{position:absolute;top:0;left:0;width:100%;box-sizing:border-box}.reveal pre[data-auto-animate-target]{overflow:hidden}.reveal pre[data-auto-animate-target] code{height:100%}.reveal .roll{display:inline-block;line-height:1.2;overflow:hidden;vertical-align:top;perspective:400px;perspective-origin:50% 50%}.reveal .roll:hover{background:0 0;text-shadow:none}.reveal .roll span{display:block;position:relative;padding:0 2px;pointer-events:none;transition:all .4s ease;transform-origin:50% 0;transform-style:preserve-3d;backface-visibility:hidden}.reveal .roll:hover span{background:rgba(0,0,0,.5);transform:translate3d(0,0,-45px) rotateX(90deg)}.reveal .roll span:after{content:attr(data-title);display:block;position:absolute;left:0;top:0;padding:0 2px;backface-visibility:hidden;transform-origin:50% 0;transform:translate3d(0,110%,0) rotateX(-90deg)}.reveal aside.notes{display:none}.reveal .speaker-notes{display:none;position:absolute;width:33.3333333333%;height:100%;top:0;left:100%;padding:14px 18px 14px 18px;z-index:1;font-size:18px;line-height:1.4;border:1px solid rgba(0,0,0,.05);color:#222;background-color:#f5f5f5;overflow:auto;box-sizing:border-box;text-align:left;font-family:Helvetica,sans-serif;-webkit-overflow-scrolling:touch}.reveal .speaker-notes .notes-placeholder{color:#ccc;font-style:italic}.reveal .speaker-notes:focus{outline:0}.reveal .speaker-notes:before{content:"Speaker notes";display:block;margin-bottom:10px;opacity:.5}.reveal.show-notes{max-width:75%;overflow:visible}.reveal.show-notes .speaker-notes{display:block}@media screen and (min-width:1600px){.reveal .speaker-notes{font-size:20px}}@media screen and (max-width:1024px){.reveal.show-notes{border-left:0;max-width:none;max-height:70%;max-height:70vh;overflow:visible}.reveal.show-notes .speaker-notes{top:100%;left:0;width:100%;height:30vh;border:0}}@media screen and (max-width:600px){.reveal.show-notes{max-height:60%;max-height:60vh}.reveal.show-notes .speaker-notes{top:100%;height:40vh}.reveal .speaker-notes{font-size:14px}}.reveal .jump-to-slide{position:absolute;top:15px;left:15px;z-index:30;font-size:32px;-webkit-tap-highlight-color:transparent}.reveal .jump-to-slide-input{background:0 0;padding:8px;font-size:inherit;color:currentColor;border:0}.reveal .jump-to-slide-input::placeholder{color:currentColor;opacity:.5}.reveal.has-dark-background .jump-to-slide-input{color:#fff}.reveal.has-light-background .jump-to-slide-input{color:#222}.reveal .jump-to-slide-input:focus{outline:0}.zoomed .reveal *,.zoomed .reveal :after,.zoomed .reveal :before{backface-visibility:visible!important}.zoomed .reveal .controls,.zoomed .reveal .progress{opacity:0}.zoomed .reveal .roll span{background:0 0}.zoomed .reveal .roll span:after{visibility:hidden}html.print-pdf *{-webkit-print-color-adjust:exact}html.print-pdf{width:100%;height:100%;overflow:visible}html.print-pdf body{margin:0 auto!important;border:0;padding:0;float:none!important;overflow:visible}html.print-pdf .nestedarrow,html.print-pdf .reveal .controls,html.print-pdf .reveal .playback,html.print-pdf .reveal .progress,html.print-pdf .reveal.overview,html.print-pdf .state-background{display:none!important}html.print-pdf .reveal pre code{overflow:hidden!important;font-family:Courier,"Courier New",monospace!important}html.print-pdf .reveal{width:auto!important;height:auto!important;overflow:hidden!important}html.print-pdf .reveal .slides{position:static;width:100%!important;height:auto!important;zoom:1!important;pointer-events:initial;left:auto;top:auto;margin:0!important;padding:0!important;overflow:visible;display:block;perspective:none;perspective-origin:50% 50%}html.print-pdf .reveal .slides .pdf-page{position:relative;overflow:hidden;z-index:1;page-break-after:always}html.print-pdf .reveal .slides section{visibility:visible!important;display:block!important;position:absolute!important;margin:0!important;padding:0!important;box-sizing:border-box!important;min-height:1px;opacity:1!important;transform-style:flat!important;transform:none!important}html.print-pdf .reveal section.stack{position:relative!important;margin:0!important;padding:0!important;page-break-after:avoid!important;height:auto!important;min-height:auto!important}html.print-pdf .reveal img{box-shadow:none}html.print-pdf .reveal .backgrounds{display:none}html.print-pdf .reveal .slide-background{display:block!important;position:absolute;top:0;left:0;width:100%;height:100%;z-index:auto!important}html.print-pdf .reveal.show-notes{max-width:none;max-height:none}html.print-pdf .reveal .speaker-notes-pdf{display:block;width:100%;height:auto;max-height:none;top:auto;right:auto;bottom:auto;left:auto;z-index:100}html.print-pdf .reveal .speaker-notes-pdf[data-layout=separate-page]{position:relative;color:inherit;background-color:transparent;padding:20px;page-break-after:always;border:0}html.print-pdf .reveal .slide-number-pdf{display:block;position:absolute;font-size:14px}html.print-pdf .aria-status{display:none}@media print{html:not(.print-pdf){overflow:visible;width:auto;height:auto}html:not(.print-pdf) body{margin:0;padding:0;overflow:visible}html:not(.print-pdf) .reveal{background:#fff;font-size:20pt}html:not(.print-pdf) .reveal .backgrounds,html:not(.print-pdf) .reveal .controls,html:not(.print-pdf) .reveal .progress,html:not(.print-pdf) .reveal .slide-number,html:not(.print-pdf) .reveal .state-background{display:none!important}html:not(.print-pdf) .reveal li,html:not(.print-pdf) .reveal p,html:not(.print-pdf) .reveal td{font-size:20pt!important;color:#000}html:not(.print-pdf) .reveal h1,html:not(.print-pdf) .reveal h2,html:not(.print-pdf) .reveal h3,html:not(.print-pdf) .reveal h4,html:not(.print-pdf) .reveal h5,html:not(.print-pdf) .reveal h6{color:#000!important;height:auto;line-height:normal;text-align:left;letter-spacing:normal}html:not(.print-pdf) .reveal h1{font-size:28pt!important}html:not(.print-pdf) .reveal h2{font-size:24pt!important}html:not(.print-pdf) .reveal h3{font-size:22pt!important}html:not(.print-pdf) .reveal h4{font-size:22pt!important;font-variant:small-caps}html:not(.print-pdf) .reveal h5{font-size:21pt!important}html:not(.print-pdf) .reveal h6{font-size:20pt!important;font-style:italic}html:not(.print-pdf) .reveal a:link,html:not(.print-pdf) .reveal a:visited{color:#000!important;font-weight:700;text-decoration:underline}html:not(.print-pdf) .reveal div,html:not(.print-pdf) .reveal ol,html:not(.print-pdf) .reveal p,html:not(.print-pdf) .reveal ul{visibility:visible;position:static;width:auto;height:auto;display:block;overflow:visible;margin:0;text-align:left!important}html:not(.print-pdf) .reveal pre,html:not(.print-pdf) .reveal table{margin-left:0;margin-right:0}html:not(.print-pdf) .reveal pre code{padding:20px}html:not(.print-pdf) .reveal blockquote{margin:20px 0}html:not(.print-pdf) .reveal .slides{position:static!important;width:auto!important;height:auto!important;left:0!important;top:0!important;margin-left:0!important;margin-top:0!important;padding:0!important;zoom:1!important;transform:none!important;overflow:visible!important;display:block!important;text-align:left!important;perspective:none;perspective-origin:50% 50%}html:not(.print-pdf) .reveal .slides section{visibility:visible!important;position:static!important;width:auto!important;height:auto!important;display:block!important;overflow:visible!important;left:0!important;top:0!important;margin-left:0!important;margin-top:0!important;padding:60px 20px!important;z-index:auto!important;opacity:1!important;page-break-after:always!important;transform-style:flat!important;transform:none!important;transition:none!important}html:not(.print-pdf) .reveal .slides section.stack{padding:0!important}html:not(.print-pdf) .reveal .slides section:last-of-type{page-break-after:avoid!important}html:not(.print-pdf) .reveal .slides section .fragment{opacity:1!important;visibility:visible!important;transform:none!important}html:not(.print-pdf) .reveal .r-fit-text{white-space:normal!important}html:not(.print-pdf) .reveal section img{display:block;margin:15px 0;background:#fff;border:1px solid #666;box-shadow:none}html:not(.print-pdf) .reveal section small{font-size:.8em}html:not(.print-pdf) .reveal .hljs{max-height:100%;white-space:pre-wrap;word-wrap:break-word;word-break:break-word;font-size:15pt}html:not(.print-pdf) .reveal .hljs .hljs-ln-numbers{white-space:nowrap}html:not(.print-pdf) .reveal .hljs td{font-size:inherit!important;color:inherit!important}}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 812:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(738);
/* harmony import */ var _css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(705);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_loader_dist_cjs_js_fonts_source_sans_pro_source_sans_pro_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(783);
// Imports



var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_css_loader_dist_cjs_js_fonts_source_sans_pro_source_sans_pro_css__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/**
 * Black theme for reveal.js. This is the opposite of the 'white' theme.
 *
 * By Hakim El Hattab, http://hakim.se
 */
section.has-light-background, section.has-light-background h1, section.has-light-background h2, section.has-light-background h3, section.has-light-background h4, section.has-light-background h5, section.has-light-background h6 {
  color: #222;
}

/*********************************************
 * GLOBAL STYLES
 *********************************************/
:root {
  --r-background-color: #191919;
  --r-main-font: Source Sans Pro, Helvetica, sans-serif;
  --r-main-font-size: 42px;
  --r-main-color: #fff;
  --r-block-margin: 20px;
  --r-heading-margin: 0 0 20px 0;
  --r-heading-font: Source Sans Pro, Helvetica, sans-serif;
  --r-heading-color: #fff;
  --r-heading-line-height: 1.2;
  --r-heading-letter-spacing: normal;
  --r-heading-text-transform: uppercase;
  --r-heading-text-shadow: none;
  --r-heading-font-weight: 600;
  --r-heading1-text-shadow: none;
  --r-heading1-size: 2.5em;
  --r-heading2-size: 1.6em;
  --r-heading3-size: 1.3em;
  --r-heading4-size: 1em;
  --r-code-font: monospace;
  --r-link-color: #42affa;
  --r-link-color-dark: #068de9;
  --r-link-color-hover: #8dcffc;
  --r-selection-background-color: rgba(66, 175, 250, 0.75);
  --r-selection-color: #fff;
}

.reveal-viewport {
  background: #191919;
  background-color: var(--r-background-color);
}

.reveal {
  font-family: var(--r-main-font);
  font-size: var(--r-main-font-size);
  font-weight: normal;
  color: var(--r-main-color);
}

.reveal ::selection {
  color: var(--r-selection-color);
  background: var(--r-selection-background-color);
  text-shadow: none;
}

.reveal ::-moz-selection {
  color: var(--r-selection-color);
  background: var(--r-selection-background-color);
  text-shadow: none;
}

.reveal .slides section,
.reveal .slides section > section {
  line-height: 1.3;
  font-weight: inherit;
}

/*********************************************
 * HEADERS
 *********************************************/
.reveal h1,
.reveal h2,
.reveal h3,
.reveal h4,
.reveal h5,
.reveal h6 {
  margin: var(--r-heading-margin);
  color: var(--r-heading-color);
  font-family: var(--r-heading-font);
  font-weight: var(--r-heading-font-weight);
  line-height: var(--r-heading-line-height);
  letter-spacing: var(--r-heading-letter-spacing);
  text-transform: var(--r-heading-text-transform);
  text-shadow: var(--r-heading-text-shadow);
  word-wrap: break-word;
}

.reveal h1 {
  font-size: var(--r-heading1-size);
}

.reveal h2 {
  font-size: var(--r-heading2-size);
}

.reveal h3 {
  font-size: var(--r-heading3-size);
}

.reveal h4 {
  font-size: var(--r-heading4-size);
}

.reveal h1 {
  text-shadow: var(--r-heading1-text-shadow);
}

/*********************************************
 * OTHER
 *********************************************/
.reveal p {
  margin: var(--r-block-margin) 0;
  line-height: 1.3;
}

/* Remove trailing margins after titles */
.reveal h1:last-child,
.reveal h2:last-child,
.reveal h3:last-child,
.reveal h4:last-child,
.reveal h5:last-child,
.reveal h6:last-child {
  margin-bottom: 0;
}

/* Ensure certain elements are never larger than the slide itself */
.reveal img,
.reveal video,
.reveal iframe {
  max-width: 95%;
  max-height: 95%;
}

.reveal strong,
.reveal b {
  font-weight: bold;
}

.reveal em {
  font-style: italic;
}

.reveal ol,
.reveal dl,
.reveal ul {
  display: inline-block;
  text-align: left;
  margin: 0 0 0 1em;
}

.reveal ol {
  list-style-type: decimal;
}

.reveal ul {
  list-style-type: disc;
}

.reveal ul ul {
  list-style-type: square;
}

.reveal ul ul ul {
  list-style-type: circle;
}

.reveal ul ul,
.reveal ul ol,
.reveal ol ol,
.reveal ol ul {
  display: block;
  margin-left: 40px;
}

.reveal dt {
  font-weight: bold;
}

.reveal dd {
  margin-left: 40px;
}

.reveal blockquote {
  display: block;
  position: relative;
  width: 70%;
  margin: var(--r-block-margin) auto;
  padding: 5px;
  font-style: italic;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.2);
}

.reveal blockquote p:first-child,
.reveal blockquote p:last-child {
  display: inline-block;
}

.reveal q {
  font-style: italic;
}

.reveal pre {
  display: block;
  position: relative;
  width: 90%;
  margin: var(--r-block-margin) auto;
  text-align: left;
  font-size: 0.55em;
  font-family: var(--r-code-font);
  line-height: 1.2em;
  word-wrap: break-word;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.15);
}

.reveal code {
  font-family: var(--r-code-font);
  text-transform: none;
  tab-size: 2;
}

.reveal pre code {
  display: block;
  padding: 5px;
  overflow: auto;
  max-height: 400px;
  word-wrap: normal;
}

.reveal .code-wrapper {
  white-space: normal;
}

.reveal .code-wrapper code {
  white-space: pre;
}

.reveal table {
  margin: auto;
  border-collapse: collapse;
  border-spacing: 0;
}

.reveal table th {
  font-weight: bold;
}

.reveal table th,
.reveal table td {
  text-align: left;
  padding: 0.2em 0.5em 0.2em 0.5em;
  border-bottom: 1px solid;
}

.reveal table th[align=center],
.reveal table td[align=center] {
  text-align: center;
}

.reveal table th[align=right],
.reveal table td[align=right] {
  text-align: right;
}

.reveal table tbody tr:last-child th,
.reveal table tbody tr:last-child td {
  border-bottom: none;
}

.reveal sup {
  vertical-align: super;
  font-size: smaller;
}

.reveal sub {
  vertical-align: sub;
  font-size: smaller;
}

.reveal small {
  display: inline-block;
  font-size: 0.6em;
  line-height: 1.2em;
  vertical-align: top;
}

.reveal small * {
  vertical-align: top;
}

.reveal img {
  margin: var(--r-block-margin) 0;
}

/*********************************************
 * LINKS
 *********************************************/
.reveal a {
  color: var(--r-link-color);
  text-decoration: none;
  transition: color 0.15s ease;
}

.reveal a:hover {
  color: var(--r-link-color-hover);
  text-shadow: none;
  border: none;
}

.reveal .roll span:after {
  color: #fff;
  background: var(--r-link-color-dark);
}

/*********************************************
 * Frame helper
 *********************************************/
.reveal .r-frame {
  border: 4px solid var(--r-main-color);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
}

.reveal a .r-frame {
  transition: all 0.15s linear;
}

.reveal a:hover .r-frame {
  border-color: var(--r-link-color);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.55);
}

/*********************************************
 * NAVIGATION CONTROLS
 *********************************************/
.reveal .controls {
  color: var(--r-link-color);
}

/*********************************************
 * PROGRESS BAR
 *********************************************/
.reveal .progress {
  background: rgba(0, 0, 0, 0.2);
  color: var(--r-link-color);
}

/*********************************************
 * PRINT BACKGROUND
 *********************************************/
@media print {
  .backgrounds {
    background-color: var(--r-background-color);
  }
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 783:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(738);
/* harmony import */ var _css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(705);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(742);
/* harmony import */ var _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(654), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(155), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(422), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(300), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(874), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(37), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(463), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(836), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(794), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(56), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(524), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(877), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___, { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___, { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_9___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___, { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_10___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);
var ___CSS_LOADER_URL_REPLACEMENT_11___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_8___);
var ___CSS_LOADER_URL_REPLACEMENT_12___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_9___);
var ___CSS_LOADER_URL_REPLACEMENT_13___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_9___, { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_14___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_10___);
var ___CSS_LOADER_URL_REPLACEMENT_15___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_11___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: 'Source Sans Pro';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format('embedded-opentype'),
         url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format('woff'),
         url(${___CSS_LOADER_URL_REPLACEMENT_3___}) format('truetype');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Source Sans Pro';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_4___});
    src: url(${___CSS_LOADER_URL_REPLACEMENT_5___}) format('embedded-opentype'),
         url(${___CSS_LOADER_URL_REPLACEMENT_6___}) format('woff'),
         url(${___CSS_LOADER_URL_REPLACEMENT_7___}) format('truetype');
    font-weight: normal;
    font-style: italic;
}

@font-face {
    font-family: 'Source Sans Pro';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_8___});
    src: url(${___CSS_LOADER_URL_REPLACEMENT_9___}) format('embedded-opentype'),
         url(${___CSS_LOADER_URL_REPLACEMENT_10___}) format('woff'),
         url(${___CSS_LOADER_URL_REPLACEMENT_11___}) format('truetype');
    font-weight: 600;
    font-style: normal;
}

@font-face {
    font-family: 'Source Sans Pro';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_12___});
    src: url(${___CSS_LOADER_URL_REPLACEMENT_13___}) format('embedded-opentype'),
         url(${___CSS_LOADER_URL_REPLACEMENT_14___}) format('woff'),
         url(${___CSS_LOADER_URL_REPLACEMENT_15___}) format('truetype');
    font-weight: 600;
    font-style: italic;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 379:
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ 569:
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ 216:
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ 565:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ 795:
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ 589:
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = "data:image/gif;base64,R0lGODlhIAAgAPMAAJmZmf%2F%2F%2F6%2Bvr8nJybW1tcDAwOjo6Nvb26ioqKOjo7Ozs%2FLy8vz8%2FAAAAAAAAAAAACH%2FC05FVFNDQVBFMi4wAwEAAAAh%2FhpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh%2BQQJCgAAACwAAAAAIAAgAAAE5xDISWlhperN52JLhSSdRgwVo1ICQZRUsiwHpTJT4iowNS8vyW2icCF6k8HMMBkCEDskxTBDAZwuAkkqIfxIQyhBQBFvAQSDITM5VDW6XNE4KagNh6Bgwe60smQUB3d4Rz1ZBApnFASDd0hihh12BkE9kjAJVlycXIg7CQIFA6SlnJ87paqbSKiKoqusnbMdmDC2tXQlkUhziYtyWTxIfy6BE8WJt5YJvpJivxNaGmLHT0VnOgSYf0dZXS7APdpB309RnHOG5gDqXGLDaC457D1zZ%2FV%2FnmOM82XiHRLYKhKP1oZmADdEAAAh%2BQQJCgAAACwAAAAAIAAgAAAE6hDISWlZpOrNp1lGNRSdRpDUolIGw5RUYhhHukqFu8DsrEyqnWThGvAmhVlteBvojpTDDBUEIFwMFBRAmBkSgOrBFZogCASwBDEY%2FCZSg7GSE0gSCjQBMVG023xWBhklAnoEdhQEfyNqMIcKjhRsjEdnezB%2BA4k8gTwJhFuiW4dokXiloUepBAp5qaKpp6%2BHo7aWW54wl7obvEe0kRuoplCGepwSx2jJvqHEmGt6whJpGpfJCHmOoNHKaHx61WiSR92E4lbFoq%2BB6QDtuetcaBPnW6%2BO7wDHpIiK9SaVK5GgV543tzjgGcghAgAh%2BQQJCgAAACwAAAAAIAAgAAAE7hDISSkxpOrN5zFHNWRdhSiVoVLHspRUMoyUakyEe8PTPCATW9A14E0UvuAKMNAZKYUZCiBMuBakSQKG8G2FzUWox2AUtAQFcBKlVQoLgQReZhQlCIJesQXI5B0CBnUMOxMCenoCfTCEWBsJColTMANldx15BGs8B5wlCZ9Po6OJkwmRpnqkqnuSrayqfKmqpLajoiW5HJq7FL1Gr2mMMcKUMIiJgIemy7xZtJsTmsM4xHiKv5KMCXqfyUCJEonXPN2rAOIAmsfB3uPoAK%2B%2BG%2Bw48edZPK%2BM6hLJpQg484enXIdQFSS1u6UhksENEQAAIfkECQoAAAAsAAAAACAAIAAABOcQyEmpGKLqzWcZRVUQnZYg1aBSh2GUVEIQ2aQOE%2BG%2BcD4ntpWkZQj1JIiZIogDFFyHI0UxQwFugMSOFIPJftfVAEoZLBbcLEFhlQiqGp1Vd140AUklUN3eCA51C1EWMzMCezCBBmkxVIVHBWd3HHl9JQOIJSdSnJ0TDKChCwUJjoWMPaGqDKannasMo6WnM562R5YluZRwur0wpgqZE7NKUm%2BFNRPIhjBJxKZteWuIBMN4zRMIVIhffcgojwCF117i4nlLnY5ztRLsnOk%2BaV%2BoJY7V7m76PdkS4trKcdg0Zc0tTcKkRAAAIfkECQoAAAAsAAAAACAAIAAABO4QyEkpKqjqzScpRaVkXZWQEximw1BSCUEIlDohrft6cpKCk5xid5MNJTaAIkekKGQkWyKHkvhKsR7ARmitkAYDYRIbUQRQjWBwJRzChi9CRlBcY1UN4g0%2FVNB0AlcvcAYHRyZPdEQFYV8ccwR5HWxEJ02YmRMLnJ1xCYp0Y5idpQuhopmmC2KgojKasUQDk5BNAwwMOh2RtRq5uQuPZKGIJQIGwAwGf6I0JXMpC8C7kXWDBINFMxS4DKMAWVWAGYsAdNqW5uaRxkSKJOZKaU3tPOBZ4DuK2LATgJhkPJMgTwKCdFjyPHEnKxFCDhEAACH5BAkKAAAALAAAAAAgACAAAATzEMhJaVKp6s2nIkolIJ2WkBShpkVRWqqQrhLSEu9MZJKK9y1ZrqYK9WiClmvoUaF8gIQSNeF1Er4MNFn4SRSDARWroAIETg1iVwuHjYB1kYc1mwruwXKC9gmsJXliGxc%2BXiUCby9ydh1sOSdMkpMTBpaXBzsfhoc5l58Gm5yToAaZhaOUqjkDgCWNHAULCwOLaTmzswadEqggQwgHuQsHIoZCHQMMQgQGubVEcxOPFAcMDAYUA85eWARmfSRQCdcMe0zeP1AAygwLlJtPNAAL19DARdPzBOWSm1brJBi45soRAWQAAkrQIykShQ9wVhHCwCQCACH5BAkKAAAALAAAAAAgACAAAATrEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq%2BE71SRQeyqUToLA7VxF0JDyIQh%2FMVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiRMDjI0Fd30%2FiI2UA5GSS5UDj2l6NoqgOgN4gksEBgYFf0FDqKgHnyZ9OX8HrgYHdHpcHQULXAS2qKpENRg7eAMLC7kTBaixUYFkKAzWAAnLC7FLVxLWDBLKCwaKTULgEwbLA4hJtOkSBNqITT3xEgfLpBtzE%2FjiuL04RGEBgwWhShRgQExHBAAh%2BQQJCgAAACwAAAAAIAAgAAAE7xDISWlSqerNpyJKhWRdlSAVoVLCWk6JKlAqAavhO9UkUHsqlE6CwO1cRdCQ8iEIfzFVTzLdRAmZX3I2SfZiCqGk5dTESJeaOAlClzsJsqwiJwiqnFrb2nS9kmIcgEsjQydLiIlHehhpejaIjzh9eomSjZR%2BipslWIRLAgMDOR2DOqKogTB9pCUJBagDBXR6XB0EBkIIsaRsGGMMAxoDBgYHTKJiUYEGDAzHC9EACcUGkIgFzgwZ0QsSBcXHiQvOwgDdEwfFs0sDzt4S6BK4xYjkDOzn0unFeBzOBijIm1Dgmg5YFQwsCMjp1oJ8LyIAACH5BAkKAAAALAAAAAAgACAAAATwEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq%2BE71SRQeyqUToLA7VxF0JDyIQh%2FMVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiUd6GGl6NoiPOH16iZKNlH6KmyWFOggHhEEvAwwMA0N9GBsEC6amhnVcEwavDAazGwIDaH1ipaYLBUTCGgQDA8NdHz0FpqgTBwsLqAbWAAnIA4FWKdMLGdYGEgraigbT0OITBcg5QwPT4xLrROZL6AuQAPUS7bxLpoWidY0JtxLHKhwwMJBTHgPKdEQAACH5BAkKAAAALAAAAAAgACAAAATrEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq%2BE71SRQeyqUToLA7VxF0JDyIQh%2FMVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiUd6GAULDJCRiXo1CpGXDJOUjY%2BYip9DhToJA4RBLwMLCwVDfRgbBAaqqoZ1XBMHswsHtxtFaH1iqaoGNgAIxRpbFAgfPQSqpbgGBqUD1wBXeCYp1AYZ19JJOYgH1KwA4UBvQwXUBxPqVD9L3sbp2BNk2xvvFPJd%2BMFCN6HAAIKgNggY0KtEBAAh%2BQQJCgAAACwAAAAAIAAgAAAE6BDISWlSqerNpyJKhWRdlSAVoVLCWk6JKlAqAavhO9UkUHsqlE6CwO1cRdCQ8iEIfzFVTzLdRAmZX3I2SfYIDMaAFdTESJeaEDAIMxYFqrOUaNW4E4ObYcCXaiBVEgULe0NJaxxtYksjh2NLkZISgDgJhHthkpU4mW6blRiYmZOlh4JWkDqILwUGBnE6TYEbCgevr0N1gH4At7gHiRpFaLNrrq8HNgAJA70AWxQIH1%2BvsYMDAzZQPC9VCNkDWUhGkuE5PxJNwiUK4UfLzOlD4WvzAHaoG9nxPi5d%2BjYUqfAhhykOFwJWiAAAIfkECQoAAAAsAAAAACAAIAAABPAQyElpUqnqzaciSoVkXVUMFaFSwlpOCcMYlErAavhOMnNLNo8KsZsMZItJEIDIFSkLGQoQTNhIsFehRww2CQLKF0tYGKYSg%2BygsZIuNqJksKgbfgIGepNo2cIUB3V1B3IvNiBYNQaDSTtfhhx0CwVPI0UJe0%2Bbm4g5VgcGoqOcnjmjqDSdnhgEoamcsZuXO1aWQy8KAwOAuTYYGwi7w5h%2BKr0SJ8MFihpNbx%2B4Erq7BYBuzsdiH1jCAzoSfl0rVirNbRXlBBlLX%2BBP0XJLAPGzTkAuAOqb0WT5AH7OcdCm5B8TgRwSRKIHQtaLCwg1RAAAOwAAAAAAAAAAAA%3D%3D";

/***/ }),

/***/ 921:
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAcElEQVRYR+2WSQoAIQwEzf8f7XiOMkUQxUPlGkM3hVmiQfQR9GYnH1SsAQlI4DiBqkCMoNb9y2e90IAEJPAcgdznU9+engMaeJ7Azh5Y1U67gAho4DqBqmB1buAf0MB1AlVBek83ZPkmJMGc1wAR+AAqod/B97TRpQAAAABJRU5ErkJggg==";

/***/ }),

/***/ 643:
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABkklEQVRYR8WX4VHDMAxG6wnoJrABZQPYBCaBTWAD2g1gE5gg6OOsXuxIlr40d81dfrSJ9V4c2VLK7spHuTJ/5wpM07QXuXc5X0opX2tEJcadjHuV80li/FgxTIEK/5QBCICBD6xEhSMGHgQPgBgLiYVAB1dpSqKDawxTohFw4JSEA3clzgIBPCURwE2JucBR7rhPJJv5OpJwDX+SfDjgx1wACQeJG1aChP9K/IMmdZ8DtESV1WyP3Bt4MwM6sj4NMxMYiqUWHQu4KYA/SYkIjOsm3BXYWMKFDwU2khjCQ4ELJUJ4SmClRArOCmSXGuKma0fYD5CbzHxFpCSGAhfAVSSUGDUk2BWZaff2g6GE15BsBQ9nwmpIGDiyHQddwNTMKkbZaf9fajXQca1EX44puJZUsnY0ObGmITE3GVLCbEhQUjGVt146j6oasWN+49Vph2w1pZ5EansNZqKBm1txbU57iRRcZ86RWMDdWtBJUHBHwoQPi1GV+JCbntmvok7iTX4/Up9mgyTc/FJYDTcndgH/AA5A/CHsyEkVAAAAAElFTkSuQmCC";

/***/ }),

/***/ 300:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "node_modules/reveal.js/dist/theme/fonts/source-sans-pro/source-sans-pro-italic.eot";

/***/ }),

/***/ 37:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "node_modules/reveal.js/dist/theme/fonts/source-sans-pro/source-sans-pro-italic.ttf";

/***/ }),

/***/ 874:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "node_modules/reveal.js/dist/theme/fonts/source-sans-pro/source-sans-pro-italic.woff";

/***/ }),

/***/ 654:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "node_modules/reveal.js/dist/theme/fonts/source-sans-pro/source-sans-pro-regular.eot";

/***/ }),

/***/ 422:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "node_modules/reveal.js/dist/theme/fonts/source-sans-pro/source-sans-pro-regular.ttf";

/***/ }),

/***/ 155:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "node_modules/reveal.js/dist/theme/fonts/source-sans-pro/source-sans-pro-regular.woff";

/***/ }),

/***/ 463:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "node_modules/reveal.js/dist/theme/fonts/source-sans-pro/source-sans-pro-semibold.eot";

/***/ }),

/***/ 794:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "node_modules/reveal.js/dist/theme/fonts/source-sans-pro/source-sans-pro-semibold.ttf";

/***/ }),

/***/ 836:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "node_modules/reveal.js/dist/theme/fonts/source-sans-pro/source-sans-pro-semibold.woff";

/***/ }),

/***/ 56:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "node_modules/reveal.js/dist/theme/fonts/source-sans-pro/source-sans-pro-semibolditalic.eot";

/***/ }),

/***/ 877:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "node_modules/reveal.js/dist/theme/fonts/source-sans-pro/source-sans-pro-semibolditalic.ttf";

/***/ }),

/***/ 524:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "node_modules/reveal.js/dist/theme/fonts/source-sans-pro/source-sans-pro-semibolditalic.woff";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			179: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

;// CONCATENATED MODULE: ./node_modules/reveal.js/dist/reveal.esm.js
/*!
* reveal.js 4.5.0
* https://revealjs.com
* MIT licensed
*
* Copyright (C) 2011-2023 Hakim El Hattab, https://hakim.se
*/
const e = (e, t) => {
    for (let i in t) e[i] = t[i];
    return e;
  },
  t = (e, t) => Array.from(e.querySelectorAll(t)),
  i = (e, t, i) => {
    i ? e.classList.add(t) : e.classList.remove(t);
  },
  n = e => {
    if ("string" == typeof e) {
      if ("null" === e) return null;
      if ("true" === e) return !0;
      if ("false" === e) return !1;
      if (e.match(/^-?[\d\.]+$/)) return parseFloat(e);
    }
    return e;
  },
  s = (e, t) => {
    e.style.transform = t;
  },
  a = (e, t) => {
    let i = e.matches || e.matchesSelector || e.msMatchesSelector;
    return !(!i || !i.call(e, t));
  },
  r = (e, t) => {
    if ("function" == typeof e.closest) return e.closest(t);
    for (; e;) {
      if (a(e, t)) return e;
      e = e.parentNode;
    }
    return null;
  },
  o = (e, t, i, n = "") => {
    let s = e.querySelectorAll("." + i);
    for (let t = 0; t < s.length; t++) {
      let i = s[t];
      if (i.parentNode === e) return i;
    }
    let a = document.createElement(t);
    return a.className = i, a.innerHTML = n, e.appendChild(a), a;
  },
  l = e => {
    let t = document.createElement("style");
    return t.type = "text/css", e && e.length > 0 && (t.styleSheet ? t.styleSheet.cssText = e : t.appendChild(document.createTextNode(e))), document.head.appendChild(t), t;
  },
  d = () => {
    let e = {};
    location.search.replace(/[A-Z0-9]+?=([\w\.%-]*)/gi, t => {
      e[t.split("=").shift()] = t.split("=").pop();
    });
    for (let t in e) {
      let i = e[t];
      e[t] = n(unescape(i));
    }
    return void 0 !== e.dependencies && delete e.dependencies, e;
  },
  c = (e, t = 0) => {
    if (e) {
      let i,
        n = e.style.height;
      return e.style.height = "0px", e.parentNode.style.height = "auto", i = t - e.parentNode.offsetHeight, e.style.height = n + "px", e.parentNode.style.removeProperty("height"), i;
    }
    return t;
  },
  h = {
    mp4: "video/mp4",
    m4a: "video/mp4",
    ogv: "video/ogg",
    mpeg: "video/mpeg",
    webm: "video/webm"
  },
  u = navigator.userAgent,
  g = /(iphone|ipod|ipad|android)/gi.test(u) || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1;
/chrome/i.test(u) && /edge/i.test(u);
const v = /android/gi.test(u);
var p = {};
Object.defineProperty(p, "__esModule", {
  value: !0
});
var m = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var i = arguments[t];
      for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
    }
    return e;
  },
  f = p.default = function (e) {
    if (e) {
      var t = function (e) {
          return [].slice.call(e);
        },
        i = 0,
        n = 1,
        s = 2,
        a = 3,
        r = [],
        o = null,
        l = "requestAnimationFrame" in e ? function () {
          e.cancelAnimationFrame(o), o = e.requestAnimationFrame(function () {
            return c(r.filter(function (e) {
              return e.dirty && e.active;
            }));
          });
        } : function () {},
        d = function (e) {
          return function () {
            r.forEach(function (t) {
              return t.dirty = e;
            }), l();
          };
        },
        c = function (e) {
          e.filter(function (e) {
            return !e.styleComputed;
          }).forEach(function (e) {
            e.styleComputed = v(e);
          }), e.filter(p).forEach(f);
          var t = e.filter(g);
          t.forEach(u), t.forEach(function (e) {
            f(e), h(e);
          }), t.forEach(b);
        },
        h = function (e) {
          return e.dirty = i;
        },
        u = function (e) {
          e.availableWidth = e.element.parentNode.clientWidth, e.currentWidth = e.element.scrollWidth, e.previousFontSize = e.currentFontSize, e.currentFontSize = Math.min(Math.max(e.minSize, e.availableWidth / e.currentWidth * e.previousFontSize), e.maxSize), e.whiteSpace = e.multiLine && e.currentFontSize === e.minSize ? "normal" : "nowrap";
        },
        g = function (e) {
          return e.dirty !== s || e.dirty === s && e.element.parentNode.clientWidth !== e.availableWidth;
        },
        v = function (t) {
          var i = e.getComputedStyle(t.element, null);
          t.currentFontSize = parseFloat(i.getPropertyValue("font-size")), t.display = i.getPropertyValue("display"), t.whiteSpace = i.getPropertyValue("white-space");
        },
        p = function (e) {
          var t = !1;
          return !e.preStyleTestCompleted && (/inline-/.test(e.display) || (t = !0, e.display = "inline-block"), "nowrap" !== e.whiteSpace && (t = !0, e.whiteSpace = "nowrap"), e.preStyleTestCompleted = !0, t);
        },
        f = function (e) {
          e.element.style.whiteSpace = e.whiteSpace, e.element.style.display = e.display, e.element.style.fontSize = e.currentFontSize + "px";
        },
        b = function (e) {
          e.element.dispatchEvent(new CustomEvent("fit", {
            detail: {
              oldValue: e.previousFontSize,
              newValue: e.currentFontSize,
              scaleFactor: e.currentFontSize / e.previousFontSize
            }
          }));
        },
        y = function (e, t) {
          return function () {
            e.dirty = t, e.active && l();
          };
        },
        w = function (e) {
          return function () {
            r = r.filter(function (t) {
              return t.element !== e.element;
            }), e.observeMutations && e.observer.disconnect(), e.element.style.whiteSpace = e.originalStyle.whiteSpace, e.element.style.display = e.originalStyle.display, e.element.style.fontSize = e.originalStyle.fontSize;
          };
        },
        E = function (e) {
          return function () {
            e.active || (e.active = !0, l());
          };
        },
        R = function (e) {
          return function () {
            return e.active = !1;
          };
        },
        S = function (e) {
          e.observeMutations && (e.observer = new MutationObserver(y(e, n)), e.observer.observe(e.element, e.observeMutations));
        },
        A = {
          minSize: 16,
          maxSize: 512,
          multiLine: !0,
          observeMutations: "MutationObserver" in e && {
            subtree: !0,
            childList: !0,
            characterData: !0
          }
        },
        k = null,
        L = function () {
          e.clearTimeout(k), k = e.setTimeout(d(s), P.observeWindowDelay);
        },
        C = ["resize", "orientationchange"];
      return Object.defineProperty(P, "observeWindow", {
        set: function (t) {
          var i = (t ? "add" : "remove") + "EventListener";
          C.forEach(function (t) {
            e[i](t, L);
          });
        }
      }), P.observeWindow = !0, P.observeWindowDelay = 100, P.fitAll = d(a), P;
    }
    function x(e, t) {
      var i = m({}, A, t),
        n = e.map(function (e) {
          var t = m({}, i, {
            element: e,
            active: !0
          });
          return function (e) {
            e.originalStyle = {
              whiteSpace: e.element.style.whiteSpace,
              display: e.element.style.display,
              fontSize: e.element.style.fontSize
            }, S(e), e.newbie = !0, e.dirty = !0, r.push(e);
          }(t), {
            element: e,
            fit: y(t, a),
            unfreeze: E(t),
            freeze: R(t),
            unsubscribe: w(t)
          };
        });
      return l(), n;
    }
    function P(e) {
      var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return "string" == typeof e ? x(t(document.querySelectorAll(e)), i) : x([e], i)[0];
    }
  }("undefined" == typeof window ? null : window);
class b {
  constructor(e) {
    this.Reveal = e, this.startEmbeddedIframe = this.startEmbeddedIframe.bind(this);
  }
  shouldPreload(e) {
    let t = this.Reveal.getConfig().preloadIframes;
    return "boolean" != typeof t && (t = e.hasAttribute("data-preload")), t;
  }
  load(e, i = {}) {
    e.style.display = this.Reveal.getConfig().display, t(e, "img[data-src], video[data-src], audio[data-src], iframe[data-src]").forEach(e => {
      ("IFRAME" !== e.tagName || this.shouldPreload(e)) && (e.setAttribute("src", e.getAttribute("data-src")), e.setAttribute("data-lazy-loaded", ""), e.removeAttribute("data-src"));
    }), t(e, "video, audio").forEach(e => {
      let i = 0;
      t(e, "source[data-src]").forEach(e => {
        e.setAttribute("src", e.getAttribute("data-src")), e.removeAttribute("data-src"), e.setAttribute("data-lazy-loaded", ""), i += 1;
      }), g && "VIDEO" === e.tagName && e.setAttribute("playsinline", ""), i > 0 && e.load();
    });
    let n = e.slideBackgroundElement;
    if (n) {
      n.style.display = "block";
      let t = e.slideBackgroundContentElement,
        s = e.getAttribute("data-background-iframe");
      if (!1 === n.hasAttribute("data-loaded")) {
        n.setAttribute("data-loaded", "true");
        let a = e.getAttribute("data-background-image"),
          r = e.getAttribute("data-background-video"),
          o = e.hasAttribute("data-background-video-loop"),
          l = e.hasAttribute("data-background-video-muted");
        if (a) /^data:/.test(a.trim()) ? t.style.backgroundImage = `url(${a.trim()})` : t.style.backgroundImage = a.split(",").map(e => `url(${((e = "") => encodeURI(e).replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[!'()*]/g, e => `%${e.charCodeAt(0).toString(16).toUpperCase()}`))(decodeURI(e.trim()))})`).join(",");else if (r && !this.Reveal.isSpeakerNotes()) {
          let e = document.createElement("video");
          o && e.setAttribute("loop", ""), l && (e.muted = !0), g && (e.muted = !0, e.setAttribute("playsinline", "")), r.split(",").forEach(t => {
            let i = ((e = "") => h[e.split(".").pop()])(t);
            e.innerHTML += i ? `<source src="${t}" type="${i}">` : `<source src="${t}">`;
          }), t.appendChild(e);
        } else if (s && !0 !== i.excludeIframes) {
          let e = document.createElement("iframe");
          e.setAttribute("allowfullscreen", ""), e.setAttribute("mozallowfullscreen", ""), e.setAttribute("webkitallowfullscreen", ""), e.setAttribute("allow", "autoplay"), e.setAttribute("data-src", s), e.style.width = "100%", e.style.height = "100%", e.style.maxHeight = "100%", e.style.maxWidth = "100%", t.appendChild(e);
        }
      }
      let a = t.querySelector("iframe[data-src]");
      a && this.shouldPreload(n) && !/autoplay=(1|true|yes)/gi.test(s) && a.getAttribute("src") !== s && a.setAttribute("src", s);
    }
    this.layout(e);
  }
  layout(e) {
    Array.from(e.querySelectorAll(".r-fit-text")).forEach(e => {
      f(e, {
        minSize: 24,
        maxSize: .8 * this.Reveal.getConfig().height,
        observeMutations: !1,
        observeWindow: !1
      });
    });
  }
  unload(e) {
    e.style.display = "none";
    let i = this.Reveal.getSlideBackground(e);
    i && (i.style.display = "none", t(i, "iframe[src]").forEach(e => {
      e.removeAttribute("src");
    })), t(e, "video[data-lazy-loaded][src], audio[data-lazy-loaded][src], iframe[data-lazy-loaded][src]").forEach(e => {
      e.setAttribute("data-src", e.getAttribute("src")), e.removeAttribute("src");
    }), t(e, "video[data-lazy-loaded] source[src], audio source[src]").forEach(e => {
      e.setAttribute("data-src", e.getAttribute("src")), e.removeAttribute("src");
    });
  }
  formatEmbeddedContent() {
    let e = (e, i, n) => {
      t(this.Reveal.getSlidesElement(), "iframe[" + e + '*="' + i + '"]').forEach(t => {
        let i = t.getAttribute(e);
        i && -1 === i.indexOf(n) && t.setAttribute(e, i + (/\?/.test(i) ? "&" : "?") + n);
      });
    };
    e("src", "youtube.com/embed/", "enablejsapi=1"), e("data-src", "youtube.com/embed/", "enablejsapi=1"), e("src", "player.vimeo.com/", "api=1"), e("data-src", "player.vimeo.com/", "api=1");
  }
  startEmbeddedContent(e) {
    e && !this.Reveal.isSpeakerNotes() && (t(e, 'img[src$=".gif"]').forEach(e => {
      e.setAttribute("src", e.getAttribute("src"));
    }), t(e, "video, audio").forEach(e => {
      if (r(e, ".fragment") && !r(e, ".fragment.visible")) return;
      let t = this.Reveal.getConfig().autoPlayMedia;
      if ("boolean" != typeof t && (t = e.hasAttribute("data-autoplay") || !!r(e, ".slide-background")), t && "function" == typeof e.play) if (e.readyState > 1) this.startEmbeddedMedia({
        target: e
      });else if (g) {
        let t = e.play();
        t && "function" == typeof t.catch && !1 === e.controls && t.catch(() => {
          e.controls = !0, e.addEventListener("play", () => {
            e.controls = !1;
          });
        });
      } else e.removeEventListener("loadeddata", this.startEmbeddedMedia), e.addEventListener("loadeddata", this.startEmbeddedMedia);
    }), t(e, "iframe[src]").forEach(e => {
      r(e, ".fragment") && !r(e, ".fragment.visible") || this.startEmbeddedIframe({
        target: e
      });
    }), t(e, "iframe[data-src]").forEach(e => {
      r(e, ".fragment") && !r(e, ".fragment.visible") || e.getAttribute("src") !== e.getAttribute("data-src") && (e.removeEventListener("load", this.startEmbeddedIframe), e.addEventListener("load", this.startEmbeddedIframe), e.setAttribute("src", e.getAttribute("data-src")));
    }));
  }
  startEmbeddedMedia(e) {
    let t = !!r(e.target, "html"),
      i = !!r(e.target, ".present");
    t && i && (e.target.currentTime = 0, e.target.play()), e.target.removeEventListener("loadeddata", this.startEmbeddedMedia);
  }
  startEmbeddedIframe(e) {
    let t = e.target;
    if (t && t.contentWindow) {
      let i = !!r(e.target, "html"),
        n = !!r(e.target, ".present");
      if (i && n) {
        let e = this.Reveal.getConfig().autoPlayMedia;
        "boolean" != typeof e && (e = t.hasAttribute("data-autoplay") || !!r(t, ".slide-background")), /youtube\.com\/embed\//.test(t.getAttribute("src")) && e ? t.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*") : /player\.vimeo\.com\//.test(t.getAttribute("src")) && e ? t.contentWindow.postMessage('{"method":"play"}', "*") : t.contentWindow.postMessage("slide:start", "*");
      }
    }
  }
  stopEmbeddedContent(i, n = {}) {
    n = e({
      unloadIframes: !0
    }, n), i && i.parentNode && (t(i, "video, audio").forEach(e => {
      e.hasAttribute("data-ignore") || "function" != typeof e.pause || (e.setAttribute("data-paused-by-reveal", ""), e.pause());
    }), t(i, "iframe").forEach(e => {
      e.contentWindow && e.contentWindow.postMessage("slide:stop", "*"), e.removeEventListener("load", this.startEmbeddedIframe);
    }), t(i, 'iframe[src*="youtube.com/embed/"]').forEach(e => {
      !e.hasAttribute("data-ignore") && e.contentWindow && "function" == typeof e.contentWindow.postMessage && e.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*");
    }), t(i, 'iframe[src*="player.vimeo.com/"]').forEach(e => {
      !e.hasAttribute("data-ignore") && e.contentWindow && "function" == typeof e.contentWindow.postMessage && e.contentWindow.postMessage('{"method":"pause"}', "*");
    }), !0 === n.unloadIframes && t(i, "iframe[data-src]").forEach(e => {
      e.setAttribute("src", "about:blank"), e.removeAttribute("src");
    }));
  }
}
class y {
  constructor(e) {
    this.Reveal = e;
  }
  render() {
    this.element = document.createElement("div"), this.element.className = "slide-number", this.Reveal.getRevealElement().appendChild(this.element);
  }
  configure(e, t) {
    let i = "none";
    e.slideNumber && !this.Reveal.isPrintingPDF() && ("all" === e.showSlideNumber || "speaker" === e.showSlideNumber && this.Reveal.isSpeakerNotes()) && (i = "block"), this.element.style.display = i;
  }
  update() {
    this.Reveal.getConfig().slideNumber && this.element && (this.element.innerHTML = this.getSlideNumber());
  }
  getSlideNumber(e = this.Reveal.getCurrentSlide()) {
    let t,
      i = this.Reveal.getConfig(),
      n = "h.v";
    if ("function" == typeof i.slideNumber) t = i.slideNumber(e);else {
      "string" == typeof i.slideNumber && (n = i.slideNumber), /c/.test(n) || 1 !== this.Reveal.getHorizontalSlides().length || (n = "c");
      let s = e && "uncounted" === e.dataset.visibility ? 0 : 1;
      switch (t = [], n) {
        case "c":
          t.push(this.Reveal.getSlidePastCount(e) + s);
          break;
        case "c/t":
          t.push(this.Reveal.getSlidePastCount(e) + s, "/", this.Reveal.getTotalSlides());
          break;
        default:
          let i = this.Reveal.getIndices(e);
          t.push(i.h + s);
          let a = "h/v" === n ? "/" : ".";
          this.Reveal.isVerticalSlide(e) && t.push(a, i.v + 1);
      }
    }
    let s = "#" + this.Reveal.location.getHash(e);
    return this.formatNumber(t[0], t[1], t[2], s);
  }
  formatNumber(e, t, i, n = "#" + this.Reveal.location.getHash()) {
    return "number" != typeof i || isNaN(i) ? `<a href="${n}">\n\t\t\t\t\t<span class="slide-number-a">${e}</span>\n\t\t\t\t\t</a>` : `<a href="${n}">\n\t\t\t\t\t<span class="slide-number-a">${e}</span>\n\t\t\t\t\t<span class="slide-number-delimiter">${t}</span>\n\t\t\t\t\t<span class="slide-number-b">${i}</span>\n\t\t\t\t\t</a>`;
  }
  destroy() {
    this.element.remove();
  }
}
class w {
  constructor(e) {
    this.Reveal = e, this.onInput = this.onInput.bind(this), this.onBlur = this.onBlur.bind(this), this.onKeyDown = this.onKeyDown.bind(this);
  }
  render() {
    this.element = document.createElement("div"), this.element.className = "jump-to-slide", this.jumpInput = document.createElement("input"), this.jumpInput.type = "text", this.jumpInput.className = "jump-to-slide-input", this.jumpInput.placeholder = "Jump to slide", this.jumpInput.addEventListener("input", this.onInput), this.jumpInput.addEventListener("keydown", this.onKeyDown), this.jumpInput.addEventListener("blur", this.onBlur), this.element.appendChild(this.jumpInput);
  }
  show() {
    this.indicesOnShow = this.Reveal.getIndices(), this.Reveal.getRevealElement().appendChild(this.element), this.jumpInput.focus();
  }
  hide() {
    this.isVisible() && (this.element.remove(), this.jumpInput.value = "", clearTimeout(this.jumpTimeout), delete this.jumpTimeout);
  }
  isVisible() {
    return !!this.element.parentNode;
  }
  jump() {
    clearTimeout(this.jumpTimeout), delete this.jumpTimeout;
    const e = this.jumpInput.value.trim("");
    let t = this.Reveal.location.getIndicesFromHash(e, {
      oneBasedIndex: !0
    });
    return !t && /\S+/i.test(e) && e.length > 1 && (t = this.search(e)), t && "" !== e ? (this.Reveal.slide(t.h, t.v, t.f), !0) : (this.Reveal.slide(this.indicesOnShow.h, this.indicesOnShow.v, this.indicesOnShow.f), !1);
  }
  jumpAfter(e) {
    clearTimeout(this.jumpTimeout), this.jumpTimeout = setTimeout(() => this.jump(), e);
  }
  search(e) {
    const t = new RegExp("\\b" + e.trim() + "\\b", "i"),
      i = this.Reveal.getSlides().find(e => t.test(e.innerText));
    return i ? this.Reveal.getIndices(i) : null;
  }
  cancel() {
    this.Reveal.slide(this.indicesOnShow.h, this.indicesOnShow.v, this.indicesOnShow.f), this.hide();
  }
  confirm() {
    this.jump(), this.hide();
  }
  destroy() {
    this.jumpInput.removeEventListener("input", this.onInput), this.jumpInput.removeEventListener("keydown", this.onKeyDown), this.jumpInput.removeEventListener("blur", this.onBlur), this.element.remove();
  }
  onKeyDown(e) {
    13 === e.keyCode ? this.confirm() : 27 === e.keyCode && (this.cancel(), e.stopImmediatePropagation());
  }
  onInput(e) {
    this.jumpAfter(200);
  }
  onBlur() {
    setTimeout(() => this.hide(), 1);
  }
}
const E = e => {
  let t = e.match(/^#([0-9a-f]{3})$/i);
  if (t && t[1]) return t = t[1], {
    r: 17 * parseInt(t.charAt(0), 16),
    g: 17 * parseInt(t.charAt(1), 16),
    b: 17 * parseInt(t.charAt(2), 16)
  };
  let i = e.match(/^#([0-9a-f]{6})$/i);
  if (i && i[1]) return i = i[1], {
    r: parseInt(i.slice(0, 2), 16),
    g: parseInt(i.slice(2, 4), 16),
    b: parseInt(i.slice(4, 6), 16)
  };
  let n = e.match(/^rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i);
  if (n) return {
    r: parseInt(n[1], 10),
    g: parseInt(n[2], 10),
    b: parseInt(n[3], 10)
  };
  let s = e.match(/^rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\,\s*([\d]+|[\d]*.[\d]+)\s*\)$/i);
  return s ? {
    r: parseInt(s[1], 10),
    g: parseInt(s[2], 10),
    b: parseInt(s[3], 10),
    a: parseFloat(s[4])
  } : null;
};
class R {
  constructor(e) {
    this.Reveal = e;
  }
  render() {
    this.element = document.createElement("div"), this.element.className = "backgrounds", this.Reveal.getRevealElement().appendChild(this.element);
  }
  create() {
    this.element.innerHTML = "", this.element.classList.add("no-transition"), this.Reveal.getHorizontalSlides().forEach(e => {
      let i = this.createBackground(e, this.element);
      t(e, "section").forEach(e => {
        this.createBackground(e, i), i.classList.add("stack");
      });
    }), this.Reveal.getConfig().parallaxBackgroundImage ? (this.element.style.backgroundImage = 'url("' + this.Reveal.getConfig().parallaxBackgroundImage + '")', this.element.style.backgroundSize = this.Reveal.getConfig().parallaxBackgroundSize, this.element.style.backgroundRepeat = this.Reveal.getConfig().parallaxBackgroundRepeat, this.element.style.backgroundPosition = this.Reveal.getConfig().parallaxBackgroundPosition, setTimeout(() => {
      this.Reveal.getRevealElement().classList.add("has-parallax-background");
    }, 1)) : (this.element.style.backgroundImage = "", this.Reveal.getRevealElement().classList.remove("has-parallax-background"));
  }
  createBackground(e, t) {
    let i = document.createElement("div");
    i.className = "slide-background " + e.className.replace(/present|past|future/, "");
    let n = document.createElement("div");
    return n.className = "slide-background-content", i.appendChild(n), t.appendChild(i), e.slideBackgroundElement = i, e.slideBackgroundContentElement = n, this.sync(e), i;
  }
  sync(e) {
    const t = e.slideBackgroundElement,
      i = e.slideBackgroundContentElement,
      n = {
        background: e.getAttribute("data-background"),
        backgroundSize: e.getAttribute("data-background-size"),
        backgroundImage: e.getAttribute("data-background-image"),
        backgroundVideo: e.getAttribute("data-background-video"),
        backgroundIframe: e.getAttribute("data-background-iframe"),
        backgroundColor: e.getAttribute("data-background-color"),
        backgroundGradient: e.getAttribute("data-background-gradient"),
        backgroundRepeat: e.getAttribute("data-background-repeat"),
        backgroundPosition: e.getAttribute("data-background-position"),
        backgroundTransition: e.getAttribute("data-background-transition"),
        backgroundOpacity: e.getAttribute("data-background-opacity")
      },
      s = e.hasAttribute("data-preload");
    e.classList.remove("has-dark-background"), e.classList.remove("has-light-background"), t.removeAttribute("data-loaded"), t.removeAttribute("data-background-hash"), t.removeAttribute("data-background-size"), t.removeAttribute("data-background-transition"), t.style.backgroundColor = "", i.style.backgroundSize = "", i.style.backgroundRepeat = "", i.style.backgroundPosition = "", i.style.backgroundImage = "", i.style.opacity = "", i.innerHTML = "", n.background && (/^(http|file|\/\/)/gi.test(n.background) || /\.(svg|png|jpg|jpeg|gif|bmp|webp)([?#\s]|$)/gi.test(n.background) ? e.setAttribute("data-background-image", n.background) : t.style.background = n.background), (n.background || n.backgroundColor || n.backgroundGradient || n.backgroundImage || n.backgroundVideo || n.backgroundIframe) && t.setAttribute("data-background-hash", n.background + n.backgroundSize + n.backgroundImage + n.backgroundVideo + n.backgroundIframe + n.backgroundColor + n.backgroundGradient + n.backgroundRepeat + n.backgroundPosition + n.backgroundTransition + n.backgroundOpacity), n.backgroundSize && t.setAttribute("data-background-size", n.backgroundSize), n.backgroundColor && (t.style.backgroundColor = n.backgroundColor), n.backgroundGradient && (t.style.backgroundImage = n.backgroundGradient), n.backgroundTransition && t.setAttribute("data-background-transition", n.backgroundTransition), s && t.setAttribute("data-preload", ""), n.backgroundSize && (i.style.backgroundSize = n.backgroundSize), n.backgroundRepeat && (i.style.backgroundRepeat = n.backgroundRepeat), n.backgroundPosition && (i.style.backgroundPosition = n.backgroundPosition), n.backgroundOpacity && (i.style.opacity = n.backgroundOpacity);
    let a = n.backgroundColor;
    if (!a || !E(a)) {
      let e = window.getComputedStyle(t);
      e && e.backgroundColor && (a = e.backgroundColor);
    }
    if (a) {
      const t = E(a);
      t && 0 !== t.a && ("string" == typeof (r = a) && (r = E(r)), (r ? (299 * r.r + 587 * r.g + 114 * r.b) / 1e3 : null) < 128 ? e.classList.add("has-dark-background") : e.classList.add("has-light-background"));
    }
    var r;
  }
  update(e = !1) {
    let i = this.Reveal.getCurrentSlide(),
      n = this.Reveal.getIndices(),
      s = null,
      a = this.Reveal.getConfig().rtl ? "future" : "past",
      r = this.Reveal.getConfig().rtl ? "past" : "future";
    if (Array.from(this.element.childNodes).forEach((i, o) => {
      i.classList.remove("past", "present", "future"), o < n.h ? i.classList.add(a) : o > n.h ? i.classList.add(r) : (i.classList.add("present"), s = i), (e || o === n.h) && t(i, ".slide-background").forEach((e, t) => {
        e.classList.remove("past", "present", "future"), t < n.v ? e.classList.add("past") : t > n.v ? e.classList.add("future") : (e.classList.add("present"), o === n.h && (s = e));
      });
    }), this.previousBackground && this.Reveal.slideContent.stopEmbeddedContent(this.previousBackground, {
      unloadIframes: !this.Reveal.slideContent.shouldPreload(this.previousBackground)
    }), s) {
      this.Reveal.slideContent.startEmbeddedContent(s);
      let e = s.querySelector(".slide-background-content");
      if (e) {
        let t = e.style.backgroundImage || "";
        /\.gif/i.test(t) && (e.style.backgroundImage = "", window.getComputedStyle(e).opacity, e.style.backgroundImage = t);
      }
      let t = this.previousBackground ? this.previousBackground.getAttribute("data-background-hash") : null,
        i = s.getAttribute("data-background-hash");
      i && i === t && s !== this.previousBackground && this.element.classList.add("no-transition"), this.previousBackground = s;
    }
    i && ["has-light-background", "has-dark-background"].forEach(e => {
      i.classList.contains(e) ? this.Reveal.getRevealElement().classList.add(e) : this.Reveal.getRevealElement().classList.remove(e);
    }, this), setTimeout(() => {
      this.element.classList.remove("no-transition");
    }, 1);
  }
  updateParallax() {
    let e = this.Reveal.getIndices();
    if (this.Reveal.getConfig().parallaxBackgroundImage) {
      let t,
        i,
        n = this.Reveal.getHorizontalSlides(),
        s = this.Reveal.getVerticalSlides(),
        a = this.element.style.backgroundSize.split(" ");
      1 === a.length ? t = i = parseInt(a[0], 10) : (t = parseInt(a[0], 10), i = parseInt(a[1], 10));
      let r,
        o,
        l = this.element.offsetWidth,
        d = n.length;
      r = "number" == typeof this.Reveal.getConfig().parallaxBackgroundHorizontal ? this.Reveal.getConfig().parallaxBackgroundHorizontal : d > 1 ? (t - l) / (d - 1) : 0, o = r * e.h * -1;
      let c,
        h,
        u = this.element.offsetHeight,
        g = s.length;
      c = "number" == typeof this.Reveal.getConfig().parallaxBackgroundVertical ? this.Reveal.getConfig().parallaxBackgroundVertical : (i - u) / (g - 1), h = g > 0 ? c * e.v : 0, this.element.style.backgroundPosition = o + "px " + -h + "px";
    }
  }
  destroy() {
    this.element.remove();
  }
}
const S = ".slides section",
  A = ".slides>section",
  k = ".slides>section.present>section",
  L = /registerPlugin|registerKeyboardShortcut|addKeyBinding|addEventListener|showPreview/,
  C = /fade-(down|up|right|left|out|in-then-out|in-then-semi-out)|semi-fade-out|current-visible|shrink|grow/;
let x = 0;
class P {
  constructor(e) {
    this.Reveal = e;
  }
  run(e, t) {
    this.reset();
    let i = this.Reveal.getSlides(),
      n = i.indexOf(t),
      s = i.indexOf(e);
    if (e.hasAttribute("data-auto-animate") && t.hasAttribute("data-auto-animate") && e.getAttribute("data-auto-animate-id") === t.getAttribute("data-auto-animate-id") && !(n > s ? t : e).hasAttribute("data-auto-animate-restart")) {
      this.autoAnimateStyleSheet = this.autoAnimateStyleSheet || l();
      let i = this.getAutoAnimateOptions(t);
      e.dataset.autoAnimate = "pending", t.dataset.autoAnimate = "pending", i.slideDirection = n > s ? "forward" : "backward";
      let a = "none" === e.style.display;
      a && (e.style.display = this.Reveal.getConfig().display);
      let r = this.getAutoAnimatableElements(e, t).map(e => this.autoAnimateElements(e.from, e.to, e.options || {}, i, x++));
      if (a && (e.style.display = "none"), "false" !== t.dataset.autoAnimateUnmatched && !0 === this.Reveal.getConfig().autoAnimateUnmatched) {
        let e = .8 * i.duration,
          n = .2 * i.duration;
        this.getUnmatchedAutoAnimateElements(t).forEach(e => {
          let t = this.getAutoAnimateOptions(e, i),
            n = "unmatched";
          t.duration === i.duration && t.delay === i.delay || (n = "unmatched-" + x++, r.push(`[data-auto-animate="running"] [data-auto-animate-target="${n}"] { transition: opacity ${t.duration}s ease ${t.delay}s; }`)), e.dataset.autoAnimateTarget = n;
        }, this), r.push(`[data-auto-animate="running"] [data-auto-animate-target="unmatched"] { transition: opacity ${e}s ease ${n}s; }`);
      }
      this.autoAnimateStyleSheet.innerHTML = r.join(""), requestAnimationFrame(() => {
        this.autoAnimateStyleSheet && (getComputedStyle(this.autoAnimateStyleSheet).fontWeight, t.dataset.autoAnimate = "running");
      }), this.Reveal.dispatchEvent({
        type: "autoanimate",
        data: {
          fromSlide: e,
          toSlide: t,
          sheet: this.autoAnimateStyleSheet
        }
      });
    }
  }
  reset() {
    t(this.Reveal.getRevealElement(), '[data-auto-animate]:not([data-auto-animate=""])').forEach(e => {
      e.dataset.autoAnimate = "";
    }), t(this.Reveal.getRevealElement(), "[data-auto-animate-target]").forEach(e => {
      delete e.dataset.autoAnimateTarget;
    }), this.autoAnimateStyleSheet && this.autoAnimateStyleSheet.parentNode && (this.autoAnimateStyleSheet.parentNode.removeChild(this.autoAnimateStyleSheet), this.autoAnimateStyleSheet = null);
  }
  autoAnimateElements(e, t, i, n, s) {
    e.dataset.autoAnimateTarget = "", t.dataset.autoAnimateTarget = s;
    let a = this.getAutoAnimateOptions(t, n);
    void 0 !== i.delay && (a.delay = i.delay), void 0 !== i.duration && (a.duration = i.duration), void 0 !== i.easing && (a.easing = i.easing);
    let r = this.getAutoAnimatableProperties("from", e, i),
      o = this.getAutoAnimatableProperties("to", t, i);
    if (t.classList.contains("fragment") && (delete o.styles.opacity, e.classList.contains("fragment"))) {
      (e.className.match(C) || [""])[0] === (t.className.match(C) || [""])[0] && "forward" === n.slideDirection && t.classList.add("visible", "disabled");
    }
    if (!1 !== i.translate || !1 !== i.scale) {
      let e = this.Reveal.getScale(),
        t = {
          x: (r.x - o.x) / e,
          y: (r.y - o.y) / e,
          scaleX: r.width / o.width,
          scaleY: r.height / o.height
        };
      t.x = Math.round(1e3 * t.x) / 1e3, t.y = Math.round(1e3 * t.y) / 1e3, t.scaleX = Math.round(1e3 * t.scaleX) / 1e3, t.scaleX = Math.round(1e3 * t.scaleX) / 1e3;
      let n = !1 !== i.translate && (0 !== t.x || 0 !== t.y),
        s = !1 !== i.scale && (0 !== t.scaleX || 0 !== t.scaleY);
      if (n || s) {
        let e = [];
        n && e.push(`translate(${t.x}px, ${t.y}px)`), s && e.push(`scale(${t.scaleX}, ${t.scaleY})`), r.styles.transform = e.join(" "), r.styles["transform-origin"] = "top left", o.styles.transform = "none";
      }
    }
    for (let e in o.styles) {
      const t = o.styles[e],
        i = r.styles[e];
      t === i ? delete o.styles[e] : (!0 === t.explicitValue && (o.styles[e] = t.value), !0 === i.explicitValue && (r.styles[e] = i.value));
    }
    let l = "",
      d = Object.keys(o.styles);
    if (d.length > 0) {
      r.styles.transition = "none", o.styles.transition = `all ${a.duration}s ${a.easing} ${a.delay}s`, o.styles["transition-property"] = d.join(", "), o.styles["will-change"] = d.join(", "), l = '[data-auto-animate-target="' + s + '"] {' + Object.keys(r.styles).map(e => e + ": " + r.styles[e] + " !important;").join("") + '}[data-auto-animate="running"] [data-auto-animate-target="' + s + '"] {' + Object.keys(o.styles).map(e => e + ": " + o.styles[e] + " !important;").join("") + "}";
    }
    return l;
  }
  getAutoAnimateOptions(t, i) {
    let n = {
      easing: this.Reveal.getConfig().autoAnimateEasing,
      duration: this.Reveal.getConfig().autoAnimateDuration,
      delay: 0
    };
    if (n = e(n, i), t.parentNode) {
      let e = r(t.parentNode, "[data-auto-animate-target]");
      e && (n = this.getAutoAnimateOptions(e, n));
    }
    return t.dataset.autoAnimateEasing && (n.easing = t.dataset.autoAnimateEasing), t.dataset.autoAnimateDuration && (n.duration = parseFloat(t.dataset.autoAnimateDuration)), t.dataset.autoAnimateDelay && (n.delay = parseFloat(t.dataset.autoAnimateDelay)), n;
  }
  getAutoAnimatableProperties(e, t, i) {
    let n = this.Reveal.getConfig(),
      s = {
        styles: []
      };
    if (!1 !== i.translate || !1 !== i.scale) {
      let e;
      if ("function" == typeof i.measure) e = i.measure(t);else if (n.center) e = t.getBoundingClientRect();else {
        let i = this.Reveal.getScale();
        e = {
          x: t.offsetLeft * i,
          y: t.offsetTop * i,
          width: t.offsetWidth * i,
          height: t.offsetHeight * i
        };
      }
      s.x = e.x, s.y = e.y, s.width = e.width, s.height = e.height;
    }
    const a = getComputedStyle(t);
    return (i.styles || n.autoAnimateStyles).forEach(t => {
      let i;
      "string" == typeof t && (t = {
        property: t
      }), void 0 !== t.from && "from" === e ? i = {
        value: t.from,
        explicitValue: !0
      } : void 0 !== t.to && "to" === e ? i = {
        value: t.to,
        explicitValue: !0
      } : ("line-height" === t.property && (i = parseFloat(a["line-height"]) / parseFloat(a["font-size"])), isNaN(i) && (i = a[t.property])), "" !== i && (s.styles[t.property] = i);
    }), s;
  }
  getAutoAnimatableElements(e, t) {
    let i = ("function" == typeof this.Reveal.getConfig().autoAnimateMatcher ? this.Reveal.getConfig().autoAnimateMatcher : this.getAutoAnimatePairs).call(this, e, t),
      n = [];
    return i.filter((e, t) => {
      if (-1 === n.indexOf(e.to)) return n.push(e.to), !0;
    });
  }
  getAutoAnimatePairs(e, t) {
    let i = [];
    const n = "h1, h2, h3, h4, h5, h6, p, li";
    return this.findAutoAnimateMatches(i, e, t, "[data-id]", e => e.nodeName + ":::" + e.getAttribute("data-id")), this.findAutoAnimateMatches(i, e, t, n, e => e.nodeName + ":::" + e.innerText), this.findAutoAnimateMatches(i, e, t, "img, video, iframe", e => e.nodeName + ":::" + (e.getAttribute("src") || e.getAttribute("data-src"))), this.findAutoAnimateMatches(i, e, t, "pre", e => e.nodeName + ":::" + e.innerText), i.forEach(e => {
      a(e.from, n) ? e.options = {
        scale: !1
      } : a(e.from, "pre") && (e.options = {
        scale: !1,
        styles: ["width", "height"]
      }, this.findAutoAnimateMatches(i, e.from, e.to, ".hljs .hljs-ln-code", e => e.textContent, {
        scale: !1,
        styles: [],
        measure: this.getLocalBoundingBox.bind(this)
      }), this.findAutoAnimateMatches(i, e.from, e.to, ".hljs .hljs-ln-line[data-line-number]", e => e.getAttribute("data-line-number"), {
        scale: !1,
        styles: ["width"],
        measure: this.getLocalBoundingBox.bind(this)
      }));
    }, this), i;
  }
  getLocalBoundingBox(e) {
    const t = this.Reveal.getScale();
    return {
      x: Math.round(e.offsetLeft * t * 100) / 100,
      y: Math.round(e.offsetTop * t * 100) / 100,
      width: Math.round(e.offsetWidth * t * 100) / 100,
      height: Math.round(e.offsetHeight * t * 100) / 100
    };
  }
  findAutoAnimateMatches(e, t, i, n, s, a) {
    let r = {},
      o = {};
    [].slice.call(t.querySelectorAll(n)).forEach((e, t) => {
      const i = s(e);
      "string" == typeof i && i.length && (r[i] = r[i] || [], r[i].push(e));
    }), [].slice.call(i.querySelectorAll(n)).forEach((t, i) => {
      const n = s(t);
      let l;
      if (o[n] = o[n] || [], o[n].push(t), r[n]) {
        const e = o[n].length - 1,
          t = r[n].length - 1;
        r[n][e] ? (l = r[n][e], r[n][e] = null) : r[n][t] && (l = r[n][t], r[n][t] = null);
      }
      l && e.push({
        from: l,
        to: t,
        options: a
      });
    });
  }
  getUnmatchedAutoAnimateElements(e) {
    return [].slice.call(e.children).reduce((e, t) => {
      const i = t.querySelector("[data-auto-animate-target]");
      return t.hasAttribute("data-auto-animate-target") || i || e.push(t), t.querySelector("[data-auto-animate-target]") && (e = e.concat(this.getUnmatchedAutoAnimateElements(t))), e;
    }, []);
  }
}
class N {
  constructor(e) {
    this.Reveal = e;
  }
  configure(e, t) {
    !1 === e.fragments ? this.disable() : !1 === t.fragments && this.enable();
  }
  disable() {
    t(this.Reveal.getSlidesElement(), ".fragment").forEach(e => {
      e.classList.add("visible"), e.classList.remove("current-fragment");
    });
  }
  enable() {
    t(this.Reveal.getSlidesElement(), ".fragment").forEach(e => {
      e.classList.remove("visible"), e.classList.remove("current-fragment");
    });
  }
  availableRoutes() {
    let e = this.Reveal.getCurrentSlide();
    if (e && this.Reveal.getConfig().fragments) {
      let t = e.querySelectorAll(".fragment:not(.disabled)"),
        i = e.querySelectorAll(".fragment:not(.disabled):not(.visible)");
      return {
        prev: t.length - i.length > 0,
        next: !!i.length
      };
    }
    return {
      prev: !1,
      next: !1
    };
  }
  sort(e, t = !1) {
    e = Array.from(e);
    let i = [],
      n = [],
      s = [];
    e.forEach(e => {
      if (e.hasAttribute("data-fragment-index")) {
        let t = parseInt(e.getAttribute("data-fragment-index"), 10);
        i[t] || (i[t] = []), i[t].push(e);
      } else n.push([e]);
    }), i = i.concat(n);
    let a = 0;
    return i.forEach(e => {
      e.forEach(e => {
        s.push(e), e.setAttribute("data-fragment-index", a);
      }), a++;
    }), !0 === t ? i : s;
  }
  sortAll() {
    this.Reveal.getHorizontalSlides().forEach(e => {
      let i = t(e, "section");
      i.forEach((e, t) => {
        this.sort(e.querySelectorAll(".fragment"));
      }, this), 0 === i.length && this.sort(e.querySelectorAll(".fragment"));
    });
  }
  update(e, t) {
    let i = {
        shown: [],
        hidden: []
      },
      n = this.Reveal.getCurrentSlide();
    if (n && this.Reveal.getConfig().fragments && (t = t || this.sort(n.querySelectorAll(".fragment"))).length) {
      let s = 0;
      if ("number" != typeof e) {
        let t = this.sort(n.querySelectorAll(".fragment.visible")).pop();
        t && (e = parseInt(t.getAttribute("data-fragment-index") || 0, 10));
      }
      Array.from(t).forEach((t, n) => {
        if (t.hasAttribute("data-fragment-index") && (n = parseInt(t.getAttribute("data-fragment-index"), 10)), s = Math.max(s, n), n <= e) {
          let s = t.classList.contains("visible");
          t.classList.add("visible"), t.classList.remove("current-fragment"), n === e && (this.Reveal.announceStatus(this.Reveal.getStatusText(t)), t.classList.add("current-fragment"), this.Reveal.slideContent.startEmbeddedContent(t)), s || (i.shown.push(t), this.Reveal.dispatchEvent({
            target: t,
            type: "visible",
            bubbles: !1
          }));
        } else {
          let e = t.classList.contains("visible");
          t.classList.remove("visible"), t.classList.remove("current-fragment"), e && (this.Reveal.slideContent.stopEmbeddedContent(t), i.hidden.push(t), this.Reveal.dispatchEvent({
            target: t,
            type: "hidden",
            bubbles: !1
          }));
        }
      }), e = "number" == typeof e ? e : -1, e = Math.max(Math.min(e, s), -1), n.setAttribute("data-fragment", e);
    }
    return i;
  }
  sync(e = this.Reveal.getCurrentSlide()) {
    return this.sort(e.querySelectorAll(".fragment"));
  }
  goto(e, t = 0) {
    let i = this.Reveal.getCurrentSlide();
    if (i && this.Reveal.getConfig().fragments) {
      let n = this.sort(i.querySelectorAll(".fragment:not(.disabled)"));
      if (n.length) {
        if ("number" != typeof e) {
          let t = this.sort(i.querySelectorAll(".fragment:not(.disabled).visible")).pop();
          e = t ? parseInt(t.getAttribute("data-fragment-index") || 0, 10) : -1;
        }
        e += t;
        let s = this.update(e, n);
        return s.hidden.length && this.Reveal.dispatchEvent({
          type: "fragmenthidden",
          data: {
            fragment: s.hidden[0],
            fragments: s.hidden
          }
        }), s.shown.length && this.Reveal.dispatchEvent({
          type: "fragmentshown",
          data: {
            fragment: s.shown[0],
            fragments: s.shown
          }
        }), this.Reveal.controls.update(), this.Reveal.progress.update(), this.Reveal.getConfig().fragmentInURL && this.Reveal.location.writeURL(), !(!s.shown.length && !s.hidden.length);
      }
    }
    return !1;
  }
  next() {
    return this.goto(null, 1);
  }
  prev() {
    return this.goto(null, -1);
  }
}
class M {
  constructor(e) {
    this.Reveal = e, this.active = !1, this.onSlideClicked = this.onSlideClicked.bind(this);
  }
  activate() {
    if (this.Reveal.getConfig().overview && !this.isActive()) {
      this.active = !0, this.Reveal.getRevealElement().classList.add("overview"), this.Reveal.cancelAutoSlide(), this.Reveal.getSlidesElement().appendChild(this.Reveal.getBackgroundsElement()), t(this.Reveal.getRevealElement(), S).forEach(e => {
        e.classList.contains("stack") || e.addEventListener("click", this.onSlideClicked, !0);
      });
      const e = 70,
        i = this.Reveal.getComputedSlideSize();
      this.overviewSlideWidth = i.width + e, this.overviewSlideHeight = i.height + e, this.Reveal.getConfig().rtl && (this.overviewSlideWidth = -this.overviewSlideWidth), this.Reveal.updateSlidesVisibility(), this.layout(), this.update(), this.Reveal.layout();
      const n = this.Reveal.getIndices();
      this.Reveal.dispatchEvent({
        type: "overviewshown",
        data: {
          indexh: n.h,
          indexv: n.v,
          currentSlide: this.Reveal.getCurrentSlide()
        }
      });
    }
  }
  layout() {
    this.Reveal.getHorizontalSlides().forEach((e, i) => {
      e.setAttribute("data-index-h", i), s(e, "translate3d(" + i * this.overviewSlideWidth + "px, 0, 0)"), e.classList.contains("stack") && t(e, "section").forEach((e, t) => {
        e.setAttribute("data-index-h", i), e.setAttribute("data-index-v", t), s(e, "translate3d(0, " + t * this.overviewSlideHeight + "px, 0)");
      });
    }), Array.from(this.Reveal.getBackgroundsElement().childNodes).forEach((e, i) => {
      s(e, "translate3d(" + i * this.overviewSlideWidth + "px, 0, 0)"), t(e, ".slide-background").forEach((e, t) => {
        s(e, "translate3d(0, " + t * this.overviewSlideHeight + "px, 0)");
      });
    });
  }
  update() {
    const e = Math.min(window.innerWidth, window.innerHeight),
      t = Math.max(e / 5, 150) / e,
      i = this.Reveal.getIndices();
    this.Reveal.transformSlides({
      overview: ["scale(" + t + ")", "translateX(" + -i.h * this.overviewSlideWidth + "px)", "translateY(" + -i.v * this.overviewSlideHeight + "px)"].join(" ")
    });
  }
  deactivate() {
    if (this.Reveal.getConfig().overview) {
      this.active = !1, this.Reveal.getRevealElement().classList.remove("overview"), this.Reveal.getRevealElement().classList.add("overview-deactivating"), setTimeout(() => {
        this.Reveal.getRevealElement().classList.remove("overview-deactivating");
      }, 1), this.Reveal.getRevealElement().appendChild(this.Reveal.getBackgroundsElement()), t(this.Reveal.getRevealElement(), S).forEach(e => {
        s(e, ""), e.removeEventListener("click", this.onSlideClicked, !0);
      }), t(this.Reveal.getBackgroundsElement(), ".slide-background").forEach(e => {
        s(e, "");
      }), this.Reveal.transformSlides({
        overview: ""
      });
      const e = this.Reveal.getIndices();
      this.Reveal.slide(e.h, e.v), this.Reveal.layout(), this.Reveal.cueAutoSlide(), this.Reveal.dispatchEvent({
        type: "overviewhidden",
        data: {
          indexh: e.h,
          indexv: e.v,
          currentSlide: this.Reveal.getCurrentSlide()
        }
      });
    }
  }
  toggle(e) {
    "boolean" == typeof e ? e ? this.activate() : this.deactivate() : this.isActive() ? this.deactivate() : this.activate();
  }
  isActive() {
    return this.active;
  }
  onSlideClicked(e) {
    if (this.isActive()) {
      e.preventDefault();
      let t = e.target;
      for (; t && !t.nodeName.match(/section/gi);) t = t.parentNode;
      if (t && !t.classList.contains("disabled") && (this.deactivate(), t.nodeName.match(/section/gi))) {
        let e = parseInt(t.getAttribute("data-index-h"), 10),
          i = parseInt(t.getAttribute("data-index-v"), 10);
        this.Reveal.slide(e, i);
      }
    }
  }
}
class I {
  constructor(e) {
    this.Reveal = e, this.shortcuts = {}, this.bindings = {}, this.onDocumentKeyDown = this.onDocumentKeyDown.bind(this), this.onDocumentKeyPress = this.onDocumentKeyPress.bind(this);
  }
  configure(e, t) {
    "linear" === e.navigationMode ? (this.shortcuts["&#8594;  ,  &#8595;  ,  SPACE  ,  N  ,  L  ,  J"] = "Next slide", this.shortcuts["&#8592;  ,  &#8593;  ,  P  ,  H  ,  K"] = "Previous slide") : (this.shortcuts["N  ,  SPACE"] = "Next slide", this.shortcuts["P  ,  Shift SPACE"] = "Previous slide", this.shortcuts["&#8592;  ,  H"] = "Navigate left", this.shortcuts["&#8594;  ,  L"] = "Navigate right", this.shortcuts["&#8593;  ,  K"] = "Navigate up", this.shortcuts["&#8595;  ,  J"] = "Navigate down"), this.shortcuts["Alt + &#8592;/&#8593/&#8594;/&#8595;"] = "Navigate without fragments", this.shortcuts["Shift + &#8592;/&#8593/&#8594;/&#8595;"] = "Jump to first/last slide", this.shortcuts["B  ,  ."] = "Pause", this.shortcuts.F = "Fullscreen", this.shortcuts.G = "Jump to slide", this.shortcuts["ESC, O"] = "Slide overview";
  }
  bind() {
    document.addEventListener("keydown", this.onDocumentKeyDown, !1), document.addEventListener("keypress", this.onDocumentKeyPress, !1);
  }
  unbind() {
    document.removeEventListener("keydown", this.onDocumentKeyDown, !1), document.removeEventListener("keypress", this.onDocumentKeyPress, !1);
  }
  addKeyBinding(e, t) {
    "object" == typeof e && e.keyCode ? this.bindings[e.keyCode] = {
      callback: t,
      key: e.key,
      description: e.description
    } : this.bindings[e] = {
      callback: t,
      key: null,
      description: null
    };
  }
  removeKeyBinding(e) {
    delete this.bindings[e];
  }
  triggerKey(e) {
    this.onDocumentKeyDown({
      keyCode: e
    });
  }
  registerKeyboardShortcut(e, t) {
    this.shortcuts[e] = t;
  }
  getShortcuts() {
    return this.shortcuts;
  }
  getBindings() {
    return this.bindings;
  }
  onDocumentKeyPress(e) {
    e.shiftKey && 63 === e.charCode && this.Reveal.toggleHelp();
  }
  onDocumentKeyDown(e) {
    let t = this.Reveal.getConfig();
    if ("function" == typeof t.keyboardCondition && !1 === t.keyboardCondition(e)) return !0;
    if ("focused" === t.keyboardCondition && !this.Reveal.isFocused()) return !0;
    let i = e.keyCode,
      n = !this.Reveal.isAutoSliding();
    this.Reveal.onUserInput(e);
    let s = document.activeElement && !0 === document.activeElement.isContentEditable,
      a = document.activeElement && document.activeElement.tagName && /input|textarea/i.test(document.activeElement.tagName),
      r = document.activeElement && document.activeElement.className && /speaker-notes/i.test(document.activeElement.className),
      o = !(-1 !== [32, 37, 38, 39, 40, 78, 80].indexOf(e.keyCode) && e.shiftKey || e.altKey) && (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey);
    if (s || a || r || o) return;
    let l,
      d = [66, 86, 190, 191];
    if ("object" == typeof t.keyboard) for (l in t.keyboard) "togglePause" === t.keyboard[l] && d.push(parseInt(l, 10));
    if (this.Reveal.isPaused() && -1 === d.indexOf(i)) return !1;
    let c = "linear" === t.navigationMode || !this.Reveal.hasHorizontalSlides() || !this.Reveal.hasVerticalSlides(),
      h = !1;
    if ("object" == typeof t.keyboard) for (l in t.keyboard) if (parseInt(l, 10) === i) {
      let i = t.keyboard[l];
      "function" == typeof i ? i.apply(null, [e]) : "string" == typeof i && "function" == typeof this.Reveal[i] && this.Reveal[i].call(), h = !0;
    }
    if (!1 === h) for (l in this.bindings) if (parseInt(l, 10) === i) {
      let t = this.bindings[l].callback;
      "function" == typeof t ? t.apply(null, [e]) : "string" == typeof t && "function" == typeof this.Reveal[t] && this.Reveal[t].call(), h = !0;
    }
    !1 === h && (h = !0, 80 === i || 33 === i ? this.Reveal.prev({
      skipFragments: e.altKey
    }) : 78 === i || 34 === i ? this.Reveal.next({
      skipFragments: e.altKey
    }) : 72 === i || 37 === i ? e.shiftKey ? this.Reveal.slide(0) : !this.Reveal.overview.isActive() && c ? this.Reveal.prev({
      skipFragments: e.altKey
    }) : this.Reveal.left({
      skipFragments: e.altKey
    }) : 76 === i || 39 === i ? e.shiftKey ? this.Reveal.slide(this.Reveal.getHorizontalSlides().length - 1) : !this.Reveal.overview.isActive() && c ? this.Reveal.next({
      skipFragments: e.altKey
    }) : this.Reveal.right({
      skipFragments: e.altKey
    }) : 75 === i || 38 === i ? e.shiftKey ? this.Reveal.slide(void 0, 0) : !this.Reveal.overview.isActive() && c ? this.Reveal.prev({
      skipFragments: e.altKey
    }) : this.Reveal.up({
      skipFragments: e.altKey
    }) : 74 === i || 40 === i ? e.shiftKey ? this.Reveal.slide(void 0, Number.MAX_VALUE) : !this.Reveal.overview.isActive() && c ? this.Reveal.next({
      skipFragments: e.altKey
    }) : this.Reveal.down({
      skipFragments: e.altKey
    }) : 36 === i ? this.Reveal.slide(0) : 35 === i ? this.Reveal.slide(this.Reveal.getHorizontalSlides().length - 1) : 32 === i ? (this.Reveal.overview.isActive() && this.Reveal.overview.deactivate(), e.shiftKey ? this.Reveal.prev({
      skipFragments: e.altKey
    }) : this.Reveal.next({
      skipFragments: e.altKey
    })) : 58 === i || 59 === i || 66 === i || 86 === i || 190 === i || 191 === i ? this.Reveal.togglePause() : 70 === i ? (e => {
      let t = (e = e || document.documentElement).requestFullscreen || e.webkitRequestFullscreen || e.webkitRequestFullScreen || e.mozRequestFullScreen || e.msRequestFullscreen;
      t && t.apply(e);
    })(t.embedded ? this.Reveal.getViewportElement() : document.documentElement) : 65 === i ? t.autoSlideStoppable && this.Reveal.toggleAutoSlide(n) : 71 === i ? t.jumpToSlide && this.Reveal.toggleJumpToSlide() : h = !1), h ? e.preventDefault && e.preventDefault() : 27 !== i && 79 !== i || (!1 === this.Reveal.closeOverlay() && this.Reveal.overview.toggle(), e.preventDefault && e.preventDefault()), this.Reveal.cueAutoSlide();
  }
}
class D {
  constructor(e) {
    var t, i, n;
    n = 1e3, (i = "MAX_REPLACE_STATE_FREQUENCY") in (t = this) ? Object.defineProperty(t, i, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[i] = n, this.Reveal = e, this.writeURLTimeout = 0, this.replaceStateTimestamp = 0, this.onWindowHashChange = this.onWindowHashChange.bind(this);
  }
  bind() {
    window.addEventListener("hashchange", this.onWindowHashChange, !1);
  }
  unbind() {
    window.removeEventListener("hashchange", this.onWindowHashChange, !1);
  }
  getIndicesFromHash(e = window.location.hash, t = {}) {
    let i = e.replace(/^#\/?/, ""),
      n = i.split("/");
    if (/^[0-9]*$/.test(n[0]) || !i.length) {
      const e = this.Reveal.getConfig();
      let i,
        s = e.hashOneBasedIndex || t.oneBasedIndex ? 1 : 0,
        a = parseInt(n[0], 10) - s || 0,
        r = parseInt(n[1], 10) - s || 0;
      return e.fragmentInURL && (i = parseInt(n[2], 10), isNaN(i) && (i = void 0)), {
        h: a,
        v: r,
        f: i
      };
    }
    {
      let e, t;
      /\/[-\d]+$/g.test(i) && (t = parseInt(i.split("/").pop(), 10), t = isNaN(t) ? void 0 : t, i = i.split("/").shift());
      try {
        e = document.getElementById(decodeURIComponent(i));
      } catch (e) {}
      if (e) return {
        ...this.Reveal.getIndices(e),
        f: t
      };
    }
    return null;
  }
  readURL() {
    const e = this.Reveal.getIndices(),
      t = this.getIndicesFromHash();
    t ? t.h === e.h && t.v === e.v && void 0 === t.f || this.Reveal.slide(t.h, t.v, t.f) : this.Reveal.slide(e.h || 0, e.v || 0);
  }
  writeURL(e) {
    let t = this.Reveal.getConfig(),
      i = this.Reveal.getCurrentSlide();
    if (clearTimeout(this.writeURLTimeout), "number" == typeof e) this.writeURLTimeout = setTimeout(this.writeURL, e);else if (i) {
      let e = this.getHash();
      t.history ? window.location.hash = e : t.hash && ("/" === e ? this.debouncedReplaceState(window.location.pathname + window.location.search) : this.debouncedReplaceState("#" + e));
    }
  }
  replaceState(e) {
    window.history.replaceState(null, null, e), this.replaceStateTimestamp = Date.now();
  }
  debouncedReplaceState(e) {
    clearTimeout(this.replaceStateTimeout), Date.now() - this.replaceStateTimestamp > this.MAX_REPLACE_STATE_FREQUENCY ? this.replaceState(e) : this.replaceStateTimeout = setTimeout(() => this.replaceState(e), this.MAX_REPLACE_STATE_FREQUENCY);
  }
  getHash(e) {
    let t = "/",
      i = e || this.Reveal.getCurrentSlide(),
      n = i ? i.getAttribute("id") : null;
    n && (n = encodeURIComponent(n));
    let s = this.Reveal.getIndices(e);
    if (this.Reveal.getConfig().fragmentInURL || (s.f = void 0), "string" == typeof n && n.length) t = "/" + n, s.f >= 0 && (t += "/" + s.f);else {
      let e = this.Reveal.getConfig().hashOneBasedIndex ? 1 : 0;
      (s.h > 0 || s.v > 0 || s.f >= 0) && (t += s.h + e), (s.v > 0 || s.f >= 0) && (t += "/" + (s.v + e)), s.f >= 0 && (t += "/" + s.f);
    }
    return t;
  }
  onWindowHashChange(e) {
    this.readURL();
  }
}
class T {
  constructor(e) {
    this.Reveal = e, this.onNavigateLeftClicked = this.onNavigateLeftClicked.bind(this), this.onNavigateRightClicked = this.onNavigateRightClicked.bind(this), this.onNavigateUpClicked = this.onNavigateUpClicked.bind(this), this.onNavigateDownClicked = this.onNavigateDownClicked.bind(this), this.onNavigatePrevClicked = this.onNavigatePrevClicked.bind(this), this.onNavigateNextClicked = this.onNavigateNextClicked.bind(this);
  }
  render() {
    const e = this.Reveal.getConfig().rtl,
      i = this.Reveal.getRevealElement();
    this.element = document.createElement("aside"), this.element.className = "controls", this.element.innerHTML = `<button class="navigate-left" aria-label="${e ? "next slide" : "previous slide"}"><div class="controls-arrow"></div></button>\n\t\t\t<button class="navigate-right" aria-label="${e ? "previous slide" : "next slide"}"><div class="controls-arrow"></div></button>\n\t\t\t<button class="navigate-up" aria-label="above slide"><div class="controls-arrow"></div></button>\n\t\t\t<button class="navigate-down" aria-label="below slide"><div class="controls-arrow"></div></button>`, this.Reveal.getRevealElement().appendChild(this.element), this.controlsLeft = t(i, ".navigate-left"), this.controlsRight = t(i, ".navigate-right"), this.controlsUp = t(i, ".navigate-up"), this.controlsDown = t(i, ".navigate-down"), this.controlsPrev = t(i, ".navigate-prev"), this.controlsNext = t(i, ".navigate-next"), this.controlsRightArrow = this.element.querySelector(".navigate-right"), this.controlsLeftArrow = this.element.querySelector(".navigate-left"), this.controlsDownArrow = this.element.querySelector(".navigate-down");
  }
  configure(e, t) {
    this.element.style.display = e.controls ? "block" : "none", this.element.setAttribute("data-controls-layout", e.controlsLayout), this.element.setAttribute("data-controls-back-arrows", e.controlsBackArrows);
  }
  bind() {
    let e = ["touchstart", "click"];
    v && (e = ["touchstart"]), e.forEach(e => {
      this.controlsLeft.forEach(t => t.addEventListener(e, this.onNavigateLeftClicked, !1)), this.controlsRight.forEach(t => t.addEventListener(e, this.onNavigateRightClicked, !1)), this.controlsUp.forEach(t => t.addEventListener(e, this.onNavigateUpClicked, !1)), this.controlsDown.forEach(t => t.addEventListener(e, this.onNavigateDownClicked, !1)), this.controlsPrev.forEach(t => t.addEventListener(e, this.onNavigatePrevClicked, !1)), this.controlsNext.forEach(t => t.addEventListener(e, this.onNavigateNextClicked, !1));
    });
  }
  unbind() {
    ["touchstart", "click"].forEach(e => {
      this.controlsLeft.forEach(t => t.removeEventListener(e, this.onNavigateLeftClicked, !1)), this.controlsRight.forEach(t => t.removeEventListener(e, this.onNavigateRightClicked, !1)), this.controlsUp.forEach(t => t.removeEventListener(e, this.onNavigateUpClicked, !1)), this.controlsDown.forEach(t => t.removeEventListener(e, this.onNavigateDownClicked, !1)), this.controlsPrev.forEach(t => t.removeEventListener(e, this.onNavigatePrevClicked, !1)), this.controlsNext.forEach(t => t.removeEventListener(e, this.onNavigateNextClicked, !1));
    });
  }
  update() {
    let e = this.Reveal.availableRoutes();
    [...this.controlsLeft, ...this.controlsRight, ...this.controlsUp, ...this.controlsDown, ...this.controlsPrev, ...this.controlsNext].forEach(e => {
      e.classList.remove("enabled", "fragmented"), e.setAttribute("disabled", "disabled");
    }), e.left && this.controlsLeft.forEach(e => {
      e.classList.add("enabled"), e.removeAttribute("disabled");
    }), e.right && this.controlsRight.forEach(e => {
      e.classList.add("enabled"), e.removeAttribute("disabled");
    }), e.up && this.controlsUp.forEach(e => {
      e.classList.add("enabled"), e.removeAttribute("disabled");
    }), e.down && this.controlsDown.forEach(e => {
      e.classList.add("enabled"), e.removeAttribute("disabled");
    }), (e.left || e.up) && this.controlsPrev.forEach(e => {
      e.classList.add("enabled"), e.removeAttribute("disabled");
    }), (e.right || e.down) && this.controlsNext.forEach(e => {
      e.classList.add("enabled"), e.removeAttribute("disabled");
    });
    let t = this.Reveal.getCurrentSlide();
    if (t) {
      let e = this.Reveal.fragments.availableRoutes();
      e.prev && this.controlsPrev.forEach(e => {
        e.classList.add("fragmented", "enabled"), e.removeAttribute("disabled");
      }), e.next && this.controlsNext.forEach(e => {
        e.classList.add("fragmented", "enabled"), e.removeAttribute("disabled");
      }), this.Reveal.isVerticalSlide(t) ? (e.prev && this.controlsUp.forEach(e => {
        e.classList.add("fragmented", "enabled"), e.removeAttribute("disabled");
      }), e.next && this.controlsDown.forEach(e => {
        e.classList.add("fragmented", "enabled"), e.removeAttribute("disabled");
      })) : (e.prev && this.controlsLeft.forEach(e => {
        e.classList.add("fragmented", "enabled"), e.removeAttribute("disabled");
      }), e.next && this.controlsRight.forEach(e => {
        e.classList.add("fragmented", "enabled"), e.removeAttribute("disabled");
      }));
    }
    if (this.Reveal.getConfig().controlsTutorial) {
      let t = this.Reveal.getIndices();
      !this.Reveal.hasNavigatedVertically() && e.down ? this.controlsDownArrow.classList.add("highlight") : (this.controlsDownArrow.classList.remove("highlight"), this.Reveal.getConfig().rtl ? !this.Reveal.hasNavigatedHorizontally() && e.left && 0 === t.v ? this.controlsLeftArrow.classList.add("highlight") : this.controlsLeftArrow.classList.remove("highlight") : !this.Reveal.hasNavigatedHorizontally() && e.right && 0 === t.v ? this.controlsRightArrow.classList.add("highlight") : this.controlsRightArrow.classList.remove("highlight"));
    }
  }
  destroy() {
    this.unbind(), this.element.remove();
  }
  onNavigateLeftClicked(e) {
    e.preventDefault(), this.Reveal.onUserInput(), "linear" === this.Reveal.getConfig().navigationMode ? this.Reveal.prev() : this.Reveal.left();
  }
  onNavigateRightClicked(e) {
    e.preventDefault(), this.Reveal.onUserInput(), "linear" === this.Reveal.getConfig().navigationMode ? this.Reveal.next() : this.Reveal.right();
  }
  onNavigateUpClicked(e) {
    e.preventDefault(), this.Reveal.onUserInput(), this.Reveal.up();
  }
  onNavigateDownClicked(e) {
    e.preventDefault(), this.Reveal.onUserInput(), this.Reveal.down();
  }
  onNavigatePrevClicked(e) {
    e.preventDefault(), this.Reveal.onUserInput(), this.Reveal.prev();
  }
  onNavigateNextClicked(e) {
    e.preventDefault(), this.Reveal.onUserInput(), this.Reveal.next();
  }
}
class F {
  constructor(e) {
    this.Reveal = e, this.onProgressClicked = this.onProgressClicked.bind(this);
  }
  render() {
    this.element = document.createElement("div"), this.element.className = "progress", this.Reveal.getRevealElement().appendChild(this.element), this.bar = document.createElement("span"), this.element.appendChild(this.bar);
  }
  configure(e, t) {
    this.element.style.display = e.progress ? "block" : "none";
  }
  bind() {
    this.Reveal.getConfig().progress && this.element && this.element.addEventListener("click", this.onProgressClicked, !1);
  }
  unbind() {
    this.Reveal.getConfig().progress && this.element && this.element.removeEventListener("click", this.onProgressClicked, !1);
  }
  update() {
    if (this.Reveal.getConfig().progress && this.bar) {
      let e = this.Reveal.getProgress();
      this.Reveal.getTotalSlides() < 2 && (e = 0), this.bar.style.transform = "scaleX(" + e + ")";
    }
  }
  getMaxWidth() {
    return this.Reveal.getRevealElement().offsetWidth;
  }
  onProgressClicked(e) {
    this.Reveal.onUserInput(e), e.preventDefault();
    let t = this.Reveal.getSlides(),
      i = t.length,
      n = Math.floor(e.clientX / this.getMaxWidth() * i);
    this.Reveal.getConfig().rtl && (n = i - n);
    let s = this.Reveal.getIndices(t[n]);
    this.Reveal.slide(s.h, s.v);
  }
  destroy() {
    this.element.remove();
  }
}
class z {
  constructor(e) {
    this.Reveal = e, this.lastMouseWheelStep = 0, this.cursorHidden = !1, this.cursorInactiveTimeout = 0, this.onDocumentCursorActive = this.onDocumentCursorActive.bind(this), this.onDocumentMouseScroll = this.onDocumentMouseScroll.bind(this);
  }
  configure(e, t) {
    e.mouseWheel ? (document.addEventListener("DOMMouseScroll", this.onDocumentMouseScroll, !1), document.addEventListener("mousewheel", this.onDocumentMouseScroll, !1)) : (document.removeEventListener("DOMMouseScroll", this.onDocumentMouseScroll, !1), document.removeEventListener("mousewheel", this.onDocumentMouseScroll, !1)), e.hideInactiveCursor ? (document.addEventListener("mousemove", this.onDocumentCursorActive, !1), document.addEventListener("mousedown", this.onDocumentCursorActive, !1)) : (this.showCursor(), document.removeEventListener("mousemove", this.onDocumentCursorActive, !1), document.removeEventListener("mousedown", this.onDocumentCursorActive, !1));
  }
  showCursor() {
    this.cursorHidden && (this.cursorHidden = !1, this.Reveal.getRevealElement().style.cursor = "");
  }
  hideCursor() {
    !1 === this.cursorHidden && (this.cursorHidden = !0, this.Reveal.getRevealElement().style.cursor = "none");
  }
  destroy() {
    this.showCursor(), document.removeEventListener("DOMMouseScroll", this.onDocumentMouseScroll, !1), document.removeEventListener("mousewheel", this.onDocumentMouseScroll, !1), document.removeEventListener("mousemove", this.onDocumentCursorActive, !1), document.removeEventListener("mousedown", this.onDocumentCursorActive, !1);
  }
  onDocumentCursorActive(e) {
    this.showCursor(), clearTimeout(this.cursorInactiveTimeout), this.cursorInactiveTimeout = setTimeout(this.hideCursor.bind(this), this.Reveal.getConfig().hideCursorTime);
  }
  onDocumentMouseScroll(e) {
    if (Date.now() - this.lastMouseWheelStep > 1e3) {
      this.lastMouseWheelStep = Date.now();
      let t = e.detail || -e.wheelDelta;
      t > 0 ? this.Reveal.next() : t < 0 && this.Reveal.prev();
    }
  }
}
const H = (e, t) => {
  const i = document.createElement("script");
  i.type = "text/javascript", i.async = !1, i.defer = !1, i.src = e, "function" == typeof t && (i.onload = i.onreadystatechange = e => {
    ("load" === e.type || /loaded|complete/.test(i.readyState)) && (i.onload = i.onreadystatechange = i.onerror = null, t());
  }, i.onerror = e => {
    i.onload = i.onreadystatechange = i.onerror = null, t(new Error("Failed loading script: " + i.src + "\n" + e));
  });
  const n = document.querySelector("head");
  n.insertBefore(i, n.lastChild);
};
class B {
  constructor(e) {
    this.Reveal = e, this.state = "idle", this.registeredPlugins = {}, this.asyncDependencies = [];
  }
  load(e, t) {
    return this.state = "loading", e.forEach(this.registerPlugin.bind(this)), new Promise(e => {
      let i = [],
        n = 0;
      if (t.forEach(e => {
        e.condition && !e.condition() || (e.async ? this.asyncDependencies.push(e) : i.push(e));
      }), i.length) {
        n = i.length;
        const t = t => {
          t && "function" == typeof t.callback && t.callback(), 0 == --n && this.initPlugins().then(e);
        };
        i.forEach(e => {
          "string" == typeof e.id ? (this.registerPlugin(e), t(e)) : "string" == typeof e.src ? H(e.src, () => t(e)) : (console.warn("Unrecognized plugin format", e), t());
        });
      } else this.initPlugins().then(e);
    });
  }
  initPlugins() {
    return new Promise(e => {
      let t = Object.values(this.registeredPlugins),
        i = t.length;
      if (0 === i) this.loadAsync().then(e);else {
        let n,
          s = () => {
            0 == --i ? this.loadAsync().then(e) : n();
          },
          a = 0;
        n = () => {
          let e = t[a++];
          if ("function" == typeof e.init) {
            let t = e.init(this.Reveal);
            t && "function" == typeof t.then ? t.then(s) : s();
          } else s();
        }, n();
      }
    });
  }
  loadAsync() {
    return this.state = "loaded", this.asyncDependencies.length && this.asyncDependencies.forEach(e => {
      H(e.src, e.callback);
    }), Promise.resolve();
  }
  registerPlugin(e) {
    2 === arguments.length && "string" == typeof arguments[0] ? (e = arguments[1]).id = arguments[0] : "function" == typeof e && (e = e());
    let t = e.id;
    "string" != typeof t ? console.warn("Unrecognized plugin format; can't find plugin.id", e) : void 0 === this.registeredPlugins[t] ? (this.registeredPlugins[t] = e, "loaded" === this.state && "function" == typeof e.init && e.init(this.Reveal)) : console.warn('reveal.js: "' + t + '" plugin has already been registered');
  }
  hasPlugin(e) {
    return !!this.registeredPlugins[e];
  }
  getPlugin(e) {
    return this.registeredPlugins[e];
  }
  getRegisteredPlugins() {
    return this.registeredPlugins;
  }
  destroy() {
    Object.values(this.registeredPlugins).forEach(e => {
      "function" == typeof e.destroy && e.destroy();
    }), this.registeredPlugins = {}, this.asyncDependencies = [];
  }
}
class O {
  constructor(e) {
    this.Reveal = e;
  }
  async setupPDF() {
    const e = this.Reveal.getConfig(),
      i = t(this.Reveal.getRevealElement(), S),
      n = e.slideNumber && /all|print/i.test(e.showSlideNumber),
      s = this.Reveal.getComputedSlideSize(window.innerWidth, window.innerHeight),
      a = Math.floor(s.width * (1 + e.margin)),
      r = Math.floor(s.height * (1 + e.margin)),
      o = s.width,
      d = s.height;
    await new Promise(requestAnimationFrame), l("@page{size:" + a + "px " + r + "px; margin: 0px;}"), l(".reveal section>img, .reveal section>video, .reveal section>iframe{max-width: " + o + "px; max-height:" + d + "px}"), document.documentElement.classList.add("print-pdf"), document.body.style.width = a + "px", document.body.style.height = r + "px";
    const c = document.querySelector(".reveal-viewport");
    let h;
    if (c) {
      const e = window.getComputedStyle(c);
      e && e.background && (h = e.background);
    }
    await new Promise(requestAnimationFrame), this.Reveal.layoutSlideContents(o, d), await new Promise(requestAnimationFrame);
    const u = i.map(e => e.scrollHeight),
      g = [],
      v = i[0].parentNode;
    let p = 1;
    i.forEach(function (i, s) {
      if (!1 === i.classList.contains("stack")) {
        let l = (a - o) / 2,
          c = (r - d) / 2;
        const v = u[s];
        let m = Math.max(Math.ceil(v / r), 1);
        m = Math.min(m, e.pdfMaxPagesPerSlide), (1 === m && e.center || i.classList.contains("center")) && (c = Math.max((r - v) / 2, 0));
        const f = document.createElement("div");
        if (g.push(f), f.className = "pdf-page", f.style.height = (r + e.pdfPageHeightOffset) * m + "px", h && (f.style.background = h), f.appendChild(i), i.style.left = l + "px", i.style.top = c + "px", i.style.width = o + "px", this.Reveal.slideContent.layout(i), i.slideBackgroundElement && f.insertBefore(i.slideBackgroundElement, i), e.showNotes) {
          const t = this.Reveal.getSlideNotes(i);
          if (t) {
            const i = 8,
              n = "string" == typeof e.showNotes ? e.showNotes : "inline",
              s = document.createElement("div");
            s.classList.add("speaker-notes"), s.classList.add("speaker-notes-pdf"), s.setAttribute("data-layout", n), s.innerHTML = t, "separate-page" === n ? g.push(s) : (s.style.left = i + "px", s.style.bottom = i + "px", s.style.width = a - 2 * i + "px", f.appendChild(s));
          }
        }
        if (n) {
          const e = document.createElement("div");
          e.classList.add("slide-number"), e.classList.add("slide-number-pdf"), e.innerHTML = p++, f.appendChild(e);
        }
        if (e.pdfSeparateFragments) {
          const e = this.Reveal.fragments.sort(f.querySelectorAll(".fragment"), !0);
          let t;
          e.forEach(function (e, i) {
            t && t.forEach(function (e) {
              e.classList.remove("current-fragment");
            }), e.forEach(function (e) {
              e.classList.add("visible", "current-fragment");
            }, this);
            const s = f.cloneNode(!0);
            if (n) {
              const e = i + 1;
              s.querySelector(".slide-number-pdf").innerHTML += "." + e;
            }
            g.push(s), t = e;
          }, this), e.forEach(function (e) {
            e.forEach(function (e) {
              e.classList.remove("visible", "current-fragment");
            });
          });
        } else t(f, ".fragment:not(.fade-out)").forEach(function (e) {
          e.classList.add("visible");
        });
      }
    }, this), await new Promise(requestAnimationFrame), g.forEach(e => v.appendChild(e)), this.Reveal.slideContent.layout(this.Reveal.getSlidesElement()), this.Reveal.dispatchEvent({
      type: "pdf-ready"
    });
  }
  isPrintingPDF() {
    return /print-pdf/gi.test(window.location.search);
  }
}
class q {
  constructor(e) {
    this.Reveal = e, this.touchStartX = 0, this.touchStartY = 0, this.touchStartCount = 0, this.touchCaptured = !1, this.onPointerDown = this.onPointerDown.bind(this), this.onPointerMove = this.onPointerMove.bind(this), this.onPointerUp = this.onPointerUp.bind(this), this.onTouchStart = this.onTouchStart.bind(this), this.onTouchMove = this.onTouchMove.bind(this), this.onTouchEnd = this.onTouchEnd.bind(this);
  }
  bind() {
    let e = this.Reveal.getRevealElement();
    "onpointerdown" in window ? (e.addEventListener("pointerdown", this.onPointerDown, !1), e.addEventListener("pointermove", this.onPointerMove, !1), e.addEventListener("pointerup", this.onPointerUp, !1)) : window.navigator.msPointerEnabled ? (e.addEventListener("MSPointerDown", this.onPointerDown, !1), e.addEventListener("MSPointerMove", this.onPointerMove, !1), e.addEventListener("MSPointerUp", this.onPointerUp, !1)) : (e.addEventListener("touchstart", this.onTouchStart, !1), e.addEventListener("touchmove", this.onTouchMove, !1), e.addEventListener("touchend", this.onTouchEnd, !1));
  }
  unbind() {
    let e = this.Reveal.getRevealElement();
    e.removeEventListener("pointerdown", this.onPointerDown, !1), e.removeEventListener("pointermove", this.onPointerMove, !1), e.removeEventListener("pointerup", this.onPointerUp, !1), e.removeEventListener("MSPointerDown", this.onPointerDown, !1), e.removeEventListener("MSPointerMove", this.onPointerMove, !1), e.removeEventListener("MSPointerUp", this.onPointerUp, !1), e.removeEventListener("touchstart", this.onTouchStart, !1), e.removeEventListener("touchmove", this.onTouchMove, !1), e.removeEventListener("touchend", this.onTouchEnd, !1);
  }
  isSwipePrevented(e) {
    if (a(e, "video, audio")) return !0;
    for (; e && "function" == typeof e.hasAttribute;) {
      if (e.hasAttribute("data-prevent-swipe")) return !0;
      e = e.parentNode;
    }
    return !1;
  }
  onTouchStart(e) {
    if (this.isSwipePrevented(e.target)) return !0;
    this.touchStartX = e.touches[0].clientX, this.touchStartY = e.touches[0].clientY, this.touchStartCount = e.touches.length;
  }
  onTouchMove(e) {
    if (this.isSwipePrevented(e.target)) return !0;
    let t = this.Reveal.getConfig();
    if (this.touchCaptured) v && e.preventDefault();else {
      this.Reveal.onUserInput(e);
      let i = e.touches[0].clientX,
        n = e.touches[0].clientY;
      if (1 === e.touches.length && 2 !== this.touchStartCount) {
        let s = this.Reveal.availableRoutes({
            includeFragments: !0
          }),
          a = i - this.touchStartX,
          r = n - this.touchStartY;
        a > 40 && Math.abs(a) > Math.abs(r) ? (this.touchCaptured = !0, "linear" === t.navigationMode ? t.rtl ? this.Reveal.next() : this.Reveal.prev() : this.Reveal.left()) : a < -40 && Math.abs(a) > Math.abs(r) ? (this.touchCaptured = !0, "linear" === t.navigationMode ? t.rtl ? this.Reveal.prev() : this.Reveal.next() : this.Reveal.right()) : r > 40 && s.up ? (this.touchCaptured = !0, "linear" === t.navigationMode ? this.Reveal.prev() : this.Reveal.up()) : r < -40 && s.down && (this.touchCaptured = !0, "linear" === t.navigationMode ? this.Reveal.next() : this.Reveal.down()), t.embedded ? (this.touchCaptured || this.Reveal.isVerticalSlide()) && e.preventDefault() : e.preventDefault();
      }
    }
  }
  onTouchEnd(e) {
    this.touchCaptured = !1;
  }
  onPointerDown(e) {
    e.pointerType !== e.MSPOINTER_TYPE_TOUCH && "touch" !== e.pointerType || (e.touches = [{
      clientX: e.clientX,
      clientY: e.clientY
    }], this.onTouchStart(e));
  }
  onPointerMove(e) {
    e.pointerType !== e.MSPOINTER_TYPE_TOUCH && "touch" !== e.pointerType || (e.touches = [{
      clientX: e.clientX,
      clientY: e.clientY
    }], this.onTouchMove(e));
  }
  onPointerUp(e) {
    e.pointerType !== e.MSPOINTER_TYPE_TOUCH && "touch" !== e.pointerType || (e.touches = [{
      clientX: e.clientX,
      clientY: e.clientY
    }], this.onTouchEnd(e));
  }
}
const U = "focus",
  j = "blur";
class W {
  constructor(e) {
    this.Reveal = e, this.onRevealPointerDown = this.onRevealPointerDown.bind(this), this.onDocumentPointerDown = this.onDocumentPointerDown.bind(this);
  }
  configure(e, t) {
    e.embedded ? this.blur() : (this.focus(), this.unbind());
  }
  bind() {
    this.Reveal.getConfig().embedded && this.Reveal.getRevealElement().addEventListener("pointerdown", this.onRevealPointerDown, !1);
  }
  unbind() {
    this.Reveal.getRevealElement().removeEventListener("pointerdown", this.onRevealPointerDown, !1), document.removeEventListener("pointerdown", this.onDocumentPointerDown, !1);
  }
  focus() {
    this.state !== U && (this.Reveal.getRevealElement().classList.add("focused"), document.addEventListener("pointerdown", this.onDocumentPointerDown, !1)), this.state = U;
  }
  blur() {
    this.state !== j && (this.Reveal.getRevealElement().classList.remove("focused"), document.removeEventListener("pointerdown", this.onDocumentPointerDown, !1)), this.state = j;
  }
  isFocused() {
    return this.state === U;
  }
  destroy() {
    this.Reveal.getRevealElement().classList.remove("focused");
  }
  onRevealPointerDown(e) {
    this.focus();
  }
  onDocumentPointerDown(e) {
    let t = r(e.target, ".reveal");
    t && t === this.Reveal.getRevealElement() || this.blur();
  }
}
class K {
  constructor(e) {
    this.Reveal = e;
  }
  render() {
    this.element = document.createElement("div"), this.element.className = "speaker-notes", this.element.setAttribute("data-prevent-swipe", ""), this.element.setAttribute("tabindex", "0"), this.Reveal.getRevealElement().appendChild(this.element);
  }
  configure(e, t) {
    e.showNotes && this.element.setAttribute("data-layout", "string" == typeof e.showNotes ? e.showNotes : "inline");
  }
  update() {
    this.Reveal.getConfig().showNotes && this.element && this.Reveal.getCurrentSlide() && !this.Reveal.print.isPrintingPDF() && (this.element.innerHTML = this.getSlideNotes() || '<span class="notes-placeholder">No notes on this slide.</span>');
  }
  updateVisibility() {
    this.Reveal.getConfig().showNotes && this.hasNotes() && !this.Reveal.print.isPrintingPDF() ? this.Reveal.getRevealElement().classList.add("show-notes") : this.Reveal.getRevealElement().classList.remove("show-notes");
  }
  hasNotes() {
    return this.Reveal.getSlidesElement().querySelectorAll("[data-notes], aside.notes").length > 0;
  }
  isSpeakerNotesWindow() {
    return !!window.location.search.match(/receiver/gi);
  }
  getSlideNotes(e = this.Reveal.getCurrentSlide()) {
    if (e.hasAttribute("data-notes")) return e.getAttribute("data-notes");
    let t = e.querySelectorAll("aside.notes");
    return t ? Array.from(t).map(e => e.innerHTML).join("\n") : null;
  }
  destroy() {
    this.element.remove();
  }
}
class V {
  constructor(e, t) {
    this.diameter = 100, this.diameter2 = this.diameter / 2, this.thickness = 6, this.playing = !1, this.progress = 0, this.progressOffset = 1, this.container = e, this.progressCheck = t, this.canvas = document.createElement("canvas"), this.canvas.className = "playback", this.canvas.width = this.diameter, this.canvas.height = this.diameter, this.canvas.style.width = this.diameter2 + "px", this.canvas.style.height = this.diameter2 + "px", this.context = this.canvas.getContext("2d"), this.container.appendChild(this.canvas), this.render();
  }
  setPlaying(e) {
    const t = this.playing;
    this.playing = e, !t && this.playing ? this.animate() : this.render();
  }
  animate() {
    const e = this.progress;
    this.progress = this.progressCheck(), e > .8 && this.progress < .2 && (this.progressOffset = this.progress), this.render(), this.playing && requestAnimationFrame(this.animate.bind(this));
  }
  render() {
    let e = this.playing ? this.progress : 0,
      t = this.diameter2 - this.thickness,
      i = this.diameter2,
      n = this.diameter2,
      s = 28;
    this.progressOffset += .1 * (1 - this.progressOffset);
    const a = -Math.PI / 2 + e * (2 * Math.PI),
      r = -Math.PI / 2 + this.progressOffset * (2 * Math.PI);
    this.context.save(), this.context.clearRect(0, 0, this.diameter, this.diameter), this.context.beginPath(), this.context.arc(i, n, t + 4, 0, 2 * Math.PI, !1), this.context.fillStyle = "rgba( 0, 0, 0, 0.4 )", this.context.fill(), this.context.beginPath(), this.context.arc(i, n, t, 0, 2 * Math.PI, !1), this.context.lineWidth = this.thickness, this.context.strokeStyle = "rgba( 255, 255, 255, 0.2 )", this.context.stroke(), this.playing && (this.context.beginPath(), this.context.arc(i, n, t, r, a, !1), this.context.lineWidth = this.thickness, this.context.strokeStyle = "#fff", this.context.stroke()), this.context.translate(i - 14, n - 14), this.playing ? (this.context.fillStyle = "#fff", this.context.fillRect(0, 0, 10, s), this.context.fillRect(18, 0, 10, s)) : (this.context.beginPath(), this.context.translate(4, 0), this.context.moveTo(0, 0), this.context.lineTo(24, 14), this.context.lineTo(0, s), this.context.fillStyle = "#fff", this.context.fill()), this.context.restore();
  }
  on(e, t) {
    this.canvas.addEventListener(e, t, !1);
  }
  off(e, t) {
    this.canvas.removeEventListener(e, t, !1);
  }
  destroy() {
    this.playing = !1, this.canvas.parentNode && this.container.removeChild(this.canvas);
  }
}
var $ = {
  width: 960,
  height: 700,
  margin: .04,
  minScale: .2,
  maxScale: 2,
  controls: !0,
  controlsTutorial: !0,
  controlsLayout: "bottom-right",
  controlsBackArrows: "faded",
  progress: !0,
  slideNumber: !1,
  showSlideNumber: "all",
  hashOneBasedIndex: !1,
  hash: !1,
  respondToHashChanges: !0,
  jumpToSlide: !0,
  history: !1,
  keyboard: !0,
  keyboardCondition: null,
  disableLayout: !1,
  overview: !0,
  center: !0,
  touch: !0,
  loop: !1,
  rtl: !1,
  navigationMode: "default",
  shuffle: !1,
  fragments: !0,
  fragmentInURL: !0,
  embedded: !1,
  help: !0,
  pause: !0,
  showNotes: !1,
  showHiddenSlides: !1,
  autoPlayMedia: null,
  preloadIframes: null,
  autoAnimate: !0,
  autoAnimateMatcher: null,
  autoAnimateEasing: "ease",
  autoAnimateDuration: 1,
  autoAnimateUnmatched: !0,
  autoAnimateStyles: ["opacity", "color", "background-color", "padding", "font-size", "line-height", "letter-spacing", "border-width", "border-color", "border-radius", "outline", "outline-offset"],
  autoSlide: 0,
  autoSlideStoppable: !0,
  autoSlideMethod: null,
  defaultTiming: null,
  mouseWheel: !1,
  previewLinks: !1,
  postMessage: !0,
  postMessageEvents: !1,
  focusBodyOnPageVisibilityChange: !0,
  transition: "slide",
  transitionSpeed: "default",
  backgroundTransition: "fade",
  parallaxBackgroundImage: "",
  parallaxBackgroundSize: "",
  parallaxBackgroundRepeat: "",
  parallaxBackgroundPosition: "",
  parallaxBackgroundHorizontal: null,
  parallaxBackgroundVertical: null,
  pdfMaxPagesPerSlide: Number.POSITIVE_INFINITY,
  pdfSeparateFragments: !0,
  pdfPageHeightOffset: -1,
  viewDistance: 3,
  mobileViewDistance: 2,
  display: "block",
  hideInactiveCursor: !0,
  hideCursorTime: 5e3,
  sortFragmentsOnSync: !0,
  dependencies: [],
  plugins: []
};
const X = "4.5.0";
function Y(a, l) {
  arguments.length < 2 && (l = arguments[0], a = document.querySelector(".reveal"));
  const h = {};
  let u,
    v,
    p,
    m,
    f,
    E = {},
    C = !1,
    x = {
      hasNavigatedHorizontally: !1,
      hasNavigatedVertically: !1
    },
    H = [],
    U = 1,
    j = {
      layout: "",
      overview: ""
    },
    Y = {},
    _ = "idle",
    J = 0,
    G = 0,
    Q = -1,
    Z = !1,
    ee = new b(h),
    te = new y(h),
    ie = new w(h),
    ne = new P(h),
    se = new R(h),
    ae = new N(h),
    re = new M(h),
    oe = new I(h),
    le = new D(h),
    de = new T(h),
    ce = new F(h),
    he = new z(h),
    ue = new B(h),
    ge = new O(h),
    ve = new W(h),
    pe = new q(h),
    me = new K(h);
  function fe(e) {
    if (!a) throw 'Unable to find presentation root (<div class="reveal">).';
    if (Y.wrapper = a, Y.slides = a.querySelector(".slides"), !Y.slides) throw 'Unable to find slides container (<div class="slides">).';
    return E = {
      ...$,
      ...E,
      ...l,
      ...e,
      ...d()
    }, be(), window.addEventListener("load", We, !1), ue.load(E.plugins, E.dependencies).then(ye), new Promise(e => h.on("ready", e));
  }
  function be() {
    !0 === E.embedded ? Y.viewport = r(a, ".reveal-viewport") || a : (Y.viewport = document.body, document.documentElement.classList.add("reveal-full-page")), Y.viewport.classList.add("reveal-viewport");
  }
  function ye() {
    C = !0, we(), Ee(), Ce(), ke(), Le(), lt(), xe(), le.readURL(), se.update(!0), setTimeout(() => {
      Y.slides.classList.remove("no-transition"), Y.wrapper.classList.add("ready"), Fe({
        type: "ready",
        data: {
          indexh: u,
          indexv: v,
          currentSlide: m
        }
      });
    }, 1), ge.isPrintingPDF() && (Ne(), "complete" === document.readyState ? ge.setupPDF() : window.addEventListener("load", () => {
      ge.setupPDF();
    }));
  }
  function we() {
    E.showHiddenSlides || t(Y.wrapper, 'section[data-visibility="hidden"]').forEach(e => {
      e.parentNode.removeChild(e);
    });
  }
  function Ee() {
    Y.slides.classList.add("no-transition"), g ? Y.wrapper.classList.add("no-hover") : Y.wrapper.classList.remove("no-hover"), se.render(), te.render(), ie.render(), de.render(), ce.render(), me.render(), Y.pauseOverlay = o(Y.wrapper, "div", "pause-overlay", E.controls ? '<button class="resume-button">Resume presentation</button>' : null), Y.statusElement = Re(), Y.wrapper.setAttribute("role", "application");
  }
  function Re() {
    let e = Y.wrapper.querySelector(".aria-status");
    return e || (e = document.createElement("div"), e.style.position = "absolute", e.style.height = "1px", e.style.width = "1px", e.style.overflow = "hidden", e.style.clip = "rect( 1px, 1px, 1px, 1px )", e.classList.add("aria-status"), e.setAttribute("aria-live", "polite"), e.setAttribute("aria-atomic", "true"), Y.wrapper.appendChild(e)), e;
  }
  function Se(e) {
    Y.statusElement.textContent = e;
  }
  function Ae(e) {
    let t = "";
    if (3 === e.nodeType) t += e.textContent;else if (1 === e.nodeType) {
      let i = e.getAttribute("aria-hidden"),
        n = "none" === window.getComputedStyle(e).display;
      "true" === i || n || Array.from(e.childNodes).forEach(e => {
        t += Ae(e);
      });
    }
    return t = t.trim(), "" === t ? "" : t + " ";
  }
  function ke() {
    setInterval(() => {
      0 === Y.wrapper.scrollTop && 0 === Y.wrapper.scrollLeft || (Y.wrapper.scrollTop = 0, Y.wrapper.scrollLeft = 0);
    }, 1e3);
  }
  function Le() {
    document.addEventListener("fullscreenchange", $t), document.addEventListener("webkitfullscreenchange", $t);
  }
  function Ce() {
    E.postMessage && window.addEventListener("message", Ut, !1);
  }
  function xe(t) {
    const n = {
      ...E
    };
    if ("object" == typeof t && e(E, t), !1 === h.isReady()) return;
    const s = Y.wrapper.querySelectorAll(S).length;
    Y.wrapper.classList.remove(n.transition), Y.wrapper.classList.add(E.transition), Y.wrapper.setAttribute("data-transition-speed", E.transitionSpeed), Y.wrapper.setAttribute("data-background-transition", E.backgroundTransition), Y.viewport.style.setProperty("--slide-width", E.width + "px"), Y.viewport.style.setProperty("--slide-height", E.height + "px"), E.shuffle && dt(), i(Y.wrapper, "embedded", E.embedded), i(Y.wrapper, "rtl", E.rtl), i(Y.wrapper, "center", E.center), !1 === E.pause && Ze(), E.previewLinks ? (He(), Be("[data-preview-link=false]")) : (Be(), He("[data-preview-link]:not([data-preview-link=false])")), ne.reset(), f && (f.destroy(), f = null), s > 1 && E.autoSlide && E.autoSlideStoppable && (f = new V(Y.wrapper, () => Math.min(Math.max((Date.now() - Q) / J, 0), 1)), f.on("click", Yt), Z = !1), "default" !== E.navigationMode ? Y.wrapper.setAttribute("data-navigation-mode", E.navigationMode) : Y.wrapper.removeAttribute("data-navigation-mode"), me.configure(E, n), ve.configure(E, n), he.configure(E, n), de.configure(E, n), ce.configure(E, n), oe.configure(E, n), ae.configure(E, n), te.configure(E, n), rt();
  }
  function Pe() {
    window.addEventListener("resize", Kt, !1), E.touch && pe.bind(), E.keyboard && oe.bind(), E.progress && ce.bind(), E.respondToHashChanges && le.bind(), de.bind(), ve.bind(), Y.slides.addEventListener("click", Wt, !1), Y.slides.addEventListener("transitionend", jt, !1), Y.pauseOverlay.addEventListener("click", Ze, !1), E.focusBodyOnPageVisibilityChange && document.addEventListener("visibilitychange", Vt, !1);
  }
  function Ne() {
    pe.unbind(), ve.unbind(), oe.unbind(), de.unbind(), ce.unbind(), le.unbind(), window.removeEventListener("resize", Kt, !1), Y.slides.removeEventListener("click", Wt, !1), Y.slides.removeEventListener("transitionend", jt, !1), Y.pauseOverlay.removeEventListener("click", Ze, !1);
  }
  function Me() {
    Ne(), Mt(), Be(), me.destroy(), ve.destroy(), ue.destroy(), he.destroy(), de.destroy(), ce.destroy(), se.destroy(), te.destroy(), ie.destroy(), document.removeEventListener("fullscreenchange", $t), document.removeEventListener("webkitfullscreenchange", $t), document.removeEventListener("visibilitychange", Vt, !1), window.removeEventListener("message", Ut, !1), window.removeEventListener("load", We, !1), Y.pauseOverlay && Y.pauseOverlay.remove(), Y.statusElement && Y.statusElement.remove(), document.documentElement.classList.remove("reveal-full-page"), Y.wrapper.classList.remove("ready", "center", "has-horizontal-slides", "has-vertical-slides"), Y.wrapper.removeAttribute("data-transition-speed"), Y.wrapper.removeAttribute("data-background-transition"), Y.viewport.classList.remove("reveal-viewport"), Y.viewport.style.removeProperty("--slide-width"), Y.viewport.style.removeProperty("--slide-height"), Y.slides.style.removeProperty("width"), Y.slides.style.removeProperty("height"), Y.slides.style.removeProperty("zoom"), Y.slides.style.removeProperty("left"), Y.slides.style.removeProperty("top"), Y.slides.style.removeProperty("bottom"), Y.slides.style.removeProperty("right"), Y.slides.style.removeProperty("transform"), Array.from(Y.wrapper.querySelectorAll(S)).forEach(e => {
      e.style.removeProperty("display"), e.style.removeProperty("top"), e.removeAttribute("hidden"), e.removeAttribute("aria-hidden");
    });
  }
  function Ie(e, t, i) {
    a.addEventListener(e, t, i);
  }
  function De(e, t, i) {
    a.removeEventListener(e, t, i);
  }
  function Te(e) {
    "string" == typeof e.layout && (j.layout = e.layout), "string" == typeof e.overview && (j.overview = e.overview), j.layout ? s(Y.slides, j.layout + " " + j.overview) : s(Y.slides, j.overview);
  }
  function Fe({
    target: t = Y.wrapper,
    type: i,
    data: n,
    bubbles: s = !0
  }) {
    let a = document.createEvent("HTMLEvents", 1, 2);
    return a.initEvent(i, s, !0), e(a, n), t.dispatchEvent(a), t === Y.wrapper && ze(i), a;
  }
  function ze(t, i) {
    if (E.postMessageEvents && window.parent !== window.self) {
      let n = {
        namespace: "reveal",
        eventName: t,
        state: xt()
      };
      e(n, i), window.parent.postMessage(JSON.stringify(n), "*");
    }
  }
  function He(e = "a") {
    Array.from(Y.wrapper.querySelectorAll(e)).forEach(e => {
      /^(http|www)/gi.test(e.getAttribute("href")) && e.addEventListener("click", Xt, !1);
    });
  }
  function Be(e = "a") {
    Array.from(Y.wrapper.querySelectorAll(e)).forEach(e => {
      /^(http|www)/gi.test(e.getAttribute("href")) && e.removeEventListener("click", Xt, !1);
    });
  }
  function Oe(e) {
    je(), Y.overlay = document.createElement("div"), Y.overlay.classList.add("overlay"), Y.overlay.classList.add("overlay-preview"), Y.wrapper.appendChild(Y.overlay), Y.overlay.innerHTML = `<header>\n\t\t\t\t<a class="close" href="#"><span class="icon"></span></a>\n\t\t\t\t<a class="external" href="${e}" target="_blank"><span class="icon"></span></a>\n\t\t\t</header>\n\t\t\t<div class="spinner"></div>\n\t\t\t<div class="viewport">\n\t\t\t\t<iframe src="${e}"></iframe>\n\t\t\t\t<small class="viewport-inner">\n\t\t\t\t\t<span class="x-frame-error">Unable to load iframe. This is likely due to the site's policy (x-frame-options).</span>\n\t\t\t\t</small>\n\t\t\t</div>`, Y.overlay.querySelector("iframe").addEventListener("load", e => {
      Y.overlay.classList.add("loaded");
    }, !1), Y.overlay.querySelector(".close").addEventListener("click", e => {
      je(), e.preventDefault();
    }, !1), Y.overlay.querySelector(".external").addEventListener("click", e => {
      je();
    }, !1);
  }
  function qe(e) {
    "boolean" == typeof e ? e ? Ue() : je() : Y.overlay ? je() : Ue();
  }
  function Ue() {
    if (E.help) {
      je(), Y.overlay = document.createElement("div"), Y.overlay.classList.add("overlay"), Y.overlay.classList.add("overlay-help"), Y.wrapper.appendChild(Y.overlay);
      let e = '<p class="title">Keyboard Shortcuts</p><br/>',
        t = oe.getShortcuts(),
        i = oe.getBindings();
      e += "<table><th>KEY</th><th>ACTION</th>";
      for (let i in t) e += `<tr><td>${i}</td><td>${t[i]}</td></tr>`;
      for (let t in i) i[t].key && i[t].description && (e += `<tr><td>${i[t].key}</td><td>${i[t].description}</td></tr>`);
      e += "</table>", Y.overlay.innerHTML = `\n\t\t\t\t<header>\n\t\t\t\t\t<a class="close" href="#"><span class="icon"></span></a>\n\t\t\t\t</header>\n\t\t\t\t<div class="viewport">\n\t\t\t\t\t<div class="viewport-inner">${e}</div>\n\t\t\t\t</div>\n\t\t\t`, Y.overlay.querySelector(".close").addEventListener("click", e => {
        je(), e.preventDefault();
      }, !1);
    }
  }
  function je() {
    return !!Y.overlay && (Y.overlay.parentNode.removeChild(Y.overlay), Y.overlay = null, !0);
  }
  function We() {
    if (Y.wrapper && !ge.isPrintingPDF()) {
      if (!E.disableLayout) {
        g && !E.embedded && document.documentElement.style.setProperty("--vh", .01 * window.innerHeight + "px");
        const e = Ve(),
          t = U;
        Ke(E.width, E.height), Y.slides.style.width = e.width + "px", Y.slides.style.height = e.height + "px", U = Math.min(e.presentationWidth / e.width, e.presentationHeight / e.height), U = Math.max(U, E.minScale), U = Math.min(U, E.maxScale), 1 === U ? (Y.slides.style.zoom = "", Y.slides.style.left = "", Y.slides.style.top = "", Y.slides.style.bottom = "", Y.slides.style.right = "", Te({
          layout: ""
        })) : (Y.slides.style.zoom = "", Y.slides.style.left = "50%", Y.slides.style.top = "50%", Y.slides.style.bottom = "auto", Y.slides.style.right = "auto", Te({
          layout: "translate(-50%, -50%) scale(" + U + ")"
        }));
        const i = Array.from(Y.wrapper.querySelectorAll(S));
        for (let t = 0, n = i.length; t < n; t++) {
          const n = i[t];
          "none" !== n.style.display && (E.center || n.classList.contains("center") ? n.classList.contains("stack") ? n.style.top = 0 : n.style.top = Math.max((e.height - n.scrollHeight) / 2, 0) + "px" : n.style.top = "");
        }
        t !== U && Fe({
          type: "resize",
          data: {
            oldScale: t,
            scale: U,
            size: e
          }
        });
      }
      Y.viewport.style.setProperty("--slide-scale", U), ce.update(), se.updateParallax(), re.isActive() && re.update();
    }
  }
  function Ke(e, i) {
    t(Y.slides, "section > .stretch, section > .r-stretch").forEach(t => {
      let n = c(t, i);
      if (/(img|video)/gi.test(t.nodeName)) {
        const i = t.naturalWidth || t.videoWidth,
          s = t.naturalHeight || t.videoHeight,
          a = Math.min(e / i, n / s);
        t.style.width = i * a + "px", t.style.height = s * a + "px";
      } else t.style.width = e + "px", t.style.height = n + "px";
    });
  }
  function Ve(e, t) {
    let i = E.width,
      n = E.height;
    E.disableLayout && (i = Y.slides.offsetWidth, n = Y.slides.offsetHeight);
    const s = {
      width: i,
      height: n,
      presentationWidth: e || Y.wrapper.offsetWidth,
      presentationHeight: t || Y.wrapper.offsetHeight
    };
    return s.presentationWidth -= s.presentationWidth * E.margin, s.presentationHeight -= s.presentationHeight * E.margin, "string" == typeof s.width && /%$/.test(s.width) && (s.width = parseInt(s.width, 10) / 100 * s.presentationWidth), "string" == typeof s.height && /%$/.test(s.height) && (s.height = parseInt(s.height, 10) / 100 * s.presentationHeight), s;
  }
  function $e(e, t) {
    "object" == typeof e && "function" == typeof e.setAttribute && e.setAttribute("data-previous-indexv", t || 0);
  }
  function Xe(e) {
    if ("object" == typeof e && "function" == typeof e.setAttribute && e.classList.contains("stack")) {
      const t = e.hasAttribute("data-start-indexv") ? "data-start-indexv" : "data-previous-indexv";
      return parseInt(e.getAttribute(t) || 0, 10);
    }
    return 0;
  }
  function Ye(e = m) {
    return e && e.parentNode && !!e.parentNode.nodeName.match(/section/i);
  }
  function _e() {
    return !(!m || !Ye(m)) && !m.nextElementSibling;
  }
  function Je() {
    return 0 === u && 0 === v;
  }
  function Ge() {
    return !!m && !m.nextElementSibling && (!Ye(m) || !m.parentNode.nextElementSibling);
  }
  function Qe() {
    if (E.pause) {
      const e = Y.wrapper.classList.contains("paused");
      Mt(), Y.wrapper.classList.add("paused"), !1 === e && Fe({
        type: "paused"
      });
    }
  }
  function Ze() {
    const e = Y.wrapper.classList.contains("paused");
    Y.wrapper.classList.remove("paused"), Nt(), e && Fe({
      type: "resumed"
    });
  }
  function et(e) {
    "boolean" == typeof e ? e ? Qe() : Ze() : tt() ? Ze() : Qe();
  }
  function tt() {
    return Y.wrapper.classList.contains("paused");
  }
  function it(e) {
    "boolean" == typeof e ? e ? ie.show() : ie.hide() : ie.isVisible() ? ie.hide() : ie.show();
  }
  function nt(e) {
    "boolean" == typeof e ? e ? Dt() : It() : Z ? Dt() : It();
  }
  function st() {
    return !(!J || Z);
  }
  function at(e, t, i, n) {
    if (Fe({
      type: "beforeslidechange",
      data: {
        indexh: void 0 === e ? u : e,
        indexv: void 0 === t ? v : t,
        origin: n
      }
    }).defaultPrevented) return;
    p = m;
    const s = Y.wrapper.querySelectorAll(A);
    if (0 === s.length) return;
    void 0 !== t || re.isActive() || (t = Xe(s[e])), p && p.parentNode && p.parentNode.classList.contains("stack") && $e(p.parentNode, v);
    const a = H.concat();
    H.length = 0;
    let r = u || 0,
      o = v || 0;
    u = ct(A, void 0 === e ? u : e), v = ct(k, void 0 === t ? v : t);
    let l = u !== r || v !== o;
    l || (p = null);
    let d = s[u],
      c = d.querySelectorAll("section");
    m = c[v] || d;
    let h = !1;
    l && p && m && !re.isActive() && (p.hasAttribute("data-auto-animate") && m.hasAttribute("data-auto-animate") && p.getAttribute("data-auto-animate-id") === m.getAttribute("data-auto-animate-id") && !(u > r || v > o ? m : p).hasAttribute("data-auto-animate-restart") && (h = !0, Y.slides.classList.add("disable-slide-transitions")), _ = "running"), gt(), We(), re.isActive() && re.update(), void 0 !== i && ae.goto(i), p && p !== m && (p.classList.remove("present"), p.setAttribute("aria-hidden", "true"), Je() && setTimeout(() => {
      Et().forEach(e => {
        $e(e, 0);
      });
    }, 0));
    e: for (let e = 0, t = H.length; e < t; e++) {
      for (let t = 0; t < a.length; t++) if (a[t] === H[e]) {
        a.splice(t, 1);
        continue e;
      }
      Y.viewport.classList.add(H[e]), Fe({
        type: H[e]
      });
    }
    for (; a.length;) Y.viewport.classList.remove(a.pop());
    l && Fe({
      type: "slidechanged",
      data: {
        indexh: u,
        indexv: v,
        previousSlide: p,
        currentSlide: m,
        origin: n
      }
    }), !l && p || (ee.stopEmbeddedContent(p), ee.startEmbeddedContent(m)), requestAnimationFrame(() => {
      Se(Ae(m));
    }), ce.update(), de.update(), me.update(), se.update(), se.updateParallax(), te.update(), ae.update(), le.writeURL(), Nt(), h && (setTimeout(() => {
      Y.slides.classList.remove("disable-slide-transitions");
    }, 0), E.autoAnimate && ne.run(p, m));
  }
  function rt() {
    Ne(), Pe(), We(), J = E.autoSlide, Nt(), se.create(), le.writeURL(), !0 === E.sortFragmentsOnSync && ae.sortAll(), de.update(), ce.update(), gt(), me.update(), me.updateVisibility(), se.update(!0), te.update(), ee.formatEmbeddedContent(), !1 === E.autoPlayMedia ? ee.stopEmbeddedContent(m, {
      unloadIframes: !1
    }) : ee.startEmbeddedContent(m), re.isActive() && re.layout();
  }
  function ot(e = m) {
    se.sync(e), ae.sync(e), ee.load(e), se.update(), me.update();
  }
  function lt() {
    yt().forEach(e => {
      t(e, "section").forEach((e, t) => {
        t > 0 && (e.classList.remove("present"), e.classList.remove("past"), e.classList.add("future"), e.setAttribute("aria-hidden", "true"));
      });
    });
  }
  function dt(e = yt()) {
    e.forEach((t, i) => {
      let n = e[Math.floor(Math.random() * e.length)];
      n.parentNode === t.parentNode && t.parentNode.insertBefore(t, n);
      let s = t.querySelectorAll("section");
      s.length && dt(s);
    });
  }
  function ct(e, i) {
    let n = t(Y.wrapper, e),
      s = n.length,
      a = ge.isPrintingPDF(),
      r = !1,
      o = !1;
    if (s) {
      E.loop && (i >= s && (r = !0), (i %= s) < 0 && (i = s + i, o = !0)), i = Math.max(Math.min(i, s - 1), 0);
      for (let e = 0; e < s; e++) {
        let t = n[e],
          s = E.rtl && !Ye(t);
        t.classList.remove("past"), t.classList.remove("present"), t.classList.remove("future"), t.setAttribute("hidden", ""), t.setAttribute("aria-hidden", "true"), t.querySelector("section") && t.classList.add("stack"), a ? t.classList.add("present") : e < i ? (t.classList.add(s ? "future" : "past"), E.fragments && ht(t)) : e > i ? (t.classList.add(s ? "past" : "future"), E.fragments && ut(t)) : e === i && E.fragments && (r ? ut(t) : o && ht(t));
      }
      let e = n[i],
        t = e.classList.contains("present");
      e.classList.add("present"), e.removeAttribute("hidden"), e.removeAttribute("aria-hidden"), t || Fe({
        target: e,
        type: "visible",
        bubbles: !1
      });
      let l = e.getAttribute("data-state");
      l && (H = H.concat(l.split(" ")));
    } else i = 0;
    return i;
  }
  function ht(e) {
    t(e, ".fragment").forEach(e => {
      e.classList.add("visible"), e.classList.remove("current-fragment");
    });
  }
  function ut(e) {
    t(e, ".fragment.visible").forEach(e => {
      e.classList.remove("visible", "current-fragment");
    });
  }
  function gt() {
    let e,
      i,
      n = yt(),
      s = n.length;
    if (s && void 0 !== u) {
      let a = re.isActive() ? 10 : E.viewDistance;
      g && (a = re.isActive() ? 6 : E.mobileViewDistance), ge.isPrintingPDF() && (a = Number.MAX_VALUE);
      for (let r = 0; r < s; r++) {
        let o = n[r],
          l = t(o, "section"),
          d = l.length;
        if (e = Math.abs((u || 0) - r) || 0, E.loop && (e = Math.abs(((u || 0) - r) % (s - a)) || 0), e < a ? ee.load(o) : ee.unload(o), d) {
          let t = Xe(o);
          for (let n = 0; n < d; n++) {
            let s = l[n];
            i = r === (u || 0) ? Math.abs((v || 0) - n) : Math.abs(n - t), e + i < a ? ee.load(s) : ee.unload(s);
          }
        }
      }
      St() ? Y.wrapper.classList.add("has-vertical-slides") : Y.wrapper.classList.remove("has-vertical-slides"), Rt() ? Y.wrapper.classList.add("has-horizontal-slides") : Y.wrapper.classList.remove("has-horizontal-slides");
    }
  }
  function vt({
    includeFragments: e = !1
  } = {}) {
    let t = Y.wrapper.querySelectorAll(A),
      i = Y.wrapper.querySelectorAll(k),
      n = {
        left: u > 0,
        right: u < t.length - 1,
        up: v > 0,
        down: v < i.length - 1
      };
    if (E.loop && (t.length > 1 && (n.left = !0, n.right = !0), i.length > 1 && (n.up = !0, n.down = !0)), t.length > 1 && "linear" === E.navigationMode && (n.right = n.right || n.down, n.left = n.left || n.up), !0 === e) {
      let e = ae.availableRoutes();
      n.left = n.left || e.prev, n.up = n.up || e.prev, n.down = n.down || e.next, n.right = n.right || e.next;
    }
    if (E.rtl) {
      let e = n.left;
      n.left = n.right, n.right = e;
    }
    return n;
  }
  function pt(e = m) {
    let t = yt(),
      i = 0;
    e: for (let n = 0; n < t.length; n++) {
      let s = t[n],
        a = s.querySelectorAll("section");
      for (let t = 0; t < a.length; t++) {
        if (a[t] === e) break e;
        "uncounted" !== a[t].dataset.visibility && i++;
      }
      if (s === e) break;
      !1 === s.classList.contains("stack") && "uncounted" !== s.dataset.visibility && i++;
    }
    return i;
  }
  function mt() {
    let e = kt(),
      t = pt();
    if (m) {
      let e = m.querySelectorAll(".fragment");
      if (e.length > 0) {
        let i = .9;
        t += m.querySelectorAll(".fragment.visible").length / e.length * i;
      }
    }
    return Math.min(t / (e - 1), 1);
  }
  function ft(e) {
    let i,
      n = u,
      s = v;
    if (e) {
      let i = Ye(e),
        a = i ? e.parentNode : e,
        r = yt();
      n = Math.max(r.indexOf(a), 0), s = void 0, i && (s = Math.max(t(e.parentNode, "section").indexOf(e), 0));
    }
    if (!e && m) {
      if (m.querySelectorAll(".fragment").length > 0) {
        let e = m.querySelector(".current-fragment");
        i = e && e.hasAttribute("data-fragment-index") ? parseInt(e.getAttribute("data-fragment-index"), 10) : m.querySelectorAll(".fragment.visible").length - 1;
      }
    }
    return {
      h: n,
      v: s,
      f: i
    };
  }
  function bt() {
    return t(Y.wrapper, S + ':not(.stack):not([data-visibility="uncounted"])');
  }
  function yt() {
    return t(Y.wrapper, A);
  }
  function wt() {
    return t(Y.wrapper, ".slides>section>section");
  }
  function Et() {
    return t(Y.wrapper, A + ".stack");
  }
  function Rt() {
    return yt().length > 1;
  }
  function St() {
    return wt().length > 1;
  }
  function At() {
    return bt().map(e => {
      let t = {};
      for (let i = 0; i < e.attributes.length; i++) {
        let n = e.attributes[i];
        t[n.name] = n.value;
      }
      return t;
    });
  }
  function kt() {
    return bt().length;
  }
  function Lt(e, t) {
    let i = yt()[e],
      n = i && i.querySelectorAll("section");
    return n && n.length && "number" == typeof t ? n ? n[t] : void 0 : i;
  }
  function Ct(e, t) {
    let i = "number" == typeof e ? Lt(e, t) : e;
    if (i) return i.slideBackgroundElement;
  }
  function xt() {
    let e = ft();
    return {
      indexh: e.h,
      indexv: e.v,
      indexf: e.f,
      paused: tt(),
      overview: re.isActive()
    };
  }
  function Pt(e) {
    if ("object" == typeof e) {
      at(n(e.indexh), n(e.indexv), n(e.indexf));
      let t = n(e.paused),
        i = n(e.overview);
      "boolean" == typeof t && t !== tt() && et(t), "boolean" == typeof i && i !== re.isActive() && re.toggle(i);
    }
  }
  function Nt() {
    if (Mt(), m && !1 !== E.autoSlide) {
      let e = m.querySelector(".current-fragment");
      e || (e = m.querySelector(".fragment"));
      let i = e ? e.getAttribute("data-autoslide") : null,
        n = m.parentNode ? m.parentNode.getAttribute("data-autoslide") : null,
        s = m.getAttribute("data-autoslide");
      i ? J = parseInt(i, 10) : s ? J = parseInt(s, 10) : n ? J = parseInt(n, 10) : (J = E.autoSlide, 0 === m.querySelectorAll(".fragment").length && t(m, "video, audio").forEach(e => {
        e.hasAttribute("data-autoplay") && J && 1e3 * e.duration / e.playbackRate > J && (J = 1e3 * e.duration / e.playbackRate + 1e3);
      })), !J || Z || tt() || re.isActive() || Ge() && !ae.availableRoutes().next && !0 !== E.loop || (G = setTimeout(() => {
        "function" == typeof E.autoSlideMethod ? E.autoSlideMethod() : Ot(), Nt();
      }, J), Q = Date.now()), f && f.setPlaying(-1 !== G);
    }
  }
  function Mt() {
    clearTimeout(G), G = -1;
  }
  function It() {
    J && !Z && (Z = !0, Fe({
      type: "autoslidepaused"
    }), clearTimeout(G), f && f.setPlaying(!1));
  }
  function Dt() {
    J && Z && (Z = !1, Fe({
      type: "autoslideresumed"
    }), Nt());
  }
  function Tt({
    skipFragments: e = !1
  } = {}) {
    x.hasNavigatedHorizontally = !0, E.rtl ? (re.isActive() || e || !1 === ae.next()) && vt().left && at(u + 1, "grid" === E.navigationMode ? v : void 0) : (re.isActive() || e || !1 === ae.prev()) && vt().left && at(u - 1, "grid" === E.navigationMode ? v : void 0);
  }
  function Ft({
    skipFragments: e = !1
  } = {}) {
    x.hasNavigatedHorizontally = !0, E.rtl ? (re.isActive() || e || !1 === ae.prev()) && vt().right && at(u - 1, "grid" === E.navigationMode ? v : void 0) : (re.isActive() || e || !1 === ae.next()) && vt().right && at(u + 1, "grid" === E.navigationMode ? v : void 0);
  }
  function zt({
    skipFragments: e = !1
  } = {}) {
    (re.isActive() || e || !1 === ae.prev()) && vt().up && at(u, v - 1);
  }
  function Ht({
    skipFragments: e = !1
  } = {}) {
    x.hasNavigatedVertically = !0, (re.isActive() || e || !1 === ae.next()) && vt().down && at(u, v + 1);
  }
  function Bt({
    skipFragments: e = !1
  } = {}) {
    if (e || !1 === ae.prev()) if (vt().up) zt({
      skipFragments: e
    });else {
      let i;
      if (i = E.rtl ? t(Y.wrapper, A + ".future").pop() : t(Y.wrapper, A + ".past").pop(), i && i.classList.contains("stack")) {
        let e = i.querySelectorAll("section").length - 1 || void 0;
        at(u - 1, e);
      } else Tt({
        skipFragments: e
      });
    }
  }
  function Ot({
    skipFragments: e = !1
  } = {}) {
    if (x.hasNavigatedHorizontally = !0, x.hasNavigatedVertically = !0, e || !1 === ae.next()) {
      let t = vt();
      t.down && t.right && E.loop && _e() && (t.down = !1), t.down ? Ht({
        skipFragments: e
      }) : E.rtl ? Tt({
        skipFragments: e
      }) : Ft({
        skipFragments: e
      });
    }
  }
  function qt(e) {
    E.autoSlideStoppable && It();
  }
  function Ut(e) {
    let t = e.data;
    if ("string" == typeof t && "{" === t.charAt(0) && "}" === t.charAt(t.length - 1) && (t = JSON.parse(t), t.method && "function" == typeof h[t.method])) if (!1 === L.test(t.method)) {
      const e = h[t.method].apply(h, t.args);
      ze("callback", {
        method: t.method,
        result: e
      });
    } else console.warn('reveal.js: "' + t.method + '" is is blacklisted from the postMessage API');
  }
  function jt(e) {
    "running" === _ && /section/gi.test(e.target.nodeName) && (_ = "idle", Fe({
      type: "slidetransitionend",
      data: {
        indexh: u,
        indexv: v,
        previousSlide: p,
        currentSlide: m
      }
    }));
  }
  function Wt(e) {
    const t = r(e.target, 'a[href^="#"]');
    if (t) {
      const i = t.getAttribute("href"),
        n = le.getIndicesFromHash(i);
      n && (h.slide(n.h, n.v, n.f), e.preventDefault());
    }
  }
  function Kt(e) {
    We();
  }
  function Vt(e) {
    !1 === document.hidden && document.activeElement !== document.body && ("function" == typeof document.activeElement.blur && document.activeElement.blur(), document.body.focus());
  }
  function $t(e) {
    (document.fullscreenElement || document.webkitFullscreenElement) === Y.wrapper && (e.stopImmediatePropagation(), setTimeout(() => {
      h.layout(), h.focus.focus();
    }, 1));
  }
  function Xt(e) {
    if (e.currentTarget && e.currentTarget.hasAttribute("href")) {
      let t = e.currentTarget.getAttribute("href");
      t && (Oe(t), e.preventDefault());
    }
  }
  function Yt(e) {
    Ge() && !1 === E.loop ? (at(0, 0), Dt()) : Z ? Dt() : It();
  }
  const _t = {
    VERSION: X,
    initialize: fe,
    configure: xe,
    destroy: Me,
    sync: rt,
    syncSlide: ot,
    syncFragments: ae.sync.bind(ae),
    slide: at,
    left: Tt,
    right: Ft,
    up: zt,
    down: Ht,
    prev: Bt,
    next: Ot,
    navigateLeft: Tt,
    navigateRight: Ft,
    navigateUp: zt,
    navigateDown: Ht,
    navigatePrev: Bt,
    navigateNext: Ot,
    navigateFragment: ae.goto.bind(ae),
    prevFragment: ae.prev.bind(ae),
    nextFragment: ae.next.bind(ae),
    on: Ie,
    off: De,
    addEventListener: Ie,
    removeEventListener: De,
    layout: We,
    shuffle: dt,
    availableRoutes: vt,
    availableFragments: ae.availableRoutes.bind(ae),
    toggleHelp: qe,
    toggleOverview: re.toggle.bind(re),
    togglePause: et,
    toggleAutoSlide: nt,
    toggleJumpToSlide: it,
    isFirstSlide: Je,
    isLastSlide: Ge,
    isLastVerticalSlide: _e,
    isVerticalSlide: Ye,
    isPaused: tt,
    isAutoSliding: st,
    isSpeakerNotes: me.isSpeakerNotesWindow.bind(me),
    isOverview: re.isActive.bind(re),
    isFocused: ve.isFocused.bind(ve),
    isPrintingPDF: ge.isPrintingPDF.bind(ge),
    isReady: () => C,
    loadSlide: ee.load.bind(ee),
    unloadSlide: ee.unload.bind(ee),
    showPreview: Oe,
    hidePreview: je,
    addEventListeners: Pe,
    removeEventListeners: Ne,
    dispatchEvent: Fe,
    getState: xt,
    setState: Pt,
    getProgress: mt,
    getIndices: ft,
    getSlidesAttributes: At,
    getSlidePastCount: pt,
    getTotalSlides: kt,
    getSlide: Lt,
    getPreviousSlide: () => p,
    getCurrentSlide: () => m,
    getSlideBackground: Ct,
    getSlideNotes: me.getSlideNotes.bind(me),
    getSlides: bt,
    getHorizontalSlides: yt,
    getVerticalSlides: wt,
    hasHorizontalSlides: Rt,
    hasVerticalSlides: St,
    hasNavigatedHorizontally: () => x.hasNavigatedHorizontally,
    hasNavigatedVertically: () => x.hasNavigatedVertically,
    addKeyBinding: oe.addKeyBinding.bind(oe),
    removeKeyBinding: oe.removeKeyBinding.bind(oe),
    triggerKey: oe.triggerKey.bind(oe),
    registerKeyboardShortcut: oe.registerKeyboardShortcut.bind(oe),
    getComputedSlideSize: Ve,
    getScale: () => U,
    getConfig: () => E,
    getQueryHash: d,
    getSlidePath: le.getHash.bind(le),
    getRevealElement: () => a,
    getSlidesElement: () => Y.slides,
    getViewportElement: () => Y.viewport,
    getBackgroundsElement: () => se.element,
    registerPlugin: ue.registerPlugin.bind(ue),
    hasPlugin: ue.hasPlugin.bind(ue),
    getPlugin: ue.getPlugin.bind(ue),
    getPlugins: ue.getRegisteredPlugins.bind(ue)
  };
  return e(h, {
    ..._t,
    announceStatus: Se,
    getStatusText: Ae,
    print: ge,
    focus: ve,
    progress: ce,
    controls: de,
    location: le,
    overview: re,
    fragments: ae,
    slideContent: ee,
    slideNumber: te,
    onUserInput: qt,
    closeOverlay: je,
    updateSlidesVisibility: gt,
    layoutSlideContents: Ke,
    transformSlides: Te,
    cueAutoSlide: Nt,
    cancelAutoSlide: Mt
  }), _t;
}
let _ = Y,
  J = [];
_.initialize = e => (Object.assign(_, new Y(document.querySelector(".reveal"), e)), J.map(e => e(_)), _.initialize()), ["configure", "on", "off", "addEventListener", "removeEventListener", "registerPlugin"].forEach(e => {
  _[e] = (...t) => {
    J.push(i => i[e].call(null, ...t));
  };
}), _.isReady = () => !1, _.VERSION = X;
/* harmony default export */ const reveal_esm = (_);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(379);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(795);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(569);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(565);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(216);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(589);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/reveal.js/dist/reveal.css
var reveal = __webpack_require__(118);
;// CONCATENATED MODULE: ./node_modules/reveal.js/dist/reveal.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(reveal/* default */.Z, options);




       /* harmony default export */ const dist_reveal = (reveal/* default */.Z && reveal/* default */.Z.locals ? reveal/* default */.Z.locals : undefined);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/reveal.js/dist/theme/black.css
var black = __webpack_require__(812);
;// CONCATENATED MODULE: ./node_modules/reveal.js/dist/theme/black.css

      
      
      
      
      
      
      
      
      

var black_options = {};

black_options.styleTagTransform = (styleTagTransform_default());
black_options.setAttributes = (setAttributesWithoutAttributes_default());

      black_options.insert = insertBySelector_default().bind(null, "head");
    
black_options.domAPI = (styleDomAPI_default());
black_options.insertStyleElement = (insertStyleElement_default());

var black_update = injectStylesIntoStyleTag_default()(black/* default */.Z, black_options);




       /* harmony default export */ const theme_black = (black/* default */.Z && black/* default */.Z.locals ? black/* default */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/.nojekyll
const _nojekyll_namespaceObject = __webpack_require__.p + ".nojekyll";
;// CONCATENATED MODULE: ./src/index.js
console.log("Hello World!");




reveal_esm.initialize();
})();

/******/ })()
;