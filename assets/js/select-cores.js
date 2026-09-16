import { tabuleiro } from "./variaveis-global.js";
export const alterarOrdem = e =>{
        const select_cor = document.querySelector('.select-cor');
                select_cor.addEventListener('change', e =>{
                if(select_cor.value === 'Branco') {
                    tabuleiro.style.flexDirection = 'row';
                    colunas.forEach(col => {
                        col.style.flexDirection = 'column';
                    });

                } else if(select_cor.value === 'Preto') {
                    tabuleiro.style.flexDirection = 'row-reverse';
                    colunas.forEach(col => {
                        col.style.flexDirection = 'column-reverse';
                    });
                }
            })    
        }