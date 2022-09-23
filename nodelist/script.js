document.getElementById("exemplo-um").innerHTML = "teste do exemplo 1";

function exemploDois(){
//armazena os valores recuperados numa variável
   let nomeElemento = document.getElementsByName("curso");
   console.log(nomeElemento);//faz o teste no console para ver se recuperou as informações

   //Tamanho do Nodelist
   console.log(`Tamanho do Nodelist ${nomeElemento.length}`);

   //fazendo a leitura das posições recuperadas
  console.log(`O valor da posição 0 é: ${nomeElemento[0]['value']}`);
  console.log(`O valor da posição 1 é: ${nomeElemento[1]['value']}`);
  console.log(`O valor da posição 2 é: ${nomeElemento[2]['value']}`);


//fazendo a leitura e pegando todos os campos recuperados de forma dinâmica.
/*
dessa maneira eu não preciso ficar recuperando os dado um a um
conforme foi feito no código acima
*/
  for( let i = 0; i < nomeElemento.length; ++i){

    console.log(nomeElemento[i]['value']);

  }

}

function exemploTres(){
//armazena os valores recuperados numa variável
    let nomeTag = document.getElementsByTagName("span");
    console.log(nomeTag);//faz o teste no console para ver se recuperou as informações

    //Tamanho do Nodelist
   console.log(`Tamanho do HTML Colection ${nomeTag.length}`);

   //fazendo a leitura das posições recuperadas
  console.log(`O valor da posição 0 é: ${nomeTag[0]['innerHTML']}`);
  console.log(`O valor da posição 1 é: ${nomeTag[1]['innerHTML']}`);
  console.log(`O valor da posição 2 é: ${nomeTag[2]['innerHTML']}`);


//fazendo a leitura e pegando todos os campos recuperados de forma dinâmica.
/*
dessa maneira eu não preciso ficar recuperando os dados um a um
conforme foi feito no código acima
*/
  for( let i = 0; i < nomeTag.length; ++i){

    console.log(nomeTag[i]['innerHTML']);

  }
}

function exemploQuatro(){
//armazena os valores recuperados numa variável
    let nomeTagLista = document.getElementsByTagName("li");
    console.log(nomeTagLista);//faz o teste no console para ver se recuperou as informações

      //Tamanho do Nodelist
   console.log(`Tamanho do Tag li ${nomeTagLista.length}`);

   //fazendo a leitura das posições recuperadas
  console.log(`O valor da posição 0 é: ${nomeTagLista[0]['innerHTML']}`);
  console.log(`O valor da posição 1 é: ${nomeTagLista[1]['innerHTML']}`);
  console.log(`O valor da posição 2 é: ${nomeTagLista[2]['innerHTML']}`);
  console.log(`O valor da posição 3 é: ${nomeTagLista[3]['innerHTML']}`);
  console.log(`O valor da posição 4 é: ${nomeTagLista[4]['innerHTML']}`);
  console.log(`O valor da posição 5 é: ${nomeTagLista[5]['innerHTML']}`);


//fazendo a leitura e pegando todos os campos recuperados de forma dinâmica.
/*
dessa maneira eu não preciso ficar recuperando os dados um a um
conforme foi feito no código acima
*/
  for( let i = 0; i < nomeTagLista.length; ++i){

    console.log(nomeTagLista[i]['innerHTML']);

  }

}

function exemploCinco(){

    let nomeClasse = document.getElementsByClassName("produto");
    console.log(nomeClasse);

    
    //Tamanho do Nodelist
   console.log(`Tamanho do HTML Colection ${nomeClasse.length}`);

   //fazendo a leitura das posições recuperadas
  console.log(`O valor da posição 0 é: ${nomeClasse[0]['innerHTML']}`);
  console.log(`O valor da posição 1 é: ${nomeClasse[1]['innerHTML']}`);
  console.log(`O valor da posição 2 é: ${nomeClasse[2]['innerHTML']}`);
  console.log(`O valor da posição 3 é: ${nomeClasse[3]['innerHTML']}`);
  console.log(`O valor da posição 4 é: ${nomeClasse[4]['innerHTML']}`);


//fazendo a leitura e pegando todos os campos recuperados de forma dinâmica.
/*
dessa maneira eu não preciso ficar recuperando os dados um a um
conforme foi feito no código acima
*/
  for( let i = 0; i < nomeClasse.length; ++i){

    console.log(nomeClasse[i]['innerHTML']);

  }

}