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
    "revision": "6d060e649ec41a77d4e0825863b1e3e7"
  },
  {
    "url": "6optionfunc.js",
    "revision": "deb303cd5f1cd7511970cd2ce6c81697"
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
    "revision": "b827f2a69b742523386e6933d01b2eb1"
  },
  {
    "url": "edit2.html",
    "revision": "fc072bf609097629a11397f93f361b33"
  },
  {
    "url": "html2pdf.bundle.js",
    "revision": "4f85d6a7fa6987d4bbc14367630ea05d"
  },
  {
    "url": "images/icons/icon-128x128.png",
    "revision": "fcd272505c32bbc5ca6d937cfed535d6"
  },
  {
    "url": "images/icons/icon-144x144.png",
    "revision": "f6e262a9f722d1543d131640a76c326d"
  },
  {
    "url": "images/icons/icon-152x152.png",
    "revision": "7972efdc3a7aa3d5f5fa2d0cc671a68a"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "d35f2e2a8753a3d790b9cd05fbb37614"
  },
  {
    "url": "images/icons/icon-384x384.png",
    "revision": "fcbadc79021b4fa1a983c02837c42093"
  },
  {
    "url": "images/icons/icon-512x512.png",
    "revision": "6a198b0e2e14447b91dac714175814b2"
  },
  {
    "url": "images/icons/icon-72x72.png",
    "revision": "73f85b8cfcdf83bdd25e5878aac65aea"
  },
  {
    "url": "images/icons/icon-96x96.png",
    "revision": "22b9994d75fbce534c4b2205a2081158"
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
    "revision": "c70eb47d818fa51e6be18978a2162ea0"
  },
  {
    "url": "jquery-2.2.4.min.js",
    "revision": "2f6b11a7e914718e0290410e85366fe9"
  },
  {
    "url": "offline_bills.html",
    "revision": "f8bef05a83cfc23318437bcc7242645a"
  },
  {
    "url": "pdf1.html",
    "revision": "77c2329d37feceb482b17dc4df6dc4b2"
  },
  {
    "url": "pdf2.html",
    "revision": "a91514e88d54131d3edd64658cb74214"
  },
  {
    "url": "practice1.html",
    "revision": "e1c4abf38304bbf8a8207a8a7ec56fa1"
  },
  {
    "url": "reprint1.html",
    "revision": "fa7a6d00307e2df4d3bb2569d0f2bb9f"
  },
  {
    "url": "reprint2.html",
    "revision": "c25df0a5346cd291cd7cf08aa8028ea0"
  },
  {
    "url": "unsaved.html",
    "revision": "318c97359385093045dd3049496a073a"
  },
  {
    "url": "unsaved2.html",
    "revision": "fd6a798dc019b18a09080e2fd7a119a3"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
