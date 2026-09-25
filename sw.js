const CACHE_NAME = "revisao-lucas-m-v3";

const ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png",
  "./materias/literatura.js",
  "./materias/geografia.js",
  "./materias/historia.js",
  "./materias/analise-linguistica.js",
  "./materias/filosofia.js",
  "./materias/sociologia.js",
  "./materias/biologia-a.js",
  "./materias/biologia-b.js",
  "./materias/quimica-a.js",
  "./materias/quimica-b.js",
  "./materias/fisica-a.js",
  "./materias/fisica-b.js",
  "./materias/matematica-a.js",
  "./materias/matematica-b.js",
  "./materias/educacao-financeira.js"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );

  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    )
  );

  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const request = event.request;

  // Para páginas HTML, sempre tenta buscar a versão mais recente
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const responseClone = response.clone();

          caches.open(CACHE_NAME).then((cache) => {
            cache.put(request, responseClone);
          });

          return response;
        })
        .catch(() => caches.match(request))
    );

    return;
  }

  // Para os outros arquivos, usa o cache primeiro, mas atualiza o cache
  // em segundo plano quando busca algo que ainda não estava salvo
  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) return cached;

      return fetch(request).then((response) => {
        const responseClone = response.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(request, responseClone);
        });
        return response;
      });
    })
  );
});
