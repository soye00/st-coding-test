function solution(n, m) {
    let a = [];
    let answer = [];
    for(let i=0; i<=(m*n) ;i++){
        if(n % i === 0 && m % i === 0 ){
            a.push(i);
        }
    }
    let b = a[a.length-1];
    let c = b * (n / b) *  (m / b) ;
    answer[0] = b;
    answer[1] = c;
    return answer;
}