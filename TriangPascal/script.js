let tabela = document.getElementById('tabela')
let matriz = []
let tamanhoMatriz

function triangPascal(){
    tamanhoMatriz = Number(document.getElementById('txtDimensaoMatriz').value)
    tabela.innerHTML=''
    let linha = []
    let elemento = []

    for(i=0;i<tamanhoMatriz;i++){
        matriz.push([])
        linha.push(document.createElement('tr'))
        tabela.appendChild(linha[i])

        for(j=0;j<tamanhoMatriz;j++){
            matriz[i].push([])
            if(i==j || j==0)matriz[i][j]=1
            else if(i<j)matriz[i][j]=''
            else matriz[i][j]=matriz[i-1][j] + matriz[i-1][j-1]
            elemento.push(document.createElement('td'))
            tabela.appendChild(elemento[j])
            elemento[j].innerHTML=`${matriz[i][j]}`
        }
        elemento = []
    }
}