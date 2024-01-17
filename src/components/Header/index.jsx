import styles from "./Header.module.css"
import { Link } from "react-router-dom"
import logo from "./title-pirataflix.png"


const Header = () => {
    return(
        <header className={styles.header}>
            <Link to="/">
                <span>
                    <img src={logo} alt="" />
                </span>
            </Link>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/watch">Assistir</Link>
                <Link to="/search">Pesquisar</Link>
            </nav>
        </header>
    )
}

export default Header;
