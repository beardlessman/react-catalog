import { 
    RESET_HELLO
} from '../constants/User'

export function resetHello (hello) {
    return (dispatch) => {
        dispatch({
            type: RESET_HELLO,
            payload: hello
        })
    }
}