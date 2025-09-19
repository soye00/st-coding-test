function solution(a, b) {
    let num1 = parseInt(String(a) + String(b));
    let num2 = parseInt(String(b) + String(a));

    return Math.max(num1, num2);
}