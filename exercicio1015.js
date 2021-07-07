'use strict';
const lines = prompt('Digite os valores de entrada').split(' ');

const x1 = lines[0]
const y1 = lines[1]
const x2 = lines[2];
const y2 = lines[3];

const distancia = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2), 2);

console.log(distancia.toFixed(4));