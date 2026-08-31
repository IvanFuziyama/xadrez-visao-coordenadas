import { arrayLetras, tabuleiro, estadoJogo } from "./variaveis-global.js";
export const desenvolverCasas = e => {
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
                casa.addEventListener('click', e =>{
                    if(!estadoJogo.iniciado) return;
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
}
