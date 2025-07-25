function solution(num_list, n) {
    let list = [];
    num_list.map((num,i)=> {
        if (i>=(n-1)) list.push(num)
    })
    return list;
}