"use strict";var precacheConfig=[["/404.html","e9372add3c6447ffaaacc32ab43cd87d"],["/about/index.html","a3a2520d4dc4b45e315220a161ff7708"],["/archives/2018/06/index.html","d63875cdb388746621a1c0f93d5fe1c0"],["/archives/2018/07/index.html","f4983fefef427478efeecb87653f6735"],["/archives/2018/10/index.html","8c25393514c8f876b53c1e68c80fe69c"],["/archives/2018/index.html","762bf94f7a4647d6e5753186149d133f"],["/archives/2018/page/2/index.html","3d88a0335859df914dbae8f9a37821ee"],["/archives/2019/03/index.html","e7aed736cdf485cedf1466ff3dce9a5c"],["/archives/2019/04/index.html","576d19e67ff93104a9cb16cf6f89c258"],["/archives/2019/05/index.html","e2461bba2898519bf3ab327101e9f807"],["/archives/2019/index.html","015e3b8fa84bef377ca50abd9e4fc6b1"],["/archives/index.html","b67b7dfdeeab869e37ae22922a2efc05"],["/archives/page/2/index.html","4813220a3e7a3b4da26b4f9a8c50af42"],["/assets/algolia/algoliasearch.js","381de2686bb6597e5736145c60c5719b"],["/assets/algolia/algoliasearch.min.js","e07475adca84ac447b7ff987b79551f3"],["/assets/algolia/algoliasearchLite.js","3bfdcec166b8fc8421f4f90bfb443065"],["/assets/algolia/algoliasearchLite.min.js","ae0e2e5bfe2281cdd000426519ef8df7"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Android/index.html","49374d8124b7b58e4a249ad502ebe3d2"],["/categories/Android/第一行代碼/index.html","311a8ed4961532a0b17c906d706b0d86"],["/categories/Hexo/index.html","4fde35b5268363a3c0bce75ba5e9b741"],["/categories/Java/index.html","d2fb31a5f8d6144ef9e45bfd235cb4b9"],["/categories/Win10/index.html","e5a8d1acca369591b70df2f7dfb9d529"],["/categories/index.html","876e5f9e99f06adfd2a165a534c6789a"],["/categories/工具/index.html","e6c829ae8efd793ec2e7f6fe5f1ded9a"],["/categories/軟件推薦/index.html","bfacfb1dd3a431d359f6f378c8ed1d21"],["/css/index.css","977becbf3db552faf6cda35d55a79e59"],["/css/nightshift.css","4e07e53a6fe204e316f79ef2a1d5710d"],["/css/other.css","8a9467be458840146764c57dfca2a404"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/alipay.jpg","9d7d25339256096f77b7a3634bcd6e33"],["/img/avatar.jpg","1581d00a080eb6890b166de0a05a35ff"],["/img/avatar.png","4c19f156e9abcdd04f185df09980173b"],["/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["/img/donate1.png","5d205ff60176b96b3ca23211d35719bf"],["/img/donate2.png","987428b250cb9fac9a6596639410c8ea"],["/img/donate3.png","28a2878fefe885b9551f853557e76ffe"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/pwa/144.png","5a2c1fcee12cb8ab89638adcb84f24ab"],["/img/pwa/16.png","442a30b6c3641b36006dd366856eb323"],["/img/pwa/192.png","45d7b035099610fee893675caa16f90b"],["/img/pwa/32.png","0f8b81cc9cd875bf9e55498b61c408ae"],["/img/pwa/36.png","f6d44ec9bd3be96002eec24c582f1830"],["/img/pwa/48.png","a445be49c9b6a5d4583c451670aea662"],["/img/pwa/512.png","e39a2152c0a2a1cb052db5d19cf1a832"],["/img/pwa/72.png","d45790e309310ad8be75b793269de0dd"],["/img/pwa/96.png","c5659ed2c2c12af22f21d94d255cd4f5"],["/img/pwa/apple-touch-icon.png","df48bde75f3b1429a49cf3828b110ebf"],["/img/pwa/safari-pinned-tab.svg","3630c6c7d1441550d161d56456290914"],["/img/wechat.jpg","67599109276ad864d53e34817dbc0d72"],["/index.html","b1e05fa405d34abc506db5687b5a51db"],["/js/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["/js/main.js","24b039fcb457ccd9c7d50d63c83c484c"],["/js/nightshift.js","8ba2697eea20bf21136775be240b5492"],["/js/runtimeshow.js","30193b3cc9a42210a11559725ce696d8"],["/js/search/algolia.js","db2e58114adef0dfd2f2d0a246b50ef4"],["/js/search/local-search.js","e7bab78aa2b388479ea96bb0b04b6834"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/canvas-ribbon.js","6ca731e8db63562c0dd6461eabbd65d7"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/piao.js","d7a4ef27420717adccfca1c1287f8c44"],["/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["/js/tw_cn.js","95b21c70434a525c8105ab19081d59d8"],["/js/utils.js","816e7d34d69996e6a4f0b92a81c16cca"],["/link/index.html","0d862f51e2c2b6827eea35bee57fb770"],["/messageboard/index.html","a95fe18fe7cec2ce1f59122b4e8ed4db"],["/music/index.html","a2d4eaebefe3f055f7b1ac983bc39052"],["/page/2/index.html","367309536fb002b6616ace66d1049416"],["/posts/125d29fb/index.html","61b322925d31ea923fd8417a9ccd0432"],["/posts/23dcbb21/index.html","b1e7dffa6abad9d17bd18b7b388afd06"],["/posts/31391d01/index.html","76d5853cd5128668f3879ad123309c08"],["/posts/44aa2b74/index.html","a2ef95b16ee495ed8227bebb08d27d72"],["/posts/46be9372/index.html","0d40e8222be87567f1e4fe490e3ac325"],["/posts/58a40d07/index.html","9fd59e4259493e5ae4cccbdf20efd918"],["/posts/59b77e20/index.html","43069cddb04e58bab22d0fc4c2a06ecb"],["/posts/7029147f/index.html","0feecc70a1ce58be7f10f9deef117c37"],["/posts/75c18a/index.html","d011ed751f162a4dfefd2e3e696d0aa5"],["/posts/777fb9e9/index.html","4862d7dc1a5823609e6c9fa083652cf1"],["/posts/86e73295/index.html","6d89ac956bb96c2e3144089d38b9c219"],["/posts/a4ecdf66/index.html","b0c7d6133baf66388a3730d0acab3c21"],["/posts/aa98736e/index.html","d7e85e24471627510f2d46d724e0d7e0"],["/posts/d6615de0/index.html","2161de63c7d64505dcadc602116a5358"],["/posts/d786a301/index.html","3a53a6601beb89a3b351b0ba14d8fca8"],["/posts/d87ce901/index.html","74d8701aebff29ddb319f0407300becd"],["/posts/dda8c81b/index.html","62be94a8e2a44bf176e77abde6917058"],["/posts/e129ca4d/index.html","fa81e9d2d08c692788197564bdc6e276"],["/posts/effd323a/index.html","63e7e8a83fd70169afd11f0ebbc016bb"],["/posts/f5f84b52/index.html","6eaa1ef26d1b846e7de568ff65f284fb"],["/rss/index.html","18aae08475f9ec64a40a678e58c2c3bc"],["/tags/9Patch/index.html","601935b6a7ed1ec64c73c0f42c4b2f7e"],["/tags/Adapter/index.html","ba60fcecd34c3f5cbafa87d41aea4c1e"],["/tags/Android/index.html","352bba2331a408c6328339177b23048f"],["/tags/Android/page/2/index.html","0ce1a5dd3ec6daf3316300253d2f673c"],["/tags/Hexo/index.html","2ccb685c3ac5489e6dec179314ffa95a"],["/tags/Java/index.html","db5e899d38093d4c207e19d74ef603b7"],["/tags/Layout/index.html","ede022547710dad538b0e4de1c3ecfd6"],["/tags/ListView/index.html","4e17cdda0aee21633242bedf336e3b99"],["/tags/RecyclerView/index.html","68489acbdb6818a3926f4aa3d969c759"],["/tags/UI/index.html","bfca4d0ef0c5b8e4bd602fa70ca7334c"],["/tags/Visual-Studio-Code/index.html","289e33dde1646a322392484a06c57587"],["/tags/Win10/index.html","e56bbb24f1115f862b69a04de8ed3163"],["/tags/chrome插件/index.html","f23853d749a3c5c62f82bc75328cf5c3"],["/tags/grade/index.html","fbc42207744306a1b130552987bfc15b"],["/tags/index.html","dd4bfd59451f0167514a698531baafb4"],["/tags/next/index.html","234539e1c9759680c02623ccc5804f74"],["/tags/windows/index.html","1b4dde24613016a1f762927bdf254d7b"],["/tags/主題/index.html","1fdc91bf7b02f49a14996bddbef96d24"],["/tags/佈局/index.html","e06a949fe145994bc86357163fb3fbbd"],["/tags/圖床/index.html","a5ac3f65ffbe50ce48923d3320e1d35d"],["/tags/工具/index.html","d296fd04758d957bff33b5f15c10f6fe"],["/tags/控件/index.html","2cf119a2bfdde42c90457a7c0f145b98"],["/tags/插件/index.html","e4ce6613b57049bc34b54a584f187b10"],["/tags/第一行代碼/index.html","1b398c59b4e37d949b7e71c62d6acbdf"],["/tags/軟件/index.html","5594453e525cd0e3cf807d9b06522b9e"]],cacheName="sw-precache-v3--"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,n,r){var a=new URL(e);return r&&a.pathname.match(r)||(a.search+=(a.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),a.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],r=new URL(t,self.location),a=createCacheKey(r,hashParamName,n,!1);return[r.toString(),a]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var r=new Request(n,{credentials:"same-origin"});return fetch(r).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,"index.html"),t=urlsToCacheKeys.has(n));0,t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}}),function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).toolbox=e()}}(function(){return function e(t,n,r){function a(o,i){if(!n[o]){if(!t[o]){var s="function"==typeof require&&require;if(!i&&s)return s(o,!0);if(c)return c(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var d=n[o]={exports:{}};t[o][0].call(d.exports,function(e){var n=t[o][1][e];return a(n||e)},d,d.exports,e,t,n,r)}return n[o].exports}for(var c="function"==typeof require&&require,o=0;o<r.length;o++)a(r[o]);return a}({1:[function(e,t,n){function r(e,t){((t=t||{}).debug||s.debug)&&console.log("[sw-toolbox] "+e)}function a(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||s.cache.name,caches.open(t)}function c(e,t,n){var a=e.url,c=n.maxAgeSeconds,o=n.maxEntries,i=n.name,s=Date.now();return r("Updating LRU order for "+a+". Max entries is "+o+", max age is "+c),f.getDb(i).then(function(e){return f.setTimestampForUrl(e,a,s)}).then(function(e){return f.expireEntries(e,o,c,s)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function o(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}var i,s=e("./options"),f=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:function(e,t){var n=(t=t||{}).successResponses||s.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&a(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||s.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&function(e,t,n){var r=c.bind(null,e,t,n);i=i?i.then(r):r()}(e,n,r)})}),r.clone()})},openCache:a,renameCache:function(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})},cache:function(e,t){return a(t).then(function(t){return t.add(e)})},uncache:function(e,t){return a(t).then(function(t){return t.delete(e)})},precache:function(e){e instanceof Promise||o(e),s.preCacheItems=s.preCacheItems.concat(e)},validatePrecacheInput:o,isResponseFresh:function(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r&&new Date(r).getTime()+1e3*t<n)return!1}return!0}}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){var r="sw-toolbox-",a=1,c="store",o="url",i="timestamp",s={};t.exports={getDb:function(e){return e in s||(s[e]=function(e){return new Promise(function(t,n){var s=indexedDB.open(r+e,a);s.onupgradeneeded=function(){s.result.createObjectStore(c,{keyPath:o}).createIndex(i,i,{unique:!1})},s.onsuccess=function(){t(s.result)},s.onerror=function(){n(s.error)}})}(e)),s[e]},setTimestampForUrl:function(e,t,n){return new Promise(function(r,a){var o=e.transaction(c,"readwrite");o.objectStore(c).put({url:t,timestamp:n}),o.oncomplete=function(){r(e)},o.onabort=function(){a(o.error)}})},expireEntries:function(e,t,n,r){return function(e,t,n){return t?new Promise(function(r,a){var s=1e3*t,f=[],d=e.transaction(c,"readwrite"),u=d.objectStore(c);u.index(i).openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-s>t.value[i]){var r=t.value[o];f.push(r),u.delete(r),t.continue()}},d.oncomplete=function(){r(f)},d.onabort=a}):Promise.resolve([])}(e,n,r).then(function(n){return function(e,t){return t?new Promise(function(n,r){var a=[],s=e.transaction(c,"readwrite"),f=s.objectStore(c),d=f.index(i),u=d.count();d.count().onsuccess=function(){var e=u.result;e>t&&(d.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var c=r.value[o];a.push(c),f.delete(c),e-a.length>t&&r.continue()}})},s.oncomplete=function(){n(a)},s.onabort=r}):Promise.resolve([])}(e,t).then(function(e){return n.concat(e)})})}}},{}],3:[function(e,t,n){function r(e){return e.reduce(function(e,t){return e.concat(t)},[])}e("serviceworker-cache-polyfill");var a=e("./helpers"),c=e("./router"),o=e("./options");t.exports={fetchListener:function(e){var t=c.match(e.request);t?e.respondWith(t(e.request)):c.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(c.default(e.request))},activateListener:function(e){a.debug("activate event fired");var t=o.cache.name+"$$$inactive$$$";e.waitUntil(a.renameCache(t,o.cache.name))},installListener:function(e){var t=o.cache.name+"$$$inactive$$$";a.debug("install event fired"),a.debug("creating cache ["+t+"]"),e.waitUntil(a.openCache({cache:{name:t}}).then(function(e){return Promise.all(o.preCacheItems).then(r).then(a.validatePrecacheInput).then(function(t){return a.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){var r=new URL("./",self.location).pathname,a=e("path-to-regexp"),c=function(e,t,n,c){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=r+t),this.keys=[],this.regexp=a(t,this.keys)),this.method=e,this.options=c,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){var r=e("./route"),a=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),a=[];!r.done;){new RegExp(r.value[0]).test(t)&&a.push(r.value[1]),r=n.next()}return a},o=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){o.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),o.prototype.add=function(e,t,n,c){var o;c=c||{},t instanceof RegExp?o=RegExp:o=(o=c.origin||self.location.origin)instanceof RegExp?o.source:function(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}(o),e=e.toLowerCase();var i=new r(e,t,n,c);this.routes.has(o)||this.routes.set(o,new Map);var s=this.routes.get(o);s.has(e)||s.set(e,new Map);var f=s.get(e),d=i.regexp||i.fullUrlRegExp;f.has(d.source)&&a.debug('"'+t+'" resolves to same regex as existing route.'),f.set(d.source,i)},o.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,a=n.pathname;return this._match(e,c(this.routes,r),a)||this._match(e,[this.routes.get(RegExp)],t)},o.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var a=t[r],o=a&&a.get(e.toLowerCase());if(o){var i=c(o,n);if(i.length>0)return i[0].makeHandler(n)}}return null},o.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new o},{"./helpers":1,"./route":5}],7:[function(e,t,n){var r=e("../options"),a=e("../helpers");t.exports=function(e,t,n){return n=n||{},a.debug("Strategy: cache first ["+e.url+"]",n),a.openCache(n).then(function(t){return t.match(e).then(function(t){var c=n.cache||r.cache,o=Date.now();return a.isResponseFresh(t,c.maxAgeSeconds,o)?t:a.fetchAndCache(e,n)})})}},{"../helpers":1,"../options":4}],8:[function(e,t,n){var r=e("../options"),a=e("../helpers");t.exports=function(e,t,n){return n=n||{},a.debug("Strategy: cache only ["+e.url+"]",n),a.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||r.cache,c=Date.now();if(a.isResponseFresh(e,t.maxAgeSeconds,c))return e})})}},{"../helpers":1,"../options":4}],9:[function(e,t,n){var r=e("../helpers"),a=e("./cacheOnly");t.exports=function(e,t,n){return r.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(c,o){var i=!1,s=[],f=function(e){s.push(e.toString()),i?o(new Error('Both cache and network failed: "'+s.join('", "')+'"')):i=!0},d=function(e){e instanceof Response?c(e):f("No result returned")};r.fetchAndCache(e.clone(),n).then(d,f),a(e,t,n).then(d,f)})}},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){var r=e("../options"),a=e("../helpers");t.exports=function(e,t,n){var c=(n=n||{}).successResponses||r.successResponses,o=n.networkTimeoutSeconds||r.networkTimeoutSeconds;return a.debug("Strategy: network first ["+e.url+"]",n),a.openCache(n).then(function(t){var i,s,f=[];if(o){var d=new Promise(function(c){i=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||r.cache,o=Date.now(),i=t.maxAgeSeconds;a.isResponseFresh(e,i,o)&&c(e)})},1e3*o)});f.push(d)}var u=a.fetchAndCache(e,n).then(function(e){if(i&&clearTimeout(i),c.test(e.status))return e;throw a.debug("Response was an HTTP error: "+e.statusText,n),s=e,new Error("Bad response")}).catch(function(r){return a.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(s)return s;throw r})});return f.push(u),Promise.race(f)})}},{"../helpers":1,"../options":4}],12:[function(e,t,n){var r=e("../helpers");t.exports=function(e,t,n){return r.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}},{"../helpers":1}],13:[function(e,t,n){var r=e("./options"),a=e("./router"),c=e("./helpers"),o=e("./strategies"),i=e("./listeners");c.debug("Service Worker Toolbox is loading"),self.addEventListener("install",i.installListener),self.addEventListener("activate",i.activateListener),self.addEventListener("fetch",i.fetchListener),t.exports={networkOnly:o.networkOnly,networkFirst:o.networkFirst,cacheOnly:o.cacheOnly,cacheFirst:o.cacheFirst,fastest:o.fastest,router:a,options:r,cache:c.cache,uncache:c.uncache,precache:c.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],a=0,c=0,o="",f=t&&t.delimiter||"/";null!=(n=p.exec(e));){var d=n[0],u=n[1],h=n.index;if(o+=e.slice(c,h),c=h+d.length,u)o+=u[1];else{var l=e[c],b=n[2],m=n[3],g=n[4],x=n[5],v=n[6],w=n[7];o&&(r.push(o),o="");var y=null!=b&&null!=l&&l!==b,j="+"===v||"*"===v,R="?"===v||"*"===v,E=n[2]||f,C=g||x;r.push({name:m||a++,prefix:b||"",delimiter:E,optional:R,repeat:j,partial:y,asterisk:!!w,pattern:C?s(C):w?".*":"[^"+i(E)+"]+?"})}}return c<e.length&&(o+=e.substr(c)),o&&r.push(o),r}function a(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function o(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",i=n||{},s=(r||{}).pretty?a:encodeURIComponent,f=0;f<e.length;f++){var d=e[f];if("string"!=typeof d){var u,h=i[d.name];if(null==h){if(d.optional){d.partial&&(o+=d.prefix);continue}throw new TypeError('Expected "'+d.name+'" to be defined')}if(l(h)){if(!d.repeat)throw new TypeError('Expected "'+d.name+'" to not repeat, but received `'+JSON.stringify(h)+"`");if(0===h.length){if(d.optional)continue;throw new TypeError('Expected "'+d.name+'" to not be empty')}for(var p=0;p<h.length;p++){if(u=s(h[p]),!t[f].test(u))throw new TypeError('Expected all "'+d.name+'" to match "'+d.pattern+'", but received `'+JSON.stringify(u)+"`");o+=(0===p?d.prefix:d.delimiter)+u}}else{if(u=d.asterisk?c(h):s(h),!t[f].test(u))throw new TypeError('Expected "'+d.name+'" to match "'+d.pattern+'", but received "'+u+'"');o+=d.prefix+u}}else o+=d}return o}}function i(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function s(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function d(e){return e.sensitive?"":"i"}function u(e,t,n){l(t)||(n=t||n,t=[]);for(var r=(n=n||{}).strict,a=!1!==n.end,c="",o=0;o<e.length;o++){var s=e[o];if("string"==typeof s)c+=i(s);else{var u=i(s.prefix),h="(?:"+s.pattern+")";t.push(s),s.repeat&&(h+="(?:"+u+h+")*"),c+=h=s.optional?s.partial?u+"("+h+")?":"(?:"+u+"("+h+"))?":u+"("+h+")"}}var p=i(n.delimiter||"/"),b=c.slice(-p.length)===p;return r||(c=(b?c.slice(0,-p.length):c)+"(?:"+p+"(?=$))?"),c+=a?"$":r&&b?"":"(?="+p+"|$)",f(new RegExp("^"+c,d(n)),t)}function h(e,t,n){return l(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?function(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}(e,t):l(e)?function(e,t,n){for(var r=[],a=0;a<e.length;a++)r.push(h(e[a],t,n).source);return f(new RegExp("(?:"+r.join("|")+")",d(n)),t)}(e,t,n):function(e,t,n){return u(r(e,n),t,n)}(e,t,n)}var l=e("isarray");t.exports=h,t.exports.parse=r,t.exports.compile=function(e,t){return o(r(e,t))},t.exports.tokensToFunction=o,t.exports.tokensToRegExp=u;var p=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)}),toolbox.router.get("/*",toolbox.cacheFirst,{origin:"cdn.jsdelivr.net"}),toolbox.router.get("/*",toolbox.cacheFirst,{origin:"cdn1.lncld.net"});