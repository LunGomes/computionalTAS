// A const não pode ser redefinida ao longo do código
const nuncaMuda = "Alguma Coisa";

// O let é a versão atualizada da var
let nomes = ["maçã", "banana", "laranja"] // 3 elementos
let nomesDois = ["maçã", "banana", "laranja", "muringa"] // 4 elementos

nomes[2] // Posição dos elementos --> Esse retorna "laranja", pois ela ta na posição 2

// Variáveis --> propriedades
// Propriedades --> Sem parênteses
nomes.length // Quantidade de elementos, conta apartir de 1

// Funções --> métodos
// Métodos --> Com parênteses
nomes.indexOf("banana")

// Classe
let array = Array(4); // Classe 

class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }

    nome; // variável
    
    dizerONome() { // função
        console.log(nome);
    }
}

let pessoa = new Pessoa("Paula");
pessoa.dizerONome(); // Paula

let outraPessoa = new Pessoa("Rafael");
outraPessoa.dizerONome(); // Rafael

///////

class Animal {
    constructor(nome) {
        this.nome = nome;
    }

    tipoDeAnimal; // Variável

    fazerSom() {
        if(this.tipoDeAnimal == "Vaca" || this.tipoDeAnimal == "vaca"){
            console.log("MUUUUUU"); 
        } else {
            console.log("Tipo de animal não identificado");
        }
    }
}

let vaca = new Animal("Vaca");
vaca.fazerSom();