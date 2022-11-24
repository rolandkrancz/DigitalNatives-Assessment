import { converter } from "./converter.js";

const submitButton = document.getElementById('submit');
const input = document.getElementById('input');
const output = document.getElementById('output');

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    output.innerText = converter(input.value);
})