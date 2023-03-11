let price = Number(prompt("Digite o valor da conta"))
let per = Number(prompt("Quantas pessoas irão pagar?"))

let total = (price/per)

console.log("Valor por cliente: " + total.toFixed(2))