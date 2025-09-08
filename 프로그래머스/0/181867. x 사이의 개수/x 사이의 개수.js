function solution(myString) {
    let result = myString.split('x');
    return result.map(str => str.length)
}