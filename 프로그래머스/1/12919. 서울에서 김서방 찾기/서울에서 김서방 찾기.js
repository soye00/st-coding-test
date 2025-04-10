function solution(seoul) {
    const reg = /Kim/;
    let index = seoul.findIndex(i => reg.test(i));
    return `김서방은 ${index}에 있다`;
}