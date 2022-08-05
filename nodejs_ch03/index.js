const { odd, even } = require("./var");
const checkNumber = require("./func");
// import checkNumber from "./func.mjs";
// import { odd, even } from "./var";

function checkStringOddEven(str) {
  if (str.length % 2) {
    return odd;
  }
  return even;
}

console.log(checkNumber(10));
console.log(checkStringOddEven("hello"));
