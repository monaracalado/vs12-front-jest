# Casos de teste utilizando o método BDD - Behavior driven development



## Task 01 - Testes



1. ### Retorno de uma string

   #### Caso de Teste 1: Retorna string formatada

   🔴 Dado: a função `mensagem()`.

   🟡 Quando: a função é executada.

   🟢 Então: A saída gerada deve conter o seguinte formato:
   `**************************************************`

   `BEM-VINDO AO MEU PROGRAMA`

   `**************************************************`

   `ELE REALMENTE FUNCIONA`

   `**************************************************`

   `EU USEI FUNÇÃO PARA FAZER ISSO`

2. ### Soma 2 números naturais

   #### Caso de Teste 1: Ambos os valores são números naturais

   🔴 Dado: dois numeros naturais.

   🟡 Quando: a função `SomaNumerosNaturais` é chamada com esses valores.

   🟢 Então: retorna a soma dos 2 números.

   #### Caso de Teste 2: Primeiro valor é inválido

   🔴 Dado: um valor do tipo string e um número natural.

   🟡 Quando: a função `SomaNumerosNaturais` é chamada com esses valores.

   🟢 Então: um tipo `Error` deve ser lançado com a mensagem 'Operação inválida!'.

   #### Caso de Teste 3: Segundo valor negativo

   🔴 Dado: um número natural e um número negativo.

   🟡 Quando: a função `SomaNumerosNaturais` é chamada com esses valores.

   🟢 Então: um tipo `Error` deve ser lançado com a mensagem 'Operação inválida!'.

3. ### Verifica texto inserido

   #### Caso de Teste 1: Entrada é um número

   🔴 Dado: um valor numérico.

   🟡 Quando: a função `VerificaTexto` é chamada com esse valor.

   🟢 Então: um erro do tipo `Error` deve ser lançado com a mensagem 'Operação inválida!'.

   #### Caso de Teste 2: Entrada é um texto aleatório

   🔴 Dado: um texto aleatório.

   🟡 Quando: a função `VerificaTexto` é chamada com esse texto.

   🟢 Então: o resultado deve ser a mensagem 'Você tem noções dos seus atos?'.

   #### Caso de Teste 3: Entrada é "SIM"

   🔴 Dado: um texto "SIM" (em maiúsculas/minúsculas).

   🟡 Quando: a função `VerificaTexto` é chamada com esse texto.

   🟢 Então: o resultado deve ser a mensagem 'Parabéns'.

   #### Caso de Teste 4: Entrada é "NÃO" ou "NAO"

   🔴 Dado: um texto "NÃO"  ou "NAO" (em maiúsculas/minúsculas.)

   🟡 Quando: a função `VerificaTexto` é chamada com esse texto.

   🟢 Então: o resultado deve ser a mensagem 'Encerrando sua sessão…'.

4. ### Nome do cliente e nome do atendente

   #### Caso de Teste 1: Entradas são valores válidos

   🔴 Dado: um cliente e um atendente, ambos do tipo string. 

   🟡 Quando: a função `NameClientAndAttendant` for chamada com esses argumentos. 

   🟢 Então: o resultado deve ser a saudação com o nome do cliente e do atendente.

   #### Caso de Teste 2: Ambos os argumentos são vazios

   🔴 Dado: um cliente e um atendente, ambos vazios.

   🟡 Quando: a função `NameClientAndAttendant` for chamada com esses argumentos.

   🟢 Então: um tipo `Error` deve ser lançado com a mensagem 'Operação inválida!'.

   #### Caso de Teste 3: Cliente é um número

   🔴 Dado: um cliente do tipo número e um atendente do tipo string.

   🟡 Quando: a função `NameClientAndAttendant` for chamada com esses argumentos.

   🟢 Então: um tipo `Error` deve ser lançado com a mensagem 'Operação inválida!'.

   #### Caso de Teste 4: Atendente é um número

   🔴 Dado: um cliente do tipo string e um atendente do tipo número.

   🟡 Quando: a função `NameClientAndAttendant` for chamada com esses argumentos.

   🟢 Então: um tipo `Error` deve ser lançado com a mensagem 'Operação inválida!'.

5. ### Calcular tempo

   #### Caso de Teste 1: Entrada é um NaN

   🔴 Dado: um valor que não é um número (NaN).

   🟡 Quando: a função `calcularTempo` é chamada com esse valor.

   🟢 Então: um tipo `Error` deve ser lançado com a mensagem 'Operação inválida!'.

   #### Caso de Teste 2: Calcular tempo para um valor maior

   🔴 Dado: um valor de 600000 segundos.

   🟡 Quando: a função `calcularTempo` é chamada com esse valor.

   🟢 Então: a saída deve corresponder a 'Em 600000 segundos temos: 6 dias, 22 horas, 13 minutos e 20 segundos.'

   #### Caso de Teste 3: Calcular tempo para segundos menores que um minuto

   🔴 Dado: um valor de 45 segundos.

   🟡 Quando: a função `calcularTempo` é chamada com esse valor.

   🟢 Então: a saída deve corresponder a 'Em 45 segundos temos: 0 dias, 0 horas, 0 minutos e 45 segundos.'.

   #### Caso de Teste 4: Calcular tempo para um dia exato

   🔴 Dado: um valor de 86400 segundos.

   🟡 Quando: a função `calcularTempo` é chamada com esse valor.

   🟢 Então: a saída deve corresponder a 'Em 86400 segundos temos: 1 dias, 0 horas, 0 minutos e 0 segundos.'.

