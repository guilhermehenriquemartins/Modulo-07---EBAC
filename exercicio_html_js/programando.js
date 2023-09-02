const form = window.document.getElementById('form-numero')
validaForm = false

function validaNumero(NumeroA, NumeroB) {
  NumeroA = window.document.getElementById('campo-a')
  NumeroB = window.document.getElementById('campo-b')
  if (NumeroB.value > NumeroA.value) {
    return true
  }
}

form.addEventListener('submit', function(e){
  e.preventDefault();

  let numeroA = window.document.getElementById('campo-a')
  let numeroB = window.document.getElementById('campo-b')
  validaForm = validaNumero(numeroA, numeroB)

  if(validaForm) {
    window.document.querySelector('.falso').style.display = 'none'
    window.document.querySelector('.verdadeiro').style.display = 'block'
  } else {
    window.document.querySelector('.verdadeiro').style.display = 'none'
    window.document.querySelector('.falso').style.display = 'block'
  }
})