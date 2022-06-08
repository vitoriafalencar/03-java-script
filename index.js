


const btn = document.getElementById('calcular'); 

const resultado = document.getElementById('resultado'); 
 
btn.addEventListener("click",calcular);

function calcular(){
    const operacao = document.getElementById('operacao').value; 
	resultado.innerHTML = 'resultado';
    const valor01 = parseInt(document.getElementById('valor01').value);
    const valor02 = parseInt(document.getElementById('valor02').value);
    if (operacao==='adicao'){
        resultado.innerHTML += ` ${valor01 + valor02}`;
        console.log(valor01 + valor02);
    } else if (operacao==='multiplicacao'){
        resultado.innerHTML += ` ${valor01 * valor02}`;
        console.log(valor01 * valor02); 
    }
    else if (operacao==='subtracao'){
        resultado.innerHTML += ` ${valor01 - valor02}`;
        console.log(valor01 - valor02); 
    }
    else{
        resultado.innerHTML += ` ${valor01 / valor02}`;
        console.log(valor01 / valor02)
    
    }
    console.log(operacao)
}


