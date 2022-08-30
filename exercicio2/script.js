let numero1 = Number(prompt("Insira o primeiro número"))
let numero2 = Number(prompt("Insira o segundo número"))
console.log(numero1, numero2)

console.log(`O primeiro número é maior que o segundo?, ${numero1 > numero2}`) //imprime true
console.log(`O primeiro número é igual ao segundo?, ${numero1 === numero2}`) //imprime false
console.log(`O primeiro número é divisível pelo segundo?, ${(numero1 % numero2) === 0}`) //imprime true
console.log(`O segundo número é dividível pelo primeiro?, ${(numero2 % numero1) === 0}`) //imprime true





