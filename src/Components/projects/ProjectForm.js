import Input from "../form/Input"
import Select from "../form/Select"
import SubmitButton from "../form/SubmitButton"
import style from "./Project.module.css"

export default function ProjectForm({btntext}){

    return(
        <form className={style.form}>
            <Input 
            type="text" 
            text="Nome do projeto"
            name="name" 
            placeholder="digite um nome" 
            handleOnChange={() => (console.log("hello world"))} />
            <Input 
            type="number"
            text="Orçamento do projeto"
            name="budjet"
            placeholder="insira o orçamento total" />
            <Select name="category_id" text="selecione uma categoria" />
            <SubmitButton text={btntext}/>
        </form>
    )
}