function contar() {
    var val = document.getElementById('txtn')
    var tab = document.getElementById('seltab')

    if (val.value.length == 0 ) {
        window.alert('[ERRO] Digite um valor valido !')
    } else {
        var n = Number(val.value)
        for(var c = 1;c <= 10;c++){
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
        
            


        }
    }  
    }
