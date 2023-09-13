import { catalogo } from "./utilidades";
import { adicionarAoCarrinho } from "./menuCarrinho";

export function renderizarCatalogo() {
  for (const produtoCatalogo of catalogo) {
    const cartaoProduto = `<div class="rounded-lg shadow-xl shadow-slate-400 bg-white flex flex-col w-48 m-2 p-3 group 
    ${produtoCatalogo.acesorios ?  'acesorios' : 'kitbebe'}"
     id="card-produto-${produtoCatalogo.id}">
           <img 
           src="./assets/img/${produtoCatalogo.imagem}"
           alt="Produto 1 rezina"
           class=" h-48 hover:scale-125 group-hover:scale-125 duration-300 my-5 rounded-lg shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)]" 
           />
            <p class='text-sm'>${produtoCatalogo.marca}</p>
            <p class='text-sm'>${produtoCatalogo.nome}</p>
            <p class='text-sm'>$${produtoCatalogo.preco}</p>
            <button id="adicionar-${produtoCatalogo.id}" class="bg-orange-500 hover:bg-orange-400 duration-200 rounded text-slate-200">
            <i class="fa-solid fa-cart-plus"></i></button>
            </div>`;
    document.getElementById("container-produto").innerHTML += cartaoProduto;
  }

  for (const produtoCatalogo of catalogo) {
    document
      .getElementById(`adicionar-${produtoCatalogo.id}`)
      .addEventListener("click", () => adicionarAoCarrinho(produtoCatalogo.id));
  }
}




