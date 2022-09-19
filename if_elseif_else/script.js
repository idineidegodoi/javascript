//função para executar comando que utilize if elseif e else.

function notas(nota){
    if(nota >= 7){
        document.write(`Aprovado: ${nota}`);
    }else if((nota < 7) && (nota > 4)){
        document.write(`Recuperação: ${nota}`);
    }else{
        document.write(`Reprovado: ${nota}`);
    }
}// Esta função não tem return, pois não apresenta valores a retornar, há apenas comparação.