// crição de objeto de forma literal.

let cadeira = {
    altura: 117,
    peso: 25,
    profundidade: 200
};

document.write(`A altura da cadeira é: ${cadeira.altura}<br><hr>`);

//criação de objeto não literal

let mesa = new Object();
    mesa.altura = 17;
    mesa.peso = 50;
    mesa.cor = 'preta'

document.write(`A cor da mesa é: ${mesa.cor} <br><hr>`);