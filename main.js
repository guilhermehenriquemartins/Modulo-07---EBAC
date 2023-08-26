const form = window.document.getElementById('form-deposito')
let nomeBeneficiario = window.document.getElementById('nome-beneficiario')
let formEValido = false

function validaNome(nomeCompleto) {
  NomeComoArray = nomeCompleto.split(' ');
  return NomeComoArray.length >= 2;
}

form.addEventListener('submit', function(e){
  e.preventDefault();
  
  let NumeroConta = window.document.getElementById('numero-conta')
  let NumeroValor = window.document.getElementById('numero-valor')
  let mensagemSucesso = `Valor <strong>${NumeroValor.value}</strong> depositado para o beneficiário <strong>${nomeBeneficiario.value}</strong> - conta: <strong>${NumeroConta.value}</strong>`
  let resultado = window.document.querySelector('.msg-sucesso')
  formEValido = validaNome(nomeBeneficiario.value)
  if (formEValido) {
    nomeBeneficiario.style.border = '1px solid black'
    window.document.querySelector('.nome-erro').style.display = 'none'
    window.document.querySelector('.msg-sucesso').style.display = 'block'
    resultado.innerHTML = mensagemSucesso
  } else {
    nomeBeneficiario.style.border = '1px solid red'
    window.document.querySelector('.nome-erro').style.display = 'block'
    window.document.querySelector('.msg-sucesso').style.display = 'none'
  }
})

nomeBeneficiario.addEventListener('keyup', function(e) {
  formEValido = validaNome(e.target.value)
})