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
    "revision": "993bd04fec45e735f6ac484f4a44a416"
  },
  {
    "url": "edit2.html",
    "revision": "bab477d3f9e8014074472b64108d51ac"
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
    "url": "index.html",
    "revision": "8f9919496d5f6df1f3a79802484cb856"
  },
  {
    "url": "offline_bills.html",
    "revision": "39d0a5f7a5e784a82d4fa53390a32e74"
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
    "revision": "8844029cf7619eca3c67518a0aab10d1"
  },
  {
    "url": "reprint1.html",
    "revision": "25f9fae546840c629b7b2bb5814ef27a"
  },
  {
    "url": "reprint2.html",
    "revision": "ce019a2f6ed33d7140c384512c7a7624"
  },
  {
    "url": "unsaved.html",
    "revision": "a5b1e36af93556d1b3699afc2f30e9c4"
  },
  {
    "url": "unsaved2.html",
    "revision": "0264c6a9c14f0f5172d1d00b5737f525"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
