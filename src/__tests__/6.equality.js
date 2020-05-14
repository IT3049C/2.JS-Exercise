const bestPracticesAnswers = require(`../6.equality`);

describe(`6. best practices`, function () {

  it(`you should understand strict comparison`, function () {
    expect(bestPracticesAnswers.identity(1, `1`)).toEqual(false);
    expect(bestPracticesAnswers.identity(1, 1)).toEqual(true);
    expect(bestPracticesAnswers.identity(0, false)).toEqual(false);
  });
});
