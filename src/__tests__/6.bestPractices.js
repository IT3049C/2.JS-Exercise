const bestPracticesAnswers = require(`../6.bestPractices`);

describe(`6. best practices`, function () {
  it(`you should avoid global constiables`, function () {
    bestPracticesAnswers.globals();
    expect(window.myObject).not.to.be.ok;
  });

  it(`you should use parseInt correctly`, function () {
    expect(bestPracticesAnswers.parseInt(`12`)).toEqual(12);
    expect(bestPracticesAnswers.parseInt(`12px`)).toEqual(12);
    expect(bestPracticesAnswers.parseInt(`0x12`)).toEqual(0);
  });

  it(`you should understand strict comparison`, function () {
    expect(bestPracticesAnswers.identity(1, `1`)).toEqual(false);
    expect(bestPracticesAnswers.identity(1, 1)).toEqual(true);
    expect(bestPracticesAnswers.identity(0, false)).toEqual(false);
  });
});
