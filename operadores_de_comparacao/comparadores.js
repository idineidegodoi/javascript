//comparando e imprimindo uma comparação entre dois números direto na tela.
//criando uma função para poder retornar na tela através do frontEnd a comparação dos dois números

function compararIgualdade(n1, n2) {

    if (n1 == n2) {
        document.write(`Os números da variável n1 = ${n1} e n2 = ${n2} são iguais.`);
    } else {
        document.write(`Os números da variável n1 = ${n1} e n2 = ${n2} são diferentes.`);
    }

}

//função para comparação de números diferentes.

function compararDiferente(n3, n4) {
    if (n3 != n4) {
        document.write(`Os números da variável n3 = ${n3} e n4 = ${n4}, são diferentes.`);
    } else {
        document.write(`Os números da variável n3 ${n3} e n4 ${n4}, são iguais.`);
    }
}
/*Essas funções podem ser replicadas para qualquer tipo de compparação
Ex: comparação de número maior e menor, etc... */
