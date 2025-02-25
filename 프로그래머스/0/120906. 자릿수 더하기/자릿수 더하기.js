function solution(n){
    n = n + '';
    const answer = n.split('')
        .map(item => Number(item))
        .reduce((a, b) => a + b,0);
    return answer;
}