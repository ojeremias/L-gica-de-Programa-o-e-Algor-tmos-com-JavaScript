function saque()
{
    var valorSaque = document.getElementById("inNumero");
    var outnota100 = document.getElementById("outNota100");
    var outnota50 = document.getElementById("outNota50");
    var outnota10 = document.getElementById("outNota10");

    var saque = Number(valorSaque.value);

    outnota100.textContent = ""
    outnota50.textContent = ""
    outnota10.textContent = ""

    if(saque === 0 || isNaN(saque))
    {
        alert("Informe quanto almeja sacar");
        valorSaque.focus()
        return;
    }

    if(saque % 10 != 0) //MÚLTIPLOS DE 10 DIFERENTE DE 0
    {
        alert("Valor inválido para notas disponíveis (R$ 10, 50, 100)")
        valorSaque.focus();
        return;
    }

    var notasCem = Math.floor(saque / 100);
    var resto = saque % 100

    var notasCinquenta = Math.floor(resto / 50);
    resto = resto % 50;

    var notasDez = Math.floor(resto / 10);

    if(notasCem > 0)
    {
        outnota100.textContent = "Notas de R$ 100: " + notasCem
    }

    if(notasCinquenta > 0)
    {
        outnota50.textContent = "Nota de R$ 50: " + notasCinquenta
    }
    if(notasDez > 0)
    {
        outnota10.textContent = "Notas de R$ 10 " + notasDez
    }
}


var mostrar = document.getElementById("btMostrar");
mostrar.addEventListener("click", saque)