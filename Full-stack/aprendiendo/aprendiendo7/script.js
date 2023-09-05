const title = document.createElement('h1')
/* document.createElement es la manera en la que podemos crear objetos html desde javascript */
title.innerText = 'Hola Mundo desde JS'

const button = document.createElement('button')
button.innerText = 'click'

button.addEventListener('click', function() {

    title.innerText = 'Texto actualizado con JS'
    alert('ser hizo un click')
})


document.body.append(title)
document.body.append(button)