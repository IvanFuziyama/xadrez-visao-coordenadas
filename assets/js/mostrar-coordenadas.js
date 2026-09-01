import { apresentarCoordenadas } from "./coordenadas.js";
export const mostrarCoordenadas = () => {
    const checkbox = document.querySelector('.checkbox-mostrar-cod');
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