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

//////////////////

const btnCalcular1 = document.querySelector("#btnCalcular1");

btnCalcular1.addEventListener("dblclick", botonClic1);

function botonClic1() {
  console.log('Doble clic en el botón de calcular');
}

//////////////////

const btnCalcular2 = document.querySelector("#btnCalcular2");

btnCalcular2.addEventListener("mouseover", botonClic2);

function botonClic2() {
  console.log('Pasó mouse sobre btn calcular 2');
}

//////////////////

const btnCalcular3 = document.querySelector("#btnCalcular3");

btnCalcular3.addEventListener("mouseout", botonClic3);

function botonClic3() {
  console.log('Salió mouse del btn calcular 3');
}
