function solution(a, m, k) {
    let pairs=[]
    let xset=new Set()
    for(let i=0; i<a.length; i++){
        let sub=a.slice(i,m+i)
        let obj={}
        if(sub.length>1){
            for(let j=0; j<sub.length; j++){
                let key=k-sub[j]
                let objKeys=Object.keys(obj)
                let objValues=Object.values(obj)
                if(key!==sub[j] && objKeys.indexOf(key)===-1 && objValues.indexOf(key)===-1){
                    obj[key]=sub[j]
                    xset.add(key.toString()+'_'+sub[j].toString())
                }
            }
        }
    }
    // console.log(xset)
    return xset.size
}
