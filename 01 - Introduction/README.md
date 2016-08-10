## Introducing unit tests

### Testes unitários
Você executa os testes constantemente durante o processo de desenvolvimento para garantir que tudo está trabalhando, cada vez que você realiza mudanças.

### Testes de integração
Você usa testes de integração quando adiciona novo código em um código pré existente, para ter a certeza que não só todas as partes estão trabalhando individualmente como esperado, mas também que elas vão ser executadas juntas corretamente sem quebrar.

### Testes end-to-end (e2e)
Executa a sua aplicação do início até o fim para todas as histórias de usuários que você possa imaginar. Isto garante que a aplicação está pronta para ser lançada, e que os detalhes especiais de implementação não influencia no código testado com unit tests and integration tests. Você conduzir testes end-to-end ocasionalmente, talvez apenas algum tempo durante o ciclo de vida de um produto, pois são demorados e caros.

### BDD (behavior driven development)
Inicie descrevendo como a aplicação deve funcionar, em seguida escreva o código que faça funcionar da maneira que você espera. Se seus testes são bons, você pode estar confiante que suas funções realmente fazem aquilo que elas foram destinadas a fazer.

### RED -> GREEN -> REFACTOR
Faça os testes, sabendo que no primeiro momento eles irão falhar.
Corrija a função da primeira maneira que vier na mente, apenas para fazer os testes passarem.
Volte e refatore a função ou melhoria, repetindo o ciclo até você está pronto para seguir em frente.

- Escreve o teste;
- O teste vai falhar;
- Escreve a função para passar o teste;
- O teste deverá passar;
- Volta pra função e refatora;


#### MOCHA

- [https://mochajs.org/](https://mochajs.org/)


#### CHAI

É uma biblioteca de expectations.

- [http://chaijs.com/guide/installation/](como instalar)
- [http://chaijs.com/guide/styles/](assertions)

#### Algumas observações

- Testes unitários substituem integralmente a necessidade de testes manuais e debug de código;
- Foca no individual e em partes específicas de uma funcionalidade;
- RGR é uma forma de escrever testes:
    - escreva o teste (expect)
    - escreva a função pro teste passar
    - refatore a função