//Criando variáveis universais
var numContas = 0;
var valTotal = 0;

//esta varíavel string vai acumular as contas
var resposta = ""

function contaMes()
{
    let inNome = document.getElementById("inNome");
    let inValor = document.getElementById("inValor");
    let outContas = document.getElementById("outContas");
    let outResultadoFinal = document.getElementById("outResultadoFinal");
    /////////////////////////////////////////////////////////////////////////
    let valor = Number(inValor.value)
    let descricao = inNome.value

    if(descricao === "" || isNaN(valor) || valor === "0" || inNome.value === "")
    {
        alert("Um dos campos não foram preenchidos. Faça a gentileza...")
        inNome.focus()
        return;
    }

    numContas++;
    valTotal = valTotal + valor;

    resposta = resposta + descricao + " - R$: " + valor.toFixed(2) + "\n";

    outContas.textContent = resposta + "------------------------------------"

    outResultadoFinal.textContent = numContas + " Conta(s) - Total R$: " + valTotal.toFixed(2);    

    inNome.value = "";
    inValor.value = "";
    inNome.focus();
}

    let btMostrar = document.getElementById("btMostrar")
    btMostrar.addEventListener("click", contaMes)