






function btn() {
    let DB = document.querySelector('.db').value;
let resultado = document.querySelector('#res');

    
let nomes = ['Jane','Maiamona', 'Bastos', 'Menito', 'Mixa', 'Lucy'];
console.log(nomes);
function onjArray(nome) {
    let res;
    if (nomes.includes(nome)) {
        res = `${nome} existe no array e esta no indice ${nomes.indexOf(nome)}`;
     } else{
        res = `${nome} não existe no array`;
     }
    return res;
}

resultado.innerHTML = onjArray(DB);
}