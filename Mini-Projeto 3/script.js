const tabela = document.getElementById('tabela');
const saidaJson = document.getElementById('saidaJson');

const btMostrar = document.getElementById('btMostrar');
const btExportar = document.getElementById('btExportar');
const btAdicionar = document.getElementById('btAdicionar');
const btRegistrar = document.getElementById('btRegistrar');

const botoes = document.getElementById('botoes');
const cardAdicionar = document.getElementById('cardAdicionar');

const produtos = [
    { nome: 'Dicionário', preco: 30.00, categoria: 'Livros' },
    { nome: 'Cordão', preco: 20.400, categoria: 'Acessórios' },
    { nome: 'Camiseta', preco: 40.00, categoria: 'Roupas' },
    { nome: 'Celular', preco: 1200.00, categoria: 'Eletrônicos' },
    { nome: 'Videogame', preco: 200.00, categoria: 'Eletrônicos' }
];

function criarCard(produtos) {
    return `
        <div class="Card">
            <br>
            <h1><strong>${produtos.nome}</strong></h1>
            <h2>R$ ${produtos.preco.toFixed(2)}</h2>
            <span>${produtos.categoria}</span>
            <br><br>
        </div>
    `;
}

btMostrar.addEventListener("click", renderizarTabela);

function renderizarTabela() {
    tabela.style.display = 'block';
    tabela.innerHTML = "";

    saidaJson.style.display = 'none';

    for (let i = 0; i < produtos.length; i++) {
        tabela.innerHTML += criarCard(produtos[i]);
    }
}

btAdicionar.addEventListener("click", () => {
    botoes.style.display = 'none';
    tabela.style.display = 'none';
    saidaJson.style.display = 'none';
    cardAdicionar.style.display = 'block';
});

btRegistrar.addEventListener("click", cadastrarProduto);

function cadastrarProduto() {
    const inNome = document.getElementById('inNome');
    const inPreco = document.getElementById('inPreco');
    const inCategoria = document.getElementById('inCategoria');

    if (inNome.value == "" || inPreco.value == "" || inCategoria.value == "") {
        alert('Por favor, preencha todos os campos.');
    } else if (inPreco.value <= 0) {
        alert('Por favor, insira um preço válido.');
    } else {
        const novoProduto = {
            nome: inNome.value,
            preco: Number(inPreco.value),
            categoria: inCategoria.value
        };

        produtos.push(novoProduto);

        alert('Produto registrado com sucesso!');

        inNome.value = "";
        inPreco.value = "";
        inCategoria.value = "";

        botoes.style.display = 'block';
        cardAdicionar.style.display = 'none';

        renderizarTabela();
    }
}

btExportar.addEventListener("click", exportarJSON);

function exportarJSON() {
    const json = JSON.stringify(produtos, null, 2);

    tabela.style.display = 'none';

    saidaJson.style.display = "block";
    saidaJson.textContent = json;
}
