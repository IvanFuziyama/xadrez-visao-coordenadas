export const apresentarCoordenadas = e =>{
    const numeros = document.querySelector('.coordenadasNum');
    const letras = document.querySelector('.coordenadasLetras');
    
    for(let posicaoEsquerdo = 0; posicaoEsquerdo < 8; posicaoEsquerdo++){
        const colEsquerdo = document.createElement('div');
        const arrayNumeros = [8,7,6,5,4,3,2,1];
        colEsquerdo.classList.add('colEsquerdo');
        colEsquerdo.textContent = arrayNumeros[posicaoEsquerdo];
        numeros.append(colEsquerdo);
    }
    for(let posicaoEmbaixo = 0; posicaoEmbaixo < 8; posicaoEmbaixo++){
        const linhaEmbaixo = document.createElement('div');
        const arrayLetras = ['a','b','c','d','e','f','g','h'];
        linhaEmbaixo.classList.add('colEmbaixo')
        linhaEmbaixo.textContent = arrayLetras[posicaoEmbaixo];
        letras.append(linhaEmbaixo);
    }
}