function gerarTabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    let n = Number(num.value)

    let c = 1
    tab.innerHTML = ''

    while(c <= 10){
        let item = document.createElement('option')
        item.text = `${n} X ${c} = ${n*c}`
        item.value = `tab${c}`
        tab.appendChild(item)
        c++
    }


}