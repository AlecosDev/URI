'use strict';
const lines = prompt('Digite os valores de entrada').split(' ');

const A = parseFloat(lines[0]);
const B = parseFloat(lines[1]);
const C = parseFloat(lines[2]);

const pi = 3.14159;

const TRIANGULO = A * C / 2.0;

const CIRCULO = pi * Math.pow(C, 2.0);

const TRAPEZIO = ((A + B) * C) / 2.0;

const QUADRADO = B * B;

const RETANGULO = A * B;

console.log("TRIANGULO: " + parseFloat(TRIANGULO.toFixed(3)));
console.log("CIRCULO: " + parseFloat(CIRCULO.toFixed(3)));
console.log("TRAPEZIO: " + parseFloat(TRAPEZIO.toFixed(3)));
console.log("QUADRADO: " + parseFloat(QUADRADO.toFixed(3)));
console.log("RETANGULO: " + parseFloat(RETANGULO.toFixed(3)));


// TRIANGULO: 7.800
// CIRCULO: 84.949
// TRAPEZIO: 18.200
// QUADRADO: 16.000
// RETANGULO: 12.000



