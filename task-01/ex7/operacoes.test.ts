import operacoes from './operacoes'

describe('oeprações matematicas', () => {

    test('deve somar dois números corretamente', () => {
        const resultado = operacoes(5, 3, '+');
        expect(resultado).toBe(8);
    });

    test('deve subtrair dois números corretamente', () => {
        const resultado = operacoes(10, 4, '-');
        expect(resultado).toEqual(6);
    });

    test('deve multiplicar dois números corretamente', () => {
        const resultado = operacoes(7, 2, '*');
        expect(resultado).toEqual(14);
    });

    test('deve dividir dois números corretamente', () => {
        const resultado = operacoes(20, 5, '/');
        expect(resultado).toBe(4);
    });

    test('deve lançar um erro para divisão por zero', () => {
        expect(() => operacoes(10, 0, '/')).toThrow('Operação inválida!');
    });

    test('deve lançar um erro para operação inválida', () => {
        expect(() => operacoes(8, 2, '%')).toThrow('Operação inválida!');
    });

    test('deve lançar um erro para entrada inválida', () => {
        expect(() => operacoes('abc', 2, '+')).toThrow('Operação inválida!');
    });
})