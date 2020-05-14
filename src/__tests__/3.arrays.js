const arraysAnswers = require(`../3.arrays`);

describe(`Arrays Questions`, function () {
  let a;

  beforeEach(function () {
    a = [ 1, 2, 3, 4 ];
  });

  it(`IndexOf: you should be able to determine the location of an item in an array`, function () {
    expect(arraysAnswers.indexOf(a, 3)).toEqual(2);
    expect(arraysAnswers.indexOf(a, 5)).toEqual(-1);
  });

  it(`Sum: you should be able to sum the items of an array`, function () {
    expect(arraysAnswers.sum(a)).toEqual(10);
  });

  it(`Filter: Should filter out all instances of a value from an array`, function () {
    a.push(2); // Make sure the value appears more than one time
    a.push(2); // Make sure the value appears more than one time in a row
    const result = arraysAnswers.filterOut(a, 2);

    expect(result).toHaveLength(3);
    expect(result.join(` `)).toEqual(`1 3 4`);
  });

  it(`Append: you should be able to add an item to the end of an array`, function () {
    const result = arraysAnswers.append(a, 10);

    expect(result).toHaveLength(5);
    expect(result[result.length - 1]).toEqual(10);
  });

  it(`Truncate: you should be able to remove the last item of an array`, function () {
    const result = arraysAnswers.truncate(a);

    expect(result).toHaveLength(3);
    expect(result.join(` `)).toEqual(`1 2 3`);
  });

  it(`Concat: you should be able to join together two arrays`, function () {
    const c = [ `a`, `b`, `c`, 1 ];
    const result = arraysAnswers.concat(a, c);

    expect(result).toHaveLength(8);
    expect(result.join(` `)).toEqual(`1 2 3 4 a b c 1`);
  });

  it(`Insert: you should be able to add an item at the specified index of an array`, function () {
    const result = arraysAnswers.insert(a, `z`, 2);

    expect(result).toHaveLength(5);
    expect(result.join(` `)).toEqual(`1 2 z 3 4`);
  });

  it(`Square: you should be able to square each number in an array`, function () {
    const result = arraysAnswers.square(a);

    expect(result).toHaveLength(4);
    expect(result.join(` `)).toEqual(`1 4 9 16`);
  });
});
