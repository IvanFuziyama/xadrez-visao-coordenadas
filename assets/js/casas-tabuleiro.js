import { exibirCoordenada } from "./exibir-coordenada-random.js";
import { arrayLetras, tabuleiro, estadoJogo, coordenadaAtual } from "./variaveis-global.js";
export const desenvolverCasas = e => {
    const recorde = document.querySelector('.pontuacao-recorde');
    const historico = document.querySelector('.pontuacao-historico');
    recorde.innerHTML += estadoJogo.pontuacao;
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
                casa.addEventListener('click', e =>{
                    const caixa = document.createElement('div')
                    caixa.classList.add('caixa-historico');
                    const correto = document.createElement('img');
                    const incorreto = document.createElement('img');
                    correto.src ='./assets/img/icon-correto.png';
                    incorreto.src='./assets/img/icon-incorreto.png';
                    correto.style.background = 'green';
                    correto.style.padding = '2px'
                    incorreto.style.background = 'red';
                    incorreto.style.padding = '2px'
                    if(!estadoJogo.iniciado) return;
                    const numero = 8 - posicao;
                    const letra = arrayLetras[bloco]; //Pega o elemento da arrayLetras que está na posição indicada por bloco
                    const coordenadaCombinacaoSelecionada = letra + numero
                    caixa.innerHTML += coordenadaCombinacaoSelecionada + ' ';
                    if(coordenadaCombinacaoSelecionada === coordenadaAtual){
                        caixa.appendChild(correto);
                        estadoJogo.pontuacao++;
                        recorde.innerHTML = estadoJogo.pontuacao;
                    }else{ 
                        caixa.appendChild(incorreto);
                    }
                    historico.appendChild(caixa);
                    exibirCoordenada();
                })      
            }
        col.classList.add('col')
        tabuleiro.appendChild(col)
    }
}
