const form = document.querySelector('#form');
let input = document.querySelector('#input');
const warning = document.querySelector('.warning');
let wiadomosc = document.querySelector('#wiadomosc')

form.addEventListener('submit', (e) => action(e));

function action(e) {
    let message = input.value;
    e.preventDefault();

    if (message.length === 0) {
        warning.classList.add('show');
        setTimeout(() => {
            warning.classList.remove('show');
        }, 3000)
    } else {
        input.value = '';
        wiadomosc.textContent = message;
    }
}