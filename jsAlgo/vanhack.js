function test1() {
    const undoRedo = object => {
        let historySetDel = []
        let historyUndo = []
        let permissibleUndos = ['set', 'del']

        const initSet = (key, value, type, isInit) => {
            if (type === undefined) historySetDel.push({'call': 'set', key, value, isInit})
            object[key] = value
        }

        if (object !== undefined) {
            for (let k in object) {
                initSet(k, object[k], undefined, true)
            }
        }
        return {
            history: historySetDel,
            historyUndo,
            set: (key, value, type) => initSet(key, value, type),
            get(key) {
                return object[key]
            },
            del(key, type) {
                if (type === undefined) historySetDel.push({'call': 'del', key, value: object[key]})
                delete object[key]
            },
            undo() {
                let lastOperation = historySetDel[historySetDel.length - 1]
                if (lastOperation === undefined || lastOperation === null) {
                    throw new Error('there is no operation in undo')
                    return
                }
                if (lastOperation !== undefined) {
                    if (lastOperation.isInit === true) {
                        throw new Error('there is no operation in undo')
                        return
                    }
                }
                let popped = historySetDel.pop()
                if (permissibleUndos.indexOf(lastOperation.call) === -1) return

                let what2undo = historySetDel[historySetDel.length - 1] //actual operation command
                let {key, value, call} = what2undo.isInit === true ? popped : what2undo
                if (call === 'set') {
                    if (object[key] !== undefined) this.del(key, 'del')
                    if (object[key] === undefined) this.set(key, value, 'set')
                } else if (call === 'del') {
                    this.set(key, value, 'set')
                }
                historyUndo.push({'call': 'undo', lastOperation})
            },
            redo() {
                if (historyUndo.length === 0) {
                    throw new Error('there is no operation in undo')
                }
                let what_was_done = historyUndo[historyUndo.length - 1].lastOperation
                let {key, value, call} = what_was_done
                if (call === 'set' && value !== undefined) {
                    this.set(key, value)
                }
                if (call === 'del') {
                    this.del(key)
                }
                historyUndo.pop()
            }
        };
    };
    let obj = {
        x: 1,
        y: 2
    }
    let unRe = undoRedo(obj)
    unRe.del('x');
    unRe.undo();
//     unRe.redo();
    console.log('final object', obj)
    console.log('history', unRe.history, unRe.historyUndo)
}

