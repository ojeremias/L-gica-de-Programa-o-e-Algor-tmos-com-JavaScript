function raizQuadrada()
{
    var inNumero = document.getElementById("inputNumero");
    var outRaizQuadrada = document.getElementById("respostaRaizQuadrada")

    var NumeroRaizQuadrada = Number(inNumero.value)

    if(inNumero == "" || isNaN(NumeroRaizQuadrada))
    {
        alert("Informe corretamente o numero");
        inNumero.focus();
        return;
    }

    var raizQuadrada = Math.sqrt(NumeroRaizQuadrada)
    
    if(raizQuadrada == Math.floor(raizQuadrada)) //Math.floor retorna o menor número inteiro entre x. Se 81.9, retornará 81
    {
        outRaizQuadrada.textContent = "Raiz: " + raizQuadrada //mostra a raiz
    }else{
        outRaizQuadrada.textContent = "Não há raiz exata para " + NumeroRaizQuadrada;
    }
}

    var mostrarRaizQuadrada = document.getElementById("btRaiz");
    mostrarRaizQuadrada.addEventListener("click", raizQuadrada);