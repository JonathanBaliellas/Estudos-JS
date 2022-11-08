function sum(x = 1, y = 2, z = 3){
    return x + y + z
}

function valorDefaultFunction(){
    console.log(sum(4,2))//como não passa z como parâmetro, a função assume o valor padrão 3 especificado na função
}