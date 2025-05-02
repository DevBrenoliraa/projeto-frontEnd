
// ==============
// ARRAY METHODS
// ==============


const precos = [
    "Crédito", 
    "R$ 200", 
    "R$ 300", 
    "Contas a pagar", 
    "R$ 400",
    "R$ 500"
]


/* 
  FILTER
  
  Retorna uma nova array contendo apenas os elementos
  que satisfazem a condição especificada

*/
const precosFiltrados = precos.filter((preco) => preco.includes("R$"));
console.log("Filter:", precosFiltrados);


/* 
  MAP
  
  Transforma cada elemento da array original retornando
  uma nova array com os elementos modificados

*/
const precosNum = precosFiltrados.map((preco) => Number(preco.replace("R$ ", "")));

console.log("Map | Replace:", precosNum);


/* 
  REDUCE
  
  Executa uma função reducer para cada elemento do array,
  resultando em um único valor de retorno (acumulado)

*/
const total = precosNum.reduce((a, b) => a + b);

console.log("Reduce:", total);



