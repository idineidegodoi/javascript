// função que vai executar a funcionalidade SWITCH.
function caso(tipo){
    switch(tipo){
        case 1:
            document.write('Apartamento!');
            break;
        case 2:
            document.write('Casa');
            break;
        case 3:
            document.write('Sala comercial');
            break;
        case 4: 
            document.write('Sobrado');
            break;
        default:
            document.write('A chave não corresponde a nenhum empreendimento.');
    }
}