function test2() {
    // Context
    // The health record system that we’re working with requires code that will translate objects, each representing the data from a single visit by a patient, into a specially-formatted string containing multiple lines.
    //
    //     The first line of each patient’s data starts with a ">" and is followed by an eight-character patient identifier. The subsequent lines of that patient’s data each represent visits by that patient, start with a "+", and are followed by three fields that are pipe-delimited:
    //
    // the date of a patient’s visit (in YYYY-MM-DD format)
    // whether or not the patient has paid any outstanding bills for that visit (Y if they have, N if they have not)
    // a comma-delimited list of numeric codes that represent treatments the patient received
    // So, a JSON representation of the following patients:
    //
    //
    //     [{
    //         patientId: "PI-31415",
    //         visitDate: "2018-06-09",
    //         paid: true,
    //         treatmentCodes: [41524, 9810, 33179]
    //     },
    //         {
    //             patientId: "RQ-15509",
    //             visitDate: "2018-05-31",
    //             paid: false,
    //             treatmentCodes: [2251]
    //         },
    //         {
    //             patientId: "PI-31415",
    //             visitDate: "2018-06-04",
    //             paid: false,
    //             treatmentCodes: []
    //         }]
    // would be correctly represented in the transfer data format as:
    //
    //     >PI-31415
    // +2018-06-04|N|
    // +2018-06-09|Y|41524,9810,33179
    // >RQ-15509
    // +2018-05-31|N|2251
    // Task
    // In this challenge, we need to extend the capabilities of code written by another developer. This code already implements converting that patient data to and from the string data format for a single visit by a single patient; we need to modify it so that it can perform those tasks for multiple visits by multiple patients.
    //
    //     The data format that we’re using requires that patients must be sorted in alphabetical order of patient ID (so “AC-20153” comes before “AC-31401”, and both come before “AD-09248”), and that visits by a patient must be sorted in chronological order.
    //
    //     Also, there is a known bug in the existing code base, specifically around some patient records which either don't have any treatment codes associated with their visit, or don't have a treatmentCodes property; either condition is valid, but it can currently cause the deserialization code to crash.
    //
    //     We would like you to modify this code base so that it serializes and deserializes data for multiple patients, translating an array of objects into a string, and back. It should be able to correctly handle patients without treatment codes as well.
    //
    //     Specifications
    // serialize(patientData)
    // Parameters
    // patientData: Array<Object> - An array of patient data objects which need to be serialized into a string.
    //
    //     Return Value
    // String - A serialized string representing the patient data passed in.
    //
    // deserialize(patientData)
    // Parameters
    // patientData: String - A serialized strings which needs to be deserialized into objects.
    //
    //     Return Value
    // Array<Object> - An array of deserialized objects representing the patient data passed in.
    //
    // PatientData Schema
    // Properties
    // patiendId: String
    //
    // visitDate: String
    //
    // paid?: Boolean
    //
    // treatmentCodes?: Array<Number>

    function serialize(patientData) {
        let delim = '|'
        let visits = []

        patientData
            .sort((a, b) => {
                return new Date(a.visitDate) - new Date(b.visitDate)
            })
            .sort((a, b) => a.patientId.localeCompare(b.patientId))
        console.log('data', patientData)
        let master = ''
        let lastPatientId = ''
        for (let p of patientData) {
            let {patientId, visitDate, paid, treatmentCodes} = p
            let isLastRepeating = patientId === lastPatientId
            let str = ''
            str = isLastRepeating ? '' : `>${patientId + '\n'}`
            str += `+${visitDate + delim}${paid ? 'Y' + delim : 'N' + delim}${treatmentCodes.join(',')}`
            if (!isLastRepeating) lastPatientId = patientId
            visits.push(str)
        }
        console.log('concatenated', visits.join('\n'))
        return visits.join('\n');
    }

    function deserialize(patientString) {
        const line = patientString.split(">");
        let data = []
        console.log('line', line)
        for (let i of line) {
            if (i === '') continue
            let arr = i.split('\n').map(x => x.trim()).filter(x => x != '')
            const [pid, ...visits] = arr
            for (let visit of visits) {
                console.log('visits', visit)
                let [date, paid, codes] = visit.split('|')
                console.log(visit, date, paid, codes)
                let obj = {
                    patientId: pid,
                    visitDate: date.replace('+', '').trim(),
                    paid: paid.trim() === 'Y' ? true : false,
                    treatmentCodes: codes.length > 0 ? codes.split(',').map(x => Number(x)):[]
                }
                data.push(obj)

            }
        }
        console.log(data)
    }

    // serialize(
    //     [
    //         {
    //             patientId: 'RQ-15509',
    //             visitDate: '2018-06-03',
    //             paid: true,
    //             treatmentCodes: [22631]
    //         },
    //         {
    //             patientId: 'PI-31415',
    //             visitDate: '2018-06-09',
    //             paid: false,
    //             treatmentCodes: [2251]
    //         },
    //         {
    //             patientId: 'JR-76353',
    //             visitDate: '2018-06-17',
    //             paid: false,
    //             treatmentCodes: [9525, 84267]
    //         }
    //     ]
    // )
    //
    // serialize([{
    //     patientId: "PI-31415",
    //     visitDate: "2018-05-31",
    //     paid: true,
    //     treatmentCodes: [41524, 9810, 33179]
    // }])
    // serialize([{
    //     patientId: "RQ-15509",
    //     visitDate: "2018-06-09",
    //     paid: false,
    //     treatmentCodes: [2251]
    // }])
    // serialize([
    //     {
    //         patientId: "PI-31415",
    //         visitDate: "2018-05-31",
    //         paid: true,
    //         treatmentCodes: [41524, 9810, 33179]
    //     },
    //     {
    //         patientId: "RQ-15509",
    //         visitDate: "2018-06-09",
    //         paid: false,
    //         treatmentCodes: [2251]
    //     }])


// >PI-31415+2018-05-31|Y|41524,9810,33179>RQ-15509+2018-06-09|N|2251' to deeply equal '>PI-31415\n+2018-05-31|Y|41524,9810,33179\n>RQ-15509\n+2018-06-09|N|2251

    deserialize(`>NG-24524
+2018-06-02|Y|
+2018-06-05|N|5542,11052`)

//     deserialize(`>PI-31415
// +2018-05-22|Y|9942,8210,5524
// +2018-06-09|N|2251`)
//     deserialize(`>PI-31415
// +2018-05-31|Y|41524,9810,33179`)
    // expected [ { patientId: 'PI-31415',
    //     visitDate: '2018-06-09',
    //     paid: false,
    //     treatmentCodes: [ 2251 ] } ] to deeply equal [ { patientId: 'PI-31415',
    //     visitDate: '2018-06-09',
    //     paid: false,
    //     treatmentCodes: [ 2251 ] },
    //     { patientId: 'RQ-15509',
    //         visitDate: '2018-05-22',
    //         paid: true,
    //         treatmentCodes: [ 9942, 8210, 5524 ] } ]
    //
    // deserialize(`>PI-31415
    // +2018-06-09|N|2251
    // >RQ-15509
    // +2018-05-22|Y|9942,8210,5524`)
    // deserialize(">PI-31415\n+2018-05-31|Y|41524,9810,33179"),
    //     [{
    //         patientId: "PI-31415",
    //         visitDate: "2018-05-31",
    //         paid: true,
    //         treatmentCodes: [41524, 9810, 33179]
    //     }]

    // deserialize(
    //     `>RQ-15509
    //     +2018-06-09|N|2251`),
    //     [{
    //         patientId: "RQ-15509",
    //         visitDate: "2018-06-09",
    //         paid: false,
    //         treatmentCodes: [2251]
    //     }]

}

function test3() {
    // Write a function defaultArguments. It takes a function as an argument, along with an object containing default values for that function's arguments, and returns another function which defaults to the correct values.
    //
    // You cannot assume that the function's arguments have any particular names.
    //
    // You should be able to call defaultArguments repeatedly to change the defaults.
    //
    // defaultArguments(func, params)
    // Takes a function and object as arguments with default object values and returns another function
    //
    // Parameters
    // func: Function - A method with default values
    //
    // params: Object - An object containing values to be tested against func
    //
    // Return Value
    // Function - A function which defaults to the correct values
    //
    // function add(a,b) { return a+b;};
    //
    // var add_ = defaultArguments(add,{b:9});
    // add_(10); // returns 19
    // add_(10,7); // returns 17
    // add_(); // returns NaN
    //
    // add_ = defaultArguments(add_,{b:3, a:2});
    // add_(10); // returns 13 now
    // add_(); // returns 5
    //
    // add_ = defaultArguments(add_,{c:3}); // doesn't do anything, since c isn't an argument
    // add_(10); // returns NaN
    // add_(10,10); // returns 20
    // Hint: This problem requires using Function.prototype.toString() in order to extract a function's argument list.}

test2()