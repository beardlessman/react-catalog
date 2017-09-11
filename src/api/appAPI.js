import axios from 'axios';
const root = 'https://jsonplaceholder.typicode.com/posts?userId=1';

export function getData() {
    return new Promise(function (resolve, reject) {
        axios.get(root)
            .then(function (request) {
                resolve(request);
            })
            .catch(function () {
                reject();
            });
    });
}