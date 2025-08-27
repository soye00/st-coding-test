function solution(arr, delete_list) {
   const setlist = new Set(delete_list);
   return arr.filter(num => !setlist.has(num));
}