import redline from 'readline-sync'

let nome;
let idade;
let primeiraDoacao;

nome = redline.question("Digite o nome do doador: ")
idade = redline.question("Digite a idade do doador: ")
primeiraDoacao = redline.question("Primeira doacao de sangue? s/n: ")

if(idade >= 60 && idade <= 69 && primeiraDoacao == "s"){
    console.log(`${nome} Esta apto para doar sangue!`)
} else if (idade >= 60 && idade <= 69 && primeiraDoacao == "n"){
    console.log(`${nome} Nao esta apto para doar sangue!`)
} else if (idade >= 18 && idade <= 69){
    console.log(`${nome} Esta apto para doar sangue!`)
} else if (idade > 69 && primeiraDoacao == "s" || primeiraDoacao == "n"){
    console.log(`${nome} Nao esta apto para doar sangue!`)
} else if (idade < 18){
    console.log(`${nome} Esta inapto para doar sangue!`)
}