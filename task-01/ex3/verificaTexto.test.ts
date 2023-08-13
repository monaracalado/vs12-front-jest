import verificaTexto from './verificaTexto'

describe('verificaTexto', () => {

    const error = 'Operação inválida!'

    test('verifica se é numero', () => {
        expect(() => verificaTexto(1)).toThrow(error)
    })

    test('verifica se é um texto aleatorio', () => {
        expect(verificaTexto('outro valor')).toEqual('Você tem noções dos seus atos?')
    })

    test('verifica se o texto inserido é SIM', () => {
        expect(verificaTexto("sim")).toBe('Parabéns')
    })

    test('verifica se o texto inserido é NÃO', () => {
        expect(verificaTexto("NAO")).toBe('Encerrando sua sessão…')
    })

})