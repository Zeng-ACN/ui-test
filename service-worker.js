"use strict";var precacheConfig=[["/ui-test/index.html","b7227cbdfa8cfa6e39e7c7973b7fd2e7"],["/ui-test/static/css/main.5b51502e.css","315b700a9045193a57e5d09450f2b100"],["/ui-test/static/js/main.e08bada0.js","e9cab9a991a434762a79efa69130db2a"],["/ui-test/static/media/Android_logo.cd460001.svg","cd4600015e5280fef97aa6087a62f3a0"],["/ui-test/static/media/Apple_logo.af176449.svg","af1764490473c800ec68b6a7b7e37537"],["/ui-test/static/media/CiscoSansTT-Medium.0f004294.ttf","0f00429423433b430edb5b36105fcd34"],["/ui-test/static/media/CiscoSansTTBold.9ae85533.ttf","9ae855337b42f82c3c2c1ea6568d3c97"],["/ui-test/static/media/CiscoSansTTBoldOblique.754d6413.ttf","754d6413327a67ccd75357811438af9e"],["/ui-test/static/media/CiscoSansTTExtraLight.b460d3f6.ttf","b460d3f64c1b0013cb3ad40dc16eed89"],["/ui-test/static/media/CiscoSansTTExtraLightOblique.dc22f5cc.ttf","dc22f5cc53c0c986cc143760fd3e74c9"],["/ui-test/static/media/CiscoSansTTHeavy.2a41a722.ttf","2a41a7223557de59f0aaf5382efd9954"],["/ui-test/static/media/CiscoSansTTHeavyOblique.2235a16a.ttf","2235a16a8cc2ced34390af552ae05d1e"],["/ui-test/static/media/CiscoSansTTLight.3bc5113b.ttf","3bc5113ba59b556813186065dcbbfa5f"],["/ui-test/static/media/CiscoSansTTLightOblique.2551da67.ttf","2551da6759a802dcc54b23df06190085"],["/ui-test/static/media/CiscoSansTTRegular.63cbe7e8.ttf","63cbe7e8498e1e93719443e0cae2980d"],["/ui-test/static/media/CiscoSansTTRegularOblique.203fc6be.ttf","203fc6be6e7dc0ffa6637c2e01e4ba4b"],["/ui-test/static/media/CiscoSansTTThin.e3b3ffea.ttf","e3b3ffea0096503b954570d7c2260a60"],["/ui-test/static/media/CiscoSansTTThinOblique.33099791.ttf","33099791ee89ac9660fb360a2975458a"],["/ui-test/static/media/Facebook.46dd86f1.svg","46dd86f1fb8933dc6cf3f5e310943967"],["/ui-test/static/media/Instagram.0e41a51b.svg","0e41a51bec15d905bff7f7d3f98b99eb"],["/ui-test/static/media/LinkedIn.a61f32b7.svg","a61f32b7aacf53f6e50e3e42d43fff50"],["/ui-test/static/media/Linux_logo.1586a67e.svg","1586a67ee20024c7ace4743d191d6ac2"],["/ui-test/static/media/Microsoft_logo.1ad9402b.svg","1ad9402bab6d9239c8a874ebce25272e"],["/ui-test/static/media/TrustRadius-Logo.0917ec41.svg","0917ec41d3ee087105a89494f5e621c5"],["/ui-test/static/media/Twitter.cdcd7807.svg","cdcd780764339690d22ff68f4c8f3742"],["/ui-test/static/media/Youtube.1d1edd69.svg","1d1edd69eddc6eb74176a8f7ce874b68"],["/ui-test/static/media/app.2ef5d62d.png","2ef5d62dcfd5f4f1b61611d849a411f6"],["/ui-test/static/media/data-center.fafad49e.png","fafad49e6c445e4387f87eaeacc7a418"],["/ui-test/static/media/demo.675418b8.svg","675418b86dddb18ddbd74aee85f80f71"],["/ui-test/static/media/document-icon.6b44ea13.svg","6b44ea134215e50757d42543fe2d20a5"],["/ui-test/static/media/empty.9a544417.svg","9a544417984a8786a2d679cb6cc7f6c7"],["/ui-test/static/media/full.83ab99ca.svg","83ab99caf3988a588b679b8e7462fe35"],["/ui-test/static/media/greater_than.1414425b.svg","1414425b1a66c7e0d7fe2d6bea76cb2d"],["/ui-test/static/media/greater_than.3145aaae.svg","3145aaae989f12d288694fc397d9529d"],["/ui-test/static/media/half.bb1785be.svg","bb1785beb6f6ecbbe40b1d1e7dbdf616"],["/ui-test/static/media/hamburger.2f375fdb.svg","2f375fdb716725e64145587ef33f89d3"],["/ui-test/static/media/icLG-close.870ee9e6.svg","870ee9e6cb10c55d400925b01cd04b97"],["/ui-test/static/media/icMD.87225de7.svg","87225de71e6e8c2cca527c42c5625a0c"],["/ui-test/static/media/language.b4bbcea8.svg","b4bbcea82491ac2f73ec026e7125f721"],["/ui-test/static/media/less_than.d2482753.svg","d24827533cca399293a4bb9206a22a5c"],["/ui-test/static/media/logo.22dd7958.svg","22dd7958d2d430a509e601365e71bacb"],["/ui-test/static/media/marquee_image.5a75df46.svg","5a75df46f212e1c6d456f29f75c0f8bd"],["/ui-test/static/media/minus.8d414cc8.svg","8d414cc8e7283ee92469a31c2761908b"],["/ui-test/static/media/plus.646d60a1.svg","646d60a198982d2c4036cca396edffe2"],["/ui-test/static/media/search.7f46cbe6.svg","7f46cbe6f91e0884f5444728ff56908e"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,s){var c=new URL(e);return s&&c.pathname.match(s)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],s=new URL(t,self.location),c=createCacheKey(s,hashParamName,a,/\.\w{8}\./);return[s.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(s){return setOfCachedUrls(s).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return s.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),s="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,s),e=urlsToCacheKeys.has(a));var c="/ui-test/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});