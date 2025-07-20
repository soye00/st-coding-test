function solution(str) {
    return str.replace(/[a-zA-Z]/g, char =>
        char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
    );
}