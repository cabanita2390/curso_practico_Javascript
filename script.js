const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.getElementsByClassName('.parrafito');
const pid = document.getElementById('pid');
const input = document.querySelector('input');

console.log({
    h1,
    p,
    parrafito,
    pid,
    input
});


h1.innerHTML='Patito <br>Feo';

// console.log(h1.getAttribute('class'));
// h1.setAttribute('class', 'rojo');

h1.classList.add('rojo');

h1.classList.remove('verde');

input.value='456';


const img = document.createElement('img');

img.setAttribute('src', 'https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_1280.jpg');

console.log(img);

pid.innerHTML = '';
pid.append(img);

console.log(pid);
