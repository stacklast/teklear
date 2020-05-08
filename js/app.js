/*if('serviceWorker' in navigator){
    console.log('Podemos Usarlo');
}*/
//confirmar si podemos usar SW
if(navigator.serviceWorker){
    navigator.serviceWorker.register('/sw.js')
    .then( reg =>{
        /*setTimeout(() => {
           reg.async.register('posteo-gatitos');
           console.log('se postearion nuevos gatitos al server')
        }, 100);*/
        Notification.requestPermission().then( result => {
            console.log(result);
            reg.showNotification('Gracias por llegar a TEKLEAR.COM, muy pronto tendras noticias');
        });
    });

    
};

if(window.caches){
    caches.open('cache-v1.2').then( cache =>{
        //cache.add('/offline.html');

        cache.addAll([
            '/index.html',
            '/css/style.css',
            '/images/logo.jpeg'
        ]);
    });
};