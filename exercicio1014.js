'use strict';
const lines = prompt('Digite os valores de entrada').split(' ');

const A = parseInt(lines[0]);
const B = parseFloat(lines[1]);

const consumo = A / B;

console.log(consumo.toFixed(3) + " km/l");
