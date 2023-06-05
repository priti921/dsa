function validAnagram(s, t) {
  if (s.length !== t.length) return null;

  let freq = Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    freq[s[i].charCodeAt(0) - "a".charCodeAt(0)]++;
    freq[t[i].charCodeAt(0) - "a".charCodeAt(0)]--;
  }

  for (let i = 0; i < freq.length; i++) {
    if (freq[i] !== 0) return false;
  }

  return true;
}

console.log(validAnagram("ate", "tee"));
