function solution(n){
    let answer = [...String(n)].map(Number).reduce((a, b) => a + b);
    return answer;
}