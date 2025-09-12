function solution(strArr) {
   return strArr.map((i,v)=> v%2==0? i.toLowerCase() : i.toUpperCase())
}