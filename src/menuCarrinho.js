import { catalogo, salvarLocalStorage, lerLocalStorage } from "./utilidades";

//dicionario
const idsProdutoCarrinhoComQuantidade = lerLocalStorage("carrinho") ?? {}; 

// vamos criar uma função uma ação para abri e fechar o carinho de comprar 
// e direcionar essa função para o botão de compras , a funcao consiste em 
// remover a nav que criamos na lateral , trabalhando com a remoção la position inicial 
// que determianas no css ou seja . essa div carinho esta dentro do heder na positio top 0 a nossa 
// rigth 0 tambem 

function abrirCarrinho() {
  document.getElementById("carrinho").classList.add("right-[0px]");
  document.getElementById("carrinho").classList.remove("right-[-360px]");
}
// Javascrip vai da uma ordem agora 
// 1 agora vou pedir para o JAVA , olhe para a pagina > document depois
// 2 recupere um elemento dessa pagina pelo id  >Tradução getElementById
// 3 o elemento eh o carrinho de compras , agora eu peco que list uma class
// 4 pramin  que esta la (classlist) em seguida eu falo pra ele que quero 
// ejecutar uma ação de remover essa clase e adicionar ele na funcion
function fecharCarrinho() {
  document.getElementById("carrinho").classList.remove("right-[0px]");
  document.getElementById("carrinho").classList.add("right-[-360px]");
}

// funsao verificar se tem itens no carrinho  logo apor criaremos o direcionamento 
//do click do bora que ira apra a pagina de chackout
// if object  key par verificar se tem algo na lista length
// se tiver porduto no carrinho ele pode ir para a pagina checkout                    1   //funcio

function irParaCheckout() {
  if (Object.keys(idsProdutoCarrinhoComQuantidade).length === 0) {
    return;
  }
  window.location.href = "./checkout.html";
}

// funcao para ( exportar -> export ) para o mainJS Principa
// 1 ação para o BOTÃO FECHAR E ABRIR carrinho
// 2 pegando a informação e guradando dentro de uma variavel uma caixinha
// 3 assim o java scrip recupera essas informacoes
export function inicializarCarrinho() {
  const botaoFecharCarrinho = document.getElementById("fechar-carrinho");              //const 2
  const botaoAbrirCarrinho = document.getElementById("abrir-carrinho");
  const botaoIrParaCheckout = document.getElementById("finalizar-compras");

  //ESPERAR A AÇÃO PARA  EXECUTAR A REAÇÃO
  // 1 agora vamos adicionar o evento do botão ,colocamos a acao de fechar e abrir o carinho na caixinha 
  // 2 vamos usar a caixinha para o evento  eventListener abrimos a ação entre parente de click                     
  // 3 o evento vai ficar eperando quando acontecer o click                                           3    //botao
  // 4 adicionamos o eventList ao clik e apos a vircula pasamos a frente oque ele vai fazer    
  botaoFecharCarrinho.addEventListener("click", fecharCarrinho);
  botaoAbrirCarrinho.addEventListener("click", abrirCarrinho);
  botaoIrParaCheckout.addEventListener("click", irParaCheckout);
}

//logica pra remover do carinho funcao parte vizual
function removerDoCarrinho(idProduto){
    delete idsProdutoCarrinhoComQuantidade [idProduto] ;
    salvarLocalStorage ("carrinho", idsProdutoCarrinhoComQuantidade);                //salvar local storag o dicionario inportando do utilitario
    atualizarPrecoCarrinho();                                              //atualizar preco carinho
    redenrizarProdutosCarrinho();
}

// Depois de editar o cartao que vao ficar dentro do carinho vamos recortar-lo do html e traser pra ca
// 1 Criar a funsao para ele recuperar o cartao para dentro do carrinho 
// 2 pegar a referencia para  ele usei o mesmo nome section onde esta o container dos cartao e pedi para olha pra dentro da sesao
// 3 agora vou dizer oque eu quero que ele faça com a informaão produto-carinho 
// 4 quero que recupere o innerHTML ou Seja o html interior dessa section

//ADICIONAR SOMAR + 1
function incrementarQuantidadeProduto(idProduto) { // se eu ja tenho um produto ele soma mais um se for clikado duas veses no mesmo produto ++
  idsProdutoCarrinhoComQuantidade[idProduto]++;
  salvarLocalStorage ("carrinho", idsProdutoCarrinhoComQuantidade);                //salvar local storag o dicionario inportando do utilitario
  atualizarPrecoCarrinho();                                            //atualizar preco carinho
  atualizarInformacaoQuantidade(idProduto);
}
//DIMINUIR 1
function decrementarQuantidadeProduto(idProduto) { // essa diminue a quantidade de produto se quiser diminuir no carinho
  if(idsProdutoCarrinhoComQuantidade[idProduto] === 1){
    atualizarPrecoCarrinho();                                        //atualizar preco carinho
    removerDoCarrinho(idProduto)
    return;
  }
  idsProdutoCarrinhoComQuantidade[idProduto]--;
  salvarLocalStorage ("carrinho", idsProdutoCarrinhoComQuantidade);                //salvar local storag o dicionario inportando do utilitario
  atualizarPrecoCarrinho();                                                 //atualizar preco carinho
  atualizarInformacaoQuantidade(idProduto);
}

