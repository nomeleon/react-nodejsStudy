import { odd, even } from "./var";
// const { odd, even } = require("./var");

function checkOddOrEven(num) {
  if (num % 2) {
    // 홀수면
    return odd;
  }
  return even;
}

export default checkOddOrEven;
