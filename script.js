
const h1 = document.getElementById('h1_verde');
const input_calculo1 = document.querySelector('#input_calculo1');
const input_calculo2 = document.querySelector('#input_calculo2');
const btnCalcular = document.querySelector('#btnCalcular');
const result = document.querySelector('#result');

function botonClic(){
    const sumaInputs = input_calculo1.value + input_calculo2.value;
    result.innerHTML = sumaInputs;
}


input_calculo2.addEventListener('change', cambiarInput2)
btnCalcular.addEventListener('click', botonClic);


