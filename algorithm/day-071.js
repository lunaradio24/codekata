function solution(today, terms, privacies) {
  // today를 8자리 숫자로 변환
  today = Number(today.split(".").join(""));
  let result = [];
  // 각 privacy를 돌면서
  privacies.forEach((privacy, index) => {
    const [collectedDate, privacyType] = privacy.split(" "); // 수집일과 약관 종류로 분리
    const [year, month, date] = collectedDate.split("."); // 수집일을 연,월,일로 분리
    const [_, term] = terms.find((term) => term.includes(privacyType)).split(" "); // 해당 약관 종류의 수집 기간을 terms에서 확인

    // 수집일에 수집기간을 더하는 작업
    let exp = [];
    exp[0] = Number(year);
    exp[1] = Number(month) + Number(term);
    exp[2] = Number(date) - 1;
    // 만료일이 '12월'을 넘으면 다음 해로 넘어가게끔
    if (exp[1] > 12) {
      exp[0] += 1;
      exp[1] -= 12;
    }
    // 만료일이 '0일'이 되면 전월 28일이 되게끔
    if (exp[2] === 0) {
      exp[1] -= 1;
      exp[2] = 28;
    }
    // 만료일의 '월'이 한자리 숫자면 앞에 0을 붙이게끔
    if (exp[1] < 10) {
      exp[1] = "0" + exp[1];
    }
    // 만료일의 '일'이 한자리 숫자면 앞에 0을 붙이게끔
    if (exp[2] < 10) {
      exp[2] = "0" + exp[2];
    }
    // console.log("today: ", today);
    // 만료일을 8자리 숫자로 변환
    expiryDate = Number(exp.join(""));
    // console.log("exp: ", expiryDate);
    // console.log("----------------");
    // 오늘이 만료일 이후면 result에 추가
    if (today > expiryDate) result.push(index + 1);
  });
  return result;
}

// today	terms	privacies	result
console.log(
  solution("2022.05.19", ["A 6", "B 12", "C 3"], ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"])
); // [1, 3]

console.log(
  solution(
    "2020.01.01",
    ["Z 3", "D 5"],
    ["2019.01.01 D", "2019.11.15 Z", "2019.08.02 D", "2019.07.01 D", "2018.12.28 Z"]
  )
); // [1, 4, 5]
