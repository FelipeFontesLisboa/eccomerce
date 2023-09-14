import {
    lerLocalStorage,
    desenharProdutoCarrinhoSimples,
} from "./src/utilidades";
function criarPedidoHistorico(pedidoComData) {
    const elementoPedido = `<p class= "text-xl text-bold my-10"> ${new Date(
        pedidoComData.dataPedido
    ).toLocaleDateString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit"
    })} </p>
    <section id="container-pedidos-${pedidoComData.dataPedido}" class="bg-stone-400 rounded p-4 w-1/2 "></section>
    `;
    const main = document.getElementsByTagName("main")[0];
    main.innerHTML += elementoPedido;
    for (const idProduto in pedidoComData.pedido) {
        desenharProdutoCarrinhoSimples(
            idProduto,
            `container-pedidos-${pedidoComData.dataPedido}`,
            pedidoComData.pedido[idProduto])
    }
}
function redenrizarHistoricoPedidos() {
    const historico = lerLocalStorage("historico");
    for (const pedidoComData of historico) {
        criarPedidoHistorico(pedidoComData);
    }
}
redenrizarHistoricoPedidos();