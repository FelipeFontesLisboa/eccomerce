import {
    desenharProdutoCarrinhoSimples,
    lerLocalStorage,
    apagarDoLocalStorage,
    salvarLocalStorage,
  } from "./src/utilidades";
  
  function desenharProdutosCheckout() {
    const idsProdutoCarrinhoComQuantidade = lerLocalStorage("carrinho") ?? {};
    for (const idProduto in idsProdutoCarrinhoComQuantidade) {
      desenharProdutoCarrinhoSimples(
        idProduto,
        "container-produtos-checkout",
        idsProdutoCarrinhoComQuantidade[idProduto]
      );
    }
  }


//funcicao para finalizar a compra na sesao chekcout 
//e ir  para pedidos e aguradar envio
function finalizarCompra(evento) {
    evento.preventDefault();   // interonper o evento padrao do submit
    const idsProdutoCarrinhoComQuantidade = lerLocalStorage("carrinho")?? {};  // se o carrinho tver vazio nao vamos deixar ele executar a funsao
    if(Object.keys(idsProdutoCarrinhoComQuantidade).length === 0) {//se o carrinho tver vazio com 0 na lista lengt nao vamos deixar ele executar a funsao
        return;  // esse if via retornar  saindo fora da funsao
    }

    const dataAtual = new Date();//data atual da execusao do acesso
    const pedidoFeito = {  // quando ele finalizar o pedido vai exibir a data atual e o produdo idsprodutocarinho
        dataPedido: dataAtual, // nosso objeto
        pedido: idsProdutoCarrinhoComQuantidade
    }
    const historicoDePedidos = lerLocalStorage("historico") ?? []; // semrpe tera que recuperar um lista de peido  feita ou historico
    const historicoDePedidosAtualizado = [pedidoFeito, ...historicoDePedidos];
    salvarLocalStorage("historico", historicoDePedidosAtualizado);
    apagarDoLocalStorage("carrinho");// apagar quem  ? > carrinho

    window.location.href = "./pedidos.html";
}
// a funsao vai ficar ligada ao submite da finalizasao de dados e sin proguesiguir para pagina pedido
// quando ele ouvir o click no submite e ele sera direcionado para etapa pedido
// submite ja espera por patadrao o prenchimento de um formulario , mas vamos mudar a funsao dele pasando outro 
//evento pra ele      o event vem de submite nao vem de outro canto igual as outras

desenharProdutosCheckout();

document.addEventListener("submit",(evt) => finalizarCompra(evt))




