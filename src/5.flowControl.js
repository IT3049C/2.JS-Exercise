/**
 * write a function that receives a number as its argument;
 *    if the number is divisible by 3, the function should return `fizz`;
 *    if the number is divisible by 5, the function should return `buzz`;
 *    if the number is divisible by 3 and 5, the function should return `fizzbuzz`;
 *    if the value was provided was a number but doesn't match any of those criteria, return the number as is.
 *    if no number was provided or if the value provided wasn't a number (hint: typeof), return false
 */
function fizzBuzz(num) {
  if(num % 3 == 0 && num % 5 == 0) {
    return `fizzbuzz`;
  }
  if(num % 3== 0 ) {
    return `fizz`;
  } 
  if(num % 5== 0 ) {
    return `buzz`;
  }
  if(typeof num !== `number`) {
    return false;
  }
  return num;
}

module.exports = {
  fizzBuzz
};