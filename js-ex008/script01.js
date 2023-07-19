function contar() {
    let ini = document.getElementById('txti')
    let fm = document.getElementById('txtf')
    let pss = document.getElementById('txtp')
    let res = document.getElementById('res')
    
    if(ini.value.length == 0 || fm.value.length == 0  ){
        window.alert('[ERRO] Digite um valor')
    } else{
        res.innerHTML = 'Contando:'
        let i = Number(ini.value)
        let f = Number(fm.value)
        let p = Number(pss.value)
        if (p <= 0){
            window.alert('Digita o passo Animaal, vou contar de um em um pra tu S2')
            p=1
        }

        if (i < f){
        for(let c = i; c<f;c += p){
            res.innerHTML += `${c} \u{1F449}`}
    } else{
        for(let c = i; c > f; c -= p){
            res.innerHTML += `${c} \u{1F449}`}
    }
        res.innerHTML += `${f} \u{1F3C1}`   
}}