6. ### eBissexto

   #### Caso de Teste 1: Verificar ano divisível por 400

   🔴 Dado: um ano (2000) que é divisível por 400.

   🟡 Quando: a função `eBissexto` é chamada com esse ano.

   🟢 Então: o resultado deve ser a mensagem "O ano 2000 é bissexto".

   #### Caso de Teste 2: Verificar ano divisível por 100, mas não por 400

   🔴 Dado: um ano (1900) que é divisível por 100, mas não por 400.

   🟡 Quando: a função `eBissexto` é chamada com esse ano.

   🟢 Então: o resultado deve ser uma mensagem que indica que o ano não é bissexto.

   #### Caso de Teste 3: Verificar se a entrada é um NaN

   🔴 Dado: um valor que não é um número (NaN).

   🟡 Quando: a função `eBissexto` é chamada com esse valor.

   🟢 Então: um erro do tipo `Error` deve ser lançado com a mensagem 'Operação inválida!'.

   #### Caso de Teste 4: Verificar ano menor que 0

   🔴 Dado: um ano que é menor que zero.

   🟡 Quando: a função `eBissexto` é chamada com esse ano.

   🟢 Então: um tipo `Error` deve ser lançado com a mensagem 'Operação inválida!'.

7. ### Casos de Teste BDD para a função calcular

   #### Caso de Teste 1: Somar dois números corretamente

   🔴 Dado: dois números e a operação de soma ("+").

   🟡 Quando: a função `calcular` é chamada com esses valores.

   🟢 Então: o resultado deve ser a soma dos valores.

   #### Caso de Teste 2: Lançar um erro para divisão por zero

   🔴 Dado: dois números sendo o segundo valor 0 e a operação de divisão ("/").

   🟡 Quando: a função `calcular` é chamada com esses valores.

   🟢 Então: um tipo `Error` deve ser lançado com a mensagem 'Operação inválida!'.

   #### Caso de Teste 3: Lançar um erro para operação inválida

   🔴 Dado: dois números e a operação de módulo ("%").

   🟡 Quando: a função `calcular` é chamada com esses valores.

   🟢 Então: um tipo `Error` deve ser lançado com a mensagem 'Operação inválida!'.

   #### Caso de Teste 4: Lançar um erro para entrada inválida

   🔴 Dado: dois valores com um valor não sendo um número mais uma operação.

   🟡 Quando: a função `calcular` é chamada com esses valores.

   🟢 Então: um tipo `Error` deve ser lançado com a mensagem 'Operação inválida!'.

8. ### Primos gêmeos

   #### Caso de Teste 1: Verificar se um número é primo

   🔴 Dado: um número (17).

   🟡 Quando: a função `isPrimo` é chamada com esse número.

   🟢 Então: o resultado deve ser verdadeiro (`true`).

   #### Caso de Teste 2: Verificar se um número não é primo

   🔴 Dado: um número (25).

   🟡 Quando: a função `isPrimo` é chamada com esse número.

   🟢 Então: o resultado deve ser falso (`false`).

   #### Caso de Teste 3: Verificar se um número não é primo

   🔴 Dado: um número (49).

   🟡 Quando: a função `isPrimo` é chamada com esse número.

   🟢 Então: o resultado deve ser falso (`false`).

   #### Caso de Teste 4: Encontrar primos gêmeos até um determinado limite

   🔴 Dado: um limite (20).

   🟡 Quando: a função `primoGemeo` é chamada com esse limite.

   🟢 Então: o resultado deve conter pares de primos gêmeos.

9. ### Media ponderada

   #### Caso de Teste 1: Calcular média ponderada corretamente

   🔴 Dado: três notas (7, 8 e 9) e seus respectivos pesos (2, 3 e 5).

   🟡 Quando: a função `mediaPonderada` é chamada com esses valores.

   🟢 Então: o resultado deve conter a mensagem 'A média ponderada do aluno é: 8.30'.

   #### Caso de Teste 2: Lançar um erro para notas negativas

   🔴 Dado: uma nota negativa (-5) e seus pesos.

   🟡 Quando: a função `mediaPonderada` é chamada com esses valores.

   🟢 Então: um tipo `Error` deve ser lançado com a mensagem 'Operação inválida!'.

   #### Caso de Teste 3: Lançar um erro para pesos não positivos

   🔴 Dado: uma nota (7) e um peso negativo (-2), juntamente com outros valores válidos.

   🟡 Quando: a função `mediaPonderada` é chamada com esses valores.

   🟢 Então: um tipo `Error` deve ser lançado com a mensagem 'Operação inválida!'.

   #### Caso de Teste 4: Lançar um erro para entrada inválida

   🔴 Dado: uma nota inválida ('abc') e pesos válidos, juntamente com outros valores válidos.

   🟡 Quando: a função `mediaPonderada` é chamada com esses valores.

   🟢 Então: um tipo `Error` deve ser lançado com a mensagem 'Operação inválida!'.