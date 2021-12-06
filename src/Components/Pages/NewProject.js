import style from "./NewProject.module.css"
import ProjectForm from "../projects/ProjectForm"

export default function NewProject(){
    return (
        <div className={style.new_project_container}>
            <h1>Novo projeto</h1>
            <p>complete o formulário</p>
            <ProjectForm/>
        </div>
    )
}