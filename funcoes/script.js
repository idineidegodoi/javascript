//funções
function escreverTexto(){ //função que não passa parâmetros.
    //função que escreve um texto direto na tela através de um alerta.
    let texto = 'Estou escrevendo texto em JavaScript!!!';
    return texto;
} 

//função com parâmtros
/*As funções de operador de atribuição conjugadas com operadores lógicos(soma, subtração, etc..
    evitam linhas de código, deixando o código mais enxuto 
    e eficiente)*/

function operadorSoma(n1, n2){/*função de operador que atribui e soma.
sem a necessidade de declarar a variável dentro da função*/
    n1 += n2;//operador de soma com atribuição
    return n1;

}

function operadorSubtracao(num1, num2){//função com operador que atribui e subtrai.
    num1 -= num2;//operador de subtração com atribuição
    return num1;

}

function operadorMultiplica(mult1, mult2){
    mult1 *= mult2;//operador de multiplicação com atribuição
    return mult1;
}