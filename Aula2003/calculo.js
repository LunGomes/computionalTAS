function diminuirUmPonto(){
    pv = pv - 1;
}
console.log(pv); // 10 pv

diminuirUmPonto();
console.log(pv); // 9 pv

// estrutura de controle
// for loop
// execute apenas se index for menor do que 10
for (i = 0; i < 10; i++){
    diminuirUmPonto();
}

// teriamos o mesmo resultado fazendo o seguinte if
if (index < 10) { // index == 10 FALSE
    diminuirUmPonto();
    index = index + 1
}