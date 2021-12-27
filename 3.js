


function btn() {
    let velocidade = document.querySelector('.carro');
let resultado = document.querySelector('#res');

    
    if (velocidade.value > 80) {
       resultado.innerHTML = 'voce esta acima da velocimade permitida por favor abrandar';
    } else if (velocidade.value < 80) {
        resultado.innerHTML = 'es um condutor exemplar';
    }
}

