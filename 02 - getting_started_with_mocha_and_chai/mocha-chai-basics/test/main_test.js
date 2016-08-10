var expect = require('chai').expect;

// Test suite
// é um bloco de testes unitários que possuem relação
// testes de uma mesma função ou parte de código

describe('Mocha', function() {

    // test spec (unit test)
    // todos os testes individuais
    it('deve executar os testes utilizando npm', function() {

        // OK é um método do chai
        // qualquer valor que satisfazer a condição do if
        // undefined, NaN, false, '', 0
        expect(true).to.be.ok;

    });

});