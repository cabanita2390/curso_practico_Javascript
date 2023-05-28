const h1 = document.getElementById("h1_verde");
const input_calculo1 = document.querySelector("#input_calculo1");
const input_calculo2 = document.querySelector("#input_calculo2");
const btnCalcular = document.querySelector("#btnCalcular");
const result = document.querySelector("#result");

///////////////////

btnCalcular.addEventListener("click", botonClic);

function botonClic() {
  console.log('Clic en el botón de calcular');
}

//////// Eventos de interacción del mouse: //////////

const btnCalcular1 = document.querySelector("#btnCalcular1");

btnCalcular1.addEventListener("dblclick", botonClic1);

function botonClic1() {
  console.log('Doble clic en el botón de calcular');
}


const btnCalcular2 = document.querySelector("#btnCalcular2");

btnCalcular2.addEventListener("mouseover", botonClic2);

function botonClic2() {
  console.log('Pasó mouse sobre btn calcular 2');
}


const btnCalcular3 = document.querySelector("#btnCalcular3");

btnCalcular3.addEventListener("mouseout", botonClic3);

function botonClic3() {
  console.log('Salió mouse del btn calcular 3');
}

//////// Eventos de teclado: //////////

input_calculo1.addEventListener("keydown", botonClic4);

function botonClic4() {
  console.log('Se disparó una tecla');
}

input_calculo2.addEventListener("keyup", botonClic5);

function botonClic5() {
  console.log('Se soltó una tecla');
}

//////// Eventos de formulario: //////////

const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Evita el envío del formulario por defecto

  // Validar los datos y realizar acciones adicionales antes de enviar el formulario

  // Si todo está válido, puedes enviar el formulario manualmente utilizando form.submit();
});

//////// Eventos de ventana: //////////

window.addEventListener("resize", mensaje4);

function mensaje4() {
  console.log('Se cambió el tamaño de la ventana');
}

// window.addEventListener('beforeunload', function(event) {
//   // Código a ejecutar antes de que el usuario abandone la página
//   // Puedes mostrar un mensaje de confirmación aquí
//   event.returnValue = '¡Adiós!'; // Necesario para que el mensaje de confirmación se muestre en algunos navegadores antiguos
// });



