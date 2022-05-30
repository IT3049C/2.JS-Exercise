const numbersAnswers = require(`../1.numbers`);

/**
 * There are many ways to organize your tests. I find it best to organize and name them in such a way you can quickly locate
 * the code in the event that your tests fail. Here I am making the top level the name of the file/module. Then making
 * child describes to tell me which function and requirement I am testing.
 */
describe(`1.numbers`, function () {
  describe(`.add()`, () => {
    /**
     * We could have written one test here and called it good. However if our goal is the pass the test we could have done:
     * 
     *     const sum = (a, b) => 4
     * 
     * And that would pass the first test. We don't want to introduce bias into our unit tests by only running a narrow set
     * of tests. So we write more tests to verify what we have written is correct. This is call Triangulation. You can learn
     * more about Triangulation and unit testing from:
     * 
     *     https://www.youtube.com/watch?v=XsFQEUP1MxI
     */
    it(`returns the sum of 2 and 2 as 4`, () => expect(numbersAnswers.add(2, 2)).toEqual(4));
    it(`returns the sum of 200 and 10 as 210`, () => expect(numbersAnswers.add(200, 10)).toEqual(210));
    it(`returns the sum of 10 and 21 as 31`, () => expect(numbersAnswers.add(10, 21)).toEqual(31));
  });

  /**
   * Notice here that the second parameter to describe is different than the one used for add() above. Below we are using
   * something called an Arrow Function which are somewhat different from Functions. You can read more about this here:
   * 
   *     https://stackoverflow.com/questions/34361379/are-arrow-functions-and-functions-equivalent-exchangeable
   * 
   * In most cases you can use Arrow Functions over Functions, however you cannot blindly do this. Arrow Functions are a
   * shorter syntax to express a function and allow for you to compose simple functions in one line. Arrow Functions were
   * introduced as part of ES6, so you will still run into Function a lot. You should be familiar with both syntaxs though.
   * 
   * Keep in mind the result of the statement after an arrow function is returned to the calling statement.
   */
  describe(`.subtract()`, () => {
    it(`returns the difference between 2 and 2 is 0`, () => expect(numbersAnswers.subtract(2, 2)).toEqual(0));
    it(`returns the difference between 200 and 10 is 190`, () => expect(numbersAnswers.subtract(200, 10)).toEqual(190));
    it(`returns the difference between 10 and 21 is -11`, () => expect(numbersAnswers.subtract(10, 21)).toEqual(-11));
    it(`returns the difference between 300 and 10 is 290`, () => expect(numbersAnswers.subtract(300, 10)).toEqual(290));
  });

  describe(`.multiple()`, () => {
    it(`returns the product of 4 and 0.1 as 0.4`, () => expect(numbersAnswers.multiply(4, 0.1)).toEqual(0.4));
    it(`returns the product of 3 and 2 as 6`, () => expect(numbersAnswers.multiply(3, 2)).toEqual(6));
  });

  describe(`.parseInt()`, () => {
    const testParseInt = (given, expectResult) => {
      try {
        return expect(numbersAnswers.parseInt(given)).toEqual(expectResult);
      } catch (e) {
        if (e instanceof RangeError) {
          return expect(`You've hit a stack overflow error due to an infinite loop. Check that ` +
            `the call inside your function is not the same as the function declaration. Inside ` +
            `the function namespace your call to Numbers.`).toEqualFalsy();
        }

        return expect(`An uncaught exception occurred: ${e.message}`).toEqual(e);
      }
    };

    it(`parses string 2342 as number 2342`, () => testParseInt(`2342`, 2342));
    it(`parses string 12 as number 12`, () => expect(numbersAnswers.parseInt(`12`)).toEqual(12));
    it(`parses string 12 as number 12`, () => expect(numbersAnswers.parseInt(`12.4 dollars`)).toEqual(12));
    it(`parses string 12px as number 12`, () => expect(numbersAnswers.parseInt(`12px`)).toEqual(12));
    it(`parses hex code 0x12 as number 0`, () => {
      if (numbersAnswers.parseInt(`0x12`) === 18) {
        return expect(`You're on the right track. 0x12 is the hexidecimal value for 18. Unfortunately we don't ` +
          `want to parse base 16 values here. We want to parse base 10. Look at using the second parameter in ` +
          `the parse int function`).toEqualFalsy();
      }

      return testParseInt(`0x12`, 0);
    });
  });

  describe(`.addAndReturn2DecimalPlaces()`, () => {
    it(`returns the sum of 1.23453 and 5.37873 as 6.61`, () => {
      const result = numbersAnswers.addAndReturn2DecimalPlaces(1.23453, 5.37873);
      const expected = 6.61;

      if (typeof result === `string` && result == expected) {
        return expect(`You're on the right track. Your function is returning a string, but we're expecting a number ` +
          `Try casting your result to a number.`).toBeFalsy();
      }

      return expect(result).toEqual(expected);
    });
  });
});
