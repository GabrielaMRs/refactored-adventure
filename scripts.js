window.onload = function inicio() {
    let nome = window.prompt('Qual é o seu nome?')
    let res = window.document.getElementById('resultado')
    res.innerHTML = `<p>Olá, <strong>${nome}</strong> seja bem-vindo(a) ao maior blog para cryptoinvestidores.`
}

let contador = 4 
let res = document.querySelector('section#result')

function contar() {
    contador ++ 
    res.innerHTML = `${contador}`
}
