'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "49a8c949d38287713dd830c3650f0173",
".git/config": "93a3754831dd19e02eac9344f3b855ed",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "fbd1c54c10675b5e7e38e473c5f5e6b4",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "85e3b30b566af8d85e9bc07825f13fcc",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4a4a0fe11da62ece3b08449bedafbe62",
".git/logs/refs/heads/main": "4a4a0fe11da62ece3b08449bedafbe62",
".git/logs/refs/remotes/origin/HEAD": "23b19831daac0a2133ba06ccb976af19",
".git/logs/refs/remotes/origin/main": "2ca8e3fbc35e469d848eaaf90b9eb929",
".git/objects/01/731a5245aff428dd7489a18b989eaca788196d": "4bdeaef2dbd6fcbe6e9e763177021870",
".git/objects/03/5653d77c89d8c0374dc3280f35b76357d24553": "94877bc200e869dff881e0d77470f66e",
".git/objects/10/fb8ec93f1ec1ce5671c8d227437d3e98f8b5d0": "b38cacca8dd8a83fe8ae5e1aa77bf15d",
".git/objects/16/4f8b1322d990ae5957d9636b60552034a9dfc0": "73939124ddbcd4a42e1bc3e3c70f46a7",
".git/objects/25/f21d6b83c3a99c0fd077d8de6c7af2b413a94d": "6e3bf0a1c4a838fb609c1223ca0e61ce",
".git/objects/27/7c2d6c0f19498d049f85b2e1bf192f08cfe957": "d9939fb57b751a09da3fb755990adafb",
".git/objects/40/74611f1b9671172a14b7119d3de4417674070a": "5977ed75b7491089dd082b0520fab6a8",
".git/objects/56/a9e44b36a334a28d4e206989a2f87909f81e0e": "295485b0a3433fa49e1cd3f9dc104104",
".git/objects/99/0edf927dae812630325f9689b3c91cc2362376": "dfe363e8673e6e1604fa4435c8b0d03c",
".git/objects/9d/54efdd81b181e7cef8d358869b52a400b8fccc": "16adae6fcc642d258c44090025fca75c",
".git/objects/ac/bf9ca84c40762db568945765788be4087d6e74": "4a7feb6900ae6f66292751b7c8036469",
".git/objects/d8/11722eb585b0c10d998b7f46f42195cf55d21f": "51bc5d86e60f0c86fd4a0e62dbc2e4e5",
".git/objects/f7/fde76b47bf755bfc70c1bc9e7281ed0eb9e916": "55623cc41923ad5cfc3ba66542c93b12",
".git/objects/fd/49356279d50faaeab8139aef67560357b7c6bc": "1504cd692eee64564e8cbf6d9768a125",
".git/objects/pack/pack-d9eb141a8495a72dc6abfdf60cd5ec3ae905bd1b.idx": "651382b89dc16ff8adefdab9a6b8cba3",
".git/objects/pack/pack-d9eb141a8495a72dc6abfdf60cd5ec3ae905bd1b.pack": "64b374ec41e22092325990b25925826e",
".git/objects/pack/pack-d9eb141a8495a72dc6abfdf60cd5ec3ae905bd1b.rev": "de5f0a118b8b80877bb347985a4054ce",
".git/ORIG_HEAD": "84b1f93591f0c3293061ed3ea42c7a76",
".git/packed-refs": "fb78acd7c86abc948bb1aed3200ff0cb",
".git/refs/heads/main": "12338330d6c14aa31ada12f7d8831a51",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "12338330d6c14aa31ada12f7d8831a51",
"assets/AssetManifest.bin": "3debc5a8dc60f399651a745a890aed07",
"assets/AssetManifest.bin.json": "9117d74063fd5c45be7a3fbe3a440b4e",
"assets/AssetManifest.json": "e26ab0f0a9ebee8025260de29a88a4ca",
"assets/FontManifest.json": "3ddd9b2ab1c2ae162d46e3cc7b78ba88",
"assets/fonts/MaterialIcons-Regular.otf": "88307915e5b26adf903ec30ae20d7f3c",
"assets/NOTICES": "dfc55d00b0653509eff15d73eee95046",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "09e5979e4cbb68e6abaf4784b6153c17",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "f433e3d310fa27248a53a29dc544623a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e1d344de617a4fe6b5393be57ec00da2",
"/": "e1d344de617a4fe6b5393be57ec00da2",
"main.dart.js": "79985e033802987cc2730146e1bd01c2",
"manifest.json": "b5446d82e801bb54209fb19efcfcefd0",
"version.json": "2c302caba852f0b1506b131b512a653e"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
