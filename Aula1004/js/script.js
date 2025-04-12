// Esse puxa só o h1 Bem-vindo pelo seu id
let titulo = document.getElementById("titulo");
console.log(titulo.innerText);

console.log("////////////////////////////////////////");
// Esse puxa os dois h1 pela própria tag
let titulos = document.getElementsByTagName("h1")

// For dos títulos
for (element of titulos) {
    console.log(element.innerText);   
}

console.log("////////////////////////////////////////");
// Vamos adicionar um evento pra quando o botão for clicado 
let botao = document.getElementById("botao");
botao.addEventListener('click', function() {
    titulo.innerText = "Clicou!";  // --> Aí o Bem-vindo vira Clicou! na página
})
botao.addEventListener('mouseover', function() {
    titulo.innerText = "Passou o mouse!";  // --> Aí o Bem-vindo vira Clicou! na página
})


console.log("////////////////////////////////////////");
function soma(numero1, numero2) { // Aqui o que ta dentro é (argumento) 
    return numero1 + numero2;
}

let resultado = soma(2, 2); // Aqui o que ta dentro é (propriedade) 
console.log(`Soma: ${resultado}`);
