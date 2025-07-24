function solution(my_string) {
    return my_string.split('').filter(str => /\d/.test(str))
        .map(Number)
        .reduce((a, b) => a + b, 0);
}