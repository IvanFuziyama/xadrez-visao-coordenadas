export const desenvolverCasas = e => {
    const tabuleiro = document.querySelector('.card-tabuleiro');
    for(let bloco=0;bloco<8;bloco++){
        const col = document.createElement('div');
        for(let posicao=0;posicao<8;posicao++){
            const casa = document.createElement('div');
            if(bloco % 2 === 0){
                if(posicao % 2 === 0) casa.classList.add('casa', 'branco');
                else casa.classList.add('casa', 'preto');
            }else{ 
                if(posicao % 2 === 0) casa.classList.add('casa', 'preto');
                else casa.classList.add('casa', 'branco');
            }
            col.appendChild(casa);
            const clicarCasas = e =>{
                casa.style.cursor = 'pointer';
                casa.addEventListener('click', e =>{
                    console.log(posicao, bloco);
                })
            }
            clicarCasas();
        }
        col.classList.add('col')
        tabuleiro.appendChild(col)
    }
}
