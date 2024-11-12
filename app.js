function nao() {
    exibirTextoNaTela ('h1', 'RESPOSTA MAIS DO QUE ERRADA, ERRADISSIMA, ÊROOOOOOOOOU!!!!!!!!!, TÁ DE BRINCADEIRA NÉ CHAPOLA')
}
function talvez() {
    exibirTextoNaTela ('h1', 'A RESPOTA AINDA NÃO É ESSA MINHA CHAPOLA, QUER ME DIZER ALGUMA COISA?!!!!!')
}
function sim() {
    exibirTextoNaTela ('h1', 'RESPOSTA QUAAAAAAAAASE CORRETA MINHA CHAPOLA <3 !!!!!')
}
let chute;
let senha = 01;
function simcorreto() {
while (chute != senha) {
    chute = prompt ('Digite a senha: (A senha é o dia do nosso aniversário de namoro)');
    if (chute != senha) {
        exibirTextoNaTela ('h1', 'SENHA INCORRETA, TENTE NOVAMENTE!!! TÁ NERVOSA MEU AMOR??');
        break
    } else {
        exibirTextoNaTela ('h1', 'VOU SER O HOMEM MAIS FELIZ DO MUNDO AO SEU LADO PARA A VIDA TODA <3')
    } 

    }
}

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Aceita casar comigo Eliza? <3');


