import redline from 'readline-sync'

let numeroA;
let numeroB;
let numeroC;
let soma;

numeroA = redline.questionInt("Digite o numero A: ")
numeroB = redline.questionInt("Digite o numero B: ")
numeroC = redline.questionInt("Digite o numero C: ")

soma = numeroA + numeroB

if(soma > numeroC){
    console.log("A soma de A + B é maior que C")

    //coloquei um else só pra ter um retorno se não for maior
} else {
    console.log("A soma de A + B é menor que C")
}
