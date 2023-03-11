function calcularPeso()
{
    let inName = document.getElementById("inName");
    let rdMasculino = document.getElementById("rdMasculino");
    let rdFeminino = document.getElementById("rdFeminino");
    let inAltura = document.getElementById("inAltura");
    let btPeso = document.getElementById("btPeso");
    let btLimpar = document.getElementById("btLimpar");
    let outResposta = document.getElementById("outResposta");

    let name = inName.value;
    let masculino = rdMasculino.checked;
    let feminino = rdFeminino.checked;
    let altura = Number(inAltura.value);

    if (name == "" || (masculino == false && feminino == false))
    {
        alert("Por favor, informe o nome e selecione o sexo...")
        inName.focus(); //posiciona o campo de edição inName
        return;
    }
    if (altura == 0 || isNaN(altura))
    {
        alert("Por favor, informar a altura corrretamente...")
        inAltura.focus();
        return;
    }
    if (masculino)
    {
        var peso = 22 * Math.pow(altura, 2) //Math.pow(base, expoente)

    }else
    {
         var peso = 21 * Math.pow(altura, 2)
    }

outResposta.textContent = name + ": Seu peso ideal é " + peso.toFixed(3) + " kg"

}
btPeso.addEventListener("click", calcularPeso);

function limparCampos()
{
    inName.value = "";
    rdMasculino.checked = ""
    rdFeminino.checked = ""
    inAltura.value = ""
    outResposta.textContent = ""
}
btLimpar.addEventListener("click", limparCampos)