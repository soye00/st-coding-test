function solution(my_string, alp) {
    return my_string.split('').map(x => x.includes(alp) ? x.toUpperCase() : x).join('');
}