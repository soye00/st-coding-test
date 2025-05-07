function solution(x) {
    const a = x.toString().split('').map(i => parseInt(i));
    const b = a.reduce((a, b) => a + b,0);
    return x % b === 0
}