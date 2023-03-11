function mostrarOla()
{

    var name = document.getElementById("name").valeu;
    document.getElementById("resposta").textContent = "Olá " + name;
}
    
    var mostrar = document.getElementById("btMostrar");
    mostrar.addEventListener("click", mostrarOla);
