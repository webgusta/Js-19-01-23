/*
EXERCICIO 2- Criar uma estrutura com:
            Uma classe de shoppings do RJ.
            Uma subclasse tipos de loja de sua escolha(Brinquedos, Alimentaçao).
            Uma subclasse de lojas de sua escolha(McDonalds,Renner,Rihappy).
        A subclasse de lojas terá os seguintes atributos:
          Tamanho da loja, produtos mais vendidos,Aberto 24h.
          Metodo: exibir os atributos da loja.
*/

class ShoppingNovaAmerica{
    
}
class Alimentaçao extends ShoppingNovaAmerica{

}
class Burgerking extends Alimentaçao{
    tamanhoLoja: number;
    produtoMaisVendido: string;
    Aberto_24H: boolean;//boolean: verdadeiro ou falso

    constructor (tL:number, pMV:string, A: boolean){
        super();
        this.tamanhoLoja = tL;
        this.produtoMaisVendido = pMV;
        this.Aberto_24H = A;
    }
    
    exibirLoja(): void {
        console.log(`O Tamanho da loja é? ${this.tamanhoLoja}. Qual é o produto mais vendido? ${this.produtoMaisVendido}. A loja fica aberta 24h? ${this.Aberto_24H}`)
    }
}
let loja = new Burgerking (120,`tradicional`,false)
loja.exibirLoja();

