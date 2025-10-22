const solution = (arr, frag) => {
    const X = [];
    arr.forEach((n,i)=>{
        frag[i] ? X.push(...Array(n*2).fill(n)) : X.splice(-n)
    })
    return X
}
