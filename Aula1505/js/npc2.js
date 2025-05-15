const npcList = document.getElementById("lista-npcs");

class Person {
    constructor(argumentName, argumentHealth) {
        this.name = argumentName; // Puxa o valor que é declarado ao chamar a classe
        this.health = argumentHealth;
        // this.age = argumentAge; // propriedade
    }

    greet() {
        // método
        return `Olá, meu nome é ${this.name} e eu tenho ${this.health} pontos de vida.`;
    }

    icon() {
        return `&#128511;`;
    }
}

// Herança - Inheritance
// NPC Merchant
class Merchant extends Person {
    greet() { // método
        return `Olá, meu nome é ${this.name} e eu tenho muitos itens pra você comprar`;
    }

    icon() {
        return `&#129297;`;
    }
}

// NPC Enemy
class Enemy extends Person {
    greet() { // método
        return `Olá, meu nome é ${this.name} Montoya, você matou o meu pai!! Prepare-se para morrer!!`;
    }

    icon() {
        return `&#128127;`;
    }
}

// NPC Villager
class Villager extends Person {
    icon() {
        return `&#128128`
    }
}

const npcs = [
    new Person("Zezinho", 20),
    new Merchant("Valerius", 50),
    new Enemy("Angus", 90),
    new Villager("Mary", 15)
];

const zezinho = new Person();
zezinho;

const valerius = new Merchant();
valerius;

const angus = new Enemy();
angus;

// Ao fazer comparação, temos que ir de MAIS ESPECIFICA para MENOS ESPECIFICA  

// Menos específica --> Person
// if (valerius instanceof Person) {
//     console.log("É Pessoa");
// } else {
//     console.log("Não é Pessoa");
// }

// // Mais específica --> Merchant ou Enemy
// if (npc instanceof Merchant) {
//         icon.innerHTML = `&#129297;`;
//     } else if (npc instanceof Enemy) {
//         icon.innerHTML = `&#128127;`;
// }

// Rendering

npcs.forEach((npc) => {
    const li = document.createElement("li");
    const icon = document.createElement("span");
    const txt = document.createElement("p");

    icon.innerHTML = npc.icon();

    txt.innerText = npc.greet();

    li.append(icon, txt);
    npcList.appendChild(li);
});
