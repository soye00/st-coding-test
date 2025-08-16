function solution(n, control) {
    let ans = n;
    [...control].forEach(i => {
        if(i === "w") ans += 1 ;
        if(i === "a") ans -= 10;
        if(i === "s") ans -= 1 ;
        if(i === "d") ans += 10 ;
    })
    return ans;
}