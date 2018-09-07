if ( typeof window === 'undefined' ) {
  require('../../app/2.strings');
  var expect = require('chai').expect;
}

describe('2. strings', function() {
  it('reverseString: you should be able to reverse a string', function() {
    var inputStrings = [
      'abc',
      'i am a string of characters',
      'A man, a plan, a canal: Panama'
    ];
    var outputStrings = [
      'cba',
      'sretcarahc fo gnirts a ma i',
      'amanaP :lanac a ,nalp a ,nam A'
    ];

    inputStrings.forEach(function(str, index) {
      var result = stringsAnswers.reverseString(str);
      expect(result).to.eql(outputStrings[index]);
    });
  });
 
  it('reduceString: you should be able to reduce duplicate characters to a desired minimum', function() {
    expect(stringsAnswers.reduceString('aaaabbbb', 2)).to.eql('aabb');
    expect(stringsAnswers.reduceString('xaaabbbb', 2)).to.eql('xaabb');
    expect(stringsAnswers.reduceString('aaaabbbb', 1)).to.eql('ab');
    expect(stringsAnswers.reduceString('aaxxxaabbbb', 2)).to.eql('aaxxaabb');
  });
});
