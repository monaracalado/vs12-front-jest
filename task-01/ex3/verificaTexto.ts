export default function VerificaTexto(text){
    if(!isNaN(text)){
        throw new Error('Operação inválida!')
    }else if(text.toUpperCase() === 'SIM'){
        return 'Parabéns'
    }else if(text.toUpperCase() === 'NÃO' || text.toUpperCase() === 'NAO'){
        return 'Encerrando sua sessão…'
    }else{
        return 'Você tem noções dos seus atos?'
    }
}