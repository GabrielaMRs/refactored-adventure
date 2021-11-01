window.onload = function inicio() {
    let nome = window.prompt('Qual é o seu nome?')
    let res = window.document.getElementById('resultado')
    // Também funciona com o comando abaixo
    res.innerHTML = `<p>Olá, <strong>${nome}</strong> seja bem-vindo(a) ao maior blog para cryptoinvestidores. &#x1F596;`
}