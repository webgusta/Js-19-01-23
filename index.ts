/*
EXERCICIO SOBRE PROGRAMAÇAO ORIENTADA A OBJETOS

EXERCICIO 1- Criar uma estrutura com:
            Uma classe de carros de sua escolha.
            Uma subclasse de modelos de sua escolha.
            Atributos de vidro elétricos, freio ABS, tração nas quatro rodas.
            Metodos- ativação na tração, mudança de combustivel(gás/gasolina), ativaçao no freio ABS.
*/

class Carros{
    vidroEletrico: boolean;//boolean: verdadeiro ou falso
    freioABS: boolean;//boolean: verdadeiro ou falso
    traçãoQuatroRodas: boolean;//boolean: verdadeiro ou falso
    
    constructor(vE:boolean, fABS:boolean, tQR: boolean){
        this.vidroEletrico = vE;
        this.freioABS = fABS;
        this.traçãoQuatroRodas = tQR;
    }
    exibirCarros(): void {
        console.log(`O carro tem vidro elétrico? ${this.vidroEletrico}. Possui sistema de freio ABS? ${this.freioABS}. Possui tração nas quatro rodas? ${this.traçãoQuatroRodas}`)
    }
    
}
let carros = new Carros(true, true, false)
carros.exibirCarros();

class BMW extends Carros{

}


