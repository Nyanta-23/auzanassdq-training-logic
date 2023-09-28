function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(sumArray([8, 3, 9, 2, 5]));
console.log(sumArray([1, 1, 1, 1, 1]));
console.log(sumArray([0, 0, 0]));
console.log(sumArray([5, 7]));
console.log(sumArray([8]));