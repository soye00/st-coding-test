function solution(num, k) {
    const str = String(num);
    let result = str.indexOf(k);
    return result === -1 ? -1 : result + 1;
}