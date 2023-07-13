/**
 * Início: 12.7.23
 * Versão: 0.1
 * Jonathan Baliellas
 * 
 */

//CARTAS
const faces = ["A", "K", "Q", "J", "10", "9", "8", "7", "6", "5", "4", "3", "2"]
const naipes = ["♠️","♥️","♦️","♣️"]
let baralho = []
let jogadores = []
let numJogadores = jogadores.length

//ELEMENTOS HTML
const div_cartas = document.getElementById('div_cartas')
const spn_numJogadores = document.getElementById('spn_numJogadores')

//FUNÇÕES
function embaralhar(){
    baralho = []
    for(let i = 0; i < naipes.length; i++){
        for(let j = 0; j < faces.length; j++){
            baralho.push(faces[j] + naipes[i])
        }
    }
    alert('Embaralhado')
    div_cartas.innerHTML = ""
}

function sacarCarta(){
    if(baralho.length == 0){
        alert('É preciso embaralhar as cartas')
        return
    }

    //Seleciona uma carta aleatória do baralho
    let indice = Math.floor(Math.random() * baralho.length)
    let cartaSacada = baralho[indice]
    console.log('Sacou ' + cartaSacada)

    //Cria um parágrafo e exibe a carta
    const carta = document.createElement('p')
    carta.innerHTML = cartaSacada
    div_cartas.appendChild(carta)

    //Remove a carta do baralho
    baralho.splice(indice, 1)

    //Retorna a carta
    return cartaSacada
}

function distribuirCartas(){
    embaralhar()

    //Limpa a mão dos jogadores
    for(let i = 0; i < numJogadores; i++){
        jogadores[i].setCartas([])
    }

    //Entrega as cartas aos jogadores
    for(let i = 0; i < 2; i++){
        for(let j = 0; j < numJogadores; j++){
            jogadores[j].adicionarCarta(sacarCarta())
        }
    }
}

function adicionarJogador(){
    let novoJogador = new Jogador()
    jogadores.push(novoJogador)
    numJogadores = jogadores.length
    atualizarNumJogadores()
}

function removerJogador(){
    if(numJogadores > 2){
        jogadores.pop()
        numJogadores = jogadores.length
        atualizarNumJogadores()
    }else{
        alert('Mínimo de jogadores atingido')
    }
}

function atualizarNumJogadores(){
    spn_numJogadores.innerHTML = numJogadores
}