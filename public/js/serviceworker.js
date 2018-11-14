'use strict';

const filesToCache = [
    // css
    "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.css",
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
    // js
    "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.min.js",
    //assets
    "/manifest.json",
    "/favicon.ico",
    "/assets/logo.ico"
];

const staticCacheName = 'Tp_Node.js.V1';

self.addEventListener('install', event => {
    console.log('Attempting to install service worker and cache static assets');
    event.waitUntil(
        caches.open(staticCacheName)
            .then(cache => {
                return cache.addAll(filesToCache); // On ajoute tous les fichiers dans le cache à la création du service worker
            })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.open(staticCacheName).then(function(cache) {
        return cache.match(event.request).then(function (response) {
          return response || fetch(event.request).then(function(response) {
            cache.put(event.request, response.clone());
            return response;
          });
        });
      })
    );
  });

// self.addEventListener('fetch', function (event) {
//     // C'est là que la magie opère, Noël !
//     caches.match(event.request).catch(function () {
//         return fetch(event.request);
//     })
// });

