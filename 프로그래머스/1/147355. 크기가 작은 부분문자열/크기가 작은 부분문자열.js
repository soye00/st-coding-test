function solution(t, p) {
    var answer = 0;
    for(let i = 0; i < t.length; i++){
        let str = t.slice(i, i + p.length);
        if(str.length === p.length && Number(str) <= Number(p)){
            answer++;  }
        }
    return answer;

}