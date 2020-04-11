//generate all balances brackets
// N = 2 (()), ()()
// N = 3 ((())), (()()), (())(), ()(()), ()()()

"use strict"
let all = [];
let g_gen_balanced_brackets = (left, right, str) => {
    if (left == 0 && right == 0)
        all.push(str);
    if (left > 0)
        g_gen_balanced_brackets(left - 1, right + 1, str + "(");
    if (right > 0)
        g_gen_balanced_brackets(left, right - 1, str + ")");
}

module.exports = g_gen_balanced_brackets;
g_gen_balanced_brackets(2, 0, "");
console.log(all);
