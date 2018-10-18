self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
});

self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
});

// 現状では、この処理を書かないとService Workerが有効と判定されないようです
self.addEventListener('fetch', function(event) {});


// self.addEventListener('push', function(event) {
//     event.waitUntil(
//         self.registration.showNotification(event.data.json().notification.title, {
//             'body': event.data.json().notification.body,
//             'icon': './icon.png'
//         })
//     );
// });


self.addEventListener("push", function(event) {
    event.waitUntil(
      self.registration.pushManager.getSubscription()
        .then(function(subscription) {
          if (subscription) {
            return subscription.endpoint
          }
          throw new Error('User not subscribed')
      })
      .then(function(res) {
        return fetch('./notifications.json')
      })
      .then(function(res) {
        if (res.status === 200) {
          return res.json()
        }
        throw new Error('notification api response error')
      })
      .then(function(res) {
        return self.registration.showNotification(res.title, {
          icon: './icon.png',
          body: res.body
        })
      })
    )
  })