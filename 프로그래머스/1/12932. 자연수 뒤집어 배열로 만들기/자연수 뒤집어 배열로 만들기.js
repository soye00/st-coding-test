function solution(n) {
    let answer = [...String(n)].map(Number).reverse();
    return answer;
}