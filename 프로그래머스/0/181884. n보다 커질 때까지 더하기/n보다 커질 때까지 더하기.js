function solution(numbers, n) {
    let answer = 0;
    for( let num of numbers ) {
        answer += num;
        if(answer > n) break;
    }
    return answer;
}