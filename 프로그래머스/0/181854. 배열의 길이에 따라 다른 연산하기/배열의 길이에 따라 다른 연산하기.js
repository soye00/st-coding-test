function solution(arr, n) {
    return arr.map((num, i) => {
        if (arr.length % 2 === 0) {      
            return i % 2 !== 0 ? num + n : num;
        } else {
            return i % 2 === 0 ? num + n : num;
        }
    });
}