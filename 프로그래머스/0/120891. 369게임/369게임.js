const solution = (order) => {
    let result = 0;
    [...String(order)].forEach((i)=>{
        // console.log(i);
        if(i==='3' || i==='6' || i==='9') result+=1;
    })
    return result;
}