if ( typeof window === 'undefined' ) {
  require('../../app/8.functions');
  var expect = require('chai').expect;
}

describe('8. functions', function() {
  var sayItCalled = false;
  var sayIt = function(greeting, name, punctuation) {
    sayItCalled = true;
    return greeting + ', ' + name + (punctuation || '!');
  };

  beforeEach(function () {
    sayItCalled = false;
  });

  it('you should be able to use an array as arguments when calling a function', function() {
    var result = functionsAnswers.argsAsArray(sayIt, [ 'Hello', 'Ellie', '!' ]);
    expect(result).to.eql('Hello, Ellie!');
    expect(sayItCalled).to.be.ok;
  });

  it('you should be able to change the context in which a function is called', function() {
    var speak = function() {
      return sayIt(this.greeting, this.name, '!!!');
    };
    var obj = {
      greeting: 'Hello',
      name: 'Rebecca'
    };

    var result = functionsAnswers.speak(speak, obj);
    expect(result).to.eql('Hello, Rebecca!!!');
    expect(sayItCalled).to.be.ok;
  });

  it('you should be able to use closures', function () {
    var arr = [ Math.random(), Math.random(), Math.random(), Math.random() ];
    var square = function (x) { return x * x; };

    var funcs = functionsAnswers.makeClosures(arr, square);
    expect(funcs).to.have.length(arr.length);

    for (var i = 0; i < arr.length; i++) {
      expect(funcs[i]()).to.eql(square(arr[i]));
    }
  });

});
