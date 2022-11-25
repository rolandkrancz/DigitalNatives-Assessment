import { converter } from "./converter.js";

const submitButton = document.getElementById('submit');
const input = document.getElementById('input');
const output = document.getElementById('output');
const isBritish = document.getElementById('isBritish');


submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    const englishStyle = isBritish.checked ? 'british' : 'american';
    output.innerText = converter(input.value, englishStyle);
})

isBritish.addEventListener('click', (e) => {
    output.innerText = "";
})