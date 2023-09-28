function convertValue(val) {
  if (val >= 90 && val <= 100) {
    return "A";
  } else if (val >= 80 && val <= 89) {
    return "B";
  } else if (val >= 70 && val <= 79) {
    return "C";
  } else {
    return "D";
  }
}

console.log(convertValue(98));
console.log(convertValue(85));
console.log(convertValue(34));
console.log(convertValue(76));