const solution = (number) => {
    return number.split('').map(num => Number(num)).reduce((a, b) => a + b,0) % 9;
}