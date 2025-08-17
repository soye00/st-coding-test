function solution(numlog){
    const logmap = {1 : "w", "-1" : "s", 10 : "d", "-10" : "a", };
    let ans = ''
    for(let i=0; i<numlog.length-1; i++){
        let diff = numlog[i+1] - numlog[i];
        ans += logmap[diff];
    }
    return ans;
}