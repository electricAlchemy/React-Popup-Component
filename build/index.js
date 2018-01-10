module.exports=function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),u=n(1),a=function(t){return t&&t.__esModule?t:{default:t}}(u);n(2);var p=function(t){function e(t){o(this,e);var n=r(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.props=t,n.width=n.props.width||"400px",n.popupBackground,n.myPopup,n.closeButton,n.pos=0,n.animate=animate.bind(n),n}return i(e,t),s(e,[{key:"togglePopupComponent",value:function(){this.popupBackground.classList.toggle("hide"),this.myPopup.classList.toggle("zeroSize"),this.pos=0}},{key:"animate",value:function(){var t=this,e=document.querySelector(".popupContentClass");e.style.minHeight=this.pos,e.style.width=this.pos;var n=setInterval(function(){var o=t.width;t.pos>=o.substring(0,o.length-2)?clearInterval(n):(t.pos=t.pos+10,console.log("this.pos",t.pos),e.style.width=t.pos+"px",console.log("elem.style.top = pos + 'px';",e.style.width),e.style.minHeight=t.pos+"px")},5)}},{key:"componentDidMount",value:function(){var t=this;this.popupBackground=document.createElement("div"),this.popupBackground.setAttribute("class","popupBackgroundClass hide"),this.myPopup=document.createElement("div"),this.myPopup.setAttribute("style","width:0"),this.myPopup.setAttribute("class","popupContentClass zeroSize"),this.myPopup.setAttribute("id","myPopupComponent"),this.myPopup.innerHTML=this.props.children.props.children,this.closeButton=document.createElement("img"),this.closeButton.setAttribute("src","images/closeButton.svg"),this.closeButton.setAttribute("class","closeButtonImage"),this.popupBackground.appendChild(this.closeButton),this.popupBackground.appendChild(this.myPopup),document.body.insertBefore(this.popupBackground,document.body.firstChild),this.popupBackground.addEventListener("click",function(){t.popupBackground.classList.toggle("hide"),t.myPopup.classList.toggle("zeroSize")})}},{key:"render",value:function(){return a.default.createElement("div",null,console.log("Popup Component Activated"))}}]),e}(u.Component);e.default=p},function(t,e){t.exports=require("react")},function(t,e,n){var o=n(3);"string"==typeof o&&(o=[[t.i,o,""]]);var r={hmr:!0};r.transform=void 0;n(5)(o,r);o.locals&&(t.exports=o.locals)},function(t,e,n){e=t.exports=n(4)(!1),e.push([t.i,"\n.popupBackgroundClass{\n  background: rgba(0,0,0,.5);\n  height: 100%;\n  overflow: hidden;\n  position: fixed;\n  bottom: 0;\n  top: 0;\n  left: 0;\n  right: 0;\n  transition: all .4s ease;\n}\n.popupContentClass{\n  margin: auto;\n  height: auto;\n  overflow: hidden;\n  background: white;\n  margin-top: 50px;\n  transition: all .4s ease;\n  border-radius: 20px;\n  padding: 20px;\n}\n.hide{ \n  display:none;\n}\n.zeroSize{\n  height: 0px;\n  width: 0px;\n}\n.closeButtonImage{\n  height: 40px;\n  width: 40px;\n  position: absolute;\n  right: 20px;\n  top: 20px;\n  cursor: pointer;\n}\n",""])},function(t,e){function n(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var i=o(r);return[n].concat(r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"})).concat([i]).join("\n")}return[n].join("\n")}function o(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var o=n(e,t);return e[2]?"@media "+e[2]+"{"+o+"}":o}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<t.length;r++){var s=t[r];"number"==typeof s[0]&&o[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},function(t,e,n){function o(t,e){for(var n=0;n<t.length;n++){var o=t[n],r=h[o.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](o.parts[i]);for(;i<o.parts.length;i++)r.parts.push(c(o.parts[i],e))}else{for(var s=[],i=0;i<o.parts.length;i++)s.push(c(o.parts[i],e));h[o.id]={id:o.id,refs:1,parts:s}}}}function r(t,e){for(var n=[],o={},r=0;r<t.length;r++){var i=t[r],s=e.base?i[0]+e.base:i[0],u=i[1],a=i[2],p=i[3],c={css:u,media:a,sourceMap:p};o[s]?o[s].parts.push(c):n.push(o[s]={id:s,parts:[c]})}return n}function i(t,e){var n=m(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=y[y.length-1];if("top"===t.insertAt)o?o.nextSibling?n.insertBefore(e,o.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),y.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=m(t.insertInto+" "+t.insertAt.before);n.insertBefore(e,r)}}function s(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=y.indexOf(t);e>=0&&y.splice(e,1)}function u(t){var e=document.createElement("style");return t.attrs.type="text/css",p(e,t.attrs),i(t,e),e}function a(t){var e=document.createElement("link");return t.attrs.type="text/css",t.attrs.rel="stylesheet",p(e,t.attrs),i(t,e),e}function p(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function c(t,e){var n,o,r,i;if(e.transform&&t.css){if(!(i=e.transform(t.css)))return function(){};t.css=i}if(e.singleton){var p=g++;n=b||(b=u(e)),o=l.bind(null,n,p,!1),r=l.bind(null,n,p,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=a(e),o=d.bind(null,n,e),r=function(){s(n),n.href&&URL.revokeObjectURL(n.href)}):(n=u(e),o=f.bind(null,n),r=function(){s(n)});return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else r()}}function l(t,e,n,o){var r=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=x(e,r);else{var i=document.createTextNode(r),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(i,s[e]):t.appendChild(i)}}function f(t,e){var n=e.css,o=e.media;if(o&&t.setAttribute("media",o),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function d(t,e,n){var o=n.css,r=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&r;(e.convertToAbsoluteUrls||i)&&(o=w(o)),r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var s=new Blob([o],{type:"text/css"}),u=t.href;t.href=URL.createObjectURL(s),u&&URL.revokeObjectURL(u)}var h={},v=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),m=function(t){var e={};return function(n){if(void 0===e[n]){var o=t.call(this,n);if(o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(t){o=null}e[n]=o}return e[n]}}(function(t){return document.querySelector(t)}),b=null,g=0,y=[],w=n(6);t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},e.attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=v()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=r(t,e);return o(n,e),function(t){for(var i=[],s=0;s<n.length;s++){var u=n[s],a=h[u.id];a.refs--,i.push(a)}if(t){o(r(t,e),e)}for(var s=0;s<i.length;s++){var a=i[s];if(0===a.refs){for(var p=0;p<a.parts.length;p++)a.parts[p]();delete h[a.id]}}}};var x=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,o=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var r=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(r))return t;var i;return i=0===r.indexOf("//")?r:0===r.indexOf("/")?n+r:o+r.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}}]);