let txt_edit = document.getElementById('txt_edit')
let txt_display = document.getElementById('txt_display')
let valor = 0
let valor2 = 0
let result = 0
let operInic = true

function click_num(num){
    valor = valor * 10 + num
    txt_edit.value = valor
}

function operacao(operador){
    switch (operador){
        case 'x':
            if (operInic == true){
                result = valor                
                operInic = false
            }else{
                result = result * valor
            }
            
            valor = 0
            txt_edit.value = result
            txt_display.value = result + ' x'
            break        
        case '/':
            break
        case '+':
            break
        case '-':            
    }
    
}

function igual(){

}

function limpaTudo(){
    valor = 0
    valor2 = 0
    result = 0
    operInic = true
    txt_display.value = ''
    txt_edit.value = 0
}

function pos_neg(){//alterna entre positivo e negativo

}