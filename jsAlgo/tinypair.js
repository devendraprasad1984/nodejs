function solution(a, b, k) {
    let pairs=[]
    for(let x=0, y=b.length-1; x<a.length-1, y>0; x++, y--){
        let pair=a[x].toString()+b[y].toString()
        if(pair<k)
            pairs.push(pair)
    }
    console.log(pairs)
    return pairs.length
}
