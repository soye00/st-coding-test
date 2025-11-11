function solution(i, j, k) {
  let count = 0;
  const target = String(k);

  for (let num = i; num <= j; num++) {
    const str = String(num);
    for (const ch of str) {
      if (ch === target) count++;
    }
  }

  return count;
}