const logicalOperatorsAnswers = require(`../5.logicalOperators`);

describe(`4. logical operators`, function () {
  it(`or: should return true if either a or b are truthy. False, if both are false`, function () {
    expect(logicalOperatorsAnswers.or(false, true)).toBeTruthy();
    expect(logicalOperatorsAnswers.or(true, false)).toBeTruthy();
    expect(logicalOperatorsAnswers.or(true, true)).toBeTruthy();
    expect(logicalOperatorsAnswers.or(false, false)).toBeFalsy();
    expect(logicalOperatorsAnswers.or(3, 4)).not.toEqual(7);
  });

  it(`and: should return true only if both a and b are truthy`, function () {
    expect(logicalOperatorsAnswers.and(false, true)).toBeFalsy();
    expect(logicalOperatorsAnswers.and(false, false)).toBeFalsy();
    expect(logicalOperatorsAnswers.and(true, false)).toBeFalsy();
    expect(logicalOperatorsAnswers.and(true, true)).toBeTruthy();
    expect(logicalOperatorsAnswers.and(3, 4)).toBeTruthy();
  });
});
