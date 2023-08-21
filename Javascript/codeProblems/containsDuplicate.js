//Input: nums = [1,2,3,1]
//Output: true


function containsDuplicate(nums) {
  let map = {}
  for (let num of nums) {
    if (num in map) {
      return true
    } else {
      map[num] = 1
    }
  }
  return false
}

console.log(containsDuplicate([1, 2, 3, 1]))
