
const boton = document.querySelector('#boton');

boton.addEventListener('click', () => {
    Notification.requestPermission()
        .then( resultado => console.log(`El resultafo es ${resultado}`) )
})


if(Notification.permission == 'granted') {
    new Notification('Esta es una notificación', {
        icon: 'img/ccj.img',
        body: 'Código con Juan, los mejores tutoriales'
    })
}