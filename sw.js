const C="anivoria-v1",A=["./","index.html","logo.svg","manifest.webmanifest"];
self.addEventListener("install",e=>e.waitUntil(caches.open(C).then(c=>c.addAll(A))));
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x))))));
self.addEventListener("fetch",e=>{const r=e.request;if(r.method!=="GET"||r.url.includes("anilist")||r.destination==="video"||r.headers.has("range"))return;
e.respondWith(fetch(r).then(x=>{const c=x.clone();caches.open(C).then(h=>h.put(r,c));return x}).catch(()=>caches.match(r).then(x=>x||caches.match("index.html"))))});
