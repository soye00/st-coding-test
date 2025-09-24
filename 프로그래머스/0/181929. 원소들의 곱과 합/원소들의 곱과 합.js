const solution = (num_list) => {
    let add = num_list.reduce((acc, cur) => acc + cur, 0);
    let mult = num_list.reduce((acc, cur) => acc * cur, 1);
    return mult < add**2 ? 1 : 0;
}