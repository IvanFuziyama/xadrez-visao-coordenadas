import { tabuleiro, botaoIniciar, coordenadaCombinacao } from "./variaveis-global.js";
export const exibirCoordenada = e =>{
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
    botaoIniciar.disabled = true;
    botaoIniciar.style.opacity = '70%';
    botaoIniciar.style.cursor = 'inherit';
}