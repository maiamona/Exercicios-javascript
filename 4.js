function btn() {
    let nome = document.querySelector('.nome');
    let idade = document.querySelector('.idade');
    let boolean = document.querySelector('.boolean');
    let res = document.querySelector('#res')

    
    if (idade.value > 18 && boolean.checked) {
       res.innerHTML = `${nome.value} voce esta abilitado para conduzir`;
    } else  if (idade.value > 18 && !boolean.checked) {
        res.innerHTML = `${nome.value} para conduzires deves passar no exame de condução`;
     } else {
        res.innerHTML = `${nome.value} voce não esta apto para conduzir`;
    }
}