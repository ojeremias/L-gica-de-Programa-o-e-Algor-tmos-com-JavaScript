function calcularFuso()
{

    let inHoraBrasil = document.getElementById("inHora");
    let outHoraFranca = document.getElementById("outResposta")
    
    var horaBrasil = Number(inHoraBrasil.value)

    if(inHoraBrasil.value == "" || isNaN(horaBrasil)) 
    {
        alert("Informe a hora do Brasil corretamente")
        inHoraBrasil.focus() //retorna o foco para o input
        return;
    }

    var horaFranca = horaBrasil + 5 //calculo horário frança

    if(horaFranca > 24)
    {
        horaFranca = horaFranca - 24;
    }

    outHoraFranca.textContent = "Hora na frança: " + horaFranca.toFixed(2);
}

let btResposta = document.getElementById("btResposta")
btResposta.addEventListener("click", calcularFuso)