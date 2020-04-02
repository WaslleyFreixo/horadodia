function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours() 
min = data.getMinutes()

if (hora >= 0 && hora < 12) {
    msg.innerHTML = `Bom dia! Agora são ${hora} horas e ${min} minutos.`
    img.src = 'manha.png'
    document.body.style.background = '#e2cd9f'
}else if (hora >= 12 && hora < 18) {
    msg.innerHTML = `Boa Tarde! Agora são ${hora} horas e ${min} minutos.`
    img.src = 'tarde.png'
    document.body.style.background = '#b9846f'
}else {
    msg.innerHTML = `Boa Noite! Agora são ${hora} horas e ${min} minutos.`
    img.src = 'noite.png'
    document.body.style.background = '#515154'
}
}