'use strict';
const lines = prompt('Digite os valores de entrada').split(' ');

const A = Number(lines[0]);
const B = Number(lines[1]);
const C = Number(lines[2]).toFixed(2);

const SALARIO = B * C;

console.log("NUMERO = " + A);
console.log("SALARIO = U$ " + SALARIO.toFixed(2));

