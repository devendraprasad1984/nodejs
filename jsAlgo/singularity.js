data = '15931593950382205972005873020585729295767920094768300288002957529';
function singularity(data) {
    darr = data.split("")
    // let result=0
    // for(x in data){
    //     // console.log(data[x])
    //     result+=Number(data[x])
    // }
    let result = darr.reduce((acc, x) => acc + Number(x), 0)
    if (result.toString().split("").length > 1) {
        return singularity(result.toString())
    } else {
        return result
    }
}

console.log(singularity(data))



