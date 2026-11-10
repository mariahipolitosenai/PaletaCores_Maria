let tela = document.querySelector("#tela-de-pintura");/*É UM COMANDO DO JS PARA BUSCAR UM ELEMENTO DENTRO DO SEU HTML... UTILIZANDO AS MESMAS REGRAS DE SELEÇÃO QUE USAMOS NO CSS */
let corAzul = document.querySelector("#pincel-azul");
let corRosa = document.querySelector("#pincel-rosa");
let corVermelho = document.querySelector("#pincel-vermelho");
let corAmarelo = document.querySelector("#pincel-amarelo");
let corVerde = document.querySelector("#pincel-verde");
let corRoxo = document.querySelector("#pincel-roxo");
let corLaranja = document.querySelector("#pincel-laranja");
let corAgua = document.querySelector("#pincel-agua");
let corPink = document.querySelector("#pincel-pink");
let nomeCor = document.querySelector("h3");

corAzul.addEventListener("click", azul);
corRosa.addEventListener("click", rosa);
corVermelho.addEventListener("click", vermelho);
corAmarelo.addEventListener("click", amarelo);
corVerde.addEventListener("click", verde);
corRoxo.addEventListener("click", roxo);
corLaranja.addEventListener("click", laranja);
corAgua.addEventListener("click", agua);
corPink.addEventListener("click", pink);

function azul(){
    tela.style.background = "blue";
    nomeCor.innerHTML = "Azul"; /*É UMA PROPRIEDADE DE ELEMENTOS HTML NO JS USADA PARA LER E ALTERAR TODO O CONTEÚDO DE UMA TAG */
}

function rosa(){
    tela.style.background = "DeepPink";
    nomeCor.innerHTML = "Rosa";
}

function vermelho(){
    tela.style.background = "red";
    nomeCor.innerHTML = "Vermelho";
}

function amarelo(){
    tela.style.background = "yellow";
    nomeCor.innerHTML = "Amarelo";
}

function verde(){
    tela.style.background = "greenyellow";
    nomeCor.innerHTML = "Verde";
}

function roxo(){
    tela.style.background = "plum";
    nomeCor.innerHTML = "Roxo";
}



function laranja(){
    tela.style.background = "orange";
    nomeCor.innerHTML = "Laranja";
}

function agua(){
    tela.style.background = "Aqua";
    nomeCor.innerHTML = "Agua";
}

function pink(){
    tela.style.background = "pink";
    nomeCor.innerHTML = "Pink";
}
