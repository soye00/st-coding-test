function solution(dot) {
    var answer = 0;
    let x = dot[0];
    let y = dot[1];
    if (x>0) {
        if(y>0){
            answer = 1;
        }
        else if(y<0){
            answer = 4;
        }
    }
    if (x<0){
        if(y>0){
            answer = 2;
        }
        else if(y<0){
            answer = 3;
        }
    }
    return answer;
}