function solution(s) {
    let answer = '';
    const a = s.split(' ').map(num => {
        return num.split('').map((num,i) => {
            return i % 2 ===0 ? num.toUpperCase() : num.toLowerCase();
        }).join('');
    });
    answer = a.join(' ');
    return answer;
}