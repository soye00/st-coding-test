function solution(my_string) {
    var str = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K',
        'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
        'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r'
        ,'s', 't','u','v','w','x','y','z'];
    const answer = new Array(str.length).fill(0);
        for (let i = 0; i < str.length; i++) {
            for(let j = 0; j < my_string.length; j++) {
                if(str[i] === my_string[j]) answer[i]++;
            }
        }
    return answer;
}