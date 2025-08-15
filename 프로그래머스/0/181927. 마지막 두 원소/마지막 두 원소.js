function solution(num_list) {
    let last = num_list[num_list.length - 1];
    let target = num_list[num_list.length - 2];
    return last > target ? num_list.concat(last - target): num_list.concat(last * 2);
}