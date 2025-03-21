function solution(numbers) {
    var answer = [];
    const myset = new Set();
    for(let i=0; i<numbers.length; i++){
        const a = numbers[i];
        for(let j = 0; j < numbers.length; j++){
            const b = numbers[j];
            if(i !== j) myset.add(a+b);
        }
    }
    answer = [...myset];
    return answer.sort((a,b) => a-b);
}