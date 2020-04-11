let newSet = []
let findAllCombination01 = (str, i) => {
    let sArr = str.split('')
    let ln = sArr.length;
    while (i < ln && sArr[i] != '?') i += 1; //find index of until ? is found
    if (i == ln) { newSet.push(sArr.join('')); return; }
    sArr[i] = 0; findAllCombination01(sArr.join(''), i);
    sArr[i] = 1; findAllCombination01(sArr.join(''), i);
}
module.exports = findAllCombination01;
findAllCombination01('10??', 0);
console.log('new set is', newSet)

