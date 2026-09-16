import { apresentarCoordenadas } from "./coordenadas.js";
import { checkbox } from "./variaveis-global.js";
export const mostrarCoordenadas = () => {
    if (checkbox.checked) {
    apresentarCoordenadas();
    }
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            apresentarCoordenadas();
        }else{
            document.querySelector('.coordenadasNum').innerHTML = '';
            document.querySelector('.coordenadasLetras').innerHTML = '';
        }
    });
}   