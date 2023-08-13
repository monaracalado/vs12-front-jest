import { isPrimo, primoGemeo } from "./primoGemio";

describe("testes para as funções de primos", () => {
    describe('teste para isPrimo', () => {

        test('Número 17 é primo', () => {
            expect(isPrimo(17)).toBeTruthy();
        });
        test('Teste se 25 é primo', () => {
            expect(isPrimo(25)).toBeFalsy();
        });

        test('Teste se 49 é primo', () => {
            expect(isPrimo(49)).toEqual(false);
        });
    
    })

    describe('Testes para a função findPrimosGemeos', () => {
        test('Encontra primos gêmeos até 20', () => {
            
            expect(primoGemeo(20)).toMatch(/(\d+) e (\d+) são primos gêmeos/g);
        });
    });  
})