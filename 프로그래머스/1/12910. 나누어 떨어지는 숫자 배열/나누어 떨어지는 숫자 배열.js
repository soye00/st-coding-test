function solution(arr, divisor) {
    let answer = arr.filter(x => x % divisor === 0 )
    console.log(answer);
    return answer.length > 0 ? answer.sort((a, b) => a - b) : [-1]
}