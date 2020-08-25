const arraysAnswers = require(`../3.arrays`);

describe(`3.arrays`, function () {
  describe(`.indexOf()`, () => {
    it(`finds the first index found for the search item`, () => expect(arraysAnswers.indexOf([ 1, 2, 3, 3, 3, 4, 5 ], 3)).toEqual(2));
    it(`returns -1 when the search item is not found`, () => expect(arraysAnswers.indexOf([ 1, 2, 3, 3, 3, 4, 5 ], 6)).toEqual(-1));
  });

  describe(`.sum()`, () => {
    it(`gets the sum of 1, 2, 3, 4, 5 as 15`, () => expect(arraysAnswers.sum([ 1, 2, 3, 4, 5 ])).toEqual(15));
    it(`gets the sum of 1, -1, 2, -2, 5 as 5`, () => expect(arraysAnswers.sum([ 1, -1, 2, -2, 5 ])).toEqual(5));
  });

  describe(`.filterOut()`, () => {
    let testArray = [];

    /**
     * beforeEach is run before every test. Since these tests share the same array, instead of copying it everywhere,
     * there is a possibility of mutations happening to our testArray as all the tests are executed. Therefore we are
     * reseting the array before each test run.
     */
    beforeEach(() => testArray = [ 3, 10, 3, 1, 2, 4, 6, 9, 2, 5, 2, 2, 3, 2, 4, 2, 4, 8, 10, 3 ]);

    it(`removes all 1's from an array`, () => 
      expect(arraysAnswers.filterOut(testArray, 1)).toEqual([ 3, 10, 3, 2, 4, 6, 9, 2, 5, 2, 2, 3, 2, 4, 2, 4, 8, 10, 3 ]));
    it(`removes all 2's from an array`, () => 
      expect(arraysAnswers.filterOut(testArray, 2)).toEqual([ 3, 10, 3, 1, 4, 6, 9, 5, 3, 4, 4, 8, 10, 3 ]));
    it(`removes all 3's from an array`, () => 
      expect(arraysAnswers.filterOut(testArray, 3)).toEqual([ 10, 1, 2, 4, 6, 9, 2, 5, 2, 2, 2, 4, 2, 4, 8, 10 ]));
    it(`removes all 4's from an array`, () => 
      expect(arraysAnswers.filterOut(testArray, 4)).toEqual([ 3, 10, 3, 1, 2, 6, 9, 2, 5, 2, 2, 3, 2, 2, 8, 10, 3 ]));
    it(`removes all 5's from an array`, () => 
      expect(arraysAnswers.filterOut(testArray, 5)).toEqual([ 3, 10, 3, 1, 2, 4, 6, 9, 2, 2, 2, 3, 2, 4, 2, 4, 8, 10, 3 ]));
    it(`removes all 6's from an array`, () => 
      expect(arraysAnswers.filterOut(testArray, 6)).toEqual([ 3, 10, 3, 1, 2, 4, 9, 2, 5, 2, 2, 3, 2, 4, 2, 4, 8, 10, 3 ]));
    it(`removes all 7's from an array`, () => 
      expect(arraysAnswers.filterOut(testArray, 7)).toEqual([ 3, 10, 3, 1, 2, 4, 6, 9, 2, 5, 2, 2, 3, 2, 4, 2, 4, 8, 10, 3 ]));
    it(`removes all 8's from an array`, () => 
      expect(arraysAnswers.filterOut(testArray, 8)).toEqual([ 3, 10, 3, 1, 2, 4, 6, 9, 2, 5, 2, 2, 3, 2, 4, 2, 4, 10, 3 ]));
    it(`removes all 9's from an array`, () => 
      expect(arraysAnswers.filterOut(testArray, 9)).toEqual([ 3, 10, 3, 1, 2, 4, 6, 2, 5, 2, 2, 3, 2, 4, 2, 4, 8, 10, 3 ]));
    it(`removes all 10's from an array`, () => 
      expect(arraysAnswers.filterOut(testArray, 10)).toEqual([ 3, 3, 1, 2, 4, 6, 9, 2, 5, 2, 2, 3, 2, 4, 2, 4, 8, 3 ]));
  });

  describe(`.append()`, () => {
    it(`puts a number on the back of an array`, () => expect(arraysAnswers.append([ 1, 2 ], 3)).toEqual([ 1, 2, 3 ]));
  });

  describe(`.truncate()`, () => {
    it(`removes the last item from an array`, () => expect(arraysAnswers.truncate([ 1, 2, 3 ])).toEqual([ 1, 2 ]));
  });

  describe(`.concat()`, () => {
    it(`combines two array, putting the second array arguement behind the first`, () =>
      expect(arraysAnswers.concat([ 1, 2, 3 ], [ 4, 5 ])).toEqual([ 1, 2, 3, 4, 5 ]));
  });

  describe(`.insert()`, () => {
    it(`inserts a value at the desired index`, () => 
      expect(arraysAnswers.insert([ `Jan`, `March`, `April`, `June` ], `Feb`, 1)).toEqual([ `Jan`, `Feb`, `March`, `April`, `June` ]));
  });

  describe(`.square()`, () => {
    it(`squares all elements in an array`, () => {
      const result = arraysAnswers.square([ 1, 2, 3, 4 ]).join(` `);

      if(result === `3 0 1 6`) {
        return expect(`Take a look at how you're using exponents. ^ does not work`).toBeFalsy();
      }

      return expect(result).toEqual(`1 4 9 16`);
    });
  });
});
