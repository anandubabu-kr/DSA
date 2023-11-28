// Sample code to perform I/O:

process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
  stdin_input += input; // Reading input from STDIN
});

process.stdin.on("end", function () {
  main(stdin_input);
});

function main(input) {
  // process.stdout.write("Hi, " + input + ".\n");       // Writing output to STDOUT
  let three = "Fizz";
  let fives = "Buzz";
  let [n, testcases] = input.split("\n");
  n = Number(n);

  // console.log('ts : ', typeof (n), n, testcases)
  let i = 0;
  // let [n,]
  while (i < n) {
    let range = Number(testcases.split(" ")[i]);
    // console.log(range,typeof(range))
    let num = 1;
    let t3 = "";
    let t5 = "";
    while (num <= range) {
      let out = `${num}`;
      if (num % 5 == 0) {
        out = fives;
      }
      if (num % 3 == 0) {
        out = three;
        if (num % 5 == 0) {
          out += fives;
        }
      }
      console.log(out);
      num++;
    }
    i++;
  }
}

// Warning: Printing unwanted or ill-formatted data to output will cause the test cases to fail

// Write your code here
