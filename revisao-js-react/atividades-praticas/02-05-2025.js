
// 01 - Filtrar números pares
const numeros01 = [10, 15, 20, 25, 30, 35, 40];
const pares = numeros01.filter((numero) => numero % 2 === 0);
// console.log(pares);



// 02 - Converter nomes para maiúsculas e minúsculas
const nomesMinusculos = ["ana", "joão", "maria", "carlos"];
const nomesEmMaiusculas = nomesMinusculos.map((nome) => nome.toUpperCase());
// console.log(nomesEmMaiusculas);

const nomesMaiusculos = ["BRENO", "SABRINA", "LAURA", "GUSTAVO", "CLARA"];
const nomesEmMinusculas = nomesMaiusculos.map((nome) => nome.toLowerCase());
// console.log(nomesEmMinusculas);



// 03 - Soma total dos números
const numeros03 = [5, 10, 15, 20];
const soma = numeros03.reduce((a, b) => a + b, 0);
// console.log('A soma dos números é igual a', soma);



// 04 - Verificar se "Carlos" está presente
const nomes04 = ["Ana", "Bruno", "Carlos", "Daniela"];
const contemCarlos = nomes04.includes("Carlos");
const resultadoCarlos = contemCarlos ? "O array contém o nome Carlos" : "O array não contém o nome Carlos";
console.log(resultadoCarlos);



// 05 - Filtrar produtos abaixo de R$50
const produtos05 = [
  { nome: "Teclado", preco: 80 },
  { nome: "Mouse", preco: 40 },
  { nome: "Monitor", preco: 500 },
  { nome: "Cabo USB", preco: 25 }
];
const produtosBaratos = produtos05.filter((produto) => produto.preco < 50);
// console.log(produtosBaratos);



// 06 - Dobro dos valores do array
const numeros06 = [2, 4, 6, 8];
const numerosDobrados = numeros06.map((num) => num * 2);
// console.log(numerosDobrados);



// 07 - Contar total de letras
const palavras07 = ["casa", "janela", "porta", "telhado"];
const totalDeLetras = palavras07.reduce((total, palavra) => total + palavra.length, 0);
// console.log(totalDeLetras);



// 08 - Filtrar alunos com nota maior ou igual a 7
const alunos08 = [
  { nome: "Ana", nota: 8 },
  { nome: "João", nota: 5 },
  { nome: "Marcos", nota: 7 },
  { nome: "Carla", nota: 6 }
];
const aprovados = alunos08.filter((aluno) => aluno.nota >= 7);
// console.log(aprovados);



// 09 - Produto de todos os números do array
const numeros09 = [2, 3, 4, 5];
const produtoTotal = numeros09.reduce((acc, val) => acc * val, 1);
// console.log(produtoTotal);