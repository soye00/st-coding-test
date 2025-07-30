function solution(my_string, is_prefix) {
    let arr = [...my_string];
    let prefix = arr.map((_,i)=>{
        return arr.slice(0,i+1).join("");
    })
    return prefix.includes(is_prefix) ? 1 : 0
}