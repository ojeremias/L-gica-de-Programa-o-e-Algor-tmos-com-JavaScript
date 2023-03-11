
function chinchilas()
{
    var inChinchila = document.getElementById("inChinchila");
    var inAnos = document.getElementById("inAnos");
    var respostaChinchila = document.getElementById("respostaChinchila");

    var chinchilas = Number(inChinchila.value);
    var anos = Number(inAnos.value);
    var anosAcumulador = 0

    for(var i = 1; i <= 5; i++)
    {
        anosAcumulador = anosAcumulador + 1
        respostaChinchila.textContent = anosAcumulador + "°" + " Ano: " + chinchilas * 3 + " Chinchilas"
    }
}

var btMostrar = document.getElementById("btMostrar");
btMostrar.addEventListener("click", chinchilas)