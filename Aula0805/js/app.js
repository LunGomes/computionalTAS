// Object - Estrutura de dados (chave-valor)
// objeto / object - instância de uma classe 

// const books = {
//     "Harry Potter": "J.K. Rowling",
//     "1984": "George Orwell",
//     "Duna": "Frank Herbert",
//     "O Hobbit": "J.K.K. Tolkien"
// }

// const listaLivros = document.getElementById('lista-livros'); 

// for (let chave in books) {
//     const item = document.createElement('li'); // <li></li>
//     item.textContent = `${chave} - ${books[chave]}`;// <li>[chave]</li>
//     listaLivros.appendChild(item);
// };

/////////////////////////////////////////////

// Map - Estrutura de Dados (chave-valor) E6+
// Mantém a ordem de inserção
// Métodos para rápida inserção e remoção

// const livros = new Map();
// livros.set("Harry Potter", "J.K. Rowling");
// livros.set("1984", "George Orwell");
// livros.set("Duna", "Frank Herbert");
// livros.set("O Hobbit", "J.K.K. Tolkien");

// const livros = new Map([
//     ["Harry Potter", "J.K. Rowling"],
//     ["1984", "George Orwell"],
//     ["Duna", "Frank Herbert"],
//     ["O Hobbit", "J.K.K. Tolkien"]
// ])

const livros = new Map();
livros.set("Harry Potter", "J.K. Rowling");

const txtTitulo = document.getElementById('titulo'); 
const txtAutor = document.getElementById('autor'); 
const btnAdicionar = document.getElementById('btnAdicionar'); 

const listaLivros = document.getElementById('lista-livros'); 

btnAdicionar.addEventListener('click', renderizar);

function renderizar() {
    if (txtTitulo.value != "" && txtAutor.value != ""){ 
    livros.set(txtTitulo.value, txtAutor.value);
    }

    listaLivros.innerHTML = ''; //Esvazia a lista 
    livros.forEach((valor, chave) => {
        const item = document.createElement('li'); // <li></li>
        item.textContent = `${chave}, autor: ${valor}`;// <li>[chave]</li>
        listaLivros.appendChild(item);
    });
};

renderizar();