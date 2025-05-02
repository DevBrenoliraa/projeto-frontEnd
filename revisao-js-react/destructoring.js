
// JS normal - Função tradicional
function nomeDaFuncao() {
    return console.log('Tropa do BB!');
}
// nomeDaFuncao();


// | --------------------------------------------------------------- |


// React - Arrow functions

// Função de soma
const soma = (a, b) => {
    return console.log(a + b);
}
// soma(5, 10);

// Função para transformar nome em maiúsculas
const nomeMaiusculo = (nome) => {
    return console.log(nome.toUpperCase()); // Converte as letras para maiúsculas
}
// nomeMaiusculo("breno");

// Função para transformar nome em minúsculas
const nomeMinusculo = (nome) => {
    return console.log(nome.toLowerCase()); // Converte as letras para minúsculas
}
// nomeMinusculo("BRENO");


// | --------------------------------------------------------------- |


// Acessar propriedades de um objeto - Desestruturação

// Função que usa o evento do mouse para exibir as coordenadas (sem desestruturação)
const handleMouseMove = (event) => {
    const clientX = event.clientX;
    const clientY = event.clientY;
    return console.log(`Eixo X: ${clientX}  -  Eixo Y: ${clientY}`);
}

// Função usando desestruturação para acessar propriedades de um objeto
const handleMouseMoveDes = (event) => {
    // Desestruturando as propriedades clientX e clientY do objeto 'event'
    const { clientX, clientY } = event;
    return console.log(clientX, clientY); // Exibe as coordenadas X e Y
}

// Função de desestruturação diretamente nos parâmetros da função
const handleMouseMoveDesPar = ({ clientX, clientY }) => console.log(clientX, clientY);

// Evento de mousemove para capturar as coordenadas do mouse
document.documentElement.addEventListener("mousemove", handleMouseMoveDesPar);

