function contar(){
    let inicio = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let res = document.getElementById('res')

    res.innerHTML = "calculando:"
    
    let i = Number(inicio.value)
    let f = Number(fim.value)
    let p = Number(passo.value)

    for (let c = i; c <= f; c += p){
        res.innerHTML += `${c} `
    }
    
    
}




