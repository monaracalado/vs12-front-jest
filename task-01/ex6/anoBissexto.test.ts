import anoBissexto from './anoBissexto'

describe('verifica se o ano é bissexto', () => {

    const error = 'Operação inválida!'

    test('deve retornar verdadeiro para um ano divisível por 400', () => {
        expect(anoBissexto(2000)).toBe(`O ano 2000 é bissexto`)
    })

    test('deve retornar falso para um ano divisível por 100 mas não por 400', () => {
        expect(anoBissexto(1900)).toMatch(/O ano \d+ não é bissexto/);
    })
    
    test('verifica se recebe um NaN', () => {
        expect(() => anoBissexto('teste')).toThrow(error)
    })
    
    test('verifica se recebe um valor negativo', () => {
        expect(() => anoBissexto(-1)).toThrow(error)
    })

})