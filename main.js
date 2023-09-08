import { renderizarCatalogo } from "./src/cartaoProduto";
import{ inicializarFiltros } from "./src/filtrosCatalogo"
import {
       atualizarPrecoCarrinho,
       inicializarCarrinho,
       redenrizarProdutosCarrinho,
       } from "./src/menuCarrinho";


//  ./ src pelo import e export
//executa a vizualiz dos cards o inner inicial
renderizarCatalogo();
//executa a funcao de inicializar as funcios do botoes do  carinho aqui pelo import e export

inicializarCarrinho();
redenrizarProdutosCarrinho();
atualizarPrecoCarrinho();
inicializarFiltros();



