function promocao()
{
    let inMedicamento = document.getElementById("inMedicamento");
    let inPreco = document.getElementById("inPreco");
    let outPromocao1 = document.getElementById("outPromocao1");
    let outPromocao2 = document.getElementById("outPromocao2");
    
    let medicamento = inMedicamento.value;
    let preco = Number(Math.floor(inPreco.value));
    let promocao = preco.toFixed(0)
    
    outPromocao1.textContent = "Promoção de " + medicamento
    outPromocao2.textContent = "Leve 2 por apenas R$: " + promocao
}
    let btMostrar = document.getElementById("btMostrar");
    btMostrar.addEventListener("click", promocao)