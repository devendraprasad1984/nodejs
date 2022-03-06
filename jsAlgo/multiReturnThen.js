const IPromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Hello");
    },300);
});

//Output : Hello World
IPromise
    .then(value=>{return value + " World"})
    .then(v=>v)
    .then(v=>{console.log(v)})
    .catch(err => {console.log(err)});