/* FIRST HELP GUIDE V1.21: offline app shell, no data or backup interception. */
const CACHE='first-help-guide-v121-static';
const ASSETS=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png'];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith('first-help-guide-')&&key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',event=>{
 const request=event.request,url=new URL(request.url);
 if(request.method!=='GET'||url.origin!==self.location.origin)return;
 if(!url.pathname.startsWith(new URL(self.registration.scope).pathname))return;
 if(request.mode==='navigate'){
  event.respondWith(fetch(request).catch(()=>caches.match('./index.html')));return;
 }
 if(!ASSETS.some(path=>new URL(path,self.registration.scope).pathname===url.pathname))return;
 event.respondWith(caches.match(request).then(cached=>cached||fetch(request)));
});
