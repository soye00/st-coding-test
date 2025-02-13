function solution(numbers) {
    let sum = 0;
    for(var i = 0; i < numbers.length; i++){
        sum += numbers[i];
    }
    return parseInt(sum/numbers.length*10)/10;
}