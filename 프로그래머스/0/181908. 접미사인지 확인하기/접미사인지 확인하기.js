const solution = (my_string,is_suffix) => {
    let arr = Array.from(my_string,(_,i)=> my_string.slice(i));
    console.log(arr)
    return arr.includes(is_suffix) ? 1 : 0;
}