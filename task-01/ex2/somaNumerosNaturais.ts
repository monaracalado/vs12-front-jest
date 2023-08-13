export default function SomaNumerosNaturais(primeiroValor, segundoValor){
    if((isNaN(primeiroValor) || primeiroValor <0) || (isNaN(segundoValor) || segundoValor <0)){
        throw new Error('Operação inválida!')
    }
    return primeiroValor + segundoValor;
}