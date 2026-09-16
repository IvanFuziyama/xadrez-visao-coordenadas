import { tabuleiro, select_cor } from "./variaveis-global.js";
export const alterarOrdem = e =>{
        const colunas = document.querySelectorAll('.col');
        const numeros_lateral = document.querySelector('.coordenadasNum')
        const letras_embaixo = document.querySelector('.coordenadasLetras')
                select_cor.addEventListener('change', e =>{
                if(select_cor.value === 'Branco') {
                    tabuleiro.style.flexDirection = 'row';
                    numeros_lateral.style.flexDirection = 'column';
                    letras_embaixo.style.flexDirection = 'row';
                    colunas.forEach(col => {  //o forEach percorre para cada elemento da array
                        col.style.flexDirection = 'column';
                    });

                } else if(select_cor.value === 'Preto') {
                    tabuleiro.style.flexDirection = 'row-reverse';
                    numeros_lateral.style.flexDirection = 'column-reverse';
                    letras_embaixo.style.flexDirection = 'row-reverse';
                    colunas.forEach(col => {
                        col.style.flexDirection = 'column-reverse';
                    });
                }
            })    
        }