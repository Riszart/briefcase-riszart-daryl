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
  'https://riszart.github.io/briefcase-riszart-daryl/public/js/changePage.js',
  'https://riszart.github.io/briefcase-riszart-daryl/public/js/index.js',
  'https://riszart.github.io/briefcase-riszart-daryl/public/js/navBar.js',
  'https://riszart.github.io/briefcase-riszart-daryl/public/js/portfolio.js',
  'https://riszart.github.io/briefcase-riszart-daryl/public/js/script.js',
  'https://riszart.github.io/briefcase-riszart-daryl/public/js/scriptContact.js',
  'https://riszart.github.io/briefcase-riszart-daryl/public/js/skill.js',
  'https://riszart.github.io/briefcase-riszart-daryl/public/js/startEnd.js',
  'https://riszart.github.io/briefcase-riszart-daryl/public/js/summary.js',
  'https://riszart.github.io/briefcase-riszart-daryl/public/img/svg/css-icon.svg',
  'https://riszart.github.io/briefcase-riszart-daryl/public/img/svg/facebook-icon.svg',
  'https://riszart.github.io/briefcase-riszart-daryl/public/img/svg/github-icon.svg',
  'https://riszart.github.io/briefcase-riszart-daryl/public/img/svg/html-icon.svg',
  'https://riszart.github.io/briefcase-riszart-daryl/public/img/svg/icons8-youtube-music-96.svg',
  'https://riszart.github.io/briefcase-riszart-daryl/public/img/svg/javascript-icon.svg',
  'https://riszart.github.io/briefcase-riszart-daryl/public/img/svg/linkedin-icon.svg',
  'https://riszart.github.io/briefcase-riszart-daryl/public/img/svg/maletin.svg',
  'https://riszart.github.io/briefcase-riszart-daryl/public/img/svg/network-icon.svg',
  'https://riszart.github.io/briefcase-riszart-daryl/public/img/svg/nodejs-icon.svg',
  'https://riszart.github.io/briefcase-riszart-daryl/public/img/svg/pug-js.svg',
  'https://riszart.github.io/briefcase-riszart-daryl/public/img/svg/sass-icon.svg',
  'https://riszart.github.io/briefcase-riszart-daryl/public/img/svg/tailwindcss.svg',
  'https://riszart.github.io/briefcase-riszart-daryl/public/img/svg/twitter-icon.svg',
  'https://riszart.github.io/briefcase-riszart-daryl/public/img/web/facebook.png',
  'https://riszart.github.io/briefcase-riszart-daryl/public/img/web/github.png',
  'https://riszart.github.io/briefcase-riszart-daryl/public/img/web/linkedin.png',
  'https://riszart.github.io/briefcase-riszart-daryl/public/img/web/r-lg.webp',
  'https://riszart.github.io/briefcase-riszart-daryl/public/img/web/r-sm.webp',
  'https://riszart.github.io/briefcase-riszart-daryl/public/img/web/redes.png',
  'https://riszart.github.io/briefcase-riszart-daryl/public/img/web/referencia-back.webp',
  'https://riszart.github.io/briefcase-riszart-daryl/public/img/web/ris-black.jpeg',
  'https://riszart.github.io/briefcase-riszart-daryl/public/img/web/riszart-logo-white.webp',
  'https://riszart.github.io/briefcase-riszart-daryl/public/img/web/riszart.webp',
  'https://riszart.github.io/briefcase-riszart-daryl/public/img/web/twitter.png',
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
