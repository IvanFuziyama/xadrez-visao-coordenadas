import { apresentarCoordenadas } from "./coordenadas.js";
export const mostrarCoordenadas = () => {
    const checkbox = document.querySelector('.checkbox-mostrar-cod');
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            apresentarCoordenadas();
        }else{
            document.querySelector('.coordenadasNum').innerHTML = '';
            document.querySelector('.coordenadasLetras').innerHTML = '';
        }
    });
}