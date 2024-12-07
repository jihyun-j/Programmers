const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().split("\n");

let [a, b] = input[0].split(" ").map(Number);
let c = Number(input[1]);

let totalMins = a * 60 + b + c;
totalMins = totalMins % 1440
let hour = parseInt(totalMins / 60);
let min = totalMins % 60;

console.log(hour + " " + min);
