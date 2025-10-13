const Prime = (num) => {
    if(num < 2) return false;
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0) return false;
    }
    return true;
}

const solution = (n) => {
    let arr = Array.from({length: n}, (_, k) => k + 1);
    console.log(arr);
    let composite = arr.filter((n)=> !Prime(n)&& n!==1);
    console.log('composite',composite);
    return composite.length;

}