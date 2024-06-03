// 머쓱이는 태어난 지 11개월 된 조카를 돌보고 있습니다.
// 조카는 아직 "aya", "ye", "woo", "ma" 네 가지 발음과 네 가지 발음을 조합해서 만들 수 있는 발음밖에 하지 못하고 연속해서 같은 발음을 하는 것을 어려워합니다.
// 문자열 배열 babbling이 매개변수로 주어질 때, 머쓱이의 조카가 발음할 수 있는 단어의 개수를 return하도록 solution 함수를 완성해주세요.

function solution(babbling) {
  const words = ["aya", "ye", "woo", "ma"];
  let answer = 0;
  for (let givenWord of babbling) {
    for (const word of words) {
      //1. word 단어를 포함하지 않으면 아래 과정 스킵. 다음 단어로 패스.
      if (!givenWord.includes(word)) continue;
      //2. word와 첫번째로 일치하는 substring을 잘라내고 "-"로 대체. 남은 부분을 givenWord로 재할당.
      //""가 아닌 "-"로 대체하는 이유는 ""로 대체하면 그 앞과 뒤가 연결되어 원래는 없던, 발음가능한 단어가 생길 수도 있기 때문.
      givenWord = givenWord.replaceAll(word, "-");
      //3. "--"를 포함한다면, 같은 발음이 연속되었다는 뜻이므로 다음 단어로 패스.
      if (givenWord.includes("--")) break;
      //4. 모든 "-"와 "+"를 제외한 남은 부분이 "" 라면 words 단어들로 조합할 수 있는 단어라는 뜻. answer++ 하고 다음 단어로 패스.
      if (givenWord.replaceAll("-", "").replaceAll("+", "") === "") {
        answer++;
        break;
      }
      //5. "-"를 "+"로 바꿔준다. 3번 과정에서 서로 다른 두 개의 단어로 만들어진 "--"가 생기는 상황을 피하기 위함.
      givenWord = givenWord.replaceAll("-", "+");
    }
  }
  return answer;
}

console.log(solution(["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"]));
