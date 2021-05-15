import {readFile} from "fs";

export default function getUsersFromFilefunction(req, res) {
    readFile(__dirname + "/data/" + "users.json", 'utf8',
        function (err, data) {
            let id = req.params.id
            let parseData = JSON.parse(data)
            let result = []
            if (id !== '*' && id !== '') {
                result = parseData['user' + id]
            } else {
                result = parseData
            }
            console.log('params', req.params, result)
            res.end(JSON.stringify(result));
        });
}
