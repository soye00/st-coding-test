function solution(n) {
    let num = n.toString().split('').map(Number);
    return parseInt(num.sort((a, b) => b - a).join(''));

}