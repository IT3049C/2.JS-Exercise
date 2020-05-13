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

  it(`reduceString: you should be able to reduce duplicate characters to a desired minimum`, function () {
    expect(stringsAnswers.reduceString(`aaaabbbb`, 2)).toEqual(`aabb`);
    expect(stringsAnswers.reduceString(`xaaabbbb`, 2)).toEqual(`xaabb`);
    expect(stringsAnswers.reduceString(`aaaabbbb`, 1)).toEqual(`ab`);
    expect(stringsAnswers.reduceString(`aaxxxaabbbb`, 2)).toEqual(`aaxxaabb`);
  });
});
