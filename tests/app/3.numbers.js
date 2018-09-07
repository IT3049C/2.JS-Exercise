if ( typeof window === 'undefined' ) {
  require('../../app/5.numbers');
  var expect = require('chai').expect;
}

describe('3. numbers', function() {
  it(`you should be able to add numbers`, function() {
    expect(numbersAnswers.add(200, 10)).to.eql(210);
  })

  it(`you should be able to subtract numbers`, function() {
    expect(numbersAnswers.subtract(300, 10)).to.eql(290);
  })

  it('you should be able to multiply with precision', function() {
    expect(numbersAnswers.multiply(4, 0.1)).to.eql(0.4);
    expect(numbersAnswers.multiply(3, 2)).to.eql(6);
  });
});
