/*if('serviceWorker' in navigator){
    console.log('Podemos Usarlo');
}*/
//confirmar si podemos usar SW
if(navigator.serviceWorker){
    navigator.serviceWorker.register('/sw.js')
    .then(reg=>{
        setTimeout(() => {
           reg.async.register('posteo-gatitos');
           console.log('se postearion nuevos gatitos al server')
        }, 100);
    });
}