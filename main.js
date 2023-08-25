const form = window.document.getElementById('form-deposito')

function validaNome(nomeCompleto) {
  NomeComoArray = nomeCompleto.split(' ');
  return NomeComoArray.length >= 2;
}

form.addEventListener('submit', function(e){
  e.preventDefault();
  let validaForm = false

  let nomeBeneficiario = window.document.getElementById('nome-beneficiario')
  let NumeroConta = window.document.getElementById('numero-conta')
  let NumeroValor = window.document.getElementById('numero-valor')
  let mensagemSucesso = `Montante de <strong>${NumeroValor.value}</strong> enviado para o beneficiário: <strong>${nomeBeneficiario.value}</strong> - conta: <strong>${NumeroConta.value}</strong>`
  let msg = window.document.querySelector('.msg-sucesso')
  validaForm = validaNome(nomeBeneficiario.value)
  let msg_erro = window.document.querySelector('.error-message')
  if (validaForm) {
    msg.innerHTML = mensagemSucesso
    msg.style.display = 'block'
    msg_erro.style.display = 'none'
    

    nomeBeneficiario.value = ''
    NumeroConta.value = ''
    NumeroValor.value = ''
  } else {
    nomeBeneficiario.style.border = '1px solid red'
    msg_erro.style.display = 'block'
    msg.style.display = 'none'
  }
})