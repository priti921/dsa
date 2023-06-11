//Input: nums = [2,7,11,15], target = 9
//Output: [0,1]
//Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

function twoSum(arr, target) {
  let map = new Map()

  for (let i = 0; i < arr.length; i++) {
    let diff = target - arr[i]

    if (map.has(diff)) return [map.get(diff), i]
    map.set(arr[i], i)
  }
  return [,]

}


console.log(twoSum([2, 7, 11, 15], 9))
