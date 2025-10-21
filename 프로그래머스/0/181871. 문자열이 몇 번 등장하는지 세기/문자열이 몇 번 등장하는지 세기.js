const solution = (myString,pat) => {
    let answer = 0;
    for(let i = 0; i <= myString.length - pat.length ; i++) {
        let arr = myString.slice(i, i+pat.length);
        if (arr === pat) answer++;
    }
    return answer;
}