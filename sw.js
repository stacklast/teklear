console.log('Service Worker archivo');

//instalando service worker
self.addEventListener('install', event=>{

    const instalacion = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('SW: Instalaciones Terminadas');
            self.skipWaiting();
            resolve();
        },1000);
    });
    //descargar assets
    //cache
    console.log('instalando SW');
    console.log(event);

    //carga instantanea de los cambios
    //recomendar no usarlo
    //self.skipWaiting();

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

    const offlineResp = new Response(`
    Bienvenido a mi pagina web

    Disculpa pero para usarla necesitas Internet
    `);

    const resp = fetch(event.request)
    .catch(()=>{
        return offlineResp;
    });
    //aplicar estrategias de cache
    //console.log('SW:',event.request.url);


    //event.respondWith(fetch(event.request));
});


//SYNC: cuando recuperamos la conexion a internet

self.addEventListener('sync',event=>{
    console.log('tenemos conexion');

    console.log(event);
    console.log(event.tag);
});

//PUSH: manejar las push notifications

self.addEventListener('push',event=>{
    console.log('NOtificacion');
});