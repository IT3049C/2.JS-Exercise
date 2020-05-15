//reverseString: you should be able to reverse a string
// Example: "abc" => "cba"
function reverseString(str) {
  /**
   * can be achieved by combining: 
   *    1. string.prototype.split
   *    2. array.prototype.reverse
   *    3. array.prototype.join
   * 
   * Can even be done on one line
   */
  return str.split(``).reverse().join(``);
}

//capitalize: should return the input in all-caps
// Example: "this is a string" => "THIS IS A STRING"
function capitalize(str) {
  return str.toUpperCase();
}

module.exports = {
  reverseString,
  capitalize
};