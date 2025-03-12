function solution(s) {
    const re = /^\d+$/;
    return re.test(s) && (s.length === 4 || s.length === 6);
}