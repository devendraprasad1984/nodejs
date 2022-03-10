//cpp varname=modify_a_variable => convert it to java var moodifyAVariable and java var to CPP var

function convertVarName(input) {
    let newStr = ''
    let isVarCpp = input.indexOf('_') !== -1,
        _found = false
    for (let i = 0; i < input.length; i++) {
        let char = input[i]
        if (isVarCpp) {
            if (char === '_') {
                _found = true
                continue
            } else if (_found) {
                newStr += char.toUpperCase()
                _found = false
                continue
            }
        } else {
            if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
                newStr += '_' + char.toLowerCase()
                continue
            }
        }
        newStr += char
    }
    return newStr
}

console.log('modify_a_variable===modifyAVariable', "modifyAVariable"===convertVarName('modify_a_variable'))
console.log('modifyAVariable===modify_a_variable', "modify_a_variable"===convertVarName('modifyAVariable'))
