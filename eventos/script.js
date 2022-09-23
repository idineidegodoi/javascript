//função utilizando o evento onclick
function carConteudo(){

    document.getElementById("conteudo").innerHTML = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled ";

}

// função do evento mouseover
function mouseOver(){

    document.getElementById("mouseAlt").innerHTML = "Retire o mouse";

}

//função do evento mouseout
function mouseOut(){
    
    document.getElementById("mouseAlt").innerHTML = "Passe o mouse";
    
}
//função do evento onChange
function converTexto(){

   let nome = document.getElementById("nome");
       nome.value = nome.value.toUpperCase();

}
// função do evento onKeyup para validação de campo senha
function validarSenha(){

  let senha = document.getElementById("senha").value;
      
  if(senha == "" || senha.length <= 5){

    document.getElementById("erroSenha").innerHTML = "<span style='color: red;'>Preencha o campo senha com mínimo 6 caracteres</span>";

  }else{

    document.getElementById("erroSenha").innerHTML = "<span style='color: green;'>Senha válida!!!</span>";

  }

}