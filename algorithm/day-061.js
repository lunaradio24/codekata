// Lotto 6/45(Hereinafter 'Lotto') is a popular lottery game where six numbers are drawn from a pool of 45 numbers.
// The lottery prize tiers are as follows1:

// Prize Tiers	Requirement
// 1	        All six numbers match
// 2	        Five numbers match
// 3	        Four numbers match
// 4	        Three numbers match
// 5	        Two numbers match
// 6 (no prize)	All other cases

// You bought a lotto ticket and have been waiting for the draw.
// However, your little brother drew scribbles all over your ticket so that you can't make out some of its numbers.
// After the draw, you wanted to figure out the highest prize you could have won as well as the lowest prize you could have got.
// Suppose that your ticket contained the following set of numbers: 44, 1, 0, 0, 31 25,
// where 0s represent the numbers on your ticket that you can't make out.
// If the six winning lottery numbers are 31, 10, 45, 1, 6, and 19, then the following shows the highest and the lowest prize you could have won.

// Winning numbers	31	10	    45	1	6	19	Result
// Highest prize	31	0→10	44	1	0→6	25	four matching numbers, wins the 3rd prize
// Lowest prize	31	0→11	44	1	0→7	25	two matching numbers, wins the 5th prize

// The order in which the numbers are drawn is irrelevant.
// Had the numbers you can't make out been 10 and 6, you could have won the 3rd prize.
// There are other possibilities where you could have won the 3rd prize. However, you would not have won a prize higher than the 3rd one.
// Had the numbers you can't make out been 11 and 7, you could have won the 5th prize.
// There are other possibilities where you could have won the 5th prize. However, you would not have won any prize (Tier 6).
// Suppose parameters lottos and winNums are given, where lottos is an array containing the numbers on your ticket and winNums an array containing the winning numbers.
// Please write a function solution that returns the highest prize tier and the lowest prize tier that you could have won.

function solution(lottos, winNums) {
  const matched = lottos.filter((num) => winNums.some((winNum) => winNum === num)).length;
  const covered = lottos.filter((num) => num === 0).length;
  const highestPrize = matched + covered === 0 ? 6 : 7 - matched - covered;
  const lowestPrize = matched === 0 ? 6 : 7 - matched;
  return [highestPrize, lowestPrize];
}

console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]));
