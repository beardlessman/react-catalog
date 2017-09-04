import { 
    INPUT_FILTER_TEXT,
    CHANGE_INPUT_TEXT
} from '../constants/Filter'

export function inputFilterText (filterText) {
    return (dispatch) => {
        dispatch({
            type: INPUT_FILTER_TEXT,
            payload: filterText
        })
    }
}

export function changeInputText (filterText) {
    return (dispatch) => {
        dispatch({
            type: CHANGE_INPUT_TEXT,
            payload: filterText
        })
    }
}
