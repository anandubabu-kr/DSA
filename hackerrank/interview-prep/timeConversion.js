function timeConversion(s) {
  // Write your code here
  let hrs = Number(s.slice(0, 2));
  let min = Number(s.slice(3, 5));
  let sec = Number(s.slice(6, 8));
  const time = s.slice(-2);

  console.log(hrs, time, min, sec);

  if (time.toUpperCase() === "AM") {
    if (hrs === 12) {
      hrs = hrs - 12;
    }
  } else {
    if (hrs !== 12) {
      hrs = hrs + 12;
    }
  }

  if (hrs < 10) hrs = "0" + hrs;
  if (min < 10) min = "0" + min;
  if (sec < 10) sec = "0" + sec;
  console.log(hrs, min, sec);
  return hrs + ":" + min + ":" + sec;
}
