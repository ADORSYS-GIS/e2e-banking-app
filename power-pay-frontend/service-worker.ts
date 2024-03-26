/// <reference lib="WebWorker" />

// export empty type because of tsc --isolatedModules flag
export type {};
declare const self: ServiceWorkerGlobalScope;

const cacheName = "::power-pay-frontend";
const version = "v1.0.0";

self.addEventListener("install", function (event) {
  self.skipWaiting();
  event.waitUntil(
    caches.open(version + cacheName).then(function (cache) {
      return cache.addAll(["/"]);
    })
  );
});

self.addEventListener("activate", function (event) {
  self.clients.claim();
  event.waitUntil(
    caches.keys().then(function (keys) {
      // Remove caches whose name is no longer valid
      return Promise.all(
        keys
          .filter(function (key) {
            return key.indexOf(version) !== 0;
          })
          .map(function (key) {
            return caches.delete(key);
          })
      );
    })
  );
});

self.addEventListener("fetch", function (event) {
  const request = event.request;

  // Always fetch non-GET requests from the network
  if (request.method !== "GET") {
    event.respondWith(
      fetch(request).catch(function () {
        // Handle fetch error here
        console.log("Network request failed");
      }) as Promise<Response>
    );
    return;
  }

  // For HTML requests, try the network first, fall back to the cache
  if (
    request.headers.get("Accept")?.indexOf("text/html") !== -1 &&
    request.url.startsWith(self.origin)
  ) {
    event.respondWith(
      fetch(request)
        .then(function (response) {
          // Stash a copy of this page in the cache
          const copy = response.clone();
          caches.open(version + cacheName).then(function (cache) {
            cache.put(request, copy);
          });
          return response;
        })
        .catch(function () {
          return caches.match(request).then(function (response) {
            return response || fetch(request);
          });
        }) as Promise<Response>
    );
    return;
  }
  // For other requests, look in the cache
  if (
    request.headers.get("Accept")?.indexOf("text/plain") === -1 &&
    request.url.startsWith(self.origin)
  ) {
    event.respondWith(
      caches.match(request).then(function (response) {
        return (
          response ||
          fetch(request)
            .then(function (response) {
              const copy = response.clone();

              if (
                copy.headers.get("Content-Type")?.indexOf("text/plain") === -1
              ) {
                caches.open(version + cacheName).then(function (cache) {
                  cache.put(request, copy);
                });
              }

              return response;
            })
            .catch(function () {
              // Handle fetch error here
              console.log("Network request failed");
            })
        );
      }) as Promise<Response>
    );
    return;
  }
});