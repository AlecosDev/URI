'use strict';
const lines = prompt('Digite os valores de entrada').split(' ');

let tempo = lines[0];
let horas = 0;
let minutos = 0;
let segundos = 0;

if (tempo >= 3600) {
    horas = parseInt(tempo / 3600);

    tempo = tempo - (horas * 3600);
}
if (tempo >= 60) {
    minutos = parseInt(tempo / 60);

    tempo = tempo - (minutos * 60);
}

segundos = tempo;

console.log(`${horas} : ${minutos} : ${segundos}`);


