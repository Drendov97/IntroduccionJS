const boton = document.querySelector('#button');

boton.addEventListener('click', function() {
    Notification.requestPermission()
        .then(resultado => console.log('El resultado es:', resultado));
});

if (Notification.permission == 'granted') {
    new Notification('Esta es una notificación', {
        icon: 'img/ElKirby.png',
        body: 'El Kirbo'
    })
}