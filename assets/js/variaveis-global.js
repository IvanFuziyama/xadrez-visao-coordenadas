export const arrayNumeros = [1,2,3,4,5,6,7,8];
export const arrayLetras = ['a','b','c','d','e','f','g','h'];
export const tabuleiro = document.querySelector('.card-tabuleiro');
export const botaoIniciar = document.querySelector('.btn-comecar');
export const estadoJogo = {iniciado: false};
export let coordenadaAtual = '';
export const coordenadaCombinacao = e =>{
    const numAleatorio = arrayNumeros[Math.floor(Math.random() * arrayNumeros.length)];
    const letraAleatorio = arrayLetras[Math.floor(Math.random() * arrayLetras.length)];
    coordenadaAtual = letraAleatorio + numAleatorio;
    return coordenadaAtual;
}
