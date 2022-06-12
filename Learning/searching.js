/**
 * Binary search implementation self
 * - cheack if
 */

var arr = [1, 2, 3, 4, 5, 6];
var find = -2;

var mid;
var upp = arr.length - 1;
var low = 0;

while (true) {
  mid = parseInt(low + (upp - low) / 2);

  if (find == arr[mid]) {
    console.log(find, '  is at ', mid);
    break;
  } else if (low > upp) {
    console.log(find, ' is not in the given array !!!');
    break;
  }
  if (find < arr[mid]) {
    upp = mid - 1;
    // console.log(mid);
  } else if (find > arr[mid]) {
    low = mid + 1;
    // console.log(mid);
  }
}
