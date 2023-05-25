const h1 = document.querySelector('h1');
// console.log(h1);

const p = document.querySelector('p');
// console.log(p);

const p_parrafito = document.getElementsByClassName('parrafito');
// console.log(p_parrafito);

const p_id = document.getElementById('pid');
// console.log(p_id);

const img = document.createElement('img');
img.setAttribute('src', 'https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_1280.jpg');
console.log(img);

p_id.innerHTML = '';
p_id.append(img);

console.log(p_id);
