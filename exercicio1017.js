'use strict';
const lines = prompt('Digite os valores de entrada').split(' ');
const tempo = lines[0];
const mediaKM = lines[1];
const totalKM = tempo * mediaKM;
const litros = totalKM / 12;
console.log(litros.toFixed(3));