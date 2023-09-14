export const catalogo = [
   {
      id: '22',
      marca: "NinaIcomerce",
      nome: "Bebe Infantil",
      preco: 15,
      imagem: "product-b1.jpg",
      acesorios: false
   },
   {
      id: '23',
      marca: "NinaIcomerce",
      nome: "Rezina I",
      preco: 15,
      imagem: "product-b2.jpg",
      acesorios: false
   },
   {
      id: '24',
      marca: "NinaIcomerce",
      nome: "Rezina I",
      preco: 15,
      imagem: "product-b3.jpg",
      acesorios: false
   },
   {
      id: '25',
      marca: "NinaIcomerce",
      nome: "Rezina I",
      preco: 15,
      imagem: "product-b4.jpg",
      acesorios: false
   },
   {
      id: '26',
      marca: "NinaIcomerce",
      nome: "Rezina I",
      preco: 15,
      imagem: "product-b5.jpg",
      acesorios: false
   },
   {
      id: '1',
      marca: "NinaIcomerce",
      nome: "Art Rezina A1",
      preco: 15,
      imagem: "product-b2",
      acesorios: true

   },
   {
      id: '2',
      marca: "NinaIcomerce",
      nome: "Rezina B",
      preco: 18,
      imagem: "product-2.jpg",
      acesorios: true
   },
   {
      id: '3',
      marca: "NinaIcomerce",
      nome: "Rezina C",
      preco: 19,
      imagem: "product-3.jpg",
      acesorios: true
   },
   {
      id: '4',
      marca: "NinaIcomerce",
      nome: "Rezina D",
      preco: 17,
      imagem: "product-4.jpg",
      acesorios: true
   },
   {
      id: '5',
      marca: "NinaIcomerce",
      nome: "Rezina E",
      preco: 12,
      imagem: "product-5.jpg",
      acesorios: true
   },
   {
      id: '6',
      marca: "NinaIcomerce",
      nome: "Rezina F",
      preco: 10,
      imagem: "product-3.jpg",
      acesorios: true
   },
   {
      id: '7',
      marca: "NinaIcomerce",
      nome: "Rezina G",
      preco: 11,
      imagem: "product-7.jpg",
      acesorios: true
   },
   {
      id: '8',
      marca: "NinaIcomerce",
      nome: "Rezina H",
      preco: 14,
      imagem: "product-8.jpg",
      acesorios: true
   },
   {
      id: '9',
      marca: "NinaIcomerce",
      nome: "Rezina I",
      preco: 15,
      imagem: "product-b6.jpg",
      acesorios: false
   },
   {
      id: '10',
      marca: "NinaIcomerce",
      nome: "Rezina J",
      preco: 20,
      imagem: "product-10.jpg",
      acesorios: true
   },
   {
      id: '11',
      marca: "NinaIcomerce",
      nome: "Rezina J",
      preco: 20,
      imagem: "product-10.jpg",
      acesorios: true
   },
   {
      id: '12',
      marca: "NinaIcomerce",
      nome: "Rezina J",
      preco: 20,
      imagem: "product-10.jpg",
      acesorios: true
   },
   {
      id: '13',
      marca: "NinaIcomerce",
      nome: "Rezina J",
      preco: 20,
      imagem: "product-10.jpg",
      acesorios: true
   },
   {
      id: '14',
      marca: "NinaIcomerce",
      nome: "Rezina J",
      preco: 20,
      imagem: "product-10.jpg",
      acesorios: true
   },
   {
      id: '15',
      marca: "NinaIcomerce",
      nome: "Rezina J",
      preco: 20,
      imagem: "product-10.jpg",
      acesorios: true
   },
   {
      id: '16',
      marca: "NinaIcomerce",
      nome: "Rezina J",
      preco: 20,
      imagem: "product-b7.jpg",
      acesorios: false
   },
   {
      id: '17',
      marca: "NinaIcomerce",
      nome: "Rezina J",
      preco: 20,
      imagem: "product-b8.jpg",
      acesorios: false
   },
   {
      id: '18',
      marca: "NinaIcomerce",
      nome: "Rezina J",
      preco: 20,
      imagem: "product-b9.jpg",
      acesorios: false
   },
   {
      id: '19',
      marca: "NinaIcomerce",
      nome: "Rezina J",
      preco: 20,
      imagem: "product-b10.jpg",
      acesorios: false
   },
   {
      id: '20',
      marca: "NinaIcomerce",
      nome: "Rezina J",
      preco: 20,
      imagem: "product-b11.jpg",
      acesorios: false
   },
   {
      id: '21',
      marca: "NinaIcomerce",
      nome: "Rezina I",
      preco: 15,
      imagem: "product-b12.jpg",
      acesorios: false
   },
   {
      id: '27',
      marca: "NinaIcomerce",
      nome: "Rezina I",
      preco: 15,
      imagem: "product-b13.jpg",
      acesorios: false
   },
   {
      id: '28',
      marca: "NinaIcomerce",
      nome: "Rezina I",
      preco: 15,
      imagem: "product-b14.jpg",
      acesorios: false
   },
   {
      id: '29',
      marca: "NinaIcomerce",
      nome: "Rezina I",
      preco: 15,
      imagem: "product-b15.jpg",
      acesorios: false

   },
   {
      id: '30',
      marca: "NinaIcomerce",
      nome: "Rezina I",
      preco: 15,
      imagem: "product-b16.jpg",
      acesorios: false
   },
];

export function salvarLocalStorage(chave, informacao) {
   localStorage.setItem(chave, JSON.stringify(informacao));
}
export function lerLocalStorage(chave) {
   return JSON.parse(localStorage.getItem(chave,));
}
export function apagarDoLocalStorage(chave) {
   localStorage.removeItem(chave)
}

//----------------------------------------------------------------------------


export function desenharProdutoCarrinhoSimples(
   idProduto,
   idContainerHtml,
   quantidadeProduto
) {
   const produto = catalogo.find((p) => p.id === idProduto);
   const containerProdutosCarrinho = document.getElementById(idContainerHtml);

   const elementoArticle = document.createElement("article"); //<article></article>
   const articleClasses = [
      "flex",
      "bg-amber-100",
      "rounded-lg",
      "p-1",
      "relative",
      "mb-2"
   ];

   for (const articleClass of articleClasses) {
      elementoArticle.classList.add(articleClass);
   }
   //<article class="flex bg-slate-100 rounded-lg p-1 relative"></article>

   const cartaoProdutoCarrinho = `
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
     <div class='flex text-slate-950 items-end absolute bottom-0 right-2 text-lg'>
         <p id='quantidade-${produto.id}' class='ml-2'>${quantidadeProduto}</p>
     </div>`;
   //<article class="flex bg-slate-100 rounded-lg p-1 relative">codigo do cartao do produto</article>

   elementoArticle.innerHTML = cartaoProdutoCarrinho;
   containerProdutosCarrinho.appendChild(elementoArticle);

}
