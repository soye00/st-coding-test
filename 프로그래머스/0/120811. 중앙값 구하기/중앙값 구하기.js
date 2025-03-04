function solution(array) {
    var answer = array.sort((a,b) => a-b);
    return answer[(answer.length-1)/2]
}