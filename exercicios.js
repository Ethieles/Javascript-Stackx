// -------------------------------------

/* Função que calcula a soma de 2 números
 * @param {number} a - O primeiro número.
 * @param {number} b - O segundo número.
 * @returns {number} A soma dos dois numeros
 */
function soma(a, b) {
  return a + b;
}
let valorSoma = soma(10, 20);
console.log(valorSoma);

/* Função que calcula a multiplicação de 2 números
 * @param {number} a - O primeiro número.
 * @param {number} b - O segundo número.
 * @returns {number} A multiplicação dos dois numeros
 */
function multiplicacao(a, b) {
  return a * b;
}
let valorMultiplicacao = multiplicacao(10, 20);
console.log(valorMultiplicacao);

/* Função que calcula a divisão de 2 números
 * @param {number} a - O primeiro número.
 * @param {number} b - O segundo número.
 * @returns {number} A divisão dos dois numeros
 */
function divisao(a, b) {
  return a / b;
}
let valorDivisao = divisao(20, 10);
console.log(valorDivisao);

/* Função que calcula a subtração de 2 números
 * @param {number} a - O primeiro número.
 * @param {number} b - O segundo número.
 * @returns {number} A subtração dos dois numeros
 */
function subtracao(a, b) {
  return a - b;
}
let valorSubtracao = subtracao(20, 10);
console.log(valorSubtracao);

/**
 * Função que resto da divisão de 2 números
 * @param {number} a - O primeiro número.
 * @param {number} b - O segundo número.
 * @returns {number} O resto da divisão dos dois numeros
 */
function modulo(a, b) {
  return a % b;
}
let valorModulo = modulo(20, 15);
console.log(valorModulo);

/* Função que calcula o maior número entre 2
 * @param {number} a - O primeiro número.
 * @param {number} b - O segundo número.
 * @returns {number} O maior número
 */
function max(a, b) {
  return Math.max(a, b);
}
let valorMax = max(5, 3);
console.log(valorMax);

// -------------------------------------

/* Função que concatena 2 strings utilizando template strings
 * @param {string} a - A primeira string
 * @param {string} b - A segunda string
 * @returns {string} As 2 strings concatenadas
 */
function strConcat(a, b) {
  return `${a} ${b}`;
}
console.log(strConcat("Hello", "World"));
// --------------------------------------

/* Função que implementa controle de fluxo
 *
 * @param {number} numero - O número em questão
 * @returns {string}
 *  - "Maior que 10" quando o número é maior que 10
 *  - "Igual a 10" quando o número é igual a 10
 *  - "Menor que 10" quando o número é menor que 10
 */
function retornaNumero(numero) {
  if (numero > 10) {
    return "Maior que 10";
  } else if (numero == 10) {
    return "Igual a 10";
  } else {
    return "Menor que 10";
  }
}

let numero = retornaNumero(5);
console.log(numero);

// --------------------------------------

/* Função que valida se o número em questão é positivo
 * @param {number} num - Número em questão
 * @returns {boolean} Retorna true para números positivos
 */
function ehPositivo(num) {
  if (num > 0) {
    return true;
  } else {
    return false;
  }
}
let num = ehPositivo(-5);
console.log(num);

module.exports = {
  soma,
  multiplicacao,
  divisao,
  subtracao,
  modulo,
  max,
  strConcat,
  retornaNumero,
  ehPositivo,
};