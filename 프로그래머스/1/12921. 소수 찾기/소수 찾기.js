function solution(n){
    let res = 0;
    for(let i = 2; i <= n; i++){
        let isPrime = 1;
        const sq = Math.floor(Math.sqrt(i));
        for(let j = 2; j <= sq; j++){
            if(i % j ===0){
                isPrime = 0;
                break;
            }
        }
        if(isPrime){
           res++;
        }
    }
    return res
}