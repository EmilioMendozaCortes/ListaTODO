// Estas instrucciones van el los servidores reales
const cacheName = 'todoapp-offline';
const preCache = [
    './',
    './index.html',
    './mystyle.css',
    './myscript.js',
    './manifest.json'
]

// El self al inicia hace referencia al alcance global
self.addEventListener('install', e=> {
    console.log('El SW esta instalado!!'); 
    e.waitUntil(
        caches.open(cacheName).then(cache => cache.addAll(preCache))
    );
});