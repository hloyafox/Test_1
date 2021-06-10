'use strict';
let btn = document.querySelector('.btn');

btn.addEventListener('click', () => {

    let head = document.querySelector('.header');
    if (head.classList.contains('show')) {
        head.classList.add('hide');
        head.classList.remove('show');
        head.style.display = 'none';
        btn.innerHTML = 'Показать заголовок';
        
    } else  {
        head.classList.add('show');
        head.classList.remove('hide');
        head.style.display = '';
        btn.innerHTML = 'Скрыть заголовок';
    } 

}
);