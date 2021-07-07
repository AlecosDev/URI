'use strict';
const lines = prompt('Digite os valores de entrada').split(' ');

const A = Number(lines[0]);
const B = Number(lines[1]);
const C = Number(lines[2]);

const TOTAL = B + (C * 0.15);

console.log("TOTAL = R$ " + TOTAL.toFixed(2));