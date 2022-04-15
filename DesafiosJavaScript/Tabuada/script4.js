function calcular(){
    var numero = document.getElementById("numero")
    var N = Number(numero.value)
    var res = document.getElementById("result")
    var c = -1
    var soma = 0
    res.innerHTML = ''
    do{
        var VP = N
        c++
        soma = VP * c
        var item = document.createElement("option")
        item.text = `${N} X ${c} = ${soma}`
        res.appendChild(item)
    }while (c < 10)
}