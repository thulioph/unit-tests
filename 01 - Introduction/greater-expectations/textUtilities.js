// import the expect method to chai library
var expect = require('chai').expect;

function titleCase(title) {
    // transforma o título em Array,
    // troca os caracteres especiais e deixa tudo em lowercase
    var words = title.toLowerCase().replace(/[^\w\s]/gi, '').split(' ');

    var titleCasedWords = words.map(function(word) {
        return word[0].toUpperCase() + word.substring(1);
    });

    return titleCasedWords.join(' ');
}

expect(titleCase('the great mouse detective')).to.be.a('string');
expect(titleCase('a')).to.equal('A'); // espera que a letra seja em Uppercase
expect(titleCase('vertigo')).to.equal('Vertigo'); // apenas a primeira letra seja captalized
expect(titleCase('the great mouse detective')).to.equal('The Great Mouse Detective');
expect(titleCase('x-Men: firST ClAsS')).to.equal('Xmen First Class');
expect(titleCase('IAI BROTHER')).to.equal('Iai Brother');