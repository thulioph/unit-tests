// import the expect method to chai library
var expect = require('chai').expect;

function titleCase(title) {
    return title;
}

expect(titleCase('the great mouse detective')).to.be.a('string');
expect(titleCase('the great mouse detective'));