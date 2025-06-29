import './src/scss/cadastro.scss'


document.getElementById("Cadastrar")
.addEventListener("click", iniciarProcesso)

async function iniciarProcesso() {

    const titulo = document.getElementById("inputTitulo").value
    const descricao = document.getElementById("inputDescricao").value

    const settings = {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: titulo, description: descricao })
    }

    const fetchResult = await fetch("https://api-aula.up.railway.app/livros", settings)
    const data = await fetchResult.json()
    console.log(data)

}
