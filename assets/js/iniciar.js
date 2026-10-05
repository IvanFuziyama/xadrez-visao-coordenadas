import { exibirCoordenada } from "./exibir-coordenada-random.js"
import { tempo } from "./time-duracao.js";
import { botaoIniciar, estadoJogo, tabuleiro, select_cor, checkbox, min, seg } from "./variaveis-global.js";
export const iniciarJogo = e =>{
    botaoIniciar.addEventListener('click', e =>{
        const totalSegundos = Number(min.value) * 60 + Number(seg.value);
        if (totalSegundos <= 0) {
            alert('Coloque um valor de duração de tempo para jogar!');
            return;
        }
        estadoJogo.iniciado = true;
        select_cor.disabled = true;
        select_cor.style.cursor = 'initial';
        checkbox.disabled = true;
        checkbox.style.cursor = 'initial';
        min.disabled = true;
        seg.disabled = true;
        checkbox.style.cursor = 'initial';
        tabuleiro.classList.add('jogo-iniciado')
        tempo();
        exibirCoordenada();
    })
}