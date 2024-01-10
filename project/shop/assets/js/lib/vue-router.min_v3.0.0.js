/**
  * vue-router v3.0.0
  * (c) 2017 Evan You
  * @license MIT
  */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.VueRouter=e()}(this,function(){"use strict";function t(t,e){}function e(t){return Object.prototype.toString.call(t).indexOf("Error")>-1}function r(t,e){switch(typeof e){case"undefined":return;case"object":return e;case"function":return e(t);case"boolean":return e?t.params:void 0}}function n(t,e,r){void 0===e&&(e={});var n,i=r||o;try{n=i(t||"")}catch(t){n={}}for(var a in e)n[a]=e[a];return n}function o(t){var e={};return(t=t.trim().replace(/^(\?|#|&)/,""))?(t.split("&").forEach(function(t){var r=t.replace(/\+/g," ").split("="),n=Pt(r.shift()),o=r.length>0?Pt(r.join("=")):null;void 0===e[n]?e[n]=o:Array.isArray(e[n])?e[n].push(o):e[n]=[e[n],o]}),e):e}function i(t){var e=t?Object.keys(t).map(function(e){var r=t[e];if(void 0===r)return"";if(null===r)return Lt(e);if(Array.isArray(r)){var n=[];return r.forEach(function(t){void 0!==t&&(null===t?n.push(Lt(e)):n.push(Lt(e)+"="+Lt(t)))}),n.join("&")}return Lt(e)+"="+Lt(r)}).filter(function(t){return t.length>0}).join("&"):null;return e?"?"+e:""}function a(t,e,r,n){var o=n&&n.options.stringifyQuery,i=e.query||{};try{i=u(i)}catch(t){}var a={name:e.name||t&&t.name,meta:t&&t.meta||{},path:e.path||"/",hash:e.hash||"",query:i,params:e.params||{},fullPath:s(e,o),matched:t?c(t):[]};return r&&(a.redirectedFrom=s(r,o)),Object.freeze(a)}function u(t){if(Array.isArray(t))return t.map(u);if(t&&"object"==typeof t){var e={};for(var r in t)e[r]=u(t[r]);return e}return t}function c(t){for(var e=[];t;)e.unshift(t),t=t.parent;return e}function s(t,e){var r=t.path,n=t.query;void 0===n&&(n={});var o=t.hash;void 0===o&&(o="");var a=e||i;return(r||"/")+a(n)+o}function p(t,e){return e===Mt?t===e:!!e&&(t.path&&e.path?t.path.replace(Ut,"")===e.path.replace(Ut,"")&&t.hash===e.hash&&f(t.query,e.query):!(!t.name||!e.name)&&(t.name===e.name&&t.hash===e.hash&&f(t.query,e.query)&&f(t.params,e.params)))}function f(t,e){if(void 0===t&&(t={}),void 0===e&&(e={}),!t||!e)return t===e;var r=Object.keys(t),n=Object.keys(e);return r.length===n.length&&r.every(function(r){var n=t[r],o=e[r];return"object"==typeof n&&"object"==typeof o?f(n,o):String(n)===String(o)})}function h(t,e){return 0===t.path.replace(Ut,"/").indexOf(e.path.replace(Ut,"/"))&&(!e.hash||t.hash===e.hash)&&l(t.query,e.query)}function l(t,e){for(var r in e)if(!(r in t))return!1;return!0}function d(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||t.defaultPrevented||void 0!==t.button&&0!==t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){var e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function y(t){if(t)for(var e,r=0;r<t.length;r++){if("a"===(e=t[r]).tag)return e;if(e.children&&(e=y(e.children)))return e}}function v(t){if(!v.installed||_t!==t){v.installed=!0,_t=t;var e=function(t){return void 0!==t},r=function(t,r){var n=t.$options._parentVnode;e(n)&&e(n=n.data)&&e(n=n.registerRouteInstance)&&n(t,r)};t.mixin({beforeCreate:function(){e(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),t.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,r(this,this)},destroyed:function(){r(this)}}),Object.defineProperty(t.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(t.prototype,"$route",{get:function(){return this._routerRoot._route}}),t.component("router-view",Tt),t.component("router-link",Vt);var n=t.config.optionMergeStrategies;n.beforeRouteEnter=n.beforeRouteLeave=n.beforeRouteUpdate=n.created}}function m(t,e,r){var n=t.charAt(0);if("/"===n)return t;if("?"===n||"#"===n)return e+t;var o=e.split("/");r&&o[o.length-1]||o.pop();for(var i=t.replace(/^\//,"").split("/"),a=0;a<i.length;a++){var u=i[a];".."===u?o.pop():"."!==u&&o.push(u)}return""!==o[0]&&o.unshift(""),o.join("/")}function g(t){var e="",r="",n=t.indexOf("#");n>=0&&(e=t.slice(n),t=t.slice(0,n));var o=t.indexOf("?");return o>=0&&(r=t.slice(o+1),t=t.slice(0,o)),{path:t,query:r,hash:e}}function b(t){return t.replace(/\/\//g,"/")}function w(t,e){for(var r,n=[],o=0,i=0,a="",u=e&&e.delimiter||"/";null!=(r=Nt.exec(t));){var c=r[0],s=r[1],p=r.index;if(a+=t.slice(i,p),i=p+c.length,s)a+=s[1];else{var f=t[i],h=r[2],l=r[3],d=r[4],y=r[5],v=r[6],m=r[7];a&&(n.push(a),a="");var g=null!=h&&null!=f&&f!==h,b="+"===v||"*"===v,w="?"===v||"*"===v,x=r[2]||u,k=d||y;n.push({name:l||o++,prefix:h||"",delimiter:x,optional:w,repeat:b,partial:g,asterisk:!!m,pattern:k?O(k):m?".*":"[^"+E(x)+"]+?"})}}return i<t.length&&(a+=t.substr(i)),a&&n.push(a),n}function x(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function k(t){return encodeURI(t).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function R(t){for(var e=new Array(t.length),r=0;r<t.length;r++)"object"==typeof t[r]&&(e[r]=new RegExp("^(?:"+t[r].pattern+")$"));return function(r,n){for(var o="",i=r||{},a=(n||{}).pretty?x:encodeURIComponent,u=0;u<t.length;u++){var c=t[u];if("string"!=typeof c){var s,p=i[c.name];if(null==p){if(c.optional){c.partial&&(o+=c.prefix);continue}throw new TypeError('Expected "'+c.name+'" to be defined')}if(Bt(p)){if(!c.repeat)throw new TypeError('Expected "'+c.name+'" to not repeat, but received `'+JSON.stringify(p)+"`");if(0===p.length){if(c.optional)continue;throw new TypeError('Expected "'+c.name+'" to not be empty')}for(var f=0;f<p.length;f++){if(s=a(p[f]),!e[u].test(s))throw new TypeError('Expected all "'+c.name+'" to match "'+c.pattern+'", but received `'+JSON.stringify(s)+"`");o+=(0===f?c.prefix:c.delimiter)+s}}else{if(s=c.asterisk?k(p):a(p),!e[u].test(s))throw new TypeError('Expected "'+c.name+'" to match "'+c.pattern+'", but received "'+s+'"');o+=c.prefix+s}}else o+=c}return o}}function E(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function O(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function C(t,e){return t.keys=e,t}function j(t){return t.sensitive?"":"i"}function A(t,e){var r=t.source.match(/\((?!\?)/g);if(r)for(var n=0;n<r.length;n++)e.push({name:n,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return C(t,e)}function _(t,e,r){for(var n=[],o=0;o<t.length;o++)n.push($(t[o],e,r).source);return C(new RegExp("(?:"+n.join("|")+")",j(r)),e)}function T(t,e,r){return S(w(t,r),e,r)}function S(t,e,r){Bt(e)||(r=e||r,e=[]);for(var n=(r=r||{}).strict,o=!1!==r.end,i="",a=0;a<t.length;a++){var u=t[a];if("string"==typeof u)i+=E(u);else{var c=E(u.prefix),s="(?:"+u.pattern+")";e.push(u),u.repeat&&(s+="(?:"+c+s+")*"),i+=s=u.optional?u.partial?c+"("+s+")?":"(?:"+c+"("+s+"))?":c+"("+s+")"}}var p=E(r.delimiter||"/"),f=i.slice(-p.length)===p;return n||(i=(f?i.slice(0,-p.length):i)+"(?:"+p+"(?=$))?"),i+=o?"$":n&&f?"":"(?="+p+"|$)",C(new RegExp("^"+i,j(r)),e)}function $(t,e,r){return Bt(e)||(r=e||r,e=[]),r=r||{},t instanceof RegExp?A(t,e):Bt(t)?_(t,e,r):T(t,e,r)}function q(t,e,r){try{return(Qt[t]||(Qt[t]=Ft.compile(t)))(e||{},{pretty:!0})}catch(t){return""}}function L(t,e,r,n){var o=e||[],i=r||Object.create(null),a=n||Object.create(null);t.forEach(function(t){P(o,i,a,t)});for(var u=0,c=o.length;u<c;u++)"*"===o[u]&&(o.push(o.splice(u,1)[0]),c--,u--);return{pathList:o,pathMap:i,nameMap:a}}function P(t,e,r,n,o,i){var a=n.path,u=n.name,c=n.pathToRegexpOptions||{},s=M(a,o,c.strict);"boolean"==typeof n.caseSensitive&&(c.sensitive=n.caseSensitive);var p={path:s,regex:U(s,c),components:n.components||{default:n.component},instances:{},name:u,parent:o,matchAs:i,redirect:n.redirect,beforeEnter:n.beforeEnter,meta:n.meta||{},props:null==n.props?{}:n.components?n.props:{default:n.props}};n.children&&n.children.forEach(function(n){var o=i?b(i+"/"+n.path):void 0;P(t,e,r,n,p,o)}),void 0!==n.alias&&(Array.isArray(n.alias)?n.alias:[n.alias]).forEach(function(i){var a={path:i,children:n.children};P(t,e,r,a,o,p.path||"/")}),e[p.path]||(t.push(p.path),e[p.path]=p),u&&(r[u]||(r[u]=p))}function U(t,e){return Ft(t,[],e)}function M(t,e,r){return r||(t=t.replace(/\/$/,"")),"/"===t[0]?t:null==e?t:b(e.path+"/"+t)}function H(t,e,r,o){var i="string"==typeof t?{path:t}:t;if(i.name||i._normalized)return i;if(!i.path&&i.params&&e){(i=I({},i))._normalized=!0;var a=I(I({},e.params),i.params);if(e.name)i.name=e.name,i.params=a;else if(e.matched.length){var u=e.matched[e.matched.length-1].path;i.path=q(u,a,"path "+e.path)}return i}var c=g(i.path||""),s=e&&e.path||"/",p=c.path?m(c.path,s,r||i.append):s,f=n(c.query,i.query,o&&o.options.parseQuery),h=i.hash||c.hash;return h&&"#"!==h.charAt(0)&&(h="#"+h),{_normalized:!0,path:p,query:f,hash:h}}function I(t,e){for(var r in e)t[r]=e[r];return t}function V(t,e){function r(t,r,n){var o=H(t,r,!1,e),a=o.name;if(a){var u=p[a];if(!u)return i(null,o);var f=u.regex.keys.filter(function(t){return!t.optional}).map(function(t){return t.name});if("object"!=typeof o.params&&(o.params={}),r&&"object"==typeof r.params)for(var h in r.params)!(h in o.params)&&f.indexOf(h)>-1&&(o.params[h]=r.params[h]);if(u)return o.path=q(u.path,o.params,'named route "'+a+'"'),i(u,o,n)}else if(o.path){o.params={};for(var l=0;l<c.length;l++){var d=c[l],y=s[d];if(z(y.regex,o.path,o.params))return i(y,o,n)}}return i(null,o)}function n(t,n){var o=t.redirect,u="function"==typeof o?o(a(t,n,null,e)):o;if("string"==typeof u&&(u={path:u}),!u||"object"!=typeof u)return i(null,n);var c=u,s=c.name,p=c.path,f=n.query,h=n.hash,l=n.params;if(f=c.hasOwnProperty("query")?c.query:f,h=c.hasOwnProperty("hash")?c.hash:h,l=c.hasOwnProperty("params")?c.params:l,s)return r({_normalized:!0,name:s,query:f,hash:h,params:l},void 0,n);if(p){var d=B(p,t);return r({_normalized:!0,path:q(d,l,'redirect route with path "'+d+'"'),query:f,hash:h},void 0,n)}return i(null,n)}function o(t,e,n){var o=r({_normalized:!0,path:q(n,e.params,'aliased route with path "'+n+'"')});if(o){var a=o.matched,u=a[a.length-1];return e.params=o.params,i(u,e)}return i(null,e)}function i(t,r,i){return t&&t.redirect?n(t,i||r):t&&t.matchAs?o(t,r,t.matchAs):a(t,r,i,e)}var u=L(t),c=u.pathList,s=u.pathMap,p=u.nameMap;return{match:r,addRoutes:function(t){L(t,c,s,p)}}}function z(t,e,r){var n=e.match(t);if(!n)return!1;if(!r)return!0;for(var o=1,i=n.length;o<i;++o){var a=t.keys[o-1],u="string"==typeof n[o]?decodeURIComponent(n[o]):n[o];a&&(r[a.name]=u)}return!0}function B(t,e){return m(t,e.parent?e.parent.path:"/",!0)}function F(){window.history.replaceState({key:tt()},""),window.addEventListener("popstate",function(t){K(),t.state&&t.state.key&&et(t.state.key)})}function D(t,e,r,n){if(t.app){var o=t.options.scrollBehavior;o&&t.app.$nextTick(function(){var t=J(),i=o(e,r,n?t:null);i&&("function"==typeof i.then?i.then(function(e){G(e,t)}).catch(function(t){}):G(i,t))})}}function K(){var t=tt();t&&(Xt[t]={x:window.pageXOffset,y:window.pageYOffset})}function J(){var t=tt();if(t)return Xt[t]}function N(t,e){var r=document.documentElement.getBoundingClientRect(),n=t.getBoundingClientRect();return{x:n.left-r.left-e.x,y:n.top-r.top-e.y}}function Q(t){return W(t.x)||W(t.y)}function X(t){return{x:W(t.x)?t.x:window.pageXOffset,y:W(t.y)?t.y:window.pageYOffset}}function Y(t){return{x:W(t.x)?t.x:0,y:W(t.y)?t.y:0}}function W(t){return"number"==typeof t}function G(t,e){var r="object"==typeof t;if(r&&"string"==typeof t.selector){var n=document.querySelector(t.selector);if(n){var o=t.offset&&"object"==typeof t.offset?t.offset:{};e=N(n,o=Y(o))}else Q(t)&&(e=X(t))}else r&&Q(t)&&(e=X(t));e&&window.scrollTo(e.x,e.y)}function Z(){return Wt.now().toFixed(3)}function tt(){return Gt}function et(t){Gt=t}function rt(t,e){K();var r=window.history;try{e?r.replaceState({key:Gt},"",t):(Gt=Z(),r.pushState({key:Gt},"",t))}catch(r){window.location[e?"replace":"assign"](t)}}function nt(t){rt(t,!0)}function ot(t,e,r){var n=function(o){o>=t.length?r():t[o]?e(t[o],function(){n(o+1)}):n(o+1)};n(0)}function it(t){return function(r,n,o){var i=!1,a=0,u=null;at(t,function(t,r,n,c){if("function"==typeof t&&void 0===t.cid){i=!0,a++;var s,p=st(function(e){ct(e)&&(e=e.default),t.resolved="function"==typeof e?e:_t.extend(e),n.components[c]=e,--a<=0&&o()}),f=st(function(t){var r="Failed to resolve async component "+c+": "+t;u||(u=e(t)?t:new Error(r),o(u))});try{s=t(p,f)}catch(t){f(t)}if(s)if("function"==typeof s.then)s.then(p,f);else{var h=s.component;h&&"function"==typeof h.then&&h.then(p,f)}}}),i||o()}}function at(t,e){return ut(t.map(function(t){return Object.keys(t.components).map(function(r){return e(t.components[r],t.instances[r],t,r)})}))}function ut(t){return Array.prototype.concat.apply([],t)}function ct(t){return t.__esModule||Zt&&"Module"===t[Symbol.toStringTag]}function st(t){var e=!1;return function(){for(var r=[],n=arguments.length;n--;)r[n]=arguments[n];if(!e)return e=!0,t.apply(this,r)}}function pt(t){if(!t)if(zt){var e=document.querySelector("base");t=(t=e&&e.getAttribute("href")||"/").replace(/^https?:\/\/[^\/]+/,"")}else t="/";return"/"!==t.charAt(0)&&(t="/"+t),t.replace(/\/$/,"")}function ft(t,e){var r,n=Math.max(t.length,e.length);for(r=0;r<n&&t[r]===e[r];r++);return{updated:e.slice(0,r),activated:e.slice(r),deactivated:t.slice(r)}}function ht(t,e,r,n){var o=at(t,function(t,n,o,i){var a=lt(t,e);if(a)return Array.isArray(a)?a.map(function(t){return r(t,n,o,i)}):r(a,n,o,i)});return ut(n?o.reverse():o)}function lt(t,e){return"function"!=typeof t&&(t=_t.extend(t)),t.options[e]}function dt(t){return ht(t,"beforeRouteLeave",vt,!0)}function yt(t){return ht(t,"beforeRouteUpdate",vt)}function vt(t,e){if(e)return function(){return t.apply(e,arguments)}}function mt(t,e,r){return ht(t,"beforeRouteEnter",function(t,n,o,i){return gt(t,o,i,e,r)})}function gt(t,e,r,n,o){return function(i,a,u){return t(i,a,function(t){u(t),"function"==typeof t&&n.push(function(){bt(t,e.instances,r,o)})})}}function bt(t,e,r,n){e[r]?t(e[r]):n()&&setTimeout(function(){bt(t,e,r,n)},16)}function wt(t){var e=window.location.pathname;return t&&0===e.indexOf(t)&&(e=e.slice(t.length)),(e||"/")+window.location.search+window.location.hash}function xt(t){var e=wt(t);if(!/^\/#/.test(e))return window.location.replace(b(t+"/#"+e)),!0}function kt(){var t=Rt();return"/"===t.charAt(0)||(Ct("/"+t),!1)}function Rt(){var t=window.location.href,e=t.indexOf("#");return-1===e?"":t.slice(e+1)}function Et(t){var e=window.location.href,r=e.indexOf("#");return(r>=0?e.slice(0,r):e)+"#"+t}function Ot(t){Yt?rt(Et(t)):window.location.hash=t}function Ct(t){Yt?nt(Et(t)):window.location.replace(Et(t))}function jt(t,e){return t.push(e),function(){var r=t.indexOf(e);r>-1&&t.splice(r,1)}}function At(t,e,r){var n="hash"===r?"#"+e:e;return t?b(t+"/"+n):n}var _t,Tt={name:"router-view",functional:!0,props:{name:{type:String,default:"default"}},render:function(t,e){var n=e.props,o=e.children,i=e.parent,a=e.data;a.routerView=!0;for(var u=i.$createElement,c=n.name,s=i.$route,p=i._routerViewCache||(i._routerViewCache={}),f=0,h=!1;i&&i._routerRoot!==i;)i.$vnode&&i.$vnode.data.routerView&&f++,i._inactive&&(h=!0),i=i.$parent;if(a.routerViewDepth=f,h)return u(p[c],a,o);var l=s.matched[f];if(!l)return p[c]=null,u();var d=p[c]=l.components[c];a.registerRouteInstance=function(t,e){var r=l.instances[c];(e&&r!==t||!e&&r===t)&&(l.instances[c]=e)},(a.hook||(a.hook={})).prepatch=function(t,e){l.instances[c]=e.componentInstance},a.props=r(s,l.props&&l.props[c]),a.attrs={};for(var y in a.props)"props"in d&&y in d.props||(a.attrs[y]=a.props[y],delete a.props[y]);return u(d,a,o)}},St=/[!'()*]/g,$t=function(t){return"%"+t.charCodeAt(0).toString(16)},qt=/%2C/g,Lt=function(t){return encodeURIComponent(t).replace(St,$t).replace(qt,",")},Pt=decodeURIComponent,Ut=/\/?$/,Mt=a(null,{path:"/"}),Ht=[String,Object],It=[String,Array],Vt={name:"router-link",props:{to:{type:Ht,required:!0},tag:{type:String,default:"a"},exact:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,event:{type:It,default:"click"}},render:function(t){var e=this,r=this.$router,n=this.$route,o=r.resolve(this.to,n,this.append),i=o.location,u=o.route,c=o.href,s={},f=r.options.linkActiveClass,l=r.options.linkExactActiveClass,v=null==f?"router-link-active":f,m=null==l?"router-link-exact-active":l,g=null==this.activeClass?v:this.activeClass,b=null==this.exactActiveClass?m:this.exactActiveClass,w=i.path?a(null,i,null,r):u;s[b]=p(n,w),s[g]=this.exact?s[b]:h(n,w);var x=function(t){d(t)&&(e.replace?r.replace(i):r.push(i))},k={click:d};Array.isArray(this.event)?this.event.forEach(function(t){k[t]=x}):k[this.event]=x;var R={class:s};if("a"===this.tag)R.on=k,R.attrs={href:c};else{var E=y(this.$slots.default);if(E){E.isStatic=!1;var O=_t.util.extend;(E.data=O({},E.data)).on=k,(E.data.attrs=O({},E.data.attrs)).href=c}else R.on=k}return t(this.tag,R,this.$slots.default)}},zt="undefined"!=typeof window,Bt=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},Ft=$,Dt=w,Kt=R,Jt=S,Nt=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");Ft.parse=Dt,Ft.compile=function(t,e){return R(w(t,e))},Ft.tokensToFunction=Kt,Ft.tokensToRegExp=Jt;var Qt=Object.create(null),Xt=Object.create(null),Yt=zt&&function(){var t=window.navigator.userAgent;return(-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&(window.history&&"pushState"in window.history)}(),Wt=zt&&window.performance&&window.performance.now?window.performance:Date,Gt=Z(),Zt="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag,te=function(t,e){this.router=t,this.base=pt(e),this.current=Mt,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[]};te.prototype.listen=function(t){this.cb=t},te.prototype.onReady=function(t,e){this.ready?t():(this.readyCbs.push(t),e&&this.readyErrorCbs.push(e))},te.prototype.onError=function(t){this.errorCbs.push(t)},te.prototype.transitionTo=function(t,e,r){var n=this,o=this.router.match(t,this.current);this.confirmTransition(o,function(){n.updateRoute(o),e&&e(o),n.ensureURL(),n.ready||(n.ready=!0,n.readyCbs.forEach(function(t){t(o)}))},function(t){r&&r(t),t&&!n.ready&&(n.ready=!0,n.readyErrorCbs.forEach(function(e){e(t)}))})},te.prototype.confirmTransition=function(r,n,o){var i=this,a=this.current,u=function(r){e(r)&&(i.errorCbs.length?i.errorCbs.forEach(function(t){t(r)}):(t(!1,"uncaught error during route navigation:"),console.error(r))),o&&o(r)};if(p(r,a)&&r.matched.length===a.matched.length)return this.ensureURL(),u();var c=ft(this.current.matched,r.matched),s=c.updated,f=c.deactivated,h=c.activated,l=[].concat(dt(f),this.router.beforeHooks,yt(s),h.map(function(t){return t.beforeEnter}),it(h));this.pending=r;var d=function(t,n){if(i.pending!==r)return u();try{t(r,a,function(t){!1===t||e(t)?(i.ensureURL(!0),u(t)):"string"==typeof t||"object"==typeof t&&("string"==typeof t.path||"string"==typeof t.name)?(u(),"object"==typeof t&&t.replace?i.replace(t):i.push(t)):n(t)})}catch(t){u(t)}};ot(l,d,function(){var t=[];ot(mt(h,t,function(){return i.current===r}).concat(i.router.resolveHooks),d,function(){if(i.pending!==r)return u();i.pending=null,n(r),i.router.app&&i.router.app.$nextTick(function(){t.forEach(function(t){t()})})})})},te.prototype.updateRoute=function(t){var e=this.current;this.current=t,this.cb&&this.cb(t),this.router.afterHooks.forEach(function(r){r&&r(t,e)})};var ee=function(t){function e(e,r){var n=this;t.call(this,e,r);var o=e.options.scrollBehavior;o&&F();var i=wt(this.base);window.addEventListener("popstate",function(t){var r=n.current,a=wt(n.base);n.current===Mt&&a===i||n.transitionTo(a,function(t){o&&D(e,t,r,!0)})})}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.go=function(t){window.history.go(t)},e.prototype.push=function(t,e,r){var n=this,o=this.current;this.transitionTo(t,function(t){rt(b(n.base+t.fullPath)),D(n.router,t,o,!1),e&&e(t)},r)},e.prototype.replace=function(t,e,r){var n=this,o=this.current;this.transitionTo(t,function(t){nt(b(n.base+t.fullPath)),D(n.router,t,o,!1),e&&e(t)},r)},e.prototype.ensureURL=function(t){if(wt(this.base)!==this.current.fullPath){var e=b(this.base+this.current.fullPath);t?rt(e):nt(e)}},e.prototype.getCurrentLocation=function(){return wt(this.base)},e}(te),re=function(t){function e(e,r,n){t.call(this,e,r),n&&xt(this.base)||kt()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this,e=this.router.options.scrollBehavior,r=Yt&&e;r&&F(),window.addEventListener(Yt?"popstate":"hashchange",function(){var e=t.current;kt()&&t.transitionTo(Rt(),function(n){r&&D(t.router,n,e,!0),Yt||Ct(n.fullPath)})})},e.prototype.push=function(t,e,r){var n=this,o=this.current;this.transitionTo(t,function(t){Ot(t.fullPath),D(n.router,t,o,!1),e&&e(t)},r)},e.prototype.replace=function(t,e,r){var n=this,o=this.current;this.transitionTo(t,function(t){Ct(t.fullPath),D(n.router,t,o,!1),e&&e(t)},r)},e.prototype.go=function(t){window.history.go(t)},e.prototype.ensureURL=function(t){var e=this.current.fullPath;Rt()!==e&&(t?Ot(e):Ct(e))},e.prototype.getCurrentLocation=function(){return Rt()},e}(te),ne=function(t){function e(e,r){t.call(this,e,r),this.stack=[],this.index=-1}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.push=function(t,e,r){var n=this;this.transitionTo(t,function(t){n.stack=n.stack.slice(0,n.index+1).concat(t),n.index++,e&&e(t)},r)},e.prototype.replace=function(t,e,r){var n=this;this.transitionTo(t,function(t){n.stack=n.stack.slice(0,n.index).concat(t),e&&e(t)},r)},e.prototype.go=function(t){var e=this,r=this.index+t;if(!(r<0||r>=this.stack.length)){var n=this.stack[r];this.confirmTransition(n,function(){e.index=r,e.updateRoute(n)})}},e.prototype.getCurrentLocation=function(){var t=this.stack[this.stack.length-1];return t?t.fullPath:"/"},e.prototype.ensureURL=function(){},e}(te),oe=function(t){void 0===t&&(t={}),this.app=null,this.apps=[],this.options=t,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=V(t.routes||[],this);var e=t.mode||"hash";switch(this.fallback="history"===e&&!Yt&&!1!==t.fallback,this.fallback&&(e="hash"),zt||(e="abstract"),this.mode=e,e){case"history":this.history=new ee(this,t.base);break;case"hash":this.history=new re(this,t.base,this.fallback);break;case"abstract":this.history=new ne(this,t.base)}},ie={currentRoute:{configurable:!0}};return oe.prototype.match=function(t,e,r){return this.matcher.match(t,e,r)},ie.currentRoute.get=function(){return this.history&&this.history.current},oe.prototype.init=function(t){var e=this;if(this.apps.push(t),!this.app){this.app=t;var r=this.history;if(r instanceof ee)r.transitionTo(r.getCurrentLocation());else if(r instanceof re){var n=function(){r.setupListeners()};r.transitionTo(r.getCurrentLocation(),n,n)}r.listen(function(t){e.apps.forEach(function(e){e._route=t})})}},oe.prototype.beforeEach=function(t){return jt(this.beforeHooks,t)},oe.prototype.beforeResolve=function(t){return jt(this.resolveHooks,t)},oe.prototype.afterEach=function(t){return jt(this.afterHooks,t)},oe.prototype.onReady=function(t,e){this.history.onReady(t,e)},oe.prototype.onError=function(t){this.history.onError(t)},oe.prototype.push=function(t,e,r){this.history.push(t,e,r)},oe.prototype.replace=function(t,e,r){this.history.replace(t,e,r)},oe.prototype.go=function(t){this.history.go(t)},oe.prototype.back=function(){this.go(-1)},oe.prototype.forward=function(){this.go(1)},oe.prototype.getMatchedComponents=function(t){var e=t?t.matched?t:this.resolve(t).route:this.currentRoute;return e?[].concat.apply([],e.matched.map(function(t){return Object.keys(t.components).map(function(e){return t.components[e]})})):[]},oe.prototype.resolve=function(t,e,r){var n=H(t,e||this.history.current,r,this),o=this.match(n,e),i=o.redirectedFrom||o.fullPath;return{location:n,route:o,href:At(this.history.base,i,this.mode),normalizedTo:n,resolved:o}},oe.prototype.addRoutes=function(t){this.matcher.addRoutes(t),this.history.current!==Mt&&this.history.transitionTo(this.history.getCurrentLocation())},Object.defineProperties(oe.prototype,ie),oe.install=v,oe.version="3.0.0",zt&&window.Vue&&window.Vue.use(oe),oe});