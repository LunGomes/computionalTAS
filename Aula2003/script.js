// function ola(){ //escopo
//     console.log("Olá");
//     console.log("Coisa");    
// }

// function teste(){
//     console.log("teste");
//     console.log("teste 2");    
// }

// teste(); //pula pra linha 7

// ola(); //pula pra linha 2

// teste(); //pula pra linha 7

var pv = 10;
var escolha; // "a" ou "b"

function floresta(){
    // floresta
    // mostra explicação 
    // escolha a é comer frutas
    // escolha b seguir adiante
    // prompt (faça sua escolha)    
    if (escolha == "a") {
        pv = pv - 2;
        //enjoado();
    } else {
       //anoitecer();
    }
}

function colina(){
    // colina
    // mostra explicação 
    // escolha a é beber água
    // escolha b seguir adiante para a floresta
    // prompt (faça sua escolha)    
    if (escolha == "a") {
        pv = pv - 3;
        //enjoado();
    } else {
        floresta();
    }
}

function inicio(){
    // inicio
    // mostrar explicação pro jogador
    // escolha A é floresta 
    // escolha b é colina
    // prompt (faça sua escolha)
    captarEscolha();

    if (escolha == "a") {
        floresta();
    } else {
        colina();
    }
}

function captarEscolha(escolhaDoUsuario){
    // digite A ou B
    escolha = escolhaDoUsuario;
}

inicio();