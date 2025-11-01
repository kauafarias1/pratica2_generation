import redline, { setDefaultOptions } from 'readline-sync'


let cargo;
let codigoCargo;
let salario;
let nome;

nome = redline.question("Nome do colaborador: ")
cargo = redline.question("Cargo do colaborador: [1- Gerente] [2- Vendedor] [3- Supervisor] [4- Motorista] [5- Estoquista] [6- Tecnico de TI] ")
salario = redline.questionFloat("Salario: ")

let reajusteSalario

switch(cargo){
case "1":
    cargo = "Gerente";
    reajusteSalario = salario + (salario * 0.10)
    console.log(`O novo salario reajustado é: ${reajusteSalario.toFixed(2)}`)
    break;
case "2": 
    cargo = "Vendedor"
    reajusteSalario = salario + (salario * 0.07)
    console.log(`O novo salario reajustado é: ${reajusteSalario}`)
    break;
    case "3":
    cargo = "Supervisor"
    reajusteSalario = salario + (salario * 0.09)
    console.log(`O novo salario reajustado é: ${reajusteSalario}`)
    case "4":
    cargo = "Motorista"
    reajusteSalario = salario + (salario * 0.06)
    break;
    case "5":
    cargo = "Estoquista"
    reajusteSalario = salario + (salario * 0.05)
    case "6":
    cargo = "Tecnico de TI"
    reajusteSalario = salario + (salario * 0.08)
}
