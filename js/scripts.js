//Filtrar por tipo de Discussão
// *** VALIDAR ***
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

// --- PERGUNTA ---
// *** VALIDAR ***
function Pergunta(){
    // *** CONFIRMAR TODOS OS CAMPOS NECESSÁRIOS! ***
    var tema;
    var pergunta;
    var data;

    this.getTema = function(){
        return tema;
    }

    this.getPergunta = function(){
        return pergunta;
    }

    this.getData = function(){
        return data;
    }

    this.setTema = function (value){
        tema = value;
    }

    this.setPergunta = function (value){
        pergunta = value;
    }

    this.setData = function (value){
        data = value;
    }

    this.salvar = function(){
   
        setData() = now();

        //Salvar no DB

        alert("Dados cadastrados.")
    }

    this.buscar = function(){

        //se encontrou
        return true;   
    }

}

//Botão Enviar - Interface Criar Tópico
// *** VALIDAR ***
function enviar(){
    var tema;
    var pergunta;

    tema = document.getElementById('tema').value;
    pergunta = document.getElementById('pergunta').value;
    
    if(tema != null && pergunta != null){
        novaPergunta = new Pergunta();

        novaPergunta.setTema(tema);
        novaPergunta.setPergunta(pergunta);
    
        novaPergunta.salvar();
    }
    else if(tema == null || pergunta == null){
        alert("Verifique se todos campos foram preenchidos corretamente.");
    }
}

//Link Editar - Interface Expandido e Editar.
// *** VALIDAR ***
function editar(){
    var encontrar;

    //Identificar a pergunta.
    editarPergunta = new Pergunta();
    //editarPergunta.getidUsuario();
    editarPergunta.getTema();
    editarPergunta.getPergunta();
    encontrar = editarPergunta.buscar();

    if(encontrar == true){
        var tema;
        var pergunta;
    
        tema = document.getElementById('tema').value;
        pergunta = document.getElementById('pergunta').value;

        editarPergunta.salvar();
    }
    else {
        alert("Erro ao tentar editar.");
    }
}

function excluir(){
    var encontrar;

    //Identificar a pergunta.
    excluirPergunta = new Pergunta();
    //excluirPergunta.getidUsuario();
    excluirPergunta.getTema();
    excluirPergunta.getPergunta();
    encontrar = editarPergunta.buscar();

    if(encontrar == true){

        excluirPergunta.excluir();
    }
    else {
        alert("Erro ao tentar excluir.");
    }
}

//Expandir Pergunta
// *** VALIDAR ***
function expandir(){
    if(getTema().lenght() > 30){
        //mostra apenas 30 caracteres.
        //Ativar Leia Mais..
    }    
    else{
        //Inativar Leia Mais..
    }
}

//Resposta
// *** VALIDAR ***
function Resposta(){
    // *** CONFIRMAR TODOS OS CAMPOS NECESSÁRIOS! ***
    var idPergunta;
    var resposta;
    var data;

    this.getIdPergunta = function(){
        return idPergunta;
    }

    this.getResposta = function(){
        return resposta;
    }

    this.getData = function(){
        return data;
    }

    this.setIdPergunta = function (value){
        idPergunta = value;
    }

    this.setResposta = function (value){
        resposta = value;
    }

    this.setData = function (value){
        data = value;
    }
}