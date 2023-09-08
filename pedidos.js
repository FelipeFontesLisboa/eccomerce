import {
    lerLocalStorage,
    desenharProdutoCarrinhoSimples,
} from "./src/utilidades";

function criarPedidoHistorico(pedidoComData) {
    const elementoPedido = `<p class= "text-xl text-bold my-10"> ${new Date(
        pedidoComData.dataPedido
        ).toLocaleDateString("pt-BR",{
            hour:"2-digit",
            minute:"2-digit"
        })} </p>
    <section id="container-pedidos-${pedidoComData.dataPedido}" class="bg-stone-400 rounded p-4 w-1/2 "></section>
    `;

    const main = document.getElementsByTagName("main")[0];
    main.innerHTML += elementoPedido;// somando um inner a mais a ele 
    // ao contrario dos outros que chavei por id esse chamei pelo nome 
    // porque eu tenho apenas um main na pagina entrei dentro do mais e chamei 0 porque quero so a tag dele

    for (const idProduto in pedidoComData.pedido) {
        desenharProdutoCarrinhoSimples(
            idProduto,
            `container-pedidos-${pedidoComData.dataPedido}`,
            pedidoComData.pedido[idProduto]) // esexecutar pasando o produto e o container dele
    }

}

function redenrizarHistoricoPedidos() {
    const historico = lerLocalStorage("historico");
    for(const pedidoComData of historico )  {
        criarPedidoHistorico(pedidoComData);
    }
}
redenrizarHistoricoPedidos();