const readline = require("node:readline");
const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const rand_num = Math.floor(Math.random() * 100) + 1;
let count = 0;
let guess = 0;
console.log("1~100 중 랜덤 숫자를 하나 정하였습니다. 맞춰보세요.");

while (guess !== rand_num) {
  guess = rl.question("");
  console.log(`입력한 숫자: ${guess}`);
  count += 1;
  if (guess > rand_num) {
    console.log("UP");
  } else if (guess < rand_num) {
    console.log("DOWN");
  } else {
    console.log("CORRECT");
    console.log("숫자 입력한 횟수: " + count + "회");
  }
}
