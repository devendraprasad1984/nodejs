function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */
    let re = /^([aeiou]).*\1$/
    return re;
}

console.log(regexVar().test("abcdo")) //false
console.log(regexVar().test("abcda")) //true

function regexVar2() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.',
     * followed by one or more letters.
     */
    let re = new RegExp('^(Mr|Mrs|Ms|Dr|Er)(\\.)([a-zA-Z])*$')
    return re;
}
let re=regexVar2()
console.log("reg exp2",re)
console.log(!!'Mr.X'.match(re),!!'Dr#Joseph'.match(re),!!'Er.Dr'.match(re))

function regexVar3() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match ALL occurrences of numbers in a string.
     */
    let re =new RegExp(/[0-9]+/gm);
    return re;
}
console.log("regex3")
re=regexVar3()
console.log('102, 1948948 and 1.3 and 4.5'.match(re))

function reverseString(s) {
    try {
        s = s.split("").reverse().join("")
    } catch (e) {
        console.log(e.message)
    } finally {
        console.log(s)
    }
}

reverseString("1234")

console.log("template literals")

function sides(literals, ...expressions) {
    // console.log(literals,expressions)
    let A = expressions[0]
    let P = expressions[1]
    let exp = Math.sqrt(P * P - 16 * A)
    let s1 = (P + exp) / 4
    let s2 = (P - exp) / 4
    return [s2, s1]
}

[s1, s2] = [10, 14].sort();
const [x, y] = sides`The area is: ${s1 * s2}.\nThe perimeter is: ${2 * (s1 + s2)}.`;
console.log((s1 === x) ? s1 : -1);
console.log((s2 === y) ? s2 : -1);

console.log("bitwise AND checks")

//find max a&b<k in S=[1,2,3,4,5] such that a<b
function getMaxLessThanK(n, k) {
    let S = []
    for (let i = 0; i < n; i++) {
        S.push(i + 1)
    }
    let max = 0
    for (let i = 0; i < S.length; i++) {
        for (let j = 0; j < i; j++) {
            if(S[j]>S[i])
                break
            let op = S[i] & S[j]
            if ((op < k)) {
                max = op > max ? op : max
            }
        }
    }
    return max
}

console.log(getMaxLessThanK(345, 163))

