// 자연수 n이 매개변수로 주어집니다.
// n을 3진법 상에서 앞뒤로 뒤집은 후, 이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.

// 제한사항: n은 1 이상 100,000,000 이하인 자연수입니다.
// 예시: input: 45    =>  return: 7
//      input: 125	=>  return: 229

function solution(natural_num) {
  let ternary = 0;
  let decimal = 0;

  //STEP1: decimal -> ternary
  let quotient = natural_num;
  for (let n = 0; quotient > 0; n++) {
    ternary = ternary + (quotient % 3) * Math.pow(10, n);
    quotient = (quotient - (quotient % 3)) / 3;
  }

  //STEP2: reverse the ternary
  let reversed = Number(String(ternary).split("").reverse().join(""));

  //STEP3: ternary -> decimal
  quotient = reversed;
  for (let n = 0; quotient > 0; n++) {
    decimal = decimal + (quotient % 10) * Math.pow(3, n);
    quotient = (quotient - (quotient % 10)) / 10;
  }

  return decimal;
}
