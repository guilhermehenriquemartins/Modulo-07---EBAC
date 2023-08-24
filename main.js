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
  validaForm = validaNome(nomeBeneficiario.value)
  if (validaForm) {
    mensagemContainer= document.querySelector('.mensagem-sucesso')
    mensagemContainer.innerHTML = mensagemSucesso
    mensagemContainer.style.display = 'block'

    nomeBeneficiario.value = ''
    NumeroConta.value = ''
    NumeroValor.value = ''
  } else {
    alert('[ERRO]: O campo nome está incompleto, tente novamente.')
  }
})