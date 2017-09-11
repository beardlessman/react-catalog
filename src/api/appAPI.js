import axios from 'axios';
const root = 'https://jsonplaceholder.typicode.com/posts?userId=1';

export function getData(actionRequest, actionSuccess, actionError, ) {
    actionRequest();

    axios.get(root)
        .then(
            function(request){
                actionSuccess(request)
            })
        .catch(
            function(request){
                actionError(request)
            });
}