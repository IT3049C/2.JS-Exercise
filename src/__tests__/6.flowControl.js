const flowControlAnswers = require(`../6.flowControl`);

describe(`5.flowControl`, function () {
  it(`returns number when not a multiple of 3 or 5: 1`, () => expect(flowControlAnswers.fizzBuzz(1)).toEqual(1));
  it(`returns number when not a multiple of 3 or 5: 11`, () => expect(flowControlAnswers.fizzBuzz(11)).toEqual(11));
  it(`returns number when not a multiple of 3 or 5: 21`, () => expect(flowControlAnswers.fizzBuzz(22)).toEqual(22));

  it(`returns fizz on multiple of 3: 3`, () => expect(flowControlAnswers.fizzBuzz(3)).toEqual(`fizz`));
  it(`returns fizz on multiple of 3: 6`, () => expect(flowControlAnswers.fizzBuzz(6)).toEqual(`fizz`));
  it(`returns fizz on multiple of 3: 9`, () => expect(flowControlAnswers.fizzBuzz(9)).toEqual(`fizz`));

  it(`returns buzz on multiple of 5: 5`, () => expect(flowControlAnswers.fizzBuzz(5)).toEqual(`buzz`));
  it(`returns buzz on multiple of 5: 10`, () => expect(flowControlAnswers.fizzBuzz(10)).toEqual(`buzz`));
  it(`returns buzz on multiple of 5: 20`, () => expect(flowControlAnswers.fizzBuzz(20)).toEqual(`buzz`));

  it(`returns fizzbuzz when a multiple of 3 and 5: 15`, () => expect(flowControlAnswers.fizzBuzz(15)).toEqual(`fizzbuzz`));
  it(`returns fizzbuzz when a multiple of 3 and 5: 30`, () => expect(flowControlAnswers.fizzBuzz(30)).toEqual(`fizzbuzz`));
  it(`returns fizzbuzz when a multiple of 3 and 5: 45`, () => expect(flowControlAnswers.fizzBuzz(45)).toEqual(`fizzbuzz`));

  it(`returns false if the argument is not a number`, () => expect(flowControlAnswers.fizzBuzz(`foo`)).toEqual(false));
});
