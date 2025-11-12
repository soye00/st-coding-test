const solution = (intStrs, k, s, l) =>
  intStrs.map(str => parseInt(str.slice(s, s + l))).filter(num => num > k);