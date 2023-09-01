const form = window.document.getElementById('form-deposito')
let validaFormulario = false
let nomeBeneficiario = window.document.getElementById('nome-beneficiario')

function validaNome(nomeCompleto) {
  NomeComoArray = nomeCompleto.split(' ');
  return NomeComoArray.length >= 2;
}

form.addEventListener('submit', function(e) {
  e.preventDefault();

  let numeroConta = window.document.getElementById('numero-conta')
  let valorDeposito = window.document.getElementById('numero-valor')
  let mensagemSucesso = `Valor <strong>${valorDeposito.value}</strong> depositado para o beneficiário <strong>${nomeBeneficiario.value}</strong> - conta: <strong>${numeroConta.value}</strong>`
  validaFormulario = validaNome(nomeBeneficiario.value)
  if (validaFormulario) {
    window.document.querySelector('.resultado').innerHTML = mensagemSucesso
    window.document.querySelector('.resultado').style.display = 'block'
    mensagemErro.style.display = 'none'
  } else {
    mensagemErro = window.document.querySelector('.mensagem-erro')
    window.document.querySelector('.resultado').style.display = 'none'
    mensagemErro.style.display = 'block'
    nomeBeneficiario.style.border = '1px solid red'
  }
})

nomeBeneficiario.addEventListener('keyup', function(e){
  validaFormulario = validaNome(e.target.value)

  if (!validaFormulario) {
    nomeBeneficiario.classList.add('error')
    window.document.querySelector('.mensagem-erro').style.display = 'block'
    //nomeBeneficiario.style.border = '1px solid red'
  } else {
    mensagemErro = window.document.querySelector('.mensagem-erro')
    mensagemErro.style.display = 'none'
    window.document.querySelector('.resultado').style.display = 'block'
    nomeBeneficiario.classList.remove('error')
  }
})