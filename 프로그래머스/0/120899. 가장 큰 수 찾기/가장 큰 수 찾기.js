function solution(array) {
    let answer = [];
    let a = [...array].sort((a, b) => b - a)[0];
    let b = array.indexOf(a);
    return answer = [a,b];
}