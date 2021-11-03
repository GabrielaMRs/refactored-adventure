let contador = 4;
let res = document.querySelector('section#result')

function contar() {
    contador ++ 
        if(contador > 5){
            contador --;
        }
        res.innerHTML = `${contador}`
        /* aqui deixei o limite para 5 estrelas */
}

function menos(){
    contador --
    res.innerHTML = `${contador}`
}
