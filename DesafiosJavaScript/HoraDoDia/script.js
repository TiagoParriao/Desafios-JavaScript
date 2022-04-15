function hora() {
    var res = document.getElementById("res")
    var img = document.getElementById("imagem")
    var letra = document.getElementById("hora_do_dia")
    var hr = new Date()
    var horas = hr.getHours()
    res.innerHTML = `<strong>Agora são ${horas} horas</strong>`
    if (horas >= 0 && horas < 12) {
        document.body.style.background = "white"
        img.src = "manha.png"
        letra.style.color = "black"
    }else if (horas >= 12 && horas < 18) {
        document.body.style.background = "orange"
        img.src = "tarde.png"
    }else{
        document.body.style.background = "black"
        img.src = "noite.png"
    }
}
