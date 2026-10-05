import { botaoIniciar, estadoJogo, tabuleiro, select_cor, checkbox, min, seg } from "./variaveis-global.js";

export const resetarJogo = e =>{
    const botaoResetar = document.querySelector('.btn-resetar');
    botaoResetar.addEventListener('click', () =>{
        clearInterval(estadoJogo.intervalo);
        estadoJogo.intervalo = null;
        estadoJogo.iniciado = false;

        select_cor.disabled = false;
        select_cor.style.cursor = '';
        checkbox.disabled = false;
        checkbox.style.cursor = '';
        min.disabled = false;
        seg.disabled = false;
        min.value = '';
        seg.value = '';

        botaoIniciar.disabled = false;
        botaoIniciar.style.opacity = '';
        botaoIniciar.style.cursor = '';

        tabuleiro.classList.remove('jogo-iniciado');
        const coordenada = document.querySelector('.coordenadaCentral');
        if (coordenada) coordenada.remove();
    });
}
