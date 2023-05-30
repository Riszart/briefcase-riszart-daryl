// Define el nombre y la versión del caché
const CACHE_NAME = 'my-app-cache-v1';

// Lista de archivos para almacenar en caché
const urlsToCache = [
  '/index.html',
  '/about.html',
  '/contact.html',
  '/portafolio.html',
  '/skill.html',
  '/summary.html',
];

// Instalación del Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        // Almacena en caché los archivos
        return cache.addAll(urlsToCache);
      })
  );
});

// Interceptar las solicitudes y servir desde la caché
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Si el archivo está en caché, lo devuelve
        if (response) {
          return response;
        }
        // Si no está en caché, lo solicita a la red
        return fetch(event.request);
      })
  );
});

// Eliminar cachés antiguas al activar el Service Worker 
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.filter(cacheName => {
            // Elimina las cachés antiguas
            return cacheName !== CACHE_NAME;
          }).map(cacheName => {
            return caches.delete(cacheName);
          })
        );
      })
  );
});
