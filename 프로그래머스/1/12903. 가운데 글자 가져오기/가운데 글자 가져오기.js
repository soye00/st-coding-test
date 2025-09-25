const solution = (s) => {
    let cent = parseInt(s.length/2)
    return s.length % 2 === 0 ? s.slice(cent-1,cent+1) : s.slice(cent,cent+1);
}