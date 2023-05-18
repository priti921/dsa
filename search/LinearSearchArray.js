function LinearSearchArray(Array, needle) {
  for (let i = 0; i < Array.length; i++) {
    if (Array[i] === needle) {
      return true;
    }
  }
  return false;
}

//passed1
console.log(LinearSearchArray([1, 2, 3, 4, 5], 4));
console.log(LinearSearchArray([1, 2, 3, 4, 5], 6));
