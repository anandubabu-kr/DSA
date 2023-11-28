/**
 * There is a string, , of lowercase English letters that is
 *  repeated infinitely many times. Given an integer, , 
 * find and print the number of letter a's in the first 
 *  letters of the infinite string.
Example

The substring we consider is , the first  characters of
 the infinite string. There are  occurrences of a in the substring.
 */

function repeatedString(s, n) {
  // Write your code here
  //  a in number of time in the substring
  const counta = s.length - s.split("a").join("").length;

  const sLength = s.length;

  let count = parseInt(n / sLength) * counta;
  console.log(count);

  const leftChars = n % sLength;
  console.log(leftChars);

  for (let i = 0; i <= leftChars; i++) {
    console.log(s[i]);
    if (s[i] === "a") count++;
  }

  return count;
}
