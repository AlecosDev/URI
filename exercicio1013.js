'use strict';
const lines = prompt('Digite os valores de entrada').split(' ');

const A = parseInt(lines[0]);
const B = parseInt(lines[1]);
const C = parseInt(lines[2]);

const maiorAB = (A + B + Math.abs(A - B)) / 2;
const maiorABC = (C + maiorAB + Math.abs(C - maiorAB)) / 2;

console.log(maiorABC + " é o maior");
