// 정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.

function solution(n) {
  let sum = 0;
  for (let div = 1; div ** 2 <= n; div++) {
    if (n % div === 0) sum = sum + div + n / div;
    if (n === div ** 2) sum = sum - div;
  }
  return sum;
}
