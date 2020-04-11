// #
// ##
// ###
// ####
// #####
// ######

let n=6;
let s2='';
for(let i=1;i<=n;i++){
    let s1=' '.repeat(n-i);
    s1+='#'.repeat(i)
    s2+=s1+'\n';
}
console.log(s2);

