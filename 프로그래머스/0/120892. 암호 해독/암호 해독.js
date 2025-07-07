function solution(cipher, code) {
    const arr = [...cipher];
    const answer = arr.filter((c,i)=> (i+1)%code === 0).join('');

    return answer;
}