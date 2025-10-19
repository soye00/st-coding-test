const solution = (my_string,indices) => {
    let remove = new Set(indices);
    let answer = [];
    for(let i = 0; i < my_string.length; i++){
        if( !remove.has(i)){
            answer.push(my_string[i]);
        }
    }
    return answer.join('');
}