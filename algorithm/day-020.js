// 함수 solution은 정수 n을 매개변수로 입력받습니다.
// n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요.
// 예를들어 n이 118372면 873211을 리턴하면 됩니다.
// 제한 조건: n은 1이상 8000000000 이하인 자연수입니다.

function toInvertedArray(number) {
  let quotient = number;
  let array = [];
  while (quotient > 0) {
    array.push(quotient % 10);
    quotient = Math.floor(quotient / 10);
  }
  return array;
}

function descendOrder(array) {
  for (let i = 1; i < array.length; i++) {
    for (let j = i; j > 0; j--) {
      if (array[j - 1] < array[j]) {
        let temp = array[j - 1];
        array[j - 1] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
}

function solution(natural_num) {
  let arr = toInvertedArray(natural_num);
  let sortedArr = descendOrder(arr);
  let descendNum = 0;
  for (let i = 0; i < sortedArr.length; i++) {
    descendNum = descendNum * 10 + sortedArr[i];
  }
  return descendNum;
}

console.log(solution(118372));
