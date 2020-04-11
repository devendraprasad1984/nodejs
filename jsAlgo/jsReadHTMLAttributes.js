//js to read html attribues
let gcontext={};
window.processData=function(p1,p2){
    let {id,name,data}=gcontext;
    console.log('in processData',p1,p2,id,name,data);
}

let tags=document.getElementsByTagName('dpTag');
for(let i=0;i<tags.length;i++){
    // let attrs=curTag.getAttributeNames();
    let curTag=tags[i], fnname='';
    let id=curTag.getAttribute('id');
    let name=curTag.getAttribute('name');
    fnname=curTag.getAttribute('fn');
    let data=curTag.getAttribute('data');
    gcontext={id,name,data};
    if(fnname===null) continue;
    let fn2execute=new Function(fnname);
    fn2execute();
    // window[fnnamex[0]].apply(params,data);
    // eval(fnname);
}



//everything is an object is js, eg class is also an object
class X {
    method1(){
        console.log("1");
    }
    method2(){
        this['method1']();
        console.log("2");
    }
}
let x  = new X();
x['method2']();
