/*if('serviceWorker' in navigator){
    console.log('Podemos Usarlo');
}*/
//confirmar si podemos usar SW
if(navigator.serviceWorker){
    navigator.serviceWorker.register('/sw.js')
}