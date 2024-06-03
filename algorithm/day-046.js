// 1478 → "one4seveneight"
// 234567 → "23four5six7"
// 10203 → "1zerotwozero3"
// 이렇게 숫자의 일부 자릿수가 영단어로 바뀌어졌거나, 혹은 바뀌지 않고 그대로인 문자열 s가 매개변수로 주어집니다.
// s가 의미하는 원래 숫자를 return 하도록 solution 함수를 완성해주세요.

function solution(s) {
  const NUMBERS = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  let result = s;
  NUMBERS.forEach((number, index) => {
    if (result.includes(number)) result = result.replaceAll(number, index);
  });

  return Number(result);
}

console.log(solution("one4seveneight")); // 1478
console.log(solution("23four5six7")); // 234567
console.log(solution("2three45sixseven")); //	234567
console.log(solution("123")); // 123
