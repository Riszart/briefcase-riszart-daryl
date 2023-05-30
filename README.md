# briefcase-riszart-daryl
npm install gh-pages --save-dev -- desplegar con consola de manera local
npm install sass --save-dev 
npm install pug --save-dev 

# preconnect and dns-prefetch

agregar indicadores de recursos (resource hints) como "preconnect" o "dns-prefetch" para establecer conexiones tempranas con orígenes de terceros importantes.

Los indicadores de recursos permiten al navegador realizar conexiones previas a los recursos necesarios antes de que se soliciten explícitamente. Esto ayuda a reducir el tiempo de resolución DNS y establecer conexiones de red más rápidas, mejorando así el rendimiento de tu sitio web.

# 

  En primer lugar, se verifica si el navegador admite los Service Workers utilizando la condición if ('serviceWorker' in navigator). Esto se asegura de que el navegador sea compatible con los Service Workers antes de continuar.

  Si el navegador admite los Service Workers, se agrega un evento de carga ('load') al objeto window utilizando window.addEventListener('load', () => { ... }). Este evento se activa cuando la página se ha cargado completamente.

  Dentro del evento de carga, se llama a navigator.serviceWorker.register('/public/html/service-worker.js') para registrar el archivo del Service Worker en la ubicación especificada (/public/html/service-worker.js). Este método devuelve una promesa que se puede encadenar con .then() y .catch().

  Si el registro del Service Worker es exitoso, se ejecuta la función de devolución de llamada proporcionada en .then(registration => { ... }). En este ejemplo, se ha comentado la línea console.log('Service Worker registered:', registration);, pero normalmente aquí se podría realizar alguna acción adicional después de que el Service Worker se haya registrado correctamente.

  Si ocurre algún error durante el registro del Service Worker, se ejecuta la función de devolución de llamada proporcionada en .catch(error => { ... }). En este ejemplo, se muestra un mensaje de error en la consola utilizando console.log('Service Worker registration failed:', error);.

# gestin de install PWA, detro de (service-worker.js)

  Primero, se define el nombre y la versión del caché. Esto se hace asignando un nombre único a la constante CACHE_NAME. En el ejemplo, se utiliza el nombre "my-app-cache-v1".

  A continuación, se especifica una lista de archivos que deseas almacenar en caché. Estos archivos son los que se encuentran en la constante urlsToCache. Puedes agregar las rutas de los archivos que desees almacenar en caché en esta lista.

  Luego, se añade un evento de instalación al Service Worker utilizando self.addEventListener('install', event => { ... }). Este evento se activa cuando se instala el Service Worker.

  Dentro del evento de instalación, se utiliza caches.open(CACHE_NAME) para abrir un caché específico. Luego, se llama al método cache.addAll(urlsToCache) para almacenar en caché los archivos especificados en la lista urlsToCache.

  Después de eso, se añade un evento de solicitud (fetch) al Service Worker utilizando self.addEventListener('fetch', event => { ... }). Este evento se activa cuando se realiza una solicitud desde la página.

  Dentro del evento de solicitud, se utiliza caches.match(event.request) para buscar en el caché una respuesta correspondiente a la solicitud actual. Si se encuentra una respuesta en el caché, se devuelve al navegador. Si no se encuentra en el caché, se realiza la solicitud a la red utilizando fetch(event.request).

  A continuación, se añade un evento de activación al Service Worker utilizando self.addEventListener('activate', event => { ... }). Este evento se activa cuando el Service Worker se activa correctamente.

  Dentro del evento de activación, se utiliza caches.keys() para obtener una lista de todos los nombres de caché existentes. Luego, se filtran los nombres de caché que no coinciden con el nombre actual (CACHE_NAME) y se eliminan utilizando caches.delete(cacheName).