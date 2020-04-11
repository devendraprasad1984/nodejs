//js to read html attribues
let gcontext={};
window.processData=function(p1,p2){
    let {id,name,data,updateWithData,replaceWithApi}=gcontext;
    if(updateWithData==='true'){
        let oldVal=document.getElementById(id).innerHTML+`<br/>`;
        data=JSON.parse(data)['data'];
        console.log('in processData',p1,p2,id,name,updateWithData,data,replaceWithApi);
        if(replaceWithApi!==null){
            fetch(replaceWithApi).then((res)=>res.json()).then((res)=>{
                console.log(res);
                data=res;
                document.getElementById(id).innerHTML=oldVal+ data.map(x=>`<li>${x.name} - ${x.email}</li>`).join('');
            });
        }else{
            document.getElementById(id).innerHTML=oldVal+ data.map(x=>`<li>${x}</li>`).join('');
        }
        // document.getElementById(id).innerHTML=data   ;
    }
}

let tags=document.getElementsByTagName('dpTag');
for(let i=0;i<tags.length;i++){
    // let attrs=curTag.getAttributeNames();
    let curTag=tags[i], fnname='';
    let id=curTag.getAttribute('id');
    let name=curTag.getAttribute('name');
    fnname=curTag.getAttribute('fn');
    let data=curTag.getAttribute('data');
    let replaceWithApi=curTag.getAttribute('replaceWithApi');
    let updateWithData=curTag.getAttribute('updateWithData');
    gcontext={id,name,data,updateWithData,replaceWithApi};
    if(fnname===null) continue;
    let fn2execute=new Function(fnname);
    fn2execute();
    // window[fnnamex[0]].apply(params,data);
    // eval(fnname);
}


//
// //everything is an object is js, eg class is also an object
// class X {
//     method1(){
//         console.log("1");
//     }
//     method2(){
//         this['method1']();
//         console.log("2");
//     }
// }
// let x  = new X();
// x['method2']();
