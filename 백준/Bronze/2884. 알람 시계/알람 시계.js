const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().split("\n");

let hour = Number(input[0].split(" ")[0]);
let min = Number(input[0].split(" ")[1]);

if (min < 45) {
  hour = hour - 1;
  min = min + 15;

  if (hour < 0) {
    hour = 23;
  }
} else {
  min = min - 45;
}

console.log(`${hour} ${min}`);
