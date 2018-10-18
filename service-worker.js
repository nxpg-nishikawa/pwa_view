self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
});

self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
});

// 現状では、この処理を書かないとService Workerが有効と判定されないようです
self.addEventListener('fetch', function(event) {
    console.log("aaa");
});


// self.addEventListener('push', (event) => {
//     console.info('push', event);

//     const message = event.data ? event.data.text() : '(・∀・)';

//     event.waitUntil(
//         self.registration.showNotification('Push Notification Title', {
//             body: message,
//             icon: 'https://kanatapple.github.io/service-worker/push/images/image.jpg',
//             tag: 'push-notification-tag'
//         })
//     );
// });

// 'use strict';

// self.addEventListener('install', (event) => {
//     console.info('install', event);
    
//     event.waitUntil(self.skipWaiting());
// });

// self.addEventListener('activate', (event) => {
//     console.info('activate', event);
    
//     event.waitUntil(self.clients.claim());
// });

// self.addEventListener('fetch', (event) => {
//     console.info('fetch', event);
// });

// self.addEventListener('push', (event) => {
//     console.info('push', event);
    
//     const message = event.data ? event.data.text() : '(・∀・)';
    
//     event.waitUntil(
//         self.registration.showNotification('Push Notification Title', {
//             body: message,
//             icon: 'https://kanatapple.github.io/service-worker/push/images/image.jpg',
//             tag: 'push-notification-tag'
//         })
//     );
// });


