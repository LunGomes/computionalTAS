var pv = 10;
var escolha; // "a" ou "b"

// floresta
// mostra explicação 
// escolha a é comer frutas
// escolha b seguir adiante
// prompt (faça sua escolha)  
function floresta(){
    
    if (escolha == "a") {
        pv = pv - 2;
        //enjoado();
    } else {
       //anoitecer();
    }
}

// EXEMPLO USANDO PROPS
// function floresta(reduzPontos) {
//     if (reduzPontos === true) {
//         pv = pv - 2;
//     }

//     if (escolha == "a") {
//         pv = pv - 2;
//         //enjoado();
//     } else {
//        //anoitecer();
//     }
// }
// para chamar a floresta que reduz Pontos a chamada seria --> floresta(true);
// para chamar a floresta que NÃO reduz Pontos a chamada seria --> floresta(false);

function colina(quantidadeDePontos){  
    pv = pv - quantidadeDePontos;

    if (escolha == "a") {
        pv = pv - 3;
        //enjoado();
    } else {
        floresta();
    }
}

function inicio(){
    captarEscolha();

    if (escolha == "a") {
        floresta();
    } else {
        colina(3);
    }
}

function captarEscolha(escolhaDoUsuario){
    // digite A ou B
    escolha = escolhaDoUsuario;
}

inicio();