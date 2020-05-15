const stringsAnswers = require(`../2.strings`);

describe(`2. strings`, function () {
  it(`reverseString: you should be able to reverse a string`, function () {
    const inputStrings = [
      `abc`,
      `i am a string of characters`,
      `A man, a plan, a canal: Panama`
    ];
    const outputStrings = [
      `cba`,
      `sretcarahc fo gnirts a ma i`,
      `amanaP :lanac a ,nalp a ,nam A`
    ];

    inputStrings.forEach(function (str, index) {
      const result = stringsAnswers.reverseString(str);
      expect(result).toEqual(outputStrings[index]);
    });
  });

  it(`capitalize: should return the input in all-caps`, function () {
    const result = stringsAnswers.capitalize(`this is web game development`);
    
    expect(result).toEqual(`THIS IS WEB GAME DEVELOPMENT`);
  });

  it(`splitString: should divide a string into substrings and return an array`, function() {
    const result = stringsAnswers.splitString(`Jane,Doe,21`);
    const expected = [ `Jane`, `Doe`,`21` ];
    expect(result).toEqual(expect.arrayContaining(expected));
  }); 

});
