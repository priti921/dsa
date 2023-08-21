function sym(...arrays) {
  let combinedArr = arrays.reduce((accm, arr) => {
    let uniq = arr.filter((el, index) => arr.indexOf(el) === index)
    return accm.concat(uniq)
  })

  let freq = {}
  for (let num of combinedArr) {
    if (num in freq) {
      delete freq[num]
    } else {
      freq[num] = 1
    }
  }

  let symArr = Object.keys(freq).map(Number)
  return symArr
}


console.log(sym([1, 2, 3], [5, 2, 1, 4]))

