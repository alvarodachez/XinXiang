const divPlato = document.getElementById('plato')
const price = document.getElementById('precio')

price.innerHTML = sessionStorage.getItem('price')

let div = document.createElement('div')
let img = document.createElement('img')
img.src = sessionStorage.getItem()
div.appendChild(img)
document.getElementById('plato').appendChild(div)

document.getElementById('finalizar').addEventListener('click', () => {
    location.href = 'pedidos.html'
})