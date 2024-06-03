// 어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다.
// 예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다. "z"는 1만큼 밀면 "a"가 됩니다.
// 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.

// 제한 조건
// 공백은 아무리 밀어도 공백입니다.
// s는 알파벳 소문자, 대문자, 공백으로만 이루어져 있습니다.
// s의 길이는 8000이하입니다.
// n은 1 이상, 25이하인 자연수입니다.

//ASCII CODE: A-Z: 65-90, a-z: 97-122, [space]: 32
function solution(s, n) {
  let sArr = s.split("");
  for (let i = 0; i < s.length; i++) {
    const code = sArr[i].charCodeAt(0);
    if (code === 32) {
      // do nothing
    } else if (65 <= code && code <= 90 && 90 < code + n) {
      sArr[i] = String.fromCharCode(code + n - 26);
    } else if (97 <= code && code <= 122 && 122 < code + n) {
      sArr[i] = String.fromCharCode(code + n - 26);
    } else {
      sArr[i] = String.fromCharCode(code + n);
    }
  }
  return sArr.join("");
}

function solution2(s, n) {
  let result = s
    .split("")
    .map((char) => {
      const code = char.charCodeAt(0);
      if (code === 32) {
        return char;
      } else if (65 <= code && code <= 90 && 90 < code + n) {
        sArr[i] = String.fromCharCode(code + n - 26);
      } else if (97 <= code && code <= 122 && 122 < code + n) {
        sArr[i] = String.fromCharCode(code + n - 26);
      } else {
        return String.fromCharCode(code + n);
      }
    })
    .join("");
  return result;
}

console.log(solution("z A   cX", 4));
