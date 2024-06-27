const prompt = require("prompt-sync")();

let base = Number(prompt("Qual número será elevado: "));
let expoente = Number(prompt("Digite a potência: "));
let resultado = base;
let base2 = base;

if (expoente == 0) {
  resultado = 1;
} else {
  for (let i = 1; i < expoente; i++) {
    for (let j = 1; j < base; j++) {
      resultado = base2 + resultado;
      }
    base2 = resultado;
  }
}
console.log(`${base} elevado a ${expoente} é igual a ${resultado}`);
