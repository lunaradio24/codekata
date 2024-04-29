// 문제 1. 주어진 문자열을 뒤집어서 반환하는 함수를 작성해주세요!
// 예를 들어, 문자열 'spartan'이 주어지면, 결과는 다음과 같아야 합니다: 'natraps'*
function reverseStr(string) {
  let reversed = "";
  for (let i = 0; i < string.length; i++) {
    reversed = string[i] + reversed;
  }
  return reversed;
}
// console.log(reverseStr("spartan"));

// 문제 2. 주어진 문자열을 요약하는 함수를 작성해주세요!
// 예를 들어, 문자열 ‘aaabbbc’가 주어지면 결과는 다음과 같아야 합니다: ‘a3/b3/c1’
// 또한, 문자열 ‘ahhhhz’가 주어지면 결과는 다음과 같아야 합니다: ‘a1/h4/z1’

function countChar(string) {
  let counts = {};
  let strArr = string.split("");
  strArr.forEach((x) => {
    counts[x] = (counts[x] || 0) + 1;
  });

  return counts;
}

function summariseStr(string) {}

console.log(summariseStr("aaabbbc"));

// 문제 3. 주어진 숫자가 소수인지 아닌지 판별하는 함수를 작성해주세요.
