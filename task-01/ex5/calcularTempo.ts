export default function calcularTempo(segundos) {
    if(isNaN(segundos)){
        throw new Error('Operação inválida!')
    }
    const dias = Math.floor(segundos / 86400);
    segundos %= 86400;
    const horas = Math.floor(segundos / 3600);
    segundos %= 3600;
    const minutos = Math.floor(segundos / 60);
    const segundosFinais = segundos % 60;

    return `Em ${segundos} segundos temos: ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundosFinais} segundos.`;
}