function atualizarInformacaoQuantidade(idProduto) {
  document.getElementById(`quantidade-${idProduto}`).innerText =
    idsProdutoCarrinhoComQuantidade[idProduto];
}

function desenharProdutoNoCarrinho(idProduto){
  const produto = catalogo.find((p) => p.id === idProduto);
  const containerProdutosCarrinho =
    document.getElementById("produtos-carrinho");

  //agora vamos converter todo o texto do container pai porque o java entende como texto e nao como html  em  um elemento HTML para o java tratar ele de outra forma
  const elementoArticle = document.createElement('article'); //<ARTICLE><ARTICLE> criamos ele com java e vamos pegas as class do antigo
  const articleClasses = [
    "flex",
    "bg-amber-100",
    "rounded-lg",
    "p-1",
    "relative",
  ];
  //ele vai percorrer toda a lista de classe , pega todo a lista e aplica na casse da vez articleclass
  for (const articleClass of articleClasses){
    elementoArticle.classList.add(articleClass);
  //<article class="flex bg-amber-100 rounded-lg p-1 relative" > agora meu aticle tem todas as class que apliquei pro carrinho , 
  // os demais itens clases qeu tavam dentro do article vai sem mantido en texto porque vamo chamar ele com innerHTML pra dentro de novo
  }
  const cartaoProdutoCarrinho = ` <button id="remover-item-${produto.id}" class=" absolute top-0 right-2">
      <i
      class="fa-solid fa-circle-xmark text-slate-500 hover:text-slate-800"
        ></i>
    </button>
    <img
      src="./assets/img/${produto.imagem}"
      alt="Carrinho: ${produto.nome}"
      class="h-24 w-39 rounded-lg"
     />      
      <div class="p-2  flex flex-col justify-between">
        <p class="text-slate-900 text-sm">
           ${produto.nome}
        </p>
        <p class="text-slate-400 text-xs">Tamanho: 8Cm</p>
        <p class="text-green-700 text-lg">$${produto.preco}</p>
      </div>
      <div class="flex text-slate-950 items-end absolute bottom-0 right-2 text-lg"> 
          <button id='decrementar-produto-${produto.id}'> - </button>
          <p id="quantidade-${produto.id}" class="ml-2"> ${idsProdutoCarrinhoComQuantidade[produto.id]}</p>
          <button class="ml-2" id='incrementar-produto-${produto.id}'> + </button>
      </div> `;

      elementoArticle.innerHTML = cartaoProdutoCarrinho;
  containerProdutosCarrinho.appendChild (elementoArticle);

  //capacidade do botao decrevemento de receber o comando  eventlist click,  e esperar a acao para executar a reacao de DIMINUIR os produtos do carinho
  document
    .getElementById(`decrementar-produto-${produto.id}`)
    .addEventListener('click', () => decrementarQuantidadeProduto(produto.id));

  //capacidade do botao decrevemento de receber o comando  eventlist click,  e esperar a acao para executar a reacao de AUMENTAR os produtos do carinho
  document
    .getElementById(`incrementar-produto-${produto.id}`)
    .addEventListener('click', () => incrementarQuantidadeProduto(produto.id));

    document
    .getElementById(`remover-item-${produto.id}`)
    .addEventListener('click', () => removerDoCarrinho(produto.id));
}


export function redenrizarProdutosCarrinho(){
  const containerProdutosCarrinho =
  document.getElementById("produtos-carrinho");
  containerProdutosCarrinho.innerHTML ="";

  for (const idProduto in idsProdutoCarrinhoComQuantidade){
    desenharProdutoNoCarrinho(idProduto);
  }
}

export function adicionarAoCarrinho(idProduto) {
  //condicao if , se o produto ja estiver no carrio . e for clicado 
  // adicione + 1
  if (idProduto in idsProdutoCarrinhoComQuantidade) {
    incrementarQuantidadeProduto(idProduto);
    return;
  }
  //adiocionar idetens no dicionario sem precisar fazer manualmente
  idsProdutoCarrinhoComQuantidade[idProduto] = 1;
  salvarLocalStorage ("carrinho", idsProdutoCarrinhoComQuantidade);                //salvar local storag o dicionario inportando do utilitario 
  desenharProdutoNoCarrinho(idProduto);
  atualizarPrecoCarrinho();                                                      //atualizar preco carinho 

}
// vai atualizar o preco total do carrinho
export function atualizarPrecoCarrinho() {
  const precoCarrinho = document.getElementById("preco-total");
  let precoTotalCarrinho = 0;
  //para cada laco de repeticao eu quero que o preco total do carrinho incrimenta adiciona soma 
  for(const idProdutoNoCarrinho in idsProdutoCarrinhoComQuantidade) {
    precoTotalCarrinho +=
    catalogo.find((p) => p.id === idProdutoNoCarrinho).preco * 
    idsProdutoCarrinhoComQuantidade[idProdutoNoCarrinho];

  }
   // quando ele vai somar , quando aumenta crementa atualizar  a quantidade de produto ou diminuir atuali
    precoCarrinho.innerText = `Total: $${precoTotalCarrinho}`;
}





