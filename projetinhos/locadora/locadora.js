function ConverterDuracao()
{
    //Atribuindo as variáveis o id dos elementos no HTML
    var inTitulo = document.getElementById("inTitulo");
    var inDuracao = document.getElementById("inDuracao");
    var outTitulo = document.getElementById("outTitulo");
    var outResposta = document.getElementById("outResposta");
    
    //Variáveis recebendo o valor dos elementos no HTML
    var titulo = inTitulo.value;
    var duracao = Number(inDuracao.value);
    
    //Variáveis recebendo valores através de operações matemáticas
    var horas = Math.floor(duracao/60); //Math.floor arredonda para baixo
    var minutos = (duracao % 60);
    
    //Variáveis recebendo o valor dos elementos no HTML
    outTitulo.textContent = titulo
    outResposta.textContent = horas + "horas(s) e " + minutos + " minutos(s)"
}
    //Variáveis recebendo o valor dos elementos no HTML
    var btConverter = document.getElementById("btConverter");
    //Ao ser clicada, será ativada a função na linha 1
    btConverter.addEventListener("click", ConverterDuracao)