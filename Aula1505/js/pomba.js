// Herança - Inheritance 
// Pomba - Super classe
class Pomba {
    arruia() {
        console.log("PRUUUU"); 
    };
};

// Selvagem - sub classe - herda Pomba
class Selvagem extends Pomba {
    fugir() {
        console.log("Escapei!");
    };
};

const selvagem = new Selvagem();
selvagem.pruu();
selvagem.fugir();

// Doméstica - sub classe - herda Pomba
class Domestic extends Pomba {
    voltar() {
        console.log("Eu voltei!");
    }
};

const domestic = new Domestic();
domestic.pruu();
domestic.voltar();