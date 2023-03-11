function mostrarDados()
{
    var inVeiculo = document.getElementById("inVeiculo");
    var inPreco = document.getElementById("inPreco");
    var outVeiculo = document.getElementById("outVeiculo");
    var outEntrada = document.getElementById("outEntrada");
    var outParcela = document.getElementById("outParcela");

    var veiculo = inVeiculo.value;
    var preco = Number(inPreco.valeu)
    var entrada = preco * 0.50
    var parcela = (preco * 0.50) / 12

    outVeiculo.textContent = "Promoção " + veiculo;
    outEntrada.textContent = "Entrada: " + entrada.toFixed(2);
    outParcela.textContent = "+12x de R$: " + parcela.toFixed(2);
}

    var btMostrar = document.getElementById("btMostrar");
    btMostrar.addEventListener("click", mostrarDados)