'use strict';
const lines = prompt('Digite os valores de entrada').split(' ');

const A = lines[0];
const pi = 3.14159;

const VOLUME = (4 / 3) * pi * A ** 3;

console.log("VOLUME = " + VOLUME.toFixed(3));
