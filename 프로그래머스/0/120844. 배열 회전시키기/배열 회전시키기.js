const solution = (numbers,direction) => {
    let answer = new Array(numbers.length);
    numbers.forEach((num,i)=> {
        if(direction === "right"){
            answer[(i+1)%numbers.length] = num
        }else {
            answer[(i-1 + numbers.length)%numbers.length] = num
        }
    })
    return answer
}