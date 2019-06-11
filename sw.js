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
    "url": "3optionfunc.js",
    "revision": "50633a7e9e609f6aba818fe9236b3103"
  },
  {
    "url": "6optionfunc.js",
    "revision": "39124777913f4b52936fa5f5835e1e6d"
  },
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
    "revision": "8d573c1c260920b11c8cbac4718ef8c1"
  },
  {
    "url": "edit2.html",
    "revision": "58bb6047293f4b0944c37e6f6309ca2c"
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
    "revision": "725e516d03f56dd98180cb0a02017c98"
  },
  {
    "url": "index.html",
    "revision": "573eb09364ba0ec42018b5fbbc540b6d"
  },
  {
    "url": "jquery-2.2.4.min.js",
    "revision": "2f6b11a7e914718e0290410e85366fe9"
  },
  {
    "url": "manifest.json",
    "revision": "2271e892ba7fc8636c9a851ddb6ba614"
  },
  {
    "url": "offline_bills.html",
    "revision": "e8d505bbe41481a26e594be18fc3616e"
  },
  {
    "url": "pdf1.html",
    "revision": "eeea8383c7cc38c1749913c7d903467c"
  },
  {
    "url": "pdf2.html",
    "revision": "3ae1e57739ba5ebac162a2bc12153927"
  },
  {
    "url": "practice1.html",
    "revision": "e2c4faad7f2766b0682c39ba43b97077"
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
    "revision": "e63bc711e6504b0d5553854593872472"
  },
  {
    "url": "unsaved2.html",
    "revision": "b8e3bb6ee17fc34350f6243f7531d785"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
