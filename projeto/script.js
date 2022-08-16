
let produto1;
let valor1;


function selecionarprato (seletor) {
    
    const botao = document.querySelector('.selecao1 .selecionado');
    if (botao !== null) {
        botao.classList.remove('selecionado');
    }



    seletor.classList.add('selecionado');
    produto1 = seletor.querySelector('.item').innerHTML;
    valor1 = seletor.querySelector('.money').innerHTML;
    
    fecharpedido();
}

let produto2;
let valor2;

function selecionarbebida (seletor1) {

    const botao = document.querySelector('.selecao2 .selecionado');
    if (botao !== null) {
        botao.classList.remove('selecionado');
    }

    
    seletor1.classList.add('selecionado');
    produto2 = seletor1.querySelector('.item').innerHTML;
    valor2 = seletor1.querySelector('.money').innerHTML;
    
    fecharpedido();

}

let produto3;
let valor3;

function selecionarsobremesa (seletor2) {
    
    const botao = document.querySelector('.selecao3 .selecionado');
    if (botao !== null) {
        botao.classList.remove('selecionado');
    }

    
    seletor2.classList.add('selecionado');
    produto3 = seletor2.querySelector('.item').innerHTML;
    valor3 = seletor2.querySelector('.money').innerHTML;
    
    fecharpedido();
}

function fecharpedido() {
    if (produto1 !== undefined) {

        if (produto2 !== undefined){

        }

        if (produto3 !== undefined) {
            const comanda = document.querySelector('.pedido');
            comanda.classList.add('green');
            comanda.innerHTML = 'Fechar pedido'
            valor1 = valor1.replace("R$","");
            valor1 = valor1.replace(",",".");
            valor2 = valor2.replace("R$","");
            valor2 = valor2.replace(",",".");
            valor3 = valor3.replace("R$","");
            valor3 = valor3.replace(",",".");
            const total = Number(valor1) + Number(valor2) + Number(valor3);
            let mensagem = `Olá, gostaria de fazer o pedido:\n- Prato: ${produto1}\n- Bebida: ${produto2}\n- Sobremesa: ${produto3}\nTotal: R$ ${total}`;
            let encodeuri = encodeURIComponent(mensagem);
            let whats = 'https://wa.me/5583981931605?text='+encodeuri
            window.open(whats); 
        }
    }

    
}

