"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[685],{9829:(e,t,r)=>{r.d(t,{oM:()=>E,xC:()=>_});var n,o=r(2902),i=r(5857),u=r(3894),a=(n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},n(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),c=function(e,t){for(var r=0,n=t.length,o=e.length;r<n;r++,o++)e[o]=t[r];return e},f=Object.defineProperty,p=(Object.defineProperties,Object.getOwnPropertyDescriptors,Object.getOwnPropertySymbols),d=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,s=function(e,t,r){return t in e?f(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r},y=function(e,t){for(var r in t||(t={}))d.call(t,r)&&s(e,r,t[r]);if(p)for(var n=0,o=p(t);n<o.length;n++){r=o[n];l.call(t,r)&&s(e,r,t[r])}return e},v="undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(0!==arguments.length)return"object"==typeof arguments[0]?i.qC:i.qC.apply(null,arguments)};"undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__;function h(e){if("object"!=typeof e||null===e)return!1;var t=Object.getPrototypeOf(e);if(null===t)return!0;for(var r=t;null!==Object.getPrototypeOf(r);)r=Object.getPrototypeOf(r);return t===r}var b=function(e){function t(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];var o=e.apply(this,r)||this;return Object.setPrototypeOf(o,t.prototype),o}return a(t,e),Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return e.prototype.concat.apply(this,t)},t.prototype.prepend=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return 1===e.length&&Array.isArray(e[0])?new(t.bind.apply(t,c([void 0],e[0].concat(this)))):new(t.bind.apply(t,c([void 0],e.concat(this))))},t}(Array);function O(e){return(0,o.o$)(e)?(0,o.ZP)(e,(function(){})):e}function w(){return function(e){return function(e){void 0===e&&(e={});var t=e.thunk,r=void 0===t||t,n=(e.immutableCheck,e.serializableCheck,new b);r&&("boolean"==typeof r?n.push(u.Z):n.push(u.Z.withExtraArgument(r.extraArgument)));0;return n}(e)}}function _(e){var t,r=w(),n=e||{},o=n.reducer,u=void 0===o?void 0:o,a=n.middleware,f=void 0===a?r():a,p=n.devTools,d=void 0===p||p,l=n.preloadedState,s=void 0===l?void 0:l,b=n.enhancers,O=void 0===b?void 0:b;if("function"==typeof u)t=u;else{if(!h(u))throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');t=(0,i.UY)(u)}var _=f;"function"==typeof _&&(_=_(r));var m=i.md.apply(void 0,_),g=i.qC;d&&(g=v(y({trace:!1},"object"==typeof d&&d)));var E=[m];Array.isArray(O)?E=c([m],O):"function"==typeof O&&(E=O(E));var S=g.apply(void 0,E);return(0,i.MT)(t,s,S)}function m(e,t){function r(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];if(t){var o=t.apply(void 0,r);if(!o)throw new Error("prepareAction did not return an object");return y(y({type:e,payload:o.payload},"meta"in o&&{meta:o.meta}),"error"in o&&{error:o.error})}return{type:e,payload:r[0]}}return r.toString=function(){return""+e},r.type=e,r.match=function(t){return t.type===e},r}function g(e){var t,r={},n=[],o={addCase:function(e,t){var n="string"==typeof e?e:e.type;if(n in r)throw new Error("addCase cannot be called with two reducers for the same action type");return r[n]=t,o},addMatcher:function(e,t){return n.push({matcher:e,reducer:t}),o},addDefaultCase:function(e){return t=e,o}};return e(o),[r,n,t]}function E(e){var t=e.name;if(!t)throw new Error("`name` is a required option for createSlice");var r,n="function"==typeof e.initialState?e.initialState:O(e.initialState),i=e.reducers||{},u=Object.keys(i),a={},f={},p={};function d(){var t="function"==typeof e.extraReducers?g(e.extraReducers):[e.extraReducers],r=t[0],i=void 0===r?{}:r,u=t[1],a=void 0===u?[]:u,p=t[2],d=void 0===p?void 0:p,l=y(y({},i),f);return function(e,t,r,n){void 0===r&&(r=[]);var i,u="function"==typeof t?g(t):[t,r,n],a=u[0],f=u[1],p=u[2];if("function"==typeof e)i=function(){return O(e())};else{var d=O(e);i=function(){return d}}function l(e,t){void 0===e&&(e=i());var r=c([a[t.type]],f.filter((function(e){return(0,e.matcher)(t)})).map((function(e){return e.reducer})));return 0===r.filter((function(e){return!!e})).length&&(r=[p]),r.reduce((function(e,r){if(r){var n;if((0,o.mv)(e))return void 0===(n=r(e,t))?e:n;if((0,o.o$)(e))return(0,o.ZP)(e,(function(e){return r(e,t)}));if(void 0===(n=r(e,t))){if(null===e)return e;throw Error("A case reducer on a non-draftable value must not return undefined")}return n}return e}),e)}return l.getInitialState=i,l}(n,l,a,d)}return u.forEach((function(e){var r,n,o=i[e],u=t+"/"+e;"reducer"in o?(r=o.reducer,n=o.prepare):r=o,a[e]=r,f[u]=r,p[e]=n?m(u,n):m(u)})),{name:t,reducer:function(e,t){return r||(r=d()),r(e,t)},actions:p,caseReducers:a,getInitialState:function(){return r||(r=d()),r.getInitialState()}}}Object.assign;var S="listenerMiddleware";m(S+"/add"),m(S+"/removeAll"),m(S+"/remove");(0,o.pV)()}}]);
//# sourceMappingURL=redux.ce515dbe061ba327a87d.js.map