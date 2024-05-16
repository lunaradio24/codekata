// Suppose that you want to count the number of cases where a prime number is generated
// when adding 3 numbers among the given numbers.
// Given an array nums containing numbers as the parameter,
// write a function solution to return the number of cases where a prime number is generated
// when adding 3 different numbers among nums.

function solution(nums) {
  const len = nums.length;
  let numPrimes = 0;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      for (let k = j + 1; k < len; k++) {
        const sum = nums[i] + nums[j] + nums[k];
        let isPrime = true;
        for (let n = 2; n <= Math.sqrt(sum); n++) {
          if (sum % n === 0) {
            isPrime = false;
            break;
          }
        }
        if (isPrime === true) numPrimes++;
      }
    }
  }
  return numPrimes;
}

console.log(solution([1, 2, 7, 6, 4]));
