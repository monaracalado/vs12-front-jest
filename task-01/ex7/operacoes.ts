export default function calcular(n1, n2, operacao) {
    if (isNaN(n1) || isNaN(n2)) {
        throw new Error('Operação inválida!');
    }

    switch (operacao) {
        case "+":
            return n1 + n2;
        case "-":
            return n1 - n2;
        case "*":
            return n1 * n2;
        case "/":
            if (n2 !== 0) {
                return n1 / n2;
            } else {
                throw new Error('Operação inválida!')
            }
        default:
            throw new Error('Operação inválida!')
    }
}