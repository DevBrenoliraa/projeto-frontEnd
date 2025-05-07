// Mostre os dados da aplicação como demonstrado na sals de aula
// Não utilize css externo, use o style para mudar as cores
// se a situação estiver ativa pinte de verde, e inativa de vermelho
// se o gestor for maior que 10000 mostre uma mensagem 

const luana = {
    cliente: "Luana",
    idade: 27,
    compras: [
        {nome: "Smartphone", preco: "R$ 1500"},
        {nome: "Geladeira", preco: "R$ 3500"},
        {nome: "Notebook", preco: "R$ 2500"}
    ]
    
}

const mario = {
    cliente: "Mario",
    idade: 30,
    compras: [
        {nome: "Smartphone", preco: "R$ 1500"},
        {nome: "Geladeira", preco: "R$ 3000"},
        {nome: "Notebook", preco: "R$ 2500"},
        {nome: "Guitarra", preco: "R$ 3500"},
    ]
    
}


const Atividade = () => {
    return (
        <p>olá, meu nome é BL</p>
    )
}

export default Atividade;
