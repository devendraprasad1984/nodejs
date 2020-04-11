//js to read html attribues
let global = {};
global.getApiFunc = function (bnd, th, url,fld) {
    fld=fld||[];
    fld=fld.indexOf('~')!==-1 ? fld.split('~') :fld;
    // console.log('fields set is ',fld);
    let x = th.innerHTML;
    th.innerHTML = 'Loading Data, plz wait...';
    fetch(url).then(res => res.json()).then(res => {
        document.getElementById(bnd).innerHTML =th+'<br/>'+ res.map(x => `<li>${x[fld[0]]} | ${x[fld[1]]}  | ${x[fld[2]]}</li>`).join('');
        th.innerHTML = x;
    });
}
window.processData = function (p1, p2) {
    // console.log('p1-p2',p1,p2);
    // console.log(gcontext);
    let {id, name, data, autopull, updateWithData, replaceWithApi} = gcontext;
    let xdata=JSON.parse(data);
    data = xdata['data'];
    fields=xdata['fields'];
    let buttonPull = (autopull === 'false' && replaceWithApi !== null ) ? `<button onclick="global.getApiFunc('${id}',this,'${replaceWithApi}','${fields.join('~')}')">Fetch ${name}</button>` : '';
    let oldVal = buttonPull + '<br/>' + document.getElementById(id).innerHTML + `<br/>`;
    if (replaceWithApi !== null && autopull === 'false') {
        document.getElementById(id).innerHTML = oldVal + `<br/>`;
    } else if (replaceWithApi !== null && autopull === 'true') {
        global.getApiFunc(id,this,replaceWithApi,fields);
    }  else {
        document.getElementById(id).innerHTML = oldVal + (updateWithData==='true') ? data.map(x => `<li>${x}</li>`).join('') : '';
    }
}

let tags = document.getElementsByTagName('dpTag');
for (let i = 0; i < tags.length; i++) {
    // let attrs=curTag.getAttributeNames();
    let curTag = tags[i];
    let id = curTag.getAttribute('id');
    let name = curTag.getAttribute('name');
    let fnname = curTag.getAttribute('fn');
    let data = curTag.getAttribute('data');
    let replaceWithApi = curTag.getAttribute('replaceWithApi');
    let updateWithData = curTag.getAttribute('updateWithData') || 'false';
    let autopull = curTag.getAttribute('autopull') || 'false';
    gcontext = {id, name, data, updateWithData, replaceWithApi, autopull};
    if (fnname === null) continue;
    let fn2execute = new Function(fnname);
    fn2execute.apply(this, gcontext || []);//see html for static params and gcontext is for dynamic params binding
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
