const book = {
    name: 'Learning JavaScript DataStructures and Algorithms'
}

function templatesLiterais(){
    console.log('You are reading ' + book.name + ',\n and this is a new line\n and so is this.')

    console.log(`You are reading ${book.name},
    and this is a new line
    and so is this.`)
}