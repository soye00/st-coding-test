function solution(arr1,arr2) {
    let sum1 = arr1.reduce((a,b) => a+b,0);
    let sum2 = arr2.reduce((a,b) => a+b,0);

    return arr1.length !== arr2.length
        ? arr1.length > arr2.length ? 1 : -1
        : sum1 === sum2 ? 0 : sum1 > sum2 ? 1 : -1
}