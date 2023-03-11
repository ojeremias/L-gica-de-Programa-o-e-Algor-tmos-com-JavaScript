function triangulo(){
    var inLadoA = document.getElementById("inLadoA")
    var inLadoB = document.getElementById("inLadoB")
    var inLadoC = document.getElementById("inLadoC")
    var outResposta = document.getElementById("outResposta")

    let lado1 = Number(inLadoA.value);
    let lado2 = Number(inLadoB.value);
    let lado3 = Number(inLadoC.value);

    if(lado1 == lado2 && lado2 == lado3 && lado3 == lado1){
        outResposta.textContent = "As medidas são semelhantes, o triângulo é equilátero"
        return;
    }else if(lado1 === lado2 || lado2 === lado3 || lado3 === lado1){
        outResposta.textContent = "Duas medidas são semelhantes, o triângulo é isósceles"
        return;
    }else{
        outResposta.textContent = "Todas as medidas são distantas, o triângulo é escaleno"
        return;
    }
}
var btMostrar = document.getElementById("btMostrar");
btMostrar.addEventListener("click", triangulo)