// 4) Descubra a lógica e complete o próximo elemento:
//a) 1, 3, 5, 7, ___
//b) 2, 4, 8, 16, 32, 64, ____
//c) 0, 1, 4, 9, 16, 25, 36, ____
//d) 4, 16, 36, 64, ____
//e) 1, 1, 2, 3, 5, 8, ____
//f) 2,10, 12, 16, 17, 18, 19, ____


// a) 1, 3, 5, 7, ___
// Números ímpares consecutivos
function nextInSequenceA() {
  let sequence = [1, 3, 5, 7];
  let next = sequence[sequence.length - 1] + 2;
  return next;
}

// b) 2, 4, 8, 16, 32, 64, ____
// Multiplicando por 2
function nextInSequenceB() {
  let sequence = [2, 4, 8, 16, 32, 64];
  let next = sequence[sequence.length - 1] * 2;
  return next;
}

// c) 0, 1, 4, 9, 16, 25, 36, ____
// Quadrados perfeitos
function nextInSequenceC() {
  let sequence = [0, 1, 4, 9, 16, 25, 36];
  let next = Math.pow(sequence.length, 2); // n²
  return next;
}

// d) 4, 16, 36, 64, ____
// Quadrados de números pares
function nextInSequenceD() {
  let sequence = [4, 16, 36, 64];
  let next = Math.pow((sequence.length + 1) * 2, 2); // (n * 2)²
  return next;
}

// e) 1, 1, 2, 3, 5, 8, ____
// Sequência de Fibonacci
function nextInSequenceE() {
  let sequence = [1, 1, 2, 3, 5, 8];
  let next = sequence[sequence.length - 1] + sequence[sequence.length - 2]; // Soma dos dois anteriores
  return next;
}

// f) 2,10, 12, 16, 17, 18, 19, ____
// Sequência mista (adicionando números específicos)
function nextInSequenceF() {
  let sequence = [2, 10, 12, 16, 17, 18, 19];
  let next = sequence[sequence.length - 1] + 1;
  return next;
}

// Testando as funções
console.log("Próximo em a):", nextInSequenceA()); // 9
console.log("Próximo em b):", nextInSequenceB()); // 128
console.log("Próximo em c):", nextInSequenceC()); // 49
console.log("Próximo em d):", nextInSequenceD()); // 100
console.log("Próximo em e):", nextInSequenceE()); // 13
console.log("Próximo em f):", nextInSequenceF()); // 20
