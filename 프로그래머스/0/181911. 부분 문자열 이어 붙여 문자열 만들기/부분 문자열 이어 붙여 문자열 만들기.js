function solution(my_strings, parts) {
    var answer = '';
    for(let i = 0; i < parts.length; i++){
        let [start,end] = parts[i];
        let str = my_strings[i].slice(start,end+1);
        answer += str;
    }
    return answer;
}