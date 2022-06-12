// map -

var arr = [1, 2, 3, 4, 5, 6];
console.log('Defined array', arr);

// USING Mapping : return a new array after making chenges in the values - pass each element to the arrar
// Syntax : arr.map((currentval,index,arr)=>{})

let mapparray = arr.map((num) => num * 2);

console.log('Map arrar : ', mapparray);

// USINNG filter : returns a new array of values that passes certai rule we set -  pass each element to the arrar
// Syntax : arr.filter((currentval,index,arr)=>{})

let filterarr = arr.filter((num) => {
  return num >= 4;
});

console.log('Filter arrar : ', filterarr);

// Foreach does a function on each element in an array -  returns nothing
// Syntax : arr.forEach((currentval,index,arr)=>{})

let foreacarr = [];
arr.forEach((num) => {
  foreacarr.push(num * 10);
});

console.log('Foreach arrar : ', foreacarr);
