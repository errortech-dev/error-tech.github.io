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
    "url": "bootstrap.min.css",
    "revision": "ec3bb52a00e176a7181d454dffaea219"
  },
  {
    "url": "bootstrap.min.js",
    "revision": "c5b5b2fa19bd66ff23211d9f844e0131"
  },
  {
    "url": "edit.html",
    "revision": "4e40b8e9a636adb39e91a79da0634908"
  },
  {
    "url": "edit2.html",
    "revision": "0e18f5949c0dbe5c416ba868a75a4412"
  },
  {
    "url": "html2pdf.bundle.js",
    "revision": "4f85d6a7fa6987d4bbc14367630ea05d"
  },
  {
    "url": "images/icons/icon-128x128.png",
    "revision": "a1ef1b9708d1ea183a9bc3c84ae12f2b"
  },
  {
    "url": "images/icons/icon-144x144.png",
    "revision": "46191e632fc0608fddd6807fb3c0e195"
  },
  {
    "url": "images/icons/icon-152x152.png",
    "revision": "cb261019ea0d6deebd87ade090d74447"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "add0be3f5939bed00e3d5c25d3704b8c"
  },
  {
    "url": "images/icons/icon-384x384.png",
    "revision": "944845293fe2d79da51210d2abef435a"
  },
  {
    "url": "images/icons/icon-512x512.png",
    "revision": "42ae7882c8e77d70b4139cefcd7a2a4d"
  },
  {
    "url": "images/icons/icon-72x72.png",
    "revision": "afe3b946a130e48a1beff91016a9ab12"
  },
  {
    "url": "images/icons/icon-96x96.png",
    "revision": "997a884575b29116abb58e1d46a79885"
  },
  {
    "url": "includesw.js",
    "revision": "cd2a6147acc3db4418f33cae188c40f8"
  },
  {
    "url": "index (copy).html",
    "revision": "bfa9982a67a4cb88b3a820089d923279"
  },
  {
    "url": "index.html",
    "revision": "79c35ddd3a5ab44a8b3ebedd0bef75d6"
  },
  {
    "url": "jquery-2.2.4.min.js",
    "revision": "2f6b11a7e914718e0290410e85366fe9"
  },
  {
    "url": "offline_bills.html",
    "revision": "b3b6293a3602193adf53c52592ac88d9"
  },
  {
    "url": "pdf1.html",
    "revision": "b57609c5fd93a2ed315312e09130afe7"
  },
  {
    "url": "pdf2.html",
    "revision": "87c28f7f37e49181d22d73f4beca81bc"
  },
  {
    "url": "practice1.html",
    "revision": "3811121e4aff442c01c2a087cb4561cb"
  },
  {
    "url": "reprint1.html",
    "revision": "3cb3e49d44c7c0f8ccbf3c036401e29c"
  },
  {
    "url": "reprint2.html",
    "revision": "e6ff66400ba948b5da069b2d37e7f78b"
  },
  {
    "url": "unsaved.html",
    "revision": "485256ea4ab259e2a53edb85904c196b"
  },
  {
    "url": "unsaved2.html",
    "revision": "a0344f5731e26b3250d9acdbf040e576"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
