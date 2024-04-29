// 양의 정수 x에 대한 함수 f(x)를 다음과 같이 정의합니다.
// x보다 크고 x와 비트가 1~2개 다른 수들 중에서 제일 작은 수
// 예를 들어, f(2) = 3 입니다.
// 제한사항:
// 1 ≤ numbers의 길이 ≤ 100,000
// 0 ≤ numbers의 모든 수 ≤ 10^15

function toBinary(natural_number, num_bit) {
  let binary_num = "";
  let quotient = natural_number;

  for (let n = 0; n < num_bit; n++) {
    if (quotient % 2 !== 0) {
      binary_num = "1" + binary_num;
    } else {
      binary_num = "0" + binary_num;
    }
    quotient = Math.floor(quotient / 2);
  }

  return binary_num;
}

function solution(natural_number) {
  let x = natural_number;
  let x_bin = toBinary(natural_number, 15);
  let result = x;
  while (true) {
    let count = 0;
    for (let i = 0; i < 15; i++) {
      if (x_bin[i] !== toBinary(result, 15)[i]) {
        count++;
      }
    }
    if (0 < count && count < 3) {
      break;
    } else {
      result++;
    }
  }
  return result;
}
