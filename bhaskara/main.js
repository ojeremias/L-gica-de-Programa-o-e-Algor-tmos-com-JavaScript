function formula()
{
    let valorA = document.getElementById("valorA");
    let valorB = document.getElementById("valorB");
    let valorC = document.getElementById("valorC");
    let valorFinal = document.getElementById("valorFinal");
    let x1 = document.getElementById("x1")
    let x2 = document.getElementById("x2")

    let a = Number(valorA.value);
    let b = Number(valorB.value);
    let c = Number(valorC.value);
    let delta = ((b*b) - (4*a*c));

    if(delta >= 0)
    {
        valorFinal.textContent = "Valor de delta é: " + delta;
        
        let bhaskara1 = (-b) + (Math.sqrt(delta)) / 2*a;
        let bhaskara2 = (-b) - (Math.sqrt(delta)) / 2*a;
        
        x1.textContent = "x1 é igual a: " + bhaskara1;
        x2.textContent = "x2 é igual a: " + bhaskara2;
    }
    else
    {
        valorFinal.textContent = "Delta é negativo, não há como proceder o calculo"
    }

    
}

let btResposta = document.getElementById("btResposta");
btResposta.addEventListener("click", formula);

