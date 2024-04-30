// 문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, solution을 완성해주세요.
// s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다.

// 제한 사항: str은 길이 1 이상인 문자열입니다

// EASY WAY using well known methods
function descendingStr1(string) {
  let sorted = string.split("").sort().reverse().join("");
  return sorted;
}

// HARD WAY with manual algorithm using insertionSort
function descendingStr2(string) {
  let sorted = string.split("");
  for (let i = 1; i < sorted.length; i++) {
    for (let j = i; j > 0; j--) {
      if (sorted[j - 1] < sorted[j]) {
        let temp = sorted[j - 1];
        sorted[j - 1] = sorted[j];
        sorted[j] = temp;
      }
    }
  }
  return sorted.join("");
}
