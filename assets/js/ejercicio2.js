//Captura de elementos del DOM
const btn = document.querySelector('#button');
const message = document.querySelector('span');

//Declaracion de variables
let totalItems = 0;

//Funcion para calcular total
function totalStickers(stickers){
  total=0;
  stickers.forEach(item => {
    total = total + parseInt(item.value);
  });
  return total;
}

//Funcionabilidad del boton
btn.addEventListener('click', function(){
  let inputs = document.querySelectorAll('input');
  let positiveNumbers = true;

  //Verificación de ingreso de datos
  inputs.forEach(function(item) {
  //Verificamos con el método test una expresión regular que regula solo ingreso de números
    if(!/^\d+$/.test(item.value)){
      positiveNumbers = false;
    }
  });
  //Comprueba el estado de la variable para determinar si sigue la ejecución
  if(!positiveNumbers){
    message.style.color = 'red';
    message.innerHTML = 'Ingresa números positivos en los campos'
    return; //Detiene ejecución
  }
  
  //Guarda el total de stickers que ingreso el usuario invocando la función totalStickers()
  totalItems = totalStickers(inputs);
  
  //Muestra el menaje según cantidad de stickers
  if(totalItems > 10) {
    message.style.color = '#ec0303';
    message.innerHTML = `Llevas muchos Sticker`;
  }else if(totalItems <= 10) {
    message.style.color = '#030ba8';
    message.innerHTML = `LLevas ${totalItems} stickers`;
  }
});