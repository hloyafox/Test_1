'use strict'



let btn = document.querySelector('.agree');
let i = Math.floor(Math.random() * 101);
let body = document.querySelector('body');
console.log(i);
let click = 0;

function reload(){
    window.location.reload();
}
function chek() {
    let value = +document.querySelector('input').value;
    console.log(i);
    click++;

    if (value > i) {
        alert('Too mach!');
    } else if (value < i) {
        alert('Too low');
        value = '';
    } else if (value == i) {
        alert('you find number!');
        body.insertAdjacentHTML('beforeend', `вы сделали ${click} попыток <br>`);
        setTimeout(reload, 4000);
    } else {}
    value = '';
}

btn.addEventListener('click', chek);
