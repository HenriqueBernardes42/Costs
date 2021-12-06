import style from "./Home.module.css"

import Pork from "../img/savings.svg"
import LinkButton from "../Layouts/LinkButton"

export default function Home(){
    return (
        <section className={style.home_container}>
            <h1>Bem-vindo ao <span>Costs</span></h1>
            <p>Comece a gerenciar seus projetos hoje mesmo</p>
            <LinkButton to="/NewProjects" text="crie um novo proejto" />
            <img src={Pork} alt="costs"/>
        </section>
    )
}