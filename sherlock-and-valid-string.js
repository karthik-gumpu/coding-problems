function isValid(s) {
  // Write your code here
  const map = {};
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      map[s[i]]++;
    } else {
      map[s[i]] = 1;
    }
  }

  let skips = 0;
  console.log(map);
  const chars = Object.values(map);
  let ref = chars[0];

  for (let j = 0; j < chars.length; j++) {
    count += chars[i];
    const diff = Math.abs(ref - chars[j]);
    console.log(diff, skips);
    if (diff != 0) {
      if (diff > 1) {
        return "NO";
      }
      skips++;
      if (skips > 1) {
        return "NO";
      }
      if (ref == null) {
      }
      ref = Math.min(ref, chars[j]);
    }
  }
  return "YES";
}

console.log(isValid("aabbccddeefghi"));
