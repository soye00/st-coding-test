function solution(hp) {
   let answer = 0;
    let a = parseInt(hp/5);
    let b = (hp%5);
    let c = parseInt(b/3);
    let d = (b%3);
    answer = Number(a + c + d);
   return answer;
}