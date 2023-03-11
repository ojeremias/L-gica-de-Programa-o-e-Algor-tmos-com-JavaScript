let val = Number(prompt("Quanto custou o jantar?"))
let tax = (val * 0.10)
let total = (val + tax)

console.log("Valor do jantar: " + val.toFixed(2) +"\nTaxa do garçom: " + tax.toFixed(2) + "\nValor à pagar: " + total)


