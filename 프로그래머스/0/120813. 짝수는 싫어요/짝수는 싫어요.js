function solution(n) {
    var answer = [];
    for(let i=1; i<=n; i = i+2){
        answer.push(i);
    }
    return answer.sort((a,b) => a-b);
}
