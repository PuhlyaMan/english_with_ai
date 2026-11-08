const CACHE = "easyenglish-next-v1";

const APP_SHELL = [
  "/",
  "/offline.html",
  "/favicon.svg",
  "/icons/icon-192.png",
  "/icons/icon-512.png",
  "/icons/maskable-512.png",
  "/manifest.webmanifest"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(APP_SHELL)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;

  event.respondWith(
    (async () => {
      const cache = await caches.open(CACHE);
      const cached = await cache.match(request);

      try {
        const response = await fetch(request);
        const sameOrigin = new URL(request.url).origin === self.location.origin;
        if (response.ok && sameOrigin) {
          cache.put(request, response.clone());
        }
        return response;
      } catch {
        if (cached) return cached;
        if (request.mode === "navigate") {
          const offline = await cache.match("/offline.html");
          if (offline) return offline;
        }
        throw new Error("Network unavailable");
      }
    })()
  );
});
