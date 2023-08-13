import calcularTempo from './calcularTempo'

    const error = 'Operação inválida!'

describe('Calcular Tempo a partir de segundos', () => {

    test('verifica se recebe um NaN', () => {
        expect(() => calcularTempo('teste')).toThrow(error)
    })

    test('deve calcular o tempo correto', () => {
        expect(calcularTempo('600000')).toMatch(/^Em \d+ segundos temos: \d+ dias, \d+ horas, \d+ minutos e \d+ segundos\.$/)
    })

    test('deve lidar com segundos menores que um minutos', () => {
        expect(calcularTempo('45')).toMatch(/^Em \d+ segundos temos: \d+ dias, \d+ horas, \d+ minutos e \d+ segundos\.$/)
    })

    test('deve lidar com um dia exato', () => {
        expect(calcularTempo('86400')).toMatch(/^Em \d+ segundos temos: \d+ dias, \d+ horas, \d+ minutos e \d+ segundos\.$/)
    })
})