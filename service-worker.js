//  versão do cache 
const CACHE_NAME = "AppFidelidade-Controle-v6";

// Acesso Offline
const arquivosOffline = [
    '/offline.html',
    '/fid_game1.html', 
    '/fid_game2.html', 
    '/fid_game3.html', 
    '/fid_game4.html', 
    '/fid_game5.html',
    '/fid_game6.html', 
    '/fid_game7.html',
    '/fid_game8.html', 
    // ... seus outros arquivos (CSS, logos, etc)
];


const urlsToCache = ["./", "./index.html", "./manifest.json"];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
  self.skipWaiting();
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
