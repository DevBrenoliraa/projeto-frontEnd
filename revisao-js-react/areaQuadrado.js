import soma from "./soma.js"

export const areaQuadrado = (lado) => {
    return lado*lado
}

export const areaTriangulo = (base, altura) => {
    return (base*altura) / 2
}

console.log(soma(10))