// (function(){
//     var obj={
//         foo:'foo',
//         bar: function(){
//             console.log(this.foo)
//         }
//     }
//     let fn=obj
//     let fn1=obj.bar
//     fn.bar()
//     fn1()
//     let fn2=obj.bar.bind(obj)
//     fn2()
// })()


// for (var i = 0; i < 5; i++) {
//     (function (j) {
//         setTimeout(function () {
//             console.log(j) //here its global scope
//         }, 1000)
//     })(i) //IIFE
// }
