const img = document.querySelector('#image');

let borderActive = false;

img.addEventListener('click', function(){
  //Alterna entre valores false y true;
  borderActive = !borderActive;
  //Comprueba el estado de la variable para aplicar el border correspondiente
  if(borderActive){
    img.style.border = ('5px solid #0ce804');
  }else{
    img.style.border = ('5px solid red');
  }
});