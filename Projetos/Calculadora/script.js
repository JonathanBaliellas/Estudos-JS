let lbl_display = document.getElementById('lbl_display') // lbl do display
let lbl_operacao = document.getElementById('lbl_operacao') //lbl da operação
let valorInput = 0 //Valor do display
let valor1 = 0
let valor2 = 0
let result = 0
let operStandby = false
let operadorMemo = ''

function click_num(num){//Insere números no display
    if (valorInput.toString().length < 11){ //Limita a quantidade de digitos a 11
        valorInput = valorInput * 10 + num
        lbl_display.innerHTML = valorInput
    }    
}

function calcular(operador){//Realiza cálculos aritméticos conforme a operação escolhida
    valor1 = valorInput //valor1 recebe o valor do display
    valorInput = 0 //Zera o input para que o próximo número inicie do 0

    //Efetua o cálculo
    if(operStandby == true){//Se houver dois valores para calcular, efetua a operação
        valor2 = result //usado somente para o caso de operação final (=)
        switch(operadorMemo){            
            case 'x':
                result = result * valor1     
                break
    
            case '/':
                result = result / valor1
                break
    
            case '+':
                result = result + valor1
                break
    
            case '-':
                result = result - valor1                
        }

        //Finaliza a operação (=)
        if(operador == '='){
            operStandby = false
        }
    }else{//Se não houver dois valores para calcular, aguarda o segundo valor ser informado
        result = parseFloat(lbl_display.innerHTML)//result recebe o primeiro valor
        operStandby = true //Inicia o modo de cálculo
    }

    //Mostra os valores no display
    lbl_display.innerHTML = result
    if(operador == '='){//No caso de operação final (=), exibe a equação completa
        lbl_operacao.innerHTML = valor2 + ' ' + operadorMemo + ' ' + valor1 + ' ='
    }else{
        lbl_operacao.innerHTML = result + ' ' + operador
    }

    //Memoriza o operador
    if(operador != '='){
        operadorMemo = operador
    }    
}

function limpaTudo(){//Reinicia o programa (botão C)
    valorInput = 0
    valor1 = 0
    valor2 = 0
    result = 0
    operStandby = false
    lbl_operacao.innerHTML = ''
    lbl_display.innerHTML = 0
}

function apagar(){//Limpa o valor no display
    valorInput = 0
    lbl_display.innerHTML = valorInput
}

function bkspc(){//Exclui o último dígito
    valorInput /= 10
    valorInput = parseInt(valorInput) //Fica somente com a parte inteira
    lbl_display.innerHTML = valorInput
}

function pos_neg(){//Alterna entre positivo e negativo
    valorInput *= -1
    lbl_display.innerHTML = valorInput
}

function decimal(){//Insere o ponto flutuante

}