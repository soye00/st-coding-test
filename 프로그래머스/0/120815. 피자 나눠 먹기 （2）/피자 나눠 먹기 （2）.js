const solution = (n) => {
    let gcd = (a,b) => b===0 ? a : gcd(b,a % b);
    let lcm = (a,b) => (a * b) / gcd(a,b);
    return lcm(n, 6) / 6;
}