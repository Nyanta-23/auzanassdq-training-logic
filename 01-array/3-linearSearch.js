function linearSearch(search, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (search == arr[i]) {
      return arr[i];
    } else {
      arr[i + 1];
    }
  }
}

console.log(linearSearch(3, [8, 3, 9, 2, 5]));
console.log(linearSearch(4, [2, 6, 7, 4, 1]));
console.log(linearSearch(9, [2, 6, 7, 5, 1]));
console.log(linearSearch(7, [2, 6, 7, 5, 1]));