//função para definar aprovação ou reprovação através de comparadores lógicos.

function aprovadoReprovado(nota, falta) {

    if ((nota >= 7) && (falta <= 25)) {

        alert(`PARABÉNS, sua nota final foi ${nota}, suas faltas foram ${falta} e portanto você está APROVADO!!!`);

    } else {

        alert(`Sua nota final foi ${nota} e suas faltas atingiram a quantidade de ${falta}. Dessa forma você foi REPROVADO!!!`);

    }
}

/*Poderia utilizar aqui nas funções qualquer outro operador lógico da sequência abaixo:

    * ou      ||
    * E       &&
    * negação  !

*/