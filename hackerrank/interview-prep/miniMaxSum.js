/**
 * 
 *  Given five positive integers, find the minimum and maximum values that
 *  can be calculated by summing exactly four of the five integers.
 *  Then print the respective minimum and maximum values as a single 
 *  line of two space-separated long integers.

Example

The minimum sum is  and the maximum sum is . The function prints
 */

function miniMaxSum(arr) {
  // Write your code here
  const len = arr.length;
  const sortedArr = arr.sort((a, b) => a - b);
  let min = 0;
  let max = 0;

  for (let i = 0; i < len; i++) {
    if (i > 0) {
      max += sortedArr[i];
    }
    if (i < len - 1) {
      min += sortedArr[i];
    }
  }

  console.log(min, max);
}
