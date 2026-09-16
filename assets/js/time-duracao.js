import { min, seg, estadoJogo } from "./variaveis-global.js"

seg.addEventListener('input', () => {
    if (Number(seg.value) > 59)seg.value = 59;
    if(Number(seg.value) <0)seg.value = 0;
});
min.addEventListener('input', () => {
    if (Number(min.value) > 59)min.value = 59;
    if(Number(min.value) <0)min.value=0;
});
export const tempo = e =>{
    let valor_minutos = Number(min.value);
    let valor_segundos = Number(seg.value);
    let intervalo;
    intervalo = setInterval(() =>{
        if(valor_segundos > 0)valor_segundos--;
        else if(valor_segundos <= 0){
            valor_minutos--;
            valor_segundos=59;
        }
        min.value = valor_minutos;
        seg.value = valor_segundos;

        if (valor_minutos === 0 && valor_segundos === 0) {
            clearInterval(intervalo);
            estadoJogo.iniciado=false;
            const desabilitar_coordenada = document.querySelector('.coordenadaCentral');
            desabilitar_coordenada.innerHTML = 'FIM'
            desabilitar_coordenada.style.color = 'red';
        }
    },1000)
}