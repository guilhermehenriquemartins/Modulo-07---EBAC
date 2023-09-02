const form = window.document.getElementById('form-deposito')
let validaForm = false;
nomeBeneficiario = window.document.getElementById('nome-beneficiario')

function validaNome(nomeCompleto) {
  NomeComoArray = nomeCompleto.split(' ');
  return NomeComoArray.length >= 2;
}

form.addEventListener('submit', function(e){
  e.preventDefault();
  
  numeroConta = window.document.getElementById('numero-conta')
  numeroValor = window.document.getElementById('numero-valor')
  mensagemSucesso = `Valor de <strong>${numeroValor.value}</strong> depositado para o cliente <strong>${nomeBeneficiario.value}</strong> - conta: <strong>${numeroConta.value}</strong>`
  validaForm = validaNome(nomeBeneficiario.value)
  if (validaForm) {
    window.document.querySelector('.resultado').innerHTML = mensagemSucesso
    window.document.querySelector('.resultado').style.display = 'block'
  } else {
    window.document.querySelector('.erro-beneficiario').style.display = 'block'
    nomeBeneficiario.style.border = '1px solid red'
  }
})

nomeBeneficiario.addEventListener('keyup', function(e){
  validaForm = validaNome(e.target.value)
  if (!validaForm) {
    nomeBeneficiario.classList.add('error')
    window.document.querySelector('.erro-beneficiario').style.display = 'block'
    //nomeBeneficiario.style.border = '1px solid red'
  } else {
    nomeBeneficiario.classList.remove('error')
    window.document.querySelector('.erro-beneficiario').style.display = 'none'
    //nomeBeneficiario.style = ''
  }
})

