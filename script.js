var resultado = document.getElementById('resultado')
var confirmar = document.getElementById('igual')

function insert(valor){
  resultado.innerHTML += valor
}

function limpar(){
    resultado.innerHTML = ""
}
function apagar(){
    if(resultado.textContent){
       let result = document.querySelector('.resultado').innerHTML
      resultado.innerHTML = result.substring(0, result.length -1)
    }
}
function confirma(){
  if(resultado.textContent != 'Erro'){
       document.querySelector('.resultado').innerHTML = eval(resultado.innerHTML)
    }
}

