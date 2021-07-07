'use strict';
const lines = prompt('Digite os valores de entrada').split(' ');

const raio = Number(lines[0]);

const area = 3.14159 * Math.pow(raio, 2);

console.log('A=' + area.toFixed(4));

