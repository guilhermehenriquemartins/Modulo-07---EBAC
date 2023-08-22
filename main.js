const form = window.document.getElementById('form-deposito')

function validaNome(nomeCompleto) {
  nomeComoArray = nomeCompleto.split(' ')
  return nomeComoArray.length >= 2
}

form.addEventListener('submit', function(e){
  e.preventDefault();

  let nomeBeneficiario = window.document.getElementById('nome-beneficiario')
  if (validaNome(nomeBeneficiario.value)) {
    alert('nome incompleto!');
  } else {
    alert('nome completo!');
  }
})