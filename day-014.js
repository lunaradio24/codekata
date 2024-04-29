// 정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.

function sumAlldivisors(natural_num) {
  let sum = 0;
  for (let n = 1; n <= Math.sqrt(natural_num); n++) {
    if (natural_num % n === 0 && n ** 2 !== natural_num) {
      sum += n + natural_num / n;
    } else if (natural_num % n === 0 && n ** 2 === natural_num) {
      sum += n;
    }
  }
  return sum;
}
