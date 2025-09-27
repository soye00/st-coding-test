const solution = (price,money,count) => {
    let NM = 0;
    for(let i=1; i<=count; i++) NM += price*i;
    return NM > money ? NM - money : 0;
}