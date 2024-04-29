function count_characters(string) {
  let counts = {};
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (counts[char]) {
      counts[char]++;
    } else {
      counts[char] = 1;
    }
  }
  return counts;
}

function count_characters2(string) {
  let counts = {};
  let strArr = string.split("");
  strArr.forEach((x) => {
    counts[x] = (counts[x] || 0) + 1;
  });

  return counts;
}

let counted = count_characters2("spartan");
console.log(counted);
