'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "5875d9f0a1f775001744a2a370005294",
".git/config": "3b60f144da9f0bfe04b5a281087c1d77",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "11e11644de54f78e2b5e9a6b0cf88ff6",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "725c043ab618cf5bec6be666fd78aac2",
".git/logs/refs/heads/master": "725c043ab618cf5bec6be666fd78aac2",
".git/logs/refs/remotes/origin/master": "18998a12671b0f2eb7ebc8b4434e6616",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/04/94556cf0447e047402fbffb9337d49e41c3a59": "e562c1fc868d6081da35ec6c1b8e6a35",
".git/objects/0f/5682fc5ce4f39ea6ba1f900ff4a81f8790dab9": "d0c90d9caef26ca9c8ae214febb06913",
".git/objects/0f/bb81f293ac5086a4cb47b547b059b08c8a7d8a": "edc541f547d713e18dd0b9fb01a8c2a4",
".git/objects/10/1b511af9e52fbb51cae33202d429671ca9125a": "7ad9e4db8a27f36985dd82ae9de9007e",
".git/objects/18/ed39a94e2e3b767960169f9dc2734d12e89844": "d2ff22f0400906ea4d4446d424171afd",
".git/objects/1a/dff2ba58365a976322dd00ccf442ad2e3ce9dd": "1d96a25e0fbb4171166701ea02114537",
".git/objects/1c/18b6b7d2834a0c48e4b67d8cb0bc6695d574ac": "2360437231401e5692f488d48c039455",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/37/a6f9f9fe34059ab9f241a68a1b81b089cb1279": "53c58e6da42134a52ffe5dab3a30aa73",
".git/objects/39/92a02b6fca471486ed97631b18b5416d6a54d5": "c22ead3047a2358c137cefcc05e9476b",
".git/objects/3a/f2c4ac1043b6df1968f434e2248d25fe3c5a1e": "8977f4d81ba1139c5557d669d7093b28",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/b8212435cb6ed5d5ed07a4160d10a5653673b1": "8181ff46f67f4a10b1711e8d99668031",
".git/objects/52/cfb77a424101413b81e246b965151f443a0e85": "453827b9337fef0116c048dee437d21d",
".git/objects/53/04c93716f63af6e4d596317b4362f46051b52e": "2824823511450b2edf7a6ccec35189bd",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/65/588a9d4929adf3eafd916475151a291abad17e": "0fe18f00bd0bcf26eeb51f88c2560c5d",
".git/objects/71/2d4052ab21c5e6c0dc7fbc44c87d5d1b4bc471": "9bc3e1b850f824004e00b885cf5e5249",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/29de44688e5c7c5c475df1cd5a3e8636f0f80a": "1a1c81942cd4a818a93096a1ef577503",
".git/objects/8e/74823b535405c832761c61c06549773375cd9d": "2f9a0d6273956b3d6e85300a485903bb",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/90/51ce1e49509fd8e4323ec0e91e7244ff46fb7d": "69a7f6f5dc6206687dceaf916866d83b",
".git/objects/91/241e612a6697f3153fbddf4a22e0336dd89d2a": "0a36b03e0932b5626e0ecab7e573438d",
".git/objects/a0/d32e0f55af045c709dccf587c605a3497200d2": "a55b7a950e0f28784516f875c8f65a6a",
".git/objects/a2/037be28d3637c368e3c2a86a2132f08c1d62c0": "4142818aff64f0c992e5742bdb8f48db",
".git/objects/a5/5c4c6974c63d362bc08f93b864567d71365d5d": "dc79d870764025cb9870e5c508170f11",
".git/objects/a8/df78f9009c9d65cfc62c8f84a32a7ca6e45115": "a72fd9f25e3f771b9b4f0a7ee0132134",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/b3/7d3da8c2a270bb59dccc0da820a84726d7daa1": "8caef19b04801ea83b798d9c535a2abb",
".git/objects/b6/847af84668f859e670bc343cb1767c5f9fb9a1": "2b1c613b00e1262af4bd1c864593130b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bc/27372364c8df091c773ffd660532c52fb482f9": "2dfa58360cbf8bba2b6b9ee702baf369",
".git/objects/bd/d53aeb75100e1b04333932dd7a8e22f9006a90": "0c205112a11b6ed47fcd0f26f3f77c35",
".git/objects/bf/5cb472147dfd08edaf43bfc6fd7119668e43f3": "f5bf9126d29480c39773173e2582cf11",
".git/objects/c6/59076a02cce0e4367038d33f0c0c673cf1c444": "6f01c646f28a19701e8128e1ad2b5754",
".git/objects/cb/7d06846866a76c535b532e0a9298da5a94f65b": "fa33a4c37fd83d44a06ae0c98d69bf98",
".git/objects/ce/22fa48a508edb978ac8be4472d43cd2afd8dd4": "9224471b44fdce334b47717d3c87e3c9",
".git/objects/cf/416abaff57d1c742f0de30ce278d7d9240d0a8": "30522a83da93c41eae4a40c986c2b116",
".git/objects/d1/5363e119acff497b4eb0b249522958eda7bac2": "f63926ebe6c7b9c35e648f998347c546",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/db/bae456ae2fe85e174adddb482e3cfd0984bae2": "d76b7ad680bdbcaad015aec24a245bc2",
".git/objects/e1/6ccb45089f381aedd61c8bbb92a2e4ef905b66": "257b0add3ec836b6d1f1c12cb8c120c3",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/ea/ff32c3c25fe5387d42b20869c421d09f6740fc": "13777c2265cafa10c0b3ad71ef06ebfb",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/cc2b9bc1053b8eb76d31d1517776a11bebc06e": "48de619690fc8602fe4211e3c6717276",
".git/objects/f1/ab742ab592b4324aafe2669174e744769d93d6": "e60e80d2c4d615798359baf209886c5c",
".git/objects/f3/b0df8aa3d3a65e2b5fb0e6acf0bf4e25e422df": "4e94a7afea83b510569d9de3ffd7971c",
".git/objects/f4/e20c87655bd758f629be28e5d9b9f722fa7bf3": "27044aea5d87eae78a36ad7dc025888f",
".git/objects/f6/27a25078a959d7c917fd5fb5a4513a87a259e5": "5f322e7f3c0e0af5ba62db7b4a540bc7",
".git/objects/f8/0b428d44e88046a64ee2851067eb415520f07e": "d213858711fc4d9879dd23c16c9faf02",
".git/objects/fa/4658d48b9a49922fa162eb9c9af3b7c1c7dcba": "22cbb48b3bfa95604d45bc31b2e9aecb",
".git/objects/fe/dc55bc00fd21e50ea4c128c11a2f1e177e85e4": "fa49d5e2b59fdc6ca10ee4743d342fba",
".git/refs/heads/master": "1c7dd317452eaf54a271428281087c28",
".git/refs/remotes/origin/master": "1c7dd317452eaf54a271428281087c28",
"assets/AssetManifest.bin": "a3d922a0b0bb96200631d1d9f758ce7d",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "52fc34a70b225832e47b13c384bc9b3e",
"assets/NOTICES": "6aa401704e55d2fe8ec5d9d4ede5b4c1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "57f2f020e63be0dd85efafc7b7b25d80",
"canvaskit/canvaskit.js": "3e7c7e90ff8e206f4023c12e31b0d058",
"canvaskit/canvaskit.wasm": "624ec2381a8db3fb611ed263cd4c89ab",
"canvaskit/chromium/canvaskit.js": "f39c7fbb70c7d277f537a7c366d75533",
"canvaskit/chromium/canvaskit.wasm": "e3fc9ac81409151eaf64997315b4290c",
"canvaskit/skwasm.js": "569eed0f1ca775eb9a112f5821ad278b",
"canvaskit/skwasm.wasm": "6484604a7be7b899af27bdd2341a9168",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "8e976baa7db3f4022fc723611859daff",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "f023e30fc7e739f2ad7279bd6051e4b2",
"icons/Icon-512.png": "dde1ffab0061d19769d3119423044594",
"icons/Icon-maskable-192.png": "f023e30fc7e739f2ad7279bd6051e4b2",
"icons/Icon-maskable-512.png": "dde1ffab0061d19769d3119423044594",
"index.html": "a4416fa81db3a841ab2d3e786a6254bd",
"/": "a4416fa81db3a841ab2d3e786a6254bd",
"main.dart.js": "3e1acee77e223950caaf2bfdff1114b4",
"manifest.json": "d57839559c8af728a19daf037fe35e0a",
"version.json": "4e48d08f259d06218b2506e220dff863"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
