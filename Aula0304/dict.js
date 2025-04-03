// Dicionário
// HashMap ou Objeto

let objeto = {};
objeto.marca = "Volvo";
objeto.cor = "azul";

let outroObjeto = {
    "marca": "Volvo",
    "cor": "azul"
};

// let formDois = {
//     "nome": "AA",
//     "idade": "BB",
//     "cidade": "CC",
//     "status": "DD"
// };

let form = {
    "nome": "",
    "idade": 0,
    "cidade": "",
    "status": ""
};

let seuNome = prompt("Diga seu nome");
form.nome = seuNome;

function agregarDados(objeto) {
    let pessoal = objeto.nome + ", " + objeto.idade;
    let nacional = objeto.cidade + ", " + objeto.status;

    console.log(
        "Dados pessoais: " + pessoal + " e Dados Nacionais: " + nacional 
    );
    
};

agregarDados(form);