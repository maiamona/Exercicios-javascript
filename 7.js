


function btn() {
    let idade = document.querySelector('.idade');
let resultado = document.querySelector('#res');


    
function aluno(idade) {
    let res;
    if (idade.value >= 18) {
     res = `foste admitida porque tens ${idade.value}`  
    } else{
        res = `Não foste admitida porque tens ${idade.value}` 
    }
    return res;
}

resultado.innerHTML = aluno(idade);
}