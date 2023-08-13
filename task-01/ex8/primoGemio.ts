export function isPrimo(valor){
    if (valor <= 3) {
        return valor > 1;
    }

    if(valor % 2 === 0 || valor % 3 === 0) return false;

    for (let i = 5; i * i <= valor; i += 6){
        if(valor % i === 0 || valor % (i + 2) ===0) return false;
    }

    return true;
}

export function primoGemeo(N){
let primosGemios=''; 
    for(let i = 2; i <= N - 2; i++) {
        if(isPrimo(i) && isPrimo(i + 2)){
            primosGemios += `${i} e ${i + 2} são primos gêmeos\n`
        }
    }
    return primosGemios;
}