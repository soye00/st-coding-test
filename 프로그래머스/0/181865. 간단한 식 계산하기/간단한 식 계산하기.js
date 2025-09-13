const solution = (binomial) => {
   let [stra,ob,strb] = binomial.split(' ');
   let a = parseInt(stra);
   let b = parseInt(strb);
   return ob==='+' ? a + b : ob==='-' ? a - b : a * b;
}