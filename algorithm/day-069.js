// 지표     번호	   성격 유형
// 1번 	 라이언형(R),   튜브형(T)
// 2번 	 콘형(C),      프로도형(F)
// 3번 	 제이지형(J),   무지형(M)
// 4번	 어피치형(A),   네오형(N)

// 검사지에는 총 n개의 질문이 있고, 각 질문에는 아래와 같은 7개의 선택지가 있습니다.
// 매우 비동의
// 비동의
// 약간 비동의
// 모르겠음
// 약간 동의
// 동의
// 매우 동의

// 예를 들어, 어떤 한 질문에서 4번 지표로 아래 표처럼 점수를 매길 수 있습니다.
// 선택지	    성격 유형 점수
// 매우 비동의	 네오형 3점
// 비동의	    네오형 2점
// 약간 비동의	 네오형 1점
// 모르겠음	     어떤 성격 유형도 점수를 얻지 않습니다
// 약간 동의	 어피치형 1점
// 동의	        어피치형 2점
// 매우 동의	 어피치형 3점

// 검사 결과는 모든 질문의 성격 유형 점수를 더하여 각 지표에서 더 높은 점수를 받은 성격 유형이 검사자의 성격 유형이라고 판단합니다.
// 단, 하나의 지표에서 각 성격 유형 점수가 같으면, 두 성격 유형 중 사전 순으로 빠른 성격 유형을 검사자의 성격 유형이라고 판단합니다.

// 질문마다 판단하는 지표를 담은 1차원 문자열 배열 survey와
// 검사자가 각 질문마다 선택한 선택지를 담은 1차원 정수 배열 choices가 매개변수로 주어집니다.
// 이때, 검사자의 성격 유형 검사 결과를 지표 번호 순서대로 return 하도록 solution 함수를 완성해주세요.

function solution(survey, choices) {
  const forward = ["RT", "CF", "JM", "AN"];
  const reverse = ["TR", "FC", "MJ", "NA"];
  const point = [null, -3, -2, -1, 0, 1, 2, 3];
  let totalPoints = [0, 0, 0, 0];

  // survey의 질문 각각에 대해
  survey.forEach((indicator, index) => {
    const choice = choices[index];
    const forIndex = forward.indexOf(indicator);
    const revIndex = reverse.indexOf(indicator);
    // indicator가 forward에 포함되어 있으면
    if (forIndex > -1) {
      // 그 질문의 choice에 (해당하는 point)를 totalPoints의 forIndex에 추가
      totalPoints[forIndex] += point[choice];
    }
    // indicator가 reverse에 포함되어 있으면
    if (revIndex > -1) {
      // 그 질문의 choice에 (-1)*(해당하는 point)를 totalPoints의 revIndex에 추가
      totalPoints[revIndex] += -1 * point[choice];
    }
  });
  // 각 indicator의 점수가
  const result = totalPoints.map((points, index) => {
    // 0보다 크면 forward indicator의 뒷 글자
    if (points > 0) return forward[index][1];
    // 0보다 작거나 같으면 forward indicator의 앞 글자
    if (points <= 0) return forward[index][0];
  });

  return result.join("");
}

console.log(solution(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5])); // "TCMA"
console.log(solution(["TR", "RT", "TR"], [7, 1, 3])); //"RCJA"
