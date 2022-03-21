function iniciar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var saud = document.getElementById('saudacao')

    var agora = new Date()
    var h = agora.getHours()
    var min = agora.getMinutes()

    msg.innerHTML = `Agora são ${h}:${min}`
    if (h < 12){
        img.src = 'm.png'
        document.body.style.background = '#F6D6B4'
        saud.innerHTML = "Bom dia! 😉🥱"
    } else if (h < 18){
        img.src = 't.png'
        document.body.style.background = '#FF8A05'
        saud.innerHTML="Boa tarde! 😉☀"
    } else{
        img.src = 'n.png'
        document.body.style.background = '#1F3B63'
        saud.innerHTML="Boa noite! 😴🌙"
    }
}