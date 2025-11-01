import redline from 'readline-sync'

let animais;
let subfilo;
let classe;
let classeAlimentar;
let escolha;

subfilo = redline.question(`Digite o subfilo `).toLowerCase()
classe = redline.question(`Digite a classe: `).toLowerCase();
classeAlimentar = redline.question(`Digite a classe alimentar: `).toLowerCase();

if(subfilo == "vertebrado" && classe == "ave" && classeAlimentar == "carnivoro"){
    console.log("Aguia");
} else if(subfilo == "vertebrado" && classe == "ave" && classeAlimentar == "onivoro"){
    console.log("Pomba");
} if(subfilo == "vertebrado" && classe == "mamifero" && classeAlimentar == "onivoro"){
    console.log("Homem");
} else if(subfilo == "vertebrado" && classe == "mamifero" && classeAlimentar == "herbivoro"){
    console.log("Vaca");
} if(subfilo == "invertebrado" && classe == "inseto" && classeAlimentar == "hematofago"){
    console.log("Pulga")
} else if(subfilo == "invertebrado" && classe == "inseto" && classeAlimentar == "herbivoro"){
    console.log("Lagarta")
} if(subfilo == "invertebrado" && classe == "anelideo" && classeAlimentar == "hematofago"){
    console.log("Sanguessuga")
} else if(subfilo == "invertebrado" && classe == "anelideo" && classeAlimentar == "onivoro"){
    console.log("Minhoca")
}

