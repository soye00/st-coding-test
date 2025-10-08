const solution = (my_string,m,c) =>{
    let str = [];
    for (let i = 0; i < my_string.length; i += m){
        str.push(my_string.slice(i, i+m));
    }
    // console.log(str);
    return str.map((i)=>i[c-1]).join('');
}