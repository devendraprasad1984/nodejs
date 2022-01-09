const omit = (key, obj) => {
    const {[key]:gone, ...rest} = obj
    console.log(obj, gone, key, rest)
    return rest
}


console.log(omit('bar', {foo: 1, bar: 2}))