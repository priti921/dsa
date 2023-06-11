function updateInventory(arr1, arr2) {
  let inventory = arr1.reduce((obj, [quan, item]) => {
    obj[item] = quan
    return obj
  }, {})


  for (let [quan, item] of arr2) {
    if (item in inventory) {
      inventory[item] += quan
    } else {
      inventory[item] = quan
    }
  }

  const updatedInventory = Object.entries(inventory).map(([item, quan]) => [quan, item])
  updatedInventory.sort((a, b) => a[1].localeCompare(b[1]))
  return updatedInventory

}


// Example inventory lists
var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"]
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"]
];

console.log(updateInventory(curInv, newInv))
