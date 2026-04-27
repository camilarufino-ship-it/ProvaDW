let totalgeral = 0;
const valortotal = document.getElementById('valor-total');
const quantidade = {};

document.querySelectorAll('.btn-mais').forEach(botao => {
    botao.addEventListener('click', () => {

 const precofilme = parseFloat(botao.getAttribute('data-valor'));
        totalgeral += precofilme;
        quantidade[precofilme] = (quantidade[precofilme] || 0) + 1;

        valortotal.innerText = totalgeral.toFixed(2);
    
    
});
});

document.querySelectorAll('.btn-menos').forEach(botao => {
    botao.addEventListener('click', () =>{
    const precofilme = parseFloat(botao.getAttribute('data-valor'));
    
    if (quantidade[precofilme] > 0 ){
 
            totalgeral -= precofilme;
            quantidade[precofilme] -= 1; 
        

    valortotal.innerText = totalgeral.toFixed(2);

        };
    });
});

