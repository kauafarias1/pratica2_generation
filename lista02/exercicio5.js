import redline from 'readline-sync'

let opcao;
let quantidade;
let valorTotal;

console.log("Produtos:\n1- Cachorro Quente R$10.00un \n2- X-Salada R$15.00un \n3- X-Bacon R$18.00un \n4- Bauru R$12.00un \n5- Refrigerante R$8.00un \n6- Suco de laranja R$13.00un")

opcao = redline.questionInt("\nEscolha o produto: ")
quantidade = redline.questionInt("Escolha a quantidade: ")

switch(opcao){
    case 1:
    valorTotal = quantidade * 10.00;
    console.log(`Valor total: ${valorTotal}`)
    break;
    case 2:
        valorTotal = quantidade * 15.00;
        console.log(`Valor total: ${valorTotal}`)
    break;
    case 3:
        valorTotal = quantidade * 18.00;
        console.log(`Valor total: ${valorTotal}`)
    break;
    case 4:
        valorTotal = quantidade * 12.00;
        console.log(`Valor total: ${valorTotal}`)
    break;
    case 5:
        valorTotal = quantidade * 8.00;
        console.log(`Valor total: ${valorTotal}`)
    break;
    case 6:
        valorTotal = quantidade * 13.00;
        console.log(`Valor total: ${valorTotal}`)
}
