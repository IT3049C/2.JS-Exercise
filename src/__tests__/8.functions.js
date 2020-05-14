const functionsAnswers = require(`../8.functions`);

describe(`8. functions`, function () {
  let sayItCalled = false;
  const sayIt = function (greeting, name, punctuation) {
    sayItCalled = true;
    return greeting + `, ` + name + (punctuation || `!`);
  };

  beforeEach(function () {
    sayItCalled = false;
  });

  it(`you should be able to use an array as arguments when calling a function`, function () {
    const result = functionsAnswers.argsAsArray(sayIt, [ `Hello`, `Ellie`, `!` ]);
    expect(result).toEqual(`Hello, Ellie!`);
    expect(sayItCalled).to.be.ok;
  });

  it(`you should be able to change the context in which a function is called`, function () {
    const speak = function () {
      return sayIt(this.greeting, this.name, `!!!`);
    };
    const obj = {
      greeting: `Hello`,
      name: `Rebecca`
    };

    const result = functionsAnswers.speak(speak, obj);
    expect(result).toEqual(`Hello, Rebecca!!!`);
    expect(sayItCalled).to.be.ok;
  });
});
