import style from "./Select.module.css"

export default function Select({text,name,option,handleOnChange, value}){
    return(
        <div className={style.form_control}>
            <label htmlFor={name}>{text}</label>
            <select name="name" id="name">
            <option>Selecione uma opção</option>
            </select>
        </div>
    )
}