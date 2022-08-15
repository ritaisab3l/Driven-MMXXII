let prato;

function selecionarprato (seletor) {
    
    const botao = document.querySelector('.selecao1 .selecionado');
    if (botao !== null) {
        botao.classList.remove('selecionado');
    }



    seletor.classList.add('selecionado');
    prato = seletor.innerHTML; 
    fecharpedido();
}

let bebida;

function selecionarbebida (seletor) {

    const botao = document.querySelector('.selecao2 .selecionado');
    if (botao !== null) {
        botao.classList.remove('selecionado');
    }

    
    seletor.classList.add('selecionado');
    bebida = seletor.innerHTML;
    fecharpedido();

}

let sobremesa;

function selecionarsobremesa (seletor) {
    
    const botao = document.querySelector('.selecao3 .selecionado');
    if (botao !== null) {
        botao.classList.remove('selecionado');
    }

    
    seletor.classList.add('selecionado');
    sobremesa = seletor.innerHTML;
    fecharpedido();
}

function fecharpedido() {
    if (prato !== undefined) {

        if (bebida !== undefined){

        }

        if (sobremesa !== undefined) {
            const comanda = document.querySelector('.pedido');
            comanda.classList.add('green');
            comanda.innerHTML = 'Fechar pedido'
            let mensagem = `Olá, gostaria de fazer o pedido:\n- Prato: Frango Yin Yang\n- Bebida: Coquinha Gelada\n- Sobremesa: Pudim\nTotal: R$ 27.70`;
            let encodeuri = encodeURIComponent(mensagem);
            let whats = 'https://wa.me/5583981931605?text='+encodeuri
            window.open(whats); 
        }
    }

    
}

/*let mensagem = `Olá, gostaria de fazer o pedido:\n- Prato: Frango Yin Yang\n- Bebida: Coquinha Gelada\n- Sobremesa: Pudim\nTotal: R$ 27.70`;
            let encodeuri = encodeURIComponent(mensagem);
            let whats = 'https://wa.me/5583981931605?text='+encodeuri
            window.location.href = whats; */