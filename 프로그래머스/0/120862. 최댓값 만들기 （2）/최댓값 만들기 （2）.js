function solution(numbers) {
    let answer = 0;
    let a = numbers.sort((a, b) => a - b);
    a[0]*a[1] > a[a.length-1]*a[a.length-2] ? answer = a[0]*a[1] : answer = a[a.length-1]*a[a.length-2]
    return answer;
}