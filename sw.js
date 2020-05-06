console.log('Service Worker archivo');

//instalando service worker
self.addEventListener('install', event=>{

    const instalacion = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('SW: Instalaciones Terminadas');
            resolve();
        },1000);
    });
    //descargar assets
    //cache
    console.log('instalando SW');
    console.log(event);

    //carga instantanea de los cambios
    //recomendar no usarlo
    //self.skypWaiting();

    event.waitUntil(
        instalacion

    );
});

//cuando el service worker se activa y toma el control de la aplicaci'on.

self.addEventListener('activate', event=>{
    //borrar cache viejo

    console.log(' SW activo');
})


self.addEventListener('fetch', event =>{
    console.log('SW:',event.request.url);
});