import NameClientAndAttendant from './nameClientAndAttendant'

describe('Name Client And Attendant', () => {

    const error = 'Operação inválida!';
    const client = 'Cliente';
    const attendant = 'Attendant';


    test('retorna frase correta', () => {
        expect(NameClientAndAttendant(client, attendant)).toEqual(`Olá ${client} eu me chamo ${attendant}, em que posso ajudar?`)
    })

    test('testa valores vazios', () => {
        expect(() => NameClientAndAttendant('', '')).toThrow(error)
    })

    test('Verifica se recebe um neumero', () => {
        expect(() => NameClientAndAttendant(1,'name')).toThrow(error)
        expect(() => NameClientAndAttendant('name', 1)).toThrow(error)
    })
})