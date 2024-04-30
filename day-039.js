// 두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요.
// 배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다.
// 예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다.

// 제한 사항: 두 수는 1이상 1000000이하의 자연수입니다.

//두 수의 최대공약수(GCD; Greatest Common Divisor)를 구하는 함수
function getGCD(num1, num2) {
  let large_num = num1 > num2 ? num1 : num2;
  let small_num = num1 > num2 ? num2 : num1;
  let gcd = null;

  for (let n = small_num; n > 0; n--) {
    if (large_num % n === 0 && small_num % n === 0) {
      gcd = n;
      break;
    }
  }
  return gcd;
}

//두 수의 최소공배수(LCM; Least Common Multiple)를 구하는 함수
function getLCM(num1, num2) {
  let large_num = num1 > num2 ? num1 : num2;
  let small_num = num1 > num2 ? num2 : num1;
  let lcm = null;

  for (let n = large_num; n < large_num * small_num; n++) {
    if (n % large_num === 0 && n % small_num === 0) {
      lcm = n;
      break;
    }
  }
  return lcm;
}

function solution(num1, num2) {
  let large_num = num1 > num2 ? num1 : num2;
  let small_num = num1 > num2 ? num2 : num1;
  let gcd = null;
  let lcm = null;
  for (let n = small_num; n > 0; n--) {
    if (large_num % n === 0 && small_num % n === 0) {
      gcd = n;
      break;
    }
  }
  for (let n = large_num; n <= large_num * small_num; n++) {
    if (n % large_num === 0 && n % small_num === 0) {
      lcm = n;
      break;
    }
  }
  return [gcd, lcm];
}

console.log(solution(8, 12));

function getGCDfromArray(array) {
  array.sort();
  min = array[0];
  let gcd = 1;
  for (let n = 1; n <= min; n++) {
    let isDivided = 1;
    for (let i = 0; i < array.length; i++) {
      if (array[i] % n === 0) {
        isDivided *= 1;
      } else {
        isDivided *= 0;
        break;
      }
    }
    if (isDivided === 1) {
      gcd = n;
    }
  }
  return gcd;
}
