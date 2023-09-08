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
//vamos fazer a busca dentro ja sesao do produtos pegando uma class categoria desse iten
function esconderKitbebe(){
    exibirTodos();
   const produtosKitbebe =
   //involvendo os cards que sao do tipo kitbebe in lista agora que ta en lista conseguimos manipular
    Array.from(catalogoProdutos.getElementsByClassName("kitbebe")
    );
  //iterar e pecorrer a lista / adicionando mais uma clase na funsao para escoonde o card e deixar apenas o escolido
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
   //iterar e pecorrer a lista / adicionando mais uma clase na funsao para escoonde o card e deixar apenas o escolido
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