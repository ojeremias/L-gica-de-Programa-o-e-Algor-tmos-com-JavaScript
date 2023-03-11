function calcular()
{
    var inQuilo = document.getElementById("inQuilo");
    var inConsumo = document.getElementById("inConsumo");
    var outValor = document.getElementById("outValor");

    var quilo = Number(inQuilo.value)
    var consumo = Number(inConsumo.value)
    var total = (quilo / 1000) * consumo

    outValor.textContent = "Valor a pagar R$: " + total
}

var btCalcular = document.getElementById("btCalcular")
btCalcular.addEventListener("click", calcular)
