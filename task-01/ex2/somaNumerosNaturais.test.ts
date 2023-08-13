import soma from './somaNumerosNaturais'

describe('Soma Numeros Naturais', () => {

    const error = 'Operação inválida!';

    test('soma dois numeros naturais e retorna o valor correto', () => {
        expect(soma(2,2)).toBe(4)
    })

    test('primeiro valor recebe uma string e retorna error', () => {
        expect(() => soma('a',2)).toThrow(error)
    })

    test('segundo valor recebe uma string e retorna error', () => {
        expect(() => soma(2,'a')).toThrow(error)
    })

    test('primeiro valor recebe uma numero negativo e retorna error', () => {
        expect(() => soma(-1,2)).toThrow(error)
    })

    test('segundo valor recebe uma numero negativo e retorna error', () => {
        expect(() => soma(2,-1)).toThrow(error)
    })
})