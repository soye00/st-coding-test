function solution(my_string) {
    return [...my_string].map((_,i)=>[...my_string].slice(i,my_string.length).join('')).sort()
}