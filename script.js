/**
* Ano automatico
* @author Kayque Fraco
*/



// Inserindo o ano na teg <span>
let ano = document.getElementById('copyrightYear')
// a linha baixo obtem o ano atual do sistema
let anoAtual = new Date().getFullYear()
// a linha abaixo atribui o ano a teg <span>
ano.innerHTML = anoAtual

const main = document.querySelector('main')
const backgrounds = ['url(img/banner2.webp)','url(img/banner.jpg)','url(img/banner4.webp)']

let indice = 0

function slider(){
    indice ++
    if (indice >= backgrounds.length) {
        indice = 0
    }
    //troca da imagem de background no CSS
main.style.backgroundImage = backgrounds[indice]
main.style.transition = 'background-image 1s ease-in-out'
}

setInterval(slider, 3000)


