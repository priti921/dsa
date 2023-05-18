function BubbleSortList(Array) {
  for (let i = 0; i < Array.length; i++) {
    //compare left index to right index
    for (let j = 0; j < Array.length - 1 - i; j++) {
      //swap
      if (Array[j] > Array[j + 1]) {
        const temp = Array[j];
        Array[j] = Array[j + 1];
        Array[j + 1] = temp;
      }
      //log the current state of the array
      console.log(`Pass ${i + 1}, Comparison ${j + 1}: [${Array}]`);
    }
  }
  return Array;
}

console.log(BubbleSortList([9, 8, 7, 4, 1, 5, 6, 23, 3432, 2432, 25, 352, 2]));
