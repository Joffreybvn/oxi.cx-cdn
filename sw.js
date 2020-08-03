
let CACHE_NAME = 'oxi.cx-cdn-v0.1';
let urlsToCache = [
    '/css/styles.css',
    '/js/main.js'
];

self.addEventListener('install', (event) => {

    // Perform install steps - Register the URLs
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', function(event) {

    // Respond with internally cached URLs
    event.respondWith(
        caches.match(event.request)
            .then((response) => {

                    // Cache hit, return response
                    if (response) {
                        return response;
                    }
                    return fetch(event.request);
                }
            )
    );
});

self.addEventListener('activate', function(event) {

    // Remove the old caches
    let cacheAllowList = [CACHE_NAME];

    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheAllowList.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});