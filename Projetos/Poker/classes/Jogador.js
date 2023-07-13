function Jogador(){
    this.cartas = []
    this.fichas = 0

    //ACESSORES
    this.setCartas = function(carta){
        this.cartas = carta
    }
    this.getCartas = function(){
        return this.cartas
    }

    this.setFichas = function(fichas){
        this.fichas = fichas
    }
    this.getFichas = function(){
        return this.fichas
    }

    //MÉTODOS
    this.adicionarCarta = function(carta){
        this.cartas.push(carta)
    }
    this.limpaMao = function(){
        this.cartas = []
    }
    this.comprarFichas = function(quant){
        this.fichas += quant
    }

    this.check = function(){
        //todo
        alert('check')
    }
    this.raise = function(){
        //todo
        alert('raise')
    }
    this.call = function(){
        //todo
    }
    this.fold = function(){
        //todo
    }
}