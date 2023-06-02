let btnOdenarPorPreco = document.getElementById('btnOrdenarPorPreco');
btnOdenarPorPreco.addEventListener('click', ordenarLivrosPorPreco);

function ordenarLivrosPorPreco(params) {
    let livrosOrdenados = livros.sort((a,b) => b.preco - a.preco);
    exibirOsLivrosNaTela(livrosOrdenados);
}