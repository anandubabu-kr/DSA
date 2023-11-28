/**
 * 
 *
Given an array of integers, calculate the ratios of its elements that are positive,
 negative, and zero. Print the decimal value of each fraction on a new line with 
  places after the decimal.

Note: This challenge introduces precision problems. The test cases are scaled to 
six decimal places, though answers with absolute error of up to  are acceptable.
 */

function plusMinus(arr) {
  // Write your code here

  let positive = 0;
  let negative = 0;
  let zero = 0;
  const total = arr.length;

  arr.forEach((num) => {
    if (num < 0) {
      negative++;
    }
    if (num > 0) {
      positive++;
    }
    if (num === 0) zero++;
  });

  console.log(parseFloat(positive / total).toFixed(6));
  console.log(parseFloat(negative / total).toFixed(6));
  console.log(parseFloat(zero / total).toFixed(6));
}
