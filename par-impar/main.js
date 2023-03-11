function parImpar()
{
    var inNumero = document.getElementById("inNumero")
    var outResposta = document.getElementById("outResposta")

    var valor = Number(inNumero.value)

    if(valor % 2 == 0)
    {
        outResposta.textContent = "o número é par"
    }else
    {
        outResposta.textContent = "o número não é par"
    }
}
var btMostrar = document.getElementById("btMostrar")
btMostrar.addEventListener("click", parImpar)