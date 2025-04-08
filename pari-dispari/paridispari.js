// Pari e Dispari
// - L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// - Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// - Sommiamo i due numeri
// - Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// - Dichiariamo chi ha vinto.

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function isNumberEven(num) {
  return num % 2 === 0;
}

const userChoice = prompt("Pari o dispari?");
const userNumber = parseInt(prompt("Numero da 1 a 5"));
const numberCPU = generateRandomNumber(1, 5);
const isResultEven = isNumberEven(userNumber + numberCPU);

console.log("UserChoice:", userChoice);
console.log("UserNumber:", userNumber);
console.log("NumberCPU:", numberCPU);
console.log("isResultEvene:", isResultEven);

if (
  (isResultEven && userChoice === "pari") ||
  (!isResultEven && userChoice === "dispari")
) {
  alert("User ha vinto");
} else {
  alert("CPU ha vinto");
}

//debug
// console.log(generateRandomNumber(10, 100));
