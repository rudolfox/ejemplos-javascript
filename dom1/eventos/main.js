function saludar(){

    alert('Hola eventos')
}

function saludar2(){

    document.write('Hola documento')
}

var btnSaluda=document.getElementById('btn-saluda')
btnSaluda.onclick=saludar

var btnSaluda2=document.getElementById('btn-saluda-v2')
btnSaluda2.addEventListener('click',saludar)
