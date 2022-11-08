//função comum
var circleAreaES5 = function circleArea(r){
    var PI = 3.14
    var area = PI * r * r
    return area
}

//função de seta
const circleArea = r =>{//omite-se a palavra reservada function
    const PI = 3.14
    const area = PI * r * r
    return area
}

//função de seta simplificado (quando há apenas uma instrução)
const circleArea2 = r => 3.14 * r * r

//função de seta sem argumentos. Usa-se () no lugar do argumento
const hello = () => console.log('hello!')

function funcoesSeta(){
    console.log(circleAreaES5(2))
    console.log(circleArea(2))
    console.log(circleArea2(2))
    hello()
}