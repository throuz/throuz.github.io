self.addEventListener('install', function (event) {
    self.skipWaiting();

    var offlinePage = new Request('offline.html');
    event.waitUntil(
        fetch(offlinePage).then(function (response) {
            return caches.open('offline2').then(function (cache) {
                return cache.put(offlinePage, response);
            });
        }));
}); self.addEventListener('fetch', function (event) {
    event.respondWith(
        fetch(event.request).catch(function (error) {
            return caches.open('offline2').then(function (cache) {
                return cache.match('offline.html');
            });
        }));
}); self.addEventListener('refreshOffline', function (response) {
    return caches.open('offline2').then(function (cache) {
        return cache.put(offlinePage, response);
    });
}); self.addEventListener('push', function (event) {
    var data = event.data.json(); var opts = {
        body: data.body,
        icon: data.icon,
        data: {
            url: data.url
        }
    };
    event.waitUntil(self.registration.showNotification(data.title, opts));
}); self.addEventListener('notificationclick', function (event) {
    var data = event.notification.data; event.notification.close(); event.waitUntil(
        clients.openWindow(data.url)
    );
});

// // CODELAB: Update cache names any time any of the cached files change.
// const FILES_TO_CACHE = [
//     '/offline.html',
// ];

// // CODELAB: Precache static resources here.
// evt.waitUntil(
//     caches.open(CACHE_NAME).then((cache) => {
//         console.log('[ServiceWorker] Pre-caching offline page');
//         return cache.addAll(FILES_TO_CACHE);
//     })
// );

// // CODELAB: Remove previous cached data from disk.
// evt.waitUntil(
//     caches.keys().then((keyList) => {
//         return Promise.all(keyList.map((key) => {
//             if (key !== CACHE_NAME) {
//                 console.log('[ServiceWorker] Removing old cache', key);
//                 return caches.delete(key);
//             }
//         }));
//     })
// );

// // CODELAB: Add fetch event handler here.
// if (evt.request.mode !== 'navigate') {
//     // Not a page navigation, bail.
//     return;
// }
// evt.respondWith(
//     fetch(evt.request)
//         .catch(() => {
//             return caches.open(CACHE_NAME)
//                 .then((cache) => {
//                     return cache.match('offline.html');
//                 });
//         })
// );