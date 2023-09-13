import { renderizarCatalogo } from "./src/cartaoProduto";
import{ inicializarFiltros } from "./src/filtrosCatalogo"
import {
       atualizarPrecoCarrinho,
       inicializarCarrinho,
       redenrizarProdutosCarrinho,
       } from "./src/menuCarrinho";



renderizarCatalogo();
inicializarCarrinho();
redenrizarProdutosCarrinho();
atualizarPrecoCarrinho();
inicializarFiltros();



