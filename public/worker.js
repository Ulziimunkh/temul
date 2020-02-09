let CACHE_NAME = "Temulv2";
const staticCacheName = "site-static-v1";
const dynamicCacheName = "site-dynamic-v1";
const urlsToCache = [
  "/",
  "/public",
  "/index.html",
  "/logo192.png",
  "/favicon.ico",
  "/logo512.png",
  "../src/images/gif/loading-arrow.gif",
  "../src/images/gif/loading-gear.gif",
  "../src/images/icons/logo.png",
  "../src/images/icons/logo.svg",
  "https://fonts.googleapis.com/css?family=Roboto+Mono"
];

// cache size limir function
const limitCacheSize = (name, size) => {
  caches.open(name).then(cache => {
    cache.keys().then(keys => {
      if (keys.length > size)
        cache.delete(keys[0]).then(limitCacheSize(name, size));
    });
  });
};
// install Service Worker
self.addEventListener("install", evt => {
  evt.waitUntil(
    // console.log('service worker has been installed')
    caches.open(staticCacheName).then(cache => {
      console.log("caching all assets");
      cache.addAll(urlsToCache);
    })
  );
});

// Cache and return requests
self.addEventListener('fetch', evt => {
  evt.respondWith(
    caches
      .match(evt.request)
      .then(cacheRes => {
        return (
          cacheRes ||
          fetch(evt.request).then(fetchRes => {
            return caches.open(dynamicCacheName).then(cache => {
              cache.put(evt.request.url, fetchRes.clone());
              limitCacheSize(dynamicCacheName, 15);
              return fetchRes;
            });
          })
        );
      })
      .catch(() => {
        if (evt.request.url.indexOf(".html") > -1) {
          return caches.match("/pages/fallback.html");
        }
      })
  );
});


// activate vente
self.addEventListener("activate", evt => {
  // console.log('service worker has been activated');
  evt.waitUntil(
    caches.keys().then(keys => {
      //console.log(keys);
      return Promise.all(
        keys
          .filter(key => key !== staticCacheName && key !== dynamicCacheName)
          .map(key => caches.delete(key))
      );
    })
  );
});
