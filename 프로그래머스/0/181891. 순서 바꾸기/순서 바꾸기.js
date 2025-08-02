function solution(num_list, n) {
    let back = num_list.slice(0,n);
    return [...num_list.slice(n,num_list.length), ...back];
}