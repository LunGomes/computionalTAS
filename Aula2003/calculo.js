function diminuirUmPonto(){
    pv = pv - 1;
}

console.log(pv); // 10 pv

diminuirUmPonto();
diminuirUmPonto();
diminuirUmPonto();
diminuirUmPonto();
diminuirUmPonto();
diminuirUmPonto();

console.log(pv); // 4 pv

// estrutura de controle ***

// for loop
var index = 0;
// execute apenas se index for menor do que 10
index = index + 1;

for (i = 0; i < 10; i++){
    diminuirUmPonto();
}

// teriamos o mesmo resultado fazendo o seguinte if
if (index < 10) { // index == 10 FALSE
    diminuirUmPonto();
    index = index + 1
}


// while