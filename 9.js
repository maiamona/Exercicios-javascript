


function btn() {
    let text = document.querySelector('.text').value;
let resultado = document.querySelector('#res');

    
function texto(msg) {
    let res;
    // console.log(msg.length);
    if (msg.length > 10) {
     res = 'Texto muito longo';   
    } else{
        res = 'Texto dentro do limite';   
    }
    return res;
    
}
resultado.innerHTML = texto(text);
}