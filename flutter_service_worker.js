'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "7b06aeb771ecc0eba913187838ca41f3",
".git/config": "4293297505a98410dda5474c29577c34",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "2ad92e498fabf5c6146873f9a3fa328f",
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
".git/index": "64e0226d02f3b2949ebced1e0012a44b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1438c56a7b5dccf97e78ed4dc894e536",
".git/logs/refs/heads/master": "74ddd6a9c08384cdf7e16d2f31001fb7",
".git/logs/refs/heads/v17": "32de9eeefea4c93545ded0ba651f275a",
".git/logs/refs/heads/v18": "e0704a04f0b286f88ed26345c86ea988",
".git/logs/refs/heads/v19": "22c977639c243c30c9bc8d0e48988047",
".git/logs/refs/heads/v20": "75071044bf254126cef901913782f8b7",
".git/logs/refs/heads/v21": "df127222ddc32907d27d9ef77c9c4558",
".git/logs/refs/remotes/origin/v21": "9b8f0bd6952e12147a0358b21bf605f8",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/06/d55d88ea29ac40c1f98188ab210672c1258529": "04ef745855725ebb05d0a69480063ef2",
".git/objects/08/5320c9e7d602837a72b6618a15c9d66111b1b5": "8d88998ff22f19299bf5f9f763c81a3f",
".git/objects/0e/81b2373ab8105b97c2345ea3f44fbfbd6eb11a": "09ea9b443e081710abed15da067135ef",
".git/objects/10/a75916c5816e30236b09c9a3796821b1714674": "a8465f18a06f9ddce8c92903c9b6cf1c",
".git/objects/21/e7413dc6f3cd8f73954b64e72207f00d0b7cee": "b43ed55a4a7270f3fc8d385de4de52c6",
".git/objects/22/af1a98f1527bc5e670668a21bea9f807e3816e": "262ac065841c36a745a4997669cc28de",
".git/objects/29/d065e9bd637ecebe5d011d4baf17c8bd690827": "7a56b62a31c36e77e9edf37ccbef64ed",
".git/objects/2a/c909ccadc0085a2b5dbd800fa7411cf4b11a7a": "2a58413edbe420725a8da2ce6cd9ab9a",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2f/e6abe8999f61e1742a442ce592fccb904541a7": "2fa54a8749700b71e53f4fd0fc31bbf0",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/38/28d72071c41e9038133437412d66766536b306": "04cfa6ce8523d85da3128d07b41d4dd5",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/3b/eb7890b45ca2875195243c4d7b8090b4f2549e": "7ad1148a6be26d6dc597bf1d110c6ccb",
".git/objects/3d/ad7d4db1e515c405180bd410f742ab3b6b0e5c": "ff7925896084957267844acbb29b9db3",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/43/2b3bb42dc1c9c19755b82161c070848ac15585": "aa8565bcd73d6920d1923b4dd912424c",
".git/objects/45/45b8eaf094b432e53b551486b4dbcd4586844d": "ae8553488dfce048a2bf9bf1333cda81",
".git/objects/47/fe1b26d50d34ed621f63b5e36094551ccc5190": "c24a101cdd7dc570da9c5f797a7cc67f",
".git/objects/5c/a017893b2927c9a549a678278c883a97ef2a0d": "ae6097befff3fad1d76396cd065264d6",
".git/objects/5e/1d89152f4e551407e5061f6bb75d8c146657af": "3f2fd8e1fca9d5e10c24cfbccd520c8e",
".git/objects/5e/e6bd1251accda270bb528b93f47310651e87fd": "680f70a0975db96f86baa6b76b43c0c0",
".git/objects/62/030786fd51e4e1a32b2efab535b7767c1b20e9": "1714153151fb0c7dd54073e02817b2e3",
".git/objects/69/7612b856b42c7df2f6b11a751697ce3fb59ba5": "eb2c167bd5d2090211aac5d103a33a2d",
".git/objects/70/6b89226856a184964d4ef26acca4690f34feb3": "b47861a6de6336cfde49244ec049778b",
".git/objects/71/4238f2a4dadbfc3a9468c867e2f4613e762f01": "5c0ec06ce75d4a1fb6c095781eab0257",
".git/objects/72/9d192a9108502c08a7ef6bca6038b4e9374666": "0d36d657e74e68b0ea552debde369b74",
".git/objects/72/ada6baac9193047a04d1ef7fc6c08c19a0aad4": "515cf0496f523efb00e1cdbca48aebe4",
".git/objects/72/d2ac11e3a7e709db33c98612eb36324b65a1c5": "c79df3f24627348b03a122af4e1edf89",
".git/objects/76/08ebc0ee02b5ab6e008d6d7b2d2ecceca3f52f": "2890e162b14f6bd59a809896610b33e7",
".git/objects/79/b7aad8ac35e54c0d70943c2888034e84745eb1": "c01fa98c45a5687756eab1e89022a648",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/7df7fa805220c9165353c6cfa89400a17de88b": "cf4feb7a7a4698b22c56a7628b5d64be",
".git/objects/8a/602e1bdcb3a047e260617b0410ce0f2bd65bb5": "c18b3ff216a3a8c2b43d7cfb91b369f0",
".git/objects/8a/ad1b62b0c452044880308fd4256c0f6bedccd3": "6d8abace0b63fddbb25db5f77d41a175",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8f/e8539bd3b2d81de21f9864032f6a9d46045509": "7dfbf9157defd1057ac940e7d49fbe0d",
".git/objects/91/1775ec21f34f407a02949c201d0e82e947e247": "d0e924203077946058068b82a16c5401",
".git/objects/94/135a209a82ee537eab4cc4f6c62d4879ae3a41": "d681b293d7cf8cf501d6d63511ee3503",
".git/objects/96/2c9f4d1091819fce996720ed94b00bf67332b1": "449badf7884cd6c648a34532fd33f348",
".git/objects/9a/14f8962d6fd85daf91e6e7a52fe53f12fada66": "f77a12d0e371bd0b017fff2fc89b5b76",
".git/objects/9a/581a540c3a1095971dc9df47ee32e99889dc66": "a88d57e67a92da25c0d90e68dc0992eb",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a4/aa250077edf70d82648b3a8e3231f43d4e1a2f": "9f87aca3dac8d4177de816564b3ffef0",
".git/objects/a6/4e7c84bbaaf9cdc0ea536424ada326023335b2": "a361e0b28504927d3e12f45a0c30d834",
".git/objects/a8/4b66c60e8a39b37ee8ae2af827b8b2793c2a1f": "119c342d374399710cdba357c7f481c2",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/ac/d5c6a380705fd9e9d7de19481c410d7f10a849": "a3ab03b03d03a3457b45c31615344939",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/b3/da79892c2013041950ef8889135f39b0d83ffc": "06e14fd537e20eeaccf5f48621d7e59b",
".git/objects/b3/fbb2e78b3413dc1ea20858278a5e6c74b9a0dc": "1b6b342ac834221c9952fb826f2bbe9e",
".git/objects/b8/d5ce6ab75b3c00379c8a61a36b86756065ff6e": "b2c14c35cdf8556122aca88326897aac",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/be/35fca5b0ff15ced3673551b9b075423881c1ce": "2c120dcd4b95c900b0df756dcabd99f3",
".git/objects/bf/dd43d2b2781093cc64799bd0dcd007a85df70e": "9de470e95222c1209da23a347fdbe367",
".git/objects/c3/944b8a86e8e765015d9f823da8321bc425b40f": "00f2a42df0979a2759e789cb2c87b344",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/c9/019bfe0eb7aacfd93146cebd53a0951fc34dab": "1c51dfef875b453876ea40b37556d773",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/cd/d6cef1bab27bf16cd0a192315d7b694d279ea2": "602bc7f81c4ff3344bd6747e0010f13a",
".git/objects/ce/d5b8c3660266e70b5bdf4f8b70fc1398af72eb": "fd995225a08d60a14110f4363ee385fa",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d8/50a15f3efc50c3fad3ed819b68579918267d5f": "0ad26049c8fdcab8d7e25fcfb2e7e6ce",
".git/objects/d8/6529f1f14d1b2a4a543efad0c65f7ea5a6d042": "cf50de727657fd89ae27832f331ef047",
".git/objects/da/a3d06656edfbf8fd2f87164a9db7821cc8333d": "c5138b279390bf36d6c70070aaf110c0",
".git/objects/de/dda22b04599332a3516e04777306f1c87d0a70": "b6c999a3b141c7bfd2203e9f46ea568f",
".git/objects/e1/eab478bd97ed783fd87d9427675f22df125857": "d3ae2d8ac57fc24ee923127715130493",
".git/objects/e2/ea5f3a4705a4350e408cf40b498393b2d6a748": "6da2b5d00893e2b15feb1f79b32c4965",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/a603fb316319d36f2ce5e37dd9b64de6c443eb": "4bbddd3968e60c7d3497ff499a827d99",
".git/objects/e8/c4994d2e62235bf2c9eaf761493da82b758077": "6a3055598842bed21856f6760ffef954",
".git/objects/ee/ecd307528365aee50691a6f7abf1c7a5a2c6cf": "92b2f3945b68c7ebe6ce3a1005965096",
".git/objects/f8/ab38dd0d2eedfe2ae5ef52975b2136ca85b3a0": "a484d6df94e2c32076aa1ce374408d92",
".git/objects/fc/c8b574a47ff707fa58b88e39d6ce42fbf89fa2": "594c63b834ab0f707da9803ac6c28562",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fe/7e65de8888affc3e4cf2cacd1eaba5ca11469a": "df24d552b761e1ee5481b1ccf76cf076",
".git/refs/heads/master": "8ae592deb17445cf8e32652695819327",
".git/refs/heads/v17": "8ae592deb17445cf8e32652695819327",
".git/refs/heads/v18": "8ae592deb17445cf8e32652695819327",
".git/refs/heads/v19": "8ae592deb17445cf8e32652695819327",
".git/refs/heads/v20": "5ef97c982f3f2dbee2dcb7bc2b64aec2",
".git/refs/heads/v21": "5ef97c982f3f2dbee2dcb7bc2b64aec2",
".git/refs/remotes/origin/v21": "5ef97c982f3f2dbee2dcb7bc2b64aec2",
"assets/AssetManifest.json": "522ebf0921e5ea36f3010e49b2695de7",
"assets/AssetManifest.smcbin": "a97ca1a1a5345690a03f3a5388c895d9",
"assets/assets/akshar-regular-unicode-font.ttf": "3d67df54a1ac4aaab086ffed7cfcc4ca",
"assets/assets/FML-Indulekha-BoldItalic.otf": "a616c4e87a489f70f078acdfbece8a7f",
"assets/assets/LOGO.jpg": "ca3a1daf33ff363c98ff6ec59acad49e",
"assets/assets/meera-regular-unicode-font.ttf": "a03876611b8ed699bb6d5d214a56e6a5",
"assets/assets/nepal-edited.jpg": "137cb83bf67cbadec68b4d481c87e7c9",
"assets/assets/NotoSansMalayalam-Regular.ttf": "f177ef084810be7e3b1b6995703c8230",
"assets/FontManifest.json": "3e3e5c1a54732c19bb1cdf2c6a66b945",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "066da921756ab27117192f2f0cd94d17",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b00363533ebe0bfdb95f3694d7647f6d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0a94bab8e306520dc6ae14c2573972ad",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9cda082bd7cc5642096b56fa8db15b45",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/packages/youtube_player_iframe/assets/player.html": "dc7a0426386dc6fd0e4187079900aea8",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/web/live.html": "f3a2fb10d707238e30e5add651291605",
"canvaskit/canvaskit.js": "59ed8478b398a8966eee147930f3d966",
"canvaskit/canvaskit.wasm": "a80865405d56e53c64cd474d56ec4fa9",
"canvaskit/chromium/canvaskit.js": "853c6cebea386c05aa9d954f11b2c1ca",
"canvaskit/chromium/canvaskit.wasm": "758e459035803104cd2413d4bee2bebc",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "f0e24cc94b4714b635729282d82c5402",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"clappr_html_view.dart.js": "650dc596bf53fe40c3a9222ebd1faebf",
"favicon.png": "c013846172a148f9dd30c02b7dc55a6c",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "65733b81af69c46c8154276c565aa725",
"icons/Icon-512.png": "1958df69c213c118b32cd7425e3e1422",
"icons/Icon-maskable-192.png": "bba678b6a68e617f4ca55f3c5da6e83f",
"icons/Icon-maskable-512.png": "9cbf91c2a86144821505a087ef144951",
"index.html": "90c7a9eeb966312cec866c10d14ec3a9",
"/": "90c7a9eeb966312cec866c10d14ec3a9",
"live.html": "f3a2fb10d707238e30e5add651291605",
"main.dart.js": "4ef512f428656d3594de75f7a07d8de3",
"manifest.json": "e1c1a2606f134a2aceeeaff6f08167d5",
"version.json": "8cd64b299d4d52898c2141ef91163003"};
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
