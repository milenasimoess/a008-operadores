const operacao1 = 5 > 20 && 5 < 2
const operacao2 = 5 === 5 || 5 === "5"
const operacao3 = !(20 > 50)
const operacao4 = !(20 > 50 || 50 > 60)

console.log(operacao1); //imprime false, porque 5 não é maior que 20 e também não é menor que 2.
console.log(operacao2); //imprime true, porque é um ou outro.
console.log(operacao3); // imprime true, porque 20 não é maior que 50 mas o símbolo de negação muda o resultado final.
console.log(operacao4); //imprime true, porque 20 não é maior que 50 && 50 não é maior que 60 mas o sinal da negação muda o resultado final.
