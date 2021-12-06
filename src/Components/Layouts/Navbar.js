import { Link } from "react-router-dom"

import Container from "./Container"

import styles from "./Navbar.module.css"
import Logo from "../img/costs_logo.png"

export default function Navbar(){
    return(
        <nav className={styles.Navbar}>
            <Container>
                <Link to="/">
                    <img src={Logo} alt="Cost logo"/></Link>
                <ul className={styles.List}>
                    <li className={styles.Item}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={styles.Item}>
                        <Link to="/Company">Company</Link>
                    </li>
                    <li className={styles.Item}>
                        <Link to="/Contact">Contact</Link>
                    </li>
                    <li className={styles.Item}>
                        <Link to="/Projects">Projects</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}