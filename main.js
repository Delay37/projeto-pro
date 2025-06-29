import './src/scss/index.scss'

window.addEventListener("load", iniciarProcesso)
document.getElementById("inputBusca")
    .addEventListener("keyup", Pesquisar)

console.log("=== EXECUTANDO CONTEXTO GLOBAL !!! ====")
let livros = [] // Global

async function iniciarProcesso() {
    livros = await Buscar()
    construirTabela(livros)
}

function Pesquisar(){
    const valorDeBusca = document.getElementById("inputBusca").value
    const livrosFiltrados = livros.filter((livro) => livro.title.includes(valorDeBusca))

    construirTabela(livrosFiltrados)
}

async function Buscar() {
    const response = await fetch("https://api-aula.up.railway.app/livros")
    const livros = await response.json()

    return livros
}

function construirTabela(livros) {
    const corpoTabela = document.getElementById("tabelaLivros__tbody")

    corpoTabela.innerHTML = ""
    const funcaoDeVolta = livro => {
        corpoTabela.innerHTML += `
        <tr>
            <td>${livro.id}</td>
            <td>${livro.title}</td>
            <td>${livro.description}</td>
        </tr>
    `
    }

    livros.forEach(funcaoDeVolta);
}