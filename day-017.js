// 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요.
// 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

function toReversedArr(natural_num) {
  let reversed_arr = [];
  let quotient = natural_num;
  while (quotient / 10 > 0) {
    reversed_arr.push(quotient % 10);
    quotient = Math.floor(quotient / 10);
  }
  return reversed_arr;
}
