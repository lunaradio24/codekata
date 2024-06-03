//Find the year of birth when given the age as of 2024
function birthyear(age) {
  if (0 < age && age <= 120) {
    return 2024 - age;
  } else {
    alert("Please put integers between 0 and 120");
  }
}
