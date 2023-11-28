/*
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */

function sockMerchant(n, ar) {
  // Write your code here
  const count = {};
  let pair = 0;
  ar.forEach((element) => {
    count[element] = (count[element] || 0) + 1;
  });

  // console.log(count);
  for (let key in count) {
    // console.log(parseInt(count[key] / 2));
    pair += parseInt(count[key] / 2);
  }

  return pair;
}
