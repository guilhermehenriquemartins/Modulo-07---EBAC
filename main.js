const form = window.document.getElementById('form-deposito')

function validaNome(nomeCompleto) {
  var nomeComoArray = nomeCompleto.split(' ');
  return nomeComoArray.length >= 2;
}

form.addEventListener('submit', function(e) {
  e.preventDefault();
  let validaformulario = false

  let nomeBeneficiario = window.document.getElementById('nome-beneficiario')
  let NumeroConta = window.document.getElementById('numero-conta')
  let NumeroValor = window.document.getElementById('numero-valor')
  let mensagemSucesso = `Montante de ${NumeroValor.value} será transferido ao usuário ${nomeBeneficiario.value} - conta: ${NumeroConta.value}`
  validaformulario = validaNome(nomeBeneficiario.value)
  if(validaformulario) {
    alert(mensagemSucesso)

    nomeBeneficiario.value = '';
    NumeroConta.value = '';
    NumeroValor.value = '';
  } else {
    alert('[ERRO]: Nome do usuário está incompleto')
  }
})