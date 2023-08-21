//assuming the array is sorted
function BinarySearchList(Array, needle) {
  let front = 0;
  let end = Array.length - 1;

  while (front <= end) {
    //find the mid index
    let mid = Math.floor((front + end) / 2);

    if (Array[mid] === needle) {
      return true;
    } else if (Array[mid] < needle) {
      front = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return false;
}
BinarySearchList([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 9);
console.log(BinarySearchList([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 9));
