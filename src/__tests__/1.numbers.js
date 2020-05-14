const numbersAnswers = require(`../1.numbers`);

describe(`Numbers Tests`, function () {
  it(`you should be able to add numbers`, function () {
    expect(numbersAnswers.add(200, 10)).toEqual(210);
  });

  it(`you should be able to subtract numbers`, function () {
    expect(numbersAnswers.subtract(300, 10)).toEqual(290);
  });

  it(`you should be able to multiply with precision`, function () {
    expect(numbersAnswers.multiply(4, 0.1)).toEqual(0.4);
    expect(numbersAnswers.multiply(3, 2)).toEqual(6);
  });

  it(`parseInt: should use parseInt correctly`, function () {
    const result = numbersAnswers.parseInt(`2342`);
    expect(result).toEqual(2342);
    expect(typeof result).toEqual(`number`);
    expect(numbersAnswers.parseInt(`12`)).toEqual(12);
    expect(numbersAnswers.parseInt(`12px`)).toEqual(12);
    expect(numbersAnswers.parseInt(`0x12`)).toEqual(0);
  });

});
