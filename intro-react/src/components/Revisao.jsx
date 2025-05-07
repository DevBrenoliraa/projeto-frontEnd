import Navbar from "./Navbar";

const Revisao = () => {

    const nome = "Breno";
    const preco = 500;
    const desconto = 150;

    const CRB = 3;
    const CSA = 6;

    const isAtivo = true

    const estiloH1 = {
        color: "blue",
        fontSize: "20px",
        fontFamily: "Halvetica"
    }

    return (
        <>
            <Navbar />
            <h1>Meu  site</h1>
            <p>{nome}</p>
            <p>{preco - desconto}</p>
            <p>{CRB < CSA ? "CSA É O MAIOR" : "CRB É O MAIOR"}</p>
            {isAtivo == true ? 
                <p style={{color:"green"}}>Ativo</p>
                :
                <p style={{color:"red"}}>Inativo</p>
            }
            <p>{30*2}</p>
            <p>{"Breno Lira".toLocaleUpperCase()}</p>
            <p>{Date.now()}</p>
            <p>{new Date().getFullYear()}</p>
            <h1 style={estiloH1}>Eu sou um título</h1>
        </>

    )
}

export default Revisao;