import { exibirCoordenada } from "./exibir-coordenada-random.js"
import { botaoIniciar, estadoJogo, tabuleiro } from "./variaveis-global.js";
export const iniciarJogo = e =>{
    botaoIniciar.addEventListener('click', e =>{
        estadoJogo.iniciado = true;
        tabuleiro.classList.add('jogo-iniciado')
        exibirCoordenada();
    })
}