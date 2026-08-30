export const desenvolverCasas = e => {
    const tabuleiro = document.querySelector('.card-tabuleiro');
    const arrayLetras = ['a','b','c','d','e','f','g','h'];
    const arrayNumeros = [1,2,3,4,5,6,7,8];
    for(let bloco=0;bloco<8;bloco++){
        const col = document.createElement('div');
        for(let posicao=0;posicao<8;posicao++){
            const casa = document.createElement('div');
            if(bloco % 2 === 0){
                if(posicao % 2 === 0) casa.classList.add('casa', 'branco');
                else casa.classList.add('casa', 'preto');
            }else{ 
                if(posicao % 2 === 0) casa.classList.add('casa', 'preto');
                else casa.classList.add('casa', 'branco');
            }
            col.appendChild(casa);
            const clicarCasas = e =>{
                const historico = document.querySelector('.pontuacao-historico')
                casa.style.cursor = 'pointer';
                casa.addEventListener('click', e =>{
                    const numero = 8 - posicao;
                    const letra = arrayLetras[bloco]; //Pega o elemento da arrayLetras que está na posição indicada por bloco
                    historico.innerHTML += `${letra}${numero} `;
                })
            }

            clicarCasas();
        }
        col.classList.add('col')
        tabuleiro.appendChild(col)
    }
    const coordenadasRandom = e =>{
        let numAleatorio = arrayNumeros[Math.floor(Math.random() * arrayNumeros.length)];
        let letraAleatorio = arrayLetras[Math.floor(Math.random() * arrayLetras.length)];
        let coordenadaCombinacao = letraAleatorio + numAleatorio;
        const coordenadaExibida = document.createElement('div');
        coordenadaExibida.textContent = coordenadaCombinacao;
        tabuleiro.appendChild(coordenadaExibida);
        coordenadaExibida.classList.add('coordenadaCentral')
        coordenadaExibida.style.fontSize = '130px';
        coordenadaExibida.style.textShadow = '2px 2px 2px black'
        coordenadaExibida.style.color = 'white';
        coordenadaExibida.style.userSelect = 'none';
        coordenadaExibida.style.pointerEvents = 'none';
        console.log(coordenadaCombinacao);
            }
        coordenadasRandom();
}
