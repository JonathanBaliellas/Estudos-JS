let movie = 'Lord of the Rings' //escopo global

function starWarsFan(){
    const movie = 'Star Wars' //escopo da função
    return movie
}

function marvelFan(){
    movie = 'The Avengers' //variável do escopo global
    return movie
}

function blizzardFan(){
    const isFan = true
    let phrase = 'Warcraft' //escopo da função
    console.log('Before if: ' + phrase)

    if(isFan){
        let phrase = 'initial text' //escopo da instrução
        phrase = 'For the Horde!'
        console.log('Inside if: ' + phrase)
    }

    phrase = 'For the Alliance!' //variável do escopo da função
    console.log('After if: ' + phrase)
}

function escopo(){
    console.log(movie)
    console.log(starWarsFan())
    console.log(marvelFan())
    console.log(movie)
    blizzardFan()
}