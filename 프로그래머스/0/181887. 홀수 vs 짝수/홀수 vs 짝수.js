const solution = (num_list) => {
    let a = num_list.filter((_,i)=>i%2===0).reduce((a,b)=> a+b,0);
    let b = num_list.filter((_,i)=>i%2!==0).reduce((a,b)=> a+b,0);
    return a > b ? a : b;
}