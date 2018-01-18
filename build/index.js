module.exports=function(t){function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}var e={};return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:o})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="",n(n.s=0)}([function(t,n,e){"use strict";function o(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function r(t,n){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?t:n}function p(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(t,n):t.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0});var s=function(){function t(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(n,e,o){return e&&t(n.prototype,e),o&&t(n,o),n}}(),u=e(1),a=function(t){return t&&t.__esModule?t:{default:t}}(u);e(2);var i=function(t){function n(t){o(this,n);var e=r(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,t));return e.props=t,e.width=e.props.width||"400px",e.height=e.props.height||"400px",e.popupBackground,e.myPopup,e.closeButton,e.which=e.props.which,e.pos=0,e.openPopupComponent=e.openPopupComponent.bind(e),e.close=e.close.bind(e),e}return p(n,t),s(n,[{key:"openPopupComponent",value:function(t){this.which=t,this.popupBackground=document.querySelector(".popupBackgroundClass-"+this.which),this.popupBackground&&this.popupBackground.classList.remove("hide");var n=document.querySelectorAll(".popupBackground");console.log("allBackgrounds",n);for(var e=0;e<n.length;e++){console.log("I in openPopup fn",e);var o=".popupBackgroundClass-"+t,r=".popupBackgroundClass-"+e;document.querySelector(".popupBackgroundClass-"+e)&&o!==r&&document.querySelector(".popupBackgroundClass-"+e).classList.add("hide")}}},{key:"componentDidMount",value:function(){this.popupBackground=document.querySelector(".popupBackgroundClass-"+this.which)}},{key:"close",value:function(t){if(t.target===this.popupBackground||t.target===this.xButton)for(var n=document.querySelectorAll(".popupBackgroundClass-"+this.which),e=0;e<n.length;e++)n[e].classList.add("hide")}},{key:"render",value:function(){var t=this;return console.log("this.props.which",this.props.which),a.default.createElement("div",{onClick:function(n){return t.close(n)},className:"popupBackground popupBackgroundClass-"+this.props.which+" hide"},a.default.createElement("div",{id:"myPopupComponent",style:{width:this.props.width,height:this.props.height},className:"popupContentClass-"+this.which,ref:function(n){return t.myPopup=n}},a.default.createElement("img",{ref:function(n){return t.xButton=n},src:"assets/closeButton.svg",className:"closeButtonImage"}),this.props.children))}}]),n}(u.Component);n.default=i},function(t,n){t.exports=require("react")},function(t,n,e){var o=e(3);"string"==typeof o&&(o=[[t.i,o,""]]);var r={hmr:!0};r.transform=void 0;e(5)(o,r);o.locals&&(t.exports=o.locals)},function(t,n,e){n=t.exports=e(4)(!1),n.push([t.i,"\n/*********************       REACT-POPUP-COMPONENT   ********************************/\n.popupBackgroundClass-0,.popupBackgroundClass-1, .popupBackgroundClass-2,.popupBackgroundClass-3,.popupBackgroundClass-4,.popupBackgroundClass-5,\n.popupBackgroundClass-6,.popupBackgroundClass-7,.popupBackgroundClass-8,.popupBackgroundClass-9,\n.popupBackgroundClass-10,.popupBackgroundClass-11,.popupBackgroundClass-12,.popupBackgroundClass-13,.popupBackgroundClass-14,.popupBackgroundClass-15,\n.popupBackgroundClass-16,.popupBackgroundClass-17,.popupBackgroundClass-18,.popupBackgroundClass-19,.popupBackgroundClass-20,\n.popupBackgroundClass-21,.popupBackgroundClass-22,.popupBackgroundClass-23,.popupBackgroundClass-24,.popupBackgroundClass-25{\n  background: rgba(0,0,0,.4);\n  height: 100%;\n  overflow: hidden;\n  position: fixed;\n  bottom: 0;\n  top: 0;\n  left: 0;\n  right: 0;\n  transition: all .4s ease;\n  z-index:999;\n}\n\n.popupContentClass-0,.popupContentClass-1,.popupContentClass-2,.popupContentClass-3,.popupContentClass-4,.popupContentClass-5,.popupContentClass-6,.popupContentClass-7,\n.popupContentClass-8,.popupContentClass-9,.popupContentClass-10,.popupContentClass-11,.popupContentClass-12,.popupContentClass-13,.popupContentClass-14,\n.popupContentClass-15,.popupContentClass-16,.popupContentClass-17,.popupContentClass-18,.popupContentClass-19,.popupContentClass-20,.popupContentClass-21,\n.popupContentClass-22,.popupContentClass-23,.popupContentClass-24,.popupContentClass-25{\n  margin: auto;\n  height: auto;\n  overflow: hidden;\n  background: white;\n  margin-top: 50px;\n  transition: all .4s ease;\n  border-radius: 20px;\n  padding: 20px;\n}\n.hide{\n  display:none !important;\n}\n.closeButtonImage{\n  height: 40px;\n  width: 40px;\n  position: absolute;\n  right: 20px;\n  top: 20px;\n  cursor: pointer;\n  color: white;\n  font-size: 40px;\n  font-weight: bold;\n}\n\n#myPopupComponent{\n  background: #d8d8d8;\n}\n",""])},function(t,n){function e(t,n){var e=t[1]||"",r=t[3];if(!r)return e;if(n&&"function"==typeof btoa){var p=o(r);return[e].concat(r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"})).concat([p]).join("\n")}return[e].join("\n")}function o(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var n=[];return n.toString=function(){return this.map(function(n){var o=e(n,t);return n[2]?"@media "+n[2]+"{"+o+"}":o}).join("")},n.i=function(t,e){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var p=this[r][0];"number"==typeof p&&(o[p]=!0)}for(r=0;r<t.length;r++){var s=t[r];"number"==typeof s[0]&&o[s[0]]||(e&&!s[2]?s[2]=e:e&&(s[2]="("+s[2]+") and ("+e+")"),n.push(s))}},n}},function(t,n,e){function o(t,n){for(var e=0;e<t.length;e++){var o=t[e],r=h[o.id];if(r){r.refs++;for(var p=0;p<r.parts.length;p++)r.parts[p](o.parts[p]);for(;p<o.parts.length;p++)r.parts.push(c(o.parts[p],n))}else{for(var s=[],p=0;p<o.parts.length;p++)s.push(c(o.parts[p],n));h[o.id]={id:o.id,refs:1,parts:s}}}}function r(t,n){for(var e=[],o={},r=0;r<t.length;r++){var p=t[r],s=n.base?p[0]+n.base:p[0],u=p[1],a=p[2],i=p[3],c={css:u,media:a,sourceMap:i};o[s]?o[s].parts.push(c):e.push(o[s]={id:s,parts:[c]})}return e}function p(t,n){var e=g(t.insertInto);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=b[b.length-1];if("top"===t.insertAt)o?o.nextSibling?e.insertBefore(n,o.nextSibling):e.appendChild(n):e.insertBefore(n,e.firstChild),b.push(n);else if("bottom"===t.insertAt)e.appendChild(n);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=g(t.insertInto+" "+t.insertAt.before);e.insertBefore(n,r)}}function s(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var n=b.indexOf(t);n>=0&&b.splice(n,1)}function u(t){var n=document.createElement("style");return t.attrs.type="text/css",i(n,t.attrs),p(t,n),n}function a(t){var n=document.createElement("link");return t.attrs.type="text/css",t.attrs.rel="stylesheet",i(n,t.attrs),p(t,n),n}function i(t,n){Object.keys(n).forEach(function(e){t.setAttribute(e,n[e])})}function c(t,n){var e,o,r,p;if(n.transform&&t.css){if(!(p=n.transform(t.css)))return function(){};t.css=p}if(n.singleton){var i=m++;e=v||(v=u(n)),o=l.bind(null,e,i,!1),r=l.bind(null,e,i,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=a(n),o=d.bind(null,e,n),r=function(){s(e),e.href&&URL.revokeObjectURL(e.href)}):(e=u(n),o=f.bind(null,e),r=function(){s(e)});return o(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;o(t=n)}else r()}}function l(t,n,e,o){var r=e?"":o.css;if(t.styleSheet)t.styleSheet.cssText=k(n,r);else{var p=document.createTextNode(r),s=t.childNodes;s[n]&&t.removeChild(s[n]),s.length?t.insertBefore(p,s[n]):t.appendChild(p)}}function f(t,n){var e=n.css,o=n.media;if(o&&t.setAttribute("media",o),t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}function d(t,n,e){var o=e.css,r=e.sourceMap,p=void 0===n.convertToAbsoluteUrls&&r;(n.convertToAbsoluteUrls||p)&&(o=y(o)),r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var s=new Blob([o],{type:"text/css"}),u=t.href;t.href=URL.createObjectURL(s),u&&URL.revokeObjectURL(u)}var h={},C=function(t){var n;return function(){return void 0===n&&(n=t.apply(this,arguments)),n}}(function(){return window&&document&&document.all&&!window.atob}),g=function(t){var n={};return function(e){if(void 0===n[e]){var o=t.call(this,e);if(o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(t){o=null}n[e]=o}return n[e]}}(function(t){return document.querySelector(t)}),v=null,m=0,b=[],y=e(6);t.exports=function(t,n){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");n=n||{},n.attrs="object"==typeof n.attrs?n.attrs:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=C()),n.insertInto||(n.insertInto="head"),n.insertAt||(n.insertAt="bottom");var e=r(t,n);return o(e,n),function(t){for(var p=[],s=0;s<e.length;s++){var u=e[s],a=h[u.id];a.refs--,p.push(a)}if(t){o(r(t,n),n)}for(var s=0;s<p.length;s++){var a=p[s];if(0===a.refs){for(var i=0;i<a.parts.length;i++)a.parts[i]();delete h[a.id]}}}};var k=function(){var t=[];return function(n,e){return t[n]=e,t.filter(Boolean).join("\n")}}()},function(t,n){t.exports=function(t){var n="undefined"!=typeof window&&window.location;if(!n)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var e=n.protocol+"//"+n.host,o=e+n.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,n){var r=n.trim().replace(/^"(.*)"$/,function(t,n){return n}).replace(/^'(.*)'$/,function(t,n){return n});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(r))return t;var p;return p=0===r.indexOf("//")?r:0===r.indexOf("/")?e+r:o+r.replace(/^\.\//,""),"url("+JSON.stringify(p)+")"})}}]);