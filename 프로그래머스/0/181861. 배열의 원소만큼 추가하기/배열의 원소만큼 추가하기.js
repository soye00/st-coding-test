const solution = (arr) => {
    let X = [];
    arr.forEach(item => {
        X = X.concat(Array(item).fill(item));
    })
    return X;
}