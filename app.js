function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    let qtdIntervalo = (ate-de);

    console.log('Quantidade: '+ quantidade);
    console.log('Valor Inicial: '+ de);
    console.log('Valor Final: '+ ate);
    console.log('Quantidade Intervalo: ' + qtdIntervalo);

    if (de > ate){
        alert(`O valor inicial ${de} é maior que o valor final ${ate}! \n O Jogo será reiniciado!`);
        reiniciar();
    } else if (qtdIntervalo < quantidade) {
        alert(`O intervalo de números a sortear (${qtdIntervalo}) é menor do que a quantidade ${quantidade} informada a sortear! \n O Jogo será reiniciado!`);
        reiniciar();
        
    } else {
    
        let numero;
        let sorteados = [];

        for (let i = 0; i < quantidade; i++){
            numero = obterNumeroAleatorio(de, ate);

            while(sorteados.includes(numero)){
                numero = obterNumeroAleatorio(de, ate);
            }

        sorteados.push(numero);
        alterarStatusBotao();
        }

        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`
        
    }
}

function obterNumeroAleatorio(min, max){
    
    return Math.floor(Math.random() * (max - min +1)) + min;

}

function alterarStatusBotao(){
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar(){
    document.getElementById('quantidade').value='';
    document.getElementById('de').value='';
    document.getElementById('ate').value='';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum número sorteado.</label>'
    alterarStatusBotao();

}