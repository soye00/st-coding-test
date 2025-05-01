function solution(numbers) {
    let a = [0,1,2,3,4,5,6,7,8,9];
    let diff = a.filter(item => !numbers.includes(item));

    return diff.reduce((a, b) => a + b,0);
}