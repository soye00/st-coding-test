function solution(num_list) {
    let res = num_list.map(num => {
        let count = 0;
        while(num>1){
            num = num %2 === 0 ? num / 2 : (num -1) /2;
            count++;
        }
        return count;
    });
    return res.reduce((a, b) => a + b,0);
}
