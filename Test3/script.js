'use strict';

let btn = document.querySelector('.numbers');
let body = document.querySelector('.body');

function showNumbers() {
    for (let i = 0; i <= 100; i++) {
        if (i % 3 == 0) {
            console.log('A/B');
            body.insertAdjacentHTML('beforeend', 'A/B <br>');

        } else if (i % 5 == 0) {
            console.log('Testing');
            body.insertAdjacentHTML('beforeend', 'Testing <br>');
        } else if (i % 3 == 0 && i % 5 == 0) {
            console.log('A/B Testing');
            body.insertAdjacentHTML('beforeend', 'A/B Testing <br>');
        } else {
            console.log(`${i}`);
            body.insertAdjacentHTML('beforeend', `${i} <br>`);
        }

    }

}

btn.addEventListener('click', showNumbers);

