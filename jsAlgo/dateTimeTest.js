function pad(n, width, z) {
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

var format = 'dd/mm/yyyy hh:mm:ss'
// var format = 'yyyy-mm-dd hh:mm:ss'
var newFormatteDate = format;
var date_test = new Date(Date.now());
console.log(pad(date_test.getDate(), 2), pad(date_test.getMonth(), 2), pad(date_test.getFullYear(), 4));
console.log(pad(date_test.getDate(), 2) + '/' + pad(date_test.getMonth(), 2) + '/' + pad(date_test.getFullYear(), 4));
console.log(date_test.toLocaleDateString('en-US'));
console.log(date_test.toLocaleString());
console.log(date_test.toISOString());
console.log(date_test.toJSON().slice(0, 10).replace(/-/g, '/'))
newFormatteDate = newFormatteDate
    .replace('dd', pad(date_test.getDate(), 2))
    .replace('mm', pad(date_test.getMonth(), 2))
    .replace('yyyy', pad(date_test.getFullYear(), 2))
    .replace('hh', pad(date_test.getHours(), 2))
    .replace('mm', pad(date_test.getMinutes(), 2))
    .replace('ss', pad(date_test.getSeconds(), 2))
console.log("the formatted date of format is " + format + "->" + newFormatteDate)
// console.log(date_test.format('dd/mm/yyyy'));



// The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
function getDayName(dateString) {
    let dayName;
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let d = new Date(dateString)
    dayName=days[d.getDay()]
    return dayName;
}
console.log(getDayName('10/11/2009'), getDayName('11/10/2010'))