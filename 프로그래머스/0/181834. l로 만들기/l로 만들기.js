function solution(myString) {
    let pre = /[a-l]/;
    return [...myString].map(item => item.match(pre)? "l" : item).join("");
}