const solution = (num_list) => {
    let len = num_list.length;
    return len >= 11 ? num_list.reduce((a, b) => a + b, 0) : num_list.reduce((a, b) => a * b, 1);
}