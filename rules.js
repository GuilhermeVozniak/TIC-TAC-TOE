//Eu sei que existe maneira mais facil mas eu optei por fazer assim...
//esse é o back end ou business rules

"use strict"
//variaveis
let board = ['', '', '', '', '', '', '', '', '']
let playerTurn = 0
let playerSymbol = ['X', 'O']
let popSound = new Audio("./soundFx/pop.mp3")

function clickHadler(element) {
    if (gameOveer != true) {//se o jogo acabou nao dá pra jogar denovo
        let clickedElement = element.target
        let clickedElementId = parseInt(clickedElement.id)//string

        if (board[clickedElementId] == '') {
            popSound.play();//executa o SOM 'popup'
            board[clickedElementId] = playerSymbol[playerTurn]

            criaOX(clickedElementId, playerSymbol[playerTurn])

            playerTurn == 0 ? playerTurn = 1 : playerTurn = 0//operador ternario para mudara vez

           

            verifyWiner(board);
            

        }
    }
}

function verifyWiner(board) {
    let boardCopy = [...board]

    //um player é vencedor se alguma linha ou coluna for igual ao gabarito

    //gabarito
    let vitoria = [["X", "X", "X"], ["O", "O", "O"]]

    // linhas marcadas
    let linhaM = [[], [], []]//ver como linha horizontal
    let l = 0//linha
    for (let x = 0; x < 9; x++) {
        if (boardCopy[x] != '') {
            if (x > 2) {
                l = 1
            }
            if (x > 5) {
                l = 2
            }
            linhaM[l].push(boardCopy[x])
        }
    }

    //colunas marcadas
    let colunaM = [[], [], []]//ver como coluna horizontal
    let c = 0//culuna
    for (let y = 0; y < 3; y++) {
        for (let x = 0 + y; x < 9; x += 3) {
            if (boardCopy[x] != '') {
                if (x == 1 || x == 4 || x == 7) {
                    c = 1
                }
                if (x == 2 || x == 5 || x == 8) {
                    c = 2
                }
                colunaM[c].push(boardCopy[x])
            }
        }

    }

    //Diagonais marcadas
    let diagonalM = [[], []] //ver como diagonal horizontal
    for (let dig = 0; dig < boardCopy.length; dig += 4) {
        if (boardCopy[dig] != '') {
            diagonalM[0].push(boardCopy[dig])
        }
    }
    for (let dig = 2; dig < boardCopy.length - 1; dig += 2) {
        if (boardCopy[dig] != '') {
            diagonalM[1].push(boardCopy[dig])
        }
    }

    //verifica o vencedorde com base nas linha, colunas e diagonais marcadas
    for (let row = 0; row < 3; row++) {
        for (let p in vitoria) {
            if (JSON.stringify(linhaM[row]) == JSON.stringify(vitoria[p])) {//vitorial linha
                gameOveer = true
                setTimeout(gameOver, 10);
            }
            if (JSON.stringify(colunaM[row]) == JSON.stringify(vitoria[p])) {//vitorial linha
                gameOveer = true
                setTimeout(gameOver, 10);
            }
            if (JSON.stringify(diagonalM[row]) == JSON.stringify(vitoria[p])) {//vitorial linha
                gameOveer = true
                setTimeout(gameOver, 10);
            }
        }
    }

    //verifica emapte
    let empate = 0
    for(let i =0; i<boardCopy.length;i++){
        if(boardCopy[i] == ''){
            empate++
        }
    }
    if(empate == 0 && gameOveer == false){
        gameOver();
    }
}

function newGame(){
    document.location.reload(true)
}