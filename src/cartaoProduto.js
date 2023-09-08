//AQUI VAMOS MONTAR A ESTRUTURA DE LOOP
// chamada for e vamos colocar um nome comun tudo isso fas parte do produto do catalogo
// vamos dizer pra ele para cada item ProdutoCatalogo  ou seja do catalogo cost Catalogo
// vai ter as informacoes solicidada la do html que pasamos pra ca
// catalogo da cost vai passar a ser produtoCatalogo  a Qui no loop 
// dessa fora ele fala pra cada produtoC.atalogo passa esse loop
// por esse card dentro de uma funsao para a recohecer na exportação
import { catalogo } from "./utilidades";
import { adicionarAoCarrinho } from "./menuCarrinho";

export function renderizarCatalogo() {
  for (const produtoCatalogo of catalogo) {
    //eu peguei o 1 cartao do html criei uma cost e os dados en crase 
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

    // Javascrip vai da uma ordem agora  LAÇO DE REPEDIÇÃO DO CARDS
    // 1 agora vou pedir para o JAVA , olhe para a pagina > document depois
    // 2 recupere um elemento dessa pagina pelo id  >Tradução getElementById
    // 3 Por se tratar de  uma ordem abrimos e fechamos parentes () com o id que queremos  
    // 4 entao qual eh o id que vc quer recuperar dessa pagina ?esse é o id > - container-produto 
    // 5 oque voce quer dessa id ?  - dele eu quero o html interior o innerHTML 
    // 6 tendo alguma coisa la ou nao o navegador entrega , agora o scrip pede 
    // 7 para ele ( acresentar +=) o que o > CartaoProduto
    document.getElementById("container-produto").innerHTML += cartaoProduto;
  }



  //BOTÃO PARA ADICIONAR DENTRO DO CARRINHO <button id="adicionar-
  //Adicionamos um id=adcionar para o FOR  e vamos pedir para ele Criar Outro Laço de repetição
  // ou seja CONTINUE ,getElemento > pegue o id do botao id="adicionar-${produtoCatalogo.id
  //depois adicione a ele ao botao um eventlistner  de click e depois oque esse click vai fazer
  //ele vai adicionar ao carinho criando um segundo laço de repetição dentro 
  // conseguimos fazer isso porque os botoes ja foram criados 
  for (const produtoCatalogo of catalogo) {
    document
      .getElementById(`adicionar-${produtoCatalogo.id}`)
      .addEventListener("click", () => adicionarAoCarrinho(produtoCatalogo.id));
  }
}




