function solution(numbers) {
    var max_one = numbers[0];
    var max_two = numbers[1];

    for(var i=1;i < numbers.length;i++){
        if(max_one < numbers[i]){
            max_two = max_one;
            max_one = numbers[i];
        }
        if(max_two < numbers[i] && max_one > numbers[i]){
            max_two = numbers[i];
        }

    }
    return max_one * max_two;
}