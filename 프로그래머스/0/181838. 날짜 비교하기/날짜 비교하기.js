const solution = (date1, date2) => {
    let [year1, month1, day1] = date1;
    let [year2, month2, day2] = date2;
    if(year1 < year2) return 1;
    if(year1 <= year2 && month1 < month2) return 1;
    if(year1 <= year2 && month1 <= month2 && day1 < day2) return 1;
    return 0;
}