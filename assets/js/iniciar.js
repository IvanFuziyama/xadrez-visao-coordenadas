import { arrayLetras, arrayNumeros } from "./variaveis-global.js";
export const iniciarJogo = e =>{
    const tabuleiro = document.querySelector('.card-tabuleiro');
    const botaoIniciar = document.querySelector('.btn-comecar');
    const coordenadaExibida = document.createElement('div');
    botaoIniciar.addEventListener('click', e =>{
        const numAleatorio = arrayNumeros[Math.floor(Math.random() * arrayNumeros.length)];
        const letraAleatorio = arrayLetras[Math.floor(Math.random() * arrayLetras.length)];
        const coordenadaCombinacao = letraAleatorio + numAleatorio;
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
        
    })
}