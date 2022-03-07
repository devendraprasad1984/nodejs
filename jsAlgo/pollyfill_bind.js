//pollyfill is browser fallback or support for older browsers
//this concept is called currying
let name = {
    firstname: 'devendra',
    lastname: 'prasad'
}
let print = function (hometown, country) {
    console.log('welcome, ' + this.firstname + ' ' + this.lastname + ', ' + hometown,' => ', country)
}
let printBound1 = print.bind(name, 'delhi')
let printBound2 = print.bind(name, 'mumbai','india')
printBound1('india')
printBound2()

Function.prototype.customBind = function (...args) {
    //this would point to the function being called upon, print in this case
    let that = this,
        params = args.slice(1)
    // console.log(that, args)
    return function (...fargs) {
        // that.call(args[0], params)
        that.apply(args[0], params.concat(fargs))
    }
}

let printMeBound = print.customBind(name, 'delhi')
printMeBound('india')