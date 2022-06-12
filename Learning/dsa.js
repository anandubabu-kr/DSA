const arr = [3, 3, 3, 3, 3, 3];
arr.sort();
var count = 1;
var last = arr.length;
var big = arr[arr.length - 1];
var indexoftop = arr.indexOf(big);
var counts = last - indexoftop;
console.log(counts, big, indexoftop);
process.exit();
while (arr[arr.length - 2] === arr[arr.length - 1]) {
  count += 1;
  arr.pop();
}

var str = 'Hello world !';

console.log(str.replace(/[a-zA-Z]/g, 'Xx'));
