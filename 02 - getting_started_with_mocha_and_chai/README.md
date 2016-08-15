## Getting Started with Mocha and Chai

- Para instalar: `npm install --save-dev mocha chai`

- A utilização do `--save-dev` significa que esta biblioteca é apenas para desenvolvimento.

- **A coisa mais importante para continuar na mente é o que testes descrevem comportamentos esperados.**

- Para testar o _mocha_ pelo terminal, instale: `npm install mocha -g`

- `$  mocha nome-do-test.js`

- Para automatizar a execução dos seus testes:
    - crie uma pasta com o nome **test** no mesmo nível do `package.json`;
    - no `package.json` modifique o valor de **scripts > test** para `mocha`;
    - `npm test` e o mocha executa automaticamente todos os testes de dentro da pasta;

- Os comandos que podem ser executados: `mocha` , `mocha test.js`, `npm test`.

- O mocha torna possivel executar todas as suítes de teste com um único comando.

- [ChaiJs](http://chaijs.com/api/bdd/)

- Introduz uma suíte de testes utilizando `describe()`;

- Cada teste unitário individual é chamado de `spec()`;

- Cada especificação no mocha, é escrito dentro de um `it()`;

- Para usar os métodos de **expect** do _Chai_, import utilizando: `var expect = require('chai').expect;`

- **sanity check** é um tipo de check trivial que é feito para verificar se o _Mocha_ está funcionando como deveria.

- Execute seu teste sem um **expect** dentro, isso funciona como um **sanity check** e ajuda a saber que tudo está indo bem.

- A coisa mais importante é focar no comportamento geral da função que vai ser testada e não nos detalhes de implementação ainda.