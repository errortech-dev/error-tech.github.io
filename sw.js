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
    "url": "edit.html",
    "revision": "2537d5f4df3b1ac3abf378f48a5c6dbc"
  },
  {
    "url": "edit2.html",
    "revision": "e2c48bb54d126370f2e27c946752f688"
  },
  {
    "url": "html2pdf.bundle.js",
    "revision": "4f85d6a7fa6987d4bbc14367630ea05d"
  },
  {
    "url": "images/icons/icon-128x128.png",
    "revision": "2a372cd9842c18fe97c7b8803ed656d3"
  },
  {
    "url": "images/icons/icon-144x144.png",
    "revision": "458e8b253b8b721cc29e5819d7f88d86"
  },
  {
    "url": "images/icons/icon-152x152.png",
    "revision": "0fc1ae368a3a491ca30546ca52b32993"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "78e1134d08fd60c0400ef854e3a9a968"
  },
  {
    "url": "images/icons/icon-384x384.png",
    "revision": "6b404bd7bfab30bfbc00e4da6d79efb1"
  },
  {
    "url": "images/icons/icon-512x512.png",
    "revision": "6b404bd7bfab30bfbc00e4da6d79efb1"
  },
  {
    "url": "images/icons/icon-72x72.png",
    "revision": "76c610194d52a1ae12ee2d8471f0da30"
  },
  {
    "url": "images/icons/icon-96x96.png",
    "revision": "a408906c1a0eb33ea01210689af5dfa3"
  },
  {
    "url": "includesw.js",
    "revision": "c79f9aca0c781db80248971330ddd1e5"
  },
  {
    "url": "index.html",
    "revision": "e3207ad69ae2bbdea7f6eca40834c5ce"
  },
  {
    "url": "offline_bills.html",
    "revision": "6857074a4a9d89b346ba7ef61bf314a4"
  },
  {
    "url": "pdf1.html",
    "revision": "264b2c6e20a8f5ed8041d462df7ef91d"
  },
  {
    "url": "pdf2.html",
    "revision": "b1e44b250bd52ae5e8cb1dc738a79725"
  },
  {
    "url": "practice1.html",
    "revision": "061454c359d0b43f11667d940b44df56"
  },
  {
    "url": "reprint1.html",
    "revision": "25f9fae546840c629b7b2bb5814ef27a"
  },
  {
    "url": "reprint2.html",
    "revision": "ce019a2f6ed33d7140c384512c7a7624"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
