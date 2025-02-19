function solution(money) {
    var answer = [0,0];
    let a = parseInt(money/5500);
    let b =  money - (5500*a);
    answer[0] = a;
    answer[1] = b;
    return answer;
}