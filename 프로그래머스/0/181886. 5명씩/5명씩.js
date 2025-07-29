function solution(names) {
    return names.filter((st,i)=>{
        if(i%5 === 0) return st
    })
}