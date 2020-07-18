// Given a time in -hour AM/PM format, convert it to military (24-hour) time.
//
//     Note: Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 24-hour clock. Noon is 12:00:00PM on a 12-hour clock, and 12:00:00 on a 24-hour clock.
//
//     Function Description
//
// Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.
//
//     timeConversion has the following parameter(s):
//
// s: a string representing time in  hour format
// Input Format
//
// A single string  containing a time in -hour clock format (i.e.:  or ), where  and .
//
//     Constraints
//
// All input times are valid
// Output Format
//
// Convert and print the given time in -hour format, where .
//
//     Sample Input 0
//
// 07:05:45PM
// Sample Output 0
//
// 19:05:45


let t = "12:45:54PM";
// 12:45:54PM=>12:45:54
// 12:40:22AM=>00:40:22
let isPM = t.indexOf("PM") !== -1 ? true : false;
t = t.replace('PM', '').replace('AM', '');
let tarr = t.split(":");
let hh = tarr[0];
hh = !isPM && hh === '12' ? '00' : hh;
let mm = tarr[1];
let ss = tarr[2];
hh = isPM && hh!=='12' ? parseInt(hh) + 12 : hh;
console.log(hh + ':' + mm + ':' + ss)




