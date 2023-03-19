let pesos = [0.2, 1.5, 2.7, 1.5, 2.8, 1.5, 1.1]
console.log(pesos.length);
console.log(contarViagens(pesos))

function contarViagens(pesos){
    let viagens = 0;

    for(let i = 0; i < pesos.length; i++){
        let peso = pesos[i];
        for(let j = i+1; j < pesos.length; j++){
            if(peso + pesos[j] <= 3){
                peso += pesos[j];
                pesos.splice(j,1);
            }
        }
        viagens++;
        pesos.splice(i,1);
    }
    while(pesos.length > 0){
        viagens++;
        pesos.pop();
    }
    console.log(pesos.length);
    return viagens;
}