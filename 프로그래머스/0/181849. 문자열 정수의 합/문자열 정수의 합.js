function solution(num_str) {
    var answer = num_str.split("");
    let sum = 0;
    for(let i=0; i<answer.length; i++){
        sum += parseInt(answer[i]);
    }
    return sum;
}