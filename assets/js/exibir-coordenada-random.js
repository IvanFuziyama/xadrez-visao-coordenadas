import { arrayLetras,arrayNumeros, tabuleiro, botaoIniciar } from "./variaveis-global.js";
export const exibirCoordenada = e =>{
    const numAleatorio = arrayNumeros[Math.floor(Math.random() * arrayNumeros.length)];
    const letraAleatorio = arrayLetras[Math.floor(Math.random() * arrayLetras.length)];
    const coordenadaCombinacao = letraAleatorio + numAleatorio;
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