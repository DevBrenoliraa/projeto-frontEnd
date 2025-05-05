// Fatch - Envia requisições assíncronas para o servidor. 
// Serve oara acessarmos/escrevermos dados en apis externas.

// fetch("https://ranekapi.origamid.dev/json/api/produto")
//     .then((response) => console.log(response.json()))
//     .then((json) => {console.log(json)})


const fetchProdutos = async (url) => {
    const response = await fetch(url)
    const jsonRes = response.json()
    return jsonRes
}

console.log(fetchProdutos("https://ranekapi.origamid.dev/json/api/produto"));