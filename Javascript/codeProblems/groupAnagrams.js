//Input: strs = ["eat","tea","tan","ate","nat","bat"]
//Output: [["bat"],["nat","tan"],["ate","eat","tea"]]


function groupAnagrams(strs) {
  let map = new Map()
  for (let str of strs) {
    let s = str.split("").sort().join("")
    if (!map.has(s)) map.set(s, [])
    map.get(s).push(str)
  }
  console.log(map.values())

  let groupAnagrams = Array.from(map.values())
  return groupAnagrams
}

console.log(groupAnagrams(strs = ["eat", "tea", "tan", "ate", "nat", "bat"]))
