//Filtrar por tipo de Discussão
function filtrarDiscussao(opção){
    if(icone == 1)
    {
    } 
    else if(icone == 2) 
    {
    }
    else if(icone == 3) 
    {
    }
    else if(icone == 4) 
    {
    }
    else if(icone == 5) 
    {
    }
}

//Altera a cor do ícone
function mudarIcone(icone){
    if(icone == 1)
    {
        document.getElementById("icone1").src = "img/materiais.png";
        document.getElementById("icone2").src = "img/academicosOff.png";
        document.getElementById("icone3").src = "img/librasOff.png";
        document.getElementById("icone4").src = "img/pesquisadorOff.png";
        document.getElementById("icone5").src = "img/espacoOff.png";
    } 
    else if(icone == 2) 
    {
        document.getElementById("icone1").src = "img/materiaisOff.png";
        document.getElementById("icone2").src = "img/academicos.png";
        document.getElementById("icone3").src = "img/librasOff.png";
        document.getElementById("icone4").src = "img/pesquisadorOff.png";
        document.getElementById("icone5").src = "img/espacoOff.png";
    }
    else if(icone == 3) 
    {
        document.getElementById("icone1").src = "img/materiaisOff.png";
        document.getElementById("icone2").src = "img/academicosOff.png";
        document.getElementById("icone3").src = "img/libras.png";
        document.getElementById("icone4").src = "img/pesquisadorOff.png";
        document.getElementById("icone5").src = "img/espacoOff.png";
    }
    else if(icone == 4) 
    {
        document.getElementById("icone1").src = "img/materiaisOff.png";
        document.getElementById("icone2").src = "img/academicosOff.png";
        document.getElementById("icone3").src = "img/librasOff.png";
        document.getElementById("icone4").src = "img/pesquisador.png";
        document.getElementById("icone5").src = "img/espacoOff.png";
    }
    else if(icone == 5) 
    {
        document.getElementById("icone1").src = "img/materiaisOff.png";
        document.getElementById("icone2").src = "img/academicosOff.png";
        document.getElementById("icone3").src = "img/librasOff.png";
        document.getElementById("icone4").src = "img/pesquisadorOff.png";
        document.getElementById("icone5").src = "img/espaco.png";
    }
}