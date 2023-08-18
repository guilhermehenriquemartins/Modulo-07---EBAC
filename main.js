//COMO ELIMINAR O RELOAD DA PÁGINA AO REALIZAR SUBMIT NO FORMULÁRIO

//1º PASSO - Temos que selecionar o formulário

const form = document.getElementById('form-deposito')

//2º PASSO - Temos que alterar o evento da ação submit do formulário

form.addEventListener('submit', function(e){
  //nome do elemento.evento que vai ouvir uma ação (nome da ação), ação que vai acontecer após disparar o submit(parâmetro de submit)
  e.preventDefault();
})