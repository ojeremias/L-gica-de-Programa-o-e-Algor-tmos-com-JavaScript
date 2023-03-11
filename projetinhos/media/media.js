function calculo()
{
    let inAluno = document.getElementById("inAluno");
    let inNota1 = document.getElementById("inNota1");
    let inNota2 = document.getElementById("inNota2");
    let outMedia = document.getElementById("outMedia");
    let outTexto = document.getElementById("outTexto");

    let aluno = inAluno.value;
    let nota1 = Number(inNota1.value);
    let nota2 = Number(inNota2.value);

    let media = (nota1 + nota2) / 2

    outMedia.textContent = "Média das Notas: " + media;

    if(media >= 6)
    {
        outTexto.textContent = "Parabéns " + aluno + "! Você foi aprovado(a)"
        outTexto.style.color = "blue";
    }
    else
    {
        outSituacao.textContent = "Ops " + aluno + "... Você foi reprovado(a)";
        outSituacao.style.color = "red";
    }
}
    let btMostrar = document.getElementById("btMostrar");
    btMostrar.addEventListener("click", calculo) 