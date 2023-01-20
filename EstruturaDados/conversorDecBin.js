/**
 * Usarei três métodos para converter números da base decimal
 * para binária
 */

//Entrada de dados
function entrada(){
    //Chama um prompt para entrada de dados e converte para número
    let numero = Number(window.prompt("Informe um número"));

    //Chama um dos métodos
    converterPilha(numero);
}

//Como seria feito no papel
function converterManual(decimal){
    //Declara a resposta
    let bin = '';

    //Enquanto a divisão não chegar a zero, repete o bloco
    while(decimal > 0){
        //A resposta recebe o resto da divisão + o valor que
        //havia até então
        bin = (decimal % 2).toString() + bin;

        //O valor decimal recebe a parte inteira da divisão
        decimal = Math.trunc(decimal / 2);
    }

    //Devolve a resposta
    window.alert("Resposta: " + bin);
}

//Usa o método toString() de forma simples.
function converterToString(decimal){
    //Devolve a resposta fazendo a conversão diretamente pelo método toString()
    window.alert("Resposta: " + decimal.toString(2));
}

//Usando uma pilha
class Pilha{
    constructor(){
        //Cria um vetor para armazenar os itens
        this.itens = [];
    }

    //Insere um elemento à pilha
    inserir(elemento){
        this.itens.push(elemento);
    }

    //Remove o último elemento da pilha e o devolve como resposta
    remover(){
        return this.itens.pop();
    }

    //Mostra o último elemento da pilha
    verTopo(){
        return this.itens[this.itens.length - 1];
    }

    //Verifica que a pilha está vazia e retorna verdadeiro ou falso
    estaVazio(){
        return this.itens.length === 0;
    }

    //Retorna o tamanho da pilha
    tamanho(){
        return this.itens.length;
    }

    //Apaga todos os elementos da pilha
    limpar(){
        this.itens = [];
    }
}

function converterPilha(decimal){
    //Cria uma nova pilha
    const pilhaResto = new Pilha();

    //Declara variáveis
    let num = decimal;
    let resto;
    let resposta = '';

    //Enquanto o número for maior que zero executa o bloco
    while(num > 0){
        //Atribui o valor do resto
        resto = Math.floor(num % 2);

        //Insere o resto na pilha
        pilhaResto.inserir(resto);

        //Pega a parte inteira do número dividido por dois
        num = Math.floor(num / 2);
    }

    //Enquanto houver valores na pilha executa o bloco
    while(!pilhaResto.estaVazio()){
        //A resposta recebe o item que está no topo da pilha
        resposta += pilhaResto.remover().toString();
    }

    //Devolve a resposta
    window.alert("Resposta: " + resposta);
}