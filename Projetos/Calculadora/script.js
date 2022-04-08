let txt_edit = document.getElementById('txt_edit')
let lbl_display = document.getElementById('lbl_display')
let valorInput = 0
let valor1 = 0
let valor2 = 0
let result = 0
let operInic = true

function click_num(num){
    valorInput = valorInput * 10 + num
    txt_edit.value = valorInput
}

function operacao(operador){
    valor1 = valorInput
    switch(operador){
        case 'x':
            if(operInic == true){
                result = valor1
                operInic = false
            }else{
                result = result * valor1
            }
            
            valorInput = 0
            txt_edit.value = result
            lbl_display.innerHTML = result + ' x'
            break

        case '/':
            if(operInic == true){
                result = valor1
                operInic = false
            }else{
                result = result / valor1
            }
            
            valorInput = 0
            txt_edit.value = result
            lbl_display.innerHTML = result + ' ÷'
            break

        case '+':
            if(operInic == true){
                result = valor1
                operInic = false
            }else{
                result = result + valor1
            }
            
            valorInput = 0
            txt_edit.value = result
            lbl_display.innerHTML = result + ' +'
            break

        case '-':
            if(operInic == true){
                result = valor1
                operInic = false
            }else{
                result = result - valor1
            }
            
            valorInput = 0
            txt_edit.value = result
            lbl_display.innerHTML = result + ' -'    
    }
    
}

function igual(){
    valor2 = valorInput
    let comprimento = lbl_display.innerHTML.length
    let operacao = lbl_display.innerHTML.substring(comprimento-1,comprimento)    
    switch(operacao){
        case 'x':
            window.alert('multiplicação')
            break
        case '/':
            window.alert('divisão')
            break
        case '+':
            window.alert('adição')
            break
        case '-':
            window.alert('subtração')
            break
    }
}

function limpaTudo(){
    valorInput = 0
    valor1 = 0
    valor2 = 0
    result = 0
    operInic = true
    lbl_display.innerHTML = ''
    txt_edit.value = 0
}

function pos_neg(){//alterna entre positivo e negativo

}