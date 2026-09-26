const CACHE_NAME = "revisao-lucas-m-v4"; // Mudei para v4 para forçar a limpeza do antigo

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

  // 1. Para páginas HTML: Tenta a rede primeiro, se cair a internet, usa o cache.
  if (request.mode === "navigate" || request.headers.get("accept").includes("text/html")) {
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

  // 2. Para os outros arquivos (JS, Imagens): Padrão Stale-While-Revalidate
  event.respondWith(
    caches.match(request).then((cached) => {
      
      // A promessa de ir na rede buscar a versão mais nova no GitHub
      const fetchPromise = fetch(request).then((networkResponse) => {
        // Só salva no cache se a resposta for de sucesso (código 200)
        if (networkResponse && networkResponse.status === 200) {
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(request, responseClone);
          });
        }
        return networkResponse;
      }).catch(() => {
        // Ignora erros de rede aqui para não quebrar o site offline
      });

      // O PULO DO GATO: 
      // Se tem no cache, devolve na hora (rápido). 
      // Enquanto isso, a 'fetchPromise' roda no fundo e atualiza pro futuro.
      // Se não tem no cache, espera a rede devolver.
      return cached || fetchPromise;
    })
  );
});
