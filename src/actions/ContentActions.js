import { 
    CHANGE_HELLO_REQUEST, 
    CHANGE_HELLO_SUCCESS,
    CHANGE_HELLO_ERROR
} from '../constants/Content'
import axios from 'axios' // ajax library


export function changeHello (hello) {
    return (dispatch) => {
        dispatch({
            type: CHANGE_HELLO_REQUEST,
            payload: hello
        })

        axios
            .get('https://raw.githubusercontent.com/rodricios/autocomplete/master/autocomplete/big.txt')
            .then(function() {
                setTimeout(() => {
                    dispatch({
                        type: CHANGE_HELLO_SUCCESS,
                        payload: hello
                    })
                }, 400)
            })
            .catch(function() {
                setTimeout(() => {
                    dispatch({
                        type: CHANGE_HELLO_ERROR,
                        payload: hello
                    })
                }, 400)
            })
    }
}