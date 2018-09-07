if ( typeof window === 'undefined' ) {
  require('../../app/1.arrays');
  var expect = require('chai').expect;
}

describe('1. arrays', function() {
  var a;

  beforeEach(function() {
    a = [ 1, 2, 3, 4 ];
  });

  it('IndexOf: you should be able to determine the location of an item in an array', function() {
    expect(arraysAnswers.indexOf(a, 3)).to.eql(2);
    expect(arraysAnswers.indexOf(a, 5)).to.eql(-1);
  });

  it('Sum: you should be able to sum the items of an array', function() {
    expect(arraysAnswers.sum(a)).to.eql(10);
  });

  it('Remove: you should be able to remove all instances of a value from an array', function() {
    a.push(2); // Make sure the value appears more than one time
    a.push(2); // Make sure the value appears more than one time in a row
    var result = arraysAnswers.remove(a, 2);

    expect(result).to.have.length(3);
    expect(result.join(' ')).to.eql('1 3 4');
  });

  it('Append: you should be able to add an item to the end of an array', function() {
    var result = arraysAnswers.append(a, 10);

    expect(result).to.have.length(5);
    expect(result[result.length - 1]).to.eql(10);
  });

  it('Truncate: you should be able to remove the last item of an array', function() {
    var result = arraysAnswers.truncate(a);

    expect(result).to.have.length(3);
    expect(result.join(' ')).to.eql('1 2 3');
  });

  it('Prepend: you should be able to add an item to the beginning of an array', function () {
    var result = arraysAnswers.prepend(a, 10);

    expect(result).to.have.length(5);
    expect(result[0]).to.eql(10);
  });

  it('Curtail: you should be able to remove the first item of an array', function () {
    var result = arraysAnswers.curtail(a);

    expect(result).to.have.length(3);
    expect(result.join(' ')).to.eql('2 3 4');
  });

  it('Concat: you should be able to join together two arrays', function() {
    var c = [ 'a', 'b', 'c', 1 ];
    var result = arraysAnswers.concat(a, c);

    expect(result).to.have.length(8);
    expect(result.join(' ')).to.eql('1 2 3 4 a b c 1');
  });

  it('Insert: you should be able to add an item anywhere in an array', function() {
    var result = arraysAnswers.insert(a, 'z', 2);

    expect(result).to.have.length(5);
    expect(result.join(' ')).to.eql('1 2 z 3 4');
  });

  it('Square: you should be able to square each number in an array', function() {
    var result = arraysAnswers.square(a);

    expect(result).to.have.length(4);
    expect(result.join(' ')).to.eql('1 4 9 16');
  });

});
