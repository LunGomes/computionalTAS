// OOP - Object-Oriented Programming (POO - Programção Orientada a Objetos)

// const map = new Map();

// 3 NPCs - Zezinho, Luisinho, Huguinho
// São humanos

const paragraph = document.getElementById("paragraph");

class Person {
  // initializer
  constructor(argumentName, argumentAge) {
    // this.name = "Humano"; Declarando assim, todas as instâncias tem a mesma propriedade
    this.name = argumentName; // Puxa o valor que é declarado ao chamar a classe
    this.age = argumentAge// propriedade
  }

  greet() {
    paragraph.innerText = `Olá, meu nome é ${this.name} e eu tenho ${this.age} anos.`;
  }
}

const zezinho = new Person("Zezinho", 15); // instância
const luisinho = new Person("Luisinho", 16);
const huguinho = new Person("Huguinho", 19);

luisinho.greet();