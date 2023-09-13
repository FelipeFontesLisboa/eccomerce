//exibir a categoria de produtos
const catalogoProdutos = document.getElementById("container-produto");


//funsao para exibir todos os itens novamente ao clicar
function exibirTodos() {
    const produtosEscondidos = Array.from(
         catalogoProdutos.getElementsByClassName("hidden")
         );

    for(const produtos of produtosEscondidos){
        produtos.classList.remove("hidden");
    }
}
function esconderKitbebe(){
    exibirTodos();
   const produtosKitbebe =
    Array.from(catalogoProdutos.getElementsByClassName("kitbebe")
    );
    for (const produtos of produtosKitbebe){
        produtos.classList.add('hidden');
    }
}

//-------------------------------------------------------------------
function esconderAcessorio(){
    exibirTodos();
    const produtosAcessorio = Array.from(
        catalogoProdutos.getElementsByClassName("acesorios")
     );
     for (const produtos of produtosAcessorio){
         produtos.classList.add('hidden');
     }
 }
 
 export function inicializarFiltros() {
     document 
     .getElementById('exibir-todos')
     .addEventListener("click", exibirTodos);

     document 
     .getElementById('exibir-kitbebe')
     .addEventListener("click", esconderAcessorio);

     document 
     .getElementById('exibir-acesorios')
     .addEventListener("click", esconderKitbebe);
 }