
/* 
  EXPRESSÃO TERNÁRIA
  
  A expressão ternária é uma forma concisa de fazer uma condição if/else
  em uma única linha. Sua estrutura é:
  
  condição ? expressão_se_verdadeiro : expressão_se_falso

*/

// Definindo os valores dos grupos
const grupoA = 100;
const grupoB = 200;


/*
  USANDO OPERADOR TERNÁRIO
  
  Aqui verificamos qual grupo tem o valor maior:
  - Se grupoA > grupoB for verdadeiro, retorna a primeira string
  - Se for falso, retorna a segunda string

*/
const vencedor = grupoA > grupoB ? "Grupo A é o vencedor" : "Grupo B é o vencedor";


// Exibindo o resultado
console.log(vencedor); // "Grupo B é o vencedor"


/*
  EQUIVALENTE EM IF/ELSE:
  
  O código acima seria equivalente a:
  
  let vencedor;
  if (grupoA > grupoB) {
    vencedor = "Grupo A é o vencedor";
  } else {
    vencedor = "Grupo B é o vencedor";
  }
*/

const numMaior = 4
const numeros = [2, 3, 4, 5, 6]
const total = numeros.filter((numero) => numero > numMaior)

console.log(`Números maiores que 4: ${total} -->`,total)