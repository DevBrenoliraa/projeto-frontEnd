// Exemplo 1: Acessando um elemento do array
const frutas = ["Banana", "Maçã", "Uva", "Pitomba", "Laranja"];
// console.log(frutas[0]);

// -----------------------------------------------------------------------

// Exemplo 2: Usando Rest e Spread

// Array original de frutas
const frutasOriginais = ["Bananola", "Maça", "Uva", "Goiaba", "Abacate"];

// Usando Spread para adicionar novas frutas ao array
const novasFrutas = ["Limão", ...frutasOriginais, "Pera", "Melancia"]; // Com Spread, todos os elementos do array original são "espalhados"

// console.log(novasFrutas); 

// -----------------------------------------------------------------------

// Exemplo 3: Usando Spread com objetos

// Objeto de carro
const carro = {
    motor: "1.6 turbo",
    marca: "Hyundai",
    cor: "Cinza",
    modelo: "Creta"
};

// Criando um novo objeto com base no objeto carro, adicionando uma nova propriedade
const carroEsportivo = {
    ...carro,  // Espalha as propriedades do objeto carro
    turbo: true  // Adiciona a propriedade turbo ao novo objeto
};

// console.log(carroEsportivo);


