function solution(a, b){
    let answer = [];
    if(a < b){
        for(let i = a; i <= b; i++) answer.push(i);
        console.log(answer);
    }
    if(a > b){
        for(let i = b; i <= a; i++) answer.push(i);
        console.log(answer);
    }
    if(a === b) answer.push(a); console.log(answer);
    return answer.reduce((a,b) => a + b,0);
}