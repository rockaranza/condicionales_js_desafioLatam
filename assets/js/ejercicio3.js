//Capturar elementos del DOM
const btn = document.querySelector('button');
const message = document.querySelector('span');
const close = document.querySelector('.close');
const error = document.querySelector('.containerError');

//Password de comprobacion
const passwordUser1 = '911';
const passwordUser2 = '714';

//Funcion ERROR PASSWORD
function showError() {
  error.style.display = 'inline-block';
}

//Evento para cerrar error
close.addEventListener('click', function(){
  error.style.display = 'none';
})

//Evento del boton Verificar
btn.addEventListener('click', function(){
  let number1 = document.querySelector('#select1');
  let number2 = document.querySelector('#select2');
  let number3 = document.querySelector('#select3');

  let enteredPass = `${number1.value}`+`${number2.value}`+`${number3.value}`;
  
  if(enteredPass === passwordUser1) {
    message.innerHTML = 'Password 1 correcto';
  }else if(enteredPass === passwordUser2){
    message.innerHTML = 'Password 2 correcto';
  }else{
    showError();
  }
});