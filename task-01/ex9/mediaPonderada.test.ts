import mediaPonderada from './mediaPonderada';

describe('Função mediaPonderada', () => {
    test('deve calcular a média ponderada corretamente', () => {
        expect(mediaPonderada(7, 2, 8, 3, 9, 5)).toContain('A média ponderada do aluno é: 8.30');
    });

    test('deve lançar um erro para notas negativas', () => {
        expect(() => mediaPonderada(-5, 2, 8, 3, 9, 5)).toThrow('Operação inválida!');
    });

    test('deve lançar um erro para pesos não positivos', () => {
        expect(() => mediaPonderada(7, -2, 8, 3, 9, 5)).toThrow('Operação inválida!');
    });

    test('deve lançar um erro para entrada inválida', () => {
        expect(() => mediaPonderada('abc', 2, 8, 3, 9, 5)).toThrow('Operação inválida!');
    });
});