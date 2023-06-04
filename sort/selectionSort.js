function selectionSort(arr) {
  //loops for each elem in array
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    //loop for finding min val on each iteration
    for (let j = i + 1; j < arr.length; j++) {
      //sets the minimum value
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    //adds the minimum value in order ( lest to great)
    let temp = arr[min];
    arr[min] = arr[i];
    arr[i] = temp;
  }
  return arr;
}

console.log(
  selectionSort([2, 2, 312, 4, 345, 34, 1, 12, 34, 534, 123, 142, 1])
);
