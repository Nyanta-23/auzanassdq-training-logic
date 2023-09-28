function reverseArray(arr) {
  const newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }

  return newArr;
}

console.log(reverseArray([1, 4, 6, 7]));
console.log(reverseArray([7, 4, 2, 1]));
console.log(reverseArray([5]));