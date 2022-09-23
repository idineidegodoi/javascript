document.getElementById("exemplo-um").innerHTML = "teste do exemplo 1";

function exemploDois(){
//armazena os valores recuperados numa variável
   let nomeElemento = document.getElementsByName("curso");
   console.log(nomeElemento);//faz o teste no console para ver se recuperou as informações

}

function exemploTres(){
//armazena os valores recuperados numa variável
    let nomeTag = document.getElementsByTagName("span");
    console.log(nomeTag);//faz o teste no console para ver se recuperou as informações
}

function exemploQuatro(){
//armazena os valores recuperados numa variável
    let nomeTagLista = document.getElementsByTagName("li");
    console.log(nomeTagLista);//faz o teste no console para ver se recuperou as informações

}

function exemploCinco(){

    let nomeClasse = document.getElementsByClassName("produto");
    console.log(nomeClasse);

}