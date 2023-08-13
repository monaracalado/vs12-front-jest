import retornaString from './retornaString'

describe('retorna String com formato especifico', () => {
    const mensagem = `**************************************************\nBEM-VINDO AO MEU PROGRAMA\n**************************************************\nELE REALMENTE FUNCIONA\n**************************************************\nEU USEI FUNÇÃO PARA FAZER ISSO`


    test('Deve conter os valores esperardos', () => {
        expect(retornaString()).toContain('BEM-VINDO AO MEU PROGRAMA');
        expect(retornaString()).toContain('ELE REALMENTE FUNCIONA');
        expect(retornaString()).toContain('EU USEI FUNÇÃO PARA FAZER ISSO');
    })

    test('Deve ser igual ao valoe esperado', () => {
        expect(retornaString()).toEqual(mensagem)
    })

    test('deve começar e terminar com asteriscos', () =>{
        expect(retornaString()).toMatch(/^\*{50}/);
    })
})