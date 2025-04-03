// 27/03 - Loop While

// Exemplo de While
console.log("------------Exemplo com WHILE------------")

var numero;
numero = prompt("Adivinhe o número entre 1 e 5:");

while (numero !== 5) { // enquanto for diferente de 5 -> False; Continua repetindo
    console.log(numero);
    numero = prompt("Adivinhe o número entre 1 a 10:");
};
console.log("Acertou!");

var nome;
nome = prompt("Escreva seu nome:");

while (nome == "Paula") {
    nome = prompt("Nome feio, escolha outro:")
}
console.log(`Bom dia ${nome}`);


// Exemplo de Do While
console.log("------------Exemplo com DO WHILE------------")

do { // o DO WHILE roda pelo menos 1 vez
    console.log(numero);
    var promptedValue = prompt("Adivinhe o número (com do while) entre 1 a 10:");
    numero = parseInt(promptedValue);
} while (numero !== 5)// enquanto for diferente de 5 -> False; Continua repetindo
console.log("Você ganhou!");

// Exemplo de For Loop 
console.log("------------Exemplo com FOR LOOP------------")

// onde a contagem começa // i = 0
// qual é a condição para a repetição // i seja menor que 10
// qual a lógica para a contagem // i = i + 1 // i++

// var index = 0;
// if (index < 10) {
// // essa é um exemplo da estrutura desmontada
// }
// i = i + 1;

var array = [1, 2, 3, 4, 5];
var nomes = [
    "nome A",
    "nome B",
    "nome C"
];
var novosNomes = [];

var numeroTotalDeNomes = nomes.length;
let i = 0;

for (i = 0; i < numeroTotalDeNomes; i++) {
    var novoNome = "aluno(a) " + nomes[i];
    novosNomes.push(novoNome); 
}
console.log(novosNomes);

// Exemplo usando i-- em contextos

for(i = 60; i >= 0; i--){ // Um cronômetro de 60 segundo decrescente
    console.log(i);       // Assim é uma contagem regressiva  
}

var totalMinutos = 60;
for(i = 0; i < 60; i++){ // Também um cronômetro de 60 segundo decrescente
    console.log(totalMinutos);  // Mas dessa vez é necessário mostrar e alterar a variável totalMinutos
    totalMinutos--;
}

// EXTRA - Exemplo de um condicional IF
console.log("------------Exemplo com IF------------")

var numero2 = 6;
var texto = "6";

if (numero2 == texto) { //true
    console.log("Mesmo conteúdo em ambas as variáveis");
} else {
    console.log("O conteúdo das variáveis é diferente");   
}