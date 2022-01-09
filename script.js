//Back end Integration
//Esse codigo fala com as regras do negocio/back-end
"use strict"

//variaveis
let gameOveer = false


//verifica se foi se algum square foi clicado
addEventListener('DOMContentLoaded', () => {
    let squares = document.querySelectorAll('.square')
    squares.forEach((square) => {
        square.addEventListener('click', clickHadler)
    })

})

function criaOX(id, playerSymbol) {
    let pai = document.getElementById(`${id}`)
    let div = document.createElement("div")
    div.className = playerSymbol
    pai.appendChild(div);
}

function gameOver() {
    if (gameOveer) {
        win();//vitoria
    }
    else {
        tie();//empate
        gameOveer = true
    }
}

//pós jogo
function win() {
    let pt = playerTurn
    pt == 0 ? pt = 1 : pt = 0
    //cria o elemento
    let pai = document.body
    let div = document.createElement("div")
    div.id = "win"
    div.innerHTML = `<div><p>WIN!</p><p>${playerSymbol[pt]}</p></div>`
    pai.appendChild(div)
    btNewGame();
}
function tie(){
    let pai = document.body
    let div = document.createElement("div")
    div.id = "win"
    div.innerHTML = `<div><p>TIE!</p></div>`
    pai.appendChild(div)
    btNewGame();
}

function btNewGame(){
    let pai = document.getElementById("win")
    let btn = document.createElement("input")
    btn.type = "submit"
    btn.value = "NEW GAME"
    btn.setAttribute("onclick", "newGame()");
    pai.appendChild(btn)
}