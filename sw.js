console.log('Service Worker archivo');

//instalando service worker
self.addEventListener('install', event=>{
    //descargar assets
    //cache
    console.log('instalando SW');
    console.log(event);

});

//cuando el service worker se activa y toma el control de la aplicaci'on.

self.addEventListener('activate', event=>{
    //borrar cache viejo

    console.log(' SW activo');
})