if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let n=Promise.resolve();return r[e]||(n=new Promise((async n=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=n}else importScripts(e),n()}))),n.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},n=(n,r)=>{Promise.all(n.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(n)};self.define=(n,a,s)=>{r[n]||(r[n]=Promise.resolve().then((()=>{let r={};const i={uri:location.origin+n.slice(1)};return Promise.all(a.map((n=>{switch(n){case"exports":return r;case"module":return i;default:return e(n)}}))).then((e=>{const n=s(...e);return r.default||(r.default=n),r}))})))}}define("./sw.js",["./workbox-4a677df8"],(function(e){"use strict";importScripts("fallback-H25_wJNxYPp6pE3QroGWG.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/H25_wJNxYPp6pE3QroGWG/_buildManifest.js",revision:"H25_wJNxYPp6pE3QroGWG"},{url:"/_next/static/H25_wJNxYPp6pE3QroGWG/_ssgManifest.js",revision:"H25_wJNxYPp6pE3QroGWG"},{url:"/_next/static/chunks/342-7b23d1c2f7a363c96d85.js",revision:"H25_wJNxYPp6pE3QroGWG"},{url:"/_next/static/chunks/384-52a5c121222f81fe3d13.js",revision:"H25_wJNxYPp6pE3QroGWG"},{url:"/_next/static/chunks/framework-b97a0ed4f13ff8397343.js",revision:"H25_wJNxYPp6pE3QroGWG"},{url:"/_next/static/chunks/main-62a3e12e79ce59795999.js",revision:"H25_wJNxYPp6pE3QroGWG"},{url:"/_next/static/chunks/pages/_app-161272cbaa31b5e4603d.js",revision:"H25_wJNxYPp6pE3QroGWG"},{url:"/_next/static/chunks/pages/_error-737a04e9a0da63c9d162.js",revision:"H25_wJNxYPp6pE3QroGWG"},{url:"/_next/static/chunks/pages/_offline-15665b818eb11a45049e.js",revision:"H25_wJNxYPp6pE3QroGWG"},{url:"/_next/static/chunks/pages/feeds/%5Bslug%5D-efc723705c00ed4088cf.js",revision:"H25_wJNxYPp6pE3QroGWG"},{url:"/_next/static/chunks/pages/index-a0eae183500a9ca2eea3.js",revision:"H25_wJNxYPp6pE3QroGWG"},{url:"/_next/static/chunks/polyfills-a40ef1678bae11e696dba45124eadd70.js",revision:"H25_wJNxYPp6pE3QroGWG"},{url:"/_next/static/chunks/webpack-2f5cf629ea44780f581b.js",revision:"H25_wJNxYPp6pE3QroGWG"},{url:"/_next/static/css/987a642516695053424e.css",revision:"H25_wJNxYPp6pE3QroGWG"},{url:"/_offline",revision:"H25_wJNxYPp6pE3QroGWG"},{url:"/android-chrome-128x128.png",revision:"833dde1510db4b59bb59ef63f1c7edae"},{url:"/android-chrome-144x144.png",revision:"6806098e4a2a4701dc58f8aa53a23427"},{url:"/android-chrome-152x152.png",revision:"997f2d674060f0a36d54f1e2b98c0304"},{url:"/android-chrome-192x192.png",revision:"29f34a8965e29ad8bc49f20599ebe9c5"},{url:"/android-chrome-256x256.png",revision:"f4423fe5caa01bf2e6210a83a94648a2"},{url:"/android-chrome-36x36.png",revision:"4e44d1bed63cde46c4e510965e0649a5"},{url:"/android-chrome-384x384.png",revision:"69f05540c60ee67952fb8392c1db2564"},{url:"/android-chrome-48x48.png",revision:"e9f9ee8915967167392e93db6f042262"},{url:"/android-chrome-512x512.png",revision:"2608f85b7575e36f3b79b282cf70d8d3"},{url:"/android-chrome-72x72.png",revision:"f9acb9dd60b3f99c58f6488045fa784a"},{url:"/android-chrome-96x96.png",revision:"bc4d8b56f7f090aa2c11c67006b0a136"},{url:"/apple-touch-icon-114x114-precomposed.png",revision:"2a6aee95b1666366fa72beacabaedbc7"},{url:"/apple-touch-icon-114x114.png",revision:"2a6aee95b1666366fa72beacabaedbc7"},{url:"/apple-touch-icon-120x120-precomposed.png",revision:"7f436c7acac21dfb3f78c73ceb26fd04"},{url:"/apple-touch-icon-120x120.png",revision:"7f436c7acac21dfb3f78c73ceb26fd04"},{url:"/apple-touch-icon-144x144-precomposed.png",revision:"6806098e4a2a4701dc58f8aa53a23427"},{url:"/apple-touch-icon-144x144.png",revision:"6806098e4a2a4701dc58f8aa53a23427"},{url:"/apple-touch-icon-152x152-precomposed.png",revision:"997f2d674060f0a36d54f1e2b98c0304"},{url:"/apple-touch-icon-152x152.png",revision:"997f2d674060f0a36d54f1e2b98c0304"},{url:"/apple-touch-icon-180x180-precomposed.png",revision:"2621a085eca778f4066a5d69df3c1b7f"},{url:"/apple-touch-icon-180x180.png",revision:"2621a085eca778f4066a5d69df3c1b7f"},{url:"/apple-touch-icon-57x57-precomposed.png",revision:"98f2e61c494d032b670ff8e26fb6ad02"},{url:"/apple-touch-icon-57x57.png",revision:"98f2e61c494d032b670ff8e26fb6ad02"},{url:"/apple-touch-icon-60x60-precomposed.png",revision:"3cc2bdc9fc4ad01a2a69b0bc7ffb388f"},{url:"/apple-touch-icon-60x60.png",revision:"3cc2bdc9fc4ad01a2a69b0bc7ffb388f"},{url:"/apple-touch-icon-72x72-precomposed.png",revision:"f9acb9dd60b3f99c58f6488045fa784a"},{url:"/apple-touch-icon-72x72.png",revision:"f9acb9dd60b3f99c58f6488045fa784a"},{url:"/apple-touch-icon-76x76-precomposed.png",revision:"af74f557869547a06e4038e067f4d6f7"},{url:"/apple-touch-icon-76x76.png",revision:"af74f557869547a06e4038e067f4d6f7"},{url:"/apple-touch-icon-precomposed.png",revision:"2621a085eca778f4066a5d69df3c1b7f"},{url:"/apple-touch-icon.png",revision:"2621a085eca778f4066a5d69df3c1b7f"},{url:"/favicon.ico",revision:"71e10c5de4edb6164af3900c27c22012"},{url:"/icon-128x128.png",revision:"833dde1510db4b59bb59ef63f1c7edae"},{url:"/icon-144x144.png",revision:"6806098e4a2a4701dc58f8aa53a23427"},{url:"/icon-152x152.png",revision:"997f2d674060f0a36d54f1e2b98c0304"},{url:"/icon-160x160.png",revision:"2b4da9b56c4329df21fc6e55ab7204af"},{url:"/icon-16x16.png",revision:"209b51042c3a63fd769257066691fb56"},{url:"/icon-192x192.png",revision:"29f34a8965e29ad8bc49f20599ebe9c5"},{url:"/icon-196x196.png",revision:"3972f6dc3590f93ed92dd6b51da5221b"},{url:"/icon-24x24.png",revision:"2b446eb99b32ff8aae5895601b11d9a5"},{url:"/icon-256x256.png",revision:"f4423fe5caa01bf2e6210a83a94648a2"},{url:"/icon-32x32.png",revision:"76bf30b0ebe00e77f0f53d0708f02ae4"},{url:"/icon-36x36.png",revision:"4e44d1bed63cde46c4e510965e0649a5"},{url:"/icon-384x384.png",revision:"69f05540c60ee67952fb8392c1db2564"},{url:"/icon-48x48.png",revision:"e9f9ee8915967167392e93db6f042262"},{url:"/icon-512x512.png",revision:"2608f85b7575e36f3b79b282cf70d8d3"},{url:"/icon-72x72.png",revision:"f9acb9dd60b3f99c58f6488045fa784a"},{url:"/icon-96x96.png",revision:"bc4d8b56f7f090aa2c11c67006b0a136"},{url:"/manifest.json",revision:"c5d12036e2aa09e192b94fcc9200aa92"},{url:"/site-tile-150x150.png",revision:"fb17a76728ba3bf563762bfd8f0d38b0"},{url:"/site-tile-310x150.png",revision:"86c39636853502ef670e51ada871c3d6"},{url:"/site-tile-310x310.png",revision:"4f9f43bbf6fb28859f3bd3266eb521a6"},{url:"/site-tile-70x70.png",revision:"83662e5e311026ea75d997fcbe09a188"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:n,event:r,state:a})=>n&&"opaqueredirect"===n.type?new Response(n.body,{status:200,statusText:"OK",headers:n.headers}):n},{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const n=e.pathname;return!n.startsWith("/api/auth/")&&!!n.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET")}));
