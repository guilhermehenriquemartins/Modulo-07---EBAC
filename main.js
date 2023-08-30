const form = window.document.getElementById('form-deposito')
let nomeBeneficiario = window.document.getElementById('nome-beneficiario')
let validaFormulario = false;


function validaNome(nomeCompleto) {
  const NomeComoArray = nomeCompleto.split(' ')
  return NomeComoArray.length >= 2;
}


form.addEventListener('submit', function(e) {
  e.preventDefault();

  let numeroConta = window.document.getElementById('numero-conta')
  let numeroValor = window.document.getElementById('numero-valor')
  let mensagemSucesso = `Valor <strong>${numeroValor.value}</strong> depositado para o cliente <strong>${nomeBeneficiario.value}</strong> - conta: <strong>${numeroConta.value}</strong>`

  validaFormulario = validaNome(nomeBeneficiario.value)

  if (validaFormulario) {
    document.querySelector('.resultado').innerHTML = mensagemSucesso
    document.querySelector('.resultado').style.display = 'block'
  } else {
    nomeBeneficiario.style.border = '1px solid red'
    document.querySelector('.mensagem-erro').style.display = 'block'
  }
})

nomeBeneficiario.addEventListener('keyup', function(e) {
  validaFormulario = validaNome(e.target.value)

  if (!validaFormulario) {
    document.querySelector('.mensagem-erro').style.display = 'block'
    nomeBeneficiario.style.border = '1px solid red'
  } else {
    nomeBeneficiario.style.border = 'none'
    document.querySelector('.mensagem-erro').style.display = 'none'
  }
})