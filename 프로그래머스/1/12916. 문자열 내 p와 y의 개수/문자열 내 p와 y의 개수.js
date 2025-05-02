function solution(s){
    const regp = /p/gi;
    const regy = /y/gi;
    let a = s.match(regp);
    let b = s.match(regy);

    if (a === null && b === null) return true;
    if (a === null || b === null) return false;
    
    if(a.length !== b.length) return false;
    else return true;
}