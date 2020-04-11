let isBalancedBracketAlgo = () => {
    //use stack to  store all opening brackets and pop stack, if closing found to see if balances
    //at the end if stack is not empty that means given expr is not balanced
    console.log("see if a string is balanced or not");
    let exp = '[()]{}{[()()]()}';
    let openBr = '{[(';
    let closeBr = ')]}';
    let exp_arr = exp.split('');
    let st = [];
    let tp = '';
    let isBalanced = false;
    let cur = '';
    for (let i = 0; i < exp_arr.length; i++) {
        tp = exp_arr[i];
        if (openBr.indexOf(tp) !== -1) {
            st.push(tp);
            // console.log(st);
        } else if (closeBr.indexOf(tp) !== -1) {
            cur = st.pop();
            // console.log('popped',cur,st)
        }
    }
    if (st.length === 0) isBalanced = true;
    isBalanced ? console.log('balanced', st) : console.log('not balanced', st);
}
module.exports = isBalancedBracketAlgo;
isBalancedBracketAlgo();