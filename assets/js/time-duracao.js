import { min, seg } from "./variaveis-global"
export const tempo = e =>{
    let valor_minutos = Number(min.value);
    let valor_segundos = Number(seg.value);
    let intervalo;
    intervalo = setInterval(() =>{
        if(valor_segundos > 0){
            valor_segundos--;
        }else if(valor_segundos <= 0){
            valor_minutos--;
            valor_segundos=59;
        }
    },1000)
}