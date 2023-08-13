export default function eBissexto(ano) {
    if(isNaN(ano) || ano<0){
        throw new Error('Operação inválida!')
    }
    return (ano % 400 == 0) || ((ano % 4 == 0) && (ano % 100 != 0)) ? `O ano ${ano} é bissexto` : `O ano ${ano} não é bissexto`;
}