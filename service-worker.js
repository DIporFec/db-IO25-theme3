/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "c028860706587d9a954b3efa0712370f"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.ca92be26.css",
    "revision": "5a40d4ba17f464887bf983b8035cd813"
  },
  {
    "url": "assets/img/DELETE.85a32875.jpg",
    "revision": "85a328750f5c4d711aa085c45ceb209d"
  },
  {
    "url": "assets/img/POST.2ebbd221.jpg",
    "revision": "2ebbd2210738c78f65ad147cf26cc0c0"
  },
  {
    "url": "assets/img/relation_scheme.5720773c.png",
    "revision": "5720773c9758a4bdc326f511a469a74b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/UPDATE.8105172f.jpg",
    "revision": "8105172f4ab2ee1e768e789bea12978b"
  },
  {
    "url": "assets/img/Запуск сервера.8c9014a4.jpg",
    "revision": "8c9014a471d96eaece3710f80d1002a7"
  },
  {
    "url": "assets/img/Перед DELETE.2b451370.jpg",
    "revision": "2b451370f0bd129b01204f4a49301856"
  },
  {
    "url": "assets/img/Перед POST.6092460a.jpg",
    "revision": "6092460a9c0817884c1baae04bb38c8d"
  },
  {
    "url": "assets/img/Перед UPDATE.9919d74b.jpg",
    "revision": "9919d74b825887a95f3accc297792e42"
  },
  {
    "url": "assets/img/Після DELETE.30075546.jpg",
    "revision": "300755460c1aa5a95ac886e5f5eb0d06"
  },
  {
    "url": "assets/img/Після POST.9919d74b.jpg",
    "revision": "9919d74b825887a95f3accc297792e42"
  },
  {
    "url": "assets/img/Після UPDATE.2b451370.jpg",
    "revision": "2b451370f0bd129b01204f4a49301856"
  },
  {
    "url": "assets/img/приклад GET.f4443126.jpg",
    "revision": "f4443126efd05796fed17fd214279210"
  },
  {
    "url": "assets/js/10.969eb352.js",
    "revision": "b93f0ad6cc7fa061ebbfe4cbba60db62"
  },
  {
    "url": "assets/js/11.867d6bf2.js",
    "revision": "e9db83a60469f2ce628467789317aed6"
  },
  {
    "url": "assets/js/12.a5329e46.js",
    "revision": "935f0c1dbb7f8da131ae30fd59bd262c"
  },
  {
    "url": "assets/js/13.e7c04253.js",
    "revision": "eef26aabca14018293299e5ca5d64d5a"
  },
  {
    "url": "assets/js/14.c4e924d0.js",
    "revision": "a5fa3be4087ea846ea72c874302fffe7"
  },
  {
    "url": "assets/js/15.3f39b9ff.js",
    "revision": "31a8823df62970755bc9e13130efc49a"
  },
  {
    "url": "assets/js/16.3d9624ee.js",
    "revision": "08debb62fd91f0c6b740bd753dec2471"
  },
  {
    "url": "assets/js/17.2f6e6bf7.js",
    "revision": "5915e4c3891035e006d82b8c3d7e2b33"
  },
  {
    "url": "assets/js/18.4e235845.js",
    "revision": "6870bc365623d576dc0dae418678b6e7"
  },
  {
    "url": "assets/js/19.dd2ae356.js",
    "revision": "cbc5a164941c24c4b78b2f45239682e8"
  },
  {
    "url": "assets/js/2.954f29e7.js",
    "revision": "9f5d81778f264235ef1ff99e0ed77e85"
  },
  {
    "url": "assets/js/20.2df80867.js",
    "revision": "b0d8ea0d9eb33d7b0699e953aefbb497"
  },
  {
    "url": "assets/js/21.4df8385e.js",
    "revision": "c932eb7b48e0d493d0b929742412fba0"
  },
  {
    "url": "assets/js/22.f811a094.js",
    "revision": "768b533e09366dd3511dd605721b598c"
  },
  {
    "url": "assets/js/23.b9bc3045.js",
    "revision": "77c7e01d67250c4c6888b28c70ac9dd0"
  },
  {
    "url": "assets/js/24.db06831f.js",
    "revision": "72a754b1671fe384df87aa53ad583109"
  },
  {
    "url": "assets/js/26.2a58e3d0.js",
    "revision": "730466dab27a3b499e639af86a681853"
  },
  {
    "url": "assets/js/3.3226d793.js",
    "revision": "f8193e751588225ce13663f412b15dda"
  },
  {
    "url": "assets/js/4.3d4ed436.js",
    "revision": "727944e61f1b7e7ac414327498c1be0c"
  },
  {
    "url": "assets/js/5.88dc06d3.js",
    "revision": "5946558363fb920222d6f3b0fa83d985"
  },
  {
    "url": "assets/js/6.80e32d60.js",
    "revision": "b92702f2d637ff84229b43384b8f7332"
  },
  {
    "url": "assets/js/7.45e89273.js",
    "revision": "551fa76df78ffe15a8e30aa95237f044"
  },
  {
    "url": "assets/js/8.3b31f7c3.js",
    "revision": "2d2f62a3531e0c4502d404d9577c62a9"
  },
  {
    "url": "assets/js/9.6eacf766.js",
    "revision": "4ded6a42f572773e8079384dcbba57db"
  },
  {
    "url": "assets/js/app.44e2354d.js",
    "revision": "68778f8eea8af1a2fdf53096e7fe3633"
  },
  {
    "url": "conclusion/index.html",
    "revision": "c9be96aedc32cad7c26c5bd7cd250f72"
  },
  {
    "url": "design/index.html",
    "revision": "a97790d3a69ebe7366a38a47d852af13"
  },
  {
    "url": "index.html",
    "revision": "485816c81d06f5eb44880420e82d8754"
  },
  {
    "url": "intro/index.html",
    "revision": "ffae983de7dbbc9c5108064440b75691"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "de201ff8bd6c4df6dab45b55db561e17"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "ef1668800ef1e959ed2af5d6fab8b50e"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "9b416917692fb1707cf636c670c7f15f"
  },
  {
    "url": "software/index.html",
    "revision": "5e89353b063a9fa57061f3f1a0f9e531"
  },
  {
    "url": "test/index.html",
    "revision": "5c660a3ae76614a445955a8d256f3e55"
  },
  {
    "url": "use cases/index.html",
    "revision": "5741163c66d3fe2f8256c467bb99068c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
