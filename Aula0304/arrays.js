let nomes = ["maçã", "banana", "laranja"] // 3 elementos
let nomesDois = ["maçã", "banana", "laranja", "muringa"] // 4 elementos

nomes.length; // Quantidade de elementos no Array

nomes.indexOf("maçã"); // Posição 1

nomes.push("uva"); // Adiciona uva no final do array
nomes.push("uva"); // Adiciona uva no começo do array

nomes.pop(); // Retira o último elemento do array
nomes.unshift(); // Retira o primeiro elemento do array

// Definir o i dentro do for, para não causar problemas se for criado outro for
for(let i = 0; i < nomes.length; i++){
    console.log(
        nomes[i] // elemento na posição i
    );
}

let garrafas = ["azul", "verde", "vermelha"]

for(let element of garrafas) { // passa por todos os elementos
    console.log(element);
}

garrafas.map(element => "garrafa " + element);
// transforma o array garrafas diretamente
// return --> garrafa azul, garrafa verde, garrafa vermelha