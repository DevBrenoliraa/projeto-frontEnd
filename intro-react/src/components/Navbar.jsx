const Navbar = () => {
    return (
    <nav style={{display: "flex", gap:"12px",}}>
            <a style={{ textDecoration: "none", color: "black" }} href="#">Sobre</a>
            <a style={{ textDecoration: "none", color: "black" }} href="#">Produto</a>
            <a style={{ textDecoration: "none", color: "black" }} href="#">Contato</a>
            <a style={{ textDecoration: "none", color: "black" }} href="#">Compre</a>
            <form style={{ display: "flex", flexDirection: "column" }}>
                <label htmlFor="">E-mail</label>
                <input type="text" style={{width:"200px", height:"20px", padding: "8px", color: "red"}} />
            </form>
        </nav>
    )
}

export default Navbar;