data=[[1001,50],[1001,68],[1002,69],[1002,68],[1004,9],[1004,13],[1005,56],[1005,96],[1005,30],[1006,46],[1006,6],[1006,48],[1007,59],[1007,30],[1007,9],[1009,79],[1010,42],[1012,37],[1013,64],[1017,55],[1018,29],[1020,60],[1020,29],[1021,44],[1022,62],[1024,2],[1025,6],[1028,5],[1029,6],[1029,82]];
function maxsum(data){ // Do not edit line
    let maxObj={}
    for(d in data){
        let key=data[d][0]
        let val=data[d][1]
        if (maxObj[key]===undefined){
            maxObj[key]=0
            maxObj[key]=Math.max(maxObj[key],val)
        }
        else
            maxObj[key]=Math.max(maxObj[key],val)
    }
    let result=0
    for(v in maxObj){
        result+=maxObj[v]
    }
    return result;  // Do not edit line
}
res=maxsum(data);  // Do not edit line
console.log(res)


