import Axios from "axios-observable";
import {retry} from 'rxjs'

// Axios.post('https://jsonplaceholder.typicode.com/posts/1', {
//     firstName: 'Fred',
//     lastName: 'Flintstone'
// }).pipe(
//     retry(3)
// ).subscribe(
//     response => console.log(response),
//     error => console.log(error)
// );


Axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .pipe(retry(3))
    .subscribe(
        response => console.log(response),
        error => console.log(error)
    );

//
// Axios.request({
//     method: 'post',
//     url: '/user/12345',
//     data: {
//         firstName: 'Fred',
//         lastName: 'Flintstone'
//     }
// });
//
//
// Axios.request({
//     method:'get',
//     url:'http://bit.ly/2mTM3nY',
//     responseType:'stream'
// })
//     .subscribe(response => {
//         response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
//     });
