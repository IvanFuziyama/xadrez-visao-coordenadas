import { exibirCoordenada } from "./exibir-coordenada-random.js"
import { botaoIniciar, estadoJogo, tabuleiro, select_cor, checkbox, min, seg } from "./variaveis-global.js";
export const iniciarJogo = e =>{
    botaoIniciar.addEventListener('click', e =>{
        estadoJogo.iniciado = true;
        select_cor.disabled = true;
        select_cor.style.cursor = 'initial';
        checkbox.disabled = true;
        checkbox.style.cursor = 'initial';
        min.disabled = true;
        seg.disabled = true;
        checkbox.style.cursor = 'initial';
        tabuleiro.classList.add('jogo-iniciado')
        exibirCoordenada();
    })
}