export default function mediaPonderada(n1,p1,n2,p2,n3,p3){
    if((isNaN(n1) || n1 <=0 ) || (isNaN(p1) || p1 <= 0 )|| (isNaN(n2) || n2 <=0 ) || (isNaN(p2) || p2 <= 0 )|| (isNaN(n3) || n3 <=0 ) || (isNaN(p3) || p3 <= 0 )){
        throw new Error('Operação inválida!')
    }
    return `A média ponderada do aluno é: ${((n1*p1 + n2*p2 + n3*p3)/(p1 + p2 + p3)).toFixed(2)}` 
}