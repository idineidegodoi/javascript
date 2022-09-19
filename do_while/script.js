// função para implementar o uso do DO WHILE.

function incrementar(incremento){

    /* A diferença do DO WHILE  para o WHILE, está no fato de o WHILE
    primeiramente comparar para depois executar o código, enquando o DO WHILE, 
    primeiro executa o código e depois ele compara, dessa maneira ele sempre
    vai resultar no mínimo em alguma apresentação, caso tenha atingido a  condição ao passar
    pelo while.*/

    do{

        document.write(`O número a incrementar é: ${incremento} <br>`);

        incremento++;

    }while(incremento <= 10);

}