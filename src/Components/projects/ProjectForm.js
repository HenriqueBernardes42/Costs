export default function ProjectForm(){
    return(
        <section>
            <div><input type="text" placeholder="insira o nome do projeto"/></div>
            <div><input type="number" placeholder="insira o orçamento total"/></div>
            <div>
                <select name="category_id"/>
                <option disabled>Selecione a categoria</option>
            </div>
            <div><input type="submit"   value="criar projeto"/></div>
        </section>
    )
}