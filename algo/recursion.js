function recursion(n) {
  console.log(n);
  //base case
  if (n === 1) {
    return 1;
  }
  //recurse
  return n + recursion(n - 1);
}

recursion(10);
