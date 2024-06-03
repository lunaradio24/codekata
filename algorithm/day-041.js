// 문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 각 단어는 하나 이상의 공백문자로 구분되어 있습니다.
// 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.

// 제한 사항
// 문자열 전체의 짝/홀수 인덱스가 아니라, 단어(공백을 기준)별로 짝/홀수 인덱스를 판단해야합니다.
// 첫 번째 글자는 0번째 인덱스로 보아 짝수번째 알파벳으로 처리해야 합니다.

// 예시
// "try hello world"는 세 단어 "try", "hello", "world"로 구성되어 있습니다.
// 각 단어의 짝수번째 문자를 대문자로, 홀수번째 문자를 소문자로 바꾸면 "TrY", "HeLlO", "WoRlD"입니다.
// 따라서 "TrY HeLlO WoRlD" 를 리턴합니다.

// WAY1: easy way using for loop
function solution1(string) {
  let letters = string.split("");
  for (let i = 0, index = 0; i < letters.length; i++) {
    if (index % 2 === 0 && letters[i] !== "") {
      letters[i] = letters[i].toUpperCase();
      index++;
    } else if (index % 2 === 1 && letters[i] !== "") {
      letters[i] = letters[i].toLowerCase();
      index++;
    } else {
      index = 0;
    }
  }
  return letters.join("");
}

// WAY2: using .map() method
function solution2(string) {
  let words = string.split(" ");
  let modifiedWords = words.map((word) => {
    let letters = word.split("");
    let modifiedLetters = letters.map((letter, index) => {
      if (index % 2 === 0) return letter.toUpperCase();
      else return letter.toLowerCase();
    });
    return modifiedLetters.join("");
  });
  return modifiedWords.join(" ");
}
